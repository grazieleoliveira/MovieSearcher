import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from '~/shared/store';
import RadioButton from './index';

import * as S from './styles';

export interface RadioButtonProps {
  label: string;
  selected: any;
  checkRadio: (item: any) => void;
  data: any;
}

const RadioButtonList: React.FC<RadioButtonProps> = ({
  checkRadio,
  selected,
  data,
  label,
}) => {
  const { delta } = useSelector((state: ApplicationState) => state.font);
  return (
    <>
      <S.UserInputTitle fontSize={16 + delta}>{label}</S.UserInputTitle>
      <S.ButtonsList>
        {data.map((itemData: any) => (
          <RadioButton
            key={itemData.gender}
            onSelect={checkRadio}
            item={itemData}
            selected={selected}
          />
        ))}
      </S.ButtonsList>
    </>
  );
};
export default RadioButtonList;
