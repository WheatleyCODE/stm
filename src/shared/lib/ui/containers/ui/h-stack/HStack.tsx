import { FC } from 'react';
import { Flex } from '../flex/Flex';
import type { IHStackProps } from './HStack.interface';

export const HStack: FC<IHStackProps> = (props) => {
  return <Flex {...props} direction="row" />;
};
