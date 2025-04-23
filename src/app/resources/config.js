const baseURL = "hitomihiumi.xyz";

const routes = {
    "/": true,
    "/projects": true,
    "/steam": true,
}

// default customization applied to the HTML in the main layout.tsx
const style = {
    theme: "dark", // dark | light
    neutral: "gray", // sand | gray | slate
    brand: "red", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent: "red", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid: "inverse", // color | contrast | inverse
    solidStyle: "flat", // flat | plastic
    border: "playful", // rounded | playful | conservative
    surface: "filled", // filled | translucent
    transition: "all", // all | micro | macro
    scaling: "100", // 90 | 95 | 100 | 105 | 110
};

// default metadata
const meta = {
    title: "HitomiHiumi",
    description: "Oh hey, this is my site, I've posted a little bit of information about myself here.",
    keywords: ["HitomiHiumi", "Hitomi", "Hiumi", "Portfolio", "Projects", "Steam", "LazyCanvas", "Canvas"],
};

// default open graph data
const og = {
    title: "HitomiHiumi",
    description: "Oh hey, this is my site, I've posted a little bit of information about myself here.",
    type: "website",
    image: "/images/cover.png"
};

// default schema data
const schema = {
    logo: "/trademark/favicon.ico",
    type: "website",
    name: "HitomiHiumi",
    description: "Oh hey, this is my site, I've posted a little bit of information about myself here.",
    email: "",
};

const redirects = (str) => {
    switch (str) {
        case 'home':
            return '/';
        case 'projects':
            return '/projects';
        case 'discord':
        case 'ds':
            return 'https://discord.com/users/991777093312585808';
        case 'github':
        case 'gh':
            return 'https://github.com/hitomihiumi';
        case 'steam':
            return 'https://steamcommunity.com/id/Fan_Doctor_Who_Fan/';
        case 'youtube':
        case 'yt':
            return 'https://www.youtube.com/@hitomihiumi';
        case 'telegram':
        case 'tg':
            return 'https://t.me/tutachyota';
        case 'lazycanvas':
        case 'lc':
            return 'https://github.com/NMMTY/LazyCanvas';
        case 'nmmty':
            return 'https://github.com/NMMTY';
        case 'fex':
        case 'subwaysofyourmind':
            return 'https://music.youtube.com/watch?v=9Q4qCkDwEvk';
        default:
            return '/';
    }
};

export { baseURL, style, meta, og, schema, routes, redirects };
