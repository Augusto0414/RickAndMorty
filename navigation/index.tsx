import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderLogo } from 'components/commons/Header';
import Overview from '../screens/overview';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = (
  <Tab.Navigator
    initialRouteName="Overview"
    screenOptions={{
      headerShown: false,
    }}>
    <Tab.Screen
      name="Overview"
      component={Overview}
      options={{ tabBarLabel: 'View', tabBarIcon: () => <Ionicons name="home" /> }}
    />
  </Tab.Navigator>
);

const AuthStack = (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
      headerShadowVisible: false,
      headerTitle: () => <HeaderLogo />,
    }}>
    <Stack.Screen name="OverView" component={Overview} />
  </Stack.Navigator>
);

const RootStack = () => {
  const isAuthenticated: boolean = false;
  return <NavigationContainer>{isAuthenticated ? App : AuthStack}</NavigationContainer>;
};

export default RootStack;
