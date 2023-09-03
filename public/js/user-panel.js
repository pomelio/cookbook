$(document).ready(
    function(){

        const component_id = '#user-panel';

        var myAccount = localStorage.getItem('my-account');

        
        if (myAccount) {
            html = renderUserPanel(myAccount);
            let account = JSON.parse(myAccount);
            $(document).trigger('my-account', [account]);
        } else {
            html = renderLoginPanel();
            $(document).trigger('my-account', []);
        }
        
        $(component_id).replaceWith(html);

        initDropdowns();

        $("#logout").click((e) => {
            e.preventDefault();
            logout();
        });

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
                <li>
                    <a href="/login"
                        class="block px-4 py-2 text-sm text-gray-700 inline-flex hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem">
                        <svg class="w-[12px] h-[12px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 15">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3"/>
  </svg>Log In
                    </a>
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


        function logout() {

            localStorage.removeItem('my-account');
            let html = renderLoginPanel();
        
            $(component_id).replaceWith(html);

            initDropdowns();

            $(document).trigger('my-account', []);
    
            $("#logout").click((e) => {
                e.preventDefault();
                logout();
            });
        }

    }
);