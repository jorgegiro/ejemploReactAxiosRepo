import { create } from 'zustand';

const useUserStore = create((set, get) => ({
  usuarioActivo: null,

  isLogged: () => get().usuarioActivo != null,
  login: (userData) => set((state) => ({ usuarioActivo: userData })),
}));

export default useUserStore;