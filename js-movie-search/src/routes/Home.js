import { Component } from '../core/eung';
import TextField from '../components/TextField';
import Message from '../components/Message';
import Tilte from '../components/Title';

export default class Home extends Component {
  render() {
    this.el.innerHTML =
      /* html */
      `
      <h1>Home Page!</h1>
    `;
    this.el.append(new TextField().el, new Message().el, new Tilte().el);
  }
}
