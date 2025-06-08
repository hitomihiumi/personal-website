import { social as sc } from './once-ui.config'

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

const social = [
    {
        name: "GitHub",
        icon: "github",
        link: sc.github,
    },
    {
        name: "Discord",
        icon: "discord",
        link: sc.discord,
    },
    {
        name: "Telegram",
        icon: "telegram",
        link: sc.telegram,
    },
    {
        name: "Youtube",
        icon: "youtube",
        link: sc.youtube,
    },
    {
        name: "Steam",
        icon: "steam",
        link: sc.steam,
    },
];

export { social, redirects };
