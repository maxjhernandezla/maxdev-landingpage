import emailjs from '@emailjs/browser';

export const sendEmail = async (formRef) => {
  try {
    const formElement = formRef.current;

    if (formElement) {
      const inputs = formElement.querySelectorAll('input, textarea');
      let hasEmptyField = false;

      inputs.forEach((input) => {
        if (!input.value.trim()) {
          hasEmptyField = true;
        }
      });

      if (hasEmptyField) {
        console.error('Hay campos vacíos. El formulario no será enviado.');
        return;
      }

      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      formElement.reset();
    } else {
      console.error('La referencia al formulario no es válida.');
    }
  } catch (error) {
    console.log(error);
  }
};
