import { Component } from './core/eung';
import TheHeader from './components/TheHeader';

export default class App extends Component {
  // 기본값 사용 시 생략 가능
  // constructor() { super() }

  render() {
    const routerView = document.createElement('router-view');
    this.el.append(new TheHeader().el, routerView);
  }
}
