import TextField from '@mui/material/TextField';

const InputText = ({ fullWidth, label, disabled, error, onMouseEnter, onMouseLeave, onFocus, onBlur, autoComplete, type, name, onChange }) => {
    return (
        <TextField
            error={error ? error : false}
            fullWidth={fullWidth ? fullWidth : false}
            id="outlined-basic"
            type={type ? type : 'text'}
            label={label}
            name={name ? name : ""}
            variant="outlined"
            disabled={disabled ? disabled : false}
            helperText={error ? "Please Enter Value." : ""}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onFocus={onFocus}
            onBlur={onBlur}
            autoComplete={autoComplete ? autoComplete : undefined}
            onChange={onChange}

        />
    )
}

export default InputText