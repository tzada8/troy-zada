import React from "react";
import BlogPost from "../../components/cards/content/blog/blog-post/BlogPost";
import { blogData } from "./BlogData";
import Subheading from "../components/Subheading";
import Paragraph from "../components/Paragraph";

function FirstWorkTerm() {
	return (
		<div>
			<BlogPost
				src={blogData.firstWorkTerm.image}
				label={blogData.firstWorkTerm.label}
				date={blogData.firstWorkTerm.date}
			/>
			<Paragraph content="My first coop work term took place over the Spring 2020 term (May 2020 – August 2020), which also ended up being the first few months that COVID-19 emerged. The company I was working for is called EngineeringCPR, and their main responsibility involves designing and manufacturing medical devices. " />

			<Subheading subheading="Changing Roles" />
			<Paragraph content="While I was working at EngineeringCPR, I was primarily responsible for validating the quality of all parts and components that endured the receiving, inspection, and inventory control process. In other words, I was responsible for inspecting all components that were to be used for manufacturing and conducting the respective procedures and documentation for each of the components. " />
			<Paragraph content="However, after only a few weeks of working in this position, I was asked to aid EngineeringCPR in a manufacturing contracting position they had with a company called Thornhill Medical. Thus, when agreeing to this new role, I was required to entirely adapt my previous responsibilities for the new role. " />
			<Paragraph content="In this new position, I began working as an engineering technician where I was doing much more than quality-based inspections. I was now responsible for manufacturing mechanical and electrical fixtures for Thornhill Medical. On top of physically assembling the fixtures, I was also required to complete documentation. Specifically, I was required to create instruction manuals and quality documents for the electrical/mechanical fixtures that I built. " />

			<Subheading subheading="Purpose of the Work I Completed" />
			<Paragraph content="The fixtures and documentation work I was doing was all for Thornhill Medical since they were required to manufacture 1000 Intensive Care Units (ICUs) due to COVID-19. Thus, the test fixtures that I was manufacturing were to be used to test individual components of the ICUs before the ICU itself was assembled. " />
			<Paragraph content="One of the fixtures I built and completed the specific documentation for can be seen in the image at the beginning of this post. I built this test fixture entirely, including all the mechanical and electrical work, and the fixture is to be used to test a Printed Circuit Board (PCB) before using the board within the actual ICU. " />

			<Subheading subheading="What I Learned" />
			<Paragraph content="Overall, I learned a lot from this first work term experience. For starters, I had no experience assembling and working with electrical components as well as any of the electrical processes. However, after only four months of working in this position, I can confidently say that I am comfortable and experienced in working with electronics. " />
			<Paragraph content="For example, soldering (a process where numerous metals are adjoined together by using a filler metal) was a skill I learned while working with EngineeringCPR and one I have found interesting and useful. Before I had never even heard of the word “solder”, but now, I am extremely familiar with it. " />
			<Paragraph content="Other skills I learned from this work term include properly crimping wires, optimizing component placements, as well as all the various parts used in electrical builds such as the various connectors, wire sizes, etc." />

			<Subheading subheading="Documentation Work" />
			<Paragraph content="There were two main types of documentation I was required to complete. The first involved constructing work instructions. Simply, work instructions are manuals explaining how to build something, such that another individual can identically build it at a later time. " />
			<Paragraph content="I was also in charge of creating Engineering Change Orders (ECOs) for the fixtures I build. Essentially, an ECO is a documentation package outlining the proposed changes for a part. For instance, some of the fixtures I was building needed to be updated (the original version was outdated), and thus, an ECO was required to outline what the updates for that fixture were and ensure that they are approved by the quality department. " />

			<Subheading subheading="Conclusion" />
			<Paragraph content="All in all, I performed a variety of tasks rather than just focusing on one specific task. I ranged from actually manufacturing the fixtures myself, to creating instructions for them, to enduring the ECO process, and then lastly, to the original quality-based tasks that I was assigned back at the EngineeringCPR offices." />
			<Paragraph content="If I were to leave you with one message, it would be the following: “Don’t be afraid of change. Rather, embrace it.” Personally, if I never accepted the new role offer / the change to help contract for Thornhill Medical, I would never have been able to experience the manufacturing side of medical fixtures and would solely have been working on the quality side of these components, which in turn, would have meant that I would not have learned many of the incredible skills that I know today. " />
		</div>
	);
}

export default FirstWorkTerm;
