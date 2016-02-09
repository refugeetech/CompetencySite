export default function isPhone () {
  if (!navigator) { return false }

  const userAgent = navigator.userAgent

  if (userAgent.indexOf('iPhone') > -1 || userAgent.indexOf('iPad') > -1 || userAgent.indexOf('Android') > -1) {
    return true
  }

  return false
}
