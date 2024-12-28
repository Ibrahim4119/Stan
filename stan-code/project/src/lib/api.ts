const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) throw new Error('Failed to fetch products');
  return response.json();
}

export async function fetchProduct(id: string): Promise<Product> {
  const response = await fetch(`${API_URL}/products/${id}`);
  if (!response.ok) throw new Error('Failed to fetch product');
  return response.json();
}

export async function fetchUserPurchases(userId: string): Promise<Product[]> {
  const response = await fetch(`${API_URL}/users/${userId}/purchases`);
  if (!response.ok) throw new Error('Failed to fetch purchases');
  return response.json();
}