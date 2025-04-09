import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from "classnames";
import { headers } from "next/headers";
import { Metadata } from "next";

import { baseURL, style, meta, og, schema } from "@/app/resources/config";

import {
	Background,
	Column,
	Flex,
	ToastProvider,
	ThemeProvider,
} from "@/once-ui/components";
import { Header } from "@/components/Header"
import { Roboto_Mono } from "next/font/google";

import { Meta, Schema } from "@/once-ui/modules";

import { Raleway } from 'next/font/google';
import { Sora } from 'next/font/google';
import React from "react";

const primary = Raleway({
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
	const host = (await headers()).get("host");
	const metadataBase = host ? new URL(`https://${host}`) : undefined;

	Meta.generate({
		title: meta.title,
		description: meta.description,
		type: 'website',
		baseURL: baseURL,
		path: '/',
		image: og.image
	})

	return {

		metadataBase,
	};
}

const randomColor = () => {
	let arr = ['brand', 'sand', 'gray', 'slate', 'red', 'orange', 'yellow', 'moss', 'green', 'emerald', 'aqua', 'cyan', 'blue', 'indigo', 'violet', 'magenta', 'pink'];
	return arr[Math.floor(Math.random() * arr.length)];
}

const colorShift = (t = Date.now()) => Math.ceil(6 + 3 * (1 + Math.sin(t / 1000)));

export default function RootLayout({
									   children,
								   }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Flex
			as="html"
			lang="en"
			fillHeight
			background="page"
			data-neutral={style.neutral}
			data-brand={style.brand}
			data-accent={style.accent}
			data-border={style.border}
			data-theme={style.theme}
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
								radius: 80
							}}
							gradient={{
								display: true,
								x: 0,
								y: 0,
								width: 200,
								height: 100,
								tilt: 0,
								opacity: 50,
								colorStart: `scheme-${randomColor()}-${colorShift()}00`,
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
							</Flex>
						</Column>
					</Column>
				</ToastProvider>
			</ThemeProvider>
		</Flex>
	);
}