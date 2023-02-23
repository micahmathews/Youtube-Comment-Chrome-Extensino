function hideComments() {
  const comments = document.querySelectorAll('#comments');
  if (comments.length > 0) {
    comments[0].style.display = 'none';
  }
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'toggleComments') {
    const enabled = request.enabled;
    if (enabled) {
      hideComments();
    } else {
      const comments = document.querySelectorAll('#comments');
      if (comments.length > 0) {
        comments[0].style.display = '';
      }
    }
    sendResponse();
  }
});

chrome.storage.local.get('enabled', function(data) {
  if (data.enabled) {
    hideComments();
  }
});


