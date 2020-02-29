import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { getPlanification } from '../services/finnancialPlanningService'
import { Input, SocialIcon } from 'react-native-elements';

import Emoji from 'react-native-emoji';


import Chart from '../components/Chart'

function sanitizeSerie(data){
  if(!data || !data.serie) return {};

  const serie = {
    favorableScenario: [],
    moderateScenario: [],
    unfavorableScenario: [],

  }
  const reduceFactor = 12 //MONTHS
  for (let i = 0; i < data.serie.length; i++) {
    if (i % reduceFactor === 0){
      serie.favorableScenario.push(data.serie[i].bestScenario.amount)
      serie.moderateScenario.push(data.serie[i].expectedScenario.amount)
      serie.unfavorableScenario.push(data.serie[i].worstScenario.amount)
    }

  }

  serie.favorableScenario.push(data.serie[data.serie.length-1].bestScenario.amount)
  serie.moderateScenario.push(data.serie[data.serie.length-1].expectedScenario.amount)
  serie.unfavorableScenario.push(data.serie[data.serie.length-1].worstScenario.amount)
  return serie;
}

export default class ChartScreen extends Component {
  constructor () {
    super()
    this.state = {
      isLoading: true,
      risk: 1,
      horizon: 5,
      result:1.215,
      initialAmount: 100,
      targetAmount: 2000,
      periodicContributions: 0,
      serie: {
        favorableScenario: [],
        moderateScenario: [],
        unfavorableScenario: []
      }
    }
  }

  async callApi() {
    {
     const params = {
      initialAmount: this.state.initialAmount,
      targetAmount:  this.state.targetAmount,
      periodicContributions: this.state.periodicContributions,
      horizon: this.state.horizon,
     }

      const response = await getPlanification(params)
      const serieSanitized = sanitizeSerie(response.data);
      this.setState({
        isLoading: false,
        serie: serieSanitized,
        result: parseInt(response.data.summary.expectedScenario.amount, 10),
      });
    }
  }

  async componentDidMount() {
    const horizon = parseInt(this.props.navigation.getParam( 'horizon', ''), 10);
    await this.setState({
      horizon,
      initialAmount: this.props.navigation.getParam( 'inicialInvestment', ''),
      targetAmount: this.props.navigation.getParam( 'targetAmount', ''),
      periodicContributions: this.props.navigation.getParam( 'periodicContributions', ''),
    });
    await this.callApi()
  }

  render(){
    if (this.state.isLoading) {
      return (<View><Text>Cargando...</Text></View>)
    }

    return (
      <LinearGradient colors={['#fff','#B8E0EA', '#50DEC6']}
      style={{ padding: 15, alignItems: 'center', flex: 1 }}>
        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <Chart serie={this.state.serie}/>
          </View>
          <View>
          <Text>
              La planificación estima que el importe final será de <Text style={{ fontWeight: 'bold' }}>{this.state.result}€</Text>
          </Text>
          
          {this.state.result < this.state.targetAmount ? (
          <View style={{  alignItems: 'center' }}>
          <Emoji name="sweat" style={{fontSize: 25}} />
            <Text>
                Lo sentimos no ha llegado a su objetivo de {this.state.targetAmount}€, puede recalcularlo introduciendo aportaciones periodicas
            </Text>
                  <Input
                    label='Aportación periódica'
                    onChangeText={(text) => this.setState({ periodicContributions: text || 0 })}
                    onSubmitEditing={() => this.callApi()}
                    value= {this.state.periodicContributions}
                    keyboardType={'numeric'}
                  />
          </View> ) : (
          <View style={{  alignItems: 'center' }}>
            <Emoji name="relaxed" style={{fontSize: 25}} />            
            <Text>
                ¡Enhorabuena, ha cumplido su objetivo, compártalo con sus amigos!
            </Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <SocialIcon type='twitter'/>
              <SocialIcon type='facebook'/>
              <SocialIcon type='medium'/>
            </View>
          </View>
            )}
        <TouchableHighlight style = {styles.button} onPress={() => this.props.navigation.navigate('Form1')}>     
          <Text style={styles.textButton}>
            Atrás
          </Text>
        </TouchableHighlight>
        </View>
      </LinearGradient>
    )
  }
}

ChartScreen.navigationOptions = {
  title: 'Chart',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  navigationFilename: {
    marginTop: 5,
  },
  tabBarInfoContainer: {
    position: 'relative',
    width: '100%',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 20,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'left'
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
});