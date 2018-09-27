<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
	}

	#app::-webkit-scrollbar {
		display: none;
	}

	html,
	body {
		width: 100%;
		height: 100%;
		font-family: 'PingFang';
		font-size: 16px;
		min-height: 100%;
	}

	body {
		background: #fff;
	}

	* {
		margin: 0;
		padding: 0;
	}

	/* 懒加载 */

	img[lazy=loading] {
		background: url('../src/public/img/logo.jpg') no-repeat center;
		background-size: 100% 100%;
	}

	img[lazy=error] {
		/*your style here*/
	}

	img[lazy=loaded] {
		/*your style here*/
	}
</style>
<style src="@/public/css/reset.css"></style>  <!--公用的样式，很多可以复用好的样式都在里面请注意合理使用 -->