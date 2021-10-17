import React from 'react';
import {
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import {
  searchByGenreAction,
  searchMoviesAction,
} from '~/modules/Movies/store/ducks/actions';
import { GENRES, GenresProps } from '../categoryList';

import * as S from './styles';

interface ModalCategoriesProps {
  closeModal: () => void;
}

const ModalCategories: React.FC<ModalCategoriesProps> = ({ closeModal }) => {
  const dispatch = useDispatch();

  const renderGenre = ({ item }) => {
    const searchByGenre = (id: number) => {
      dispatch(searchByGenreAction(id.toString()));
      closeModal();
    };
    let abc;
    console.tron.log('ITEM', item);
    return (
      <S.CategoryTitle onPress={() => searchByGenre(item.id)}>
        {item.name}
      </S.CategoryTitle>
    );
  };
  return (
    //  onPress={() => closeModal()}
    <S.Container>
      <S.StatusBar />
      <S.Main>
        <S.Title fontSize={20}>Selecione uma categoria:</S.Title>
        <S.List
          data={GENRES}
          extraData={GENRES}
          renderItem={renderGenre}
          keyExtractor={(item: any) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={4}
          columnWrapperStyle={{ justifyContent: 'space-evenly' }}
        />
        <S.Button onPress={() => closeModal()}>
          <S.ButtonText>Voltar</S.ButtonText>
        </S.Button>
      </S.Main>
    </S.Container>
  );
};

export default ModalCategories;
