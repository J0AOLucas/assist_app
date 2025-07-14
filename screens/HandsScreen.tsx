import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles';
import { Header } from '../components/Header';
import { Button } from '../components/Button';

export const HandsScreen = ({ navigation }) => {
  return (
    <View style={[styles.container, { backgroundColor:'#c2dbef' }]}>
      <Header />
      <Text style={styles.title}>Hands-On</Text>
      <Image
        source={require('../assets/Hands.png')}
        style={{ width: 200, height: 200, marginBottom: 20 }}
        resizeMode="contain"
      />
      <Text style={styles.text}>Content Hands-On Learning.</Text>
      <Button 
        title="Back" 
        backgroundColor="#FF3B30"
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.text}>Tactile or kinesthetic learners understand best through physical interaction, using movement and hands-on activities to engage with material. They learn by doing—touching, building, manipulating objects—and often thrive in active environments. These learners typically have strong fine motor skills and an intuitive grasp of physical tasks, such as those involved in engineering or crafts. 

        Their natural awareness of space and surroundings helps them process information through experience rather than abstract thinking.
        However, tactile learners may struggle with sitting still for long periods or remembering verbal instructions. To support them, it's helpful to incorporate tools like flashcards, physical models, and classroom props. Allowing movement, creative expression, or project-based learning can boost focus and retention. Field trips and interactive lessons are especially beneficial, as they let these learners connect directly with what they’re studying through real-world experience.
      </Text>
    </View>
  );
};
