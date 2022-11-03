import { Heading, VStack } from 'native-base';

import { Button } from '../componets/Button';
import { Header } from '../componets/Header';
import { Input } from '../componets/Input';

export function Find() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Buscar por código" />

      <VStack mt={8} mx={5} alignItems="center">
        <Heading
          fontFamily="heading"
          color="white"
          fontSize="xl"
          mb={8}
          textAlign="center"
        >
          Encontre um bolão através de seu código único
        </Heading>

        <Input mb={2} placeholder="Qual o nome do seu bolão?" />

        <Button title="Buscar bolão" />
      </VStack>
    </VStack>
  );
}
