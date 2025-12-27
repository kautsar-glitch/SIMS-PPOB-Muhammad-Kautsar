import { Box, Grid, Typography } from "@mui/material"
import UpdateProfilePicture from "./UpdateProfilePicture"
import type { FormProfile, } from "../auth/type";
import { Formik } from "formik";
import { profileSchema } from "../../config/formSchema";
import Input from "../../components/Input";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PersonIcon from '@mui/icons-material/Person';
import BaseButton from "../../components/Button";
import { useNavigate } from "react-router-dom";


const ViewProfile = () => {

    const initialValues: FormProfile = {
        email: "",
        firstName: "",
        lastName: "",
    };

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    }

    return (
        <>
            <Grid container size={8} spacing={2} sx={{ mt: 2 }}>
                <Grid size={12}>
                    <UpdateProfilePicture />
                </Grid>
                <Grid size={12}>
                    <Typography variant="h2">Kristianto Wibowo</Typography>
                </Grid>
                <Grid size={12} mt={2}>
                    <Formik initialValues={initialValues} validationSchema={profileSchema} onSubmit={(values) => { console.log(values) }}>
                        {({ values, handleSubmit }) => (
                            <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={1.5}>
                                <Input
                                    name="email"
                                    placeholder="masukan email anda"
                                    value={values.email}
                                    startIcon={<AlternateEmailIcon />}
                                    disabled={true}
                                />
                                <Input
                                    name="firstName"
                                    placeholder="nama depan"
                                    value={values.firstName}
                                    startIcon={<PersonIcon />}
                                    disabled={true}
                                />
                                <Input
                                    name="lastName"
                                    placeholder="nama belakang"
                                    value={values.lastName}
                                    startIcon={<PersonIcon />}
                                    disabled={true}
                                />
                                <Grid container size={12} spacing={2} sx={{ mt: 2 }}>
                                    <BaseButton value='Edit Profile' onClick={() => navigate('/profile/update/data')} variant='outlined' fullWidth />
                                    <BaseButton value='Log Out' onClick={handleLogout} variant='contained' fullWidth />
                                </Grid>
                            </Box>
                        )}
                    </Formik>
                </Grid>
            </Grid>
        </>
    )
}
export default ViewProfile