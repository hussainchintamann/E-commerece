const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 style={{ textAlign: "center ",marginTop:'50px'  }}>content</h1>
          <div className="col-md-6">
            <span style={{ float: "left", marginTop: "150px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              omnis optio fugit eius. Debitis facere velit quidem eligendi,
              earum quasi Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus optio adipisci consequuntur aspernatur beatae numquam inventore vero. Laborum, minus reiciendis.
            </span>
          </div>
          <div className="cpl-md-6">
            <img
              style={{
                height: "300px",
                width: "350px",
                marginLeft: "550px",
                position: "relative",
                bottom: "180px",
              }}
              src="./src/productss.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
