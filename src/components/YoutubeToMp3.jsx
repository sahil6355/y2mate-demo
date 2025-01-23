import React from "react";
import { useTranslation } from "react-i18next";
import SeachContainer from "./SeachContainer";

const YoutubeToMp3 = () => {
  const { t } = useTranslation();

  const mp3Features = t("youtubeToMp3.mp3Features", { returnObjects: true });
  const mp3Faqs = t("youtubeToMp3.mp3Faqs", { returnObjects: true });
  return (
    <div className="container">
      <SeachContainer />
      <div className="contain">
        <h2 className="text-center">{t("youtubeToMp3.title")}</h2>
        <p>{t("youtubeToMp3.description")}</p>

        <h2 className="text-center mt-48">{t("youtubeToMp3.steps.title")}</h2>
        <p>{t("youtubeToMp3.steps.description")}</p>
        <ol>
          <li>{t("youtubeToMp3.steps.step1")}</li>
          <li>{t("youtubeToMp3.steps.step2")}</li>
          <li>{t("youtubeToMp3.steps.step3")}</li>
          <li>{t("youtubeToMp3.steps.step4")}</li>
        </ol>

        <h2 className="text-center mt-48">{t("youtubeToMp3.featuresTitle")}</h2>
        <div className="box">
          {mp3Features?.map?.((feature, index) => (
            <div className="sub-box" key={index}>
              <div className={`img ${feature.imageClass}`}></div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-center mt-48 mb-20">
          {t("youtubeToMp3.faqTitle")}
        </h2>
        <div className="faq-section">
          {mp3Faqs?.map?.((faq, index) => (
            <div className="faq" key={index}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
              {faq?.steps ? (
                <ol>
                  {faq?.steps?.map?.((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YoutubeToMp3;
