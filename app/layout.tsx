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
  title: "고보라이트 · 이미지글래스 제작 | 케이라이트",
  description:
    "고보라이트, 이미지글래스, 무빙젝터, DMX 조명 제작 전문 케이라이트. 매장, 행사, 전시 공간 맞춤 조명 설계 및 제작.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
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