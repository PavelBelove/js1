let gallery = [];
let currentSlide = 1;
let QANTPREV = 5;
createImgArray();
gallery[currentSlide].img.style.opacity = 1;

document.querySelector("#right").onclick = newSlid;
document.querySelector("#left").onclick = newSlid;

for (let i of document.querySelectorAll(".prev_img")) {
    i.addEventListener("click", selectPrev)
}






/*=========================================*/
function createImgArray() {
    /*Первое задание
    на этапе наполнения массива проверяем - наличие соответствующего "#img" + i и если такого нет присваиваем дефолтное лицо тролля. 
    Вместо него мог быть ID дива с ошибкой. Или можно было оставить поле не заполненным и отрабатывать о наличию obj.img  */

    for (let i = 0; i < QANTPREV; i++) {
        let obj = {};
        obj.prev = document.querySelector("#prev" + i);
        let image = document.querySelector("#img" + i);
        if (!image) {
            //console.log("trollolo");
            obj.img = document.querySelector("#imgNull");
        } else {
            obj.img = image;
        }
        gallery[i] = obj;
    }
}


/*=========================================
Третье задание - функция слайдера*/
function newSlid() {
    console.log(this.id);
    gallery[currentSlide].img.style.opacity = 0;
    if (this.id == "right") {
        currentSlide += 1;
    };
    if (this.id == "left") {
        currentSlide -= 1;
    };
    if (currentSlide < 0) {
        currentSlide = QANTPREV - 1;
    }
    if (currentSlide > QANTPREV - 1) {
        currentSlide = 0;
    }
    //Если вместо большой картинки оказался троль, пробуем "нажать на кнопку еще раз"
    /*if (gallery[currentSlide].img.id == "imgNull"){
         func.call(this);
    }*/
    gallery[currentSlide].img.style.opacity = 1;
    console.log(currentSlide);

}
/*=========================================*/
function selectPrev(e) {
    gallery[currentSlide].img.style.opacity = 0;
    currentSlide = e.target.id.slice(-1)
    gallery[currentSlide].img.style.opacity = 1;
}