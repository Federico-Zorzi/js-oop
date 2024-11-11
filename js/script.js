const date = new Date();
const currentYear = date.getFullYear();

class Veicolo {
  marca;
  anno;
  colore;

  constructor(marca, anno, colore) {
    this.marca = marca;
    this.anno = anno;
    this.colore = colore;
  }

  informazioni() {
    return `Questa automobile è una ${this.marca}, prodotta nell'anno ${this.anno}, ed è di colore ${this.colore}`;
  }

  calcolaEta() {
    return "Il veicolo ha " + (currentYear - this.anno) + " anni";
  }
}

const automobile = new Veicolo("Fiat", 2010, "blu");
console.log(automobile.informazioni());
console.log(automobile.calcolaEta());
