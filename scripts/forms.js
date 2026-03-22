(() => {
  const forms = Array.from(document.querySelectorAll("form[data-form-recipient]"));

  if (!forms.length) {
    return;
  }

  const buildBody = (form) =>
    Array.from(new FormData(form).entries())
      .map(([name, value]) => `${name}: ${String(value).trim()}`)
      .join("\n");

  const showStatus = (form, message, type) => {
    const status = form.querySelector("[data-form-status]");

    if (!status) {
      return;
    }

    status.textContent = message;
    status.hidden = false;
    status.dataset.state = type;
  };

  forms.forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      if (!form.reportValidity()) {
        return;
      }

      const recipient = form.dataset.formRecipient;
      const subject = form.dataset.formSubject || "Website Inquiry";
      const body = buildBody(form);
      const mailto = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(body);
        }
      } catch (error) {
        // Clipboard access can fail in some browsers; the email draft is the main path.
      }

      showStatus(
        form,
        "Your email draft is opening. If it doesn't, your message details are ready to copy from the form.",
        "success"
      );

      window.location.href = mailto;
    });
  });
})();
