import React from "react";
import WorkTimeline from "../components/WorkTimeline";

const Profile = () => {
  return (
    <div className="work-profile">
      <div className="profile-title">Work Experience</div>
      <WorkTimeline>
        <div className="work-profile">
          <div className="work-profile__job">
            <div className="work-profile__job-title">State Street</div>
            <div className="work-profile__job-title-sub1">Tech Lead</div>
            <div className="work-profile__job-title-sub2">
              Sep 2019 - Nov 2022
            </div>
            <div className="work-profile__job-content">
              <ul>
                <li>
                  Developed a general framework on React that helps modify UI
                  from backend and acts as starting point to any new project
                </li>
                <li>6 projects uses this framework in State Street</li>
                <li>
                  Assisted multiple teams with React framework and architecture
                  set up
                </li>
                <li>
                  Took ownership and connected with vendors in successfully
                  completing 3 projects
                </li>
                <li>
                  Played a vital roles on project releases and the process
                  involved in releasing a project live
                </li>
                <li>Mentored and trained junior and senior developers</li>
              </ul>
            </div>
          </div>
        </div>
      </WorkTimeline>
      <WorkTimeline>
        <div className="work-profile">
          <div className="work-profile__job">
            <div className="work-profile__job-title">HCL Technologies</div>
            <div className="work-profile__job-title-sub1">
              Senior Software Engineer (Consultant)
            </div>
            <div className="work-profile__job-title-sub2">
              Jan 2017 - Aug 2019
            </div>
            <div className="work-profile__job-content">
              <ul>
                <li>
                  Developed features of admin portal that increased efficiency
                  of client team annually; saved $1M as a part of DevOps team
                </li>
                <li>
                  Engineered solutions to improve usability of a high traffic
                  application during the peak time of financial year closing
                </li>
                <li>
                  Provided innovative design for migrating excel data to
                  application with single click
                </li>
                <li>Lead a team of 5 in development of new web site</li>
                <li>
                  Owned the POC of page upgradation from ExtJS to Angular JS and
                  React JS to check compatibility
                </li>
                <li>Mentored and trained junior engineers in ExtJS and Java</li>
              </ul>
            </div>
          </div>
        </div>
      </WorkTimeline>
      <WorkTimeline>
        <div className="work-profile">
          <div className="work-profile__job">
            <div className="work-profile__job-title">
              Walking Tree Consultancy
            </div>
            <div className="work-profile__job-title-sub1">
              Senior Software Engineer
            </div>
            <div className="work-profile__job-title-sub2">
              Jan 2016 - Dec 2016
            </div>
            <div className="work-profile__job-content">
              <ul>
                <li>Developed custom components in ExtJS using Sencha Touch</li>
                <li>Architected the UI upgrade of a risk management engine</li>
                <li>
                  Ensured high coding standards is maintained by team and myself
                  through constant code review practices
                </li>
                <li>
                  Managed multiple projects with critical thinking and problem-
                  solving approach
                </li>
                <li>Administered database queries in complex environments</li>
                <li>
                  Designed, implemented and maintained Java application
                  throughout all stages of SDLC
                </li>
              </ul>
            </div>
          </div>
        </div>
      </WorkTimeline>
      <WorkTimeline>
        <div className="work-profile">
          <div className="work-profile__job">
            <div className="work-profile__job-title">
              Tata Consultancy Services
            </div>
            <div className="work-profile__job-title-sub1">
              Software Engineer
            </div>
            <div className="work-profile__job-title-sub2">
              Dec 2012 - Dec 2015
            </div>
            <div className="work-profile__job-content">
              <ul>
                <li>
                  Collaborated with clients directly to understand requirements
                  and create deliverables
                </li>
                <li>
                  Designed and developed web pages using Spring MVC framework
                </li>
                <li>
                  Developed custom PL/SQL functions that can be re-used across
                  projects
                </li>
                <li>
                  Refactored older code bits to upgrade platform to new
                  technology from HTML to ExtJS
                </li>
                <li>
                  Performed integration testing and ensured first time bug free
                  release
                </li>
                <li>
                  Assisted senior developers and team lead in code maintenance
                  activities
                </li>
              </ul>
            </div>
          </div>
        </div>
      </WorkTimeline>
      <div className="edu-title">Education</div>
      <div className="edu-details">
        <div className="edu-details__line1">
          Bachelor of Engineering in Information Science and Engineering
        </div>
        <div className="edu-title__line2">
          SJB Institue of Technology -{" "}
          <span>Visvesvaraya Technological University- VTU</span>
        </div>
        <div className="edu-title__line2">Year of completion - 2012</div>
      </div>
    </div>
  );
};

export default Profile;
