import React, {useContext} from 'react'
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import BasicDetails from './BasicDetails';
import ShippingDetails from './ShippingDetails';
import BillingDetails from './BillingDetails';
import { Button } from '@mui/material';
import { multiStepContext } from '../StepContext';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

        

function Review() {
  const {setStep, submitData} = useContext(multiStepContext);

  return (

    <Box sx={{ width: '100%' }}>
      <h1>Review</h1>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item><BasicDetails /></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><ShippingDetails/></Item>
        </Grid>
        <Grid item xs={6}>
          <Item><BillingDetails/></Item>
        </Grid>
      </Grid>
      <div>
            <Button variant='contained' onClick={() => setStep(3)} color='secondary'>Back</Button>
            <Button variant='contained'onClick={submitData} color='primary'>Submit</Button>
      </div>
      </Box>
    
  );
}

export default Review