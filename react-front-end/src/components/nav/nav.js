import React, { Component } from 'react';
import propTypes from 'prop-types';
import './nav.scss';
import { Link } from 'react-router-dom';
import routerConfig from "../../router";
import { throttle } from 'lodash-decorators';

class Nav extends Component{

  static defaultProps = {
    routerConfig: []
  };

  static propTypes = {
    routerConfig: propTypes.array,
  };

  constructor(props) {
    super(props);
    routerConfig[0].checked = true;
    this.state = {
      dynamicNav: false,
      crumb: routerConfig[0].EnglishName,
      routerConfig
    };
  }

  componentDidMount() {
    // 挂载滚动监听
    window.addEventListener('scroll', (e) => {
      this.onScroll(e);
    })
  }

  componentWillUnmount() {
    // 移除滚动监听
    window.removeEventListener('scroll', (e) => {
      this.onScroll(e);
    });
  }

  render() {
    const { routerConfig } = this.props;
    const { crumb, dynamicNav = false } = this.state;
    return (
      <div className={`nav-container ${dynamicNav ? 'dynamic-nav' : ''}`}>
        <p className="main-title">大きな星はない</p>
        <ul className="nav-ul">
          {routerConfig.slice(0, routerConfig.length - 1).map(({ path, name, checked }, index) =>
            <li className={`nav-item ${checked ? 'nav-item-checked' : '' }`} key={path}>
              <Link
                onClick={() => { this.getNowSelect(index) }}
                style={{ cursor: 'point' }}
                to={path}
              >{name}</Link>
            </li>)}
        </ul>
      </div>
    )
  }

  getNowSelect(index) {
    routerConfig.forEach(item => {
      item.checked = false;
    });
    routerConfig[index].checked = true;
    this.setState({
      crumb: routerConfig[index].EnglishName,
      routerConfig
    })
  }

  @throttle(300)
  onScroll(event) {
    const scrollTop = event.srcElement.documentElement.scrollTop;
    const dynamicNav = scrollTop > 50;

    if (dynamicNav !== this.state.dynamicNav) {
      this.setState({
        dynamicNav
      });
    }
  }
}

export default Nav;
