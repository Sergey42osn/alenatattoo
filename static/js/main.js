(function (w) {

    var MAIN = {

        tg: null,

        page_serche_event: function(){

            console.log(MAIN);

        },

        init_obj: function(){

            MAIN.tg = window.Telegram.WebApp;
                
        },

        init: function(){

            this.init_obj();

        }

    }

    window.addEventListener('load', function() {

        
    });

    MAIN.init();

})();