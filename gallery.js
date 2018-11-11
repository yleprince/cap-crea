function create_gallery_item(filename, img_class) {
	const gallery_item = document.createElement("div");
	gallery_item.classList.add("gallery-item");
	gallery_item.classList.add(img_class);

	const gallery_img = document.createElement('img');
	gallery_img.classList.add("gallery-img");
	gallery_img.setAttribute("id", filename.split(".")[0]);
	gallery_img.src = `images/gallery_light/${filename}`;

	gallery_item.appendChild(gallery_img);
	return gallery_item;
}

const imgs = [
	{ path:"1_1_IMG_9053.JPG", style: "big_img"},
	{ path:"1_2_DSC06439.JPG", style: "tall_img"},
	{ path:"1_2_IMG_9240.JPG", style: "tall_img"},
	{ path:"1_1_IMG_9019.JPG", style: "normal_img"},
	{ path:"1_2_IMG_9245.JPG", style: "tall_img"},
	{ path:"1_1_IMG_9039.JPG", style: "normal_img"},
	{ path:"3_1_IMG_8280.JPG", style: "wide_img"},
	{ path:"1_2_DSC06445.JPG", style: "tall_img"},
	{ path:"1_1_IMG_9134.JPG", style: "big_img"},
	{ path:"1_1_IMG_9142.JPG", style: "normal_img"},
	{ path:"1_1_IMG_8991.JPG", style: "normal_img"},
	{ path:"1_1_IMG_9153.JPG", style: "normal_img"},
	{ path:"3_1_IMG_7537.JPG", style: "wide_img"},
	{ path:"1_1_IMG_9268.JPG", style: "big_img"},
	{ path:"1_1_IMG_9164.JPG", style: "normal_img"},
	{ path:"1_1_IMG_9165.JPG", style: "normal_img"},
	{ path:"1_2_IMG_9285.JPG", style: "tall_img"},
	{ path:"1_1_IMG_9173.JPG", style: "normal_img"},
	{ path:"1_2_IMG_7516.JPG", style: "tall_img"},
	{ path:"1_1_IMG_9149.JPG", style: "normal_img"},
	{ path:"3_2_IMG_7569.JPG", style: "ratio_3_2"},
	{ path:"1_2_IMG_9224.JPG", style: "tall_img"},
	{ path:"1_2_IMG_9217.JPG", style: "tall_img"},
	{ path:"1_2_IMG_9263.JPG", style: "tall_img"},
	{ path:"3_1_IMG_9112.JPG", style: "wide_img"},
	{ path:"1_1_IMG_9071.JPG", style: "normal_img"},
	{ path:"1_1_IMG_9074.JPG", style: "normal_img"},
	{ path:"1_1_IMG_9294.JPG", style: "normal_img"}
];

setTimeout(function() {
 	document.getElementById("cover_div").style.backgroundImage = "url('images/cover.jpg')"; 
}, 1000);

imgs.map((img) => gallery.appendChild(create_gallery_item(img.path, img.style)));

let heavy_imgs = imgs.map((img) => {
	const heavy = document.createElement('img');
	heavy.id = `h_${img.path}`;
	heavy.classList.add(img.style);
	return {target: img.path, img:heavy};
}
);

heavy_imgs.map((h) => {
	h.img.onload = function () {
		document.getElementById(h.target.split('.')[0]).src = this.src;
	};

	setTimeout(function() {
		h.img.src = `images/gallery/${h.target}`;
	}, 1000);
});

// let diversity_h = document.createElement('img');
// diversity_h.onload = function() {
// 	document.getElementById("diversity").src = this.src
// }
// setTimeout(function() {
// 	diversity_h.src = 'images/diversity.jpg';
// }, 100);

// let flag_h = document.createElement('img');
// flag_h.onload = function() {
// 	document.getElementById("flag").src = this.src
// }
// setTimeout(function() {
// 	flag_h.src = 'images/flag.jpg';
// }, 100);

// let tree_h = document.createElement('img');
// tree_h.onload = function() {
// 	document.getElementById("tree").src = this.src
// }
// setTimeout(function() {
// 	tree_h.src = 'images/tree.jpg';
// }, 100);
