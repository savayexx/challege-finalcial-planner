import {createAppContainer} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';

import HomeScreen from '../../scennes/HomeScreen';
import From1Screen from '../../scennes/From1Screen';
import ChartScreen from '../../scennes/ChartScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Form1 : {screen: From1Screen},
  ChartScreen : {screen: ChartScreen}
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
    navigationOptions: {
      gesturesEnabled: false,
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: 'red',
      },
    },
  }
);

const Navigator = createAppContainer(MainNavigator);

export default Navigator;