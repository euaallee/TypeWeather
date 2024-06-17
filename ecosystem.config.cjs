module.exports = {
  apps: [
    {
      name: `typeweather-app`,
      script: "serve",
      env: {
        PM2_SERVE_PATH: "./dist",
        PM2_SERVE_PORT: 5000,
        PM2_SERVE_SPA: "true",
        NODE_ENV: 'production',
      },
    },
  ],
};