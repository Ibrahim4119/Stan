import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  className?: string;
}

export function ProductCard({ id, name, price, image, className }: ProductCardProps) {
  return (
    <Link to={`/product/${id}`} className={cn("group block", className)}>
      <div className="aspect-square overflow-hidden bg-gray-100 mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-sm font-medium text-gray-900 mb-1">{name}</h3>
      <p className="text-sm text-gray-500">${price.toFixed(2)} USD</p>
    </Link>
  );
}