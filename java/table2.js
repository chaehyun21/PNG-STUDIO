document.addEventListener("DOMContentLoaded", function() {
    var rows = document.querySelectorAll("tr");

    for (var i = 1; i < rows.length; i++) {
        rows[i].addEventListener("mouseover", function() {
            this.style.backgroundColor = "#fff";
            this.style.color = "#000";
            this.classList.add("expanded");

            // 데이터 속성에서 이미지 경로 가져오기
            var imageSrc = this.getAttribute("data-image");

            // 두 번째 td 요소에 이미지를 추가
            var secondTd = this.querySelector("td:nth-child(2)");
            var imageDiv = document.createElement("div");
            imageDiv.className = "image-div";
            var image = document.createElement("img");
            image.src = imageSrc; // 데이터 속성에서 가져온 이미지 경로 설정
            imageDiv.appendChild(image);
            secondTd.appendChild(imageDiv);

            // 데이터 속성에서 링크 가져오기
            var link = this.getAttribute("data-link");

            // 클릭 이벤트를 추가하여 해당 링크로 이동
            this.addEventListener("click", function() {
                window.location.href = link;
            });
        });

        rows[i].addEventListener("mouseout", function() {
            this.style.backgroundColor = "";
            this.style.color = "";
            this.classList.remove("expanded");

            // 이미지를 삭제
            var imageDiv = this.querySelector(".image-div");
            if (imageDiv) {
                imageDiv.remove();
            }

            // 클릭 이벤트 제거
            this.removeEventListener("click", function() {
                window.location.href = link;
            });
        });
    }
});

"/image/leeufan.jpg";