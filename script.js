(function () {
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('hamburger-open');
    const closeIcon = document.getElementById('hamburger-close');
    if (!btn || !menu) return;

    btn.addEventListener('click', function (e) {
        const isHidden = menu.classList.contains('hidden');
        if (isHidden) {
            menu.classList.remove('hidden');
            btn.setAttribute('aria-expanded', 'true');
            if (openIcon && closeIcon) { openIcon.classList.add('hidden'); closeIcon.classList.remove('hidden'); }
        } else {
            menu.classList.add('hidden');
            btn.setAttribute('aria-expanded', 'false');
            if (openIcon && closeIcon) { openIcon.classList.remove('hidden'); closeIcon.classList.add('hidden'); }
        }
    });

    // close when clicking outside
    document.addEventListener('click', function (e) {
        if (menu.classList.contains('hidden')) return;
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
            menu.classList.add('hidden');
            btn.setAttribute('aria-expanded', 'false');
            if (openIcon && closeIcon) { openIcon.classList.remove('hidden'); closeIcon.classList.add('hidden'); }
        }
    });
})();