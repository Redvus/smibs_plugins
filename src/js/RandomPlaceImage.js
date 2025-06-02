// import {gsap} from "gsap";

class RandomPlaceImage {

	constructor(
		placeImage,
		placeImageName,
		placeLink) {
		this.placeImage = placeImage || 'https://picsum.photos/200/300/';
		this.placeImageName = placeImageName || 'Random Place Image';
		this.placeLink = placeLink;
		this.initLayout();
		this.initPosition();
		this.initResize();
	}

	initLayout() {
		this.wrapper = document.querySelector('.wrapper');
		this.imageContainer = document.createElement('a');
		this.imageContainer.className = 'random__image';
		this.imageContainer.href = this.placeLink || '#';
		this.imageContainer.target = '_blank';

		this.imageContainer.innerHTML = `
			<picture class="random__image_inside">
				<img src="${this.placeImage}" alt="${this.placeImageName}">
			</picture>
		`;

		this.wrapper.appendChild(this.imageContainer);

		// let timerId = setInterval(() => {
		// 	this.wrapper.appendChild(this.imageContainer);
		// }, 5000);

		// setTimeout(() => {
		// 	clearInterval(timerId);
		// 	this.wrapper.removeChild(this.imageContainer);
		//  }, 7000);
	}

	initPosition() {
		let imagePosX = Math.random() * (window.innerWidth - 600);
		let imagePosY = Math.random() * (window.innerHeight - 500);

		if (imagePosX < 0) imagePosX = 0;
		if (imagePosY < 0) imagePosY = 0;

		if (imagePosX > window.innerWidth - 600) imagePosX = window.innerWidth - 600;
		if (imagePosY > window.innerHeight - 500) imagePosY = window.innerHeight - 500;

		this.imageContainer.style.left = `${imagePosX}px`;
		this.imageContainer.style.top = `${imagePosY}px`;
	}

	initResize() {
		this.imageContainer.addEventListener('mouseover', () => {
			this.imageContainer.style.transform = 'scale(1)';
		});
		this.imageContainer.addEventListener('mouseout', () => {
			this.imageContainer.style.transform = 'scale(0.15)';
		});
	}
}

export { RandomPlaceImage };