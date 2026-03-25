import { validateForm } from '@/utils/validators';

/**
 * 订阅链接生成逻辑
 */
export function useSubscription() {
  /**
   * 构建基础URL
   * @param {Object} form - 表单数据
   * @param {string} processedSubUrl - 处理后的订阅链接
   * @param {string} currentBackend - 当前后端地址
   * @returns {string} 基础URL
   */
  const buildBaseUrl = (form, processedSubUrl, currentBackend) => {
    return currentBackend +
      "target=" + form.clientType +
      "&url=" + encodeURIComponent(processedSubUrl);
  };

  /**
   * 构建布尔参数
   * @param {Object} form - 表单数据
   * @returns {string} 参数字符串
   */
  const buildBooleanParams = (form) => {
    let params = "";

    if (form.emoji === true) {
      params += "&emoji=" + form.emoji.toString();
    }

    if (form.tfo === true) {
      params += "&tfo=" + form.tfo.toString();
    }

    if (form.scv === true) {
      params += "&scv=" + form.scv.toString();
    }

    if (form.sort === true) {
      params += "&sort=" + form.sort.toString();
    }

    // 过滤目标类型不支持的节点 API 默认为 true
    if (form.fdn === false) {
      params += "&fdn=" + form.fdn.toString();
    }

    // 转换规则列表 API 默认为 true
    if (form.expand === false) {
      params += "&expand=" + form.expand.toString();
    }

    return params;
  };

  /**
   * 构建模板特定参数
   * @param {Object} form - 表单数据
   * @returns {string} 参数字符串
   */
  const buildTemplateParams = (form) => {
    let params = "";

    if (form.tpl.surge.doh === true) {
      params += "&surge.doh=true";
    }

    if (form.clientType === "clash") {
      if (form.tpl.clash.doh === true) {
        params += "&clash.doh=true";
      }
      params += "&new_name=" + form.new_name.toString();
    }

    return params;
  };

  /**
   * 构建自定义参数
   * @param {Array} customParams - 自定义参数数组
   * @returns {string} 参数字符串
   */
  const buildCustomParams = (customParams) => {
    return customParams
      .filter(param => param.name && param.value)
      .map(param => `&${encodeURIComponent(param.name)}=${encodeURIComponent(param.value)}`)
      .join("");
  };

  /**
   * 构建进阶模式参数
   * @param {Object} form - 表单数据
   * @param {Array} customParams - 自定义参数数组
   * @param {boolean} needUdp - 是否需要UDP
   * @returns {string} 参数字符串
   */
  const buildAdvancedParams = (form, customParams, needUdp) => {
    let params = "";

    // 远程配置
    if (form.remoteConfig) {
      params += "&config=" + encodeURIComponent(form.remoteConfig);
    }

    // 过滤参数
    if (form.excludeRemarks) {
      params += "&exclude=" + encodeURIComponent(form.excludeRemarks);
    }
    if (form.includeRemarks) {
      params += "&include=" + encodeURIComponent(form.includeRemarks);
    }

    // 文件名
    if (form.filename) {
      params += "&filename=" + encodeURIComponent(form.filename);
    }

    // 节点类型
    if (form.appendType) {
      params += "&append_type=" + form.appendType.toString();
    }

    // 基础布尔参数
    params += buildBooleanParams(form);

    // UDP 参数
    if (needUdp && form.udp === true) {
      params += "&udp=" + form.udp.toString();
    }

    // 模板特定参数
    params += buildTemplateParams(form);

    // 自定义参数
    params += buildCustomParams(customParams);

    return params;
  };

  /**
   * 生成订阅链接
   * @param {Object} form - 表单数据
   * @param {string} advanced - 高级模式标识
   * @param {string} processedSubUrl - 处理后的订阅链接
   * @param {string} currentBackend - 当前后端地址
   * @param {Array} customParams - 自定义参数数组
   * @param {boolean} needUdp - 是否需要UDP
   * @returns {string} 生成的订阅链接
   */
  const makeUrl = (form, advanced, processedSubUrl, currentBackend, customParams, needUdp) => {
    // 验证必填项
    if (!validateForm(form)) {
      return "";
    }

    // 构建基础 URL
    const baseUrl = buildBaseUrl(form, processedSubUrl, currentBackend);
    let customSubUrl = baseUrl;

    // 进阶模式添加额外参数
    if (advanced === "2") {
      customSubUrl += buildAdvancedParams(form, customParams, needUdp);
    }

    return customSubUrl;
  };

  return {
    makeUrl,
    buildBaseUrl,
    buildAdvancedParams
  };
}
