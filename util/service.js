/**
 * 此文件管理项目所有接口
 */
import {request} from './network';


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

