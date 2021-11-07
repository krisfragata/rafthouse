$(document).ready(()=>{

    // white dot follows cursor
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