import React from "react";
import {
  View,
  Text,
  ScrollView,
  Linking,
  TouchableOpacity,
} from "react-native";
import { useVideoPlayer, VideoView } from "expo-video";
import { styles } from "../styles";
import { Header } from "../components/Header";
import { Button } from "../components/Button";

const visualTips = [
  "Use color-coded notes and highlighters to organize information.",
  "Create mind maps, diagrams, and charts to visualize concepts.",
  "Watch educational videos and animations to reinforce learning.",
  "Use flashcards with images or symbols for memorization.",
  "Sit at the front of the class to clearly see the board and presentations.",
  "Summarize information using drawings or infographics.",
];

export const AuditoryScreen = ({ navigation }) => {
  // Sample video for demonstration; replace with a direct video file link if available
  const player = useVideoPlayer(
    "https://www.w3schools.com/html/mov_bbb.mp4",
    (player) => {
      player.loop = true;
      player.play();
    }
  );

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center", paddingBottom: 40 }}
      >
        <Text style={styles.title}>Auditory</Text>
        {/* Visual Learner Tips */}
        <Text style={[styles.text, { fontWeight: "bold", marginBottom: 10 }]}>
          6 Tips for Visual Learners:
        </Text>
        {visualTips.map((tip, idx) => (
          <Text
            key={idx}
            style={[
              styles.text,
              { textAlign: "left", marginBottom: 5, marginHorizontal: 30 },
            ]}
          >
            • {tip}
          </Text>
        ))}
        {/* Auditory Learner Tips Link */}
        <Text style={[styles.text, { fontWeight: "bold", marginTop: 20 }]}>
          Link to a list of tips that can help auditory learners:
        </Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://www.columbiastate.edu/tutoring-learning-center/ap-study-skills/study-tips-auditory-learner.html"
            )
          }
        >
          <Text
            style={[
              styles.text,
              {
                color: "#1B73E8",
                textDecorationLine: "underline",
                marginBottom: 20,
              },
            ]}
          >
            https://www.columbiastate.edu/tutoring-learning-center/ap-study-skills/study-tips-auditory-learner.html
          </Text>
        </TouchableOpacity>
        {/* New Section: Talks about what an auditory learner is */}
        <Text style={[styles.text, { fontWeight: "bold", marginTop: 20 }]}>
          Talks about what an auditory learner is and what helps them work:
        </Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://www.theottoolbox.com/activities-for-auditory-learners/"
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
            https://www.theottoolbox.com/activities-for-auditory-learners/
          </Text>
        </TouchableOpacity>
        <VideoView
          player={player}
          style={{
            width: 320,
            height: 180,
            borderRadius: 12,
            marginBottom: 20,
          }}
          nativeControls
        />
        <Text style={styles.text}>Content Auditory Learning.</Text>
        <Text style={styles.text}>
          Auditory learners understand and remember information best through
          hearing. They often benefit from listening to explanations,
          participating in discussions, and using verbal repetition. These
          individuals tend to grasp new concepts more easily when they are
          spoken aloud and may prefer reading out loud or using rhymes and
          mnemonic devices to retain information. Because they process sound
          effectively, they might struggle with written or visual materials
          unless these are paired with auditory input.\nTo support auditory
          learning, it helps to incorporate activities that involve music,
          storytelling, and spoken instructions. Games that require listening,
          like “Simon Says” or sound matching, can improve focus and memory.
          Encouraging the use of audiobooks, podcasts, or reading aloud also
          enhances learning. By engaging their sense of hearing, auditory
          learners can absorb content more naturally and stay motivated in both
          academic and everyday environments.
        </Text>
        <Button
          title="Back"
          backgroundColor="#FF3B30"
          onPress={() => navigation.goBack()}
        />
      </ScrollView>
    </View>
  );
};
