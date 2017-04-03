<script>
	export default {
		data () {
			return {
				name: 'James Lyon',
				description: 'Full Stack Software Engr'
			};    
		},
		props: ['value', 'styles'],
		mounted () {
			this.$watch('value', this.renderCode, { immediate: true })
		},
		render (h) {
			this.className = 'scoped-' + this._uid

		    return h('div', {
		      	class: this.className
		    }, [
		      	h('style', null, this.scopedStyles)
		    ])
		},
		computed: {
			scopedStyles () {
			  	return this.styles
			    	? this.styles.replace(/([\.#\w- >]+\w*?\s?{)/g, `.${this.className} $1`)
			    	: ''
			}
		},
		methods: {
			 renderCode (val) {
				const lastData = this.keepData && this.codeVM && assign({}, this.codeVM.$data)

				if (this.codeVM) {
					this.codeVM.$destroy()
					this.$el.removeChild(this.codeVM.$el)
				}
				this.codeEl = document.createElement('div')
				this.$el.appendChild(this.codeEl)

				try {
					const parent = this
					this.codeVM = new Vue(val).$mount(this.codeEl)
					if (lastData) {
						for (const key in lastData) {
							this.codeVM[key] = lastData[key]
						}
					}
				} catch (e) {
					/* istanbul ignore next */
					this.$emit('error', e)
					console.log(e);
				}
			}
		}
	}
</script>
