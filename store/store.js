import questions from "@/data/questions";
import { create } from "zustand";

export const useQuestion = create((set, get) => ({
  questionIndex: 0,
  selected: "",
  score: 0,
  question : {},

  currentQuestion: ()=>{
     const { questionIndex ,question} = get()
    set({question : questions[questionIndex]})
  },

  nextQ: () => set((state) => ({ questionIndex: state.questionIndex + 1 })),
  prevQ: () => set((state) => ({ questionIndex: state.questionIndex -1 })),


  setScore: () => set((state) => ({ score: state.score + 1 })),

  setSelected: (text) => set(() => ({ selected: text })),
  // currentQuestion: () => questions[get().questionIndex],
  resetQ: () => set(() => ({
    questionIndex: 0,
    selected: "",
    score: 0,
  })),
  user: null,
    logout: () => set({ user: null }),
  login: (username) => set({ user: username }),
  isLoggedIn: () => {
    const { user } = get()
    console.log('==>', user !== null  )
    return user !== null
  }

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
