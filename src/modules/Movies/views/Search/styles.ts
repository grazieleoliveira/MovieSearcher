import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NewText from '~/shared/components/Text';
import themes from '~/shared/themes';
import { s, vs } from '~/shared/utils/responsibleText';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Background = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
`;

export const Container = styled.View`
  padding: 24px;
`;
export const SearchArea = styled.View`
  margin-top: ${s(12)}px;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.Colors.BACKGROUND_INPUT};
  border-radius: 10px;
  font-size: 16px;
  padding-left: 16px;
  flex-direction: row;
  border: 2px solid ${({ theme }) => theme.Colors.BORDER_SEARCH};
  align-items: center;
  margin-bottom: 10px;
`;

export const SearchInput = styled.TextInput`
  font-size: ${({ customFontSize }) => customFontSize}px;
  font-family: Roboto-Medium;
  width: 100%;
  color: ${({ theme }) => theme.Colors.FONT_HOME};
`;

export const MaterialIcon = styled(Icon)`
  color: ${({ theme }) => theme.Colors.BORDER_PROFILE};
  padding-right: 5px;
`;

export const IndicatorContainer = styled.View`
  padding-top: 50px;
`;
export const List = styled.FlatList`
  width: 100%;
`;

export const Touchable = styled.TouchableOpacity`
  width: 100%;
`;

export const SearchByGenderText = styled(NewText)`
  font-family: Roboto-Medium;
  color: ${({ theme }) => theme.Colors.SEARCH_BY_CATEGORY_TEXT};
  padding-left: ${s(10)}px;
  align-self: flex-end;
`;
