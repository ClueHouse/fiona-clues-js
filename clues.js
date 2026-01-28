(function(){
  const MAP = {
    "/16": { accept: ["europe"], next: "/17" },
    "/17": { accept: ["4","four"], next: "/18" }
  };

  const cfg = MAP[location.pathname];
  if (!cfg) return;

  const norm = s => (s||"").trim().toLowerCase().replace(/\s+/g," ");

  document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("clueForm");
    const input = document.getElementById("answer");
const nope = document.getElementById("feedbackBad");
    if (!form || !input || !nope) return;

    form.addEventListener("submit", e=>{
      e.preventDefault();
      if (cfg.accept.includes(norm(input.value))) {
        location.href = cfg.next;
      } else {
        nope.classList.add("is-on");
        input.select();
      }
    });

    input.addEventListener("input", ()=>nope.classList.remove("is-on"));
  });
})();
