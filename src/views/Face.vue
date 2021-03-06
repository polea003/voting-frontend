<template>

  <main ontouchstart="" class="md:text-xl lg:text-2xl">
    <img  id='img1' class="invisible" :src="imgurl" crossorigin='anonymous'/>
    <h1 class="text-5xl font-bold mb-6 text-center">Facial Recognition</h1>
    <div v-if="currentUser" class="navbar-nav mx-auto mb-2"> <span class="text-3xl">Hi {{ currentUser.name }}!</span> </div>
    <!-- Intro -->
    <!-- ---------- -->
    <!-- Inform the user of the camera's purpose and prepare them for camera permissions. -->
    <section id="intro"  v-if="!stream" class="flex flex-col inset-0 px-4 pb-4 z-20">
      <article class="flex flex-1 flex-col items-center justify-center">
        <div v-if="currentUser">
          <img v-show="imgurl" :src="imgurl" class="mx-auto my-4 w-96 h-auto">
        </div>
        <div v-else>
          <img src="../assets/headshot.png" alt="CodePen" class="mt-8 h-32 md:h-40 lg:h-64 mb-4 w-32 md:w-40 lg:w-64">
        </div>

        <p class="leading-relaxed md:max-w-screen-sm lg:max-w-screen-md text-center">In order to vote, please click the "Allow Access" button below to enable your webcam for facial validation.</p>
        <button @click="startCamera" 
                class="
                px-4 
                py-2
                flex
                items-center
                justify-center
                font-bold
                text-white
                text-3xl
                w-72
                h-16
                m-6
                mt-8
                cursor-pointer
                rounded-full
                border-8 border-inherit
                bg-gradient-to-r
                from-blue-400
                to-blue-800
                hover:from-yellow-300 hover:to-yellow-600
                hover:border-black 
                hover:text-black"
                >Allow Access
        </button>
      </article>
    </section>
    
    
    
    <!-- Download -->
    <!-- ---------- -->
    <!-- Allow the user to preview and download the captured photo or return to camera. -->
    <section id="download" v-if="photo" class="bg-white flex flex-col inset-0 items-center justify-between px-4 py-8 z-30">
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
    <video ref="video" class="flex flex-wrap justify-center w-96 h-auto mx-auto" autoplay muted playsinline></video>
  <!-- Camera -- this is where the camera starts, everything above is the first page-->
    <!-- Allow the user to capture photos and take other camera actions. -->
    <section id="camera" v-if="stream" class="flex flex-col inset-0 items-center justify-end px-4 py-1 z-20">
      <footer>
        <button @click="capturePhoto(stream)" 
                class="capture
                flex
                items-center
                justify-center
                font-bold
                text-white
                text-3xl
                w-32
                h-32
                mb-4
                mt-4
                cursor-pointer
                rounded-full
                border-8 border-inherit
                bg-gradient-to-r
                from-blue-400
                to-blue-800
                hover:from-yellow-300 hover:to-yellow-600
                hover:border-black 
                hover:text-black" 
                >
          <img :src="require(`../assets/camera-transparent-png-12.png`)" class="h-20 w-20" :disabled="!ready">
        
        </button>
      </footer>
    </section>
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
      photo: null,
    }
  },
  computed:{
   currentUser() {
      return this.$store.state.auth.user;
    },
    imgurl(){
      return `http://localhost:5000/api/upload/files/${this.currentUser._id}`
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
     
    async capturePhoto(stream) {
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

      stream.getTracks().forEach(function(track) {
      track.stop();
});
     if(results.length > 0 && results[0].label != "unknown"){
        console.log(results[0].label)
        this.$router.push("/election-Dashboard");}
     else
        this.$store.dispatch('auth/logout');
        this.$router.push("/login");
    },
     

 
   async toDataURL(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      callback(reader.result);
    }
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
},
            
    async loadLabeledImages() {
      
      var img1 = document.getElementById('img1');
      img1.onload = function(){
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        ctx.drawImage(this,0,0);
        var data = canvas.toDataURL('image/jpeg');
        console.log(data)
      }
console.log(img1)
      const labels = ['Face Recognized: Access granted']
      return Promise.all(
        labels.map(async label => {
          const descriptions = []
          //const img = await faceapi.fetchImage(`/labeled_images/${label}/1.png`)
         // console.log(img1)
         // console.log("hererererere->>>>>>"+ this.data1)

          const detections = await faceapi.detectSingleFace(img1).withFaceLandmarks().withFaceDescriptor()
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