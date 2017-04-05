/* global THREE */
/* global requestAnimationFrame */

import React, { Component } from 'react'
import Three from '../components/Three'

class ThreeContainer extends Component {
  componentDidMount() {
    const canvas = document.getElementById('three')
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    renderer.setClearColor(0xffffff)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(window.innerWidth, window.innerHeight)
    const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 5000)
    const scene = new THREE.Scene()
    const light1 = new THREE.AmbientLight(0xffffff, 0.5)
    const light2 = new THREE.PointLight(0xffffff, 0.5)
    const geometry = new THREE.BoxGeometry(20, 20, 20)
    const material = new THREE.MeshLambertMaterial({ color: 0x3399CC })
    scene.add(light1)
    scene.add(light2)
    const cubes = []
    const cubeRange = new THREE.Vector3(0, 0, 0)
    const cubeSpeed = 3
    const quantity = 1000
    for (let i = 0; i < quantity; i += 1) {
      const mesh = new THREE.Mesh(geometry, material)
      const random = Math.floor(Math.random() * 4)
      switch (random) {
        case 0:
          mesh.position.set(
            Math.random() * -window.innerWidth,
            Math.random() * -window.innerHeight,
            Math.random() * -5000
          )
          break
        case 1:
          mesh.position.set(
            Math.random() * window.innerWidth,
            Math.random() * -window.innerHeight,
            Math.random() * -5000
          )
          break
        case 2:
          mesh.position.set(
            Math.random() * window.innerWidth,
            Math.random() * window.innerHeight,
            Math.random() * -5000
          )
          break
        case 3:
          mesh.position.set(
            Math.random() * -window.innerWidth,
            Math.random() * window.innerHeight,
            Math.random() * -5000
          )
          break
      }
      scene.add(mesh)
      cubes.push(mesh)
    }
    function render() {
      renderer.render(scene, camera)
      requestAnimationFrame(render)

      for (let i = 0; i < cubes.length; i += 1) {
        if (i % 2 === 0) {
          cubes[i].rotation.x += 0.02
          cubes[i].rotation.y += 0.01
        } else {
          cubes[i].rotation.x += 0.01
          cubes[i].rotation.y += 0.02
        }
        if (cubes[i].position.z > cubeRange.z) {
          const random = Math.floor(Math.random() * 4)
          switch (random) {
            case 0:
              cubes[i].position.x = Math.random() * -window.innerWidth
              cubes[i].position.y = Math.random() * -window.innerHeight
              cubes[i].position.z = -5000
              break
            case 1:
              cubes[i].position.x = Math.random() * window.innerWidth
              cubes[i].position.y = Math.random() * -window.innerHeight
              cubes[i].position.z = -5000
              break
            case 2:
              cubes[i].position.x = Math.random() * window.innerWidth
              cubes[i].position.y = Math.random() * window.innerHeight
              cubes[i].position.z = -5000
              break
            case 3:
              cubes[i].position.x = Math.random() * -window.innerWidth
              cubes[i].position.y = Math.random() * window.innerHeight
              cubes[i].position.z = -5000
              break
          }
        } else {
          cubes[i].position.z += cubeSpeed
        }
      }
    }
    requestAnimationFrame(render)
  }
  render() {
    return <Three {...this.props} />
  }
}

export default ThreeContainer
