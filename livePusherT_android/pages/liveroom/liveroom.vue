<template>
	<view>
		<button @click="getInitMsg(1)">get点击请求</button>
		<button @click="getInitMsg(2)">post点击请求</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			getInitMsg:function(id){
				if(id==1){
					console.log(id+'get请求')
					uni.request({
					    url: 'http://192.168.12.199:3000/api?id=2', //仅为示例，并非真实接口地址。
						method:"GET",
					    data: {
	
					    },
					    header: {
					        'custom-header': 'hello' //自定义请求头信息
					    },
					    success: (res) => {
					        console.log(res.data);
					    }
					});
				}else if(id==2){
					uni.request({
					    url: 'http://192.168.12.199:3000/api', //仅为示例，并非真实接口地址。
						method:"POST",
					    data: {
					        id: '3'
					    },
					    header: {
					        'custom-header': 'hello' //自定义请求头信息
					    },
					    success: (res) => {
					        console.log(res.data);
					    }
					});
				}
			}
		}
	}
</script>

<style>

</style>
