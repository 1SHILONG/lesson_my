import { getCurrentInstance } from 'vue';
import type { IInstance } from '../type';
import defaultLang from './lang/zh-CN';
// 自定义的国际化函数
export const t = (...args: any[]): string => {
  // 当前组件实例
  console.log('xxxx');
  
  const instance = getCurrentInstance() as IInstance;
  const _t = instance._hub?.t;
  if (_t) return _t(...args);
  console.log(222,'tttt');
  
  const [path] = args;
  const arr = path.split('.');
  let current: any = defaultLang,
    value: string = '',
    key: string;

  for (let i = 0, len = arr.length; i < len; i++) {
    key = arr[i];
    value = current[key];
    console.log(value);
    
    if (i === len - 1) return value;
    if (!value) return '';
    current = value;
  }
  return '';
};