const test = {
    name: 'Test',
    ping() {
        console.log('Ping')
    }
  }
  
  export default ({ app }, inject) => {
    inject('test', test)
  }