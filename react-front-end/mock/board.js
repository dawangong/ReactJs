/**
 * Created by wen hao
 */

const agents = {
  "agents": [
    {
      "name": "bjstdmngbdr08.woyizhizaidengni.com",
      "os": "windows",
      "status": "building",
      "type": "virtual",
      "ip": "192.168.1.80",
      "location": "/var/lib/cruise-agent",
      "resources": [
        "Firefox",
        "Safari",
        "Ubuntu",
        "Chrome"
      ],
      "id": 1
    },
    {
      "name": "bjstdmngbdr08.woyizhizaidengni.com",
      "os": "windows",
      "status": "building",
      "type": "virtual",
      "ip": "192.168.1.80",
      "location": "/var/lib/cruise-agent",
      "resources": [
        "Firefox",
        "Safari",
        "Ubuntu",
        "Chrome"
      ],
      "id": 2
    },
    {
      "name": "bjstdmngbdr10.woyizhizaidengni.com",
      "os": "ubuntu",
      "status": "building",
      "type": "physical",
      "ip": "192.168.1.117",
      "location": "/var/lib/cruise-agent",
      "resources": [
        "Firefox",
        "Safari"
      ],
      "id": 3
    },
    {
      "name": "bjstdmngbdr11.woyizhizaidengni.com",
      "os": "debian",
      "status": "building",
      "type": "virtual",
      "ip": "192.168.1.102",
      "location": "/var/lib/cruise-agent",
      "resources": [
        "Firefox",
        "Safari",
        "Ubuntu",
        "Chrome"
      ],
      "id": 4
    },
    {
      "name": "bjstdmngbdr15.woyizhizaidengni.com",
      "os": "suse",
      "status": "idle",
      "type": "physical",
      "ip": "192.168.1.110",
      "location": "/var/lib/cruise-agent",
      "resources": [],
      "id": 5
    },
    {
      "name": "bjstdmngbdr02.woyizhizaidengni.com",
      "os": "centos",
      "status": "idle",
      "type": "virtual",
      "ip": "192.168.1.103",
      "location": "/var/lib/cruise-agent",
      "resources": [
        "Firefox",
        "Safari",
        "Ubuntu",
        "Chrome"
      ],
      "id": 6
    },
    {
      "name": "bjstdmngbdr04.woyizhizaidengni.com",
      "os": "suse",
      "status": "idle",
      "type": "physical",
      "ip": "192.168.1.113",
      "location": "/var/lib/cruise-agent",
      "resources": [
        "Firefox",
        "Safari",
        "Ubuntu",
        "Chrome"
      ],
      "id": 7
    },
    {
      "name": "bjstdmngbdr22.woyizhizaidengni.com",
      "os": "centos",
      "status": "idle",
      "type": "virtual",
      "ip": "192.168.1.111",
      "location": "/var/lib/cruise-agent",
      "resources": [
        "Ubuntu",
        "Chrome"
      ],
      "id": 8
    },
    {
      "name": "bjstdmngbdr08.woyizhizaidengni.com",
      "os": "windows",
      "status": "building",
      "type": "virtual",
      "ip": "192.168.1.80",
      "location": "/var/lib/cruise-agent",
      "resources": [
        "Firefox",
        "Safari",
        "Ubuntu",
        "Chrome"
      ],
      "id": 10
    },
    {
      "name": "bjstdmngbdr08.woyizhizaidengni.com",
      "os": "windows",
      "status": "building",
      "type": "virtual",
      "ip": "192.168.1.80",
      "location": "/var/lib/cruise-agent",
      "resources": [
        "Firefox",
        "Safari",
        "Ubuntu",
        "Chrome"
      ],
      "id": 11
    },
    {
      "name": "bjstdmngbdr08.woyizhizaidengni.com",
      "os": "windows",
      "status": "building",
      "type": "virtual",
      "ip": "192.168.1.80",
      "location": "/var/lib/cruise-agent",
      "resources": [
        "Firefox",
        "Safari",
        "Ubuntu",
        "Chrome"
      ],
      "id": 12
    }
  ]
};

const history = [
  'bjstdmngbdr02/Acceptnce_test',
  'bjstdmngbdr03/Acceptnce_test',
  'bjstdmngbdr04/Acceptnce_test',
  'bjstdmngbdr05/Acceptnce_test',
  'bjstdmngbdr06/Acceptnce_test',
  'bjstdmngbdr07/Acceptnce_test',
  'bjstdmngbdr08/Acceptnce_test',
  'bjstdmngbdr09/Acceptnce_test',
  'bjstdmngbdr10/Acceptnce_test',
  'bjstdmngbdr11/Acceptnce_test',
  'bjstdmngbdr12/Acceptnce_test',
  'bjstdmngbdr13/Acceptnce_test'];

module.exports = function (app) {
  app.get('/agents', (req, res) => {
    return res.json(agents);
  });

  app.get('/history', (req, res) => {
    return res.json(history);
  });
};
