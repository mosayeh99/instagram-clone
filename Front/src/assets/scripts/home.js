function addPostHeart(e){
  e.classList.toggle('active');
  e.nextElementSibling.classList.toggle('active');
}
function removePostHeart(e){
  e.classList.toggle('active');
  e.previousElementSibling.classList.toggle('active');
}
function addCommentHeart(e){
  e.classList.toggle('active');
  e.nextElementSibling.classList.toggle('active');
}
function removeCommentHeart(e){
  e.classList.toggle('active');
  e.previousElementSibling.classList.toggle('active');
}
function ToggleCommentReplies(e){
  e.nextElementSibling.classList.toggle('active');
}
function ToggleDisplayPost(e){
  e.nextElementSibling.classList.toggle('active');
}

