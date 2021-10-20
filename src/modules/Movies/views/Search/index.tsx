import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { ActivityIndicator, Modal, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { MOVIE_INFO } from '~/shared/constants/routeNames';
import { ApplicationState } from '~/shared/store';
import themes from '~/shared/themes';
import {
  searchByGenreAction,
  searchMoviesAction,
} from '../../store/ducks/actions';
import { renderMovie } from '../Home';
import ModalCategories from './SearchCategoryModal';
import * as S from './styles';

export function Search() {
  const { delta } = useSelector((state: ApplicationState) => state.font);
  const { searchMovies, loading } = useSelector(
    (state: ApplicationState) => state.movies,
  );

  const [textSearch, setTextSearch] = useState<string>('');
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [page, setPage] = useState(1);
  const [isByGenre, setIsByGenre] = useState(false);
  const [genreId, setGenreId] = useState('');

  // verificar se uma mesma query foi chamada mais de 1x
  const [queryMore, setQueryMore] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const getSearchedMovies = () => {
    setQueryMore(false);
    setIsByGenre(false);
    if (!loading) {
      dispatch(searchMoviesAction(textSearch, '1'));
      setPage(2);
    }
  };

  const getMoreSearchedMovies = () => {
    setQueryMore(true);
    if (!loading) {
      if (isByGenre) {
        dispatch(searchByGenreAction(genreId, page.toString()));
      } else {
        dispatch(searchMoviesAction(textSearch, page.toString()));
        setPage(page + 1);
      }
    }
  };
  function navigateToMovie() {
    navigation.navigate(MOVIE_INFO);
  }
  const closeModal = () => {
    setModalIsVisible(false);
    setQueryMore(true);
  };

  function successCloseModal(id: string) {
    setModalIsVisible(false);
    setTextSearch('');
    setIsByGenre(true);
    setPage(2);
    setGenreId(id);
  }
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
        <S.SearchByGenreText
          onPress={() => {
            setModalIsVisible(true);
            setQueryMore(false);
          }}>
          ...ou busque por categorias
        </S.SearchByGenreText>
        {loading && !queryMore ? (
          <S.IndicatorContainerMovies>
            <ActivityIndicator size="large" />
          </S.IndicatorContainerMovies>
        ) : (
          <S.List
            data={searchMovies}
            extraData={searchMovies}
            renderItem={(item) => renderMovie(item, navigateToMovie)}
            keyExtractor={(item: any) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={
              loading ? (
                <S.IndicatorContainer>
                  <ActivityIndicator size="large" />
                </S.IndicatorContainer>
              ) : (
                searchMovies[0] && (
                  <S.TouchableFooter onPress={() => getMoreSearchedMovies()}>
                    <S.TextFooter fontSize={16}>Load More</S.TextFooter>
                  </S.TouchableFooter>
                )
              )
            }
          />
        )}
      </S.Container>
      <Modal
        transparent
        visible={modalIsVisible}
        onRequestClose={() => {
          setModalIsVisible(true);
        }}>
        <ModalCategories
          closeModal={() => closeModal()}
          successCloseModal={(id) => successCloseModal(id)}
        />
      </Modal>
    </S.Background>
  );
}
