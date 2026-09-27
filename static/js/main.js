// main.js — students will add JavaScript here as features are built

(function () {
    const VIDEO_ID = "dQw4w9WgXcQ"; // placeholder — swap for the real demo video
    const openBtn = document.getElementById("how-it-works-btn");
    const modal = document.getElementById("video-modal");
    if (!openBtn || !modal) return;

    const iframe = document.getElementById("video-modal-iframe");
    const closeBtn = document.getElementById("video-modal-close");
    const backdrop = document.getElementById("video-modal-backdrop");

    function openModal() {
        iframe.src = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1`;
        modal.hidden = false;
    }

    function closeModal() {
        modal.hidden = true;
        iframe.src = "";
    }

    openBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);
    backdrop.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !modal.hidden) closeModal();
    });
})();
