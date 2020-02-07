import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { getPlanification } from '../services/finnancialPlanningService'

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
  return serie;
}

export default class ChartScreen extends Component {
  constructor () {
    super()
    this.state = {
      isLoading: true,
      risk: 1,
      horizon: 10,
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
     }

      const response = await getPlanification(params)
      const serieSanitized = sanitizeSerie(response.data);
      this.setState({
        isLoading: false,
        serie: serieSanitized,
      });
    }
  }

  async componentDidMount() {

    await this.setState({
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
      <LinearGradient colors={['#fff','#4BBABC', '#2c264b']}
      style={{ padding: 15, alignItems: 'center', flex: 1 }}>
        <View style={{ alignItems: 'center', marginTop: 30 }}>
          <View style={styles.tabBarInfoContainer}>
            <Text style={styles.tabBarInfoText}>
              Modificar respuestas
            </Text>

            <View>
                <Text>Aportación periódica</Text>
                <TextInput
                  onChangeText={(text) => this.setState({ periodicContributions: text || 0 })}
                  onSubmitEditing={() => this.callApi()}
                  value= {this.state.periodicContributions}
                  keyboardType={'numeric'}
                />
              </View>
          </View>
        <Chart serie={this.state.serie}/>
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