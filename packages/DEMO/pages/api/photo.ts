import qiniu from 'qiniu'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const accessKey = 'troqGVcc8zRc4Sx6S9itOL6iyanT58Rm-Mtl8HI5'
const secretKey = 'Jpxaweip5XHR7E5j2LMpK-2YbrdxTikzCKsZRDFT'
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)
const options = {
  scope: 'm-test'
}

export default (req, res) => {
  res.statusCode = 200
  const putPolicy = new qiniu.rs.PutPolicy(options)
  const uploadToken = putPolicy.uploadToken(mac)
  res.json({ token: uploadToken })
}
