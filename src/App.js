import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import RedditIcon from "@mui/icons-material/Reddit";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BoltIcon from "@mui/icons-material/Bolt";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import GppGoodIcon from "@mui/icons-material/GppGood";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PsychologyIcon from "@mui/icons-material/Psychology";
import BookIcon from "@mui/icons-material/Book";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import AssistantIcon from "@mui/icons-material/Assistant";
import TheatersIcon from "@mui/icons-material/Theaters";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function App() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const ref = useRef();
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // add your serviceid and template id
    emailjs
      .sendForm(
        "service_01fiesq",
        "template_jdauwpi",
        formRef.current,
        "8vlDde0Y1hQ6NUYMm"
      )
      .then(
        (result) => {
          alert("response sent successfully");
        },
        (error) => {
          alert("response failed");
        }
      );
  };

  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);
  const cards = [
    {
      icon: <EqualizerIcon />,
      title: "Automotive SEO",
      desc: "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today",
    },
    {
      icon: <AdsClickIcon />,
      title: "PPC Precision",
      desc: "Maximize visibility and drive quality traffic with meticulously targeted Pay-Per-Click campaigns.",
    },
    {
      icon: <AssistantIcon />,
      title: "Social Acceleration",
      desc: "Engage and influence your audience across social media platforms, amplifying your brand's presence and connection",
    },
    {
      icon: <BookIcon />,
      title: "Content Excellence",
      desc: "Craft compelling, automotive-specific content that resonates with enthusiasts and drives engagement.",
    },
    {
      icon: <WebAssetIcon />,
      title: "Web Design",
      desc: "Transform visitors into customers with high-performance websites designed for seamless user experiences and increased conversions.",
    },
    {
      icon: <DataThresholdingIcon />,
      title: "Data-Driven Insights",
      desc: "Leverage data to refine your strategies, making informed decisions that drive revenue growth.",
    },
    {
      icon: <PsychologyIcon />,
      title: "End-to-End Solutions",
      desc: "From initial awareness to post-purchase loyalty, we offer full-funnel solutions that guide customers through every step of their journey.",
    },
    {
      icon: <TheatersIcon />,
      title: "Video marketing",
      desc: "Unleash the Power of Video Marketing: Captivate, Engage, and Elevate Your Brand with Compelling Visual Stories.",
    },
  ];

  const card2 = [
    {
      icon: <AutoAwesomeIcon />,
      title: "Market Trends Analysis",
      desc: "Predictive insights to guide real estate strategies.",
    },
    {
      icon: <BoltIcon />,
      title: "Targeted Buyer Persona",
      desc: "Understand and connect with your ideal property buyers.",
    },
    {
      icon: <GppGoodIcon />,
      title: "Competitor Insights",
      desc: "Stand out in the property market with informed strategies.",
    },
    {
      icon: <FindInPageIcon />,
      title: "Visual Content Appeal",
      desc: "Captivate buyers with appealing visuals and immersive experiences.",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <section className="hero d-flex flex-col">
        <div className="d-flex flex-col div-1">
          <h1>
            Elevate <span>Real Estate Success</span> with
            <br /> Osumare's Digital Expertise
          </h1>
          <p className="" style={{fontSize:'20px'}}>
            Tailored Solutions for Thriving in the Digital Real Estate Landscape
          </p>
          <button className="pri-btn">Get started</button>
        </div>
        <div className="div-2">
          <img className="home-png" loading="lazy" src="Img/marketing.png" alt="marketing" />
        </div>
        <div className="overlay"></div>
      </section>
      <section className="sec-2 d-flex flex-col">
        <div className="sec2-header">
          <h2>Real Estate-Focused Digital Mastery</h2>
        </div>
        <div className="sec2-div d-flex">
          <div className="sec2-div-1">
            <img src="Img/marketing2.png" loading="lazy"  alt="marketing2" />
          </div>
          <div className="sec2-div-2">
            <h2>Unlock the Potential of Digital Real Estate Excellence</h2>
            <p>
              At Osumare, we understand that the real estate landscape demands a
              digital presence that aligns with the intricacies of property
              marketing. Our range of specialized services is meticulously
              designed to catapult your brand's success in the ever-evolving
              digital property market.
            </p>
            <button className="pri-btn">Get Started</button>
          </div>
        </div>
      </section>
      <section className="sec-3 d-flex flex-col">
        <h2>Our Service Offerings</h2>
        <p>Strategies that Drive Property Market Excellence</p>
        <div className="card-cont">
          {cards.map((item, index) => (
            <div className="card d-flex flex-col" key={index}>
              <div className="icon">{item.icon}</div>
              <span>{item.title}</span>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <button className="pri-btn">Get Started</button>
      </section>
      <section className="sec-4 d-flex flex-col">
        <h2>Navigating Real Estate's Digital Landscape</h2>
        <p style={{ fontSize: "16px", margin: "0 0 20px 0" }}>
          Insights for Real Estate Marketing Advantage
        </p>
        <div className="sec4-div d-flex">
          <div className="sec4-div-1 d-flex flex-col">
            {card2.map((item, index) => (
              <div className="box d-flex" key={index}>
                <div className="icon">{item.icon}</div>
                <div className="box-div">
                  <span>{item.title}</span>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="sec4-div-2">
            <img src="Img/marketing3.png" loading="lazy" alt="marketing3" />
          </div>
        </div>
      </section>
      <section className="sec-2 d-flex flex-col">
        <div className="sec2-header">
          <h2> Driving Property Inquiries to Conversions</h2>
          <p>Streamlined Strategies for Real Estate Success</p>
        </div>
        <div className="sec2-div d-flex">
          <div className="sec2-div-1">
            <img src="Img/marketing4.png" loading="lazy" alt="marketing2" />
          </div>
          <div className="sec2-div-2">
            <h2>Optimized Path to Property Purchase</h2>
            <p>
              In the dynamic realm of real estate, the journey from a property
              inquiry to a successful conversion demands a well-crafted
              approach. At Osumare, we specialize in guiding potential buyers
              through this journey seamlessly, maximizing
              inquiries-turned-conversions with expert strategies.
            </p>
            <button className="pri-btn">Get Started</button>
          </div>
        </div>
      </section>
      <section className="sec-5 d-flex flex-col">
        <h2 style={{ textAlign: "center" }}>
          Driving Property Inquiries to Conversions
        </h2>
        <div className="sec5-div-1 d-flex">
          <div className="sec5-box d-flex flex-col">
            <div className="sec5-icon">
              <img
                style={{ height: "70px", width: "70px" }}
                src="https://s3-alpha-sig.figma.com/img/d7be/b3fb/9188e49df1213b5342856400bb24fee2?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MqCtNS~dbVF77e1CAaKMGa1PGQqvTGtUTnkEQkBIHJT95bAhdYnMsW5yzkKs5xv8qUwmak52mjeO-yleN9ysCJPBPJ7dz7Fp5C2mTgvDda1FewSdu6ThabH9gqgnRe45gU0oEDI4CUIv7RjFuFC6AG8QuoHbzt1cEzEgHQ~bpB5Efrw4fiTlQteFeCPcq9azVinYUPl7p1emc9wMoZgS2LA6xHGNa4pZRqiQJY50498tvxhe8MiJQT8ZFWJtnpmyKa8Q1o6P1Eyc~-Qxf0FJ4CN4LJYFupY1NjgAM3dy2oTVV-BhM1R0TNGSWD2s2T87Kwf1~Dwnqvep-m2aFAXzMg__"
                alt="png-icon"
              />
            </div>
            <span>Call-to-Action Optimization</span>
            <p>
              Our carefully crafted CTAs guide potential buyers through the
              property journey, enhancing engagement and conversion rates.
            </p>
          </div>
          <div className="sec5-box d-flex flex-col">
            <div className="sec5-icon">
              <img
                style={{ height: "70px", width: "70px" }}
                src="https://s3-alpha-sig.figma.com/img/37b0/d36e/08f9ff2d56ac2419a67833b5aab05a07?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D5VGSEFi6JaRXJjtgMYK82n3SNJJeFnv5rg9xj-JsVeBeiHp41e72TZD5CKrfcnLJxEryiBnn5aEJJEzC7fb1YUYGbG87G1LCQlEX8XbmdgwYrrcbJMARNRs6d6yUSAQaHKiiywW7DDtRCLSDejnnkX1sjdrjomdU2nWw4y1vevCRj7RAL6U-ey8HQ7W5BJX2ItukHf~utkaWIvHqvWhX0TXnFAQS4DGLGlEL6KbiXjHvIqox3QUMIe4snov9M-sZztbcwpRMUJ0kZK2PkZ87SLyheHmalm-NKnIT9dov3x4qCORLiwUccHzPAkt3RSguECvK1isb9ESPKvHJcDFvA__"
                alt="png-icon"
                loading="lazy"
              />
            </div>
            <span>Landing Page Efficiency</span>
            <p>
              Tailored landing pages are designed for maximum property lead
              conversion. They provide seamless user experiences and clear
              pathways for inquiry submission.
            </p>
          </div>
        </div>
        <div className="sec5-div-1 d-flex">
          <div className="sec5-box d-flex flex-col">
            <div className="sec5-icon">
              <img
                style={{ height: "70px", width: "70px" }}
                src="https://s3-alpha-sig.figma.com/img/38c1/6b61/89d370bbdc99488e558013c68eb8b427?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GW8WvVmvhH1-O8xnHnCoUiELm~Nf~y09rJMuSnkboeOM9X-ieJ0dWGSu28FlYyQXUAzw6-SVHYUmEdQ33~7SjKzuW~TnlzIMZ7qyWKM9ZMIc7DtMk~~OiuwEpbR-VsqQuJ4U1Z~6YCalJxKwshJE-JTQowTzs8hK0PykiCFMHWDn0327DRK-1u4BwJf7HHeVTQF-y1Iro9MOb0opdzgoc038A74Bs5X~y2TXMEJ2l91S0MSlhttZ9OrkhyavDnTbmUhccZpEhrKHW4jj-LiwerfT1QJcFyi7xr2nJOJelriscWPGkbQFxtyJVug0icCkMLfd1-z3FOE2OjtbX~hY0g__"
                alt="png-icon"
                loading="lazy"
              />
            </div>
            <span>Call-to-Action Optimization</span>
            <p>
              Our carefully crafted CTAs guide potential buyers through the
              property journey, enhancing engagement and conversion rates.
            </p>
          </div>
          <div className="sec5-box d-flex flex-col">
            <div className="sec5-icon">
              <img
                style={{ height: "70px", width: "70px" }}
                src="https://s3-alpha-sig.figma.com/img/8919/8cc8/a559117b6817558b6f3f7deb97d77de2?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKr5gFWuciO1OEo~s5e8ZRwU1~ZbZGs~dOZSrbGiIRQA9WS1PWAt72kRNKtQTGG0pqsePfxvM4EnQOAEDcrczkD182qfF85XzOcnlZfOyHR6VXWMAs9IHtTi7-0aUQKdnyiWXBtl8FYj-BXPThO4bpSxZlcVWVnsGw00egS50nvDVbSjXxtEmGh8GakKRcPnLrbCWnIYhoONFSK34l4EhXUj34fDUYLFVRIYi0UgjqbRUvJKsmiaJ6NBQVifq9cz~x20KZG4pZO1rWKXH4R8vc3BApc-u8o2IgXJSmP6ONGhDs2mKDAfFqjPZzyNM2Wqh-3955yRaDBnmOB7l5nWpA__"
                alt="png-icon"
                loading="lazy"
              />
            </div>
            <span>Landing Page Efficiency</span>
            <p>
              Tailored landing pages are designed for maximum property lead
              conversion. They provide seamless user experiences and clear
              pathways for inquiry submission.
            </p>
          </div>
        </div>
      </section>
      <section className="sec-5 d-flex flex-col">
        <h2 style={{ textAlign: "center" }}>
          Driving Property Inquiries to Conversions
        </h2>
        <div className="sec5-div-1 d-flex">
          <div className="sec5-box d-flex flex-col">
            <div className="sec5-icon">
              <img
                style={{ height: "70px", width: "70px" }}
                src="https://s3-alpha-sig.figma.com/img/8c22/a4d8/01a0cb689c23ccbda86a376381650df3?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BBC~I3eN-tZGHn42-RMQ2Lv9t8I~oe~SZ1A1aKJDRXFHrf2~5O-4L2i-mFKShCmNj2jTRifIOOQg7nkK58cK7rD41MAweeRWI8GhJKenXbZTtM5DmXx4bkpzeCCM9tAkiQmYobPzArWwa-UKu8NPyFIe7AIi4WGDuUqRrnHFzcvyh8a5B5QQ~wTogVLC5w7QYaSEAoRyiy4iq2fPBnJBBbFEEz6Veh-Aj6Au64iTVOJ-Q928koMdu6ET65lLazYFyM1raGZYFoTquQmgT0vlR59jJxlkpwtygn2lP5D99RLLUxqbD4sP4jbN3pLizoqH2N6E190Yiu8qo7WOa~Y-FA__"
                alt="png-icon"
                loading="lazy"
              />
            </div>
            <span>Call-to-Action Optimization</span>
            <p>
              Our carefully crafted CTAs guide potential buyers through the
              property journey, enhancing engagement and conversion rates.
            </p>
          </div>
          <div className="sec5-box d-flex flex-col">
            <div className="sec5-icon">
              <img
                style={{ height: "70px", width: "70px" }}
                src="https://s3-alpha-sig.figma.com/img/8919/8cc8/a559117b6817558b6f3f7deb97d77de2?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fKr5gFWuciO1OEo~s5e8ZRwU1~ZbZGs~dOZSrbGiIRQA9WS1PWAt72kRNKtQTGG0pqsePfxvM4EnQOAEDcrczkD182qfF85XzOcnlZfOyHR6VXWMAs9IHtTi7-0aUQKdnyiWXBtl8FYj-BXPThO4bpSxZlcVWVnsGw00egS50nvDVbSjXxtEmGh8GakKRcPnLrbCWnIYhoONFSK34l4EhXUj34fDUYLFVRIYi0UgjqbRUvJKsmiaJ6NBQVifq9cz~x20KZG4pZO1rWKXH4R8vc3BApc-u8o2IgXJSmP6ONGhDs2mKDAfFqjPZzyNM2Wqh-3955yRaDBnmOB7l5nWpA__"
                alt="png-icon"
                loading="lazy"
              />
            </div>
            <span>Landing Page Efficiency</span>
            <p>
              Tailored landing pages are designed for maximum property lead
              conversion. They provide seamless user experiences and clear
              pathways for inquiry submission.
            </p>
          </div>
        </div>
        <div className="sec5-div-1 d-flex">
          <div className="sec5-box d-flex flex-col">
            <div className="sec5-icon">
              <img
                style={{ height: "70px", width: "70px" }}
                src="https://s3-alpha-sig.figma.com/img/a383/81d6/3adee64ef7dfaf3a83459c16c8345b1e?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PIrTtSxvwQM6gusyj8CsXTfUmGgRu90EgdMDWs9gwGrMXKNIjVznZTKAyW5npw3fBJHqqlJbt9zj55erw37I8b~HDI9T4g8DfKQ9IxfNqwGPr0Gz8xhZlgntVS4xNsSTW0lCrBbBXpxya7IXwQfuG7d1vgNnzPPtOkO1cD7jea8xSdmcM3nrvwSDkvBswG3mpm8zhMsLcnZRcEv0fb0XuwwXdF7ftGVNJaPBunpqQBmkGOEvavI36HzMgpu3B~GRFbAMlwnSjsbLZ2e2eIzsSDHXGaOS2IoEXcLg3GXB1wCfnTciz-li~3LXjmtI0bVkUSUYe3BLiYXCuSaaJfj7pg__"
                alt="png-icon"
                loading="lazy"
              />
            </div>
            <span>Call-to-Action Optimization</span>
            <p>
              Our carefully crafted CTAs guide potential buyers through the
              property journey, enhancing engagement and conversion rates.
            </p>
          </div>
          <div className="sec5-box d-flex flex-col">
            <div className="sec5-icon">
              <img
                style={{ height: "70px", width: "70px" }}
                src="https://s3-alpha-sig.figma.com/img/c307/c541/e7e366dbb68ca048524967597848380a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G8A9~p7eN5hT5SgXV~U9wwL2Lb3ny0p5f-rEVPsZldLgSU~zKZ3b83rCpt-9Jmffmf7eaScvYDE9UcpX6aVaoNluhqTxmXnSbtFQIn8ahb7NkfnntY6RAiiIts8A-h0Wqhs6WR5LHan2yqQLd4M-tuvBNyfkyAd6GgBoTdqNi0g6BvJyUtFTynL339YQtVPK~PnyrS6P-T2kVBPb3aVXKXtXsNTK6uiL~q6zlPzYez8S8JA3GbL8-6s18t7-hbiqZrBgHDXXdKHyT7IWlXVMMuFqwOAdMncyT7wXlWrDXijuDy-ziK0ZEUCUvkyYV4WquzMnGHUzvo9VOJuLtql0fA__"
                alt="png-icon"
                loading="lazy"
              />
            </div>
            <span>Landing Page Efficiency</span>
            <p>
              Tailored landing pages are designed for maximum property lead
              conversion. They provide seamless user experiences and clear
              pathways for inquiry submission.
            </p>
          </div>
        </div>
      </section>
      <section className="sec-6 d-flex flex-col">
        <h2>Your Peace of Mind</h2>
        <p style={{ margin: "0" }}>
          Through our conversion-focused strategies, we ensure that property
          seekers are not just visitors, but engaged prospects ready to make
          their next move in the real estate market
        </p>
        <button className="pri-btn" style={{ marginTop: "20px" }}>
          Get Started
        </button>
        <div className="theme-left"></div>
        <div className="theme-right"></div>
      </section>
      <section className="sec-7 d-flex flex-col">
        <h2 style={{ textAlign: "center" }}>What Our Pharma Partners Say</h2>
        <p style={{ fontSize: "16px", margin: "0" }}>
          Driving Transformations, One Brand at a Time
        </p>
        <div className="testimonial-box d-flex">
          <div className="sec7-div-1">
            <img src="Img/testimonial.png" loading="lazy" alt="textimonial png" />
            <div
              className="play-btn d-flex"
              style={{
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            >
              <p>
                <PlayCircleIcon sx={{ fontSize: "45px" }} />
              </p>
            </div>
          </div>
          <div className="sec7-div-2 d-flex flex-col">
            <div className="d-flex" style={{ gap: "30px" }}>
              <img
                src="Img/testimonial.png"
                style={{
                  height: "40px",
                  width: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                alt=""
              />
              <p style={{ fontWeight: "500", fontSize: "15px" }}>Tabish khan</p>
            </div>
            <p>
              Osumare's expertise in pharma marketing is unparalleled. Their
              strategies helped us navigate complex regulations while driving
              remarkable growth.
            </p>
          </div>
        </div>
        <div className="d-flex" style={{ gap: "20px" }}>
          <div
            className="d-flex"
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              border: "2px solid #0078FF",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
              color: "#0078FF",
            }}
          >
            <ArrowBackIcon />
          </div>
          <div
            className="d-flex"
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
              border: "2px solid #0078FF",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
              color: "#0078FF",
            }}
          >
            <ArrowForwardIcon />
          </div>
        </div>
      </section>
      <section className="sec-8 d-flex flex-col">
        <h2>Frequently Asked Questions</h2>
        <p>
          Pinpoint your audience with precision, ensuring your marketing efforts
          reach those most likely to engage with your brand.
        </p>
        <div className="faq-box">
          <div
            className="item d-flex"
            onClick={() => setFaq1(!faq1)}
            style={{
              backgroundColor: `${faq1 ? "#0078FF" : ""}`,
              color: `${faq1 ? "white" : ""}`,
            }}
          >
            <p>1. How does Osumare measure campaign success?</p>
            {faq1 ? (
              <ExpandLessIcon className="mr" />
            ) : (
              <ExpandMoreIcon className="mr" />
            )}
          </div>
          <div
            className="open-section d-flex"
            style={{ display: `${faq1 ? "flex" : "none"}` }}
          >
            <p>
              We believe in measurable results. Our data-driven approach means
              that every campaign's performance is tracked, analyzed, and
              refined for optimal outcomes. We provide regular reports that
              detail key metrics, giving you clear insights into how our
              strategies are driving growth for your brand.
            </p>
          </div>
          <div
            className="item"
            onClick={() => setFaq2(!faq2)}
            style={{
              backgroundColor: `${faq2 ? "#0078FF" : ""}`,
              color: `${faq2 ? "white" : ""}`,
            }}
          >
            <p>2. How does Osumare measure campaign success? </p>
            {faq2 ? (
              <ExpandLessIcon className="mr" />
            ) : (
              <ExpandMoreIcon className="mr" />
            )}
          </div>
          <div
            className="open-section d-flex"
            style={{ display: `${faq2 ? "flex" : "none"}` }}
          >
            <p>
              We believe in measurable results. Our data-driven approach means
              that every campaign's performance is tracked, analyzed, and
              refined for optimal outcomes. We provide regular reports that
              detail key metrics, giving you clear insights into how our
              strategies are driving growth for your brand.
            </p>
          </div>
          <div
            className="item"
            onClick={() => setFaq3(!faq3)}
            style={{
              backgroundColor: `${faq3 ? "#0078FF" : ""}`,
              color: `${faq3 ? "white" : ""}`,
            }}
          >
            <p>3. How does Osumare measure campaign success?</p>
            {faq3 ? (
              <ExpandLessIcon className="mr" />
            ) : (
              <ExpandMoreIcon className="mr" />
            )}
          </div>
          <div
            className="open-section d-flex"
            style={{ display: `${faq3 ? "flex" : "none"}` }}
          >
            <p>
              We believe in measurable results. Our data-driven approach means
              that every campaign's performance is tracked, analyzed, and
              refined for optimal outcomes. We provide regular reports that
              detail key metrics, giving you clear insights into how our
              strategies are driving growth for your brand.
            </p>
          </div>
        </div>
      </section>
      <section
        className="sec-9 d-flex flex-col"
        style={{ position: "relative" }}
      >
        <h2 style={{ textAlign: "center", padding: "0 10px" }}>
          Connect with Our Digital Marketing Experts
        </h2>
        <p style={{ textAlign: "center", padding: "0 10px" }}>
          Reach Out for Tailored Strategies and Results-Driven Solutions. Let's
          Elevate Your Online Presence Together
        </p>
        <form ref={formRef} className="contact-form d-flex flex-col">
          <div
            className="form-div d-flex"
            style={{ gap: "20px", padding: "10px 20px" }}
          >
            <div className="form-div-1 d-flex flex-col flex-1">
              <div className="form-inp d-flex flex-col">
                <span>Name</span>
                <input
                  placeholder="Enter Your Name"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-inp d-flex flex-col">
                <span>Phone</span>
                <input
                  placeholder="Enter Your Number"
                  name="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-inp d-flex flex-col">
                <div className="form-inp d-flex flex-col">
                  <span>Email</span>
                  <input
                    placeholder="Enter Your Email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="form-div-2 d-flex flex-col flex-1">
              <div className="form-inp d-flex flex-col">
                <span>Message</span>
                <textarea
                  rows={10}
                  style={{ resize: "none", padding: "8px" }}
                  onChange={(e) => setMessage(e.target.value)}
                  name="message"
                />
              </div>
            </div>
          </div>
          <div className="d-flex">
            <button
              className="pri-btn"
              style={{ width: "200px", margin: "auto", marginTop: "5px" }}
              onClick={sendEmail}
            >
              Get Started
            </button>
          </div>
        </form>
        <div className="theme-left"></div>
        <div className="theme-right"></div>
      </section>
      <footer className="sec-10 d-flex flex-col">
        <div className="footer-box d-flex" style={{ padding: "30px" }}>
          <div className="sec10-div-1 d-flex flex-col flex-1">
            <div className="d-flex flex-col">
              <img
                src="Img/ass-logo.png"
                alt="logo"
                style={{ height: "100px", width: "150px" }}
              />
              <p style={{ maxWidth: "350px" }}>
                The best digital marketing agency in Pune with a proven track
                record of consistently delivering quality service.
              </p>
            </div>
            <div className="d-flex flex-col">
              <span>Address</span>
              <p style={{ maxWidth: "400px" }}>
                Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi,
                Pune-14, Maharastra, India.
              </p>
            </div>
            <div className="d-flex flex-col">
              <span>Contact</span>
              <div
                className="d-flex flex-col"
                style={{ marginTop: "10px", fontSize: "14px" }}
              >
                <div
                  className="d-flex"
                  style={{
                    gap: "10px",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <EmailIcon sx={{ fontSize: "20px" }} />
                  <p style={{ margin: "0" }}>hello@osumare.in</p>
                </div>
                <div
                  className="d-flex"
                  style={{
                    gap: "10px",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <CallIcon sx={{ fontSize: "20px" }} />
                  <p style={{ margin: "0" }}>+91 8459 8762 26</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="sec10-div-2 d-flex flex-1"
            style={{ justifyContent: "space-around" }}
          >
            <div>
              <span>Menu</span>
              <div
                className="d-flex flex-col"
                style={{ gap: "10px", marginTop: "10px" }}
              >
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Services</a>
                <a href="">Blog</a>
                <a href="/">Work</a>
                <a href="/">Career</a>
              </div>
            </div>
            <div>
              <span>Social</span>
              <div className="d-flex" style={{ flexWrap: "wrap", gap: "15px" }}>
                <div className="icon">
                  <XIcon />
                </div>
                <div className="icon">
                  <FacebookIcon />
                </div>
                <div className="icon">
                  <YouTubeIcon />
                </div>
                <div className="icon">
                  <PinterestIcon />
                </div>
                <div className="icon">
                  <InstagramIcon />
                </div>
                <div className="icon">
                  <WhatsAppIcon />
                </div>
                <div className="icon">
                  <RedditIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p style={{ marginTop: "20px" }}>
          © 2023 Osumare. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
