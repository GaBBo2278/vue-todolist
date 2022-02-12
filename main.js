const app = new Vue(
    {
        el: "#root",
        data: {
            attivita: "",
            toDos: [
                {
                    attivita: 'Fare colazione',
                    fatto: false
                }, 
                {
                    attivita: 'Studiare',
                    fatto: false
                },
                {
                    attivita: 'Pranzare',
                    fatto: false
                }, 
                {
                    attivita: 'Esercitarsi',
                    fatto: false
                },
            ],
        },
        methods: {
            //Definisco la funzione ADD
            add() {
                //Controllo se il valore inserito è una stringa vuota
                if (this.attivita == "") {
                    //Se è cosi richiedo di inserire una attività
                    alert("Inserisci un'attività");
                } else {
                    //Nel caso la stringa inserita non è vuota creo una attivita con il nome inserito e con la proprietà FATTO inizializata con FALSE
                    this.toDos.push({
                        attivita: this.attivita,
                        fatto: false
                    });
                }
                //Resetto il campo di input a stringa vuota
                this.attivita = "";
            },
            //Definisco la funzione REMOVE
            remove(index) {
                //Uso la funzione SPLICE dove definico l'indice da rimuovere e quanti elementi dal indice rimuovere
                this.toDos.splice(index,1);
            },
            //Definisco la funzione CHANGESTATUS
            changeStatus(index) {
                //Al oggetto in posizione INDEX con la proprietà FATTO assegno lo stesso oggetto con valore diverso(!) 
                this.toDos[index].fatto = !this.toDos[index].fatto;    
            },


            
        }
    }
);