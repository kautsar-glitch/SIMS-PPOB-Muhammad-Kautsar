import { Box, Grid, Typography } from "@mui/material"
import UpdateProfilePicture from "./UpdateProfilePicture"
import BaseButton from "../../components/Button"
import Input from "../../components/Input"
import { profileSchema } from "../../config/formSchema"
import { Formik } from "formik"
import type { FormProfile } from "../auth/type"
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonIcon from '@mui/icons-material/Person';


const UpdateProfileData = () => {

    const initialValues: FormProfile = {
            email: "",
            firstName: "",
            lastName: "",
        };

    return (
        <>
        <Grid container size={8} spacing={2} sx={{ mt:2 }}>
            <Grid size={12}>
            <UpdateProfilePicture/>
            </Grid>
            <Grid size={12}>
                <Typography variant="h2">Kristianto Wibowo</Typography>
            </Grid>
            <Grid size={12} mt={2}>
                <Formik initialValues={initialValues} validationSchema={profileSchema} onSubmit={(values) => { console.log(values) }}>
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
                            <Grid container size={12} sx={{ mt:2 }}>
                                <BaseButton value='Simpan' type="submit" variant='contained' fullWidth />
                            </Grid>
                        </Box>
                    )}
                </Formik>
            </Grid>
        </Grid>
        </>
    )
}
export default UpdateProfileData