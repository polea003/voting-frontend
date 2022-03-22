<template>
     <Form @submit="Upload()" enctype="multipart/form-data" >
          <div class="custom-file mb-3">
            <input type="file" name="pic" id="upload" class="custom-file-input" ref="input">
            <label for="file" class="custom-file-label">Choose File</label>
          </div>
          <input  type="submit" value="Submit" class="btn btn-primary btn-block">
          
                                                <div
												:key="i"
												cols="12"
												sm="5"
												md="3"
												class="mb-4">
												<div
													class="add-button object-cover h-48 w-48"
													:style="{ 'background-image': 'url(' + 'http://localhost:5000/api/upload/files/1647817587992-bezkoder-headshot.PNG' + ')' }">
												</div>
												
											</div>
        </Form>
</template>

<script>

import PictureService from "../services/Picture.Service"
//import axios from 'axios'
export default ({
    setup() {
    },
    
    data () {
    return {
     images: []
    }
  },
      created(){
               this.getimages()
    },
     methods:{

         Upload(){
             console.log(this.$refs.input.files[0])
             const myRenamedFile = new File([this.$refs.input.files[0]], 'renamedFile.jpg', { type: "image/jpeg" });
             console.log(myRenamedFile)
             let formData = new FormData()
             formData.append('file', myRenamedFile)
            console.log(formData)

        //    // axios.post(`http://localhost:5000/api/uploads`, formData)
            PictureService.uploadPicture(formData)

         },

         async getimages(){
              this.images= await PictureService.getPicture()
             console.log(this.images.data[0])
         }
     }

})


</script>

<style>
	.image-input {
		position: absolute;
		top: 0;
		left: 0;
		width: 0px;
		height: 0px;
		overflow: hidden;
		opacity: 0;
	}
	.add-button {
		align-items: center;
		justify-content: center;
		background: #f2f2f3;
		background-size: cover;
		background-position: 50% 50%;
	}
	
</style>