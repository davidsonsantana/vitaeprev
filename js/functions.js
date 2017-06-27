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


  // Check ao editar situacao do cliente
  $('form .wrap-situacao select.situacao').bind('change', function (e) { 
      if( $('.form-group select.situacao').val() == 'atrasado') {
        $('form .wrap-situacao .data').show();
      } else{
        $('form .wrap-situacao .data').hide();
      }
              
    }).trigger('change');



  
});