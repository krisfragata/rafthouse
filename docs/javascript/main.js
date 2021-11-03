$(document).ready(()=>{
    const input = document.querySelector('#pass');
    const pass = "rafthouseparty";

    $('.enter').click(()=>{
        passwordCheck();
    })

    function passwordCheck(){
        if(input.value == pass ){
            console.log('correct password')
        }
        else{
            console.log('password is incorrect');
        }
    }
})