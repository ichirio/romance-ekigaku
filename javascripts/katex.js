// 注意: このファイルにバックスラッシュを直接書かないこと。
// ビルド経路によってエスケープが潰れるため、文字コードから組み立てる。
var BS = String.fromCharCode(92);

document$.subscribe(function () {
  renderMathInElement(document.body, {
    delimiters: [
      { left: BS + "[", right: BS + "]", display: true },
      { left: BS + "(", right: BS + ")", display: false }
    ],
    ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code", "option"],
    throwOnError: false
  });
});
