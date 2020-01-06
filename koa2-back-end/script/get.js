const puppeteer = require('puppeteer');
const img = [
  'http://i1.fuimg.com/620130/b56654a5de756722.jpg',
  'http://i1.fuimg.com/620130/63808ac101f269dc.png',
  'http://i1.fuimg.com/620130/692d22094475a4ef.png',
  'http://i1.fuimg.com/620130/43e3f1720c5f1540.png',
  'http://i2.tiimg.com/620130/1311f55011d7fe44.png',
  'http://i1.fuimg.com/620130/2f95df331d9b2f4f.png',
  'http://i2.tiimg.com/620130/a6f29a5861b6d115.png',
  'http://i1.fuimg.com/620130/40518259d3a342d9.png',
  'http://i2.tiimg.com/620130/de3edc0d5b5065c6.jpg',
  'http://i2.tiimg.com/620130/e01f170bc1bb7cc3.jpg',
  'http://i2.tiimg.com/620130/d7b7a1ad0a7b0b82.jpg',
  'http://i2.tiimg.com/620130/d73236f7ab174711.png',
  'http://i2.tiimg.com/620130/1689218062f665d9.jpg',
  'http://i2.tiimg.com/620130/ffaa82ed2a9d0279.png',
  'http://i2.tiimg.com/620130/a58653a673d15719.jpg',
  'http://i2.tiimg.com/620130/cbb5b70d064516a1.jpg',
  'http://i2.tiimg.com/620130/ea527bcff6edc113.jpg',
  'http://i2.tiimg.com/620130/3ac9a03e79001011.png',
  'http://i2.tiimg.com/620130/8a5f408e3545f5fc.png'
];
const get = url => {
  return new Promise(async resolve => {
    String.prototype.replaceOver = function () {
      return this.replace('原创', '').replace('...', '').replace(/\n/g, '').trim();
    };
    //启动浏览器
    const browers = await puppeteer.launch();
    //启动新页面
    const page = await browers.newPage();
    //拦截图片
    await page.setRequestInterception(true);
    await page.on('request',interceptedRequest => {
      //判断加载的url是否以jpg或png结尾，符合条件将不再加载
      if(interceptedRequest.url().endsWith('.jpg') || interceptedRequest.url().endsWith('.png')){
        interceptedRequest.abort();
      }else{
        interceptedRequest.continue();
      }
    });
    //链接网址
    await page.goto(url);
    const list = [];
    console.log(page);
    const num = await page.$$eval('html', files => files);
    console.log(num, 111);
    // num.forEach((item, index) => {
    //   const articleId = item.getAttribute('data-articleid');
    //   const title =  page.querySelectorAll('.article-item-box h4 a')[index].text.replaceOver();
    //   const describe =  page.querySelectorAll('.article-item-box .content a')[index].text.replaceOver();
    //   const createDate =  page.querySelectorAll('.date')[index].innerText.replaceOver();
    //   const num = Math.floor(Math.random() * (img.length - 1));
    //
    //   list.push({
    //     articleId,
    //     title,
    //     describe,
    //     createDate,
    //     img: img[num]
    //   });
    // });
    // console.log(list);
    // resolve(list);
  });
};

module.exports = { get };
