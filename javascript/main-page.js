
  const images = [
    "phones_edited.png",
    "phones_edited.png",
    "phones_edited.png"
  ];

  const gallery = document.getElementById("gallery");

  images.forEach((file) => {
    const img = document.createElement("img");
    img.src = `images/${file}`;
    img.alt = file;
    gallery.appendChild(img);
  });
