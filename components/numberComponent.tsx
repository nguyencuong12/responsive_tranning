import { useState, useRef, useEffect } from 'react';
import {
  NumberInput,
  Group,
  ActionIcon,
  NumberInputHandlers,
  Button,
} from '@mantine/core';

interface numberProps {
  valueNumber: number;
  callback?: Function;
}
function NumberComponent(props: numberProps) {
  const [value, setValue] = useState(0);

  const { valueNumber, callback } = props;
  //   const handlers = useRef<NumberInputHandlers>();
  const handlers = useRef<NumberInputHandlers>();
  useEffect(() => {
    if (valueNumber) {
      setValue(valueNumber);
    }
  }, [valueNumber]);

  return (
    <Group spacing={5}>
      <ActionIcon
        size={35}
        variant="default"
        onClick={() => {
          handlers.current?.decrement();
        }}
      >
        –
      </ActionIcon>

      <NumberInput
        hideControls
        value={value}
        handlersRef={handlers}
        onChange={val => {
          setValue(val!);
          callback!(val);
        }}
        styles={{ input: { width: 40, textAlign: 'center' } }}
        max={10}
        min={0}
      />

      <ActionIcon
        size={35}
        variant="default"
        onClick={() => {
          handlers.current?.increment();
        }}
      >
        +
      </ActionIcon>
    </Group>
  );
}
export default NumberComponent;
