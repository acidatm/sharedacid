const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
let config = randomize()

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/tripsitter', (req, res) => {
  res.sendFile(__dirname + '/view.html');
});
app.get('/index.js',function(req,res){
    res.sendFile(__dirname + '/index.js');
});
app.get('/view.js',function(req,res){
    res.sendFile(__dirname + '/view.js');
});
app.get('/scripts.js',function(req,res){
    res.sendFile(__dirname + '/scripts.js');
});
io.on("connection", (socket) => {
  socket.on("randomize", msg => {
    config = randomize()
    io.emit('update', config)
  });
  socket.on("join", msg => {
    io.emit('init', config);
  });
});
http.listen(port, () => {
  console.log(`Socket.IO server running at http://localhost:${port}/`);
});

function randomize(){
  return {
    "typ": "mod",
    "settings": {
      "defaultColor": "#ffffff",
      "defaultFx": "drv",
      "framerate": 24,
      "zoom": 0.2972972972972973,
      "tips": "off",
      "labels": "on",
      "buttons": "on",
      "transparency": 0.5495495495495496,
      "showDimensions": "on"
    },
    "render": {
      "resolution": 0.5 ,
      "w": 0,
      "h": 0,
      "x": 0.01001001001001001,
      "y": 0.01001001001001001,
      "a": 0.55,
      "mod": "rgb",
      "clrs": [],
      "optimization": {
        "effects": "off",
        "subpixels": "off",
        "feedback": "on",
        "colormodes": "off",
        "txt": "off"
      },
      "feedback": {
        "quantization": Math.random(),
        "intensity": Math.random(),
        "mix": Math.random(),
        "bend": Math.random(),
        "skew": Math.random(),
        "centerY": Math.random(),
        "centerX": Math.random(),
        "step": Math.random(),
        "darken": 0
      },
      "channels": {
        "r": {
          "amp": 1,
          "base": 0,
          "mod": 1,
          "active": true
        },
        "g": {
          "amp": 0.7,
          "base": 0,
          "mod": 1,
          "active": true
        },
        "b": {
          "amp": 1,
          "base": 0,
          "mod": 1,
          "active": true
        },
        "a": {
          "amp": 1,
          "base": 0,
          "mod": 1,
          "active": true
        }
      }
    },
    "osc": [
      {
        "typ": "osc",
        "min": 0.5 * Math.random(),
        "max": 0.5 + Math.random() * 0.5,
        "mix": "add",
        "run": true,
        "fx": {
          "c": [
            "exp",
            "rnd",
            "bit"
          ],
          "bit": Math.random(),
          "cmp": Math.random(),
          "exp": Math.random(),
          "rnd": Math.random(),
          "drv": Math.random()
        },
        "filter": {
          "lpf": 0.8 * Math.random(),
          "hpf": 0.8 * Math.random()
        },
        "config": {
          "x": {
            "frq": Math.random() * 0.1,
            "off": Math.random()
          },
          "y": {
            "frq": Math.random() * 0.1,
            "off": Math.random()
          },
          "z": {
            "frq": Math.random() * 0.1,
            "off": 0,
            "len": Math.random() * 0.4,
            "mod": Math.random(),
            "cen": Math.random(),
            "shp": Math.random()
          }
        },
        "channels": {
          "r": Math.random(),
          "g": Math.random(),
          "b": Math.random(),
          "a": 1
        }
      },
      {
        "typ": "prl",
        "min": 0.5 * Math.random(),
        "max": 0.5 + Math.random() * 0.5,
        "mix": "add",
        "run": true,
        "fx": {
          "c": [
            "exp",
            "drv"
          ],
          "bit": Math.random(),
          "cmp": Math.random(),
          "exp": Math.random(),
          "rnd": Math.random(),
          "drv": Math.random()
        },
        "filter": {
          "lpf": 0.8 * Math.random(),
          "hpf": 0.8 * Math.random()
        },
        "config": {
          "x": {
            "frq": Math.random() * 0.1,
            "off": Math.random()
          },
          "y": {
            "frq": Math.random() * 0.1,
            "off": Math.random()
          },
          "z": {
            "frq": Math.random() * 0.1,
            "off": 0,
            "len": Math.random() * 0.4,
            "mod": Math.random(),
            "cen": Math.random(),
            "shp": Math.random()
          }
        },
        "channels": {
          "r": Math.random(),
          "g": Math.random(),
          "b": Math.random(),
          "a": 1
        }
      },
      {
        "typ": "osc",
        "min": 0.5 * Math.random(),
        "max": 0.5 + Math.random() * 0.5,
        "mix": "add",
        "run": true,
        "fx": {
          "c": [
            "cmp"
          ],
          "bit": Math.random(),
          "cmp": Math.random(),
          "exp": Math.random(),
          "rnd": Math.random(),
          "drv": Math.random()
        },
        "filter": {
          "lpf": 0.8 * Math.random(),
          "hpf": 0.8 * Math.random()
        },
        "config": {
          "x": {
            "frq": Math.random() * 0.1,
            "off": Math.random()
          },
          "y": {
            "frq": Math.random() * 0.1,
            "off": Math.random()
          },
          "z": {
            "frq": Math.random() * 0.1,
            "off": 0,
            "len": Math.random() * 0.4,
            "mod": Math.random(),
            "cen": Math.random(),
            "shp": Math.random()
          }
        },
        "channels": {
          "r": Math.random(),
          "g": Math.random(),
          "b": Math.random(),
          "a": 1
        }
      },
      {
        "typ": "plx",
        "min": 0.5 * Math.random(),
        "max": 0.5 + Math.random() * 0.5,
        "mix": "add",
        "run": true,
        "fx": {
          "c": [
            "exp",
            "rnd"
          ],
          "bit": Math.random(),
          "cmp": Math.random(),
          "exp": Math.random(),
          "rnd": Math.random(),
          "drv": Math.random()
        },
        "filter": {
          "lpf": 0.8 * Math.random(),
          "hpf": 0.8 * Math.random()
        },
        "config": {
          "x": {
            "frq": Math.random() * 0.1,
            "off": Math.random()
          },
          "y": {
            "frq": Math.random() * 0.1,
            "off": Math.random()
          },
          "z": {
            "frq": Math.random() * 0.1,
            "off": 0,
            "len": Math.random() * 0.4,
            "mod": Math.random(),
            "cen": Math.random(),
            "shp": Math.random()
          }
        },
        "channels": {
          "r": Math.random(),
          "g": Math.random(),
          "b": Math.random(),
          "a": 1
        }
      },
      {
        "typ": "osc",
        "min": 0.5 * Math.random(),
        "max": 0.5 + Math.random() * 0.5,
        "mix": "add",
        "run": true,
        "fx": {
          "c": [],
          "bit": Math.random(),
          "cmp": Math.random(),
          "exp": Math.random(),
          "rnd": Math.random(),
          "drv": Math.random()
        },
        "filter": {
          "lpf": 0.8 * Math.random(),
          "hpf": 0.8 * Math.random()
        },
        "config": {
          "x": {
            "frq": Math.random() * 0.1,
            "off": Math.random()
          },
          "y": {
            "frq": Math.random() * 0.1,
            "off": Math.random()
          },
          "z": {
            "frq": Math.random() * 0.1,
            "off": 0,
            "len": Math.random() * 0.4,
            "mod": Math.random(),
            "cen": Math.random(),
            "shp": Math.random()
          }
        },
        "channels": {
          "r": Math.random(),
          "g": Math.random(),
          "b": Math.random(),
          "a": 1
        }
      }
    ]
  }
}
