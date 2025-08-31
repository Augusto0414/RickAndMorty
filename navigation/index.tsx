import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderLogo } from 'components/commons/Header';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Details from 'screens/details';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = (
  <Tab.Navigator
    initialRouteName="H ome"
    screenOptions={{
      headerShown: false,
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{ tabBarLabel: 'View', tabBarIcon: () => <Ionicons name="home" /> }}
    />
  </Tab.Navigator>
);

const AuthStack = (
  <Stack.Navigator
    screenOptions={{
      headerShown: true,
      headerShadowVisible: false,
    }}>
    <Stack.Screen
      name="Home"
      options={{
        headerTitle: () => <HeaderLogo />,
      }}
      component={Home}
    />
    <Stack.Screen
      name="Details"
      options={{
        title: 'Detalles',
      }}
      component={Details}
    />
  </Stack.Navigator>
);

const RootStack = () => {
  const isAuthenticated: boolean = false;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>{isAuthenticated ? App : AuthStack}</NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default RootStack;
