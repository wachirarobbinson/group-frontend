import { useCallback } from "react";
import { Link } from "react-router-dom";


const EventsPage = () => {
  const onAboutTextClick = useCallback(() => {
    console.log("onAboutTextClick");
  }, []);

  const onRectangleButtonClick = useCallback(() => {
    // Please sync "Desktop - 7" to the project
  }, []);

  const onRectangle1Click = useCallback(() => {
    // Please sync "Desktop - 7" to the project
  }, []);

  const onRectangle2Click = useCallback(() => {
    // Please sync "Desktop - 7" to the project
  }, []);

  return (
    <div className="relative bg-lavender w-full h-[1068px] overflow-hidden text-left text-xl text-black font-karma">
      <div className="absolute top-[calc(50%_-_516px)] left-[4px] text-cornflowerblue flex items-center w-[280px] h-[58px] text-[96px] font-jacques-francois-shadow">
        <span className="[line-break:anywhere] w-full">
          <span>G</span>
          <b className="text-[40px] font-karma"><Link to="/">RABZZZ</Link></b>
        </span>
      </div>
      <div className="absolute top-[24px] left-[854px] text-13xl font-playball flex items-center w-[171px] h-[53px]">
        <Link to="/events">Products</Link>
      </div>
      <div
        className="absolute top-[27px] left-[1102px] text-13xl font-playball flex items-center w-[127px] h-12 cursor-pointer"
        onClick={onAboutTextClick}
      >
        <Link to="/about">About</Link>
      </div>
      <img
        className="absolute h-[3.32%] w-[2.99%] top-[3%] right-[5.42%] bottom-[93.68%] left-[91.6%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <img
        className="absolute top-[879.5px] left-[478px] w-[132px] h-[30px]"
        alt=""
        src="/rectangle-13.svg"
      />
      <b className="absolute top-[104px] left-[45px] text-13xl font-roboto-condensed text-rosybrown">
        Upcoming Events
      </b>
      <img
        className="absolute top-[156px] left-[25px] w-[392px] h-[303px] object-cover"
        alt=""
        src="/screenshot-from-20230928-175226-1@2x.png"
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-rosybrown absolute top-[422px] left-[155px] rounded w-[132px] h-[30px]"
        onClick={onRectangleButtonClick}
      />
      <div className="absolute top-[422px] left-[168px] font-medium text-white text-center flex items-center justify-center w-[107px] h-8 [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        Buy a ticket
      </div>
      <div className="absolute top-[454px] left-[25px] bg-snow w-[392px] h-[377px]">
        <b className="absolute top-[0px] left-[29.77px] flex items-center w-[362.23px] h-[377px] [-webkit-text-stroke:1px_#000]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">GAME NIGHT</p>
            <p className="m-0">Hosted by NRG.</p>
            <p className="m-0">{`Relax & Have Fun`}</p>
            <p className="m-0">Date And Time</p>
            <p className="m-0">29, Sat Sep 2023</p>
            <p className="m-0">6:00 PM to 9:00 PMLocation</p>
            <p className="m-0">QWETU KILIMANI</p>
          </span>
        </b>
      </div>
      <img
        className="absolute top-[156px] left-[940px] w-[459px] h-[309px] object-cover"
        alt=""
        src="/screenshot-from-20230928-165817-1@2x.png"
      />
      <div className="absolute top-[466px] left-[940px] bg-snow shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[459px] h-[387px]">
        <b className="absolute top-[0px] left-[16px] flex items-center w-[443px] h-[378px] [-webkit-text-stroke:1px_#000]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">AFRO FASHION AND CUISINE</p>
            <p className="m-0">Hosted by Statepen East Entertainment LTD</p>
            <p className="m-0">
              Join us for The Afro Fashion and Cuisine Festival as we celebrate
              the lively and diverse African culture via food, culture, and
              music.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">Date And Time</p>
            <p className="m-0">20, Fri Oct 2023</p>
            <p className="m-0">03:00 PM to 05:00 AM</p>
            <p className="m-0">Location</p>
            <p className="m-0">Ngong Racecourse, waterfront</p>
          </span>
        </b>
      </div>
      <img
        className="absolute top-[156px] left-[478px] w-[395px] h-[310px] object-cover"
        alt=""
        src="/screenshot-from-20230928-165951-1@2x.png"
      />
      <div className="absolute top-[464px] left-[478px] bg-snow shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[395px] h-[378px]">
        <b className="absolute top-[1px] left-[27px] flex items-center w-[343px] h-[370px] [-webkit-text-stroke:1px_#000]">
          <span className="[line-break:anywhere] w-full">
            <p className="m-0">PARK AND TUNE.</p>
            <p className="m-0">Hosted by TOP BOY NATION.</p>
            <p className="m-0">Drive In Tune In - Edition</p>
            <p className="m-0">Date And Time</p>
            <p className="m-0">30, Sat Sep 2023</p>
            <p className="m-0">12:00 PM to 02:00 PMLocation</p>
            <p className="m-0">ANZANA GARDENS</p>
          </span>
        </b>
      </div>
      <img
        className="absolute top-[895px] left-[940px] w-[459px] h-[458px] object-cover"
        alt=""
        src="/j-cole-concert-poster-black-and-white-1@2x.png"
      />
      <img
        className="absolute top-[895px] left-[479px] w-[395px] h-[458px] object-cover"
        alt=""
        src="/billie-eilish-2@2x.png"
      />
      <img
        className="absolute top-[895px] left-[25px] w-[395px] h-[305px] object-cover"
        alt=""
        src="/screenshot-from-20230928-172138-1@2x.png"
      />
      <div
        className="absolute top-[434px] left-[629px] rounded bg-rosybrown w-[132px] h-[30px] cursor-pointer"
        onClick={onRectangle1Click}
      />
      <div className="absolute top-[432px] left-[642px] font-medium text-white text-center flex items-center justify-center w-[107px] h-8">
        Buy a ticket
      </div>
      <div
        className="absolute top-[438px] left-[1112px] rounded bg-rosybrown w-[132px] h-[30px] cursor-pointer"
        onClick={onRectangle2Click}
      />
      <div className="absolute top-[438px] left-[1125px] font-medium text-white text-center flex items-center justify-center w-[107px] h-8">
        Buy a ticket
      </div>
    </div>
  );
};

export default EventsPage;