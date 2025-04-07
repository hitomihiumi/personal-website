import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from "classnames";
import { headers } from "next/headers";
import { Metadata } from "next";

import { baseURL, style, meta, og, schema } from "@/app/resources/config";

import {
	Background,
	Button,
	Column,
	Fade,
	Flex, Heading,
	IconButton,
	Logo,
	Row, SegmentedControl,
	ToastProvider
} from "@/once-ui/components";
import { Header } from "@/components/Header"
import { Roboto_Mono } from "next/font/google";

import { Raleway } from 'next/font/google';
import { Sora } from 'next/font/google';
import React from "react";
import {Data} from "@/lib/types";

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

	return {
		title: meta.title,
		description: meta.description,
		themeColor: '#ff8a8a',
		keywords: meta.keywords,
		openGraph: {
			title: og.title,
			description: og.description,
			url: "https://" + baseURL,
			images: [
				{
					url: og.image,
					alt: og.title,
				},
			],
			type: og.type as
				| "website"
				| "article"
				| "book"
				| "profile"
				| "music.song"
				| "music.album"
				| "music.playlist"
				| "music.radio_station"
				| "video.movie"
				| "video.episode"
				| "video.tv_show"
				| "video.other",
		},
		twitter: {
			card: 'summary_large_image',
			title: og.title,
			description: og.description,
			images: [og.image],
		},
		metadataBase,
	};
}

const schemaData = {
	"@context": "https://schema.org",
	"@type": schema.type,
	url: "https://" + baseURL,
	logo: schema.logo,
	name: schema.name,
	description: schema.description,
	email: schema.email
};

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
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(schemaData),
					}}
				/>
			</head>
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
						>
							<Header/>
							{children}
						</Flex>
					</Column>
				</Column>
			</ToastProvider>
		</Flex>
	);
}