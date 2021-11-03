import React from 'react';
import dayjs from 'dayjs';

export interface Props {
  children: string;
}

export const Timestamp = (props: Props) => {
  return <p>{dayjs(props.children).format('YYYY/MM/DD')}</p>;
};
