module.exports = {
  student: function() {
    return {
      "score": 100,
      "course": {
        "compulsory": [{
          id: 101,
          score: 3,
          name: "表白",
          image: '../../imgs/parttime.jpg'
        }, {
          id: 102,
          score: 1,
          name: "不挂科",
            image: '../../imgs/parttime.jpg'
          }, {
            id: 103,
            score: 1,
            name: "参加社团",
            image: '../../imgs/parttime.jpg'
          }, {
            id: 104,
            score: 1,
            name: "参加运动会",
            image: '../../imgs/parttime.jpg'
          }, {
            id: 105,
            score: 2,
            name: "过六级",
            image: '../../imgs/parttime.jpg'
          }, {
            id: 106,
            score: 1,
            name: "喝酒撸串",
            image: '../../imgs/parttime.jpg'
          }]
      },
      "optional": [{
        id: 201,
        score: 3,
        name: "DIY蛋糕",
        image: ''
      }, {
        id: 202,
        score: 2,
        name: "帮助弱者",
        image: ''
        }, {
          id: 203,
          score: 5,
          name: "出国留学",
          image: ''
        }, {
          id: 204,
          score: 1,
          name: "堆雪人",
          image: ''
        }, {
          id: 205,
          score: 3,
          name: "辅修专业",
          image: ''
        }, {
          id: 206,
          score: 3,
          name: "公共演讲",
          image: ''
        }],
      "challenge": [{
        id: 301,
        score: 8,
        name: "蹦极",
        image: ''
      }, {
        id: 302,
        score: 8,
        name: "参加快闪",
        image: ''
        }, {
          id: 303,
          score: 6,
          name: "吃遍食堂菜系",
          image: ''
        }, {
          id: 304,
          score: 8,
          name: "有作品",
          image: ''
        }, {
          id: 305,
          score: 8,
          name: "冬泳",
          image: ''
        }, {
          id: 306,
          score: 6,
          name: "戒烟",
          image: ''
        }]
    }
  }
}