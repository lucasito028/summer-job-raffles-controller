$(document).ready(function(){

    $('.btn-login').click(function(e){
        e.preventDefault()

        let dados = $('#form-login').serialize()

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data:dados,
            ulr: 'src/empresa/model/login.php',
            success:function(dados){
                if(dados.tipo == 'success'){
                    $(location).attr('href', 'controle.html')
                }else{
                    Swal.fire({
                        title:'Deu pau',
                        text: dados.message,
                        icon: dados.tipo,
                        confirmButtonText: 'OK'
                    })
                }
            }
        })
    })
})