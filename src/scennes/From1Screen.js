import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import { Slider, Input } from 'react-native-elements';

import Constants from 'expo-constants';
// import Navigator from './src/components/Navigator';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from 'native-base';

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
      targetAmount: '0',
      inicialInvestment: '0',
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
    return (
      // <LinearGradient colors={['#4BBABC', '#2c264b', '#2c264b']}
      <LinearGradient colors={['#fff','#B8E0EA', '#50DEC6']}
        style={{ marginTop: 20, padding: 15, alignItems: 'center' }}>
        <ScrollView>
          <View style={{ flex: 1}}>
            <View>
            <Input
            label='Intruduce tu nombre'
            placeholder='Nombre'
            />
            </View>
            <View>
              <Input
                label='¿Cuánto dinero necesito?'
                keyboardType= "numeric"
                placeholder={'100.000€'}
                placeholderTextColor='#aaa'
                onChangeText={(value) => this.setState({ targetAmount: value || '' })}
                value= {this.state.targetAmount}


              />
            </View>
            <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center' }}>
              <View style= {styles.sliderInput}>
                <TextInput style= {styles.inputLabel}>Horizonte temporal</TextInput>
                  <Slider
                    value={this.state.horizon}
                    minimumValue={0}
                    maximumValue={12}
                    thumbTintColor='#4BBABC'
                    onValueChange={value => this.setState({ horizon: value })}
                    />
                  <TextInput style={styles.sliderResult}>{parseInt(this.state.horizon,10)} Años</TextInput>
              </View>
            </View>
            <View>
              <Input
                keyboardType= "numeric"
                label= 'Aportación inicial'
                placeholder={'100€'}
                onChangeText={(value) => this.setState({ inicialInvestment: value || '' })}
                value={this.state.inicialInvestment}
              />
    
            </View>
            <View>
              <Input
                label='Aportación periódica'
                placeholder={this.state.periodicContributions + '€'}
                keyboardType= "numeric"
              />
            </View>
            <View style= {styles.sliderInput}>
            <TextInput style= {styles.inputLabel}>Frecuencia de aportación</TextInput>

            <Picker
              selectedValue={this.state.language}
              style={{height: 50, width: '50%'}}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue})
              }>
              <Picker.Item label="Mensual" value="MONTHLY" />
              <Picker.Item label="Trimestral" value="QUATERLY" />
              <Picker.Item label="Anual" value="ANNUAL" />
            </Picker>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginHorizontal: 16,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: "center",
    backgroundColor: '#D9E3F0'
  },
  inputLabel: {
    fontSize: 16,
    color: '#86939e',
    fontWeight: 'bold',
  },
  sliderInput: {
    margin: 10,
  },
  sliderResult: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: '#86939e',
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
 
});