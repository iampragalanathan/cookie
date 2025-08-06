const modol=document.getElementById("modal")
const closeBtn= document.getElementById("modal-close-btn")
const formBtn=document.getElementById("consent-form")
const modalBtn=document.getElementById("modal-text")


// modol.style.display="none"
function model(){

    modol.style.display="block"
}
setTimeout(model,1500)

closeBtn.addEventListener("click",function(){

    modol.style.display="none"
})

formBtn.addEventListener("submit",function(e){

    e.preventDefault()

    const consentFormData=new FormData(consent-form)
    const fullName=consentFormData.get("userName")

    modalBtn.innerHTML=`<div class="modal-inner-loading">
     <img src="images/loading.svg" class="loading"/>
     
     <p id="uploadText">Uploading your data to the dark web....</p>
    </div>`

   setTimeout(function(){
        document.getElementById("uploadText").textContent="Making the sale...."},1500)

    setTimeout(function(){
           document.getElementById("modal-inner").innerHTML=`<h2>Thank you <span class="modal-display-name"></span> sucker!</h2>
         <p>we just sold the rights to your eternal soul</p>
     <div class="idiot-gif">
	   <img src="/images/pirate.gif" alt="pirate laugh"/></div>`
        },3000)  
})




// const loginForm=document.getElementById("login-form")
// // console.log("form refreshed the js")

// loginForm.addEventListener("submit",function(e){

//     e.preventDefault()
//     // console.log(e)
//     // console.log(e.target)
//     // console.log(e.target.id)
//     const loginFormData=new FormData(loginForm)
//     console.log(loginFormData)

//     const name=loginFormData.get("astronautName")
//     const email=loginFormData.get("astronautEmail")
//     const password=loginFormData.get("astronautPassword")

//     console.log(name,email,password)
// })











































// // console.log(1)

// // // setTimeout(function(){
// // //     console.log(2)
// // // } ,3000)

// // function runner(){
// //     console.log(2)
// // }

// // setTimeout(runner,2000)
// // console.log(3)

// function first(){

//     console.log("first")
// }

// function third(){

//     console.log("third")
// }

// function second(){
//     console.log("second")
// }

// setTimeout(first,1500)
// setTimeout(second,3000)
// setTimeout(third,4500)
