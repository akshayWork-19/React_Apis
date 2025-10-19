import { Link } from 'react-router-dom'

function ProductCard({ product }) {

  const path = `/product/${product?.id}`;
  const imageUrl = 'https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500';

  const cardClasses = "relative flex flex-col items-center p-6 bg-zinc-900 rounded-xl shadow-2xl overflow-hidden " +
    "transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-cyan-500/30 " +
    "group cursor-pointer min-h-full";

  const imageWrapperClass = 'mb-4 w-full aspect-[4/3] flex justify-center items-center overflow-hidden';
  const imageClasses = "w-full h-full object-cover transition-all duration-500 group-hover:scale-105";

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(product?.price);

  return (
    <Link to={path} className='block w-full'>
      <div className={cardClasses}>
        <div className={imageWrapperClass}>
          <img
            src={imageUrl}
            alt={`image of ${product?.title}`}
            className={imageClasses + 'rounded-lg'}
          />
        </div>

        <div className='text-center mt-auto w-full'>
          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200 truncate px-2">
            {product?.title}
          </h3>

          <p className="text-zinc-400 text-sm mt-1 font-mono">
            {product?.category}
          </p>

          <div className="mt-4 px-4 py-1 text-base font-bold text-emerald-400 bg-emerald-900/40 border border-emerald-500/50 rounded-full">
            {formattedPrice}
          </div>
        </div>
      </div>

    </Link>
  )
}

export default ProductCard