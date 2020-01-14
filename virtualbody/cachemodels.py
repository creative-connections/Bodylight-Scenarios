# Script for locally caching gltf files from public pcloud drive

import sys,json,urllib

with open('src/components/objects3d.json') as json_file:
  objects3d = json.load(json_file)
  for p in objects3d:
      if ((p != 'remote') & (p != 'local')):
          print('downloading '+objects3d[p])
          if hasattr(urllib,'urlretrieve'):
              urllib.urlretrieve(objects3d['remote']+objects3d[p],'static/'+objects3d['local']+objects3d[p])
          else:
              import urllib.request
              urllib.request.urlretrieve(objects3d['remote']+objects3d[p],'static/'+objects3d['local']+objects3d[p])

