import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.educenter',
  name: '华为教育中心',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      quickFind: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          matches: '[vid="skip_textview"]',
          snapshotUrls: 'https://i.gkd.li/i/16191949',
        },
      ],
    },
  ],
});
