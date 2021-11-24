// import logo from './logo.svg';
import React from 'react';
import flowerBottomRight from './assets/flower-bottom-right.svg';
// import flowerBottomRightFlip from './assets/flower-bottom-right-flip.svg';
import flowerBottomRight2 from './assets/flower-bottom-right-2.svg';
import flowerBottomLeft2 from './assets/flower-bottom-left-2.svg';
import flowerBottom2 from './assets/flower-bottom-2.svg';
import flowerTopRight from './assets/flower-top-right.svg';
import flowerTopRight2 from './assets/flower-top-right-2.svg';
import flowerTopLeft from './assets/flower-top-left.svg';
import flowerTopLeftFlip from './assets/flower-top-left-flip.svg';
import modalTopLeft from './assets/modal-top-left.svg';
import modalTopRight from './assets/modal-top-right.svg';
import modalBottomLeft from './assets/modal-bottom-left.svg';
import modalBottomRight from './assets/modal-bottom-right.svg';
import modalCenter from './assets/modal-center.svg';
import dots from './assets/dots.svg';
import dotsHorizontal from './assets/dots_horizontal.svg';
import brideGroom2 from './assets/bride_groom_2.png';
import rings from './assets/rings.svg';
import and from './assets/and.svg';
import informationHeader from './assets/information-header.svg';
import informationBridename from './assets/information-bride-name.png';
import healthProtocol from './assets/health-protocol.svg';
import iconPlay from './assets/icon-play.svg';
import iconPause from './assets/icon-pause.svg';
import script from './assets/script.svg';
import logolight from './assets/logo-light.png';
import song from './assets/song.mp3'
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import { Modal, Container, Row, Col } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery'

