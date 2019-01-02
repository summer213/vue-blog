import methodMap from './apiMap';
import AsInst from './axios';
import { Message } from 'element-ui';
import { Loading } from 'element-ui';

/**
 * 网络请求插件
 */
class Http {}

Http.install = function(Vue) {

    /**
     * 全局请求接口
     * @param method 方法
     * @param opts 参数
     * @param toast 是否提示
     * @returns {string}
     */
    Vue.prototype.request = function(method, opts, toast, id = "") {
        let m = methodMap[method];

        // 如果 apiMap.js 中不存在请求方法
        if (!m) {
            Loading.close();
            console.log('url 错误', '返回结果：err = ', '无法请求，无效的请求！', '\n');
            return new Promise((resolve, reject) => {
                reject('url 错误' + '返回结果：err = ' + '无法请求，无效的请求！');
            });
        }

        // 如果缺少请求 method 方法
        if (typeof m.method === 'undefined') {
            console.log('method 错误', '缺少请求 method 方法', '\n');
            return new Promise((resolve, reject) => {
                reject('method 错误' + '缺少请求 method 方法');
            });
        }

        // 如果请求参数为空或者不为
        let optsType = typeof(opts);
        if (optsType === null || optsType !== 'object') {
            opts = {};
        }

        let headers = {};
        let headersType = typeof(m.code);
        if (headersType === 'String') {
            headers = { "code": m.code };
        }

        //如果有给 toast 参数则显示 loading 加载数据
        // showLoading(toast);
        const Loading = this.$loading({
            lock: true,
            text: '加载中',
            background: 'rgba(255, 255, 255, 0.8)'
          });

        let params = {};
        let data = {};
        if (m.method == 'put' || m.method == 'post' || m.method == 'patch' || m.method == 'delete') {
            data = opts;
        } else {
            params = opts;
        }

        let config = {
            "method": m.method,
            "url": m.url + id,
            "headers": headers,
            "params": params,
            "data": data
        };

        return new Promise((resolve, reject) => {
            AsInst.request(config)
                .then((response) => {
                    Loading.close();
                    resolve(response.data);
                })
                .catch((error) => {
                    // errorHandler(error);
                    Loading.close();
                    reject(error);
                    if (this.$route.name == "login") {
                        if (error.response.data.statusCode != 200) {
                            this.identify();
                            this.form.isActivepic = true
                            window.localStorage["isActivepic"] = 1;
                            this.$message.error(error.response.data.msg);
                        }
                    } else {
                        if (error.response.data.statusCode != 200) {
                            this.$message.error(error.response.data.msg);
                        }
                    }

                });
        });
    };

    /**
     * 错误请求处理
     */
    function errorHandler(error) {
        if (error.status === 200) {
            if (error.data && error.data.code === 2000) {
                this.$message.error(error.data.msg);
                console.log('自定义日志：', error);
            }
        } else if (error.status === 500) {
            Message.error('后端服务请求500错误,如一直出现错误,请联系我们');
            console.log('自定义日志：', error);
        } else {
            Message.error('服务请求出错');
            console.log('自定义日志：', error);
        }
    }
};

export default Http;