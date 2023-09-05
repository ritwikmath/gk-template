import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 650,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const UserModal = ({ user, open, handleClose }) => {
    const [startDate, setStartDate] = useState(dayjs().startOf("month"));
    const [endDate, setEndDate] = useState(dayjs(new Date()));
    const [loading, setLoading] = useState(false);

    const startDatehandle = (_newdate) => {
        setStartDate(dayjs(_newdate))
    }
    
    const endDateHandle = (_newdate) => {
        if (dayjs(_newdate).isBefore(startDate)) {
            setStartDate(dayjs(_newdate))
        }
        setEndDate(_newdate)
    }
    
    const resetDates = () => {
        setEndDate(dayjs(new Date()))
        setStartDate(dayjs().startOf("month"))
        fetchPerformenceData(startDate, endDate)
    }
    
    const fetchPerformenceData = async (startDate, endDate) => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }

    useEffect(() => {
        fetchPerformenceData(dayjs().startOf("month"), dayjs(new Date()))
    }, [])

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h3" component="h3" marginBottom="25px">
                    {user ? `${user.name}'s Performance` : ''}
                </Typography>
                <Box>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']} sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>
                            <DatePicker label="Start" value={startDate} maxDate={endDate} onChange={(newdate) => startDatehandle(newdate)} />
                            <DatePicker label="End" value={endDate} maxDate={dayjs(new Date())} onChange={(newdate) => endDateHandle(newdate)} />
                            <Typography sx={{
                                cursor: 'pointer',
                                color: '#046262'
                            }}
                            >
                                <FontAwesomeIcon
                                    icon={faArrowsRotate}
                                    onClick={resetDates}
                                />
                            </Typography>
                        </DemoContainer>
                    </LocalizationProvider>
                    <Button variant="contained" sx={{marginTop: "10px"}} onClick={() => fetchPerformenceData(startDate, endDate)}>Search</Button>
                </Box>
                {
                    loading ?
                        <Skeleton height="50px" count={5} /> :
                        <>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                            <Box marginTop="10px" sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                background: '#AEE0FE',
                                padding: '1rem',
                                borderRadius: '10px'
                            }}>
                                <Typography variant='span' fontWeight="bold">Order Count</Typography>
                                <Typography variant='span'>22</Typography>
                            </Box>
                            <Box marginTop="10px" sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                background: '#BBDDC9',
                                padding: '1rem',
                                borderRadius: '10px'
                            }}>
                                <Typography variant='span' fontWeight="bold">Word Count</Typography>
                                <Typography variant='span'>72000</Typography>
                            </Box>
                            <Box marginTop="10px" sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                background: '#EAA99A',
                                padding: '1rem',
                                borderRadius: '10px'
                            }}>
                                <Typography variant='span' fontWeight="bold">Failed</Typography>
                                <Typography variant='span'>2</Typography>
                            </Box>
                            <Box marginTop="10px" sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                background: '#FED686',
                                padding: '1rem',
                                borderRadius: '10px'
                            }}>
                                <Typography variant='span' fontWeight="bold">Rework Done</Typography>
                                <Typography variant='span'>7</Typography>
                            </Box>
                        </>
                }
            </Box>
        </Modal>
    )
}

export default UserModal