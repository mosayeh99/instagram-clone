function addPostHeart(e){
  e.classList.toggle('active');
  e.nextElementSibling.classList.toggle('active');
}
function removePostHeart(e){
  e.classList.toggle('active');
  e.previousElementSibling.classList.toggle('active');
}
