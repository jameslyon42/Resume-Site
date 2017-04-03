<template>
	<div class='pane'>
		<div class='sub-pane'>
			<preview 
				v-bind:value='preview'
				v-bind:styles='styles'
			></preview>
		</div>
		<div class='sub-pane'>
			<textarea ref='code_editor' v-model='code'>
			</textarea>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				code: '',
				code_editor: false,
				editor: false, 
				preview: '',
				styles: '',
			};    
		},
		props: ['section'],
		mounted () {
			this.getTemplate(this.section);
		},
		methods: {
			getTemplate: function (template) {
				var url = 'js/templates/' + template + '.vue';
				var self = this;
				axios.get(url)
					.then(function (response) {
						self.code = response.data;
						self.createCodeMirror();
					});
			},
			createCodeMirror: function () {
				var self = this;
				Vue.nextTick(function () {
				  	self.editor = CodeMirror.fromTextArea(self.$refs.code_editor, {
						mode: {
						  	name: "htmlmixed",
						  	styles: [[null, null, "javascript"]]
						},
						theme: 'monokai'
					});

					self.editor.on('change', self.updatePreview);
					self.updatePreview(self.editor);
				})
			},
			updatePreview: function (editor) {
				var code = editor.getValue();
				var div = document.createElement('div');
				div.innerHTML = code;

				var parsed_code = {
					template: div.querySelector('template').innerHTML,
					script: div.querySelector('script').innerHTML,
					styles: Array.prototype.slice.call(div.querySelectorAll('style')).map(n => n.innerHTML)
				}

				var compiled_js = this.eval(parsed_code.script);
				compiled_js.template = parsed_code.template;
				this.styles =  parsed_code.styles.join(' ');

				this.preview = compiled_js;


			},
			eval: function (script) {
			    const plugins = []

			    // Register jsx plugin
			    if (window['babel-plugin-transform-vue-jsx']) {
			      Babel.registerPlugin('transform-vue-jsx', window['babel-plugin-transform-vue-jsx']) // eslint-disable-line
			      plugins.push('transform-vue-jsx')
			    }

			    script =  Babel.transform(script, { // eslint-disable-line
			      presets: [['es2015', { 'loose': true }], 'stage-2'],
			      plugins,
			      comments: false
			    }).code

				script = `(function(exports){var module={};module.exports=exports;${script};return module.exports.__esModule?module.exports.default:module.exports;})({})`
				const compiled_script = new Function('return ' + script)() || {} // eslint-disable-line

				return compiled_script;
			}
		}
	}
</script>
