import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import initBackgroundImage from '../images/initBackground.jpg';
import { LinearGradient } from 'expo-linear-gradient';


function Separator() {
  return <View style={styles.separator} />;
}

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ImageBackground source={initBackgroundImage} style={{width: '100%', height: '100%'}} imageStyle={{opacity:0.2}}>
      {/* <LinearGradient colors={['#fff','#4BBABC', '#2c264b']}
      style={{ padding: 15, alignItems: 'center', flex: 1 }}> */}
      {/* <LinearGradient colors={['#4BBABC', '#2c264b', '#2c264b']} */}
        {/* style={{ padding: 15, alignItems: 'center', flex: 1, }}> */}
        <View style={{ flex: 1}}>
          <View style={styles.viewWellcome}>
            <Text style={styles.textWellcome}>
              Bienvenido a nuestro planificador financiero
            </Text>
          </View>
          <View style={styles.viewButton}>
            <TouchableHighlight style = {styles.button} onPress={() => this.props.navigation.navigate('Form1')}>
              <Text style={styles.textButton}>
                Empezar simulación
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 16,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: "center",
    backgroundColor: '#D9E3F0'
  },
  textWellcome: {
    textAlign: 'center',
    fontSize: 32,
    // color: '#dadadb',
    color:'#4BBABC',
    fontWeight: "400",
  },
  viewWellcome: {
    marginTop: 50,
    marginBottom: 30,
    alignItems: "center",
    textAlign: 'center',
    flex: 1,
  },
  viewButton: {
    marginTop: 60,
    marginBottom: 50,
    alignItems: "center",
    textAlign: 'center',
    flex: 1,
    justifyContent: 'flex-end',
  },
  textButton: {
    textAlign: 'center',
    color: '#dadadb',
    marginVertical: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: '#4BBABC',
    alignContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: "center",
  },
  fixToText: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#DB3E00'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});