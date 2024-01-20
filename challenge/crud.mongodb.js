use('crudDB');

db.createCollection("Courses")

// db.Courses.insertOne({
//     name:"web dev",
//     price: 90,
//     assignments: 12,
//     projects: 45
// })

// db.Courses.insertMany(
// [
// {
//     name:"web dev",
//     price: 90,
//     assignments: 12,
//     projects: 45
// },
// {
//     name:"web dev1",
//     price: 90,
//     assignments: 12,
//     projects: 45
// },
// {
//     name:"web dev2",
//     price: 90,
//     assignments: 12,
//     projects: 45
// },
// {
//     name:"web dev3",
//     price: 90,
//     assignments: 12,
//     projects: 45
// },
// {
//     name:"web dev4",
//     price: 90,
//     assignments: 12,
//     projects: 45
// }
// ]
// )

// let a = db.Courses.find({price:90})
// console.log(a.toArray());

// let b = db.Courses.updateOne({price:90}, {$set:{price:1000}})
// let c = db.Courses.updateMany({price:1000}, {$set:{price:100}})

// let c = db.Courses.deleteOne({price:90})
let c = db.Courses.deleteMany({price:90})