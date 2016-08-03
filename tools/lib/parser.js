function parseLink(cell) {
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
}
exports.parseLink = parseLink;

function parseLine(line) {
  // [ec2:DetachInternetGateway](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DetachInternetGateway.html) | ??? | * | - |
  var cell = line.split("|");
  if (cell.length !== 6) {
    return null;
  }
  var link = parseLink(cell[1].trim());
  if (link === null) {
    return null;
  }
  return {
    "service": link.service,
    "action": link.action,
    "doc": link.doc,
    "description": cell[2].trim(),
    "resources": cell[3].trim().split(",").map((s) => s.trim()),
    "conditions": cell[4].trim().split(",").map((s) => s.trim()).filter((s) => s !== "-")
  };
}
exports.parseLine = parseLine;
