document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".clients-buttons button");
  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      buttons.forEach((b) => {
        b.classList.remove("active");
      });
      e.target.classList.add("active");
      const client = e.target.innerHTML;
      const carouselElements = document.querySelector(".carousel-inner");
      carouselElements.innerHTML = "";
      let newHTML = "";
      switch (client) {
        case "UF 007 - Terralagos - Proyecto":
          for (let i = 1; i <= 4; i++) {
            if (i == 1) {
              newHTML += `<div class="carousel-item active">
                    <img src="./assets/img/clients/BARRIO EL CAZAL. UF10/${i}.JPEG" class="d-block w-100" alt="...">
                </div>
                `;
            } else {
              newHTML += `<div class="carousel-item">
                    <img src="./assets/img/clients/BARRIO EL CAZAL. UF10/${i}.JPEG" class="d-block w-100" alt="...">
                </div>
                `;
            }
          }
          break;
        case "UF 026 - Terralagos - Proyecto":
          for (let i = 1; i <= 4; i++) {
            if (i == 1) {
              newHTML += `<div class="carousel-item active">
                      <img src="./assets/img/clients/BARRIO EL CAZAL . UF163/${i}.JPEG" class="d-block w-100" alt="...">
                  </div>
                  `;
            } else {
              newHTML += `<div class="carousel-item">
                      <img src="./assets/img/clients/BARRIO EL CAZAL . UF163/${i}.JPEG" class="d-block w-100" alt="...">
                  </div>
                  `;
            }
          }
          break;
        case "UF 094 - Terralagos - Proyecto":
          for (let i = 1; i <= 3; i++) {
            if (i == 1) {
              newHTML += `<div class="carousel-item active">
                          <img src="./assets/img/clients/BARRIO EL CAZAL. UF158/${i}.JPEG" class="d-block w-100" alt="...">
                      </div>
                      `;
            } else {
              newHTML += `<div class="carousel-item">
                          <img src="./assets/img/clients/BARRIO EL CAZAL. UF158/${i}.JPEG" class="d-block w-100" alt="...">
                      </div>
                      `;
            }
          }
          break;
        case "UF 279 - Pilar - Proyecto":
          for (let i = 1; i <= 4; i++) {
            if (i == 1) {
              newHTML += `<div class="carousel-item active">
                              <img src="./assets/img/clients/BARRIO SAN SEBASTIAN. AREA 13. UF 3/${i}.JPEG" class="d-block w-100" alt="...">
                          </div>
                          `;
            } else {
              newHTML += `<div class="carousel-item">
                              <img src="./assets/img/clients/BARRIO SAN SEBASTIAN. AREA 13. UF 3/${i}.JPEG" class="d-block w-100" alt="...">
                          </div>
                          `;
            }
          }
          break;
        case "UF 270 - Terralagos - Proyecto":
          for (let i = 1; i <= 3; i++) {
            if (i == 1) {
              newHTML += `<div class="carousel-item active">
                                  <img src="./assets/img/clients/ESCOBAR CENTRO. MERMOZ S-N/${i}.JPEG" class="d-block w-100" alt="...">
                              </div>
                              `;
            } else {
              newHTML += `<div class="carousel-item">
                                  <img src="./assets/img/clients/ESCOBAR CENTRO. MERMOZ S-N/${i}.JPEG" class="d-block w-100" alt="...">
                              </div>
                              `;
            }
          }
          break;
        case "UF 017 - Highland - Proyecto":
          for (let i = 1; i <= 4; i++) {
            if (i == 1) {
              newHTML += `<div class="carousel-item active">
                                      <img src="./assets/img/clients/BARRIO EL CAZADOR. OBLIGADO 350/${i}.JPEG" class="d-block w-100" alt="...">
                                  </div>
                                  `;
            } else {
              newHTML += `<div class="carousel-item">
                                      <img src="./assets/img/clients/BARRIO EL CAZADOR. OBLIGADO 350/${i}.JPEG" class="d-block w-100" alt="...">
                                  </div>
                                  `;
            }
          }
          
          break;
        case "UF 288 - Terralagos - Proyecto":
          for (let i = 1; i <= 4; i++) {
            if (i == 1) {
              newHTML += `<div class="carousel-item active">
                                          <img src="./assets/img/clients/BARRIO EL CAZADOR. OBLOGADO 450/${i}.JPEG" class="d-block w-100" alt="...">
                                      </div>
                                      `;
            } else {
              newHTML += `<div class="carousel-item">
                                          <img src="./assets/img/clients/BARRIO EL CAZADOR. OBLOGADO 450/${i}.JPEG" class="d-block w-100" alt="...">
                                      </div>
                                      `;
            }
          }
          break;
      }
      carouselElements.innerHTML = newHTML;
    });
  });
});