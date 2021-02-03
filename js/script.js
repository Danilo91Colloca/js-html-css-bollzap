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
    search : ''

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
    currentDate : function(){
      let actualDateHours = new Date();
      let d= actualDateHours.getDay();
      let m = actualDateHours.getMonth() + 1;
      let y = actualDateHours.getFullYear();
      let h = actualDateHours.getHours();
      let min = actualDateHours.getMinutes();
      let s = actualDateHours.getSeconds();
      return d +' / '+ m +' / ' + y + '  '+ h + ':' + m + ':' + s
    },
    sendMsg : function(newIndex){
      if (this.typingText !== "") {
        const msgArray = this.contacts[newIndex].messages;
        msgArray.push({
          text: this.typingText,
          date: this.currentDate(),
          status: 'sent'
        });
        // set time out per la risposta
        let that= this;
        if (this.typingText === "ciao") {
          setTimeout(function(){
            msgArray.push({
              text: 'ciao!',
              date: that.currentDate(),
              status: 'received'
            });
          }, 1000)
        }else if (this.typingText === "come stai?" || this.typingText === "come stai") {
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
        this.typingText = '';
      }
    },

    // isVisibleFalse : function() {
    //  const array = this.contacts
    //  array.filter((element)=> {
    //   return element.visible = false
    //
    //   element.name
    //   });
    // },
    isSearch : function(){
      let that= this;
      this.contacts.map((element) => {
        if (!element.name.startsWith(that.search)){
          element.visible === false
        }
      })

    }
  }
});


Vue.config.devtools = true;
