import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductInStock from './InventoryUpdate/ProductInStock';
import { Box } from '@mui/material';
import Search from './HomePage/Search'; // Import the Search component
import ManufacturerTabs from './InventoryUpdate/ManufacturerTabs';

export default function UpdateInventory() {
  const products = useSelector(state => state.stock);
  const [searchInput, setSearchInput] = useState('');
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
  const [display, setDisplay] = useState(products);
  const [activeTab, setActiveTab] = useState('הכל');


  // Function to filter the products based on the search input value
  const filterProducts = (input) => {
    setSearchInput(input.toLowerCase());
  };

  const sortProductsAlphabetically = (products) => {
    // Sort products alphabetically by name
    return [...products].sort((a, b) => {
      return a.Name.localeCompare(b.Name);
    });
  };

  const filterByManufacturer = (manufacturer) => {
    setSelectedManufacturer(manufacturer);
    filteredProducts(manufacturer);
  };



  const filteredProducts = (manufacturer) => {
    if (manufacturer === 'הכל') {
      setDisplay(sortProductsAlphabetically(products));
    } else {
      const filteredProducts = products.filter((product) => product.Manufacturer === manufacturer);
      setDisplay(sortProductsAlphabetically(filteredProducts));
    }
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    filterByManufacturer(newValue);
  };

  useEffect(() => {
    setDisplay(sortProductsAlphabetically(products));
    // Set the initial state of 'display' to products sorted by category
   // setDisplay(sortProductsByCategory(products));
  }, [products]);

  return (
    <Box sx={{ padding: '10px', display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
      <Box sx={{ width: '100%', marginTop: 2 }}>
        <Search onSearch={filterProducts} />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          {display.map((product) => (
            <ProductInStock key={product.id} product={product} sx={{
              width: '100%', // Fallback for smaller screens
              '@media (min-width: 600px)': { width: 'calc(50% - 10px)' }, // 2 products per row on screens wider than 600px
              '@media (min-width: 900px)': { width: 'calc(33.333% - 10px)' }, // 3 products per row on screens wider than 900px
            }} />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          width: '8%', // Adjust the width as desired
          position: 'fixed',
          top: '80px', // Adjust the top position as needed
          bottom: '80px', // Adjust the bottom position as needed
          right: '10px', // Adjust the right position as needed
          padding: '10px', // Add padding to the right column
        }}
      >
        {/* Render ManufacturerTabs outside the products box */}
        <ManufacturerTabs
          activeManufacturer={selectedManufacturer}
          handleManufacturerChange={filterByManufacturer}
          products={products}
        />
      </Box>
    </Box>
  );
  
  
}