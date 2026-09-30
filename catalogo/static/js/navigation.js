// Mantener el estado del menú sincronizado con la navegación y el viewport.
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.mobile-nav');
    if (!toggle || !menu) return;

    const setOpen = (open, restoreFocus = false) => {
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
        menu.hidden = !open;
        document.body.classList.toggle('menu-open', open);
        if (restoreFocus) toggle.focus();
    };

    toggle.addEventListener('click', () => {
        setOpen(toggle.getAttribute('aria-expanded') !== 'true');
    });
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => setOpen(false));
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && !menu.hidden) setOpen(false, true);
    });
    document.addEventListener('click', event => {
        if (!menu.hidden && !event.target.closest('.site-header')) setOpen(false);
    });
    const desktop = window.matchMedia('(min-width: 901px)');
    desktop.addEventListener('change', event => {
        if (event.matches) setOpen(false);
    });
});
