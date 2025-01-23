import React from "react";
import { useTranslation } from "react-i18next";
import SeachContainer from "./SeachContainer";

const YoutubeToMp4 = () => {
  const { t } = useTranslation();

  const mp4Features = t("youtubeToMp4.mp4Features", { returnObjects: true });
  const mp4FaqData = t("youtubeToMp4.mp4FaqData", { returnObjects: true });

  return (
    <div className="container">
      <SeachContainer />
      <div className="contain">
        <h2 className="text-center">{t("youtubeToMp4.title")}</h2>
        <p>{t("youtubeToMp4.description")}</p>

        <h2 className="text-center mt-48">{t("youtubeToMp4.steps.title")}</h2>
        <p>{t("youtubeToMp4.steps.description")}</p>
        <ol>
          <li>{t("youtubeToMp4.steps.step1")}</li>
          <li>{t("youtubeToMp4.steps.step2")}</li>
          <li>{t("youtubeToMp4.steps.step3")}</li>
          <li>{t("youtubeToMp4.steps.step4")}</li>
        </ol>

        <h2 className="text-center mt-48">{t("youtubeToMp4.featuresTitle")}</h2>
        <div className="box">
          {mp4Features.map((feature, index) => (
            <div className="sub-box" key={index}>
              <div className={`img ${feature.iconClass}`}></div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-center mt-48 mb-20">{t("youtubeToMp4.faqTitle")}</h2>
        {mp4FaqData.map((faq, index) => (
          <div className="faq" key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
            {faq.steps && (
              <ol>
                {faq.steps.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YoutubeToMp4;
