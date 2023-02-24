

export async function loginUser(userInfo){
   
    let userData;

    let fetchParams = {
        method : "POST",
        mode: "cors",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            userInfo: userInfo
        })
    }

    await fetch("http://localhost:3000/login", fetchParams)

    //add ERROR CHECKING HERE CHECK IF RES.STATUS == 200
    .then((res)=> res.json())
    .then((user)=>{ userData = user});
   
    
    return userData;

}


export async function registerUser(userInfo){
    console.log(userInfo);

    let fetchParams = {
        method : "POST",
        mode: "cors",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            userInfo: userInfo
        })
    }

    await fetch("http://localhost:3000/register", fetchParams)


}










export async function connectDB(){

    let allData;

    let fetchParams = {
        method : "POST",
        mode: "cors",
        headers: {'Content-Type': 'application/json'}
    }

    await fetch("http://localhost:3000/connectDB", fetchParams)
    .then((res)=> res.json())
    .then((data)=>{allData = data});

    return allData

}