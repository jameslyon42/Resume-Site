<style>
	.container {
		color: #ffffff;
		text-align: center;
	}
	.skill {
		height: 100px;
		width: 100px;
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		display: inline-block;
		margin: 0 5px;
	}
	.skill-container {
		background-color: #BFC0C0;
		width: 90%;
		padding: 20px;
		box-sizing: border-box;
		margin: 0 auto;
	}
</style>

<template>
	<div class='container'>
		<h1>Skills</h1>
		<div class='skill-container'>
			<div 
				class="skill"
				v-for='(skill, index) in skills' 
				:title='skill.name'
				:key='index' 
				:style="{ backgroundImage: 'url(' + skill.image + ')' }" 
			></div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				skills: [ 
					{ name: 'PHP', image: 'images/php.png' },
					{ name: 'JavaScript', image: 'images/javascript.png' },
					{ name: 'Laravel', image: 'images/laravel.png' },
					{ name: 'Vue.js', image: 'images/vue.png' },
					{ name: 'MySQL', image: 'images/MySQL.png' },
					{ name: 'CSS', image: 'images/css.png' },
					{ name: 'HTML', image: 'images/html.png' },
					{ name: 'Sass', image: 'images/sass.svg' },
					{ name: 'Git', image: 'images/git.png' },
					{ name: 'Twilio', image: 'images/twilio.png' },
					{ name: 'Linux', image: 'images/linux.png' },
					{ name: 'NGINX', image: 'images/nginx.png' },
					{ name: 'Debian', image: 'images/debian.png' },
					{ name: 'Mailgun', image: 'images/mailgun.png' },
					{ name: 'Apache', image: 'images/apache.png' },
				]
			};    
		}
	}
</script>
