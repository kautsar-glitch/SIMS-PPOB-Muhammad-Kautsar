import { Grid, Typography, } from '@mui/material'
import avatar from '../../assets/Profile Photo.png'
import listrik from '../../assets/Listrik.png'
import { flexCenter } from '../../config/theme'
import { useState } from 'react'
import OverviewCard from '../../components/Card/OverviewCard'


const Dashboard = () => {

    const [showBalance, setShowBalance] = useState(false);

    return (
        <Grid container size={10} spacing={2} sx={[flexCenter, {}]}>
            <OverviewCard imageUrl={avatar} balance={70000} handleShowBalance={() => setShowBalance((prev) => !prev)} showBalance={showBalance} />
            <Grid container size={12} spacing={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant='body1'>Pembayaran</Typography>
                <Grid size={12} spacing={2} sx={{ gap: '8px', flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                    <div>
                        <img src={listrik} style={{ width: '100%', height: 30 }} />
                    </div>
                    <Typography variant='h3'>Listrik Prabayar</Typography>
                </Grid>
            </Grid>

        </Grid>
    )
}

export default Dashboard