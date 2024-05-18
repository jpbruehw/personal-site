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
  const emailP = $("#email-copy");
  emailP.on("click", () => {
    copyResult("jpbruehwiler@icloud.com");
    emailP.addClass("email-link-clicked");
  });
});
