// const users = [
//     {id:1,name:'John Doe'},
//     {id:2,name:'Jane Smith'},
//     {id:3,name:'John lama'},
//     {id:4,name:'John papa'},
// ]
// const posts=[
//     {id:1,title:'Post 1',body:'......',userId:1},
//     {id:2,title:'Post 1',body:'......',userId:1},
//     {id:3,title:'Post 1',body:'......',userId:1},
//     {id:4,title:'Post 1',body:'......',userId:1},
//     {id:5,title:'Post 1',body:'......',userId:1},
// ]
import { Post, User } from "./models";
import { connectToDb } from "./utils"


export const getPosts= async()=>{
   try {
    connectToDb();
    const posts = await Post.find()
    return posts;
   } catch (err) {
    console.log(err)
    throw new Error ('failed to fetch posts !')
   }
}

export const getPost = async(slug)=>{
    try {
        connectToDb();
        const post = await Post.find({slug})
        return post;
       } catch (err) {
        console.log(err)
        throw new Error ('failed to fetch post !')
       }
}

export const getUser = async(id)=>{
    try {
        connectToDb();
        const user = await User.findById()
        return user;
       } catch (err) {
        console.log(err)
        throw new Error ('failed to fetch user !')
       }
}
export const getUsers = async()=>{
    try {
        connectToDb();
        const users = await User.find()
        return users;
       } catch (err) {
        console.log(err)
        throw new Error ('failed to fetch users !')
       }
}
