# Script for locally caching gltf files from public pcloud drive

import sys,json,urllib.request

with open('src/components/objects3d.json') as json_file:
  objects3d = json.load(json_file)
  for p in objects3d:
      if ((p != 'remote') & (p != 'local')):
          print('downloading '+objects3d[p])
          urllib.request.urlretrieve(objects3d['remote']+objects3d[p],'static/'+objects3d['local']+objects3d[p])

