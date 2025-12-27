import { Grid, Typography } from "@mui/material"
import Logo from '../../assets/Logo.png'
import BaseButton from "../Button"
import { useLocation, useNavigate } from "react-router-dom"


const Navbar = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const listMenu = [
        {
            name: 'Top Up',
            navigateTo: '/transaction/topup'
        },
        {
            name: 'Transaction',
            navigateTo: '/transaction/history'
        },
        {
            name: 'Akun',
            navigateTo: '/profile'
        }
    ]

    const isActive = ( path: string ) => location.pathname == path
    
    return (
        <Grid container size={12} sx={{ display:'flex', flexDirection:'row', justifyContent:'space-between', p:2, mb:3, boxShadow:1, borderRadius:1 }}>
            <Grid size={6} sx={{ gap: '8px', flexDirection: 'row', display:'flex', px:6, alignItems:'center' }}>
                <div onClick={() => navigate('/')}>
                    <img src={Logo} style={{ width: '100%' }} />
                </div>
                <div onClick={() => navigate('/')}>
                <Typography variant='h3'>SIMS PPOB</Typography>
                </div>
            </Grid>
            <Grid size={6} sx={{ gap: '8px', flexDirection: 'row', display:'flex', px:6, alignItems:'center', justifyContent:'flex-end' }}>
                { listMenu  && listMenu.map((menu, idx) => (
                    <BaseButton 
                    key={idx}
                    value={menu.name}
                    color={isActive(menu.navigateTo) ? "primary" : "inherit"}
                    variant="text"
                    onClick={() => navigate(menu.navigateTo)}
                    />
                ))}
            </Grid>
        </Grid>
    )

}

export default Navbar