import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import Projects from '../screens/projects';

const screens = {
  Home: {
    screen: Home,
  },
  Projects: {
    screen: Projects,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
