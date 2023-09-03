$(document).ready(
    function(){

        const component_id = '#login-panel';

        var myAccount = localStorage.getItem('my-account');

        
        if (myAccount) {
            window.location.href="/";
            return;
        }

        const params = toParams(popup.location.search.replace(/^\?/, ''));

        let redirect = params['redirect'];
        if (!redirect) {
            redirect = "/";
        }
        
        html = renderLoginPanel();
        $(component_id).replaceWith(html);

        $("#google-auth").click((e) => {
            e.preventDefault();
            authGoogle();
        });

        $("#logout").click((e) => {
            e.preventDefault();
            logout();
        });

        function renderLoginPanel() {
            var html = `
    <div  class="flex items-center ml-3">
        <button id="google-auth" type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
            <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
            <path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
            </svg>
            Sign in with Google
        </button>
               
        </div>
    </div>
`;
            return html;
        }
        

        function authGoogle() {
            
            axios({
                method: 'get',
                url: '/auth/google',
            }).then(result => {
                var popup = popup_auth_window('google-auth', result.data.url, { height: 1000, width: 600 });
                popup.then(authResult => {
                    let data = {
                        code: authResult.code
                    };
                    axios({
                        method: 'post',
                        url: '/auth/google/callback',
                        data
                    }).then(resp => {
                        let account = resp.data;
                        $(document).trigger('my-account', [account]);
                        let accountStr = JSON.stringify(account);
                        localStorage.setItem('my-account', accountStr);
                        let url = window.location.protocol + "://" + window.location.hostname + redirect;
                        window.location.href = url;
                    });

                });
                popup.catch(err => {
                    console.log(err);
                })
            });
        }

        function toParams(query) {
            const q = query.replace(/^\??\//, '');
          
            return q.split('&').reduce((values, param) => {
              const [key, value] = param.split('=');
          
              values[key] = decodeURIComponent(value);
          
              return values;
            }, {});
        }
    }
);