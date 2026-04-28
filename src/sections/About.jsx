import { motion } from 'framer-motion';
import { Card, Badge } from 'sketchbook-ui';

export default function About() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.6 }
    })
  };

  return (
    <section style={{ padding: '4rem 2rem', background: 'linear-gradient(180deg, #0a0e27 0%, rgba(20, 30, 60, 0.6) 100%)' }}>
      <motion.div
        style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div custom={0} variants={fadeInVariants}>
          <h2 style={{ color: '#00fff0', marginBottom: '2rem', fontSize: '2rem' }}>Who We Are</h2>
          <p style={{ color: '#a0aec0', marginBottom: '1.5rem' }}>
            TWISTEMS is a collaborative software engineering collective dedicated to building the future through innovation, experimentation, and creative problem-solving.
          </p>
          <p style={{ color: '#a0aec0' }}>
            We are an active hackathon participant, startup builder, and technological experimentation lab. We focus on rapid prototyping, scalable product engineering, and pushing the boundaries of what's possible in software.
          </p>
        </motion.div>

        <motion.div custom={1} variants={fadeInVariants} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {[
            { title: '🚀 Startup Building', desc: 'From idea to product, we build startups with a focus on innovation and impact.' },
            { title: '⚡ Hackathon-Driven', desc: 'Rapid iteration and creative solutions define our approach.' },
            { title: '🛠️ Engineering Excellence', desc: 'High-quality code, robust architecture, reliable pipelines.' },
            { title: '🎨 Design-First', desc: 'Beautiful, intuitive interfaces that users love.' }
          ].map((feature, i) => (
            <motion.div custom={i + 2} variants={fadeInVariants} key={feature.title}>
              <Card style={{ padding: '1.5rem', background: 'rgba(15, 25, 50, 0.6)', borderRadius: '0.5rem' }}>
                <h3 style={{ color: '#00fff0', marginBottom: '0.5rem' }}>{feature.title}</h3>
                <p style={{ color: '#a0aec0', fontSize: '0.9rem' }}>{feature.desc}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
