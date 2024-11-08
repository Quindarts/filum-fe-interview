export interface KeyActionType {
    text: string;
    image_url: string;
}

export interface ResultType {
    level: number;
    icon: string;
    name: string;
    range: [number, number];
    description: {
        text: string;
        image_url: string;
    };
    key_actions: KeyActionType[];
    key_actions_cta: {
        text: string;
        url: string;
    };
}