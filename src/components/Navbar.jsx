import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa"
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../components/Modal';
import Login from './Login';
import Register from './Register';
import { setSearchTerm } from '../redux/productSlice';

const Navbar = () => {
  const products = useSelector(state => state.cart.products);
  const [showModal, setShowModal] = React.useState(false);
  const [isLogin, setisLogin] = React.useState(true);
  const [search, setSearch] = React.useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate('/filter-data');
  };

  const openSignUp = () => {
    setisLogin(false);
    setShowModal(true);
    
  };

  const openLogin = () => {
    setisLogin(true);
    setShowModal(true);
  };

  return (
    <nav className='bg-white shadow-md'>
       <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
          <div className='text-lg font-bold'>
           <Link to="/">e-SHOP</Link>
          </div>
          <div className='relative flex-1 mx-4'>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Search Product"
                 className='w-full border py-2 px-4 rounded-lg' onChange={(e) => setSearch(e.target.value)}/>
                <FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
            </form>
          </div>
          <div className='flex items-center space-x-4'>
           <Link to="/cart" className='relative'>
             <FaShoppingCart className='text-xl'/>
             {products.length > 0 && (
             <span className='absolute top-0 left-3 text-xs font-bold bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center'>
              {products.length}
              </span>
             )}
           </Link>
           <button className='hidden md:block' onClick={openLogin}>Login</button>
           {/* Simple Divider */}
           <span className="hidden md:inline">|</span>
           <button className='hidden md:block' onClick={openSignUp}>Register</button>

           {/* <button className='hidden md:block'
            onClick={openLogin}
           >
              Login | Register
           </button> */}
           <button className='block md:hidden'>
              <FaUser/>
           </button>
          </div>
       </div>
       <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
  <Link
    to="/"
    className="relative hover:text-red-500 transition-all duration-300 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-red-500 before:rounded-full before:transition-all before:duration-300 hover:before:w-full"
  >
    Home
  </Link>
  <Link
    to="/shop"
    className="relative hover:text-red-500 transition-all duration-300 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-red-500 before:rounded-full before:transition-all before:duration-300 hover:before:w-full"
  >
    Shop
  </Link>
  <Link
    to="/contact"
    className="relative hover:text-red-500 transition-all duration-300 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-red-500 before:rounded-full before:transition-all before:duration-300 hover:before:w-full"
  >
    Contact
  </Link>
  <Link
    to="/"
    className="relative hover:text-red-500 transition-all duration-300 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[2px] before:bg-red-500 before:rounded-full before:transition-all before:duration-300 hover:before:w-full"
  >
    About
  </Link>
</div>

       <Modal showModal={showModal} setShowModal={setShowModal}>
         {isLogin ? <Login openSignUp={openSignUp}/> : <Register openLogin={openLogin}/>}
       </Modal>
    </nav>
  )
}

export default Navbar

