$(function(){



  $(".vendas button").click(function(){
  	$(".produtos").slideToggle('fast');
  });


  // Check ao inserir novo consultor
  $('.form-group select.funcao').bind('change', function (e) { 
    if( $('.form-group select.funcao').val() == 'consultor') {
      $('.show-gerente').show();
    } else{
    	$('.show-gerente, .gerente').hide();
    	$(".check-gerente").attr('checked', false);
    }
            
  }).trigger('change');


  $(".check-gerente").click(function() {
    if($(this).is(":checked")) {
        $(".gerente").show(300);
    } else {
        $(".gerente").hide(200);
    }
  });




  
});