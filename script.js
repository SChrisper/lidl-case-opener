
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

async function randomizer () {
    const rand = () => Math.floor(Math.random() * 10000);

    const randomnumber = rand();
    await sleep(4000);
    if (randomnumber < 5000) {
        const ranblue = Math.floor(Math.random() * 3);
        switch (ranblue) {
            case 0:
                console.log("bul1");
                break;
            case 1:
                console.log("bul2");
                break;
            case 2:
                console.log("bul3");
                break;
            default:
                throw new Error("Unexpected case");
        }
    } else if (randomnumber < 7000) {
        const ranpurple = Math.floor(Math.random() * 3);
        switch (ranpurple) {
            case 0:
                console.log("pupel1");
                break;
            case 1:
                console.log("pupel2");
                break;
            case 2:
                console.log("pupel3");
                break;
            default:
                throw new Error("Unexpected case");
        }
    } else if (randomnumber < 8000) {
        const ranpink = Math.floor(Math.random() * 2);
        switch (ranpink) {
            case 0:
                console.log("pik1");
                break;
            case 1:
                console.log("pik2");
                break;
            default:
                throw new Error("Unexpected case");
        }
    } else if (randomnumber < 9000) {
        console.log("red");
    } else if (randomnumber < 9900) {
        console.log("gold gold gold");
    }
}
