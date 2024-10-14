function showgamechat(){
    const chat = document.getElementById('tlk2');
    const button = document.getElementById('expandtlk2');
    chat.style.display = 'block';
    button.style.backgroundColor = 'grey';
    button.setAttribute('onclick', 'hidegamechat()')
    button.innerHTML = '<<br><<br><<br><<br><<br><'
}
function hidegamechat(){
    const chat = document.getElementById('tlk2');
    const button = document.getElementById('expandtlk2');
    chat.style.display = 'none';
    button.style.backgroundColor = 'whitesmoke';
    button.setAttribute('onclick', 'showgamechat()')
    button.innerHTML = '><br>><br>><br>><br>><br>>'
}
function checkframe(){
    const frame = document.getElementById('app');
    if (frame.style.display == 'block'){
        document.getElementById('expandtlk2').style.display = 'block'
        //console.log('expand button if triggered')
    }else{
        //console.
        document.getElementById('expandtlk2').style.display = 'none'
    }
}
setInterval('checkframe()', 10)