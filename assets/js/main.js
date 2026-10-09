(function () {
  var ME = "Julian D. Santamaria";

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (k) {
        if (k === "text") node.textContent = attrs[k];
        else if (k === "html") node.innerHTML = attrs[k];
        else node.setAttribute(k, attrs[k]);
      });
    }
    (children || []).forEach(function (c) {
      if (c) node.appendChild(c);
    });
    return node;
  }

  function authors(list) {
    var p = el("p", { class: "pub-authors" });
    list.forEach(function (name, i) {
      if (i > 0) p.appendChild(document.createTextNode(", "));
      p.appendChild(name === ME ? el("strong", { text: name }) : document.createTextNode(name));
    });
    return p;
  }

  function toggle(label, panel) {
    var btn = el("button", { type: "button", "aria-expanded": "false", text: "[" + label + "]" });
    btn.addEventListener("click", function () {
      var open = panel.hidden;
      panel.hidden = !open;
      btn.setAttribute("aria-expanded", String(open));
    });
    return btn;
  }

  function pub(p, full) {
    var linkRow = el("div", { class: "pub-links" });
    var extras = [];
    var names = { paper: "paper", pdf: "pdf", code: "code", project: "project" };
    Object.keys(names).forEach(function (k) {
      if (p.links && p.links[k]) linkRow.appendChild(el("a", { href: p.links[k], text: "[" + names[k] + "]" }));
    });
    if (full && p.abstract) {
      var abs = el("div", { class: "pub-extra", hidden: "" }, [el("p", { text: p.abstract })]);
      linkRow.appendChild(toggle("abstract", abs));
      extras.push(abs);
    }
    if (p.bibtex) {
      var bib = el("div", { class: "pub-extra", hidden: "" }, [el("pre", { text: p.bibtex })]);
      linkRow.appendChild(toggle("bibtex", bib));
      extras.push(bib);
    }

    var body = el("div", { class: "pub-body" }, [
      el("h3", { class: "pub-title", text: p.title }),
      authors(p.authors),
      full ? el("p", { class: "pub-where" }, [el("em", { text: p.venueFull })]) : null,
      p.note ? el("p", { class: "pub-note", text: p.note }) : null,
      linkRow,
    ].concat(extras));

    var chip = el("span", { class: "chip" + (p.type === "journal" ? " journal" : ""), text: p.venue });
    return el("article", { class: "pub", id: p.id }, [el("div", { class: "pub-venue" }, [chip]), body]);
  }

  function renderPubs() {
    var data = window.PUBLICATIONS || [];

    document.querySelectorAll("[data-pubs='selected']").forEach(function (box) {
      data.filter(function (p) { return p.selected; }).forEach(function (p) {
        box.appendChild(pub(p, false));
      });
    });

    document.querySelectorAll("[data-pubs='all']").forEach(function (box) {
      var lastYear = null;
      var group = null;
      data.forEach(function (p) {
        if (p.year !== lastYear) {
          lastYear = p.year;
          box.appendChild(el("h2", { class: "year", text: String(p.year) }));
          group = el("div", { class: "pubs" });
          box.appendChild(group);
        }
        group.appendChild(pub(p, true));
      });
    });
  }

  function renderNews() {
    document.querySelectorAll("[data-news]").forEach(function (box) {
      var limit = parseInt(box.getAttribute("data-news"), 10) || 99;
      (window.NEWS || []).slice(0, limit).forEach(function (n) {
        var dot = el("span", { class: "dot", "aria-hidden": "true" });
        dot.style.setProperty("--dot", "var(--topic-" + (n.color || 3) + ")");
        box.appendChild(el("li", {}, [dot, el("time", { text: n.date }), el("span", { html: n.html })]));
      });
    });
  }

  function year() {
    document.querySelectorAll("[data-year]").forEach(function (n) {
      n.textContent = new Date().getFullYear();
    });
  }

  renderPubs();
  renderNews();
  year();
})();
