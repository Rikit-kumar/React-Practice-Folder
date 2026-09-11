import React, { useContext, useEffect, useState } from "react";
import {
  Heart,
  ShoppingBag,
  Star,
  Minus,
  Plus,
  Truck,
  ShieldCheck,
  RotateCcw,
  ArrowLeft,
  Check,
} from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { MyApp } from "../contextApi/AppContext";
import { getSingleProductDetail } from "../api/SingleProductApi";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { setSingleProduct, singleProduct, addToCartFnc, addToWishListFnc } =
    useContext(MyApp);

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const singleProductDets = await getSingleProductDetail(id);

      setSingleProduct(singleProductDets);

      if (singleProductDets?.thumbnail) {
        setSelectedImage(singleProductDets.thumbnail);
      }
    };

    fetchSingleProduct();
  }, [id, setSingleProduct]);

  if (!singleProduct) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#101210] text-[#F4EDE1]">
        <div className="text-center">
          <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-2 border-[#D8B47A]/20 border-t-[#D8B47A]" />

          <p className="text-sm text-[#85877F]">Loading product...</p>
        </div>
      </main>
    );
  }

  const {
    title,
    brand,
    description,
    price,
    discountPercentage,
    rating,
    availabilityStatus,
    images,
    thumbnail,
    category,
    stock,
    sku,
    weight,
    shippingInformation,
    warrantyInformation,
    returnPolicy,
    minimumOrderQuantity,
    tags,
  } = singleProduct;

  const discountedPrice = (price - (price * discountPercentage) / 100).toFixed(
    2,
  );

  const productImages = images?.length > 0 ? images : [thumbnail];

  const increaseQuantity = () => {
    if (quantity < stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCartFnc(singleProduct, quantity);
  };

  return (
    <main className="min-h-screen bg-[#101210] px-5 pb-24 pt-36 text-[#F4EDE1] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* ================= BACK BUTTON ================= */}
        <button
          onClick={() => navigate(-1)}
          className="group mb-8 flex items-center gap-2 text-sm font-medium text-[#85877F] transition-colors duration-300 hover:text-[#D8B47A]"
        >
          <ArrowLeft
            size={17}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to products
        </button>

        {/* ================= PRODUCT HERO ================= */}
        <section className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          {/* ================= IMAGE GALLERY ================= */}
          <div>
            {/* Main Image */}
            <div className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#171A17] p-3">
              <div className="relative aspect-square overflow-hidden rounded-[24px] bg-[#20231F]">
                {selectedImage && (
                  <img
                    src={selectedImage}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                )}

                {/* Image Gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101210]/30 via-transparent to-transparent" />

                {/* Discount */}
                {discountPercentage > 0 && (
                  <div className="absolute bottom-5 left-5 rounded-full bg-[#D8B47A] px-4 py-2 text-xs font-bold tracking-wide text-[#101210]">
                    -{Math.round(discountPercentage)}%
                  </div>
                )}

                {/* Stock */}
                <div className="absolute right-5 top-5">
                  <span
                    className={`rounded-full border px-4 py-2 text-xs font-semibold backdrop-blur-md ${
                      availabilityStatus === "In Stock"
                        ? "border-[#D8B47A]/20 bg-[#101210]/80 text-[#D8B47A]"
                        : "border-red-400/20 bg-red-950/80 text-red-300"
                    }`}
                  >
                    {availabilityStatus}
                  </span>
                </div>
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
              {productImages.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  onClick={() => setSelectedImage(image)}
                  className={`h-20 w-20 shrink-0 overflow-hidden rounded-2xl border p-1 transition-all duration-300 ${
                    selectedImage === image
                      ? "border-[#D8B47A] bg-[#D8B47A]/10"
                      : "border-white/10 bg-[#171A17] hover:border-[#D8B47A]/40"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${title} ${index + 1}`}
                    className="h-full w-full rounded-xl object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ================= PRODUCT INFORMATION ================= */}
          <div className="flex flex-col justify-center">
            {/* Category */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8B47A]">
                {category}
              </span>

              <span className="h-1 w-1 rounded-full bg-[#555950]" />

              <span className="text-xs uppercase tracking-[0.15em] text-[#666960]">
                {brand}
              </span>
            </div>

            {/* Title */}
            <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {title}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <Star size={17} fill="#D8B47A" strokeWidth={0} />

                <span className="text-sm font-semibold text-[#F4EDE1]">
                  {rating}
                </span>
              </div>

              <span className="h-4 w-px bg-white/10" />

              <span className="text-sm text-[#85877F]">
                {stock} units available
              </span>
            </div>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-8 text-[#85877F]">
              {description}
            </p>

            {/* Price */}
            <div className="mt-8 flex items-end gap-4">
              <span className="text-4xl font-semibold tracking-tight text-[#F4EDE1]">
                ${discountedPrice}
              </span>

              {discountPercentage > 0 && (
                <span className="mb-1 text-lg text-[#666960] line-through">
                  ${price.toFixed(2)}
                </span>
              )}

              {discountPercentage > 0 && (
                <span className="mb-1 rounded-full bg-[#D8B47A]/10 px-3 py-1 text-xs font-semibold text-[#D8B47A]">
                  Save {Math.round(discountPercentage)}%
                </span>
              )}
            </div>

            {/* Divider */}
            <div className="my-8 h-px bg-white/10" />

            {/* Quantity */}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-[#85877F]">
                Quantity
              </p>

              <div className="flex items-center">
                <div className="flex items-center rounded-full border border-white/10 bg-[#171A17]">
                  <button
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                    className="flex h-11 w-11 items-center justify-center text-[#85877F] transition-colors hover:text-[#D8B47A] disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <Minus size={15} />
                  </button>

                  <span className="w-10 text-center text-sm font-semibold">
                    {quantity}
                  </span>

                  <button
                    onClick={increaseQuantity}
                    disabled={quantity >= stock}
                    className="flex h-11 w-11 items-center justify-center text-[#85877F] transition-colors hover:text-[#D8B47A] disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    <Plus size={15} />
                  </button>
                </div>

                <span className="ml-4 text-xs text-[#666960]">
                  Minimum order: {minimumOrderQuantity}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-7 flex gap-3">
              <button
                onClick={handleAddToCart}
                className="group flex flex-1 items-center justify-center gap-3 rounded-full bg-[#D8B47A] px-6 py-4 text-sm font-bold text-[#101210] transition-all duration-300 hover:bg-[#E5C48E] hover:shadow-xl hover:shadow-[#D8B47A]/10"
              >
                <ShoppingBag
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                Add to Cart
              </button>

              <button
                onClick={() => addToWishListFnc(singleProduct)}
                aria-label="Add to wishlist"
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#171A17] text-[#F4EDE1] transition-all duration-300 hover:border-[#D8B47A]/40 hover:bg-[#D8B47A]/10 hover:text-[#D8B47A]"
              >
                <Heart size={20} strokeWidth={1.7} />
              </button>
            </div>

            {/* Benefits */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-[#171A17] p-4">
                <Truck size={18} className="text-[#D8B47A]" />

                <p className="mt-3 text-xs font-semibold text-[#F4EDE1]">
                  Shipping
                </p>

                <p className="mt-1 text-[11px] leading-5 text-[#666960]">
                  {shippingInformation}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#171A17] p-4">
                <ShieldCheck size={18} className="text-[#D8B47A]" />

                <p className="mt-3 text-xs font-semibold text-[#F4EDE1]">
                  Warranty
                </p>

                <p className="mt-1 text-[11px] leading-5 text-[#666960]">
                  {warrantyInformation}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#171A17] p-4">
                <RotateCcw size={18} className="text-[#D8B47A]" />

                <p className="mt-3 text-xs font-semibold text-[#F4EDE1]">
                  Returns
                </p>

                <p className="mt-1 text-[11px] leading-5 text-[#666960]">
                  {returnPolicy}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PRODUCT DETAILS ================= */}
        <section className="mt-24 border-t border-white/10 pt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Heading */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D8B47A]">
                Product Information
              </p>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                Details that matter.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#666960]">
                Everything you need to know before making your choice.
              </p>
            </div>

            {/* Details */}
            <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[#171A17]">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="border-b border-white/10 p-6 sm:border-r">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#666960]">
                    SKU
                  </p>

                  <p className="mt-2 text-sm font-medium text-[#F4EDE1]">
                    {sku}
                  </p>
                </div>

                <div className="border-b border-white/10 p-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#666960]">
                    Category
                  </p>

                  <p className="mt-2 text-sm font-medium capitalize text-[#F4EDE1]">
                    {category}
                  </p>
                </div>

                <div className="border-b border-white/10 p-6 sm:border-r">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#666960]">
                    Weight
                  </p>

                  <p className="mt-2 text-sm font-medium text-[#F4EDE1]">
                    {weight} g
                  </p>
                </div>

                <div className="border-b border-white/10 p-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#666960]">
                    Available Stock
                  </p>

                  <p className="mt-2 flex items-center gap-2 text-sm font-medium text-[#8EAF91]">
                    <Check size={15} />
                    {stock} units
                  </p>
                </div>

                <div className="p-6 sm:border-r">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#666960]">
                    Brand
                  </p>

                  <p className="mt-2 text-sm font-medium text-[#F4EDE1]">
                    {brand}
                  </p>
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.15em] text-[#666960]">
                    Minimum Order
                  </p>

                  <p className="mt-2 text-sm font-medium text-[#F4EDE1]">
                    {minimumOrderQuantity} units
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TAGS ================= */}
        {tags?.length > 0 && (
          <section className="mt-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#666960]">
              Product Tags
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-[#171A17] px-4 py-2 text-xs capitalize text-[#85877F] transition-colors hover:border-[#D8B47A]/30 hover:text-[#D8B47A]"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
