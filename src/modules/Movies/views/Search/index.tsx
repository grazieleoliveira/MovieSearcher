import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { MOVIE_INFO } from '~/shared/constants/routeNames';
import { ApplicationState } from '~/shared/store';
import themes from '~/shared/themes';
import { searchMoviesAction } from '../../store/ducks/actions';
import { renderMovie } from '../Home';
import ModalCategories from './SearchCategoryModal';
import * as S from './styles';

export function Search() {
  const { delta } = useSelector((state: ApplicationState) => state.font);
  const { searchMovies, loading } = useSelector(
    (state: ApplicationState) => state.movies,
  );

  const navigation = useNavigation();
  const [textSearch, setTextSearch] = useState<string>('');
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const dispatch = useDispatch();
  const getSearchedMovies = () => {
    if (!loading) {
      dispatch(searchMoviesAction(textSearch));
    }
  };

  function navigateToMovie() {
    navigation.navigate(MOVIE_INFO);
  }
  const closeModal = () => {
    setModalIsVisible(false);
  };
  return (
    <S.Background>
      <S.Container>
        <S.SearchArea>
          <S.MaterialIcon
            name="search"
            color={themes.light.Colors.GREY}
            size={themes.light.Sizes.ICON_SIZE}
          />
          <S.SearchInput
            placeholder="Find a movie!"
            placeholderTextColor={themes.light.Colors.GREY}
            customFontSize={delta + 17}
            value={textSearch}
            onChangeText={setTextSearch}
            onSubmitEditing={getSearchedMovies}
          />
        </S.SearchArea>
        <S.SearchByGenderText
          onPress={() => {
            setModalIsVisible(true);
            setTextSearch('');
          }}>
          ...ou busque por categorias
        </S.SearchByGenderText>
        {loading ? (
          <S.IndicatorContainer>
            <ActivityIndicator size="large" />
          </S.IndicatorContainer>
        ) : (
          <S.List
            data={searchMovies}
            extraData={searchMovies}
            renderItem={(item) => renderMovie(item, navigateToMovie)}
            keyExtractor={(item: any) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={{ height: 150 }} />}
          />
        )}
      </S.Container>
      <Modal
        transparent
        visible={modalIsVisible}
        onRequestClose={() => {
          setModalIsVisible(true);
        }}>
        <ModalCategories closeModal={() => closeModal()} />
      </Modal>
    </S.Background>
  );
}
