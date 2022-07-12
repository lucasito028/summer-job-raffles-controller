$(document).ready(function(){

    $('.btn-save').click(function(e){
        e.preventDefault()

        let dados = $('#form-produto').serialize()

        dados += `&operacao=${$('.btn-save').attr('data-operation')}`


        $.ajax({
            type: 'POST',
            dataType:'json',
            assync: true,
            url: 'src/produto/model/save.php',
            data: dados,
            success:function(dados){
                Swal.fire({
                    title: "E-commanda",
                    text: dados.message,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })

                $('#modal-produto').modal('hide')
                $('#table-produto').DataTable().ajax.reload()
            }
        })
    })
    
})