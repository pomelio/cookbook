$(document).on('my-account', (event, account) => {
    

    const component_id = '#comment-input';

    function renderInput() {
        let html = `
<div class="flex-col flex p-4 my-6 mx-4 bg-white rounded-lg shadow md:justify-between md:p-6 xl:p-8 dark:bg-gray-800">

    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
    <textarea id="comment-message" rows="4" class="block mb-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
    <button type="button" class="send-end px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>

</div>
`;
        return html;
    }


    if (account) {
        let html = renderInput();
        $(component_id).replaceWith(html);
    }

});