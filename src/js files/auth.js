function signup(e){
    e.preventDefault()
    const email=documnet.querySelector('#signupEmail')
    const password=document.querySelector('#signupPassword')

    try{
        const result = firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
        M.toast({html:`welcome ${result.user.email}`,classes:"red"})
        console.log(result)
    }catch(err){
        console.log(err)
        M.toast({html:err.message,classes:"red"})

    }
}