import { Typography } from '@mui/material';
import { useNode } from '@craftjs/core';
import { useCallback } from 'react';
import Outline from 'components/designer/Outline';

export default function PostContent() {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode(
    useCallback(
      (state) => ({
        hovered: state.events.hovered,
        selected: state.events.selected,
      }),
      []
    )
  );

  return (
    <Typography
      ref={useCallback(
        (ref: HTMLElement) => connect(drag(ref)),
        [connect, drag]
      )}
      sx={{ position: 'relative' }}
    >
      Id commodo aliqua nostrud eu duis magna eu in cupidatat in. Non excepteur
      adipisicing esse nostrud non anim magna ea fugiat dolor nisi in voluptate
      magna. Officia deserunt aliqua sit reprehenderit deserunt tempor esse do
      elit id consectetur consectetur ut. Quis eiusmod officia deserunt est non
      voluptate adipisicing irure magna ullamco dolore deserunt. Minim veniam ad
      sit ea cillum anim aliquip voluptate dolor eu. Consequat ea consectetur
      consequat anim laborum pariatur labore laborum occaecat officia do et. Do
      minim cupidatat culpa consequat enim nisi ipsum.
      <br />
      Id commodo aliqua nostrud eu duis magna eu in cupidatat in. Non excepteur
      adipisicing esse nostrud non anim magna ea fugiat dolor nisi in voluptate
      magna. Officia deserunt aliqua sit reprehenderit deserunt tempor esse do
      elit id consectetur consectetur ut. Quis eiusmod officia deserunt est non
      voluptate adipisicing irure magna ullamco dolore deserunt. Minim veniam ad
      sit ea cillum anim aliquip voluptate dolor eu. Consequat ea consectetur
      consequat anim laborum pariatur labore laborum occaecat officia do et. Do
      minim cupidatat culpa consequat enim nisi ipsum.
      <br />
      Id commodo aliqua nostrud eu duis magna eu in cupidatat in. Non excepteur
      adipisicing esse nostrud non anim magna ea fugiat dolor nisi in voluptate
      magna. Officia deserunt aliqua sit reprehenderit deserunt tempor esse do
      elit id consectetur consectetur ut. Quis eiusmod officia deserunt est non
      voluptate adipisicing irure magna ullamco dolore deserunt. Minim veniam ad
      sit ea cillum anim aliquip voluptate dolor eu. Consequat ea consectetur
      consequat anim laborum pariatur labore laborum occaecat officia do et. Do
      minim cupidatat culpa consequat enim nisi ipsum.
      {(selected || hovered) && (
        <Outline hovered={selected ? false : hovered} />
      )}
    </Typography>
  );
}
