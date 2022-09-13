import React, {useState} from 'react';
import { View, TouchableHighlight, Text, StyleSheet} from 'react-native';
import tunings from './../data/data.js';

const Guitar = ({backBtn}) => {

  const [notes, select] = useState(['E', 'A', 'D', 'G', 'B', 'E']);

  const tuner = (e) => {
    console.log('e:', e);
  }

  return (
    <View style={styles.container}>
      <View>

      </View>
      <View style={styles.main}>
          <TouchableHighlight name='E'style={styles.notes} onPress={(e) => {tuner(e)}}>
            <Text style={styles.letters}>innerText</Text>
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
      <TouchableHighlight style={styles.backButton} onPress={() => {backBtn()}}>
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
  },
  main: {
    borderStyle: 'dotted',
    borderColor: 'skyblue',
    borderWidth: 5,
    flex: 1,
    flexDirection: 'row'
  },
  left: {
    borderStyle: 'dotted',
    borderColor: 'red',
    borderWidth: 3,
    flex: 1,
    alignItems: 'center',

  },
  right: {
    borderStyle: 'dotted',
    borderColor: 'orange',
    borderWidth: 3,
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'flex-end',
  },
  notes: {
    backgroundColor: 'steelblue',
    borderRadius: '20%',
    width: 30,
    marginBottom: 5,
    flex: 1,
    alignItems: 'center'
  },
  letters: {
    color: 'snow',
    fontSize: 20
  },
  backButton: {
    backgroundColor: 'steelblue',
    borderRadius: 10,
    width: 50,
    alignItems: 'center'
  }
})

export default Guitar;