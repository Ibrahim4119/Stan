import { ProductCard } from '../components/ProductCard';

const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Classic White Tee',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    name: 'Black Hoodie',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    name: 'Denim Jacket',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    name: 'Canvas Tote Bag',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
  }
];

export function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] bg-black text-white">
        <img
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=2000"
          alt="Hero"
          className="w-full h-full object-cover object-center opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">NEW COLLECTION</h1>
            <a
              href="/shop"
              className="inline-block bg-white text-black px-8 py-3 text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              SHOP NOW
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">About Our Brand</h2>
          <p className="text-gray-600 mb-8">
            We create timeless pieces that combine style and comfort. Our products are crafted with care
            using premium materials, ensuring both quality and sustainability.
          </p>
          <a
            href="/about"
            className="inline-block bg-black text-white px-8 py-3 text-sm font-medium hover:bg-gray-900 transition-colors"
          >
            LEARN MORE
          </a>
        </div>
      </section>
    </div>
  );
}