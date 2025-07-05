import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface ButtonProps {
  title: string;
  backgroundColor?: string;
  onPress?: () => void;
  navigateTo?: string;
  navigation?: any;
}

export const Button = ({ 
  title, 
  backgroundColor, 
  onPress, 
  navigateTo, 
  navigation 
}: ButtonProps) => {
  
  const handlePress = () => {
    if (navigateTo && navigation) {
      navigation.navigate(navigateTo);
    } else if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor }]} 
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>{title}</Text>
      <Text style={styles.buttonWhiteSquare}></Text>
    </TouchableOpacity>
  );
};