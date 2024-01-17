import React from 'react';
import { Tabs, Tab } from '@mui/material';

const ManufacturerTabs = ({ activeManufacturer, handleManufacturerChange, products }) => {
  // Get unique manufacturers from the products array
  const manufacturers = Array.from(new Set(products.map((product) => product.Manufacturer)));

  // Generate tabs for each manufacturer
  const manufacturerTabs = ['הכל', ...manufacturers].map((manufacturer, i) => (
    <Tab key={i} value={manufacturer} label={manufacturer} />
  ));

  return (
    <Tabs
      value={activeManufacturer || 'הכל'} // Ensure a default value if activeManufacturer is falsy
      onChange={(event, newValue) => handleManufacturerChange(newValue)}
      orientation="vertical"
      variant="scrollable"
      scrollButtons="auto"
      sx={{ justifyContent: 'center',
      minWidth: 'fit-content', // Adjust this value
      width: '100%' }}
    >
      {manufacturerTabs}
    </Tabs>
  );
};

export default ManufacturerTabs;
