function deleteNote(noteId) {
  fetch(`/deletenotes/${noteId}`, {
    method: 'POST',
    body: JSON.stringify({noteId: noteId}),
  })
    .then((_res) => {
      window.location.href = '/';
    });
}