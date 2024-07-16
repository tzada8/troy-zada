import React from "react";

import Paragraph from "../../../components/text-details/Paragraph";
import Subheading from "../../../components/text-details/Subheading";

export default function FirstWorkTerm() {
	return (
		<div>
			<Paragraph content="During my first co-op term in Spring 2020 (May 2020 – August 2020), coinciding with the onset of COVID-19, I worked at EngineeringCPR, focusing on the design and manufacturing of medical devices." />

			<Subheading label="Changing Roles" />
			<Paragraph content="While at EngineeringCPR, I was primarily responsible for validating the quality of all parts and components through receiving, inspection, and inventory control processes. This involved inspecting components, writing documentation, and performing necessary procedures." />
			<Paragraph content="However, after a few weeks, I was asked to assist EngineeringCPR in a manufacturing contract with Thornhill Medical. Adapting to this new role, I was required to transition to an engineering technician, taking on responsibilities beyond quality inspections. I began manufacturing mechanical and electrical fixtures, including assembly and documentation. Specifically, I created instruction manuals and quality documents for the fixtures." />

			<Subheading label="Purpose Behind the Work" />
			<Paragraph content="My work involved supporting Thornhill Medical in manufacturing 1200 Intensive Care Units (ICUs) in response to COVID-19. This included manufacturing test fixtures for evaluating individual ICU components prior to final assembled." />
			<Paragraph content="An example of one of these fixtures, pictured at the beginning of this post, is one I constructed entirely from scratch. It encompasses both mechanical and electrical elements and is specifically designed to test Printed Circuit Boards (PCBs) before their integration into the ICU production line." />

			<Subheading label="Learnings" />
			<Paragraph content="Overall, my first co-op experience was incredibly educational. Initially, I had no background in electrical processes, but after just four months, I can confidently say that I have hands-on experience in electrical engineering." />
			<Paragraph content="For instance, I learned soldering, a technique where various metals are joined using a filler metal, while working at EngineeringCPR. Previously, I had no knowledge of soldering, but now I am proficient in it." />
			<Paragraph content="Additionally, I acquired skills in properly crimping wires, optimizing component placements, and understanding the various components essential in electrical builds, such as different connectors and wire sizes." />

			<Subheading label="Conclusions" />
			<Paragraph content="During this work term, I engaged in a variety of tasks instead of focusing on one. I manufactured test fixtures, created work instructions, and handled all original quality-related tasks." />
			<Paragraph
				last
				content="If there’s one message I’d like to leave you with, it’s this: “Don’t be afraid of change. Embrace it.” Personally, had I not accepted the new role as a contractor for Thornhill Medical, I would have missed out on experiencing the manufacturing side of medical fixtures and would have remained solely on the quality side. Being open to change allowed me to broaden my horizons and acquire many additional skills that I would not have otherwise had the opportunity to learn."
			/>
		</div>
	);
}
