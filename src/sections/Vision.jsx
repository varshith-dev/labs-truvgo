import { motion } from 'framer-motion';
import { Card } from 'sketchbook-ui';

const visionPillars = [
  {
    title: 'Ambitious Startups',
    description: 'Build the next generation of innovative companies that solve real problems.'
  },
  {
    title: 'Scalable Software',
    description: 'Engineer systems designed for global scale and reliable performance.'
  },
  {
    title: 'Futuristic Tech',
    description: 'Explore and adopt emerging technologies that shape the future.'
  }
];

export default function Vision() {
  return (
    <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, rgba(20, 30, 60, 0.6) 0%, #050813 100%)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <motion.h2
          style={{ color: '#00fff0', marginBottom: '2rem' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Vision
        </motion.h2>

        <motion.p
          style={{ fontSize: '1.3rem', lineHeight: 2, marginBottom: '2rem', color: '#ffffff' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          To become a globally recognized innovation collective building transformative digital systems,
          creating impactful startups, and pushing the boundaries of software engineering excellence.
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginTop: '2rem' }}>
          {visionPillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <Card style={{ padding: '1.5rem', background: 'rgba(15, 25, 50, 0.6)', borderRadius: '0.5rem' }}>
                <h3 style={{ color: '#ff2d95', marginBottom: '0.5rem' }}>{pillar.title}</h3>
                <p style={{ color: '#a0aec0', fontSize: '0.9rem' }}>{pillar.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
