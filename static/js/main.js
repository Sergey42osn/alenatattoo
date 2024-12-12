(function (window) {

    var MAIN = {

        tg: null,
        select_time: null,
        select_service: null,

        page_serche_event: function(){

            MAIN.select_time.addEventListener("click", function(e){
                e.preventDefault();
                console.log(this)
            });

            MAIN.select_service.addEventListener("click", function(e){
                e.preventDefault();
                console.log(this)
            });

            console.log(MAIN);

        },

        init_obj: function(window){

            MAIN.tg = window.Telegram.WebApp;

            MAIN.select_time = document.getElementById('select_time');
            MAIN.select_service = document.getElementById('select_service');

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