import { Link } from "gatsby";
import React from "react";
import { useLocation } from "@reach/router";

const Footer = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    // --- WebPage schema for each route ---
    const getWebPageSchema = () => {
        switch (currentPath) {
            case "/":
                return {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Y2meta",
                    "description": "Y2meta is a fast and free YouTube Downloader that allows you to convert and download Videos from YouTube in HD, UHD, 1080p, 2K, and 4K.",
                    "alternateName": "Youtube Video Downloader",
                    "image": "https://y2meta.lol/images/logo.webp",
                    "url": "https://y2meta.lol"
                };
            case "/youtube-to-mp3/":
                return {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Y2meta",
                    "description": "Convert YouTube videos to MP3 for free and in high quality with Y2Meta. Download MP3s quickly without signup using the Y2Meta YouTube To MP3 converter tool.",
                    "alternateName": "YouTube To MP3 Converter",
                    "image": "https://y2meta.lol/images/logo.webp",
                    "url": "https://y2meta.lol/youtube-to-mp3/"
                };
            case "/youtube-to-mp4/":
                return {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Y2meta",
                    "description": "Convert and download YouTube videos to MP4 format quickly and securely with Y2Meta. Choose from multiple video qualities, including 720p, 1080p, 2K, and up to 4K.",
                    "alternateName": "Free YouTube to MP4 Converter",
                    "image": "https://y2meta.lol/images/logo.webp",
                    "url": "https://y2meta.lol/youtube-to-mp4/"
                };
            default:
                return null;
        }
    };

    // --- FAQPage schema for each route ---
    const getFAQSchema = () => {
        switch (currentPath) {
            case "/":
                return {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What is Y2Meta?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Y2meta is the best tool for converting videos and saving them to your device from YouTube fast and free. Also, you can convert a video into audio from YouTube."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is YouTube Downloader Free to Use?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, Y2meta is totally free to use and download YouTube videos. You don’t need to buy any premium subscription, you only need the URL of the YouTube video that you want to download on your device."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How many videos can I download in a day using Y2meta?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "You can convert and download unlimited videos with Y2meta. There are no limitations for downloading YouTube Videos."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is YouTube Downloader supported on all devices?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, Y2meta supports all devices including iOS, Android, Windows, and Mac. Also, you can use this tool in multiple browsers such as Google Chrome, Safari, Opera, Firefox, Brave, and more."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is it safe to download YouTube videos from Y2meta?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "It is safe and secure to download YouTube videos using Y2meta. If any user downloads content, it should always follow the copyright act."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "What formats are supported in audio and video?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Y2meta supports many formats in video, including 360p, 720p, 1080p, 2K, and up to 4K quality. In audio bit rates such as 64kbps, 128kbps, 192kbps, 256kbps, and 320kbps."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I download long videos using YouTube Downloader?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, you can download long videos using Y2meta, including long videos, short videos, and documentaries. Our tool can handle the length of videos, and you can enjoy your full video."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do I need to install any software to download YouTube Videos?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "No, you do not need to install any software to Download YouTube Videos because Y2meta is a web-based service."
                            }
                        }
                    ]
                };

            case "/youtube-to-mp3/":
                return {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Is this YouTube MP3 Converter free to use?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, it is 100% free to use because there are no restrictions or hidden costs..."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How to Convert YouTube to MP3 with Y2meta?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "The conversion process of MP3 is very simple. Just follow the steps below..."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Can I use YouTube to MP3 Converter on all devices?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, our tool supports all devices such as computers, smartphones, and tablets..."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Does Y2meta support multiple file formats?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Our YouTube to MP3 converter supports a wide range of formats..."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is it legal to download YouTube MP3 from Y2meta?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "YouTube to MP3 converter is a completely legal tool to download MP3 from YouTube..."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is Y2meta safe and secure to download MP3 from YouTube?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, our YouTube Converter is 100% safe and secure from malware and viruses..."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How many MP3 files can I download per day?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "You can convert unlimited MP3 files per day because there are no restrictions..."
                            }
                        }
                    ]
                };

            case "/youtube-to-mp4/":
                return {
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What is YouTube to MP4 Converter?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Y2meta is an online YouTube to MP4 Converter web-based tool..."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is YouTube to MP4 Converter free to use?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, this tool is 100% safe and free to use..."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How many videos can I download from Y2meta per day?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "You can convert and download unlimited videos..."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How can I download YouTube MP4 using Y2meta?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "To convert and download YouTube videos, just follow the steps below..."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How does Y2meta differ from other YouTube converters?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Y2meta offers fast, high-quality conversion and unlimited downloads..."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is Y2meta a safe platform for YouTube MP4 Downloads?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, our YouTube to MP4 Converter has advanced technology to provide security..."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Does this YouTube to MP4 converter offer 4K quality?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, Y2meta can convert YouTube Videos in various qualities..."
                            }
                        }
                    ]
                };

            default:
                return null;
        }
    };

    const webPageSchema = getWebPageSchema();
    const faqSchema = getFAQSchema();

    return (
        <>
            <div className="container">
                <div className="footer">
                    <p className="text-center">@2025 y2meta</p>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/terms-condition">Terms and Condition</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/sitemap.xml">Sitemap</Link></li>
                    </ul>
                </div>
            </div>

            {webPageSchema && (

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(webPageSchema),
                    }}
                ></script>
            )}

            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(faqSchema),
                    }}
                ></script>
            )}
        </>
    );
};

export default Footer;
