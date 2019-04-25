<template>
	<div>

		<div class="block">
			<!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
			<el-carousel height="500px">
				<!-- <el-carousel-item v-for="item in 8" :key="item">
                   <div class="riding_lantern_img_box">
                       <img class="riding_lantern_img" :src="'./assets/img'+item+'.jpg'" alt="">
                    </div>
					<img src="./assets/img5.jpg" alt="">
                </el-carousel-item> -->
				<el-carousel-item>
					<div class="riding_lantern_img_box">
						<img class="riding_lantern_img" src="../assets/img1.jpg" alt="">
					</div>
				</el-carousel-item>
				<el-carousel-item>
					<div class="riding_lantern_img_box">
						<img class="riding_lantern_img" src="../assets/img2.jpg" alt="">
					</div>
				</el-carousel-item>
				<el-carousel-item>
					<div class="riding_lantern_img_box">
						<img class="riding_lantern_img" src="../assets/img3.jpg" alt="">
					</div>
				</el-carousel-item>
				<el-carousel-item>
					<div class="riding_lantern_img_box">
						<img class="riding_lantern_img" src="../assets/img1.jpg" alt="">
					</div>
				</el-carousel-item>

			</el-carousel>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.block {
		width: 1024px;
		margin: 0 auto;
		margin-top: 20px;
	}

	.riding_lantern_img {
		width: 1024px;
	}

	.riding_lantern_img_box {
		width: 1024px;
		height: 500px;
		display: flex;
		justify-content: center;
		align-items: center;

	}
</style>
