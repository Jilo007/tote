
import React from "react";
import { normalizePath } from "../utils/imageUtils";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  category?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  category,
}) => {
  // Use the normalizePath utility to properly format image paths
  const imageUrl = normalizePath(image);

  return (
    <div className="group">
      <div className="relative overflow-hidden mb-4 bg-gray-100 rounded-2xl hover-lift">
        <div 
          className="aspect-[3/4] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 rounded-2xl"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10 rounded-2xl"></div>
        </div>
      </div>
      
      <div className="space-y-1">
        {category && (
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            {category}
          </p>
        )}
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-gray-700">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
