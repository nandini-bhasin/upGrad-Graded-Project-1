
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


