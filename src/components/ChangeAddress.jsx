import React from 'react'

function ChangeAddress({setAddress, setShowModal}) {
  const [newAddress, setNewAddress] = React.useState('');
  const onClose = () => {
    setAddress(newAddress);
    setShowModal(false);
  }
  return (
    <div>
      <h3 className='mb-4 text-xl font-semibold'>Change Address</h3>
       <input 
       type="text"
       placeholder='Enter address'
        className='border border-gray-300 p-2 w-full mb-4 rounded'
        onChange={(e) => setNewAddress(e.target.value)}
       />
       <div className='flex justify-end'>
        <button className='bg-gray-500 text-white py-2 px-4 rounded mr-2'
        onClick={() => setShowModal(false)}>Cancel</button>
        <button className='bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded'
        onClick={onClose}>Save Address</button>
       </div>
    </div>
  )
}

export default ChangeAddress
