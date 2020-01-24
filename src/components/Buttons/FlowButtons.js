import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableHighlight,
} from 'react-native';


export default class FlowButtons extends React.Component {
  static navigationOptions = {
    title: 'Tu inversión',
  };

  render() {
    return (
      <View style={styles.viewButton}>
        <TouchableHighlight style = {styles.button} onPress={() => Alert.alert('Right button pressed')}>
          <Text style={styles.textButton}>
            Continuar
          </Text>
        </TouchableHighlight>
        <TouchableHighlight style = {styles.button} onPress={() => Alert.alert('Right button pressed')}>
          <Text style={styles.textButton}>
            Atrás
          </Text>
        </TouchableHighlight>
      </View>
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
    fontSize: 18,
    fontWeight: "300",
  },
  viewWellcome: {
    marginTop: 25,
    marginBottom: 10,
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
    marginVertical: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: 'red',
    alignContent: 'center',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: "center",
  },
  buttonText: {
    borderWidth: 1,
    alignContent: 'center',
    textAlign: 'center',
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