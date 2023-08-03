import "./styles.css";
import hero from "./Components/Images/Hero_images.jpg";
export default function App() {
  return (
    <>
      <section className="Hero_section">
        <div className="hero_div">
          <div className="Text">
            <div className="Text__Header">
              <h4>Hello everyone</h4>
              <h1>I'm Brightly</h1>
              <h5>I'm a programmer specializing web development</h5>
            </div>
            <p>
              I'm an Indonesian born in Jakarta, Indonesia in 2004. After
              completing high school at SMK Bonavita in Tangerang, I'm now
              pursuing a degree in informatics at Universitas Multimedia
              Nusantara. My passion lies in programming, and I'm also a game
              development club teacher at UMN. I've been mastering C, C#,
              Python, And Javascript throughout my journey.
            </p>
          </div>
          <img src={hero} alt="Hero" />
        </div>
      </section>
      <section className="profiles_section">
        <div className="profile_container">
          <h1>MY SOCIAL MEDIA & CODING PROFILES</h1>
          <div className="social_media">
            <button className="social_button">Github</button>
            <button className="social_button">Instagram</button>
            <button className="social_button">Youtube</button>
          </div>
        </div>
      </section>
      <footer>Copyright © brightlyvirya.com. All Right Reserved.</footer>
    </>
  );
}
