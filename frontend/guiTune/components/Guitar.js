import React, {useState, useEffect} from 'react';
import { View, TouchableHighlight, Text, StyleSheet} from 'react-native';
import tunings from './../data/data.js';
import PitchFinder from 'pitchfinder';
// import Recording from 'react-native-recording' // doesn't work
import Tuner from './Tuner';
import Meter from './Meter';
import Note from './Note';

const Guitar = ({backBtn}) => {

  const [note, GetNote] = useState({
    name: 'A',
    octave: 4,
    frequency: 440
  });

  const updateNote = (note) => {
    GetNote(note);
  };

// same as componenetDidMount
  useEffect(() => {
    if (Platform.OS === "android") {
      PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);
    }
  });

  // Tuner instance
  const tuner = new Tuner();
  console.log('tuner:', tuner);
  // tuner.start();
  tuner.onNoteDetected = (note) => {
    if (this._lastNoteName === note.name) {
      this._update(note);
    } else {
      this._lastNoteName = note.name;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tuneScreen}>
      {/* <Text name='tune-screen' style={styles.tunerNote}>E</Text> */}
      <Note note={note}/>
      <Meter/>
      </View>
      <View style={styles.main}>
          <TouchableHighlight name='E'style={styles.notes}>
            <Text style={styles.letters}>E</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.notes}>
            <Text style={styles.letters}>A</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.notes}>
            <Text style={styles.letters}>D</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.notes}>
            <Text style={styles.letters}>G</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.notes}>
            <Text style={styles.letters}>B</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.notes}>
            <Text style={styles.letters}>E</Text>
          </TouchableHighlight>
      </View>
      <TouchableHighlight style={styles.backButton} onPress={() => {backBtn();  console.log('tuner:', tuner);}}>
        <Text style={styles.letters}>Back</Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // borderStyle: 'solid',
    // borderColor: 'black',
    // borderWidth: 5,
    width: '90%',
    height: '90%',
    // flex: 1,
  },
  tuneScreen: {
    height: '50%',
    borderStyle: 'solid',
    borderColor: 'skyblue',
    borderWidth: 5,
    alignItems: 'center'
  },
  main: {
    // borderStyle: 'dotted',
    // borderColor: 'skyblue',
    // borderWidth: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  tunerNote: {
    flex:1,
    fontSize: 100,
    color: 'skyblue'
  },
  notes: {
    backgroundColor: 'steelblue',
    margin: 5,
    borderRadius: 30,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'silver',
    height: 50,
    width: 30,
    marginBottom: 5,
    flex: 1,
    alignItems: 'center'
  },
  letters: {
    color: 'snow',
    fontSize: 20,
  },
  backButton: {
    backgroundColor: 'steelblue',
    borderRadius: 10,
    width: 50,
    alignItems: 'center'
  }
})

export default Guitar;