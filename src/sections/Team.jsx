import { motion } from 'framer-motion';
import { Card, Badge } from 'sketchbook-ui';

const teamMembers = [
  {
    name: 'Varshith',
    role: 'CEO & Founder',
    description: 'Visionary founder leading the TWISTEMS ecosystem, software initiatives, innovation strategy, startup direction, and technical growth.'
  },
  {
    name: 'Shanmuka Priya',
    role: 'Co-Founder',
    description: 'Strategic co-founder contributing to organizational development, collaboration, planning, and startup execution.'
  },
  {
    name: 'Jayanth',
    role: 'UI/UX Developer',
    description: 'Design-focused developer responsible for user interfaces, interaction systems, creative experiences, and visual product engineering.'
  },
  {
    name: 'Rajveera',
    role: 'CI/CD, Testing & Deployment',
    description: 'Handles testing workflows, CI/CD pipelines, deployment systems, software reliability, and development stability.'
  },
  {
    name: 'Lithin',
    role: 'Resource Planner, R&D & Feature Developer',
    description: 'Focused on research, planning, feature innovation, development strategy, and future-oriented experimentation.'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 }
  })
};

export default function Team() {
  return (
    <section style={{ padding: '4rem 2rem', background: 'linear-gradient(180deg, rgba(20, 30, 60, 0.6) 0%, #0a0e27 100%)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div
          style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ color: '#00fff0', marginBottom: '1rem' }}>The Core Team</h2>
          <p style={{ color: '#a0aec0' }}>Visionary leaders and talented engineers building the future</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              whileHover={{ y: -10 }}
            >
              <Card style={{ padding: '2rem', textAlign: 'center', background: 'rgba(15, 25, 50, 0.6)', borderRadius: '0.75rem' }}>
                <div style={{ fontSize: '1.3rem', fontWeight: 900, marginBottom: '0.5rem', color: '#ffffff' }}>{member.name}</div>
                <Badge style={{ display: 'block', margin: '0.5rem 0', fontSize: '0.85rem', color: '#00fff0', fontWeight: 700, textTransform: 'uppercase' }}>
                  {member.role}
                </Badge>
                <p style={{ color: '#a0aec0', lineHeight: 1.7, fontSize: '0.9rem' }}>{member.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
