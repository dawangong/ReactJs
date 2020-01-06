import React, { Component } from 'react';
import {
  // getArticleDirectoryApi,
  getBlogDirectoryApi } from '../../api/blog'
import './index.scss';
import img from './data';

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      list: []
    };
    this.addReplaceOver();
  }

  componentDidMount() {
    this.getArticleDirectory();
  }

  render() {
    const { list, page } = this.state;
    return (
      <div className="index">
        <div className="index-base">
          {list.map(item => <div className="article-item" key={item.articleId}>
            <div className="article-content">
              <p className="article-date">发布于：{item.createDate}</p>
              <p className="article-title">{item.title}</p>
              <div className="article-some">摘要：{item.describe}</div>
            </div>
            <div className="article-img">
              <img src={item.img} alt="/图片"/>
            </div>
          </div>)}
          <div className="article-prev" onClick={() => this.prevPage()}>上一页</div>
          <p className="article-num">{page}</p>
          <div className="article-next" onClick={() => this.nextPage()}>下一页</div>
        </div>
      </div>
    );
  }

  addReplaceOver() {
    String.prototype.replaceOver = function () {
      return this.replace('原创', '').replace('...', '').replace(/\n/g, '').trim();
    };
  }

  getArticleDirectory() {
    const { page } = this.state;
    // getArticleDirectoryApi({
    //   page
    // }).then(list => {
    //   this.setState({
    //     list
    //   });
    // }).catch(err => {
    //   console.log(err);
    // });

    getBlogDirectoryApi({
      page
    }).then(res => {
      const list = [];
      const domParse = new DOMParser();
      const dom = domParse.parseFromString(res, 'text/html');
      const num = dom.querySelectorAll('.article-item-box');
      num.forEach((item, index) => {
        const articleId = item.getAttribute('data-articleid');
        const title =  dom.querySelectorAll('.article-item-box h4 a')[index].text.replaceOver();
        const describe =  dom.querySelectorAll('.article-item-box .content a')[index].text.replaceOver();
        const createDate =  dom.querySelectorAll('.date')[index].innerText.replaceOver();
        const num = Math.floor(Math.random() * (img.length - 1));

        list.push({
          articleId,
          title,
          describe,
          createDate,
          img: img[num]
        });
      });
      this.setState({
        list
      });
    }).catch(err => {
      console.log(err);
    });

  }

  nextPage() {
    const { page } = this.state;
    this.setState({
      page: page + 1
    }, () => {
      window.scrollTo(0, 500);
      this.getArticleDirectory();
    })
  }

  prevPage() {
    const { page } = this.state;
    this.setState({
      page: page - 1
    }, () => {
      window.scrollTo(0, 500);
      this.getArticleDirectory();
    })
  }
}

export default Index;
