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
    return `Questo veicolo è una ${this.marca}, prodotta nell'anno ${this.anno}, ed è di colore ${this.colore}`;
  }

  calcolaEta() {
    return "Il veicolo ha " + (currentYear - this.anno) + " anni";
  }
}

class Automobile extends Veicolo {
  numeroPorte;
  carburante;

  constructor(marca, anno, colore, numeroPorte, carburante) {
    super(marca, anno, colore);
    this.numeroPorte = numeroPorte;
    this.carburante = carburante;
  }
}

const veicolo = new Veicolo("Fiat", 2019, "blu");
console.log(`${veicolo.informazioni()}. ${veicolo.calcolaEta()}`);

const automobile = new Automobile("Opel", 2020, "nera", "4 porte", "benzina");
console.log(
  `${automobile.informazioni()}. ${automobile.calcolaEta()}. E' un'automobile con ${
    automobile.numeroPorte
  } e va a ${automobile.carburante}`
);