const App = () => {
  const bgShadow = 'https://res.cloudinary.com/tetikoes-studio/image/upload/w_500,c_scale/v1637338023/wedding/ican/bg-shadow_dbwldw.png';
  const bgShadowFlip = 'https://res.cloudinary.com/tetikoes-studio/image/upload/w_500,c_scale/v1637338023/wedding/ican/bg-shadow-flip_cqzugd.png';
  const denahLokasi = 'https://res.cloudinary.com/tetikoes-studio/image/upload/w_500,c_scale/v1637407942/wedding/ican/denah-lokasi_em9b7s.png';
  const [play, { pause }] = useSound(song);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalShow, setModalShow] = useState(true);
  const images = [
    {
      original: 'https://res.cloudinary.com/tetikoes-studio/image/upload/w_1500,c_scale/v1637250818/wedding/ican/dua_a8pilt.jpg',
      thumbnail: 'https://res.cloudinary.com/tetikoes-studio/image/upload/w_150,c_scale/v1637250818/wedding/ican/dua_a8pilt.jpg',
    },
    {
      original: 'https://res.cloudinary.com/tetikoes-studio/image/upload/w_1500,c_scale/v1637250817/wedding/ican/satu_tqir4q.jpg',
      thumbnail: 'https://res.cloudinary.com/tetikoes-studio/image/upload/w_150,c_scale/v1637250817/wedding/ican/satu_tqir4q.jpg',
    },
    {
      original: 'https://res.cloudinary.com/tetikoes-studio/image/upload/w_1500,c_scale/v1637252317/wedding/ican/_MG_8742_vm4cfa.jpg',
      thumbnail: 'https://res.cloudinary.com/tetikoes-studio/image/upload/w_150,c_scale/v1637252317/wedding/ican/_MG_8742_vm4cfa.jpg',
    },
    {
      original: 'https://res.cloudinary.com/tetikoes-studio/image/upload/w_1500,c_scale/v1637252317/wedding/ican/_MG_8725_lrmpty.jpg',
      thumbnail: 'https://res.cloudinary.com/tetikoes-studio/image/upload/w_150,c_scale/v1637252317/wedding/ican/_MG_8725_lrmpty.jpg',
    },
    {
      original: 'https://res.cloudinary.com/tetikoes-studio/image/upload/w_1500,c_scale/v1637252318/wedding/ican/_MG_8735_e34evt.jpg',
      thumbnail: 'https://res.cloudinary.com/tetikoes-studio/image/upload/w_150,c_scale/v1637252318/wedding/ican/_MG_8735_e34evt.jpg',
    },
    {
      original: 'https://res.cloudinary.com/tetikoes-studio/image/upload/w_1500,c_scale/v1637252319/wedding/ican/_MG_8732_kck5d1.jpg',
      thumbnail: 'https://res.cloudinary.com/tetikoes-studio/image/upload/w_150,c_scale/v1637252319/wedding/ican/_MG_8732_kck5d1.jpg',
    },
    {
      original: 'https://res.cloudinary.com/tetikoes-studio/image/upload/w_1500,c_scale/v1637252319/wedding/ican/_MG_8708_htyeel.jpg',
      thumbnail: 'https://res.cloudinary.com/tetikoes-studio/image/upload/w_150,c_scale/v1637252319/wedding/ican/_MG_8708_htyeel.jpg',
    },
    {
      original: 'https://res.cloudinary.com/tetikoes-studio/image/upload/w_1500,c_scale/v1637252349/wedding/ican/_MG_8644_jgi1rz.jpg',
      thumbnail: 'https://res.cloudinary.com/tetikoes-studio/image/upload/w_150,c_scale/v1637252349/wedding/ican/_MG_8644_jgi1rz.jpg',
    },
    {
      original: 'https://res.cloudinary.com/tetikoes-studio/image/upload/w_1500,c_scale/v1637252321/wedding/ican/asa_zspekl.jpg',
      thumbnail: 'https://res.cloudinary.com/tetikoes-studio/image/upload/w_150,c_scale/v1637252321/wedding/ican/asa_zspekl.jpg',
    },
    {
      original: 'https://res.cloudinary.com/tetikoes-studio/image/upload/w_1500,c_scale/v1637252325/wedding/ican/_MG_8719_g9clxf.jpg',
      thumbnail: 'https://res.cloudinary.com/tetikoes-studio/image/upload/w_150,c_scale/v1637252325/wedding/ican/_MG_8719_g9clxf.jpg',
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, []);


  return (
    <div className="position-relative">
      {/* modal */}
      <Modal fullscreen={true} show={isModalShow} onHide={setModalShow.bind(false)}>
        <div className="App-dialog App-one-page-height">
          {/* bottom left */}
          <div className="position-absolute bottom-0 left-0 App-index">
            <img src={modalBottomLeft} className="p-4 App-modal-image" alt="logo" />
          </div>

          {/* bottom right */}
          <div className="position-absolute bottom-0 end-0 App-index">
            <img src={modalBottomRight} className="pb-4 App-modal-image" alt="logo" />
          </div>

          {/* top left */}
          <div className="position-absolute top-0 left-0 App-index">
            <img src={modalTopLeft} className="pt-4 App-modal-image" alt="logo" />
          </div>

          {/* top right */}
          <div className="position-absolute top-0 end-0 App-index">
            <img src={modalTopRight} className="p-4 App-modal-image" alt="logo" />
          </div>

          {/* content center */}
          <Row className="App-one-page-height justify-content-center align-items-center App-modal-center">
            <Col xs={8} sm={6} md={4} lg={3}>
              <img src={modalCenter} className="img-fluid App-modal-image-center" />
              <br />
              <button
                onClick={() => {
                  setModalShow(false);
                  setIsPlaying(true)
                  play();
                }}
                className="App-btn mt-4">
                Buka Undangan
              </button>
            </Col>
          </Row>
          <img className="position-absolute App-bg-shadow" src={bgShadow} />
        </div>

      </Modal>

      <div onClick={() => {
        setIsPlaying(!isPlaying)
        if (isPlaying) {
          pause();
        } else {
          play()
        }
      }} className="float">
        <img className="img-fluid" src={isPlaying ? iconPause : iconPlay} />
      </div>
      {/* First page */}
      <div className="position-relative App App-one-page-height">
        {/* bottom left */}
        <div className="position-absolute bottom-0 left-0">
          <img src={modalBottomLeft} className="p-4 App-modal-image" alt="logo" />
        </div>

        {/* bottom right */}
        <div className="position-absolute bottom-0 end-0 ">
          <img src={modalBottomRight} className="pb-4 App-modal-image" alt="logo" />
        </div>

        {/* top left */}
        <div className="position-absolute top-0 left-0 ">
          <img src={modalTopLeft} className="pt-4 App-modal-image" alt="logo" />
        </div>

        {/* top right */}
        <div className="position-absolute top-0 end-0 ">
          <img src={modalTopRight} className="p-4 App-modal-image" alt="logo" />
        </div>
        <img className="position-absolute App-bg-shadow" src="https://res.cloudinary.com/tetikoes-studio/image/upload/w_1500,c_scale/v1637250818/wedding/ican/dua_a8pilt.jpg" />
      </div>
      {/* Second page */}
      <div className="App position-relative">
        <header className="App-header position-relative">
          <div className="container App-index">
            <img src={rings} className="img-fluid" alt="logo" data-aos="fade-down" />
            <div className="row gy-3 mt-3 justify-content-center align-items-center">
              <div className="col-md-4" data-aos="zoom-in">
                <span className="App-bride-name">Ichsan Wahyuniardy
                </span>
                <p className="App-parents-name">Putra dari Bapak Sumadi dan Ibu Sudarwati
                </p>
              </div>
              <div className="col-md-2 mt-md-3" data-aos="zoom-in">
                <img src={and} className="img-fluid" alt="logo" />
              </div>
              <div className="col-md-4 mt-md-5" data-aos="zoom-in">
                <span className="App-bride-name">Yolanda Dwi Puspita Rani</span>
                <p className="App-parents-name">Putri dari Bapak Sukatno dan Ibu Erykati
                </p>
              </div>
            </div>
            <div className="row justify-content-center mt-3 mx-3">
              {/* <div className="col-md-6" data-aos="fade-up">
                <img src={brideGroom} className="App-bride-groom-icon position-relative" alt="logo" />
              </div> */}
              <div className="col-md-6 mt-4" data-aos="fade-up">
                <p className="App-desc1">Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.</p>
                <p className="App-desc1">(QS. Ar-Ruum : 21)</p>
              </div>
            </div>

          </div>
          <div className="App-header-one-page">
            <div className="position-absolute top-0 start-50 translate-middle-x" data-aos="fade-down">
              <img src={dotsHorizontal} className="" alt="logo" />
            </div>
            <div className="position-absolute top-0 start-0" data-aos="fade-right">
              <img src={flowerTopLeft} className="App-flower-bottom-right" alt="logo" />
            </div>
            <div className="position-absolute top-0 end-0" data-aos="fade-up">
              <img src={flowerTopRight} className="App-flower-bottom-right" alt="logo" />
            </div>
            <div className="position-absolute top-50 end-0 me-3" data-aos="fade-down">
              <img src={dots} className="" alt="logo" />
            </div>
            <div className="position-absolute top-50 start-0 ms-3" data-aos="fade-down-right">
              <img src={dots} className="" alt="logo" />
            </div>
            <div className="position-absolute bottom-0 end-0" data-aos="fade-up">
              <img src={flowerBottomRight} className="App-flower-bottom-right img-fluid" alt="logo" />
            </div>
          </div>
        </header>
        <div className="App-information-container m-0 position-relative">
          {/* bride groom BG */}
          <div className="position-absolute bottom-0 start-0">
            <img src={brideGroom2} className="img-fluid App-bride-groom_icon2" alt="logo" />
          </div>

          {/* bottom left */}
          <div className="position-absolute bottom-0 start-0" data-aos="fade-up-right">
            <img src={flowerBottomLeft2} className="App-flower-bottom-right App-three-flower" alt="logo" />
          </div>

          {/* bottom */}
          <div className="position-absolute bottom-0 start-50 translate-middle-x" data-aos="fade-up">
            <img src={flowerBottom2} className="App-flower-bottom-right App-three-flower-center" alt="logo" />
          </div>

          {/* bottom right */}
          <div className="position-absolute bottom-0 end-0" data-aos="fade-up">
            <img src={flowerBottomRight2} className="App-flower-bottom-right App-three-flower" alt="logo" />
          </div>
          {/* relative */}
          <img src={informationHeader} className="img-fluid my-3 position-relative" alt="logo" data-aos="fade-up" />
          <br></br>
          <img src={script} className="img-fluid position-relative" alt="logo" data-aos="fade-up" />
          <div className="container position-relative mt-4">
            <div className="row justify-content-center" data-aos="fade-up">
              <div className="col-lg-8">
                <p className="App-text">Assalamu’alaikum Warahmatullahi Wabarakatuh</p>
                <p className="App-text mt-5">Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud menyelenggarakan Acara Pernikahan putra-putri kami Yang Insya Allah akan diselenggarakan pada:</p>
              </div>
            </div>

            <div className="row justify-content-center gx-5">
              <div className="col-6 col-md-5 col-lg-4 text-end" data-aos="flip-left">
                <span className="App-schedule-title">Akad Nikah</span>
                <p className="App-text m-0">Senin, 29 November 2021</p>
                <p className="App-text m-0">Pukul 08.00 WIB</p>
                <p className="App-text m-0">Lokasi: Jagiran II No. 21A, Surabaya</p>
              </div>
              <div className="col-6 col-md-5 col-lg-4 text-start" data-aos="flip-right">
                <span className="App-schedule-title">Resepsi</span>
                <p className="App-text m-0">Minggu, 5 Desember 2021</p>
                <p className="App-text m-0">Pukul 12.00 WIB - 14.00 WIB</p>
                <p className="App-text m-0">Lokasi: Graha SA (Ballroom Ground Floor) Jalan Raya Gubeng No.19 - 21, Surabaya</p>
              </div>
            </div>

            <div className="row justify-content-center position-relative" data-aos="fade-up">
              <div className="col-lg-8">
                <p className="App-text mt-5">Merupakan  suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu dan Saudara/i berkenan hadir untuk memberikan doa dan restu bagi putra-putri kami</p>
                <p className="App-text mt-5">Wassalamu’alaikum Warahmatullahi Wabarakatuh</p>
              </div>
            </div>

            <div className="row justify-content-center mt-4 position-relative">
              <div className="col-4 col-lg-2" data-aos="fade-up-right">
                <p className="App-text m-0">Kel. Bapak Sukatno & Ibu Erykati</p>
              </div>
              <div className="col-4 mt-3" data-aos="zoom-in">
                <img src={informationBridename} className="img-fluid" alt="logo" />
              </div>
              <div className="col-4 col-lg-2" data-aos="fade-up">
                <p className="App-text m-0">Kel. Bapak Sumadi & Ibu Sudarwati</p>
              </div>

            </div>

            <div className="App-footer mt-5 row justify-content-center" data-aos="zoom-in">
              <div className="col-6">
                <p className="App-text-small m-0">Dimohon untuk setiap tamu undangan tetap memperhatikan protokol kesehatan</p>
                <img src={healthProtocol} className="img-fluid mt-2" alt="logo" />
              </div>
            </div>
          </div>
        </div>

        {/* denah lokasi */}

        <div className="App-one-page-height position-relative d-flex justify-content-center align-items-center">
          <img className="App-location-height img-fluid position-relative px-2" src={denahLokasi} />
          <img className="position-absolute App-bg-shadow" src={bgShadow} />
          <div className="App-index position-absolute bottom-0 start-0">
            <img src={flowerTopLeftFlip} className="App-flower-bottom-right" alt="logo" />
          </div>
          <div className="App-index position-absolute top-0 end-0">
            <img src={flowerTopRight2} className="App-flower-bottom-right" alt="logo" />
          </div>
        </div>

        {/* gallery */}
        <div className="App-one-page-height position-relative d-flex justify-content-center align-items-center">
          <div className="container App-gallery">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="mb-5">
                  <span className="App-bride-name">Photo Gallery
                  </span>
                </div>
                <ImageGallery
                  showNav={false}
                  disableSwipe={false}
                  autoPlay={true}
                  items={images} />;
              </div>
            </div>
          </div>
          <div className="App-index position-absolute top-0 start-50 translate-middle-x" data-aos="fade-down">
            <img src={dotsHorizontal} className="" alt="logo" />
          </div>
          <div className="App-index position-absolute bottom-0 start-50 translate-middle-x">
            <img src={dotsHorizontal} className="" alt="logo" />
          </div>
          <div className="App-index position-absolute top-0 start-0">
            <img src={flowerTopLeft} className="App-flower-bottom-right" alt="logo" />
          </div>
          <div className="App-index position-absolute bottom-0 end-0">
            <img src={flowerBottomRight} className="App-flower-bottom-right" alt="logo" />
          </div>
          <img className="position-absolute App-bg-shadow" src={bgShadowFlip} />

        </div>

        {/* footer */}
        <div className="App-footer-tetikoes pt-3">
          <Container>
            <Row>
              <Col lg="6">
                <div className="mb-4">
                  <img src={logolight} alt="" height="20" />
                </div>

                <p className="mb-2">
                  {new Date().getFullYear()} © Tetikoes
                </p>
                <p>
                  Pour your ideas into real masterpieces that can be enjoyed by wide society. We, from Tetikoes Studio, will make them come true.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
