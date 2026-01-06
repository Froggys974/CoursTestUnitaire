export class Calculatrice {
    add(a, b) {
        return a + b;
    }
    sub(a, b) {
        return a - b;
    }
    mul(a, b) {
        return a * b;
    }
    div(a, b) {
        if (b === 0) {
            return "Division par zéro n'est pas autorisée.";
            // throw new Error("Division par zéro n'est pas autorisée.");
        }
        return a / b;
    }
    avg(tab){
        let somme = 0 ;
        tab.some((a) => {
            somme += a;
        });
        return somme / tab.length;
    }
}