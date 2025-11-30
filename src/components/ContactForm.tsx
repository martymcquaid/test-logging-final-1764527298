import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Message sent from ${name}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" className="border rounded p-2 mb-4 w-full" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" className="border rounded p-2 mb-4 w-full" required />
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" className="border rounded p-2 mb-4 w-full" rows={4} required></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send Message</button>
    </form>
  );
};

export default ContactForm;