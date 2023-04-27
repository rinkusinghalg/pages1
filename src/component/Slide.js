import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'react-bootstrap/Image';
import Maps from "./Maps";
function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}
function Slide(){
  var settings = {
    dots: false,
    infinite: false,
    fade: false,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  
    return (
      <>
      <div className="con">
        
        <Slider {...settings}>
          <div>
          <Image src="img15.jpg" className='slid' rounded />
          </div>
          <div >
          <Image src="img15.jpg" className='slid' rounded />
          </div>
          <div >
          <Image src="img15.jpg" className='slid' rounded />
          </div>
          <div >
          <Image src="img15.jpg" className='slid' rounded />
          </div>
          <div>
          <Image src="img15.jpg" className='slid' rounded />
          </div>
          <div>
          <Image src="img15.jpg" className='slid' rounded />
          </div>
        </Slider>
        <div className="d-flex justify-content-around pt-4">
          <p>a Flat</p>
          <p>224m2</p>
          <p>Barcelona I.</p>
        </div>

        <div className="gray">
          <p>martage since:</p>
          <span>807.57 / month</span>
        </div>
        {/**this is para graph  */}
        <div>
          <p className="para">
            Fedors group vnsdkhvli huoiusdhiu;s uihiuh uoihiugh uohiuh uihiugh uhiughi 
            biyguyg uihiuh uihui uhuivu;ah  io hhjgl;j hoii iojho igh ioenjgiojho
             iough hjh iourhiojgio hiuh uih uihguihiu hiuh uh iu
              yig yuguhguh iuhiughiuhuih guih guh<br/><br/>
              nsdjkhfi uh iu shf uh fuyhkj fui  fhiusahu hguidrhailuhih iu hui giuhaliuhi h uih iyg yusga
              jh h asuylglkj bi yigsuihbhbguly h iu dsihdiu gdsu fdh fui
               bgsjfbgyuldsa khu iuah ;kuldhgiuhduig udih giudhaiuhgiuadhgiuahdfkjghukdhguihdiual
                jhbhjdbgfjabvhj blj jdf lhjjldh hfdlj
                 bhs sdbggalhduhuifdh ufighdiuhgkjdflhfiudbhgfiudhflahiuhldukhlgiudh
                   lyudaglfdh ufkh uidsh fuha uih diuh hfdlj fgiuah gfuighyuuiy hgadsiugh
                   <br/><br/>sGFYU hbgfysua j hgyugasf yjfbs yu sdgfuga k ihou fsahgdua bbgyuds agi hfiuhyu
                    dsfyughdasiufhluiah liufhadsuk ghuihudshaaliuhksadhfg askh;f uylasg ubhsadlh ghuihudshaaliuhksadhfg dfs algh
                    jdflhviuadhfihuihu dfuo gio gdgh udfhugihuidh gahughuirhh 
                     uh uhasdulhguidhiuhsdfjhduio hguihgrjn  

                      
              
          </p>
          <h4 className="text-dark">Basic characterstics</h4>
          <br/>
          <span>== Number of rooms:5</span>
          <br/><br/>
          <span>== Number of rooms:5</span>
          <br/><br/>
          <span>== Number of rooms:5</span>
          <br/><br/>
          <span>== Number of rooms:5</span>
          <br/><br/>
          <span>== Number of rooms:5</span>
          <br/><br/>
          <h4 className="text-dark">Layout solution:</h4>
          <br/>
          <p>
          hjbas  gsysacgu hbhgsau  hbcsuy g ascjbgyu sagyusua iug cuay iuh cuihasuihicuash uihaiu cauihcuish a
          ghvsacuy gasyubcku;ash uihiuh bckah uysgasbhhcg u ocgubg 
          b aytcfua bskjchas uygcbajhbaulsyhyujacsb asg uyasg yug uyckjl chal gasuhbc g asdhb cjkh cluhjkh
          <br/>
          dshgsjd  hsdgouy ab jh uygs dyu bsh gsauydgi skjb ygiudsbbhuisdg uh h uydg syubsaklh yus l hds iug uos gdsliu 
           gsduyg uisgdhyu jivdsgyu guijvh sd sdiuh juvhiy giuvsdujh ui gvdsiuhdvshbuy dsgyudsuihd siu
            usdyg vuksdjhiu vsdaliu hv uivui j;vhiusadjiodshj iupvh duivhsdu hvui uidvsah yugsdiunvsuih gyvhbdsbhliuayy slidesToScroll suhd auy hvjk
            kjds luy dsgiuhvsdk; hviu;sdkjvn hiusa dvnadskljvh iudsavui;jsdankjhgv alkh ui;dsh vjsdhaiu huoiusdhiuk dsiluygui;
            kjlds uiv hsdi;uaknhsudih vuihsadklnjvi;ousadhiuovasdlij vio sadvsdaio vysa vhjais hv9a
            jkdsv ui;hsd;viouhsd aiuvh ndklafh jvoipudahiouvdah iupvadsuiojv iouasdh pvhioa jvheyriyovo</p>
            <h4 className="text-dark">Location:</h4>
            <br/>
          <p>dsgycu  guysdgau h iug gdsiug ihiushuhiuhsu   iuhd suiHIUH UISH IUSGH VGV UISI VGVJKB
            JSDN;IUHSUH JK;S IUH ;UHIUOSDHIUVHSDKHUH SIU VISHIU IUSD HYGHSUHVSUIhi hIU hviuJNHIUHIU
            JKSDHILUVH SDIUH VJKN IUHLIUAH VIUDSHIU GHVIUWHih uih iuhy ihivpi usdhuivh iuhiur
            ui viu;hvu;ih;oivj i'ovh iuhv iuohuivh uihaiuh
          </p>
        </div>
        {/********************************************************** */}
        <div>
      
        </div>
      </div>
      </>
    );
  }
export default Slide;