/* eslint-disable @next/next/no-head-element */

import Link from "next/link";
import '../styles/globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      	<body>
			<main>
				<nav>
					<Link href="/">
						Home
					</Link>
					<Link href="/notes">
						Notes
					</Link>
				</nav>
				{children}
			</main>
		</body>
    </html>
  );
}
