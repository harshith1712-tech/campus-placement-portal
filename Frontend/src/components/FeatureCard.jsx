import "../styles/FeatureCard.css";
// imported the css file for styling the feature card component
function FeatureCard(props) {
  // this component simply takes the props and displayes the title and description of the feature card and we can reuse the component for different features by passing different props to it
  return (
    <div className="feature-card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}
export default FeatureCard;
