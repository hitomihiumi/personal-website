import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from "classnames";
import { Metadata } from "next";

import { baseURL, style, meta, og, schema } from "@/app/resources/config";

import {
	Background,
	Column,
	Flex,
	ToastProvider,
	ThemeProvider,
	ThemeSwitcher
} from "@/once-ui/components";
import { Header } from "@/components/components"
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

const randomColor = () => {
	let arr = ['brand', 'slate', 'red', 'moss', 'green', 'emerald', 'aqua', 'cyan', 'blue', 'indigo', 'violet', 'magenta', 'pink'];
	return arr[Math.floor(Math.random() * arr.length)];
}

const colorShift = () => Math.floor(Math.random() * 6 + 3) * 100;

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
					<Column as="body" fillWidth  margin="0" padding="0">
						<Background
							style={{zIndex: '-1'}}
							position="fixed"
							mask={{
								x: 50,
								y: 0,
								radius: 70,
								cursor: true
							}}
							gradient={{
								display: true,
								x: 0,
								y: 0,
								width: 200,
								height: 125,
								tilt: 0,
								opacity: 50,
								colorStart: `scheme-${randomColor()}-${colorShift()}`,
								colorEnd: "page-background",
							}}
						/>
						<Column
							fillHeight
							fillWidth
							horizontal={'center'}
							overflowY={'scroll'}
						>
							<Flex
								fillWidth
								fillHeight
								vertical={'center'}
								horizontal={'center'}
								paddingY={'xs'}
								direction={'column'}
							>
								<Header/>
								{children}
								<ThemeSwitcher
									className={styles.themeSwitcher}/>
							</Flex>
						</Column>
					</Column>
				</ToastProvider>
			</ThemeProvider>
		</Flex>
	);
}