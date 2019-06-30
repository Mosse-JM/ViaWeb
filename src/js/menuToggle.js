
$(document).ready(function(){
    $('#menuToggle input[type=checkbox]').prop('checked',false);
    $("#menuToggle").click(function(){
      $("#menu_visard").toggle(); 
    })
});

