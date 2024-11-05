import { CharacterEntityApi } from './character-collection.api-model';
import axios from 'axios';

const url = 'http://localhost:3000';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const response = await axios.get(`${url}/characters`);
  if (!response) {
    throw new Error('Failed to fetch characters');
  }
  return response.data;
};

export const getCharacter = async (id: string): Promise<CharacterEntityApi> => {
  const response = await axios.get(`${url}/character/${id}`);
  return response.data;
};
