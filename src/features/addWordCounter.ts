const segmenter = new Intl.Segmenter('ja', { granularity: 'grapheme' });
const wordCountAttributeName = 'data-word-count';

export function addWordCounter(): void {
  const formAuxiliary = document.getElementsByClassName('c-form-auxiliary');
  for (const e of formAuxiliary) {
    const input = e.children.item(0);
    if (!(input instanceof HTMLInputElement) && !(input instanceof HTMLTextAreaElement)) {
      continue;
    }
    if (input instanceof HTMLInputElement && input.type !== 'text') {
      continue;
    }

    const updateWordCount = () => {
      let count = 0;
      const segments = segmenter.segment(input.value);
      for (const _ of segments) {
        count++;
      }

      if (count === 0) {
        e.removeAttribute(wordCountAttributeName);
      } else {
        e.setAttribute(wordCountAttributeName, String(count));
      }
    };

    input.addEventListener('input', updateWordCount);
    updateWordCount();
  }
}
