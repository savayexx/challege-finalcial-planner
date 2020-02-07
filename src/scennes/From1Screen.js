import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableHighlight,
  ImageBackground,
  TextInput,
  ScrollView,
  Slider,
} from 'react-native';
import Constants from 'expo-constants';
// import Navigator from './src/components/Navigator';
import initBackgroundImage from '../images/initBackground.jpg';
import { LinearGradient } from 'expo-linear-gradient';
import { Container, Form, Button, Content, Card, CardItem, Item, Body, Picker, Input } from 'native-base';

function Separator() {
  return <View style={styles.separator} />;
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Tu inversión',
    headerTintColor: '#fff',
  };

  constructor(props) {
    super(props);
    this.state = {
      horizon: 5,
      name: 'Homer',
      targetAmount: '100000',
      inicialInvestment: '1000',
      periodicContributions: '0',
    };
  }
  change(value) {
    this.setState(() => {
      return {
        value: parseFloat(value),
      };
    });
  }

  render() {
    const {value} = this.state;
    return (
      // <LinearGradient colors={['#4BBABC', '#2c264b', '#2c264b']}
      <LinearGradient colors={['#fff','#4BBABC', '#2c264b']}
        style={{ padding: 15, alignItems: 'center' }}>
        <ScrollView>
          <View style={{ flex: 1}}>
            <View style={styles.viewWellcome}>
              <Text style={styles.textWellcome}>Nombre</Text>
              <TextInput
                style={{
                  paddingLeft: 10,
                  height: 50,
                  width: '100%',
                  // fontFamily: Texts.regularFont,
                  // fontSize: SizeCalc.scale(5),
                  // color: Colors.white,
                  backgroundColor: '#fff',
                  // borderWidth: this.state.error ? 1 : 0,
                  borderColor: 'red',
                  marginBottom: 10,
                }}
                // onChangeText={identification => this.setState({ identification })}
                placeholder={this.state.name}
                // placeholderTextColor={Colors.alphaWhite}
                // underlineColorAndroid={Colors.tertiary}
              />
              {/* {this.state.error
                ? <Text style={{ color: 'red', fontFamily: Texts.semiboldFont, fontSize: SizeCalc.scale(3) }}>{I18n.t('forgotten_error')}</Text>
                : null
              } */}
            </View>
            <View style={styles.viewWellcome}>
              <Text style={styles.textWellcome}>Cuánto necesito</Text>
              <Input
                keyboardType= "numeric"
                style={{
                  paddingLeft: 10,
                  height: 50,
                  width: '100%',
                  // fontFamily: Texts.regularFont,
                  // fontSize: SizeCalc.scale(5),
                  // color: Colors.white,
                  backgroundColor: '#fff',
                  // borderWidth: this.state.error ? 1 : 0,
                  borderColor: 'red',
                  marginBottom: 10,
                }}
                // onChangeText={identification => this.setState({ identification })}
                placeholder={this.state.targetAmount}
                // placeholderTextColor={Colors.alphaWhite}
                // underlineColorAndroid={Colors.tertiary}
              />
              {/* {this.state.error
                ? <Text style={{ color: 'red', fontFamily: Texts.semiboldFont, fontSize: SizeCalc.scale(3) }}>{I18n.t('forgotten_error')}</Text>
                : null
              } */}
            </View>
            <View style={styles.viewWellcome}>
              <Text style={styles.textWellcome}>Horizonte temporal</Text>
              <Slider
                  step={1}
                  maximumValue={100}
                  onValueChange={this.change.bind(this)}
                  value={this.state.horizon}
              />
            </View>
            <View style={styles.viewWellcome}>
              <Text style={styles.textWellcome}>Aportación inicial</Text>
              <TextInput
                style={{
                  paddingLeft: 10,
                  height: 50,
                  width: '100%',
                  // fontFamily: Texts.regularFont,
                  // fontSize: SizeCalc.scale(5),
                  // color: Colors.white,
                  backgroundColor: '#fff',
                  // borderWidth: this.state.error ? 1 : 0,
                  borderColor: 'red',
                  marginBottom: 10,
                }}
                // onChangeText={identification => this.setState({ identification })}
                placeholder={this.state.inicialInvestment}
                // placeholderTextColor={Colors.alphaWhite}
                // underlineColorAndroid={Colors.tertiary}
              />
              {/* {this.state.error
                ? <Text style={{ color: 'red', fontFamily: Texts.semiboldFont, fontSize: SizeCalc.scale(3) }}>{I18n.t('forgotten_error')}</Text>
                : null
              } */}
            </View>
            <View style={styles.viewWellcome}>
              <Text style={styles.textWellcome}>Aportación periódica</Text>
              <TextInput
                style={{
                  paddingLeft: 10,
                  height: 50,
                  width: '100%',
                  // fontFamily: Texts.regularFont,
                  // fontSize: SizeCalc.scale(5),
                  // color: Colors.white,
                  backgroundColor: '#fff',
                  // borderWidth: this.state.error ? 1 : 0,
                  borderColor: 'red',
                  marginBottom: 10,
                }}
                // onChangeText={identification => this.setState({ identification })}
                placeholder={this.state.periodicContributions}
                // placeholderTextColor={Colors.alphaWhite}
                // underlineColorAndroid={Colors.tertiary}
              />
              {/* {this.state.error
                ? <Text style={{ color: 'red', fontFamily: Texts.semiboldFont, fontSize: SizeCalc.scale(3) }}>{I18n.t('forgotten_error')}</Text>
                : null
              } */}
            </View>
            <View style={styles.viewWellcome}>
              <Text style={styles.textWellcome}>Frecuencia</Text>
              <TextInput
                style={{
                  paddingLeft: 10,
                  height: 50,
                  width: '100%',
                  // fontFamily: Texts.regularFont,
                  // fontSize: SizeCalc.scale(5),
                  // color: Colors.white,
                  backgroundColor: '#fff',
                  // borderWidth: this.state.error ? 1 : 0,
                  borderColor: 'red',
                  marginBottom: 10,
                }}
                // onChangeText={identification => this.setState({ identification })}
                value="MENSUAL"
                // placeholderTextColor={Colors.alphaWhite}
                // underlineColorAndroid={Colors.tertiary}
              />
              {/* {this.state.error
                ? <Text style={{ color: 'red', fontFamily: Texts.semiboldFont, fontSize: SizeCalc.scale(3) }}>{I18n.t('forgotten_error')}</Text>
                : null
              } */}
            </View>
            <View style={styles.viewButton}>
              <TouchableHighlight style = {styles.button} onPress={() => this.props.navigation.navigate('ChartScreen', this.state)}>
                <Text style={styles.textButton}>
                  Continuar
                </Text>
              </TouchableHighlight>
              <TouchableHighlight style = {styles.button} onPress={() => this.props.navigation.pop()}>
                <Text style={styles.textButton}>
                  Atrás
                </Text>
              </TouchableHighlight>
            </View>
          </View>
          </ScrollView>
      </LinearGradient>
    );
  }
}
// onPress={() => Alert.alert('Right button pressed')}
// onPress={() => this.props.navigation.navigate('forgottenPassword')}

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