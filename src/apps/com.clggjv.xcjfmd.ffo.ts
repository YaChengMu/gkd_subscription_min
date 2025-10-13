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
        {
          key: 1,
          activityIds: 'com.clggjv.xcjfmd.ffo.MainActivity',
          matches:
            '@ImageView < FrameLayout <2 FrameLayout <2 FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/22875694',
        },
      ],
    },
    {
      key: 1,
      name: '功能类-通知弹窗',
      rules: {
        key: 0,
        matches:
          '@Button <2 View < View < View < View < View < View < FrameLayout < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/22875699',
      },
    },
  ],
});
