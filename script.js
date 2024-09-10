
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

function otherfunc() {
    reset_animation()
    anim()
    randomizer()
    audio()
}

async function anim() {
    document.getElementById("hand").className= "animation";
}

function reset_animation() {
    var el = document.getElementById('hand');
    document.getElementById("hand").src="images/grab.jpg";
    el.style.animation = 'none';
    el.offsetHeight; /* trigger reflow */
    el.style.animation = null; 
  }

function audio() {
    var audio = document.getElementById('sound-unbox');
    audio.play();
}

async function randomizer () {
    const rand = () => Math.floor(Math.random() * 10000);

    const randomnumber = rand();
    await sleep(5000);
    if (randomnumber < 5000) {
        const ranblue = Math.floor(Math.random() * 3);
        switch (ranblue) {
            case 0:
                document.getElementById("hand").src="images/muovikassi.jpg";
                console.log("bul1");
                break;
            case 1:
                document.getElementById("hand").src="images/halpa_sukaalevy.jpg";
                console.log("bul2");
                break;
            case 2:
                document.getElementById("hand").src="images/vehnasampyla.jpg";
                console.log("bul3");
                break;
            default:
                throw new Error("Unexpected case");
        }
    } else if (randomnumber < 7000) {
        const ranpurple = Math.floor(Math.random() * 3);
        switch (ranpurple) {
            case 0:
                document.getElementById("hand").src="images/valkosipulipatonki.jpg";
                console.log("pupel1");
                break;
            case 1:
                document.getElementById("hand").src="images/juusto_pekonisampyla.jpg";
                console.log("pupel2");
                break;
            case 2:
                document.getElementById("hand").src="images/kinkku_juustocroissant.jpg";
                console.log("pupel3");
                break;
            default:
                throw new Error("Unexpected case");
        }
    } else if (randomnumber < 8000) {
        const ranpink = Math.floor(Math.random() * 2);
        switch (ranpink) {
            case 0:
                document.getElementById("hand").src="images/siti_jaffa.jpg";
                console.log("pik1");
                break;
            case 1:
                document.getElementById("hand").src="images/siti_cola.jpg";
                console.log("pik2");
                break;
            default:
                throw new Error("Unexpected case");
        }
    } else if (randomnumber < 9000) {
        document.getElementById("hand").src="images/kong_strong.jpg";
        console.log("red");

    } else if (randomnumber < 9900) {
        document.getElementById("hand").src="images/Lidl_Jordans.jpg";
        console.log("gold gold gold");
    }
}
