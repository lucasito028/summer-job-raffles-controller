$(document).ready(function(){
    $('.btn-new').click(function(e){

        e.preventDefault()

        $('.modal-title').empty()
        $('.modal-body').empty()

        $('.modal-title').append('Adiciona algo ai')

        $('.modal-body').load('src/empresa/view/form-empresa.html')

        $('.btn-save').show()

        $('.btn-save').attr('data-operation', 'insert')

        $('#modal-empresa').modal('show')
        
    })
})