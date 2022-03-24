import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MainScreen from './src/screens/MainScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import PreviewScreen from './src/screens/PreviewScreen';
import ResultScreen from './src/screens/ResultScreen';
import { setNavigator } from "./src/navigationRef";
import { Entypo } from '@expo/vector-icons'; 



const bottomNavigator = createBottomTabNavigator({
  mainFlow: createStackNavigator({
    Main: MainScreen,
    Preview: PreviewScreen,
    Result: ResultScreen,
  }),
  Settings: SettingsScreen,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Entypo;
      let iconName;
      if (routeName === 'mainFlow') {
        iconName = "home"
        // Sometimes we want to add badges to some icons.
        // You can check the implementation below.
        IconComponent = Entypo;
      } else if (routeName === 'Settings') {
        iconName = "cog";
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
    tabBarOptions: {
      activeTintColor: '#dcdcdd',
      inactiveTintColor: 'black',
      activeBackgroundColor:"#4895ef",
      inactiveBackgroundColor:"#dcdcdd"
    },
  })

const App = createAppContainer(bottomNavigator);

export default () => {
  return (
    <App ref={(navigator) => { setNavigator(navigator) }} />
  );
};