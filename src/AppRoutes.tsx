import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MainView from 'features/app/views/MainView';
import Routes from 'navigation/routes';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName={Routes.Main}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={Routes.Main} component={MainView} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
