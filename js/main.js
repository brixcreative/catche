const pathAssets = "https://rafaelavlucas.github.io/brixms/landing1/assets";

window.addEventListener("load", event => {
    // Anime Modules
    let delay = 1;
    observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                entry.target.classList.add('animeModules');
                //entry.target.style.transitionDelay = `${delay}` * 0.2 + "s";
                //delay++;
            }
        });
    });

    function animeModules() {
        document.querySelectorAll('section').forEach(el => observer.observe(el))
        document.querySelectorAll('footer').forEach(el => observer.observe(el))
        document.querySelectorAll('header').forEach(el => observer.observe(el))
    }

    animeModules();
});


/*********************************/
// Main Nav

function mainNav() {
    const mainNav = document.querySelector('.mainNav');
    const navLinks = [{
        name: "About",
        url: "#"
    }, {
        name: "Products",
        url: "#"
    }, {
        name: "Contacts",
        url: "#"
    }];

    let templateNav = `
        <div class="mainNav__logo">
        <img src="${pathAssets}/images/logo-white.svg" alt="Logo">
        </div>
        <div class="mainNav__icon"><span></span></div>
        <div class="mainNav__wrapper">
        <div class="mainNav__links">
        </div>
        </div>`;

    document.querySelector('.mainNav').insertAdjacentHTML('beforeend', templateNav);

    navLinks.forEach(function (el) {
        let template = `
        <a class="mainNav__linkItem" href="${el.url}">${el.name}</a>`;
        document.querySelector('.mainNav__links').insertAdjacentHTML('beforeend', template);
    });


    const logo = document.querySelector(".mainNav__logo img");

    if (mainNav.classList.contains("navDark")) {
        logo.src = `${pathAssets}/images/logo.svg`;
    };
    // Sticky Nav Bar
    window.onscroll = function () {
        getSticky();
    }

    function getSticky() {
        if (window.pageYOffset >= 72) {
            mainNav.classList.add("navSticky");
            logo.src = `${pathAssets}/images/logo.svg`;
        } else {
            if (mainNav.classList.contains("navDark")) {
                mainNav.classList.remove("navSticky");

            } else {
                mainNav.classList.remove("navSticky");
                logo.src = `${pathAssets}/images/logo-white.svg`;
            }
        };
    }
    getSticky();


    // Open Menu Mobile
    const iconNav = document.querySelector('.mainNav__icon');
    iconNav.addEventListener('click', openNavMobile);

    function openNavMobile() {
        if (mainNav.classList.contains('navOpen')) {
            mainNav.classList.remove('navOpen');
            document.querySelector('body').style.overflowY = "initial";
            if (window.innerWidth < 799) {
                setTimeout(() => {
                    document.querySelector('.mainNav .mainNav__wrapper').style.height = "auto";
                }, 600);
            }

        } else {
            mainNav.classList.add('navOpen');
            document.querySelector('body').style.overflowY = "hidden";
            if (window.innerWidth < 799) {
                document.querySelector('.mainNav.navOpen .mainNav__wrapper').style.height = window.innerHeight + "px";
            }
        }
    }

    // Hover Effect
    const linkItem = document.querySelectorAll(".mainNav__linkItem"),
        links = document.querySelector(".mainNav__links");


    links.addEventListener("mouseover", addHover);

    links.addEventListener("mouseout", removeHover);

    function addHover(e) {
        if (window.innerWidth > 799) {
            linkItem.forEach(function (el) {
                el.style.opacity = "0.6";
            })
            e.target.style.opacity = "1";
        }
    }

    function removeHover() {
        linkItem.forEach(function (el) {
            el.style.opacity = "1";
        });
        e.currentTarget.style.opacity = "1";
    }
}

mainNav();

/*********************************/
// Footer


