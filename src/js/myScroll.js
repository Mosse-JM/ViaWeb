
window.onscroll = function() {myFunction()};
    function myFunction() {
    if (document.documentElement.clientWidth > 970){
    if (document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
    document.getElementById("myImg").className = "blur";
    } else {
    document.getElementById("myImg").className = "";
    }
    } else{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 30) {
    document.getElementById("myImg").className = "blur";
    } else {
    document.getElementById("myImg").className = "";
    }
    }    
};
