import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

import { styles } from "../styles";
import { Header } from "../components/Header";
import { Button } from "../components/Button";

export const VisualScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.centralizedContent}>
        <Text style={styles.title}>Visual</Text>
        {/* heading image */}
        <Image
          source={require("../components/assets/home_main_picture.png")}
          style={styles.home_image}
        />
        <Text style={styles.text}>Content Visual Learning.</Text>
        <Text style={styles.text}>
          Visual learners process information best through images, diagrams,
          colors, and spatial understanding. They often retain knowledge more
          effectively when it’s presented in charts, infographics, mind maps, or
          other visual formats. These learners tend to be observant, good at
          remembering faces and places, and may struggle with long verbal
          explanations. Organizing information visually can help them understand
          complex ideas and improve recall. To enhance visual learning, it’s
          helpful to use flashcards, color-coded notes, concept maps, and
          videos. Tools like drawing out processes, using symbols, and
          highlighting key points with colors can reinforce understanding.
          Digital platforms that combine visuals with educational content, like
          Picmonic, are especially effective. By engaging their visual
          strengths, students can make studying more efficient and enjoyable,
          particularly when dealing with large volumes of information or
          intricate subjects.
        </Text>
        {/* 6 tips for visual learners section */}
        <Text style={[styles.text, { fontWeight: "bold", marginTop: 20 }]}>
          6 tips for visual learners:
        </Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://www.picmonic.com/pages/visual-learning-tips-resources-for-every-student/"
            )
          }
        >
          <Text
            style={[
              styles.text,
              {
                color: "#1B73E8",
                textDecorationLine: "underline",
                marginBottom: 10,
              },
            ]}
          >
            https://www.picmonic.com/pages/visual-learning-tips-resources-for-every-student/
          </Text>
        </TouchableOpacity>
        {/* Visual learning practices section */}
        <Text style={[styles.text, { fontWeight: "bold", marginTop: 20 }]}>
          Talks about what visual learning is and what practices are best for
          these learners:
        </Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://www.instructure.com/resources/blog/visual-learning-effective-strategies-and-best-practices"
            )
          }
        >
          <Text
            style={[
              styles.text,
              {
                color: "#1B73E8",
                textDecorationLine: "underline",
                marginBottom: 10,
              },
            ]}
          >
            https://www.instructure.com/resources/blog/visual-learning-effective-strategies-and-best-practices
          </Text>
        </TouchableOpacity>
        <Button
          title="Back"
          backgroundColor="#FF3B30"
          onPress={() => navigation.goBack()}
        />
      </ScrollView>
    </View>
  );
};
