import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Download, PlayCircle, Users } from 'lucide-react';
import { fetchProduct } from '@/lib/api';
import type { Product } from '@/types';

export function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await fetchProduct(id!);
        setProduct(data);
      } catch (error) {
        console.error('Failed to load product:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div className="pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
              <p className="text-2xl">${product.price.toFixed(2)} USD</p>
            </div>
            
            <div className="prose max-w-none">
              <p>{product.description}</p>
            </div>
            
            <button
              className="w-full bg-black text-white py-4 px-6 rounded-lg hover:bg-gray-900 transition-colors"
              onClick={() => {/* Add to cart logic */}}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}