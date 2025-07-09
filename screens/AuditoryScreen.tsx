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

      <Text style={styles.text}>Auditory learners understand and remember information best through hearing. They often benefit from listening to explanations, participating in discussions, and using verbal repetition. These individuals tend to grasp new concepts more easily when they are spoken aloud and may prefer reading out loud or using rhymes and mnemonic devices to retain information. Because they process sound effectively, they might struggle with written or visual materials unless these are paired with auditory input.
To support auditory learning, it helps to incorporate activities that involve music, storytelling, and spoken instructions. Games that require listening, like “Simon Says” or sound matching, can improve focus and memory. Encouraging the use of audiobooks, podcasts, or reading aloud also enhances learning. By engaging their sense of hearing, auditory learners can absorb content more naturally and stay motivated in both academic and everyday environments.</Text>
        
      <Button 
        title="Back" 
        backgroundColor="#FF3B30"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};
