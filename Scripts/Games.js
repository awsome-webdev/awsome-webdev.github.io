function toydefense(){
    const nparent = document.getElementById("nparent");
    const parent = document.getElementById("parent");
    const app = document.getElementById("app");
    app.src = "games/ubggames/toy-defense-unblocked.html";
    app.style.display = "block";
    parent.style.display = "none";
    document.getElementById('sidebar').style.display = "none";
    document.getElementById('x').style.display = "block";
    close = 1;
}
function awesometanks(){
    const nparent = document.getElementById("nparent");
    const parent = document.getElementById("parent");
    const app = document.getElementById("app");
    app.src = "https://ubg98.github.io/AwesomeTanks2/";
    app.style.display = "block";
    parent.style.display = "none";
    document.getElementById('sidebar').style.display = "none";
    document.getElementById('x').style.display = "block";
    close = 1;
}
function mc18(){
    const nparent = document.getElementById("nparent");
    const parent = document.getElementById("parent");
    const app = document.getElementById("app");
    location.href = "games/mc18.html";
    app.style.display = "block";
    parent.style.display = "none";
    document.getElementById('sidebar').style.display = "none";
    document.getElementById('x').style.display = "block";
    close = 1;
}
function teritory(){
    const nparent = document.getElementById("nparent");
    const parent = document.getElementById("parent");
    const app = document.getElementById("app");
    app.src = 'https://fxclient.vercel.app/'
    app.style.display = "block";
    parent.style.display = "none";
    document.getElementById('sidebar').style.display = "none";
    document.getElementById('x').style.display = "block";
    close = 1;
}
function popp(){
    const nparent = document.getElementById("nparent");
    const parent = document.getElementById("parent");
    const app = document.getElementById("app");
    app.src = 'games/PapasPizzeria-gh-pages/index.html'
    app.style.display = "block";
    parent.style.display = "none";
    document.getElementById('sidebar').style.display = "none";
    document.getElementById('x').style.display = "block";
    close = 1;
}
function papasfreeze(){
    const nparent = document.getElementById("nparent");
    const parent = document.getElementById("parent");
    const app = document.getElementById("app");
    app.src = 'games/papasfreeze/index.html'
    app.style.display = "block";
    parent.style.display = "none";
    document.getElementById('sidebar').style.display = "none";
    document.getElementById('x').style.display = "block";
    close = 1;
}
function closea(){
    if (close == 1) {
        const parent = document.getElementById("parent");
        const app = document.getElementById("app");
        app.style.display = "none";
        app.setAttribute('src', '')
        parent.style.display = "block";
        document.getElementById('sidebar').style.display = 'block';
        document.getElementById('main').style.display = 'block';
        app.src = "";
    }
    if (close == 0){
        window.location.href = "https://rythehi.github.io";
    }
    close = 0;
}
function closea2(){
    if (close == 1) {
        const parent = document.getElementById("parent");
        const app = document.getElementById("app");
        app.style.display = "none";
        parent.style.display = "block";
        document.getElementById('sidebar').style.display = 'block';
        document.getElementById('main').style.display = 'block';
        app.src = "";
    }
    if (close == 0){
        window.location.href = "liteindex.html";
    }
    close = 0;
}