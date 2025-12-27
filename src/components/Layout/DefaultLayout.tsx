    import { Outlet } from "react-router-dom"
    import { flexCenter } from "../../config/theme";
    import { Grid } from "@mui/material";
    import Navbar from "../Navbar";

    const DefaultLayout = () => {
        return (
            <Grid container direction={"row"} sx={flexCenter}>
                <Grid size={12}>
                    <Navbar />
                </Grid>
                <Grid container size={12} sx={flexCenter}>
                    <Outlet />
                </Grid>
            </Grid>
        )
    }

    export default DefaultLayout;