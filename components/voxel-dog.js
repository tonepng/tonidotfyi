import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { loadGLTFModel } from '../lib/model'
import { DogSpinner, DogContainer } from './voxel-dog-loader'

import { RenderPixelatedPass } from './pixel-pass'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { MeshLambertMaterial } from 'three'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDog = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const [renderer, setRenderer] = useState()
  const [_camera, setCamera] = useState()
  const [target] = useState(new THREE.Vector3(-0.5, 1.5, 0))
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      10 * Math.sin(0.2 * Math.PI),
      40,
      10 * Math.cos(0.2 * Math.PI)
    )
  )
  const [scene] = useState(new THREE.Scene())
  const [_controls, setControls] = useState()

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      renderer.setSize(scW, scH)
    }
  }, [renderer])

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer
    if (container && !renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      container.appendChild(renderer.domElement)
      setRenderer(renderer)

      const screenResolution = new THREE.Vector2(scW, scH);

      // 640 -> 240
      // 8   -> 6
      const scale = 2.5;
      const camera = new THREE.OrthographicCamera(
        //left / - 2, right / 2, 
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)
      setCamera(camera)

      const ambientLight = new THREE.AmbientLight(0xffffff, 1)
      scene.add(ambientLight)

      // const hemiLight = new THREE.HemisphereLight(0xD7E5F0, 0xD7E5F0, 2)
      // scene.add(hemiLight)

      const directionalLight = new THREE.DirectionalLight(0xD7E5F0, 1)
      //100,100,100
      directionalLight.position.set( 10, 10, 10 );
			directionalLight.castShadow = true;
			directionalLight.shadow.mapSize.set( 2048, 2048 );
      scene.add(directionalLight)

      const directionalLight2 = new THREE.DirectionalLight(0xF4E99B, .5)
      //100,100,100
      directionalLight.position.set( -5, -5, -5 );
			directionalLight.castShadow = true;
			directionalLight.shadow.mapSize.set( 2048, 2048 );
      scene.add(directionalLight2)

      const spotLight = new THREE.SpotLight( 0xff8800, 1, 10, Math.PI / 16, .02, 2 );
			spotLight.position.set( 2, 10, 0 );
			//const target = spotLight.target;
			//scene.add( target );
			spotLight.lookAt( 0, 0, 0 );
			spotLight.castShadow = true;
			scene.add( spotLight );

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.target = target
      setControls(controls)

      loadGLTFModel(scene, '/dog.glb', {
        receiveShadow: true,
        castShadow: true
      }).then(o => {
        outlinePass.selectedObjects = [];

        o.traverse(function (child) {
          if (child.isMesh) {
            outlinePass.selectedObjects.push(child);
          }
        })

        animate()
        setLoading(false)
      })

      const composer = new EffectComposer(renderer);

      const renderPass = new RenderPass(scene, camera);
      composer.addPass(renderPass);

      const outlinePass = new OutlinePass(new THREE.Vector2(window.innerWidth, window.innerHeight), scene, camera);
      outlinePass.visibleEdgeColor = new THREE.Color(0, 0, 0);
      outlinePass.edgeStrength = 100;
      outlinePass.edgeThickness = 0.1;
      composer.addPass(outlinePass);
      //pixel size!
      const renderPixelatedPass = new RenderPixelatedPass(screenResolution, 4, scene, camera);
      composer.addPass(renderPixelatedPass);

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 4;

          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)

          camera.lookAt(target)
        } else {
          controls.update()
        }

        composer.render();
        // renderer.render(scene, camera);
      }

      return () => {
        console.log('unmount')
        cancelAnimationFrame(req)
        renderer.dispose()
      }
    }
  }, [])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false)
    return () => {
      window.removeEventListener('resize', handleWindowResize, false)
    }
  }, [renderer, handleWindowResize])

  return (
    <DogContainer ref={refContainer}>{loading && <DogSpinner />}</DogContainer>
  )
}

export default VoxelDog
