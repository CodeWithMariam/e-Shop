import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function Checkout({setOrder}) {
    const [billingToggle, setbillingToggle] = React.useState(true);
    const [shippingToggle, setShippingToggle] = React.useState(true);
    const [paymentToggle, setPaymentToggle] = React.useState(true);
    const [paymentMethod, setPaymentMethod] = React.useState('cod');
    const [shippingInfo, setShippingInfo] = React.useState({
        address: '',
        city: '',
        zip: '',
    });
    const cart = useSelector(state => state.cart);
    const navigate = useNavigate();

    const handleOrder = () => {
        const newOrder = {
            products: cart.products,
            totalPrice: cart.totalPrice,
            orderNumber: '233445',
            shippingInformation: shippingInfo,
        }
        setOrder(newOrder);
        navigate('/order-confirmation');
    };
    
  return (
    <div className='container mx-auto py-8 px-4 min-h-96 md:px-16 lg:px-24'> 
            <h3 className='text-2xl font-semibold mb-4'>CHECKOUT</h3>
            <div className='flex flex-col md:flex-row justify-between md:space-x-10 mt-8'>
              <div className=' md:w-2/3'>

                {/* Billing */}
                <div className='border p-2 mb-6'>
                    <div className='flex justify-between items-center'
                    onClick={() => setbillingToggle(!billingToggle)}
                    >
                        <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
                        { billingToggle ? <FaAngleDown /> : <FaAngleUp /> }
                    </div>
                    <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                        <div>
                            <label className='block text-gray-700 mb-2 font-semibold'>Name</label>
                            <input
                             type="text" 
                             id="Name" 
                             placeholder='Enter Name'
                             className='w-full px-3 py-2 border rounded' 
                              />
                        </div>
                        <div>
                            <label className='block text-gray-700 mb-2 font-semibold'>Email</label>
                            <input
                             type="email"
                             id="Email"
                             placeholder='Enter Email'
                             className='w-full px-3 py-2 border rounded' 
                              />
                        </div>
                        <div>
                            <label className='block text-gray-700 mb-2 font-semibold'>Phone</label>
                            <input
                             type="text"
                             placeholder='Enter Phone' 
                             className='w-full px-3 py-2 border rounded'
                              />
                        </div>
                    </div>

                </div>

                {/* Shipping */}
                <div className='border p-2 mb-6'>
                    <div className='flex justify-between items-center'
                    onClick={() => setShippingToggle(!shippingToggle)}
                    >
                        <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
                        { shippingToggle ? <FaAngleDown /> : <FaAngleUp /> }
                    </div>
                    <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                        <div>
                            <label className='block text-gray-700 mb-2 font-semibold'>Address</label>
                            <input
                             type="text" 
                             name="Address" 
                             placeholder='Enter Address'
                             className='w-full px-3 py-2 border rounded' 
                             onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                              />
                        </div>
                        <div>
                            <label className='block text-gray-700 mb-2 font-semibold'>City</label>
                            <input
                             type="text"
                             name="city"
                             placeholder='Enter City Name'
                             className='w-full px-3 py-2 border rounded' 
                             onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                              /> 
                        </div>
                        <div>
                            <label className='block text-gray-700 mb-2 font-semibold'>Zip Code</label>
                            <input
                             type="text"
                             placeholder='Enter Zip Code' 
                             className='w-full px-3 py-2 border rounded'
                             onChange={(e) => setShippingInfo({...shippingInfo, zip: e.target.value})}
                              />
                        </div>
                    </div>

                </div>

                {/* payment method */}
                <div className='border p-2 mb-6'>
                    <div className='flex justify-between items-center'
                    onClick={() => setPaymentToggle(!paymentToggle)}
                    >
                        <h3 className='text-lg font-semibold mb-2'>Payment Method</h3>
                        { paymentToggle ? <FaAngleDown /> : <FaAngleUp /> }
                    </div>
                    <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                        <div className='flex items-center mb-1'>
                            <input
                             type="radio" 
                             name="payment" 
                             checked={paymentMethod === 'cod'}
                             onChange={() => setPaymentMethod('cod')}
                              />
                              <label className='block text-gray-700 ml-2'>Cash on Delivery</label>
                        </div>
                        <div className='flex items-center mb-2'>
                            <input
                             type="radio" 
                             name="payment" 
                             checked={paymentMethod === 'dc'}
                             onChange={() => setPaymentMethod('dc')}
                              />
                              <label className='block text-gray-700 ml-2'>Debit Card</label>
                        </div>

                        { paymentMethod === 'dc' && (
                           <div className='space-y-4 bg-gray-100 p-4 rounded-lg'>
                            <h3 className='text-xl font-semibold mb-4'>Debit Card Information</h3>
                            <div>
                                <label className='block text-gray-700 font-semibold mb-2'>Card Number</label>
                                <input
                                 type="text" 
                                 name="cardNumber" 
                                 placeholder='Enter Card Number'
                                 className='w-full px-3 py-2 border rounded' 
                                  />
                            </div>
                            <div>
                                <label className='block text-gray-700 font-semibold mb-2'>Card Holder's Name</label>
                                <input
                                 type="text"
                                 name="cardHolderName"
                                 placeholder='Enter Name on Card'
                                 className='w-full px-3 py-2 border rounded' 
                                  />
                             </div>

                            <div className='flex justify-between mb-4'>
                                <div className='w-1/2 mr-2 mb-2'>
                                    <label className='block text-gray-700 font-semibold mb-2'>Expiry Date</label>
                                    <input
                                     type="text"
                                     name="expiryDate"
                                     placeholder='MM/YY'
                                     className='w-full px-3 py-2 border rounded mb-2' 
                                      />
                                </div>
                                <div className='w-1/2 ml-2 mb-2'>
                                    <label className='block text-gray-700 font-semibold mb-2'>CVV</label>
                                    <input
                                     type="text"
                                     name="cvv"
                                     placeholder='CVV'
                                     className='w-full px-3 py-2 border rounded mb-2' 
                                      />
                                </div>
                           </div>
                           </div>

                        )}

                    </div>

                </div>
              </div>

              <div className='md:w-1/3 bg-white p-6 rounded-lg shadow-md border'>
                 <h3 className='text-lg font-semibold mb-4'>Order Summary</h3>
                 <div className='space-y-4'>
                     {cart.products.map(product => (
                        <div key={product.id} className='flex justify-between'>
                            <div className='flex items-center'>
                                <img 
                                src={product.image} 
                                alt="{product.name}" 
                                className='w-16 h-16 object-contain rounded'
                                />
                                <div className='ml-4'>
                                     <h4 className='text-md font-semibold'>{product.name}</h4>
                                     <p className='text-gray-600'>${product.price} x {product.quantity}</p>
                                </div>
                            </div>
                            {/* <div className='text-gray-800'>
                             ${product.price * product.quantity}
                            </div> */}
                        </div>
                     ))}
                 </div>
                 <div className='mt-4 pt-4 border-t'>
                    <div className='flex justify-between'>
                        <span>Total Price:</span>
                        <span className='font-semibold'>${cart.totalPrice.toFixed(2)}</span>
                    </div>
                 </div>
                 <button className='w-full bg-red-600 hover:bg-red-700 text-white py-2 mt-6 rounded'
                 onClick={handleOrder}
                 >
                    Place Order
                 </button>
              </div>
            </div>

    </div>
  )
}

export default Checkout
