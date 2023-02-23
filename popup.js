const toggleCommentsCheckbox = document.getElementById('toggle-comments');

chrome.storage.local.get('enabled', function(data) {
  toggleCommentsCheckbox.checked = data.enabled;
});

toggleCommentsCheckbox.addEventListener('change', function() {
  const enabled = toggleCommentsCheckbox.checked;
  chrome.storage.local.set({'enabled': enabled});
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {action: 'toggleComments', enabled: enabled});
  });
});

