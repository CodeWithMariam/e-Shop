import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate,  } from 'react-router-dom';
import emptyCart from '../assets/Images/emptyCart.jpg';
import { FaTrashAlt } from 'react-icons/fa';
import Modal from '../components/Modal';
import ChangeAddress from '../components/ChangeAddress';
import { increaseQuantitity, decreaseQuantitity, removeFromCart } from '../redux/cartSlice';

function Cart() {
  const cart = useSelector(state => state.cart);
  const [address, setAddress] = useState('main stret, 0022');
  const [showModal, setShowModal] = useState(false);  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='container mx-auto py-8 px-4 min-h-96 md:px-16 lg:px-24'> 
         {cart.products.length > 0 ?
        <div>
            <h3 className='text-2xl font-semibold mb-4'>SHOPPING CART</h3>
            <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
              <div className=' md:w-2/3'>
                 <div className='flex justify-between border-b items-center mb-4 text-xs font-bold'>
                   <p>PRODUCTS</p>
                   <div className='flex space-x-8'>
                     <p>PRICE</p>
                     <p>QUANTITY</p>
                     <p>SUBTOTAL</p>
                     <p>REMOVE</p>
                   </div>
                 </div>
                 <div>
                    {cart.products.map(product => (
                      <div 
                      key={product.id}
                      className='flex justify-between items-center border-b p-3'>
                        <div className='md:flex items-center space-x-4'>
                          <img src={product.image} alt={product.name} 
                          className='w-16 h-16 object-contain rounded'
                          />
                        </div>
                        <div className='flex-1 ml-4'>
                          <h3 className='text-lg font-semibold'>{product.name}</h3>
                        </div>
                        <div className='flex items-center space-x-12'>
                          <p>${product.price}</p>
                        <div className='flex items-center justify-center border'>
                          <button className='text-xl font-bold px-1.5 border-r'
                          onClick={() => dispatch(decreaseQuantitity(product.id))}
                          >-</button>
                          <p className='text-xl font-bold px-2'>{product.quantity}</p>
                          <button className='text-xl font-bold px-1 border-l'
                          onClick={() => dispatch(increaseQuantitity(product.id))}>+</button>
                        </div>
                        <p>${product.quantity * product.price.toFixed(2)}</p>
                         <button className='text-red-500 hover:text-red-700'
                         onClick={() => dispatch(removeFromCart(product.id))}>
                          <FaTrashAlt />
                         </button>
                      </div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                <h3 className='text-sm font-semibold mb-5'>CART TOTAL</h3>
                <div className='flex justify-between mb-5 pb-1 border-b'>
                  <span className='text-sm'>TOTAL ITEMS:</span>
                  <span>{cart.totalQuantity}</span>
                </div>
                <div className='mb-4 pb-2 border-b'>
                  <p>Shipping:</p>
                  <div className='flex ml-2'>
                  <p className='font-medium'>Shipping to:</p>
                  <span>{address}</span>
                  </div>
                  
                  <button
                  className='text-blue-500 hover:text-blue-700 hover:underline ml-2 mt-1'
                   onClick={() => setShowModal(true)}>
                    change address</button>
                </div>
                <div className='flex justify-between mb-4'>
                  <span>Total Price:</span>
                  <span>${cart.totalPrice.toFixed(2)}</span>
                </div>
                <button className='w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded'
                onClick={() => navigate('/checkout')}>
                  Proceed to checkout</button>
              </div>
            </div>
            <Modal 
             showModal={showModal}
             setShowModal={setShowModal}>
             <ChangeAddress setAddress={setAddress} setShowModal={setShowModal}/>
            </Modal>
        </div>
        : <div className='flex justify-center mt-2'>
              <img src={emptyCart} alt="empty cart" 
              className=" "/>
          </div>
          }
    </div>
  )
}

export default Cart
