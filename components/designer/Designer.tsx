import { Canvas, Editor, Frame } from '@craftjs/core';
import Root from 'components/prebuilt/Root';
import Title from 'components/prebuilt/Title';

export default function Designer() {
  return (
    <Editor resolver={{ Title, Container: Root }}>
      <Frame>
        <Canvas is={Root}>
          <Title />
        </Canvas>
      </Frame>
    </Editor>
  );
}
