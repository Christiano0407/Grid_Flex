var elem = document.querySelector('.grid-container');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 230,
  gutter: 20,
  isFitWidth:true
});