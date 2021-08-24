import { asyncLogic, myfunc, somelogic, func1, domcreate } from "./ind";
beforeEach(() => {
  console.log('before');
})

beforeEach(() => {
  console.log('after');
})

test('should return 0 if c = 0', () => {
  expect(myfunc(1,0)).toBeCloseTo(0);
})

test('should return 1', () => {
  expect(myfunc(1,1)).toBe(-1);
})

describe('a', () => {
  test('should reverse', () => {
    expect(somelogic('123456')).toBe('654321');
  })

  test('should not reverse', () => {
    expect(somelogic('1234')).toBe('1234');
  })
})

describe('async test', () => {
  test('should return 123', (done) => { // done - wait until finish, like resolve promise
    asyncLogic((res)=> {
      expect(res).toBe(123);
      done();
    });
  });
});

test('should work', () => {
  expect(func1(3)).toBe(12*3);
});

test('should work with dom', () => {
  let el = domcreate();
  expect(el).toBeInstanceOf(HTMLButtonElement)
  expect(el.textContent).toBe('12345');
});
