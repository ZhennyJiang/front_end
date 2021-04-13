window.onload = function () {
  var goods_show = document.querySelector(".goods_show");
  var mask = document.querySelector(".mask");
  var big = this.document.querySelector(".big");
  var bigImg = document.querySelector(".bigImg");
  goods_show.addEventListener("mouseover", function (e) {
    mask.style.display = "block";
  });
  goods_show.addEventListener("mousemove", function (e) {
    var x = null;
    var y = null;
    var moveX = this.offsetWidth - mask.offsetWidth; //mask的可移动距离
    var moveY = this.offsetHeight - mask.offsetHeight; //mask的可移动距离
    x = e.pageX - this.offsetLeft - mask.offsetWidth / 2;
    y = e.pageY - this.offsetTop - mask.offsetHeight / 2;
    x = x < 0 ? 0 : x;
    x = x > moveX - 4 ? moveX - 4 : x;
    y = y < 0 ? 0 : y;
    y = y > moveY - 4 ? moveY - 4 : y;

    mask.style.left = x + "px";
    mask.style.top = y + "px";
    bigX = bigImg.offsetWidth - big.offsetWidth; //大图片的可移动距离
    bigY = bigImg.offsetHeight - big.offsetHeight; //大图片的可移动距离

    bigImg.style.left = -(x * bigX) / moveX + "px";
    bigImg.style.top = -(y * bigY) / moveY + "px";
  });

  goods_show.addEventListener("mouseout", function (e) {
    mask.style.display = "none";
  });
};
