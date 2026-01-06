export class CalculatriceTest {

    constructor(calculatrice) {
        this.calculatrice = calculatrice;
    }

    runTest(){
        this.testAddition();
        this.testSoustration();
        this.testMultiplication();
        this.testDivision();
        this.testDivisionParZero();
        this.testAvg();
    }

    testAddition(){
        const addition = this.calculatrice.add(10,15);
        console.assert(addition === (10+15), `Test d'addition échoué le resultat doit etre ${10+15}. Return : ${addition}`);
        console.log('---------------test addition fini---------------');
    }

    testSoustration(){
        const soustraction = this.calculatrice.sub(10,15);
        console.assert(soustraction === (10-15), `Test de soustraction échoué le resultat doit etre ${10-15}. Return : ${soustraction}`);
        console.log('---------------test soustraction fini---------------');
    }

    testMultiplication(){
        const multiplication = this.calculatrice.mul(10,15);
        console.assert(multiplication === (10*15), `Test de multiplication échoué le resultat doit etre ${10*15}. Return : ${multiplication}`);
        console.log('---------------test multiplication fini---------------');
    }

    testDivision(){
        const division = this.calculatrice.div(10,15);
        console.assert(division === (10/15), `Test de division échoué le resultat doit etre ${10/15}. Return : ${division}`);
        console.log('---------------test division fini---------------');
    }
    testDivisionParZero(){
        const division = this.calculatrice.div(10,0);
        console.assert(division === "Division par zéro n'est pas autorisée.", `Test de division échoué le resultat doit etre null. Return : ${division}`);
        console.log('---------------test division par zero fini---------------');
    }

    testAvg(){
        const average = this.calculatrice.avg([10,15,18,16,17]);
        console.assert(average === (15.2), `Test de moyenne échoué le resultat doit etre 15.2. Return : ${average}`);
        console.log('---------------test average fini---------------');
    }

}