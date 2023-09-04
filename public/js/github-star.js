$(document).on('dark-mode', (event, darkMode) => {
    $('#github-star').attr("colorScheme", `no-preference: ${darkMode}; light: ${darkMode}; dark: ${darkMode};`);
});