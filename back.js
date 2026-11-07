// 상세페이지 뒤로가기 링크: ALL 목록에서 들어왔으면(?from=all) ALL로 돌아가게 바꾼다.
// 그 외에는 HTML에 적힌 원래 카테고리(예: BRANDING)로 돌아간다.
(function () {
  if (new URLSearchParams(location.search).get("from") !== "all") return;
  var back = document.querySelector("[data-back]");
  if (!back) return;
  back.href = "all.html";
  back.textContent = "← ALL";
})();
