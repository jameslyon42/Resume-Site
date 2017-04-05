<template>
	<div>
		<pane v-for="(section, index) in sections" :key="index" v-bind:section='section'
		></pane>	
		<footer>
			<div class="container">
				<span>Like what you see? </span>
				<a href="assets/resume.pdf">Get the PDF</a>	
			</div>
			
		</footer>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				sections: [
							'Header', 
							'Skills', 
							'Work', 
							'Contact'
							]
			};    
		}
	}
</script>
