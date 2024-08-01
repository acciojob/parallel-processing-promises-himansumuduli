//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downlordImage(image) {
	return new Promise((resolve,reject) =>{
		const img = new Image();
		img.onload =() => resolve(img)
		img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url} `))
        img.src = image.url
	})
	
}

function displayImages(images) {
	images.forEach(img => output.appendChild(img));
	
}

btn.addEventListener('click',() =>{
	const downlordPromises = images.map((image) => downlordImage(image));
Promise.all(downlordPromises)
	.then(displayImages)
	// .then((images) => displayImages(images))
	.catch(error => console.log(error))
})


