import { renderHook, act } from '@testing-library/react';
import { Product, CartItem } from '@/types/product';
import { useStore } from '../useStore';

const mockProduct1: Product = {
  id: 1,
  title: 'Test Product 1',
  price: 10.99,
  description: 'A test product',
  image: 'test-image-1.jpg',
  rating: {
    rate: 4.5,
    count: 10,
  },
  category: 'test-category',
};

const mockProduct2: Product = {
  id: 2,
  title: 'Test Product 2',
  price: 25.5,
  description: 'Another test product',
  image: 'test-image-2.jpg',
  rating: {
    rate: 3.8,
    count: 5,
  },
  category: 'test-category-2',
};

describe('Cart Store', () => {
  beforeEach(() => {
    act(() => {
      useStore.getState().clearCart();
    });
  });

  describe('Basic Operations', () => {
    it('should start with empty cart', () => {
      const { result } = renderHook(() => useStore());

      expect(result.current.items).toEqual([]);
      expect(result.current.getTotalItems()).toBe(0);
      expect(result.current.getTotalPrice()).toBe(0);
    });

    it('should add item to cart', () => {
      const { result } = renderHook(() => useStore());

      act(() => {
        result.current.addItem(mockProduct1);
      });

      expect(result.current.items).toHaveLength(1);
      expect(result.current.items[0]).toEqual({
        ...mockProduct1,
        quantity: 1,
      });
    });

    it('should increment quantity when adding same item', () => {
      const { result } = renderHook(() => useStore());

      act(() => {
        result.current.addItem(mockProduct1);
        result.current.addItem(mockProduct1);
      });

      expect(result.current.items).toHaveLength(1);
      expect(result.current.items[0].quantity).toBe(2);
    });

    it('should remove item from cart', () => {
      const { result } = renderHook(() => useStore());

      act(() => {
        result.current.addItem(mockProduct1);
        result.current.addItem(mockProduct2);
      });

      act(() => {
        result.current.removeItem(mockProduct1.id);
      });

      expect(result.current.items).toHaveLength(1);
      expect(result.current.items[0].id).toBe(mockProduct2.id);
    });

    it('should update item quantity', () => {
      const { result } = renderHook(() => useStore());

      act(() => {
        result.current.addItem(mockProduct1);
        result.current.updateItemQuantity(mockProduct1.id, 5);
      });

      expect(result.current.items[0].quantity).toBe(5);
    });

    it('should remove item when quantity set to 0', () => {
      const { result } = renderHook(() => useStore());

      act(() => {
        result.current.addItem(mockProduct1);
        result.current.updateItemQuantity(mockProduct1.id, 0);
      });

      expect(result.current.items).toHaveLength(0);
    });

    it('should clear all items', () => {
      const { result } = renderHook(() => useStore());

      act(() => {
        result.current.addItem(mockProduct1);
        result.current.addItem(mockProduct2);
        result.current.clearCart();
      });

      expect(result.current.items).toHaveLength(0);
    });
  });

  describe('Calculations', () => {
    it('should calculate total items correctly', () => {
      const { result } = renderHook(() => useStore());

      act(() => {
        result.current.addItem(mockProduct1);
        result.current.addItem(mockProduct2);
        result.current.updateItemQuantity(mockProduct1.id, 3);
      });

      expect(result.current.getTotalItems()).toBe(4);
    });

    it('should calculate total price correctly', () => {
      const { result } = renderHook(() => useStore());

      act(() => {
        result.current.addItem(mockProduct1);
        result.current.addItem(mockProduct2);
        result.current.updateItemQuantity(mockProduct1.id, 2);
      });

      const expectedTotal = 10.99 * 2 + 25.5 * 1;
      expect(result.current.getTotalPrice()).toBe(expectedTotal);
    });

    it('should check if item is in cart', () => {
      const { result } = renderHook(() => useStore());

      act(() => {
        result.current.addItem(mockProduct1);
      });

      expect(result.current.isInCart(mockProduct1.id)).toBe(true);
      expect(result.current.isInCart(mockProduct2.id)).toBe(false);
    });

    it('should get item quantity', () => {
      const { result } = renderHook(() => useStore());

      act(() => {
        result.current.addItem(mockProduct1);
        result.current.updateItemQuantity(mockProduct1.id, 3);
      });

      expect(result.current.getItemQuantity(mockProduct1.id)).toBe(3);
      expect(result.current.getItemQuantity(mockProduct2.id)).toBe(0);
    });
  });

  describe('Hydration', () => {
    it('should handle hydration state', () => {
      const { result } = renderHook(() => useStore());

      act(() => {
        result.current.setHydrated(false);
      });

      expect(result.current.isHydrated).toBe(false);

      act(() => {
        result.current.setHydrated(true);
      });

      expect(result.current.isHydrated).toBe(true);
    });
  });
});
