import LargeImgSection from "../components/LargeImgSection";
import Button from "../components/Button";

function Projects() {
  return (
    <div className="body-content">
      <LargeImgSection img="cleanup-project.jpg">
        <h1>TEAMS</h1>
        <p>
          We have a variety of active TEAMS and opportunities to create new
          TEAMS, alumni TEAMS, service ideas for individuals and groups wanting
          to do good, and unpaid internships for high school or college students
          who would like to get involved in a completely non-profit organization
        </p>
      </LargeImgSection>

      <LargeImgSection type="left" img="nepal-group.jpg">
        <h2>TEAMS Creation</h2>
        <p>
          Do you have an idea for a service project which could benefit from our
          organization? We would love to work with you!
        </p>
        <Button>Apply Now</Button>
      </LargeImgSection>
    </div>
  );
}

export default Projects;
