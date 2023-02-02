const { createApp } = Vue;

createApp ({

    data() {
        
        return {
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
            emails: [],
            //BONUS (creo una variabile con valore false)
            loadingComplete: false
        };
    },

    methods: {
        //funzione per generare email dall'api
        generaEmails() {
            //aggiungo il ciclo for per stampare in console 10 volte le email
            for (let i = 0; i < 10; i++) {
            axios
                .get(this.apiUrl)
                .then((response) => {
                    console.log(i)
                    console.log(response)
                    console.log(response.data)

                    //poi pusho le emails generate nell'array vuoto (creato in return)
                    this.emails.push(response.data.response);

                    //BONUS (sfrutto loadingComplete con if per stabilire quando l'array è pieno o meno)
                    if (this.emails.length == 10) {
                        console.log('PIENO')
                        this.loadingComplete = true;
                    }
                    else {
                        console.log('NON PIENO')
                    }
                });
            }
        }
    },

    created() {
        console.log('created');
        this.generaEmails();
    }

}).mount('#app');
