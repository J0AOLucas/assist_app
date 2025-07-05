import { StatusBar } from 'expo-status-bar';
import { Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/HomeScreen';
import { AuditoryScreen } from './screens/AuditoryScreen';
import { VisualScreen } from './screens/VisualScreen';
import { ReadScreen } from './screens/ReadScreen';
import { HandsScreen } from './screens/HandsScreen';

// Global font
Text.defaultProps = { ...Text.defaultProps, style: { fontFamily: 'Roboto' } };
TextInput.defaultProps = { ...TextInput.defaultProps, style: { fontFamily: 'Roboto' } };

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Auditory" component={AuditoryScreen} />
        <Stack.Screen name="Visual" component={VisualScreen} />
        <Stack.Screen name="ReadWrite" component={ReadScreen} />
        <Stack.Screen name="Hands" component={HandsScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
