import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'native-base';
import { PlusCircle, SoccerBall } from 'phosphor-react-native';
import { Bets } from '../screens/Bets';
import { Find } from '../screens/FindGame';
import { New } from '../screens/NewGame';
import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const { colors, sizes } = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: true,
        tabBarLabelPosition: 'beside-icon',
        tabBarActiveTintColor: colors.yellow[500],
        tabBarInactiveTintColor: colors.gray[300],
        tabBarStyle: {
          position: 'absolute',
          height: sizes[22],
          borderTopWidth: 0,
          backgroundColor: colors.gray[800],
        },
      }}
    >
      <Screen
        name="SignIn"
        component={SignIn}
        // options={{
        //   tabBarIcon: ({ color }) => <PlusCircle color={color} />,
        //   tabBarLabel: 'novo bolão',
        // }}
      />
      {/* <Screen
        name="new"
        component={New}
        options={{
          tabBarIcon: ({ color }) => <PlusCircle color={color} />,
          tabBarLabel: 'novo bolão',
        }}
      />
      <Screen
        name="bets"
        component={Bets}
        options={{
          tabBarIcon: ({ color }) => <SoccerBall color={color} />,
          tabBarLabel: 'meus bolões',
        }}
      />

      <Screen
        name="find"
        component={Find}
        options={{
          tabBarIcon: ({ color }) => <SoccerBall color={color} />,
          tabBarLabel: 'meus bolões',
        }}
      /> */}
    </Navigator>
  );
}
