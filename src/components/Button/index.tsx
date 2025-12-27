import { Button, Typography } from "@mui/material"
import type { BaseButtonProps } from "./type"

const BaseButton = ({ value, variant="contained", startIcon, endIcon, color="primary", ...props }: BaseButtonProps) => {
    return (
        <Button variant={variant} startIcon={startIcon} endIcon={endIcon} color={color} sx={{ textTransform:'none',  }} {...props}>
            <Typography variant="body1">{value}</Typography>
        </Button>
    )
}

export default BaseButton