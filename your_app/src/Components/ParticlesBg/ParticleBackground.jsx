import React from "react";
import Particles from "react-particles";
import ParticleConfig from "./particle-config";

export default function ParticleBackground() {
  return (
    <Particles
      id="particles"
      className="particles-css"
      params={ParticleConfig}
    ></Particles>
  );
}
