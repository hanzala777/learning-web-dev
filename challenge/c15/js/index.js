import fs from 'fs/promises'
import fsn from 'fs'
import path from 'path'

const basepath = 'C:\\Web Development\\challenge\\c15';
let files = await fs.readdir(basepath);
console.log(files);

let extension = [];
for (const item of files) {
    let ext = item.split(".")[item.split('.').length-1]
    console.log(ext);
    if(fsn.existsSync(path.join(basepath, ext))){
        fs.rename(path.join(basepath,item), path.join(basepath, ext, item));
    }
    else{
        fs.mkdir(path.join(basepath, ext))
    }
    console.log(item)
}