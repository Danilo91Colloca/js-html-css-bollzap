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
    			}
    		],
    	}
    ],
    dynamicIndex : 0,

    typingText : '',

  },
  methods : {
    extractContact : function(newIndex) { //popola dinamicamente "dynamicIndex"
      return this.dynamicIndex = newIndex;
    },
    contactLastAccess : function(index) { //ritorna l'ultima data dei msg dinamicamente
      const msgArray = this.contacts[index].messages;
      const msgArrayLength = msgArray.length - 1;
      const msgLastDate = msgArray[msgArrayLength].date
      return msgLastDate
    },

    sendMsg : function(newIndex){
      let actualDateHours = new Date();
      let d= actualDateHours.getDay();
      let m = actualDateHours.getMonth() + 1;
      let y = actualDateHours.getFullYear();
      let h = actualDateHours.getHours();
      let min = actualDateHours.getMinutes();
      let s = actualDateHours.getSeconds();

      if (this.typingText !== "") {
        const msgArray = this.contacts[newIndex].messages;
        msgArray.push({
          text: this.typingText,
          date: d +' / '+ m +' / ' + y + '  '+ h + ':' + m + ':' + s,
          status: 'sent'
        });
        this.typingText = '';
        // set time out per la risposta
        setTimeout(function(){
          msgArray.push({
            text: 'Ok',
            date: d +' / '+ m +' / ' + y + '  '+ h + ':' + m + ':' + s,
            status: 'received'
          });
        }, 2000)

      };
    }
  }

});


Vue.config.devtools = true;
