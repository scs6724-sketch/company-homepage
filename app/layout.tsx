import "./globals.css";
import header from "./header";
import floatingbutton from "./floatingbutton";
import footer from "./footer";
import visittracker from "./visittracker";

const Siteheader = header;
const Floatingbutton = floatingbutton;
const Footer = footer;
const Visittracker = visittracker;

export const metadata = {
  title: "케이라이트 | 고보라이트 · 이미지글래스 제작",
  description:
    "고보라이트 제작, 고보조명 설치, 바닥광고 조명, 이미지글래스 제작 전문 케이라이트",

  openGraph: {
    title: "케이라이트 | 고보라이트 · 이미지글래스 제작",
    description:
      "고보라이트 제작, 고보조명, 바닥광고 조명, 이미지글래스 제작 전문",
    url: "https://k-lights.net",
    siteName: "케이라이트",
    images: [
      {
        url: "https://k-lights.net/images/1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content="d5833c19331966b9d17d0a53c430d5eb5fe49ccd"
        />
      </head>
      <body>
        <Visittracker />
        <Siteheader />
        {children}
        <Footer />
        <Floatingbutton />
      </body>
    </html>
  );
}