module.exports = [
    {
        context: [ '/api' ],
        target: 'http://localhost:3000',
        secure: false,
        logLevel: 'debug'
      }
    // {
    //     context: ['/api/v2'],
    //     target: 'http://anotherhost',
    //     secure: false,
    //     logLevel: 'debug',
    // }
]