import axios from 'axios'
import aws4 from 'aws4'

const extractHostname = (url) => {
  const match = url.match(
    /^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/ // eslint-disable-line
  )
  return (
    match && {
      href: url,
      protocol: match[1],
      host: match[2],
      hostname: match[3],
      port: match[4],
      pathname: match[5],
      search: match[6],
      hash: match[7],
    }
  )
}

class API {
  static async requestCognito(url, payload) {
    const request = {
      host: extractHostname(url).hostname,
      method: 'POST',
      url,
      data: payload,
      body: JSON.stringify(payload),
      path: extractHostname(url).pathname,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }

    const AWS_Credentials = {
      AccessKeyId: sessionStorage.getItem('AccessKeyId'),
      SessionToken: sessionStorage.getItem('SessionToken'),
      SecretKey: sessionStorage.getItem('SecretKey'),
    }

    const signedRequest = aws4.sign(request, {
      secretAccessKey: AWS_Credentials.SecretKey,
      accessKeyId: AWS_Credentials.AccessKeyId,
      sessionToken: AWS_Credentials.SessionToken,
    })
    delete signedRequest.headers.Host
    delete signedRequest.headers['Content-Length']

    const response = await axios(signedRequest)
    return response.data
  }
}

export default API
