import React from 'react';
import { View } from 'react-native';
import { Avatar as PaperAvatar } from 'react-native-paper';

import useTheme from '../../helpers/useTheme';

export type AvatarImageProps = Readonly<
  OmitPaperTheme<typeof PaperAvatar.Image>
>;

export default function AvatarImage(props: AvatarImageProps) {
  let { style, ref, ...otherProps } = props;
  const { style: themeStyle } = useTheme();
  return (
    <PaperAvatar.Image
      ref={ref as React.RefObject<View>}
      style={[themeStyle?.avatarImage?.style, style]}
      {...otherProps}
    />
  );
}
