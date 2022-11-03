import { Heading, Text, VStack } from 'native-base';

import Logo from '../assets/logo.svg';

import { Button } from '../componets/Button';
import { Header } from '../componets/Header';
import { Input } from '../componets/Input';

export function New() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Criar novo bolão" />

      <VStack mt={8} mx={5} alignItems="center">
        <Logo />

        <Heading
          fontFamily="heading"
          color="white"
          fontSize="xl"
          my={8}
          textAlign="center"
        >
          Cire seu próprio bolão da copa e compartilhe entre amigos!
        </Heading>

        <Input mb={2} placeholder="Qual o nome do seu bolão" />

        <Button title="Criar meu bolão" />

        <Text mt={4} px={10} color="gray.200" fontSize="sm" textAlign="center">
          Após criar seu bolão, você receberá um código único que poderá usar
          para convidar outras pessoas.
        </Text>
      </VStack>
    </VStack>
  );
}
