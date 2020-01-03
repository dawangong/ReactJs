import React, { Component } from 'react';
import { getArticleDirectoryApi } from '../../api/blog'
import './index.scss';

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      list: []
    };
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

  getArticleDirectory() {
    const { page } = this.state;
    getArticleDirectoryApi({
      page
    }).then(list => {
      this.setState({
        list
      });
    }).catch(err => {
      console.log(err);
    })
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
