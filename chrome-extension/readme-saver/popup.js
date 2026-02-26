document.getElementById('saveBtn').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0] || {};
    const url = tab.url || '';
    const title = tab.title || '';
    const readmeUrl = `https://readme-three-rho.vercel.app/?open=1&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;
    chrome.tabs.create({ url: readmeUrl, active: true });
  });
});
