(function (window) {

    var MAIN = {

        tg: null,
        remove_record: null,

        page_serche_event: function(){

            MAIN.remove_record.addEventListener("click", function(e){
                e.preventDefault();
                console.log(this)
            });

            console.log(MAIN);

        },

        init_obj: function(window){

            MAIN.tg = window.Telegram.WebApp;

            MAIN.remove_record = document.getElementById('remove_record');

            this.page_serche_event();
                
        },

        init: function(window){

            this.init_obj(window);

        }

    }

    window.addEventListener('load', function() {

    console.log(window)
    });

    MAIN.init(window);

})(window);