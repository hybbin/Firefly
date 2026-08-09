// Fancybox 懒加载入口
//
// 这里刻意不写 `import "....css"`：Astro 会把页面模块图里的所有 CSS
// 都提成渲染阻塞的 <link>，连动态 import 出来的 chunk 也一样，
// 于是 34 KiB 灯箱样式照旧压在首屏关键路径上。首页没有任何可点开的大图，纯浪费。
//
// 改成用 ?url 只拿产物地址，等真正需要灯箱时再手工插 <link>：
// 依然是独立缓存的样式表，不占 JS chunk 的解析成本。
import fancyboxCssUrl from "@fancyapps/ui/dist/fancybox/fancybox.css?url";
import customCssUrl from "@/styles/fancybox-custom.css?url";

const injected = new Set<string>();

function injectStylesheet(href: string): void {
	if (injected.has(href)) return;
	injected.add(href);
	// Swup 换页不会清 <head> 里手工插的节点，所以顺带按 href 查一次重
	if (document.querySelector(`link[rel="stylesheet"][href="${href}"]`)) return;
	const link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = href;
	document.head.appendChild(link);
}

/** 插入灯箱样式；幂等。顺序与原先的 import 顺序一致（自定义样式在后，可覆盖默认值） */
export function loadFancyboxStyles(): void {
	injectStylesheet(fancyboxCssUrl);
	injectStylesheet(customCssUrl);
}

export { Fancybox } from "@fancyapps/ui";
