import { Icon, Text, VStack } from 'native-base';
import { Octicons } from '@expo/vector-icons';
import { Button } from '../componets/Button';
import { Header } from '../componets/Header';

export function Bets() {
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
        />
      </VStack>
      <Text color="white" textAlign="center" px={10}>
        Você ainda não está participando de {'\n'} nenhum bolão, que tal{' '}
        <Text color="yellow.500">buscar um por código</Text> {'\n'} ou{' '}
        <Text color="yellow.500">criar um novo</Text>?
      </Text>
    </VStack>
  );
}
