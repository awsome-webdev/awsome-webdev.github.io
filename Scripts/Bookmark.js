const scrollableElement = document.getElementById('bookmarksdiv');
scrollableElement.addEventListener('wheel', function (event) {
  // Check if the user is scrolling vertically
  if (event.deltaY !== 0) {
    // Prevent the default vertical scrolling behavior
    event.preventDefault();

    // Calculate the amount of horizontal scrolling
    const scrollAmount = event.deltaY;

    // Scroll the element horizontally
    scrollableElement.scrollLeft += scrollAmount;
  }
});
function re(){
  localStorage.setItem('bookmarks', JSON.stringify([]))
}
function bookmark(id) {
  const bookmarkArr = JSON.parse(localStorage.getItem('bookmarks')) || [];
  const element = document.getElementById(id);
  const parent = document.getElementById('bookicon');
  const star = element.querySelector('.bookmark-icon');
  star.style.display = "none";
  const clonedElement = element.cloneNode(true);
  clonedElement.setAttribute('id', id + '2')
  const star2 = clonedElement.querySelector('.bookmark-icon');
  star2.style.display = "block";
  star2.setAttribute('onclick', 'event.stopPropagation(); unbookmark("' + id + '2")');
  clonedElement.setAttribute("class", "bookmarkicon");
  parent.appendChild(clonedElement);
  bookmarkArr.push(id);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarkArr));
}
function bookmark2(id) {
  const bookmarkArr = JSON.parse(localStorage.getItem('bookmarks')) || [];
  const element = document.getElementById(id);
  const parent = document.getElementById('bookicon');
  const star = element.querySelector('.bookmark-icon');
  star.style.display = "none";
  const clonedElement = element.cloneNode(true);
  clonedElement.setAttribute('id', id + '2')
  console.log(id + '2')
  const star2 = clonedElement.querySelector('.bookmark-icon');
  star2.style.display = "block";
  star2.setAttribute('onclick', 'event.stopPropagation(); unbookmark("' + id + '2", "' + id + '")');
  clonedElement.setAttribute("class", "bookmarkicon");
  parent.appendChild(clonedElement);
}
function unbookmark(id2, item){
  console.log(id2)
  const element = document.getElementById('bookicon');
  const element2 = document.getElementById(id2);
  element.removeChild(element2);
  const bookmarkArr = JSON.parse(localStorage.getItem('bookmarks')) || [];
  var index = bookmarkArr.indexOf(item);
  if (index !== -1) {
    bookmarkArr.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkArr))
}
}
window.onload = function () {
  const bookmarkArr = JSON.parse(localStorage.getItem('bookmarks')) || [];
  for (let i = 0; i < bookmarkArr.length; i++) {
    const currentItem = bookmarkArr[i];
    bookmark2(currentItem);
  }
};