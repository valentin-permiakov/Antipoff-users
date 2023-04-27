import React from 'react';
import EyeOff from './EyeOff';
import EyeOn from './EyeOn';

export enum EIcons {
  eyeOff = 'EyeOff',
  eyeOn = 'EyeOn',
}

interface IIconProps {
  name: EIcons;
  width?: number;
  height?: number;
}

export const Icon = ({ name, width = 24, height = 24 }: IIconProps) => {
  const icons = {
    EyeOff: (
      <EyeOff
        height={height}
        width={width}
      />
    ),
    EyeOn: (
      <EyeOn
        height={height}
        width={width}
      />
    ),
  };
  return <span style={{ width: width, height: height }}>{icons[name]}</span>;
};
