// Get the chat room ID from the URL or generate a new one
const chatRoomId = getRoomIdFromUrl() || generateRoomId();
updateUrlWithRoomId(chatRoomId);

// Connect to the chat room
socket.emit('join room', chatRoomId);

// Update the shareable link
const roomLinkInput = document.getElementById('roomLink');
roomLinkInput.value = window.location.href;

// Function to copy link to clipboard
function copyLink() {
  roomLinkInput.select();
  document.execCommand('copy');
  alert('Link copied to clipboard!');
}

// Helper function to get the room ID from the URL
function getRoomIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('roomId');
}

// Helper function to generate a new room ID
function generateRoomId() {
  // Generate a unique ID here, e.g. using the `shortid` library
  return 'new-room-id';
}

// Helper function to update the URL with the room ID
function updateUrlWithRoomId(roomId) {
  const url = new URL(window.location.href);
  url.searchParams.set('roomId', roomId);
  window.history.replaceState(null, null, url.toString());
}