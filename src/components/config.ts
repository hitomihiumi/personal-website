export const redirects = (str: string) => {
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
        default:
            return '/';
    }
};