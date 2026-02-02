import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface FloatingObject {
  mesh: THREE.Mesh;
  rotationSpeed: THREE.Vector3;
  floatSpeed: number;
  floatAmplitude: THREE.Vector3;
  initialPosition: THREE.Vector3;
}

export default function Three3DBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const objectsRef = useRef<FloatingObject[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const scrollRef = useRef({ y: 0 });
  const timeRef = useRef(0);
  const [webGLError, setWebGLError] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check for WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLError(true);
        return;
      }
    } catch {
      setWebGLError(true);
      return;
    }

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = null;
    scene.fog = new THREE.Fog(0x0b0d12, 100, 300);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Point lights
    const pointLight1 = new THREE.PointLight(0x0d21a1, 1, 200);
    pointLight1.position.set(50, 50, 50);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xf7f8fc, 0.8, 200);
    pointLight2.position.set(-50, -50, 30);
    scene.add(pointLight2);

    // Create 3D objects
    const objects: FloatingObject[] = [];

    // 1. Torus with glow
    const torusGeometry = new THREE.TorusGeometry(15, 5, 48, 64);
    const torusMaterial = new THREE.MeshPhongMaterial({
      color: 0x0d21a1,
      emissive: 0x0d21a1,
      emissiveIntensity: 0.5,
      shininess: 100,
      wireframe: false,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(20, 0, 0);
    scene.add(torus);
    objects.push({
      mesh: torus,
      rotationSpeed: new THREE.Vector3(0.001, 0.002, 0.0005),
      floatSpeed: 0.5,
      floatAmplitude: new THREE.Vector3(5, 8, 3),
      initialPosition: torus.position.clone(),
    });

    // Add glow to torus
    const torusGlowGeometry = new THREE.TorusGeometry(15.5, 5.3, 48, 64);
    const torusGlowMaterial = new THREE.MeshBasicMaterial({
      color: 0x0d21a1,
      transparent: true,
      opacity: 0.15,
    });
    const torusGlow = new THREE.Mesh(torusGlowGeometry, torusGlowMaterial);
    torusGlow.position.copy(torus.position);
    torusGlow.rotation.copy(torus.rotation);
    scene.add(torusGlow);

    // 2. Glassmorphic spheres
    const sphereGeometry = new THREE.SphereGeometry(8, 32, 32);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0x0d21a1,
      emissive: 0x0d21a1,
      emissiveIntensity: 0.2,
      shininess: 100,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
    });

    for (let i = 0; i < 3; i++) {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial.clone());
      const angle = (i / 3) * Math.PI * 2;
      const distance = 40;
      sphere.position.set(
        Math.cos(angle) * distance,
        Math.sin(angle) * distance,
        Math.cos(angle * 0.5) * 20
      );
      sphere.scale.set(0.8 + i * 0.2, 0.8 + i * 0.2, 0.8 + i * 0.2);
      scene.add(sphere);

      objects.push({
        mesh: sphere,
        rotationSpeed: new THREE.Vector3(0.0005, 0.0008, 0.0003),
        floatSpeed: 0.3 + i * 0.1,
        floatAmplitude: new THREE.Vector3(3, 5, 2),
        initialPosition: sphere.position.clone(),
      });
    }

    // 3. Wireframe structure
    const wireframeGeometry = new THREE.IcosahedronGeometry(12, 4);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0xf7f8fc,
      wireframe: true,
      opacity: 0.15,
      transparent: true,
    });
    const wireframe = new THREE.Mesh(wireframeGeometry, wireframeMaterial);
    wireframe.position.set(-30, 10, -10);
    scene.add(wireframe);

    objects.push({
      mesh: wireframe,
      rotationSpeed: new THREE.Vector3(0.0003, 0.0002, 0.0004),
      floatSpeed: 0.2,
      floatAmplitude: new THREE.Vector3(2, 4, 3),
      initialPosition: wireframe.position.clone(),
    });

    // 4. Rotating cylinder rings
    for (let i = 0; i < 2; i++) {
      const cylinderGeometry = new THREE.CylinderGeometry(20 + i * 5, 20 + i * 5, 1, 32);
      const cylinderMaterial = new THREE.MeshBasicMaterial({
        color: i === 0 ? 0x0d21a1 : 0xf7f8fc,
        wireframe: true,
        opacity: 0.1 + i * 0.1,
        transparent: true,
      });
      const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
      cylinder.position.set(0, -5 - i * 10, 0);
      cylinder.rotation.x = Math.PI * 0.3;
      scene.add(cylinder);

      objects.push({
        mesh: cylinder,
        rotationSpeed: new THREE.Vector3(0, i === 0 ? 0.0001 : -0.0001, 0),
        floatSpeed: 0.1,
        floatAmplitude: new THREE.Vector3(1, 1, 1),
        initialPosition: cylinder.position.clone(),
      });
    }

    objectsRef.current = objects;

    // Mouse tracking
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    // Scroll tracking
    const handleScroll = () => {
      scrollRef.current.y = window.scrollY;
    };

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      timeRef.current += 0.016; // ~60fps

      // Update camera based on mouse (subtle parallax)
      if (cameraRef.current) {
        cameraRef.current.position.x += (mouseRef.current.x * 8 - cameraRef.current.position.x) * 0.05;
        cameraRef.current.position.y += (mouseRef.current.y * 8 - cameraRef.current.position.y) * 0.05;

        // Zoom based on scroll
        const scrollZoom = Math.min(scrollRef.current.y / 1000, 2);
        cameraRef.current.position.z = 50 + scrollZoom * 5;
        cameraRef.current.lookAt(0, 0, 0);
      }

      // Update objects
      objectsRef.current.forEach((obj) => {
        // Rotation
        obj.mesh.rotation.x += obj.rotationSpeed.x;
        obj.mesh.rotation.y += obj.rotationSpeed.y;
        obj.mesh.rotation.z += obj.rotationSpeed.z;

        // Floating motion
        obj.mesh.position.x =
          obj.initialPosition.x + Math.sin(timeRef.current * obj.floatSpeed) * obj.floatAmplitude.x;
        obj.mesh.position.y =
          obj.initialPosition.y + Math.cos(timeRef.current * obj.floatSpeed) * obj.floatAmplitude.y;
        obj.mesh.position.z =
          obj.initialPosition.z + Math.sin(timeRef.current * obj.floatSpeed * 0.7) * obj.floatAmplitude.z;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      if (cameraRef.current) {
        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
      }

      if (rendererRef.current) {
        rendererRef.current.setSize(width, height);
        rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  if (webGLError) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-5 pointer-events-none"
      style={{ opacity: 0.7 }}
    />
  );
}
