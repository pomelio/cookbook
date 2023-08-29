$(document).ready(
    function(){

        const component_id = '#user-panel';

        var myAccount = localStorage.getItem('my-account');

        var html = `
    <div id="login-panel" class="flex items-center ml-3">
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
                <li id="githubAuth">
                <a href="#"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"><div class="flex items-center ml-1">
                    <svg class="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
</svg>Github
                    </div></a>
                </li>
                
            </ul>
        </div>
    </div>
        
`;
        if (myAccount) {
            html = renderUserPanel(myAccount);
        }
        
        $(component_id).replaceWith(html);

        initDropdowns();

        $("#googleAuth").click((e) => {
            e.preventDefault();
            authGoogle();
        });
        
        var options = {};
        if (myAccount) {
            options.account = myAccount;
        }
        var event = new CustomEvent('MyAccount', options);
        document.dispatchEvent(event);


        

        function renderUserPanel(myAccount) {
            myAccount = JSON.parse(myAccount);
            var html = `
        <div id="user-panel" class="flex items-center ml-3">
            <div>
                <button id="dropdownButton" type="button" data-dropdown-toggle="dropdownMenu"
                    class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                    id="user-menu-button-2" aria-expanded="false">
                    <span class="sr-only">Open user menu</span>
                    <img class="w-8 h-8 rounded-full"
                        src="${myAccount.photo}" alt="user photo">
                </button>
            </div>

            <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                id="dropdownMenu">
                <div class="px-4 py-3" role="none">
                    <p class="text-sm text-gray-900 dark:text-white" role="none">
                        ${myAccount.nickName}
                    </p>
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                        ${myAccount.email}
                    </p>
                </div>
                <ul class="py-1" role="none">
                    <li>
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
                    axios({
                        method: 'get',
                        url: '/auth/google/callback',
                    }).then(account => {
                        localStorage.setItemItem('my-account', JSON.stringify(account));
                        let html = renderUserPanel(account);
                        $(component_id).replaceWith(html);

                        initDropdowns();
                        var options = {};
                        if (myAccount) {
                            options.account = myAccount;
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

    }
);