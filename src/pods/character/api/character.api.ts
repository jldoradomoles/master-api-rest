import { Character } from './character.api-model';
import axios from 'axios';

const url = 'https://rickandmortyapi.com/api';

export const getCharacter = async (id: string): Promise<Character> => {
  const response = await axios.get(`${url}/character/${id}`);
  return response.data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
