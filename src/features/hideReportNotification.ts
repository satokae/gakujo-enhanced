export function hideReportNotification(): void {
  const paginateControl = document.getElementById('dataTable01_paginate');
  const dataTableInfoElement = document.getElementById('dataTable01_info');

  if (paginateControl instanceof HTMLElement && dataTableInfoElement instanceof HTMLElement) {
    const observer = new MutationObserver(() => removeNotifications(dataTableInfoElement));
    observer.observe(paginateControl, { childList: true, subtree: true });
    removeNotifications(dataTableInfoElement);
  }
}

function removeNotifications(infoElement: HTMLElement) {
  const rows = Array.from(document.getElementsByTagName('tr'));
  const filteredRows = rows
    .filter((tr) => tr.style.backgroundColor !== 'rgb(218, 238, 243)')
    .filter((tr) => tr.children[1]?.textContent === 'レポート登録通知');
  filteredRows.forEach((tr) => (tr.style.display = 'none'));
  infoElement.textContent += `（${filteredRows.length}件除外）`;
}
