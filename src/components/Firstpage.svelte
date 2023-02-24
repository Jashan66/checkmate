<script>
    import { onMount } from "svelte";
	import { createMatrix } from "../matrix.js";	
    import { LoginStore } from "../stores/LoginStore.js";


    onMount(async ()=>{
        await LoginStore.connectDB()
        createMatrix();
    
    });
</script> 


<h1 class="welcomeText">Welcome To Checkmate</h1> 

<canvas id="c"></canvas>



<style>
    .welcomeText{
        font-family: 'Bodoni Moda', serif;
        color: white;
        font-family: 'Exo 2', sans-serif;
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: .10em solid red;  /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        letter-spacing: .12em; /* Adjust as needed */
        animation: 
            typing 4.5s steps(40, end),
            blink-caret .75s step-end infinite;
    }

    @keyframes typing {
        from { width: 0 }
        to { width: 50% }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: red; }
    }

 
</style> 