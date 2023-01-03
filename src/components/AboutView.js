import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              lorem lorem lorem  lorem lorem lorem lorem lorem lorem  lorem lorem lorem  lorem lorem lorem  lorem lorem lorem  lorem lorem lorem  lorem lorem lorem  lorem lorem lorem lorem lorem lorem
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
