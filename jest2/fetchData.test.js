// const fetchData=require('./fetchData')
// test("testing callback function",done=>{
//     function callback(data){
//         try{
//             expect(data).toBe('Hello callBack')
//             done()
//         }catch(err){
//             done(err)
//         }
//     }
//     fetchData(callback)
    
// })

// promise

// const fetchData=require('./fetchData')
// test('promise testing ',()=>{
//     return fetchData().then((data)=>{
//         expect(data).toBe('hello')
//     })
// })

// const fetchData=require('./fetchData')
// test('async function ',async()=>{
//     const data=await fetchData()
//     expect(data).toBe(100)

// })

// foreach
const fetchData=require('./fetchData')
const common=require('./common')
beforeEach(()=>{
    console.log(common());
})
test('fetch data testing',()=>{
    expect(fetchData()).toBe('hello')
})
test('fetch data testing',()=>{
    expect(fetchData()).toBe('hello')
})