export interface CreateOrderInput {
  name?: string | null;
  quantity?: number | null;
  city: string;
  stateProvince: string;
  country: string;
}

export interface OrderResponse {
  id: string;
  name: string;
  quantity: number;
  city: string;
  stateProvince: string;
  country: string;
  createdAt: Date;
}
