import { Button, Stack } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { NEW_ORDER_ROUTE } from '../../utils/consts';

const OrderButtons = () => {
  return (
  <div>
  <Stack direction="row" spacing={2} style={{marginLeft: 20}}>
    <div style={{ marginBottom: 40 }}>
      <Button
        variant="contained"
        color="success"
      >
      <NavLink to={NEW_ORDER_ROUTE} style={{textDecoration: 'none', color: 'white'}}>
        Создать заявку
      </NavLink>
      </Button>
    </div>
    <div>
      <Button
        variant="contained"
        onClick={() => console.log("click")}
        color="error"
        disabled={false}
      >
        Удалить заявку
      </Button>
    </div>
  </Stack>
  </div>
);
};

export default OrderButtons

