
// variable to store the number of likes
var likes = 0;


// On click of like button
$('#likeBtn').click(function(){
    likes++;
    $('#like').html(" Liked!");
    // if first like
    if(likes === 1){
        $('#no-of-likes').text(likes + " person likes this!");
    }
    // for more than 1 likes
    else {
        $('#no-of-likes').text(likes + " people have liked this!");
    }  
});



// on click of comment button
$('#commentBtn').click(function(){
    // checks if there is any input in the comment textarea
    if($('#comment-textarea').val() !== ""){

        var comment = $('#comment-textarea').val();
        var template = '<div class="comment">' + comment + '</div>';
        var previous = document.getElementById("comments-container").innerHTML;
        document.getElementById("comments-container").innerHTML = template + previous;

        $('#comment-textarea').val("");
    }
});



// on click of edit / save button
$('#editBtn').click(function(){
    if($('#edit-toggle').html()==="Edit "){
        // To change the edit button to save button
        $('#editBtn').html('<span id="edit-toggle">Save </span><i class="fa fa-save"></i>');

        // To make the text editable in blogBody - Content
        $('#blogBody').attr('contentEditable', 'true');
        $('#blogBody').addClass('editable');
        $('#blogBody').trigger('focus');
        // To set cursor at the end
        document.execCommand('selectAll', false, null);
        document.getSelection().collapseToEnd();

        // To make the text editable in blogTitle - Title
        $('#blogTitleNew').attr('contentEditable', 'true');
        $('#blogTitleNew').addClass('editable');
    }
    else{
        // To change the save button back to edit button
        $('#editBtn').html('<span id="edit-toggle">Edit </span><i class="fa fa-edit"></i>');

        // To go back to original position - Content
        $('#blogBody').attr('contentEditable', 'false');
        $('#blogBody').removeClass('editable');

        // To go back to original position - Content
        $('#blogTitleNew').attr('contentEditable', 'false');
        $('#blogTitleNew').removeClass('editable');
    }
});