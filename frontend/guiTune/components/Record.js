import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';



function Record () {

  const [recording, setRecording] = React.useState(null);
  const [recordings, setRecordings] = React.useState(['recording']);
  const [message, setMessage] = React.useState('');

   const  startRecording = async () => {
    try {
      console.log('Requesting permissions..');
      const permission = await Audio.requestPermissionsAsync();
      if (permission.status === 'granted') {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
        console.log('Starting recording..');
        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
       );
       setRecording(recording);
       console.log('Recording started');
       console.log('recording:', recording);
      } else {
        setMessage('Please grant permission to app to access microphone...')
      }
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  const stopRecording = async () => {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    let updatedRecordings = [...recordings];
    const {sound, status} = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI()
    });
    // console.log('Recording stopped and stored at', uri);
    setRecordings(updatedRecordings);
  }

  const getDurationFormatted = (millis) => {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;
  }

  const getRecordingLines = () => {
    return recordings.map((recordingLine, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>Recording {index + 1} - {recordingLine.duration}</Text>
          <Button style={styles.button} onPress={() => {recordingLine.sound.replayAsync()}} title='Play'></Button>
        </View>
      );
    })
  }

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />
      {getRecordingLines()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  fill: {
    flex: 1,
    margin: 16
  },
  button: {
    margin: 16
  }
});


export default Record;