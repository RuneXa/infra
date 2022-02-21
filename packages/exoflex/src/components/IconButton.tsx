import React, { RefObject } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { IconButton as PaperIconButton } from 'react-native-paper';
import useTheme from '../helpers/useTheme';

export type IconButtonProps = OmitPaperTheme<typeof PaperIconButton>;

export default function IconButton(props: IconButtonProps) {
  const { style: themeStyle } = useTheme();
  let { style, ref, ...otherProps } = props;
  return (
    <PaperIconButton
      {...otherProps}
      ref={ref as RefObject<TouchableWithoutFeedback>}
      style={[themeStyle?.iconButton?.style, style]}
    />
  );
}
