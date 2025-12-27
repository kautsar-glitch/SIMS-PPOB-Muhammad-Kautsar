import { Box, Grid, Typography } from '@mui/material'
import Logo from '../../assets/Logo.png'
import Input from '../../components/Input'
import { useState } from 'react';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonIcon from '@mui/icons-material/Person';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import type { FormRegister } from './type';
import { Formik } from "formik";
import { registerSchema } from '../../config/formSchema';
import { flexCenter } from '../../config/theme';
import BaseButton from '../../components/Button';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmationPassword, setShowConfirmationPassword] = useState(false);

    const initialValues: FormRegister = {
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirmPassword: "",
    };

    return (
        <Grid container size={10} spacing={3} sx={flexCenter}>
            <Grid size={12} sx={{ gap: '8px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <div>
                    <img src={Logo} style={{ width: '100%' }} />
                </div>
                <Typography variant='h2'>SIMS PPOB</Typography>
            </Grid>
            <Grid size={8}>
                <Typography variant='h1' flexWrap={'wrap'} textAlign={'center'}>Lengkapi data untuk membuat akun</Typography>
            </Grid>
            <Grid size={10}>
                <Formik initialValues={initialValues} validationSchema={registerSchema} onSubmit={(values) => { console.log(values) }}>
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
                                name="firstName"
                                placeholder="nama depan"
                                value={values.firstName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                startIcon={<PersonIcon />}
                                error={touched.firstName && Boolean(errors.firstName)}
                                helperText={touched.firstName && errors.firstName}
                            />
                            <Input
                                name="lastName"
                                placeholder="nama belakang"
                                value={values.lastName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                startIcon={<PersonIcon />}
                                error={touched.lastName && Boolean(errors.lastName)}
                                helperText={touched.lastName && errors.lastName}
                            />
                            <Input
                                name="password"
                                placeholder="buat password"
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
                            <Input
                                name="confirmPassword"
                                placeholder="konfirmasi password"
                                type={showConfirmationPassword ? "text" : "password"}
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                startIcon={<LockOutlineIcon />}
                                error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                                helperText={touched.confirmPassword && errors.confirmPassword}
                                endIcon={
                                    showConfirmationPassword ? <VisibilityOffIcon /> : <VisibilityIcon />
                                }
                                onEndIconClick={() =>
                                    setShowConfirmationPassword((prev) => !prev)
                                }
                            />
                            <Box mt={4}>
                                <BaseButton value='Registrasi' variant='contained' type='submit' fullWidth />
                            </Box>
                            <Box sx={[flexCenter, { flexDirection: 'row', mt: 2, }]}>
                                <Typography variant='body1'>Udah punya akun? login</Typography>
                                <BaseButton value='di sini' variant='text' onClick={() => { }} />
                            </Box>
                        </Box>
                    )}
                </Formik>
            </Grid>
        </Grid>
    )
}

export default Register