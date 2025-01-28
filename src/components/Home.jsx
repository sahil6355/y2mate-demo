import React from "react";
import { useTranslation } from "react-i18next";
import SeachContainer from "./SeachContainer";

const Home = ({ searchProps, convertProps }) => {
  const { t } = useTranslation();

  const features = t("features", { returnObjects: true });
  const homeFaqs = t("homeFaqs", { returnObjects: true });

  return (
    <>
      <div className="container">
        <SeachContainer
          searchLocation={searchProps}
          convertLocation={convertProps}
        />
        <div className="contain">
          {!searchProps && !convertProps ? (
            <>
              <h2 className="text-center">{t("headTitle")}</h2>
              <p>{t("introParagraph")}</p>
              <h2 className="text-center mt-48">{t("howToDownload")}</h2>
              <p>{t("howToDownloadStepsIntro")}</p>
              <ol>
                <li>{t("step1")}</li>
                <li>{t("step2")}</li>
                <li>{t("step3")}</li>
              </ol>
            </>
          ) : null}
          <h2 className="text-center mt-48">{t("featuresHeading")}</h2>
          <div className="box">
            {features?.map?.((feature, index) => (
              <div className="sub-box" key={index}>
                <div className={`img ${feature.imgClass}`}></div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
          <h2 className="text-center mt-48 mb-20">{t("faqHeading")}</h2>
          {homeFaqs?.map?.((faq, index) => (
            <div className="faq" key={index}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
