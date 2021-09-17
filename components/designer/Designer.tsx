import { Canvas, Editor, Frame } from '@craftjs/core';
import Root from 'components/prebuilt/Root';
import Title from 'components/prebuilt/Title';
import LeftSidebar from './LeftSidebar';

export default function Designer() {
  return (
    <Editor resolver={{ Title, Container: Root }}>
      <LeftSidebar />
      <Frame>
        <Canvas is={Root}>
          <Title />
        </Canvas>
      </Frame>
    </Editor>
  );
}
