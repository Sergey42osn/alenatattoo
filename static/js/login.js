console.log(window);

(function () {

    'use strict';

    var LOGIN = {

        form_login: null,
        response_mes: null,

        send_login_form: function () {

            LOGIN.form_login.classList.add('ajax');
            LOGIN.response_mes.innerHTML = '';

            const formData = new FormData(LOGIN.form_login);
            const dataJSON = JSON.stringify(Object.fromEntries(formData));            

            fetch( LOGIN.form_login.action, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: dataJSON
            })
                .then(function (response) {

                    console.log(response);

                    if (response.ok) {
                        response.json()
                            .then(function (res) {
                                console.log(res);

                                if(res.result){

                                }else{
                                    if(res.msg){
                                        let html = '<span class="ajax_box ajax_error">' + res.msg + '</span>';
                                        LOGIN.response_mes.innerHTML = html;
                                    }
                                }


                            });
                    }
                    else {
                        throw Error('Something went wrong');
                    }

                    LOGIN.form_login.classList.remove('ajax');
                })
                .catch(function (error) {
                    console.log(error);
                    LOGIN.form_login.classList.remove('ajax');
                });

        },

        search_page_event: function () {

            LOGIN.form_login.addEventListener("submit", function (e) {
                e.preventDefault();
                console.log(this);
                LOGIN.send_login_form();
            });

            console.log(LOGIN);

        },

        init_obj: function () {

            LOGIN.form_login = document.getElementById("form_login");
            LOGIN.response_mes = document.getElementById("response_mes");

            this.search_page_event();

        },

        init: function () {

            this.init_obj();

        }

    }

    LOGIN.init();

})();