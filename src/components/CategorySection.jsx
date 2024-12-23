// import React from 'react'
import ManCategory from "../assets/Images/men1.jpg";
import WomenCategory from "../assets/Images/women.jpg";
import KidCategory from "../assets/Images/kid4.avif";

const categories = [
    {
        title: 'Men',
        imageUrl: ManCategory
    },
    {
        title: 'Women',
        imageUrl: WomenCategory
    },
    {
        title: 'Kids',
        imageUrl: KidCategory
    }
]

function CategorySection() {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer py-12">
       {categories.map((category, index)=>(
        <div key={index} className='relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
            <img src={category.imageUrl} alt={category.title} className='w-full h-full object-cover rounded-lg shadow-md' />
            <div className="absolute top-20 left-12">
            <p className='text-xl font-bold'>{category.title}</p>
            <p className='text-gray-600'>View All</p>
            </div>
        </div>
           
       ))}
    </div>
  )
}

export default CategorySection
