import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { styles } from './styles';

export const Header = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#586994" />
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.headerTitle}>Assist App</Text>
      </View>
    </>
  );
};

 