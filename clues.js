(function () {

  const CLUES = {
    "/monaco-16": { accept:["europe"], next:"/vienna-17" },
    "/vienna-17": { accept:["4","four"], next:"/sydney-18" },
    "/sydney-18": { accept:[""], next:"/havana-19" },
    "/havana-19": { accept:[""], next:"/boston-20" },

    "/boston-20": { accept:[""], next:"/napoli-21" },
    "/napoli-21": { accept:[""], next:"/berlin-22" },
    "/berlin-22": { accept:[""], next:"/athens-23" },
    "/athens-23": { accept:[""], next:"/dublin-24" },

    "/dublin-24": { accept:[""], next:"/moscow-25" },
    "/moscow-25": { accept:[""], next:"/madrid-26" },
    "/madrid-26": { accept:[""], next:"/lisbon-27" },

    "/lisbon-27": { accept:[""], next:"/prague-28" },
    "/prague-28": { accept:[""], next:"/zurich-29" },
    "/zurich-29": { accept:[""], next:"/geneva-30" },

    "/geneva-30": { accept:[""], next:"/oxford-31" },
    "/oxford-31": { accept:[""], next:"/toledo-32" },
    "/toledo-32": { accept:[""], next:"/dallas-33" },

    "/dallas-33": { accept:[""], next:"/denver-34" },
    "/denver-34": { accept:[""], next:"/manila-35" },

    "/manila-35": { accept:[""], next:"/cannes-36" },
    "/cannes-36": { accept:[""], next:null }
  };

  const cfg = CLUES[location.pathname];
  if (!cfg) return;

  const norm = s =>
    (s || "").trim().toLowerCase().replace(/\s+/g, " ");

  document.addEventListener("DOMContentLoaded", () => {

    const form   = document.getElementById("clueForm");
    const input  = document.getElementById("answer");
    const nope   = document.getElementById("nopeBox");
    const button = form?.querySelector("button");

    if (!form || !input || !nope || !button) return;

    // HARD SAFETY: enable only once JS is live
    button.disabled = false;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const val = norm(input.value);

      if (cfg.accept.includes(val)) {
        if (cfg.next) {
          window.location.assign(cfg.next);
        }
        return;
      }

      nope.classList.add("is-on");
      input.focus();
      input.select();
    });

    input.addEventListener("input", () => {
      nope.classList.remove("is-on");
    });
  });

})();
