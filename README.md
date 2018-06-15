# GraphQL网络请求库-微信小程序

使用 Promise 封装的微信小程序GraphQL网络请求库

![请求示例](https://github.com/23hp/wx_graphql/blob/master/demo.png)

### 功能

- 减少你70%的代码量，不再一遍遍重复微信的样板代码
- 调用灵活，错误处理简单而方便
- 支持并发/并行执行多个请求

### 请求示例

    getStation(8000105).then(data=>{//处理成功回调
        this.setData({eva:data.stationWithEvaId});
    }).catch(error=>{//处理失败回调
        this.setData({error:JSON.stringify(error)});
    })

这里没有任何graphql的代码，因为我们把它接口封装在`service.js`，便于复用。

### 使用方法

跟着本教程一同练习，你马上就能上手。

1. 复制util目录下的`network.js`和`service.js`文件到你的项目目录，network.js 存放原始的请求方法，service存放接口。
2. 按需引入`service.js`中相应请求方法并调用。

### 定义接口

在service.js中定义请求方法

    /**
     * 获取站台信息
     */
    export const getStation = (evaId = 8000105) => {
        const gql=`
            query findStation($evaId:Int!){
              stationWithEvaId(evaId: $evaId) {
                name
                picture {
                  url
                }
              }
            }
        `;
        const variables = { evaId };
        return request(gql, variables);
    };

### 引入和调用

    import {getStation} from '../../util/service';

    onLoad(){
        getStation(8000105).then(data=>{//处理成功回调
            this.setData({eva:data.stationWithEvaId});
        }).catch(error=>{//处理失败回调
            this.setData({error:JSON.stringify(error)});
        })
    },


使用then方法就可以获取到返回值了，如果需要处理错误，再在后面接catch方法。

了解诸如并发/并行请求等高级用法，见我的[另一个项目](https://github.com/23hp/wx_network)：

