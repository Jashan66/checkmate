<script>
    import { LoginStore } from "../stores/LoginStore";
    import { currentPage } from "../stores/CurrentPageStore";
    let email_handle;
    let password;

 
    function loginUser() {

        let userInfo = {
            email_handle: email_handle,
            password: password
        }
    
        LoginStore.loginUser((userInfo));
    }
</script>

<div class="container">
    <div>

        <div>
            <h1 class="login-title">Checkmate</h1>
        </div>

        <div>
            <div class="inputs">
                <div class="labels">
                    <label for="">Email or Handle</label>
                </div>
                <div>
                    <input bind:value = { email_handle } type="email">
                </div>
            </div>


            <div class="inputs">
                <div class="labels">
                    <label for="">Password</label>
                </div>
                <div>
                    <input bind:value = { password } type="password">
                </div>
            </div>

            <div class="inputs">
                <div class="log-reg">
                    <button on:click = { loginUser }> Login </button>
                </div>
                <div class="log-reg">
                    <a href="t">Register</a>
                </div>
            </div>
        </div>

    </div>
</div>


<style>
    .container{
        font-family: 'Bodoni Moda', serif;
        font-family: 'Exo 2', sans-serif;
    }
    .login-title {
        color: white;
        margin-top: 1%;
        margin-bottom: 10%;
        font-size: 360%;
    }

    .inputs{
        padding: 1%;
    }

    input{
        width: 20%;
        height: 35px;
    }

    .log-reg{
        display:inline-block;
        position: relative;
     
    }

    label {
        color: white;
    }

    .labels{
        margin-bottom: .5%;
       
    }

    
    
</style>