const loginForm=document.getElementById("login-form")
console.log("form refreshed the js")

loginForm.addEventListener("submit",function(e){

    e.preventDefault()
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.id)
    const loginFormData=new FormData(loginForm)
    console.log(loginFormData)

    const name=loginFormData.get("astronautName")
    const email=loginFormData.get("astronautEmail")
    const password=loginFormData.get("astronautPassword")

    console.log(name,email,password)
})



