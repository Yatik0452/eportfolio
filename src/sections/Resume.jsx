import hackathon from '/hackathon.jpg'
import certificate from '/certificate.png'

export default function Resume({ onImgClick }) {
  return (
    <section id="resume">
      <h2 className="sec-title">Resume</h2>

      <p className="resume-section-label">Education</p>
      <div className="rentry">
        <div className="rentry-top">
          <span className="rentry-title">Bachelor of Software Engineering</span>
          <span className="rentry-date">Graduating Nov 2026</span>
        </div>
        <p className="rentry-org">University of Technology Sydney (UTS)</p>
        <ul>
          <li>Sub-major: Data Analytics &amp; Visualisation</li>
          <li>Current WAM: 85</li>
        </ul>
      </div>

      <p className="resume-section-label">Internship</p>
      <div className="rentry">
        <div className="rentry-top">
          <span className="rentry-title">Software Developer</span>
          <span className="rentry-date">Sep 2025 – Nov 2025</span>
        </div>
        <p className="rentry-org">Lume Interactive</p>
        <ul>
          <li>Designed relational database schemas in PostgreSQL with primary/foreign keys and composite keys, ensuring integrity across a multi-entity product and order system.</li>
          <li>Developed advanced SQL queries using JOINs and aggregations, consolidating previously fragmented report logic.</li>
          <li>Normalised table structures across three datasets, reducing redundancy and improving query consistency.</li>
          <li>Validated structured sample datasets, identifying and resolving four data entry inconsistencies before production deployment.</li>
          <li>Developed application features in JavaScript and TypeScript, integrating backend services with Supabase and managing version control via GitHub.</li>
        </ul>
      </div>

      <p className="resume-section-label">Projects</p>
      <div className="rentry">
        <div className="rentry-top">
          <span className="rentry-title">Cloud Data Pipeline &amp; Analytics Dashboard</span>
        </div>
        <p className="rentry-stack">AWS S3 · Snowflake · Snowflake SQL · Power BI</p>
        <ul>
          <li>Designed and implemented an end-to-end cloud data pipeline loading structured datasets from Amazon S3 into Snowflake via secure IAM role-based integration.</li>
          <li>Configured AWS roles and updated trust policies to eliminate credential-based access risks.</li>
          <li>Performed SQL data transformations creating derived rainfall group classifications that directly informed dashboard filtering logic.</li>
          <li>Published multi-page interactive dashboards to Power BI Service, making insights accessible to non-technical stakeholders.</li>
        </ul>
      </div>

      <p className="resume-section-label">Work Experience</p>
      <div className="rentry">
        <div className="rentry-top">
          <span className="rentry-title">Operations &amp; Technical Coordinator</span>
          <span className="rentry-date">Aug 2023 – Mar 2025</span>
        </div>
        <p className="rentry-org">Lion King Flooring</p>
        <ul>
          <li>Coordinated end-to-end supply chain logistics with nationwide freight providers, achieving zero stock-outs across high-volume construction contracts.</li>
          <li>Developed strategic installation schedules for 6–7 daily projects based on priority and geographic proximity, increasing operational throughput by 15%.</li>
          <li>Led technical oversight of a WordPress-to-Shopify migration, conducting UAT and providing feature-gap analysis to external developers.</li>
          <li>Managed multi-channel digital storefronts, maintaining data integrity for product listings, EOFY pricing, and cross-platform inventory synchronisation.</li>
        </ul>
      </div>
      <div className="rentry">
        <div className="rentry-top">
          <span className="rentry-title">Technical Instructor – Robotics &amp; Programming</span>
          <span className="rentry-date">Jan 2022 – Jan 2024</span>
        </div>
        <p className="rentry-org">RoboThink</p>
        <ul>
          <li>Delivered instruction in Scratch, Blockly, and Python to classes of 15 students (ages 8–13), achieving a 90% project completion rate.</li>
          <li>Directed the RoboThink NSW Robotics Competition for 60+ students and families, coordinating all event logistics.</li>
          <li>Provided parents with data-backed progress reports on student performance and learning milestones.</li>
        </ul>
      </div>

      <p className="resume-section-label">Leadership</p>
      <div className="rentry">
        <div className="rentry-top">
          <span className="rentry-title">Events Team Subcommittee</span>
          <span className="rentry-date">Jul – Oct 2025</span>
        </div>
        <p className="rentry-org">UTS Personal Growth Society</p>
        <ul>
          <li>Organised campus event logistics, delegated tasks across committee members, and managed post-event feedback and reporting.</li>
        </ul>
      </div>
      <div className="rentry">
        <div className="rentry-top">
          <span className="rentry-title">Student Event Volunteer – Open Day</span>
          <span className="rentry-date">Aug 2024</span>
        </div>
        <p className="rentry-org">University of Technology Sydney</p>
        <ul>
          <li>Represented UTS as event ambassador for 20,000+ attendees, managing wayfinding and attendee registration.</li>
        </ul>
      </div>

      <p className="resume-section-label">Skills</p>
      {[
        { label: 'Languages', pills: ['Python', 'SQL', 'JavaScript', 'TypeScript', 'Swift'] },
        { label: 'Data & Cloud', pills: ['Snowflake', 'AWS S3', 'PostgreSQL', 'Power BI', 'Tableau'] },
        { label: 'Tools', pills: ['Git', 'GitHub', 'Supabase', 'VS Code', 'Xcode'] },
        { label: 'Frameworks', pills: ['React', 'SwiftUI', 'Node.js'] },
      ].map(({ label, pills }) => (
        <div className="skill-block" key={label}>
          <p className="skill-block-label">{label}</p>
          <div className="skill-pills">
            {pills.map(p => <span className="pill" key={p}>{p}</span>)}
          </div>
        </div>
      ))}

      <p className="resume-section-label" style={{ marginTop: '2rem' }}>Awards</p>
      <div className="award-card">
        <p className="award-card-title">1st Place — UTS iOS Hackathon</p>
        <p className="award-card-body">Tech Fest 2025 · Built "WakeUp" iOS app in Swift &amp; SwiftUI</p>
      </div>
      <div className="award-card">
        <p className="award-card-title">Deloitte Data Analytics Simulation</p>
        <p className="award-card-body">Forage · Jan 2026 · Forensic data analysis &amp; business conclusions</p>
      </div>

      <div className="photos-row">
        <div className="photo-card">
          <img src={hackathon} alt="UTS iOS Hackathon" onClick={() => onImgClick(hackathon)} />
          <p className="photo-caption">UTS iOS Hackathon · Tech Fest 2025 · 1st Place</p>
        </div>
        <div className="photo-card">
          <img src={certificate} alt="Lume Interactive Certificate" onClick={() => onImgClick(certificate)} />
          <p className="photo-caption">Lume Interactive · Certificate of Completion</p>
        </div>
      </div>
    </section>
  )
}
