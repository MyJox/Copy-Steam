var i = 1;
var tp = 0;
var arr = ['面条人', '面条人', '古剑奇谭网络版', 'CS:GO', '了不起的修仙模拟器']
var rma = ['88.00', '88.00', '128.00', '96.00', '254.00', '312.00']
var img = document.getElementById("main-bottom-img-do");
var title = document.getElementById("main-bottom-main-title")
var rmb = document.getElementById("main-bottom-main-rmb")

var img1 = document.getElementById("img-img1")
var img2 = document.getElementById("img-img2")
var img3 = document.getElementById("img-img3")
var img4 = document.getElementById("img-img4")

setInterval(function() {
	if(i>=5) i=1
		img.style.backgroundImage = "url(img/img"+i+".jpg)";
		title.innerHTML = arr[i];
		rmb.innerHTML = rma[i];
		i++;
}, 5000)

img1.onmousemove = function() {
	img.style.backgroundImage = "url(img/img1.jpg)";
	title.innerHTML = arr[1];
	rmb.innerHTML = rma[1];
}
img2.onmousemove = function() {
	img.style.backgroundImage = "url(img/img2.jpg)";
	title.innerHTML = arr[2];
	rmb.innerHTML = rma[2];
}
img3.onmousemove = function() {
	img.style.backgroundImage = "url(img/img3.jpg)";
	title.innerHTML = arr[3];
	rmb.innerHTML = rma[3];
}
img4.onmousemove = function() {
	img.style.backgroundImage = "url(img/img4.jpg)";
	title.innerHTML = arr[4];
	rmb.innerHTML = rma[4];
}