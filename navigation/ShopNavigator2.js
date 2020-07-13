import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function NavStack2() {
  return (
    <NavigationContainer>
      <Stack.Navigator>Perfect</Stack.Navigator>
    </NavigationContainer>
  );
}