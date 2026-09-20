import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import {
  RotateCw,
  ZoomIn,
  ZoomOut,
  Sparkles,
  Eye,
  Compass,
  Award,
  BookOpen,
  Feather,
  RotateCcw,
  CheckCircle2,
  Info,
  Newspaper,
  ScrollText,
  Printer,
  Ship,
} from 'lucide-react';
import { playPaperRustle, playMuseumChime } from '../utils/audio';
import { buildEnhancedArtifactModel } from './three/buildEnhancedModels';

export type ModelType =
  | 'noli'
  | 'medal'
  | 'ophthalmology'
  | 'compass'
  | 'quill'
  | 'fili'
  | 'solidaridad'
  | 'diploma'
  | 'press'
  | 'ship';

interface Hotspot {
  id: string;
  title: string;
  position: [number, number, number];
  description: string;
}

interface ModelConfig {
  id: ModelType;
  name: string;
  year: string;
  category: string;
  origin: string;
  shortDesc: string;
  historicalContext: string;
  icon: React.ComponentType<{ className?: string }>;
  hotspots: Hotspot[];
}

export const MODELS_CONFIG: Record<ModelType, ModelConfig> = {
  noli: {
    id: 'noli',
    name: 'Noli Me Tangere',
    year: 'Berlin, 1887',
    category: 'Novel',
    origin: 'First Berlin edition',
    shortDesc: 'Rizal’s novel that exposed colonial abuses and sparked Filipino national awakening.',
    historicalContext: 'Printed with Maximo Viola’s help — 2,000 copies in March 1887.',
    icon: BookOpen,
    hotspots: [
      { id: 'cover', title: 'Title', position: [0, 0.55, 0.45], description: '“Noli Me Tangere” = Touch Me Not — society’s “social cancer.”' },
      { id: 'spine', title: 'Spine', position: [-1.35, 0, 0], description: 'Gold-banded leather spine, German binding style.' },
      { id: 'ribbon', title: 'Ribbon', position: [0.6, -1.6, 0.25], description: 'Crimson silk bookmark on aged pages.' },
    ],
  },
  fili: {
    id: 'fili',
    name: 'El Filibusterismo',
    year: 'Ghent, 1891',
    category: 'Novel',
    origin: 'Sequel to Noli',
    shortDesc: 'Darker political sequel dedicated to the martyred priests Gomburza.',
    historicalContext: 'Printed in Ghent with help from Valentin Ventura.',
    icon: BookOpen,
    hotspots: [
      { id: 'cover', title: 'Title', position: [0, 0.5, 0.4], description: '“El Filibusterismo” — the subversive / the filibuster.' },
      { id: 'spine', title: 'Spine', position: [-1.3, 0, 0], description: 'Dark binding reflecting the novel’s grave tone.' },
      { id: 'ribbon', title: 'Ribbon', position: [0.5, -1.5, 0.2], description: 'Black mourning ribbon for Gomez, Burgos, and Zamora.' },
    ],
  },
  medal: {
    id: 'medal',
    name: 'Ateneo Medal',
    year: 'Manila, 1877',
    category: 'Honor',
    origin: 'Ateneo Municipal',
    shortDesc: 'Sobresaliente gold medal for Rizal’s Bachiller en Artes.',
    historicalContext: 'Mark of excellence under Jesuit education.',
    icon: Award,
    hotspots: [
      { id: 'crest', title: 'IHS Crest', position: [0, 0.25, 0.3], description: 'Jesuit monogram at the medal’s center.' },
      { id: 'laurel', title: 'Laurel', position: [0.9, -0.4, 0.25], description: 'Victory wreath for top academic marks.' },
      { id: 'ribbon-ring', title: 'Ribbon', position: [0, 1.7, 0], description: 'Maroon-and-gold Ateneo honor ribbon.' },
    ],
  },
  diploma: {
    id: 'diploma',
    name: 'Madrid Diploma',
    year: '1884–1885',
    category: 'Degree',
    origin: 'Universidad Central',
    shortDesc: 'Licentiates in Medicine and Philosophy & Letters.',
    historicalContext: 'Sobresaliente in Philosophy — proof of Filipino intellectual equality.',
    icon: ScrollText,
    hotspots: [
      { id: 'title', title: 'University', position: [0, 1.0, 0.1], description: 'Universidad Central de Madrid heading.' },
      { id: 'name', title: 'Name', position: [0, 0.1, 0.1], description: 'José Rizal — dual licentiate graduate.' },
      { id: 'seals', title: 'Seals', position: [0, -1.4, 0.15], description: 'Royal seals and graduation ribbons.' },
    ],
  },
  ophthalmology: {
    id: 'ophthalmology',
    name: 'Eye Surgery Kit',
    year: '1885–1886',
    category: 'Medicine',
    origin: 'Paris & Heidelberg',
    shortDesc: 'Loupe and tools like those Rizal used in ophthalmology training.',
    historicalContext: 'He specialized to treat his mother Teodora’s cataracts.',
    icon: Eye,
    hotspots: [
      { id: 'lens', title: 'Lens', position: [-0.7, 1.1, 0], description: 'Optical loupe for eye examinations.' },
      { id: 'gears', title: 'Focus', position: [-0.7, 0.15, 0.4], description: 'Brass focus rim for fine adjustment.' },
      { id: 'handle', title: 'Handle', position: [-0.7, -1.5, 0], description: 'Balanced brass grip for steady work.' },
    ],
  },
  ship: {
    id: 'ship',
    name: 'SS Salvadora',
    year: 'May 3, 1882',
    category: 'Travel',
    origin: 'Manila Bay',
    shortDesc: 'Steamer that carried Rizal secretly to Europe as “Jose Mercado.”',
    historicalContext: 'First leg of the voyage that shaped the Propaganda Movement.',
    icon: Ship,
    hotspots: [
      { id: 'hull', title: 'Hull', position: [0, -0.2, 0.6], description: 'Wooden hull of the Spanish steamer.' },
      { id: 'funnel', title: 'Funnel', position: [0.5, 1.2, 0], description: 'Steam funnel for the ocean voyage.' },
      { id: 'name', title: 'Name', position: [0, -0.15, 0.7], description: 'SS Salvadora — May 3, 1882 departure.' },
    ],
  },
  compass: {
    id: 'compass',
    name: 'Voyage Compass',
    year: '1882',
    category: 'Travel',
    origin: 'Manila → Spain',
    shortDesc: 'Brass pocket compass for the secret voyage to Europe.',
    historicalContext: 'Route: Singapore, Colombo, Suez, then Barcelona.',
    icon: Compass,
    hotspots: [
      { id: 'needle', title: 'Needle', position: [0, 0.55, 0], description: 'Magnetized needle pointing north.' },
      { id: 'rose', title: 'Dial', position: [0, 0.3, 1.05], description: 'Cardinal points N·E·S·W.' },
      { id: 'hinge', title: 'Lid', position: [0, 0.5, -1.5], description: 'Hinged brass lid over the glass face.' },
    ],
  },
  quill: {
    id: 'quill',
    name: 'Quill & Inkwell',
    year: '1882–1896',
    category: 'Writing',
    origin: 'Europe desks',
    shortDesc: 'Crystal inkwell and goose quill — tools of essays and novels.',
    historicalContext: 'Used for Amor Patrio, Noli, and letters to Blumentritt.',
    icon: Feather,
    hotspots: [
      { id: 'nib', title: 'Nib', position: [-1.1, -0.7, 0.5], description: 'Gold split nib for iron-gall ink.' },
      { id: 'feather', title: 'Quill', position: [0.0, 1.5, 0.1], description: 'Goose feather for fast drafting.' },
      { id: 'well', title: 'Inkwell', position: [1.15, -0.1, 0.2], description: 'Crystal reservoir with bronze cap.' },
    ],
  },
  solidaridad: {
    id: 'solidaridad',
    name: 'La Solidaridad',
    year: '1889–1895',
    category: 'Press',
    origin: 'Barcelona & Madrid',
    shortDesc: 'Main newspaper of the Propaganda Movement.',
    historicalContext: 'Founded by Lopez Jaena; later edited by Marcelo H. del Pilar.',
    icon: Newspaper,
    hotspots: [
      { id: 'masthead', title: 'Masthead', position: [0, 1.2, 0.1], description: '“La Solidaridad” — Quincenario Democrático.' },
      { id: 'columns', title: 'Columns', position: [0, 0, 0.1], description: 'Reform essays and exposés of colonial abuse.' },
      { id: 'stamp', title: 'Stamp', position: [0.9, -1.3, 0.15], description: 'Circulation mark of the expatriate press.' },
    ],
  },
  press: {
    id: 'press',
    name: 'Printing Press',
    year: 'Berlin, 1887',
    category: 'Press',
    origin: 'Noli printing',
    shortDesc: 'Iron press that produced the first edition of Noli Me Tangere.',
    historicalContext: 'Funded by Maximo Viola’s emergency loan in Berlin.',
    icon: Printer,
    hotspots: [
      { id: 'wheel', title: 'Wheel', position: [0, 1.15, -0.15], description: 'Screw wheel lowering the platen.' },
      { id: 'platen', title: 'Platen', position: [0, -0.1, 0.2], description: 'Press plate that stamps ink onto paper.' },
      { id: 'sheet', title: 'Sheet', position: [0, 0, 0.35], description: 'Fresh Noli page hot off the press.' },
    ],
  },
};

