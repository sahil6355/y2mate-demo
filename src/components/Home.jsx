import React from "react";
import { useTranslation } from "react-i18next";
import SeachContainer from "./SeachContainer";

const Home = ({ searchProps, convertProps }) => {
  const { t } = useTranslation();

  const features = t("features", { returnObjects: true });
  const homeFaqs = t("homeFaqs", { returnObjects: true });

  return (
    <>
      <SeachContainer
        searchLocation={searchProps}
        convertLocation={convertProps}
      />
      <div className="container">
        <h2 className="text-center mt-48">{t("headTitle")}</h2>
        <p className="text-justify">{t("introParagraph")}</p>
        <p>{t("introParagraph2")}</p>
        <div className="border-line2 mt-48"></div>
        <div className="y2meta-guide">
          <div className="how-to-download">
            <h2>{t("howToDownload")}</h2>
            <ol>
              <li>{t("step1")}</li>
              <li>{t("step2")}</li>
              <li>{t("step3")}</li>
              <li>{t("step4")}</li>
            </ol>
          </div>
          <div className="y2meta-advantages">
            <h2>{t("advantages")}</h2>
            <ul>
              <li>{t("adStep1")}</li>
              <li>{t("adStep2")}</li>
              <li>{t("adStep3")}</li>
              <li>{t("adStep4")}</li>
              <li>{t("adStep5")}</li>
            </ul>
          </div>
        </div>
        <div className="border-line2 mt-48"></div>
        <h2 className="text-center mt-48">{t("featuresHeading")}</h2>
        <div className="feature-list mt-48">
          {features?.map?.((feature, index) => (
            <div className="feature-item" key={index}>
              <img
                src={`../../images/${feature?.imgClass}.webp`}
                width="50"
                height="50"
                alt={feature?.title}
              />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="border-line2 mt-48"></div>
        <h2 className="text-center mt-48">{t("faqHeading")}</h2>
        {homeFaqs?.map?.((faq, index) => (
          <div className="faq-sec" key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
