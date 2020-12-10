export class Image {
    constructor(
        private id: string,
        private subtitle: string,
        private author: string,
        private date: Date,
        private file: string,
        private tags: string[],
        private collection: string,
        private author_name: string
    ) { }

    getId(): string { return this.id; }

    getSubtitle(): string { return this.subtitle; }

    getAuthor(): string { return this.author; }

    getDate(): Date { return this.date; }

    getFile(): string { return this.file; }

    getTags(): string[] { return this.tags; }

    getCollection(): string { return this.collection; }

    getAuthor_Name(): string {return this.author_name}

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

    setAuthor_Name(author_name: string){
        this.author_name = author_name;
    }

    static toImageModel(image: any): Image {
        return new Image(image.id, image.subtitle, image.author, image.date, image.file, image.tags, image.collection, image.author_name);
    }
}

export interface ImageInputDTO {
    subtitle: string;
    file: string;
    tags: string[];
    collection: string
}