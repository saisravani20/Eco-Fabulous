// let side1 = document.getElementById("nails1");
// let side2 = document.getElementById("nails2");

// window.addEventListener("scroll", function(){
//     side1.style.top = -window.pageYOffset+ "px";
//     side2.style.top = window.pageYOffset+ "px";
//     console.log(window.pageYOffset) 
// })

// var counter = 0;
//         const x = document.getElementsByClassName('hider')[0];
//         const y = document.getElementsByClassName('content')[0];
//         x.addEventListener("wheel", function (e) {
//             setTimeout(() => console.log(x.scrollTop), 2000);
//         })
//         const btnDown = document.getElementById('pageDown');
//         // var Arr = ['beauty', 'eyes', 'face', 'lips', 'nails'];
//         btnDown.addEventListener("click", function (e) {
//             if (counter < 2400) {
//                 counter += 600;
//                 y.scrollTop = counter;
//                 setTimeout(() => x.scrollTop = counter, 130);
//                 console.log('Down', counter);
//                 change(counter / 600);
//             }
//         })
//         const btnUp = document.getElementById('pageUp');
//         btnUp.addEventListener("click", function (e) {
//             if (counter > 0) {
//                 counter -= 600;
//                 x.scrollTop = counter;
//                 setTimeout(() => y.scrollTop = counter, 130);
//                 console.log('Up', counter);
//                 change(counter / 600);
//             }
//         })
//         const btnToTop = document.getElementById('toTop');
//         btnToTop.addEventListener("click", function (e) {
//             if (counter > 0) {
//                 counter = 0;
//                 x.scrollTop = counter;
//                 setTimeout(() => y.scrollTop = counter, 130);
//                 console.log('Top', counter);
//                 setTimeout(() => change(counter / 600), 500);
//             }
//         })
var counter = 0, textCounter = 0;
        var Arr = ['beauty', 'eyes', 'face', 'lips', 'nails'];
        const x = document.getElementsByClassName('hider')[0];
        const y = document.getElementsByClassName('content')[0];
        const z = document.getElementsByClassName('text')[0];
        // const text = document.getElementById('visiblePage');
        // x.addEventListener("wheel", function (e) {
            
        //     y.scrollTop = x.scrollTop;
        //     console.log(x.scrollTop);
        //     getActiveElement(e);
        // })
        // y.addEventListener("wheel", function () {
        //     x.scrollTop = y.scrollTop;
        //     getActiveElement(e);
        // })
        z.addEventListener("wheel", function (e) {
            let direction = detectMouseWheelDirection(e);
            counter += 1;
            if (counter == 25) {
                if (direction == 'down') {
                    console.log(counter);
                    if (counter < 200) {
                        x.scrollTop += counter * 20;
                        setTimeout(() => {
                            y.scrollTop += counter * 20;
                            counter = 0;
                            if (textCounter < 4) {
                                // text.innerText = Arr[(++textCounter)];
                                change(++textCounter);
                            }
                        }, 130);
                    }
                } else if (direction == 'up') {
                    console.log(counter);
                    if (counter > 0) {
                        x.scrollTop -= counter * 20;
                        setTimeout(() => {
                            y.scrollTop -= counter * 20;
                            counter = 0;
                            if (textCounter - 1 >= 0) {
                                // text.innerText = Arr[(--textCounter)];
                                change(--textCounter);
                            }
                        }, 130);
                    }
                }
            }
            
        })
        
        function detectMouseWheelDirection(e) {
            var delta = null, direction = false;
            if (!e) { // if the event is not provided, we get it from the window object
                e = window.event;
            }
            if (e.wheelDelta) { // will work in most cases
                delta = e.wheelDelta / 60;
            } else if (e.detail) { // fallback for Firefox
                delta = -e.detail / 2;
            }
            if (delta !== null) {
                direction = delta > 0 ? 'up' : 'down';
            }

            return direction;
        }
        function change(num) {
            const headings = document.getElementsByClassName('heading');
            for (let i = 0; i < 5; i++) {
                if (headings[i].classList.contains('activeClass')) {
                    headings[i].classList.remove('activeClass');
                }
            }
            headings[num].classList.add('activeClass');
        }

let navbar = document.querySelector('.navbar');

document.querySelector("#menu-btn").onclick = () =>{
    navbar.classList.toggle('active');
}

document.querySelector("#close-navbar").onclick = () =>{
    navbar.classList.remove('active');
}
