/*
 * @Author: hpw
 * @Date: 2019-08-19 14:37:08
 * @LastEditors: hpw
 * @LastEditTime: 2019-08-19 16:20:06
 */
import { commonParams, options } from "./config";
// declare function jsonp(url: string, data: any, options: any): void;
import jsonp from "../common/js/jsonp";

export function getRecommend(): any {
  const url = "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg";
  const data = Object.assign({}, commonParams, {
    platform: "h5",
    uin: 0,
    needNewCode: 1
  });
  return jsonp(url, data, options);
}
