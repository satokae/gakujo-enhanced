import linkifyElement from 'linkify-element';

export function linkifyMessage(): void {
  if (document.title === '連絡詳細') {
    const th = document.getElementsByTagName('th');
    const contentHeader = Array.from(th).find((h) => h.textContent === '内容');
    const contentContainer = contentHeader?.parentElement;
    makeLinksClickable(contentContainer);
  } else if (document.title === 'シラバス詳細') {
    const h2 = document.getElementsByTagName('h2');
    const contentHeader = Array.from(h2).find((h) => h.textContent === '講義情報');
    const contentContainer = contentHeader?.parentElement?.parentElement?.parentElement;
    makeLinksClickable(contentContainer);
  }
}

function makeLinksClickable(element: any) {
  const linkifyOption: Parameters<typeof linkifyElement>[1] = {
    validate(value) {
      return !value.startsWith('fs.inf.in.shizuoka.ac.jp');
    },
  };

  if (element instanceof HTMLElement) {
    linkifyElement(element, linkifyOption);
  }
}
