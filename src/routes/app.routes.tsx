import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PlusCircle, SoccerBall } from 'phosphor-react-native';
import { Bets } from '../screens/Bets';
import { New } from '../screens/NewGame';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen
        name="new"
        component={New}
        options={{
          tabBarIcon: () => <PlusCircle />,
        }}
      />
      <Screen
        name="bets"
        component={Bets}
        options={{
          tabBarIcon: () => <SoccerBall />,
        }}
      />
    </Navigator>
  );
}
