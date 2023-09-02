$(document).ready(
    function(){

        const component_id = '#user-panel';

        var myAccount = localStorage.getItem('my-account');

        
        if (myAccount) {
            html = renderUserPanel(myAccount);
        } else {
            html = renderLoginPanel();
        }
        
        $(component_id).replaceWith(html);

        initDropdowns();

        $("#googleAuth").click((e) => {
            e.preventDefault();
            authGoogle();
        });

        $("#logout").click((e) => {
            e.preventDefault();
            logout();
        });
        
        var options = {};
        if (myAccount) {
            options.account = JSON.parse(myAccount);
        }
        var event = new CustomEvent('MyAccount', options);
        document.dispatchEvent(event);


        function renderLoginPanel() {
            var html = `
    <div id="user-panel" class="flex items-center ml-3">
        <div>
            <button type="button" data-dropdown-toggle="dropdownMenu"
                class="flex text-sm rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button-2" aria-expanded="false">
                <span class="sr-only">Open user menu</span>
                <svg class="w-6 h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
</svg>
            </button>
        </div>

        <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
            id="dropdownMenu">
            
            <ul class="py-1" role="none">
                <li id="googleAuth">
                    <a href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"><div class="flex items-center ml-1">
                        <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
<path fill-rule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clip-rule="evenodd"/>
</svg>Google
                    </div></a>
                </li>
                
                
            </ul>
        </div>
    </div>
        
`;
            return html;
        }
        

        function renderUserPanel(myAccount) {
            myAccount = JSON.parse(myAccount);
            let picture = myAccount.picture;
            let name = myAccount.name;
            
            let html = `
        <div id="user-panel" class="flex items-center ml-3">
            <div>
                <button id="dropdownButton" type="button" data-dropdown-toggle="dropdownMenu"
                    class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button-2" aria-expanded="false">
                    <span class="sr-only">Open user menu</span>
                    <img class="w-8 h-8 rounded-full"
                        src="${picture}" alt="user photo">
                </button>
            </div>

            <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                id="dropdownMenu">
                <div class="px-4 py-3" role="none">
                    <p class="text-sm text-gray-900 dark:text-white" role="none">
                        ${name}
                    </p>
                    
                </div>
                <ul class="py-1" role="none">
                    <li id="logout">
                        <a href="#"
                            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem">Sign out</a>
                    </li>
                </ul>
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
                        let accountStr = JSON.stringify(account);
                        localStorage.setItem('my-account', accountStr);
                        let html = renderUserPanel(accountStr);
                        $(component_id).replaceWith(html);

                        initDropdowns();

                        $("#googleAuth").click((e) => {
                            e.preventDefault();
                            authGoogle();
                        });
                
                        $("#logout").click((e) => {
                            e.preventDefault();
                            logout();
                        });

                        var options = {};
                        if (myAccount) {
                            options.account = account;
                        }
                        var event = new CustomEvent('MyAccount', options);
                        document.dispatchEvent(event);
                    });

                });
                popup.catch(err => {
                    console.log(err);
                })
            });
        }

        function logout() {

            localStorage.removeItem('my-account');
            let html = renderLoginPanel();
        
            $(component_id).replaceWith(html);

            initDropdowns();

            $("#googleAuth").click((e) => {
                e.preventDefault();
                authGoogle();
            });
    
            $("#logout").click((e) => {
                e.preventDefault();
                logout();
            });
        }

    }
);