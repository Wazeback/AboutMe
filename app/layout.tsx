/* eslint-disable @next/next/no-head-element */
import Link from 'next/link';
import './globals.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <nav className={"headerNav"}>
          <Link href="/">
            <div className={"animateBorder"}>
              Home/
            </div>
          </Link>
          <Link href="/linktree">
            <div className={"animateBorder"}>
              LinkTree/
            </div>
          </Link>
          <Link href="/projects">
            <div className={"animateBorder"}>
              Projects/
            </div>
          </Link>
        </nav>
        <main className='background'>
          <div className={"center"}>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
