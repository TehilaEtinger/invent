import React, { useState } from 'react';
import { TextField, Button, Paper, Box } from '@mui/material';

const DiscountDetailsForm = ({ selectedTemplate, onSubmitDetails }) => {
  const [discountDetails, setDiscountDetails] = useState({});
  

  const handleDetailChange = (field) => (event) => {
    setDiscountDetails((prevDetails) => ({
      ...prevDetails,
      [field]: event.target.value,
    }));
  };

  const handleSubmitDetails = () => {
    onSubmitDetails(discountDetails);
  };

  
  return (
    <Paper elevation={2} style={{ padding: '16px' }}>
      {selectedTemplate === 'percentage' && (
        <TextField
          label="Discount Percentage"
          variant="outlined"
          fullWidth
          type='number'
          value={discountDetails.discount}
          onChange={(e)=>setDiscountDetails({...discountDetails,name:'percentage',p:(e.target.value)})}
        />
      )}
      {selectedTemplate === 'buy_get_free' && (
        <>
          <TextField
            label="Buy Quantity"
            variant="outlined"
            fullWidth
            type='number'
            value={discountDetails.buyQuantity}
            onChange={(e)=>setDiscountDetails({...discountDetails,name:'buy_get_free',buy:(e.target.value)})}
          />
          <TextField
            label="Get Quantity Free"
            variant="outlined"
            fullWidth
            type='number'
            value={discountDetails.getQuantity}
            onChange={(e)=>setDiscountDetails({...discountDetails,name:'buy_get_free',get:(e.target.value)})}

          />
        </>
      )}
       {selectedTemplate === 'buy_pay_' && (
        <>
          <TextField
            label="Buy Quantity"
            variant="outlined"
            fullWidth
            type='number'
            value={discountDetails.buyQuantity}
            onChange={(e)=>setDiscountDetails({...discountDetails,name:'buy_pay_',buy:(e.target.value)})}

          />
          <TextField
            label="Pay "
            variant="outlined"
            fullWidth
            type='number'
            value={discountDetails.getQuantity}
            onChange={(e)=>setDiscountDetails({...discountDetails,name:'buy_pay_',pay:(e.target.value)})}
          />
        </>
      )}
       {selectedTemplate === 'the_in_%' && (
        <>
          <TextField
            label="Buy Quantity"
            variant="outlined"
            fullWidth
            type='number'
            value={discountDetails.buyQuantity}
            onChange={(e)=>setDiscountDetails({...discountDetails,name:'the_in_%',buy:(e.target.value)})}
          />
          <TextField
            label="Get % discount "
            variant="outlined"
            fullWidth
            min='0'
            type='number'
            value={discountDetails.getQuantity}
            onChange={(e)=>setDiscountDetails({...discountDetails,name:'the_in_%',p:(e.target.value)})}
          />
        </>
      )}
      {/* Other template-specific input fields */}
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleSubmitDetails}>
          Continue
        </Button>
      </Box>
    </Paper>
  );
};

export default DiscountDetailsForm;
