// 모바일 메뉴: 화면이 좁을 때 상단 메뉴 대신 햄버거 버튼을 보여주고,
// 누르면 about · projects와 프로젝트 하위 카테고리가 담긴 패널을 연다.
(function () {
  var header = document.querySelector(".top, .about-top");
  if (!header) return;

  var inProjects = location.pathname.indexOf("/projects/") !== -1;
  var p = inProjects ? "" : "projects/";
  var home = inProjects ? "../index.html" : "index.html";
  var here = location.pathname.split("/").pop() || "index.html";

  var cats = [
    ["all.html", "ALL"],
    ["app.html", "web•app"],
    ["branding.html", "branding"],
    ["digital-contents.html", "digital contents"],
    ["motion.html", "motion graphic"],
    ["editorial.html", "editorial design"]
  ];
  var onAbout = here === "index.html" && !inProjects;

  var sub = cats.map(function (c) {
    var active = inProjects && here === c[0] ? ' class="is-active"' : "";
    return '<li><a href="' + p + c[0] + '"' + active + ">" + c[1] + "</a></li>";
  }).join("");

  var btn = document.createElement("button");
  btn.type = "button";
  btn.className = "nav-toggle";
  btn.setAttribute("aria-label", "메뉴 열기");
  btn.setAttribute("aria-expanded", "false");
  btn.innerHTML = "<span></span><span></span><span></span>";
  header.appendChild(btn);

  var panel = document.createElement("nav");
  panel.className = "nav-panel";
  panel.setAttribute("aria-label", "모바일 메뉴");
  panel.innerHTML =
    '<a href="' + home + '" class="nav-main' + (onAbout ? " is-active" : "") + '">about</a>' +
    '<a href="' + p + 'all.html" class="nav-main' + (inProjects ? " is-active" : "") + '">projects</a>' +
    '<ul class="nav-sub">' + sub + "</ul>";
  document.body.appendChild(panel);

  function set(open) {
    document.documentElement.classList.toggle("nav-open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
  }
  btn.addEventListener("click", function () {
    set(!document.documentElement.classList.contains("nav-open"));
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") set(false);
  });
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) set(false);
  });
})();
