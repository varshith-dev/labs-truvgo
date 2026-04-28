import { motion } from 'framer-motion';
import { Button, Card } from 'sketchbook-ui';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section style={{ padding: '4rem 2rem', background: 'linear-gradient(180deg, #0a0e27 0%, rgba(20, 30, 60, 0.8) 100%)' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', width: '100%' }}>
        <motion.div
          style={{ textAlign: 'center', marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ color: '#00fff0', marginBottom: '1rem' }}>Let's Build Together</h2>
          <p style={{ color: '#a0aec0' }}>Join us in creating the future of innovation</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Card style={{ padding: '2rem', background: 'rgba(15, 25, 50, 0.6)', borderRadius: '0.75rem' }}>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#00fff0', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    background: 'rgba(15, 25, 50, 0.8)',
                    border: '1px solid rgba(0, 255, 240, 0.1)',
                    borderRadius: '0.4rem',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#00fff0', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    background: 'rgba(15, 25, 50, 0.8)',
                    border: '1px solid rgba(0, 255, 240, 0.1)',
                    borderRadius: '0.4rem',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: '#00fff0', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your idea or collaboration..."
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    background: 'rgba(15, 25, 50, 0.8)',
                    border: '1px solid rgba(0, 255, 240, 0.1)',
                    borderRadius: '0.4rem',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    fontFamily: 'inherit',
                    minHeight: '120px',
                    resize: 'vertical'
                  }}
                />
              </div>

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button primary style={{ width: '100%' }} type="submit">
                  {submitted ? '✓ Message Sent' : 'Send Message'}
                </Button>
              </motion.div>
            </form>
          </Card>
        </motion.div>

        <motion.div
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            fontSize: '1.1rem',
            fontWeight: 700,
            color: '#00fff0',
            textShadow: '0 0 10px rgba(0, 255, 240, 0.3)'
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Collaborate. Innovate. Engineer the Future.
        </motion.div>
      </div>
    </section>
  );
}