function footer() {

    const footer = {
        logo: `${pathAssets}/images/logo-white.svg`,
        name: "Catche",
        text: "All Rights Reserved",
        creditsName: "Brix",
        creditsUrl: "#",
        link1: "Privacy Policy",
        link1url: "#",
        link2: "Cookie Policy",
        link2url: "#"
    };

    const social = [{
            name: "Facebook",
            icon: `${pathAssets}/social-white/facebook.svg`,
            url: "#"
        }, {
            name: "Instagram",
            icon: `${pathAssets}/social-white/facebook.svg`,
            url: "#"
        },
        {
            name: "Twitter",
            icon: `${pathAssets}/social-white/twitter.svg`,
            url: "#"
        }
    ];

    const day = new Date(),
        year = day.getFullYear();

    let templateFooter = `
    <div class="footer__top anime">
        <a href=""><img class="footer__logo" src="${footer.logo}" ></a>
        <div class="footer__social">
        </div>
    </div>
        <div class="footer__bottom anime">
            <p class="footer__text">${year} © ${footer.name} —  ${footer.text} by <a href="${footer.creditsUrl}" target="_blank">${footer.creditsName}</a></p>
            <div class="footer__links">
                <a href="${footer.link1url}" class="footer__link hiperlink">${footer.link1}</a>
                <a href="${footer.link2url}" class="footer__link hiperlink">${footer.link2}</a>
            </div>
        </div>`;
    document.querySelector('.footer').insertAdjacentHTML('beforeend', templateFooter);

    social.forEach(function (el) {
        let templateSocial = `
        <a class="footer_socialItem" href="${el.url}">
        <figure class="footer__iconSocial"><img src="${el.icon}" alt="${el.name}"></figure>
        </a>`;
        document.querySelector('.footer__social').insertAdjacentHTML('beforeend', templateSocial);
    });
};

footer();

/*********************************/
// Slider Heading

function sliderHeading() {

    const sliderHeadingItems = [{
            img: "https://images.unsplash.com/photo-1523268755815-fe7c372a0349?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
            alt: "teste",
        },
        {
            img: "https://images.unsplash.com/photo-1517463700628-5103184eac47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
            alt: "teste",
        },
        {
            img: "https://images.unsplash.com/photo-1524738258074-f8125c6a7588?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=932&q=80",
            alt: "teste",
        }

    ];

    const heading = {
        title: "A choice for every taste.",
    };

    let templatesliderHeading = `
        
            <div class="sliderHeading__wrapper">
            <div class="sliderHeading__text anime">
                <h2 class="sliderHeading__title mainTitle">${heading.title}</h2>
            </div>
                
            <div class="sliderHeading__slider swiper-container anime">
            <div class="sliderHeading__arrows ">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
                <div class="swiper-wrapper"></div>
                <div class="swiper-pagination"></div>
            </div>
            <p class="sliderHeading__scroll anime2">explore</p>
            </div>`;
    document.querySelector(".sliderHeading").insertAdjacentHTML("beforeend", templatesliderHeading);


    sliderHeadingItems.forEach(function (el) {
        let templateSlider = `
            <div class="swiper-slide">
                <figure class="sliderHeading__image anime">
                    <img src="${el.img}" alt="${el.alt}">
                </figure>
            </div>`;
        document.querySelector(".sliderHeading .swiper-wrapper").insertAdjacentHTML("beforeend", templateSlider);

    });

    var mySwiper = new Swiper('.sliderHeading__slider.swiper-container', {
        // Optional parameters
        loop: true,
        speed: 500,

        // If we need pagination
        pagination: {
            el: '.sliderHeading .swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.sliderHeading .swiper-button-next',
            prevEl: '.sliderHeading .swiper-button-prev',
        },
    });

    const sliderWrapper = document.querySelector(".sliderHeading__slider"),
        title = document.querySelector(".sliderHeading__text");

    sliderWrapper.addEventListener("mouseover", addBlur);
    title.addEventListener("mouseover", addBlur);

    sliderWrapper.addEventListener("mouseout", removeBlur);
    title.addEventListener("mouseout", removeBlur);


    function addBlur() {
        if (window.innerWidth > 799) {
            title.style.filter = "blur(10px)";
            title.style.opacity = "0.2";
            title.style.transition = "all 0.8s 0s ease";
            title.style.transform = "scaleY(2)";
        }
    }

    function removeBlur() {
        title.style.filter = "blur(0px)";
        title.style.opacity = "1";
        title.style.transform = "scaleY(1)";
    }
};

sliderHeading();


/*********************************/
// Info Icons - Food Pairing

