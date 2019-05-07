<template>
    <div class="container">
        <button @click="isActive = !isActive">展开/折叠</button>
        <collapse>
            <div class="container" v-show="isActive">
                <h2>欢迎大家品尝Pizza!</h2>
                <h5>这里有你非常喜欢的Pizza!</h5>
            </div>
        </collapse>
		<button @click="isActive = !isActive">展开/折叠</button>
		<collapse>
		    <div class="container" v-show="isActive1">
		        <h2>欢迎大家品尝Pizza!</h2>
		        <h5>这里有你非常喜欢的Pizza!</h5>
		    </div>
		</collapse>
		<button @click="isActive = !isActive">展开/折叠</button>
		<collapse>
		    <div class="container" v-show="isActive2">
		        <h2>欢迎大家品尝Pizza!</h2>
		        <h5>这里有你非常喜欢的Pizza!</h5>
		    </div>
		</collapse>
		<button @click="isActive = !isActive">展开/折叠</button>
		<collapse>
		    <div class="container" v-show="isActive3">
		        <h2>欢迎大家品尝Pizza!</h2>
		        <h5>这里有你非常喜欢的Pizza!</h5>
		    </div>
		</collapse>
    </div>
</template>
<script>
import collapse from "../assets/collapse1.js";
export default {
  data() {
    return {
      isActive: false,
	  isActive1: false,
	  isActive2: false,
	  isActive3: false,

    };
  },
  components: {
    collapse
  }
};
</script>