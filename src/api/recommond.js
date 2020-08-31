import axios from 'axios'
import {HOST} from 'common/js/config'

// 此方法用于获取轮播图数据
export function getBanner() {
    const url = HOST + '/banner'
    return axios.get(url)
}
// 获取歌单数据
export function getRecommondList() {
    const url = HOST + '/personalized'
    return axios.get(url)
}
//获取歌曲数据

export function getRecommondMusic() {
    const url = HOST + '/personalized/newsong'
    return axios.get(url)
}