function infoIcons() {

    const infoIcons = [{
        title: "What we have to Offer",
        subtitle: "The benefits of buying with us",
        alt: "alt",
    }];
    const icons = [{
            name: "Diversity",
            description: "Lots of choices for every taste",
            icon: `${pathAssets}/icons-brand/bra007.svg`
        },
        {
            name: "Modern",
            description: "Always the newest models available",
            icon: `${pathAssets}/icons-brand/bra007.svg`
        },
        {
            name: "Trust",
            description: "All our clients are satisfied",
            icon: `${pathAssets}/icons-brand/bra007.svg`
        },
        {
            name: "Easy",
            description: "Choose how you want to pay",
            icon: `${pathAssets}/icons-brand/bra007.svg`
        }
    ];

    infoIcons.forEach(function (el) {
        let template = `
                <div class="infoIcons__wrapper">
                    <div class="infoIcons__content">
                        <div class="infoIcons__heading">
                            <h3 class="infoIcons__title mainTitle anime">${el.title}</h3>
                            <h4 class="infoIcons__subtitle anime">${el.subtitle}</h4>
                        </div>
                        <div class="infoIcons__icons">
                        </div>
                    </div>
                </div>`;

        document.querySelector(".infoIcons").insertAdjacentHTML("beforeend", template);
    });


    icons.forEach(function (el) {
        let template = `
                <div class="infoIcons__infoIcon infoIcon vertical anime">
                    <figure class="infoIcon__icon">
                        <img src="${el.icon}" alt="${el.name}">
                    </figure>
                    <div class="infoIcon__text">
                        <p class="infoIcon__title">${el.name}</p>
                        <p class="infoIcon__description">${el.description}</p>
                    </div>
                </div>`;

        document.querySelector(".infoIcons__icons").insertAdjacentHTML("beforeend", template);
    });

    const module = document.querySelectorAll(".infoIcons");
    module.forEach(function (el) {
        const image = el.querySelectorAll("figure img");
        image.forEach(function (el) {
            if (!el.getAttribute('src')) {
                el.closest("figure").style.display = "none";
            }
            if (el.getAttribute('src')) {
                el.closest(".infoIcons__wrapper").style.background = "transparent";
            }
        })
    });
};
infoIcons();



/*********************************/
// Content Media

function contentMedia() {
    const contentMedia = [{
            img: "https://images.unsplash.com/photo-1507680434567-5739c80be1ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
            alt: "image alt",
            title: "Content Media",
            subtitle: "With left alignment",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta01"
        },


    ];

    contentMedia.forEach(function (el) {
        let template = `

        <div class="contentMedia__wrapper">
            <figure class="contentMedia__image anime">
                <img src="${el.img}" alt="${el.alt}">
            </figure>
            <div class="contentMedia__content">
                <h2 class="contentMedia__title mainTitle anime">${el.title}</h2>
                <h3 class="contentMedia__subtitle anime">${el.subtitle}</h3>
                <p class="contentMedia__description anime">${el.text}</p> 
                <div class="ctaContainer anime">
                    <a href="" class="cta ${el.ctaStyle}"><span>${el.ctaText}</span></a>
                </div>
            </div> 
         </div>`;

        document.querySelector('.contentMedia.one').insertAdjacentHTML("beforeend", template);
    })
};
contentMedia();


/*********************************/
// Content Media

function contentMedia2() {
    const contentMedia = [{
            img: "https://images.unsplash.com/photo-1532667449560-72a95c8d381b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
            alt: "image alt",
            title: "Content Media",
            subtitle: "With left alignment",
            text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
            ctaText: "button",
            ctaStyle: "cta01"
        },


    ];

    contentMedia.forEach(function (el) {
        let template = `

        <div class="contentMedia__wrapper">
            <figure class="contentMedia__image anime">
                <img src="${el.img}" alt="${el.alt}">
            </figure>
            <div class="contentMedia__content">
                <h2 class="contentMedia__title mainTitle anime">${el.title}</h2>
                <h3 class="contentMedia__subtitle anime">${el.subtitle}</h3>
                <p class="contentMedia__description anime">${el.text}</p> 
                <div class="ctaContainer anime">
                    <a href="" class="cta ${el.ctaStyle}"><span>${el.ctaText}</span></a>
                </div>
            </div> 
         </div>`;

        document.querySelector('.contentMedia.two').insertAdjacentHTML("beforeend", template);
    })
};
contentMedia2();

/*********************************/
// Product Slider

