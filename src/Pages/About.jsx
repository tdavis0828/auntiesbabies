import { StyledAbout } from '../Styles/AboutStylesheet';
import headshot from '../images/head-shot.jpg';

function About() {
  return (
    <StyledAbout>
      <div className="header">
        <div className="overlay" />
        <p>About</p>
      </div>
      <div className="image-container">
        <img src={headshot} alt="/" />
        <h4>Shanita Ford</h4>
        <p>Owner & CEO of Auntie's Babies</p>
      </div>
      <div className="content-container">
        <p>
          Shanita started her business when she became a parent. Fueled by a
          strong conviction, she embarked on the journey to assist other mothers
          by initiating a large family childcare. She believes that no child
          should be left behind. She has a Bachelor&#39;s Degree in Psychology
          with a concentration in Human Services. She is motivated by giving
          recourses to families and encourage families to thrive. Shanita
          believes she can help create a life line for communities that have
          limited access to family child care options. She serves on several
          boards. One, The African American Association of Childcare Providers,
          The Kern County Black Chamber of Commerce Board of Directors and The
          Bakersfield City School District Educational foundational board of
          Directors. As a Local Union member in Kern County, she continues to
          fight for families and providers true cost of care.
        </p>
      </div>
      <div className="content-container">
        <h1>The Values</h1>
        <p>
          Shanita firmly believes that &quot;we are stronger together, and
          it&#39;s crucial for us all to unite to uphold our community&#39;s
          well-being.&quot; Having experienced the loss of her mother at the age
          of 14, leaving her feeling abandoned, she understands the challenges
          firsthand. Despite the hardships, Shanita continues to thrive, knowing
          that her resilience can serve as a hope for others, particularly young
          single parents. Her journey isn&#39;t just about survival—it&#39;s
          about triumphing over adversity and inspiring others to do the same.
        </p>
      </div>
      <div className="content-container">
        <h1>The Vision</h1>
        <p>
          Just before COVID, Shanita found the Kern Women&#39;s Business
          Center&#39;s Start, Run &amp; Grow program (now Explore, Design &amp;
          Launch). In that program, she learned about business plans, how to
          expand her business, organizational structures, business taxes and
          more. She is pleased to report that her business has been a wonderful
          resource to give single mother hope and to provide support for another
          single mother.
        </p>
      </div>
    </StyledAbout>
  );
}

export default About;
