window.onload = function () {
  //1
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myImg");
  var modalImg = document.getElementById("img01");
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  //2
  var modal = document.getElementById("myModal1");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myImg1");
  var modalImg = document.getElementById("img02");
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };

  // Get the <span> element that closes the modal
  var span1 = document.getElementsByClassName("close")[1];

  // When the user clicks on <span> (x), close the modal
  span1.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  //3
  var modal = document.getElementById("myModal2");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myImg2");
  var modalImg = document.getElementById("img03");
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };

  // Get the <span> element that closes the modal
  var span2 = document.getElementsByClassName("close")[2];

  // When the user clicks on <span> (x), close the modal
  span2.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute("href");

      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  let btn = document.querySelector("#button");
  //
  function magic() {
    if (window.pageYOffset > 951) {
      btn.style.opacity = "1";
    } else {
      btn.style.opacity = "0";
    }
  }
  //
  btn.onclick = function () {
    window.scrollTo(0, 0);
  };

  // When scrolling, we run the function
  window.onscroll = magic;
};
