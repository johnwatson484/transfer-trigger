const axios = require('axios')

module.exports = async function (context, myBlob) {
  context.log('JavaScript blob trigger function processed blob \n Blob:', context.bindingData.blobTrigger, '\n Blob Size:', myBlob.length, 'Bytes')
  const sourceFile = context.bindingData.blobTrigger

  const result = await axios.post(process.env.TRIGGER_URL, {
    sourceFile
  })

  console.log(result)
}
