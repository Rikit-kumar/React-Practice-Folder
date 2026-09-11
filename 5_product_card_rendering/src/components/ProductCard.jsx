import { Heart, ShoppingCart, Star } from "lucide-react";

const ProductCard = ({ product, del }) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="aspect-square w-full object-cover"
        />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white shadow-lg">
          {product.category}
        </span>

        {/* Wishlist */}
        <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-110">
          <Heart size={18} className="text-red-500" />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Title */}
        <h2 className="line-clamp-1 text-xl font-bold text-gray-900">
          {product.title}
        </h2>

        {/* Seller */}
        <p className="mt-1 text-sm text-gray-500">
          By <span className="font-medium">{product.name}</span>
        </p>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-1">
          <Star className="fill-yellow-400 text-yellow-400" size={16} />
          <Star className="fill-yellow-400 text-yellow-400" size={16} />
          <Star className="fill-yellow-400 text-yellow-400" size={16} />
          <Star className="fill-yellow-400 text-yellow-400" size={16} />
          <Star className="fill-yellow-400 text-yellow-400" size={16} />

          <span className="ml-2 text-sm text-gray-500">(124 Reviews)</span>
        </div>

        {/* Price */}
        <div className="mt-3 flex items-center gap-3">
          <span className="text-3xl font-bold text-gray-900">
            ₹{product.price}
          </span>

          <span className="text-lg text-gray-400 line-through">
            ₹{Math.round(product.price * 1.3)}
          </span>
        </div>

        {/* Button */}
        <div className="mt-3 flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gray-900 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-600">
            <ShoppingCart size={18} />
            Add to Cart
          </button>

          <button onClick={()=>del(product.id)} className="flex items-center justify-center rounded-xl bg-red-500 px-4 text-white transition-all duration-300 hover:bg-red-600">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
