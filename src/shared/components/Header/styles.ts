import styled from 'styled-components/native';

import { s, sfs, vs } from '~/shared/utils/responsibleText';

import Icon from '~/shared/components/Icon';
import Text from '~/shared/components/Text';

export const Container = styled.View`
  height: ${vs(50)}px;
  background: ${({ theme }) => theme.Colors.COLOR_APLICATION};
  flex-direction: row;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  justify-content: space-between;
`;

export const ContainerFont = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const RestoreFont = styled(Text).attrs({
  fontSize: sfs(25),
})`
  font-weight: bold;
  color: ${({ theme }) => theme.Colors.DEFAULT_FONT};
  margin-right: 20px;
  margin-left: 18px;
`;

export const DecreaseIncreaseFont = styled(Text).attrs({
  fontSize: sfs(25),
})`
  font-weight: bold;
  color: ${({ theme }) => theme.Colors.DEFAULT_FONT};
`;

export const Button = styled.TouchableOpacity``;

export const IconColor = styled(Icon).attrs(({ theme }) => ({
  name: 'invert-colors',
  size: theme.Sizes.ICON_SIZE,
}))`
  color: ${({ theme }) => theme.Colors.DEFAULT_FONT};
  margin-right: ${s(16)}px;
`;

export const BackIcon = styled(Icon).attrs(({ theme }) => ({
  name: 'arrow-back',
  type: 'ionicons',
  size: theme.Sizes.ICON_SIZE,
}))`
  color: ${({ theme }) => theme.Colors.DEFAULT_FONT};
`;
