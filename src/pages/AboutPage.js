import React from "react";
import HeroHeading from "../components/headings/HeroHeading";
import SectionHeading from "../components/headings/SectionHeading";
import TeamGallery from "../components/general/TeamGallery";

class AboutPage extends React.Component {
  render() {
    return (
      <main>
        <HeroHeading isLarge={false} title="About us" />
        <br /><br /><br /><br /><br />
        <section>
          <div className="container">
            <SectionHeading title="History" slogan="How it all started" />
            <div className="row">
              <div className="col-12 col-md-8">
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at commodi corporis cum delectus
                  deserunt dolor eius eligendi et mollitia natus, non optio pariatur perspiciatis quaerat recusandae
                  tempora, veritatis voluptatem!
                </div>
                <div>Amet at blanditiis, deserunt eius enim eos error esse et ex explicabo id illo ipsa laboriosam
                  magnam,
                  maiores non numquam odit officiis perferendis possimus, quas quasi quis reiciendis repellendus
                  tenetur?
                </div>
                <div>A, accusamus amet, aspernatur deleniti dicta dignissimos, doloremque earum esse eum impedit
                  laboriosam mollitia odio placeat sint tenetur unde ut. Aspernatur, eaque fugit ipsam libero nesciunt
                  praesentium quisquam recusandae rem.
                </div>
                <div>Dicta illum itaque, molestias necessitatibus nesciunt nostrum quae quam quidem similique sint.
                  Excepturi facere iste quos. At consequatur dolorum illum in neque nulla, quod unde! Ex explicabo neque
                  provident quas.
                </div>
                <div>A accusamus ad deleniti laboriosam possimus sunt, voluptas. Hic nam neque quisquam repudiandae vel.
                  Dignissimos enim maxime placeat repudiandae. Magnam quo quos suscipit veritatis? Alias deleniti ea
                  quia
                  sed temporibus!
                </div>
              </div>
              <div className="col-12 col-md-4">
                <img className="img-fluid" src="images/about/storefront.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
        <br /><br /><br /><br /><br />
        <section>
          <div className="container">
            <SectionHeading title="Our vision" slogan="How do we see ourselves and our great service." />
            <div className="row">
              <div className="col-12 col-md-4">
                <img className="img-fluid" src="images/about/storefront.jpg" alt="" />
              </div>
              <div className="col-12 col-md-8">
                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at commodi corporis cum delectus
                  deserunt dolor eius eligendi et mollitia natus, non optio pariatur perspiciatis quaerat recusandae
                  tempora, veritatis voluptatem!
                </div>
                <div>Amet at blanditiis, deserunt eius enim eos error esse et ex explicabo id illo ipsa laboriosam
                  magnam,
                  maiores non numquam odit officiis perferendis possimus, quas quasi quis reiciendis repellendus
                  tenetur?
                </div>
                <div>A, accusamus amet, aspernatur deleniti dicta dignissimos, doloremque earum esse eum impedit
                  laboriosam mollitia odio placeat sint tenetur unde ut. Aspernatur, eaque fugit ipsam libero nesciunt
                  praesentium quisquam recusandae rem.
                </div>
                <div>Dicta illum itaque, molestias necessitatibus nesciunt nostrum quae quam quidem similique sint.
                  Excepturi facere iste quos. At consequatur dolorum illum in neque nulla, quod unde! Ex explicabo neque
                  provident quas.
                </div>
                <div>A accusamus ad deleniti laboriosam possimus sunt, voluptas. Hic nam neque quisquam repudiandae vel.
                  Dignissimos enim maxime placeat repudiandae. Magnam quo quos suscipit veritatis? Alias deleniti ea
                  quia
                  sed temporibus!
                </div>
              </div>
            </div>
          </div>
        </section>
        <br /><br /><br /><br /><br />
        <TeamGallery />
        <br /><br /><br /><br /><br />
      </main>
    );
  }
}

export default AboutPage;