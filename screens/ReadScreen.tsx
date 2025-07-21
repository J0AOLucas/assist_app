import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { styles } from '../styles';
import { Header } from '../components/Header';
import { Button } from '../components/Button';

export const ReadScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.contentContainerStyle}>
      <Header />
      
      <Text style={[styles.title, { paddingTop: 20 }]}>Read/Write</Text>
      <Image
        source={require('../assets/hands_on.png')}
        style={styles.home_image}
        resizeMode="contain"
      />
      <Text style={styles.text}>Content Visual Learning.</Text>
        The reading and writing learning style, based on the VARK model, refers to individuals who best absorb and retain information through written words. These learners excel in environments where they can read, take detailed notes, and rewrite material in their own words. They often enjoy lists, essays, manuals, and structured study techniques like Cornell notes, mind maps, and annotation. Their learning thrives in quiet spaces, and they benefit from using color-coded notes, flashcards, and written self-quizzing. Tools like journals, handouts, and textbooks are especially effective for this group, helping them internalize complex ideas through repetition and reflection.
Educators can support reading/writing learners by incorporating written materials into lessons, encouraging note-taking, and offering structured opportunities for written expression. These learners may struggle in heavily auditory or hands-on environments, often zoning out during lectures if they can’t write things down. Providing access to digital or physical note-taking tools, written instructions, and opportunities to process visual or spoken content through text can enhance their comprehension and engagement. Careers in writing, research, and leadership often appeal to them due to their comfort with language and strong verbal reasoning skills.
      <Text style={styles.text}>
      </Text>
      
      <Button 
          title="Back" 
          backgroundColor="#FF3B30"
          onPress={() => navigation.goBack()}
        />
    </ScrollView>
  );
};
