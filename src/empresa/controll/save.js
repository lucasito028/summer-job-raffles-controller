$(document).ready(function(){

    $('.btn-save').click(function(e){
        e.preventDefault()

        var dados = $('#form-empresa').serialize()

        dados += `&operacao=${$('.btn-save').attr('data-operation')}`


        $.ajax({
            type: 'POST',
            dataType:'JSON',
            assync: true,
            url: '../model/save-empresa.php',
            data: dados,
            success:function(dados){
                Swal.fire({
                    title: "E-commanda",
                    text: dados.message,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })

                $('#modal-cliente').modal('hide')
            }
        })
    })
    
})