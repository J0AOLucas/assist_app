import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { styles } from '../styles';
import { Header } from '../components/Header';
import { Button } from '../components/Button';

export const HandsScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <Header />
      
      <Text style={[styles.title, { paddingTop: 20 }]}>Hands-On</Text>
      <Image
        source={require('../assets/hands_on.png')}
        style={styles.home_image}
        resizeMode="contain"
      />
      <Text style={styles.text}>Content Hands-On Learning.</Text>

      <Text style={styles.text}>Tactile or kinesthetic learners understand best through physical interaction, using movement and hands-on activities to engage with material. They learn by doing—touching, building, manipulating objects—and often thrive in active environments. These learners typically have strong fine motor skills and an intuitive grasp of physical tasks, such as those involved in engineering or crafts. 

        Their natural awareness of space and surroundings helps them process information through experience rather than abstract thinking.
        However, tactile learners may struggle with sitting still for long periods or remembering verbal instructions. To support them, it's helpful to incorporate tools like flashcards, physical models, and classroom props. Allowing movement, creative expression, or project-based learning can boost focus and retention. Field trips and interactive lessons are especially beneficial, as they let these learners connect directly with what they’re studying through real-world experience.
      </Text>
      
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <Text style={styles.text}>Source: WGU Blog - What is Tactile Learning?
        <TouchableOpacity onPress={() => Linking.openURL('https://www.wgu.edu/blog/what-tactile-learning2008.html#:~:text=Kinesthetic%20or%20tactile%20learners%20need,by%20trying%20it%20out%20themselves.') }>
          <Text style={{ color: '#1B95E0', textDecorationLine: 'underline' }}>
            wgu.edu
          </Text>
        </TouchableOpacity>
        </Text>
      </View>
      
      <Button 
          title="Back" 
          backgroundColor="#FF3B30"
          onPress={() => navigation.goBack()}
        />
    </ScrollView>
  );
};
