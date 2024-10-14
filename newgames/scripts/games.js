var game = JSON.parse(localStorage.getItem('unlocked'));
if (game !== null && typeof game !== 'undefined') {
    console.log('ok!');
} else {
    console.log("myArray is null or undefined.");
    localStorage.setItem('unlocked', JSON.stringify([{name: 'finalearth2', label: 'Final Earth 2'}]))
    game = JSON.parse(localStorage.getItem('unlocked'));
}
for (let i = 0; i < game.length; i++) {
    console.log('starting to unlock games....')
    console.log(game[i].name, game[i].label)
    unlock(game[i].name, game[i].label);
}
function unlock(name, label){
    const game = JSON.parse(localStorage.getItem('unlocked'));
    const games = document.getElementById('games');
    const ele = document.createElement('div');
    const elep = document.createElement('p');
    ele.setAttribute('class', 'icon');
    ele.setAttribute('onclick', name + '()')
    console.log(name + ' onclick is = ' + name + '()')
    elep.setAttribute('class', 'iconp');
    elep.textContent = label;
    ele.appendChild(elep);
    games.appendchild(ele);
    game.push({name: name, label: label})
}
//game functions (keep seperate)
function finalearth2(){
    const app = document.getElementById("app");
    app.src = "games/the final earth/index.html";
    document.getElementById('sidebar').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    app.style.display = "block";
    document.getElementById('x').style.display = "block";
    close = 1;
}
function slope3(){
    const app = document.getElementById("app");
    app.src = "games/slope 3/index.html";
    document.getElementById('sidebar').style.display = 'none';
    document.getElementById('main').style.display = 'none';
    app.style.display = "block";
    document.getElementById('x').style.display = "block";
    close = 1;
}
function closea(){
    if (close == 1) {
        const parent = document.getElementById("parent");
        const app = document.getElementById("app");
        app.style.display = "none";
        document.getElementById('sidebar').style.display = 'block';
        document.getElementById('main').style.display = 'block';
        app.src = "";
    }
    if (close == 0){
        window.location.href = "https://rythehi.github.io";
    }
    close = 0;
}