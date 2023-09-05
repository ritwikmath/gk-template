import { Stack, TextField, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const ForgotPasswordForm = () => {
    const navigate = useNavigate();
    const [otpSent, setOtpSent] = useState(false);

    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
            confirm_password: '',
            otp: ''
        }
    })

    const { register, formState, handleSubmit, watch } = form

    const { errors } = formState

    const changePassword = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('success')
            }, 300)
        })
    }

    const requestOTP = async () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('success')
            }, 300)
        })
    }

    const handleForgotPasswordFormSubmit = async () => {
        if (!otpSent) {
            const response = await requestOTP('');
            if (response === 'success')
                setOtpSent(true)
            else
                alert('Failed')
        } else {
            const response = await changePassword();
            if (response === 'success') {
                navigate('/login', { replace: true });
            }
        }
    };

    console.log(errors.confirm_password, watch('password'))

    return (
        <form onSubmit={handleSubmit(handleForgotPasswordFormSubmit)}>
            <Stack spacing={3}>
                <>
                    <TextField
                        error={!!errors.email}
                        {...register('email', { required: true })}
                        name="email"
                        label="Email address"
                        helperText={
                            errors.email && errors.email.type === 'required' && 'An email address is required for login'
                        }
                    />
                    <TextField
                        error={!!errors.password}
                        {...register('password', { required: true, minLength: 8 })}
                        name="password"
                        label="Password"
                        type='password'
                        helperText={
                            errors.password && (
                                (errors.password.type === 'required' && 'Looks like you forgot to enter your password.') ||
                                (errors.password.type === 'minLength' && 'Password must be at least eight characters long.')
                            )
                        }
                    />
                    <TextField
                        error={!!errors.confirm_password}
                        {...register('confirm_password', {
                            required: true, validate: (val) => {
                                console.log(val)
                                if (watch('password') !== watch('confirm_password')) {
                                    return "Your passwords do no match";
                                }
                                return null
                            }
                        })}
                        name="confirm_password"
                        label="confirm_password"
                        type='confirm_password'
                        helperText={
                            errors.confirm_password && 'Confirm password must match password'
                        }
                    />
                </>
                {
                    otpSent &&
                    <>
                        <TextField
                            error={!!errors.otp}
                            {...register('otp', { required: otpSent, minLength: 4, maxLength: 4 })}
                            name="otp"
                            label="OTP"
                            helperText={
                                errors.otp && (
                                    (errors.otp.type === 'required' && 'OTP is required to verify your email') ||
                                    ((errors.otp.type === 'minLength' || errors.otp.type === 'maxLength') && 'An OTP has four characters')
                                )
                            }
                        />
                        <Typography variant='p' sx={{ color: '#0000FF', fontSize: '12px' }}>OTP Sent to Your Email</Typography>
                    </>
                }
            </Stack>

            <br />

            <Button fullWidth size="large" type="submit" variant="contained">
                {otpSent ? 'Confirm' : 'Reset Password'}
            </Button>
        </form>
    )
}

export default ForgotPasswordForm