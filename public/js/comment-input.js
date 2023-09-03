$(document).on('my-account', (event, account) => {
    

    const component_id = '#comment-input';

    function renderInput() {
        let html = `
<div class="flex flex-col items-end p-4 my-6 mx-4 bg-white rounded-lg shadow md:justify-between md:p-6 xl:p-8 dark:bg-gray-800">

    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
    <textarea id="comment-message" rows="4" class="block mb-2 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
    <div class="basis-1/4">
        <button type="button" class="px-3 py-2 text-xs font-medium text-center text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">Save</button>
    </div>
</div>
`;
        return html;
    }


    if (account) {
        let html = renderInput();
        $(component_id).replaceWith(html);
    }

});