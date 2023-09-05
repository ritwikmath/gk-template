import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox, Typography, Box, Button } from '@mui/material';
// components
import Iconify from '../../../components/iconify';

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const [needverification, setNeedverification] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
      otp: ''
    }
  })

  const { register, formState, handleSubmit } = form

  const { errors } = formState


  const formSubmit = async (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(needverification ? 'success' : 'needverification')
      }, 300)
    })
  }

  const submitOTP = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('success')
      }, 300)
    })
  }

  const handleLoginFormSubmit = async (data) => {
    console.log(data)
    const response = await formSubmit('');
    if (response === 'success') {
      navigate('/dashboard', { replace: true });
    } else if (response === 'needverification') {
      const otpRequest = await submitOTP();
      if (otpRequest === 'success') {
        setNeedverification(true)
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLoginFormSubmit)}>
      <Stack spacing={3}>
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
          type={showPassword ? 'text' : 'password'}
          helperText={
            errors.password && (
              (errors.password.type === 'required' && 'Looks like you forgot to enter your password.') ||
              (errors.password.type === 'minLength' && 'Password must be at least eight characters long.')
            )
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {
          needverification &&
          <>
            <TextField
              error={!!errors.otp}
              {...register('otp', { required: needverification, minLength: 4, maxLength: 4 })}
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

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Box component='div' sx={{ display: 'flex', alignItems: 'center' }}>
          <Checkbox name="remember" label="Remember me" />
          <Typography variant='span'>Remember me</Typography>
        </Box>
        <Link to='/forgot-password' component={RouterLink} variant="subtitle2" underline="hover" sx={{ cursor: 'pointer' }}>
          Forgot password?
        </Link>
      </Stack>

      <Button type="submit" fullWidth size="large" variant="contained">
        Login
      </Button>
    </form>
  );
}
