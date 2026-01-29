(function () {
  "use strict";

  const norm = s => (s || "").trim().toLowerCase().replace(/\s+/g, " ");

  function show(id){
    document.querySelectorAll("[data-screen]").forEach(s => {
      s.hidden = s.id !== id;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    // start on welcome
    show("welcome");

    document.querySelectorAll("[data-start]").forEach(btn => {
      btn.addEventListener("click", () => show(btn.dataset.start));
    });

    document.querySelectorAll("[data-clue-form]").forEach(form => {
      const input  = form.querySelector("input");
      const button = form.querySelector("button");
      const nope   = form.querySelector("[data-nope]");

      const answers = (form.dataset.answers || "").split("|").map(norm);
      const next    = form.dataset.next;

      button.disabled = true;

      input.addEventListener("input", () => button.disabled = false);

      form.addEventListener("submit", e => {
        e.preventDefault();

        if (answers.includes(norm(input.value))) {
          show(next);
        } else {
          nope.classList.remove("is-on");
          void nope.offsetWidth;
          nope.classList.add("is-on");
          input.select();
        }
      });
    });
  });
})();
