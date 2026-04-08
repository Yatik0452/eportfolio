export default function CoverLetter() {
  return (
    <section id="cover">
      <h2 className="sec-title">Cover Letter</h2>
      <div className="letter-page">
        <div className="letter-header-row">
          <div className="letter-sender">
            <strong>Yatik Juneja</strong>
            <p>
              157–159 Great Western Highway, Mays Hill NSW 2145<br />
              Yatik.juneja0452@gmail.com · +61 480 274 963
            </p>
          </div>
          <div className="letter-meta">
            <p>
              16 March 2026<br /><br />
              Hiring Manager<br />
              Industrus Engineering
            </p>
          </div>
        </div>

        <p className="letter-re">Re: Data Engineering Graduate Position</p>

        <div className="letter-body">
          <p>I am writing to apply for the Data Engineering Graduate position at Industrus Engineering. I am completing a Bachelor of Software Engineering at the University of Technology Sydney, specialising in Data Analytics and Data Visualisation, with a current WAM of 85. I am drawn to Industrus Engineering's focus on real-world infrastructure projects, structured mentorship, and graduate development.</p>

          <p><span className="letter-criteria">Ethical conduct and professional accountability.</span> During my internship as a Software Developer at Lume Interactive, I was responsible for designing relational database schemas within PostgreSQL. When I identified four data entry inconsistencies during validation, I flagged and resolved them proactively rather than allowing them to propagate into the application. This experience reinforced that professional engineering demands active ethical responsibility: inaccurate or poorly structured data can corrupt business decisions and erode trust in systems others depend on.</p>

          <p><span className="letter-criteria">Communication and collaboration across diverse stakeholders.</span> In my internship, I regularly discussed database design decisions with team members to ensure my work aligned with downstream query requirements. As a Technical Instructor at RoboThink, I taught Python and block-based programming to students aged 8–13 across classes of 15, maintaining a 90% project completion rate by adapting explanations to diverse technical aptitudes. These experiences taught me to treat communication as a core part of delivering quality work, not an afterthought.</p>

          <p><span className="letter-criteria">Creative and proactive problem-solving.</span> For my cloud data pipeline project, I designed an end-to-end workflow using AWS S3, Snowflake, and Power BI. I configured IAM role-based integrations, performed SQL data transformations including derived rainfall group classifications, and published multi-page interactive dashboards to Power BI Service for stakeholder access. The result was a fully functional, scalable analytics pipeline with no predefined solution. At the UTS iOS Hackathon 2025, my team was awarded first place for developing "WakeUp," an iOS app in Swift and SwiftUI under competitive time constraints.</p>

          <p><span className="letter-criteria">Information management and analytical capability.</span> My academic and professional experience consistently involves working with data at a systems level. During my internship, I normalised table structures across three datasets and optimised SQL queries to reduce redundancy. I have built visualisation dashboards using Power BI and Tableau, and completed the Deloitte Australia Data Analytics Job Simulation on Forage in January 2026, producing business conclusions from raw forensic datasets.</p>

          <p><span className="letter-criteria">Self-management and independent performance.</span> My internship required independent analysis of open-ended requirements with no step-by-step guidance. I had to plan my approach, research solutions, and hold myself accountable for the quality of outputs. I also proactively sought feedback before problems compounded, which is now a professional habit I consider essential.</p>

          <p><span className="letter-criteria">Teamwork and leadership.</span> I directed the RoboThink NSW Robotics Competition for 60+ students and families, coordinating all event logistics independently. At UTS, I served on the Personal Growth Society events subcommittee, collaborating with committee members to delegate responsibilities and run events on schedule. I also served as a UTS Open Day ambassador for over 20,000 attendees, representing the university and managing attendee registration.</p>

          <p>I am excited about the opportunity to join Industrus Engineering and contribute my technical skills, problem-solving capability, and enthusiasm for data systems to work that delivers real engineering impact. Thank you for considering my application.</p>
        </div>

        <div className="letter-sign">
          <p>Kind regards,</p>
          <p><strong>Yatik Juneja</strong></p>
        </div>
      </div>
    </section>
  )
}
