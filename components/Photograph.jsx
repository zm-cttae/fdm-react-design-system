import "../styles/FDM.css";
import "../styles/Photograph.css";
import logoWhite from "../assets/logo.svg";

export const Photograph = (article) => {
  return (
    <a href={article.url}>
      <div key={article.id} className="fdm__photograph fdm__is-card-radius fdm__is-card-shadow" style={{backgroundImage:`url(${article.imageUrl})`}}>
          <div class="fdm__photograph-filter fdm__filter-is-red"></div>
          <div class="fdm__photograph-filter fdm__filter-is-blue"></div>
          <h3>{article.title}</h3>
          <div class="fdm__photograph-logo" style={`background-image: url(${logoWhite})`}></div>
          <p class="fdm__photograph-description">{article.description}</p>
          <span class="fdm__chip fdm__photograph-chip">{article.url.match(/[^./]+\.[^./]+(?=\/[^/])/)[0]}</span>
      </div>
    </a>
  );
};

export default ArticleCard;
