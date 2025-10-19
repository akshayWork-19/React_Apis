import React, { useEffect, useState } from 'react'
import { getRandomProduct } from '../lib/backend'
import { Link } from 'react-router-dom';
function Random() {

  const [product, setProduct] = useState(null);
  useEffect(() => {
    const getProduct = async () => {
      const product = await getRandomProduct();
      setProduct(product?.data);
    };
    getProduct();
  }, []);

  return (
    <div className="min-h-2 bg-zinc-900 p-4 md:p-8 flex justify-center items-start pt-8">

      <div className="max-w-xl w-full">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Product of the Day
        </h2>

        {product ? (
          // Card Container: Highly visible, centered, and clickable
          <Link
            to={`/product/${product.id}`}
            className="block bg-zinc-800 rounded-xl shadow-2xl overflow-hidden 
                         transition-transform duration-300 hover:scale-[1.02] hover:shadow-cyan-500/40"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2">

              {/* Left Column: Image (50% width on desktop) */}
              <div className="aspect-[4/3] sm:aspect-auto sm:h-full bg-zinc-900 overflow-hidden">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/600x450/18181B/FFFFFF?text=Featured+Product';
                  }}
                />
              </div>

              {/* Right Column: Details (50% width on desktop) */}
              <div className="p-6 md:p-8 flex flex-col justify-between text-white">
                <div>
                  <span className="text-xs font-medium text-cyan-400 uppercase tracking-widest">{product?.brand || product?.category}</span>

                  <h1 className="text-2xl md:text-3xl font-extrabold mt-1 leading-tight text-white">
                    {product?.title}
                  </h1>

                  <p className="text-zinc-400 text-sm mt-3 line-clamp-3">
                    {product?.description}
                  </p>
                </div>

                {/* Price and CTA */}
                <div className="mt-6 flex flex-col gap-3">
                  <span className="text-3xl font-extrabold text-emerald-400">
                    {product?.price}
                  </span>
                  <button
                    className="w-full py-2.5 text-base font-bold bg-cyan-600 text-white rounded-lg 
                                 shadow-md shadow-cyan-500/30 hover:bg-cyan-700 transition-colors duration-200"
                    onClick={(e) => {
                      // Prevent Link navigation if you add a specific action here
                      // e.preventDefault();
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <div className="text-center p-12 bg-zinc-800 rounded-xl text-zinc-400">
            Could not load a random product today. Please check back later!
          </div>
        )}
      </div>
    </div>
  );
}

export default Random