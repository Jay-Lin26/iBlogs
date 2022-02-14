import service from "./request.js";

//获取验证码
export const getCodeApi = function (data) {
  return service({
    url: "/member/verification/",
    method: "get",
    params: { email: data },
  });
};
//登录
export const loginApi = function (data) {
  return service({
    url: "/member/login/",
    method: "post",
    data,
  });
};
//注册
export const registerApi = function (data) {
  return service({
    url: "/member/register/",
    method: "post",
    data,
  });
};

//首页文案
export const indexApi = function () {
  return service({
    url: "/article/index/",
    method: "get",
  });
};

//博客详情
export const articleDetailApi = function ( data ) {
  return service({
    url: "/article/detail/",
    method: "get",
    params: { article_id: data }
  });
};

//标签分类
export const categoryTagApi = function () {
  return service({
    url: "/category/tags",
    method: "get",
  })
}
//标签详情
export const tagDetailApi = function ( data ) {
  return service({
    url: "/category/detail",
    method: "get",
    params: { tag_id: data }
  })
}
//文章列表
export const articleListApi = function ( data ) {
  return service({
    url: "/article/list",
    method: "get",
  })
}