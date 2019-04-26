import request from '@/utils/http'

// 获取新闻列表
 export const getNewsListData = ()=>{
   return request('get','/news/list/')
 }
