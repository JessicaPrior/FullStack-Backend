export class Album {
    constructor(
        private id: string,
        private title: string,
        private subtitle: string,
        private image: string,
    ) { }

    getId(): string { return this.id }

    getTitle(): string { return this.title }

    getSubtitle(): string { return this.subtitle }

    getImage(): string { return this.image }

    setId(id: string) {
        this.id = id
    }

    setTitle(title: string) {
        this.title = title
    }

    setSubtitle(subtitle: string) {
        this.subtitle = subtitle
    }

    setImage(image: string) {
        this.image = image
    }

    static toAlbumModel(album: any): Album {
        return new Album(album.id, album.title, album.subtitle, album.image);
    }
}

export interface AlbumInputDTO {
    title: string;
    subtitle: string;
    image: string;
}