import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
// import { deleteHotel } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharecterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

 
  const handleEdit = (id: string) => {
    navigate(linkRoutes.editCharacter(id));
  };


  return (
    <CharecterCollectionComponent
      characterCollection={characterCollection}
      onEdit={handleEdit}
    />
  );
};
