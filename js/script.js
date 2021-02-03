new Vue({
  el : "#app",
  data : {
    contacts: [
    	{
    		name: 'Michele',
    		avatar: '_1',
    		visible: true,
    		messages: [
    			{
    				date: '10/01/2020 15:30:55',
    				text: 'Hai portato a spasso il cane?',
    				status: 'sent'
    			},
    			{
    				date: '10/01/2020 15:50:00',
    				text: 'Ricordati di dargli da mangiare',
    				status: 'sent'
    			},
    			{
    				date: '10/01/2020 16:15:22',
    				text: 'Tutto fatto!',
    				status: 'received'
    			}
    		],
    	},
    	{
    		name: 'Fabio',
    		avatar: '_2',
    		visible: true,
    		messages: [
    			{
    				date: '20/03/2020 16:30:00',
    				text: 'Ciao come stai?',
    				status: 'sent'
    			},
    			{
    				date: '20/03/2020 16:30:55',
    				text: 'Bene grazie! Stasera ci vediamo?',
    				status: 'received'
    			},
    			{
    				date: '20/03/2020 16:35:00',
    				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
    				status: 'sent'
    			}
    		],
    	},
    	{
    		name: 'Samuele',
    		avatar: '_3',
    		visible: true,
    		messages: [
    			{
    				date: '28/03/2020 10:10:40',
    				text: 'La Marianna va in campagna',
    				status: 'received'
    			},
    			{
    				date: '28/03/2020 10:20:10',
    				text: 'Sicuro di non aver sbagliato chat?',
    				status: 'sent'
    			},
    			{
    				date: '28/03/2020 16:15:22',
    				text: 'Ah scusa!',
    				status: 'received'
    			}
    		],
    	},
    	{
    		name: 'Luisa',
    		avatar: '_4',
    		visible: true,
    		messages: [
    			{
    				date: '10/01/2020 15:30:55',
    				text: 'Lo sai che ha aperto una nuova pizzeria?',
    				status: 'sent'
    			},
    			{
    				date: '10/01/2020 15:50:00',
    				text: 'Si, ma preferirei andare al cinema',
    				status: 'received'
    			},

    		],
    	},
      {
    		name: 'Mario',
    		avatar: '_1',
    		visible: true,
    		messages: [
    			{
    				date: '10/01/2020 15:30:55',
    				text: 'Ci facciamo un giretto?',
    				status: 'sent'
    			},
    			{
    				date: '10/01/2020 15:50:00',
    				text: 'Si dai, Duomo?',
    				status: 'received'
    			},
          {
    				date: '10/01/2020 15:51:55',
    				text: 'va bene ci troviamo in metro!',
    				status: 'sent'
    			},
          {
    				date: '10/01/2020 15:53:00',
    				text: 'perfetto, a dopo',
    				status: 'received'
    			},

    		],
    	}
    ],
    dynamicIndex : 0,
    typingText : '',
    search : ''
  },
  methods : {
    extractContact : function(newIndex) { //popola dinamicamente "dynamicIndex"
      return this.dynamicIndex = newIndex;
    },
    changeColorSelected : function(ind){
      if (this.dynamicIndex === ind){
        return classSelectedContact = 'selected-contact'
      }
    },
    currentDate : function(){ //funzione che genera la data corrente con day.js
      let data = dayjs().format('DD/MM/YYYY ' + 'HH:mm:ss')
      return data
    },
    contactLastAccess : function(index) { //ritorna l'ultima data dei msg dinamicamente e solo
      const msgArray = this.contacts[index].messages; //dei messaggi ricevuti
      const newArray =[]
      msgArray.forEach((item, i) => {
        if (item.status === 'received') {
          newArray.push(item.date)
        }
      });
      let length = newArray.length - 1;
      return newArray[length]
    },
    lastMsgPreview : function(i){
      const messages = this.contacts[i].messages;
      const msgLength = messages.length - 1;
      return messages[msgLength].text
    },
    onlyHours : function(iMsg, iArray){
      const messages = this.contacts[iArray].messages[iMsg];
      return messages.date.slice(11, -3)
    },
    sendMsg : function(newIndex, insertText){         //inserimento del messaggio dell'utente
      if (insertText !== "") {
        const msgArray = this.contacts[newIndex].messages;
        msgArray.push({
          text: insertText,
          date: this.currentDate(),
          status: 'sent'
        });
        let that= this;                            // set time out per la risposta
        if (insertText === "ciao") {
          setTimeout(function(){
            msgArray.push({
              text: 'ciao!',
              date: that.currentDate(),
              status: 'received'
            });
          }, 1000)
        }else if (insertText === "come stai?" || insertText === "come stai") {
          setTimeout(function(){
            msgArray.push({
              text: 'bene!',
              date: that.currentDate(),
              status: 'received'
            });
          }, 1000)
        }else {
          setTimeout(function(){
            msgArray.push({
              text: 'ok!',
              date: that.currentDate(),
              status: 'received'
            });
          }, 1000)
        }
        this.typingText = ''; //resetta typingText
      }
    },
    isSearch : function(toSearch, array){   //funzione per la ricerca del nome
      let typingName= toSearch.toLowerCase();
      array.forEach((item, i) => {
       let name = item.name.toLowerCase();
       if (name.startsWith(typingName)) {
         item.visible = true

       } else {
         item.visible = false
       }
      });
    }
  }
});


Vue.config.devtools = true;
