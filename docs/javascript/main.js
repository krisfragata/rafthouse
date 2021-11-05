$(document).ready(()=>{
    const input = document.querySelector('#pass');
    const pass = "rafthouseparty";

    $('.enter').click(()=>{
        passwordCheck();
    })

    function passwordCheck(){
        if(input.value != pass ){
            return;
        }
        else{
            window.open('home.html');
        }
    }

    window.addEventListener('mousemove', (e)=>{
        let mouseX = e.pageX;
        let mouseY = e.pageY;
        // console.log(mouseX, mouseY);
        $('.dot').css({
            left: mouseX - 15,
            top: mouseY - 15,
            // top: mouseY - $('body').scrollTop(),
        })
        
    });

})