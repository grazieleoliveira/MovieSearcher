import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MOVIE_INFO, PROFILE } from '~/shared/constants/routeNames';
import movies, { ApplicationState } from '~/shared/store';

import themes from '~/shared/themes';
import {
  getMovieByIdAction,
  getPopularMoviesAction,
  searchMoviesAction,
} from '~/modules/Movies/store/ducks/actions';
import * as S from './styles';
import { MovieInfoProps } from '../../dtos';

export const renderMovie = ({ item }, navigate) => {
  const getMovie = (item) => {
    movies.dispatch(getMovieByIdAction(item.id.toString()));
    navigate();
  };

  let banana;
  return (
    <S.BookView onPress={() => getMovie(item)} activeOpacity={0.7}>
      <S.ImageInfoContainer>
        <S.ImageBook
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          }}
        />
        <S.TitleDescriptionContainer>
          <S.NewTitle numberOfLines={1} fontSize={20}>
            {item.title}
          </S.NewTitle>
          <S.PublishedDate numberOfLines={1} fontSize={12}>
            {item.release_date ? item.release_date : 'Unknown date'}
          </S.PublishedDate>
          <S.Description numberOfLines={4} fontSize={13}>
            {item.overview ? item.overview : 'No description'}
          </S.Description>
        </S.TitleDescriptionContainer>
      </S.ImageInfoContainer>
    </S.BookView>
  );
};

export function Home() {
  const navigation = useNavigation();

  const { currentUser } = useSelector((state: any) => state.profile);
  const { listMovies, loading } = useSelector(
    (state: ApplicationState) => state.movies,
  );

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  function handleNavigate() {
    navigation.navigate(PROFILE);
  }

  function navigateToMovie() {
    navigation.navigate(MOVIE_INFO);
  }

  // fazer paginacao se sobrar tempo
  useEffect(() => {
    dispatch(getPopularMoviesAction(page.toString()));
  }, [dispatch]);

  console.tron.log('LISTMOVIES', listMovies);
  // const getBooks = () => {
  //   if (!loading) {
  //     dispatch(getBooksAction(textSearch));
  //   }
  // };

  // const getBook = (item: BookInfo) => {
  //   dispatch(getBookInfoAction(item.id));
  //   navigation.navigate(BOOK_INFO, { item });
  // };

  return (
    <S.Background>
      <S.Container>
        <S.Header>
          <S.NewTitle fontSize={36}>Trending</S.NewTitle>
          <S.ProfileIcon onPress={() => handleNavigate()}>
            {currentUser?.image !== '' && (
              <S.Image source={{ uri: currentUser.image }} />
            )}
          </S.ProfileIcon>
        </S.Header>
        {loading ? (
          <S.IndicatorContainer>
            <ActivityIndicator size="large" />
          </S.IndicatorContainer>
        ) : (
          <S.List
            data={listMovies}
            extraData={listMovies}
            renderItem={(item) => renderMovie(item, navigateToMovie)}
            keyExtractor={(item: any) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={{ height: 150 }} />}
          />
        )}
      </S.Container>
    </S.Background>
  );
}
