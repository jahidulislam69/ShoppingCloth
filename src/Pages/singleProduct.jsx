import { useParams } from "react-router-dom";
import ImageSlider from "../Components/ImageSlider";
import { useContext, useEffect, useState } from "react";
import { productContext } from "../context/shopContext";

const SingleProduct = () => {
  const { productId } = useParams();
  const { allProductData } = useContext(productContext);
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (allProductData.length > 0) {
      const product = allProductData.find(
        (product) => product.id === parseInt(productId)
      );
      setProductData(product);
      setLoading(false);
    }
  }, [allProductData, productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!productData) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-full flex flex-col md:flex-row font-[w4]">
      <div className="sm:w-1/2 w-full sm:p-20 p-5">
        {productData.images && productData.images.length > 0 ? (
          <ImageSlider images={productData.images} />
        ) : (
          <div className="w-full h-[80vh] bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">No images available</p>
          </div>
        )}
      </div>
      <div className="sm:w-1/2 w-full sm:p-10 sm:px-30 px-10">
        <h6 className="text-[15px] uppercase text-gray-400 font-[w4] font-thin">
          {productData.category}
        </h6>
        <h1 className="text-5xl uppercase w-[500px] leading-tight py-5">
          {productData.name}
        </h1>
        <h3 className="text-xl font-semibold font-[w4]">
          BDT. {productData.price}
        </h3>
        <hr className="my-5 text-gray-300" />
        <h3 className="text-xs font-medium mb-2 text-gray-600 uppercase">Brkthru Essentials Tee (Size):</h3>
        {/* Available sizes button */}
        <div className="flex gap-3 my-5">
          {productData.sizes && productData.sizes.length > 0 ? (
            productData.sizes.map((size) => (
              <button
                key={size}
                className="px-6 py-2 bg-black text-white text-xs hover:bg-gray-800 transition-colors"
              >
                {size}
              </button>
            ))
          ) : (
            <p className="text-sm text-gray-500 italic">No sizes available</p>
          )}
        </div>
        {/* quantity and add to cart button */}
        <div className="flex gap-3 my-5">
          <input
            type="number"
            defaultValue={1}
            min="1"
            className="w-20 border border-gray-900 px-3 py-2 text-center"
          />
          <button className="bg-black text-white px-8 py-4 uppercase text-xs hover:bg-gray-800 transition-colors">
            Add to Cart
          </button>
        </div>
        <button className="bg-black text-white px-12 py-4 uppercase text-xs hover:bg-gray-800 transition-colors mt-3">
          Buy Now
        </button>
        <hr className="my-5 text-gray-300" />
        {/* Product description */}
        <p className="text-gray-600 mt-5 text-sm py-5 max-w-md">
          {productData.description}
        </p>
        <div className="mt-5">
          <h4 className="text-lg font-medium mb-3">Reviews:</h4>
          <ul className="list-disc ml-6 space-y-2">
            {productData.reviews && productData.reviews.length > 0 ? (
              productData.reviews.map((review) => (
                <li key={review.reviewId} className="text-sm text-gray-600">
                  {review.comment}
                </li>
              ))
            ) : (
              <li className="text-sm text-gray-500 italic">No reviews yet</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
