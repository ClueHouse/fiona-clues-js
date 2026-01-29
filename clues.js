(function () {
  "use strict";

  const norm = s => (s || "").trim().toLowerCase().replace(/\s+/g, " ");

  function show(id){
    document.querySelectorAll("[data-screen]").forEach(el => {
      el.hidden = el.id !== id;
    });
    window.scrollTo(0,0);
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Start state
    show("welcome");

    // Start button
    document.querySelector("[data-start]")
      .addEventListener("click", () => show("clue16"));

    // Clue forms
    document.querySelectorAll("[data-clue-form]").forEach(form => {
      const input  = form.querySelector("input");
      const button = form.querySelector("button");
      const nope   = form.querySelector("[data-nope]");

      const answers = (form.dataset.answers || "").split("|").map(norm);
      const next    = form.dataset.next;

      if (button) button.disabled = true;
      if (input) input.addEventListener("input", () => button.disabled = false);

      form.addEventListener("submit", e => {
        e.preventDefault();

        if (answers.includes(norm(input.value))) {
          show(next);
        } else if (nope) {
          nope.classList.remove("is-on");
          void nope.offsetWidth;
          nope.classList.add("is-on");
          input.select();
        }
      });
    });
  });
})();
