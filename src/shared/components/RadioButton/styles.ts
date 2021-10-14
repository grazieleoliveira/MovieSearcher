import styled from 'styled-components/native';
import { vs, s } from 'react-native-size-matters';
import { sfs } from '~/shared/utils/responsibleText';
import NewText from '~/shared/components/Text';

export const ButtonsList = styled.View`
  margin-top: ${vs(10)}px;
  align-self: flex-start;
  flex-direction: row;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: ${vs(10)}px;
`;

export const UserInputTitle = styled(NewText)`
  padding-top: 24px;
  color: ${({ theme }) => theme.Colors.INPUT_COLOR};
  font-family: Roboto-Regular;
`;

export const Button = styled.TouchableOpacity`
  height: ${s(24)}px;
  width: ${s(24)}px;
  border-radius: ${s(12)}px;
  border-width: ${s(2)}px;
  border-color: ${({ theme }) => theme.Colors.BUTTON_COLOR};
  align-items: center;
  justify-content: center;
`;

export const Label = styled(NewText)`
  font-family: 'Roboto-Regular';
  color: ${({ theme }) => theme.Colors.INPUT_COLOR};
  margin-left: ${s(12)}px;
`;

export const CheckedButton = styled.View`
  width: ${s(12)}px;
  height: ${s(12)}px;
  border-radius: ${s(6)}px;
  background-color: ${({ theme }) => theme.Colors.BUTTON_COLOR};
`;
