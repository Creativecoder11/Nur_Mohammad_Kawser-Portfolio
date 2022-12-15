import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Line.css'

const Line = () => {
  return (
    <div>
      <section id="timeline">
        <h5>Resume</h5>
        <h2>Educational Qualifications</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className=" timeline"
            contentStyle={{
              background: "var(--color-bg-variant)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid var(--color-bg-variant)",
            }}
            date="2018 - Present"
            iconStyle={{
              background: "var(--color-bg-variant)",
              color: "var(--color-white)",
            }}
            icon={<FaGraduationCap />}
          >
            <h3>B.A in Economics</h3>
            <h5 className="">Tejgaon College</h5>
            <p className="text-light">
              I'm a former member of Tejgaon College. Had keen interest on Mathematics but it turned out
              that I'm much interested and attracted towards programmings.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className=" timeline"
            contentStyle={{
              background: "var(--color-bg-variant)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid var(--color-bg-variant)",
            }}
            date="2016 - 2018"
            iconStyle={{
              background: "var(--color-bg-variant)",
              color: "var(--color-white)",
            }}
            icon={<FaGraduationCap />}
          >
            <h3>Higher Secondary School Certificate</h3>
            <h5 className="">BAF Shaheen College Kurmitola</h5>
            <p className="text-light">
              ARTs Group, HSC batch of 2018. I started to wondering how a
              website is built. So, started to learn HTML & CSS and Digital Marketing.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className=" timeline"
            contentStyle={{
              background: "var(--color-bg-variant)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid var(--color-bg-variant)",
            }}
            date="2014 - 2016"
            iconStyle={{
              background: "var(--color-bg-variant)",
              color: "var(--color-white)",
            }}
            icon={<FaGraduationCap />}
          >
            <h3>Secondary School Certificate</h3>
            <h5 className="">BAF Shaheen College Kurmitola</h5>
            <p className="text-light">
              ARTs Group, SSC batch of 2016. In this time my hobby was
              Only Computer games and Traveling. I always want to learn and implement
              newer things. I was a very quick learner.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </div>
  );
};

export default Line;
