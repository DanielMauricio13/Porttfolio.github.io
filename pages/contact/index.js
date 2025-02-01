import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    emailjs
      .send(
        'service_iqvsv3g', // Replace with your actual service ID
        'template_k0n80q6', // Replace with your actual template ID
        {
          from_name: formData.name, // Map your form data here
          to_name: 'Your Name or Company', // Replace with the recipient name
          message: formData.message, // Map your form data
          reply_to: formData.email, // Reply-to email address
        },
        'Iz5koD1KkKn9FBjvq' // Replace with your public key
      )
      .then(
        (result) => {
          console.log('Email sent:', result);
          setFormStatus('Message sent successfully!');
          setIsSubmitting(false);
          setFormData({ name: '', email: '', subject: '', message: '' }); // Reset the form
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setFormStatus(`Error: ${error.text || 'Message could not be sent.'}`);
          setIsSubmitting(false);
        }
      );
  };
  


  return (
    <div className="h-full bg-gradient-to-br from-[#161616] to-[#212717]">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            We can <span>connect.</span>
          </motion.h2>
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="input"
                required
                aria-label="Your Name"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                required
                aria-label="Your Email"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="input"
              required
              aria-label="Email Subject"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="textarea"
              required
              aria-label="Your Message"
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all 
              duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={isSubmitting}
              aria-label="Send Message"
            >
              <span
                className="group-hover:-translate-y-[120%] group-hover:opacity-0 
                transition-all duration-500"
              >
                {isSubmitting ? 'Sending...' : 'We can talk'}
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex 
                group-hover:-translate-y-0 group-hover:opacity-100
                transition-all duration-300 absolute text-[22px]"
              />
            </button>
          </motion.form>
          {formStatus && (
            <div className="mt-4 text-center text-white">
              <p>{formStatus}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
