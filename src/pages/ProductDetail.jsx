import { FaCarSide, FaQuestion } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
    const dispatch = useDispatch();  // Access Redux dispatch function to add products to cart
  const { id } = useParams();  // Get product id from URL
  const products = useSelector((state) => state.products.products);  // Access products from Redux store
  
  // Find the product with the given ID
  const product = products.find((prod) => prod.id === parseInt(id));

  // If product not found, display a loading message
  if (!product) {
    return <div>Loading...</div>;
  }

    const addToCartHandler = (e, product) => {
      e.stopPropagation();
      e.preventDefault();
      dispatch(addToCart(product));
      // console.log('Product added to cart:', product); 
      alert('Product added to cart!');
    };

  return (
    <div className="container mx-auto px-4 md:px-16 lg:px-24 py-8">
    <div className="flex flex-col md:flex-row space-x-4">
        <div className="md:w-1/2 py-4 shadow-md md:px-8 flex justify-center">
            <img
                src={product.image}
                alt={product.name}
                className="h-full"
            />
        </div>
        <div className="md:w-1/2 p-4 shadow-md md:p-16 flex flex-col items-center gap-y-2">
            <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 text-xl font-semibold mb-4">
                Price: ${product.price}
            </p>
            <div className="flex items-center gap-x-2 mb-4">
                <input

                    min="1"
                    max="10"
                    id="quantity"
                    type="number"
                    className="w-16 border p-1 rounded"
                />
                <button className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                    onClick={(e) => addToCartHandler(e, product)}>
                    Add to Cart
                </button>
            </div>
            <div className="flex flex-col gap-y-4 mt-4">
                <p className="flex items-center">
                    <FaCarSide className="mr-1" />
                    Delivery & Return
                </p>
                <p className="flex items-center">
                    <FaQuestion className="mr-1" />
                    Ask a Question
                </p>
            </div>
        </div>
    </div>
    <div className="mt-8">
        <h3 className='text-xl font-bold mb-2'>Product Description</h3>
        <p>Product description will goes here...</p>
    </div>
</div>
);
};

export default ProductDetail;












