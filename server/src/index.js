 import {app} from './app.js';

 import connectDB from './db/index.js';

 import fileRoutes from './routes/file.routes.js';

 const PORT = process.env.PORT || 5000;

 const startServer = async()=>{
       await connectDB();
    app.use('/api/files',fileRoutes);

    app.listen(PORT,()=>{
            console.log(`server running on port at http://localhost:${PORT}`);
    });
 };

  

 startServer();



