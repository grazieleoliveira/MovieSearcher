import { useRoute } from '@react-navigation/core';
import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { ApplicationState } from '~/shared/store';
import { Info } from './components/Info';
import * as S from './styles';

export function MovieInfo() {
  const route = useRoute();
  const { movie, loading } = useSelector(
    (state: ApplicationState) => state.movies,
  );
  const [moreText, setMoreText] = useState(false);
  return (
    <S.Background>
      <S.Container>
        {loading ? (
          <S.ActivityContainer>
            <ActivityIndicator size="large" />
          </S.ActivityContainer>
        ) : (
          <>
            <S.MainTitle fontSize={24}>{movie?.original_title}</S.MainTitle>
            <S.Time fontSize={13}>
              {movie?.release_date
                ? movie?.release_date.toString().slice(0, 4)
                : 'Unknown Date'}{' '}
              {' · '}
              {movie?.runtime ? `${movie?.runtime} min` : 'Unknown runtime'}
            </S.Time>
            <S.Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500/${movie?.poster_path}`,
              }}
            />
            {movie?.tagline === undefined && (
              <S.Tagline numberOfLines={1} fontSize={13}>
                {' '}
                {movie?.tagline.toUpperCase()}
              </S.Tagline>
            )}
            <S.Description numberOfLines={!moreText ? 3 : 0} fontSize={13}>
              {movie?.overview ? movie?.overview : 'No description'}
            </S.Description>
            {movie?.overview && (
              <S.ShowText fontSize={12} onPress={() => setMoreText(!moreText)}>
                {moreText ? '...show less' : '...show more'}
              </S.ShowText>
            )}
            <S.AboutText fontSize={20}>About this title</S.AboutText>
            <S.AboutInfos fontSize={13}>
              Status:{' '}
              <S.AboutInfosText fontSize={13}>
                {movie?.status ? movie?.status : 'Unknown Status'}
              </S.AboutInfosText>
            </S.AboutInfos>
            <S.AboutInfos fontSize={13}>
              Rating:{' '}
              <S.AboutInfosText fontSize={13}>
                {movie?.vote_average
                  ? `${movie?.vote_average}/10`
                  : 'Unknown Ratings'}
              </S.AboutInfosText>
            </S.AboutInfos>
            <S.AboutInfos fontSize={13}>
              Original Language:{' '}
              <S.AboutInfosText fontSize={13}>
                {movie?.original_language
                  ? movie?.original_language.toUpperCase()
                  : 'Unknown Language'}
              </S.AboutInfosText>
            </S.AboutInfos>
          </>
        )}
      </S.Container>
      <S.Footer />
    </S.Background>
  );
}
