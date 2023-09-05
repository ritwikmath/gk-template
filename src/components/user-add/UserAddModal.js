import { Box, Button, Checkbox, FormControl, FormControlLabel, InputLabel, MenuItem, Modal, Select, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css'
import { useForm } from 'react-hook-form';

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

const UserAddModal = ({ user, open, handleClose }) => {
    const [initialEmail, setInitialEmail] = useState(null)
    const [showverify, setShowVerify] = useState(!user?.email)

    const form = useForm({
        defaultValues: {
            name: user?.name || '',
            email: user?.email || '',
            team: user?.team || '',
            role: user?.role || '',
            verify: false
        }
    })

    const handleEmailChange = (e) => {
        if (e.target.value !== initialEmail)
            setShowVerify(true)
        else
            setShowVerify(false)
    }

    const { register, handleSubmit } = form

    const onSubmit = (data) => {
        console.log(data)
    }

    useEffect(() => {
        setInitialEmail(user?.email)
        console.log(user?.role || '')
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
                    {user ? `Modify ${user.name}` : 'Add User'}
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box>
                        <Stack spacing={3}>
                            <TextField id='name' label='Name' {...register('name')} />
                            <TextField id='email' label='Email' {...register('email')} onChange={handleEmailChange} />
                            <FormControl>
                                <InputLabel id="team-simple-select-label">Team</InputLabel>
                                <Select
                                    {...register('team')}
                                    defaultValue={user?.team || ''}
                                    labelId="team-simple-select-label"
                                    id="team-simple-select"
                                    label="Team"
                                >
                                    <MenuItem value="Management">Management</MenuItem>
                                    <MenuItem value="Team A">Team A</MenuItem>
                                    <MenuItem value="Team B">Team B</MenuItem>
                                    <MenuItem value="Team C">Team C</MenuItem>
                                    <MenuItem value="Team D">Team D</MenuItem>
                                    <MenuItem value="Freelancing">Freelancing</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel id="role-simple-select-label">Role</InputLabel>
                                <Select
                                    {...register('role')}
                                    labelId="role-simple-select-label"
                                    id="role-simple-select"
                                    label="Role"
                                    defaultValue={user?.role || ''}
                                >
                                    <MenuItem value="Admin">Admin</MenuItem>
                                    <MenuItem value="Senior Subject Matter Expert">Senior Subject Matter Expert</MenuItem>
                                    <MenuItem value="Subject Matter Expert">Subject Matter Expert</MenuItem>
                                    <MenuItem value="Freelancer">Freelancer</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControlLabel control={<Checkbox />} label="Verify" {...register('verify')} sx={{ visibility: showverify ? 'visible' : 'hidden' }} />
                            <Button type='submit' variant="contained" sx={{ marginTop: "10px" }}>{user ? `Modify` : 'Add'}</Button>
                        </Stack>
                    </Box>
                </form>
            </Box>
        </Modal>
    )
}

export default UserAddModal