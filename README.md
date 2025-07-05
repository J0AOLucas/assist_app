# Assist App - Simple Structure

## 📁 Project Structure

```
AssistApp/
├── components/           # Reusable components
│   ├── Header.tsx       # Header component
│   ├── Button.tsx       # Button component
│   └── styles.ts        # Component styles
├── screens/             # App screens
│   ├── HomeScreen.tsx   # Home screen
│   ├── AuditoryScreen.tsx
│   ├── VisualScreen.tsx
│   ├── ReadScreen.tsx
│   └── HandsScreen.tsx
├── assets/              # Images and resources
│   ├── home_main_picture.png
│   ├── logo.png
│   └── fonts/           # Font files
├── styles.ts            # Global styles
└── App.js               # Main app file
```

## 🎨 How to Use

### 1. Create a new screen:
```tsx
// screens/MyScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles';
import { Header } from '../components/Header';
import { Button } from '../components/Button';

export const MyScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>My Screen</Text>
      <Text style={styles.text}>This is my new screen content.</Text>
      <Button 
        title="Back" 
        backgroundColor="#FF3B30"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};
```

### 2. Add the screen to navigation (App.js):
```jsx
// App.js
import { MyScreen } from './screens/MyScreen';

// Add this line inside Stack.Navigator:
<Stack.Screen name="MyScreen" component={MyScreen} />
```

### 3. Add images to a screen:
```tsx
// In your screen file
import { Image } from 'react-native';

// Add image to your screen
<Image 
  source={require('../assets/my-image.png')} 
  style={styles.myImage} 
/>

// Add style in styles.ts
myImage: {
  width: 200,
  height: 150,
  marginBottom: 20,
}
```

### 4. Add styles:
```tsx
// styles.ts
export const styles = StyleSheet.create({
  // your styles here
  myClass: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
});
```

## 📱 How to Edit Screens

### **Where to find screens:**
- **Location:** `screens/` folder
- **Files:** `HomeScreen.tsx`, `AuditoryScreen.tsx`, etc.

### **How to edit a screen:**
1. Open the screen file (e.g., `screens/HomeScreen.tsx`)
2. Find the content you want to change
3. Edit the text between `<Text>` tags
4. Save the file

### **Example - Change screen title:**
```tsx
// Before
<Text style={styles.title}>Welcome</Text>

// After
<Text style={styles.title}>My New Title</Text>
```

## 🖼️ How to Add Images

### **Step 1: Add image file**
1. Put your image in the `assets/` folder
2. Supported formats: `.png`, `.jpg`, `.jpeg`

### **Step 2: Use image in screen**
```tsx
import { Image } from 'react-native';

<Image 
  source={require('../assets/your-image.png')} 
  style={styles.imageStyle} 
/>
```

### **Step 3: Add image styles**
```tsx
// In styles.ts
imageStyle: {
  width: 300,
  height: 200,
  marginBottom: 20,
  borderRadius: 10,
}
```

## 🎨 How to Edit Styles

### **Global styles (affects all screens):**
- **File:** `styles.ts` (in root folder)
- **What to edit:** Colors, fonts, spacing

### **Component styles:**
- **File:** `components/styles.ts`
- **What to edit:** Button, Header styles

### **Common style properties:**
```tsx
{
  backgroundColor: '#FF0000',    // Background color
  color: '#FFFFFF',              // Text color
  fontSize: 16,                  // Text size
  padding: 20,                   // Internal spacing
  margin: 10,                    // External spacing
  borderRadius: 8,               // Rounded corners
  width: 200,                    // Width
  height: 100,                   // Height
}
```

## 🚀 To run the project

```bash
# Install dependencies
npm install
npm install @react-navigation/native @react-navigation/stack
## add the npm install roboto

# Start the development server
npm start

# Run on iOS simulator for MacOS users
npm run ios

# Open Android Studio
# Run on Android emulator
npm run android

# Run on web browser
npm run web
```

## 📱 Available Scripts

- `npm start` - Start Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator
- `npm run web` - Run on web browser

## 🔧 Quick Tips

### **Add new button:**
```tsx
<Button 
  title="My Button" 
  backgroundColor="#FF0000"
  navigateTo="MyScreen"
  navigation={navigation}
/>
```

### **Navigation:**
- `navigateTo="ScreenName"` - Go to specific screen
- `onPress={() => navigation.goBack()}` - Go back to previous screen
