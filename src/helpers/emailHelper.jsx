import emailjs from '@emailjs/browser';

export const sendEmail = async (formRef) => {
  try {
    const formElement = formRef.current;
    console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    if (formElement) {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      formElement.reset();
    } else {
      console.error('Form reference is not valid.');
    }
  } catch (error) {
    console.log(error);
  }
};
