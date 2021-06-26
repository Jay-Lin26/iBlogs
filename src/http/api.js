import service from "./request.js";

//获取验证码
export const getCodeApi = function (data) {
  return service({
    url: "api/v1.0/member/verification/",
    method: "get",
    params: { email: data },
  });
};
//登录
export const loginApi = function (data) {
  return service({
    url: "api/v1.0/member/login/",
    method: "post",
    data,
  });
};
//注册
export const registerApi = function (data) {
  return service({
    url: "api/v1.0/member/register/",
    method: "post",
    data,
  });
};

//首页文案
export const indexApi = function () {
  return service({
    url: "api/v1.0/article/index/",
    method: "get",
  });
};

//博客详情
export const articleDetailApi = function ( data ) {
  return service({
    url: "api/v1.0/article/detail/",
    method: "get",
    params: { article_id: data }
  });
};

//标签内容
export const categoryTagApi = function () {
  return service({
    url: "api/v1.0/category/tags",
    method: "get",
  })
}