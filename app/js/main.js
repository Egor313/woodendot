// const isSwiper__collage = document.querySelector('.collage__swiper');
// if (isSwiper__collage) {
//     const collageSwiper = new Swiper('.collage__swiper', {
//         loop: true,
//         grabCursor: true,
       
//         breakpoints: {
//             320: {
//                 slidesPerView: 1,
//                 spaceBetween: 10
//             },
//             768: {
//                 slidesPerView: 2,
//                 spaceBetween: 10
//             },
//             1024: {
//                 slidesPerView: 3,
//                 spaceBetween: 10
//             }
//         },

//         pagination: {
//             el: '.collage__pagination',
//             clickable: true,
//             type: 'bullets',
//         }
//     });
// }


// const isSwiper__quote = document.querySelector('.quote__swiper');
// if (isSwiper__quote) {
//     const quoteSwiper = new Swiper('.quote__swiper', {
//         loop: true,
//         grabCursor: true,
       
//         breakpoints: {
//             320: {
//                 slidesPerView: 1,
//                 spaceBetween: 40
//             }
//         },

//         pagination: {
//             el: '.quote__pagination',
//             clickable: true,
//             type: 'bullets',
//         }
//     });
// }



const isSwiper__collage = document.querySelector('.collage__swiper');
if (isSwiper__collage) {
    const collageSwiper = new Swiper('.collage__swiper', {
        loop: true,
        grabCursor: true,
        speed: 600,

        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20 // Змінено з 10 на 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30 // Змінено з 10 на 30
            }
        },

        pagination: {
            el: '.collage__pagination',
            clickable: true,
            type: 'bullets',
        }
    });
}


const isSwiper__quote = document.querySelector('.quote__swiper');
if (isSwiper__quote) {
    const quoteSwiper = new Swiper('.quote__swiper', {
        loop: true,
        grabCursor: true,
        speed: 800,
       
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 40 // Змінено з 40 на бажане значення
            }
        },

        pagination: {
            el: '.quote__pagination',
            clickable: true,
            type: 'bullets',
        }
    });
}