interface ThreeArtifactViewerProps {
  modelType?: ModelType;
  audioEnabled?: boolean;
  onSelectModel?: (type: ModelType) => void;
  className?: string;
  autoHeight?: boolean;
}

function disposeObject(obj: THREE.Object3D) {
  obj.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.geometry?.dispose();
      const mats = Array.isArray(child.material) ? child.material : [child.material];
      mats.forEach((m) => {
        if (!m) return;
        Object.values(m).forEach((v) => {
          if (v instanceof THREE.Texture) v.dispose();
        });
        m.dispose();
      });
    }
  });
}

export const ThreeArtifactViewer: React.FC<ThreeArtifactViewerProps> = ({
  modelType = 'noli',
  audioEnabled = true,
  onSelectModel,
  className = '',
  autoHeight = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [currentModel, setCurrentModel] = useState<ModelType>(modelType);
  const [isRotating, setIsRotating] = useState(true);
  const [wireframeMode, setWireframeMode] = useState(false);
  const [lightingPreset, setLightingPreset] = useState<'museum' | 'daylight' | 'sepia'>('museum');
  const [materialTheme, setMaterialTheme] = useState<'original' | 'gold' | 'bronze'>('original');
  const [selectedHotspot, setSelectedHotspot] = useState<Hotspot | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const reqAnimRef = useRef<number | null>(null);
  const lightsGroupRef = useRef<THREE.Group | null>(null);

  const pointerPos = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0.25, y: 0.55 });
  const currentRotation = useRef({ x: 0.25, y: 0.55 });
  const targetZoom = useRef(4.4);
  const currentZoom = useRef(4.4);
  const isRotatingRef = useRef(isRotating);
  const isDraggingRef = useRef(isDragging);

  useEffect(() => {
    isRotatingRef.current = isRotating;
  }, [isRotating]);
  useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);

  useEffect(() => {
    if (modelType && modelType !== currentModel) {
      setCurrentModel(modelType);
      setSelectedHotspot(null);
    }
  }, [modelType]);

  const buildModel = useCallback(
    (type: ModelType, scene: THREE.Scene) => {
      if (modelGroupRef.current) {
        scene.remove(modelGroupRef.current);
        disposeObject(modelGroupRef.current);
        modelGroupRef.current = null;
      }

      try {
        const group = buildEnhancedArtifactModel(type, {
          wireframe: wireframeMode,
          materialTheme,
        });
        scene.add(group);
        modelGroupRef.current = group;
      } catch (err) {
        console.error(`[3D] Failed to build model "${type}":`, err);
      }
    },
    [materialTheme, wireframeMode]
  );

  const applyLightingPreset = useCallback(
    (preset: 'museum' | 'daylight' | 'sepia', scene: THREE.Scene) => {
      if (lightsGroupRef.current) {
        scene.remove(lightsGroupRef.current);
      }

      const lights = new THREE.Group();
      lights.name = 'studio-lights';

      if (preset === 'museum') {
        lights.add(new THREE.AmbientLight(0x3a2a1a, 1.8));
        const key = new THREE.DirectionalLight(0xfff0d6, 3.6);
        key.position.set(4.5, 6, 4);
        lights.add(key);
        const rim = new THREE.DirectionalLight(0xd4af37, 2.4);
        rim.position.set(-5, 1, -3);
        lights.add(rim);
        const fill = new THREE.PointLight(0xffe8c0, 2.2, 14);
        fill.position.set(0, 3.2, 2.5);
        lights.add(fill);
        const hemi = new THREE.HemisphereLight(0xffe8c8, 0x4a3520, 0.9);
        lights.add(hemi);
      } else if (preset === 'daylight') {
        lights.add(new THREE.AmbientLight(0xffffff, 2.0));
        const key = new THREE.DirectionalLight(0xf5f9ff, 3.0);
        key.position.set(3, 7, 3);
        lights.add(key);
        const fill = new THREE.DirectionalLight(0xdde6f0, 1.6);
        fill.position.set(-4, 2, -2);
        lights.add(fill);
      } else {
        lights.add(new THREE.AmbientLight(0x401f0a, 2.2));
        const c1 = new THREE.PointLight(0xff9933, 4.5, 12);
        c1.position.set(2.5, 2.2, 2);
        lights.add(c1);
        const c2 = new THREE.PointLight(0xcc6600, 2.8, 12);
        c2.position.set(-2.5, 1.2, -2);
        lights.add(c2);
      }

      scene.add(lights);
      lightsGroupRef.current = lights;
    },
    []
  );

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.15, 4.4);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    rendererRef.current = renderer;

    applyLightingPreset(lightingPreset, scene);
    buildModel(currentModel, scene);

    let lastTime = performance.now();
    const animate = (time: number) => {
      reqAnimRef.current = requestAnimationFrame(animate);
      const delta = (time - lastTime) * 0.001;
      lastTime = time;

      if (isRotatingRef.current && !isDraggingRef.current) {
        targetRotation.current.y += 0.45 * delta;
      }

      currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.1;
      currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.1;
      currentZoom.current += (targetZoom.current - currentZoom.current) * 0.1;

      if (modelGroupRef.current) {
        modelGroupRef.current.rotation.x = currentRotation.current.x;
        modelGroupRef.current.rotation.y = currentRotation.current.y;

        // Soft pulse on hotspot rings
        modelGroupRef.current.traverse((child) => {
          if (child.name.startsWith('hotspot-') && child.children[1]) {
            const halo = child.children[1] as THREE.Mesh;
            const s = 1 + Math.sin(time * 0.004) * 0.12;
            halo.scale.set(s, s, s);
          }
        });
      }

      if (cameraRef.current) {
        cameraRef.current.position.z = currentZoom.current;
      }

      renderer.render(scene, camera);
    };

    reqAnimRef.current = requestAnimationFrame(animate);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0 && cameraRef.current && rendererRef.current) {
          cameraRef.current.aspect = newW / newH;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      if (reqAnimRef.current) cancelAnimationFrame(reqAnimRef.current);
      if (modelGroupRef.current) disposeObject(modelGroupRef.current);
      renderer.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (sceneRef.current) buildModel(currentModel, sceneRef.current);
  }, [currentModel, materialTheme, wireframeMode, buildModel]);

  useEffect(() => {
    if (sceneRef.current) applyLightingPreset(lightingPreset, sceneRef.current);
  }, [lightingPreset, applyLightingPreset]);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    pointerPos.current = { x: e.clientX, y: e.clientY };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;
    const deltaX = e.clientX - pointerPos.current.x;
    const deltaY = e.clientY - pointerPos.current.y;
    pointerPos.current = { x: e.clientX, y: e.clientY };
    targetRotation.current.y += deltaX * 0.008;
    targetRotation.current.x = Math.max(
      -Math.PI / 2.5,
      Math.min(Math.PI / 2.5, targetRotation.current.x + deltaY * 0.008)
    );
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    targetZoom.current = Math.max(2.4, Math.min(7.2, targetZoom.current + e.deltaY * 0.003));
  };

  const handleZoomIn = () => {
    playPaperRustle(audioEnabled);
    targetZoom.current = Math.max(2.4, targetZoom.current - 0.55);
  };

  const handleZoomOut = () => {
    playPaperRustle(audioEnabled);
    targetZoom.current = Math.min(7.2, targetZoom.current + 0.55);
  };

  const handleResetCamera = () => {
    playPaperRustle(audioEnabled);
    targetRotation.current = { x: 0.25, y: 0.55 };
    targetZoom.current = 4.4;
    setSelectedHotspot(null);
  };

  const handleHotspotClick = (hs: Hotspot) => {
    playMuseumChime(audioEnabled);
    setSelectedHotspot(hs);
    setIsRotating(false);
    const [x, y, z] = hs.position;
    targetRotation.current = { x: -y * 0.28, y: -Math.atan2(x, z || 1) };
    targetZoom.current = 3.3;
  };

  const handleSelectModelInternal = (key: ModelType) => {
    playPaperRustle(audioEnabled);
    setCurrentModel(key);
    setSelectedHotspot(null);
    onSelectModel?.(key);
  };

  const currentConfig = MODELS_CONFIG[currentModel];
  const IconComponent = currentConfig.icon;

  return (
    <div
      className={`relative w-full rounded-2xl border border-[#c8b38d] bg-[#fbf8f1] shadow-lg overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="p-3 sm:p-4 border-b border-[#c8b38d] bg-[#f5edd9] flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-[#eee4d2] border border-[#c5ad88] flex items-center justify-center text-[#825c14] shrink-0">
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] uppercase font-mono tracking-widest text-[#825c14] font-semibold">
              3D Relic Viewer
            </div>
            <h3 className="font-serif font-bold text-sm sm:text-base text-[#2a170a] truncate">
              {currentConfig.name}
            </h3>
          </div>
        </div>

        <div className="flex gap-1 overflow-x-auto pb-1 sm:pb-0 -mx-1 px-1 scrollbar-thin">
          {(Object.keys(MODELS_CONFIG) as ModelType[]).map((key) => {
            const item = MODELS_CONFIG[key];
            const ItemIcon = item.icon;
            const isActive = currentModel === key;
            return (
              <button
                key={key}
                id={`btn-3d-model-${key}`}
                onClick={() => handleSelectModelInternal(key)}
                className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-serif font-semibold whitespace-nowrap transition-all shrink-0 ${
                  isActive
                    ? 'bg-[#c59b27] text-[#1c1208] font-bold shadow-xs'
                    : 'bg-[#eae0cb]/70 text-[#5a4430] hover:bg-[#dfd3bc]'
                }`}
              >
                <ItemIcon className="w-3.5 h-3.5" />
                <span className="hidden xs:inline sm:inline">{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Canvas stage */}
      <div
        ref={containerRef}
        className={`relative w-full ${
          autoHeight ? 'h-[300px] sm:h-[420px] md:h-[500px]' : 'h-[320px] sm:h-[460px] md:h-[540px]'
        } bg-[radial-gradient(ellipse_at_center,#faf6ee_0%,#efe5d2_55%,#e4d6be_100%)] cursor-grab active:cursor-grabbing select-none`}
      >
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onWheel={handleWheel}
          className="w-full h-full block touch-none z-10"
        />

        {/* Year badge */}
        <div className="absolute top-3 left-3 z-20 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#fcf9f2]/95 border border-[#c8b38d] text-[11px] text-[#2a170a] font-serif shadow-sm">
            <IconComponent className="w-3.5 h-3.5 text-[#825c14]" />
            {currentConfig.year}
          </span>
        </div>

        {/* Controls */}
        <div className="absolute top-3 right-3 z-20 flex items-center gap-1 bg-[#fcf9f2]/95 border border-[#c8b38d] rounded-xl p-1 shadow-md">
          <button
            id="btn-3d-toggle-rotate"
            onClick={() => {
              playPaperRustle(audioEnabled);
              setIsRotating(!isRotating);
            }}
            title="Rotate"
            className={`p-2 rounded-lg ${isRotating ? 'bg-[#c59b27] text-[#1c1208]' : 'text-[#5a4430] hover:bg-[#eee4d2]'}`}
          >
            <RotateCw className={`w-4 h-4 ${isRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '8s' }} />
          </button>
          <button id="btn-3d-zoom-in" onClick={handleZoomIn} className="p-2 rounded-lg text-[#5a4430] hover:bg-[#eee4d2]">
            <ZoomIn className="w-4 h-4" />
          </button>
          <button id="btn-3d-zoom-out" onClick={handleZoomOut} className="p-2 rounded-lg text-[#5a4430] hover:bg-[#eee4d2]">
            <ZoomOut className="w-4 h-4" />
          </button>
          <button id="btn-3d-reset-cam" onClick={handleResetCamera} className="p-2 rounded-lg text-[#5a4430] hover:bg-[#eee4d2]">
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* Hint — desktop only */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none hidden sm:block z-20">
          <span className="text-[11px] font-serif text-[#6d460d] bg-[#fcf9f2]/90 px-3 py-1 rounded-full border border-[#c8b38d]">
            Drag to rotate · Scroll to zoom
          </span>
        </div>
      </div>

      {/* Presentation info — always visible below canvas (responsive) */}
      <div className="p-3 sm:p-5 bg-[#fbf7ee] border-t border-[#c8b38d] space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-[#8b2626] text-[10px] font-serif font-bold text-white">
            {currentConfig.category}
          </span>
          <span className="text-xs text-[#7a644e] font-mono">{currentConfig.origin}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm sm:text-base text-[#2a170a] font-serif font-semibold leading-snug mb-1">
              {currentConfig.shortDesc}
            </p>
            <p className="text-xs sm:text-sm text-[#6d5743] font-serif leading-relaxed">
              {currentConfig.historicalContext}
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[#f4ebd9] border border-[#c8b38d]">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#825c14] font-semibold mb-2 flex items-center gap-1.5">
              <Info className="w-3 h-3" />
              {selectedHotspot ? 'Feature' : 'Tap a point'}
            </div>

            <div className="flex flex-wrap gap-1.5 mb-2">
              {currentConfig.hotspots.map((hs) => {
                const isSelected = selectedHotspot?.id === hs.id;
                return (
                  <button
                    key={hs.id}
                    id={`btn-hotspot-${hs.id}`}
                    onClick={() => handleHotspotClick(hs)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-serif transition-all inline-flex items-center gap-1 ${
                      isSelected
                        ? 'bg-[#c59b27] text-[#1c1208] font-bold'
                        : 'bg-[#f0e7d5] text-[#3d2b1f] hover:bg-[#e6d8c0]'
                    }`}
                  >
                    {hs.title}
                    {isSelected && <CheckCircle2 className="w-3 h-3" />}
                  </button>
                );
              })}
            </div>

            <p className="text-xs sm:text-sm text-[#4a3828] font-serif leading-relaxed">
              {selectedHotspot
                ? selectedHotspot.description
                : 'Select a gold pin feature to learn a short historical detail.'}
            </p>
          </div>
        </div>

        {/* Light / material — compact row */}
        <div className="flex flex-wrap gap-2 items-center pt-1 border-t border-[#c8b38d]/50">
          <span className="text-[10px] text-[#7a644e] font-mono uppercase font-semibold">Light</span>
          {(['museum', 'daylight', 'sepia'] as const).map((p) => (
            <button
              key={p}
              onClick={() => {
                playPaperRustle(audioEnabled);
                setLightingPreset(p);
              }}
              className={`px-2 py-1 rounded text-[10px] font-serif font-semibold capitalize ${
                lightingPreset === p ? 'bg-[#c59b27] text-[#1c1208]' : 'bg-[#eee4d2] text-[#5a4430]'
              }`}
            >
              {p}
            </button>
          ))}
          <span className="text-[10px] text-[#7a644e] font-mono uppercase font-semibold ml-2">Look</span>
          <button
            onClick={() => {
              playPaperRustle(audioEnabled);
              setMaterialTheme('original');
              setWireframeMode(false);
            }}
            className={`px-2 py-1 rounded text-[10px] font-serif font-semibold ${
              materialTheme === 'original' && !wireframeMode ? 'bg-[#c59b27] text-[#1c1208]' : 'bg-[#eee4d2] text-[#5a4430]'
            }`}
          >
            Original
          </button>
          <button
            onClick={() => {
              playPaperRustle(audioEnabled);
              setMaterialTheme('gold');
              setWireframeMode(false);
            }}
            className={`px-2 py-1 rounded text-[10px] font-serif font-semibold ${
              materialTheme === 'gold' && !wireframeMode ? 'bg-[#c59b27] text-[#1c1208]' : 'bg-[#eee4d2] text-[#5a4430]'
            }`}
          >
            Gold
          </button>
          <button
            onClick={() => {
              playPaperRustle(audioEnabled);
              setWireframeMode(!wireframeMode);
            }}
            className={`px-2 py-1 rounded text-[10px] font-serif font-semibold ${
              wireframeMode ? 'bg-[#8b2626] text-white' : 'bg-[#eee4d2] text-[#5a4430]'
            }`}
          >
            Mesh
          </button>
        </div>
      </div>
    </div>
  );
};
