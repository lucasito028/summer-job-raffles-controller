$(document).ready(function() {

    $('.btn-save').click(function(e){
        e.preventDefault()

        let dados = $('#form-produto').serialize()

        dados += `&operacao=${$('.btn-save').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/produto/model/save-produto.php',
            success: function(dados){
                Swal.fire({
                    title: 'e-Comanda',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })
                $('#modal-produto').modal('hide')
                $('#table-produto').DataTable().ajax.reload()
            }
        })
    })

})