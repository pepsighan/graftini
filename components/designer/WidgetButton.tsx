import { Element, useEditor } from '@craftjs/core';
import { Button } from '@mui/material';
import { ComponentType, ReactNode, useCallback } from 'react';

type WidgetButtonProps = {
  component: ComponentType;
  children: ReactNode;
};

export default function WidgetButton({
  component,
  children,
}: WidgetButtonProps) {
  const {
    connectors: { create },
  } = useEditor();

  return (
    <Button
      ref={useCallback(
        (ref) => create(ref, <Element is={component} />),
        [component, create]
      )}
      sx={{ height: 150 }}
    >
      {children}
    </Button>
  );
}
