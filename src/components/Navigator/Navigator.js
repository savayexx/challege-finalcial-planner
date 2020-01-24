import {createAppContainer} from 'react-navigation';
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack';

import HomeScreen from '../../scennes/HomeScreen';
import From1Screen from '../../scennes/From1Screen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Form1 : {screen: From1Screen},
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