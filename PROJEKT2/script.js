const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('nav');
const hamburgerIcon = document.querySelector('.fa-solid');

const iconToWebsite = (tag, icon, iconClass1, iconClass2) => {
  if (icon.classList[1] === iconClass1) {
    icon.classList.add(iconClass2);
    icon.classList.remove(iconClass1);
    tag.style.display = 'block';
  } else {
    icon.classList.add(iconClass1);
    icon.classList.remove(iconClass2);
    tag.style.display = 'none';
  }
};

menuIcon.addEventListener('click', () => {
  iconToWebsite(menuList, hamburgerIcon, 'fa-bars', 'fa-xmark');
});
