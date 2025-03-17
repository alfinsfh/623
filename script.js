document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    // Toggle hamburger menu untuk mobile
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    // Toggle dropdown saat diklik
    document.querySelectorAll(".dropdown > .dropdown-toggle").forEach((toggle) => {
        toggle.addEventListener("click", (e) => {
            e.preventDefault();
            const parent = toggle.parentElement;

            // Tutup semua dropdown lain kecuali yang diklik
            document.querySelectorAll(".dropdown").forEach((dropdown) => {
                if (dropdown !== parent) {
                    dropdown.classList.remove("active");
                }
            });

            // Toggle dropdown yang diklik
            parent.classList.toggle("active");
        });
    });

    // Toggle submenu (dropdown level kedua) saat diklik
    document.querySelectorAll(".dropdown-sub > .dropdown-toggle").forEach((toggle) => {
        toggle.addEventListener("click", (e) => {
            e.preventDefault();
            const parent = toggle.parentElement;

            // Tutup semua submenu lain kecuali yang diklik
            document.querySelectorAll(".dropdown-sub").forEach((submenu) => {
                if (submenu !== parent) {
                    submenu.classList.remove("active");
                }
            });

            // Toggle submenu yang diklik
            parent.classList.toggle("active");
        });
    });

    // Tutup dropdown saat klik di luar navbar
    document.addEventListener("click", (e) => {
        if (!e.target.closest(".navbar")) {
            document.querySelectorAll(".dropdown, .dropdown-sub").forEach((menu) => {
                menu.classList.remove("active");
            });
        }
    });
});




