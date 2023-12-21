import request from "./request";

export const sendGetRealStatus = () => {
    return request({
        url: '/disaggregate',
        method: 'get'
    })
}
