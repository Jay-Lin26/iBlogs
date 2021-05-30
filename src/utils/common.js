import { Message } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

export default {
  //自定义消息提示框
  msgBox: function (title, status) {
    Message({
      center: true,
      duration: 2000,
      message: title,
      type: status,
    });
  },
};
