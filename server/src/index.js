 import {app} from './app.js';

 import connectDB from './db/index.js';

  

 const PORT = process.env.PORT || 5000;

 const startServer = async()=>{
       await connectDB();

     


    app.listen(PORT,()=>{
            console.log(`server running on port at http://localhost:${PORT}`);
    });
 };

  

 startServer();



