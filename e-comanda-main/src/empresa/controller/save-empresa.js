$(document).ready(function() {

    $('.btn-save').click(function(e){
        e.preventDefault()

        let dados = $('#form-empresa').serialize()

        dados += `&operacao=${$('.btn-save').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/empresa/model/save-empresa.php',
            success: function(dados){
                Swal.fire({
                    title: 'e-Comanda',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })
                $('#modal-empresa').modal('hide')
                $('#table-empresa').DataTable().ajax.reload()
            }
        })
    })

})