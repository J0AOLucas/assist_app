import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';
import { Header } from '../components/Header';
import { Button } from '../components/Button';

export const HandsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Hands-On</Text>
      <Text style={styles.text}>Content Hands-On Learning.</Text>
      <Button 
        title="Back" 
        backgroundColor="#FF3B30"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};
