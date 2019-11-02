let tools = {}

tools.setCookie = (name, value, time) => {
  Megalo.setStorageSync(name, {
    value,
    endTime: + new Date() + time
  })
}

tools.getCookie = (name) => {
  let obj = Megalo.getStorageSync(name)
  if (obj.endTime > + new Date()) {
    return obj.value
  } else {
    Megalo.removeStorageSync(name)
    return ''
  }
}

export default tools
