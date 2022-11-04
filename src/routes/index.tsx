import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Bets } from '../screens/Bets';
import { New } from '../screens/NewGame';
import { PlusCircle, SoccerBall } from 'phosphor-react-native';

import { AppRoutes } from './app.routes';
const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      {/* <AppRoutes /> */}
      <Tab.Navigator>
        <Tab.Screen
          name="new"
          component={New}
          options={{
            tabBarIcon: () => <PlusCircle />,
          }}
        />
        <Tab.Screen
          name="bets"
          component={Bets}
          options={{
            tabBarIcon: () => <SoccerBall />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
