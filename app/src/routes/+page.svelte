<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

			
<div class="homepage">

	<section class="hero">

		<a class="title" >
			<h1 class="herotext">Gina Holby</h1>
			<h3 class="subherotext">UX-designer</h3>
		</a>

		<div class="skoleoppgaver">
			{#each data.projects as project}

				<a class="" href="/project/{project.slug.current}">
					<img class="{project.slug.current} circle " src="{project.bilde}" alt="">
				</a>

			{/each}
		</div>

	</section>


</div>

<style>
	.homepage{
		width: 100vw;
		height: 100vh;
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		justify-content: center;
		position: relative;
		background-color: rgb(253, 228, 232);
	
	
	}
	
	.hero{
		position: relative;
	}
	.herotext{
		font-family: 'Allura', cursive;
		font-size: 90px;
	}
	.subherotext{
	   /*  font-family: 'Fauna One', serif; */
		position: absolute;
		left: 56px;
		top: 80px
	}
	
	
	
	
	.skoleoppgaver{
		
		width: 100px;
		height: 250px;
		margin: auto;
		position: relative; 
		top: 80px;
	}
	
	.circle{
		
		object-fit: cover;
		border-radius: 100%;
		box-shadow: 5px 10px 10px grey;
	}
	
	.disko{
		position: absolute;
		top: -35px;
		left: -45px;
		z-index: 4;
		width: 220px;
		height: 220px;
	}.citybike{
		position: absolute;
		top: 110px;
		left: 80px;
		z-index: 3;
		width: 200px;
		height: 200px;
	}.grape{
		position: absolute;
		top: 70px;
		right: 80px;
		z-index: 2;
		width: 200px;
		height: 200px;
	}.getaway{
		position: absolute;
		top: 20px;
		right: 250px;
		z-index: 1;
		width: 150px;
		height: 150px;
	}.nasjonalmuseet{
		position: absolute;
		top: 40px;
		right: -287px;
		z-index: 1;
		width: 150px;
		height: 150px;
	}.nor-ways{
		position: absolute;
		top: 70px;
		right: -380px;
		z-index: 1;
		width: 100px;
		height: 100px;
	}.laekag{
		position: absolute;
		top: 100px;
		right: 380px;
		z-index: 1;
		width: 100px;
		height: 100px;
	}
	
	
	
	</style>
	
	