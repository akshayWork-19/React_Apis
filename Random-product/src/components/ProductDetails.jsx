import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../lib/backend'; // Assuming this is the correct path and function
import Header from './Header';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState('');

  // 1. Data Fetching
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        // Mocking the getProductById call since the actual backend is unknown
        // Assuming the product data structure is similar to the one you provided.


        const response = await getProductById(id);
        const product = response?.data;
        setProduct(product);
        if (product && product.images && product.images.length > 0) {
          setCurrentImage('//plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500');
        } else if (product && product.thumbnail) {
          setCurrentImage(product.thumbnail);
        }

      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  // 2. Formatters and Helpers
  const formatPrice = (price) => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  const getRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        // Full Star (Yellow)
        stars.push(<span key={i} className="text-yellow-400">★</span>);
      } else {
        // Empty Star (Gray)
        stars.push(<span key={i} className="text-gray-600">★</span>);
      }
    }
    return stars;
  };

  // 3. Loading and Error States
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-zinc-900 text-white">
        <p className="text-base">Loading Product Details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen bg-zinc-900 text-red-400">
        <p className="text-base">Product not found.</p>
      </div>
    );
  }

  // 4. Main Render
  return (


    < div className="min-h-screen bg-zinc-900 p-4 md:p-8 text-white" >
      <Header />


      {/* Product Container: REDUCED MAX-WIDTH from 7xl to 4xl and reduced gap */}
      < div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-800 p-5 md:p-8 rounded-xl shadow-lg" >

        {/* Column 1: Images */}
        <div div className="flex flex-col gap-4" > {/* Reduced gap from 6 to 4 */}

          {/* Main Image View */}
          <div className="aspect-square bg-zinc-900 rounded-lg overflow-hidden border border-zinc-700">
            <img
              src={currentImage}
              alt={product.title}
              className="w-full h-full object-contain transition-opacity duration-300"
              // Fallback for image loading error
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://placehold.co/600x600/18181B/FFFFFF?text=Image+Unavailable';
              }}
            />
          </div>

          {/* Thumbnail Gallery */}
          {
            product.images && product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2"> {/* Reduced gap from 3 to 2 */}
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    // REDUCED THUMBNAIL SIZE from w-20 h-20 to w-16 h-16
                    className={`w-16 h-16 object-cover rounded-md cursor-pointer border-2 transition-all duration-200 ${img === currentImage ? 'border-cyan-400 p-0.5' : 'border-zinc-700 hover:border-cyan-600'
                      }`}
                    onClick={() => setCurrentImage(img)}
                  />
                ))}
              </div>
            )
          }
        </div >

        {/* Column 2: Details and Actions (Right side) */}
        < div className="flex flex-col gap-4" > {/* Reduced gap from 6 to 4 */}

          {/* Title and Branding */}
          <div>
            <span className="text-xs font-medium text-cyan-400 uppercase tracking-widest">{product.brand}</span> {/* Reduced text size */}
            <h1 className="text-3xl font-extrabold mt-0.5 text-white leading-tight">{product.title}</h1> {/* Reduced text size */}
            <p className="text-zinc-400 text-base mt-1">{product.category}</p> {/* Reduced text size and margin */}
          </div>

          {/* Rating and Stock */}
          <div className="flex items-center gap-3 border-b border-zinc-700 pb-3"> {/* Reduced gap and padding */}
            <div className="text-lg font-bold"> {/* Reduced text size */}
              {getRatingStars(product.rating)}
              <span className="ml-1.5 text-zinc-300 text-sm font-semibold">{product.rating.toFixed(1)}/5</span> {/* Reduced text size */}
            </div>
            <div className="text-xs text-zinc-500"> {/* Reduced text size */}
              | {product.stock > 0 ?
                <span className="text-emerald-400">In Stock ({product.stock})</span> :
                <span className="text-red-400">Out of Stock</span>}
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2"> {/* Reduced gap */}
            <span className="text-4xl font-extrabold text-emerald-400"> {/* Reduced text size */}
              {formatPrice(product.price)}
            </span>
            {product.discountPercentage > 0 && (
              <span className="text-lg text-red-400 line-through"> {/* Reduced text size */}
                {formatPrice(product.price / (1 - product.discountPercentage / 100))}
              </span>
            )}
            {product.discountPercentage > 0 && (
              <span className="text-sm font-semibold text-red-500 bg-red-900/40 px-1.5 py-0.5 rounded-md"> {/* Reduced text size and padding */}
                {product.discountPercentage.toFixed(0)}% OFF
              </span>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-1.5 border-b border-zinc-700 pb-1">Product Description</h3> {/* Reduced text size and margin */}
            <p className="text-zinc-300 text-sm leading-relaxed"> {/* Reduced text size */}
              {product.description}
            </p>
          </div>

          {/* Add to Cart Button (The main CTA) */}
          <button
            // Reduced vertical padding (py-3) and font size (text-base)
            className="w-full py-3 text-base font-bold bg-cyan-600 text-white rounded-lg shadow-lg shadow-cyan-500/30 
                       hover:bg-cyan-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            disabled={product.stock === 0}
            onClick={() => console.log(`Added product ${product.id} to cart`)}
          >
            {product.stock > 0 ? "Add to Cart" : "Currently Unavailable"}
          </button>
        </div >
      </div >
    </div >
  );
}

export default ProductDetails;
