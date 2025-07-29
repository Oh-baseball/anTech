import { dummyMenuItems } from '../features/products/StoreMenuBox';

export function addToCart(productId: number | null) {
  if (productId === null) return;
  const cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
  const idx = cart.findIndex((item) => item.id === productId);
  if (idx !== -1) {
    cart[idx].count += 1;
  } else {
    cart.push({ id: productId, count: 1 });
  }
  localStorage.setItem('cartItems', JSON.stringify(cart));
}

export function getCartDetails() {
  const cart = JSON.parse(localStorage.getItem('cartItems') || '[]');
  return cart
    .map((cartItem) => {
      const product = dummyMenuItems.find((p) => p.id === cartItem.id);
      return product ? { ...product, count: cartItem.count } : null;
    })
    .filter(Boolean);
}

export function flyToCartAnimation(imgEl: HTMLImageElement, cartEl: HTMLElement) {
  const imgRect = imgEl.getBoundingClientRect();
  const cartRect = cartEl.getBoundingClientRect();

  const clone = imgEl.cloneNode(true) as HTMLImageElement;
  clone.style.position = 'fixed';
  clone.style.left = `${imgRect.left}px`;
  clone.style.top = `${imgRect.top}px`;
  clone.style.width = `${imgRect.width}px`;
  clone.style.height = `${imgRect.height}px`;
  clone.style.transition = 'all 0.8s cubic-bezier(.4,2,.6,1)';
  clone.style.zIndex = '9999';
  document.body.appendChild(clone);

  requestAnimationFrame(() => {
    clone.style.left = `${cartRect.left + cartRect.width / 2 - imgRect.width / 4}px`;
    clone.style.top = `${cartRect.top + cartRect.height / 2 - imgRect.height / 4}px`;
    clone.style.width = `${imgRect.width / 2}px`;
    clone.style.height = `${imgRect.height / 2}px`;
    clone.style.opacity = '0.5';
  });

  clone.addEventListener('transitionend', () => {
    clone.remove();
  });
}
