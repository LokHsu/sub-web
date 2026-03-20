// 远程配置选项
export const REMOTE_CONFIGS = [
  {
    label: "默认",
    options: [
      { label: "不选，由接口提供方提供分流规则", value: "" }
    ]
  },
  {
    label: "定制规则",
    options: [
      { label: "LokHsu 自用规则", value: "https://raw.githubusercontent.com/LokHsu/QuantumultX/master/clash.ini" },
      { label: "ACL4SSR_Online 默认版", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini" },
      { label: "ACL4SSR_Online_AdblockPlus 更多去广告", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini" },
      { label: "ACL4SSR_Online_NoAuto 无自动测速", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini" },
      { label: "ACL4SSR_Online_NoReject 无广告拦截规则", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini" },
      { label: "ACL4SSR_Online_Mini 精简版", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini" },
      { label: "ACL4SSR_Online_Mini_AdblockPlus 精简版 更多去广告", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini" },
      { label: "ACL4SSR_Online_Mini_NoAuto 精简版 无自动测速", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini" },
      { label: "ACL4SSR_Online_Mini_MultiMode 精简版 自动测速、故障转移、负载均衡", value: "https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini" },
    ]
  }
];
