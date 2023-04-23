import { Component } from '../core/eungb';

export default class Search extends Component {
  render() {
    this.el.classList.add('search');
    this.el.innerHTML = /* HTML */ `
      <input placeholder="Enter the movie title to search!" />
      <button class="btn btn-primary">Search!</button>
    `;

    const inputEl = this.el.querySelector('input');
    inputEl.addEventListener('input', () => {});

    inputEl.addEventListener('keydown', event => {
      if (event.key === 'Enter') {
      }
    });

    const buttonEl = this.el.querySelector('.btn');
    buttonEl.addEventListener('click', () => {});
  }
}
