window.addEventListener("scroll", progressAll);

function progressAll() {
  const triggerProgress = (window.innerHeight /2);
  const progressTop = document.getElementById("tech");

  const progressStart = progressTop.getBoundingClientRect().top;

  if (progressStart < triggerProgress) {
    // HTML

    const progress = document.getElementById("html2");
    progress.style.width = progress.getAttribute("data-done");
    progress.style.opacity = 1;

    //CSS

    const progressCss = document.getElementById("css2");
    progressCss.style.width = progressCss.getAttribute("data-done");
    progressCss.style.opacity = 1;

    //SASS

    const progressSass = document.getElementById("sass2");
    progressSass.style.width = progressSass.getAttribute("data-done");
    progressSass.style.opacity = 1;

    // BOOTSTRAP

    const progressBootstrap = document.getElementById("bs2");
    progressBootstrap.style.width = progressBootstrap.getAttribute("data-done");
    progressBootstrap.style.opacity = 1;

    // JAVASCRIPT

    const progressJavscript = document.getElementById("js2");
    progressJavscript.style.width = progressJavscript.getAttribute("data-done");
    progressJavscript.style.opacity = 1;

    // REACT

    const progressReact = document.getElementById("rjs2");
    progressReact.style.width = progressReact.getAttribute("data-done");
    progressReact.style.opacity = 1;
  }
}
  