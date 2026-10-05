/* =====================================================
   3D MOUSE PARALLAX
===================================================== */

const scene = document.querySelector(".scene");
const stage = document.getElementById("stage");

let targetX = 0;
let targetY = 0;

let currentX = 0;
let currentY = 0;


if (scene && stage) {

    scene.addEventListener("mousemove", function(event) {

        const rect =
            scene.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        targetX =
            ((x - rect.width / 2) /
            (rect.width / 2)) * 7;


        targetY =
            -((y - rect.height / 2) /
            (rect.height / 2)) * 6;

    });


    scene.addEventListener("mouseleave", function() {

        targetX = 0;

        targetY = 0;

    });


    function animate3D() {

        currentX +=
            (targetX - currentX) * 0.055;


        currentY +=
            (targetY - currentY) * 0.055;


        stage.style.transform =
            `translate(-50%, -50%)
             rotateX(${currentY}deg)
             rotateY(${currentX}deg)`;


        requestAnimationFrame(animate3D);

    }


    animate3D();

}


/* =====================================================
   EXTRA FLOATING PARTICLES
===================================================== */

const page =
    document.querySelector(".page");


if (page) {

    for (let i = 0; i < 10; i++) {

        const particle =
            document.createElement("span");


        particle.style.position =
            "absolute";


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.top =
            Math.random() * 100 + "%";


        const size =
            Math.random() * 3 + 2;


        particle.style.width =
            size + "px";


        particle.style.height =
            size + "px";


        particle.style.borderRadius =
            "50%";


        particle.style.background =
            "#4e9cff";


        particle.style.opacity =
            "0.12";


        particle.style.pointerEvents =
            "none";


        particle.animate(

            [

                {
                    transform:
                        "translateY(0)",

                    opacity:
                        0.08
                },

                {

                    transform:
                        `translateY(-${
                            30 +
                            Math.random() * 70
                        }px)`,

                    opacity:
                        0.35
                },

                {

                    transform:
                        "translateY(0)",

                    opacity:
                        0.08
                }

            ],

            {

                duration:
                    5000 +
                    Math.random() * 5000,

                iterations:
                    Infinity,

                delay:
                    -Math.random() * 5000

            }

        );


        page.appendChild(particle);

    }

}
