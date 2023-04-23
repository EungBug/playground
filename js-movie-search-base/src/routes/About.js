import { Component } from '../core/eung';

export default class About extends Component {
  render() {
    const {} = history.state;
    this.el.innerHTML =
      /* html */
      `
      <h1>About Page!</h1>
    `;
  }
}
