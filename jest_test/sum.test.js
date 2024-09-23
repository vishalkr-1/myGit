const sum=require('./sum')
// test('sum test case',()=>{
//     expect(sum()).toBe(3)
//     // expect is function 
// })
// test('sum test case',()=>{
//     expect(sum(2,3)).toBe(5)
//     // expect is function 
//     // expect(sum(3,2)).toBe(9)
// })
test('object testing',()=>{
    expect(sum()).toEqual({name:'anil'})
})