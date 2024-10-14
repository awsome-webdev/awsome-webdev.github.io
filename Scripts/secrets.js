window.onload = function() {
    console.log('started');
    const tut = document.getElementById('tut');
    const p = document.getElementById('tutp');
    // don't un commment
    //tut.style.display = 'block';
    //d3fu4lt('Finaly i have been here waiting forever');
    var load = localStorage.getItem('secretload') || 0;
    console.log(load);
// condition load == 0
    if (load == 0) {
        console.log('if triggered');
        tut.style.display = 'block';
        localStorage.setItem('secretload', 1);
        localStorage.setItem('unlocked', JSON.stringify([{}]))
        d3fu4lt('Finally I have been here waiting forever (click to continue)');
        var defualt_num = 0;
        tut.addEventListener('click', function() {
            console.log('event triggered');
            if (defualt_num == 0){
                d3fu4lt("This is all the secret games and pages behind that other stuff");
                defualt_num = 1;
            }
            else if (defualt_num == 1){
                d3fu4lt("Oh! and my name is d3fu4lt im the hacker in CWA that hacked the CIA in 2016, i think it was 2016?");
                defualt_num = 2;
            }
            else if (defualt_num == 2){
                d3fu4lt("i'm here to tell you about all the games you can unlock and cool apps and show you around.");
                defualt_num = 3;
            }
            else if (defualt_num == 3){
                d3fu4lt("behind me is where you can find all the games you have found.");
                defualt_num = 4;
            }
            else if (defualt_num == 4){
                d3fu4lt("and to the <---- left thers is a bar for hints and to change to your apps list.");
                defualt_num = 5;
            }
            else if (defualt_num == 5){
                d3fu4lt("Their are lots of cool things to discover and lots of useful apps!");
                defualt_num = 6;
            }
            else if (defualt_num == 6){
                d3fu4lt("Here is your first game, Until next time!!!");
                defualt_num = 7;
            }
            else if (defualt_num == 7){
                d3fu4lt("Hey its the dev, i was planning on making like a secret world behing the scenes of the actuall website but...");
                defualt_num = 8;
            }
            else if (defualt_num == 8){
                d3fu4lt("I ran out of motivation and i have lots of other work to do, Thanks so much for choosing my website!!!! BYE!");
                defualt_num = 9;
            }
            else if (defualt_num == 9){
                tut.style.display = 'none'
                defualt_num = 6;
            }
        });
    }
}
function d3fu4lt(message) {
    const p = document.getElementById('tutp');
    let i = 0;
    document.getElementById('character').textContent = 'd3fu4lt:';

    function displayNextCharacter() {
        if (i < message.length) {
            p.textContent = message.slice(0, i + 1);
            i++;
            setTimeout(displayNextCharacter, 30); // Adjust the delay as needed (in milliseconds)
        }
    }

    displayNextCharacter();
}