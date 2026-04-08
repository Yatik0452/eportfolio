import internship from '/internship.png'

const cards = [
  {
    q: 'Before your work experience, how did you see yourself professionally?',
    body: [
      'Before my internship, I saw myself primarily as a student learning technical concepts in a structured academic environment. My understanding of professional work was shaped by university projects: tasks with clear instructions, defined assessment criteria, and a known solution space. I expected to observe experienced developers and contribute to small guided tasks.',
      'My professional identity was passive. I was a learner accumulating knowledge, not yet someone who could take ownership of a technical system or make independent engineering decisions.',
    ],
  },
  {
    q: 'During your work experience, what did you do and what challenges did you face?',
    body: [
      'At Lume Interactive, I was responsible for designing relational database schemas and executing SQL queries within PostgreSQL. This meant defining primary and foreign keys, enforcing referential integrity, and validating datasets before production use.',
      'The core challenge was the absence of step-by-step instructions. I had to analyse requirements independently, research solutions, and clarify ambiguities with team members. A concrete example was identifying four data entry inconsistencies during validation; catching and resolving these before deployment required both precision and the confidence to flag issues proactively.',
    ],
  },
  {
    q: 'How did this experience reshape your professional identity?',
    body: [
      'This experience fundamentally shifted how I see myself as an engineer. I no longer identify as a student completing tasks. I now see myself as a developing data engineer capable of designing structured systems and contributing meaningfully to real applications with real consequences.',
      'I learned that technical ability alone is insufficient. Explaining design decisions, validating assumptions before acting, and aligning work with team objectives are equally critical. The internship confirmed my career direction toward data engineering, where structured thinking and understanding business context are essential.',
    ],
  },
  {
    q: 'What is your value proposition to an employer, and how do you demonstrate it?',
    body: [
      'I bring strong foundations in relational database design, structured problem-solving, and cloud-based data handling, combined with the initiative and reliability to work independently under ambiguity.',
      'I demonstrate this through tangible outcomes: schemas enforcing integrity across multi-entity systems, SQL queries consolidating complex reporting logic, and resolving four dataset inconsistencies before production deployment. Beyond technical competence, two years teaching programming and two years coordinating operations have given me the communication skills to translate technical decisions into accessible language for any stakeholder.',
    ],
  },
]

export default function Reflection() {
  return (
    <section id="reflection">
      <h2 className="sec-title">Reflection</h2>

      <div className="internship-photo-strip">
        <img src={internship} alt="Internship team at Lume Interactive" />
        <p className="strip-cap">Internship team · Lume Interactive · 2025</p>
      </div>

      <div className="reflection-grid">
        {cards.map(({ q, body }) => (
          <div className="r-card" key={q}>
            <p className="r-card-q">{q}</p>
            <div className="r-card-body">
              {body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
