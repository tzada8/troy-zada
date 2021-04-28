import React from "react";
import Subtitle from "../extra_components/subtitle/Subtitle";
import GroupsDivider from "../extra_components/groups_divider/GroupsDivider";
import LinkToContact from "../extra_components/link_to_contact/LinkToContact";
import WorkCard from "./work_card/WorkCard";
import "./Experience.css";

function Experience() {
   return (
      <div>
         <LinkToContact />
         <Subtitle icon="fas fa-university" label="Education" />
         <WorkCard
            title="Management Engineering"
            company="University of Waterloo"
            duration=", Sept 2019 - Present"
            description="Bachelor of Applied Science candidate developing expertise in data analytics, information systems, operations management, and organizational behaviour. Some important courses to highlight include: Algorithms and Data Structures (Java), Databases and Software Design (SQL), Statistics (R), Optimization, and Organizational Behaviour"
         />

         <GroupsDivider />

         <Subtitle icon="fas fa-briefcase" label="Work Experience" />
         <WorkCard
            title="Programming (Java) Teaching Assistant"
            company="University of Waterloo"
            duration=", Jan 2021 - Apr 2021"
            description="Generated unique content and explanations to teach complex Java programming concepts to students. Validated all content released from the teaching end to ensure the content was sound. Reviewed student's assessments to ensure answers were correct, and if not, spent time discussing and explaining the correct approach to them"
         />
         <WorkCard
            title="Design and Manufacturing Technician"
            company="EngineeringCPR"
            duration=", Apr 2020 - Sept 2020"
            description="Worked in a manufacturing environment assembling fixtures through soldering, comprehending electrical schematics, and optimizing component placements. Primary focus involved manufacturing test fixtures as well as creating corresponding work instructions in order to test 1200 ventilator systems (being required due to COVID-19)"
         />
         <WorkCard
            title="Machine Shop Assistant"
            company="CANASTAMPI inc."
            duration=", June 2019 - Aug 2019"
            description="Operated and programmed numerous machines including a CNC Milling Machine, Lathe, Drill Press, and Pantograph to engrave, polish, and mill various parts. Then, validated that each part precisely met drawing specifications"
         />

         <GroupsDivider />

         <Subtitle icon="fas fa-award" label="Awards" />
         <WorkCard
            title="Gonzaga Leadership Award"
            duration="June 2019"
            description="Awarded out of 500 students for being an effective, responsible, and confident problem solver within the school community"
         />
         <WorkCard
            title="Michael Kim Award"
            duration="June 2019"
            description="Awarded out of 400 student-athletes for outstanding contributions and commitment to the athletic community"
         />
         <WorkCard
            title="Knights of Colombus - St. Faustina Award"
            duration="June 2019"
            description="Awarded out of 500 students for consistently demonstrating an exemplary ethical attitude towards fellow students"
         />

         <GroupsDivider />

         <LinkToContact />
      </div>
   );
}

export default Experience;
