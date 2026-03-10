import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.MobileTicket',
  name: '铁路12306',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules: [
        {
          fastQuery: true,
          matches:
            '[vid="tv_main_splash_skip" || vid="tv_skip"][visibleToUser=true]',
          exampleUrls: 'https://e.gkd.li/9a9b71b2-0c52-4623-b53b-6dd07d0cbe7c',
          snapshotUrls: [
            'https://i.gkd.li/i/17580273',
            'https://i.gkd.li/i/17656103',
          ],
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-下方横幅广告',
      desc: 'x掉',
      rules: [
        {
          activityIds: '.ui.activity.MainActivity',
          matches: '[clickable=true][vid="iv_tip_close"][desc^="关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/25822675',
          exampleUrls: 'https://e.gkd.li/4e28cdee-3c01-4e1d-93c9-5d82e3f9a808',
        },
      ],
    },
  ],
});
