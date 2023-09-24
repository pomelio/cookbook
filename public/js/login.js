$(document).ready(
    function(){

        const component_id = '#login-panel';

        var myAccount = localStorage.getItem('my-account');

        var redirect = window.location.protocol + "//" + window.location.hostname;
        if (myAccount) {
            window.location.href= redirect;
            return;
        }

        const params = toParams(window.location.search.replace(/^\?/, ''));

        let nredirect = params['redirect'];
        if (nredirect) {
            redirect = nredirect;
        }
        
        html = renderLoginPanel();
        $(component_id).replaceWith(html);

        $("#google-auth").click((e) => {
            e.preventDefault();

            localStorage.setItem('redirect', redirect);
            authGoogle();
        });

        $("#github-auth").click((e) => {
            e.preventDefault();

            localStorage.setItem('redirect', redirect);
            authGithub();
        });


        function renderLoginPanel() {
            var githubEnabled = project.login.includes('github') ? '' : 'hidden';
            var googleEnabled = project.login.includes('google') ? '' : 'hidden';

            var html = `
    <div  class="flex items-center ml-3">
        <button id="github-auth" type="button" class="${githubEnabled} text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"/></svg>
            Sign in with Github
        </button>
        <button id="google-auth" type="button" class="${googleEnabled} text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
                url: '/auth/google'
            }).then(result => {
                window.location.href = result.data.url;
            });
        }

        function authGithub() {
            axios({
                method: 'get',
                url: '/auth/github'
            }).then(result => {
                window.location.href = result.data.url;
            });
        }
    }
);

function toParams(query) {
    const q = query.replace(/^\??\//, '');
  
    return q.split('&').reduce((values, param) => {
      const [key, value] = param.split('=');
  
      values[key] = decodeURIComponent(value);
  
      return values;
    }, {});
}