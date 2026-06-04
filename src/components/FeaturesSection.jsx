import FeatureCard from "./FeatureCard";
import "../styles/FeaturesSection.css";
function FeaturesSection() {
  return (
    <section className="features-section">
      <h2 className="features-heading">
        Everything You Need To Crack Placements
      </h2>

      <p className="features-subtitle">
        Track progress, learn from seniors, and stay interview-ready throughout
        your placement journey.
      </p>
      <div className="features-container">
        <FeatureCard
          title="📚 DSA Tracker"
          description="Track solved problems, monitor consistency, and stay on top of your coding preparation."
        />

        <FeatureCard
          title="🎯Interview Experience"
          description="Explore real interview experiences from students placed in top companies."
        />

        <FeatureCard
          title="📊 Placement Dashboard"
          description="Visualize your preparation journey with detailed progress tracking."
        />
      </div>
    </section>
  );
}
export default FeaturesSection;
