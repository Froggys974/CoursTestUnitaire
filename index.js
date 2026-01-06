import { Calculatrice } from "./calculatrice/Calculatrice.js";
import { CalculatriceTest } from "./calculatrice/CalculatriceTest.js";

const calculatrice = new Calculatrice();
const calculatriceTest = new CalculatriceTest(calculatrice);

calculatriceTest.runTest();