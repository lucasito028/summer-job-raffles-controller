$(document).ready(function(){
    
    $('.nav-link').click(function(e){
        e.preventDefaut()

        let url = $(this).attr('href')

        $('#content').empty()

        $('#content').load(url)
    })
})