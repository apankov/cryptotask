import data from '@/api/data.js'

export default {
  getWork(Vue, params, cb)
  {
    if(params.loadMore)
    {
      cb({data: data});
    }
    else
    {
      cb({data: data});
    }
  }
}
