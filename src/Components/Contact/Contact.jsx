import "./Contact.css"

const Contact = () => {
      return (
        <section id="contact" className="max-w-5xl mx-auto my-20 p-6 text-center">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-gray-700 mt-2">Feel free to reach out via email.</p>
          <a href="mailto:your.email@example.com" className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-md">
            Email Me
          </a>
        </section>
      );
    };
    
    export default Contact;
    