$(document).ready(function(){
    $('.logout').click(function(e){
        e.preventDefault()
    $.ajax({
        type: 'POST',
        url: 'src/empresa/model/logout.php',
        dataType: 'json',
        assync: true,
        success:function(dados){
            if(dados.tipo == 'success'){
                $(location).attr('href', 'login.html')
            }else{
                Swal.fire({
                    title: 'sistema',
                    text: dados.message,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })
            }
        }
    })
    })
})