fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('products');
    data.forEach(item => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="product-info">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <p class="price">${item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
        </div>`;
      container.appendChild(div);
    });
  })
  .catch(err => console.error('Error loading products:', err));