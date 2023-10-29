document.addEventListener("DOMContentLoaded", () => {
  console.log("content loaded");

  document.querySelector("form").addEventListener("submit", async (event) => {
    console.log("submit");
    event.preventDefault();

    // Récupération des valeurs des inputs
    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const email = document.querySelector("#email").value;
    const subject = document.querySelector("#subject").value;
    const message = document.querySelector("#message").value;

    console.log({
      firstname,
      lastname,
      subject,
      email,
      message,
    });

    // -- requête au back en local
    const response = await axios.post("http://localhost:3000/form", {
      firstname,
      lastname,
      subject,
      email,
      message,
    });
    // -- Affichage de la response dans la console du navigateur
    console.log(response);
  });
});
