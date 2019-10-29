const fs = require('fs')
const path = require('path')

// File System
// fs.mkdir(path.join(__dirname, 'notes'), err => {
 //   if (err) throw new Error(err)
 //   if (err) throw err

 //   console.log('Folder was created')
// })

/*fs.writeFile(
    path.join(__dirname, 'notes', 'mynotes.txt' ), //Better use aSync methods, not Sync!
    'Hello world',
    (err) => {
        if (err) throw err
        console.log('File was created')

       fs.appendFile( //Add new content to that file
            path.join(__dirname, 'notes', 'mynotes.txt' ),
            'From append file',
            err => { //possible write without (), if it's one object
                if (err) throw err
                console.log('File was changed')

                fs.readFile (
                    path.join(__dirname, 'notes', 'mynotes.txt' ),
                    'utf-8',
                    (err,data ) =>{
                        if (err) throw err
                        console.log(data) //(Buffer.from(data).toString())
                    }
                )
            }
        )
    }
)*/

//fs.readFile (
   // path.join(__dirname, 'notes', 'mynotes.txt' ),
    //'utf-8',
    //(err,data ) =>{
      //  if (err) throw err
        //console.log(data) //(Buffer.from(data).toString())
    //}
//)

fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if (err) throw err

        console.log('File renamed')
    }
)