// 마우스 이벤트로 커서 애니메이션 토글
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// 커서 애니메이션 토글
document.addEventListener("mouseenter", () => {
    cursor.classList.add("cursor-animation");
});

document.addEventListener("mouseleave", () => {
    cursor.classList.remove("cursor-animation");
});
