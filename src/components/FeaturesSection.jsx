import FeatureCard from "./FeatureCard";
function FeaturesSection() {
  return (
    <>
      <FeatureCard title="DSA Tracker" description="Track solved problems" />

      <FeatureCard
        title="Interview Experience"
        description="Read experiences shared by seniors"
      />

      <FeatureCard
        title="Placement Dashboard"
        description="Monitor preparation progress"
      />
    </>
  );
}
export default FeaturesSection;
