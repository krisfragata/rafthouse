$(document).ready(()=>{
    const input = document.querySelector('#pass');
    const pass = "party";
    const enter = document.querySelector('.enter');

    $('.enter').click(()=>{
        passwordCheck();
    })

    function passwordCheck(){
        if(input.value != pass ){
            if($('.incorrect').hasClass('hidden')){
                $('.incorrect').removeClass('hidden');
               }
            return;
        }
        else{
            window.open('archive.html');
        }
    }

    // black dot follows cursor and essentially becomes cursor
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

    // when
    input.addEventListener('keyup', (e)=>{
        console.log('type')
        if(e.keyCode == 13){
            console.log('enter');
            enter.click();
            e.preventDefault();
        }
    })
   

})