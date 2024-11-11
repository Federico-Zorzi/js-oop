class Veicolo {
  marca;
  anno;
  colore;

  constructor(marca, anno, colore) {
    this.marca = marca;
    this.anno = anno;
    this.colore = colore;
  }
}

const Veicolo1 = new Veicolo("Opel", 2020, "nera");
const Veicolo2 = new Veicolo("Fiat", 2010, "blu");

console.log(Veicolo1);
console.log(Veicolo2);
