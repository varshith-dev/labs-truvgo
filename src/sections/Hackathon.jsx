import { motion } from 'framer-motion';
import { Card } from 'sketchbook-ui';

const hackathonActivities = [
  {
    icon: '🚀',
    title: 'Rapid Prototyping',
    description: 'Build functional prototypes in 48 hours with cutting-edge tech stacks and creative problem-solving.'
  },
  {
    icon: '⚡',
    title: 'Innovation Sprints',
    description: 'Collaborative development sessions focused on experimental ideas and breakthrough solutions.'
  },
  {
    icon: '🎯',
    title: 'Product Development',
    description: 'Transform hackathon ideas into market-ready products with full-stack engineering.'
  },
  {
    icon: '🔧',
    title: 'Tech Stack Exploration',
    description: 'Experiment with emerging technologies and tools to stay at the forefront of innovation.'
  },
  {
    icon: '🌐',
    title: 'Global Collaboration',
    description: 'Partner with innovators worldwide to create impactful digital solutions.'
  },
  {
    icon: '💡',
    title: 'Idea-to-Reality',
    description: 'Convert raw ideas into polished, deployable software systems.'
  }
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5 }
  })
};

export default function Hackathon() {
  return (
    <section style={{ padding: '4rem 2rem', background: 'linear-gradient(135deg, #050813 0%, rgba(20, 30, 60, 0.8) 100%)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <motion.div
          style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ color: '#ff2d95', marginBottom: '1rem' }}>Innovation & Hackathons</h2>
          <p style={{ color: '#a0aec0' }}>Building the future through creative engineering and rapid iteration</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {hackathonActivities.map((activity, i) => (
            <motion.div
              key={activity.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card style={{ padding: '1.5rem', background: 'rgba(15, 25, 50, 0.6)', borderRadius: '0.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{activity.icon}</div>
                <h3 style={{ color: '#ff2d95', marginBottom: '0.5rem' }}>{activity.title}</h3>
                <p style={{ color: '#a0aec0', fontSize: '0.9rem' }}>{activity.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
