export interface Data {
    status: number;
    message: string;
    data: User;
}

export interface User {
    id: string;
    bot: boolean;
    system: boolean;
    flags: number;
    username: string;
    globalName: string;
    discriminator: string;
    avatar: string;
    banner: string;
    accentColor: string;
    avatarDecoration: string;
    badges: string[];
    avatarDecorationURL: string;
    avatarURL: string;
    bannerURL: string;
    presence: {
        userId: string;
        guild: string;
        status: string;
        activities: Array<{
            name: string;
            type: number;
            url: string;
            details: string;
            state: string;
            applicationId: string;
            timestamps: {
                start: number;
                end: number;
            };
            party: {
                id: string;
                size: [number, number];
            };
            assets: {
                largeImage: string;
                largeText: string;
                smallImage: string;
                smallText: string;
            };
            flags: number;
            emoji: string;
            buttons: Array<any>;
            createTimestamp: number;
        }>
    }
}

export interface Project {
    key: number;
    name: string;
    description: string;
    image: string;
    github: string;
    website?: string;
    npm?: string;
    status: 'progress' | 'completed' | 'frozen' | 'archived' | 'abandoned';
    language: string;
}

export interface SteamResponse {
    response: {
        total_count: number;
        games: SteamGame[];
    }
}

export interface SteamGame {
    appid: number;
    name: string;
    playtime_forever: number;
    playtime_2weeks: number;
    img_icon_url: string;
    playtime_windows_forever: number;
    playtime_mac_forever: number;
    playtime_linux_forever: number;
    playtime_deck_forever: number;
}

export interface ExtendedSteamResponse {
    response: {
        total_count: number;
        games: ExtendedSteamGame[];
    }
}

export interface ExtendedSteamGame extends SteamGame {
    library_capsule: string;
    library_capsule_2x: string;
    library_header: string;
    library_header_2x: string;
    library_logo: string;
    library_logo_2x: string;
    library_hero: string;
    library_hero_2x: string;
}

export interface SteamUsers {
    response: {
        players: SteamProfile[];
    }
}

export interface SteamProfile {
    steamid: string;
    personaname: string;
    profileurl: string;
    avatar: string;
    avatarmedium: string;
    avatarfull: string;
    personastate: number;
    communityvisibilitystate: number;
    profilestate: number;
    lastlogoff: number;
    commentpermission: number;
    realname: string;
    primaryclanid: string;
    timecreated: number;
    gameid?: string;
    gameserverip?: string;
    gameextrainfo?: string;
    cityid?: number;
    loccountrycode?: string;
    locstatecode?: string;
    loccityid?: number;
}

export interface ExtendedSteamUsers {
    response: {
        players: ExtendedSteamProfile[];
    }
}

export interface ExtendedSteamProfile extends SteamProfile {
    background: string | null;
    frame: string | null;
    level: number;
    badge: {
        icon?: string;
        name?: string;
    }
}