import React, { useEffect, useState } from 'react'
import { Grid, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";

import GlobalAppBar from '../Global_Components/GlobalAppBar';
import { Typography } from '@mui/material'
import InputText from '../Global_Components/InputText';
import logo from '../assets/images.webp'
import SnackBar from '../Global_Components/SnackBar';

const InputDisplay = () => {
    const [Focus, setFocus] = useState('Focus')
    const [property, setProperty] = useState({
        error: '',
        open: false,
        severity: ''
    })

    const onMouseEnter = (event) => {
        event.target.style.background = 'Green'
    }

    const onMouseLeave = (event) => {
        event.target.style.background = 'White'
    }

    const onFocus = () => {
        setFocus('You Focused IN')
    }

    const onBlur = () => {
        setFocus('Focus')
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setProperty({ ...property, open: false });
    };

    const navigate = useNavigate();  


    // const navigate = useNavigate();
    let Token = JSON.parse(sessionStorage.getItem('jsonWebToken'))
    useEffect(()=> {
        if(!Token) {
            navigate('/login')
        }else{
            navigate('/')
        }
    },[Token])

    return (
        <>
            <SnackBar 
            property={property}
            close={handleClose}
            />
            <GlobalAppBar />
            <Grid
                container
                sx={{ py: 10, px: 20, justifyContent: 'center' }}
            >
                <Grid item xs={4} sx={{ mt: 5 }}>
                    <img src={logo} />
                    <Typography
                        variant='h5'
                    >
                        Dark Horse Solution
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Grid
                        container
                        sx={{ justifyContent: 'center' }}
                    >
                        <Stack spacing={3}>
                            <InputText
                                label={'Default'}
                            />
                            <InputText
                                label={'Hover'}
                                onMouseEnter={(e) => onMouseEnter(e)}
                                onMouseLeave={(e) => onMouseLeave(e)}
                            />
                            <InputText
                                label={Focus}
                                onFocus={() => onFocus()}
                                onBlur={() => onBlur()} />
                            <InputText
                                label={'Completed'} 
                                />
                            <InputText
                                label={'Disabled'}
                                disabled={true} />
                            <InputText
                                label={'Error'}
                                error={true} />
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </>

    )
}

export default InputDisplay