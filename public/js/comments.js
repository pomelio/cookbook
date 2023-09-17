$(document).on('my-account', (event, account) => {
    

   

    function render(comment_id) {
        let html = `
    <button data-dropdown-toggle="dropdownComment-${comment_id}"
        class="dropdownCommentButton inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        type="button">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
        </svg>
        <span class="sr-only">Comment settings</span>
    </button>
    <!-- Dropdown menu -->
    <div id="dropdownComment-${comment_id}"
        class="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownMenuIconHorizontalButton">
            <li>
                <a id="edit-${comment_id}" href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a id="remove-${comment_id}" href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
            </li>
           
        </ul>
    </div>
`;
        
        return html;
    }

    function remove(account, id) {
        let data = {
            id,
        }
        let headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': 'Bearer ' + account.token,
        };
        loading(true);
        axios({
            method: 'post',
            url: '/comment/remove',
            data,
            headers,
        }).then(result => {
            //addNewComment(creq);
            setTimeout(function(){
                loading(false);
                window.location.reload(true);
            }, 2000);
            
        }).catch(err => {
            loading(false);
        });
    }

    function retrive(account, id) {
        let data = {
        };

        let headers = {
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': 'Bearer ' + account.token,
        };
        
        axios({
            method: 'get',
            url: '/comment/' + id,
            data,
            headers,
        }).then(result => {
            //addNewComment(creq);
            $(document).trigger('edit-comment', [result.data]);
        });
    }


    if (account) {
        $(".comment-buttons").each(function(i, obj){
            let comment_id = $(this).data('commentId');
            let user_id = $(this).data('userId');
            if (user_id == account.id) {
                let html = render(comment_id);
                $(this).replaceWith(html);

                $("#edit-" + comment_id).click(e => {
                    //e.preventDefault();
                    retrive(account, comment_id);
                    $([document.documentElement, document.body]).animate({
                        scrollTop: $("#comment-input").offset().top
                    }, 1000);
                });

                $("#remove-" + comment_id).click(e => {
                    //e.preventDefault();
                    remove(account, comment_id);
                });

            }
            
        });
        
    }
    
});