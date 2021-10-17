import styled from 'styled-components/native';
import { s, vs } from 'react-native-size-matters';

import { sfs } from '~/shared/utils/responsibleText';
import NewText from '~/shared/components/Text';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.Colors.GRAY_SCREEN};
  flex: 1;
  padding: ${s(10)}px;
  align-items: center;
  justify-content: center;
`;

export const Main = styled.View`
  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
  padding: ${s(20)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${vs(10)}px;
  width: 100%;
`;

export const Touchable = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${vs(10)}px;
  width: 100%;
`;

export const Button = styled.TouchableOpacity`
  width: 60%;
  height: ${vs(50)}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.Colors.GO_BACK_COLOR};
  justify-content: center;
  align-items: center;
  border-radius: ${vs(10)}px;
  margin-top: ${vs(10)}px;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  font-size: ${sfs(20)}px;
  color: ${({ theme }) => theme.Colors.GO_BACK_COLOR};
`;

export const Title = styled(NewText)`
  color: ${({ theme }) => theme.Colors.FONT_HOME};
  margin-bottom: ${vs(10)}px;
  font-family: 'Roboto-Medium';
`;

export const CategoryTitle = styled.Text`
  font-size: ${sfs(14)}px;
  color: ${({ theme }) => theme.Colors.CATEGORY_CLICKABLE};
  margin-bottom: ${vs(10)}px;
  margin-right: ${vs(10)}px;
  font-family: 'Roboto-Medium';
`;

export const StatusBar = styled.StatusBar.attrs(({ theme }) => ({
  backgroundColor: theme.Colors.STTS_BAR,
}))``;

export const ListView = styled.View``;

export const List = styled.FlatList`
  width: 100%;
`;

export const ButtonContainer = styled.View`
  align-self: center;
  width: 150px;
`;
