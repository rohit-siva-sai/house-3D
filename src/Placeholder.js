import { Html } from "@react-three/drei";

export default function Placeholder(props) {
  return (
    <>
      <mesh {...props}>
        <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
        <meshBasicMaterial wireframe color="red" />
      </mesh>
      <Html>
        <div
          style={{
            color: "white",
            width: "100%",
            fontFamily: "serif",
            fontSize: "50px",
            pointerEvents: "none",
          }}
        >
          RUKO ZARO! SABAR KARO
        </div>
        <div style={{ color: "white" }}>wait until the house loads....</div>
      </Html>
    </>
  );
}
