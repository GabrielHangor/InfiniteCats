

const count = 10,
      apiKey = "yGS6PC5SN5izg-jNC1-j3fp1IOlTYPEulZaA613EoE8",
      apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


// Fetch photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {

  }
}



// On load
getPhotos();