const axios = require('axios')
const CONTAINER_NAME = 'batch'

module.exports = async function (context, myBlob) {
  context.log('JavaScript blob trigger function processed blob \n Blob:', context.bindingData.blobTrigger, '\n Blob Size:', myBlob.length, 'Bytes')
  const sourceFile = context.bindingData.blobTrigger.replace(`${CONTAINER_NAME}/`, '')

  const result = await axios.post(process.env.TRIGGER_URL, {
    sourceFile,
    sourceContainer: CONTAINER_NAME,
    targetContainer: 'target'
  })

  if (result.status === 200) {
    console.log(`Successfully triggered transfer for ${sourceFile}`)
  } else {
    console.log(`Unable to transfer ${sourceFile}`)
  }
}
