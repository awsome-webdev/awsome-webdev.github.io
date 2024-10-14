function lightmode(){
    // Get all elements with the initial class
  const elements = document.getElementsByClassName('icon');
  console.log((elements));
  // Iterate over the elements and change the class
  var num = 0;
  for (let i = 0; i < elements.length; i++) {
    const element = elements[num];
    element.setAttribute('class', 'iconlight');
    //element.classList.add('new-class');
    num++;
  } 
}