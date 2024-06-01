var ninde = document.getElementById("nindeshandian")
var sdian = document.getElementById("sdian-none-zhuye")
var luelan = document.getElementById("luelan")
var youxi = document.getElementById("sdian-none-youxi")

var qbuquxiao = document.getElementById("qbuquxiao")

ninde.onmousemove = function() {
	sdian.style['display'] = "block"
	youxi.style['display'] = "none"
}
luelan.onmousemove = function() {
	youxi.style['display'] = "block"
	sdian.style['display'] = "none"
}

sdian.onmouseleave = function() {
	sdian.style['display'] = "none"
}
youxi.onmouseleave = function() {
	youxi.style['display'] = "none"
}

qbuquxiao.onmousemove = function() {
	sdian.style['display'] = "none"
	youxi.style['display'] = "none"
}