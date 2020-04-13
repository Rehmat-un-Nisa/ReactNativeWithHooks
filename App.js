import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/Screens/HomeScreen'
import ComponentScreen from './src/Screens/ComponentsScreen';
import ListScreen from './src/Screens/ListScreen';
import ImageScreen from './src/Screens/ImageScreen';
import CounterScreen from './src/Screens/CounterScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
    title: 'App'
    }
  }
);

export default createAppContainer(navigator);