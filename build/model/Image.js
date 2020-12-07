"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
class Image {
    constructor(id, subtitle, author, date, file, tags, collection) {
        this.id = id;
        this.subtitle = subtitle;
        this.author = author;
        this.date = date;
        this.file = file;
        this.tags = tags;
        this.collection = collection;
    }
    getId() { return this.id; }
    getSubtitle() { return this.subtitle; }
    getAuthor() { return this.author; }
    getDate() { return this.date; }
    getFile() { return this.file; }
    getTags() { return this.tags; }
    getCollection() { return this.collection; }
    setId(id) {
        this.id = id;
    }
    setSubtitle(subtitle) {
        this.subtitle = subtitle;
    }
    setAuthor(author) {
        this.author = author;
    }
    setDate(date) {
        this.date = date;
    }
    setFile(file) {
        this.file = file;
    }
    setTags(tags) {
        this.tags = tags;
    }
    setCollection(collection) {
        this.collection = collection;
    }
    static toImageModel(image) {
        return new Image(image.id, image.subtitle, image.author, image.date, image.file, image.tags, image.collection);
    }
}
exports.Image = Image;
//# sourceMappingURL=Image.js.map