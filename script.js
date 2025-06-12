document.addEventListener('DOMContentLoaded', () => {
  fetch('photos.json')
    .then(res => res.json())
    .then(data => {
      const gallery = document.getElementById('gallery');
      data.photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = `images/${photo}`;
        img.alt = photo;
        img.title = "Cliquez pour acheter cette photo";
        img.addEventListener('click', () => {
          alert(
            "Merci de votre paiement !\nContactez-nous sur WhatsApp pour recevoir votre photo HD."
          );
          window.open("https://wa.me/22955289731", "_blank");
        });
        gallery.appendChild(img);
      });
    })
    .catch(err => {
      console.error('Erreur lors du chargement des photos :', err);
    });
});
