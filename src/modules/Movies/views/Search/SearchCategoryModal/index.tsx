import React from 'react';
import { useDispatch } from 'react-redux';
import { searchByGenreAction } from '~/modules/Movies/store/ducks/actions';
import { GENRES } from '../categoryList';

import * as S from './styles';

interface ModalCategoriesProps {
  closeModal: () => void;
  successCloseModal: (id: string) => void;
}

const ModalCategories: React.FC<ModalCategoriesProps> = ({
  closeModal,
  successCloseModal,
}) => {
  const dispatch = useDispatch();

  const renderGenre = ({ item }) => {
    const searchByGenre = (id: number) => {
      dispatch(searchByGenreAction(id.toString(), '1'));
      successCloseModal(id.toString());
    };
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
