const crtLoveTJ = () => {
    const move = 1000;
    const boom = 200;
    const easing = "sin.inOut";
    const easingBoom = "sin.in";
    const easingOut = "sin.out";
    const opts = { duration: move, easing, opacity: 1 };
    const delta = 150;

    const l = document.querySelector(".letter-l");
    const o = document.querySelector(".letter-o");
    const v = document.querySelector(".letter-v");
    const e = document.querySelector(".letter-e");
    const blop = document.querySelector("#blop-sound");

    return new mojs.Timeline().add([
        new mojs.Tween({
            duration: move,
            onComplete: () => {
                [l, o, v, e].forEach(el => {
                    el.style.opacity = 0;
                });
                blop.play();
            }
        }),
    ]);
};

crtLoveTJ();
