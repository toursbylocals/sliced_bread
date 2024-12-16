export interface OrderFormData {
  name?: string; // since the name is conditional
  quantity?: number; // same as the name
  city: string;
  stateProvince: string;
  country: string;
}
