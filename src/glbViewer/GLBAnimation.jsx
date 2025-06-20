/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { AnimationMixer } from "three";

import { forwardRef, useImperativeHandle } from "react";
import LoadingAnimation from "../ui/LoadingAnimation";

const GLBScene = forwardRef(function GLBScene(
  { url, targetProgress, isPlaying, onStop, onReady },
  ref
) {
  const group = useRef();
  const { scene, animations } = useGLTF(url);
  const mixer = useRef();
  const action = useRef();
  const duration = useRef(0);

  if (scene && onReady) onReady();

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new AnimationMixer(scene);
      action.current = mixer.current.clipAction(animations[0]);
      duration.current = animations[0].duration;
      action.current.play();
      action.current.paused = true;
    }
  }, [animations, scene]);

  useFrame((state, delta) => {
    const glbCamera = scene.getObjectByName("Camera");
    if (glbCamera) {
      state.camera.position.copy(glbCamera.position);
      state.camera.near = 0.01;
      state.camera.quaternion.copy(glbCamera.quaternion);
      state.camera.updateProjectionMatrix();
    }

    if (mixer.current && action.current && isPlaying) {
      action.current.paused = false;
      mixer.current.update(delta);

      const currentTime = action.current.time;
      const targetTime = duration.current * targetProgress;

      if (currentTime >= targetTime) {
        action.current.time = targetTime;
        action.current.paused = true;
        if (onStop) onStop();
      }
    }
  });

  // Expose reset function to parent
  useImperativeHandle(ref, () => ({
    reset: () => {
      if (action.current) {
        action.current.paused = true;
        action.current.time = 0;
        mixer.current.setTime(0);
      }
    },
  }));

  // eslint-disable-next-line react/no-unknown-property
  return <primitive ref={group} object={scene} />;
});

export default function GLBAnimation({ step, onPlaying }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [targetProgress, setTargetProgress] = useState(0.5);
  const sceneRef = useRef();

  useEffect(() => {
    handleReset();
  }, [sceneRef]);

  useEffect(() => {
    onPlaying(isPlaying);
  }, [onPlaying, isPlaying]);

  const handlePlay = (time) => {
    setTargetProgress(time || 0.5);
    setIsPlaying(true);
  };

  const handleStop = () => setIsPlaying(false);

  const handleReset = () => {
    setIsPlaying(false);
    sceneRef.current?.reset();
  };

  useEffect(() => {
    if (step === 0) handleReset();
    if (step === 1) handlePlay(0.5);
    if (step === 2) handlePlay(0.96);
  }, [step]);

  useEffect(() => {
    isReady && handleReset();
  }, [isReady]);

  return (
    <>
      <LoadingAnimation open={!isReady} />
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight />
        <GLBScene
          ref={sceneRef}
          url="/models/casa-con-modelos-zoom.glb"
          isPlaying={isPlaying}
          targetProgress={targetProgress}
          onStop={handleStop}
          onReady={() => setIsReady(true)}
        />
      </Canvas>
    </>
  );
}
