import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Typography } from '../../components/Typography';

import { Colors } from '../../styles';

/**
 * @typedef { import("react").ReactNode } ReactNode
 */

/** @type {React.FunctionComponent<{
 *   textColor?: string;
 *   backgroundColor?: string;
 *   onPress: () => void;
 *   title: string;
 *   disabled: boolean;
 * }>} */
export const Button = ({ textColor, backgroundColor, onPress, title, disabled = false }) => {

  const dynamicBackgroundColor = () => {
    if (backgroundColor) return backgroundColor
    else if (disabled) return Colors.moonRaker
    else return Colors.secondaryBlue  
  }

  const dynamicTextColor = () => {
    if (textColor) return textColor
    else if (disabled) return Colors.tertiaryViolet
    else return Colors.white  
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      testID='assessment-button'>
      <View
        style={[
          styles.cta,
          {
            backgroundColor: dynamicBackgroundColor(),
          },
        ]}>
        <Typography use='body1' style={[styles.ctaText, { color: dynamicTextColor() }]}>
          {title}
        </Typography>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cta: {
    borderRadius: 10,
    paddingVertical: 22,
    paddingHorizontal: 14,
  },
  ctaText: {
    color: Colors.faintGray,
    textAlign: 'center',
  },
});
