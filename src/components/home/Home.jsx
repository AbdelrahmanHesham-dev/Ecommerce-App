import './home.css';
import Product from "../product/Product.jsx";
import shortid from "shortid";


function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="banner"></div>
        <div className="home-row">
          <Product
            id={shortid.generate()}
            image="/image/cheer.png"
            price={240}
            title="GTPLAYER Gaming Chair, Computer Chair with Footrest and Lumbar Support, Height Adjustable Game Chair with 360°-Swivel Seat and Headrest and for Office or Gaming (White)"
            rating={4}
          />
          <Product
            id={shortid.generate()}
            image="/image/dummble.png"
            price={119}
            title="RitFit 5-300LBS Rubber Encased Hex Dumbbell Sets with Optional Rack for Home Gym, Coated Hand Weights for Strength Training, Workouts"
            rating={5}
          />
        </div>
        <div className="home-row">
          <Product
            id={shortid.generate()}
            image="/image/5.png"
            price={239}
            title="MeLE PCG02 Fanless Mini PC Stick Windows 11 Pro J4125 8GB/128GB Portable Mini Desktop Computer Stick Business & Home Video Support HDMI 4K 60Hz, BT4.2, 2.4G/5.8G Dual"
            rating={3}
          />
          <Product
            id={shortid.generate()}
            image="/image/3.png"
            price={449}
            title="Fujitsu ScanSnap iX1600 Wireless or USB High-Speed Cloud Enabled Document, Photo & Receipt Scanner with Large Touchscreen and Auto Document Feeder for Mac or PC"
            rating={3}
          />
          <Product
            id={shortid.generate()}
            image="/image/4.png"
            price={229}
            title="Enjoy wireless virtual reality with a high-resolution display, powerful processor, and 128GB of storage, and explore virtual worlds without the need for a computer."
            rating={4}
          />
        </div>
        <div className="home-row">
          <Product
            id={shortid.generate()}
            image="/image/mouse1.png"
            price={15}
            title="SM600 White Wireless Gaming Mouse,8000 DPI Tri-Modes BT5.1/Type-C Wired/2.4G Wireless Mouse with 2 Side Buttons, Programmable Macro Gamer Mouse with RGB Light for Laptop/PC/Mac"
            rating={5}
          />
          <Product
            id={shortid.generate()}
            image="/image/witch1.png"
            price={39}
            title="BY BENYAR Watch for Men Analog Quartz Chronograph Waterproof Luminous Designer Mens Wrist Watches Business Work Sport Casual Dress Watch with Silicone Strap Elegant Gifts for Men"
            rating={4}
          />
        </div>
        <div className="home-row">
          <Product
            id={shortid.generate()}
            image="/image/1.png"
            price={64}
            title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
            rating={5}
          />
          <Product
            id={shortid.generate()}
            image="/image/6.png"
            price={290}
            title="SAMSUNG Galaxy S22 Ultra Cell Phone, Factory Unlocked Android Smartphone, 128GB, 8K Camera & Video, Brightest Display Screen, S Pen, Long Battery Life, Fast 4nm Processor, US Version, Phantom Black"
            rating={4}
          />
        </div>

        <div className="home-row">
          <Product
            id={shortid.generate()}
            image="/image/2.png"
            price={500}
            title="Lenovo - 2021 - IdeaPad 3 - Gaming Laptop - AMD Ryzen 5 5600H - 8GB RAM - 256GB Storage - NVIDIA GeForce GTX 1650-15.6 FHD Display - Windows 11 Home"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
