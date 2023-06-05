const { reactive, effect } =  require('../vue2')

describe('reactivity/vue2', () => {
  it('测试数据改变时 是否响应', () => {
    const data = reactive({
      name: 'abc',
      age: {
        n: 5
      }
    })
    // Mock 一个响应函数
    const fn = jest.fn();
    const result = fn();
    // 将fn 收集为data 对象的订阅者
    effect(fn);
    data.name = 'efd';
    expect(fn).toBeCalled();
  })

  it('测试多层数据中改变时 是否被响应', () => {
    const data = reactive({
      age: {
        n: 5
      }
    })
    const fn = jest.fn();
    effect(fn);
    data.age.n = 1;
    expect(fn).toBeCalled()
  })

  it('测试数组中数据改变时 是否被响应', () => {
    const data = reactive({
      ary: ['a']
    })
    const fn = jest.fn()
    effect(fn)
    data.ary[0] = 'b';
    expect(fn).toBeCalled()
  })
})