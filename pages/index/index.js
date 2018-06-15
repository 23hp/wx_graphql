//index.js
//引入接口
import {getStation} from "../../util/service";

Page({
    data: {
        eva:null,//列车数据
        error:null,//错误信息
    },
    load() {
        this.setData({eva:null,error:null}); //重置数据

        getStation(8000105).then(data=>{//处理成功回调
            this.setData({eva:data.stationWithEvaId});
        }).catch(error=>{//处理失败回调
            this.setData({error:JSON.stringify(error)});
        })
    },

});
