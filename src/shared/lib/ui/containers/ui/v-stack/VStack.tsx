import { FC } from 'react';
import { Flex } from '../flex/Flex';
import type { IVStackProps } from './VStack.interface';

export const VStack: FC<IVStackProps> = (props) => {
  return <Flex {...props} direction="col" />;
};
