// functionality for copying text
$(document).ready(() => {
  // define function
  async function copyResult(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }

  // get elements we want to add events to
  const codeContent = $("#code-text").text();
  const codeButton = $("#code-copy");
  codeButton.on("click", () => {
    copyResult(codeContent);
    codeButton.text("Copied");
  });
});
