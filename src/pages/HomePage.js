import React from "react";
import Header from "../components/header/Header";
import HeroHeading from "../components/headings/HeroHeading";
import SearchForm from "../components/forms/SearchForm";
import WhyUsSection from "../components/general/WhyUsSection";
import TestimonialsSection from "../components/general/TestimonialsSection";
import ServicesSection from "../components/general/ServicesSection";
import NewsletterSection from "../components/general/NewsletterSection";
import Footer from "../components/footer/Footer";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <HeroHeading isLarge={true} />
        <br /><br /><br /><br /><br />
        <SearchForm />
        <br /><br /><br /><br /><br />
        <WhyUsSection />
        <br /><br /><br /><br /><br />
        <ServicesSection />
        <br /><br /><br /><br /><br />
        <NewsletterSection />
        <br /><br /><br /><br /><br />
        <TestimonialsSection />
        <br /><br /><br /><br /><br />
        <Footer />
      </div>
    );
  }
}

export default HomePage;