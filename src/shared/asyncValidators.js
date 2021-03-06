const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values /*, dispatch */) => {
  return sleep(1000).then(() => {
    
    // simulate server latency
    if (['john', 'paul', 'george', 'ringo'].includes(values.userName)) {
      throw { userName: 'That username is taken' }
    }
  })
}

export default asyncValidate