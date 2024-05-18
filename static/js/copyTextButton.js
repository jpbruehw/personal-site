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

  // copy functionality for code button
  const codeContent = $("#code-text").text();
  const codeButton = $("#code-copy");
  const timeOutFun = () =>
    setTimeout(() => {
      codeButton.text("Copy");
    }, 5000);
  codeButton.on("click", () => {
    copyResult(codeContent);
    codeButton.text("Copied");
    timeOutFun();
  });
});
