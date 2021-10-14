import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '~/shared/store';

import * as S from './styles';

interface RadioButtonProps {
  item: any;
  selected: any;
  onSelect: (item: any) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  item,
  selected,
  onSelect,
}) => {
  const { delta } = useSelector((state: ApplicationState) => state.font);
  return (
    <S.ButtonContainer>
      <S.Button onPress={() => onSelect(item)}>
        {selected?.id === item.id && <S.CheckedButton />}
      </S.Button>
      <S.Label fontSize={16 + delta}>{item?.gender}</S.Label>
    </S.ButtonContainer>
  );
};

export default RadioButton;
