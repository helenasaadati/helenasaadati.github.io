import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
        <VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
  contentArrowStyle={{ borderRight: '7px solid white' }}
  date="Jun 2024 - Present"
  iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
  icon={<FontAwesomeIcon icon={faBriefcase} />}
>
  <h3 className="vertical-timeline-element-title">DevOps Engineer</h3>
  <h4 className="vertical-timeline-element-subtitle">Karashab • Tehran, Iran</h4>
  <p>
    CI/CD pipelines, Docker, monitoring platforms, observability,
    infrastructure automation, Prometheus, Grafana and ELK Stack.
  </p>
</VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  date="Dec 2019 - Jun 2024"
  iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
  icon={<FontAwesomeIcon icon={faBriefcase} />}
>
  <h3 className="vertical-timeline-element-title">Cloud & DevOps Engineer</h3>
  <h4 className="vertical-timeline-element-subtitle">EPD • Tehran, Iran</h4>
  <p>
    Docker, GitLab CI/CD, cloud-native healthcare platforms,
    deployment automation, database optimization and production support.
  </p>
</VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  date="May 2014 - Nov 2019"
  iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
  icon={<FontAwesomeIcon icon={faBriefcase} />}
>
  <h3 className="vertical-timeline-element-title">
    Senior Support Engineer (L2) & Database Specialist
  </h3>
  <h4 className="vertical-timeline-element-subtitle">
    Sorooshan Pars • Tehran, Iran
  </h4>
  <p>
    Enterprise software support, SQL Server administration,
    performance tuning, reporting and business intelligence solutions.
  </p>
</VerticalTimelineElement>

<VerticalTimelineElement
  className="vertical-timeline-element--work"
  date="2004 - 2014"
  iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
  icon={<FontAwesomeIcon icon={faBriefcase} />}
>
  <h3 className="vertical-timeline-element-title">
    Software Developer
  </h3>
  <h4 className="vertical-timeline-element-subtitle">
    Behkaman Saba • Tehran, Iran
  </h4>
  <p>
    C#, ASP.NET MVC, WPF, SQL Server, Oracle and educational software development.
  </p>
</VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;