import React, { useState, useEffect } from 'react'
import { getAllProducts } from "../lib//backend.js";
import Header from './Header.jsx';
import ProductCard from './ProductCard.jsx';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const fetchedProducts = await getAllProducts();
    console.log(fetchedProducts);
    setProducts(fetchedProducts?.data?.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>


      <div className="p-4 sm:p-8 bg-zinc-900 min-h-screen">
        <h2 className="text-3xl font-bold text-white mb-8 border-b border-zinc-700 pb-3">
          Products
        </h2>

        <Header />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {
            products.map((product) => (
              <div key={product.id} className="col-span-1">
                <ProductCard product={product} />
              </div>
            ))
          }
        </div>
      </div>
    </div>

  )
}

export default ProductsPage