const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>",
		"src": "assets/images/slideshow/slide1.jpg"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>",
		"src": "assets/images/slideshow/slide2.jpg"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>",
		"src": "assets/images/slideshow/slide3.jpg"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>",
		"src": "assets/images/slideshow/slide4.png"
	}
];


let indexBanner = 0; 
const arrowLeft = document.getElementById("bannerLeftArrow");
const arrowRight = document.getElementById("bannerRightArrow");
const bannerImage = document.getElementById("banner-img")
const dotBanner0 = document.getElementById('circleWhiteDotSlider0')
const dotBanner1 = document.getElementById('circleWhiteDotSlider1')
const dotBanner2 = document.getElementById('circleWhiteDotSlider2')
const dotBanner3 = document.getElementById('circleWhiteDotSlider3')

function dotsActiveBanner() {
	if (indexBanner == 0) {
		dotBanner0.style.background="white"
		dotBanner1.style.background="none"
		dotBanner2.style.background="none"
		dotBanner3.style.background="none"
	} else if ( indexBanner == 1) {
		dotBanner1.style.background="white"
		dotBanner0.style.background="none"
		dotBanner2.style.background="none"
		dotBanner3.style.background="none"
	} else if (indexBanner == 2) {
		dotBanner2.style.background="white"
		dotBanner1.style.background="none"
		dotBanner0.style.background="none"
		dotBanner3.style.background="none"
	} else if ( indexBanner == 3) {
		dotBanner3.style.background="white"
		dotBanner1.style.background="none"
		dotBanner2.style.background="none"
		dotBanner0.style.background="none"
	}
}

function bannerArrowLeftIsClicked() {
	dotsActiveBanner();
	if (indexBanner != 0) {
		 indexBanner = indexBanner - 1;
	} else {
		 indexBanner = 3;
	}
};

function bannerArrowRightIsClicked() {
	console.log("timer working")
	console.log(indexBanner);
	dotsActiveBanner();
	if (indexBanner != 3) {
		indexBanner = indexBanner + 1;
		console.log("not 0");
		console.log(indexBanner);
	} else {
		indexBanner = 0;
	}
	bannerImage.src=slides[indexBanner].src;
};

window.onload = function() {
	indexBanner = 1;
	dotBanner0.style.background="white"
	console.log(indexBanner);
	setInterval(() => bannerArrowRightIsClicked() , 4000);
};


arrowLeft.addEventListener("click", 
	function left(){
	bannerArrowLeftIsClicked();
	alert('LeftOk');
	console.log('OkLeftConsole');
	console.log(indexBanner);
	bannerImage.src=slides[indexBanner].src;
});

arrowRight.addEventListener("click",
	 function right(){
		bannerArrowRightIsClicked();
		alert('RightOk');
		console.log('OkRightConsole');
		console.log(indexBanner);
});

// bannerImage.src=slides[indexBanner][0];
// dotsActiveBanner();