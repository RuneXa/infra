import React from 'react';
import { View } from 'react-native';
import { Avatar as PaperAvatar } from 'react-native-paper';

import useTheme from '../../helpers/useTheme';

export type AvatarIconProps = Readonly<OmitPaperTheme<typeof PaperAvatar.Icon>>;

export default function AvatarIcon(props: AvatarIconProps) {
  let { style, ref, ...otherProps } = props;
  const { style: themeStyle } = useTheme();
  return (
    <PaperAvatar.Icon
      ref={ref as React.RefObject<View>}
      style={[themeStyle?.avatarIcon?.style, style]}
      {...otherProps}
    />
  );
}
