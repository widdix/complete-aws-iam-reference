exports.parseLink = function parseLink(cell) {
  if (cell.indexOf('](') === -1) {
    return null;
  }
  // [ec2:DetachInternetGateway](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachInternetGateway.html)
  var s = cell.slice(1, -1).split('](');
  var s2 = s[0].split(':');
  return {
    service: s2[0],
    action: s2[1],
    doc: s[1]
  }
};
