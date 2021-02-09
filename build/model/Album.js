"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
class Album {
    constructor(id, title, subtitle, image) {
        this.id = id;
        this.title = title;
        this.subtitle = subtitle;
        this.image = image;
    }
    getId() { return this.id; }
    getTitle() { return this.title; }
    getSubtitle() { return this.subtitle; }
    getImage() { return this.image; }
    setId(id) {
        this.id = id;
    }
    setTitle(title) {
        this.title = title;
    }
    setSubtitle(subtitle) {
        this.subtitle = subtitle;
    }
    setImage(image) {
        this.image = image;
    }
    static toAlbumModel(album) {
        return new Album(album.id, album.title, album.subtitle, album.image);
    }
}
exports.Album = Album;
//# sourceMappingURL=Album.js.map