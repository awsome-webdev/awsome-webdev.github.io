function exchat(){
    const button = document.getElementById('buttonexchat');
    const sidebuttons = document.getElementById('sidebarbuttons');
    const chat  = document.getElementById('tlk');
    chat.style.display = 'block';
    sidebuttons.style.display = "none";
    button.innerHTML = "Unexpand Chat";
    button.setAttribute('onclick', 'unchat()')
}
function unchat(){
    const button = document.getElementById('buttonexchat');
    const sidebuttons = document.getElementById('sidebarbuttons');
    const chat  = document.getElementById('tlk');
    chat.style.display = "none";
    sidebuttons.style.display = "block";
    button.innerHTML = "Expand Chat";
    button.setAttribute('onclick', 'exchat()')
}
function myLoop() {
    const search = document.getElementById('sbar').value;
    if (search == 'secret' || search == 'idk' || search == 'i dont know') {
        document.getElementById('sbar').value = '';
        window.location.href = '/newgames/secretshome.html';
    }
}

setInterval(myLoop, 100);
function search_triggers(){
    const search = document.getElementById('sbar').value;
    if (search == 'cool shit'){
        document.getElementById('sbar').value = '';
        unlock('slope3', 'Slope3; GREAT!')
        window.location.href = '/newgames/secretshome.html';
    }
}
setInterval(search_triggers, 100)