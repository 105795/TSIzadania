document.querySelectorAll('.favorite-icon').forEach(function(button) {
  button.addEventListener('click', function() {
    if (this.classList.contains('filled')) {
      this.classList.remove('filled');
      this.innerHTML = '&#9825;';
    } else {
      this.classList.add('filled');
      this.innerHTML = '&#10084;';
    }
  });
});