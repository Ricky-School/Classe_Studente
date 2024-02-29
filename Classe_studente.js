/*
Creare una classe studente che contenga le seguenti informazioni: nome, cognome, età e matricola.
Aggiungere un metodo che controlli se lo studente è maggiorenne.
Aggiungere anche un metodo che restituisca una stringa con tutti i valori degli attributi.
Istanziare due oggetti delle classe creata e verificare se gli studenti sono maggiorenni o minorenni e stampare i loro dati.
*/

class Studente{

    #nome
    #cognome
    #eta
    #matricola

    constructor(nome, cognome, eta, matricola){
        this.#nome = nome;
        this.#cognome = cognome;
        this.#eta = eta
        this.#matricola = matricola;
    }

    getNome(){
        return this.#nome
    }
    setNome(nome){
        this.#nome = nome
    }

    getCognome(){
        return this.#cognome
    }
    setCognome(cognome){
        this.#cognome = cognome
    }

    getEta(){
        return this.#eta
    }
    setEta(eta){
        this.#eta = eta
    }

    getMatricola(){
        return this.#matricola
    }
    setMatricola(matricola){
        this.#matricola = matricola
    }

    isMaggiorenne(){
        if (this.getEta() >= 18){
            return true;
        } else {
            return false;
        }
    }

    stampa(){
        return "Studente<br>" + this.getNome() + " " + this.getCognome() + "<br>" + this.getEta() + "<br>" + this.getMatricola() + "<br>" + (this.isMaggiorenne() == true ? "Maggiorenne" : "Minorenne");
    }
}

function istanza(){
    var nome = document.getElementById('nome').value.trim();
    var cognome = document.getElementById('cognome').value.trim();
    var eta = document.getElementById('eta').value.trim();
    var matricola = document.getElementById('matricola').value.trim();

    var studente = new Studente(nome, cognome, eta, matricola);

    document.getElementById('scuola').innerHTML += "<br>" + studente.stampa() + "<br>"
}

function reset(){
    document.getElementById('nome').value = "";
    document.getElementById('cognome').value = "";
    document.getElementById('eta').value = "";
    document.getElementById('matricola').value = "";

}