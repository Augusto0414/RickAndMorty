import { Result } from 'types/characterType';

class CharacterService {
  baseUrl = 'https://rickandmortyapi.com/api'; // -> Este base url deberia estar en el archivo .env pero como es practica no pasa nada
  getCharacters = async (): Promise<{ data: Result[] }> => {
    try {
      const response = await fetch(`${this.baseUrl}/character/?page=5`);
      if (response.status !== 200) {
        throw new Error(`Error: recivio el status ${response.status}`);
      }
      const data = await response.json();
      const results: Result[] = data.results.map((character: any) => ({
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        gender: character.gender,
        image: character.image,
      }));
      return { data: results };
    } catch (error: any) {
      const msj = error.message || 'Error al cargar los usuarios';
      throw new Error(msj);
    }
  };
}

export const service = new CharacterService();
