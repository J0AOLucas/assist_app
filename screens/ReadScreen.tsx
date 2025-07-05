import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';
import { Header } from '../components/Header';
import { Button } from '../components/Button';

export const ReadScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Read/Write</Text>
      <Text style={styles.text}>Content Visual Learning.</Text>
      <Button 
        title="Back" 
        backgroundColor="#FF3B30"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};
