import { Component } from '../core/eungb';
export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer'
    });
  }

  render() {
    this.el.innerHTML = `
      <div>
        <a href="https://google.com">
          GitHub Repository
        </a>
      </div>
      <div>
      <a href="https://google.com">
          ${new Date().getFullYear()}
          EungBug
        </a>
      </div>
    `;
  }
}
