import { Icon, Text, VStack } from 'native-base';
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../componets/Button';
import { Header } from '../componets/Header';

export function Bets() {
  const navigation = useNavigation();
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Meus bolões" />
      <VStack
        mt={6}
        mx={5}
        borderBottomWidth={1}
        borderBottomColor="gray.600"
        pb={4}
        mb={4}
      >
        <Button
          title="Bucar bolão por código"
          leftIcon={<Icon as={Octicons} name="search" color="black" />}
          onPress={() => navigation.navigate('find')}
        />
      </VStack>
    </VStack>
  );
}
