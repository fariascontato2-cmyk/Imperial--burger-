
// MENU MOBILE
const menuToggle = document.getElementById('menuToggle');
const navigation = document.getElementById('navigation');

if (menuToggle && navigation) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');

    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Fechar menu' : 'Abrir menu'
    );

    menuToggle.textContent = isOpen ? '✕' : '☰';
  });

  // Fecha o menu ao selecionar uma seção
  navigation.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menu');
      menuToggle.textContent = '☰';
    });
  });
}

// FILTRO DO CARDÁPIO
const filterButtons = document.querySelectorAll('.filter-button');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedCategory = button.dataset.filter;

    // Atualiza o botão selecionado
    filterButtons.forEach(item => {
      item.classList.remove('active');
    });

    button.classList.add('active');

    // Exibe apenas os produtos da categoria escolhida
    productCards.forEach(card => {
      const category = card.dataset.category;

      const shouldShow =
        selectedCategory === 'todos' ||
        category === selectedCategory;

      card.hidden = !shouldShow;
    });
  });
});
