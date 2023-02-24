<script>
    import { LoginStore } from "../stores/LoginStore";
    let email;
    let handle;
    let password;
    let passwordConfirm;
    let storeData;
    let wrongPassword = "";

   
  
  
    function registerUser() {
       
        if (password == passwordConfirm){
            
            LoginStore.subscribe((data)=> storeData = data);
            let newId = (storeData.splice(-1)[0].id+1)
            console.log(newId);


            let userInfo = {
                id: newId,
                email: email,
                handle: handle,
                password: password
            }

            LoginStore.registerUser((userInfo));
        }else{
            wrongPassword = "Your passwords did not match please try again."
        }
           

       
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
                    <label for="">Email </label>
                </div>
                <div>
                    <input bind:value = { email } type="email">
                </div>
            </div>

            <div class="inputs">
                <div class="labels">
                    <label for="">Handle</label>
                </div>
                <div>
                    <input bind:value = { handle } type="text" >
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
                <div class="labels">
                    <label for="">Confirm Password</label>
                </div>
                <div>
                    <input bind:value = { passwordConfirm } type="password">
                </div>
            </div>

            <div>
                <h3>{ wrongPassword }</h3>
            </div>

            <div class="inputs">
                <div class="log-reg">
                    <button on:click = { registerUser }> Register </button>
                </div>
                <div class="log-reg">
                    <a href="t"> Login</a>
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
        margin-bottom: 7%;
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

    h3 {
        color: red;
    }

    
    
</style>