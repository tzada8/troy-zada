import React from "react";
import BlogPost from "../blog_post/BlogPost";
import { blogData } from "../BlogData";
import BlogParagraph from "./BlogParagraph";

function FirstWorkTerm() {
   return (
      <div>
         <BlogPost
            src={blogData.firstWorkTerm.image}
            blogTitle={blogData.firstWorkTerm.title}
            date={blogData.firstWorkTerm.date}
         />
         <BlogParagraph
            content="My first coop work term took place over the Spring 2020 term (May
            2020 – August 2020), being the first few months of COVID-19 as well.
            The company I was working for is called EngineeringCPR, and their
            main responsibility involves manufacturing and designing medical
            devices."
         />
         <h3 className="blog-content-subheading">Responsibilities</h3>
         <BlogParagraph
            content="My initial responsibilities while working at EngineeringCPR involved
            validating the quality of all parts that endured the receiving,
            inspection, and inventory control process. This meaning, that I was
            responsible for inspecting all components that were delivered to
            EngineeringCPR and ensuring the correct procedures were executed for
            each of the parts. However, after a few weeks of working in this
            position, I was asked to aid EngineeringCPR in a manufacturing
            contract position they had with a company called Thornhill Medical."
         />
         <BlogParagraph
            content="In this new position, I began working as an engineering technician
            where I was manufacturing mechanical and electrical fixtures that
            Thornhill Medical required. My duty further extended to completing
            documentation, including creating instruction manuals and quality
            documents for the electrical/mechanical fixtures that I built.
            Theses new tasks I was enduring were well out of my job scope, but I
            was still super eager to learn and try out new things."
         />
         <BlogParagraph
            content="One of the fixtures I built can actually be seen in the image at the
            beginning of this blog post. I built this test fixture entirely from
            start to finish (including all the mechanical and electrical work),
            and it is to be used to test a Printed Circuit Board (PCB) before
            using the board within the actual ICUs."
         />
         <BlogParagraph
            content="There was a lot learned from this first work term experience. For
            starters, I had no experience working with electrical components and
            any of the electrical processes. For example, soldering (a process
            where metals are adjoined together by using a filler metal) was a
            skill I learned while working with EngineeringCPR and one I have
            definitely found interesting and useful. Furthermore, other skills I
            have learned includes properly crimping wires, optimizing component
            placements, as well as all the various parts used in electrical
            builds."
         />
         <BlogParagraph
            content="After building the necessary test fixtures, there were also other
            tasks I was assigned and learned from too! This included creating
            work instructions to explain the build process such that another
            individual will be able to build the fixture again sometime in the
            future. Moreover, I was also in charge of creating Engineering
            Change Orders (ECOs) for the fixtures I build. Simply, an ECO is a
            documentation package outlining the proposed changes for a part
            being the changes are approved. For instance, some of the fixtures I
            was building needed to be updated (the original version was
            outdated), and thus, an ECO was required to outline what the updates
            are and ensure that they are approved. All in all, I performed a
            variety of tasks rather than just focusing on one specific task. I
            ranged from actually manufacturing the fixtures myself, to creating
            instructions for them, to enduring the ECO process, and then lastly,
            to the original quality based tasks that I was assigned back at the
            EngineeringCPR offices."
         />
         <BlogParagraph
            content="My most prominent outstanding work achievement occurred when I was
            building numerous test fixtures for Thornhill Medical. This is
            because Thornhill Medical was required to manufacture 1000 Intensive
            Care Units (ICUs) due to COVID-19. Thus, the test fixtures that I
            was manufacturing were to be used to test individual components of
            the ICUs before being assembled. In other words, without the
            multitude of test fixtures that I was manufacturing, then it would
            be near impossible to determine the robustness of the ICUs."
         />
         <BlogParagraph
            content="While building the test fixtures for Thornhill Medical, I was also
            occasionally returning to the EngineeringCPR offices to help in my
            original duties (the quality-based duties specified in the job
            description). Moreover, I was even asked to help EngineeringCPR in
            another project they were working on regarding COVID-19 on top of
            all my other duties. Unfortunately, I cannot speak about my
            outstanding work achievements regarding this project particularly
            since I signed a Non-disclosure Agreement for it."
         />
         <BlogParagraph
            content="If I were to leave you with one message, it would be the following:
            “Don’t be afraid of change. Rather, endure it.” Personally, if I
            never accepted the new role offer / change, I would never have been
            able to experience the manufacturing side of medical fixtures and
            would solely have been working on the quality side of these
            components."
         />
      </div>
   );
}

export default FirstWorkTerm;
