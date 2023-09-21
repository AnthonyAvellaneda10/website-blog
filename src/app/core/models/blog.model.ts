export interface Blog {
    data: Data;
}

export interface Data {
    results: Result[];
}

export interface Result {
    id:              number;
    title:           string;
    description:     string;
    publicationDate: Date;
    readingTime:     string;
    date:            string;
    author:          string;
    thumbnail:       string;
    thumbnailBlog:   string;
    backgroundImage: string;
    thumbnailAuthor: string;
    tagDescription:  string;
    blogTitle:       string;
    tags:            Tags;
    images:          Images;
    codeTitle:       string;
    code:            Code;
    subtitles:       Subtitles;
    mockup:          string;
    urlBlog:         string;
    message:         string;
    hashtags:        string[];
}

export interface Code {
    items: CodeItem[];
}

export interface CodeItem {
    numberCode:  string;
    description: string;
    link:        string;
}

export interface Images {
    items: ImagesItem[];
}

export interface ImagesItem {
    url:              string;
    imageDescription: string;
}

export interface Subtitles {
    items: SubtitlesItem[];
}

export interface SubtitlesItem {
    description: string;
    contenido:   string;
}

export interface Tags {
    items: TagsItem[];
}

export interface TagsItem {
    name: string;
}