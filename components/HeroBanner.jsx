import "../styles/FDM.css";
import "../styles/HeroBanner.css";

const HeroBanner = (props) => {
  return (
    <section className="fdm__hero-banner" style={{backgroundImage: `url(${props.hero}), linear-gradient(60deg, --fdm--hero-banner-blue, --fdm--hero-banner-indigo, --fdm--hero-banner-violet))`,}}>
      <h1>${props.title}</h1>
      <p>${props.subtitle}</p>
    </section>
  );
};

export default HeroBanner;
