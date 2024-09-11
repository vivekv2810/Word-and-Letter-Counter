function countWordsAndLetters() {
    const text = document.getElementById('textInput').value;

    // Count words
    const words = text.trim().split(/\s+/);
    const wordCount = words.filter(word => word.length > 0).length;

    // Count letters
    const letters = text.replace(/[^a-zA-Z]/g, '');
    const letterCount = letters.length;

    // Display counts
    document.getElementById('wordCount').textContent = wordCount;
    document.getElementById('letterCount').textContent = letterCount;
}