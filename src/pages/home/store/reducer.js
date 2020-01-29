import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl:
        '//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
    },
    {
      id: 2,
      title: '面试',
      imgUrl:
        '//upload-images.jianshu.io/upload_images/10986034-48d3c17c441ecdb2?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
    }
  ],
  articleList:[{
    id:1,
    title:'猫主子偷吻大橘得逞，橘猫懵：你好坏哦，不知羞！网友：我酸了',
    desc:'编者按：所谓生活本该多姿多彩，充满情调的日子才叫生活！喵星人们也是深谙此道啊，难怪铲屎官们总喜欢给猫咪找个伴儿，一起成长，果然是身心愉悦、有利健...',
    imgUrl:'//upload-images.jianshu.io/upload_images/14352811-c895351d341899be.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id:2,
    title:'猫主子偷吻大橘得逞，橘猫懵：你好坏哦，不知羞！网友：我酸了',
    desc:'编者按：所谓生活本该多姿多彩，充满情调的日子才叫生活！喵星人们也是深谙此道啊，难怪铲屎官们总喜欢给猫咪找个伴儿，一起成长，果然是身心愉悦、有利健...',
    imgUrl:'//upload-images.jianshu.io/upload_images/14352811-c895351d341899be.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },
  {
    id:3,
    title:'猫主子偷吻大橘得逞，橘猫懵：你好坏哦，不知羞！网友：我酸了',
    desc:'编者按：所谓生活本该多姿多彩，充满情调的日子才叫生活！喵星人们也是深谙此道啊，难怪铲屎官们总喜欢给猫咪找个伴儿，一起成长，果然是身心愉悦、有利健...',
    imgUrl:'//upload-images.jianshu.io/upload_images/14352811-c895351d341899be.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },
  {
    id:4,
    title:'猫主子偷吻大橘得逞，橘猫懵：你好坏哦，不知羞！网友：我酸了',
    desc:'编者按：所谓生活本该多姿多彩，充满情调的日子才叫生活！喵星人们也是深谙此道啊，难怪铲屎官们总喜欢给猫咪找个伴儿，一起成长，果然是身心愉悦、有利健...',
    imgUrl:'//upload-images.jianshu.io/upload_images/14352811-c895351d341899be.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
