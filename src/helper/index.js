export const findById = (resoureces, theId) => {
  if (!resoureces) return null
  return resoureces.find((r) => r.id === theId)
}

export const upsert = (resoureces, soure) => {
  if (!resoureces) return null
  else {
    const inxPost = resoureces.findIndex((e) => e.id === soure.id)
    if (soure.id && inxPost > -1) {
      resoureces[inxPost] = soure
    } else {
      resoureces.push(soure)
    }
  }
}

export const docToResource = (doc) => {
  if (typeof doc?.data !== 'function') return doc
  return { ...doc.data(), id: doc.id }
}

export const RandomWord = function (arr) {
  const random = Math.floor(Math.random() * arr.length)
  return arr[random]
}

// function (doc) {
//   if (typeof doc !== 'function') return doc
//   return { ...doc.data(), id: doc.id }
// }
