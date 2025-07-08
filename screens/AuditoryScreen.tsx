import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';
import { Header } from '../components/Header';
import { Button } from '../components/Button';

export const AuditoryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Auditory</Text>
      <Text style={styles.text}>Content Auditory Learning.</Text>
      <Text style={styles.text}>Hello, this is a test.</Text>
      <Button 
        title="Back" 
        backgroundColor="#FF3B30"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};
