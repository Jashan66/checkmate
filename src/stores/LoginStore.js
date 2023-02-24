import { writable } from "svelte/store";
import { connectDB, loginUser, registerUser } from "../backend/loginAPI";


function createLoginStore(){

    const { subscribe, set, update } = writable([]);



    return {
        subscribe,
        set,
        update,


        connectDB: async()=>{

            let data =  await connectDB()
            set(data);
        },

        loginUser: (userInfo)=>{
    
            loginUser(userInfo).then((r)=>{console.log(r, "store")});
        },

        registerUser: (userInfo)=>{

            registerUser(userInfo)
        }



    }
}


export const LoginStore = createLoginStore();
