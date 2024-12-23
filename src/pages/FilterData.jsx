import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard';

function FilterData() {
    const filteredData = useSelector(state => state.products.filteredData);
  return (
    <div className='mx-auto py-12  px-4 md:px-16 lg:px-24'>
    <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
    {filteredData?.length ? (
     filteredData.map((product) => (
       <ProductCard product={product} key={product.id} />
     ))
   ) : (
     <p>No products available</p> // Display message if no products are available
   )}
    </div>
     
  </div>
  )
}

export default FilterData