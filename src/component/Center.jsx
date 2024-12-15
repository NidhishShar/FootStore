const Center = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-button">
          <button>Shop Now</button>
          <button className="secondary-button bg-red-400 font-semibold">
            Category
          </button>
        </div>
        <div className="shopping">
          <p>Also Available on</p>
        </div>
        <div className="brand-icons">
          <img src="/images/amazon.png" alt="Amazon" />
          <img src="/images/flipkart.png" alt="Flipkart" />
        </div>
      </div>
      <div className="hero-image">
        <img
          src="/images/9c643336b7971d71e959bfa21333828c.jpg"
          alt="Shoes"
          style={{ borderRadius: 50 }}
        />
      </div>
    </main>
  );
};

export default Center;
