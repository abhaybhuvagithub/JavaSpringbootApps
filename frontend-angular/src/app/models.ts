export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  category: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

export interface OrderItemRequest {
  productId: number;
  quantity: number;
}

export interface OrderRequest {
  customerName: string;
  customerEmail: string;
  items: OrderItemRequest[];
}

export interface Order {
  id: number;
  totalAmount: number;
  status: string;
}
