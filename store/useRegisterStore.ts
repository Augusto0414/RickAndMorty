import { registerService } from 'service/RegisterCharacterService';
import { create } from 'zustand';

interface Character {
  name: string;
  specie: string;
}

interface registerState {
  message: string | null;
  status: 'idle' | 'send' | 'error' | 'loading';
  sendCharacter: ({ name, specie }: Character) => Promise<void>;
}

export const useRegisterStore = create<registerState>((set) => ({
  message: null,
  status: 'idle',
  sendCharacter: async ({ name, specie }) => {
    try {
      set({ status: 'loading' });
      const { message } = await registerService.registerUsuario(name, specie);
      console.log('register', message);
      set({ status: 'send', message: message });
    } catch (error: any) {
      const errorMessage = error?.message || error?.data.message || error?.response.data.message;
      set({ status: 'error', message: errorMessage });
      throw error;
    }
  },
}));
