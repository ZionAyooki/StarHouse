import React from "react";
import HeroHeading from "../components/headings/HeroHeading";
import WhyUsSection from "../components/general/WhyUsSection";
import TestimonialsSection from "../components/general/TestimonialsSection";
import ServicesSection from "../components/general/ServicesSection";
import NewsletterSection from "../components/general/NewsletterSection";

class HomePage extends React.Component {
  render() {
    return (
      <main>
        <HeroHeading isLarge={true} title="Star House Real Estate" slogan="Let us help you find your next dream home" />
        <WhyUsSection data={this.props.siteData.whyus} />
        <ServicesSection data={this.props.siteData.services} />
        <NewsletterSection />
        <TestimonialsSection data={this.props.siteData.testimonials} />
      </main>
    );
  }
}

export default HomePage;