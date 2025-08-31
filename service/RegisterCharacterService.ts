import { addDoc, collection } from 'firebase/firestore';
import { db } from 'utils/firebase';
class RegisterCharacterService {
  registerUsuario = async (nombre: string, specie: string): Promise<{ message: string }> => {
    try {
      await addDoc(collection(db, 'characters'), {
        nombre,
        specie,
        creadoEn: new Date(),
      });
      return {
        message: 'Personaje creado con éxito',
      };
    } catch (error: any) {
      const errorMessage = error?.message || error?.data.message || error?.response.data.message;
      return {
        message: errorMessage,
      };
    }
  };
}
export const registerService = new RegisterCharacterService();
