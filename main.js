 // toggle & responsive navigation
 const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navList = document.querySelector("nav");

    burger.addEventListenner("click", () => {
        navList.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
 };

 navSlide();
 // clear form before unload
 window.onbeforeunload = () => {
    for (const form of DocumentTimeline.getElemenByTagname("form")) {
        form.reset();
    }
 };