"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  RotateCcw,
  Sparkles,
  Layers,
  Sliders,
  Zap,
  Eye,
  Maximize2,
  CheckCircle2,
  Cpu,
  ArrowRight,
} from "lucide-react";

type MaterialPreset = "chrome" | "electric" | "obsidian" | "wireframe";
type ShapeType = "torusknot" | "icosahedron" | "sphere";

export default function PrototypeLab() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activePreset, setActivePreset] = useState<MaterialPreset>("chrome");
  const [activeShape, setActiveShape] = useState<ShapeType>("torusknot");
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [wireframe, setWireframe] = useState(false);
  const [fps, setFps] = useState(60);
  const [activeTab, setActiveTab] = useState<"sandbox" | "capabilities">("sandbox");

  // Three.js scene refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x08090d, 0.035);

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 5.5);

    // 3. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 4. Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.minDistance = 3;
    controls.maxDistance = 9;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.8;

    // 5. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const blueRimLight = new THREE.PointLight(0x526dff, 3.5, 10);
    blueRimLight.position.set(-4, -2, -2);
    scene.add(blueRimLight);

    const cyanLight = new THREE.PointLight(0x38bdf8, 2.0, 10);
    cyanLight.position.set(4, -3, 3);
    scene.add(cyanLight);

    // 6. Geometry & Material
    const geometry = new THREE.TorusKnotGeometry(1.1, 0.35, 140, 24);
    const material = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#b8c1cc"),
      metalness: 0.95,
      roughness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      reflectivity: 1.0,
      wireframe: false,
    });
    materialRef.current = material;

    const mesh = new THREE.Mesh(geometry, material);
    meshRef.current = mesh;
    scene.add(mesh);

    // 7. Ambient Particle Field
    const particlesCount = 350;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 12;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    const particlesMat = new THREE.PointsMaterial({
      size: 0.035,
      color: 0x526dff,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const particleField = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particleField);

    // 8. Animation Loop & FPS calculation
    let frameCount = 0;
    let lastTime = performance.now();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      controls.update();
      particleField.rotation.y += 0.0008;
      particleField.rotation.x += 0.0004;

      renderer.render(scene, camera);

      // FPS tracking
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }
    };
    animate();

    // 9. Resize listener
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  // Update Material Preset
  useEffect(() => {
    if (!materialRef.current) return;
    const mat = materialRef.current;

    switch (activePreset) {
      case "chrome":
        mat.color.set("#b8c1cc");
        mat.metalness = 0.95;
        mat.roughness = 0.1;
        mat.clearcoat = 1.0;
        mat.wireframe = wireframe;
        break;
      case "electric":
        mat.color.set("#526dff");
        mat.metalness = 0.85;
        mat.roughness = 0.15;
        mat.clearcoat = 0.9;
        mat.wireframe = wireframe;
        break;
      case "obsidian":
        mat.color.set("#161821");
        mat.metalness = 0.9;
        mat.roughness = 0.08;
        mat.clearcoat = 1.0;
        mat.wireframe = wireframe;
        break;
      case "wireframe":
        mat.color.set("#526dff");
        mat.metalness = 0.2;
        mat.roughness = 0.5;
        mat.wireframe = true;
        break;
    }
  }, [activePreset, wireframe]);

  // Update Geometry
  useEffect(() => {
    if (!meshRef.current) return;
    const mesh = meshRef.current;
    mesh.geometry.dispose();

    if (activeShape === "torusknot") {
      mesh.geometry = new THREE.TorusKnotGeometry(1.1, 0.35, 140, 24);
    } else if (activeShape === "icosahedron") {
      mesh.geometry = new THREE.IcosahedronGeometry(1.4, 2);
    } else if (activeShape === "sphere") {
      mesh.geometry = new THREE.SphereGeometry(1.3, 64, 64);
    }
  }, [activeShape]);

  // Toggle Auto-Rotate
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = isAutoRotate;
    }
  }, [isAutoRotate]);

  return (
    <section
      id="explore"
      className="relative min-h-screen py-24 px-6 md:px-12 border-t border-[#20242C] bg-[#07080b] flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#526DFF]/30 bg-[#526DFF]/10 text-[#526DFF] text-xs font-mono uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Interactive Prototype Sandbox
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
              Experience What&apos;s Possible.
            </h2>
          </div>

          <div className="flex items-center gap-2 p-1 rounded-xl bg-[#0e1017] border border-[#20242C]">
            <button
              onClick={() => setActiveTab("sandbox")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === "sandbox"
                  ? "bg-[#526DFF] text-white shadow-lg shadow-[#526DFF]/25"
                  : "text-[#B8C1CC] hover:text-white"
              }`}
            >
              Interactive 3D Sandbox
            </button>
            <button
              onClick={() => setActiveTab("capabilities")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${
                activeTab === "capabilities"
                  ? "bg-[#526DFF] text-white shadow-lg shadow-[#526DFF]/25"
                  : "text-[#B8C1CC] hover:text-white"
              }`}
            >
              3D Website Capabilities
            </button>
          </div>
        </div>

        {activeTab === "sandbox" ? (
          /* 3D Sandbox Layout */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Interactive Three.js Viewport (7 Cols) */}
            <div className="lg:col-span-8 relative rounded-3xl border border-[#20242C] bg-gradient-to-b from-[#0c0e14] to-[#08090d] overflow-hidden h-[480px] sm:h-[560px] shadow-2xl">
              {/* Three.js Canvas Container */}
              <div
                ref={mountRef}
                className="w-full h-full cursor-grab active:cursor-grabbing"
              />

              {/* Viewport Floating HUD */}
              <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2 pointer-events-none">
                <div className="px-3 py-1 rounded-md bg-[#08090d]/80 backdrop-blur-md border border-[#20242C] text-[11px] font-mono text-[#B8C1CC]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block mr-1.5 animate-pulse" />
                  WebGL 2.0 Active · {fps} FPS
                </div>
                <div className="px-3 py-1 rounded-md bg-[#08090d]/80 backdrop-blur-md border border-[#20242C] text-[11px] font-mono text-[#526DFF]">
                  Three.js Physical Shaders
                </div>
              </div>

              {/* Viewport Floating Instruction */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                <div className="text-[11px] font-mono text-[#B8C1CC]/70 bg-[#08090d]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-[#20242C]/80">
                  👆 Drag with mouse / finger to orbit · Pinch or scroll to zoom
                </div>
                <button
                  onClick={() => setIsAutoRotate(!isAutoRotate)}
                  className="pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#08090d]/80 hover:bg-[#20242C] border border-[#20242C] text-xs font-mono text-white transition-colors"
                >
                  <RotateCcw className={`w-3.5 h-3.5 ${isAutoRotate ? "text-[#526DFF]" : "text-zinc-500"}`} />
                  {isAutoRotate ? "Auto-Spin On" : "Auto-Spin Off"}
                </button>
              </div>
            </div>

            {/* Live Controller Panel (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              {/* Material Customizer */}
              <div className="p-6 rounded-2xl border border-[#20242C] bg-[#0c0e14]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#B8C1CC] mb-4">
                  <Sliders className="w-4 h-4 text-[#526DFF]" />
                  Material Presets
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: "chrome", label: "Liquid Chrome", desc: "Ray-traced metal" },
                    { id: "electric", label: "Electric Cobalt", desc: "Signature blue" },
                    { id: "obsidian", label: "Obsidian Glass", desc: "Ultra-dark gloss" },
                    { id: "wireframe", label: "Holo Grid", desc: "Cyber wireframe" },
                  ].map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setActivePreset(p.id as MaterialPreset);
                        if (p.id === "wireframe") setWireframe(true);
                        else setWireframe(false);
                      }}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        activePreset === p.id
                          ? "border-[#526DFF] bg-[#526DFF]/15 text-white shadow-[0_0_15px_rgba(82,109,255,0.25)]"
                          : "border-[#20242C] bg-[#08090d]/60 text-[#B8C1CC] hover:border-zinc-600 hover:text-white"
                      }`}
                    >
                      <div className="text-xs font-semibold">{p.label}</div>
                      <div className="text-[10px] text-[#B8C1CC]/70">{p.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Geometry Selector */}
              <div className="p-6 rounded-2xl border border-[#20242C] bg-[#0c0e14]">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#B8C1CC] mb-4">
                  <Layers className="w-4 h-4 text-[#526DFF]" />
                  3D Geometry
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "torusknot", label: "Infinity Knot" },
                    { id: "icosahedron", label: "Polyhedron" },
                    { id: "sphere", label: "Orbital" },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveShape(s.id as ShapeType)}
                      className={`py-2 px-3 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                        activeShape === s.id
                          ? "border-white bg-white text-black font-semibold"
                          : "border-[#20242C] bg-[#08090d] text-[#B8C1CC] hover:text-white"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Call to Action Box */}
              <div className="p-6 rounded-2xl border border-[#526DFF]/40 bg-gradient-to-br from-[#526DFF]/10 via-[#0c0e14] to-[#08090d]">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
                  <Zap className="w-4 h-4 text-[#526DFF]" />
                  Custom 3D for Your Brand
                </div>
                <p className="text-xs text-[#B8C1CC] font-light leading-relaxed mb-4">
                  We create tailored 3D product visualizers, interactive storytelling, and scroll-linked cinematics just like this.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#526DFF] hover:bg-[#415be6] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(82,109,255,0.4)]"
                >
                  Request A 3D Concept <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* Capabilities & Prototype Explainer */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Eye className="w-6 h-6 text-[#526DFF]" />,
                title: "Scroll-Driven Video Scrubbing",
                desc: "As the user scrolls down, video frames advance forward like a cinematic product disassembly. Scroll up, and it smoothly reverses.",
                feature: "GSAP ScrollTrigger + HTML5 Canvas Scrub",
              },
              {
                icon: <Cpu className="w-6 h-6 text-[#526DFF]" />,
                title: "Real-Time 3D WebGL Configurator",
                desc: "Allow customers to inspect products from every angle, toggle materials (chrome, glass, leather), and see reflections react to their mouse in real time.",
                feature: "Three.js + Ray-traced PBR Shaders",
              },
              {
                icon: <Maximize2 className="w-6 h-6 text-[#526DFF]" />,
                title: "Zero-Lag Performance & Mobile Safe",
                desc: "Optimized down to 60 FPS on iOS and Android. If a device has battery saver or low GPU, graceful procedural fallbacks activate automatically.",
                feature: "Adaptive DRP + Prefers-Reduced-Motion",
              },
            ].map((cap, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-[#20242C] bg-[#0c0e14] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#20242C]/50 border border-[#20242C] flex items-center justify-center mb-6">
                    {cap.icon}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-3">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[#B8C1CC] font-light leading-relaxed mb-6">
                    {cap.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#20242C]/60 flex items-center gap-2 text-xs font-mono text-[#526DFF]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{cap.feature}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
