## Intro
Vue CLI 3.0 项目初始化
## Use

```
vue create --preset gyy5168/vue-cli-plugin-template <app-name>
```

## Framework

```
.
├── assets                              公共资源
│   ├── scss                            样式
│   └── image
├── components                          公共组件
├── configs                             项目公共配置
│   ├── behavior                        行为日志
│   ├── const                           全局常量
│   ├── domain                          api及资源域名
│   └── error                           api返回错误key
├── core                                基础逻辑处理
│   ├── apis                            axios封装
│   ├── directives                      指令
│   ├── extend                          原生方法拓展
│   ├── fiters                          过滤器
│   ├── mixins                          全局混入
│   ├── prototype                       自定义拓展方法
│   └── utils                           工具库
├── router                              路由
├── store                               状态管理
├── services                            api接口
├── views                               业务模块
├── App.vue                             
├── main                                
.
```


## License

MIT
