import { useCharacterStore } from 'store/useCharacterStore';

export const useCharacter = () => {
  const { characters } = useCharacterStore();
  const setSpecies = new Set<string>();
  const setGenders = new Set<string>();

  characters.map((character) => {
    const { species, gender } = character;
    if (!setSpecies.has(species)) {
      setSpecies.add(species);
    }
    if (!setGenders.has(gender)) {
      setGenders.add(gender);
    }
  });

  const speciesCount = Array.from(setSpecies).length;
  const gendersCount = Array.from(setGenders).length;
  return {
    species: Array.from(setSpecies),
    genders: Array.from(setGenders),
    speciesCount,
    gendersCount,
  };
};
