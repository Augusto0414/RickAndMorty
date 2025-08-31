import { service } from 'service/CharacterService';
import { Result } from 'types/characterType';
import { create } from 'zustand';

export interface CharactersState {
  error: boolean;
  message: string | null;
  characters: Result[];
  status: 'idle' | 'loading' | 'error' | 'success';
  getCharacters: () => Promise<void>;
}

export const useCharacterStore = create<CharactersState>((set) => ({
  error: false,
  message: null,
  characters: [],
  status: 'idle',
  getCharacters: async () => {
    set({ status: 'loading' });
    try {
      const response = await service.getCharacters();
      set({ characters: response.data, status: 'success' });
    } catch (error: any) {
      set({ error: true, message: error.message, status: 'error' });
    }
  },
}));
