import { Box, Grid, Typography } from "@mui/material";
import OverviewCard from "../../components/Card/OverviewCard";
import { flexCenter } from "../../config/theme";
import { useState } from "react";
import avatar from '../../assets/Profile Photo.png'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Formik } from 'formik'
import { topupSchema } from '../../config/formSchema'
import Input from "../../components/Input";
import BaseButton from "../../components/Button";

const TopUp = () => {
    const [showBalance, setShowBalance] = useState(false);
    
        const listTopup = [10000, 20000,50000, 100000, 250000, 500000]

    return (
        <>
        <Grid container size={10} spacing={2} sx={[flexCenter, {}]}>
            <OverviewCard imageUrl={avatar} balance={70000} handleShowBalance={() => setShowBalance((prev) => !prev)} showBalance={showBalance} />
            <Grid container size={12} spacing={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant='body1'>Silahkan masukan</Typography>
                <Grid size={12} spacing={2} sx={{ gap: '8px', flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h3'>Nominal Top Up</Typography>
                </Grid>
            </Grid>
            <Grid container size={7} spacing={2}>
                <Grid size={12}>
                <Formik initialValues={{ topup: 0 }} validationSchema={topupSchema} onSubmit={(values) => { console.log(values) }}>
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                        <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={1.5}>
                            <Input
                                name="topup"
                                placeholder="masukan nominal topup"
                                type='number'
                                value={values.topup}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                startIcon={<CreditCardIcon />}
                                error={touched.topup && Boolean(errors.topup)}
                                helperText={touched.topup && errors.topup}
                                fullWidth
                            />
                        </Box>
                    )}
                </Formik>
                </Grid>
                <BaseButton value='Top Up' disabled={true} variant='contained' type='submit' fullWidth />
            </Grid>
            <Grid container size={5} spacing={2} justifyContent={'space-between'}>
                {listTopup && listTopup.map((data, id) => (
                <Grid size={4} key={id}>
                        <BaseButton value={`Rp ${data}`} variant='outlined' color='inherit' fullWidth/>
                    </Grid>

                ))}

            </Grid>

        </Grid>
        </>
    )
}
export default TopUp