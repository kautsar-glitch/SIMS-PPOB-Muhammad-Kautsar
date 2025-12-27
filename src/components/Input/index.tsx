import { TextField, InputAdornment, IconButton, Typography } from "@mui/material";
import type { InputProps } from "./type";

const Input = ({ label, value, onChange, startIcon, endIcon, disabled = false, onStartIconClick, onEndIconClick, placeholder, isUnBorder=false, ...props }: InputProps) => {
    return (
        <>
            <Typography variant="body1">{label}</Typography>
            <TextField
                fullWidth
                value={value}
                onChange={onChange}
                disabled={disabled} 
                placeholder={placeholder} 
                onBlur={props.onBlur}
                InputProps={{
                    disableUnderline: isUnBorder,
                    startAdornment: startIcon ? (
                        <InputAdornment position="start">
                            {onStartIconClick ? (
                                <IconButton onClick={onStartIconClick} edge="start" disabled={disabled}>
                                    {startIcon}
                                </IconButton>
                            ) : (
                                startIcon
                            )}
                        </InputAdornment>
                    ) : null,
                    endAdornment: endIcon ? (
                        <InputAdornment position="end">
                            {onEndIconClick ? (
                                <IconButton onClick={onEndIconClick} edge="end" disabled={disabled} >
                                    {endIcon}
                                </IconButton>
                            ) : (
                                endIcon
                            )}
                        </InputAdornment>
                    ) : null,
                }}
                {...props}
            />
        </>
    );
};

export default Input;
