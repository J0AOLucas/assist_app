import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles';
import { Header } from '../components/Header';
import { Button } from '../components/Button';

export const VisualScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
<Button 
  title="Back" 
  backgroundColor="#FF3B30"
  onPress={() => navigation.goBack()}
/>
      <Header />
      <Text style={styles.title}>Visual</Text>
      {/* heading image */}
      <Image source={require('../assets/home_main_picture.png')} style={styles.home_image} />
      <Text style={styles.text}>Content Visual Learning.</Text>
      <Text style={styles.text}>Visual learners process information best through images, diagrams, colors, and spatial understanding. They often retain knowledge more effectively when it’s presented in charts, infographics, mind maps, or other visual formats. These learners tend to be observant, good at remembering faces and places, and may struggle with long verbal explanations. Organizing information visually can help them understand complex ideas and improve recall.


To enhance visual learning, it’s helpful to use flashcards, color-coded notes, concept maps, and videos. Tools like drawing out processes, using symbols, and highlighting key points with colors can reinforce understanding. Digital platforms that combine visuals with educational content, like Picmonic, are especially effective. By engaging their visual strengths, students can make studying more efficient and enjoyable, particularly when dealing with large volumes of information or intricate subjects.</Text>
    </View>
  );
};
