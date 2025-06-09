/**
 * フッターコンポーネント
 * 事前登録フォームのフッターデザインをベースとした共通フッター
 */

document.addEventListener("DOMContentLoaded", function () {
  // フッター設定を取得
  const footerElement = document.querySelector("[data-footer]");
  if (!footerElement) return;

  const config = JSON.parse(footerElement.getAttribute("data-footer") || "{}");

  // デフォルト設定
  const defaultConfig = {
    showLinks: true,
    links: [
      { text: "トップページ", href: "index.html" },
      { text: "プライバシーポリシー", href: "#" },
      { text: "利用規約", href: "#" },
    ],
    showDescription: true,
    description: "新規事業アイデア検証プラットフォーム",
    copyrightYear: "2025",
    backgroundColor: "bg-gray-900",
    textColor: "text-white",
  };

  // 設定をマージ
  const finalConfig = { ...defaultConfig, ...config };

  // フッターHTMLを生成
  const footerHTML = `
    <footer class="${finalConfig.backgroundColor} ${finalConfig.textColor} py-8 mt-12">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center">
          <div class="flex items-center justify-center space-x-2 mb-4">
            <div class="w-6 h-6 bg-primary-500 rounded flex items-center justify-center">
              <i class="fas fa-rocket text-white text-xs"></i>
            </div>
            <h5 class="text-lg font-bold">タメセル</h5>
          </div>
          ${finalConfig.showDescription ? `<p class="text-gray-400 text-sm mb-4">${finalConfig.description}</p>` : ""}
          ${
            finalConfig.showLinks
              ? `
            <div class="flex justify-center space-x-6 text-sm text-gray-400">
              ${finalConfig.links
                .map(
                  (link) => `
                <a href="${link.href}" class="hover:text-white">${link.text}</a>
              `
                )
                .join("")}
            </div>
          `
              : ""
          }
        </div>
        <div class="border-t border-gray-800 mt-6 pt-6 text-center text-xs text-gray-400">
          <p>&copy; ${finalConfig.copyrightYear} タメセル. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;

  // フッターを挿入
  footerElement.outerHTML = footerHTML;
});
