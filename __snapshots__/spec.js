exports['feature-maybe returns wizard 1'] = {
  "@@type": "folktale:Maybe",
  "@@tag": "Just",
  "@@value": {
    "value": true
  }
}

exports['feature-maybe returns mode 1'] = {
  "@@type": "folktale:Maybe",
  "@@tag": "Just",
  "@@value": {
    "value": "beast"
  }
}

exports['feature-maybe does not have feature foo 1'] = {
  "@@type": "folktale:Maybe",
  "@@tag": "Nothing",
  "@@value": {}
}
