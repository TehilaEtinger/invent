import React, { useState } from 'react';
import { Typography, Grid, Paper } from '@mui/material';
import DiscountTemplates from './DiscountTemplates';
import DiscountDetailsForm from './DiscountDetailsForm';
import ProductList from './ProductList';
import { useSelector } from 'react-redux';

const PromotionsComponent = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [discountDetails, setDiscountDetails] = useState({});
  const [selectedProducts, setSelectedProducts] = useState([]);


  const products = useSelector((state) => state.stock);

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
    setDiscountDetails({});
  };

  const handleSubmitDetails = (details) => {
    setDiscountDetails(details);
  };

  const handleProductToggle = (productId) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.includes(productId)
        ? prevSelected.filter((id) => id !== productId)
        : [...prevSelected, productId]
    );
  };

  return (
    <div>
      <Typography variant="h4">Promotions</Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <DiscountTemplates onSelectTemplate={handleSelectTemplate} />
        </Grid>
        <Grid item xs={4}>
          {selectedTemplate && (
            <DiscountDetailsForm
              selectedTemplate={selectedTemplate}
              onSubmitDetails={handleSubmitDetails}
            />
          )}
        </Grid>
        <Grid item xs={4}>
          {selectedTemplate && (
            <ProductList
              products={products} 
              selectedProducts={selectedProducts}
              onProductToggle={handleProductToggle}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default PromotionsComponent;
