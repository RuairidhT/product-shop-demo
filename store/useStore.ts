import { CartItem, Product } from '@/types/product';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface CartState {
  items: CartItem[];
  isHydrated: boolean;
  setHydrated: (state: boolean) => void;
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  updateItemQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getItemQuantity: (productId: number) => number;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  isInCart: (productId: number) => boolean;
}

export const useStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isHydrated: false,
      setHydrated: (state) => set({ isHydrated: state }),
      addItem: (product) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.id === product.id);
          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
              ),
            };
          }
          return {
            items: [...state.items, { ...product, quantity: 1 }],
          };
        });
      },
      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== productId),
        }));
      },
      updateItemQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          set((state) => ({
            items: state.items.filter((item) => item.id !== productId),
          }));
        } else {
          set((state) => ({
            items: state.items.map((item) =>
              item.id === productId ? { ...item, quantity } : item
            ),
          }));
        }
      },
      clearCart: () => {
        set({ items: [] });
      },
      getItemQuantity: (productId) => {
        const state = get();
        const item = state.items.find((item) => item.id === productId);
        return item ? item.quantity : 0;
      },
      getTotalItems: () => {
        const state = get();
        return state.items.reduce((total, item) => total + item.quantity, 0);
      },
      getTotalPrice: () => {
        const state = get();
        return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
      },
      isInCart: (productId) => {
        const state = get();
        return state.items.some((item) => item.id === productId);
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state, error) => {
        if (error) {
          console.log('An error occurred during hydration:', error);
        }
        if (state) {
          state.setHydrated(true);
        }
      },
    }
  )
);
