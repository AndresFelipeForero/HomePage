
const toggle = () => {
    const d = document
    const $toggleBtn = d.querySelector(".nav__toggle");
    const $navUl = d.querySelector(".nav__ul");
    const $navA = d.querySelectorAll(".nav__a");
    const $modal = d.querySelector(".modal");
    d.addEventListener("click", (e)=>{
        
        if (e.target === $toggleBtn || e.target === (`${$toggleBtn} *`) || e.target === $navUl || e.target === $navA || e.target === $modal) { 
            $navUl.classList.toggle("nav__ul--active");
            $toggleBtn.classList.toggle("nav__toggle--active");
            $modal.classList.toggle("modal__active")
        }

        $navA.forEach((element) => {
            if (e.target === element) {
                $navUl.classList.remove("nav__ul--active");
                $toggleBtn.classList.remove("nav__toggle--active");
                $modal.classList.remove("modal__active")
            }
        })

       
    })
    console.log($navUl)
}

toggle()