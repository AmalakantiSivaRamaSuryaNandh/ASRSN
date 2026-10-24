/* Copy only the address explicitly chosen by the visitor. No tracking or mail sending. */
document.querySelectorAll('[data-copy-email]').forEach(button => {
  button.addEventListener('click', async () => {
    const address = button.dataset.copyEmail;
    const status = document.getElementById('contact-copy-status');
    try {
      await navigator.clipboard.writeText(address);
      status.textContent = 'Copied ' + address;
    } catch {
      status.textContent = 'Copy this address: ' + address;
    }
  });
});
