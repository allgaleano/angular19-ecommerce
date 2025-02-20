export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}