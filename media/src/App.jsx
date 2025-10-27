import { useState } from 'react'

import './App.css'
import image from './assets/image.jpg'
import video from './assets/vid.mp4'
import audio from './assets/music.mp3'
import data from './assets/data.json'

function App() {
  return <>
    <h1>Media Files Using Import</h1>
    <img src={image} alt="" />
    <video src={video} controls />
    <audio src={audio} controls />
    <p>{data.type} {data.message}</p>

    <h1>Media Files Using public</h1>
    <img src="image.jpg" alt="" />
    <video src="vid.mp4" controls />
    <audio src="music.mp3" controls />
    <p>{data.type} {data.message}</p>
  </>
}

export default App
