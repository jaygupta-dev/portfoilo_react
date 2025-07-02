$(document).ready(function () {
    $(".project-detail-content").each(function () {
        const container = $(this);
        const imageList = JSON.parse(container.find(".image-list-data").val());
        let currentIndex = 0;

        // Show image at given index inside this container
        function showImage(index) {
            const path = hostUrl + "Images/Project/" + imageList[index];
            container.find(".project-slider-image").attr("src", path);
        }

        // Go to next image and show it
        function nextImage() {
            currentIndex = (currentIndex + 1) % imageList.length;
            showImage(currentIndex);
        }

        // Go to previous image and show it
        function prevImage() {
            currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
            showImage(currentIndex);
        }

        container.find(".nextBtn").on("click", nextImage);
        container.find(".prevBtn").on("click", prevImage);

        showImage(currentIndex); // Initial load
    });
});


let arr = ["News", "Article", "Blog"];
let i = 0;

window.setInterval(function () {
    $("#news .article-type-change").text(arr[i]);
    i = (i + 1) % arr.length;
}, 1000);

