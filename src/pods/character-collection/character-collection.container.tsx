import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
// import { deleteHotel } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharecterCollectionComponent } from './character-collection.component';
import { Button } from '@mui/material';
import * as classes from './character-collection.styles';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection } = useCharacterCollection();
  const [page, setPage] = React.useState(0);
  const [endPage, setEndtPage] = React.useState(3);
  const [filteredCharacterCollection, setFilteredCharacterCollection] = React.useState(characterCollection);
  const navigate = useNavigate();

  React.useEffect(() => {
    if(page >= 0 && endPage >= 3) {
      console.log('entra');
      loadCharacterCollection(page,endPage);
    }
  }, [page, endPage]);

 
  const handleEdit = (id: string) => {
    navigate(linkRoutes.editCharacter(id));
  };

  const handlePageChange = (action: string) => {
    const newPage = action === 'next' ? page + 3 : page - 3;
    const newEndPage = action === 'next' ? endPage + 3 : endPage - 3;
    if (newPage >= 0 && newPage < 19) setPage(newPage);
    if (newEndPage >= 3 && newEndPage < 22) setEndtPage(newEndPage);
  };

 


  return (
    <div>
      <CharecterCollectionComponent
      characterCollection={filteredCharacterCollection.length > 0 ? filteredCharacterCollection : characterCollection}
      onEdit={handleEdit}
    />
    <div className={classes.root}></div>
    <Button className='pre-btn' variant="contained" color="primary" onClick={() => handlePageChange('prev')}>
      Previous
    </Button>
    <Button className={classes.button} variant="contained" color="primary" onClick={() => handlePageChange('next')}>
      Next
    </Button>
    <div>
      <input
        className='search-input'
        type="text"
        placeholder="Busca por nombre de personaje"
        onChange={(e) => {
          const searchTerm = e.target.value.toLowerCase();
          const filteredCharacters = characterCollection.filter(character =>
            character.name.toLowerCase().includes(searchTerm)
          );
          console.log(filteredCharacters);
          
          setFilteredCharacterCollection(filteredCharacters);
          
        }}
      />
    </div>
  
    </div>
    
  );
};
