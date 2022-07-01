import { useState, useRef } from "react";
import { NumberInput, Group, ActionIcon, NumberInputHandlers } from "@mantine/core";

interface numberProps {
  value?: number;
}
function NumberComponent(props: numberProps) {
  const [value, setValue] = useState(0);
  //   const handlers = useRef<NumberInputHandlers>();
  const handlers = useRef<NumberInputHandlers>();

  return (
    <Group spacing={5}>
      <ActionIcon
        size={35}
        variant="default"
        onClick={() => {
          console.log("CALL");
        }}
      >
        –
      </ActionIcon>

      <NumberInput hideControls value={value} handlersRef={handlers} styles={{ input: { width: 40, textAlign: "center" } }} />

      <ActionIcon size={35} variant="default">
        +
      </ActionIcon>
    </Group>
  );
}
export default NumberComponent;
