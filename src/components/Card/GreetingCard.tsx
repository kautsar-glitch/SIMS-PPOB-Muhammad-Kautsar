import { Typography } from "@mui/material"
import dummyAvatar from '../../assets/Profile Photo.png'
import type { GreetingCardProps } from "./type"


const GreetingCard = ({ imageUrl=dummyAvatar }: GreetingCardProps) => {
    return (
        <>
        <div>
                    <img src={imageUrl} style={{ height: '100%' }} />
                </div>
                <Typography variant='body1'>Selamat datang,</Typography>
                <Typography variant='h1'>Kristianto Wibowo</Typography>
        </>
    )
}

export default GreetingCard