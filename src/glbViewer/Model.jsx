/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useContext, useEffect } from "react";
import { AccesibilityContext } from "../contexts/AccesibilityContext";
import * as THREE from "three";
import { Box, Html, useGLTF } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Marker3D from "../ui/Marker3D";

export default function Model({ model, selectedLayer }) {
  const { highContrast } = useContext(AccesibilityContext);
  const { scene } = useGLTF(model.url);
  const { camera } = useThree();
  // const [selectedMarker, setSelectedMarker] = useState(null);

  if (scene.children.length > 1 && selectedLayer) {
    scene.children[0].visible = selectedLayer !== "first";
    scene.children[1].visible = selectedLayer !== "second";
  }

  useEffect(() => {
    // Compute the bounding box and its center
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = camera.fov * (Math.PI / 180);
    const distance = Math.abs(maxDim / Math.sin(fov / 2));

    // Shift the scene so the center of the bounding box is at (0, 0, 0)
    scene.position.sub(center);

    // Position the camera so the model fits nicely in view (centered at origin)
    camera.position.set(0, 0, distance / 2);
    camera.lookAt(0, 0, 0);
  }, [scene, camera, model.url]);

  // const handleOnClick = (marker) => {
  //   marker.onClick();
  //   setSelectedMarker(marker.id);
  // };

  return (
    <group>
      <primitive
        object={scene}
        scale={[model.defaultScale, model.defaultScale, model.defaultScale]}
      />
      {model.markers?.map((marker) => (
        <Html
          key={marker.id}
          position={marker.position}
          distanceFactor={5}
          style={{ filter: highContrast ? "invert(1)" : "none" }}
        >
          <Box
            id="container"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Marker3D
              caption={`${marker.id + 1}`}
              onClick={() => handleOnClick(marker)}
              onClose={marker.onClose}
            />
          </Box>
        </Html>
      ))}
    </group>
  );
}
