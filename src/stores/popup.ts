import { create } from 'zustand';

export interface OrderPopupContent {
  id: string;
  title: string;
  description: string;
}

export interface OrderPopupStore {
  status: boolean;
  content: OrderPopupContent;
  open: (content: OrderPopupContent) => void;
  close: () => void;
}

export const useOrderPopupStore = create<OrderPopupStore>((set) => ({
  status: false,
  content: {
    id: '',
    title: '',
    description: '',
  },
  open: (content: OrderPopupContent) => {
    set({ status: true, content });
  },
  close: () => {
    set({
      status: false,
      content: {
        id: '',
        title: '',
        description: '',
      },
    });
  },
}));
