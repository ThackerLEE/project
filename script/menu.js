// "ues strict";
// $(function () {

//     $(window).resize(function () {
//         let wrapWidth = $(window).width(); // 브라우져 화면 너비 실시간 가져오기
//         console.log(wrapWidth);

//         if (wrapWidth > 580) { // Pc 화면에서 실행할 코드 입력

//             $('.aas>.aas').off();

//             $('.aas>.aas').on({
//                 "mouseenter": function () {
//                     $(this).addClass('on').siblings('li').removeClass('on');
//                     $('.submenu, .bg').stop().slideDown(500);
//                 }
//             });
//             $('.aas>li, .bg').on({
//                 "mouseleave": function () {
//                     $(this).removeClass('on');
//                     $('.submenu, .bg').stop().slideUp(500);
//                 }
//             });

//         } else { // 모바일 화면에서 실행할 코드 입력

//             $('.aas>li').off();

//             $('.toggle').click(function () {
//                 $('.aas').css("right", "0px");
//             });

//             $('.close').click(function () {
//                 $('.aas').css("right", "-110%");
//             });

//             $('.aas>li').on("click", function () {
//                 $(this).children(".submenu").stop().slideToggle();
//             });

//         }

//     });

//     $(window).resize();

// });