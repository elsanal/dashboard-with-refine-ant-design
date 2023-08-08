module.exports = {
    // Other webpack configuration options...
  
    devServer: {
      // Other devServer options...
  
      setupMiddlewares: (devServer) => {
        console.log('Custom middleware executed');
        next();

      },
    },
  };
  