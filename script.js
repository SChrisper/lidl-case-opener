//funktio jonka avulla ohjelman voi laittaa tauolle (Aatos)
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


// funktio joka suorittaa monta funktiota (Aatos)
function otherfunc() {
    reset_animation()
    anim()
    randomizer()
    audio()
    ButtonCooldown()
}


// hakee animaation (Aatos)
async function anim() {
    document.getElementById("hand").className= "animation";
}


// aloittaa animaation alusta (Aatos)
function reset_animation() {
    var el = document.getElementById('hand');
    document.getElementById("hand").src="images/grab.jpg";
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null; 
}


// pelaa äänen kun animaatio pelataan (Aatos)
function audio() {
    var audio = document.getElementById('sound-unbox');
    audio.play();
}


// laittaa napille ajan jolloin sitä ei voi painaa (Christopher)
function ButtonCooldown() {
    const button = document.getElementById('start-button');

    button.disabled = true;
    button.classList.add('cooldown');
    button.textContent = "14s";

    let seconds = 14;
    const interval = setInterval(() => {
        seconds--;
        button.textContent = `${seconds}s`;

        if (seconds === 0) {
            clearInterval(interval);
            button.disabled = false;
            button.classList.remove('cooldown');
            button.textContent = ('Unlock Kassi')

        }
    }, 1000);
}


// arpoo mikä esine saadaan (Aatos)
async function randomizer () {
    const rand = () => Math.floor(Math.random() * 10000);

    const randomnumber = rand();
    await sleep(5000);
    if (randomnumber < 7992) {
        const ranblue = Math.floor(Math.random() * 3);
        switch (ranblue) {
            case 0:
                document.getElementById("hand").src="images/muovikassi.jpg";
                console.log("Blue_1");
                break;
            case 1:
                document.getElementById("hand").src="images/halpa_sukaalevy.jpg";
                console.log("Blue_2");
                break;
            case 2:
                document.getElementById("hand").src="images/vehnasampyla.jpg";
                console.log("Blue_3");
                break;
            default:
                throw new Error("Unexpected case");
        }
    } else if (randomnumber < 9590) {
        const ranpurple = Math.floor(Math.random() * 3);
        switch (ranpurple) {
            case 0:
                document.getElementById("hand").src="images/valkosipulipatonki.jpg";
                console.log("Purple_1");
                break;
            case 1:
                document.getElementById("hand").src="images/juusto_pekonisampyla.jpg";
                console.log("Purple_2");
                break;
            case 2:
                document.getElementById("hand").src="images/kinkku_juustocroissant.jpg";
                console.log("Purple_3");
                break;
            default:
                throw new Error("Unexpected case");
        }
    } else if (randomnumber < 9910) {
        const ranpink = Math.floor(Math.random() * 2);
        switch (ranpink) {
            case 0:
                document.getElementById("hand").src="images/siti_jaffa.jpg";
                console.log("Pink_1");
                break;
            case 1:
                document.getElementById("hand").src="images/siti_cola.jpg";
                console.log("Pink_2");
                break;
            default:
                throw new Error("Unexpected case");
        }
    } else if (randomnumber < 9974) {
        document.getElementById("hand").src="images/kong_strong.jpg";
        console.log("Red");

    } else if (randomnumber < 9999) {
        document.getElementById("hand").src="images/Lidl_Jordans.jpg";
        console.log("Gold");
    }
}
