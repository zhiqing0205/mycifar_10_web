<!--
 * @Description:
 * @Version: 2.0
 * @Author: Zhiqing Zhong
 * @Date: 2022-01-31 02:47:52
 * @LastEditors: Zhiqing 1775840762@qq.com
 * @LastEditTime: 2024-03-22 03:17:08
-->
<template>
    <div class="home">
		<el-card style="min-height: 85vh;">
			<el-row :gutter="25">
				<el-col :span="10">
					<img src="https://img.ziuch.top/i/2024/03/22/3wu511-1709194236434.webp" alt="">
				</el-col>
				<el-col :span="14">
					<h1>Dataset Card for CIFAR-10</h1>
					
          <h2>Dataset Summary</h2>
					<p class="desc">
						The CIFAR-10 dataset consists of 60000 32x32 colour images in 10 classes, with 6000 images per class. There are 50000 training images and 10000 test images. The dataset is divided into five training batches and one test batch, each with 10000 images.
The test batch contains exactly 1000 randomly-selected images from each class. The training batches contain the remaining images in random order, but some training batches may contain more images from one class than another.
Between them, the training batches contain exactly 5000 images from each class.
					</p>
					<h2>Supported Tasks and Leaderboards</h2>
          <p class="desc">
            image-classification: The goal of this task is to classify a given image into one of 10 classes. The leaderboard is available <a href="https://paperswithcode.com/sota/image-classification-on-cifar-10" target="_blank" type="primary">here</a>.
          </p>
          <h2>
            Data Instances
          </h2>
          <p class="desc">
            A sample from the training set is provided below:
          </p>
<highlightjs language='javascript' code="{
  'img': &lt;PIL.PngImagePlugin.PngImageFile image mode=RGB size=32x32 at 0x201FA6EE748>,
  'label': 0
}" />
          <h2>Data Fields</h2>
          <p class="desc">
            img: A PIL.Image.Image object containing the 32x32 image. Note that when accessing the image column: dataset[0]["image"] the image file is automatically decoded. Decoding of a large number of image files might take a significant amount of time. Thus it is important to first query the sample index before the "image" column, i.e. dataset[0]["image"] should always be preferred over dataset["image"][0]
          </p>
          <p class="desc">
            label: 0-9 with the following correspondence 0 airplane 1 automobile 2 bird 3 cat 4 deer 5 dog 6 frog 7 horse 8 ship 9 truck.
          </p>
				</el-col>
			</el-row>
		</el-card>
    </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
    name: "Home",
    setup() {
        return {};
    },
});
</script>

<style scoped>
img {
	height: 100%;
	width: 100%;
  object-fit: contain;
}

.desc {
	text-indent: 2em;
	font-size: 20px;
	line-height: 36px;
  color: rgb(56, 54, 54)
}

h1 {
	font-size: 30px;
	font-weight: bold;
	margin-bottom: 13px;
}

h2 {
	font-size: 24px;
	font-weight: bold;
  margin-top: 5px;
	margin-bottom: 10px;
}

</style>
