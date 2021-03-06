const pathAssets = "https://brixcreative.github.io/catche/assets";

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
        url: "#about"
    }, {
        name: "Products",
        url: "#products"
    }, {
        name: "Contacts",
        url: "#contacts"
    }];

    let templateNav = `
        <div class="mainNav__logo">
        <a href="#home"><img src="${pathAssets}/images/logo-white.svg" alt="Catche Logo"></a>
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
    }

    if (window.innerWidth < 799) {
        linkItem.forEach(function (el) {
            el.addEventListener("click", openNavMobile)
        });
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
        creditsUrl: "https://www.instagram.com/brix.creative",
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
            icon: `${pathAssets}/social-white/instagram.svg`,
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
        <a href="#home"><img class="footer__logo" src="${footer.logo}" alt="Catche Logo"></a>
        <div class="footer__social">
        </div>
    </div>
        <div class="footer__bottom anime">
            <p class="footer__text">${year} © ${footer.name} —  ${footer.text} | made by <a class="hiperlink" href="${footer.creditsUrl}" target="_blank" rel="noopener">${footer.creditsName}</a></p>
            <div class="footer__links">
                <a href="${footer.link1url}" class="footer__link hiperlink">${footer.link1}</a>
                <a href="${footer.link2url}" class="footer__link hiperlink">${footer.link2}</a>
            </div>
        </div>`;
    document.querySelector('.footer').insertAdjacentHTML('beforeend', templateFooter);

    social.forEach(function (el) {
        let templateSocial = `
        <a class="footer__socialItem" href="${el.url}">
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
            img: `${pathAssets}/images/slider01.jpeg`,
            alt: "Modern Man wearing wrist watch",
        },
        {
            img: `${pathAssets}/images/slider02.jpeg`,
            alt: "Man swiming with wrist watch",
        },
        {
            img: `${pathAssets}/images/slider04.jpeg`,
            alt: "Woman wearing wrist watch",
        },
        {
            img: `${pathAssets}/images/slider03.jpeg`,
            alt: "Modern Man wearing wrist watch",
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
            icon: `${pathAssets}/icons-brand/bra004.svg`
        },
        {
            name: "Modern",
            description: "Always the newest models available",
            icon: `${pathAssets}/icons-brand/bra001.svg`
        },
        {
            name: "Trust",
            description: "All our clients are satisfied",
            icon: `${pathAssets}/icons-brand/bra003.svg`
        },
        {
            name: "Easy",
            description: "Choose how you want to pay",
            icon: `${pathAssets}/icons-brand/bra002.svg`
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
                        <img src="${el.icon}" alt="${el.name} - ${el.description}">
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
            img: `${pathAssets}/images/content01.jpg`,
            alt: "Modern man wearing wrist watch",
            title: "Our beliefs",
            subtitle: "This is what we stand for",
            text: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
            ctaText: "know more",
            ctaStyle: "cta01"
        },


    ];

    contentMedia.forEach(function (el) {
        let template = `

        <div class="contentMedia__wrapper">
            <figure class="contentMedia__image animeImg">
                <img src="${el.img}" alt="${el.alt}">
            </figure>
            <div class="contentMedia__content">
                <h2 class="contentMedia__title mainTitle anime">${el.title}</h2>
                <h3 class="contentMedia__subtitle anime">${el.subtitle}</h3>
                <p class="contentMedia__description anime">${el.text}</p> 
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
            img: `${pathAssets}/images/content02.jpg`,
            alt: "Man holding wrist watch",
            title: "We Care",
            subtitle: "Your opinion matters!",
            text: "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.",
            ctaText: "button",
            ctaStyle: "cta01"
        },


    ];

    contentMedia.forEach(function (el) {
        let template = `

        <div class="contentMedia__wrapper">
            <figure class="contentMedia__image animeImg">
                <img src="${el.img}" alt="${el.alt}">
            </figure>
            <div class="contentMedia__content">
                <h2 class="contentMedia__title mainTitle anime">${el.title}</h2>
                <h3 class="contentMedia__subtitle anime">${el.subtitle}</h3>
                <p class="contentMedia__description anime">${el.text}</p> 

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
            img: `${pathAssets}/images/product01.jpg`,
            title: "GANT",
            subtitle: "subtitle",
            url: "#",
        },
        {
            img: `${pathAssets}/images/product02.jpg`,
            title: "Tube Watch S38",
            subtitle: "subtitle",
            url: "#",
        },
        {
            img: `${pathAssets}/images/product03.jpg`,
            title: "LIGE",
            subtitle: "subtitle",
            url: "#",
        },
        {
            img: `${pathAssets}/images/product04.jpg`,
            title: "Citizen Echo Drive",
            subtitle: "subtitle",
            url: "#",
        },
        {
            img: `${pathAssets}/images/product05.jpg`,
            title: "Seiko SNK809",
            subtitle: "subtitle",
            url: "#",
        },
        {
            img: `${pathAssets}/images/product06.jpg`,
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
        img: `${pathAssets}/images/content03.jpg`,
        alt: "Wrist watch photo close up",
        title: "get in touch",
        subtitle: "Contact us if you have questions or comments and we will get back to you, as soon as possible!",
        text: "",
        ctaText: "Send email",
        ctaStyle: "cta01"
    }];

    ctaBlock.forEach(function (el) {
        let template = `
        <div class="ctaBlock__wrapper">
            
            <div class="ctaBlock__content">
            <div class="ctaBlock__text">
                <h2 class="ctaBlock__title mainTitle anime">${el.title}</h2>
                <h3 class="ctaBlock__subtitle anime">${el.subtitle}</h3>
                <div class="ctaContainer anime"><a href="" class="cta ${el.ctaStyle}"><span>${el.ctaText}</span></a></div>
                </div>
            </div>
        </div>`;

        document.querySelector('.ctaBlock.one').insertAdjacentHTML("beforeend", template);
    });
};
ctaBlock();


/*********************************/
// Highlight Slider -  Testimonials 

function sliderTestimonials() {
    const testimonials = {
        title: "Client's opinions",
        img: `${pathAssets}/images/content03.jpg`,
        alt: "Wrist Watch close up photo"
    }

    const quotes = [{
            name: "Jack F. — 2019",
            text: "If you want a real product - Catche's got you covered. Thanks guys, keep up the good work! I couldn't have asked for more than this. No matter where you go, Catche is the coolest, most happening thing around!",
        },
        {
            name: "Mary Jane W. — 2019",
            text: "I wish I would have thought of it first. Catche is the real deal! We were treated like royalty. Great costumer service and fast shipping. 5 stars!",
        },
        {
            name: "Sean C. — 2019",
            text: "I can't say enough about Catche. I made back the purchase price in just 48 hours! I am completely blown away. The watch I bought is really wonderful.",
        }
    ];

    function templateModule() {
        let template = `
            <figure class="highlightSlider__bgImage animeImg">
                <img src="${testimonials.img}" alt="${testimonials.alt}">
            </figure>
            <div class="highlightSlider__wrapper">
                <div class="highlightSlider__heading">
                    <h3 class="highlightSlider__title">${testimonials.title}</h3>
                </div>
                <div class="highlightSlider__slider swiper-container">
                    <div class="swiper-wrapper"></div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>`;
        document.querySelector('.highlightSlider.testimonials').insertAdjacentHTML("beforeend", template);
    };

    function templateQuotes() {
        quotes.forEach(function (el) {
            let template = `
                <div class="swiper-slide">
                <div class="highlightSlider__content">
                    <div class="highlightSlider__text anime">
                        <p class="highlightSlider__subtitle anime">${el.text}</p>
                        <p class="highlightSlider__description anime">${el.name}</p>
                        </div>
                    </div>
                </div>`;
            document.querySelector(".highlightSlider.testimonials .swiper-wrapper").insertAdjacentHTML("beforeend", template);

        });

        var mySwiper = new Swiper('.testimonials .highlightSlider__slider.swiper-container', {
            // Optional parameters
            loop: true,
            speed: 700,
            effect: "coverflow",

            coverflowEffect: {
                rotate: 100,
                slideShadows: false,
                stretch: 100,
                depth: 0,
                modifier: 1,
            },


            // If we need pagination
            pagination: {
                el: '.highlightSlider .swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.highlightSlider .swiper-button-next',
                prevEl: '.highlightSlider .swiper-button-prev',
            },
        });
    };

    templateModule();
    templateQuotes();
}

sliderTestimonials();