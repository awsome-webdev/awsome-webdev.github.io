const pop = localStorage.getItem('gamespopupnews') || 0;
console.log(pop);
if (pop == 0) {
  console.log('if triggered')
  document.getElementById('popupdiv').style.display = "none";
  console.log('if called');
}
function closediv() {
    const div = document.getElementById('popupdiv');
    div.style.display = 'none';
    div.setAttribute('src', '')
    localStorage.setItem('gamespopupnews', 0);
    console.log('closed');
  }