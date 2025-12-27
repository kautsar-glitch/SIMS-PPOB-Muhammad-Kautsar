import { Box, Grid, Typography } from '@mui/material'
import Logo from '../../assets/Logo.png'
import Input from '../../components/Input'
import { useState } from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import type { FormLogin } from './type';
import { Formik } from "formik";
import { loginSchema, } from '../../config/formSchema';
import { flexCenter } from '../../config/theme';
import BaseButton from '../../components/Button';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const initialValues: FormLogin = {
        email: "",
        password: "",
    };

    return (
        <Grid container size={10} spacing={3} sx={flexCenter}>
            <Grid size={12} sx={[flexCenter, { gap: '8px', flexDirection: 'row', }]}>
                <div>
                    <img src={Logo} style={{ width: '100%' }} />
                </div>
                <Typography variant='h2'>SIMS PPOB</Typography>
            </Grid>
            <Grid size={8}>
                <Typography variant='h1' flexWrap={'wrap'} textAlign={'center'}>Masuk atau buat akun untuk memulai</Typography>
            </Grid>
            <Grid size={10}>
                <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={(values) => { console.log(values) }}>
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                        <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={1.5}>
                            <Input
                                name="email"
                                placeholder="masukan email anda"
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                startIcon={<AlternateEmailIcon />}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                            />
                            <Input
                                name="password"
                                placeholder="masukan password anda"
                                type={showPassword ? "text" : "password"}
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                startIcon={<LockOutlineIcon />}
                                error={touched.password && Boolean(errors.password)}
                                helperText={touched.password && errors.password}
                                endIcon={
                                    showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />
                                }
                                onEndIconClick={() =>
                                    setShowPassword((prev) => !prev)
                                }
                            />
                            <Box mt={4}>
                                <BaseButton value='Login' variant='contained' type='submit' fullWidth />
                            </Box>
                            <Box sx={[flexCenter, { flexDirection: 'row', mt: 2, }]}>
                                <Typography variant='body1'>Belum punya akun? register</Typography>
                                <BaseButton value='di sini' variant='text' onClick={() => { }} />
                            </Box>
                        </Box>
                    )}
                </Formik>
            </Grid>
        </Grid>
    )
}

export default Login