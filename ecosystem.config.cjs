module.exports = {
  apps: [
    {
      name: 'main',
      port: '3101',
      exec_mode: 'cluster',
      instances: 'max',
      script: '.output/server/index.mjs',
      cwd: './',
      args: 'start',
      env: {
        PORT: '3101',
        NODE_ENV:'production'
      }
    }
  ]
}
