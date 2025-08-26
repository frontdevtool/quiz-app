import questions from "@/data/questions";
import { create } from "zustand";

export const useQuestion = create((set, get) => ({
  questionIndex: 0,
  selected: "",
  score: 0,
  // currentQuestion: questions[0],

  nextQ: () => set((state) => ({ questionIndex: state.questionIndex + 1 })),
  prevQ: () => set((state) => ({ questionIndex: state.questionIndex -1 })),


  setScore: () => set((state) => ({ score: state.score + 1 })),

  setSelected: (text) => set(() => ({ selected: text })),
  currentQuestion: () => questions[get().questionIndex],
  resetQ: () => set(() => ({
    questionIndex: 0,
    selected: "",
    score: 0,
  })),

  // إضافة منتج أو زيادة كميته إذا كان موجود
  // addToCart: (product) => set((state) => {
  //   const exists = state.cart.find(item => item.id === product.id);
  //   if (exists) {
  //     return {
  //       cart: state.cart.map(item =>
  //         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
  //       )
  //     };
  //   }
  //   return { cart: [...state.cart, { ...product, quantity: 1 }] };
  // }),

  // // حذف منتج بالكامل
  // removeFromCart: (id) => set((state) => ({
  //   cart: state.cart.filter(item => item.id !== id)
  // })),

  // // زيادة الكمية من داخل السلة
  // increaseQuantity: (id) => set((state) => ({
  //   cart: state.cart.map(item =>
  //     item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  //   )
  // })),

  // // إنقاص الكمية من داخل السلة (مع الحذف إذا وصلت للصفر)
  // decreaseQuantity: (id) => set((state) => ({
  //   cart: state.cart
  //     .map(item =>
  //       item.id === id ? { ...item, quantity: item.quantity - 1 } : item
  //     )
  //     .filter(item => item.quantity > 0) // حذف المنتج إذا أصبحت كميته صفر
  // })),

  // // تفريغ السلة
  // clearCart: () => set({ cart: [] }),

  // // 🆕 دالة لحساب المجموع الكلي
  // getTotalPrice: () => {
  //   const { cart } = get();
  //   return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  // }
}));
