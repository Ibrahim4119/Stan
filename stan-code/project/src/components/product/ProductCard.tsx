import { Link } from 'react-router-dom';
import { Download, PlayCircle, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const TypeIcon = {
    digital: Download,
    course: PlayCircle,
    membership: Users
  }[product.type];

  return (
    <Link 
      to={`/product/${product.id}`} 
      className={cn("group block", className)}
    >
      <div className="aspect-square overflow-hidden bg-gray-100 mb-4 relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-white p-2 rounded-full">
          <TypeIcon className="w-4 h-4" />
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-sm font-medium text-gray-900">{product.title}</h3>
        <p className="text-sm text-gray-500">${product.price.toFixed(2)} USD</p>
      </div>
    </Link>
  );
}