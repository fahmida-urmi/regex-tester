testRegexButton.addEventListener('click', function() {
  const regexPattern = regexInput.value;
  const testText = textInput.value;

  try {
    // Create RegExp object with 'gi' flags (global + case-insensitive)
    const regex = new RegExp(regexPattern, 'gi');
    const matches = testText.match(regex);

    // Clear previous results
    testResults.textContent = '';
    highlightedText.innerHTML = '';

    if (matches) {
      testResults.textContent = `${matches.length} matches found!`;

      // Highlight matches in text
      let highlighted = testText.replace(regex, match => `<span class="bg-yellow-300">${match}</span>`);
      highlightedText.innerHTML = highlighted;
    } else {
      testResults.textContent = 'No matches found';
      highlightedText.innerHTML = testText;
    }
  } catch (error) {
    testResults.textContent = 'Invalid Regex Pattern';
    highlightedText.innerHTML = 'Please enter a valid regex pattern to test.';
  }
});
