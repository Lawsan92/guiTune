import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './components/Logo.js';
import Select from './components/Select.js';
export default function App() {

  const [logo, Pressed] = useState(false);

  const selectPage = () => {
    Pressed(true);
  }

  const homePage = () => {
    Pressed(false);
  }

  if (logo) {
    return (
      <View style={styles.container}>
        <Select homePage={homePage}/>
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Logo selectPage={selectPage}/>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'snow',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
