import service from "./request.js";

//获取验证码
export const getCode = function (data) {
  return service({
    url: "/api/v1.0/member/verification",
    method: "get",
    params: { email: data },
  });
};
//登录
export const login = function (data) {
  return service({
    url: "api/v1.0/member/login",
    method: "post",
    data,
  });
};
//注册
export const register = function (data) {
  return service({
    url: "api/v1.0/member/register",
    method: "post",
    data,
  });
};

//首页文案
export const index = function () {
  return service({
    url: "/api/v1.0/article/index",
    method: "get",
  });
};

//博客详情
export const blog_detail = function ( data ) {
  return service({
    url: "/api/v1.0/article/detail",
    method: "get",
    params: { article_id: data }
  });
};
