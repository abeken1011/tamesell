// ヘッダーコンポーネント
function createHeader(options = {}) {
  const {
    showBackButton = false,
    backButtonText = "トップページに戻る",
    backButtonUrl = "index.html",
    showNavigation = false,
    sticky = false,
  } = options;

  const stickyClass = sticky ? "sticky top-0 z-50" : "";

  return `
    <header class="bg-white shadow-sm border-b ${stickyClass}">
      <div class="max-w-6xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <i class="fas fa-rocket text-white text-sm"></i>
            </div>
            <h1 class="text-xl font-bold text-gray-900">
              <a href="index.html" class="hover:text-primary-600 transition-colors">タメセル</a>
            </h1>
          </div>
          <div class="flex items-center space-x-4">
            ${
              showNavigation
                ? `
              <nav class="hidden md:flex space-x-6">
                <a href="index.html#features" class="text-gray-600 hover:text-primary-600 text-sm">特徴</a>
                <a href="index.html#how-it-works" class="text-gray-600 hover:text-primary-600 text-sm">使い方</a>
                <a href="index.html#pricing" class="text-gray-600 hover:text-primary-600 text-sm">料金</a>
              </nav>
            `
                : ""
            }
            ${
              showBackButton
                ? `
              <a href="${backButtonUrl}" class="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                <i class="fas fa-arrow-left mr-1"></i>${backButtonText}
              </a>
            `
                : `
              <a href="contact-form.html" class="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                事前登録
              </a>
            `
            }
          </div>
        </div>
      </div>
    </header>
  `;
}

// ヘッダーを挿入する関数
function insertHeader(options = {}) {
  const headerHTML = createHeader(options);
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
}

// DOMContentLoadedイベントでヘッダーを自動挿入
document.addEventListener("DOMContentLoaded", function () {
  // data-header属性がある場合は、その設定を使用
  const headerElement = document.querySelector("[data-header]");
  if (headerElement) {
    const options = JSON.parse(headerElement.getAttribute("data-header") || "{}");
    insertHeader(options);
  }
});
