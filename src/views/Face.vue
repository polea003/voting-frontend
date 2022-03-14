<template>
  <main ontouchstart="" class="md:text-xl lg:text-2xl">
    <!-- Intro -->
    <!-- ---------- -->
    <!-- Inform the user of the camera's purpose and prepare them for camera permissions. -->
    <section id="intro"  v-if="!stream" class="absolute flex flex-col inset-0 px-4 py-8 z-20">
      <article class="flex flex-1 flex-col items-center justify-center">
        <img src="../assets/headshot.png" alt="CodePen" class="mt-8 h-32 md:h-40 lg:h-64 mb-4 w-32 md:w-40 lg:w-64">
        <h1 class="font-bold mb-4 text-2xl md:text-3xl lg:text-5xl text-center">Facial Recognition</h1>
        <p class="leading-relaxed md:max-w-screen-sm lg:max-w-screen-md text-center">In order to vote, please click the "Allow Access" button below to enable your webcam for facial validation.</p>
        <button @click="startCamera" class="bg-black font-bold px-4 py-2 mt-4 rounded-md text-white">Allow Access</button>
      </article>
    </section>
      
    <!-- Camera -- this is where the camera starts, everything above is the first page-->
    <!-- Allow the user to capture photos and take other camera actions. -->
    <section id="camera" v-if="stream" class="absolute flex flex-col inset-0 items-center justify-end px-4 py-8 z-20">
      <footer>
        <button class="capture" @click="capturePhoto">
          <img src="https://assets.codepen.io/141041/Button-Fill-White-Large.png" alt="CodePen" class="h-24 w-24" :disabled="!ready">
        </button>
      </footer>
    </section>
    
    <!-- Download -->
    <!-- ---------- -->
    <!-- Allow the user to preview and download the captured photo or return to camera. -->
    <section id="download" v-if="photo" class="absolute bg-white flex flex-col inset-0 items-center justify-between px-4 py-8 z-30">
      <header>
        <button @click="photo = null">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" class="h-10 md:h-12 lg:h-16 w-10 lg:w-12 md:w-16"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        </button>
      </header>
      
      <article>
        <img :src="photo.toDataURL('image/jpeg')" alt="Photo" class="h-64 w-64">
      </article>
      
      <footer>
        <button @click="downloadPhoto">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" class="h-10 md:h-12 lg:h-16 w-10 lg:w-12 md:w-16"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/></svg>
        </button>
      </footer>
    </section>
    
    <!-- Video -->
    <!-- ---------- -->
    <video ref="video" class="absolute h-full inset-0 object-cover w-full z-10" autoplay muted playsinline></video>
  </main>
</template>
<script>
// import not require
// test
import loadImage from "blueimp-load-image"
import * as faceapi from "face-api.js"
// const commons = require("./js/commons")
// import * as faceDetectionControls from "./js/faceDetectionControls"

// const REFERENCE_IMAGE = 'assets/pat.png'

export default {
  async mounted () {
    await Promise.all([
      faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
    ]).then(await this.start())
  },
  data() {
    return {
      stream: null,
      ready: false,
      photo: null
    }
  },
  methods: {
    async start () {
      console.log('start')
    },


    async startCamera() {
      this.stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: 'user'
        }
      })
      //stream.stop()
      
      this.$refs.video.srcObject = this.stream
      
      this.$refs.video.onloadedmetadata = () => {
        this.ready = true
      }
      
      this.$refs.video.onended = () => {
        this.ready = false
        this.stream = null
      }
    },
     
    async capturePhoto() {
      let video = this.$refs.video
      
      let videoCanvas = document.createElement('canvas')      
      videoCanvas.height = video.videoHeight
      videoCanvas.width = video.videoWidth      
      let videoContext = videoCanvas.getContext('2d')
      
      videoContext.drawImage(video, 0, 0)

      this.photo = loadImage.scale(videoCanvas, {
        maxHeight: 1080,
        maxWidth: 1080,
        cover: true,
        crop: true,
        canvas: true
      })

      const LabeledFaceDescriptors = await this.loadLabeledImages()
      const faceMatcher = new faceapi.FaceMatcher(LabeledFaceDescriptors, 0.6) 

      // const canvas = faceapi.createCanvasFromMedia(this.photo)
      const displaySize = { width: this.photo.width, height: this.photo.height }
      
      // console.log(faceapi)
      // // console.log(commons)
      // // console.log(faceDetectionControls)
      // console.log(this.photo)
      // var file = new File([this.photo.toDataURL()], "name.jpg", { type: "image/jpeg" } );
      // console.log(file)
      // // console.log(this.photo.toDataURL())
      // const queryImage = await faceapi.bufferToImage(file)
      // console.log(queryImage)
      const detections = await faceapi.detectAllFaces(this.photo).withFaceLandmarks().withFaceDescriptors()
      const resizedDetections = faceapi.resizeResults(detections, displaySize)
      const results = resizedDetections.map(d => faceMatcher.findBestMatch(d.descriptor))
      console.log(results)
      console.log(results[0].label)
      
     if(results[0].label != "unknown"){
       
        this.$router.push("/election-Dashboard");}
     else
        this.$router.push("/login");
    },
     
    async loadLabeledImages() {
      const labels = ['patrick', 'Tyler']
      return Promise.all(
        labels.map(async label => {
          const descriptions = []
          const img = await faceapi.fetchImage(`/labeled_images/${label}/1.png`)
          console.log('huh')
          console.log(img.src)
          const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
          descriptions.push(detections.descriptor)
          return new faceapi.LabeledFaceDescriptors(label, descriptions)
        })
      )
    },
    downloadPhoto() {
      this.photo.toBlob(blob => {
        let data = window.URL.createObjectURL(blob)
        let link = document.createElement('a')
        console.log(data)

        link.href = data
        link.download = "photo.jpg"
        link.click()
      }, 'image/jpeg')
    }
  }
}
</script>