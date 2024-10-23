import { CharacterEntityApi } from './character-collection.api-model';
import axios from 'axios';

const url = 'https://rickandmortyapi.com/api';

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const response = await axios.get(`${url}/character`);
  return response.data.results;
};

export const getCharacter = async (id: string): Promise<CharacterEntityApi> => {
  const response = await axios.get(`${url}/character/${id}`);
  return response.data;
};
