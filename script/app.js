document.querySelector('.tariffs-buisnes').addEventListener('click', function() {
    document.getElementById('modal').classList.add('active');
  });
  
  document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').classList.remove('active');
  });