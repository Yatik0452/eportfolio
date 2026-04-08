import avatar from '/avatar.jpg'

export default function Landing() {
  return (
    <section id="landing">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.4rem', marginBottom: '1rem' }}>
        <img
          src={avatar}
          alt="Yatik Juneja"
          style={{ width: 'clamp(52px,6vw,68px)', height: 'clamp(52px,6vw,68px)', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--ink-faint)' }}
        />
        <h1 className="landing-name" style={{ marginBottom: 0 }}>Yatik Juneja</h1>
      </div>
      <p className="landing-role">Software Engineering Student · UTS</p>
      <div className="landing-body">
        <p>
          I am a final-year Software Engineering student at the University of Technology Sydney,
          specialising in Data Analytics and Visualisation. My work sits at the intersection of
          structured data systems, cloud infrastructure, and practical application development.
        </p>
        <p>
          This portfolio documents my technical experience, professional reflections, and career direction
          as I transition from academic study into the data engineering field.
        </p>
      </div>
      <div className="stats-band">
        <div className="stat-item"><span className="stat-n">85</span><span className="stat-l">Current WAM</span></div>
        <div className="stat-item"><span className="stat-n">1st</span><span className="stat-l">UTS iOS Hackathon 2025</span></div>
<div className="stat-item"><span className="stat-n">Nov '26</span><span className="stat-l">Graduating</span></div>
      </div>
    </section>
  )
}
