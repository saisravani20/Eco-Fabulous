const video = document.getElementById('video');
        const canvas = document.getElementById('canvas');
        const snap = document.getElementById('snap');
        const errorMsgElement = document.getElementById('span#ErrorMsg');

        const constraints = {
            
            video:{
                width: 400, height:400
            }
        };

        async function init(){
            try{
                const stream = await navigator.mediaDevices.getUserMedia(constraints);
                handleSuccess(stream);
            }
            catch(e){
                errorMsgElement.innerHTML = `navigator.getUserMedia.error:${e.toString()}`;
            }
        }
        function handleSuccess(stream){
            window.stream = stream;
            video.srcObject = stream;
        }
        init();

        var context = canvas.getContext('2d');
        snap.addEventListener("click",function(){
            context.drawImage(video, 0, 0, 400, 400);
        });
        const imageInput = document.querySelector("#image-select");
const imagePreview = document.querySelector(".preview");

if(!window.EyeDropper){
    alert("Your browser does not suppport this feature");
}
const eyedropper = new EyeDropper();

const pickerBtn = document.querySelector(".open-picker");
const result = document.querySelector(".result");
var obtainedColor = {r:0 , g:0 , b:0};
const matchName = document.querySelectorAll(".product-name");
const matchId = document.querySelectorAll(".product-id");
const matchImg = document.querySelectorAll(".product-image");

// imageInput.addEventListener("change", function() {
//     imagePreview.classList.add("active");
//     const file = this.files[0];
//     if(!file) return
//     const reader = new FileReader();
//     reader.addEventListener("load", function() {
//         imagePreview.src = this.result;
//     });
//     reader.readAsDataURL(file);
// });
const colorRange = [{r:141, g:85, b:36},{r:198, g:134, b:66}, {r:201, g:139, b:104}, {r:244, g:207, b:167},{r:251, g:207, b:159}];
var  closeIndex, min = 999;
pickerBtn.addEventListener("click", function() {
    eyedropper.open()
    .then(res => {
        result.classList.add("show");
        console.log("success")
        // result.innerHTML = `Picked Color : <b> ${res.sRGBHex}</b>`
        document.querySelector(".color").classList.add("show");
        document.querySelector(".display").classList.add("show");
        document.querySelector(".loader").classList.add("show-loader");
        document.querySelector(".row-3").classList.remove("show-loader");
        document.querySelector(".color").style.backgroundColor = res.sRGBHex
        obtainedColor = hexToRgb(res.sRGBHex)
        console.log("entered",obtainedColor)
        colorRange.forEach((colorCode)=>{
            getClosestColor(colorCode, obtainedColor, colorRange.indexOf(colorCode));
        });
        getProducts(closeIndex);
        min = 999;
        setTimeout(() => {
            document.querySelector(".loader").classList.remove("show-loader");
            document.querySelector(".row-3").classList.add("show-loader");
        },5000)
    })
    .catch(err => {
        console.log("User cancelled the selection");
    })

})



function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}  


// var map = new Map([
//     [0,['Product 1', 'Product 3', 'Product 5']],
//     [1,['Product 2', 'Product 4', 'Product 6']]
// ]);
var foundationMap = new Map([
    [0, [{name:'FitMe Poreless Foundation', id:'370 Deep Bronze'},
        {name:'FitMe Poreless Foundation', id:'350 Medium Bronze'},
        {name:'FitMe Poreless Foundation', id:'375 Java'},
        {name:'FitMe Poreless Foundation', id:'390 Dark Chocolate'}]],
    [1,[ {name:'Super Stay Foundation', id:'340 Cappacino'},
        {name:'Super Stay Foundation', id:'355 Coconut'},
        {name:'Super Stay Foundation', id:'370 Coffee'},
        {name:'Super Stay Foundation', id:'390 Chocolate'}]],
    [2,[ {name:'FitMe Poreless Foundation', id:'312 Golden'},
        {name:'FitMe Poreless Foundation', id:'320 Natural Tan'},
        {name:'FitMe Poreless Foundation', id:'242 Light Honey'},
        {name:'FitMe Poreless Foundation', id:'242 Classic Beige'}]],
    [3,[ {name:'FitMe Natural Coverage', id:'220 Sandy Beige'},
        {name:'FitMe Natural Coverage', id:'322'},
        {name:'FitMe Natural Coverage', id:'300 Medium Beige'},
        {name:'FitMe Natural Coverage', id:'190 Nude'}]],
    [4,[ {name:'FitMe Poreless Foundation', id:'120 Classic Ivory'},
        {name:'FitMe Poreless Foundation', id:'220 Natural Beige'},
        {name:'FitMe Poreless Foundation', id:'122 Creamy Beige'},
        {name:'FitMe Poreless Foundation', id:'125 Nude Beige'}]]
]);

var foundationImageMap = new Map([
    [0, "./images/zero.jpg" ],
    [1, "./images/one.jpg" ],
    [2, "./images/two.jpg" ],
    [3, "./images/three.jpg" ],
    [4, "./images/four.jpg" ]
]);
var idColor = ['#87543e' , '#cf824d' , '#eca88e' , '#ddae8a' , '#fbcfb3']

function getClosestColor(color1, color2, idx) {
    let diff = Math.abs(color1.r-color2.r) + Math.abs(color1.g-color2.g) + Math.abs(color1.b-color2.b);
    if(min > diff) {
        min = diff;
        closeIndex = idx;
        console.log(closeIndex)
    }
}



function getProducts(idx) {
    var res = foundationMap.get(idx);
    let i = 0;
    res.forEach((product) => {
        console.log(product);
        matchName[i].innerText = product.name;
        matchId[i].innerText = product.id;
        matchId[i].style.color = idColor[closeIndex];
        matchImg[i].src = foundationImageMap.get(closeIndex);
        i++;

    })
    
}

let navbar = document.querySelector('.navbar');

document.querySelector("#menu-btn").onclick = () =>{
    navbar.classList.toggle('active');
}

document.querySelectorAll(".close").forEach(item => {
    item.onclick = () => {
      console.log("clicked")
      navbar.classList.remove('active');
    }});