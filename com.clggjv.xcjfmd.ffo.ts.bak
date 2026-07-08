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
          activityIds: 'com.beizi.ad.v2.activity.BeiZiNewInterstitialActivity',
          matches: '[vid="beizi_interstitial_ad_close_iv"]',
          snapshotUrls: 'https://i.gkd.li/i/21694481',
        },
        {
          key: 1,
          activityIds: '',
          matches:
            '@ImageView < FrameLayout <3 FrameLayout <2 FrameLayout < FrameLayout < [id="android:id/content"]',
          snapshotUrls: 'https://i.gkd.li/i/22920195',
        },
        {
          key: 2,
          activityIds: [
            'com.bytedance.sdk.openadsdk.core.component.reward.activity.TTFullScreenVideoActivity',
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
            'com.sigmob.sdk.base.common.PortraitTransparentAdActivity',
          ],
          matches: [
            '[text="反馈"] < View + View > @View > Image[childCount=0][text=""]',
          ],
          snapshotUrls: ['https://i.gkd.li/i/25120492'],
        },
        // {
        //   key: 1,
        //   activityIds: 'com.clggjv.xcjfmd.ffo.MainActivity',
        //   matches: [
        //     '@ImageView < FrameLayout <2 FrameLayout <2 FrameLayout < FrameLayout < [id="android:id/content"]',
        //     '@ImageView < FrameLayout <2 FrameLayout < FrameLayout < FrameLayout < [id="android:id/content"]',
        //     '@ImageView < FrameLayout <3 FrameLayout <2 FrameLayout < FrameLayout < [id="android:id/content"]',
        //     '@ImageView < FrameLayout <5 FrameLayout <2 FrameLayout < FrameLayout < [id="android:id/content"]',
        //     '@ImageView < FrameLayout <3 FrameLayout < FrameLayout <2 FrameLayout < FrameLayout < [id="android:id/content"]',
        //   ],
        //   snapshotUrls: [
        //     'https://i.gkd.li/i/22875694',
        //     'https://i.gkd.li/i/22981753',
        //     'https://i.gkd.li/i/22962861',
        //     'https://i.gkd.li/i/22927729',
        //     'https://i.gkd.li/i/22920195',
        //   ],
        // },
        {
          key: 3,
          activityIds: 'com.sigmob.sdk.base.common.PortraitAdActivity',
          matches: 'TextView[id="close_btn"]',
          snapshotUrls: 'https://i.gkd.li/i/22939952',
        },
      ],
    },
    {
      key: 1,
      name: '功能类-通知弹窗',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: {
        matches:
          '@Button <2 View < View < View < View < View < View < FrameLayout < [id="android:id/content"]',
        snapshotUrls: 'https://i.gkd.li/i/22875699',
      },
    },
  ],
});
