let isRegister = false
export const register = () => {
  if (typeof window !== 'undefined' && !isRegister) {
    // const { registerMicroApps, start } = require('qiankun')
    // registerMicroApps([
    //   {
    //     name: 'podcast-management-umi', // app name registered
    //     entry: '//localhost:8081',
    //     container: '#appContainer',
    //     activeRule: '/podcast-management-umi'
    //   }
    // ])
    // isRegister = true
    // start()
  }
}
