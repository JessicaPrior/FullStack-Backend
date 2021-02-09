"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
class Image {
    constructor(id, subtitle, author, date, file, tags, collection, author_name) {
        this.id = id;
        this.subtitle = subtitle;
        this.author = author;
        this.date = date;
        this.file = file;
        this.tags = tags;
        this.collection = collection;
        this.author_name = author_name;
    }
    getId() { return this.id; }
    getSubtitle() { return this.subtitle; }
    getAuthor() { return this.author; }
    getDate() { return this.date; }
    getFile() { return this.file; }
    getTags() { return this.tags; }
    getCollection() { return this.collection; }
    getAuthor_Name() { return this.author_name; }
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
    setAuthor_Name(author_name) {
        this.author_name = author_name;
    }
    static toImageModel(image) {
        return new Image(image.id, image.subtitle, image.author, image.date, image.file, image.tags, image.collection, image.author_name);
    }
}
exports.Image = Image;
//# sourceMappingURL=Image.js.map