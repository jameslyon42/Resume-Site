<style>
	.container { color: #ffffff;text-align: center; }
	.jobs { max-height: 70vh; overflow: auto; }
	.job { text-align: left; box-sizing: border-box; padding: 20px; }
	h2 { font-size: 30px; border-bottom: solid thin white; margin: 5px 0; }
	.dates { float: right; font-size: 16px; margin-top: 16px; }
	.duties { font-style: italic; margin-bottom: 5px; }
	.logo {
		width: 38px;
		height: 38px;
		margin-bottom: 5px;
		background-size: cover;
		display: inline-block;
		background-repeat: no-repeat;
		vertical-align: middle;
	}
</style>

<template>
	<div class='container'>
		<h1>Work</h1>
		<div class='jobs'>
			<div class='job' v-for='(job, index) in work'  :key='index' >
				<h2>
					<div class='logo' :style="{ backgroundImage: 'url(' + job.logo + ')' }"  ></div>
					{{job.name}} 
					<div class='dates'>
						{{job.start + ' - ' + (job.end ? job.end : 'Current') }}
					</div>
				</h2>
				<div class='duties'>{{ job.duties.join(', ') }}</div>
				<div class='description'>{{ job.description }}</div>
			</div>	
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				work: [
					{ 
						name: 'Revintu',
					  	duties: ['Manager', 'Developer', 'Full-Stack Engineer'],
					  	start: 'January 2014',
					  	end: false,
					  	logo: 'images/revintu.png',
					  	description: 'Developed business solutions for various industries including: hospitality, medical and financial. Worked closely with clients to extrapolate business needs and determine project scope.  Built core application components ranging from auto dialers to customer payment portals.  Responsible for the hiring and training of developers.'
					},
					{
						name: 'Advanced Tech Support',
					  	duties: ['Manager', 'Developer', 'Database Administrator'],
					  	start: 'December 2012',
					  	end: 'November 2013',
					  	logo: 'images/ats.png',
					  	description: 'Designed and implemented various web applications to track the effectiveness of technicians.  Managed an escalations department of remote support technicians.  Responsible for the training of other departments on intermediate troubleshooting.  Coordinated with oversees vendors.  Created a live Linux distribution to aid in virus removals.  Reduced the ticket flow into my department by 25 percent.'
					},
					{
						name: 'Belle Mead Co-op',
					  	duties: ['System administrator'],
					  	start: 'February 2009',
					  	end: 'October 2012',
					  	logo: 'images/bmfca.jpg',
					  	description: 'Developed applications to solve problems such as managing orders and deliveries.  Assisted in website updating.  Provided maintenance on SCO Unix server and security camera systems.  Imaged and networked POS systems.'
					},
					{
						name: 'RadioShack',
					  	duties: ['Manager'],
					  	start: 'February 2007 ',
					  	end: 'January 2009',
					  	logo: 'images/radioshack.png',
					  	description: 'Daily responsibilities included creating schedules, making deposits, and guiding employees to meet sale goals.  Developed loyal customers by building relationships and resolving conflicts.  Improved store performance by increasing sales while reducing return rate.'
					}
				]
			};    
		}
	}
</script>
