const { reactive, effect } = require('../vue3')

describe('reactivity/vue3', () => {
  it('响应式是否响应', () => {
    const data = reactive({
      a: 1,
      b: {
        name: 'fuchu'
      }
    })
    const fn = jest.fn();
    const result = fn;
    effect(fn);
    // data.a = 2
    data.c = 'fuchu2'
    
    expect(fn).toBeCalled()
  })

})