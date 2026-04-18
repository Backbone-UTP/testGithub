const prompt = require("prompt-sync")({ sigint: true });

while (true) {
    let a = 5;
    const numero = prompt("Introduce tu número y dire quien eres: ");
    if (numero == a) {
        console.log("ܫܠܡܐ ܥܠܡܐ.");
        return 0;
    }
    else {
        console.log("No eres quien dices ser.");
    }
}
