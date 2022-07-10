$(document).ready(function(){

    $.ajax({
        type: 'POST',
        dataType: 'json',
        assync: true,
        url: 'src/empresa/model/validate.php',
        success:function(dados){
            if(dados.tipo == 'success'){
                Swal.fire({
                    title: 'Sistema',
                    text: dados.message,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })
            }else if(dados.tipo == 'error'){
                $(location).attr('href', 'login.html')
            }

        }
    })
}
)