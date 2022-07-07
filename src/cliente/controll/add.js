$(document).ready(function(){
    $('.btn-new').click(function(e){

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adiciona algo ai')

        $('.modal-body').load('src/cliente/view/form-cliente.html')

        $('btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-cliente').modal('show')
        
    })
})