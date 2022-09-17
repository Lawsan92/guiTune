import React, {useState} from 'react';
import { StyleSheet, Text, View, Webview, Pressable, TouchableOpacity, TouchableHighlight, ImageBackground} from 'react-native';
const Logo = ({selectPage}) => {

  const logo = {uri: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1662864310/samples/toppng.com-clipart-guitar-vector-rock-band-guitar-symbol-1024x1024_adobe_express_1_fxj4vp.png'}

  return (
    <View style={styles.container}>
    <TouchableHighlight
    style={styles.logo}
    onPress={() => {selectPage()}}
    underlayColor='white'
    >
      <ImageBackground source={logo} style={{width: '100%', height: '100%'}}>
      </ImageBackground>
    </TouchableHighlight>
    <Text style={styles.text}>GuiTune</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
  },
  logo: {
    height: 160,
    width: 160,
    borderRadius: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
    color: 'steelblue',
    fontFamily: 'Arial',
  }
});

export default Logo;