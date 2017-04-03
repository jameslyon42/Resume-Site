<template>
	<div>
		<pane v-for="(section, index) in sections" :key="index" v-bind:section='section'
		></pane>	
	</div>
</template>

<script>
	export default {
		data () {
			return {
				sections: ['Header']
			};    
		}
	}
</script>
