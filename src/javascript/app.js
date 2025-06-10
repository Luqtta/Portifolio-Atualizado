document.addEventListener('DOMContentLoaded', () => {
    
    const tl = gsap.timeline({ defaults: { ease: "power4.out" }});

    
    tl.from('header', {
        y: -100,
        opacity: 0,
        duration: 1.2
    })

    
    .from('.rounded-full', {
        duration: 1.5,
        ease: "elastic.out(1, 0.5)"
    }, "-=0.5")

    
    .from('h2', {
        y: 50,
        opacity: 0,
        duration: 1
    }, "-=1")

    
    .from('p', {
        y: 30,
        opacity: 0,
        duration: 1
    }, "-=0.8")

    gsap.utils.toArray('nav a').forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link.querySelector('i'), {
                scale: 1.3,
                rotate: '10deg',
                duration: 0.3,
                ease: "back.out(2)"
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link.querySelector('i'), {
                scale: 1,
                rotate: '0deg',
                duration: 0.3
            });
        });
    });

    gsap.to('.bg-[radial-gradient(#51c774,transparent_1px)]', {
        backgroundPosition: '100px 100px',
        duration: 20,
        repeat: -1,
        ease: "none"
    });

    gsap.utils.toArray('main a').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
});

window.addEventListener('DOMContentLoaded', () => {
        document.body.classList.add('show');
    });

window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
    } else {
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});


window.addEventListener('DOMContentLoaded', () => {
        const nome = document.getElementById('lucas-nome');
            if (nome) {
                setTimeout(() => {
                    nome.classList.remove('opacity-0', 'translate-y-4');
                    nome.classList.add('opacity-100', 'translate-y-0');
                }, 300);
            }
            const btn = document.getElementById('copyEmailIntro');
            if (btn) {
                btn.addEventListener('click', () => {
                    navigator.clipboard.writeText('lucas.moraisoffice@gmail.com');
                    btn.innerHTML = "<i class='bx bx-envelope'></i> Copiado!";
                    setTimeout(() => {
                        btn.innerHTML = "<i class='bx bx-envelope'></i> Copiar email";
                    }, 1500);
                });
            }
        });


window.onscroll = function() {
    var button = document.getElementById("backToTop");


    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.classList.remove("opacity-0", "pointer-events-none");
        button.classList.add("opacity-100", "pointer-events-auto");
    } else {
        button.classList.remove("opacity-100", "pointer-events-auto");
        button.classList.add("opacity-0", "pointer-events-none");
    }
};


document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


const copyEmail = document.getElementById('copyEmail');
const toastMessage = document.getElementById('toastMessage');

copyEmail.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText('lucas.moraisoffice@gmail.com');
        
        
        toastMessage.classList.remove('opacity-0', 'invisible');
        toastMessage.classList.add('opacity-100', 'visible');
        
        
        setTimeout(() => {
            toastMessage.classList.add('opacity-0', 'invisible');
            toastMessage.classList.remove('opacity-100', 'visible');
        }, 3000);
    } catch (err) {
        console.error('Erro ao copiar email:', err);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-up').forEach(el => {
        setTimeout(() => {
            el.classList.add('show');
        }, 1500);
    });
});
