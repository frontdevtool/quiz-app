import { create } from 'zustand';

export const useCartStore = create((set,get) => ({
  cart: [],

  // إضافة منتج أو زيادة كميته إذا كان موجود
  addToCart: (product) => set((state) => {
    const exists = state.cart.find(item => item.id === product.id);
    if (exists) {
      return {
        cart: state.cart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      };
    }
    return { cart: [...state.cart, { ...product, quantity: 1 }] };
  }),

  // حذف منتج بالكامل
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter(item => item.id !== id)
  })),

  // زيادة الكمية من داخل السلة
  increaseQuantity: (id) => set((state) => ({
    cart: state.cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  })),

  // إنقاص الكمية من داخل السلة (مع الحذف إذا وصلت للصفر)
  decreaseQuantity: (id) => set((state) => ({
    cart: state.cart
      .map(item =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0) // حذف المنتج إذا أصبحت كميته صفر
  })),

  // تفريغ السلة
  clearCart: () => set({ cart: [] }),

  // 🆕 دالة لحساب المجموع الكلي
  getTotalPrice: () => {
    const { cart } = get();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}));




