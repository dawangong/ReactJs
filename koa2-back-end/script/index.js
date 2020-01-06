const request = require('request');
const cheerio = require('cheerio');
const zlib = require('zlib');
// const iconv = require('iconv-lite');
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

  $('.article-item-box').each((index, element) => {

    const $element = $(element);
    const h4 = $($('.article-item-box h4 a')[index]).text().replace('原创', '').replace('...', '').replace(/\n/g, '').trim();
    const describe = $($('.article-item-box .content a')[index]).text().replace(/\n/g, '').replace('...', '').trim();
    const createDate = $($('.date')[index]).text().replace(/\n/g, '').replace('...', '').trim();

    const num = Math.floor(Math.random() * (img.length - 1));

    list.push({
      articleId: $element.attr('data-articleid'),
      title: h4,
      describe,
      createDate,
      img: img[num]
    })
  });

  return list;
};

const getArticleDirectory = url => {
  const options = {
    method: 'get',
    encoding: null,
    headers: {
      'host': 'blog.csdn.net',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3964.0 Safari/537.36',
      'transfer-encoding': 'chunked',
      'connection': 'keep-alive',
      'referer': 'blog.csdn.net',
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'zh-CN,zh;q=0.9',
      'pragma': 'no-cache',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-user': '?1',
      'sec-fetch-site': 'cross-site',
      'upgrade-insecure-requests': '1',
      'cookie': 'acw_tc=2760820215782832053302253e52949a537d67dcfa555ad8f89a2b0a5aebac; TY_SESSION_ID=91c35e4b-cb89-496a-901d-7e28b4eaee02; SL_GWPT_Show_Hide_tmp=1; SL_wptGlobTipTmp=1; Hm_lvt_e5ef47b9f471504959267fd614d579cd=1578283506; Hm_lpvt_e5ef47b9f471504959267fd614d579cd=1578283506; Hm_ct_e5ef47b9f471504959267fd614d579cd=6525*1*10_19090316320-1578283205332-641932; __yadk_uid=LW75E2ajHJrPIYyCrtZUN1vacg19Ma9T; uuid_tt_dd=10_20727129480-1578291096386-595603; dc_session_id=10_1578291096386.893287; hasSub=true; announcement=%257B%2522isLogin%2522%253Afalse%252C%2522announcementUrl%2522%253A%2522https%253A%252F%252Fblog.csdn.net%252Fblogdevteam%252Farticle%252Fdetails%252F103603408%2522%252C%2522announcementCount%2522%253A0%252C%2522announcementExpire%2522%253A3600000%257D; acw_sc__v2=5e12d4500b3b911754e2301d052080ad1c0a4289; Hm_ct_6bcd52f51e9b3dce32bec4a3997715ac=6525*1*10_20727129480-1578291096386-595603!5744*1*wangongda; searchHistoryArray=%255B%2522%25E6%258E%25A5%25E5%258F%25A3%2522%255D; Hm_lvt_6bcd52f51e9b3dce32bec4a3997715ac=1578292317,1578292320,1578292529,1578292781; dc_tos=q3oal9; c-login-auto=7; Hm_lpvt_6bcd52f51e9b3dce32bec4a3997715ac=1578292894'
    },
    url,
    host: 'blog.csdn.net',
    path: '/wangongda/article/list/1'
  };
  return new Promise(resolve => {

    const file = [];
    https.get(options, (res) => {
      res.on('data', (chunk) => {
        console.log(chunk.length, chunk);
        file.push(chunk);
      });

      res.on('end', () => {
        let length = 0;
        file.forEach(item => {
          length += item.length;
        });
        console.log(length, 11);
        const result = Buffer.concat(file, length);
        zlib.unzip(result, function (err, buffer) {
          console.log(err, '错误');
          const list = getList(buffer);
          resolve(list);
        })
      });
    }).on('error', (e) => {
      console.error(e);
    });

    // const file = [];
    // request(options, function (err, response, body) {
    //   console.log(response.headers);
    //   // if (!err) {
    //   //   const list = getList(body.toString());
    //   //   resolve(list);
    //   //   // zlib.unzip(body, function (err, buffer) {
    //   //   //   console.log(err, '错误');
    //   //   //   const list = getList(buffer);
    //   //   //   resolve(list);
    //   //   // });
    //   // }
    // }).on('response', function (response) {
    //   response.on('data', data => {
    //     console.log(data.length, data);
    //     file.push(data);
    //   });
    //
    //   response.on('end', () => {
    //     let length = 0;
    //     file.forEach(item => {
    //       length += item.length
    //     });
    //     const res = Buffer.concat(file, length);
    //     zlib.unzip(res, function (err, buffer) {
    //       console.log(err, '错误');
    //       const list = getList(buffer);
    //       resolve(list);
    //     });
    //   });
    // })
  });
};

module.exports = {
  getArticleDirectory
};
