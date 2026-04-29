import "./globals.css";
import header from "./header";
import floatingbutton from "./floatingbutton";

const Siteheader = header;
const Floatingbutton = floatingbutton;

export const metadata = {
  title: "케이라이트",
  description: "고보라이트 · 이미지글래스 · 특수조명 제작",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Siteheader />
        {children}
        <Floatingbutton />
      </body>
    </html>
  );
}