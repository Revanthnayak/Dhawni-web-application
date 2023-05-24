const myModel = document.querySelectorAll('.modal')



async function signup(e){
    e.preventDefault()
    const email  = document.querySelector('#signupEmail')
    const password  = document.querySelector('#signupPassword')
    
    try{
      const result = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
      await result.user.updateProfile({
        displayName: "User"
      })
      createUserCollection(result.user)
      // await result.user.sendEmailVerification()
      M.toast({html:`welcome ${result.user.email}`,classes:"green"})
     console.log(result)  
    }catch(err){
        console.log(err)
        M.toast({html: err.message,classes:"red"})
    }
    email.value = ""
    password.value = ""
    M.Modal.getInstance(myModel[0]).close()
    
}
async function login(e){
    e.preventDefault()
    const email  = document.querySelector('#loginEmail')
    const password  = document.querySelector('#loginPassword')
    
    try{
      const result = await firebase.auth().signInWithEmailAndPassword(email.value, password.value)
      M.toast({html:`welcome ${result.user.email}`,classes:"green"})
     console.log(result)  
    }catch(err){
        console.log(err)
        M.toast({html: err.message,classes:"red"})
    }
    email.value = ""
    password.value = ""
    M.Modal.getInstance(myModel[1]).close()
}


function logout(){
    firebase.auth().signOut()
    
  
}







