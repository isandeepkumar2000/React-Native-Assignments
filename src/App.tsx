import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './Screen/HomePage/Home';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Screen/LoginPage/Login';
import CustomHeader from './utils/customHeader';
import DetailsScorePage from './Screen/MatchDeatilsPage';
import SelectOpeningPlayer from './Screen/SelectOpeningPlayerPage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: 'Cricket Scorer',
            headerLeft: null,
            headerRight: () => <CustomHeader navigation={undefined} />,
            headerStyle: {
              backgroundColor: '#037c0d',
            },
            headerTintColor: '#ffffff',
          }}
        />
        <Stack.Screen name="Details" component={DetailsScorePage} />
        <Stack.Screen
          name="SelectOpeningPlayer"
          component={SelectOpeningPlayer}
          options={{
            headerTitle: 'Select Opening Player',
            headerStyle: {
              backgroundColor: '#037c0d',
            },
            headerTintColor: '#ffffff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
