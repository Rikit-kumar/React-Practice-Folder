let Hero = () => {
  return (
    <main>
      <section className="hero">
        <div className="hero-left">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST and we're here to help you with one
            shoes. YOUR FEET DESERVE THE BEST and we're here to help you with
            one shoes
          </p>

          <div className="btns">
            <button>Shop Now</button>
            <button>Category</button>
          </div>

          <div className="logos">
            <p>Also Available on</p>
            <div className="images">
            <img src="/images/flipkart.png" alt="Amazon Logo" />
            <img src="/images/amazonLogo.png" alt="Amazon Logo" />
            </div>
          </div>
        </div>

        <div className="hero-right">
            <img src="/images/hero-image.png" alt="" />
        </div>
      </section>
    </main>
  );
};

export default Hero;
