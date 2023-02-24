<script>
	import { onMount } from "svelte";
	import Firstpage from "./components/Firstpage.svelte";
	import Login from "./components/Login.svelte";
	import { showLogin } from "./matrix";
	import { currentPage } from "./stores/CurrentPageStore";
	import Home from "./components/Home.svelte";
	import Register from "./components/Register.svelte";
	

	let showMatrix = true;
	onMount(()=>{
		//function to switch from first page to login page after a setTimeout
		showLogin().then((done) => {
            showMatrix = done;
        });
 
    });
   

</script>



<main>
	{#if showMatrix}
		<Firstpage />
	{:else}
		<Login />
		<!-- <Register /> -->
	{/if}

	
	<!-- <Home /> -->

</main>






<style>
	main {
		text-align: center;
		max-width: 240px;	
		
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>