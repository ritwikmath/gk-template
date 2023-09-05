import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faChartLine, faPenNib } from '@fortawesome/free-solid-svg-icons';
import UserModal from '../components/user-details';
import UserAddModal from '../components/user-add';
import Iconify from '../components/iconify';
import Scrollbar from '../components/scrollbar';
// sections
import { UserListHead, UserListToolbar } from '../sections/@dashboard/user';
// mock
import USERLIST from '../_mock/user';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'team', label: 'Team', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'isVerified', label: 'Verified', alignRight: false },
  { id: 'word', label: 'Word', alignRight: false },
  { id: 'action', label: 'Action'},
];

// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, { filterName, filterTeam }) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  let filteredUsers = stabilizedThis.map((el) => el[0]);
  if (filterName) {
    filteredUsers = filter(filteredUsers, (_user) => _user.name.toLowerCase().indexOf(filterName.toLowerCase()) !== -1);
  }

  if (filterTeam) {
    filteredUsers = filter(filteredUsers, (_user) => _user.team.toLowerCase().indexOf(filterTeam.toLowerCase()) !== -1);
  }

  return filteredUsers;
}

export default function UserPage() {
  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState([]);

  const [orderBy, setOrderBy] = useState('name');

  const [filterName, setFilterName] = useState('');
  const [filterTeam, setFilterTeam] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openDetails, setOpenDetails] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [openUpdate, setOpenUpdate] = useState(null);
  const [actionUser, setActionUser] = useState(null);
  
  const handleDetailsOpen = (user) => {
    if (openDetails) return;
    setUserDetails(user);
    setOpenDetails(true);
  };
  const handleDetailsClose = () => {
    setUserDetails(null);
    setOpenDetails(false)
  };

  const handleUpdateOpen = (user) => {
    if (openUpdate) return;
    console.log(user)
    setUserDetails(user);
    setOpenUpdate(true);
  };
  const handleUpdateClose = () => {
    setUserDetails(null);
    setOpenUpdate(false)
  };

  const handleOpenMenu = (event, user) => {
    setActionUser(user)
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setActionUser(null)
    setOpen(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const handleFilterByTeam = (event) => {
    setPage(0);
    setFilterTeam(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(USERLIST, getComparator(order, orderBy), { filterName, filterTeam });

  const isNotFound = !filteredUsers.length && !!filterName;

  return (
    <>
      <Helmet>
        <title> User | GK Academic </title>
      </Helmet>

      {openDetails && <UserModal user={userDetails} open={openDetails} handleClose={handleDetailsClose} />}
      {openUpdate && <UserAddModal user={userDetails} open={openUpdate} handleClose={handleUpdateClose} />}
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            User
          </Typography>
          <Button variant="contained" startIcon={<Iconify icon="eva:plus-fill" />} onClick={() => handleUpdateOpen(null)}>
            New User
          </Button>
        </Stack>

        <Card>
          <UserListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
            filterTeam={filterTeam}
            onFilterTeam={handleFilterByTeam}
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={USERLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { id, name, role, word, team, avatarUrl, isVerified } = row;
                    const selectedUser = selected.indexOf(name) !== -1;

                    return (
                      <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedUser}>
                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" paddingLeft="10px" alignItems="center" spacing={2}>
                            <Avatar alt={name} src={avatarUrl} />
                            <Typography variant="subtitle2" noWrap>
                              {name}
                            </Typography>
                          </Stack>
                        </TableCell>

                        <TableCell align="left">{team}</TableCell>

                        <TableCell align="left">{role}</TableCell>

                        <TableCell align="left">{isVerified ? 'Yes' : 'No'}</TableCell>

                        <TableCell align="left">
                          {
                            team.toLowerCase() === 'management' ?
                              <Typography variant='span'>N/A</Typography>
                              :
                              <>
                                <Typography variant='span'>{word}</Typography>
                                <Typography variant='span' sx={{ cursor: 'pointer', marginLeft: '10px', color: '#4381C1' }} onClick={() => handleDetailsOpen(row)}>
                                  <FontAwesomeIcon icon={faChartLine} />
                                </Typography>
                                <Typography variant='span' sx={{ cursor: 'pointer', marginLeft: '10px', color: '#0CA4A5' }}>
                                  <FontAwesomeIcon icon={faPenNib} />
                                </Typography>
                              </>
                          }
                        </TableCell>

                        <TableCell align="right">
                          <IconButton size="large" color="inherit" onClick={(e) => handleOpenMenu(e, row)}>
                            <Iconify icon={'eva:more-vertical-fill'} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            Not found
                          </Typography>

                          <Typography variant="body2">
                            No results found for &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Try checking for typos or using complete words.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={USERLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem onClick={() => handleUpdateOpen(actionUser)}>
          <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem sx={{ color: 'error.main' }}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}
