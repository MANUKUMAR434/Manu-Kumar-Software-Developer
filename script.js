document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");

    const updateHeader = () => {
        header.classList.toggle("is-scrolled", window.scrollY > 20);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    const photoUpload = document.querySelector("#photo-upload");
    const resumeUpload = document.querySelector("#resume-upload");
    const profilePreview = document.querySelector("#profile-preview");
    const resumeLink = document.querySelector("a[download]");

    photoUpload.addEventListener("change", () => {
        const [photo] = photoUpload.files;
        if (photo) profilePreview.src = URL.createObjectURL(photo);
    });

    resumeUpload.addEventListener("change", () => {
        const [resume] = resumeUpload.files;
        if (resume) {
            resumeLink.href = URL.createObjectURL(resume);
            resumeLink.textContent = `Download ${resume.name} `;
            const arrow = document.createElement("span");
            arrow.setAttribute("aria-hidden", "true");
            arrow.textContent = "↓";
            resumeLink.appendChild(arrow);
        }
    });
});