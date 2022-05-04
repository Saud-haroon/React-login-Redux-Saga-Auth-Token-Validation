
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { login } from '../store/actions/login'
import CryptoJS from 'crypto-js';
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import logo from '../assets/images.webp'
import InputText from '../Global_Components/InputText';
import SnackBar from '../Global_Components/SnackBar';
let keySize = 256;
let iterations = 100;


const Login_SignUP = () => {
    let InitialData = {
        username: '',
        password: '',
    }

    const [LoginData, setLoginData] = useState(InitialData)
    const [loading, setLoading] = useState(false);
    const [property, setProperty] = useState({
        error: '',
        open: false,
        severity: ''
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();



    const onChangeHandler = (event) => {
        let name = event.target.name
        let value = event.target.value

        setLoginData({ ...LoginData, [name]: value })
    }

    const isValid = () => {
        if (LoginData.username === "" || LoginData.username === null || LoginData.username === undefined) {
            let msg = 'User Name is Invalid';
            setProperty({
                ...property,
                msg: msg,
                severity: 'error',
                open: true,
            });
            return false
        } else if (LoginData.password === "" || LoginData.password === null || LoginData.password === undefined) {
            let msg = 'Password is Invalid';
            setProperty({
                ...property,
                msg: msg,
                severity: 'error',
                open: true,
            });
            return false
        }
        else {
            return true
        }
    }



    const onsubmitHandler = () => {
        if (isValid()) {

            let payload = {
                username: LoginData.username,
                password: LoginData.password,
                scope: 'openid profile email',
                client_id: '0PbqO7TVU0p7p0XKqSs10fJSUFWCBOgZ',
                audience: 'https://dev-bb2z9tve.us.auth0.com/api/v2/',
                grant_type: 'password',
            }

            dispatch(login(payload));
            setLoading(true)
        }
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setProperty({ ...property, open: false });
    };

    const loginRes = useSelector(({ login }) => login);
    useEffect(() => {
        debugger
        if(loginRes.isAuthenticated) {
            setLoading(false)
            let Token = loginRes.user.access_token;
            sessionStorage.setItem('jsonWebToken', JSON.stringify(`Bearer ${Token}`));
            navigate("/");
        }else if(loginRes.error){
            setLoading(false)
            if(loginRes.error.response.status === 403) {
                let msg = 'Invalid username and password.';                  
                    setProperty({
                        ...property,
                        msg: msg,
                        severity: 'error',
                        open: true,
                    });
            }
         
        }
    }, [loginRes, dispatch])


    return (
        <>
            <SnackBar property={property}
            close={handleClose}
            />
            <Grid
                container
                columnSpacing={2}
                sx={{ py: 10, px: 80, alignItems: 'center', justifyContent: 'center', border: 1 }}
            >
                <Grid item xs={12} sx={{ ml: 6 }}>
                    <img src={logo} />
                </Grid>
                <Grid item xs={12}
                >
                    <Typography variant='h4' sx={{ ml: 5 }}>
                        Welcome User
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ mt: 2 }}>
                    <Stack spacing={2}>
                        <InputText
                            label={'User Name'}
                            name={'username'}
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <InputText
                            label={'Password'}
                            type={'password'}
                            name={'password'}
                            onChange={(e) => onChangeHandler(e)}
                        />
                        <Button variant='contained' fullWidth onClick={onsubmitHandler}>
                            {loading ? 'PleaseWait...' : 'Login'}
                        </Button>
                    </Stack>
                </Grid>
                <Grid item xs={12}>

                </Grid>
            </Grid>
        </>


    )
}

export default Login_SignUP