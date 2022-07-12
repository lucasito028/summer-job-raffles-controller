$(document).ready(function(){
    $('#table-cliente').on('click', 'button.btn-view',function(e){
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
            url:'src/cliente/model/view.php',
            success:function(dados){
                if(dados.tipo == 'success'){
                $('.modal-body').load('src/cliente/view/form-cliente.html', function (){

                    $('#NOME').val(dados.dados.NOMECLIENTE)
                    $('#NOME').attr('readonly', true)
    
                    $('#TELEFONE').val(dados.dados.TELEFONE)
                    $('#TELEFONE').attr('readonly', true)


                })
                

                $('.btn-save').hide()
                $('#modal-cliente').modal('show')
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