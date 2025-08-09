import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.clggjv.xcjfmd.ffo',
  name: 'Lanerc',
  groups: [
    {
      key: 0,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 0,
          activityIds: 'com.clggjv.xcjfmd.ffo.MainActivity',
          matches: '[desc="top_close_button"]',
          snapshotUrls: 'https://i.gkd.li/i/21694481',
        },
      ],
    },
  ],
});
