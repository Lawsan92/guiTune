import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';



function Record ({selectScreen}) {

  const [recording, setRecording] = React.useState(null);
  const [recordings, setRecordings] = React.useState(['recording']);
  const [message, setMessage] = React.useState('');

  const deleteRecording = () => {
    console.log('recordings:', recordings);
  }

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
          <Button stlye={styles.button} onPress={() => {deleteRecording()}} title='Delete'>Delete</Button>
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
      <Button title='Select' onPress={() => {selectScreen()}}>Select Screen</Button>
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

/*
recording: {
"_canRecord": true,
"_cleanupForUnloadedRecorder": [Function anonymous],
"_finalDurationMillis": 0,
"_isDoneRecording": false,
"_onRecordingStatusUpdate": null,
"_options":
			{
				"android":
							 {
								"audioEncoder": 3,
								"bitRate": 128000,
								"extension": ".m4a",
								"numberOfChannels": 2,
								"outputFormat": 2,
								"sampleRate": 44100
							},
				"ios":
              {
                "audioQuality": 127,
                "bitRate": 128000,
                "extension": ".m4a",
                "linearPCMBitDepth": 16,
                "linearPCMIsBigEndian": false,
                "linearPCMIsFloat": false,
                "numberOfChannels": 2,
                "outputFormat": "aac ",
                "sampleRate": 44100
              },
        "isMeteringEnabled": true,
        "keepAudioActiveHint": true,
        "web":
          {
            "bitsPerSecond": 128000,
            "mimeType": "audio/webm"
          }
	      },
"_pollingLoop": [Function anonymous],
"_progressUpdateIntervalMillis": 500,
"_progressUpdateTimeoutVariable": null,
"_subscription": null, "_
uri": "file:///var/mobile/Containers/Data/Application/DBB7888C-5975-4C2C-8A5C-33076B61D986/Library/Caches/ExponentExperienceData/%2540anonymous%252FAwesomeProject-7caf3455-7c0b-4bc1-994f-a883dedb7f3e/AV/recording-486CB032-0036-46D2-948E-EBFE0277B4B8.m4a",
"getStatusAsync": [Function anonymous]}


*/