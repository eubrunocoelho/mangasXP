const
    $ = document.querySelector.bind(document);

const
    windowOverlay = $('.window-overlay'),
    sideNavigation = $('.side-navigation'),
    openSideNavigationBtn = $('#openSideNavigation'),
    closeSideNavigationBtn = $('#closeSideNavigation');

openSideNavigationBtn.addEventListener('click', () => {
    openSideNavigation();

    closeSideNavigationBtn.addEventListener('click', () => closeSideNavigation());

    window.addEventListener('click', (e) => {
        if (e.target == windowOverlay) closeSideNavigation();
    });
});

let openSideNavigation = () => {
    windowOverlay.style.display = 'block';

    setTimeout(() => sideNavigation.style.left = '0', 200);
};

let closeSideNavigation = () => {
    sideNavigation.style.left = '-290px';

    setTimeout(() => windowOverlay.style.display = 'none', 200);
};

