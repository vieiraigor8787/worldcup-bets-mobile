import { Button as ButtonNativeBase, Text, IButtonProps } from 'native-base';

interface ButtonProps extends IButtonProps {
  title: string;
  type?: 'PRIMARY' | 'SECONDARY';
}

export function Button({ title, type = 'PRIMARY', ...rest }: ButtonProps) {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      rounded="sm"
      bg={type === 'PRIMARY' ? 'red.500' : 'yellow.500'}
      _pressed={{
        bg: type === 'SECONDARY' ? 'green.500' : 'yellow.500',
      }}
      {...rest}
      _loading={{
        _spinner: { color: 'black' },
      }}
    >
      <Text
        fontSize="md"
        textTransform="uppercase"
        fontFamily="heading"
        color={type === 'PRIMARY' ? 'white' : 'black'}
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
