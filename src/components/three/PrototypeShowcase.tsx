"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  Sparkles,
  ArrowRight,
  Eye,
  RotateCcw,
  Sun,
  Moon,
  Zap,
  Flame,
  Building2,
  Package,
  Layers,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

type PrototypeCategory = "luxury" | "tech" | "architecture";

export default function PrototypeShowcase() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<PrototypeCategory>("luxury");
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [lightingMode, setLightingMode] = useState<"studio" | "sunset" | "cyber">("studio");
  const [fps, setFps] = useState(60);

  // Three.js internal references
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const keyLightRef = useRef<THREE.DirectionalLight | null>(null);
  const rimLightRef = useRef<THREE.PointLight | null>(null);
  const fillLightRef = useRef<THREE.PointLight | null>(null);

  // 1. Mount Three.js Canvas
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x08090d, 0.03);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1.2, 5.8);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    controls.enableZoom = true;
    controls.minDistance = 3.2;
    controls.maxDistance = 8.5;
    controls.maxPolarAngle = Math.PI / 2 + 0.15; // Don't flip underneath too much
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.6;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(5, 7, 5);
    keyLightRef.current = keyLight;
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0x526dff, 4.0, 15);
    rimLight.position.set(-5, 3, -4);
    rimLightRef.current = rimLight;
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(0x38bdf8, 2.0, 12);
    fillLight.position.set(4, -2, 3);
    fillLightRef.current = fillLight;
    scene.add(fillLight);

    // Main Group to hold dynamic prototype models
    const group = new THREE.Group();
    groupRef.current = group;
    scene.add(group);

    // Floating Particles
    const particlesCount = 280;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    const particlesMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x526dff,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particlesGeo, particlesMat);
    particlesRef.current = particles;
    scene.add(particles);

    // Loop
    let animId: number;
    let frameCount = 0;
    let lastTime = performance.now();

    const animate = () => {
      animId = requestAnimationFrame(animate);

      controls.update();

      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.0006;
        particlesRef.current.rotation.x += 0.0003;
      }

      renderer.render(scene, camera);

      // FPS calculation
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }
    };
    animate();

    const handleResize = () => {
      if (!container || !camera || !renderer) return;
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
      particlesGeo.dispose();
      particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  // 2. Build the 3D Models based on activeCategory
  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;

    // Clear previous children
    while (group.children.length > 0) {
      const obj = group.children[0] as THREE.Mesh;
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) {
          obj.material.forEach((m) => m.dispose());
        } else {
          obj.material.dispose();
        }
      }
      group.remove(obj);
    }

    // Reset rotation
    group.rotation.set(0, 0, 0);

    // Build Model A: Luxury Fragrance Bottle ("AURA NOIR")
    if (activeCategory === "luxury") {
      // Pedestal
      const pedestalGeo = new THREE.CylinderGeometry(1.6, 1.8, 0.25, 48);
      const pedestalMat = new THREE.MeshStandardMaterial({
        color: 0x11131a,
        roughness: 0.3,
        metalness: 0.8,
      });
      const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
      pedestal.position.y = -1.2;
      group.add(pedestal);

      // Glass Bottle Body (Heavy Glass)
      const bottleGeo = new THREE.BoxGeometry(1.3, 1.7, 0.75, 4, 4, 4);
      const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0x08090d,
        metalness: 0.1,
        roughness: 0.05,
        transmission: 0.9,
        transparent: true,
        opacity: 0.95,
        ior: 1.52,
        reflectivity: 0.9,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
      });
      const bottle = new THREE.Mesh(bottleGeo, glassMat);
      bottle.position.y = -0.15;
      group.add(bottle);

      // Golden Amber Liquid Core inside
      const liquidGeo = new THREE.BoxGeometry(1.15, 1.35, 0.6);
      const liquidMat = new THREE.MeshPhysicalMaterial({
        color: 0xdf9a3e,
        metalness: 0.3,
        roughness: 0.2,
        emissive: 0x221300,
        clearcoat: 0.8,
      });
      const liquid = new THREE.Mesh(liquidGeo, liquidMat);
      liquid.position.y = -0.28;
      group.add(liquid);

      // Gold Metallic Collar
      const collarGeo = new THREE.CylinderGeometry(0.28, 0.32, 0.3, 32);
      const goldMat = new THREE.MeshStandardMaterial({
        color: 0xf5c364,
        metalness: 0.95,
        roughness: 0.15,
      });
      const collar = new THREE.Mesh(collarGeo, goldMat);
      collar.position.y = 0.85;
      group.add(collar);

      // Heavy Obsidian & Gold Magnetic Cap
      const capGeo = new THREE.CylinderGeometry(0.42, 0.42, 0.65, 32);
      const capMat = new THREE.MeshPhysicalMaterial({
        color: 0x181a24,
        metalness: 0.85,
        roughness: 0.1,
        clearcoat: 1.0,
      });
      const cap = new THREE.Mesh(capGeo, capMat);
      cap.position.y = 1.3;
      group.add(cap);

      // Gold Logo Plate on front
      const badgeGeo = new THREE.PlaneGeometry(0.85, 0.45);
      const badgeMat = new THREE.MeshStandardMaterial({
        color: 0xf5c364,
        metalness: 0.9,
        roughness: 0.2,
      });
      const badge = new THREE.Mesh(badgeGeo, badgeMat);
      badge.position.set(0, -0.15, 0.385);
      group.add(badge);

      // Floating gold halo ring
      const ringGeo = new THREE.TorusGeometry(1.4, 0.02, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xf5c364,
        transparent: true,
        opacity: 0.5,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2.3;
      ring.position.y = -0.1;
      group.add(ring);
    }

    // Build Model B: Cyber Sneaker & Tech Gadget ("NEXUS CYBER-01")
    else if (activeCategory === "tech") {
      // Tech Stand
      const standGeo = new THREE.CylinderGeometry(1.8, 2.0, 0.2, 40);
      const standMat = new THREE.MeshStandardMaterial({
        color: 0x0a0c12,
        roughness: 0.4,
        metalness: 0.85,
      });
      const stand = new THREE.Mesh(standGeo, standMat);
      stand.position.y = -1.3;
      group.add(stand);

      // Glowing Neon Base Ring
      const ringGeo = new THREE.TorusGeometry(1.85, 0.03, 16, 64);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0x526dff });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = -1.2;
      group.add(ring);

      // Aerodynamic Sneaker / Vehicle Chassis Body
      const chassisGeo = new THREE.CapsuleGeometry(0.85, 2.1, 16, 32);
      const chassisMat = new THREE.MeshPhysicalMaterial({
        color: 0xb8c1cc, // Liquid chrome
        metalness: 0.95,
        roughness: 0.12,
        clearcoat: 1.0,
        clearcoatRoughness: 0.05,
      });
      const chassis = new THREE.Mesh(chassisGeo, chassisMat);
      chassis.rotation.z = Math.PI / 2.4;
      chassis.rotation.x = 0.25;
      chassis.position.set(0, 0.1, 0);
      group.add(chassis);

      // Carbon Fiber Inset Plates
      const plateGeo = new THREE.BoxGeometry(0.6, 1.4, 0.9);
      const plateMat = new THREE.MeshStandardMaterial({
        color: 0x161822,
        metalness: 0.7,
        roughness: 0.35,
      });
      const plate = new THREE.Mesh(plateGeo, plateMat);
      plate.rotation.z = Math.PI / 2.4;
      plate.position.set(-0.2, -0.1, 0.1);
      group.add(plate);

      // Electric Blue Neon Spine Line
      const neonSpineGeo = new THREE.TorusGeometry(1.15, 0.04, 16, 60, Math.PI);
      const neonSpineMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });
      const neonSpine = new THREE.Mesh(neonSpineGeo, neonSpineMat);
      neonSpine.rotation.z = -Math.PI / 3;
      neonSpine.position.set(0.1, 0.25, 0.25);
      group.add(neonSpine);

      // Suspension / Cushioning Springs (Cylinders)
      for (let i = -2; i <= 2; i++) {
        const springGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.45, 16);
        const springMat = new THREE.MeshStandardMaterial({
          color: 0x526dff,
          metalness: 0.9,
          roughness: 0.1,
        });
        const spring = new THREE.Mesh(springGeo, springMat);
        spring.position.set(i * 0.4 - 0.1, -0.65, 0.15);
        spring.rotation.z = -0.2;
        group.add(spring);
      }
    }

    // Build Model C: Spatial Architecture Pavilion ("SOLARIS PAVILION")
    else if (activeCategory === "architecture") {
      // Reflecting Pool Base
      const poolGeo = new THREE.BoxGeometry(4.2, 0.15, 3.2);
      const poolMat = new THREE.MeshPhysicalMaterial({
        color: 0x06080e,
        roughness: 0.05,
        metalness: 0.9,
        clearcoat: 1.0,
      });
      const pool = new THREE.Mesh(poolGeo, poolMat);
      pool.position.y = -1.1;
      group.add(pool);

      // Minimalist Concrete Floating Platform
      const slabGeo = new THREE.BoxGeometry(3.2, 0.2, 2.2);
      const slabMat = new THREE.MeshStandardMaterial({
        color: 0x222634,
        roughness: 0.8,
        metalness: 0.1,
      });
      const slab = new THREE.Mesh(slabGeo, slabMat);
      slab.position.y = -0.9;
      group.add(slab);

      // Cantilevered Roof Slab
      const roofGeo = new THREE.BoxGeometry(3.4, 0.18, 2.4);
      const roofMat = new THREE.MeshStandardMaterial({
        color: 0x181a24,
        roughness: 0.6,
        metalness: 0.4,
      });
      const roof = new THREE.Mesh(roofGeo, roofMat);
      roof.position.y = 0.95;
      group.add(roof);

      // Glass Curtain Walls
      const glassWallGeo = new THREE.BoxGeometry(2.8, 1.7, 1.8);
      const glassWallMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.35,
        roughness: 0.05,
        transmission: 0.95,
        ior: 1.45,
        clearcoat: 1.0,
      });
      const glass = new THREE.Mesh(glassWallGeo, glassWallMat);
      glass.position.y = 0.05;
      group.add(glass);

      // Glowing Interior Monolith (Warm Luxury Lighting inside)
      const coreGeo = new THREE.BoxGeometry(0.8, 1.5, 0.8);
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0xffaa44,
        emissive: 0xff8811,
        emissiveIntensity: 0.8,
        roughness: 0.3,
      });
      const core = new THREE.Mesh(coreGeo, coreMat);
      core.position.set(0.4, 0.0, -0.1);
      group.add(core);

      // Slender Architectural Steel Columns
      const colPositions = [
        [-1.3, 0.0, 0.9],
        [1.3, 0.0, 0.9],
        [-1.3, 0.0, -0.9],
        [1.3, 0.0, -0.9],
      ];
      colPositions.forEach(([x, y, z]) => {
        const colGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.7, 16);
        const colMat = new THREE.MeshStandardMaterial({
          color: 0x526dff,
          metalness: 0.95,
          roughness: 0.1,
        });
        const col = new THREE.Mesh(colGeo, colMat);
        col.position.set(x, y, z);
        group.add(col);
      });
    }
  }, [activeCategory]);

  // 3. Lighting mode effect
  useEffect(() => {
    if (!keyLightRef.current || !rimLightRef.current || !fillLightRef.current)
      return;

    if (lightingMode === "studio") {
      keyLightRef.current.color.set(0xffffff);
      keyLightRef.current.intensity = 2.5;
      rimLightRef.current.color.set(0x526dff);
      rimLightRef.current.intensity = 4.0;
      fillLightRef.current.color.set(0x38bdf8);
    } else if (lightingMode === "sunset") {
      keyLightRef.current.color.set(0xff8844);
      keyLightRef.current.intensity = 3.2;
      rimLightRef.current.color.set(0xff3366);
      rimLightRef.current.intensity = 3.5;
      fillLightRef.current.color.set(0xffcc66);
    } else if (lightingMode === "cyber") {
      keyLightRef.current.color.set(0x00f0ff);
      keyLightRef.current.intensity = 2.8;
      rimLightRef.current.color.set(0x8b5cf6);
      rimLightRef.current.intensity = 4.5;
      fillLightRef.current.color.set(0x06b6d4);
    }
  }, [lightingMode]);

  // Toggle Auto-Rotate
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = isAutoRotate;
    }
  }, [isAutoRotate]);

  const categories = [
    {
      id: "luxury" as PrototypeCategory,
      title: "Luxury & D2C Brands",
      subtitle: "AURA NOIR — Liquid Fragrance",
      tagline: "Heavy crystal glass, amber liquid core & 24K gold magnetic collar.",
      icon: <Flame className="w-4 h-4 text-amber-400" />,
      idealFor: "Perfumes, Watches, Spirits, Jewelry, Luxury D2C",
      stats: "320% Higher Conversion vs Static Images",
    },
    {
      id: "tech" as PrototypeCategory,
      title: "Tech & Streetwear",
      subtitle: "NEXUS CYBER-01 Sneaker",
      tagline: "Liquid chrome chassis, carbon fiber weave & cyan underglow.",
      icon: <Zap className="w-4 h-4 text-[#526DFF]" />,
      idealFor: "Sneakers, EVs, Hardware Startups, Gaming Gear",
      stats: "4.5x Instagram Reel Engagement Rate",
    },
    {
      id: "architecture" as PrototypeCategory,
      title: "Real Estate & Spaces",
      subtitle: "SOLARIS Architectural Lounge",
      tagline: "Reflecting obsidian pool, warm hearth & cantilevered roof slabs.",
      icon: <Building2 className="w-4 h-4 text-emerald-400" />,
      idealFor: "Luxury Resorts, Real Estate, Cafes, Architecture Studios",
      stats: "Zero-Bounce Rate Experience",
    },
  ];

  const currentCat = categories.find((c) => c.id === activeCategory)!;

  return (
    <section
      id="explore"
      className="relative min-h-screen py-24 px-6 md:px-12 border-t border-[#20242C] bg-[#07080b] flex flex-col justify-center overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#526DFF]/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Top Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#526DFF]/30 bg-[#526DFF]/10 text-[#526DFF] text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#526DFF]" />
            Client Experience Prototypes
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
            Websites That Make Competitors Irrelevant.
          </h2>
          <p className="mt-4 text-[#B8C1CC] text-sm sm:text-base font-light">
            Don&apos;t settle for flat templates. Here is how VANSH STUDIOS transforms your product into an unforgettable, touchable 3D reality.
          </p>
        </div>

        {/* Prototype Selector Bar (3 Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                activeCategory === cat.id
                  ? "border-[#526DFF] bg-gradient-to-b from-[#526DFF]/15 to-[#0c0e14] shadow-[0_0_30px_rgba(82,109,255,0.25)]"
                  : "border-[#20242C] bg-[#0c0e14]/60 hover:border-zinc-600 hover:bg-[#0c0e14]"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#B8C1CC]">
                  {cat.icon}
                  <span>{cat.title}</span>
                </div>
                {activeCategory === cat.id && (
                  <span className="w-2 h-2 rounded-full bg-[#526DFF] animate-ping" />
                )}
              </div>
              <div className="font-heading text-lg font-bold text-white mb-1">
                {cat.subtitle}
              </div>
              <div className="text-xs text-[#B8C1CC]/70 font-light line-clamp-1">
                {cat.idealFor}
              </div>
            </button>
          ))}
        </div>

        {/* Main Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 3D WebGL Canvas Viewport (8 Columns) */}
          <div className="lg:col-span-8 relative rounded-3xl border border-[#20242C] bg-gradient-to-b from-[#0e111a] via-[#090b10] to-[#06070a] overflow-hidden h-[460px] sm:h-[580px] shadow-2xl">
            {/* Real Three.js Canvas Container */}
            <div
              ref={mountRef}
              className="w-full h-full cursor-grab active:cursor-grabbing"
            />

            {/* Top Left Floating HUD Status */}
            <div className="absolute top-4 left-4 z-20 flex flex-wrap items-center gap-2 pointer-events-none">
              <div className="px-3 py-1.5 rounded-lg bg-[#08090d]/80 backdrop-blur-md border border-[#20242C] text-[11px] font-mono text-[#B8C1CC] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
                Interactive 3D Active · {fps} FPS
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-[#08090d]/80 backdrop-blur-md border border-[#20242C] text-[11px] font-mono text-[#526DFF]">
                {currentCat.subtitle}
              </div>
            </div>

            {/* Top Right Studio Lighting Toggles */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-[#08090d]/80 backdrop-blur-md p-1.5 rounded-xl border border-[#20242C]">
              <button
                title="Studio White Lighting"
                onClick={() => setLightingMode("studio")}
                className={`p-2 rounded-lg text-xs font-mono transition-colors ${
                  lightingMode === "studio"
                    ? "bg-[#526DFF] text-white"
                    : "text-[#B8C1CC] hover:text-white"
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
              </button>
              <button
                title="Sunset Amber Lighting"
                onClick={() => setLightingMode("sunset")}
                className={`p-2 rounded-lg text-xs font-mono transition-colors ${
                  lightingMode === "sunset"
                    ? "bg-amber-500 text-white"
                    : "text-[#B8C1CC] hover:text-white"
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
              </button>
              <button
                title="Cyber Neon Lighting"
                onClick={() => setLightingMode("cyber")}
                className={`p-2 rounded-lg text-xs font-mono transition-colors ${
                  lightingMode === "cyber"
                    ? "bg-cyan-500 text-black"
                    : "text-[#B8C1CC] hover:text-white"
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col sm:flex-row items-center justify-between gap-3 pointer-events-none">
              <div className="text-[11px] font-mono text-[#B8C1CC] bg-[#08090d]/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#20242C]/90">
                👆 360° Touch / Mouse Orbit · Zoom in to inspect reflections
              </div>

              <div className="pointer-events-auto flex items-center gap-2">
                <button
                  onClick={() => setIsAutoRotate(!isAutoRotate)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#08090d]/80 hover:bg-[#20242C] border border-[#20242C] text-xs font-mono text-white transition-colors"
                >
                  <RotateCcw
                    className={`w-3.5 h-3.5 ${
                      isAutoRotate ? "text-[#526DFF]" : "text-zinc-500"
                    }`}
                  />
                  <span>{isAutoRotate ? "Auto-Spin" : "Paused"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Client Conversion Details (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Prototype Overview Card */}
            <div className="p-7 rounded-3xl border border-[#20242C] bg-[#0c0e14] shadow-xl">
              <div className="text-xs font-mono uppercase tracking-widest text-[#526DFF] mb-2">
                Experience Breakdown
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-2">
                {currentCat.subtitle}
              </h3>
              <p className="text-sm text-[#B8C1CC] font-light leading-relaxed mb-6">
                {currentCat.tagline}
              </p>

              <div className="space-y-3.5 border-t border-[#20242C]/70 pt-5 text-xs text-[#B8C1CC]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#526DFF] shrink-0" />
                  <span>
                    <strong className="text-white font-medium">Target Niche:</strong> {currentCat.idealFor}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    <strong className="text-white font-medium">Business Impact:</strong> {currentCat.stats}
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>
                    <strong className="text-white font-medium">Technical Spec:</strong> 60 FPS Three.js ACES Filmic Shaders
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Client Action Card */}
            <div className="p-7 rounded-3xl border border-[#526DFF]/40 bg-gradient-to-br from-[#526DFF]/15 via-[#0e1017] to-[#08090d] shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[11px] font-mono uppercase tracking-wider text-white/70 block mb-1">
                  Ready to stand out?
                </span>
                <h4 className="font-heading text-xl font-bold text-white mb-2">
                  Want This For Your Brand?
                </h4>
                <p className="text-xs text-[#B8C1CC] font-light leading-relaxed mb-6">
                  VANSH STUDIOS builds custom interactive 3D websites in 7–14 days. Stop losing high-ticket clients to generic competitors.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#contact"
                    className="flex-1 py-3 px-4 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider text-center hover:bg-[#F4F3EF] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all flex items-center justify-center gap-1.5"
                  >
                    Request Custom 3D <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://wa.me/?text=Hi%20VANSH%20STUDIOS,%20I%20saw%20your%203D%20website%20prototype%20and%20want%20one%20for%20my%20business!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl border border-[#20242C] bg-[#08090D] hover:border-[#526DFF] text-white text-xs font-semibold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
