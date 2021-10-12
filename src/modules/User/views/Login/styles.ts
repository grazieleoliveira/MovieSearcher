import styled from 'styled-components/native';
import Input from '~/shared/components/Input';
import NewText from '~/shared/components/Text';
import { s } from '~/shared/utils/responsibleText';

export const Background = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  padding: 32px 24px;
  justify-content: center;
  background-color: ${({ theme }) => theme.Colors.BACKGROUND};
`;

export const AppImage = styled.Image`
  align-self: center;
  width: 228px;
  height: 181px;
`;

// export const Title = styled.Text`
//   color: ${themes.light.Colors.DARK_PURPLE};
//   font-size: ${themes.light.Sizes.FONTSIZE_TITLE};
//   font-family: Roboto-Medium;
//   padding-top: 50px;
// `;

export const Title = styled(NewText)`
  color: ${({ theme }) => theme.Colors.TITLE_FONT};
  padding-top: 50px;
  font-family: Roboto-Medium;
  align-self: center;
`;

export const Subtitle = styled(NewText)`
  font-family: Roboto-Regular;
  color: ${({ theme }) => theme.Colors.SUBTITLE};
  align-self: center;
  padding-bottom: ${s(20)}px;
`;

export const InputContainer = styled.View`
  flex-direction: column;
  justify-content: flex-end;
  padding: 12px 12px 32px 12px;
`;
export const UserInput = styled.TextInput`
  border-bottom-width: 1;
  border-color: ${({ theme }) => theme.Colors.INPUT_COLOR};
  padding: 6px;
  color: ${({ theme }) => theme.Colors.FONT_HOME};
`;

export const UserInputTitle = styled(NewText)`
  padding-top: 24px;
  color: ${({ theme }) => theme.Colors.INPUT_COLOR};
  font-family: Roboto-Regular;
`;

export const ButtonContainer = styled.View`
  align-self: center;
  width: 150;
`;

export const MyInputStyled = styled(Input)`
  color: ${({ theme }) => theme.Colors.FONT_HOME};
`;
