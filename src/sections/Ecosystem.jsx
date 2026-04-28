import { motion } from 'framer-motion';
import { Card } from 'sketchbook-ui';

const ecosystemItems = [
  { title: 'Frontend Engineering', desc: 'React, Vue, modern UI frameworks and cutting-edge web technologies' },
  { title: 'Backend Systems', desc: 'Scalable APIs, microservices, cloud infrastructure, database design' },
  { title: 'CI/CD Pipelines', desc: 'Automated testing, deployment workflows, continuous integration' },
  { title: 'UI/UX Design', desc: 'Interaction design, user research, design systems, accessibility' },
  { title: 'R&D Laboratory', desc: 'Experimental tech exploration, emerging tech adoption, innovation lab' },
  { title: 'Startup Framework', desc: 'Product strategy, go-to-market, business model experimentation' }
];

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.5 }
  })
};

export default function Ecosystem() {
  return (
    <section style={{ padding: '4rem 2rem', background: 'linear-gradient(180deg, #0a0e27 0%, rgba(20, 30, 60, 0.6) 100%)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div
          style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ color: '#7c3aed', marginBottom: '1rem' }}>Development Ecosystem</h2>
          <p style={{ color: '#a0aec0' }}>Our comprehensive technology and innovation infrastructure</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {ecosystemItems.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={itemVariants}
              whileHover={{ scale: 1.08 }}
            >
              <Card style={{ padding: '1.5rem', textAlign: 'center', background: 'rgba(15, 25, 50, 0.6)', borderRadius: '0.5rem' }}>
                <h3 style={{ color: '#00fff0', marginBottom: '0.5rem', fontSize: '1.1rem' }}>{item.title}</h3>
                <p style={{ color: '#a0aec0', fontSize: '0.85rem' }}>{item.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
