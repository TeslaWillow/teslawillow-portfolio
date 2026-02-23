export interface Project {
    id:               number;
    title:            string;
    description:      string;
    longDescription:  string;
    imageUrl:         string;
    externalLink:     string | null;
    externalLinkText: string | null;
    tags:             string[];
    challenge?:       Challenge | null;
}

export interface Challenge {
    title:       string;
    description: string;
    solution:    string;
}