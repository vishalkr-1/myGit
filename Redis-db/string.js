// string
// const {client}=require('./client')
// async function init(){
//     await client.set("message:4","hey from nodejs")
//   const result=await client.get('user:1')
//   const result2=await client.get('message:1')
//   const result3=await client.get('message:4')
//   console.log("Result",result,"-",result2,"-",result3)
// //   await client.expire("message:4",10)
//   console.log(result3)
// }
// init()


// list=array,stack,queue
// const {client}=require('./client')
// async function init(){
//    await client.lpush('msg',1)
//    await client.lpush('msg',2)
//    await client.lpush('msg',3)
//    await client.lpush('msg',4)
// //    const result=await client.rpop('msg')
// //    console.log(result)
// //    const result2=await client.blpop('msg',10)

    
// const res = await client.lrange('msg', 0, -1)
//  const res3=await client.del('msg')
//     console.log(res3)
//         console.log(res)
// }
// init()

// sets =not allow unique value
// const {client}=require('./client')
// async function init(){
//    const res=await client.sadd('insta',"vishal")
//    const res2=await client.sismember("insta","vishal")
//    console.log(res2)
// }
// init()


// hashmap
// const {client}=require('./client')
// async function init(){
//     await client.del('bike:5')
//     const res1=await client.hset(
//         'bike:5',
//         {
//             'model':'demios',
//             'brand':'ergonom',
//             'type':'enduro'
//         }
//     )
    
//     const res2=await client.hget('bike:5','model')
//     const res3=await client.hget('bike:5','brand')
//     const res4=await client.hget('bike:5','type')
//     console.log("all",res1)
//     console.log(res2)
//     console.log(res3)
//     console.log(res4)

   
// }
// init()

// const {client}=require('./client')
// async function init(){
   


//   // Add station:1
//   const res1 = await client.sendCommand(['GEOADD', 'bikes:rentable', '-122.27652', '37.805186', 'station:1']);
//   console.log(res1);  // 1

//   // Add station:2
//   const res2 = await client.sendCommand(['GEOADD', 'bikes:rentable', '-122.2674626', '37.8062344', 'station:2']);
//   console.log(res2);  // 1

//   // Add station:3
//   const res3 = await client.sendCommand(['GEOADD', 'bikes:rentable', '-122.2469854', '37.8104049', 'station:3']);
//   console.log(res3);  // 1




// }
// init()
