import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from '../styles';
import { Header } from '../components/Header';
import { Button } from '../components/Button';

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <Text style={styles.title}>Welcome</Text>
        <Image source={require('../assets/home_main_picture.png')} style={styles.home_image} />
        <Text style={styles.text}>Hi there! Welcome to the Goat Learning your new 
          favorite place to understand the vary types of learning. We're thrilled 
          you joined our community and can't wait for you to experience all the 
          amazing things you can do here. Enjoy!"</Text>
        <Button 
          title="Auditory" 
          backgroundColor="#FFAE51"
          navigateTo="Auditory"
          navigation={navigation}
        />
        <Button 
          title="Visual" 
          backgroundColor="#3BBFCC"
          navigateTo="Visual"
          navigation={navigation}
        />
        <Button 
          title="Read/Write" 
          backgroundColor="#FC5A8B"
          navigateTo="ReadWrite"
          navigation={navigation}
        />
        <Button 
          title="Hands-On" 
          backgroundColor="#63A1D5"
          navigateTo="Hands"
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
}; 