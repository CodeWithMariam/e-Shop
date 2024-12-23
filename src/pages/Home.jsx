// import React from 'react'
import { Categories, mockData } from '../assets/mockData'
import HeroImage from "../assets/Images/hero3.jpg";
import InfoSection from '../components/InfoSection';
import CategorySection from '../components/CategorySection';
import { setProducts } from '../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import ProductCard from '../components/ProductCard'
import Shop from '../pages/Shop';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  useEffect(() =>{
    dispatch(setProducts(mockData))
    // console.log('Mock Data dispatched:', mockData); 
  }, [dispatch])

  useEffect(() => {
    // console.log('Products from Redux updated: ', products);  
  }, [products]);

  return (
    <div className='bg-white px-4'>
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto py-4 flex flex-col md:flex-row md:space-x-2'>
       <div className='w-full md:w-3/12'>
              <div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5'>SHOP BY CATEGORIES</div>
              <ul className='space-y-4 bg-gray-100 p-3 border'>
                {Categories.map((category, index) => (
                  <li key={index} className='flex items-center text-sm font-medium'>
                    <div className='w-2 h-2 border border-red-500 rounded-full mr-2'></div>
                  {category}
                  </li>
                ))}
              </ul>
         </div>

         <div className='w-full md:w-9/12 mt-8 md:mt-0 h-64 md:h-full relative'>
            <img src={HeroImage} alt='' className='h-64 md:h-full w-full shadow-lg' />
            <div className='absolute top-16 left-8'>
              <p className='text-red-600 font-bold mb-2 text-xl'> Sale Offer</p>
              {/* <p className='text-gray-600 mb-4'> Mariam | e-SHOP</p> */}
              <h2 className='md:text-3xl text-2xl font-bold'> WELCOME TO E-SHOP</h2>
              <p className='md:text-xl text-gray-800 mt-2.5 font-bold'> MILLIONS+ PRODUCTS</p>
              <button className='bg-red-600 px-4 md:px-8 py-1.5 text-white mt-4 hover:bg-red-700 rounded
               transform transition-transform duration-300 hover:scale-105'>SHOP NOW</button>
            </div>
         </div>
       </div>
       <InfoSection />
       <CategorySection />

       <div className='container mx-auto py-12'>
         <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6'>
         {products?.length ? (
          products.slice(0, 5).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <p>No products available</p> // Display message if no products are available
        )}
         </div>
          
       </div>
    </div>
     <Shop />
    </div>
  )
}

export default Home
