import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.snda.lantern.wifilocating',
  name: 'WiFi万能钥匙极速版',
  groups: [
    {
      key: 1,
      name: '全屏广告-广告弹窗',
      desc: '点击关闭',
      rules: [
        {
          key: 1,
          fastQuery: true,
          matches: '[vid="img_close"]',
          snapshotUrls: 'https://i.gkd.li/i/29448557',
        },
        {
          key: 2,
          fastQuery: true,
          matches: '[vid="native_express_ad_close"]',
          snapshotUrls: 'https://i.gkd.li/i/29448557',
        },
        {
          key: 3,
          fastQuery: true,
          matches: '[vid="native_express_ll_ad_logo"]',
          snapshotUrls: 'https://i.gkd.li/i/29448569',
        },
      ],
    },
  ],
});
