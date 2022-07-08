$(document).ready(function(){
    $('#table-empresa').on('click', 'button.btn-edit',function(e){
        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Ben vindo ao vizualizar pessoas ai')

        let id = `ID=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: id,
            url:'src/empresa/model/view.php',
            success:function(dados){
                if(dados.tipo == 'success'){
                $('.modal-body').load('src/empresa/view/form-empresa.html', function (){

                    $('#NOME').val(dados.dados.NOME)
    
                    $('#LOGIN').val(dados.dados.LOGIN)

                    $('#SENHA').val(dados.dados.SENHA)

                    $('#ID').val(dados.dados.ID)


                })
                

                $('.btn-save').show()
                $('.btn-save').removeAttr('data-operation')
                $('#modal-empresa').modal('show')
            }else{
                Swal.fire({
                    title: 'Sistema',
                    text: dados.message,
                    icon:dados.tipo,
                    confirmButtonText: 'OK'
                })
            }
            }
        })
    })
})