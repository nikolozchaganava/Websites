const menuBtn = document.getElementById('menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const menuIcon = document.getElementById('menu-icon');

      menuBtn.addEventListener('click', () => {p
        mobileMenu.classList.toggle('hidden');
        
        // ხატულას შეცვლა მენიუს გახსნა/დაკეტვისას (X და Hamburger)
        if (mobileMenu.classList.contains('hidden')) {
          menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        } else {
          menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        }
      });

      // ლინკზე დაჭერისას მენიუს ავტომატური დაკეტვა
      const mobileLinks = mobileMenu.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    });
});