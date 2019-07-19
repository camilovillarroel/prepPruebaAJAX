$(document).on("turbolinks:load", function(){
$('#button').click(function(e){
    e.preventDefault(); // Evitamos el comportamiento del formulario
    var new_content = $('#comment_content').val();
    $.ajax({
    url: '/comments',
    beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
    type: 'POST',
    dataType: 'json',
    data: {comment: {content: new_content}}
    })
    .done(function(data) {
    $("#comments").prepend('<p>'+ data.content +'</p>');
    });
   });
   
   
   $('#search_search').keyup(function(){
       if ($(this).val().length > 2){
        $.ajax({
            url: '/comments',
            beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
            type: 'GET',
            dataType: 'script',
            data: {search: $(this).val()}
            })
       }
   })

})