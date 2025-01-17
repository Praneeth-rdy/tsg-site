import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

import facilitiesData from "../public/facilities";
import ImageModal from "../components/imageModal";
import Card from "../components/societyCard";
import societiesData from "../public/societiesData";
import festData from "../public/festData";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/open-animation.css";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>

        <section className="intro">
          <section className="home">
            <div className="logo">
              <img src="IIT_Kharagpur_Logo.svg" />
            </div>
            <div className="headings">
              <h1>Technology Students' Gymkhana</h1>
              <h2>Indian Institute of Technology Kharagpur</h2>
            </div>
          </section>
        </section>

        <section className="m-content">
          <section className="events-slider">
            <h2> Upcoming Events</h2>
            <AwesomeSlider>
              <div data-src="upcomingEvents/swg.png" />
              <div data-src="upcomingEvents/tls.jpg" />
              <div data-src="upcomingEvents/case_study.jpg" />
            </AwesomeSlider>
          </section>

          <section className="about" id="about">
            <h2>About Us</h2>
            <p>
              Technology Students’ Gymkhana is the hub of the numerous extra-curricular and co-curricular activities in
              IIT Kharagpur ranging from sports to socio-cultural. The Gymkhana is managed by the students, for the
              students, under the guidance and active participation of the faculty and staff members.{" "}
            </p>
            <blockquote>"Yogah Karmasu Kausalam"</blockquote>
            <p>
              The moto of Technology Students' Gymkhana is YOGAH KARMASU KAUSALAM which in English means "Perfection in
              action is Yoga". Our goal is to bring overall development in IITians through cultivating and nurturing
              their extra-curricular talents.
            </p>
          </section>

          <section className="facilities">
            <h2>Facilities and Events</h2>
            <div className="image-modals">
              <div className="column">
                {facilitiesData.data.slice(0, 3).map((facility) => (
                  <ImageModal images={facility.images} description={facility.description} title={facility.title} />
                ))}
              </div>
              <div className="column">
                {facilitiesData.data.slice(4, 7).map((facility) => (
                  <ImageModal images={facility.images} description={facility.description} title={facility.title} />
                ))}
              </div>
            </div>
          </section>

          <section className="societies">
            <h2>
              <a href="/societies">Societies under Gymkhana</a>
            </h2>
            <div className="main-content">
              <div className="society-cards">
                {societiesData.data.slice(0, 2).map((society) => {
                  return (
                    <Card
                      name={society.name}
                      facebook_link={society.facebook_link}
                      wiki_link={society.wiki_link}
                      shortform={society.shortform}
                      description={society.description}
                      Heads={society.Heads}
                    />
                  );
                })}
              </div>
              <a className="fake-button" href="/societies">
                More
              </a>
            </div>
          </section>

          <section className="fests">
            <h2>Fests</h2>
            <div className="main-content">
              <div className="society-cards">
                {festData.data.map((fest) => {
                  return (
                    <Card
                      name={fest.name}
                      facebook_link={fest.facebook_link}
                      wiki_link={fest.wiki_link}
                      shortform={fest.shortform}
                      description={fest.description}
                      website={fest.website}
                    />
                  );
                })}
              </div>
            </div>
          </section>
        </section>
      </Layout>
    </>
  );
}
