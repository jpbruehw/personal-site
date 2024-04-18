/** functionality for the scrolling effect
 *  of the technology section
 */
$(document).ready(() => {
  // select scrollers
  const scrollers = $(".scroller");

  // function to perform animation
  const addAnimation = () => {
    scrollers.each(function () {
      $(this).attr("data-animated", true);
      // get the images
      const scrollerInner = $(".scroller__inner");
      const scrollerContent = scrollerInner.children().toArray();
      // returns js array so regular forEach
      scrollerContent.forEach(function (element) {
        const duplicatedItem = $(element).clone();
        duplicatedItem.attr("aria-hidden", true);
        scrollerInner.append(duplicatedItem);
      });
    });
  };

  // make check for media query if user has reduced motion on
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }
});
