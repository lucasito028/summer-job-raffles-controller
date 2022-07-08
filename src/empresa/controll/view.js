$(document).ready(function(){
    $('#table-empresa').on('click', 'button.btn-view',function(e){
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
                    $('#NOME').attr('readonly', true)
    
                    $('#LOGIN').val(dados.dados.LOGIN)
                    $('#LOGIN').attr('readonly', true)
    
                    $('#SENHA').val(dados.dados.SENHA)
                    $('#SENHA').attr('readonly', true)

                })
                

                $('.btn-save').hide()
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