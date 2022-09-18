import React, {useState} from 'react';
import { StyleSheet, Text, View, Webview, TouchableHighlight, ImageBackground} from 'react-native';
import Guitar from './Guitar.js'
import Record from './Record';

const Select = ({homePage}) => {

  const [guitarBtn, PressGuitar] = useState(false);
  const pressGuitar = () => {
    PressGuitar(true);
  }
  const backBtn = () => {
    PressGuitar(false);
  }

  const selectScreen = () => {
    Start(false);
  }

  const [record, Start] = useState(false);

  const beginRecording = () => {
    Start(true);
  }

  const guitarImage = {uri: 'https://cdn.mos.cms.futurecdn.net/CvG2khErqT4uRwueoJRtqN.jpg'};
  const ukeleleImage = {uri: 'https://guitar.com/wp-content/uploads/2021/01/Martin-Concert-Uke@1400x520.jpg'};
  const bassImage = {uri: 'https://m.media-amazon.com/images/I/71yjvqZDTuL._AC_SL1500_.jpg'};

  if (guitarBtn) {
    return (
      <Guitar backBtn={backBtn}/>
    )
  } else if (record) {
    return <Record selectScreen={selectScreen}/>;
  } else {
    return (
      <View style={styles.container}>
        <TouchableHighlight title='Guitar' style={styles.instruments} onPress={() => {console.log('Guitar'); pressGuitar()}}>
          <ImageBackground source={guitarImage} style={styles.image} imageStyle={{borderRadius: 10}}>
            <Text style={styles.text}>Guitar</Text>
          </ImageBackground>
        </TouchableHighlight>
        <TouchableHighlight title='Ukele' style={styles.instruments} onPress={() => {alert('Ukele')}}>
          <ImageBackground source={ukeleleImage} style={styles.image} imageStyle={{borderRadius: 10}}>
            <Text style={styles.text}>Ukelele</Text>
          </ImageBackground>
        </TouchableHighlight>
        <TouchableHighlight title='Bass' style={styles.instruments}  onPress={() => {alert('Bass')}}>
          <ImageBackground source={bassImage} style={styles.image} imageStyle={{borderRadius: 10}}>
            <Text style={styles.text}>Bass</Text>
          </ImageBackground>
        </TouchableHighlight>
        <TouchableHighlight
        title='homeBtn'
        onPress={() => {homePage()}} style={styles.homeBtn}
        underlayColor='white'>
          <Text style={styles.btnText}>Home</Text>
        </TouchableHighlight>
        <TouchableHighlight
        title='homeBtn'
        onPress={() => {beginRecording()}} style={styles.homeBtn}
        underlayColor='white'>
          <Text style={styles.btnText}>Record</Text>
        </TouchableHighlight>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'snow',
    borderStyle: 'solid',
    borderWidth: 5,
    width: '80%',
    height: '80%',
    justifyContent: 'space-evenly'
  },
  instruments: {
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: '10%',
    margin: 15,
    flex: 1,
  },
  image: {
    flex: 1
  },
  text: {
    width: '30%',
    color: 'snow',
    fontSize: 20,
    backgroundColor: '#4682b4BD',
    borderRadius: '10%',
    overflow: 'hidden', // removes backgroundColor that spills out of the border
    alignItems: 'center'
  },
  homeBtn: {
    backgroundColor: '#4682b4',
    width: '20%',
    borderRadius: '5%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'silver',
  },
  btnText: {
    color: 'snow',
    fontSize: 20,
  }
});



export default Select;

// hex values for opacity: https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4