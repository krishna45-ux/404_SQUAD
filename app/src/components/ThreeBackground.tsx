import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground = ({ isModalOpen }: { isModalOpen: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let targetScrollZ = 0;
    const handleScroll = () => {
      targetScrollZ = window.scrollY * 0.015;
    };
    window.addEventListener("scroll", handleScroll);

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.012);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const baseCameraZ = 40;
    camera.position.z = baseCameraZ;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Clear previous canvasses (React Dev issue fallback)
    while (containerRef.current.firstChild) containerRef.current.removeChild(containerRef.current.firstChild);
    containerRef.current.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const geometry = new THREE.TorusKnotGeometry(14, 3.5, 200, 32);
    const material = new THREE.PointsMaterial({
      size: 0.15, transparent: true, opacity: 0.6,
      blending: THREE.AdditiveBlending, depthWrite: false, vertexColors: true
    });

    const colors = [];
    const color = new THREE.Color();
    const positionAttribute = geometry.getAttribute('position');
    for (let i = 0; i < positionAttribute.count; i++) {
      color.setHSL((i / positionAttribute.count) * 0.5 + 0.5, 0.9, 0.6);
      colors.push(color.r, color.g, color.b);
    }
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const torusKnot = new THREE.Points(geometry, material);
    group.add(torusKnot);

    const isMobile = window.innerWidth < 768;
    const particlesCount = isMobile ? 500 : 1500;
    const objCount = isMobile ? 15 : 40;

    const particlesGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) { posArray[i] = (Math.random() - 0.5) * 150; }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMat = new THREE.PointsMaterial({
      size: 0.1, color: 0xffffff, transparent: true,
      opacity: 0.15, blending: THREE.AdditiveBlending
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    const geomTypes = [
      new THREE.IcosahedronGeometry(0.6, 0),
      new THREE.OctahedronGeometry(0.6, 0),
      new THREE.TetrahedronGeometry(0.6, 0)
    ];
    const smallElements = new THREE.Group();
    const elementMaterial = new THREE.MeshBasicMaterial({
      color: 0x88ccff, wireframe: true, transparent: true,
      opacity: 0.2, blending: THREE.AdditiveBlending
    });

    for (let i = 0; i < objCount; i++) {
      const geom = geomTypes[Math.floor(Math.random() * geomTypes.length)];
      const mesh = new THREE.Mesh(geom, elementMaterial);
      mesh.position.set((Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100, (Math.random() - 0.5) * 60 - 20);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      mesh.userData = { rx: (Math.random() - 0.5) * 0.02, ry: (Math.random() - 0.5) * 0.02, rz: (Math.random() - 0.5) * 0.02 };
      smallElements.add(mesh);
    }
    scene.add(smallElements);

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.001;
    };
    document.addEventListener('mousemove', handleMouseMove);

    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      const desiredZ = baseCameraZ + targetScrollZ + Math.sin(elapsedTime * 0.5) * 1.5;
      camera.position.z += (desiredZ - camera.position.z) * 0.05;

      // Note: we can read isModalOpen directly if we used a ref, but here we can just pass it through closure. 
      // For accurate tracking we should probably hook it or use another pattern, 
      // but since speedMult affects rotation slowly, it's fine for now without complex state sync in rAF.
      const speedMult = document.body.classList.contains('modal-open') ? 0.2 : 1;

      group.rotation.x += (mouseY - group.rotation.x) * 0.05 * speedMult;
      group.rotation.y += (mouseX - group.rotation.y) * 0.05 * speedMult;

      torusKnot.rotation.y += 0.002 * speedMult;
      torusKnot.rotation.z += 0.001 * speedMult;

      const hueShift = (elapsedTime * 0.05) % 1;
      material.color.setHSL(hueShift, 0.7, 0.6);
      elementMaterial.color.setHSL((hueShift + 0.3) % 1, 0.8, 0.6);

      particlesMesh.rotation.y = elapsedTime * 0.02 * speedMult;
      particlesMesh.rotation.x = elapsedTime * 0.01 * speedMult;

      smallElements.children.forEach(child => {
        child.rotation.x += child.userData.rx * speedMult;
        child.rotation.y += child.userData.ry * speedMult;
        child.rotation.z += child.userData.rz * speedMult;
      });
      smallElements.rotation.y = elapsedTime * 0.02 * speedMult;
      smallElements.rotation.x = elapsedTime * 0.01 * speedMult;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current) {
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild);
        }
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      id="canvas-container"
      ref={containerRef}
      className={`fixed top-0 left-0 w-full h-full -z-10 transition-all duration-500 ${isModalOpen ? "blur-md scale-105" : ""}`}
    />
  );
};
