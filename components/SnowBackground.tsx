"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function SnowBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // optional
  };

  const options: ISourceOptions = {
    background: {
      color: { value: "transparent" },
    },
    fullScreen: {
      enable: true,
      zIndex: 1,
    },
    particles: {
      color: {
        value: ["#ffffff", "#e0f7fa", "#e1f5fe", "#f0f4ff"],
      },
      move: {
        direction: "bottom",
        enable: true,
        outModes: { default: "out" },
        random: true,
        speed: { min: 0.5, max: 2.5 },
        straight: false,
        drift: { min: -0.5, max: 0.5 },
      },
      number: {
        density: {
          enable: true,
          width: 1920,
          height: 1080,
        },
        value: 200,
      },
      opacity: {
        value: { min: 0.1, max: 0.7 },
        animation: {
          enable: true,
          speed: 0.3,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.8, max: 4 },
        animation: {
          enable: true,
          speed: 1.5,
          sync: false,
        },
      },
      wobble: {
        enable: true,
        distance: 15,
        speed: 8,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
      modes: {
        repulse: {
          distance: 80,
          duration: 0.4,
          speed: 0.5,
        },
      },
    },
  };

  if (init) {
    return (
      <div className="fixed inset-0 pointer-events-none z-[1]">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      </div>
    );
  }

  return <></>;
}
