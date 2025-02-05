import { batchImportApps } from '@gkd-kit/tools';
import { RawApp } from '@gkd-kit/api';

const apps = await batchImportApps(`${import.meta.dirname}/apps`);

// 全局规则黑名单
// 在一些非系统应用中禁用所有全局规则
export const blackListAppIDs: string[] = [
  'com.tencent.mm', // 微信
  'li.songe.gkd', // GKD
  'com.eg.android.AlipayGphone', //支付宝
  'com.tencent.wetype', // 微信输入法
  'com.tmri.app.main', // 交管12123
  'org.telegram.messenger', // Telegram
  'com.accessibilitymanager', // 无障碍管理器
  'com.alicloud.databox', // 阿里云盘
  'com.quark.browser', // 夸克浏览器 开屏广告误触 https://i.gkd.li/i/18221460
];

// 如果某应用的规则中已有全局规则中的某一类的规则, 则在此应用禁用对应全局规则
function filterAppsByGroup(apps: RawApp[], groupNamePrefix: string): string[] {
  return apps
    .filter(
      (a) =>
        a.groups.filter((g: { name: string }) =>
          g.name.startsWith(groupNamePrefix),
        ).length > 0,
    )
    .map((a) => a.id);
}

// 在应用中单独禁用某个全局规则
// 开屏广告黑名单
export const openAdBlackListAppIDs = new Set([
  ...blackListAppIDs,
  'com.sankuai.meituan', // 美团 误触 https://i.gkd.li/i/17827264
  ...filterAppsByGroup(apps, '开屏广告'),
]);

// 更新提示黑名单
export const updateBlackListAppIDs = new Set([
  ...blackListAppIDs,
  'com.jingdong.app.mall', // 京东
  ...filterAppsByGroup(apps, '更新提示'),
]);

// 青少年模式黑名单
export const yongBlackListAppIDs = new Set([
  ...blackListAppIDs,
  'com.autonavi.minimap', // 高德地图
  'com.MobileTicket', // 铁路12306
  'com.sinovatech.unicom.ui', // 中国联通
  'com.sankuai.meituan', // 美团
  'com.taobao.idlefish', // 闲鱼
  'com.tencent.mobileqq', // QQ
  'com.taobao.taobao', // 淘宝
  'com.ct.client', // 中国电信
  'me.ele', // 饿了么
  ...filterAppsByGroup(apps, '青少年模式'),
]);

// 全局规则白名单（由于系统应用默认禁用全局规则，所以对系统应用启用白名单模式）
// 在一些系统软件中启用所有全局规则
export const whiteListAppIDs: string[] = [];

// 在应用中单独启用某个全局规则
// 开屏广告白名单
export const openAdWhiteListAppIDs = new Set([...whiteListAppIDs]);

// 更新提示白名单
export const updateWhiteListAppIDs = new Set([...whiteListAppIDs]);

// 青少年模式白名单
export const yongWhiteListAppIDs = new Set([...whiteListAppIDs]);
