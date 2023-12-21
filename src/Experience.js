import {
  Environment,
  OrbitControls,
  Sparkles,
  Stars,
  useHelper,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import Model from "./Model.js";
import { Suspense } from "react";
import Placeholder from "./Placeholder.js";

import { useRef } from "react";
import * as THREE from "three";

export default function Experience() {
  const light1 = useRef();
  const light2 = useRef();

  return (
    <>
      {/* <Perf position="top-left" /> */}

      <OrbitControls makeDefault />

      <Sparkles scale={50} size={16} count={600} />

      <directionalLight
        ref={light1}
        castShadow
        position={[1, 2, 3]}
        intensity={0.7}
        shadow-normalBias={0.04}
      />
      <directionalLight
        ref={light2}
        castShadow
        position={[-3, 2, -3]}
        intensity={0.7}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={0.5} />

        {/* <boxGeometry args={ [ 1, 1, 1, 2, 2, 2 ] } /> */}
      <Suspense fallback={<Placeholder position-y={0.5} scale={[2, 3, 2]} />}>
        <Model />

      </Suspense>
    </>
  );
}
