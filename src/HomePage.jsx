import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductToBuy from './HomePage/ProductToBuy';
import { Box} from '@mui/material';
import PaymentBar from './HomePage/PaymentBar';
import Search from './HomePage/Search';
import CategoryTabs from './HomePage/CategoryTabs';

export default function HomePage() {
  const products = useSelector((state) => state.stock);
  const cart = useSelector((state) => state.cart);
  const [display, setDisplay] = useState(products);
  const [activeTab, setActiveTab] = useState('הכל'); // Initial active tab is 'All'

  const sortProductsAlphabetically = (products) => {
    // Sort products alphabetically by name
    return [...products].sort((a, b) => {
      return a.Name.localeCompare(b.Name);
    });
  };

  const totalPrice = cart.reduce(
    (totalPrice, cartItem) => totalPrice + cartItem.CustomerPrice * cartItem.quantity,
    0
  );
  const countProductsInCart = cart.reduce((totalProducts, cartItem) => totalProducts + cartItem.quantity, 0);

  const handleSearch = (input) => {
    setDisplay(products.filter((prod) => prod.Name.toLowerCase().includes(input)));
  };

  useEffect(() => {
    setDisplay(sortProductsAlphabetically(products));
    // Set the initial state of 'display' to products sorted by category
   // setDisplay(sortProductsByCategory(products));
  }, [products]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    filterProductsByCategory(newValue);
  };

  const filterProductsByCategory = (category) => {
    if (category === 'הכל') {
      setDisplay(sortProductsAlphabetically(products));
    } else {
      const filteredProducts = products.filter((product) => product.Category === category);
      setDisplay(sortProductsAlphabetically(filteredProducts));
    }
  };

  const sortProductsByCategory = (products) => {
    // Sort products by category
    return [...products].sort((a, b) => {
      if (a.Category === b.Category) {
        return 0;
      }
      return a.Category < b.Category ? -1 : 1;
    });
  };

  return (
    <Box sx={{ padding: '10px', display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between' }}>
      <Box sx={{ width: '100%', marginTop: 2 }}>
        <Search onSearch={handleSearch} />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
          {display.map((product) => (
            <ProductToBuy key={product.id} product={product} />
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
        <CategoryTabs activeTab={activeTab} handleTabChange={handleTabChange} products={products} />
      </Box>
      <PaymentBar totalPrice={totalPrice} countProductsInCart={countProductsInCart} />
    </Box>
  );
}
