import React from 'react';
import EyeOff from './EyeOff';
import EyeOn from './EyeOn';
import PhoneIcon from './PhoneIcon';
import EmailIcon from './EmailIcon';
import ArrowIcon from './ArrowIcon';
import ExitIcon from './ExitIcon';
import BackIcon from './BackIcon';

export enum EIcons {
  eyeOff = 'EyeOff',
  eyeOn = 'EyeOn',
  phoneIcon = 'PhoneIcon',
  emailIcon = 'EmailIcon',
  arrowIcon = 'ArrowIcon',
  exitIcon = 'ExitIcon',
  backIcon = 'BackIcon',
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
    PhoneIcon: (
      <PhoneIcon
        height={height}
        width={width}
      />
    ),
    EmailIcon: (
      <EmailIcon
        height={height}
        width={width}
      />
    ),
    ArrowIcon: (
      <ArrowIcon
        height={height}
        width={width}
      />
    ),
    ExitIcon: (
      <ExitIcon
        height={height}
        width={width}
      />
    ),
    BackIcon: (
      <BackIcon
        height={height}
        width={width}
      />
    ),
  };
  return <span style={{ width: width, height: height }}>{icons[name]}</span>;
};
