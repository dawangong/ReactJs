const request = require('request');
const cheerio = require('cheerio');
const zlib = require('zlib');
const iconv = require('iconv-lite');
const https = require("https");

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

const getList = html => {
  const $ = cheerio.load(html);
  const list = [];

  $('.postTitle2').each((index, element) => {
    const $element = $(element);
    list.push({
      title: $element.text(),
    })
  });

  // $('.article-item-box').each((index, element) => {
  //
  //   const $element = $(element);
  //   const h4 = $($('.article-item-box h4 a')[index]).text().replace('原创', '').replace('...', '').replace(/\n/g, '').trim();
  //   const describe = $($('.article-item-box .content a')[index]).text().replace(/\n/g, '').replace('...', '').trim();
  //   const createDate = $($('.date')[index]).text().replace(/\n/g, '').replace('...', '').trim();
  //
  //   const num = Math.floor(Math.random() * (img.length - 1));
  //
  //   list.push({
  //     articleId: $element.attr('data-articleid'),
  //     title: h4,
  //     describe,
  //     createDate,
  //     img: img[num]
  //   })
  // });

  return list;
};

const getArticleDirectory = url => {
  const options = {
    method: 'get',
    // encoding: null,
    headers: {
      'accept-encoding': 'gzip, deflate, br',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3964.0 Safari/537.36',
      // 'transfer-encoding': 'chunked',
      'referer': 'https://www.cnblogs.com/',
      // 'accept-encoding': 'gzip',
      'accept-language': 'zh-CN,zh;q=0.9',
      'sec-fetch-mode': 'navigate'
    },
    url,
    // host: 'blog.csdn.net',
    // path: '/wangongda/article/list/1'
  };
  return new Promise(resolve => {

    // const file = [];
    // https.get(options, (res) => {
    //   res.on('data', (chunk) => {
    //     console.log(chunk.length, chunk);
    //     file.push(chunk);
    //   });
    //
    //   res.on('end', () => {
    //     let length = 0;
    //     file.forEach(item => {
    //       length += item.length;
    //     });
    //     console.log(length, 11);
    //     const result = Buffer.concat(file, length);
    //     zlib.unzip(result, function (err, buffer) {
    //       console.log(err, '错误');
    //       const list = getList(buffer);
    //       resolve(list);
    //     })
    //   });
    // }).on('error', (e) => {
    //   console.error(e);
    // });

    const file = [];
    request(options, function (err, response, body) {
      console.log(response.headers);
    }).on('response', function (response) {
      response.on('data', data => {
        console.log(data.length, data);
        file.push(data);
      });

      response.on('end', () => {
        let length = 0;
        file.forEach(item => {
          length += item.length
        });
        const res = Buffer.concat(file, length);
        zlib.unzip(res, function (err, buffer) {
          console.log(err, '错误');
          if (!err) {
            const list = getList(buffer);
            console.log(list);
            // resolve(list);
          }
        });
      });
    })
  });
};

module.exports = {
  getArticleDirectory
};
