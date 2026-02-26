export interface Project {
    id:               number;
    title:            string;
    description:      string;
    longDescription:  string;
    imageUrl:         string;
    images:           string[];
    imagesMobile:     string[] | null;
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