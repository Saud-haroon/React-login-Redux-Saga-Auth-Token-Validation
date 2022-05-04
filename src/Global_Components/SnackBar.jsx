import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import React from 'react'

const SnackBar = ({property, close }) => {
  return (
    <Snackbar
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            style={{ marginTop: 50 }}
            open={property.open}
            autoHideDuration={2000}
            onClose={close}
        >
            <Alert onClose={close} elevation={6} variant="filled" severity={property.severity}>
                {property.msg ? property.msg :"Server Error"}
            </Alert >
        </Snackbar>
  )
}

export default SnackBar