export class PostPreview {

  /**
   * @param {{ id: any; title: any; description: any; image: any; }} data
   */
  constructor(data) {
    this.id = data.id;
    this.title = data.title
    this.description = data.description;
    this.image = data.image
  }
}
