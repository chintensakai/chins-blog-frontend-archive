import {request} from './request';

export function getAllArticles() {
    return request({
        url: '/article/all'
    })
}