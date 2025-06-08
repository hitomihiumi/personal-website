import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from "classnames";
import { Metadata } from "next";

import { baseURL, style, meta, og, schema } from "@/app/resources/once-ui.config";

import {
	Background,
	Column,
	Flex,
	ToastProvider,
	ThemeProvider,
} from "@/once-ui/components";
import { Header, Footer } from "@/components/components"
import { Roboto_Mono, Nunito, Sora } from "next/font/google";

import { Meta, Schema } from "@/once-ui/modules";
import React from "react";

import styles from "@/components/layout/layout.module.scss";

const primary = Nunito({
	variable: '--font-primary',
	subsets: ['latin'],
	display: 'swap'
});

const secondary = Sora({
	variable: '--font-secondary',
	subsets: ['latin'],
	display: 'swap'
});

const code = Roboto_Mono({
	variable: "--font-code",
	subsets: ["latin"],
	display: "swap",
});

type FontConfig = {
	variable: string;
};

/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
const tertiary = Sora({
	variable: '--font-tertiary',
	subsets: ['latin'],
	display: 'swap'
});
/*
 */

export async function generateMetadata(): Promise<Metadata> {
	return Meta.generate({
		title: meta.title,
		description: meta.description,
		baseURL,
		path: '/',
		image: og.image
	})
}

export default function RootLayout({
									   children,
								   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Flex
			suppressHydrationWarning
			as="html"
			lang="en"
			fillHeight
			background="page"
			data-neutral={style.neutral}
			data-brand={style.brand}
			data-accent={style.accent}
			data-border={style.border}
			data-solid={style.solid}
			data-solid-style={style.solidStyle}
			data-surface={style.surface}
			data-transition={style.transition}
			data-scaling={style.scaling}
			className={classNames(
				primary.variable,
				code.variable,
				secondary ? secondary.variable : "",
				tertiary ? tertiary.variable : "",
			)}
		>
			<Schema
				as="website"
				title={schema.name}
				description={schema.description}
				baseURL={baseURL}
				path="/"
				image={schema.logo}
			/>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'system';
                  const root = document.documentElement;
                  if (theme === 'system') {
                    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    root.setAttribute('data-theme', isDark ? 'dark' : 'light');
                  } else {
                    root.setAttribute('data-theme', theme);
                  }
                } catch (e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
					}}
				/>
			</head>
			<ThemeProvider>
				<ToastProvider>
					<Column style={{ minHeight: "100vh" }} as="body" fillWidth  margin="0" padding="0">
						<Background
							style={{zIndex: '-1'}}
							position="fixed"
							mask={{
								x: 0,
								y: 0,
								radius: 90,
							}}
							gradient={{
								display: true,
								x: 0,
								y: 0,
								width: 200,
								height: 125,
								tilt: 10,
								opacity: 50,
								colorStart: `scheme-brand-300`,
								colorEnd: "page-background",
							}}
							grid={{
								display: true,
								 color: `scheme-brand-600`,
								width: '2.5rem',
								height: '2.5rem',
							}}
						/>
						<Flex fillWidth minHeight="16" hide="s"></Flex>
						<Header />
						<Flex
							zIndex={0}
							fillWidth
							paddingY="l"
							paddingX="l"
							horizontal="center"
							flex={1}
						>
							<Flex horizontal="center" fillWidth minHeight="0">
								{children}
							</Flex>
						</Flex>
						<Footer/>
					</Column>
				</ToastProvider>
			</ThemeProvider>
		</Flex>
	);
}