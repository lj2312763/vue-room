export const downFile = (url = '', parsms) =>{
  let paramsStr = ''
  if(parsms){
    paramsStr += '?'
    for (const key in parsms){
      paramsStr+= (`${key}=${parsms[key]}&`)
    }
    paramsStr = paramsStr.slice(0, -1)
  }
  console.log(paramsStr)
  window.open(url+paramsStr)
}
