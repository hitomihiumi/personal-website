export interface Data {
    status: number;
    message: string;
    data: {
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