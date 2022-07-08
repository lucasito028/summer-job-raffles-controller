$(document).ready(function(){

    $('.btn-save').click(function(e){
        e.preventDefault()

        let dados = $('#form-empresa').serialize()

        dados += `&operacao=${$('.btn-save').attr('data-operation')}`


        $.ajax({
            type: 'POST',
            dataType:'JSON',
            assync: true,
            url: 'src/empresa/model/save.php',
            data: dados,
            success:function(dados){
                Swal.fire({
                    title: "E-commanda",
                    text: dados.message,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })

                $('#modal-empresa').modal('hide')
                $('#table-empresa').DataTable().ajax.reload()
            }
        })
    })
    
})