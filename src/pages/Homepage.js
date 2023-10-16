import { useCallback } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Homepage = () => {

  const onProductsTextClick = useCallback(() => {
    console.log("Clicked on Products");
  }, []);

  const onAboutTextClick = useCallback(() => {
    
  }, []);

  const onFrameButtonClick = useCallback(() => {
    
  }, []);

  const onBuyATicketClick = useCallback(() => {
    
  }, []);

  const onRectangle1Click = useCallback(() => {
    
  }, []);

  const onRectangle2Click = useCallback(() => {
    
  }, []);

  const onMoreEventsTextClick = useCallback(() => {
    console.log('More events');
  }, []);

  const onRectangle4Click = useCallback(() => {
    
  }, []);

  return (
    <div className="relative bg-lavender w-full h-[1048px] overflow-hidden text-left text-sm text-xl text-white font-karma ">
      <img
        className="absolute top-[94px] left-[0px] w-[1440px] h-[473px] object-cover"
        alt=""
        src="/hd-wallpaper--silhouette-of-people-inside-stage-human-person-crowd-concert-1@2x.png"
      />
      <div
        className="absolute top-[21px] left-[852px] text-13xl font-playball text-black flex items-center w-[171px] h-[53px] cursor-pointer text-center sm:text-left"
        onClick={onProductsTextClick}
      >
        <Link to="/events">Products</Link>
      </div>
      <div
        className="absolute top-[21px] left-[1108px] text-13xl font-playball text-black flex items-center w-[127px] h-12 cursor-pointer"
        onClick={onAboutTextClick}
      >
        <Link to="/about">About</Link>
      </div>
      <img
        className="absolute h-[3.32%] w-[2.99%] top-[2.67%] right-[5.35%] bottom-[94.01%] left-[91.67%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <div className="absolute top-[132px] left-[5px] text-5xl text-black whitespace-pre-wrap flex items-center w-[580px] h-[243px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        <span className="[line-break:anywhere] w-full">
          <p className="m-0">{`Are you  ready to elevate your concert and `}</p>
          <p className="m-0">event experiences? Introducing Grabzzz, your</p>
          <p className="m-0">
            one-stop destination for hassle-free ticket booking.
          </p>
          <p className="m-0">{` Whether you are a music enthusiast, a sports `}</p>
          <p className="m-0">
            fanatic, or an art lover, Grabzzz offers a seamless
          </p>
          <p className="m-0">
            {" "}
            platform to discover and secure tickets for the
          </p>
          <p className="m-0"> hottest events in town.</p>
        </span>
      </div>

      <Button
        className="absolute top-[425px] left-[22px] cursor-pointer"
        color="primary"
        variant="contained"
        onClick={onFrameButtonClick}
      >
        <Link to="/events">Buy a ticket</Link>
      </Button>

      <i className="absolute top-[585px] left-[0px] text-13xl font-bold font-nunito text-black">
        Featured events
      </i>
      <img
        className="absolute top-[673px] left-[389px] w-[324px] h-[237px] object-cover"
        alt=""
        src="/screenshot-from-20230928-165817-1@2x.png"
      />
      <img
        className="absolute top-[673px] left-[766px] w-[309px] h-[237px] object-cover"
        alt=""
        src="/screenshot-from-20230928-165951-1@2x.png"
      />
      <img
        className="absolute top-[673px] left-[1108px] w-[311px] h-[237px] object-cover"
        alt=""
        src="/screenshot-from-20230928-175226-1@2x.png"
      />
      <img
        className="absolute top-[651px] left-[4px] w-[332px] h-[257px] object-cover"
        alt=""
        src="/screenshot-from-20230928-172138-1@2x.png"
      />
      <div className="absolute top-[878px] left-[99px] rounded-md bg-rosybrown w-[132px] h-[30px]" />
      <div
        className="absolute top-[878px] left-[112px] font-medium text-center flex items-center justify-center w-[107px] h-8 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] cursor-pointer"
        onClick={onBuyATicketClick}
      >
        Buy a ticket
      </div>
      <div
        className="absolute top-[880px] left-[862px] rounded-8xs bg-rosybrown w-[132px] h-[30px] cursor-pointer"
        onClick={onRectangle1Click}
      />
      
      <div className="absolute top-[880px] left-[875px] font-medium text-center flex items-center justify-center w-[107px] h-8">
        Buy a ticket
      </div>

      <div
        className="absolute top-[880px] left-[1231px] rounded-8xs bg-rosybrown w-[132px] h-[30px] cursor-pointer"
        onClick={onRectangle2Click}
      />
      <div className="absolute top-[880px] left-[1244px] font-medium text-center flex items-center justify-center w-[107px] h-8">
        Buy a ticket
      </div>
      <div className="absolute top-[959px] left-[1181px] w-[165px] flex flex-row items-start justify-start">
        <div className="relative bg-cornflowerblue-200 w-[186px] h-[52px]" />
      </div>
      <div className="absolute top-[956px] left-[1191px] flex flex-row items-center justify-center p-2.5 text-5xl">
        <b className="relative cursor-pointer" onClick={onMoreEventsTextClick}>
          <Link to= "/events">More Events...</Link>
        </b>
      </div>
      <div
        className="absolute top-[882px] left-[482px] rounded-8xs bg-rosybrown w-[132px] h-[30px] cursor-pointer"
        onClick={onRectangle4Click}
      />
      <div className="absolute top-[882px] left-[495px] font-medium text-center flex items-center justify-center w-[107px] h-8">
        Buy a ticket
      </div>
      <div className="absolute top-[calc(50%_-_507px)] left-[5px] text-cornflowerblue-100 flex items-center w-[280px] h-[58px] text-[96px] font-jacques-francois-shadow">
        <span className="[line-break:anywhere] w-full">
          <span>G</span>
          <b className="text-[40px] font-karma">RABZZZ</b>
        </span>
      </div>
    </div>
    
  );
};

export default Homepage;