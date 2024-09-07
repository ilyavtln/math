document.addEventListener('DOMContentLoaded', function() {
  const levelSelect = document.getElementById('level');
  
  levelSelect.addEventListener('change', function() {
    const level = this.value;
    
    // Скрываем все элементы
    document.querySelectorAll('.only-easy, .up-easy, .only-normal, .up-normal, .only-hard').forEach(function(el) {
      el.style.display = 'none';
    });
    
    // Отображаем элементы в зависимости от выбранного уровня
    if (level === 'easy') {
      document.querySelectorAll('.only-easy, .up-easy').forEach(function(el) {
        el.style.display = '';
      });
    } else if (level === 'normal') {
      document.querySelectorAll('.only-normal, .up-easy, .up-normal').forEach(function(el) {
        el.style.display = '';
      });
    } else if (level === 'hard') {
      document.querySelectorAll('.only-hard, .up-easy, .up-normal').forEach(function(el) {
        el.style.display = '';
      });
    }
  });
  
  // Инициализируем отображение для начального уровня
  levelSelect.dispatchEvent(new Event('change'));
});
