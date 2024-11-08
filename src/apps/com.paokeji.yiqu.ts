import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.paokeji.yiqu',
  name: '喵趣漫画',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      resetMatch: 'app',
      actionMaximum: 1,
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          action: 'clickCenter',
          matches:
            '[childCount=0][visibleToUser=true][(text.length<10&&(text*="跳过"||text*="跳过"||text*="skip"||text*="Skip")) || id$="tt_splash_skip_btn" || vid*="skip" || vid*="Skip" || (vid*="count" && vid*="down" && vid!*="download") || desc*="跳过" || desc*="skip"]',
          snapshotUrls: 'https://i.gkd.li/i/14753912',
        },
        // {
        //   key: 1,
        //   matches:
        //     'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true] + TextView <<n [id="android:id/content"]',
        //   snapshotUrls: [
        //     'https://i.gkd.li/i/14031922',
        //     'https://i.gkd.li/i/14322264',
        //   ],
        // },
      ],
    },
    {
      key: 1,
      name: '全屏广告',
      activityIds: [
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
        'com.aster.comic.app.view.MainActivity',
        'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
      ],
      rules: [
        {
          key: 0,
          actionDelay: 350, //防误触
          matches:
            '[text^="摇动"||text*="扭动"||text*="立即领取"] <<n [id="android:id/content"] >n ImageView[width<=70]',
          snapshotUrls: [
            'https://i.gkd.li/i/13830354',
            'https://i.gkd.li/i/13842716',
            'https://i.gkd.li/i/15374245',
          ],
        },
        {
          key: 1,
          name: '字节SDK',
          matches: 'FrameLayout[desc*="close"] > View',
          snapshotUrls: [
            'https://i.gkd.li/i/13839432',
            'https://i.gkd.li/i/13839519',
          ],
        },
        {
          key: 2,
          name: '穿山甲SDK',
          // actionDelay: 350, //防误触
          matches: [
            '[id="com.byted.pangle.m:id/tt_reward_full_count_down_after"]',
            //'[text*="跳过" && text.length<=6] <2 @View -(3-n) View < View',
            '[text*="跳过"]',
            '[text="反馈"] -n @View[index<=1] > Image[text.length=0]',
            '[text="反馈"] <n View <n View > View[index<=1] > Image[text.length=0]',
            '[text="反馈"] +n @View > Image[text.length=0]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13810767', //规则1
            'https://i.gkd.li/i/13829749', //规则2
            'https://i.gkd.li/i/14362119', //规则2
            'https://i.gkd.li/i/13809737', //规则3
            'https://i.gkd.li/i/13809578', //规则3
            'https://i.gkd.li/i/14717730', //规则3
            'https://i.gkd.li/i/16062358', //规则3
            'https://i.gkd.li/i/13830798', //规则4
            'https://i.gkd.li/i/13810150', //规则4
          ],
        },
        {
          key: 3,
          name: '快手SDK',
          matches: [
            '[text*="跳过"] <n *[clickable=true]',
            '[vid="ksad_auto_close_btn"]',
            '[vid="ksad_video_container"] < * >n ViewGroup[index=1] >n @ViewGroup[clickable=true] > ImageView',
            '[id*="/ksad_container"] < * >n ViewGroup[index=2] >n @ViewGroup[clickable=true] > ImageView',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/13809629', //规则1
            'https://i.gkd.li/i/13837855', //规则2
            'https://i.gkd.li/i/13829312', //规则3
            'https://i.gkd.li/i/14584695', //规则4
          ],
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      desc: '点击"暂不"',
      matchTime: 10000,
      fastQuery: true,
      resetMatch: 'app',
      actionMaximum: 1,
      rules: [
        {
          matches: '[id="com.paokeji.yiqu:id/btnCancel"]',
          exampleUrls:
            'https://m.gkd.li/57941037/2ce54292-bfc6-41c6-b2e5-e7d8302fc522',
          snapshotUrls: 'https://i.gkd.li/i/14140265',
        },
      ],
    },
    {
      key: 3,
      name: '全屏广告-弹窗广告',
      rules: [
        // {
        //   key: 0,
        //   activityIds:
        //     'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        //   matches: '[text="反馈"] + @View[childCount=2] > [text="跳过"]',
        //   snapshotUrls: 'https://i.gkd.li/i/14362119',
        // },
        // {
        //   key: 1,
        //   activityIds:
        //     'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
        //   matches:
        //     '[text="反馈"] -(2,4) @View[childCount=1][visibleToUser=true] > Image[childCount=0][text=""]',
        //   snapshotUrls: [
        //     'https://i.gkd.li/i/14717730',
        //     'https://i.gkd.li/i/16062358',
        //   ],
        // },
        {
          key: 1,
          actionDelay: 350, //防误触
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Activity_T',
          matches: '[id="android:id/content"] >n ImageView[width<=70]',
          snapshotUrls: [
            'https://i.gkd.li/i/13842966',
            'https://i.gkd.li/i/15173845',
          ],
        },
        {
          key: 2,
          fastQuery: true,
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: '@LinearLayout[clickable=true] - * > [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/14847142',
        },
        {
          key: 3,
          activityIds: [
            'com.aster.comic.app.view.MainActivity',
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          ],
          matches: '[text="反馈"] + @View > Image[childCount=0]',
          snapshotUrls: 'https://i.gkd.li/i/15711106',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-漫画页链接断开提示',
      desc: '点击[点我重试]',
      actionMaximum: 3,
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.aster.comic.app.view.reader.ReaderActivity',
          matches: '@[clickable=true] > [text="点我重试"]',
          exampleUrls:
            'https://m.gkd.li/57941037/d71c73bb-289f-4205-a253-fcd8bd32f196',
          snapshotUrls: 'https://i.gkd.li/i/14572053',
        },
      ],
    },
    {
      key: 5,
      name: '全屏广告-看视频解锁任意读',
      rules: [
        {
          key: 0,
          name: '看视频解锁任意读',
          activityIds: 'com.aster.comic.app.view.reader.ReaderActivity',
          matches:
            'TextView[text="看视频解锁任意读"] < LinearLayout +3 LinearLayout > @Button[id="com.paokeji.yiqu:id/btnLook"]',
          snapshotUrls: ['https://i.gkd.li/i/14584512'],
        },
        {
          preKeys: [0],
          key: 1,
          name: '看视频解锁任意读-广告',
          matches: '@ImageView[width>30&&width<40]',
          snapshotUrls: ['https://i.gkd.li/i/14584512'],
        },
      ],
    },
  ],
});
