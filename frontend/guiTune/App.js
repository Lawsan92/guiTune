import {useState, useEffect} from 'react';
import {AppLoading, Permissions} from 'expo';
import{ Audio } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './components/Logo.js';
import Select from './components/Select.js';

export default function App() {

  const [logo, Pressed] = useState(false);

  // let recording = new Audio.Recording();
  // const startRecording = async () => {
  //   try {
  //     console.log('Requesting Permissions..');
  //     await Audio.requestPermissionsAsync();
  //     await Audio.setAudioModeAsync({
  //       allowsRecordingIOS: true,
  //       playsInSilentModeIOS: true,
  //     })
  //     console.log('Starting Recording..');
  //     const { recording } = await Audio.Recording.createAsync(  Audio.RecordingOptionsPresets.HIGH_QUALITY);
  //     setRecording(recording);
  //     console.log('Recording started');
  //   } catch (err) {
  //     console.log('Failed to start recording', err);
  //   }
  // }

  // const stopRecording = async () => {
  //   console.log('Stopping recording..');
  //   setRecording(undefined);
  //   await recording.stopAndUnloadAsync();
  //   const uri = recording.getURI();
  //   console.log('Recording stopped and stored at', uri);
  // }



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
        <Logo selectPage={selectPage} record/>
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
