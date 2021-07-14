var MainImg = document.getElementById("bigImg");
var FeatureImg = document.getElementsByClassName("smallImg");

FeatureImg[0].onclick = function () {
    MainImg.src = FeatureImg[0].src;
};
FeatureImg[1].onclick = function () {
    MainImg.src = FeatureImg[1].src;
};
FeatureImg[2].onclick = function () {
    MainImg.src = FeatureImg[2].src;
};
FeatureImg[3].onclick = function () {
    MainImg.src = FeatureImg[3].src;
};