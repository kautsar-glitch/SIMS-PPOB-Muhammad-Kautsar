import { Box, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import BgAuth from '../../assets/Illustrasi Login.png';
import { flexCenter } from "../../config/theme";

const AuthLayout = () => {
    return (
        <Grid container direction={"row"} sx={flexCenter}>
            <Grid container size={{ xs:12, md:6 }} sx={flexCenter}>
                <Outlet />
            </Grid>
            <Grid size={{ md:6 }} sx={{ display:{ xs:'none', md:'block' } }}>
                <Box component="img" src={BgAuth} alt="Auth Img" sx={{ width:'100%', height:'100%', objectFit:'cover' }} />
            </Grid>
        </Grid>
    );
};

export default AuthLayout;
