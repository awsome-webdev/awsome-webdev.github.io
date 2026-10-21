let pop = localStorage.getItem('gamespopupnews') || true;
main()
async function hash(text, algo = 'SHA-256') {
        const data = new TextEncoder().encode(text)
        const buf = await crypto.subtle.digest(algo, data)
        return [...new Uint8Array(buf)]
            .map(b => b.toString(16).padStart(2, '0'))
            .join('')
}
async function main(){
  const hash = await gethash()
  if (pop === true || pop == 1 || pop == 0 || pop != hash){
    showpopup()
  }
  else {
    hidepopup()
  }
}
function showpopup(){document.getElementById('popupdiv').style.display = "block"}
function hidepopup(){document.getElementById('popupdiv').style.display = "none"}
async function gethash(){
    const req = await fetch('/news.html')
    const text = await req.text()
    return hash(text)
}
async function closediv() {
    const div = document.getElementById('popupdiv');
    div.style.display = 'none';
    div.setAttribute('src', '')
    localStorage.setItem('gamespopupnews', await gethash());
}