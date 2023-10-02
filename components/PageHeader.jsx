import "../styles/FDM.css";
import "../styles/PageHeader.css";

export const PageHeader = (props) => {
  return (
    <div className="fdm__page-header">
      <h1>${props.title}</h1>
      <ul className="fdm__page-header-actions">
      ${props.actions.map(fromActionToButton)}
      </ul>
    </div>
  )
}

const fromActionToButton = (action) => {
  const extraClasses = action.extraClasses || '';
  return (
    <li>
      <a
        className={"fdm__button fdm__page-header-action " + extraClasses}
        onClick={action.handler}>
        ${action.icon}
      </a>
    </li>
  );
}