function productSlider() {
    const products = [{
            img: "https://images.unsplash.com/photo-1488132828189-4e416661b680?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            title: "GANT",
            subtitle: "subtitle",
            url: "#",
        },
        {
            img: "https://images.unsplash.com/photo-1541778480-fc1752bbc2a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1459&q=80",
            title: "Tube Watch S38",
            subtitle: "subtitle",
            url: "#",
        },
        {
            img: "https://images.unsplash.com/photo-1533237742545-cdc658d90afb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            title: "LIGE",
            subtitle: "subtitle",
            url: "#",
        },
        {
            img: "https://images.unsplash.com/photo-1507428861205-e8aab693190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2120&q=80",
            title: "Citizen Echo Drive",
            subtitle: "subtitle",
            url: "#",
        },
        {
            img: "https://images.unsplash.com/photo-1529655608570-ca66f0aae5e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
            title: "Seiko SNK809",
            subtitle: "subtitle",
            url: "#",
        },
        {
            img: "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
            title: "Hunters Race Zeus",
            subtitle: "subtitle",
            url: "#",
        },
    ];

    const productSlider = {
        title: "Our Watches",
        button: "View all",
        url: "#"
    };

    // Module Template

    function templateProductSlider() {
        let template = `
            <div class="productSlider__wrapper">
                <div class="productSlider__heading">
                    <h3 class="productSlider__title mainTitle anime">${productSlider.title}</h3>
                </div>
                <div class="productSlider__sliderContainer">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-pagination"></div>

                    <div class="productSlider__slider swiper-container">
                        <div class="swiper-wrapper">
                        </div>
                    </div>
                </div>
                <div class="ctaContainer anime">
                    <a href="${productSlider.url}" class="cta cta01"><span>${productSlider.button}</span></a>
                </div>
            </div>`;
        document.querySelector(".productSlider").insertAdjacentHTML("beforeend", template);
    };

    templateProductSlider();

    // Slider
    products.forEach(function (el) {
        let templateSlider = `
        <div class="swiper-slide anime">
            <a class="productSlider__card" href="${el.url}">
                <figure class="productSlider__image">
                    <img src="${el.img}" alt="${el.alt}">
                </figure>
                <div class="productSlider__text">
                    <h4 class="productSlider__productTitle">${el.title}</h4>
                    <p class="productSlider__link ctaLink">see details</p>
                </div>
            </a>
        </div>`;
        document.querySelector(".productSlider .swiper-wrapper").insertAdjacentHTML("beforeend", templateSlider);
    });

    var mySwiper = new Swiper('.productSlider__slider.swiper-container', {
        // Optional parameters
        loop: true,
        speed: 500,
        slidesPerView: 4,
        spaceBetween: 32,
        breakpoints: {
            1023: {
                slidesPerView: 4,
            },
            799: {
                spaceBetween: 24,
                slidesPerView: 3,
            },
            511: {
                spaceBetween: 24,
                slidesPerView: 2,
            },
            0: {
                spaceBetween: 24,
                slidesPerView: 1,
            }

        },

        // If we need pagination
        pagination: {
            el: '.productSlider .swiper-pagination',
        },
        // Navigation arrows
        navigation: {
            nextEl: '.productSlider .swiper-button-next',
            prevEl: '.productSlider .swiper-button-prev',
        },
    });
};
productSlider();

/*********************************/
// CTA Block

function ctaBlock() {
    const ctaBlock = [{
        img: "https://images.unsplash.com/photo-1522115174737-2497162f69ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        title: "Contact Us",
        subtitle: "Subtitle if needed",
        text: "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        ctaText: "See contacts",
        ctaStyle: "cta01"
    }];

    ctaBlock.forEach(function (el) {
        let template = `
        <div class="ctaBlock__wrapper">
            <figure class="ctaBlock__bgImage animeImg">
                <img src="${el.img}" alt="${el.alt}">
            </figure>
            <div class="ctaBlock__content">
            <div class="ctaBlock__text">
                <h2 class="ctaBlock__title mainTitle anime">${el.title}</h2>
                <h3 class="ctaBlock__subtitle anime">${el.subtitle}</h3>
                <p class="ctaBlock__description anime">${el.text}</p>
                <div class="ctaContainer anime"><a href="" class="cta ${el.ctaStyle}"><span>${el.ctaText}</span></a></div>
                </div>
            </div>
        </div>`;

        document.querySelector('.ctaBlock.one').insertAdjacentHTML("beforeend", template);
    });
};
ctaBlock();