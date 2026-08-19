// Fonction permettant d'ajouter une classe à la navbar lorsque l'utilisateur fait défiler la page
function handleNavbarScroll() {
    const header = document.querySelector(".navbar");
    window.onscroll = function () {
        const top = window.scrollY;
        if (top >= 100) {
            header.classList.add("navbarDark");
        } else {
            header.classList.remove("navbarDark");
        }
    };
}

// Fonction permettant de gérer le pliage de la navbar sur les petits appareils après un clic
function handleNavbarCollapse() {
    const navLinks = document.querySelectorAll(".nav-item");
    const menuToggle = document.getElementById("navbarSupportedContent");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            new bootstrap.Collapse(menuToggle).toggle();
        });
    });
}

// Fonction permettant de créer dynamiquement des éléments HTML à partir du fichier JSON
function createSkillsFromJSON() {
    const container = document.querySelector("#skills .container");
    let row = document.createElement("div");
    row.classList.add("row");

    // Charger le fichier JSON
    fetch("data/skills.json")
        .then((response) => response.json())
        .then((data) => {
            // Parcourir les données JSON et créer des éléments HTML
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4");
                card.innerHTML = `
                    <div class="card skillsText">
                        <div class="card-body">
                            <i class="fa-solid ${item.icon} fa-3x" style="color: #2c7873;"></i>
                            <h3 class="card-title mt-3">${item.title}</h3>
                            <p class="card-text mt-3">${item.text}</p>
                        </div>
                    </div>
                `;

                // Ajouter le panier à la ligne actuelle
                row.appendChild(card);

                // Si l'index est un multiple de 3 ou c'est le dernier élément, créer une nouvelle ligne
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        });
}
// Fonction permettant de créer dynamiquement des éléments HTML à partir du fichier JSON
function createPortfolioFromJSON() {
    const container = document.querySelector("#portfolio .container");
    let row = document.createElement("div");
    row.classList.add("row");

    // Charger le fichier JSON
    fetch("data/portfolio.json")
        .then((response) => response.json())
        .then((data) => {
            // Parcourir les données JSON et créer des éléments HTML
            data.forEach((item, index) => {
                const card = document.createElement("div");
                card.classList.add("col-lg-4", "mt-4", "d-flex");
                card.innerHTML = `
                    <div class="card portfolioContent h-100 w-100">
                    ${item.icon
    ? `<div class="card-icon-wrapper"><i class="fa-solid ${item.icon} fa-4x" style="color: #2c7873;"></i></div>`
    : `<img class="card-img-top" src="images/${item.image}" style="width:100%" alt="${item.title}">`}
                    <div class="card-body">
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-text">${item.text}</p>
                        <div class="text-center">
                            <a href="${item.link}" class="btn btn-success">Lien</a>
                        </div>
                    </div>
                </div>
                `;

                // Ajouter le panier à la ligne actuelle
                row.appendChild(card);

                // Si l'index est un multiple de 3 ou c'est le dernier élément, créer une nouvelle ligne
                if ((index + 1) % 3 === 0 || index === data.length - 1) {
                    container.appendChild(row);
                    row = document.createElement("div");
                    row.classList.add("row");
                }
            });
        });
}

// Appelez les fonctions pour exécuter le code lorsque la page est chargée
handleNavbarScroll();
handleNavbarCollapse();
createSkillsFromJSON();
createPortfolioFromJSON();
