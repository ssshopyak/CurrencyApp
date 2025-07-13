import {ReactNode} from 'react';

export interface IHeader {
  title: string;
  onBack?: () => void;
  rightButton?: ReactNode;
}