export class Image {
    constructor(
        private id: string,
        private subtitle: string,
        private author: string,
        private date: Date,
        private file: string,
        private tags: string[],
        private collection: string
    ) { }

    getId(): string { return this.id; }

    getSubtitle(): string { return this.subtitle; }

    getAuthor(): string { return this.author; }

    getDate(): Date { return this.date; }

    getFile(): string { return this.file; }

    getTags(): string[] { return this.tags; }

    getCollection(): string { return this.collection; }

    setId(id: string) {
        this.id = id;
    }

    setSubtitle(subtitle: string) {
        this.subtitle = subtitle;
    }

    setAuthor(author: string) {
        this.author = author;
    }

    setDate(date: Date) {
        this.date = date;
    }

    setFile(file: string) {
        this.file = file;
    }

    setTags(tags: string[],) {
        this.tags = tags;
    }

    setCollection(collection: string) {
        this.collection = collection;
    }
}

export interface ImageInputDTO{
    subtitle: string;
    file: string;
    tags: string[];
    collection: string
}