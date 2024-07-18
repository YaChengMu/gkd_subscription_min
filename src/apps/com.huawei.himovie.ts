import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.himovie',
  name: '华为视频',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      fastQuery: true,
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          action: 'clickCenter',
          matches: '[text^="跳过"][text.length<10]',
          snapshotUrls: 'https://i.gkd.li/i/15523945',
        },
      ],
    },
    {
      key: 1,
      name: '局部广告-首页横幅广告',
      activityIds: [
        'com.huawei.openalliance.ad.activity.FeedbackActivity',
        'com.huawei.video.content.impl.explore.main.activity.MainActivity',
        'com.huawei.videodetail.impl.activity.vod.VodDetailActivity',
      ],
      rules: [
        {
          matches: '[id="com.huawei.himovie:id/advert_flag"]',
          snapshotUrls: 'https://i.gkd.li/i/16191970',
        },
        {
          matches: '[text="直接关闭"]',
          snapshotUrls: 'https://i.gkd.li/i/16191978',
        },
      ],
    },
  ],
});
