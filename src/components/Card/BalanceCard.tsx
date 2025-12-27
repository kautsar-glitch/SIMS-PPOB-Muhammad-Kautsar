import { Box, InputAdornment, TextField, Typography } from "@mui/material"
import type { BalanceCardProps } from "./type"
import BaseButton from "../Button"
import bgCard from '../../assets/Background Saldo.png'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const BalanceCard = ({ balance = 0, showBalance, handleShowBalance }: BalanceCardProps) => {
    
    const formattedBalance = new Intl.NumberFormat('id-ID').format(balance);
    
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    minHeight: 160,
                    backgroundImage: `url(${bgCard})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    borderRadius: 2,
                    padding: 2
                }}
            >
                <Typography variant='body1' color='secondary'>Saldo anda</Typography>
                <TextField
                    fullWidth
                    variant="standard"
                    type={showBalance ? "text" : "password"}
                    value={formattedBalance}
                    disabled={true}
                    sx={{
                        '& .MuiInputBase-input': {
                            color: (theme) => theme.palette.text.secondary,
                        },
                        '& .MuiInputBase-input.Mui-disabled': {
                            color: (theme) => theme.palette.text.secondary,
                            WebkitTextFillColor: (theme) => theme.palette.text.secondary,
                        },
                    }}
                    InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment position="start">
                                <Typography variant="h1" color="secondary">Rp.</Typography>
                            </InputAdornment>
                        ),
                        sx: {
                            typography: "h3",
                        },
                    }}
                />
                <BaseButton
                    value={showBalance ? 'Tutup saldo' : 'Lihat saldo'}
                    variant='text'
                    color='secondary'
                    endIcon={
                        showBalance ? <VisibilityOffIcon /> : <VisibilityIcon />
                    }
                    onClick={handleShowBalance}
                />
            </Box>
        </>
    )
}

export default BalanceCard