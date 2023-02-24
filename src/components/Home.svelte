<script>
    import Header from "./Header.svelte"
    import { LoginStore } from "../stores/LoginStore";

    LoginStore.subscribe((data)=> { console.log(data);})
</script>


<Header />