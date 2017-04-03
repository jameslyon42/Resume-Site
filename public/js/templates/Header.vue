<style>
	.header {
		background: blue;
	}
</style>

<template>
	<header class='pane'>
		<div class='sub-pane'>
			<div class='header-info '>
				<div class='head'  ></div>
				<div class="name">{{ name }}</div>
				<div class="description">{{ description }}</div>
			</div>
		</div>
		<div class='sub-pane'>
			<textarea ref='header_editor' v-model='header_template'>
			</textarea>
		</div>
	</header>
</template>

<script>
	export default {
		data () {
			
			return {
				name: 'James Lyon',
				description: 'Full Stack Software Engineer',
				header_template: '',
				header_editor: false
			};    
		},
		mounted () {
			

			this.getTemplate('Header');
		},
		methods: {
			
			getTemplate: function (template) {
				var url = 'js/templates/' + template + '.vue';
				var self = this;
				axios.get(url)
					.then(function (response) {
						self.header_template = response.data;
						self.createCodeMirror();
					});
			},
			createCodeMirror: function () {
				var self = this;
				Vue.nextTick(function () {
				  	CodeMirror.fromTextArea(self.$refs.header_editor, {
						mode: {
						  	name: "htmlmixed",
						  	styles: [[null, null, "javascript"]]
						},
						theme: 'monokai'
					});
				})
				
			}

		}
	}
</script>
