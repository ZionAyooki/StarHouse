import React from "react";
import HeroHeading from "../components/headings/HeroHeading";
import WhyUsSection from "../components/general/WhyUsSection";
import TestimonialsSection from "../components/general/TestimonialsSection";
import ServicesSection from "../components/general/ServicesSection";
import NewsletterSection from "../components/general/NewsletterSection";
// import SearchForm from "../components/forms/SearchForm";

class HomePage extends React.Component {
  render() {
    return (
      <main>
        <HeroHeading isLarge={true} title="Star House Real Estate" slogan="Let us help you find your next dream home" />
        {/*<SearchForm isHome={true} />*/}
        <WhyUsSection />
        <ServicesSection />
        <NewsletterSection />
        <TestimonialsSection />
      </main>
    );
  }
}

export default HomePage;