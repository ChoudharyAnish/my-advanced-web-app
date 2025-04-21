Promise.all([
  fetch('/api/message').then(res => res.json()),
  fetch('/api/config').then(res => res.json())
]).then(([msgData, configData]) => {
  document.getElementById('msg').textContent = msgData.message + ' (at ' + msgData.timestamp + ')';
  document.getElementById('siteTitle').textContent = configData.siteTitle;
  document.getElementById('title').textContent = configData.siteTitle;
}).catch(err => {
  document.getElementById('msg').textContent = 'Error fetching data';
  console.error(err);
});
