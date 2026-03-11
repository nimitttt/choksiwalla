const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

function encodeFormData(formData) {
  return new URLSearchParams(formData).toString();
}

if (form && formStatus) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    formStatus.textContent = "Sending your message...";
    formStatus.className = "form-status pending";

    try {
      const formData = new FormData(form);
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData(formData)
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      formStatus.textContent = "Thank you! Your query has been submitted successfully.";
      formStatus.className = "form-status success";
    } catch (error) {
      formStatus.textContent = "Could not submit now. Please call us directly on the listed numbers.";
      formStatus.className = "form-status error";
    }
  });
}