import React from "react";
// import { useTranslation } from "react-i18next";
import { useTranslation } from "gatsby-plugin-react-i18next";
import SeachContainer from "./SeachContainer";

const YoutubeToMp3 = () => {
  const { t } = useTranslation();

  const mp3Features = t("youtubeToMp3.mp3Features", { returnObjects: true });
  const mp3Faqs = t("youtubeToMp3.mp3Faqs", { returnObjects: true });

  return (
    <>
      <SeachContainer />
      <div className="container">
        <h2 className="text-center mt-48">{t("youtubeToMp3.title")}</h2>
        <p className="text-justify">{t("youtubeToMp3.description")}</p>
        <p>{t("youtubeToMp3.description2")}</p>
        <div className="border-line2 mt-48"></div>
        <div className="y2meta-guide">
          <div className="how-to-download">
            <h2>{t("youtubeToMp3.steps.title")}</h2>
            <ol>
              <li>{t("youtubeToMp3.steps.step1")}</li>
              <li>{t("youtubeToMp3.steps.step2")}</li>
              <li>{t("youtubeToMp3.steps.step3")}</li>
              <li>{t("youtubeToMp3.steps.step4")}</li>
            </ol>
          </div>
          <div className="y2meta-advantages">
            <h2>{t("youtubeToMp3.advantages")}</h2>
            <ul>
              <li>{t("youtubeToMp3.adStep1")}</li>
              <li>{t("youtubeToMp3.adStep2")}</li>
              <li>{t("youtubeToMp3.adStep3")}</li>
              <li>{t("youtubeToMp3.adStep4")}</li>
              <li>{t("youtubeToMp3.adStep5")}</li>
              <li>{t("youtubeToMp3.adStep6")}</li>
            </ul>
          </div>
        </div>
        <div className="border-line2 mt-48"></div>
        <h2 className="text-center mt-48">{t("youtubeToMp3.featuresTitle")}</h2>
        <div className="feature-list mt-48">
          {mp3Features?.map?.((feature, index) => (
            <div className="feature-item" key={index}>
              <img
                src={`../../images/${feature?.imageClass}.webp`}
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
        <h2 className="text-center mt-48">{t("youtubeToMp3.faqTitle")}</h2>
        {mp3Faqs?.map?.((faq, index) => (
          <div className="faq-sec" key={index}>
            <h3>{faq?.question}</h3>
            <p>{faq?.answer}</p>
            {faq?.steps ? (
              <ul>
                {faq?.steps?.map?.((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ul>
            ) : null}
            {faq?.text ? <p>{faq?.text}</p> : null}
          </div>
        ))}
      </div>
    </>
  );
};

export default YoutubeToMp3;
