function login(){
    let primaryButton = document.getElementById("primaryButton");
    console.log(primaryButton)
    primaryButton.addEventListener("click",function loginButton(){
        console.log("button");
    });
}   

login();
