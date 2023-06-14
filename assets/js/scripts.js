/**
 * =================================================================================
 * SIDE NAVIGATION
 * =================================================================================
 */

const
    windowOverlay = document.querySelector('.window-overlay'),
    sideNavigation = document.querySelector('.side-navigation'),
    openSideNavigationBtn = document.querySelector('#openSideNavigation'),
    closeSideNavigationBtn = document.querySelector('#closeSideNavigation');

if (windowOverlay && sideNavigation && openSideNavigationBtn && closeSideNavigationBtn) {
    openSideNavigationBtn.addEventListener('click', () => {
        openSideNavigation();

        closeSideNavigationBtn.addEventListener('click', () => closeSideNavigation());

        window.addEventListener('click', (e) => {
            if (e.target == windowOverlay) closeSideNavigation();
        });
    });
}

let openSideNavigation = () => {
    windowOverlay.style.display = 'block';

    setTimeout(() => sideNavigation.style.left = '0', 200);
};

let closeSideNavigation = () => {
    sideNavigation.style.left = '-290px';

    setTimeout(() => windowOverlay.style.display = 'none', 200);
};

/**
 * =================================================================================
 * ASIDE GENRES (SHOW MORE)
 * =================================================================================
 */

const
    genresItems = document.querySelectorAll('.aside-genres__list-item'),
    showMoreGenresBtn = document.querySelector('#showMoreGenres');

if (genresItems && showMoreGenresBtn) {
    let displayItems = 6;

    for (let i = 0; i < displayItems; i++) {
        genresItems[i].style.display = 'block';
    }

    showMoreGenresBtn.addEventListener('click', () => {
        for (let i = 0; i < genresItems.length; i++) {
            if (genresItems[i].style.display != 'block') genresItems[i].style.display = 'block';
        }

        let count = 0;

        for (let i = 0; i < genresItems.length; i++) {
            if (genresItems[i].style.display != 'none') count++;
        }

        if (count == genresItems.length) showMoreGenresBtn.style.display = 'none';
    });
}