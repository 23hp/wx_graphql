/**
 * Created by 23hp on 2018/6/15.
 * 基于Promise的GraphQL网络请求库
 * GraphQL入门
 * https://graphql.cn/learn/
 * Promise详细介绍：
 * http://es6.ruanyifeng.com/#docs/promise
 */

/**
 * GraphQL接口端点
 *  本例使用 德国铁路基础设施数据 提供的API端点
 *  在浏览器中打开链接查看相关文档
 */
const endpoint = 'https://developer.deutschebahn.com/free1bahnql/graphql';

/**
 * 发起GraphQL请求
 * @param query 查询语句
 * @param variables 变量
 * @returns {Promise<any>}
 */
export function request(query, variables) {
    const param = {
        query,
        variables,
    };
    return new Promise((resolve, reject) => {
        wx.request({
            url:endpoint,
            data:param,
            method:'POST',
            success: (res) => {
                const { errors, data } = res.data;
                errors ? reject(errors.map(({message})=>message)) : resolve(data);
            },
            fail: (error) => reject(error),
        });
    });
}
