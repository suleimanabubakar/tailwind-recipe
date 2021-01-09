$('#burgers').click(function(){
    console.log('hello')
    if($('#menu').hasClass('hidden')){
        $('#menu').removeClass('hidden');
    }else{
        $('#menu').addClass('hidden');        
    }
})

