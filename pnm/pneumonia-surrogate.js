(()=>{var vt=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,i)=>(typeof require<"u"?require:t)[i]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});var rt={};var za=Object.defineProperty,Xg=Object.getOwnPropertyDescriptor,Jg=Object.getOwnPropertyNames,Yg=Object.prototype.hasOwnProperty,ey=(e=>typeof vt<"u"?vt:typeof Proxy<"u"?new Proxy(e,{get:(t,i)=>(typeof vt<"u"?vt:t)[i]}):e)(function(e){if(typeof vt<"u")return vt.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),q=(e,t)=>()=>(e&&(t=e(e=0)),t),pr=(e,t)=>{for(var i in t)za(e,i,{get:t[i],enumerable:!0})},ty=(e,t,i,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Jg(t))!Yg.call(e,n)&&n!==i&&za(e,n,{get:()=>t[n],enumerable:!(r=Xg(t,n))||r.enumerable});return e},qr=e=>ty(za({},"__esModule",{value:!0}),e),Zt,gt,Wt,go,Kd,Qd=q(()=>{"use strict";Zt=new Map,gt=[],Wt=(e,t,i)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let r=Zt.get(e);if(r===void 0)Zt.set(e,{backend:t,priority:i});else{if(r.priority>i)return;if(r.priority===i&&r.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${i}`)}if(i>=0){let n=gt.indexOf(e);n!==-1&&gt.splice(n,1);for(let o=0;o<gt.length;o++)if(Zt.get(gt[o]).priority<=i){gt.splice(o,0,e);return}gt.push(e)}return}throw new TypeError("not a valid backend")},go=async e=>{let t=Zt.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let i=!!t.initPromise;try{return i||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(r){return i||(t.error=`${r}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Kd=async e=>{let t=e.executionProviders||[],i=t.map(d=>typeof d=="string"?d:d.name),r=i.length===0?gt:i,n,o=[],s=new Set;for(let d of r){let c=await go(d);typeof c=="string"?o.push({name:d,err:c}):(n||(n=c),n===c&&s.add(d))}if(!n)throw new Error(`no available backend found. ERR: ${o.map(d=>`[${d.name}] ${d.err}`).join(", ")}`);for(let{name:d,err:c}of o)i.includes(d)&&console.warn(`removing requested execution provider "${d}" from session options because it is not available: ${c}`);let l=t.filter(d=>s.has(typeof d=="string"?d:d.name));return[n,new Proxy(e,{get:(d,c)=>c==="executionProviders"?l:Reflect.get(d,c)})]}}),ry=q(()=>{"use strict";Qd()}),Zd,iy=q(()=>{"use strict";Zd="1.21.0"}),$i,Le,Xd=q(()=>{"use strict";iy(),$i="warning",Le={wasm:{},webgl:{},webgpu:{},versions:{common:Zd},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);$i=e}},get logLevel(){return $i}},Object.defineProperty(Le,"logLevel",{enumerable:!0})}),ye,ay=q(()=>{"use strict";Xd(),ye=Le}),Jd,Yd,ny=q(()=>{"use strict";Jd=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);i.width=e.dims[3],i.height=e.dims[2];let r=i.getContext("2d");if(r!=null){let n,o;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],o=e.dims[3]):(n=e.dims[3],o=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",l=t?.norm,d,c;l===void 0||l.mean===void 0?d=[255,255,255,255]:typeof l.mean=="number"?d=[l.mean,l.mean,l.mean,l.mean]:(d=[l.mean[0],l.mean[1],l.mean[2],0],l.mean[3]!==void 0&&(d[3]=l.mean[3])),l===void 0||l.bias===void 0?c=[0,0,0,0]:typeof l.bias=="number"?c=[l.bias,l.bias,l.bias,l.bias]:(c=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(c[3]=l.bias[3]));let m=o*n,g=0,y=m,w=m*2,_=-1;s==="RGBA"?(g=0,y=m,w=m*2,_=m*3):s==="RGB"?(g=0,y=m,w=m*2):s==="RBG"&&(g=0,w=m,y=m*2);for(let $=0;$<o;$++)for(let S=0;S<n;S++){let v=(e.data[g++]-c[0])*d[0],b=(e.data[y++]-c[1])*d[1],k=(e.data[w++]-c[2])*d[2],C=_===-1?255:(e.data[_++]-c[3])*d[3];r.fillStyle="rgba("+v+","+b+","+k+","+C+")",r.fillRect(S,$,1,1)}if("toDataURL"in i)return i.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},Yd=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),r;if(i!=null){let n,o,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],o=e.dims[1],s=e.dims[3]):(n=e.dims[3],o=e.dims[2],s=e.dims[1]);let l=t!==void 0&&t.format!==void 0?t.format:"RGB",d=t?.norm,c,m;d===void 0||d.mean===void 0?c=[255,255,255,255]:typeof d.mean=="number"?c=[d.mean,d.mean,d.mean,d.mean]:(c=[d.mean[0],d.mean[1],d.mean[2],255],d.mean[3]!==void 0&&(c[3]=d.mean[3])),d===void 0||d.bias===void 0?m=[0,0,0,0]:typeof d.bias=="number"?m=[d.bias,d.bias,d.bias,d.bias]:(m=[d.bias[0],d.bias[1],d.bias[2],0],d.bias[3]!==void 0&&(m[3]=d.bias[3]));let g=o*n;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let y=4,w=0,_=1,$=2,S=3,v=0,b=g,k=g*2,C=-1;l==="RGBA"?(v=0,b=g,k=g*2,C=g*3):l==="RGB"?(v=0,b=g,k=g*2):l==="RBG"&&(v=0,k=g,b=g*2),r=i.createImageData(n,o);for(let I=0;I<o*n;w+=y,_+=y,$+=y,S+=y,I++)r.data[w]=(e.data[v++]-m[0])*c[0],r.data[_]=(e.data[b++]-m[1])*c[1],r.data[$]=(e.data[k++]-m[2])*c[2],r.data[S]=C===-1?255:(e.data[C++]-m[3])*c[3]}else throw new Error("Can not access image data");return r}}),kr,ep,tp,rp,ip,ap,sy=q(()=>{"use strict";Aa(),kr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:i,width:r}=t,n=t.norm??{mean:255,bias:0},o,s;typeof n.mean=="number"?o=[n.mean,n.mean,n.mean,n.mean]:o=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?s=[n.bias,n.bias,n.bias,n.bias]:s=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let l=t.format!==void 0?t.format:"RGBA",d=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",c=i*r,m=d==="RGBA"?new Float32Array(c*4):new Float32Array(c*3),g=4,y=0,w=1,_=2,$=3,S=0,v=c,b=c*2,k=-1;l==="RGB"&&(g=3,y=0,w=1,_=2,$=-1),d==="RGBA"?k=c*3:d==="RBG"?(S=0,b=c,v=c*2):d==="BGR"&&(b=0,v=c,S=c*2);for(let C=0;C<c;C++,y+=g,_+=g,w+=g,$+=g)m[S++]=(e[y]+s[0])/o[0],m[v++]=(e[w]+s[1])/o[1],m[b++]=(e[_]+s[2])/o[2],k!==-1&&$!==-1&&(m[k++]=(e[$]+s[3])/o[3]);return d==="RGBA"?new De("float32",m,[1,4,i,r]):new De("float32",m,[1,3,i,r])},ep=async(e,t)=>{let i=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,r=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,o=typeof e=="string",s,l=t??{},d=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},c=m=>typeof HTMLCanvasElement<"u"&&m instanceof HTMLCanvasElement||m instanceof OffscreenCanvas?m.getContext("2d"):null;if(i){let m=d();m.width=e.width,m.height=e.height;let g=c(m);if(g!=null){let y=e.height,w=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(y=t.resizedHeight,w=t.resizedWidth),t!==void 0){if(l=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");l.tensorFormat="RGBA",l.height=y,l.width=w}else l.tensorFormat="RGBA",l.height=y,l.width=w;g.drawImage(e,0,0),s=g.getImageData(0,0,w,y).data}else throw new Error("Can not access image data")}else if(r){let m,g;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(m=t.resizedHeight,g=t.resizedWidth):(m=e.height,g=e.width),t!==void 0&&(l=t),l.format="RGBA",l.height=m,l.width=g,t!==void 0){let y=d();y.width=g,y.height=m;let w=c(y);if(w!=null)w.putImageData(e,0,0),s=w.getImageData(0,0,g,m).data;else throw new Error("Can not access image data")}else s=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let m=d();m.width=e.width,m.height=e.height;let g=c(m);if(g!=null){let y=e.height,w=e.width;return g.drawImage(e,0,0,w,y),s=g.getImageData(0,0,w,y).data,l.height=y,l.width=w,kr(s,l)}else throw new Error("Can not access image data")}else{if(o)return new Promise((m,g)=>{let y=d(),w=c(y);if(!e||!w)return g();let _=new Image;_.crossOrigin="Anonymous",_.src=e,_.onload=()=>{y.width=_.width,y.height=_.height,w.drawImage(_,0,0,y.width,y.height);let $=w.getImageData(0,0,y.width,y.height);l.height=y.height,l.width=y.width,m(kr($.data,l))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return kr(s,l);throw new Error("Input data provided is not supported - aborted tensor creation")},tp=(e,t)=>{let{width:i,height:r,download:n,dispose:o}=t,s=[1,r,i,4];return new De({location:"texture",type:"float32",texture:e,dims:s,download:n,dispose:o})},rp=(e,t)=>{let{dataType:i,dims:r,download:n,dispose:o}=t;return new De({location:"gpu-buffer",type:i??"float32",gpuBuffer:e,dims:r,download:n,dispose:o})},ip=(e,t)=>{let{dataType:i,dims:r,download:n,dispose:o}=t;return new De({location:"ml-tensor",type:i??"float32",mlTensor:e,dims:r,download:n,dispose:o})},ap=(e,t,i)=>new De({location:"cpu-pinned",type:e,data:t,dims:i??[t.length]})}),Ct,nr,vi,np,oy=q(()=>{"use strict";Ct=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),nr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),vi=!1,np=()=>{if(!vi){vi=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,i=globalThis.Float16Array,r=typeof i<"u"&&i.from;e&&(Ct.set("int64",BigInt64Array),nr.set(BigInt64Array,"int64")),t&&(Ct.set("uint64",BigUint64Array),nr.set(BigUint64Array,"uint64")),r?(Ct.set("float16",i),nr.set(i,"float16")):Ct.set("float16",Uint16Array)}}}),sp,op,uy=q(()=>{"use strict";Aa(),sp=e=>{let t=1;for(let i=0;i<e.length;i++){let r=e[i];if(typeof r!="number"||!Number.isSafeInteger(r))throw new TypeError(`dims[${i}] must be an integer, got: ${r}`);if(r<0)throw new RangeError(`dims[${i}] must be a non-negative integer, got: ${r}`);t*=r}return t},op=(e,t)=>{switch(e.location){case"cpu":return new De(e.type,e.data,t);case"cpu-pinned":return new De({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new De({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new De({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new De({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),De,Aa=q(()=>{"use strict";ny(),sy(),oy(),uy(),De=class{constructor(e,t,i){np();let r,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,r=e.type,n=e.dims,e.location){case"cpu-pinned":{let s=Ct.get(r);if(!s)throw new TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(r!=="float32")throw new TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(r!=="float32"&&r!=="float16"&&r!=="int32"&&r!=="int64"&&r!=="uint32"&&r!=="uint64"&&r!=="int8"&&r!=="uint8"&&r!=="bool"&&r!=="uint4"&&r!=="int4")throw new TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,l;if(typeof e=="string")if(r=e,l=i,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let d=Ct.get(e);if(d===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&d===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${d.name} as data.`);e==="uint64"||e==="int64"?s=d.from(t,BigInt):s=d.from(t)}else if(t instanceof d)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&d!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${r} tensor's data must be type of ${d}`)}else if(l=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let d=typeof e[0];if(d==="string")r="string",s=e;else if(d==="boolean")r="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${d}.`)}else if(e instanceof Uint8ClampedArray)r="uint8",s=Uint8Array.from(e);else{let d=nr.get(e.constructor);if(d===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=d,s=e}if(l===void 0)l=[s.length];else if(!Array.isArray(l))throw new TypeError("A tensor's dims must be a number array");n=l,this.cpuData=s,this.dataLocation="cpu"}let o=sp(n);if(this.cpuData&&o!==this.cpuData.length&&!((r==="uint4"||r==="int4")&&Math.ceil(o/2)===this.cpuData.length))throw new Error(`Tensor's size(${o}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=n,this.size=o}static async fromImage(e,t){return ep(e,t)}static fromTexture(e,t){return tp(e,t)}static fromGpuBuffer(e,t){return rp(e,t)}static fromMLTensor(e,t){return ip(e,t)}static fromPinnedBuffer(e,t,i){return ap(e,t,i)}toDataURL(e){return Jd(this,e)}toImageData(e){return Yd(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return op(this,e)}}}),Ue,up=q(()=>{"use strict";Aa(),Ue=De}),Vr,xi,it,Qe,lp=q(()=>{"use strict";Xd(),Vr=(e,t)=>{(typeof Le.trace>"u"?!Le.wasm.trace:!Le.trace)||console.timeStamp(`${e}::ORT::${t}`)},xi=(e,t)=>{let i=new Error().stack?.split(/\r\n|\r|\n/g)||[],r=!1;for(let n=0;n<i.length;n++){if(r&&!i[n].includes("TRACE_FUNC")){let o=`FUNC_${e}::${i[n].trim().split(" ")[1]}`;t&&(o+=`::${t}`),Vr("CPU",o);return}i[n].includes("TRACE_FUNC")&&(r=!0)}},it=e=>{(typeof Le.trace>"u"?!Le.wasm.trace:!Le.trace)||xi("BEGIN",e)},Qe=e=>{(typeof Le.trace>"u"?!Le.wasm.trace:!Le.trace)||xi("END",e)}}),dp,ly=q(()=>{"use strict";Qd(),up(),lp(),dp=class pp{constructor(t){this.handler=t}async run(t,i,r){it();let n={},o={};if(typeof t!="object"||t===null||t instanceof Ue||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof i=="object"){if(i===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(i instanceof Ue)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(i)){if(i.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let c of i){if(typeof c!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(c)===-1)throw new RangeError(`'fetches' contains invalid output name: ${c}.`);n[c]=null}if(typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else{let c=!1,m=Object.getOwnPropertyNames(i);for(let g of this.outputNames)if(m.indexOf(g)!==-1){let y=i[g];(y===null||y instanceof Ue)&&(c=!0,s=!1,n[g]=y)}if(c){if(typeof r=="object"&&r!==null)o=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else o=i}}else if(typeof i<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let c of this.inputNames)if(typeof t[c]>"u")throw new Error(`input '${c}' is missing in 'feeds'.`);if(s)for(let c of this.outputNames)n[c]=null;let l=await this.handler.run(t,n,o),d={};for(let c in l)if(Object.hasOwnProperty.call(l,c)){let m=l[c];m instanceof Ue?d[c]=m:d[c]=new Ue(m.type,m.data,m.dims)}return Qe(),d}async release(){return this.handler.dispose()}static async create(t,i,r,n){it();let o,s={};if(typeof t=="string"){if(o=t,typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(o=t,typeof i=="object"&&i!==null)s=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let m=t,g=0,y=t.byteLength;if(typeof i=="object"&&i!==null)s=i;else if(typeof i=="number"){if(g=i,!Number.isSafeInteger(g))throw new RangeError("'byteOffset' must be an integer.");if(g<0||g>=m.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${m.byteLength}).`);if(y=t.byteLength-g,typeof r=="number"){if(y=r,!Number.isSafeInteger(y))throw new RangeError("'byteLength' must be an integer.");if(y<=0||g+y>m.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${m.byteLength-g}].`);if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof r<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof i<"u")throw new TypeError("'options' must be an object.");o=new Uint8Array(m,g,y)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,d]=await Kd(s),c=await l.createInferenceSessionHandler(o,d);return Qe(),new pp(c)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),Qr,dy=q(()=>{"use strict";ly(),Qr=dp}),py=q(()=>{"use strict"}),cy=q(()=>{"use strict"}),hy=q(()=>{"use strict"}),fy=q(()=>{"use strict"}),my={};pr(my,{InferenceSession:()=>Qr,TRACE:()=>Vr,TRACE_FUNC_BEGIN:()=>it,TRACE_FUNC_END:()=>Qe,Tensor:()=>Ue,env:()=>ye,registerBackend:()=>Wt});var Ze=q(()=>{"use strict";ry(),ay(),dy(),up(),py(),cy(),lp(),hy(),fy()}),Oa=q(()=>{"use strict"}),cp={};pr(cp,{default:()=>hp});var Si,ki,hp,gy=q(()=>{"use strict";yf(),Rt(),Ra(),Si="ort-wasm-proxy-worker",ki=globalThis.self?.name===Si,ki&&(self.onmessage=e=>{let{type:t,in:i}=e.data;try{switch(t){case"init-wasm":Ba(i.wasm).then(()=>{Ja(i).then(()=>{postMessage({type:t})},r=>{postMessage({type:t,err:r})})},r=>{postMessage({type:t,err:r})});break;case"init-ep":{let{epName:r,env:n}=i;Ya(n,r).then(()=>{postMessage({type:t})},o=>{postMessage({type:t,err:o})});break}case"copy-from":{let{buffer:r}=i,n=Kr(r);postMessage({type:t,out:n});break}case"create":{let{model:r,options:n}=i;en(r,n).then(o=>{postMessage({type:t,out:o})},o=>{postMessage({type:t,err:o})});break}case"release":tn(i),postMessage({type:t});break;case"run":{let{sessionId:r,inputIndices:n,inputs:o,outputIndices:s,options:l}=i;rn(r,n,o,s,new Array(s.length).fill(null),l).then(d=>{d.some(c=>c[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:d},nn([...o,...d]))},d=>{postMessage({type:t,err:d})});break}case"end-profiling":an(i),postMessage({type:t});break;default:}}catch(r){postMessage({type:t,err:r})}}),hp=ki?null:e=>new Worker(e??Me,{type:"module",name:Si})}),fp={};pr(fp,{default:()=>mp});var Ti,Ci,mp,yo,yy=q(()=>{"use strict";Ci=(Ti=rt.url,async function(e={}){var t,i,r=e,n=new Promise((a,u)=>{t=a,i=u}),o=typeof window=="object",s=typeof WorkerGlobalScope<"u",l=s&&self.name?.startsWith("em-pthread");r.mountExternalData=(a,u)=>{a.startsWith("./")&&(a=a.substring(2)),(r.Bd||(r.Bd=new Map)).set(a,u)},r.unmountExternalData=()=>{delete r.Bd};var d=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let c=()=>{let a=(p,h,f)=>(...x)=>{let T=Ye,z=h?.();x=p(...x);let R=h?.();return z!==R&&(p=R,f(z),h=f=null),Ye!=T?new Promise((W,F)=>{hi={resolve:W,reject:F}}):x},u=p=>async(...h)=>{try{if(r.Cd)throw Error("Session already started");let f=r.Cd={be:h[0],errors:[]},x=await p(...h);if(r.Cd!==f)throw Error("Session mismatch");r.Dd?.flush();let T=f.errors;if(0<T.length){let z=await Promise.all(T);if(z=z.filter(R=>R),0<z.length)throw Error(z.join(`
`))}return x}finally{r.Cd=null}};r._OrtCreateSession=a(r._OrtCreateSession,()=>r._OrtCreateSession,p=>r._OrtCreateSession=p),r._OrtRun=u(a(r._OrtRun,()=>r._OrtRun,p=>r._OrtRun=p)),r._OrtRunWithBinding=u(a(r._OrtRunWithBinding,()=>r._OrtRunWithBinding,p=>r._OrtRunWithBinding=p)),r._OrtBindInput=a(r._OrtBindInput,()=>r._OrtBindInput,p=>r._OrtBindInput=p),c=void 0};r.jsepInit=(a,u)=>{if(c?.(),a==="webgpu"){[r.Dd,r.Rd,r.Vd,r.Hd,r.Ud,r.hc,r.Wd,r.Zd,r.Sd,r.Td,r.Xd]=u;let p=r.Dd;r.jsepRegisterBuffer=(h,f,x,T)=>p.registerBuffer(h,f,x,T),r.jsepGetBuffer=h=>p.getBuffer(h),r.jsepCreateDownloader=(h,f,x)=>p.createDownloader(h,f,x),r.jsepOnCreateSession=h=>{p.onCreateSession(h)},r.jsepOnReleaseSession=h=>{p.onReleaseSession(h)},r.jsepOnRunStart=h=>p.onRunStart(h),r.$d=(h,f)=>{p.upload(h,f)}}else if(a==="webnn"){[r.Dd,r.Yd,r.Id,r.jsepEnsureTensor,r.Jd,r.jsepDownloadTensor]=u,r.jsepReleaseTensorId=r.Id,r.jsepUploadTensor=r.Jd;let p=r.Dd;r.jsepOnRunStart=h=>p.onRunStart(h),r.jsepOnRunEnd=p.onRunEnd.bind(p),r.jsepRegisterMLContext=(h,f)=>{p.registerMLContext(h,f)},r.jsepOnReleaseSession=h=>{p.onReleaseSession(h)},r.jsepCreateMLTensorDownloader=(h,f)=>p.createMLTensorDownloader(h,f),r.jsepRegisterMLTensor=(h,f,x,T)=>p.registerMLTensor(h,f,x,T),r.jsepCreateMLContext=h=>p.createMLContext(h),r.jsepRegisterMLConstant=(h,f,x,T,z)=>p.registerMLConstant(h,f,x,T,z,r.Bd),r.jsepRegisterGraphInput=p.registerGraphInput.bind(p),r.jsepIsGraphInput=p.isGraphInput.bind(p),r.jsepCreateTemporaryTensor=p.createTemporaryTensor.bind(p)}};var m,g,y=Object.assign({},r),w=(a,u)=>{throw u},_="";(o||s)&&(s?_=self.location.href:typeof document<"u"&&document.currentScript&&(_=document.currentScript.src),Ti&&(_=Ti),_=_.startsWith("blob:")?"":_.slice(0,_.replace(/[?#].*/,"").lastIndexOf("/")+1),s&&(g=a=>{var u=new XMLHttpRequest;return u.open("GET",a,!1),u.responseType="arraybuffer",u.send(null),new Uint8Array(u.response)}),m=async a=>{if(pe(a))return new Promise((p,h)=>{var f=new XMLHttpRequest;f.open("GET",a,!0),f.responseType="arraybuffer",f.onload=()=>{f.status==200||f.status==0&&f.response?p(f.response):h(f.status)},f.onerror=h,f.send(null)});var u=await fetch(a,{credentials:"same-origin"});if(u.ok)return u.arrayBuffer();throw Error(u.status+" : "+u.url)});var $=console.log.bind(console),S=console.error.bind(console),v=$,b=S;Object.assign(r,y),y=null;var k,C,I,E,A,D,V,G,X,ee,P,oe,de,H=r.wasmBinary,le=!1,pe=a=>a.startsWith("file://");function j(){return k.buffer!=E.buffer&&Re(),E}function ce(){return k.buffer!=E.buffer&&Re(),A}function U(){return k.buffer!=E.buffer&&Re(),D}function L(){return k.buffer!=E.buffer&&Re(),V}function B(){return k.buffer!=E.buffer&&Re(),G}function Y(){return k.buffer!=E.buffer&&Re(),X}function ve(){return k.buffer!=E.buffer&&Re(),ee}function Be(){return k.buffer!=E.buffer&&Re(),de}if(l){let a=function(u){try{var p=u.data,h=p.yd;if(h==="load"){let f=[];self.onmessage=x=>f.push(x),self.startWorker=()=>{postMessage({yd:"loaded"});for(let x of f)a(x);self.onmessage=a};for(let x of p.Od)r[x]&&!r[x].proxy||(r[x]=(...T)=>{postMessage({yd:"callHandler",Nd:x,args:T})},x=="print"&&(v=r[x]),x=="printErr"&&(b=r[x]));k=p.he,Re(),xe(p.ie)}else if(h==="run"){Nf(p.xd),yi(p.xd,0,0,1,0,0),gn(),pi(p.xd),at||(ds(),at=!0);try{Mf(p.de,p.Fd)}catch(f){if(f!="unwind")throw f}}else p.target!=="setimmediate"&&(h==="checkMailbox"?at&&mr():h&&(b(`worker: received unknown command ${h}`),b(p)))}catch(f){throw ps(),f}};var Ie=a,xe,at=!1;b=function(...u){u=u.join(" "),console.error(u)},self.alert=function(...u){postMessage({yd:"alert",text:u.join(" "),fe:xr()})},self.onunhandledrejection=u=>{throw u.reason||u},self.onmessage=a}function Re(){var a=k.buffer;r.HEAP8=E=new Int8Array(a),r.HEAP16=D=new Int16Array(a),r.HEAPU8=A=new Uint8Array(a),r.HEAPU16=V=new Uint16Array(a),r.HEAP32=G=new Int32Array(a),r.HEAPU32=X=new Uint32Array(a),r.HEAPF32=ee=new Float32Array(a),r.HEAPF64=de=new Float64Array(a),r.HEAP64=P=new BigInt64Array(a),r.HEAPU64=oe=new BigUint64Array(a)}function hr(){l?startWorker(r):M.Bb()}l||(k=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),Re());var Xr,Ft=0,Gt=null;function ln(){if(--Ft==0&&Gt){var a=Gt;Gt=null,a()}}function nt(a){throw b(a="Aborted("+a+")"),le=!0,a=new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info."),i(a),a}function dn(){return{a:{Ta:Bf,Va:Rf,W:Df,la:Uf,b:Wf,u:qf,R:Vf,Za:Lf,d:Ff,pb:bn,g:Pf,T:xn,Ga:Sn,lb:Tn,nb:Cn,Ha:In,Ea:En,wb:zn,Da:An,pa:On,mb:Rn,jb:Bn,Fa:Nn,kb:Mn,Ma:Gf,za:jf,eb:Kf,cb:Zf,ya:Jf,V:Yf,N:em,db:tm,ma:um,fb:lm,zb:dm,hb:pm,qb:cm,ab:hm,Aa:fm,yb:pi,Ja:mm,S:gm,Wa:ym,$:bm,G:$m,E:xm,m:ui,H:Sm,B:Cm,X:Im,J:Em,v:zm,O:Am,D:Om,t:Rm,A:Bm,z:Nm,w:Mm,r:Dm,tb:Um,ub:Pm,vb:Wm,rb:Zn,sb:Xn,bb:Jn,Oa:Vm,La:Gm,y:Hm,ja:jm,Ba:Km,Ka:Lm,qa:Qm,Ia:Zm,ib:Xm,U:qm,fa:Jm,Sa:Ym,gb:eg,Qa:tg,Pa:rg,Ab:rs,Ca:is,ob:ri,aa:as,oa:ns,xb:ss,na:os,$a:Eg,ia:Vg,sa:jg,ga:Cg,da:Ng,ua:Gg,p:kg,e:lg,c:og,ea:Rg,f:dg,n:cg,k:$g,Y:fg,ka:vg,j:Tg,wa:Og,Ra:Zg,ca:Wg,Ua:Qg,P:Bg,K:gg,_:Pg,Q:Ig,Z:Lg,x:mg,l:ug,va:Ug,i:sg,h:hg,ra:Kg,ta:Hg,o:pg,q:yg,s:wg,I:bg,C:Sg,L:xg,xa:Ag,_a:zg,F:qg,Ya:Mg,ba:Fg,M:_g,Xa:Dg,ha:ag,a:k,Na:ti}}}var Jr={1319426:()=>typeof wasmOffsetConverter<"u",1319483:(a,u,p,h,f)=>{if(r===void 0||!r.Bd)return 1;if((a=Se(Number(a>>>0))).startsWith("./")&&(a=a.substring(2)),!(a=r.Bd.get(a)))return 2;if(u=Number(u>>>0),p=Number(p>>>0),h=Number(h>>>0),u+p>a.byteLength)return 3;try{let x=a.subarray(u,u+p);switch(f){case 0:ce().set(x,h>>>0);break;case 1:r.$d(h,x);break;default:return 4}return 0}catch{return 4}},1320198:(a,u,p)=>{r.Jd(a,ce().subarray(u>>>0,u+p>>>0))},1320261:()=>r.Yd(),1320302:a=>{r.Id(a)},1320338:()=>{r.Sd()},1320369:()=>{r.Td()},1320398:()=>{r.Xd()},1320423:a=>r.Rd(a),1320456:a=>r.Vd(a),1320488:(a,u,p)=>{r.Hd(Number(a),Number(u),Number(p),!0)},1320551:(a,u,p)=>{r.Hd(Number(a),Number(u),Number(p))},1320608:a=>{r.hc("Abs",a,void 0)},1320659:a=>{r.hc("Neg",a,void 0)},1320710:a=>{r.hc("Floor",a,void 0)},1320763:a=>{r.hc("Ceil",a,void 0)},1320815:a=>{r.hc("Reciprocal",a,void 0)},1320873:a=>{r.hc("Sqrt",a,void 0)},1320925:a=>{r.hc("Exp",a,void 0)},1320976:a=>{r.hc("Erf",a,void 0)},1321027:a=>{r.hc("Sigmoid",a,void 0)},1321082:(a,u,p)=>{r.hc("HardSigmoid",a,{alpha:u,beta:p})},1321161:a=>{r.hc("Log",a,void 0)},1321212:a=>{r.hc("Sin",a,void 0)},1321263:a=>{r.hc("Cos",a,void 0)},1321314:a=>{r.hc("Tan",a,void 0)},1321365:a=>{r.hc("Asin",a,void 0)},1321417:a=>{r.hc("Acos",a,void 0)},1321469:a=>{r.hc("Atan",a,void 0)},1321521:a=>{r.hc("Sinh",a,void 0)},1321573:a=>{r.hc("Cosh",a,void 0)},1321625:a=>{r.hc("Asinh",a,void 0)},1321678:a=>{r.hc("Acosh",a,void 0)},1321731:a=>{r.hc("Atanh",a,void 0)},1321784:a=>{r.hc("Tanh",a,void 0)},1321836:a=>{r.hc("Not",a,void 0)},1321887:(a,u,p)=>{r.hc("Clip",a,{min:u,max:p})},1321956:a=>{r.hc("Clip",a,void 0)},1322008:(a,u)=>{r.hc("Elu",a,{alpha:u})},1322066:a=>{r.hc("Gelu",a,void 0)},1322118:a=>{r.hc("Relu",a,void 0)},1322170:(a,u)=>{r.hc("LeakyRelu",a,{alpha:u})},1322234:(a,u)=>{r.hc("ThresholdedRelu",a,{alpha:u})},1322304:(a,u)=>{r.hc("Cast",a,{to:u})},1322362:a=>{r.hc("Add",a,void 0)},1322413:a=>{r.hc("Sub",a,void 0)},1322464:a=>{r.hc("Mul",a,void 0)},1322515:a=>{r.hc("Div",a,void 0)},1322566:a=>{r.hc("Pow",a,void 0)},1322617:a=>{r.hc("Equal",a,void 0)},1322670:a=>{r.hc("Greater",a,void 0)},1322725:a=>{r.hc("GreaterOrEqual",a,void 0)},1322787:a=>{r.hc("Less",a,void 0)},1322839:a=>{r.hc("LessOrEqual",a,void 0)},1322898:(a,u,p,h,f)=>{r.hc("ReduceMean",a,{keepDims:!!u,noopWithEmptyAxes:!!p,axes:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1323073:(a,u,p,h,f)=>{r.hc("ReduceMax",a,{keepDims:!!u,noopWithEmptyAxes:!!p,axes:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1323247:(a,u,p,h,f)=>{r.hc("ReduceMin",a,{keepDims:!!u,noopWithEmptyAxes:!!p,axes:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1323421:(a,u,p,h,f)=>{r.hc("ReduceProd",a,{keepDims:!!u,noopWithEmptyAxes:!!p,axes:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1323596:(a,u,p,h,f)=>{r.hc("ReduceSum",a,{keepDims:!!u,noopWithEmptyAxes:!!p,axes:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1323770:(a,u,p,h,f)=>{r.hc("ReduceL1",a,{keepDims:!!u,noopWithEmptyAxes:!!p,axes:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1323943:(a,u,p,h,f)=>{r.hc("ReduceL2",a,{keepDims:!!u,noopWithEmptyAxes:!!p,axes:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1324116:(a,u,p,h,f)=>{r.hc("ReduceLogSum",a,{keepDims:!!u,noopWithEmptyAxes:!!p,axes:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1324293:(a,u,p,h,f)=>{r.hc("ReduceSumSquare",a,{keepDims:!!u,noopWithEmptyAxes:!!p,axes:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1324473:(a,u,p,h,f)=>{r.hc("ReduceLogSumExp",a,{keepDims:!!u,noopWithEmptyAxes:!!p,axes:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1324653:a=>{r.hc("Where",a,void 0)},1324706:(a,u,p)=>{r.hc("Transpose",a,{perm:u?Array.from(B().subarray(Number(u)>>>0,Number(p)>>>0)):[]})},1324830:(a,u,p,h)=>{r.hc("DepthToSpace",a,{blocksize:u,mode:Se(p),format:h?"NHWC":"NCHW"})},1324963:(a,u,p,h)=>{r.hc("DepthToSpace",a,{blocksize:u,mode:Se(p),format:h?"NHWC":"NCHW"})},1325096:(a,u,p,h,f,x,T,z,R,W,F,J,ne,_e,qe)=>{r.hc("ConvTranspose",a,{format:R?"NHWC":"NCHW",autoPad:u,dilations:[p],group:h,kernelShape:[f],pads:[x,T],strides:[z],wIsConst:()=>!!j()[W>>>0],outputPadding:F?Array.from(B().subarray(Number(F)>>>0,Number(J)>>>0)):[],outputShape:ne?Array.from(B().subarray(Number(ne)>>>0,Number(_e)>>>0)):[],activation:Se(qe)})},1325529:(a,u,p,h,f,x,T,z,R,W,F,J,ne,_e)=>{r.hc("ConvTranspose",a,{format:z?"NHWC":"NCHW",autoPad:u,dilations:Array.from(B().subarray(Number(p)>>>0,2+(Number(p)>>>0)>>>0)),group:h,kernelShape:Array.from(B().subarray(Number(f)>>>0,2+(Number(f)>>>0)>>>0)),pads:Array.from(B().subarray(Number(x)>>>0,4+(Number(x)>>>0)>>>0)),strides:Array.from(B().subarray(Number(T)>>>0,2+(Number(T)>>>0)>>>0)),wIsConst:()=>!!j()[R>>>0],outputPadding:W?Array.from(B().subarray(Number(W)>>>0,Number(F)>>>0)):[],outputShape:J?Array.from(B().subarray(Number(J)>>>0,Number(ne)>>>0)):[],activation:Se(_e)})},1326190:(a,u,p,h,f,x,T,z,R,W,F,J,ne,_e,qe)=>{r.hc("ConvTranspose",a,{format:R?"NHWC":"NCHW",autoPad:u,dilations:[p],group:h,kernelShape:[f],pads:[x,T],strides:[z],wIsConst:()=>!!j()[W>>>0],outputPadding:F?Array.from(B().subarray(Number(F)>>>0,Number(J)>>>0)):[],outputShape:ne?Array.from(B().subarray(Number(ne)>>>0,Number(_e)>>>0)):[],activation:Se(qe)})},1326623:(a,u,p,h,f,x,T,z,R,W,F,J,ne,_e)=>{r.hc("ConvTranspose",a,{format:z?"NHWC":"NCHW",autoPad:u,dilations:Array.from(B().subarray(Number(p)>>>0,2+(Number(p)>>>0)>>>0)),group:h,kernelShape:Array.from(B().subarray(Number(f)>>>0,2+(Number(f)>>>0)>>>0)),pads:Array.from(B().subarray(Number(x)>>>0,4+(Number(x)>>>0)>>>0)),strides:Array.from(B().subarray(Number(T)>>>0,2+(Number(T)>>>0)>>>0)),wIsConst:()=>!!j()[R>>>0],outputPadding:W?Array.from(B().subarray(Number(W)>>>0,Number(F)>>>0)):[],outputShape:J?Array.from(B().subarray(Number(J)>>>0,Number(ne)>>>0)):[],activation:Se(_e)})},1327284:(a,u)=>{r.hc("GlobalAveragePool",a,{format:u?"NHWC":"NCHW"})},1327375:(a,u,p,h,f,x,T,z,R,W,F,J,ne,_e)=>{r.hc("AveragePool",a,{format:_e?"NHWC":"NCHW",auto_pad:u,ceil_mode:p,count_include_pad:h,storage_order:f,dilations:x?Array.from(B().subarray(Number(x)>>>0,Number(T)>>>0)):[],kernel_shape:z?Array.from(B().subarray(Number(z)>>>0,Number(R)>>>0)):[],pads:W?Array.from(B().subarray(Number(W)>>>0,Number(F)>>>0)):[],strides:J?Array.from(B().subarray(Number(J)>>>0,Number(ne)>>>0)):[]})},1327854:(a,u)=>{r.hc("GlobalAveragePool",a,{format:u?"NHWC":"NCHW"})},1327945:(a,u,p,h,f,x,T,z,R,W,F,J,ne,_e)=>{r.hc("AveragePool",a,{format:_e?"NHWC":"NCHW",auto_pad:u,ceil_mode:p,count_include_pad:h,storage_order:f,dilations:x?Array.from(B().subarray(Number(x)>>>0,Number(T)>>>0)):[],kernel_shape:z?Array.from(B().subarray(Number(z)>>>0,Number(R)>>>0)):[],pads:W?Array.from(B().subarray(Number(W)>>>0,Number(F)>>>0)):[],strides:J?Array.from(B().subarray(Number(J)>>>0,Number(ne)>>>0)):[]})},1328424:(a,u)=>{r.hc("GlobalMaxPool",a,{format:u?"NHWC":"NCHW"})},1328511:(a,u,p,h,f,x,T,z,R,W,F,J,ne,_e)=>{r.hc("MaxPool",a,{format:_e?"NHWC":"NCHW",auto_pad:u,ceil_mode:p,count_include_pad:h,storage_order:f,dilations:x?Array.from(B().subarray(Number(x)>>>0,Number(T)>>>0)):[],kernel_shape:z?Array.from(B().subarray(Number(z)>>>0,Number(R)>>>0)):[],pads:W?Array.from(B().subarray(Number(W)>>>0,Number(F)>>>0)):[],strides:J?Array.from(B().subarray(Number(J)>>>0,Number(ne)>>>0)):[]})},1328986:(a,u)=>{r.hc("GlobalMaxPool",a,{format:u?"NHWC":"NCHW"})},1329073:(a,u,p,h,f,x,T,z,R,W,F,J,ne,_e)=>{r.hc("MaxPool",a,{format:_e?"NHWC":"NCHW",auto_pad:u,ceil_mode:p,count_include_pad:h,storage_order:f,dilations:x?Array.from(B().subarray(Number(x)>>>0,Number(T)>>>0)):[],kernel_shape:z?Array.from(B().subarray(Number(z)>>>0,Number(R)>>>0)):[],pads:W?Array.from(B().subarray(Number(W)>>>0,Number(F)>>>0)):[],strides:J?Array.from(B().subarray(Number(J)>>>0,Number(ne)>>>0)):[]})},1329548:(a,u,p,h,f)=>{r.hc("Gemm",a,{alpha:u,beta:p,transA:h,transB:f})},1329652:a=>{r.hc("MatMul",a,void 0)},1329706:(a,u,p,h)=>{r.hc("ArgMax",a,{keepDims:!!u,selectLastIndex:!!p,axis:h})},1329814:(a,u,p,h)=>{r.hc("ArgMin",a,{keepDims:!!u,selectLastIndex:!!p,axis:h})},1329922:(a,u)=>{r.hc("Softmax",a,{axis:u})},1329985:(a,u)=>{r.hc("Concat",a,{axis:u})},1330045:(a,u,p,h,f)=>{r.hc("Split",a,{axis:u,numOutputs:p,splitSizes:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1330201:a=>{r.hc("Expand",a,void 0)},1330255:(a,u)=>{r.hc("Gather",a,{axis:Number(u)})},1330326:(a,u)=>{r.hc("GatherElements",a,{axis:Number(u)})},1330405:(a,u)=>{r.hc("GatherND",a,{batch_dims:Number(u)})},1330484:(a,u,p,h,f,x,T,z,R,W,F)=>{r.hc("Resize",a,{antialias:u,axes:p?Array.from(B().subarray(Number(p)>>>0,Number(h)>>>0)):[],coordinateTransformMode:Se(f),cubicCoeffA:x,excludeOutside:T,extrapolationValue:z,keepAspectRatioPolicy:Se(R),mode:Se(W),nearestMode:Se(F)})},1330846:(a,u,p,h,f,x,T)=>{r.hc("Slice",a,{starts:u?Array.from(B().subarray(Number(u)>>>0,Number(p)>>>0)):[],ends:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[],axes:x?Array.from(B().subarray(Number(x)>>>0,Number(T)>>>0)):[]})},1331110:a=>{r.hc("Tile",a,void 0)},1331162:(a,u,p)=>{r.hc("InstanceNormalization",a,{epsilon:u,format:p?"NHWC":"NCHW"})},1331276:(a,u,p)=>{r.hc("InstanceNormalization",a,{epsilon:u,format:p?"NHWC":"NCHW"})},1331390:a=>{r.hc("Range",a,void 0)},1331443:(a,u)=>{r.hc("Einsum",a,{equation:Se(u)})},1331524:(a,u,p,h,f)=>{r.hc("Pad",a,{mode:u,value:p,pads:h?Array.from(B().subarray(Number(h)>>>0,Number(f)>>>0)):[]})},1331667:(a,u,p,h,f,x)=>{r.hc("BatchNormalization",a,{epsilon:u,momentum:p,spatial:!!f,trainingMode:!!h,format:x?"NHWC":"NCHW"})},1331836:(a,u,p,h,f,x)=>{r.hc("BatchNormalization",a,{epsilon:u,momentum:p,spatial:!!f,trainingMode:!!h,format:x?"NHWC":"NCHW"})},1332005:(a,u,p)=>{r.hc("CumSum",a,{exclusive:Number(u),reverse:Number(p)})},1332102:(a,u,p)=>{r.hc("DequantizeLinear",a,{axis:u,blockSize:p})},1332192:(a,u,p,h,f)=>{r.hc("GridSample",a,{align_corners:u,mode:Se(p),padding_mode:Se(h),format:f?"NHWC":"NCHW"})},1332362:(a,u,p,h,f)=>{r.hc("GridSample",a,{align_corners:u,mode:Se(p),padding_mode:Se(h),format:f?"NHWC":"NCHW"})},1332532:(a,u)=>{r.hc("ScatterND",a,{reduction:Se(u)})},1332617:(a,u,p,h,f,x,T,z,R)=>{r.hc("Attention",a,{numHeads:u,isUnidirectional:p,maskFilterValue:h,scale:f,doRotary:x,qkvHiddenSizes:T?Array.from(B().subarray(Number(z)>>>0,Number(z)+T>>>0)):[],pastPresentShareBuffer:!!R})},1332889:a=>{r.hc("BiasAdd",a,void 0)},1332944:a=>{r.hc("BiasSplitGelu",a,void 0)},1333005:a=>{r.hc("FastGelu",a,void 0)},1333061:(a,u,p,h,f,x,T,z,R,W,F,J,ne,_e,qe,Qt)=>{r.hc("Conv",a,{format:J?"NHWC":"NCHW",auto_pad:u,dilations:p?Array.from(B().subarray(Number(p)>>>0,Number(h)>>>0)):[],group:f,kernel_shape:x?Array.from(B().subarray(Number(x)>>>0,Number(T)>>>0)):[],pads:z?Array.from(B().subarray(Number(z)>>>0,Number(R)>>>0)):[],strides:W?Array.from(B().subarray(Number(W)>>>0,Number(F)>>>0)):[],w_is_const:()=>!!j()[Number(ne)>>>0],activation:Se(_e),activation_params:qe?Array.from(ve().subarray(Number(qe)>>>0,Number(Qt)>>>0)):[]})},1333645:a=>{r.hc("Gelu",a,void 0)},1333697:(a,u,p,h,f,x,T,z,R)=>{r.hc("GroupQueryAttention",a,{numHeads:u,kvNumHeads:p,scale:h,softcap:f,doRotary:x,rotaryInterleaved:T,smoothSoftmax:z,localWindowSize:R})},1333914:(a,u,p,h)=>{r.hc("LayerNormalization",a,{axis:u,epsilon:p,simplified:!!h})},1334025:(a,u,p,h)=>{r.hc("LayerNormalization",a,{axis:u,epsilon:p,simplified:!!h})},1334136:(a,u,p,h,f,x)=>{r.hc("MatMulNBits",a,{k:u,n:p,accuracyLevel:h,bits:f,blockSize:x})},1334263:(a,u,p,h,f,x)=>{r.hc("MultiHeadAttention",a,{numHeads:u,isUnidirectional:p,maskFilterValue:h,scale:f,doRotary:x})},1334422:(a,u)=>{r.hc("QuickGelu",a,{alpha:u})},1334486:(a,u,p,h,f)=>{r.hc("RotaryEmbedding",a,{interleaved:!!u,numHeads:p,rotaryEmbeddingDim:h,scale:f})},1334625:(a,u,p)=>{r.hc("SkipLayerNormalization",a,{epsilon:u,simplified:!!p})},1334727:(a,u,p)=>{r.hc("SkipLayerNormalization",a,{epsilon:u,simplified:!!p})},1334829:(a,u,p,h)=>{r.hc("GatherBlockQuantized",a,{gatherAxis:u,quantizeAxis:p,blockSize:h})},1334950:a=>{r.Wd(a)},1334984:(a,u)=>r.Zd(Number(a),Number(u),r.Cd.be,r.Cd.errors)};function Rf(a,u,p){return Fn(async()=>{await r.Ud(Number(a),Number(u),Number(p))})}function Bf(){return typeof wasmOffsetConverter<"u"}class Yr{name="ExitStatus";constructor(u){this.message=`Program terminated with exit(${u})`,this.status=u}}var pn=a=>{a.terminate(),a.onmessage=()=>{}},ei=[],cn=a=>{ct.length==0&&(_n(),yn(ct[0]));var u=ct.pop();if(!u)return 6;Ht.push(u),$t[a.xd]=u,u.xd=a.xd;var p={yd:"run",de:a.ce,Fd:a.Fd,xd:a.xd};return u.postMessage(p,a.Ld),0},pt=0,we=(a,u,...p)=>{for(var h=2*p.length,f=ie(),x=wi(8*h),T=x>>>3,z=0;z<p.length;z++){var R=p[z];typeof R=="bigint"?(P[T+2*z]=1n,P[T+2*z+1]=R):(P[T+2*z]=0n,Be()[T+2*z+1>>>0]=R)}return a=cs(a,0,h,x,u),re(f),a};function ti(a){if(l)return we(0,1,a);if(I=a,!(0<pt)){for(var u of Ht)pn(u);for(u of ct)pn(u);ct=[],Ht=[],$t={},le=!0}w(0,new Yr(a))}function hn(a){if(l)return we(1,0,a);ri(a)}var ri=a=>{if(I=a,l)throw hn(a),"unwind";ti(a)},ct=[],Ht=[],fn=[],$t={},mn=a=>{var u=a.xd;delete $t[u],ct.push(a),Ht.splice(Ht.indexOf(a),1),a.xd=0,hs(u)};function gn(){fn.forEach(a=>a())}var yn=a=>new Promise(u=>{a.onmessage=f=>{var x=(f=f.data).yd;if(f.Ed&&f.Ed!=xr()){var T=$t[f.Ed];T?T.postMessage(f,f.Ld):b(`Internal error! Worker sent a message "${x}" to target pthread ${f.Ed}, but that thread no longer exists!`)}else x==="checkMailbox"?mr():x==="spawnThread"?cn(f):x==="cleanupThread"?mn($t[f.ee]):x==="loaded"?(a.loaded=!0,u(a)):x==="alert"?alert(`Thread ${f.fe}: ${f.text}`):f.target==="setimmediate"?a.postMessage(f):x==="callHandler"?r[f.Nd](...f.args):x&&b(`worker sent an unknown command ${x}`)},a.onerror=f=>{throw b(`worker sent an error! ${f.filename}:${f.lineno}: ${f.message}`),f};var p,h=[];for(p of[])r.propertyIsEnumerable(p)&&h.push(p);a.postMessage({yd:"load",Od:h,he:k,ie:C})});function _n(){var a=new Worker(rt.url.startsWith("file:")?new URL("ort.bundle.min.mjs",rt.url):new URL(rt.url),{type:"module",workerData:"em-pthread",name:"em-pthread"});ct.push(a)}var Nf=a=>{Re();var u=Y()[a+52>>>2>>>0];a=Y()[a+56>>>2>>>0],gs(u,u-a),re(u)},Mf=(a,u)=>{pt=0,a=bi(a,u),0<pt?I=a:_i(a)},fr=[];function Df(a){var u=new ii(a>>>=0);if(j()[u.wd+12>>>0]==0){var p=1;j()[u.wd+12>>>0]=p}return p=0,j()[u.wd+13>>>0]=p,fr.push(u),_s(a),bs(a)}var Nt=0,Uf=()=>{ae(0,0);var a=fr.pop();ys(a.Gd),Nt=0};class ii{constructor(u){this.Gd=u,this.wd=u-24}}function Pf(a){throw Nt||=a>>>0,Nt}var ai=a=>{var u=Nt;if(!u)return Kt(0),0;var p=new ii(u);Y()[p.wd+16>>>2>>>0]=u;var h=Y()[p.wd+4>>>2>>>0];if(!h)return Kt(0),u;for(var f of a){if(f===0||f===h)break;if(ws(f,h,p.wd+16))return Kt(f),u}return Kt(h),u};function Wf(){return ai([])}function qf(a){return ai([a>>>0])}function Vf(a,u){return ai([a>>>0,u>>>0])}var Lf=()=>{var a=fr.pop();a||nt("no exception to throw");var u=a.Gd;if(j()[a.wd+13>>>0]==0){fr.push(a);var p=1;j()[a.wd+13>>>0]=p,p=0,j()[a.wd+12>>>0]=p}throw Nt=u};function Ff(a,u,p){var h=new ii(a>>>=0);throw u>>>=0,p>>>=0,Y()[h.wd+16>>>2>>>0]=0,Y()[h.wd+4>>>2>>>0]=u,Y()[h.wd+8>>>2>>>0]=p,Nt=a}function wn(a,u,p,h){return l?we(2,1,a,u,p,h):bn(a,u,p,h)}function bn(a,u,p,h){if(a>>>=0,p>>>=0,h>>>=0,d===void 0)return 6;var f=[];return l&&f.length===0?wn(a,u>>>=0,p,h):(a={ce:p,xd:a,Fd:h,Ld:f},l?(a.yd="spawnThread",postMessage(a,f),0):cn(a))}var $n=typeof TextDecoder<"u"?new TextDecoder:void 0,vn=(a,u=0,p=NaN)=>{var h=(u>>>=0)+p;for(p=u;a[p]&&!(p>=h);)++p;if(16<p-u&&a.buffer&&$n)return $n.decode(a.buffer instanceof ArrayBuffer?a.subarray(u,p):a.slice(u,p));for(h="";u<p;){var f=a[u++];if(128&f){var x=63&a[u++];if((224&f)==192)h+=String.fromCharCode((31&f)<<6|x);else{var T=63&a[u++];65536>(f=(240&f)==224?(15&f)<<12|x<<6|T:(7&f)<<18|x<<12|T<<6|63&a[u++])?h+=String.fromCharCode(f):(f-=65536,h+=String.fromCharCode(55296|f>>10,56320|1023&f))}}else h+=String.fromCharCode(f)}return h},Se=(a,u)=>(a>>>=0)?vn(ce(),a,u):"";function xn(a,u,p){return l?we(3,1,a,u,p):0}function Sn(a,u){if(l)return we(4,1,a,u)}var kn=a=>{for(var u=0,p=0;p<a.length;++p){var h=a.charCodeAt(p);127>=h?u++:2047>=h?u+=2:55296<=h&&57343>=h?(u+=4,++p):u+=3}return u},Mt=(a,u,p)=>{var h=ce();if(u>>>=0,0<p){var f=u;p=u+p-1;for(var x=0;x<a.length;++x){var T=a.charCodeAt(x);if(55296<=T&&57343>=T&&(T=65536+((1023&T)<<10)|1023&a.charCodeAt(++x)),127>=T){if(u>=p)break;h[u++>>>0]=T}else{if(2047>=T){if(u+1>=p)break;h[u++>>>0]=192|T>>6}else{if(65535>=T){if(u+2>=p)break;h[u++>>>0]=224|T>>12}else{if(u+3>=p)break;h[u++>>>0]=240|T>>18,h[u++>>>0]=128|T>>12&63}h[u++>>>0]=128|T>>6&63}h[u++>>>0]=128|63&T}}h[u>>>0]=0,a=u-f}else a=0;return a};function Tn(a,u){if(l)return we(5,1,a,u)}function Cn(a,u,p){if(l)return we(6,1,a,u,p)}function In(a,u,p){return l?we(7,1,a,u,p):0}function En(a,u){if(l)return we(8,1,a,u)}function zn(a,u,p){if(l)return we(9,1,a,u,p)}function An(a,u,p,h){if(l)return we(10,1,a,u,p,h)}function On(a,u,p,h){if(l)return we(11,1,a,u,p,h)}function Rn(a,u,p,h){if(l)return we(12,1,a,u,p,h)}function Bn(a){if(l)return we(13,1,a)}function Nn(a,u){if(l)return we(14,1,a,u)}function Mn(a,u,p){if(l)return we(15,1,a,u,p)}var Dn,ht,Gf=()=>nt(""),Je=a=>{for(var u="";ce()[a>>>0];)u+=Dn[ce()[a++>>>0]];return u},ni={},si={},Hf={};function st(a,u,p={}){return(function(h,f,x={}){var T=f.name;if(!h)throw new ht(`type "${T}" must have a positive integer typeid pointer`);if(si.hasOwnProperty(h)){if(x.Pd)return;throw new ht(`Cannot register type '${T}' twice`)}si[h]=f,delete Hf[h],ni.hasOwnProperty(h)&&(f=ni[h],delete ni[h],f.forEach(z=>z()))})(a,u,p)}var Un=(a,u,p)=>{switch(u){case 1:return p?h=>j()[h>>>0]:h=>ce()[h>>>0];case 2:return p?h=>U()[h>>>1>>>0]:h=>L()[h>>>1>>>0];case 4:return p?h=>B()[h>>>2>>>0]:h=>Y()[h>>>2>>>0];case 8:return p?h=>P[h>>>3]:h=>oe[h>>>3];default:throw new TypeError(`invalid integer width (${u}): ${a}`)}};function jf(a,u,p){p>>>=0,st(a>>>=0,{name:u=Je(u>>>0),fromWireType:h=>h,toWireType:function(h,f){if(typeof f!="bigint"&&typeof f!="number")throw f=f===null?"null":(h=typeof f)=="object"||h==="array"||h==="function"?f.toString():""+f,new TypeError(`Cannot convert "${f}" to ${this.name}`);return typeof f=="number"&&(f=BigInt(f)),f},zd:ft,readValueFromPointer:Un(u,p,u.indexOf("u")==-1),Ad:null})}var ft=8;function Kf(a,u,p,h){st(a>>>=0,{name:u=Je(u>>>0),fromWireType:function(f){return!!f},toWireType:function(f,x){return x?p:h},zd:ft,readValueFromPointer:function(f){return this.fromWireType(ce()[f>>>0])},Ad:null})}var oi=[],ot=[];function ui(a){9<(a>>>=0)&&--ot[a+1]==0&&(ot[a]=void 0,oi.push(a))}var Ne=a=>{if(!a)throw new ht("Cannot use deleted val. handle = "+a);return ot[a]},We=a=>{switch(a){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let u=oi.pop()||ot.length;return ot[u]=a,ot[u+1]=1,u}};function li(a){return this.fromWireType(Y()[a>>>2>>>0])}var Qf={name:"emscripten::val",fromWireType:a=>{var u=Ne(a);return ui(a),u},toWireType:(a,u)=>We(u),zd:ft,readValueFromPointer:li,Ad:null};function Zf(a){return st(a>>>0,Qf)}var Xf=(a,u)=>{switch(u){case 4:return function(p){return this.fromWireType(ve()[p>>>2>>>0])};case 8:return function(p){return this.fromWireType(Be()[p>>>3>>>0])};default:throw new TypeError(`invalid float width (${u}): ${a}`)}};function Jf(a,u,p){p>>>=0,st(a>>>=0,{name:u=Je(u>>>0),fromWireType:h=>h,toWireType:(h,f)=>f,zd:ft,readValueFromPointer:Xf(u,p),Ad:null})}function Yf(a,u,p,h,f){if(a>>>=0,p>>>=0,u=Je(u>>>0),f===-1&&(f=4294967295),f=z=>z,h===0){var x=32-8*p;f=z=>z<<x>>>x}var T=u.includes("unsigned")?function(z,R){return R>>>0}:function(z,R){return R};st(a,{name:u,fromWireType:f,toWireType:T,zd:ft,readValueFromPointer:Un(u,p,h!==0),Ad:null})}function em(a,u,p){function h(x){var T=Y()[x>>>2>>>0];return x=Y()[x+4>>>2>>>0],new f(j().buffer,x,T)}var f=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][u];st(a>>>=0,{name:p=Je(p>>>0),fromWireType:h,zd:ft,readValueFromPointer:h},{Pd:!0})}function tm(a,u){st(a>>>=0,{name:u=Je(u>>>0),fromWireType:function(p){for(var h,f=Y()[p>>>2>>>0],x=p+4,T=x,z=0;z<=f;++z){var R=x+z;z!=f&&ce()[R>>>0]!=0||(T=Se(T,R-T),h===void 0?h=T:(h+="\0",h+=T),T=R+1)}return et(p),h},toWireType:function(p,h){h instanceof ArrayBuffer&&(h=new Uint8Array(h));var f=typeof h=="string";if(!(f||h instanceof Uint8Array||h instanceof Uint8ClampedArray||h instanceof Int8Array))throw new ht("Cannot pass non-string to std::string");var x=f?kn(h):h.length,T=Sr(4+x+1),z=T+4;if(Y()[T>>>2>>>0]=x,f)Mt(h,z,x+1);else if(f)for(f=0;f<x;++f){var R=h.charCodeAt(f);if(255<R)throw et(T),new ht("String has UTF-16 code units that do not fit in 8 bits");ce()[z+f>>>0]=R}else for(f=0;f<x;++f)ce()[z+f>>>0]=h[f];return p!==null&&p.push(et,T),T},zd:ft,readValueFromPointer:li,Ad(p){et(p)}})}var Pn=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,rm=(a,u)=>{for(var p=a>>1,h=p+u/2;!(p>=h)&&L()[p>>>0];)++p;if(32<(p<<=1)-a&&Pn)return Pn.decode(ce().slice(a,p));for(p="",h=0;!(h>=u/2);++h){var f=U()[a+2*h>>>1>>>0];if(f==0)break;p+=String.fromCharCode(f)}return p},im=(a,u,p)=>{if(p??=2147483647,2>p)return 0;var h=u;p=(p-=2)<2*a.length?p/2:a.length;for(var f=0;f<p;++f){var x=a.charCodeAt(f);U()[u>>>1>>>0]=x,u+=2}return U()[u>>>1>>>0]=0,u-h},am=a=>2*a.length,nm=(a,u)=>{for(var p=0,h="";!(p>=u/4);){var f=B()[a+4*p>>>2>>>0];if(f==0)break;++p,65536<=f?(f-=65536,h+=String.fromCharCode(55296|f>>10,56320|1023&f)):h+=String.fromCharCode(f)}return h},sm=(a,u,p)=>{if(u>>>=0,p??=2147483647,4>p)return 0;var h=u;p=h+p-4;for(var f=0;f<a.length;++f){var x=a.charCodeAt(f);if(55296<=x&&57343>=x&&(x=65536+((1023&x)<<10)|1023&a.charCodeAt(++f)),B()[u>>>2>>>0]=x,(u+=4)+4>p)break}return B()[u>>>2>>>0]=0,u-h},om=a=>{for(var u=0,p=0;p<a.length;++p){var h=a.charCodeAt(p);55296<=h&&57343>=h&&++p,u+=4}return u};function um(a,u,p){if(a>>>=0,u>>>=0,p=Je(p>>>=0),u===2)var h=rm,f=im,x=am,T=z=>L()[z>>>1>>>0];else u===4&&(h=nm,f=sm,x=om,T=z=>Y()[z>>>2>>>0]);st(a,{name:p,fromWireType:z=>{for(var R,W=Y()[z>>>2>>>0],F=z+4,J=0;J<=W;++J){var ne=z+4+J*u;J!=W&&T(ne)!=0||(F=h(F,ne-F),R===void 0?R=F:(R+="\0",R+=F),F=ne+u)}return et(z),R},toWireType:(z,R)=>{if(typeof R!="string")throw new ht(`Cannot pass non-string to C++ string type ${p}`);var W=x(R),F=Sr(4+W+u);return Y()[F>>>2>>>0]=W/u,f(R,F+4,W+u),z!==null&&z.push(et,F),F},zd:ft,readValueFromPointer:li,Ad(z){et(z)}})}function lm(a,u){st(a>>>=0,{Qd:!0,name:u=Je(u>>>0),zd:0,fromWireType:()=>{},toWireType:()=>{}})}function dm(a){yi(a>>>0,!s,1,!o,131072,!1),gn()}var di=a=>{if(!le)try{if(a(),!(0<pt))try{l?_i(I):ri(I)}catch(u){u instanceof Yr||u=="unwind"||w(0,u)}}catch(u){u instanceof Yr||u=="unwind"||w(0,u)}};function pi(a){a>>>=0,typeof Atomics.ge=="function"&&(Atomics.ge(B(),a>>>2,a).value.then(mr),a+=128,Atomics.store(B(),a>>>2,1))}var mr=()=>{var a=xr();a&&(pi(a),di(ms))};function pm(a,u){(a>>>=0)==u>>>0?setTimeout(mr):l?postMessage({Ed:a,yd:"checkMailbox"}):(a=$t[a])&&a.postMessage({yd:"checkMailbox"})}var ci=[];function cm(a,u,p,h,f){for(u>>>=0,h/=2,ci.length=h,p=f>>>0>>>3,f=0;f<h;f++)ci[f]=P[p+2*f]?P[p+2*f+1]:Be()[p+2*f+1>>>0];return(u?Jr[u]:ng[a])(...ci)}var hm=()=>{pt=0};function fm(a){a>>>=0,l?postMessage({yd:"cleanupThread",ee:a}):mn($t[a])}function mm(a){}var gr=(a,u)=>{var p=si[a];if(p===void 0)throw a=ls(a),p=Je(a),et(a),new ht(`${u} has unknown type ${p}`);return p},Wn=(a,u,p)=>{var h=[];return a=a.toWireType(h,p),h.length&&(Y()[u>>>2>>>0]=We(h)),a};function gm(a,u,p){return u>>>=0,p>>>=0,a=Ne(a>>>0),u=gr(u,"emval::as"),Wn(u,p,a)}function ym(a,u){return u>>>=0,a=Ne(a>>>0),(u=gr(u,"emval::as")).toWireType(null,a)}var yr=a=>{try{a()}catch(u){nt(u)}},mt=0,Ye=null,qn=0,_r=[],Vn={},Ln={},_m=0,hi=null,wm=[];function Fn(a){return(function(u){if(!le){if(mt===0){var p=!1,h=!1;u((f=0)=>{if(!le&&(qn=f,p=!0,h)){mt=2,yr(()=>fo(Ye)),typeof MainLoop<"u"&&MainLoop.Md&&MainLoop.resume(),f=!1;try{var x=(function(){var R=B()[Ye+8>>>2>>>0];return R=M[Ln[R]],--pt,R()})()}catch(R){x=R,f=!0}var T=!1;if(!Ye){var z=hi;z&&(hi=null,(f?z.reject:z.resolve)(x),T=!0)}if(f&&!T)throw x}}),h=!0,p||(mt=1,Ye=(function(){var f=Sr(65548),x=f+12;Y()[f>>>2>>>0]=x,Y()[f+4>>>2>>>0]=x+65536,x=_r[0];var T=Vn[x];return T===void 0&&(T=_m++,Vn[x]=T,Ln[T]=x),x=T,B()[f+8>>>2>>>0]=x,f})(),typeof MainLoop<"u"&&MainLoop.Md&&MainLoop.pause(),yr(()=>co(Ye)))}else mt===2?(mt=0,yr(mo),et(Ye),Ye=null,wm.forEach(di)):nt(`invalid state: ${mt}`);return qn}})(u=>{a().then(u)})}function bm(a){return a>>>=0,Fn(async()=>{var u=await Ne(a);return We(u)})}var wr=[];function $m(a,u,p,h){return p>>>=0,h>>>=0,(a=wr[a>>>0])(null,u=Ne(u>>>0),p,h)}var vm={},br=a=>{var u=vm[a];return u===void 0?Je(a):u};function xm(a,u,p,h,f){return p>>>=0,h>>>=0,f>>>=0,(a=wr[a>>>0])(u=Ne(u>>>0),u[p=br(p)],h,f)}var Gn=()=>typeof globalThis=="object"?globalThis:Function("return this")();function Sm(a){return(a>>>=0)==0?We(Gn()):(a=br(a),We(Gn()[a]))}var km=a=>{var u=wr.length;return wr.push(a),u},Tm=(a,u)=>{for(var p=Array(a),h=0;h<a;++h)p[h]=gr(Y()[u+4*h>>>2>>>0],"parameter "+h);return p},Hn=(a,u)=>Object.defineProperty(u,"name",{value:a});function Cm(a,u,p){var h=(u=Tm(a,u>>>0)).shift();a--;var f=`return function (obj, func, destructorsRef, args) {
`,x=0,T=[];p===0&&T.push("obj");for(var z=["retType"],R=[h],W=0;W<a;++W)T.push("arg"+W),z.push("argType"+W),R.push(u[W]),f+=`  var arg${W} = argType${W}.readValueFromPointer(args${x?"+"+x:""});
`,x+=u[W].zd;return f+=`  var rv = ${p===1?"new func":"func.call"}(${T.join(", ")});
`,h.Qd||(z.push("emval_returnValue"),R.push(Wn),f+=`  return emval_returnValue(retType, destructorsRef, rv);
`),z.push(f+`};
`),a=(function(F){var J=Function;if(!(J instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof J} which is not a function`);var ne=Hn(J.name||"unknownFunctionName",function(){});return ne.prototype=J.prototype,ne=new ne,(F=J.apply(ne,F))instanceof Object?F:ne})(z)(...R),p=`methodCaller<(${u.map(F=>F.name).join(", ")}) => ${h.name}>`,km(Hn(p,a))}function Im(a){return a=br(a>>>0),We(r[a])}function Em(a,u){return u>>>=0,a=Ne(a>>>0),u=Ne(u),We(a[u])}function zm(a){9<(a>>>=0)&&(ot[a+1]+=1)}function Am(){return We([])}function Om(a){a=Ne(a>>>0);for(var u=Array(a.length),p=0;p<a.length;p++)u[p]=a[p];return We(u)}function Rm(a){return We(br(a>>>0))}function Bm(){return We({})}function Nm(a){for(var u=Ne(a>>>=0);u.length;){var p=u.pop();u.pop()(p)}ui(a)}function Mm(a,u,p){u>>>=0,p>>>=0,a=Ne(a>>>0),u=Ne(u),p=Ne(p),a[u]=p}function Dm(a,u){return u>>>=0,a=(a=gr(a>>>0,"_emval_take_value")).readValueFromPointer(u),We(a)}function Um(a,u){a=-9007199254740992>a||9007199254740992<a?NaN:Number(a),u>>>=0,a=new Date(1e3*a),B()[u>>>2>>>0]=a.getUTCSeconds(),B()[u+4>>>2>>>0]=a.getUTCMinutes(),B()[u+8>>>2>>>0]=a.getUTCHours(),B()[u+12>>>2>>>0]=a.getUTCDate(),B()[u+16>>>2>>>0]=a.getUTCMonth(),B()[u+20>>>2>>>0]=a.getUTCFullYear()-1900,B()[u+24>>>2>>>0]=a.getUTCDay(),a=(a.getTime()-Date.UTC(a.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,B()[u+28>>>2>>>0]=a}var jn=a=>a%4==0&&(a%100!=0||a%400==0),Kn=[0,31,60,91,121,152,182,213,244,274,305,335],Qn=[0,31,59,90,120,151,181,212,243,273,304,334];function Pm(a,u){a=-9007199254740992>a||9007199254740992<a?NaN:Number(a),u>>>=0,a=new Date(1e3*a),B()[u>>>2>>>0]=a.getSeconds(),B()[u+4>>>2>>>0]=a.getMinutes(),B()[u+8>>>2>>>0]=a.getHours(),B()[u+12>>>2>>>0]=a.getDate(),B()[u+16>>>2>>>0]=a.getMonth(),B()[u+20>>>2>>>0]=a.getFullYear()-1900,B()[u+24>>>2>>>0]=a.getDay();var p=(jn(a.getFullYear())?Kn:Qn)[a.getMonth()]+a.getDate()-1|0;B()[u+28>>>2>>>0]=p,B()[u+36>>>2>>>0]=-60*a.getTimezoneOffset(),p=new Date(a.getFullYear(),6,1).getTimezoneOffset();var h=new Date(a.getFullYear(),0,1).getTimezoneOffset();a=0|(p!=h&&a.getTimezoneOffset()==Math.min(h,p)),B()[u+32>>>2>>>0]=a}function Wm(a){a>>>=0;var u=new Date(B()[a+20>>>2>>>0]+1900,B()[a+16>>>2>>>0],B()[a+12>>>2>>>0],B()[a+8>>>2>>>0],B()[a+4>>>2>>>0],B()[a>>>2>>>0],0),p=B()[a+32>>>2>>>0],h=u.getTimezoneOffset(),f=new Date(u.getFullYear(),6,1).getTimezoneOffset(),x=new Date(u.getFullYear(),0,1).getTimezoneOffset(),T=Math.min(x,f);return 0>p?B()[a+32>>>2>>>0]=+(f!=x&&T==h):0<p!=(T==h)&&(f=Math.max(x,f),u.setTime(u.getTime()+6e4*((0<p?T:f)-h))),B()[a+24>>>2>>>0]=u.getDay(),p=(jn(u.getFullYear())?Kn:Qn)[u.getMonth()]+u.getDate()-1|0,B()[a+28>>>2>>>0]=p,B()[a>>>2>>>0]=u.getSeconds(),B()[a+4>>>2>>>0]=u.getMinutes(),B()[a+8>>>2>>>0]=u.getHours(),B()[a+12>>>2>>>0]=u.getDate(),B()[a+16>>>2>>>0]=u.getMonth(),B()[a+20>>>2>>>0]=u.getYear(),a=u.getTime(),BigInt(isNaN(a)?-1:a/1e3)}function Zn(a,u,p,h,f,x,T){return l?we(16,1,a,u,p,h,f,x,T):-52}function Xn(a,u,p,h,f,x){if(l)return we(17,1,a,u,p,h,f,x)}var jt={},qm=()=>performance.timeOrigin+performance.now();function Jn(a,u){if(l)return we(18,1,a,u);if(jt[a]&&(clearTimeout(jt[a].id),delete jt[a]),!u)return 0;var p=setTimeout(()=>{delete jt[a],di(()=>fs(a,performance.timeOrigin+performance.now()))},u);return jt[a]={id:p,ke:u},0}function Vm(a,u,p,h){a>>>=0,u>>>=0,p>>>=0,h>>>=0;var f=new Date().getFullYear(),x=new Date(f,0,1).getTimezoneOffset();f=new Date(f,6,1).getTimezoneOffset();var T=Math.max(x,f);Y()[a>>>2>>>0]=60*T,B()[u>>>2>>>0]=+(x!=f),a=(u=z=>{var R=Math.abs(z);return`UTC${0<=z?"-":"+"}${String(Math.floor(R/60)).padStart(2,"0")}${String(R%60).padStart(2,"0")}`})(x),u=u(f),f<x?(Mt(a,p,17),Mt(u,h,17)):(Mt(a,h,17),Mt(u,p,17))}var Lm=()=>Date.now(),Fm=1;function Gm(a,u,p){if(!(0<=a&&3>=a))return 28;if(a===0)a=Date.now();else{if(!Fm)return 52;a=performance.timeOrigin+performance.now()}return P[p>>>0>>>3]=BigInt(Math.round(1e6*a)),0}var fi=[],Yn=(a,u)=>{fi.length=0;for(var p;p=ce()[a++>>>0];){var h=p!=105;u+=(h&=p!=112)&&u%8?4:0,fi.push(p==112?Y()[u>>>2>>>0]:p==106?P[u>>>3]:p==105?B()[u>>>2>>>0]:Be()[u>>>3>>>0]),u+=h?8:4}return fi};function Hm(a,u,p){return a>>>=0,u=Yn(u>>>0,p>>>0),Jr[a](...u)}function jm(a,u,p){return a>>>=0,u=Yn(u>>>0,p>>>0),Jr[a](...u)}var Km=()=>{};function Qm(a,u){return b(Se(a>>>0,u>>>0))}var Zm=()=>{throw pt+=1,"unwind"};function Xm(){return 4294901760}var Jm=()=>navigator.hardwareConcurrency;function Ym(){return nt("Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER"),0}function eg(a){a>>>=0;var u=ce().length;if(a<=u||4294901760<a)return!1;for(var p=1;4>=p;p*=2){var h=u*(1+.2/p);h=Math.min(h,a+100663296);e:{h=(Math.min(4294901760,65536*Math.ceil(Math.max(a,h)/65536))-k.buffer.byteLength+65535)/65536|0;try{k.grow(h),Re();var f=1;break e}catch{}f=void 0}if(f)return!0}return!1}var $r=()=>(nt("Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER"),0),Dt={},es=a=>{a.forEach(u=>{var p=$r();p&&(Dt[p]=u)})};function tg(){var a=Error().stack.toString().split(`
`);return a[0]=="Error"&&a.shift(),es(a),Dt.Kd=$r(),Dt.ae=a,Dt.Kd}function rg(a,u,p){if(a>>>=0,u>>>=0,Dt.Kd==a)var h=Dt.ae;else(h=Error().stack.toString().split(`
`))[0]=="Error"&&h.shift(),es(h);for(var f=3;h[f]&&$r()!=a;)++f;for(a=0;a<p&&h[a+f];++a)B()[u+4*a>>>2>>>0]=$r();return a}var mi,gi={},ts=()=>{if(!mi){var a,u={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:"./this.program"};for(a in gi)gi[a]===void 0?delete u[a]:u[a]=gi[a];var p=[];for(a in u)p.push(`${a}=${u[a]}`);mi=p}return mi};function rs(a,u){if(l)return we(19,1,a,u);a>>>=0,u>>>=0;var p=0;return ts().forEach((h,f)=>{var x=u+p;for(f=Y()[a+4*f>>>2>>>0]=x,x=0;x<h.length;++x)j()[f++>>>0]=h.charCodeAt(x);j()[f>>>0]=0,p+=h.length+1}),0}function is(a,u){if(l)return we(20,1,a,u);a>>>=0,u>>>=0;var p=ts();Y()[a>>>2>>>0]=p.length;var h=0;return p.forEach(f=>h+=f.length+1),Y()[u>>>2>>>0]=h,0}function as(a){return l?we(21,1,a):52}function ns(a,u,p,h){return l?we(22,1,a,u,p,h):52}function ss(a,u,p,h){return l?we(23,1,a,u,p,h):70}var ig=[null,[],[]];function os(a,u,p,h){if(l)return we(24,1,a,u,p,h);u>>>=0,p>>>=0,h>>>=0;for(var f=0,x=0;x<p;x++){var T=Y()[u>>>2>>>0],z=Y()[u+4>>>2>>>0];u+=8;for(var R=0;R<z;R++){var W=ce()[T+R>>>0],F=ig[a];W===0||W===10?((a===1?v:b)(vn(F)),F.length=0):F.push(W)}f+=z}return Y()[h>>>2>>>0]=f,0}function ag(a){return a>>>0}l||(function(){for(var a=r.numThreads-1;a--;)_n();ei.unshift(()=>{Ft++,(function(u){l?u():Promise.all(ct.map(yn)).then(u)})(()=>ln())})})();for(var us=Array(256),vr=0;256>vr;++vr)us[vr]=String.fromCharCode(vr);Dn=us,ht=r.BindingError=class extends Error{constructor(a){super(a),this.name="BindingError"}},r.InternalError=class extends Error{constructor(a){super(a),this.name="InternalError"}},ot.push(0,1,void 0,1,null,1,!0,1,!1,1),r.count_emval_handles=()=>ot.length/2-5-oi.length;var M,ng=[ti,hn,wn,xn,Sn,Tn,Cn,In,En,zn,An,On,Rn,Bn,Nn,Mn,Zn,Xn,Jn,rs,is,as,ns,ss,os];(async function(){function a(h,f){return M=h.exports,M=(function(){var x=M,T={};for(let[z,R]of Object.entries(x))T[z]=typeof R=="function"?(...W)=>{_r.push(z);try{return R(...W)}finally{le||(_r.pop(),Ye&&mt===1&&_r.length===0&&(mt=0,pt+=1,yr(ho),typeof Fibers<"u"&&Fibers.le()))}}:R;return T})(),M=(function(){var x=M,T=R=>W=>R(W)>>>0,z=R=>()=>R()>>>0;return(x=Object.assign({},x)).Cb=T(x.Cb),x.fc=z(x.fc),x.ic=T(x.ic),x.vc=T(x.vc),x.wc=z(x.wc),x.Ac=T(x.Ac),x})(),fn.push(M.jc),C=f,ln(),M}Ft++;var u=dn();if(r.instantiateWasm)return new Promise(h=>{r.instantiateWasm(u,(f,x)=>{a(f,x),h(f.exports)})});if(l)return new Promise(h=>{xe=f=>{var x=new WebAssembly.Instance(f,dn());h(a(x,f))}});Xr??=r.locateFile?r.locateFile?r.locateFile("ort-wasm-simd-threaded.jsep.wasm",_):_+"ort-wasm-simd-threaded.jsep.wasm":new URL("ort-wasm-simd-threaded.jsep.wasm",rt.url).href;try{var p=await(async function(h){var f=Xr;if(!H&&typeof WebAssembly.instantiateStreaming=="function"&&!pe(f))try{var x=fetch(f,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(x,h)}catch(T){b(`wasm streaming compile failed: ${T}`),b("falling back to ArrayBuffer instantiation")}return(async function(T,z){try{var R=await(async function(W){if(!H)try{var F=await m(W);return new Uint8Array(F)}catch{}if(W==Xr&&H)W=new Uint8Array(H);else{if(!g)throw"both async and sync fetching of the wasm failed";W=g(W)}return W})(T);return await WebAssembly.instantiate(R,z)}catch(W){b(`failed to asynchronously prepare wasm: ${W}`),nt(W)}})(f,h)})(u);return a(p.instance,p.module)}catch(h){return i(h),Promise.reject(h)}})();var ls=a=>(ls=M.Cb)(a),ds=()=>(ds=M.Db)();r._OrtInit=(a,u)=>(r._OrtInit=M.Eb)(a,u),r._OrtGetLastError=(a,u)=>(r._OrtGetLastError=M.Fb)(a,u),r._OrtCreateSessionOptions=(a,u,p,h,f,x,T,z,R,W)=>(r._OrtCreateSessionOptions=M.Gb)(a,u,p,h,f,x,T,z,R,W),r._OrtAppendExecutionProvider=(a,u)=>(r._OrtAppendExecutionProvider=M.Hb)(a,u),r._OrtAddFreeDimensionOverride=(a,u,p)=>(r._OrtAddFreeDimensionOverride=M.Ib)(a,u,p),r._OrtAddSessionConfigEntry=(a,u,p)=>(r._OrtAddSessionConfigEntry=M.Jb)(a,u,p),r._OrtReleaseSessionOptions=a=>(r._OrtReleaseSessionOptions=M.Kb)(a),r._OrtCreateSession=(a,u,p)=>(r._OrtCreateSession=M.Lb)(a,u,p),r._OrtReleaseSession=a=>(r._OrtReleaseSession=M.Mb)(a),r._OrtGetInputOutputCount=(a,u,p)=>(r._OrtGetInputOutputCount=M.Nb)(a,u,p),r._OrtGetInputName=(a,u)=>(r._OrtGetInputName=M.Ob)(a,u),r._OrtGetOutputName=(a,u)=>(r._OrtGetOutputName=M.Pb)(a,u),r._OrtFree=a=>(r._OrtFree=M.Qb)(a),r._OrtCreateTensor=(a,u,p,h,f,x)=>(r._OrtCreateTensor=M.Rb)(a,u,p,h,f,x),r._OrtGetTensorData=(a,u,p,h,f)=>(r._OrtGetTensorData=M.Sb)(a,u,p,h,f),r._OrtReleaseTensor=a=>(r._OrtReleaseTensor=M.Tb)(a),r._OrtCreateRunOptions=(a,u,p,h)=>(r._OrtCreateRunOptions=M.Ub)(a,u,p,h),r._OrtAddRunConfigEntry=(a,u,p)=>(r._OrtAddRunConfigEntry=M.Vb)(a,u,p),r._OrtReleaseRunOptions=a=>(r._OrtReleaseRunOptions=M.Wb)(a),r._OrtCreateBinding=a=>(r._OrtCreateBinding=M.Xb)(a),r._OrtBindInput=(a,u,p)=>(r._OrtBindInput=M.Yb)(a,u,p),r._OrtBindOutput=(a,u,p,h)=>(r._OrtBindOutput=M.Zb)(a,u,p,h),r._OrtClearBoundOutputs=a=>(r._OrtClearBoundOutputs=M._b)(a),r._OrtReleaseBinding=a=>(r._OrtReleaseBinding=M.$b)(a),r._OrtRunWithBinding=(a,u,p,h,f)=>(r._OrtRunWithBinding=M.ac)(a,u,p,h,f),r._OrtRun=(a,u,p,h,f,x,T,z)=>(r._OrtRun=M.bc)(a,u,p,h,f,x,T,z),r._OrtEndProfiling=a=>(r._OrtEndProfiling=M.cc)(a),r._JsepOutput=(a,u,p)=>(r._JsepOutput=M.dc)(a,u,p),r._JsepGetNodeName=a=>(r._JsepGetNodeName=M.ec)(a);var xr=()=>(xr=M.fc)(),et=r._free=a=>(et=r._free=M.gc)(a),Sr=r._malloc=a=>(Sr=r._malloc=M.ic)(a),yi=(a,u,p,h,f,x)=>(yi=M.kc)(a,u,p,h,f,x),ps=()=>(ps=M.lc)(),cs=(a,u,p,h,f)=>(cs=M.mc)(a,u,p,h,f),hs=a=>(hs=M.nc)(a),_i=a=>(_i=M.oc)(a),fs=(a,u)=>(fs=M.pc)(a,u),ms=()=>(ms=M.qc)(),ae=(a,u)=>(ae=M.rc)(a,u),Kt=a=>(Kt=M.sc)(a),gs=(a,u)=>(gs=M.tc)(a,u),re=a=>(re=M.uc)(a),wi=a=>(wi=M.vc)(a),ie=()=>(ie=M.wc)(),ys=a=>(ys=M.xc)(a),_s=a=>(_s=M.yc)(a),ws=(a,u,p)=>(ws=M.zc)(a,u,p),bs=a=>(bs=M.Ac)(a),$s=r.dynCall_iii=(a,u,p)=>($s=r.dynCall_iii=M.Bc)(a,u,p),vs=r.dynCall_vi=(a,u)=>(vs=r.dynCall_vi=M.Cc)(a,u),bi=r.dynCall_ii=(a,u)=>(bi=r.dynCall_ii=M.Dc)(a,u),xs=r.dynCall_vii=(a,u,p)=>(xs=r.dynCall_vii=M.Ec)(a,u,p),Ss=r.dynCall_iiii=(a,u,p,h)=>(Ss=r.dynCall_iiii=M.Fc)(a,u,p,h),ks=r.dynCall_viii=(a,u,p,h)=>(ks=r.dynCall_viii=M.Gc)(a,u,p,h),Ts=r.dynCall_iiiii=(a,u,p,h,f)=>(Ts=r.dynCall_iiiii=M.Hc)(a,u,p,h,f),Cs=r.dynCall_viiii=(a,u,p,h,f)=>(Cs=r.dynCall_viiii=M.Ic)(a,u,p,h,f),Is=r.dynCall_viiiiii=(a,u,p,h,f,x,T)=>(Is=r.dynCall_viiiiii=M.Jc)(a,u,p,h,f,x,T),Es=r.dynCall_viiiiiii=(a,u,p,h,f,x,T,z)=>(Es=r.dynCall_viiiiiii=M.Kc)(a,u,p,h,f,x,T,z),zs=r.dynCall_ji=(a,u)=>(zs=r.dynCall_ji=M.Lc)(a,u),As=r.dynCall_v=a=>(As=r.dynCall_v=M.Mc)(a),Os=r.dynCall_viiiii=(a,u,p,h,f,x)=>(Os=r.dynCall_viiiii=M.Nc)(a,u,p,h,f,x),Rs=r.dynCall_i=a=>(Rs=r.dynCall_i=M.Oc)(a),Bs=r.dynCall_fii=(a,u,p)=>(Bs=r.dynCall_fii=M.Pc)(a,u,p),Ns=r.dynCall_viiiiiiii=(a,u,p,h,f,x,T,z,R)=>(Ns=r.dynCall_viiiiiiii=M.Qc)(a,u,p,h,f,x,T,z,R),Ms=r.dynCall_viiiiiiiiii=(a,u,p,h,f,x,T,z,R,W,F)=>(Ms=r.dynCall_viiiiiiiiii=M.Rc)(a,u,p,h,f,x,T,z,R,W,F),Ds=r.dynCall_jiii=(a,u,p,h)=>(Ds=r.dynCall_jiii=M.Sc)(a,u,p,h),Us=r.dynCall_dii=(a,u,p)=>(Us=r.dynCall_dii=M.Tc)(a,u,p),Ps=r.dynCall_viiiiiiiii=(a,u,p,h,f,x,T,z,R,W)=>(Ps=r.dynCall_viiiiiiiii=M.Uc)(a,u,p,h,f,x,T,z,R,W),Ws=r.dynCall_viiiiiiiiiii=(a,u,p,h,f,x,T,z,R,W,F,J)=>(Ws=r.dynCall_viiiiiiiiiii=M.Vc)(a,u,p,h,f,x,T,z,R,W,F,J),qs=r.dynCall_iiiiii=(a,u,p,h,f,x)=>(qs=r.dynCall_iiiiii=M.Wc)(a,u,p,h,f,x),Vs=r.dynCall_iij=(a,u,p)=>(Vs=r.dynCall_iij=M.Xc)(a,u,p),Ls=r.dynCall_iiiiiiiiii=(a,u,p,h,f,x,T,z,R,W)=>(Ls=r.dynCall_iiiiiiiiii=M.Yc)(a,u,p,h,f,x,T,z,R,W),Fs=r.dynCall_iiiiiiiiiii=(a,u,p,h,f,x,T,z,R,W,F)=>(Fs=r.dynCall_iiiiiiiiiii=M.Zc)(a,u,p,h,f,x,T,z,R,W,F),Gs=r.dynCall_vij=(a,u,p)=>(Gs=r.dynCall_vij=M._c)(a,u,p),Hs=r.dynCall_iiif=(a,u,p,h)=>(Hs=r.dynCall_iiif=M.$c)(a,u,p,h),js=r.dynCall_iiij=(a,u,p,h)=>(js=r.dynCall_iiij=M.ad)(a,u,p,h),Ks=r.dynCall_fiii=(a,u,p,h)=>(Ks=r.dynCall_fiii=M.bd)(a,u,p,h),Qs=r.dynCall_viiiiiiiiiiiii=(a,u,p,h,f,x,T,z,R,W,F,J,ne,_e)=>(Qs=r.dynCall_viiiiiiiiiiiii=M.cd)(a,u,p,h,f,x,T,z,R,W,F,J,ne,_e),Zs=r.dynCall_vjiii=(a,u,p,h,f)=>(Zs=r.dynCall_vjiii=M.dd)(a,u,p,h,f),Xs=r.dynCall_vif=(a,u,p)=>(Xs=r.dynCall_vif=M.ed)(a,u,p),Js=r.dynCall_iiiiiii=(a,u,p,h,f,x,T)=>(Js=r.dynCall_iiiiiii=M.fd)(a,u,p,h,f,x,T),Ys=r.dynCall_iiiij=(a,u,p,h,f)=>(Ys=r.dynCall_iiiij=M.gd)(a,u,p,h,f),eo=r.dynCall_iiiiiiii=(a,u,p,h,f,x,T,z)=>(eo=r.dynCall_iiiiiiii=M.hd)(a,u,p,h,f,x,T,z),to=r.dynCall_viiiiiiiiiiii=(a,u,p,h,f,x,T,z,R,W,F,J,ne)=>(to=r.dynCall_viiiiiiiiiiii=M.id)(a,u,p,h,f,x,T,z,R,W,F,J,ne),ro=r.dynCall_diii=(a,u,p,h)=>(ro=r.dynCall_diii=M.jd)(a,u,p,h),io=r.dynCall_jiiii=(a,u,p,h,f)=>(io=r.dynCall_jiiii=M.kd)(a,u,p,h,f),ao=r.dynCall_viiij=(a,u,p,h,f)=>(ao=r.dynCall_viiij=M.ld)(a,u,p,h,f),no=r.dynCall_fiiii=(a,u,p,h,f)=>(no=r.dynCall_fiiii=M.md)(a,u,p,h,f),so=r.dynCall_viiif=(a,u,p,h,f)=>(so=r.dynCall_viiif=M.nd)(a,u,p,h,f),oo=r.dynCall_diiii=(a,u,p,h,f)=>(oo=r.dynCall_diiii=M.od)(a,u,p,h,f),uo=r.dynCall_viiid=(a,u,p,h,f)=>(uo=r.dynCall_viiid=M.pd)(a,u,p,h,f),lo=r.dynCall_iiiijii=(a,u,p,h,f,x,T)=>(lo=r.dynCall_iiiijii=M.qd)(a,u,p,h,f,x,T),po=r.dynCall_iiiiiij=(a,u,p,h,f,x,T)=>(po=r.dynCall_iiiiiij=M.rd)(a,u,p,h,f,x,T),co=a=>(co=M.sd)(a),ho=()=>(ho=M.td)(),fo=a=>(fo=M.ud)(a),mo=()=>(mo=M.vd)();function sg(a,u,p){var h=ie();try{xs(a,u,p)}catch(f){if(re(h),f!==f+0)throw f;ae(1,0)}}function og(a,u,p){var h=ie();try{return $s(a,u,p)}catch(f){if(re(h),f!==f+0)throw f;ae(1,0)}}function ug(a,u){var p=ie();try{vs(a,u)}catch(h){if(re(p),h!==h+0)throw h;ae(1,0)}}function lg(a,u){var p=ie();try{return bi(a,u)}catch(h){if(re(p),h!==h+0)throw h;ae(1,0)}}function dg(a,u,p,h){var f=ie();try{return Ss(a,u,p,h)}catch(x){if(re(f),x!==x+0)throw x;ae(1,0)}}function pg(a,u,p,h,f){var x=ie();try{Cs(a,u,p,h,f)}catch(T){if(re(x),T!==T+0)throw T;ae(1,0)}}function cg(a,u,p,h,f){var x=ie();try{return Ts(a,u,p,h,f)}catch(T){if(re(x),T!==T+0)throw T;ae(1,0)}}function hg(a,u,p,h){var f=ie();try{ks(a,u,p,h)}catch(x){if(re(f),x!==x+0)throw x;ae(1,0)}}function fg(a,u,p,h,f,x,T){var z=ie();try{return Js(a,u,p,h,f,x,T)}catch(R){if(re(z),R!==R+0)throw R;ae(1,0)}}function mg(a){var u=ie();try{As(a)}catch(p){if(re(u),p!==p+0)throw p;ae(1,0)}}function gg(a,u,p){var h=ie();try{return Vs(a,u,p)}catch(f){if(re(h),f!==f+0)throw f;ae(1,0)}}function yg(a,u,p,h,f,x){var T=ie();try{Os(a,u,p,h,f,x)}catch(z){if(re(T),z!==z+0)throw z;ae(1,0)}}function _g(a,u,p){var h=ie();try{Gs(a,u,p)}catch(f){if(re(h),f!==f+0)throw f;ae(1,0)}}function wg(a,u,p,h,f,x,T){var z=ie();try{Is(a,u,p,h,f,x,T)}catch(R){if(re(z),R!==R+0)throw R;ae(1,0)}}function bg(a,u,p,h,f,x,T,z){var R=ie();try{Es(a,u,p,h,f,x,T,z)}catch(W){if(re(R),W!==W+0)throw W;ae(1,0)}}function $g(a,u,p,h,f,x){var T=ie();try{return qs(a,u,p,h,f,x)}catch(z){if(re(T),z!==z+0)throw z;ae(1,0)}}function vg(a,u,p,h,f,x,T,z){var R=ie();try{return eo(a,u,p,h,f,x,T,z)}catch(W){if(re(R),W!==W+0)throw W;ae(1,0)}}function xg(a,u,p,h,f,x,T,z,R,W){var F=ie();try{Ps(a,u,p,h,f,x,T,z,R,W)}catch(J){if(re(F),J!==J+0)throw J;ae(1,0)}}function Sg(a,u,p,h,f,x,T,z,R){var W=ie();try{Ns(a,u,p,h,f,x,T,z,R)}catch(F){if(re(W),F!==F+0)throw F;ae(1,0)}}function kg(a){var u=ie();try{return Rs(a)}catch(p){if(re(u),p!==p+0)throw p;ae(1,0)}}function Tg(a,u,p,h,f,x,T,z,R,W){var F=ie();try{return Ls(a,u,p,h,f,x,T,z,R,W)}catch(J){if(re(F),J!==J+0)throw J;ae(1,0)}}function Cg(a,u,p){var h=ie();try{return Bs(a,u,p)}catch(f){if(re(h),f!==f+0)throw f;ae(1,0)}}function Ig(a,u,p,h){var f=ie();try{return Ds(a,u,p,h)}catch(x){if(re(f),x!==x+0)throw x;return ae(1,0),0n}}function Eg(a,u,p){var h=ie();try{return Us(a,u,p)}catch(f){if(re(h),f!==f+0)throw f;ae(1,0)}}function zg(a,u,p,h,f,x,T,z,R,W,F,J){var ne=ie();try{Ws(a,u,p,h,f,x,T,z,R,W,F,J)}catch(_e){if(re(ne),_e!==_e+0)throw _e;ae(1,0)}}function Ag(a,u,p,h,f,x,T,z,R,W,F){var J=ie();try{Ms(a,u,p,h,f,x,T,z,R,W,F)}catch(ne){if(re(J),ne!==ne+0)throw ne;ae(1,0)}}function Og(a,u,p,h,f,x,T,z,R,W,F){var J=ie();try{return Fs(a,u,p,h,f,x,T,z,R,W,F)}catch(ne){if(re(J),ne!==ne+0)throw ne;ae(1,0)}}function Rg(a,u,p,h){var f=ie();try{return Hs(a,u,p,h)}catch(x){if(re(f),x!==x+0)throw x;ae(1,0)}}function Bg(a,u,p,h){var f=ie();try{return js(a,u,p,h)}catch(x){if(re(f),x!==x+0)throw x;ae(1,0)}}function Ng(a,u,p,h){var f=ie();try{return Ks(a,u,p,h)}catch(x){if(re(f),x!==x+0)throw x;ae(1,0)}}function Mg(a,u,p,h,f,x,T,z,R,W,F,J,ne,_e){var qe=ie();try{Qs(a,u,p,h,f,x,T,z,R,W,F,J,ne,_e)}catch(Qt){if(re(qe),Qt!==Qt+0)throw Qt;ae(1,0)}}function Dg(a,u,p,h,f){var x=ie();try{Zs(a,u,p,h,f)}catch(T){if(re(x),T!==T+0)throw T;ae(1,0)}}function Ug(a,u,p){var h=ie();try{Xs(a,u,p)}catch(f){if(re(h),f!==f+0)throw f;ae(1,0)}}function Pg(a,u){var p=ie();try{return zs(a,u)}catch(h){if(re(p),h!==h+0)throw h;return ae(1,0),0n}}function Wg(a,u,p,h,f){var x=ie();try{return Ys(a,u,p,h,f)}catch(T){if(re(x),T!==T+0)throw T;ae(1,0)}}function qg(a,u,p,h,f,x,T,z,R,W,F,J,ne){var _e=ie();try{to(a,u,p,h,f,x,T,z,R,W,F,J,ne)}catch(qe){if(re(_e),qe!==qe+0)throw qe;ae(1,0)}}function Vg(a,u,p,h){var f=ie();try{return ro(a,u,p,h)}catch(x){if(re(f),x!==x+0)throw x;ae(1,0)}}function Lg(a,u,p,h,f){var x=ie();try{return io(a,u,p,h,f)}catch(T){if(re(x),T!==T+0)throw T;return ae(1,0),0n}}function Fg(a,u,p,h,f){var x=ie();try{ao(a,u,p,h,f)}catch(T){if(re(x),T!==T+0)throw T;ae(1,0)}}function Gg(a,u,p,h,f){var x=ie();try{return no(a,u,p,h,f)}catch(T){if(re(x),T!==T+0)throw T;ae(1,0)}}function Hg(a,u,p,h,f){var x=ie();try{so(a,u,p,h,f)}catch(T){if(re(x),T!==T+0)throw T;ae(1,0)}}function jg(a,u,p,h,f){var x=ie();try{return oo(a,u,p,h,f)}catch(T){if(re(x),T!==T+0)throw T;ae(1,0)}}function Kg(a,u,p,h,f){var x=ie();try{uo(a,u,p,h,f)}catch(T){if(re(x),T!==T+0)throw T;ae(1,0)}}function Qg(a,u,p,h,f,x,T){var z=ie();try{return lo(a,u,p,h,f,x,T)}catch(R){if(re(z),R!==R+0)throw R;ae(1,0)}}function Zg(a,u,p,h,f,x,T){var z=ie();try{return po(a,u,p,h,f,x,T)}catch(R){if(re(z),R!==R+0)throw R;ae(1,0)}}return r.stackSave=()=>ie(),r.stackRestore=a=>re(a),r.stackAlloc=a=>wi(a),r.setValue=function(a,u,p="i8"){switch(p.endsWith("*")&&(p="*"),p){case"i1":case"i8":j()[a>>>0]=u;break;case"i16":U()[a>>>1>>>0]=u;break;case"i32":B()[a>>>2>>>0]=u;break;case"i64":P[a>>>3]=BigInt(u);break;case"float":ve()[a>>>2>>>0]=u;break;case"double":Be()[a>>>3>>>0]=u;break;case"*":Y()[a>>>2>>>0]=u;break;default:nt(`invalid type for setValue: ${p}`)}},r.getValue=function(a,u="i8"){switch(u.endsWith("*")&&(u="*"),u){case"i1":case"i8":return j()[a>>>0];case"i16":return U()[a>>>1>>>0];case"i32":return B()[a>>>2>>>0];case"i64":return P[a>>>3];case"float":return ve()[a>>>2>>>0];case"double":return Be()[a>>>3>>>0];case"*":return Y()[a>>>2>>>0];default:nt(`invalid type for getValue: ${u}`)}},r.UTF8ToString=Se,r.stringToUTF8=Mt,r.lengthBytesUTF8=kn,(function a(){if(0<Ft)Gt=a;else if(l)t(r),hr();else{for(;0<ei.length;)ei.shift()(r);0<Ft?Gt=a:(r.calledRun=!0,le||(hr(),t(r)))}})(),r.PTR_SIZE=4,n}),mp=Ci,yo=globalThis.self?.name?.startsWith("em-pthread"),yo&&Ci()}),Ii,_o,Me,gp,Tr,wo,bo,Ei,$o,zi,yp,Ai,_p,Ra=q(()=>{"use strict";Oa(),Ii=typeof location>"u"?void 0:location.origin,_o=()=>rt.url?.startsWith("file:")?new URL(new URL("ort.bundle.min.mjs",rt.url).href,Ii).href:rt.url,Me=_o(),gp=()=>{if(Me&&!Me.startsWith("blob:"))return Me.substring(0,Me.lastIndexOf("/")+1)},Tr=(e,t)=>{try{let i=t??Me;return(i?new URL(e,i):new URL(e)).origin===Ii}catch{return!1}},wo=(e,t)=>{let i=t??Me;try{return(i?new URL(e,i):new URL(e)).href}catch{return}},bo=(e,t)=>`${t??"./"}${e}`,Ei=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},$o=async e=>(await import(e)).default,zi=(gy(),qr(cp)).default,yp=async()=>{if(!Me)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Tr(Me))return[void 0,zi()];let e=await Ei(Me);return[e,zi(e)]},Ai=(yy(),qr(fp)).default,_p=async(e,t,i)=>{if(!e&&!t&&Ai&&Me&&Tr(Me))return[void 0,Ai];{let r="ort-wasm-simd-threaded.jsep.mjs",n=e??wo(r,t),o=i&&n&&!Tr(n,t),s=o?await Ei(n):n??bo(r,t);return[o?s:void 0,await $o(s)]}}}),Oi,Cr,Xt,Ri,vo,xo,Ba,ke,Rt=q(()=>{"use strict";Ra(),Cr=!1,Xt=!1,Ri=!1,vo=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},xo=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Ba=async e=>{if(Cr)return Promise.resolve();if(Xt)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ri)throw new Error("previous call to 'initializeWebAssembly()' failed.");Xt=!0;let t=e.initTimeout,i=e.numThreads;if(!xo())throw new Error("WebAssembly SIMD is not supported in the current environment.");let r=vo();i>1&&!r&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+i+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=i=1);let n=e.wasmPaths,o=typeof n=="string"?n:void 0,s=n?.mjs,l=s?.href??s,d=n?.wasm,c=d?.href??d,m=e.wasmBinary,[g,y]=await _p(l,o,i>1),w=!1,_=[];if(t>0&&_.push(new Promise($=>{setTimeout(()=>{w=!0,$()},t)})),_.push(new Promise(($,S)=>{let v={numThreads:i};if(m)v.wasmBinary=m;else if(c||o)v.locateFile=b=>c??o+b;else if(l&&l.indexOf("blob:")!==0)v.locateFile=b=>new URL(b,l).href;else if(g){let b=gp();b&&(v.locateFile=k=>b+k)}y(v).then(b=>{Xt=!1,Cr=!0,Oi=b,$(),g&&URL.revokeObjectURL(g)},b=>{Xt=!1,Ri=!0,S(b)})})),await Promise.race(_),w)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},ke=()=>{if(Cr&&Oi)return Oi;throw new Error("WebAssembly is not initialized yet.")}}),Ee,Lr,me,Na=q(()=>{"use strict";Rt(),Ee=(e,t)=>{let i=ke(),r=i.lengthBytesUTF8(e)+1,n=i._malloc(r);return i.stringToUTF8(e,n,r),t.push(n),n},Lr=(e,t,i,r)=>{if(typeof e=="object"&&e!==null){if(i.has(e))throw new Error("Circular reference in options");i.add(e)}Object.entries(e).forEach(([n,o])=>{let s=t?t+n:n;if(typeof o=="object")Lr(o,s+".",i,r);else if(typeof o=="string"||typeof o=="number")r(s,o.toString());else if(typeof o=="boolean")r(s,o?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof o}`)})},me=e=>{let t=ke(),i=t.stackSave();try{let r=t.PTR_SIZE,n=t.stackAlloc(2*r);t._OrtGetLastError(n,n+r);let o=Number(t.getValue(n,r===4?"i32":"i64")),s=t.getValue(n+r,"*"),l=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${o}, ERROR_MESSAGE: ${l}`)}finally{t.stackRestore(i)}}}),wp,_y=q(()=>{"use strict";Rt(),Na(),wp=e=>{let t=ke(),i=0,r=[],n=e||{};try{if(e?.logSeverityLevel===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(n.terminate=!1);let o=0;return e?.tag!==void 0&&(o=Ee(e.tag,r)),i=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,o),i===0&&me("Can't create run options."),e?.extra!==void 0&&Lr(e.extra,"",new WeakSet,(s,l)=>{let d=Ee(s,r),c=Ee(l,r);t._OrtAddRunConfigEntry(i,d,c)!==0&&me(`Can't set a run config entry: ${s} - ${l}.`)}),[i,r]}catch(o){throw i!==0&&t._OrtReleaseRunOptions(i),r.forEach(s=>t._free(s)),o}}}),So,ko,To,Co,bp,wy=q(()=>{"use strict";Rt(),Na(),So=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},ko=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},To=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(i=>(typeof i=="string"?i:i.name)==="webgpu")&&(e.enableMemPattern=!1)},Co=(e,t,i)=>{for(let r of t){let n=typeof r=="string"?r:r.name;switch(n){case"webnn":if(n="WEBNN",typeof r!="string"){let s=r?.deviceType;if(s){let l=Ee("deviceType",i),d=Ee(s,i);ke()._OrtAddSessionConfigEntry(e,l,d)!==0&&me(`Can't set a session config entry: 'deviceType' - ${s}.`)}}break;case"webgpu":if(n="JS",typeof r!="string"){let s=r;if(s?.preferredLayout){if(s.preferredLayout!=="NCHW"&&s.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${s.preferredLayout}`);let l=Ee("preferredLayout",i),d=Ee(s.preferredLayout,i);ke()._OrtAddSessionConfigEntry(e,l,d)!==0&&me(`Can't set a session config entry: 'preferredLayout' - ${s.preferredLayout}.`)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${n}`)}let o=Ee(n,i);ke()._OrtAppendExecutionProvider(e,o)!==0&&me(`Can't append execution provider: ${n}.`)}},bp=e=>{let t=ke(),i=0,r=[],n=e||{};To(n);try{let o=So(n.graphOptimizationLevel??"all"),s=ko(n.executionMode??"sequential"),l=typeof n.logId=="string"?Ee(n.logId,r):0,d=n.logSeverityLevel??2;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log serverity level is not valid: ${d}`);let c=n.logVerbosityLevel??0;if(!Number.isInteger(c)||c<0||c>4)throw new Error(`log verbosity level is not valid: ${c}`);let m=typeof n.optimizedModelFilePath=="string"?Ee(n.optimizedModelFilePath,r):0;if(i=t._OrtCreateSessionOptions(o,!!n.enableCpuMemArena,!!n.enableMemPattern,s,!!n.enableProfiling,0,l,d,c,m),i===0&&me("Can't create session options."),n.executionProviders&&Co(i,n.executionProviders,r),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);let g=Ee("enableGraphCapture",r),y=Ee(n.enableGraphCapture.toString(),r);t._OrtAddSessionConfigEntry(i,g,y)!==0&&me(`Can't set a session config entry: 'enableGraphCapture' - ${n.enableGraphCapture}.`)}if(n.freeDimensionOverrides)for(let[g,y]of Object.entries(n.freeDimensionOverrides)){if(typeof g!="string")throw new Error(`free dimension override name must be a string: ${g}`);if(typeof y!="number"||!Number.isInteger(y)||y<0)throw new Error(`free dimension override value must be a non-negative integer: ${y}`);let w=Ee(g,r);t._OrtAddFreeDimensionOverride(i,w,y)!==0&&me(`Can't set a free dimension override: ${g} - ${y}.`)}return n.extra!==void 0&&Lr(n.extra,"",new WeakSet,(g,y)=>{let w=Ee(g,r),_=Ee(y,r);t._OrtAddSessionConfigEntry(i,w,_)!==0&&me(`Can't set a session config entry: ${g} - ${y}.`)}),[i,r]}catch(o){throw i!==0&&t._OrtReleaseSessionOptions(i)!==0&&me("Can't release session options."),r.forEach(s=>t._free(s)),o}}}),Pt,It,Et,Ma,Fr,Da,Ua,ga,te=q(()=>{"use strict";Pt=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},It=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Et=(e,t)=>{let i=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t=="number"?t:t.reduce((n,o)=>n*o,1);return i>0?Math.ceil(r*i):void 0},Ma=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Fr=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Da=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ua=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ga=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Pa,$p=q(()=>{"use strict";Oa(),Pa=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let i=t.headers.get("Content-Length"),r=i?parseInt(i,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),o;try{o=new ArrayBuffer(r)}catch(l){if(l instanceof RangeError){let d=Math.ceil(r/65536);o=new WebAssembly.Memory({initial:d,maximum:d}).buffer}else throw l}let s=0;for(;;){let{done:l,value:d}=await n.read();if(l)break;let c=d.byteLength;new Uint8Array(o,s,c).set(d),s+=c}return new Uint8Array(o,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Io,Eo,zo,Ao,Wa,Oo,he,lt=q(()=>{"use strict";te(),Io=["V","I","W","E","F"],Eo=(e,t)=>{console.log(`[${Io[e]},${new Date().toISOString()}]${t}`)},Wa=(e,t)=>{zo=e,Ao=t},Oo=(e,t)=>{let i=Fr(e),r=Fr(zo);i>=r&&Eo(i,typeof t=="function"?t():t)},he=(...e)=>{Ao&&Oo(...e)}}),qa,vp=q(()=>{"use strict";te(),qa=(e,t)=>new(Ma(t))(e)}),Va=q(()=>{"use strict"}),Bi,Ir,Er,Ro,Bo,Ni,ya,No,xp,by=q(()=>{"use strict";lt(),Va(),Bi=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Ir=[],Er=e=>Math.ceil(Number(e)/16)*16,Ro=e=>{for(let t=0;t<Ir.length;t++){let i=Ir[t];if(e<=i)return i}return Math.ceil(e/16)*16},Bo=1,Ni=()=>Bo++,ya=async(e,t,i,r)=>{let n=Er(i),o=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,o,0,n),e.flush(),await o.mapAsync(GPUMapMode.READ);let l=o.getMappedRange();if(r){let d=r();return d.set(new Uint8Array(l,0,i)),d}else return new Uint8Array(l.slice(0,i))}finally{o.destroy()}},No=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Bi)Ir.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let i=t.buffer,r=t.byteOffset,n=t.byteLength,o=Er(n),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${n}`);let l=this.backend.device.createBuffer({mappedAtCreation:!0,size:o,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),d=l.getMappedRange();new Uint8Array(d).set(new Uint8Array(i,r,n)),l.unmap();let c=this.backend.device.createCommandEncoder();c.copyBufferToBuffer(l,0,s.gpuData.buffer,0,o),this.backend.device.queue.submit([c.finish()]),l.destroy(),he("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let i=this.storageCache.get(e);if(!i)throw new Error("source gpu data for memcpy does not exist");let r=this.storageCache.get(t);if(!r)throw new Error("destination gpu data for memcpy does not exist");if(i.originalSize!==r.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=Er(i.originalSize),o=this.backend.getCommandEncoder();this.backend.endComputePass(),o.copyBufferToBuffer(i.gpuData.buffer,0,r.gpuData.buffer,0,n)}registerExternalBuffer(e,t,i){let r;if(i){if(r=i[0],e===i[1])return he("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=Ni();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),he("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),he("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let i=Ro(e),r,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,o=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||o){let l=(n?this.freeBuffers:this.freeUniformBuffers).get(i);l?l.length>0?r=l.pop():r=this.backend.device.createBuffer({size:i,usage:t}):r=this.backend.device.createBuffer({size:i,usage:t})}else r=this.backend.device.createBuffer({size:i,usage:t});let s={id:Ni(),type:0,buffer:r};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),he("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,i=this.storageCache.get(t);if(!i){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return he("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${i.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(i.gpuData.buffer),i.originalSize}async download(e,t){let i=this.storageCache.get(Number(e));if(!i)throw new Error("data does not exist");await ya(this.backend,i.gpuData.buffer,i.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Bi.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let i=this.freeBuffers.get(e.size)||[];t===void 0||i.length>=t?e.destroy():i.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let i=this.freeUniformBuffers.get(e.size)||[];t===void 0||i.length>=t?e.destroy():i.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(i=>{i.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(he("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(i=>{i.gpuData.buffer.destroy()}),this.storageCache=new Map)}},xp=(...e)=>new No(...e)}),Mo,ge,$e=q(()=>{"use strict";Mo=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},ge=e=>new Mo(e)}),Do,Vt,O,Gr,Sp,kp,Tp,se=q(()=>{"use strict";Do=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Vt=class{static calcShape(e,t,i=!1){let r=e.length,n=t.length;if(r===0)return t;if(n===0)return e;let o=Math.max(e.length,t.length),s=new Array(o);if(i){if(r<2||n<2)return;let l=Do.calcMatMulShape([e[r-2],e[r-1]],[t[n-2],t[n-1]]);if(l===void 0)return;[s[o-2],s[o-1]]=l}for(let l=i?3:1;l<=o;l++){let d=r-l<0?1:e[r-l],c=n-l<0?1:t[n-l];if(d!==c&&d>1&&c>1)return;let m=Math.max(d,c);if(d&&c)s[o-l]=Math.max(d,c);else{if(m>1)return;s[o-l]=0}}return s}static isValidBroadcast(e,t){let i=e.length,r=t.length;if(i>r)return!1;for(let n=1;n<=i;n++)if(e[i-n]!==1&&e[i-n]!==t[r-n])return!1;return!0}},O=class Pr{static size(t){return Pr.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,i=4){let r=t.length;if(r===0)return[];let n=new Array(r),o=r-1;for(;o>=0;){if(t[o]%i===0){n[o]=t[o]/i;break}if(i%t[o]!==0)throw new Error("cannot convert shape");n[o]=1,i/=t[o],o--}for(o--;o>=0;o--)n[o]=t[o];return n}static sizeFromDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Pr.getSizeFromDimensionRange(t,i,t.length)}static sizeToDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Pr.getSizeFromDimensionRange(t,0,i)}static getSizeFromDimensionRange(t,i,r){let n=1;for(let o=i;o<r;o++){if(t[o]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[o])}return n}static computeStrides(t){let i=t.length;if(i===0)return[];if(i===1)return[1];let r=new Array(i);r[i-1]=1,r[i-2]=t[i-1];for(let n=i-3;n>=0;--n)r[n]=r[n+1]*t[n+1];return r}static normalizeAxis(t,i){if(t<-i&&t>=i)throw new Error("unsupported axis for this operation.");return t<0?t+i:t}static normalizeAxes(t,i){return t.map(r=>this.normalizeAxis(r,i??t.length))}static sortBasedOnPerm(t,i){return i?i.map(r=>t[r]):t.slice().reverse()}static padShape(t,i){let r=t.length;return t.map((n,o)=>n+i[o]+i[o+r])}static areEqual(t,i){return t.length!==i.length?!1:t.every((r,n)=>r===i[n])}},Gr=class sr{static adjustPoolAttributes(t,i,r,n,o,s){if(!t&&r.length!==i.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let l=0;l<i.length-2;l++)l>=r.length?r.push(i[l+2]):r[l]=i[l+2];for(let l=0;l<r.length;l++)if(l<n.length){if(n[l]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let l=0;l<r.length;l++)if(l<o.length){if(o[l]<0)throw new Error("dilations should be greater than or equal to 1")}else o.push(1);for(let l=0;l<r.length*2;l++)if(l<s.length){if(s[l]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let l=0;l<r.length;l++){if(r[l]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[l]>=r[l]||s[l+r.length]>=r[l])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,i,r,n,o,s,l){if(l){if(o.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let d=0;d<t.length-2;d++)sr.adjustPadAndReturnShape(t[d+(s?1:2)],i[d],r[d],n[d],o,d,d+t.length-2,l)}}static computePoolOutputShape(t,i,r,n,o,s,l){if(i.length<=0)throw new Error("input shape must be of size greater than 0");let d=[i[0],i[1]];return sr.computeShapeHelper(t,i,d,r,n,o,s,l),d}static computeConvOutputShape(t,i,r,n,o,s,l){if(t.length<=0||i.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let d=[t[0],i[0]];return sr.computeShapeHelper(!1,t,d,r,n,o,s,l),d}static computeShapeHelper(t,i,r,n,o,s,l,d){if(t)for(let c=0;c<i.length-2;c++)r.push(1);else for(let c=0;c<i.length-2;c++)r.push(sr.adjustPadAndReturnShape(i[c+2],n[c],o[c],s[c],l,c,c+i.length-2,d))}static adjustPadAndReturnShape(t,i,r,n,o,s,l,d){let c=r*(n-1)+1;if(d&&d!=="NOTSET")switch(d){case"VALID":return o[s]=0,o[l]=0,Math.floor((t-c)/i+1);case"SAME_LOWER":case"SAME_UPPER":if(r!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let m=((t+i-1)/i-1)*i+n-t;return o[s]=Math.floor(d==="SAME_LOWER"?(m+1)/2:m/2),o[l]=m-o[s],Math.floor((t+m-n)/i+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+o[s]+o[l]-c)/i+1)}},Sp=class{static getShapeOfGemmResult(e,t,i,r,n){if(e.length!==2||i.length!==2)throw new Error("shape need to be of size 2");let o,s,l;t?(o=e[1],s=e[0]):(o=e[0],s=e[1]);let d=-1;if(r?(l=i[0],d=1):(l=i[1],d=0),i[d]!==s)throw new Error("dimension mismatch");if(o<=0||l<=0||s<=0)throw new Error("invalid shape specified");if(n&&!Vt.isValidBroadcast(n,[o,l]))throw new Error("gemm: invalid bias shape for broadcast");return[o,l,s]}},kp=-34028234663852886e22,Tp=34028234663852886e22}),Lt,zr,Te,ze,Z,be,_a,qt,wt,Q,Jt,N,K,Cp,La,Uo,Ip,ue=q(()=>{"use strict";te(),se(),Lt=64,zr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Te=(e,t=1)=>{let i=zr(e,t);return typeof i=="string"?i:i[0]},ze=(e,t=1)=>{let i=zr(e,t);return typeof i=="string"?i:i[1]},Z=(...e)=>{let t=[];return e.forEach(i=>{i.length!==0&&t.push({type:12,data:i},{type:12,data:O.computeStrides(i)})}),t},be=e=>e%4===0?4:e%2===0?2:1,_a=(e="f32",t,i="0")=>!t||t===1?`${e}(${i})`:`vec${t}<${e}>(${i})`,qt=(e,t,i)=>e==="f32"?i:t===1?`f32(${i})`:`vec${t}<f32>(${i})`,wt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,Q=(e,t,i,r)=>e.startsWith("uniforms.")&&i>4?typeof t=="string"?r==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:i>1?`${e}[${t}]`:e,Jt=(e,t,i,r,n)=>{let o=typeof i=="number",s=o?i:i.length,l=[...new Array(s).keys()],d=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,c=zr(t,n),m=typeof c=="string"?c:c[1],g=typeof c=="string"?c:c[0],y={indices:d,value:m,storage:g,tensor:t},w=U=>typeof U=="string"?U:`${U}u`,_={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},$=o?"uniforms.":"",S=`${$}${e}_shape`,v=`${$}${e}_strides`,b="";for(let U=0;U<s-1;U++)b+=`
    let dim${U} = current / ${Q(v,U,s)};
    let rest${U} = current % ${Q(v,U,s)};
    indices[${U}] = dim${U};
    current = rest${U};
    `;b+=`indices[${s-1}] = current;`;let k=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${y.indices} {
    var indices: ${y.indices};
    var current = offset;
    ${b}
    return indices;
  }`,C=U=>(_.offsetToIndices=!0,s<2?U:`o2i_${e}(${U})`),I=[];if(s>=2)for(let U=s-1;U>=0;U--)I.push(`${Q(v,U,s)} * (indices[${U}])`);let E=s<2?"":`
  fn i2o_${e}(indices: ${y.indices}) -> u32 {
    return ${I.join("+")};
  }`,A=U=>(_.indicesToOffset=!0,s<2?U:`i2o_${e}(${U})`),D=(...U)=>s===0?"0u":`${y.indices}(${U.map(w).join(",")})`,V=(U,L)=>s<2?`${U}`:`${Q(U,L,s)}`,G=(U,L,B)=>s<2?`${U}=${B};`:`${Q(U,L,s)}=${B};`,X={},ee=(U,L)=>{_.broadcastedIndicesToOffset=!0;let B=`${L.name}broadcastedIndicesTo${e}Offset`;if(B in X)return`${B}(${U})`;let Y=[];for(let ve=s-1;ve>=0;ve--){let Be=L.indicesGet("outputIndices",ve+L.rank-s);Y.push(`${V(v,ve)} * (${Be} % ${V(S,ve)})`)}return X[B]=`fn ${B}(outputIndices: ${L.type.indices}) -> u32 {
             return ${Y.length>0?Y.join("+"):"0u"};
           }`,`${B}(${U})`},P=(U,L)=>(()=>{if(y.storage===y.value)return`${e}[${U}]=${L};`;if(y.storage==="vec2<u32>"&&y.value==="i32")return`${e}[${U}]=vec2<u32>(u32(${L}), select(0u, 0xFFFFFFFFu, ${L} < 0));`;if(y.storage==="vec2<u32>"&&y.value==="u32")return`${e}[${U}]=vec2<u32>(u32(${L}), 0u);`;if(y.storage==="u32"&&y.value==="vec4<bool>")return`${e}[${U}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${L}));`;throw new Error(`not supported combination of storage type ${y.storage} and value type ${y.value} yet`)})(),oe=U=>(()=>{if(y.storage===y.value)return`${e}[${U}]`;if(y.storage==="vec2<u32>"&&y.value==="i32")return`i32(${e}[${U}].x)`;if(y.storage==="vec2<u32>"&&y.value==="u32")return`u32(${e}[${U}].x)`;if(y.storage==="u32"&&y.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${U}] & 0xFFu), bool(${e}[${U}] & 0xFF00u), bool(${e}[${U}] & 0xFF0000u), bool(${e}[${U}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${y.storage} and value type ${y.value} yet`)})(),de=s<2?"":`
  fn get_${e}ByIndices(indices: ${y.indices}) -> ${m} {
    return ${oe(`i2o_${e}(indices)`)};
  }`,H=s<2?"":(()=>{let U=l.map(B=>`d${B}: u32`).join(", "),L=l.map(B=>`d${B}`).join(", ");return`
  fn get_${e}(${U}) -> ${m} {
    return get_${e}ByIndices(${D(L)});
  }`})(),le=(...U)=>{if(U.length!==s)throw new Error(`indices length must be ${s}`);let L=U.map(w).join(",");return s===0?oe("0u"):s===1?oe(L[0]):(_.get=!0,_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}(${L})`)},pe=U=>s<2?oe(U):(_.getByIndices=!0,_.indicesToOffset=!0,`get_${e}ByIndices(${U})`),j=s<2?"":`
  fn set_${e}ByIndices(indices: ${y.indices}, value: ${m}) {
    ${P(`i2o_${e}(indices)`,"value")}
  }`,ce=s<2?"":(()=>{let U=l.map(B=>`d${B}: u32`).join(", "),L=l.map(B=>`d${B}`).join(", ");return`
  fn set_${e}(${U}, value: ${m}) {
    set_${e}ByIndices(${D(L)}, value);
  }`})();return{impl:()=>{let U=[],L=!1;return _.offsetToIndices&&(U.push(k),L=!0),_.indicesToOffset&&(U.push(E),L=!0),_.broadcastedIndicesToOffset&&(Object.values(X).forEach(B=>U.push(B)),L=!0),_.set&&(U.push(ce),L=!0),_.setByIndices&&(U.push(j),L=!0),_.get&&(U.push(H),L=!0),_.getByIndices&&(U.push(de),L=!0),!o&&L&&U.unshift(`const ${S} = ${y.indices}(${i.join(",")});`,`const ${v} = ${y.indices}(${O.computeStrides(i).join(",")});`),U.join(`
`)},type:y,offsetToIndices:C,indicesToOffset:A,broadcastedIndicesToOffset:ee,indices:D,indicesGet:V,indicesSet:G,set:(...U)=>{if(U.length!==s+1)throw new Error(`indices length must be ${s}`);let L=U[s];if(typeof L!="string")throw new Error("value must be string");let B=U.slice(0,s).map(w).join(",");return s===0?P("0u",L):s===1?P(B[0],L):(_.set=!0,_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}(${B}, ${L})`)},setByOffset:P,setByIndices:(U,L)=>s<2?P(U,L):(_.setByIndices=!0,_.indicesToOffset=!0,`set_${e}ByIndices(${U}, ${L});`),get:le,getByOffset:oe,getByIndices:pe,usage:r,name:e,strides:v,shape:S,rank:s}},N=(e,t,i,r=1)=>Jt(e,t,i,"input",r),K=(e,t,i,r=1)=>Jt(e,t,i,"output",r),Cp=(e,t,i)=>Jt(e,t,i,"atomicOutput",1),La=(e,t,i,r=1)=>Jt(e,t,i,"internal",r),Uo=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Lt){let t=typeof e=="number"?e:e[0],i=typeof e=="number"?1:e[1],r=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||i>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${i}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*i*r>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${i}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,o=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*i*r}u + local_idx;`;return`@compute @workgroup_size(${t}, ${i}, ${r})
  fn main(${o}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let i=e.usage==="input"?"read":"read_write",r=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${i}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,i=1){return this.uniforms.push({name:e,type:t,length:i}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:i,length:r}of this.uniforms)if(r&&r>4)i==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${i}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${i}>, ${Math.ceil(r/4)}>`);else{let n=r==null||r===1?i:`vec${r}<${i}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Ip=(e,t)=>new Uo(e,t)}),Po,Mi,Wo,qo,Vo,Lo,Pe,Ep,zp,bt=q(()=>{"use strict";te(),se(),$e(),ue(),Po=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Mi=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Wo=(e,t)=>O.sortBasedOnPerm(e,Mi(e.length,t)),qo=(e,t,i,r)=>{let n=`fn perm(i: ${r.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`;for(let o=0;o<t;++o)n+=`a[${e[o]}]=i[${o}];`;return n+="return a;}"},Vo=(e,t)=>{let i=[],r=[];for(let n=0;n<e.length;++n)e[n]!==1&&i.push(e[n]),e[t[n]]!==1&&r.push(t[n]);return{newShape:i,newPerm:r}},Lo=(e,t)=>{let i=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<i)return!1;i=e[r]}return!0},Pe=(e,t)=>{let i=e.dataType,r=e.dims.length,n=Mi(r,t),o=Wo(e.dims,n),s=e.dims,l=o,d=r<2||Lo(n,e.dims),c;if(d)return c=_=>{let $=N("input",i,s,4),S=K("output",i,l,4);return`
  ${_.registerUniform("output_size","u32").declareVariables($,S)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let _=O.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64/4)},programUniforms:[{type:12,data:Math.ceil(_/4)}]}},getShaderSource:c};let{newShape:m,newPerm:g}=Vo(e.dims,n),y=O.areEqual(g,[2,3,1]),w=O.areEqual(g,[3,1,2]);if(m.length===2||y||w){s=y?[m[0],m[1]*m[2]]:w?[m[0]*m[1],m[2]]:m,l=[s[1],s[0]];let _=16;return c=$=>{let S=N("a",i,s.length),v=K("output",i,l.length);return`
  ${$.registerUniform("output_size","u32").declareVariables(S,v)}
  var<workgroup> tile : array<array<${v.type.value}, ${_+1}>, ${_}>;
  ${$.mainStart([_,_,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${_} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${_}u + local_id.x;
    let input_row = workgroup_id_x * ${_}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${_}u + local_id.x;
    let output_row = workgroup_id_y * ${_}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${v.setByIndices(`${v.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let $=O.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(l[1]/_),y:Math.ceil(l[0]/_)},programUniforms:[{type:12,data:$},...Z(s,l)]}},getShaderSource:c}}return c=_=>{let $=N("a",i,s.length),S=K("output",i,l.length);return`
  ${_.registerUniform("output_size","u32").declareVariables($,S)}

  ${qo(n,r,$,S)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",$.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let _=O.size(o);return{outputs:[{dims:o,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...Z(s,l)]}},getShaderSource:c}},Ep=(e,t)=>{Po(e.inputs,t.perm),e.compute(Pe(e.inputs[0],t.perm))},zp=e=>ge({perm:e.perm})}),Fo,Go,Ho,jo,Ko,Qo,Zo,Xo,Jo,Yo,Fe,Ap,Op,Rp,Bp,Np,Mp,Dp,Up,Pp,Wp,$y=q(()=>{"use strict";te(),se(),ue(),Fa(),bt(),Fo={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Go={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Ho={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},jo={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Ko=(e,t)=>{let i=[];for(let r=t-e;r<t;++r)i.push(r);return i},Qo=(e,t)=>{let i=[],r=e.length;for(let o=0;o<r;o++)t.indexOf(o)===-1&&i.push(e[o]);let n=t.map(o=>e[o]);return[i,n]},Zo=(e,t)=>{let i=e.length+t.length,r=[],n=0;for(let o=0;o<i;o++)t.indexOf(o)===-1?r.push(e[n++]):r.push(1);return r},Xo=(e,t)=>{for(let i=0;i<e.length;++i)if(e[e.length-i-1]!==t-1-i)return!1;return!0},Jo=(e,t)=>{let i=[];if(!Xo(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&i.push(r);e.forEach(r=>i.push(r))}return i},Yo=(e,t,i,r,n,o,s)=>{let l=i[0].dims,d=O.size(o),c=O.size(s),m=N("_A",i[0].dataType,l),g=K("output",n,o),y=64;d===1&&(y=256);let w=`
          var<workgroup> aBestValues : array<f32, ${y}>;
       `,_=$=>`
        ${$.registerUniform("reduceSize","u32").declareVariables(m,g)}
        ${w}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${$.mainStart(y)}

          let outputIndex = global_idx / ${y};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Ho[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${y}) {
           let candidate = f32(${m.getByOffset("offset + k")});
           bestValue = ${Fo[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${y}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Go[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${g.setByOffset("outputIndex",`${r==="mean"?`${g.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${g.type.storage}(${jo[r]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${y}`,inputDependencies:["type"]},getShaderSource:_,getRunData:()=>({outputs:[{dims:o,dataType:n}],dispatchGroup:{x:d},programUniforms:[{type:12,data:c}]})}},Fe=(e,t,i,r)=>{let n=e.inputs.length===1?i:wa(e.inputs,i),o=n.axes;o.length===0&&!n.noopWithEmptyAxes&&(o=e.inputs[0].dims.map((w,_)=>_));let s=O.normalizeAxes(o,e.inputs[0].dims.length),l=s,d=e.inputs[0],c=Jo(l,e.inputs[0].dims.length);c.length>0&&(d=e.compute(Pe(e.inputs[0],c),{inputs:[0],outputs:[-1]})[0],l=Ko(l.length,d.dims.length));let[m,g]=Qo(d.dims,l),y=m;n.keepDims&&(y=Zo(m,s)),e.compute(Yo(t,n.cacheKey,[d],r,e.inputs[0].dataType,y,g),{inputs:[d]})},Ap=(e,t)=>{Fe(e,"ReduceMeanShared",t,"mean")},Op=(e,t)=>{Fe(e,"ReduceL1Shared",t,"l1")},Rp=(e,t)=>{Fe(e,"ReduceL2Shared",t,"l2")},Bp=(e,t)=>{Fe(e,"ReduceLogSumExpShared",t,"logSumExp")},Np=(e,t)=>{Fe(e,"ReduceMaxShared",t,"max")},Mp=(e,t)=>{Fe(e,"ReduceMinShared",t,"min")},Dp=(e,t)=>{Fe(e,"ReduceProdShared",t,"prod")},Up=(e,t)=>{Fe(e,"ReduceSumShared",t,"sum")},Pp=(e,t)=>{Fe(e,"ReduceSumSquareShared",t,"sumSquare")},Wp=(e,t)=>{Fe(e,"ReduceLogSumShared",t,"logSum")}}),Ge,eu,Hr,wa,He,tu,ru,iu,au,nu,su,ou,uu,lu,du,je,qp,Vp,Lp,Fp,Gp,Hp,jp,Kp,Qp,Zp,Fa=q(()=>{"use strict";te(),se(),$e(),ue(),$y(),Ge=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},eu=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Hr=(e,t,i,r,n,o,s=!1,l=!1)=>{let d=[],c=i[0].dims,m=c.length,g=O.normalizeAxes(n,m),y=!l&&g.length===0;c.forEach(($,S)=>{y||g.indexOf(S)>=0?s&&d.push(1):d.push($)});let w=d.length,_=O.size(d);return{name:e,shaderCache:t,getShaderSource:$=>{let S=[],v=N("_A",i[0].dataType,m),b=K("output",o,w),k=r(v,b,g),C=k[2];for(let I=0,E=0;I<m;I++)y||g.indexOf(I)>=0?(s&&E++,C=`for(var j${I}: u32 = 0; j${I} < ${c[I]}; j${I}++) {
                  ${k[2].includes("last_index")?`let last_index = j${I};`:""}
                  ${v.indicesSet("input_indices",I,`j${I}`)}
                  ${C}
                }`):(S.push(`${v.indicesSet("input_indices",I,b.indicesGet("output_indices",E))};`),E++);return`

        ${$.registerUniform("output_size","u32").declareVariables(v,b)}

        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${v.type.indices};
          let output_indices = ${b.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${k[0]}       // init ops for reduce max/min
          ${k[1]}
          ${C}
          ${k[3]}
          ${k.length===4?b.setByOffset("global_idx","value"):k.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:d,dataType:o}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:[{type:12,data:_},...Z(c,d)]})}},wa=(e,t)=>{let i=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(r=>i.push(Number(r))),ge({axes:i,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},He=(e,t,i,r)=>{let n=e.inputs,o=n.length===1?i:wa(n,i);e.compute(Hr(t,{hint:o.cacheKey,inputDependencies:["rank"]},[n[0]],o.noopWithEmptyAxes&&o.axes.length===0?eu:r,o.axes,n[0].dataType,o.keepDims,o.noopWithEmptyAxes),{inputs:[0]})},tu=(e,t)=>{Ge(e.inputs),He(e,"ReduceLogSum",t,(i,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,"value = log(value);"])},ru=(e,t)=>{Ge(e.inputs),He(e,"ReduceL1",t,(i,r)=>[`var value = ${r.type.storage}(0);`,"",`value += abs(${i.getByIndices("input_indices")});`,""])},iu=(e,t)=>{Ge(e.inputs),He(e,"ReduceL2",t,(i,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},au=(e,t)=>{Ge(e.inputs),He(e,"ReduceLogSumExp",t,(i,r)=>[`var value = ${r.type.storage}(0);`,"",`value += exp(${i.getByIndices("input_indices")});`,"value = log(value);"])},nu=(e,t)=>{Ge(e.inputs),He(e,"ReduceMax",t,(i,r,n)=>{let o=[];for(let s=0;s<i.rank;s++)(n.indexOf(s)>=0||n.length===0)&&o.push(i.indicesSet("input_indices",s,0));return[`${o.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = max(value, ${i.getByIndices("input_indices")});`,""]})},su=(e,t)=>{Ge(e.inputs),He(e,"ReduceMean",t,(i,r,n)=>{let o=1;for(let s=0;s<i.rank;s++)(n.indexOf(s)>=0||n.length===0)&&(o*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${i.getByIndices("input_indices")});`,`let value = ${r.type.value}(sum / ${o});`]})},ou=(e,t)=>{Ge(e.inputs),He(e,"ReduceMin",t,(i,r,n)=>{let o=[];for(let s=0;s<i.rank;s++)(n.indexOf(s)>=0||n.length===0)&&o.push(`input_indices[${s}] = 0;`);return[`${o.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = min(value, ${i.getByIndices("input_indices")});`,""]})},uu=(e,t)=>{Ge(e.inputs),He(e,"ReduceProd",t,(i,r)=>[`var value = ${r.type.storage}(1);`,"",`value *= ${i.getByIndices("input_indices")};`,""])},lu=(e,t)=>{Ge(e.inputs),He(e,"ReduceSum",t,(i,r)=>[`var value = ${r.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,""])},du=(e,t)=>{Ge(e.inputs),He(e,"ReduceSumSquare",t,(i,r)=>[`var t = ${r.type.value}(0); var value = ${r.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += t * t;`,""])},je=(e,t,i)=>{if(t.length===0)return i;let r=1,n=1;for(let o=0;o<t.length;o++)t.indexOf(o)===-1?r*=e[o]:n*=e[o];return n<32&&r>1024},qp=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?su(e,t):Ap(e,t)},Vp=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ru(e,t):Op(e,t)},Lp=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?iu(e,t):Rp(e,t)},Fp=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?au(e,t):Bp(e,t)},Gp=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?nu(e,t):Np(e,t)},Hp=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ou(e,t):Mp(e,t)},jp=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?uu(e,t):Dp(e,t)},Kp=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lu(e,t):Up(e,t)},Qp=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?du(e,t):Pp(e,t)},Zp=(e,t)=>{je(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?tu(e,t):Wp(e,t)}}),Di,Xp,Jp,ba,vy=q(()=>{"use strict";te(),$e(),Fa(),Di=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Xp=(e,t)=>{Di(e.inputs);let i=(r,n,o)=>{let s=[];for(let l=0;l<r.rank;l++)(o.indexOf(l)>=0||o.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Hr("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},Jp=(e,t)=>{Di(e.inputs);let i=(r,n,o)=>{let s=[];for(let l=0;l<r.rank;l++)(o.indexOf(l)>=0||o.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${r.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${r.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(Hr("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},ba=e=>ge(e)}),pu,Ar,cu,hu,fu,dr,mu,Yp,Ga=q(()=>{"use strict";te(),se(),Va(),ue(),pu=(e,t)=>{let i=e[0],r=e[1],n=e[2],o=e[3],s=e[4],l=e[5];if(s&&l)throw new Error("Attention cannot have both past and attention_bias");if(i.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let d=i.dims[0],c=i.dims[1],m=i.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(r.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(r.dims[0]!==m)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==r.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let g=n.dims[0]/3,y=g,w=y;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let k of t.qkvHiddenSizes)if(k%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");g=t.qkvHiddenSizes[0],y=t.qkvHiddenSizes[1],w=t.qkvHiddenSizes[2]}let _=c;if(g!==y)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==g+y+w)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let $=0;if(s){if(y!==w)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==d)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==y/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||($=s.dims[3])}let S=_+$,v=-1,b=0;if(o)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(l){if(l.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(l.dims[0]!==d||l.dims[1]!==t.numHeads||l.dims[2]!==c||l.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:d,sequenceLength:c,pastSequenceLength:$,kvSequenceLength:_,totalSequenceLength:S,maxSequenceLength:v,inputHiddenSize:m,hiddenSize:g,vHiddenSize:w,headSize:Math.floor(g/t.numHeads),vHeadSize:Math.floor(w/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Ar=(e,t,i)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${i?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,cu=(e,t,i,r,n,o,s,l)=>{let d=be(s?1:o),c=64,m=o/d;m<c&&(c=32);let g=Math.ceil(o/d/c),y=[{type:12,data:t},{type:12,data:i},{type:12,data:r},{type:12,data:n},{type:12,data:m},{type:12,data:g}],w=Te(e.dataType,d),_=ze(1,d),$=["type"];s&&$.push("type"),l&&$.push("type");let S=v=>{let b=K("x",e.dataType,e.dims,d),k=[b],C=s?N("seq_lens",s.dataType,s.dims):void 0;C&&k.push(C);let I=l?N("total_sequence_length_input",l.dataType,l.dims):void 0;I&&k.push(I);let E=ze(e.dataType),A=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${c}>;
  var<workgroup> thread_sum: array<f32, ${c}>;
  ${v.registerUniforms(A).declareVariables(...k)}
  ${v.mainStart([c,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Ar(C,I,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${c}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${_}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${_}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(d){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${d}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${c}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${_}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${_}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(d){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${d}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${c}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${b.type.value}(${E}(1.0) / ${E}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${_}(x[offset + i]);
        x[offset + i] = ${b.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${b.type.value}(${E}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${c};${w};${d}`,inputDependencies:$},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(o/c),y:n,z:t*i},programUniforms:y})}},hu=(e,t,i,r,n,o,s,l,d)=>{let c=s+o.kvSequenceLength,m=[o.batchSize,o.numHeads,o.sequenceLength,c],g=e>1&&r,y=o.kvNumHeads?o.kvNumHeads:o.numHeads,w=g?[o.batchSize,y,c,o.headSize]:void 0,_=o.nReps?o.nReps:1,$=o.scale===0?1/Math.sqrt(o.headSize):o.scale,S=be(o.headSize),v=o.headSize/S,b=12,k={x:Math.ceil(c/b),y:Math.ceil(o.sequenceLength/b),z:o.batchSize*o.numHeads},C=[{type:12,data:o.sequenceLength},{type:12,data:v},{type:12,data:c},{type:12,data:o.numHeads},{type:12,data:o.headSize},{type:1,data:$},{type:12,data:s},{type:12,data:o.kvSequenceLength},{type:12,data:_}],I=g&&r&&O.size(r.dims)>0,E=["type","type"];I&&E.push("type"),n&&E.push("type"),l&&E.push("type"),d&&E.push("type");let A=[{dims:m,dataType:t.dataType,gpuDataType:0}];g&&A.push({dims:w,dataType:t.dataType,gpuDataType:0});let D=V=>{let G=N("q",t.dataType,t.dims,S),X=N("key",i.dataType,i.dims,S),ee=[G,X];if(I){let j=N("past_key",r.dataType,r.dims,S);ee.push(j)}n&&ee.push(N("attention_bias",n.dataType,n.dims));let P=l?N("seq_lens",l.dataType,l.dims):void 0;P&&ee.push(P);let oe=d?N("total_sequence_length_input",d.dataType,d.dims):void 0;oe&&ee.push(oe);let de=K("output",t.dataType,m),H=[de];g&&H.push(K("present_key",t.dataType,w,S));let le=ze(1,S),pe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${b}u;

  var<workgroup> tileQ: array<${G.type.storage}, ${b*b}>;
  var<workgroup> tileK: array<${G.type.storage}, ${b*b}>;
  ${V.registerUniforms(pe).declareVariables(...ee,...H)}
  ${V.mainStart([b,b,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${_===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${_===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Ar(P,oe,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${I&&g?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${g?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${le}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${I&&g?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${g?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${le}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${de.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${n!==void 0};${r!==void 0};${e}`,inputDependencies:E},getRunData:()=>({outputs:A,dispatchGroup:k,programUniforms:C}),getShaderSource:D}},fu=(e,t,i,r,n,o,s=void 0,l=void 0)=>{let d=o+n.kvSequenceLength,c=n.nReps?n.nReps:1,m=n.vHiddenSize*c,g=e>1&&r,y=n.kvNumHeads?n.kvNumHeads:n.numHeads,w=g?[n.batchSize,y,d,n.headSize]:void 0,_=[n.batchSize,n.sequenceLength,m],$=12,S={x:Math.ceil(n.vHeadSize/$),y:Math.ceil(n.sequenceLength/$),z:n.batchSize*n.numHeads},v=[{type:12,data:n.sequenceLength},{type:12,data:d},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:m},{type:12,data:o},{type:12,data:n.kvSequenceLength},{type:12,data:c}],b=g&&r&&O.size(r.dims)>0,k=["type","type"];b&&k.push("type"),s&&k.push("type"),l&&k.push("type");let C=[{dims:_,dataType:t.dataType,gpuDataType:0}];g&&C.push({dims:w,dataType:t.dataType,gpuDataType:0});let I=E=>{let A=N("probs",t.dataType,t.dims),D=N("v",i.dataType,i.dims),V=[A,D];b&&V.push(N("past_value",r.dataType,r.dims));let G=s?N("seq_lens",s.dataType,s.dims):void 0;s&&V.push(G);let X=l?N("total_sequence_length_input",l.dataType,l.dims):void 0;l&&V.push(X);let ee=[K("output",t.dataType,_)];g&&ee.push(K("present_value",t.dataType,w));let P=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${$}u;
  var<workgroup> tileQ: array<${A.type.value}, ${$*$}>;
  var<workgroup> tileV: array<${A.type.value}, ${$*$}>;
  ${E.registerUniforms(P).declareVariables(...V,...ee)}
  ${E.mainStart([$,$,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${c===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${c===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Ar(G,X,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${b&&g?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${g?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${A.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${b&&g?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${g?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:k},getRunData:()=>({outputs:C,dispatchGroup:S,programUniforms:v}),getShaderSource:I}},dr=(e,t,i,r,n,o,s,l,d,c,m=void 0,g=void 0)=>{let y=Math.min(e.outputCount,1+(s?1:0)+(l?1:0)),w=y>1?c.pastSequenceLength:0,_=w+c.kvSequenceLength,$=d&&O.size(d.dims)>0?d:void 0,S=[t,i];y>1&&s&&O.size(s.dims)>0&&S.push(s),$&&S.push($),m&&S.push(m),g&&S.push(g);let v=e.compute(hu(y,t,i,s,$,c,w,m,g),{inputs:S,outputs:y>1?[-1,1]:[-1]})[0];e.compute(cu(v,c.batchSize,c.numHeads,w,c.sequenceLength,_,m,g),{inputs:m&&g?[v,m,g]:[v],outputs:[]});let b=[v,r];y>1&&l&&O.size(l.dims)>0&&b.push(l),m&&b.push(m),g&&b.push(g),e.compute(fu(y,v,r,l,c,w,m,g),{inputs:b,outputs:y>1?[0,2]:[0]})},mu=(e,t)=>{let i=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,n=t.inputHiddenSize,o=t.headSize,s=12,l={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},d=[e.inputs[0],e.inputs[1],e.inputs[2]],c=[{type:12,data:r},{type:12,data:n},{type:12,data:o},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],m=g=>{let y=K("output_q",d[0].dataType,i),w=K("output_k",d[0].dataType,i),_=K("output_v",d[0].dataType,i),$=N("input",d[0].dataType,d[0].dims),S=N("weight",d[1].dataType,d[1].dims),v=N("bias",d[2].dataType,d[2].dims),b=$.type.storage,k=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${b}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${b}, ${s*s}>;
  var<workgroup> tileWeightK: array<${b}, ${s*s}>;
  var<workgroup> tileWeightV: array<${b}, ${s*s}>;
  ${g.registerUniforms(k).declareVariables($,S,v,y,w,_)}
  ${g.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${b}(0);
    var valueK = ${b}(0);
    var valueV = ${b}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:l,programUniforms:c}),getShaderSource:m},{inputs:d,outputs:[-1,-1,-1]})},Yp=(e,t)=>{let i=pu(e.inputs,t),[r,n,o]=mu(e,i);return dr(e,r,n,o,e.inputs[4],void 0,void 0,void 0,e.inputs[5],i)}}),gu,yu,_u,ec,xy=q(()=>{"use strict";Ze(),te(),se(),$e(),ue(),gu=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let i=(r,n,o)=>{let s=n.length;if(s!==r.length)throw new Error(`${o}: num dimensions != ${s}`);n.forEach((l,d)=>{if(l!==r[d])throw new Error(`${o}: dim[${d}] do not match`)})};if(e[0].dims.length>1){let r=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);i(e[1].dims,r,"Invalid input scale"),i(e[2].dims,r,"Invalid input B"),i(e[3].dims,r,"Invalid input mean"),i(e[4].dims,r,"Invalid input var")}else i(e[1].dims,[1],"Invalid input scale"),i(e[2].dims,[1],"Invalid input B"),i(e[3].dims,[1],"Invalid input mean"),i(e[4].dims,[1],"Invalid input var")},yu=(e,t)=>{let{epsilon:i,spatial:r,format:n}=t,o=e[0].dims,s=r?be(o[o.length-1]):1,l=n==="NHWC"&&o.length>1?s:1,d=O.size(o)/s,c=r,m=c?o.length:o,g=N("x",e[0].dataType,e[0].dims,s),y=N("scale",e[1].dataType,e[1].dims,l),w=N("bias",e[2].dataType,e[2].dims,l),_=N("inputMean",e[3].dataType,e[3].dims,l),$=N("inputVar",e[4].dataType,e[4].dims,l),S=K("y",e[0].dataType,m,s),v=()=>{let k="";if(r)k=`let cOffset = ${o.length===1?"0u":n==="NHWC"?`outputIndices[${o.length-1}] / ${s}`:"outputIndices[1]"};`;else if(n==="NCHW")k=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{k=`var cIndices = ${y.type.indices}(0);
                       cIndices[0] = outputIndices[${o.length-1}];`;for(let C=1;C<y.rank;C++)k+=`cIndices[${C}] = outputIndices[${C}];`;k+=`let cOffset = ${y.indicesToOffset("cIndices")};`}return k},b=k=>`
  const epsilon = ${i};
  ${k.registerUniform("outputSize","u32").declareVariables(g,y,w,_,$,S)}
  ${k.mainStart()}
  ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${s}`)};
    ${v()}
    let scale = ${y.getByOffset("cOffset")};
    let bias = ${w.getByOffset("cOffset")};
    let inputMean = ${_.getByOffset("cOffset")};
    let inputVar = ${$.getByOffset("cOffset")};
    let x = ${g.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${s}`,inputDependencies:c?["rank","type","type","type","type"]:void 0},getShaderSource:b,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c?[{type:12,data:d},...Z(o)]:[{type:12,data:d}]})}},_u=e=>ge(e),ec=(e,t)=>{let{inputs:i,outputCount:r}=e,n=_u({...t,outputCount:r});if(ye.webgpu.validateInputContent&&gu(i,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(yu(i,n))}}),wu,bu,tc,Sy=q(()=>{"use strict";se(),ue(),wu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},bu=e=>{let t=e[0].dims,i=e[0].dims[2],r=O.size(t)/4,n=e[0].dataType,o=N("input",n,t,4),s=N("bias",n,[i],4),l=N("residual",n,t,4),d=K("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:c=>`
  const channels = ${i}u / 4;
  ${c.declareVariables(o,s,l,d)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${o.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${l.getByOffset("global_idx")};
    ${d.setByOffset("global_idx","value")}
  }`}},tc=e=>{wu(e.inputs),e.compute(bu(e.inputs))}}),$u,fe,rc,ic,ac,nc,sc,oc,uc,lc,dc,vu,pc,cc,hc,fc,or,mc,Wr,gc,yc,_c,wc,bc,$c,vc,xc,Sc,kc,Tc,Cc,Ic,Ec,zc,Ac,Ui,Oc,$a,va,Rc,Bc,Nc,xu,Su,Mc,Ha=q(()=>{"use strict";te(),se(),$e(),ue(),$u=(e,t,i,r,n,o,s)=>{let l=Math.ceil(t/4),d="";typeof n=="string"?d=`${n}(a)`:d=n("a");let c=N("inputData",i,[l],4),m=K("outputData",r,[l],4),g=[{name:"vec_size",type:"u32"}];return s&&g.push(...s),`
      ${e.registerUniforms(g).declareVariables(c,m)}

  ${o??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${c.getByOffset("global_idx")};
    ${m.setByOffset("global_idx",d)}
  }`},fe=(e,t,i,r,n,o=e.dataType,s,l)=>{let d=[{type:12,data:Math.ceil(O.size(e.dims)/4)}];return s&&d.push(...s),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:c=>$u(c,O.size(e.dims),e.dataType,o,i,r,l),getRunData:c=>({outputs:[{dims:e.dims,dataType:o}],dispatchGroup:{x:Math.ceil(O.size(c[0].dims)/64/4)},programUniforms:d})}},rc=e=>{e.compute(fe(e.inputs[0],"Abs","abs"))},ic=e=>{e.compute(fe(e.inputs[0],"Acos","acos"))},ac=e=>{e.compute(fe(e.inputs[0],"Acosh","acosh"))},nc=e=>{e.compute(fe(e.inputs[0],"Asin","asin"))},sc=e=>{e.compute(fe(e.inputs[0],"Asinh","asinh"))},oc=e=>{e.compute(fe(e.inputs[0],"Atan","atan"))},uc=e=>{e.compute(fe(e.inputs[0],"Atanh","atanh"))},lc=e=>ge(e),dc=(e,t)=>{let i;switch(t.to){case 10:i="vec4<f16>";break;case 1:i="vec4<f32>";break;case 12:i="vec4<u32>";break;case 6:i="vec4<i32>";break;case 9:i="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(fe(e.inputs[0],"Cast",i,void 0,t.cacheKey,t.to))},vu=e=>{let t,i,r=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,i=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,i=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return ge({min:t,max:i})},pc=(e,t)=>{let i=t||vu(e.inputs),r=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,i.cacheKey,void 0,[{type:e.inputs[0].dataType,data:i.min},{type:e.inputs[0].dataType,data:i.max}],[{name:"min",type:r},{name:"max",type:r}]),{inputs:[0]})},cc=e=>{e.compute(fe(e.inputs[0],"Ceil","ceil"))},hc=e=>{e.compute(fe(e.inputs[0],"Cos","cos"))},fc=e=>{e.compute(fe(e.inputs[0],"Cosh","cosh"))},or=e=>ge(e),mc=(e,t)=>{let i=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Elu",r=>`elu_vf32(${r})`,`
  const elu_alpha_ = ${i}(${t.alpha});

  fn elu_f32(a: ${i}) -> ${i} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${i}>) -> vec4<${i}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},Wr=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,gc=e=>{let t=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Erf",i=>`erf_vf32(${i})`,Wr(t)))},yc=e=>{e.compute(fe(e.inputs[0],"Exp","exp"))},_c=e=>{e.compute(fe(e.inputs[0],"Floor","floor"))},wc=e=>{let t=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Gelu",i=>`0.5 * ${i} * (1.0 + erf_vf32(${i} * 0.7071067811865475))`,Wr(t)))},bc=(e,t)=>{let i=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"LeakyRelu",r=>`select(leaky_relu_alpha_ * ${r}, ${r}, ${r} >= vec4<${i}>(0.0))`,`const leaky_relu_alpha_ = ${i}(${t.alpha});`,t.cacheKey))},$c=e=>{e.compute(fe(e.inputs[0],"Not",t=>`!${t}`))},vc=e=>{e.compute(fe(e.inputs[0],"Neg",t=>`-${t}`))},xc=e=>{e.compute(fe(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},Sc=e=>{let t=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"Relu",i=>`select(vec4<${t}>(0.0), ${i}, ${i} > vec4<${t}>(0.0))`))},kc=e=>{e.compute(fe(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},Tc=e=>ge(e),Cc=(e,t)=>{let i=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"HardSigmoid",r=>`max(vec4<${i}>(0.0), min(vec4<${i}>(1.0), ${t.alpha} * ${r} + vec4<${i}>(${t.beta})))`,void 0,t.cacheKey))},Ic=e=>{e.compute(fe(e.inputs[0],"Sin","sin"))},Ec=e=>{e.compute(fe(e.inputs[0],"Sinh","sinh"))},zc=e=>{e.compute(fe(e.inputs[0],"Sqrt","sqrt"))},Ac=e=>{e.compute(fe(e.inputs[0],"Tan","tan"))},Ui=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Oc=e=>{e.compute(fe(e.inputs[0],"Tanh",Ui))},$a=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Ui("v")};
}
`,va=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Rc=e=>{let t=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"FastGelu",va,$a(t),void 0,e.inputs[0].dataType))},Bc=(e,t)=>{let i=ze(e.inputs[0].dataType);return e.compute(fe(e.inputs[0],"ThresholdedRelu",r=>`select(vec4<${i}>(0.0), ${r}, ${r} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${i}>(${t.alpha});`,t.cacheKey)),0},Nc=e=>{e.compute(fe(e.inputs[0],"Log","log"))},xu=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Su=e=>`quick_gelu_impl(${e})`,Mc=(e,t)=>{let i=ze(e.inputs[0].dataType);e.compute(fe(e.inputs[0],"QuickGelu",Su,xu(i,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),ku,Tu,Dc,ky=q(()=>{"use strict";se(),ue(),Ha(),ku=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Tu=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let i=N("input",e[0].dataType,e[0].dims,4),r=N("bias",e[0].dataType,[e[0].dims[2]],4),n=K("output",e[0].dataType,t,4),o=O.size(t)/4,s=Te(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)}}),getShaderSource:l=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${l.declareVariables(i,r,n)}

  ${Wr(s)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(o)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},Dc=e=>{ku(e.inputs),e.compute(Tu(e.inputs))}}),Cu,Iu,Ke,Uc,Pc,Wc,qc,Vc,Lc,Fc,Gc,Hc,jc,Ty=q(()=>{"use strict";te(),se(),ue(),Cu=(e,t,i,r,n,o,s,l,d,c,m,g)=>{let y,w;typeof l=="string"?y=w=(b,k)=>`${l}((${b}),(${k}))`:typeof l=="function"?y=w=l:(y=l.scalar,w=l.vector);let _=K("outputData",m,r.length,4),$=N("aData",d,t.length,4),S=N("bData",c,i.length,4),v;if(n)if(o){let b=O.size(t)===1,k=O.size(i)===1,C=t.length>0&&t[t.length-1]%4===0,I=i.length>0&&i[i.length-1]%4===0;b||k?v=_.setByOffset("global_idx",w(b?`${$.type.value}(${$.getByOffset("0")}.x)`:$.getByOffset("global_idx"),k?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):v=`
            let outputIndices = ${_.offsetToIndices("global_idx * 4u")};
            let offsetA = ${$.broadcastedIndicesToOffset("outputIndices",_)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",_)};
            ${_.setByOffset("global_idx",w(s||C?$.getByOffset("offsetA / 4u"):`${$.type.value}(${$.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||I?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else v=_.setByOffset("global_idx",w($.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!o)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let b=(k,C,I="")=>{let E=`aData[indexA${C}][componentA${C}]`,A=`bData[indexB${C}][componentB${C}]`;return`
            let outputIndices${C} = ${_.offsetToIndices(`global_idx * 4u + ${C}u`)};
            let offsetA${C} = ${$.broadcastedIndicesToOffset(`outputIndices${C}`,_)};
            let offsetB${C} = ${S.broadcastedIndicesToOffset(`outputIndices${C}`,_)};
            let indexA${C} = offsetA${C} / 4u;
            let indexB${C} = offsetB${C} / 4u;
            let componentA${C} = offsetA${C} % 4u;
            let componentB${C} = offsetB${C} % 4u;
            ${k}[${C}] = ${I}(${y(E,A)});
          `};m===9?v=`
            var data = vec4<u32>(0);
            ${b("data",0,"u32")}
            ${b("data",1,"u32")}
            ${b("data",2,"u32")}
            ${b("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:v=`
            ${b("outputData[global_idx]",0)}
            ${b("outputData[global_idx]",1)}
            ${b("outputData[global_idx]",2)}
            ${b("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables($,S,_)}

        ${g??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${v}
      }`},Iu=(e,t,i,r,n,o,s=i.dataType)=>{let l=i.dims.map($=>Number($)??1),d=r.dims.map($=>Number($)??1),c=!O.areEqual(l,d),m=l,g=O.size(l),y=!1,w=!1,_=[c];if(c){let $=Vt.calcShape(l,d,!1);if(!$)throw new Error("Can't perform binary op on the given tensors");m=$.slice(),g=O.size(m);let S=O.size(l)===1,v=O.size(d)===1,b=l.length>0&&l[l.length-1]%4===0,k=d.length>0&&d[d.length-1]%4===0;_.push(S),_.push(v),_.push(b),_.push(k);let C=1;for(let I=1;I<m.length;I++){let E=l[l.length-I],A=d[d.length-I];if(E===A)C*=E;else break}C%4===0?(w=!0,y=!0):(S||v||b||k)&&(y=!0)}else y=!0;return _.push(y),{name:e,shaderCache:{hint:t+_.map($=>$.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:$=>Cu($,l,d,m,y,c,w,n,i.dataType,r.dataType,s,o),getRunData:()=>({outputs:[{dims:m,dataType:s}],dispatchGroup:{x:Math.ceil(g/64/4)},programUniforms:[{type:12,data:Math.ceil(O.size(m)/4)},...Z(l,d,m)]})}},Ke=(e,t,i,r,n,o)=>{e.compute(Iu(t,n??"",e.inputs[0],e.inputs[1],i,r,o))},Uc=e=>{Ke(e,"Add",(t,i)=>`${t}+${i}`)},Pc=e=>{Ke(e,"Div",(t,i)=>`${t}/${i}`)},Wc=e=>{Ke(e,"Equal",{scalar:(t,i)=>`u32(${t}==${i})`,vector:(t,i)=>`vec4<u32>(${t}==${i})`},void 0,void 0,9)},qc=e=>{Ke(e,"Mul",(t,i)=>`${t}*${i}`)},Vc=e=>{let t=N("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Ke(e,"Pow",{scalar:(i,r)=>`pow_custom(${i},${r})`,vector:(i,r)=>`pow_vector_custom(${i},${r})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},Lc=e=>{Ke(e,"Sub",(t,i)=>`${t}-${i}`)},Fc=e=>{Ke(e,"Greater",{scalar:(t,i)=>`u32(${t}>${i})`,vector:(t,i)=>`vec4<u32>(${t}>${i})`},void 0,void 0,9)},Gc=e=>{Ke(e,"Less",{scalar:(t,i)=>`u32(${t}<${i})`,vector:(t,i)=>`vec4<u32>(${t}<${i})`},void 0,void 0,9)},Hc=e=>{Ke(e,"GreaterOrEqual",{scalar:(t,i)=>`u32(${t}>=${i})`,vector:(t,i)=>`vec4<u32>(${t}>=${i})`},void 0,void 0,9)},jc=e=>{Ke(e,"LessOrEqual",{scalar:(t,i)=>`u32(${t}<=${i})`,vector:(t,i)=>`vec4<u32>(${t}<=${i})`},void 0,void 0,9)}}),Eu,zu,Au,Ou,Kc,Qc,Cy=q(()=>{"use strict";te(),se(),$e(),ue(),Eu=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let i=0,r=e[i],n=r.dataType,o=r.dims.length;e.forEach((s,l)=>{if(l!==i){if(s.dataType!==n)throw new Error("input tensors should be one type");if(s.dims.length!==o)throw new Error("input tensors should have the same shape");s.dims.forEach((d,c)=>{if(c!==t&&d!==r.dims[c])throw new Error("non concat dimensions must match")})}})},zu=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Au=(e,t)=>{let i=e.length,r=[];for(let n=0;n<i;++n){let o=t.setByOffset("global_idx",e[n].getByIndices("indices"));i===1?r.push(o):n===0?r.push(`if (inputIndex == ${n}u) { ${o} }`):n===i-1?r.push(`else { ${o} }`):r.push(`else if (inputIndex == ${n}) { ${o} }`)}return r.join(`
`)},Ou=(e,t,i,r)=>{let n=O.size(i),o=new Array(e.length),s=new Array(e.length),l=0,d=[],c=[],m=[{type:12,data:n}];for(let $=0;$<e.length;++$)l+=e[$].dims[t],o[$]=l,c.push(e[$].dims.length),s[$]=N(`input${$}`,r,c[$]),d.push("rank"),m.push({type:12,data:o[$]});for(let $=0;$<e.length;++$)m.push(...Z(e[$].dims));m.push(...Z(i));let g=K("output",r,i.length),y=g.indicesGet("indices",t),w=Array.from(Array(o.length).keys()).map($=>`uniforms.sizeInConcatAxis${$}`).join(","),_=$=>`

  ${(()=>{$.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)$.registerUniform(`sizeInConcatAxis${S}`,"u32");return $.declareVariables(...s,g)})()}

  ${zu(o.length,w)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${g.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${y});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${o.length}u>(${w});
      ${y} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Au(s,g)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:r}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:m}),getShaderSource:_}},Kc=(e,t)=>{let i=e.inputs,r=i[0].dims,n=O.normalizeAxis(t.axis,r.length);Eu(i,n);let o=r.slice();o[n]=i.reduce((l,d)=>l+(d.dims.length>n?d.dims[n]:0),0);let s=i.filter(l=>O.size(l.dims)>0);e.compute(Ou(s,n,o,i[0].dataType),{inputs:s})},Qc=e=>ge({axis:e.axis})}),zt,At,Ot,ja,Bt=q(()=>{"use strict";te(),se(),zt=(e,t,i="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${i}(uniforms.clip_min)), ${t}(${i}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${i}(uniforms.alpha) * value + ${i}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${i}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},At=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Ot=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},ja=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[i,r]=e?.activation_params||[.2,.5];return{activation:t,alpha:i,beta:r}}else if(t==="Clip"){let[i,r]=e?.activation_params||[kp,Tp];return{activation:t,clipMax:r,clipMin:i}}else if(t==="LeakyRelu"){let[i]=e?.activation_params||[.01];return{activation:t,alpha:i}}return{activation:t}}}),Ce,Zc,Ka=q(()=>{"use strict";Ce=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},Zc=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Xc,Iy=q(()=>{"use strict";Xc=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),lr,Qa,Za=q(()=>{"use strict";te(),se(),ue(),Bt(),lr=(e,t,i,r,n)=>{let o=r-i;return`
      ${Array.from({length:i}).map((s,l)=>`
      if (${Q(t.shape,l,t.rank)} != 1) {
        ${t.indicesSet(e,l,Q(n,l+o,r))}
      } else {
        ${t.indicesSet(e,l,0)}
      }`).join("")}
`},Qa=(e,t,i,r,n=!1,o)=>{let s=e[0].dims,l=e[1].dims,d=s[s.length-2],c=l[l.length-1],m=s[s.length-1],g=be(c),y=be(m),w=be(d),_=O.size(i)/g/w,$=e.length>2,S=r?r.slice(0,-2):i.slice(0,-2),v=[O.size(S),d,c],b=[{type:12,data:_},{type:12,data:d},{type:12,data:c},{type:12,data:m}];At(t,b),b.push(...Z(S,s,l)),$&&b.push(...Z(e[2].dims)),b.push(...Z(v));let k=C=>{let I=La("batch_dims",e[0].dataType,S.length),E=N("a",e[0].dataType,s.length,y),A=N("b",e[1].dataType,l.length,g),D=K("output",e[0].dataType,v.length,g),V=Te(D.type.tensor),G=zt(t,D.type.value,V),X=[E,A],ee="";if($){let de=n?g:1;X.push(N("bias",e[2].dataType,e[2].dims.length,de)),ee=`${n?`value += bias[col / ${de}];`:`value += ${D.type.value}(bias[row + i]);`}`}let P=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Ot(t,P);let oe=()=>{let de=`var a_data: ${E.type.value};`;for(let H=0;H<y;H++)de+=`
              let b_data${H} = b[(b_offset + (k + ${H}) * uniforms.N + col) / ${g}];`;for(let H=0;H<w;H++){de+=`a_data = a[(a_offset + (row + ${H}) * uniforms.K + k) / ${y}];`;for(let le=0;le<y;le++)de+=`
            values[${H}] = fma(${A.type.value}(a_data${y===1?"":`[${le}]`}), b_data${le}, values[${H}]);
`}return de};return`
  ${C.registerUniforms(P).registerInternalVariables(I).declareVariables(...X,D)}
  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${g})) * ${g};
    var index1 = global_idx / (uniforms.N / ${g});
    let stride1 = uniforms.M / ${w};
    let row = (index1 % stride1) * ${w};
    let batch = index1 / stride1;

    ${i.length===2?"":`let batch_indices = ${I.offsetToIndices("batch")};`}

    var a_indices: ${E.type.indices};
    ${lr("a_indices",E,E.rank-2,I.rank,"batch_indices")}
    ${E.indicesSet("a_indices",E.rank-2,0)}
    ${E.indicesSet("a_indices",E.rank-1,0)}
    let a_offset = ${E.indicesToOffset("a_indices")};

    var b_indices: ${A.type.indices};
    ${lr("b_indices",A,A.rank-2,I.rank,"batch_indices")}
    ${A.indicesSet("b_indices",A.rank-2,0)}
    ${A.indicesSet("b_indices",A.rank-1,0)}
    let b_offset = ${A.indicesToOffset("b_indices")};
    var values: array<${D.type.value}, ${w}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${y}) {
      ${oe()}
    }
    for (var i = 0u; i < ${w}u; i++) {
      var value = values[i];
      ${ee}
      ${G}
      let cur_indices = ${D.type.indices}(batch, row + i, col);
      let offset = ${D.indicesToOffset("cur_indices")};
      ${D.setByOffset(`offset / ${g}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${g};${y};${w};${n}`,inputDependencies:$?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:o?o(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:b}),getShaderSource:k}}}),Ru,Bu,xa,Pi,Nu,Sa,Mu,jr,Xa=q(()=>{"use strict";te(),se(),ue(),Bt(),Za(),Ka(),Ru=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Bu=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,xa=(e,t,i="f32",r,n=!1,o=32,s=!1,l=32)=>{let d=t[1]*e[1],c=t[0]*e[0],m=n?d:o,g=n?o:d,y=m/t[0],w=o/t[1];if(!((n&&y===4&&e[1]===4||!n&&(y===3||y===4))&&m%t[0]===0&&o%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${y} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${y} must be 3 or 4.
  tileAWidth ${m} must be divisible by workgroupSize[0]${t[0]}. tileInner ${o} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${y}<${i}>, ${m/y}>, ${g}>;
var<workgroup> mm_Bsub: array<array<vec4<${i}>, ${c/e[0]}>, ${o}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${y};
const tileInner = ${o};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${d};

  let num_tiles = ${s?`${Math.ceil(l/o)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${l}`:"0"};

  var acc: array<vec4<${i}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${w};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Ru(n,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${r?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${y===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Bu(n,y)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Pi=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Nu=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Sa=(e,t,i="f32",r,n=!1,o=32,s=!1,l=32,d=!1)=>{let c=e[1]*t[1],m=e[0]*t[0],g=n?c:o,y=n?o:c;if(!(y%t[1]===0&&g%t[0]===0&&o%t[1]===0))throw new Error(`tileAHight ${y} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${g} must be divisible by workgroupSize[0]${t[0]}, tileInner ${o} must be divisible by workgroupSize[1]${t[1]}`);let w=y/t[1],_=g/t[0],$=o/t[1],S=d?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${c};
    let globalColStart = i32(workgroupId.x) * ${m};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${y}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${g}; inputCol = inputCol + ${t[0]}) {
          ${Pi(n,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${o}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${m}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${r?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${i}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${c};

let tileRowA = i32(localId.y) * ${w};
let tileColA = i32(localId.x) * ${_};
let tileRowB = i32(localId.y) * ${$};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${w}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${_}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Pi(n,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${$}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${r?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${i}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Nu(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${i}, ${g}>, ${y}>;
  var<workgroup> mm_Bsub : array<array<${i}, ${m}>, ${o}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${o};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${r?`let batchIndices = ${r.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(l/o)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${l}`:"0"};

    var acc : array<array<${i}, colPerThread>, rowPerThread>;
    ${S}
  }
`},Mu=(e,t,i,r,n=!1)=>{let[o,s,l,d]=r,c=Te(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${Ce(e,c)} {
      var value = ${Ce(e,c)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${lr("aIndices",s,s.rank-2,o.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${o.type.indices}) -> ${Ce(e,c)} {
      var value = ${Ce(e,c)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${l.type.indices};
        ${lr("bIndices",l,l.rank-2,o.rank,"batchIndices")}
        ${l.indicesSet("bIndices",l.rank-2,"u32(row)")}
        ${l.indicesSet("bIndices",l.rank-1,"u32(colIn)")}
        value = ${l.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ce(e,c)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${Ce(e,c)}(bias[row])`};`:""}
        ${i}
        ${d.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},jr=(e,t,i,r,n=!1,o)=>{let s=e[0].dims,l=e[1].dims,d=s.slice(0,-2),c=l.slice(0,-2),m=r?r.slice(0,-2):i.slice(0,-2),g=O.size(m),y=s[s.length-2],w=s[s.length-1],_=l[l.length-1],$=w%4===0&&_%4===0,S=y<=8?[4,1,1]:[4,4,1],v=[8,8,1],b=[Math.ceil(_/v[0]/S[0]),Math.ceil(y/v[1]/S[1]),Math.ceil(g/v[2]/S[2])],k=$?4:1,C=[...d,y,w/k],I=C.length,E=[...c,w,_/k],A=E.length,D=[g,y,_/k],V=[{type:6,data:y},{type:6,data:_},{type:6,data:w}];At(t,V),V.push(...Z(m,C,E));let G=["rank","rank"],X=e.length>2;X&&(V.push(...Z(e[2].dims)),G.push("rank")),V.push(...Z(D));let ee=P=>{let oe=m.length,de=La("batchDims",e[0].dataType,oe,1),H=Te(e[0].dataType),le=N("a",e[0].dataType,I,k),pe=N("b",e[1].dataType,A,k),j=K("result",e[0].dataType,D.length,k),ce=[le,pe];if(X){let ve=n?k:1;ce.push(N("bias",e[2].dataType,e[2].dims.length,ve))}let U=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Ot(t,U);let L=Te(j.type.tensor),B=zt(t,j.type.value,L),Y=Mu(k,X,B,[de,le,pe,j],n);return`
  ${P.registerUniforms(U).registerInternalVariables(de).declareVariables(...ce,j)}
  ${Y}
  ${$?xa(S,v,H,de):Sa(S,v,H,de)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${$};${n}`,inputDependencies:G},getRunData:()=>({outputs:[{dims:o?o(i):i,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:V}),getShaderSource:ee}}}),Du,Jc,Ey=q(()=>{"use strict";te(),lt(),ue(),Bt(),Ka(),Iy(),Xa(),Du=(e,t,i,r,n=!1,o,s=4,l=4,d=4,c="f32")=>{let m=V=>{switch(V){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${c}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${V} is not supported.`)}},g=V=>{switch(V){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${V} is not supported.`)}},y=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,w=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,_=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",$=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",v=e?"col":"row",b=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${v} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${v} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${v} % inChannels;
    var resData = ${Ce(s,c)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${_} && xCol >= 0 && xCol < ${$}) {
      ${y}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${m(s)}
    }
    return resData;`,k=e?t&&r?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${b}
    }
    return ${Ce(s,c)}(0.0);`:r&&i?`
    let col = colIn * ${s};
    ${b}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${b}
    }
    return ${Ce(s,c)}(0.0);`,C=e?r&&i?g(l):`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${g(l)}
    }
    return ${Ce(l,c)}(0.0);`:`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${g(l)}
    }
    return ${Ce(l,c)}(0.0);`,I=Ce(d,c),E=Ce(e?s:l,c),A=Ce(e?l:s,c),D=zt(o,I,c);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${E} {
      ${e?k:C}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${A} {
      ${e?C:k}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${I}) {
      let col = colIn * ${d};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${w}
      ${Zc(n)}
      ${D}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Jc=(e,t,i,r,n,o,s,l,d)=>{let c=t.format==="NHWC",m=c?e[0].dims[3]:e[0].dims[1],g=i[0],y=c?i[2]:i[3],w=c?i[1]:i[2],_=c?i[3]:i[1],$=c&&(m%4===0||m%3===0)&&_%4===0,S=c?_:y*w,v=c?y*w:_,b=[8,8,1],k=r<=8?[4,1,1]:[4,4,1],C=[Math.ceil(S/b[0]/k[0]),Math.ceil(v/b[1]/k[1]),Math.ceil(g/b[2]/k[2])];he("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${C}`);let I=$?c&&m%4!==0?3:4:1,E=b[1]*k[1],A=b[0]*k[0],D=Math.max(b[0]*I,b[1]),V=r%E===0,G=n%A===0,X=o%D===0,ee=$?[I,4,4]:[1,1,1],P=[{type:6,data:r},{type:6,data:n},{type:6,data:o},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];At(t,P),P.push(...Z(e[0].dims,e[1].dims));let oe=["rank","rank"];s&&(P.push(...Z(e[2].dims)),oe.push("rank")),P.push(...Z(i));let de=H=>{let le=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Ot(t,le);let pe=$?4:1,j=Te(e[0].dataType),ce=`
      fn setOutputAtIndex(flatIndex : i32, value : ${$?`vec4<${j}>`:j}) {
        result[flatIndex] = ${$?`vec4<${j}>`:j}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${$?`vec4<${j}>`:j}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${$?"/ 4":""}, value);
      }`,U=N("x",e[0].dataType,e[0].dims.length,I===3?1:I),L=N("w",e[1].dataType,e[1].dims.length,pe),B=[U,L],Y=K("result",e[0].dataType,i.length,pe);if(s){let ve=N("bias",e[2].dataType,e[2].dims.length,pe);B.push(ve),ce+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${$?`vec4<${j}>`:j} {
          return bias[coords.${c?"w":"y"}${$?"/ 4":""}];
        }`}return`
        ${Xc("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${H.registerUniforms(le).declareVariables(...B,Y)}
        ${ce}
        ${Du(c,V,G,X,s,t,ee[0],ee[1],ee[2],j)}
        ${$?xa(k,b,j,void 0,!c,D):Sa(k,b,j,void 0,!c,D,!1,void 0,l)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${I};${$};${V};${G};${X};${E};${A};${D}`,inputDependencies:oe},getRunData:()=>({outputs:[{dims:d?d(i):i,dataType:e[0].dataType}],dispatchGroup:{x:C[0],y:C[1],z:C[2]},programUniforms:P}),getShaderSource:de}}}),Uu,Wi,Yt,Pu,qi,Wu,Yc,eh,zy=q(()=>{"use strict";te(),lt(),se(),ue(),Bt(),Ka(),Uu=e=>{let t=1;for(let i=0;i<e.length;i++)t*=e[i];return t},Wi=e=>typeof e=="number"?[e,e,e]:e,Yt=(e,t)=>t<=1?e:e+(e-1)*(t-1),Pu=(e,t,i,r=1)=>{let n=Yt(t,r);return Math.floor((e[0]*(i-1)-i+n)/2)},qi=(e,t,i,r,n)=>{n==null&&(n=Pu(e,t[0],r[0]));let o=[0,0,0,i];for(let s=0;s<3;s++)e[s]+2*n>=t[s]&&(o[s]=Math.trunc((e[s]-t[s]+2*n)/r[s]+1));return o},Wu=(e,t,i,r,n,o,s,l,d,c)=>{let m,g,y,w;if(e==="VALID"&&(e=0),typeof e=="number"){m={top:e,bottom:e,left:e,right:e,front:e,back:e};let _=qi([t,i,r,1],[l,d,c],1,[n,o,s],e);g=_[0],y=_[1],w=_[2]}else if(Array.isArray(e)){if(!e.every(($,S,v)=>$===v[0]))throw Error(`Unsupported padding parameter: ${e}`);m={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let _=qi([t,i,r,1],[l,d,c],1,[n,o,s],e[0]);g=_[0],y=_[1],w=_[2]}else if(e==="SAME_UPPER"){g=Math.ceil(t/n),y=Math.ceil(i/o),w=Math.ceil(r/s);let _=(g-1)*n+l-t,$=(y-1)*o+d-i,S=(w-1)*s+c-r,v=Math.floor(_/2),b=_-v,k=Math.floor($/2),C=$-k,I=Math.floor(S/2),E=S-I;m={top:k,bottom:C,left:I,right:E,front:v,back:b}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:m,outDepth:g,outHeight:y,outWidth:w}},Yc=(e,t,i,r,n,o=!1,s="channelsLast")=>{let l,d,c,m,g;if(s==="channelsLast")[l,d,c,m,g]=e;else if(s==="channelsFirst")[l,g,d,c,m]=e;else throw new Error(`Unknown dataFormat ${s}`);let[y,,w,_,$]=t,[S,v,b]=Wi(i),[k,C,I]=Wi(r),E=Yt(w,k),A=Yt(_,C),D=Yt($,I),{padInfo:V,outDepth:G,outHeight:X,outWidth:ee}=Wu(n,d,c,m,S,v,b,E,A,D),P=o?y*g:y,oe=[0,0,0,0,0];return s==="channelsFirst"?oe=[l,P,G,X,ee]:s==="channelsLast"&&(oe=[l,G,X,ee,P]),{batchSize:l,dataFormat:s,inDepth:d,inHeight:c,inWidth:m,inChannels:g,outDepth:G,outHeight:X,outWidth:ee,outChannels:P,padInfo:V,strideDepth:S,strideHeight:v,strideWidth:b,filterDepth:w,filterHeight:_,filterWidth:$,effectiveFilterDepth:E,effectiveFilterHeight:A,effectiveFilterWidth:D,dilationDepth:k,dilationHeight:C,dilationWidth:I,inShape:e,outShape:oe,filterShape:t}},eh=(e,t,i,r,n,o)=>{let s=o==="channelsLast",l=s?e[0].dims[3]:e[0].dims[1],d=!1,c=[64,1,1],m={x:i.map((b,k)=>k)},g=[Math.ceil(Uu(m.x.map(b=>i[b]))/c[0]),1,1];he("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${g}`);let y=d?s&&l%4!==0?3:4:1,w=O.size(i),_=[{type:12,data:w},{type:12,data:r},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];At(t,_),_.push(...Z(e[0].dims,e[1].dims));let $=["rank","rank"],S=e.length===3;S&&(_.push(...Z(e[2].dims)),$.push("rank")),_.push(...Z(i));let v=b=>{let k=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:r.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Ot(t,k);let C=d?4:1,I=Te(e[0].dataType),E=N("x",e[0].dataType,e[0].dims.length,y===3?1:y),A=N("W",e[1].dataType,e[1].dims.length,C),D=[E,A],V=K("result",e[0].dataType,i.length,C),G="";if(S){let P=N("bias",e[2].dataType,e[2].dims.length,C);D.push(P),G+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${d?`vec4<${I}>`:I} {
          return bias[${s?Q("coords",4,5):Q("coords",1,5)}${d?"/ 4":""}];
        }`}let X=Ce(y,I),ee=zt(t,X,I);return`
            ${G}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${E.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${A.getByIndices("aIndices")};
            }
          ${b.registerUniforms(k).declareVariables(...D,V)}
          ${b.mainStart()}
          ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${V.offsetToIndices("global_idx")};
              let batch = ${Q("coords",0,E.rank)};
              let d2 = ${s?Q("coords",E.rank-1,E.rank):Q("coords",1,E.rank)};
              let xFRCCorner = vec3<u32>(${s?Q("coords",1,E.rank):Q("coords",2,E.rank)},
              ${s?Q("coords",2,E.rank):Q("coords",3,E.rank)},
              ${s?Q("coords",3,E.rank):Q("coords",4,E.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?Q("uniforms.x_shape",1,E.rank):Q("uniforms.x_shape",2,E.rank)};
              let xShapeZ = ${s?Q("uniforms.x_shape",2,E.rank):Q("uniforms.x_shape",3,E.rank)};
              let xShapeW = ${s?Q("uniforms.x_shape",3,E.rank):Q("uniforms.x_shape",4,E.rank)};
              let xShapeU = ${s?Q("uniforms.x_shape",4,E.rank):Q("uniforms.x_shape",1,E.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${S?"value = value + getBiasByOutputCoords(coords)":""};
              ${ee}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${y};${S}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:g[0],y:g[1],z:g[2]},programUniforms:_}),getShaderSource:v}}}),th,rh,Ay=q(()=>{"use strict";te(),se(),ue(),Bt(),th=(e,t,i,r)=>{let n=e.length>2,o=n?"value += b[output_channel];":"",s=e[0].dims,l=e[1].dims,d=t.format==="NHWC",c=d?i[3]:i[1],m=c/t.group,g=d&&m>=4?be(c):1,y=O.size(i)/g,w=[{type:12,data:y},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:m}];At(t,w),w.push(...Z(s,[l[0],l[1],l[2],l[3]/g]));let _=n?["rank","rank","rank"]:["rank","rank"];w.push(...Z([i[0],i[1],i[2],i[3]/g]));let $=S=>{let v=K("output",e[0].dataType,i.length,g),b=Te(v.type.tensor),k=zt(t,v.type.value,b),C=N("x",e[0].dataType,s.length),I=N("w",e[1].dataType,l.length,g),E=[C,I];n&&E.push(N("b",e[2].dataType,e[2].dims,g));let A=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Ot(t,A);let D=d?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${C.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${I.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${C.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${I.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(A).declareVariables(...E,v)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${v.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${d?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${d?1:2}], outputIndices[${d?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${g} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${d?2:1}];

    var value: ${v.type.value} = ${v.type.value}(0);
    ${D}
    ${o}
    ${k}
    ${v.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${g}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:w}),getShaderSource:$}},rh=(e,t,i,r)=>{let n=e.length>2,o=be(i[3]),s=be(i[2]),l=O.size(i)/o/s,d=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/o],c=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/o],m=[i[0],i[1],i[2],i[3]/o],g=[{type:12,data:l},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];At(t,g),g.push(...Z(d,c,m));let y=(s-1)*t.strides[1]+c[1],w=_=>{let $=K("output",e[0].dataType,m.length,o),S=Te($.type.tensor),v=zt(t,$.type.value,S),b=N("x",e[0].dataType,d.length,o),k=N("w",e[1].dataType,c.length,o),C=[b,k];n&&C.push(N("b",e[2].dataType,e[2].dims,o));let I=n?"value += b[output_channel];":"",E=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Ot(t,E),`
  ${_.registerUniforms(E).declareVariables(...C,$)}
  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${b.type.value}, ${y}>;
    var values: array<${$.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${c[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${y}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${b.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${b.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${c[1]}; w_width++) {
          let w_val = ${k.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${I}
      ${v}
      ${$.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${o};${s};${y};${c[0]};${c[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:r?r(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:w}}}),qu,Or,Vu,Rr,ka,Vi,Lu,Fu,Ta,Oy=q(()=>{"use strict";se(),Ey(),zy(),Xa(),Ay(),Bt(),Za(),bt(),qu=(e,t,i,r,n,o)=>{let s=e[0],l=e.slice(o?1:2,o?3:4),d=l.length,c=t[0],m=t.slice(2).map((y,w)=>y+(y-1)*(i[w]-1)),g=l.map((y,w)=>y+r[w]+r[w+d]).map((y,w)=>Math.floor((y-m[w]+n[w])/n[w]));return g.splice(0,0,s),g.splice(o?3:1,0,c),g},Or=[2,3,1,0],Vu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[1]*t.group;if(i!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Rr=(e,t)=>{let i=e.kernelShape.slice();i.length<t[1].dims.length-2&&i.push(...Array(t[1].dims.length-2-i.length).fill(0));for(let o=2;o<t[1].dims.length;++o)i[o-2]===0&&(i[o-2]=t[1].dims[o]);let r=e.pads.slice();Gr.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,i,r,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:i,pads:r}),n},ka=e=>{let t=ja(e),i=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,o=e.group,s=e.kernel_shape,l=e.pads,d=e.strides,c=e.w_is_const();return{autoPad:r,format:i,dilations:n,group:o,kernelShape:s,pads:l,strides:d,wIsConst:c,...t,cacheKey:`${e.format};${t.activation};`}},Vi=(e,t,i,r)=>{let n=i.format==="NHWC",o=qu(t[0].dims,t[1].dims,i.dilations,i.pads,i.strides,n);if(i.group!==1){let E=[t[0]];if(n){let A=e.kernelCustomData.wT??e.compute(Pe(t[1],Or),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=A),E.push(A)}else E.push(t[1]);t.length===3&&E.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===i.group&&t[1].dims[1]===1&&i.dilations[0]===1&&i.dilations[1]===1?e.compute(rh(E,i,o,r),{inputs:E}):e.compute(th(E,i,o,r),{inputs:E});return}let s=t.length===3,l=t[0].dims[n?1:2],d=t[0].dims[n?2:3],c=t[0].dims[n?3:1],m=t[1].dims[2],g=t[1].dims[3],y=o[n?1:2],w=o[n?2:3],_=o[n?3:1],$=n&&m===l&&g===d&&i.pads[0]===0&&i.pads[1]===0;if($||m===1&&g===1&&i.dilations[0]===1&&i.dilations[1]===1&&i.strides[0]===1&&i.strides[1]===1&&i.pads[0]===0&&i.pads[1]===0){let E=o[0],A,D,V,G=[];if(n){let P=e.kernelCustomData.wT??e.compute(Pe(t[1],Or),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];if(i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=P),$){let oe=l*d*c;A=t[0].reshape([1,E,oe]),D=P.reshape([1,oe,_]),V=[1,E,_]}else A=t[0].reshape([E,l*d,c]),D=P.reshape([1,c,_]),V=[E,y*w,_];G.push(A),G.push(D)}else A=t[0].reshape([E,c,l*d]),D=t[1].reshape([1,_,c]),V=[E,_,y*w],G.push(D),G.push(A);s&&G.push(t[2]);let X=V[2],ee=G[0].dims[G[0].dims.length-1];X<8&&ee<8?e.compute(Qa(G,i,o,V,n,r),{inputs:G}):e.compute(jr(G,i,o,V,n,r),{inputs:G});return}let S=!0,v=e.kernelCustomData.wT??e.compute(Pe(t[1],Or),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=v);let b=[t[0],v];s&&b.push(t[2]);let k=n?y*w:_,C=n?_:y*w,I=m*g*c;e.compute(Jc(b,i,o,k,C,I,s,S,r),{inputs:b})},Lu=(e,t)=>{let i=t.format==="NHWC",r=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],o=[1].concat(t.strides),s=[1].concat(t.dilations),l=[1].concat(t.kernelShape),d=Rr({...t,pads:n,strides:o,dilations:s,kernelShape:l},r);Vi(e,r,d,c=>i?[c[0],c[2],c[3]]:[c[0],c[1],c[3]])},Fu=(e,t,i)=>{let r=i.format==="NHWC"?"channelsLast":"channelsFirst",n=Rr(i,t),o=i.autoPad==="NOTSET"?i.pads:i.autoPad,s=Yc(t[0].dims,t[1].dims,i.strides,i.dilations,o,!1,r);e.compute(eh(t,n,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],r))},Ta=(e,t)=>{if(Vu(e.inputs,t),e.inputs[0].dims.length===3)Lu(e,t);else if(e.inputs[0].dims.length===5)Fu(e,e.inputs,t);else{let i=Rr(t,e.inputs);Vi(e,e.inputs,i)}}}),ih,Ry=q(()=>{"use strict";te(),lt(),se(),ue(),ih=(e,t,i)=>{let r=e.length>2,n=t.outputShape,o=t.format==="NHWC",s=t.group,l=e[1].dims,d=l[2]/s,c=l[3],m=o?be(d):1,g=o?be(c):1,y=o?c===1?m:g:1,w=O.size(n)/g,_=[Math.ceil(w/64),1,1];he("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${_}`);let $=["rank","rank"],S=[t.strides[0],t.strides[1]],v=[t.kernelShape[o?1:2],t.kernelShape[o?2:3]],b=[t.dilations[0],t.dilations[1]],k=[v[0]+(t.dilations[0]<=1?0:(t.kernelShape[o?1:2]-1)*(t.dilations[0]-1)),v[1]+(t.dilations[1]<=1?0:(t.kernelShape[o?2:3]-1)*(t.dilations[1]-1))],C=[k[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),k[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],I=[{type:12,data:w},{type:12,data:S},{type:12,data:v},{type:12,data:b},{type:12,data:k},{type:6,data:C},{type:12,data:d},{type:12,data:c},...Z(e[0].dims,e[1].dims)];r&&(I.push(...Z(e[2].dims)),$.push("rank")),I.push(...Z(n));let E=A=>{let D=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:S.length},{name:"filter_dims",type:"u32",length:v.length},{name:"dilations",type:"u32",length:v.length},{name:"effective_filter_dims",type:"u32",length:k.length},{name:"pads",type:"i32",length:C.length},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],V=Te(e[0].dataType),G=o?1:2,X=o?2:3,ee=o?3:1,P=N("W",e[1].dataType,e[1].dims.length,y),oe=N("Dy",e[0].dataType,e[0].dims.length,m),de=[oe,P];r&&de.push(N("bias",e[2].dataType,[n[ee]].length,g));let H=K("result",e[0].dataType,n.length,g),le=()=>{let j="";if(m===1)j+=`
        let w_offset = ${P.indicesToOffset(`${P.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${P.getByOffset(`w_offset / ${y}`)};
        dotProd = dotProd + xValue * wValue;`;else if(c===1)j+=`
          let wValue = ${P.getByOffset(`${P.indicesToOffset(`${P.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${y}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let ce=0;ce<m;ce++)j+=`
            let wValue${ce} = ${P.getByOffset(`${P.indicesToOffset(`${P.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ce}, wOutChannel)`)} / ${y}`)};
            dotProd = dotProd + xValue[${ce}] * wValue${ce};`;return j},pe=`
            let outputIndices = ${H.offsetToIndices(`global_idx * ${g}`)};
            let batch = ${H.indicesGet("outputIndices",0)};
            let d1 = ${H.indicesGet("outputIndices",ee)};
            let r = ${H.indicesGet("outputIndices",G)};
            let c = ${H.indicesGet("outputIndices",X)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${H.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${V}(dyRCorner) + ${V}(wR)) / ${V}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${V}(uniforms.Dy_shape[${G}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${V}(dyCCorner) + ${V}(wC)) / ${V}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${V}(uniforms.Dy_shape[${X}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${m}) {
                  let xValue = ${o?oe.getByOffset(`${oe.indicesToOffset(`${oe.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${m}`):oe.get("batch","inputChannel","idyR","idyC")};
                  ${le()}
                  inputChannel = inputChannel + ${m};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${g}]`:""};
            ${H.setByOffset("global_idx","value")};
          `;return`
    ${A.registerUniforms(D).declareVariables(...de,H)}
      ${A.mainStart()}
      ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${pe}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${m}${y}${g}${c===1}`,inputDependencies:$},getRunData:()=>({dispatchGroup:{x:_[0],y:_[1],z:_[2]},outputs:[{dims:i?i(n):n,dataType:e[0].dataType}],programUniforms:I}),getShaderSource:E}}}),Gu,Hu,ju,Li,ah,Ku,Fi,Qu,nh,By=q(()=>{"use strict";Ry(),Bt(),bt(),Gu=(e,t,i,r,n,o)=>(e-1)*t+i+(r-1)*n+1-o,Hu=(e,t,i,r,n)=>{let o=Math.floor(e/2);t==="SAME_UPPER"?(i[r]=o,i[n]=e-o):t==="SAME_LOWER"&&(i[r]=e-o,i[n]=o)},ju=(e,t,i,r,n,o,s,l,d,c)=>{let m=e.length-2,g=c.length===0;d.length<m&&d.push(...Array(m-d.length).fill(0));let y=e[0],w=t[l?3:1]*n;for(let _=0,$=e.length-m-(l?1:0);_<m;++_,++$){let S=e[$],v=g?S*s[_]:c[_],b=Gu(S,s[_],o[_],t[$],i[_],v);Hu(b,r,o,_,_+m),g&&c.push(s[_]*(S-1)+d[_]+(t[$]-1)*i[_]+1-o[_]-o[_+m])}c.splice(0,0,y),c.splice(l?3:1,0,w)},Li=(e,t)=>{let i=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((g,y)=>g*y,1)===0){i.length=0;for(let g=2;g<t[1].dims.length;++g)i.push(t[1].dims[g])}let r=e.format==="NHWC";i.splice(0,0,t[1].dims[0]),i.splice(r?3:1,0,t[1].dims[1]);let n=e.pads.slice(),o=e.outputShape.slice(),s=e.outputPadding.slice(),l=t[0].dims,d=e.dilations.slice();if(d.reduce((g,y)=>g+y,0)===0){let g=t[0].dims.length-2;d=new Array(g).fill(1)}let c=e.strides.slice();if(c.reduce((g,y)=>g+y,0)===0){let g=t[0].dims.length-2;c=new Array(g).fill(1)}ju(l,i,d,e.autoPad,e.group,n,c,r,s,o);let m=Object.assign({},e);return Object.assign(m,{kernelShape:i,pads:n,outputPadding:s,outputShape:o,dilations:d,strides:c}),m},ah=e=>{let t=ja(e),i=e.format,r=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,o=e.group,s=e.kernelShape,l=e.pads,d=e.strides,c=e.wIsConst(),m=e.outputPadding,g=e.outputShape;return{autoPad:r,format:i,dilations:n,group:o,kernelShape:s,outputPadding:m,outputShape:g,pads:l,strides:d,wIsConst:c,...t,cacheKey:`${e.format};${t.activation};`}},Ku=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],r=e[1].dims[0];if(i!==r)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let o=e[0].dims.length-2;if(t.dilations.reduce((s,l)=>s+l,0)>0&&t.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(t.strides.reduce((s,l)=>s+l,0)>0&&t.strides.length!==o)throw new Error(`strides should be ${o}D`);if(t.pads.reduce((s,l)=>s+l,0)>0&&t.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(t.outputPadding.length!==o&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${o}D`);if(t.kernelShape.reduce((s,l)=>s+l,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Fi=(e,t,i,r)=>{let n=e.kernelCustomData.wT??e.compute(Pe(t[1],[2,3,0,1]),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let o=[t[0],n];t.length===3&&o.push(t[2]),e.compute(ih(o,i,r),{inputs:o})},Qu=(e,t)=>{let i=t.format==="NHWC",r=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let o=t.dilations;(o.length===0||o[0]===0)&&(o=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let l=t.pads;l.length===0&&(l=[0,0]),l=[0,l[0],0,l[1]],s=[1].concat(s),o=[1].concat(o),n=[1].concat(n);let d=t.outputPadding;d=[0].concat(d);let c=Li({...t,pads:l,strides:s,dilations:o,kernelShape:n,outputPadding:d},r);Fi(e,r,c,m=>i?[m[0],m[2],m[3]]:[m[0],m[1],m[3]])},nh=(e,t)=>{if(Ku(e.inputs,t),e.inputs[0].dims.length===3)Qu(e,t);else{let i=Li(t,e.inputs);Fi(e,e.inputs,i)}}}),Zu,sh,oh,Ny=q(()=>{"use strict";te(),se(),$e(),ue(),Zu=(e,t,i,r)=>{let n=O.size(t),o=t.length,s=N("input",e,o),l=K("output",e,o),d=i.dataType===6?i.getInt32Array()[0]:Number(i.getBigInt64Array()[0]),c=O.normalizeAxis(d,o),m=g=>{let y=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,w=Q("uniforms.input_shape","uniforms.axis",o),_=r.reverse?y+(r.exclusive?" + 1":""):"0",$=r.reverse?w:y+(r.exclusive?"":" + 1");return`
                ${g.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,l)}
                ${g.mainStart()}
                  ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${l.offsetToIndices("global_idx")};
                  var sum = ${l.type.value}(0);
                  let first : i32 = ${_};
                  let last : i32 = ${$};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${l.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:c},...Z(t,t)]}),getShaderSource:m}},sh=(e,t)=>{let i=e.inputs[0].dims,r=e.inputs[0].dataType,n=e.inputs[1];e.compute(Zu(r,i,n,t),{inputs:[0]})},oh=e=>{let t=e.exclusive===1,i=e.reverse===1;return ge({exclusive:t,reverse:i})}}),Xu,Ju,Yu,uh,lh,My=q(()=>{"use strict";te(),se(),$e(),ue(),Xu=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Ju=(e,t,i,r)=>{let n=[];n.push(`fn perm(i: ${r.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`);for(let o=0;o<t;++o)n.push(i.indicesSet("a",e[o],`i[${o}]`));return n.push("return a;}"),n.join(`
`)},Yu=(e,t)=>{let i,r,n,o,s,l,d=t.format==="NHWC",c=t.blocksize,m=t.mode==="DCR";d?([i,r,n,o]=e.dims,s=m?[i,r,n,c,c,o/c**2]:[i,r,n,o/c**2,c,c],l=m?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([i,r,n,o]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=m?[i,c,c,o/c**2,r,n]:[i,o/c**2,c,c,r,n],l=m?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let g=e.reshape(s),y=g.dims.length,w=e.dataType,_=N("a",w,y),$=K("output",w,y),S=v=>`
  ${v.registerUniform("output_size","u32").declareVariables(_,$)}

  ${Ju(l,y,_,$)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${$.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${$.setByOffset("global_idx",_.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:v=>{let b=d?[i,r*c,n*c,o/c**2]:[i,o/c**2,r*c,n*c],k=O.size(b),C=g.dims,I=O.sortBasedOnPerm(C,l);return{outputs:[{dims:b,dataType:v[0].dataType}],dispatchGroup:{x:Math.ceil(k/64)},programUniforms:[{type:12,data:k},...Z(C,I)]}},getShaderSource:S}},uh=(e,t)=>{Xu(e.inputs),e.compute(Yu(e.inputs[0],t))},lh=e=>ge({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Br,er,Gi,el,tl,rl,il,Hi,al,dh,ph,Dy=q(()=>{"use strict";te(),se(),$e(),ue(),Br="[a-zA-Z]|\\.\\.\\.",er="("+Br+")+",Gi="^"+er+"$",el="("+er+",)*"+er,tl="^"+el+"$",rl=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let i=this.symbolToIndices.get(e);i===void 0?i=[t]:i.push(t),this.symbolToIndices.set(e,i)}},il=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[i,r]=t.includes("->")?t.split("->",2):[t,""];if(!i.match(RegExp(tl)))throw new Error("Invalid LHS term");if(i.split(",").forEach((n,o)=>{let s=e[o].dims.slice();if(!n.match(RegExp(Gi)))throw new Error("Invalid LHS term");let l=this.processTerm(n,!0,s,o);this.lhs.push(l)}),r==="")r+=[...this.symbolToInfo.entries()].filter(([n,o])=>o.count===1||n==="...").map(([n])=>n).join("");else if(!r.match(RegExp(er)))throw new Error("Invalid RHS");r.match(RegExp(Br,"g"))?.forEach(n=>{if(n==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let o=this.symbolToInfo.get(n);if(o===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(o.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,i){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw new Error("Dimension mismatch");r.count++,r.inputIndices.push(i)}else r={count:1,dimValue:t,inputIndices:[i]};this.symbolToInfo.set(e,r)}processTerm(e,t,i,r=-1){let n=i.length,o=!1,s=[],l=0;if(!e.match(RegExp(Gi))&&!t&&e!=="")throw new Error("Invalid LHS term");let d=e.match(RegExp(Br,"g")),c=new rl(r);return d?.forEach((m,g)=>{if(m==="..."){if(o)throw new Error("Only one ellipsis is allowed per input term");o=!0;let y=n-d.length+1;if(y<0)throw new Error("Ellipsis out of bounds");if(s=i.slice(l,l+y),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let w=0;w<s.length;w++){let _=String.fromCharCode(48+w);c.addSymbol(_,g+w),this.addSymbol(_,i[l++],r)}}else c.addSymbol(m,g+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(m,i[l++],r)}),c}},Hi=e=>e+"_max",al=(e,t,i,r)=>{let n=e.map(c=>c.length).map((c,m)=>N(`input${m}`,t,c)),o=O.size(r),s=K("output",t,r.length),l=[...i.symbolToInfo.keys()].filter(c=>!i.rhs.symbolToIndices.has(c)),d=c=>{let m=[],g="var prod = 1.0;",y="var sum = 0.0;",w="sum += prod;",_=[],$=[],S=[],v=[],b=i.symbolToInfo.size===i.rhs.symbolToIndices.size;i.symbolToInfo.forEach((C,I)=>{if(i.rhs.symbolToIndices.has(I)){let E=i.rhs.symbolToIndices.get(I)?.[0];E!==void 0&&i.lhs.forEach((A,D)=>{if(C.inputIndices.includes(D)){let V=A.symbolToIndices.get(I);if(V===void 0)throw new Error("Invalid symbol error");V.forEach(G=>{m.push(`${n[D].indicesSet(`input${D}Indices`,G,s.indicesGet("outputIndices",E))}`)})}})}else i.lhs.forEach((E,A)=>{if(C.inputIndices.includes(A)){let D=E.symbolToIndices.get(I);if(D===void 0)throw new Error("Invalid symbol error");D.forEach(V=>{_.push(`${n[A].indicesSet(`input${A}Indices`,V,`${I}`)}`)}),v.push(`prod *= ${n[A].getByIndices(`input${A}Indices`)};`)}}),$.push(`for(var ${I}: u32 = 0; ${I} < uniforms.${Hi(I)}; ${I}++) {`),S.push("}")});let k=b?[...m,`let sum = ${n.map((C,I)=>C.getByIndices(`input${I}Indices`)).join(" * ")};`]:[...m,y,...$,..._,g,...v,w,...S];return`
            ${c.registerUniforms(l.map(C=>({name:`${Hi(C)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,s)}

            ${c.mainStart()}
            ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${n.map((C,I)=>`var input${I}Indices: ${n[I].type.indices};`).join(`
`)}
            ${k.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:i.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let c=l.filter(g=>i.symbolToInfo.has(g)).map(g=>({type:12,data:i.symbolToInfo.get(g)?.dimValue||0}));c.push({type:12,data:o});let m=e.map((g,y)=>[...Z(g)]).reduce((g,y)=>g.concat(y),c);return m.push(...Z(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:m}},getShaderSource:d}},dh=(e,t)=>{let i=new il(e.inputs,t.equation),r=i.outputDims,n=e.inputs.map((o,s)=>o.dims);e.compute(al(n,e.inputs[0].dataType,i,r))},ph=e=>{let t=e.equation.replace(/\s+/g,"");return ge({equation:t})}}),nl,ji,sl,ol,ch,Uy=q(()=>{"use strict";te(),se(),ue(),nl=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),r=i.length<t.length?0:i.length-t.length,n=t.length<i.length?0:t.length-i.length;for(;r<i.length&&n<t.length;++r,++n)if(i[r]!==t[n]&&i[r]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},ji=(e,t)=>{let i=e.length-t.length,r=[];for(let n=0;n<i;++n)r.push(e[n]);for(let n=0;n<t.length;++n)r.push(t[n]===1?e[n+i]:t[n]);return r},sl=(e,t)=>e.length>t.length?ji(e,t):ji(t,e),ol=e=>{let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),r=sl(t,i),n=e[0].dataType,o=n===9||O.size(t)===1,s=n===9||t.length>0&&t[t.length-1]%4===0?4:1,l=o||r.length>0&&r[r.length-1]%4===0?4:1,d=Math.ceil(O.size(r)/l),c=g=>{let y=N("input",n,t.length,s),w=K("output",n,r.length,l),_;if(n===9){let $=(S,v,b="")=>`
          let outputIndices${v} = ${w.offsetToIndices(`outputOffset + ${v}u`)};
          let offset${v} = ${y.broadcastedIndicesToOffset(`outputIndices${v}`,w)};
          let index${v} = offset${v} / 4u;
          let component${v} = offset${v} % 4u;
          ${S}[${v}] = ${b}(${y.getByOffset(`index${v}`)}[component${v}]);
        `;_=`
        let outputOffset = global_idx * ${l};
        var data = vec4<u32>(0);
        ${$("data",0,"u32")}
        ${$("data",1,"u32")}
        ${$("data",2,"u32")}
        ${$("data",3,"u32")}
        ${w.setByOffset("global_idx","data")}
      }`}else _=`
        let outputIndices = ${w.offsetToIndices(`global_idx * ${l}`)};
        let inputOffset = ${y.broadcastedIndicesToOffset("outputIndices",w)};
        let data = ${w.type.value}(${y.getByOffset(`inputOffset / ${s}`)});
        ${w.setByOffset("global_idx","data")}
      }`;return`
    ${g.registerUniform("vec_size","u32").declareVariables(y,w)}
    ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${_}`},m=[{type:12,data:d},...Z(t,r)];return{name:"Expand",shaderCache:{hint:`${r.length};${s}${l}`,inputDependencies:["rank"]},getShaderSource:c,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m})}},ch=e=>{nl(e.inputs),e.compute(ol(e.inputs),{inputs:[0]})}}),ul,hh,Py=q(()=>{"use strict";te(),se(),ue(),Ha(),ul=e=>{let t=e[0].dataType,i=O.size(e[0].dims),r=O.size(e[1].dims),n=r%4===0,o=s=>{let l=N("x",t,[1],4),d=N("bias",t,[1],4),c=K("y",t,[1],4),m=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],g=w=>`
      let bias${w}_offset: u32 = (global_idx * 4 + ${w}) % uniforms.bias_size;
      let bias${w} = ${d.getByOffset(`bias${w}_offset / 4`)}[bias${w}_offset % 4];`,y=n?`
      let bias = ${d.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${g(0)}${g(1)}${g(2)}${g(3)}
      let bias = ${l.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(m).declareVariables(l,d,c)}

    ${$a(ze(t))}

    ${s.mainStart(Lt)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${l.getByOffset("global_idx")};
      ${y}
      let x_in = x + bias;
      ${c.setByOffset("global_idx",va("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:o,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(i/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(i/Lt/4)}})}},hh=e=>{e.inputs.length<2||O.size(e.inputs[1].dims)===0?Rc(e):e.compute(ul(e.inputs))}}),ll,dl,fh,mh,Wy=q(()=>{"use strict";te(),se(),$e(),ue(),ll=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},dl=(e,t)=>{let i=e[0].dims,r=e[1].dims,n=i.length,o=O.normalizeAxis(t.axis,n),s=i.slice(0);s.splice(o,1,...r);let l=i[o],d=e[0].dataType===9?4:1,c=Math.ceil(O.size(s)/d),m=[{type:12,data:c},{type:6,data:l},{type:12,data:o},...Z(e[0].dims,e[1].dims,s)],g=y=>{let w=N("data",e[0].dataType,e[0].dims.length,d),_=N("inputIndices",e[1].dataType,e[1].dims.length),$=K("output",e[0].dataType,s.length,d),S=b=>{let k=r.length,C=`var indicesIndices${b}  = ${_.type.indices}(0);`;for(let I=0;I<k;I++)C+=`${k>1?`indicesIndices${b}[${I}]`:`indicesIndices${b}`} = ${s.length>1?`outputIndices${b}[uniforms.axis + ${I}]`:`outputIndices${b}`};`;C+=`
          var idx${b} = ${_.getByIndices(`indicesIndices${b}`)};
          if (idx${b} < 0) {
            idx${b} = idx${b} + uniforms.axisDimLimit;
          }
          var dataIndices${b} : ${w.type.indices};
        `;for(let I=0,E=0;I<n;I++)I===o?(C+=`${n>1?`dataIndices${b}[${I}]`:`dataIndices${b}`} = u32(idx${b});`,E+=k):(C+=`${n>1?`dataIndices${b}[${I}]`:`dataIndices${b}`} = ${s.length>1?`outputIndices${b}[${E}]`:`outputIndices${b}`};`,E++);return C},v;if(e[0].dataType===9){let b=(k,C,I="")=>`
          let outputIndices${C} = ${$.offsetToIndices(`outputOffset + ${C}u`)};
          ${S(C)};
          let offset${C} = ${w.indicesToOffset(`dataIndices${C}`)};
          let index${C} = offset${C} / 4u;
          let component${C} = offset${C} % 4u;
          ${k}[${C}] = ${I}(${w.getByOffset(`index${C}`)}[component${C}]);
        `;v=`
        let outputOffset = global_idx * ${d};
        var value = vec4<u32>(0);
        ${b("value",0,"u32")}
        ${b("value",1,"u32")}
        ${b("value",2,"u32")}
        ${b("value",3,"u32")}
        ${$.setByOffset("global_idx","value")}
      `}else v=`
      let outputIndices = ${$.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${w.getByIndices("dataIndices")};
      ${$.setByOffset("global_idx","value")};
      `;return`
      ${y.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(w,_,$)}
      ${y.mainStart()}
        ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${v}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:m}),getShaderSource:g}},fh=e=>ge({axis:e.axis}),mh=(e,t)=>{let i=e.inputs;ll(i),e.compute(dl(e.inputs,t))}}),pl,gh,yh,qy=q(()=>{"use strict";te(),se(),ue(),pl=(e,t,i,r,n,o,s,l,d)=>{let c=[{type:12,data:o},{type:12,data:r},{type:12,data:n},{type:12,data:i},{type:12,data:s},{type:12,data:l},{type:12,data:d}],m=[o];c.push(...Z(t.dims,m));let g=y=>{let w=N("indices_data",t.dataType,t.dims.length),_=K("input_slice_offsets_data",12,1,1),$=[w,_],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:i.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${y.registerUniforms(S).declareVariables(...$)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${i.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${i.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:m,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:c}),getShaderSource:g},{inputs:[t],outputs:[-1]})[0]},gh=(e,t)=>{let i=e.inputs,r=i[0].dims,n=i[0].dataType,o=i[1].dims,s=o[o.length-1],l=O.sizeToDimension(o,o.length-1),d=O.sizeFromDimension(r,t.batchDims+s),c=O.sizeToDimension(r,t.batchDims),m=O.sizeFromDimension(r,t.batchDims),g=l/c,y=new Array(s),w=d;for(let C=0;C<s;++C)y[s-1-C]=w,w*=r[t.batchDims+s-1-C];let _=pl(e,i[1],y,t.batchDims,r,l,g,m,s),$=t.batchDims+s;if($>r.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=o.slice(0,-1).concat(r.slice($)),v=O.size(S),b=[{type:12,data:v},{type:12,data:d},...Z(i[0].dims,_.dims,S)],k=C=>{let I=N("data",i[0].dataType,i[0].dims.length),E=N("slice_offsets",12,_.dims.length),A=K("output",i[0].dataType,S.length);return`
          ${C.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(I,E,A)}
            ${C.mainStart()}
            ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:n}],dispatchGroup:{x:Math.ceil(v/64)},programUniforms:b}),getShaderSource:k},{inputs:[i[0],_]})},yh=e=>({batchDims:e.batch_dims,cacheKey:""})}),cl,hl,_h,wh,Vy=q(()=>{"use strict";te(),se(),$e(),ue(),cl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let i=O.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,n=e[0],o=e[2],s=e.length===4?e[3]:void 0;if(o.dims.length!==n.dims.length||!n.dims.map((l,d)=>d===i?Math.ceil(l/r)===o.dims[d]:l===o.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==o.dims.length||!s.dims.map((l,d)=>l===o.dims[d]).reduce((l,d)=>l&&d,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},hl=(e,t)=>{let i=e[0].dims,r=e[1].dims,n=i.length,o=O.normalizeAxis(t.gatherAxis,n),s=O.normalizeAxis(t.quantizeAxis,n),l=i.slice(0);l.splice(o,1,...r);let d=O.size(l),c=e[2].dataType,m=e[0].dataType===22,g=[{type:12,data:d},{type:12,data:s},{type:12,data:o},{type:12,data:t.blockSize},...Z(...e.map((w,_)=>w.dims),l)],y=w=>{let _=N("data",e[0].dataType,e[0].dims.length),$=N("inputIndices",e[1].dataType,e[1].dims.length),S=N("scales",e[2].dataType,e[2].dims.length),v=e.length>3?N("zeroPoint",e[3].dataType,e[3].dims.length):void 0,b=K("output",c,l.length),k=[_,$,S];v&&k.push(v);let C=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${w.registerUniforms(C).declareVariables(...k,b)}
        ${w.mainStart()}
        let output_indices = ${b.offsetToIndices("global_idx")};
        var indices_indices = ${$.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${b.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${$.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${b.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${_.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${b.indicesGet("output_indices","i")};
          ${_.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${$.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${i[o]};
        }
        ${_.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${l.length}; i++) {
          let index = ${b.indicesGet("output_indices",`i + ${r.length} - 1`)};
          ${_.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${_.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${_.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${m?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${v?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${v.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${v.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${m?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${ze(c)}(quantized_data - zero_point) * scale;
        ${b.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((w,_)=>_!==1).map(w=>w.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(w,_)=>"rank")},getRunData:()=>({outputs:[{dims:l,dataType:c}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:g}),getShaderSource:y}},_h=(e,t)=>{let i=e.inputs;cl(i,t),e.compute(hl(e.inputs,t))},wh=e=>ge({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),fl,ml,bh,$h,Ly=q(()=>{"use strict";te(),se(),$e(),ue(),fl=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},ml=(e,t)=>{let i=e[0].dims,r=e[0].dataType,n=i.length,o=e[1].dims,s=e[1].dataType,l=O.normalizeAxis(t.axis,n),d=i[l],c=o.slice(0),m=O.size(c),g=N("input",r,n),y=N("indicesInput",s,o.length),w=K("output",r,c.length),_=[{type:12,data:m},{type:6,data:d},{type:12,data:l}];return _.push(...Z(i,o,c)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:c,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:_}),getShaderSource:$=>`
      ${$.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(g,y,w)}
      ${$.mainStart()}
      ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${w.offsetToIndices("global_idx")};

      var idx = ${y.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${g.type.indices}(outputIndices);
      ${g.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${g.getByIndices("inputIndices")};

      ${w.setByOffset("global_idx","value")};
  }`}},bh=e=>ge({axis:e.axis}),$h=(e,t)=>{let i=e.inputs;fl(i),e.compute(ml(e.inputs,t))}}),gl,yl,vh,xh,Fy=q(()=>{"use strict";te(),se(),ue(),gl=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},yl=(e,t)=>{let i=e[0].dims.slice(),r=e[1].dims.slice(),[n,o,s]=Sp.getShapeOfGemmResult(i,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),l=[n,o];if(!l)throw new Error("Can't use gemm on the given tensors");let d=16,c=Math.ceil(o/d),m=Math.ceil(n/d),g=!0,y=O.size(l),w=[{type:12,data:g?c:y},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],_=["type","type"];e.length===3&&(w.push(...Z(e[2].dims)),_.push("rank")),w.push(...Z(l));let $=v=>{let b="";t.transA&&t.transB?b="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?b="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?b="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(b="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let k=t.alpha===1?"":"value *= uniforms.alpha;",C=N("a",e[0].dataType,e[0].dims),I=N("b",e[1].dataType,e[1].dims),E=C.type.value,A=null,D=[C,I];e.length===3&&(A=N("c",e[2].dataType,e[2].dims.length),D.push(A));let V=K("output",e[0].dataType,l.length);D.push(V);let G=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${v.registerUniforms(G).declareVariables(...D)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${E}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${b}
    }

    ${k}
    ${A!=null?`let cOffset = ${A.broadcastedIndicesToOffset("vec2(m, n)",V)}; value += ${E}(uniforms.beta) * ${A.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=v=>{let b=N("a",e[0].dataType,e[0].dims),k=N("b",e[1].dataType,e[1].dims),C=null,I=[b,k];e.length===3&&(C=N("c",e[2].dataType,e[2].dims.length),I.push(C));let E=K("output",e[0].dataType,l.length);I.push(E);let A=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],D="",V="";t.transA&&t.transB?(V=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,D="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(V=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,D="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(V=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,D="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(V=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${b.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${k.type.value}(0);
      }
      `,D="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let G=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${v.registerUniforms(A).declareVariables(...I)}
  var<workgroup> tile_a: array<array<${b.type.storage}, ${d}>, ${d}>;
  var<workgroup> tile_b: array<array<${k.type.storage}, ${d}>, ${d}>;
  ${v.mainStart([d,d,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${d};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${d};
    let num_tiles = (uniforms.K - 1) / ${d} + 1;
    var k_start = 0u;
    var value = ${E.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${V}
      k_start = k_start + ${d};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${d}; k++) {
        ${D}
      }
      workgroupBarrier();
    }

    ${G}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${C!=null?`let cOffset = ${C.broadcastedIndicesToOffset("vec2(m, n)",E)}; value += ${E.type.value}(uniforms.beta) * ${C.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return g?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:c*m},programUniforms:w}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:w}),getShaderSource:$}},vh=e=>{let t=e.transA,i=e.transB,r=e.alpha,n=e.beta;return{transA:t,transB:i,alpha:r,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},xh=(e,t)=>{gl(e.inputs),e.compute(yl(e.inputs,t))}}),tt,ut,xt,St,_l,wl,bl,$l,vl,xl,Sl,kl,Sh,kh,Gy=q(()=>{"use strict";te(),se(),$e(),ue(),[tt,ut,xt,St]=[0,1,2,3],_l=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},wl=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,bl=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,$l=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,vl=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,xl=(e,t,i)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${tt}] = batch;
     indices[${ut}] = channel;`+(()=>{switch(i.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${xt}] = u32(r);
            indices[${St}] = u32(c);
          }
        `;case"border":return`
          indices[${xt}] = u32(clamp(r, 0, H - 1));
          indices[${St}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${xt}] = gs_reflect(r, border[1], border[3]);
          indices[${St}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${i.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,Sl=(e,t,i)=>(()=>{switch(i.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${tt}], indices[${ut}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${tt}], indices[${ut}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${tt}], indices[${ut}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${tt}], indices[${ut}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${tt}], indices[${ut}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${tt}], indices[${ut}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${i.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,kl=(e,t)=>{let i=N("x",e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=N("grid",e[1].dataType,r.length,2),o=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(o=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[tt,ut,xt,St]=[0,3,1,2]);let s=K("output",e[0].dataType,o.length),l=i.type.value,d=O.size(o),c=[{type:12,data:d},...Z(e[0].dims,r,o)],m=g=>`
  ${g.registerUniform("output_size","u32").declareVariables(i,n,s)}
  ${wl}
  ${bl(l)}
  ${$l(t)}
  ${vl(t)}
  ${xl(i,l,t)}

  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${xt}]);
      let W_in = i32(uniforms.x_shape[${St}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${tt}], indices[${xt}], indices[${St}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Sl(s,l,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:g=>{let y=O.size(o);return{outputs:[{dims:o,dataType:g[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:c}},getShaderSource:m}},Sh=(e,t)=>{_l(e.inputs),e.compute(kl(e.inputs,t))},kh=e=>ge({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Ae,Tl,Th,Ki,Cl,ur,Ch,Ih=q(()=>{"use strict";te(),se(),$e(),Va(),Ga(),ue(),bt(),Ae=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Tl=(e,t)=>{let i=e[0],r=Ae(e,1),n=Ae(e,2),o=Ae(e,3),s=Ae(e,4),l=Ae(e,5),d=Ae(e,6),c=Ae(e,7);if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let m=i.dims[0],g=i.dims[1],y=i.dims.length===3?i.dims[2]:t.numHeads*i.dims[4],w=g,_=0,$=0,S=Math.floor(y/t.numHeads);if(d&&c&&O.size(d.dims)&&O.size(c.dims)){if(d.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(d.dims[0]!==m||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(c.dims[0]!==m||c.dims[1]!==t.numHeads||c.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[2]!==c.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(c.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');_=d.dims[2],$=d.dims[2]}else if(d&&O.size(d.dims)||c&&O.size(c.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v;if(r&&O.size(r.dims)>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(r.dims[2]!==i.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');v=2,w=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');v=5,w=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');v=0,w=r.dims[2]}}else{if(i.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(i.dims[2]!==t.numHeads||i.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}if(o&&O.size(o.dims)>0){if(o.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(r&&r.dims.length===5&&r.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let b=_+w,k=0;if(s&&O.size(s.dims)>0){k=8;let A=s.dims;throw A.length===1?A[0]===m?k=1:A[0]===3*m+2&&(k=3):A.length===2&&A[0]===m&&A[1]===b&&(k=5),k===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let C=!1,I=y;if(n&&O.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(w!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');I=n.dims[2]}else{if(w!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');I=n.dims[1]*n.dims[3],C=!0}}let E=!1;if(s&&O.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(l&&O.size(l.dims)>0){if(l.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(l.dims[0]!==m||l.dims[1]!==t.numHeads||l.dims[2]!==g||l.dims[3]!==b)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:m,sequenceLength:g,pastSequenceLength:_,kvSequenceLength:w,totalSequenceLength:b,maxSequenceLength:$,inputHiddenSize:0,hiddenSize:y,vHiddenSize:I,headSize:S,vHeadSize:Math.floor(I/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:k,scale:t.scale,broadcastResPosBias:E,passPastInKv:C,qkvFormat:v}},Th=e=>ge({...e}),Ki=ge({perm:[0,2,1,3]}),Cl=(e,t,i,r,n,o,s)=>{let l=[r,n,o],d=O.size(l),c=[{type:12,data:d},{type:12,data:s},{type:12,data:o}],m=g=>{let y=K("qkv_with_bias",t.dataType,l),w=N("qkv",t.dataType,l),_=N("bias",i.dataType,l),$=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${g.registerUniforms($).declareVariables(w,_,y)}
  ${g.mainStart()}
    ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:l,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c}),getShaderSource:m},{inputs:[t,i],outputs:[-1]})[0]},ur=(e,t,i,r,n,o,s,l)=>{let d=o;if(s&&O.size(s.dims)>0){if(r===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return d=Cl(e,o,s,t,r,i*n,l),d=d.reshape([t,r,i,n]),i===1||r===1?d:e.compute(Pe(d,Ki.perm),{inputs:[d],outputs:[-1]})[0]}else return o.dims.length===3&&(d=o.reshape([t,r,i,n])),i===1||r===1?d:e.compute(Pe(d,Ki.perm),{inputs:[d],outputs:[-1]})[0]},Ch=(e,t)=>{let i=Tl(e.inputs,t),r=e.inputs[0],n=Ae(e.inputs,1),o=Ae(e.inputs,2),s=Ae(e.inputs,3),l=Ae(e.inputs,4),d=Ae(e.inputs,5),c=Ae(e.inputs,6),m=Ae(e.inputs,7);if(r.dims.length===5)throw new Error("Packed QKV is not implemented");if(n?.dims.length===5)throw new Error("Packed KV is not implemented");let g=n&&o&&n.dims.length===4&&o.dims.length===4,y=ur(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,r,s,0);if(g)return dr(e,y,n,o,l,void 0,c,m,d,i);if(!n||!o)throw new Error("key and value must be provided");let w=ur(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.headSize,n,s,i.hiddenSize),_=ur(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.vHeadSize,o,s,2*i.hiddenSize);dr(e,y,w,_,l,void 0,c,m,d,i)}}),Il,El,zl,Al,Ca,Eh,zh,Ah=q(()=>{"use strict";te(),se(),$e(),ue(),Il=e=>{if(!e||e.length<1)throw new Error("too few inputs")},El=(e,t)=>{let i=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>i.push(Number(n))),r=i.length),ge({numOutputs:r,axis:t.axis,splitSizes:i})},zl=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${Q("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Al=e=>{let t=e.length,i=[];for(let r=0;r<t;++r){let n=e[r].setByIndices("indices","input[global_idx]");t===1?i.push(n):r===0?i.push(`if (output_number == ${r}u) { ${n} }`):r===t-1?i.push(`else { ${n} }`):i.push(`else if (output_number == ${r}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${i.join(`
`)}
      }`},Ca=(e,t)=>{let i=e[0].dims,r=O.size(i),n=e[0].dataType,o=O.normalizeAxis(t.axis,i.length),s=new Array(t.numOutputs),l=N("input",n,i.length),d=new Array(t.numOutputs),c=[],m=[],g=0,y=[{type:12,data:r}];for(let _=0;_<t.numOutputs;_++){g+=t.splitSizes[_],d[_]=g;let $=i.slice();$[o]=t.splitSizes[_],m.push($),s[_]=K(`output${_}`,n,$.length),c.push({dims:m[_],dataType:e[0].dataType})}y.push({type:12,data:d},...Z(i,...m));let w=_=>`
  ${_.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",d.length).declareVariables(l,...s)}
  ${zl(d.length)}
  ${Al(s)}

  ${_.mainStart()}
    ${_.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${l.offsetToIndices("global_idx")};
    var index = ${l.indicesGet("indices",o)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${Q("uniforms.size_in_split_axis","output_number - 1u",d.length)};
      ${l.indicesSet("indices",o,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:w,getRunData:()=>({outputs:c,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:y})}},Eh=(e,t)=>{Il(e.inputs);let i=e.inputs.length===1?t:El(e.inputs,t);e.compute(Ca(e.inputs,i),{inputs:[0]})},zh=e=>{let t=e.axis,i=e.splitSizes,r=e.numOutputs<0?i.length:e.numOutputs;if(r!==i.length)throw new Error("numOutputs and splitSizes lengh must be equal");return ge({axis:t,numOutputs:r,splitSizes:i})}}),Ol,Rl,Qi,Oh,Hy=q(()=>{"use strict";$e(),Ga(),Ih(),Ah(),bt(),Ol=(e,t)=>{if(t.doRotary)throw new Error("GroupQuerryAttention do_rotary attribute is not supported");if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let i=e[0],r=e[1],n=e[2],o=e[3],s=e[4];if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let l=!1,d=i.dims[0],c=i.dims[1],m=i.dims.length===3?l?i.dims[2]/3:i.dims[2]:t.numHeads*i.dims[4],g=c,y=0,w=!r||r.dims.length===0,_=Math.floor(w?m/(t.numHeads+2*t.kvNumHeads):m/t.numHeads);w&&(m=_*t.numHeads);let $=o&&o.dims.length!==0,S=s&&s.dims.length!==0;if($&&o.dims.length===4&&o.dims[0]===d&&o.dims[1]!==t.kvNumHeads&&o.dims[2]===t.kvNumHeads&&o.dims[3]===_)throw new Error("BSNH pastKey/pastValue is not supported");if($&&S){if(o.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');y=o.dims[2]}else if($||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let v=1;if(r&&r.dims.length>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(r.dims.length<3||r.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==r.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(r.dims.length===3){if(i.dims[2]%r.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');g=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==_)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');g=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==_)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');g=r.dims[2]}}else{if(i.dims.length!==3&&i.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(i.dims.length===5&&(i.dims[2]!==t.numHeads||i.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');v=3}let b=0,k=!1,C=t.kvNumHeads?_*t.kvNumHeads:m;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(g!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');C=n.dims[2]}else{if(g!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');C=n.dims[1]*n.dims[3],k=!0}}let I=e.length>4?e[5]:void 0;if(I&&I.dims.length!==1&&I.dims[0]!==d)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:d,sequenceLength:c,pastSequenceLength:y,kvSequenceLength:g,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:m,vHiddenSize:C,headSize:_,vHeadSize:Math.floor(C/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:b,scale:t.scale,broadcastResPosBias:!1,passPastInKv:k,qkvFormat:v}},Rl=ge({perm:[0,2,1,3]}),Qi=(e,t,i)=>{let r=t,n=i.kvNumHeads;return t.dims.length===3&&i.kvSequenceLength!==0&&(r=t.reshape([i.batchSize,i.kvSequenceLength,n,i.headSize]),r=e.compute(Pe(r,Rl.perm),{inputs:[r],outputs:[-1]})[0]),r},Oh=(e,t)=>{let i=Ol(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let r=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,o=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,l=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,d=e.inputs.length>4?e.inputs[5]:void 0,c=e.inputs.length>5?e.inputs[6]:void 0,m=i.kvNumHeads?i.kvNumHeads:i.numHeads,g=ge({axis:2,numOutputs:3,splitSizes:[i.numHeads*i.headSize,m*i.headSize,m*i.headSize]}),[y,w,_]=!n&&!o?e.compute(Ca([r],g),{inputs:[r],outputs:[-1,-1,-1]}):[r,n,o],$=ur(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,y,void 0,0);dr(e,$,Qi(e,w,i),Qi(e,_,i),void 0,void 0,s,l,void 0,i,d,c)}}),Zi,Bl,Nl,Rh,jy=q(()=>{"use strict";te(),se(),bt(),ue(),Zi=(e,t,i,r,n,o,s,l)=>{let d=be(o),c=d===1?"f32":`vec${d}f`,m=d===1?"vec2f":`mat2x${d}f`,g=n*s,y=64;g===1&&(y=256);let w=[n,s,o/d],_=[n,s,2],$=["rank","type","type"],S=[];S.push(...Z(w,_));let v=b=>{let k=N("x",t.dataType,3,d),C=N("scale",i.dataType,i.dims),I=N("bias",r.dataType,r.dims),E=K("output",1,3,2),A=[k,C,I,E];return`
  var<workgroup> workgroup_shared : array<${m}, ${y}>;
  const workgroup_size = ${y}u;
  ${b.declareVariables(...A)}
  ${b.mainStart(y)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${c}(0);
    var squared_sum = ${c}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${c}(${k.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${m}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${wt("workgroup_shared[0][0]",d)} / f32(hight * ${d});
      let squared_sum_final = ${wt("workgroup_shared[0][1]",d)} / f32(hight * ${d});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${l}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${d};${l};${y}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:_,dataType:1}],dispatchGroup:{x:g},programUniforms:S}),getShaderSource:v},{inputs:[t,i,r],outputs:[-1]})[0]},Bl=(e,t,i)=>{let r=t[0].dims,n=r,o=2,s=r[0],l=r[1],d=O.sizeFromDimension(r,o),c=be(d),m=O.size(n)/c,g=Zi(e,t[0],t[1],t[2],s,d,l,i.epsilon),y=[s,l,d/c],w=[s,l],_=["type","none"],$=S=>{let v=N("x",t[0].dataType,y.length,c),b=N("scale_shift",1,w.length,2),k=K("output",t[0].dataType,y.length,c),C=[v,b,k];return`
  ${S.registerUniform("output_size","u32").declareVariables(...C)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${k.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${b.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${v.getByOffset("global_idx")} * ${k.type.value}(scale_shift.x) + ${k.type.value}(scale_shift.y);
      ${k.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${c}`,inputDependencies:_},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...Z(y,w,y)]}),getShaderSource:$},{inputs:[t[0],g]})},Nl=(e,t,i)=>{let r=t[0].dims,n=r,o=r[0],s=r[r.length-1],l=O.sizeFromDimension(r,1)/s,d=be(s),c=O.size(n)/d,m=[{type:12,data:l},{type:12,data:Math.floor(s/d)}],g=["type","type"],y=!1,w=[0,r.length-1];for(let v=0;v<r.length-2;v++)y=y||r[v+1]!==1,w.push(v+1);y=y&&r[r.length-1]!==1;let _=y?e.compute(Pe(e.inputs[0],w),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(v,b)=>r[w[b]])),$=Zi(e,_,t[1],t[2],o,l,s,i.epsilon),S=v=>{let b=Te(t[0].dataType),k=d===1?"vec2f":`mat${d}x2f`,C=A=>{let D=A===0?"x":"y",V=d===1?"f32":`vec${d}f`;switch(d){case 1:return`${b}(${V}(scale.${D}))`;case 2:return`vec2<${b}>(${V}(scale[0].${D}, scale[1].${D}))`;case 4:return`vec4<${b}>(${V}(scale[0].${D}, scale[1].${D}, scale[2].${D}, scale[3].${D}))`;default:throw new Error(`Not supported compoents ${d}`)}},I=N("input",t[0].dataType,t[0].dims,d),E=K("output",t[0].dataType,n,d);return`
  @group(0) @binding(0) var<storage, read> input : array<${I.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${k}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${E.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${v.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${C(0)}, ${C(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${d}`,inputDependencies:g},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:m}),getShaderSource:S},{inputs:[t[0],$]})},Rh=(e,t)=>{t.format==="NHWC"?Nl(e,e.inputs,t):Bl(e,e.inputs,t)}}),Ml,Dl,Bh,Ky=q(()=>{"use strict";te(),se(),ue(),Ml=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Dl=(e,t,i)=>{let r=t.simplified,n=e[0].dims,o=e[1],s=!r&&e[2],l=n,d=O.normalizeAxis(t.axis,n.length),c=O.sizeToDimension(n,d),m=O.sizeFromDimension(n,d),g=O.size(o.dims),y=s?O.size(s.dims):0;if(g!==m||s&&y!==m)throw new Error(`Size of X.shape()[axis:] == ${m}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${g} and bias size of ${y}`);let w=[];for(let I=0;I<n.length;++I)I<d?w.push(n[I]):w.push(1);let _=be(m),$=["type","type"],S=[{type:12,data:c},{type:1,data:m},{type:12,data:Math.floor(m/_)},{type:1,data:t.epsilon}];s&&$.push("type");let v=i>1,b=i>2,k=I=>{let E=Te(e[0].dataType),A=[N("x",e[0].dataType,e[0].dims,_),N("scale",o.dataType,o.dims,_)];s&&A.push(N("bias",s.dataType,s.dims,_)),A.push(K("output",e[0].dataType,l,_)),v&&A.push(K("mean_data_output",1,w)),b&&A.push(K("inv_std_output",1,w));let D=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${I.registerUniforms(D).declareVariables(...A)}
  ${I.mainStart()}
    ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${_a("f32",_)};
    var mean_square_vector = ${_a("f32",_)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${qt(E,_,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${wt("mean_vector",_)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${wt("mean_square_vector",_)} / uniforms.norm_size ${r?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${qt(E,_,"x[j + offset]")};
      let f32scale = ${qt(E,_,"scale[j]")};
      output[j + offset] = ${A[0].type.value}((f32input ${r?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${qt(E,_,"bias[j]")}`:""}
      );
    }

    ${v?"mean_data_output[global_idx] = mean":""};
    ${b?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},C=[{dims:l,dataType:e[0].dataType}];return v&&C.push({dims:w,dataType:1}),b&&C.push({dims:w,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${_};${i};${r}`,inputDependencies:$},getRunData:()=>({outputs:C,dispatchGroup:{x:Math.ceil(c/64)},programUniforms:S}),getShaderSource:k}},Bh=(e,t)=>{Ml(e.inputs),e.compute(Dl(e.inputs,t,e.outputCount))}}),Ul,Nh,Qy=q(()=>{"use strict";se(),Za(),Xa(),Ul=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Nh=e=>{Ul(e.inputs);let t=Vt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let i=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(i<8&&r<8)e.compute(Qa(e.inputs,{activation:""},t));else{let n=t[t.length-2],o=O.size(e.inputs[0].dims.slice(0,-2)),s=O.size(e.inputs[1].dims.slice(0,-2));if(o!==1&&n===1&&s===1){let l=e.inputs[0].reshape([1,o,r]),d=e.inputs[1].reshape([1,r,i]),c=[1,o,i],m=[l,d];e.compute(jr(m,{activation:""},t,c),{inputs:m})}else e.compute(jr(e.inputs,{activation:""},t))}}}),Pl,Wl,ql,Mh,Dh,Zy=q(()=>{"use strict";te(),se(),$e(),ue(),Pl=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let i=e[0],r=i.dims.length;if(i.dims[r-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),o=t.blockSize/8*t.bits,s=e[1];if(!O.areEqual(s.dims,[t.n,n,o]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let l=e[2].dims;if(O.size(l)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let d=e[3].dims,c=t.bits>4?t.n*n:t.n*Math.floor((n+1)/2);if(O.size(d)!==c)throw new Error("zeroPoints input size error.")}},Wl=(e,t)=>{let i=e[0].dims,r=i.length,n=i[r-2],o=t.k,s=t.n,l=i.slice(0,r-2),d=O.size(l),c=e[1].dims[2]/4,m=e[0].dataType,g=be(t.k),y=be(c),w=be(s),_=l.concat([n,s]),$=n>1&&s/w%2===0?2:1,S=O.size(_)/w/$,v=64,b=[],k=[d,n,o/g],C=O.convertShape(e[1].dims).slice();C.splice(-1,1,c/y),b.push(...Z(k)),b.push(...Z(C)),b.push(...Z(e[2].dims)),e.length===4&&b.push(...Z(O.convertShape(e[3].dims)));let I=[d,n,s/w];b.push(...Z(I));let E=A=>{let D=k.length,V=N("a",e[0].dataType,D,g),G=N("b",12,C.length,y),X=N("scales",e[2].dataType,e[2].dims.length),ee=[V,G,X],P=e.length===4?N("zero_points",12,e[3].dims.length):void 0;P&&ee.push(P);let oe=I.length,de=K("output",e[0].dataType,oe,w),H=Te(e[0].dataType),le=(()=>{switch(g){case 1:return`array<${H}, 8>`;case 2:return`mat4x2<${H}>`;case 4:return`mat2x4<${H}>`;default:throw new Error(`${g}-component is not supported.`)}})(),pe=()=>{let U=`
          // reuse a data
            var input_offset = ${V.indicesToOffset(`${V.type.indices}(batch, row, word_offset)`)};
            var a_data: ${le};
            for (var j: u32 = 0; j < ${8/g}; j++) {
              a_data[j] = ${V.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let L=0;L<w*$;L++)U+=`
            b_value = ${y===1?`b${L}_data`:`b${L}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${le}(${Array.from({length:4},(B,Y)=>`${H}(b_value_lower[${Y}]), ${H}(b_value_upper[${Y}])`).join(", ")});
            b_dequantized_values = ${g===1?`${le}(${Array.from({length:8},(B,Y)=>`(b_quantized_values[${Y}] - ${P?`zero_point${L}`:"zero_point"}) * scale${L}`).join(", ")});`:`(b_quantized_values - ${le}(${Array(8).fill(`${P?`zero_point${L}`:"zero_point"}`).join(",")})) * scale${L};`};
            workgroup_shared[local_id.x * ${$} + ${Math.floor(L/w)}]${w>1?`[${L%w}]`:""} += ${Array.from({length:8/g},(B,Y)=>`${g===1?`a_data[${Y}] * b_dequantized_values[${Y}]`:`dot(a_data[${Y}], b_dequantized_values[${Y}])`}`).join(" + ")};
          `;return U},j=()=>{let U=`
            var col_index = col * ${w};
            ${P?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${H}(8);`}
            `;for(let L=0;L<w*$;L++)U+=`
            let scale${L} = ${X.getByOffset("col_index * nBlocksPerCol + block")};
            ${P?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${P.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${L} = ${H}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return U},ce=()=>{let U=`col_index = col * ${w};`;for(let L=0;L<w*$;L++)U+=`
            let b${L}_data = ${G.getByIndices(`${G.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return U+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${le};
            var b_dequantized_values: ${le};`,U};return`
        var<workgroup> workgroup_shared: array<${de.type.value}, ${$*v}>;
        ${A.declareVariables(...ee,de)}
        ${A.mainStart([v,1,1])}
          let output_indices = ${de.offsetToIndices(`(global_idx / ${v}) * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${v}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/g};
            ${j()}
            for (var word: u32 = 0; word < ${c}; word += ${y}) {
              ${ce()}
              for (var i: u32 = 0; i < ${y}; i++) {
                ${pe()}
                word_offset += ${8/g};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${$}) {
            var output_value: ${de.type.value} = ${de.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${v}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${$};
            }
            ${de.setByIndices(`${de.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${g};${y};${w};${$};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:_,dataType:m}],dispatchGroup:{x:S},programUniforms:b}),getShaderSource:E}},ql=(e,t)=>{let i=e[0].dims,r=i.length,n=i[r-2],o=t.k,s=t.n,l=i.slice(0,r-2),d=O.size(l),c=e[1].dims[2]/4,m=e[0].dataType,g=be(t.k),y=be(c),w=l.concat([n,s]),_=128,$=s%8===0?8:s%4===0?4:1,S=_/$,v=S*y*8,b=v/g,k=v/t.blockSize,C=O.size(w)/$,I=[],E=[d,n,o/g],A=O.convertShape(e[1].dims).slice();A.splice(-1,1,c/y),I.push(...Z(E)),I.push(...Z(A)),I.push(...Z(e[2].dims)),e.length===4&&I.push(...Z(O.convertShape(e[3].dims)));let D=[d,n,s];I.push(...Z(D));let V=G=>{let X=E.length,ee=N("a",e[0].dataType,X,g),P=N("b",12,A.length,y),oe=N("scales",e[2].dataType,e[2].dims.length),de=[ee,P,oe],H=e.length===4?N("zero_points",12,e[3].dims.length):void 0;H&&de.push(H);let le=D.length,pe=K("output",e[0].dataType,le),j=Te(e[0].dataType),ce=()=>{switch(g){case 1:return`
          let a_data0 = vec4<${j}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${j}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${j}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${j}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${g}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${ee.type.value}, ${b}>;
        var<workgroup> inter_results: array<array<${pe.type.value}, ${S}>, ${$}>;
        ${G.declareVariables(...de,pe)}
        ${G.mainStart([S,$,1])}
          let output_indices = ${pe.offsetToIndices(`workgroup_index * ${$}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${k} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${b};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${b}; a_offset += ${_})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${ee.getByIndices(`${ee.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${ee.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${k} + local_id.x;
            ${H?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${H.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${j}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${j}(8);`}
            let scale = ${oe.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${P.getByIndices(`${P.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/g};
            for (var i: u32 = 0; i < ${y}; i++) {
              ${ce()}
              let b_value = ${y===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${j}>(${Array.from({length:4},(U,L)=>`${j}(b_value_lower[${L}]), ${j}(b_value_upper[${L}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${j}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(U,L)=>`${`dot(a_data${L}, b_dequantized_values[${L}])`}`).join(" + ")};
              word_offset += ${8/g};
            }
            workgroupBarrier();
          }

          if (local_idx < ${$}) {
            var output_value: ${pe.type.value} = ${pe.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${pe.setByIndices(`${pe.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${g};${y};${S};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:w,dataType:m}],dispatchGroup:{x:C},programUniforms:I}),getShaderSource:V}},Mh=(e,t)=>{Pl(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(ql(e.inputs,t)):e.compute(Wl(e.inputs,t))},Dh=e=>ge(e)}),Vl,Ll,Fl,Gl,Hl,jl,Kl,Ql,Uh,Xy=q(()=>{"use strict";te(),se(),ue(),Vl=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Ll=(e,t,i)=>{let r="";for(let n=t-1;n>=0;--n)r+=`
            k = i32(${e.indicesGet("indices",n)}) - ${Q("uniforms.pads",n,i)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${Q("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${Q("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},Fl=(e,t,i)=>{let r="";for(let n=t-1;n>=0;--n)r+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Q("uniforms.pads",n,i)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${Q("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${Q("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${Q("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Gl=(e,t,i)=>{let r="";for(let n=t-1;n>=0;--n)r+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Q("uniforms.pads",n,i)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${Q("uniforms.x_shape",n,t)})) {
                  k = i32(${Q("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${Q("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Hl=(e,t,i)=>{let r="";for(let n=t-1;n>=0;--n)r+=`
                k = i32(${e.indicesGet("indices",n)}) - ${Q("uniforms.pads",n,i)};
                if (k < 0)  {
                  k += i32(${Q("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${Q("uniforms.x_shape",n,t)})) {
                  k -= i32(${Q("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${Q("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},jl=(e,t,i)=>{switch(i.mode){case 0:return Ll(e,t,i.pads.length);case 1:return Fl(e,t,i.pads.length);case 2:return Gl(e,t,i.pads.length);case 3:return Hl(e,t,i.pads.length);default:throw new Error("Invalid mode")}},Kl=(e,t)=>{let i=O.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,n=O.size(i),o=[{type:12,data:n},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&o.push({type:s?e[2].dataType:1,data:t.value}),o.push(...Z(e[0].dims,i));let l=["rank"],d=c=>{let m=K("output",e[0].dataType,i.length),g=N("x",e[0].dataType,r.length),y=g.type.value,w=jl(m,r.length,t),_=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&_.push({name:"constant_value",type:s?y:"f32"}),`
            ${c.registerUniforms(_).declareVariables(g,m)}
            ${c.mainStart()}
            ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${m.offsetToIndices("global_idx")};

            var value = ${y}(0);
            ${w}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(i)/64)},programUniforms:o}),getShaderSource:d}},Ql=(e,t)=>{if(e.length>1){let i=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,o=new Int32Array(2*n).fill(0);if(e.length>=4){let l=e[3].getBigInt64Array();for(let d=0;d<l.length;d++)o[Number(l[d])]=Number(i[d]),o[Number(l[d])+n]=Number(i[d+l.length])}else i.forEach((l,d)=>o[Number(d)]=Number(l));let s=[];return o.forEach(l=>s.push(l)),{mode:t.mode,value:r,pads:s}}else return t},Uh=(e,t)=>{Vl(e.inputs);let i=Ql(e.inputs,t);e.compute(Kl(e.inputs,i),{inputs:[0]})}}),tr,Xi,Ji,Yi,ea,Zl,Xl,ta,ra,Ph,Wh,ia,qh,Vh,aa,Lh,Fh,Gh,Hh,Jy=q(()=>{"use strict";Ze(),te(),se(),ue(),tr=e=>{if(ye.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Xi=(e,t,i)=>{let r=t.format==="NHWC",n=e.dims.slice();r&&n.splice(1,0,n.pop());let o=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),l=t.strides.slice(),d=o?t.dilations.slice():[],c=t.pads.slice();Gr.adjustPoolAttributes(i,n,s,l,d,c);let m=Gr.computePoolOutputShape(i,n,l,d,s,c,t.autoPad),g=Object.assign({},t);o?Object.assign(g,{kernelShape:s,strides:l,pads:c,dilations:d,cacheKey:t.cacheKey}):Object.assign(g,{kernelShape:s,strides:l,pads:c,cacheKey:t.cacheKey});let y=m.slice();return y.push(y.splice(1,1)[0]),[g,r?y:m]},Ji=(e,t)=>{let i=t.format==="NHWC",r=O.size(e),n=O.size(t.kernelShape),o=[{type:12,data:r},{type:12,data:n}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let l=t.kernelShape[t.kernelShape.length-1],d=t.strides[t.strides.length-1],c=t.pads[t.pads.length/2-1],m=t.pads[t.pads.length-1],g=!!(c+m);o.push({type:12,data:l},{type:12,data:d},{type:12,data:c},{type:12,data:m}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let y=!1;if(t.kernelShape.length===2){let w=t.kernelShape[t.kernelShape.length-2],_=t.strides[t.strides.length-2],$=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];y=!!($+S),o.push({type:12,data:w},{type:12,data:_},{type:12,data:$},{type:12,data:S}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[o,s,!0,g,y]}else{if(i)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let l=O.computeStrides(t.kernelShape);o.push({type:12,data:l},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:l.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let d=t.pads.reduce((c,m)=>c+m);return[o,s,!!d,!1,!1]}},Yi=(e,t,i,r,n,o,s,l,d,c,m,g)=>{let y=n.format==="NHWC",w=t.type.value,_=K("output",t.type.tensor,r);if(n.kernelShape.length<=2){let $="",S="",v="",b=i-(y?2:1);if(m?$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${b}] < 0 || xIndices[${b}]
                      >= uniforms.x_shape[${b}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${o}
                }`:$=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${b}] = indices[${b}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${o}
                }`,n.kernelShape.length===2){let k=i-(y?3:2);g?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${k}] < 0 || xIndices[${k}] >= uniforms.x_shape[${k}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${k}] = indices[${k}] * uniforms.sh - uniforms.phStart + j;
                `,v=`
              }
            `}return`
            ${e.registerUniforms(d).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var value = ${w}(${l});
              var pad = 0;
              ${S}
              ${$}
              ${v}
              ${s}

              output[global_idx] = value;
            }`}else{if(y)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let $=n.kernelShape.length,S=n.pads.length,v="";return c?v=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${o}
              }`:v=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${o}
            `,`
            ${e.registerUniforms(d).declareVariables(t,_)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${_.offsetToIndices("global_idx")};
              var xIndices = ${_.offsetToIndices("global_idx")};

              var offsets: array<u32, ${$}>;

              var value = ${w}(${l});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${$-1}u; j++) {
                  offsets[j] = offset / ${Q("uniforms.kernelStrides","j",$)};
                  offset -= offsets[j] * ${Q("uniforms.kernelStrides","j",$)};
                }
                offsets[${$-1}] = offset;

                isPad = false;
                for (var j = ${i-$}u; j < ${i}u; j++) {
                  xIndices[j] = indices[j] * ${Q("uniforms.strides",`j - ${i-$}u`,$)}
                    + offsets[j - ${i-$}u] - ${Q("uniforms.pads","j - 2u",S)};
                  ${v}
              }
              ${s}

              output[global_idx] = value;
            }`}},ea=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Zl=e=>`${ea(e)};${e.countIncludePad}`,Xl=e=>`${ea(e)};${e.storageOrder};${e.dilations}`,ta=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),ra=(e,t,i,r)=>{let[n,o]=Xi(t,r,i),s=N("x",t.dataType,t.dims.length),l=s.type.value,d="value += x_val;",c="";n.countIncludePad?c+=`value /= ${l}(uniforms.kernelSize);`:c+=`value /= ${l}(i32(uniforms.kernelSize) - pad);`;let[m,g,y,w,_]=Ji(o,n);m.push(...Z(t.dims,o));let $=["rank"];return{name:e,shaderCache:{hint:`${r.cacheKey};${y};${w};${_}`,inputDependencies:$},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(o)/64)},programUniforms:m}),getShaderSource:S=>Yi(S,s,t.dims.length,o.length,n,d,c,0,g,y,w,_)}},Ph=e=>{let t=e.count_include_pad!==0,i=ta(e);if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let r={countIncludePad:t,...i,cacheKey:""};return{...r,cacheKey:Zl(r)}},Wh=(e,t)=>{tr(e.inputs),e.compute(ra("AveragePool",e.inputs[0],!1,t))},ia={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},qh=e=>{let t=e.format;return{format:t,...ia,cacheKey:t}},Vh=(e,t)=>{tr(e.inputs),e.compute(ra("GlobalAveragePool",e.inputs[0],!0,t))},aa=(e,t,i,r)=>{let[n,o]=Xi(t,r,i),s=`
      value = max(x_val, value);
    `,l="",d=N("x",t.dataType,t.dims.length),c=["rank"],[m,g,y,w,_]=Ji(o,n);return m.push(...Z(t.dims,o)),{name:e,shaderCache:{hint:`${r.cacheKey};${y};${w};${_}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:o,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(o)/64)},programUniforms:m}),getShaderSource:$=>Yi($,d,t.dims.length,o.length,n,s,l,t.dataType===10?-65504:-1e5,g,y,w,_)}},Lh=(e,t)=>{tr(e.inputs),e.compute(aa("MaxPool",e.inputs[0],!1,t))},Fh=e=>{let t=e.storage_order,i=e.dilations,r=ta(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:i,...r,cacheKey:""};return{...n,cacheKey:Xl(n)}},Gh=e=>{let t=e.format;return{format:t,...ia,cacheKey:t}},Hh=(e,t)=>{tr(e.inputs),e.compute(aa("GlobalMaxPool",e.inputs[0],!0,t))}}),Jl,Yl,jh,Kh,Yy=q(()=>{"use strict";te(),se(),$e(),ue(),Jl=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((i,r)=>i===e[2].dims[r]).reduce((i,r)=>i&&r,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,o)=>o===t.axis||n===e[0].dims[o]).reduce((n,o)=>n&&o,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let i=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(i/r)||t.blockSize>Math.ceil(i/(r-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},Yl=(e,t)=>{let i=O.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,n=r===3,o=e[0].dims,s=e[1].dataType,l=O.size(o),d=r===3||r===2,c=d?[Math.ceil(O.size(e[0].dims)/4)]:e[0].dims,m=e[1].dims,g=e.length>2?e[2]:void 0,y=g?d?[Math.ceil(O.size(g.dims)/4)]:g.dims:void 0,w=m.length===0||m.length===1&&m[0]===1,_=w===!1&&m.length===1,$=be(l),S=w&&(!d||$===4),v=S?$:1,b=S&&!d?$:1,k=N("input",d?12:r,c.length,b),C=N("scale",s,m.length),I=g?N("zero_point",d?12:r,y.length):void 0,E=K("output",s,o.length,v),A=[k,C];I&&A.push(I);let D=[c,m];g&&D.push(y);let V=[{type:12,data:l/v},{type:12,data:i},{type:12,data:t.blockSize},...Z(...D,o)],G=X=>{let ee=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${X.registerUniforms(ee).declareVariables(...A,E)}
      ${X.mainStart()}
          ${X.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${E.offsetToIndices("global_idx")};

          // Set input x
          ${d?`
            let input = ${k.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${v===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${k.getByOffset("global_idx")};`};

          // Set scale input
          ${w?`let scale_value= ${C.getByOffset("0")}`:_?`
            let scale_index = ${E.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${C.getByOffset("scale_index")};`:`
            var scale_indices: ${C.type.indices} = output_indices;
            let index = ${C.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${C.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${C.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${I?w?d?`
                let zero_point_input = ${I.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${I.getByOffset("0")}`:_?d?`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${I.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${E.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${I.getByOffset("zero_point_index")};`:d?`
                let zero_point_offset = ${C.indicesToOffset("scale_indices")};
                let zero_point_input = ${I.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${I.getByIndices("scale_indices")};`:`let zero_point_value = ${d?n?"i32":"u32":k.type.value}(0);`};
      // Compute and write output
      ${E.setByOffset("global_idx",`${E.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:I?["rank","rank","rank"]:["rank","rank"]},getShaderSource:G,getRunData:()=>({outputs:[{dims:o,dataType:s}],dispatchGroup:{x:Math.ceil(l/v/64),y:1,z:1},programUniforms:V})}},jh=(e,t)=>{Jl(e.inputs,t),e.compute(Yl(e.inputs,t))},Kh=e=>ge({axis:e.axis,blockSize:e.blockSize})}),ed,td,Qh,e_=q(()=>{"use strict";Ze(),te(),ue(),ed=(e,t,i)=>{let r=e===t,n=e<t&&i<0,o=e>t&&i>0;if(r||n||o)throw new Error("Range these inputs' contents are invalid.")},td=(e,t,i,r)=>{let n=Math.abs(Math.ceil((t-e)/i)),o=[n],s=n,l=[{type:12,data:s},{type:r,data:e},{type:r,data:i},...Z(o)],d=c=>{let m=K("output",r,o.length),g=m.type.value,y=[{name:"outputSize",type:"u32"},{name:"start",type:g},{name:"delta",type:g}];return`
        ${c.registerUniforms(y).declareVariables(m)}
        ${c.mainStart()}
        ${c.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${g}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${r}`},getShaderSource:d,getRunData:()=>({outputs:[{dims:o,dataType:r}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l})}},Qh=e=>{let t=0,i=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],i=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],i=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),ye.webgpu.validateInputContent&&ed(t,i,r),e.compute(td(t,i,r,e.inputs[0].dataType),{inputs:[]})}}),rd,id,Zh,Xh,t_=q(()=>{"use strict";te(),se(),$e(),ue(),rd=(e,t,i,r)=>{if(e!=="none"&&r!=="i32"&&r!=="u32"&&r!=="f32")throw new Error(`Input ${r} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,o=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${i};`;case"add":return r==="i32"||r==="u32"?`atomicAdd(&${t}, bitcast<${r}>(${i}));`:`
              ${n}bitcast<${r}>(oldValue) + (${i})${o}`;case"max":return r==="i32"||r==="u32"?`atomicMax(&${t}, bitcast<${r}>(${i}));`:`
                ${n}max(bitcast<f32>(oldValue), (${i}))${o}`;case"min":return r==="i32"||r==="u32"?`atomicMin(&${t}, bitcast<${r}>(${i}));`:`${n}min(bitcast<${r}>(oldValue), (${i}))${o}`;case"mul":return`${n}(bitcast<${r}>(oldValue) * (${i}))${o}`;default:throw new Error(`Reduction ${e} is not supported.`)}},id=(e,t)=>{let i=e[0].dims,r=e[1].dims,n=i,o=1,s=Math.ceil(O.size(r)/o),l=r[r.length-1],d=O.sizeFromDimension(i,l),c=[{type:12,data:s},{type:12,data:l},{type:12,data:d},...Z(e[1].dims,e[2].dims,n)],m=g=>{let y=N("indices",e[1].dataType,e[1].dims.length),w=N("updates",e[2].dataType,e[2].dims.length,o),_=t.reduction!=="none"&&t.reduction!==""?Cp("output",e[0].dataType,n.length):K("output",e[0].dataType,n.length,o);return`
      ${g.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(y,w,_)}
      ${g.mainStart()}
        ${g.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var hasDuplicates = false;
  if (${t.reduction==="none"}) {
    let n = ${O.size(r)};
    for (var i = 0; i < n; i = i + 1) {
      for (var j = i + 1; j < n; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  if (${t.reduction==="none"} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    indices_start = 0u;
  }
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${rd(t.reduction,"output[data_offset + i]","value",_.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:c}),getShaderSource:m}},Zh=e=>ge({reduction:e.reduction}),Xh=(e,t)=>{e.compute(id(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),ad,nd,sd,na,od,ud,ld,dd,pd,cd,hd,fd,sa,md,gd,yd,_d,wd,Jh,Yh,r_=q(()=>{"use strict";te(),se(),$e(),ue(),ad=(e,t)=>{if(e.every(i=>i>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},nd=(e,t,i)=>{t.every(n=>n>=0&&n<i||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let r=new Array(i).fill(1);return t.forEach((n,o)=>r[n]=e[o]),r},sd=(e,t,i,r,n,o)=>{let[s,l,d]=i>10?[1,2,3]:[-1,e.length>1?1:-1,-1],c=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(m=>o.push(m));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0){if(e[l].getFloat32Array().forEach(m=>r.push(m)),r.length!==0&&r.length!==c&&i>=18&&r.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");ad(r,t),t.axes.length>0&&nd(r,t.axes,c).forEach((m,g)=>r[g]=m)}if(d>0&&e.length>d&&e[d].dims.length===1&&e[d].dims[0]>0&&(e[d].getBigInt64Array().forEach(m=>n.push(Number(m))),n.length!==0&&n.length!==c&&i>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof r<"u"&&typeof n<"u"&&r.length>0&&n.length>c)throw new Error("Resize requires only of scales or sizes to be specified")},na=(e,t,i,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${i}));
  let fract = ${r}(big % (${i})) / ${r}(${i});
  return whole + fract;
`,od=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${na("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${na("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",ud=(e,t,i)=>`fn getNearestPixelFromOriginal(xOriginal: ${i}, isDownSample: bool) -> ${i} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";case"simple":default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",ld=(e,t,i)=>{let r=new Array(i).fill(0).concat(new Array(i).fill(1)),n=e.length===0?r:e.slice();return t.length>0?(t.forEach((o,s)=>{r[o]=n[s],r[s+i]=n[t.length+s]}),r):n},dd=(e,t,i,r)=>{let n=[];if(i.length>0)if(r.length>0){if(e.forEach(o=>n.push(o)),Math.max(...r)>e.length)throw new Error("axes is out of bound");r.forEach((o,s)=>n[o]=i[s])}else i.forEach(o=>n.push(o));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((o,s)=>Math.round(o*t[s]))}return n},pd=(e,t,i)=>{let r=(()=>{switch(i.keepAspectRatioPolicy){case"not_larger":return i.axes.length>0?Math.min(...i.axes.map(o=>t[o]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return i.axes.length>0?Math.max(...i.axes.map(o=>t[o]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${i.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return i.axes.length>0?(i.axes.forEach(o=>t[o]=r),i.axes.forEach(o=>n[o]=Math.round(e[o]*t[o]))):(t.fill(r,0,t.length),n.forEach((o,s)=>n[s]=Math.round(o*t[s]))),n},cd=(e,t,i,r,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${i.length}> {
      var original_indices: array<${e.type.value}, ${i.length}>;
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${Q("uniforms.scales","i",r)};
        var roi_low = ${Q("uniforms.roi","i",n)};
        var roi_hi = ${Q("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${Q("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${Q("uniforms.output_shape","i",i.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,hd=(e,t,i,r,n,o,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${Q("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${Q("uniforms.roi","i",o)};
          var roi_hi = ${Q("uniforms.roi",`i + ${i.length}`,o)};
          var input_shape_i = ${Q("uniforms.input_shape","i",i.length)};
          var output_shape_i = ${Q("uniforms.output_shape","i",r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,fd=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${Q("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,sa=(e,t,i,r)=>e.rank>r?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",i,"batch")};
`:"",md=(e,t,i,r,n)=>{let[o,s,l,d]=i.length===2?[-1,0,1,-1]:[0,2,3,1],c=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${c} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${i[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(col, ${i[l]} - 1))`)};
      ${sa(e,d,o,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${c} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${c} = originalIndices[${s}];
      var col:${c} = originalIndices[${l}];
      ${r?`if (row < 0 || row > (${i[s]} - 1) || col < 0 || col > (${i[l]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${i[s]} - 1));
      col = max(0, min(col, ${i[l]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${i.length>2?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${i.length>2?`u32(originalIndices[${o}])`:"0"};
      var x11: ${c} = getInputValue(batch, channel, row1, col1);
      var x12: ${c} = getInputValue(batch, channel, row1, col2);
      var x21: ${c} = getInputValue(batch, channel, row2, col1);
      var x22: ${c} = getInputValue(batch, channel, row2, col2);
      var dx1: ${c} = abs(row - ${c}(row1));
      var dx2: ${c} = abs(${c}(row2) - row);
      var dy1: ${c} = abs(col - ${c}(col1));
      var dy2: ${c} = abs(${c}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},gd=(e,t,i,r,n,o,s,l,d,c)=>{let m=i.length===2,g=!0,[y,w]=m?[0,1]:g?[2,3]:[1,2],_=e.type.value,$=S=>{let v=S===y?"row":"col";return`
      fn ${v}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${_} {
        var output_index = ${t.indicesGet("output_indices",S)};
        var originalIdx: ${_} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[S]},
        ${r[S]}, ${i[S]}, ${o[S]}, ${o[S]} + ${i.length});
        var fractOriginalIdx: ${_} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${l} && (originalIdx < 0 || originalIdx > (${i[S]} - 1))) {
          return ${d};
        }
        var data: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${v}: ${_} = originalIdx + ${_}(i);
          if (${v} < 0 || ${v} >= ${i[S]}) {
            ${c?`coefs[i + 1] = 0.0;
                        continue;`:l?`return ${d};`:`${v} = max(0, min(${v}, ${i[S]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",S,`u32(${v})`)};
          data[i + 1] = ${S===y?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${$(y)};
    ${$(w)};
  fn getCubicInterpolationCoefs(s: ${_}) -> array<${_}, 4> {
    var absS = abs(s);
    var coeffs: array<${_}, 4> = array<${_}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${_} = 1.0 - absS;
    var twoMinusAbsS: ${_} = 2.0 - absS;
    var onePlusAbsS: ${_} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${_}, 4>, coefs: array<${_}, 4>) -> ${_} {
    var coefsSum: ${_} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${_} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},yd=(e,t,i,r,n)=>{let[o,s,l,d,c]=i.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],m=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${m} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${i[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(height, ${i[l]} - 1))`)};
      ${e.indicesSet("input_indices",d,`max(0, min(width, ${i[d]} - 1))`)};
      ${sa(e,c,o,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${m} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${m} = originalIndices[${s}];
      var height:${m} = originalIndices[${l}];
      var width:${m} = originalIndices[${d}];
      ${r?`if (depth < 0 || depth > (${i[s]} - 1) || height < 0 || height > (${i[l]} - 1) || width < 0 || (width > ${i[d]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${i[s]} - 1));
      height = max(0, min(height, ${i[l]} - 1));
      width = max(0, min(width, ${i[d]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${i.length>3?`u32(originalIndices[${c}])`:"0"};
      var batch: u32 =  ${i.length>3?`u32(originalIndices[${o}])`:"0"};

      var x111: ${m} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${m} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${m} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${m} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${m} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${m} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${m} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${m} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${m} = abs(depth - ${m}(depth1));
      var dx2: ${m} = abs(${m}(depth2) - depth);
      var dy1: ${m} = abs(height - ${m}(height1));
      var dy2: ${m} = abs(${m}(height2) - height);
      var dz1: ${m} = abs(width - ${m}(width1));
      var dz2: ${m} = abs(${m}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},_d=(e,t,i,r,n,o)=>{let s=e.dims,l=ld(o,t.axes,s.length),d=dd(s,r,n,t.axes),c=r.slice();r.length===0&&(c=s.map((b,k)=>b===0?1:d[k]/b),t.keepAspectRatioPolicy!=="stretch"&&(d=pd(s,c,t)));let m=K("output",e.dataType,d.length),g=N("input",e.dataType,s.length),y=O.size(d),w=s.length===d.length&&s.every((b,k)=>b===d[k]),_=t.coordinateTransformMode==="tf_crop_and_resize",$=t.extrapolationValue,S=g.type.value,v=b=>`
      ${w?"":`
      ${od(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${fd(g,s)};
              ${ud(t.nearestMode,i,S)};
              ${hd(g,m,s,d,c.length,l.length,_)};
              `;case"linear":return`
              ${cd(m,s,d,c.length,l.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${md(g,m,s,_,$)}`;if(s.length===3||s.length===5)return`${yd(g,m,s,_,$)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${gd(g,m,s,d,c,l,t.cubicCoeffA,_,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${b.registerUniform("output_size","u32").registerUniform("scales","f32",c.length).registerUniform("roi","f32",l.length).declareVariables(g,m)}
      ${b.mainStart()}
        ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${w?"output[global_idx] = input[global_idx];":`
        let output_indices = ${m.offsetToIndices("global_idx")};
        var input_indices: ${g.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${g.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${i}|${c.length>0?t.mode==="cubic"?c:c.length:""}|${n.length>0?n:""}|${l.length>0?l:""}|${w}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:d,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},{type:1,data:c},{type:1,data:l},...Z(s,d)]})}},wd=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Jh=(e,t)=>{let i=[],r=[],n=[],o=wd(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");sd(e.inputs,t,o,i,r,n),e.compute(_d(e.inputs[0],t,o,i,r,n),{inputs:[0]})},Yh=e=>{let t=e.antialias,i=e.axes,r=e.coordinateTransformMode,n=e.cubicCoeffA,o=e.excludeOutside!==0,s=e.extrapolationValue,l=e.keepAspectRatioPolicy,d=e.mode,c=e.nearestMode===""?"simple":e.nearestMode;return ge({antialias:t,axes:i,coordinateTransformMode:r,cubicCoeffA:n,excludeOutside:o,extrapolationValue:s,keepAspectRatioPolicy:l,mode:d,nearestMode:c})}}),bd,$d,ef,i_=q(()=>{"use strict";te(),se(),$e(),ue(),bd=(e,t)=>{let[i,r,n,o]=e,{numHeads:s,rotaryEmbeddingDim:l}=t;if(i.dims.length!==3&&i.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${i.dims.length}`);if(!O.areEqual(r.dims,[])&&!O.areEqual(r.dims,[1])&&r.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(o.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${o.dims.length}`);if(!O.areEqual(n.dims,o.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(l>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let d=i.dims[0],c=i.dims[i.dims.length-2],m=n.dims[0],g=O.sizeFromDimension(i.dims,1)/c,y=l===0?n.dims[1]*2:g/s;if(l>y)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(r.dims.length===2){if(d!==r.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(c!==r.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(y/2!==n.dims[1]&&l/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`);if(c>m)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},$d=(e,t)=>{let{interleaved:i,numHeads:r,rotaryEmbeddingDim:n,scale:o}=t,s=e[0].dims[0],l=O.sizeFromDimension(e[0].dims,1),d=e[0].dims[e[0].dims.length-2],c=l/d,m=e[2].dims[1],g=n===0?m*2:c/r,y=new Array(s,d,c/g,g-m),w=O.computeStrides(y),_=[{type:1,data:o},{type:12,data:y},{type:12,data:w},...e[0].dims.length===3?new Array({type:12,data:[l,c,g,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[l,g,d*g,1]}):[],...Z(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],$=S=>{let v=N("input",e[0].dataType,e[0].dims.length),b=N("position_ids",e[1].dataType,e[1].dims.length),k=N("cos_cache",e[2].dataType,e[2].dims.length),C=N("sin_cache",e[3].dataType,e[3].dims.length),I=K("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:y.length},{name:"global_strides",type:"u32",length:w.length},{name:"input_output_strides",type:"u32",length:w.length}]),`
        ${S.declareVariables(v,b,k,C,I)}

        ${S.mainStart(Lt)}
          let half_rotary_emb_dim = uniforms.${k.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${b.broadcastedIndicesToOffset("bsnh.xy",K("",b.type.tensor,2))};
            let position_id =
                u32(${b.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${i});
            let j = i + select(half_rotary_emb_dim, 1, ${i});
            let re = ${v.getByOffset("i")} * ${k.get("position_id","bsnh[3]")} -
                ${v.getByOffset("j")} * ${C.get("position_id","bsnh[3]")};
            ${I.setByOffset("i","re")}
            let im = ${v.getByOffset("i")} * ${C.get("position_id","bsnh[3]")} +
                ${v.getByOffset("j")} * ${k.get("position_id","bsnh[3]")};
            ${I.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${I.setByOffset("k",v.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:ge({interleaved:i}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(y)/Lt)},programUniforms:_})}},ef=(e,t)=>{bd(e.inputs,t),e.compute($d(e.inputs,t))}}),vd,xd,tf,a_=q(()=>{"use strict";te(),se(),ue(),vd=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],i=e[1],r=e[2];if(t.dataType!==i.dataType||t.dataType!==r.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(i.dims.length!==3&&i.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],o=t.dims[t.dims.length-2];if(i.dims[i.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(i.dims[i.dims.length-2]!==o)throw new Error("Skip must have the same sequence length as input");if(r.dims.length!==1)throw new Error("Gamma must be 1D");if(r.dims[r.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},xd=(e,t,i,r)=>{let n=t.simplified,o=e[0].dims,s=O.size(o),l=o,d=s,c=o.slice(-1)[0],m=r?o.slice(0,-1).concat(1):[],g=!n&&e.length>3,y=e.length>4,w=r&&i>1,_=r&&i>2,$=i>3,S=64,v=be(c),b=[{type:12,data:d},{type:12,data:v},{type:12,data:c},{type:1,data:t.epsilon}],k=I=>{let E=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],A=[N("x",e[0].dataType,e[0].dims,v),N("skip",e[1].dataType,e[1].dims,v),N("gamma",e[2].dataType,e[2].dims,v)];g&&A.push(N("beta",e[3].dataType,e[3].dims,v)),y&&A.push(N("bias",e[4].dataType,e[4].dims,v)),A.push(K("output",e[0].dataType,l,v)),w&&A.push(K("mean_output",1,m)),_&&A.push(K("inv_std_output",1,m)),$&&A.push(K("input_skip_bias_sum",e[0].dataType,l,v));let D=Te(e[0].dataType),V=Te(1,v);return`

      ${I.registerUniforms(E).declareVariables(...A)}
      var<workgroup> sum_shared : array<${V}, ${S}>;
      var<workgroup> sum_squared_shared : array<${V}, ${S}>;

      ${I.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${y?"bias[offset1d + i]":D+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${$?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${qt(D,v,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${wt("sum",v)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${wt("square_sum",v)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${w?"mean_output[global_idx] = mean;":""}
        ${_?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${D}(mean)`}) *
            ${D}(inv_std_dev) * gamma[offset1d + i]
            ${g?"+ beta[offset1d + i]":""};
        }
      }`},C=[{dims:l,dataType:e[0].dataType}];return i>1&&C.push({dims:m,dataType:1}),i>2&&C.push({dims:m,dataType:1}),i>3&&C.push({dims:o,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${v};${w};${_};${$}`,inputDependencies:e.map((I,E)=>"type")},getShaderSource:k,getRunData:()=>({outputs:C,dispatchGroup:{x:Math.ceil(d/c)},programUniforms:b})}},tf=(e,t)=>{vd(e.inputs);let i=[0];e.outputCount>1&&i.push(-3),e.outputCount>2&&i.push(-3),e.outputCount>3&&i.push(3),e.compute(xd(e.inputs,t,e.outputCount,!1),{outputs:i})}}),Sd,rr,kd,oa,Td,Cd,rf,af,n_=q(()=>{"use strict";te(),se(),$e(),ue(),Sd=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((i,r)=>{if(e[r+1].dataType!==6&&e[r+1].dataType!==7)throw new Error(`Input ${r} must be an array of int32 or int64`)})},rr=(e,t)=>{let i=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(r=>i.push(Number(r)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(r=>i.push(Number(r)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return i},kd=(e,t)=>{if(e.length>1){let i=rr(e,1),r=rr(e,2),n=rr(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),ge({starts:i,ends:r,axes:n})}else return t},oa=(e,t,i,r,n)=>{let o=e;return e<0&&(o+=i[r[t]]),n[t]<0?Math.max(0,Math.min(o,i[r[t]]-1)):Math.max(0,Math.min(o,i[r[t]]))},Td=(e,t,i)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${i.length}; i >= 0; i--) {
            let input_shape_i = ${Q("uniforms.input_shape","i",i.length)};
            let steps_i = ${Q("uniforms.steps","i",i.length)};
            let signs_i = ${Q("uniforms.signs","i",i.length)};
            let starts_i = ${Q("uniforms.starts","i",i.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Cd=(e,t)=>{let i=e[0].dims,r=O.size(i),n=t.axes.length>0?O.normalizeAxes(t.axes,i.length):[...Array(i.length).keys()],o=rr(e,4);o.forEach(v=>v!==0||(()=>{throw new Error("step cannot be 0")})),o.length===0&&(o=Array(n.length).fill(1));let s=t.starts.map((v,b)=>oa(v,b,i,n,o)),l=t.ends.map((v,b)=>oa(v,b,i,n,o));if(n.length!==s.length||n.length!==l.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==i.length)for(let v=0;v<i.length;++v)n.includes(v)||(s.splice(v,0,0),l.splice(v,0,i[v]),o.splice(v,0,1));let d=o.map(v=>Math.sign(v));o.forEach((v,b,k)=>{if(v<0){let C=(l[b]-s[b])/v,I=s[b],E=I+C*o[b];s[b]=E,l[b]=I,k[b]=-v}});let c=i.slice(0);n.forEach((v,b)=>{c[v]=Math.ceil((l[v]-s[v])/o[v])});let m={dims:c,dataType:e[0].dataType},g=K("output",e[0].dataType,c.length),y=N("input",e[0].dataType,e[0].dims.length),w=O.size(c),_=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:d.length},{name:"steps",type:"u32",length:o.length}],$=[{type:12,data:w},{type:12,data:s},{type:6,data:d},{type:12,data:o},...Z(e[0].dims,c)],S=v=>`
      ${v.registerUniforms(_).declareVariables(y,g)}
        ${Td(y,g,i)}
        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${g.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${g.setByOffset("global_idx",y.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${d.length}_${s.length}_${o.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[m],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:$})}},rf=(e,t)=>{Sd(e.inputs,t);let i=kd(e.inputs,t);e.compute(Cd(e.inputs,i),{inputs:[0]})},af=e=>{let t=e.starts,i=e.ends,r=e.axes;return ge({starts:t,ends:i,axes:r})}}),Id,Ed,nf,sf,s_=q(()=>{"use strict";te(),se(),$e(),bt(),ue(),Id=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Ed=(e,t)=>{let i=e.inputs[0],r=i.dims,n=O.size(r),o=r.length,s=O.normalizeAxis(t.axis,o),l=s<r.length-1,d,c=[];l?(c=Array.from({length:o},(A,D)=>D),c[s]=o-1,c[o-1]=s,d=e.compute(Pe(i,c),{inputs:[i],outputs:[-1]})[0]):d=i;let m=d.dims,g=m[o-1],y=n/g,w=be(g),_=g/w,$=64;y===1&&($=256);let S=(A,D)=>D===4?`max(max(${A}.x, ${A}.y), max(${A}.z, ${A}.w))`:D===2?`max(${A}.x, ${A}.y)`:D===3?`max(max(${A}.x, ${A}.y), ${A}.z)`:A,v=N("x",d.dataType,d.dims,w),b=K("result",d.dataType,d.dims,w),k=v.type.value,C=Te(d.dataType)==="f32"?`var threadMax = ${k}(-3.402823e+38f);`:`var threadMax = ${k}(-65504.0h);`,I=A=>`
      var<workgroup> rowMaxShared : ${k};
      var<workgroup> rowSumShared : ${k};
      var<workgroup> threadShared : array<${k}, ${$}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${k} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${k}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${A.registerUniform("packedCols","i32").declareVariables(v,b)}
      ${A.mainStart($)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${$};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${C}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${k}(${S("threadShared[0]",w)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${k}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${k}(${wt("threadShared[0]",w)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`,E=e.compute({name:"Softmax",shaderCache:{hint:`${w};${$}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:m,dataType:d.dataType}],dispatchGroup:{x:y},programUniforms:[{type:6,data:_}]}),getShaderSource:I},{inputs:[d],outputs:[l?-1:0]})[0];l&&e.compute(Pe(E,c),{inputs:[E]})},nf=(e,t)=>{Id(e.inputs),Ed(e,t)},sf=e=>ge({axis:e.axis})}),ua,zd,Ad,Od,of,o_=q(()=>{"use strict";te(),se(),ue(),ua=e=>Array.from(e.getBigInt64Array(),Number),zd=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(ua(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Ad=(e,t)=>{let i=[];for(let r=0;r<e.length;++r)i.push(e[r]*t[r]);return i},Od=(e,t)=>{let i=e[0].dims,r=t??ua(e[1]),n=Ad(i,r),o=O.size(n),s=e[0].dataType,l=N("input",s,i.length),d=K("output",s,n.length),c=m=>`
      const inputShape = ${l.indices(...i)};
      ${m.registerUniform("output_size","u32").declareVariables(l,d)}
      ${m.mainStart()}
      ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${d.offsetToIndices("global_idx")};
      var input_indices: ${l.type.indices};
      for (var i = 0; i < ${i.length}; i++) {
        let input_dim_i = ${l.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${d.indicesGet("output_indices","i")}  % input_dim_i;

        ${l.indicesSet("input_indices","i","input_dim_value")}
      }
      ${d.setByOffset("global_idx",l.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...Z(e[0].dims,n)]}),getShaderSource:c}},of=e=>{zd(e.inputs),e.compute(Od(e.inputs),{inputs:[0]})}}),Rd,Bd,uf,u_=q(()=>{"use strict";te(),se(),ue(),Rd=(e,t,i,r,n)=>{let o=K("output_data",n,i.length,4),s=N("a_data",t[1].dataType,t[1].dims.length,4),l=N("b_data",t[2].dataType,t[2].dims.length,4),d=N("c_data",t[0].dataType,t[0].dims.length,4),c,m=(g,y,w)=>`select(${y}, ${g}, ${w})`;if(!r)c=o.setByOffset("global_idx",m(s.getByOffset("global_idx"),l.getByOffset("global_idx"),d.getByOffset("global_idx")));else{let g=(y,w,_="")=>{let $=`a_data[index_a${w}][component_a${w}]`,S=`b_data[index_b${w}][component_b${w}]`,v=`bool(c_data[index_c${w}] & (0xffu << (component_c${w} * 8)))`;return`
            let output_indices${w} = ${o.offsetToIndices(`global_idx * 4u + ${w}u`)};
            let offset_a${w} = ${s.broadcastedIndicesToOffset(`output_indices${w}`,o)};
            let offset_b${w} = ${l.broadcastedIndicesToOffset(`output_indices${w}`,o)};
            let offset_c${w} = ${d.broadcastedIndicesToOffset(`output_indices${w}`,o)};
            let index_a${w} = offset_a${w} / 4u;
            let index_b${w} = offset_b${w} / 4u;
            let index_c${w} = offset_c${w} / 4u;
            let component_a${w} = offset_a${w} % 4u;
            let component_b${w} = offset_b${w} % 4u;
            let component_c${w} = offset_c${w} % 4u;
            ${y}[${w}] = ${_}(${m($,S,v)});
          `};n===9?c=`
            var data = vec4<u32>(0);
            ${g("data",0,"u32")}
            ${g("data",1,"u32")}
            ${g("data",2,"u32")}
            ${g("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:c=`
            ${g("output_data[global_idx]",0)}
            ${g("output_data[global_idx]",1)}
            ${g("output_data[global_idx]",2)}
            ${g("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(d,s,l,o)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${c}
      }`},Bd=e=>{let t=e[1].dims,i=e[2].dims,r=e[0].dims,n=e[1].dataType,o=!(O.areEqual(t,i)&&O.areEqual(i,r)),s=t,l=O.size(t);if(o){let c=Vt.calcShape(Vt.calcShape(t,i,!1),r,!1);if(!c)throw new Error("Can't perform where op on the given tensors");s=c,l=O.size(s)}let d=Math.ceil(l/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:c=>Rd(c,e,s,o,n),getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(l/64/4)},programUniforms:[{type:12,data:d},...Z(r,t,i,s)]})}},uf=e=>{e.compute(Bd(e.inputs))}}),lf,l_=q(()=>{"use strict";vy(),Ga(),xy(),Sy(),ky(),Ty(),Cy(),Oy(),By(),Ny(),My(),Dy(),Uy(),Py(),Wy(),qy(),Vy(),Ly(),Fy(),Gy(),Hy(),jy(),Ky(),Qy(),Zy(),Ih(),Xy(),Jy(),Yy(),e_(),t_(),Fa(),r_(),i_(),a_(),n_(),s_(),Ah(),o_(),bt(),Ha(),u_(),lf=new Map([["Abs",[rc]],["Acos",[ic]],["Acosh",[ac]],["Add",[Uc]],["ArgMax",[Jp,ba]],["ArgMin",[Xp,ba]],["Asin",[nc]],["Asinh",[sc]],["Atan",[oc]],["Atanh",[uc]],["Attention",[Yp]],["AveragePool",[Wh,Ph]],["BatchNormalization",[ec]],["BiasAdd",[tc]],["BiasSplitGelu",[Dc]],["Cast",[dc,lc]],["Ceil",[cc]],["Clip",[pc]],["Concat",[Kc,Qc]],["Conv",[Ta,ka]],["ConvTranspose",[nh,ah]],["Cos",[hc]],["Cosh",[fc]],["CumSum",[sh,oh]],["DepthToSpace",[uh,lh]],["DequantizeLinear",[jh,Kh]],["Div",[Pc]],["Einsum",[dh,ph]],["Elu",[mc,or]],["Equal",[Wc]],["Erf",[gc]],["Exp",[yc]],["Expand",[ch]],["FastGelu",[hh]],["Floor",[_c]],["FusedConv",[Ta,ka]],["Gather",[mh,fh]],["GatherElements",[$h,bh]],["GatherBlockQuantized",[_h,wh]],["GatherND",[gh,yh]],["Gelu",[wc]],["Gemm",[xh,vh]],["GlobalAveragePool",[Vh,qh]],["GlobalMaxPool",[Hh,Gh]],["Greater",[Fc]],["GreaterOrEqual",[Hc]],["GridSample",[Sh,kh]],["GroupQueryAttention",[Oh]],["HardSigmoid",[Cc,Tc]],["InstanceNormalization",[Rh]],["LayerNormalization",[Bh]],["LeakyRelu",[bc,or]],["Less",[Gc]],["LessOrEqual",[jc]],["Log",[Nc]],["MatMul",[Nh]],["MatMulNBits",[Mh,Dh]],["MaxPool",[Lh,Fh]],["Mul",[qc]],["MultiHeadAttention",[Ch,Th]],["Neg",[vc]],["Not",[$c]],["Pad",[Uh]],["Pow",[Vc]],["QuickGelu",[Mc,or]],["Range",[Qh]],["Reciprocal",[xc]],["ReduceMin",[Hp]],["ReduceMean",[qp]],["ReduceMax",[Gp]],["ReduceSum",[Kp]],["ReduceProd",[jp]],["ReduceL1",[Vp]],["ReduceL2",[Lp]],["ReduceLogSum",[Zp]],["ReduceLogSumExp",[Fp]],["ReduceSumSquare",[Qp]],["Relu",[Sc]],["Resize",[Jh,Yh]],["RotaryEmbedding",[ef]],["ScatterND",[Xh,Zh]],["Sigmoid",[kc]],["Sin",[Ic]],["Sinh",[Ec]],["Slice",[rf,af]],["SkipLayerNormalization",[tf]],["Split",[Eh,zh]],["Sqrt",[zc]],["Softmax",[nf,sf]],["Sub",[Lc]],["Tan",[Ac]],["Tanh",[Oc]],["ThresholdedRelu",[Bc,or]],["Tile",[of]],["Transpose",[Ep,zp]],["Where",[uf]]])}),df,d_=q(()=>{"use strict";Ze(),lt(),ue(),df=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,i,r,n){it(e.programInfo.name);let o=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let l=[];for(let c of t)l.push({binding:l.length,resource:{buffer:c.buffer}});for(let c of i)l.push({binding:l.length,resource:{buffer:c.buffer}});n&&l.push({binding:l.length,resource:n});let d=o.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:l,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let c={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:d,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(c)}s.setPipeline(e.computePipeline),s.setBindGroup(0,d),s.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Qe(e.programInfo.name)}dispose(){}build(e,t){it(e.name);let i=this.backend.device,r=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"},{feature:"subgroups-f16",extension:"subgroups_f16"}].forEach(c=>{i.features.has(c.feature)&&r.push(`enable ${c.extension};`)});let n=Ip(t,this.backend.device.limits),o=e.getShaderSource(n),s=`${r.join(`
`)}
${n.additionalImplementations}
${o}`,l=i.createShaderModule({code:s,label:e.name});he("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let d=i.createComputePipeline({compute:{module:l,entryPoint:"main"},layout:"auto",label:e.name});return Qe(e.name),{programInfo:e,computePipeline:d,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,i=typeof e=="number"?1:e.y||1,r=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&i<=n&&r<=n)return[t,i,r];let o=t*i*r,s=Math.ceil(Math.sqrt(o));if(s>n){if(s=Math.ceil(Math.cbrt(o)),s>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Nd,Md,Dd,Ud,pf,p_=q(()=>{"use strict";Ze(),te(),lt(),vp(),by(),l_(),d_(),Nd=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let i=[];for(let r=0;r<e.length;++r){let n=e[r].dataType;switch(t[r]){case"none":{i.push("");break}case"type":{i.push(`${n}`);break}case"rank":{let o=e[r].dims.length;i.push(`${n};${o}`);break}case"dims":{let o=e[r].dims.join(",");i.push(`${n};${o}`);break}default:throw new Error(`unsupported input dependency: ${t[r]}`)}}return i.join("|")},Md=(e,t,i)=>{let r=e.name;return e.shaderCache?.hint&&(r+="["+e.shaderCache.hint+"]"),r+=":"+i+`:${Nd(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,r},Dd=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Ud=class{constructor(e){this.subgroupsSupported=e.features.has("subgroups"),this.subgroupsF16Supported=e.features.has("subgroups");let t=e.limits;!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[t.minSubgroupSize,t.maxSubgroupSize]}},pf=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let i=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:i},n=o=>t.features.has(o)&&i.push(o)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups")&&n("subgroups-f16"),this.device=await t.requestDevice(r),this.deviceInfo=new Ud(this.device),this.adapterInfo=new Dd(t.info||await t.requestAdapterInfo()),this.gpuDataManager=xp(this),this.programManager=new df(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Wa(e.logLevel,!!e.debug),this.device.onuncapturederror=o=>{o.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${o.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;it(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),i=this.pendingQueries.get(e);for(let r=0;r<t.length/2;r++){let n=i[r],o=n.kernelId,s=this.kernels.get(o),l=s.kernelType,d=s.kernelName,c=n.programName,m=n.inputTensorViews,g=n.outputTensorViews,y=t[r*2],w=t[r*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=y);let _=Number(y-this.queryTimeBase),$=Number(w-this.queryTimeBase);if(!Number.isSafeInteger(_)||!Number.isSafeInteger($))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:m.map(S=>({dims:S.dims,dataType:It(S.dataType)})),outputsMetadata:g.map(S=>({dims:S.dims,dataType:It(S.dataType)})),kernelId:o,kernelType:l,kernelName:d,programName:c,startTime:_,endTime:$});else{let S="";m.forEach((b,k)=>{S+=`input[${k}]: [${b.dims}] | ${It(b.dataType)}, `});let v="";g.forEach((b,k)=>{v+=`output[${k}]: [${b.dims}] | ${It(b.dataType)}, `}),console.log(`[profiling] kernel "${o}|${l}|${d}|${c}" ${S}${v}execution time: ${$-_} ns`)}Vr("GPU",`${c}::${y}::${w}`)}e.unmap(),this.pendingQueries.delete(e)}),Qe()}run(e,t,i,r,n,o){it(e.name);let s=[];for(let b=0;b<t.length;++b){let k=t[b].data;if(k===0)continue;let C=this.gpuDataManager.get(k);if(!C)throw new Error(`no GPU data for input: ${k}`);s.push(C)}let{outputs:l,dispatchGroup:d,programUniforms:c}=e.getRunData(t),m=i.length===0?l.map((b,k)=>k):i;if(m.length!==l.length)throw new Error(`Output size ${m.length} must be equal to ${l.length}.`);let g=[],y=[];for(let b=0;b<l.length;++b){if(!Number.isInteger(m[b])||m[b]<-3||m[b]>=o)throw new Error(`Invalid output index: ${m[b]}`);if(m[b]===-3)continue;let k=m[b]===-1,C=m[b]===-2,I=k||C?n(l[b].dataType,l[b].dims):r(m[b],l[b].dataType,l[b].dims);if(g.push(I),I.data===0)continue;let E=this.gpuDataManager.get(I.data);if(!E)throw new Error(`no GPU data for output: ${I.data}`);if(k&&this.temporaryData.push(E),C){let A=this.kernelPersistentData.get(this.currentKernelId);A||(A=[],this.kernelPersistentData.set(this.currentKernelId,A)),A.push(E)}y.push(E)}if(s.length!==t.length||y.length!==g.length){if(y.length===0)return Qe(e.name),g;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let w;if(c){let b=0,k=[];c.forEach(A=>{let D=typeof A.data=="number"?[A.data]:A.data;if(D.length===0)return;let V=A.type===10?2:4,G,X;A.type===10?(X=D.length>4?16:D.length>2?8:D.length*V,G=D.length>4?16:V*D.length):(X=D.length<=2?D.length*V:16,G=16),b=Math.ceil(b/X)*X,k.push(b);let ee=A.type===10?8:4;b+=D.length>4?Math.ceil(D.length/ee)*G:D.length*V});let C=16;b=Math.ceil(b/C)*C;let I=new ArrayBuffer(b);c.forEach((A,D)=>{let V=k[D],G=typeof A.data=="number"?[A.data]:A.data;if(A.type===6)new Int32Array(I,V,G.length).set(G);else if(A.type===12)new Uint32Array(I,V,G.length).set(G);else if(A.type===10)new Uint16Array(I,V,G.length).set(G);else if(A.type===1)new Float32Array(I,V,G.length).set(G);else throw new Error(`Unsupported uniform type: ${It(A.type)}`)});let E=this.gpuDataManager.create(b,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(E.buffer,0,I,0,b),this.gpuDataManager.release(E.id),w={offset:0,size:b,buffer:E.buffer}}let _=this.programManager.normalizeDispatchGroupSize(d),$=_[1]===1&&_[2]===1,S=Md(e,t,$),v=this.programManager.getArtifact(S);if(v||(v=this.programManager.build(e,_),this.programManager.setArtifact(S,v),he("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),c&&v.uniformVariablesInfo){if(c.length!==v.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${v.uniformVariablesInfo.length}, got ${c.length} in program "${v.programInfo.name}".`);for(let b=0;b<c.length;b++){let k=c[b],C=k.type,I=typeof k.data=="number"?1:k.data.length,[E,A]=v.uniformVariablesInfo[b];if(C!==E||I!==A)throw new Error(`Uniform variable ${b} mismatch: expect type ${E} with size ${A}, got type ${C} with size ${I} in program "${v.programInfo.name}".`)}}if(he("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${_[0]}x${_[1]}x${_[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let b={kernelId:this.currentKernelId,programName:v.programInfo.name,inputTensorViews:t,outputTensorViews:g};this.pendingKernels.push(b),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(b)}return this.programManager.run(v,s,y,_,w),Qe(e.name),g}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,i,r){let n=lf.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let o={kernelType:e,kernelName:r,kernelEntry:n[0],attributes:[n[1],i]};this.kernels.set(t,o)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let i of t)this.gpuDataManager.release(i.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,i){let r=this.kernels.get(e);if(!r)throw new Error(`kernel not created: ${e}`);let n=r.kernelType,o=r.kernelName,s=r.kernelEntry,l=r.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${o}" is not allowed to be called recursively`);this.currentKernelId=e,l[0]&&(l[1]=l[0](l[1]),l[0]=void 0),he("info",()=>`[WebGPU] Start to run kernel "[${n}] ${o}"...`);let d=this.env.debug;this.temporaryData=[];try{return d&&this.device.pushErrorScope("validation"),s(t,l[1]),0}catch(c){return i.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${o}" failed. ${c}`)),1}finally{d&&i.push(this.device.popErrorScope().then(c=>c?`GPU validation error for kernel "[${n}] ${o}": ${c.message}`:null));for(let c of this.temporaryData)this.gpuDataManager.release(c.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,i,r){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let o=n.get(t),s=this.gpuDataManager.registerExternalBuffer(i,r,o);return n.set(t,[s,i]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(i=>this.gpuDataManager.unregisterExternalBuffer(i[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,i){return async()=>{let r=await ya(this,e,t);return qa(r.buffer,i)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){he("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){he("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){he("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),i=e.length;this.pendingKernels=[];for(let r=0;r<i;r++){let n=this.getComputePassEncoder(),o=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(o.computePipeline),n.setBindGroup(0,o.bindGroup),n.dispatchWorkgroups(...o.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Pd,la,Wd,da,pa,ca,qd,cf,c_=q(()=>{"use strict";lt(),Pd=1,la=()=>Pd++,Wd=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),da=(e,t)=>{let i=Wd.get(e);if(!i)throw new Error("Unsupported data type.");return t.length>0?Math.ceil(t.reduce((r,n)=>r*n)*i/8):0},pa=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return da(this.dataType,this.tensorShape)}destroy(){he("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,i){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===i.length&&this.tensorShape.every((r,n)=>r===i[n])}},ca=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,i,r){let n=this.tensorManager.getMLContext(e);if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,i))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==da(t,i))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let o=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,i,o,!0,!0),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else he("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},qd=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}reserveTensorId(){let e=la();return this.tensorTrackersById.set(e,new ca(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,i,r,n){he("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${i}, shape: ${r}, copyOld: ${n}}`);let o=this.tensorTrackersById.get(t);if(!o)throw new Error("Tensor not found.");return o.ensureTensor(e,i,r,n)}upload(e,t){let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");i.upload(t)}async download(e,t){he("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");return i.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,i,r){let n=this.getMLContext(e),o=la(),s=new pa({sessionId:e,context:n,tensor:t,dataType:i,shape:r});return this.tensorTrackersById.set(o,new ca(this,s)),this.externalTensors.add(s),o}async getCachedTensor(e,t,i,r,n,o){let s=this.getMLContext(e);for(let[d,c]of this.freeTensors.entries())if(c.canReuseTensor(s,t,i)){he("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, shape: ${i}}`);let m=this.freeTensors.splice(d,1)[0];return m.sessionId=e,m}he("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, shape: ${i}}`);let l=await s.createTensor({dataType:t,shape:i,dimensions:i,usage:r,writable:n,readable:o});return new pa({sessionId:e,context:s,tensor:l,dataType:t,shape:i})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},cf=(...e)=>new qd(...e)}),Nr,Vd,hf,h_=q(()=>{"use strict";te(),Rt(),vp(),c_(),lt(),Nr=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Vd=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let i=Object.keys(e).sort(),r=Object.keys(t).sort();return i.length===r.length&&i.every((n,o)=>n===r[o]&&e[n]===t[n])},hf=class{constructor(e){this.tensorManager=cf(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.temporaryGraphInputs=[],this.temporarySessionTensorIds=new Map,Wa(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){he("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){he("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let i of t)he("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${i}}`),this.tensorManager.releaseTensorId(i);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let i=this.mlContextCache.findIndex(r=>r.gpuDevice===e);if(i!==-1)return this.mlContextCache[i].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:r}),r}}else if(e===void 0){let i=this.mlContextCache.findIndex(r=>r.options===void 0&&r.gpuDevice===void 0);if(i!==-1)return this.mlContextCache[i].mlContext;{let r=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:r}),r}}let t=this.mlContextCache.findIndex(i=>Vd(i.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:i}),i}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let i=this.sessionIdsByMLContext.get(t);i||(i=new Set,this.sessionIdsByMLContext.set(t,i)),i.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let i=this.sessionIdsByMLContext.get(t);if(i.delete(e),i.size===0){this.sessionIdsByMLContext.delete(t);let r=this.mlContextCache.findIndex(n=>n.mlContext===t);r!==-1&&this.mlContextCache.splice(r,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){he("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,i,r,n){let o=Nr.get(i);if(!o)throw new Error(`Unsupported ONNX data type: ${i}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,o,r,n)}async createTemporaryTensor(e,t,i){he("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${i}}`);let r=Nr.get(t);if(!r)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,r,i,!1);let o=this.temporarySessionTensorIds.get(e);return o?o.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!ke().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");he("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let i=await this.tensorManager.download(e);return qa(i,t)}}registerMLTensor(e,t,i,r){let n=Nr.get(i);if(!n)throw new Error(`Unsupported ONNX data type: ${i}`);let o=this.tensorManager.registerTensor(e,t,n,r);return he("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${r}} -> {tensorId: ${o}}`),o}registerMLConstant(e,t,i,r,n,o){if(!o)throw new Error("External mounted files are not available.");let s=e;e.startsWith("./")&&(s=e.substring(2));let l=o.get(s);if(!l)throw new Error(`File with name ${s} not found in preloaded files.`);if(t+i>l.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=l.slice(t,t+i).buffer,c;switch(n.dataType){case"float32":c=new Float32Array(d);break;case"float16":c=new Uint16Array(d);break;case"int32":c=new Int32Array(d);break;case"uint32":c=new Uint32Array(d);break;case"int64":c=new BigInt64Array(d);break;case"uint64":c=new BigUint64Array(d);break;case"int8":c=new Int8Array(d);break;case"int4":case"uint4":case"uint8":c=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return he("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}}`),r.constant(n,c)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,t){let i=this.sessionGraphInputs.get(e);return i?i.includes(t):!1}flush(){}}}),ff={};pr(ff,{init:()=>mf});var Mr,Ld,mf,f_=q(()=>{"use strict";te(),p_(),lt(),se(),h_(),Mr=class gf{constructor(t,i,r,n){this.module=t,this.dataType=i,this.data=r,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(O.size(t)!==O.size(this.dims))throw new Error("Invalid new shape");return new gf(this.module,this.dataType,this.data,t)}},Ld=class{constructor(e,t,i){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let r=e.PTR_SIZE,n=i/e.PTR_SIZE,o=r===4?"i32":"i64";this.opKernelContext=Number(e.getValue(r*n++,o));let s=Number(e.getValue(r*n++,o));this.outputCount=Number(e.getValue(r*n++,o)),this.customDataOffset=Number(e.getValue(r*n++,"*")),this.customDataSize=Number(e.getValue(r*n++,o));let l=[];for(let d=0;d<s;d++){let c=Number(e.getValue(r*n++,o)),m=Number(e.getValue(r*n++,"*")),g=Number(e.getValue(r*n++,o)),y=[];for(let w=0;w<g;w++)y.push(Number(e.getValue(r*n++,o)));l.push(new Mr(e,c,m,y))}this.inputs=l}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let i=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,r=t?.outputs??[],n=(s,l,d)=>new Mr(this.module,l,this.output(s,d),d),o=(s,l)=>{let d=Et(s,l);if(!d)throw new Error(`Unsupported data type: ${s}`);let c=d>0?this.backend.gpuDataManager.create(d).id:0;return new Mr(this.module,s,c,l)};return this.backend.run(e,i,r,n,o,this.outputCount)}output(e,t){let i=this.module.stackSave();try{let r=this.module.PTR_SIZE,n=r===4?"i32":"i64",o=this.module.stackAlloc((1+t.length)*r);this.module.setValue(o,t.length,n);for(let s=0;s<t.length;s++)this.module.setValue(o+r*(s+1),t[s],n);return this.module._JsepOutput(this.opKernelContext,e,o)}catch(r){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${r}`)}finally{this.module.stackRestore(i)}}},mf=async(e,t,i,r)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let o=new pf;await o.initialize(i,r),n("webgpu",[o,s=>o.alloc(Number(s)),s=>o.free(s),(s,l,d,c=!1)=>{if(c)he("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(s)}, dst=${Number(l)}, size=${Number(d)}`),o.memcpy(Number(s),Number(l));else{he("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(s)}, gpuDataId=${Number(l)}, size=${Number(d)}`);let m=t.HEAPU8.subarray(Number(s>>>0),Number(s>>>0)+Number(d));o.upload(Number(l),m)}},async(s,l,d)=>{he("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${s}, dataOffset=${l}, size=${d}`),await o.download(Number(s),()=>t.HEAPU8.subarray(Number(l)>>>0,Number(l+d)>>>0))},(s,l,d)=>o.createKernel(s,Number(l),d,t.UTF8ToString(t._JsepGetNodeName(Number(l)))),s=>o.releaseKernel(s),(s,l,d,c)=>{he("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${s}, contextDataOffset=${l}`);let m=new Ld(t,o,Number(l));return o.computeKernel(Number(s),m,c)},()=>o.captureBegin(),()=>o.captureEnd(),()=>o.replay()])}else{let o=new hf(i);n("webnn",[o,()=>o.reserveTensorId(),s=>o.releaseTensorId(s),async(s,l,d,c,m)=>o.ensureTensor(s,l,d,c,m),(s,l)=>{o.uploadTensor(s,l)},async(s,l)=>o.downloadTensor(s,l)])}}}),Fd,Ja,Ya,yt,Gd,Kr,en,tn,ha,rn,an,nn,yf=q(()=>{"use strict";_y(),wy(),te(),Rt(),Na(),$p(),Fd=(e,t)=>{ke()._OrtInit(e,t)!==0&&me("Can't initialize onnxruntime.")},Ja=async e=>{Fd(e.wasm.numThreads,Fr(e.logLevel))},Ya=async(e,t)=>{{let i=(f_(),qr(ff)).init;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");let r=e.webgpu.adapter;if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!=="low-power"&&n!=="high-performance")throw new Error(`Invalid powerPreference setting: "${n}"`);let o=e.webgpu.forceFallbackAdapter;if(o!==void 0&&typeof o!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${o}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:o}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}await i("webgpu",ke(),e,r)}if(t==="webnn"){if(typeof navigator>"u"||!navigator.ml)throw new Error("WebNN is not supported in current environment");await i("webnn",ke(),e)}}},yt=new Map,Gd=e=>{let t=ke(),i=t.stackSave();try{let r=t.PTR_SIZE,n=t.stackAlloc(2*r);t._OrtGetInputOutputCount(e,n,n+r)!==0&&me("Can't get session input/output count.");let o=r===4?"i32":"i64";return[Number(t.getValue(n,o)),Number(t.getValue(n+r,o))]}finally{t.stackRestore(i)}},Kr=e=>{let t=ke(),i=t._malloc(e.byteLength);if(i===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,i),[i,e.byteLength]},en=async(e,t)=>{let i,r,n=ke();Array.isArray(e)?[i,r]=e:e.buffer===n.HEAPU8.buffer?[i,r]=[e.byteOffset,e.byteLength]:[i,r]=Kr(e);let o=0,s=0,l=0,d=[],c=[],m=[];try{if([s,d]=bp(t),t?.externalData&&n.mountExternalData){let b=[];for(let k of t.externalData){let C=typeof k=="string"?k:k.path;b.push(Pa(typeof k=="string"?k:k.data).then(I=>{n.mountExternalData(C,I)}))}await Promise.all(b)}for(let b of t?.executionProviders??[])if((typeof b=="string"?b:b.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof b!="string"){let k=b,C=k?.context,I=k?.gpuDevice,E=k?.deviceType,A=k?.powerPreference;C?n.currentContext=C:I?n.currentContext=await n.jsepCreateMLContext(I):n.currentContext=await n.jsepCreateMLContext({deviceType:E,powerPreference:A})}else n.currentContext=await n.jsepCreateMLContext();break}o=await n._OrtCreateSession(i,r,s),o===0&&me("Can't create a session."),n.jsepOnCreateSession?.(),n.currentContext&&(n.jsepRegisterMLContext(o,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[g,y]=Gd(o),w=!!t?.enableGraphCapture,_=[],$=[],S=[];for(let b=0;b<g;b++){let k=n._OrtGetInputName(o,b);k===0&&me("Can't get an input name."),c.push(k),_.push(n.UTF8ToString(k))}for(let b=0;b<y;b++){let k=n._OrtGetOutputName(o,b);k===0&&me("Can't get an output name."),m.push(k);let C=n.UTF8ToString(k);$.push(C);{if(w&&t?.preferredOutputLocation===void 0){S.push("gpu-buffer");continue}let I=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[C]??"cpu";if(I!=="cpu"&&I!=="cpu-pinned"&&I!=="gpu-buffer"&&I!=="ml-tensor")throw new Error(`Not supported preferred output location: ${I}.`);if(w&&I!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${I}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);S.push(I)}}let v=null;return S.some(b=>b==="gpu-buffer"||b==="ml-tensor")&&(l=n._OrtCreateBinding(o),l===0&&me("Can't create IO binding."),v={handle:l,outputPreferredLocations:S,outputPreferredLocationsEncoded:S.map(b=>ga(b))}),yt.set(o,[o,c,m,v,w,!1]),[o,_,$]}catch(g){throw c.forEach(y=>n._OrtFree(y)),m.forEach(y=>n._OrtFree(y)),l!==0&&n._OrtReleaseBinding(l)!==0&&me("Can't release IO binding."),o!==0&&n._OrtReleaseSession(o)!==0&&me("Can't release session."),g}finally{n._free(i),s!==0&&n._OrtReleaseSessionOptions(s)!==0&&me("Can't release session options."),d.forEach(g=>n._free(g)),n.unmountExternalData?.()}},tn=e=>{let t=ke(),i=yt.get(e);if(!i)throw new Error(`cannot release session. invalid session id: ${e}`);let[r,n,o,s,l]=i;s&&(l&&t._OrtClearBoundOutputs(s.handle)!==0&&me("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&me("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),n.forEach(d=>t._OrtFree(d)),o.forEach(d=>t._OrtFree(d)),t._OrtReleaseSession(r)!==0&&me("Can't release session."),yt.delete(e)},ha=async(e,t,i,r,n,o=!1)=>{if(!e){t.push(0);return}let s=ke(),l=s.PTR_SIZE,d=e[0],c=e[1],m=e[3],g=m,y,w;if(d==="string"&&(m==="gpu-buffer"||m==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(o&&m!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${n} when enableGraphCapture is true.`);if(m==="gpu-buffer"){let S=e[2].gpuBuffer;w=Et(Pt(d),c);let v=s.jsepRegisterBuffer;if(!v)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');y=v(r,n,S,w)}else if(m==="ml-tensor"){let S=e[2].mlTensor;w=Et(Pt(d),c);let v=s.jsepRegisterMLTensor;if(!v)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');y=v(r,S,Pt(d),c)}else{let S=e[2];if(Array.isArray(S)){w=l*S.length,y=s._malloc(w),i.push(y);for(let v=0;v<S.length;v++){if(typeof S[v]!="string")throw new TypeError(`tensor data at index ${v} is not a string`);s.setValue(y+v*l,Ee(S[v],i),"*")}}else{let v=s.jsepIsGraphInput;if(d!=="string"&&v){let b=s._OrtGetInputName(r,n),k=s.UTF8ToString(b);if(v(r,k)){let C=Pt(d);w=Et(C,c),g="ml-tensor";let I=s.jsepCreateTemporaryTensor,E=s.jsepUploadTensor;if(!I||!E)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let A=await I(r,C,c);E(A,new Uint8Array(S.buffer,S.byteOffset,S.byteLength)),y=A}else w=S.byteLength,y=s._malloc(w),i.push(y),s.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,w),y)}else w=S.byteLength,y=s._malloc(w),i.push(y),s.HEAPU8.set(new Uint8Array(S.buffer,S.byteOffset,w),y)}}let _=s.stackSave(),$=s.stackAlloc(4*c.length);try{c.forEach((v,b)=>s.setValue($+b*l,v,l===4?"i32":"i64"));let S=s._OrtCreateTensor(Pt(d),y,w,$,c.length,ga(g));S===0&&me(`Can't create tensor for input/output. session=${r}, index=${n}.`),t.push(S)}finally{s.stackRestore(_)}},rn=async(e,t,i,r,n,o)=>{let s=ke(),l=s.PTR_SIZE,d=yt.get(e);if(!d)throw new Error(`cannot run inference. invalid session id: ${e}`);let c=d[0],m=d[1],g=d[2],y=d[3],w=d[4],_=d[5],$=t.length,S=r.length,v=0,b=[],k=[],C=[],I=[],E=s.stackSave(),A=s.stackAlloc($*l),D=s.stackAlloc($*l),V=s.stackAlloc(S*l),G=s.stackAlloc(S*l);try{[v,b]=wp(o);for(let P=0;P<$;P++)await ha(i[P],k,I,e,t[P],w);for(let P=0;P<S;P++)await ha(n[P],C,I,e,$+r[P],w);for(let P=0;P<$;P++)s.setValue(A+P*l,k[P],"*"),s.setValue(D+P*l,m[t[P]],"*");for(let P=0;P<S;P++)s.setValue(V+P*l,C[P],"*"),s.setValue(G+P*l,g[r[P]],"*");if(y&&!_){let{handle:P,outputPreferredLocations:oe,outputPreferredLocationsEncoded:de}=y;if(m.length!==$)throw new Error(`input count from feeds (${$}) is expected to be always equal to model's input count (${m.length}).`);for(let H=0;H<$;H++){let le=t[H];await s._OrtBindInput(P,m[le],k[H])!==0&&me(`Can't bind input[${H}] for session=${e}.`)}for(let H=0;H<S;H++){let le=r[H];n[H]?.[3]?s._OrtBindOutput(P,g[le],C[H],0)!==0&&me(`Can't bind pre-allocated output[${H}] for session=${e}.`):s._OrtBindOutput(P,g[le],0,de[le])!==0&&me(`Can't bind output[${H}] to ${oe[H]} for session=${e}.`)}yt.set(e,[c,m,g,y,w,!0])}s.jsepOnRunStart?.(c);let X;y?X=await s._OrtRunWithBinding(c,y.handle,S,V,v):X=await s._OrtRun(c,D,A,$,G,S,V,v),X!==0&&me("failed to call OrtRun().");let ee=[];for(let P=0;P<S;P++){let oe=Number(s.getValue(V+P*l,"*"));if(oe===C[P]){ee.push(n[P]);continue}let de=s.stackSave(),H=s.stackAlloc(4*l),le=!1,pe,j=0;try{s._OrtGetTensorData(oe,H,H+l,H+2*l,H+3*l)!==0&&me(`Can't access output tensor data on index ${P}.`);let ce=l===4?"i32":"i64",U=Number(s.getValue(H,ce));j=s.getValue(H+l,"*");let L=s.getValue(H+l*2,"*"),B=Number(s.getValue(H+l*3,ce)),Y=[];for(let Ie=0;Ie<B;Ie++)Y.push(Number(s.getValue(L+Ie*l,ce)));s._OrtFree(L)!==0&&me("Can't free memory for tensor dims.");let ve=Y.reduce((Ie,xe)=>Ie*xe,1);pe=It(U);let Be=y?.outputPreferredLocations[r[P]];if(pe==="string"){if(Be==="gpu-buffer"||Be==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Ie=[];for(let xe=0;xe<ve;xe++){let at=s.getValue(j+xe*l,"*"),Re=s.getValue(j+(xe+1)*l,"*"),hr=xe===ve-1?void 0:Re-at;Ie.push(s.UTF8ToString(at,hr))}ee.push([pe,Y,Ie,"cpu"])}else if(Be==="gpu-buffer"&&ve>0){let Ie=s.jsepGetBuffer;if(!Ie)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let xe=Ie(j),at=Et(U,ve);if(at===void 0||!Da(pe))throw new Error(`Unsupported data type: ${pe}`);le=!0,ee.push([pe,Y,{gpuBuffer:xe,download:s.jsepCreateDownloader(xe,at,pe),dispose:()=>{s._OrtReleaseTensor(oe)!==0&&me("Can't release tensor.")}},"gpu-buffer"])}else if(Be==="ml-tensor"&&ve>0){let Ie=s.jsepEnsureTensor;if(!Ie)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Et(U,ve)===void 0||!Ua(pe))throw new Error(`Unsupported data type: ${pe}`);let xe=await Ie(e,j,U,Y,!1);le=!0,ee.push([pe,Y,{mlTensor:xe,download:s.jsepCreateMLTensorDownloader(j,pe),dispose:()=>{s.jsepReleaseTensorId(j),s._OrtReleaseTensor(oe)}},"ml-tensor"])}else{let Ie=Ma(pe),xe=new Ie(ve);new Uint8Array(xe.buffer,xe.byteOffset,xe.byteLength).set(s.HEAPU8.subarray(j,j+xe.byteLength)),ee.push([pe,Y,xe,"cpu"])}}finally{s.stackRestore(de),pe==="string"&&j&&s._free(j),le||s._OrtReleaseTensor(oe),s.jsepOnRunEnd?.(c)}}return y&&!w&&(s._OrtClearBoundOutputs(y.handle)!==0&&me("Can't clear bound outputs."),yt.set(e,[c,m,g,y,w,!1])),ee}finally{s.stackRestore(E),k.forEach(X=>s._OrtReleaseTensor(X)),C.forEach(X=>s._OrtReleaseTensor(X)),I.forEach(X=>s._free(X)),v!==0&&s._OrtReleaseRunOptions(v),b.forEach(X=>s._free(X))}},an=e=>{let t=ke(),i=yt.get(e);if(!i)throw new Error("invalid session id");let r=i[0],n=t._OrtEndProfiling(r);n===0&&me("Can't get an profile file name."),t._OrtFree(n)},nn=e=>{let t=[];for(let i of e){let r=i[2];!Array.isArray(r)&&"buffer"in r&&t.push(r.buffer)}return t}}),_t,Ve,Ut,ir,ar,Dr,fa,Ur,kt,Tt,Hd,_f,wf,bf,$f,vf,xf,Sf,kf=q(()=>{"use strict";Ze(),yf(),Rt(),Ra(),_t=()=>!!ye.wasm.proxy&&typeof document<"u",Ut=!1,ir=!1,ar=!1,Ur=new Map,kt=(e,t)=>{let i=Ur.get(e);i?i.push(t):Ur.set(e,[t])},Tt=()=>{if(Ut||!ir||ar||!Ve)throw new Error("worker not ready")},Hd=e=>{switch(e.data.type){case"init-wasm":Ut=!1,e.data.err?(ar=!0,fa[1](e.data.err)):(ir=!0,fa[0]()),Dr&&(URL.revokeObjectURL(Dr),Dr=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Ur.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},_f=async()=>{if(!ir){if(Ut)throw new Error("multiple calls to 'initWasm()' detected.");if(ar)throw new Error("previous call to 'initWasm()' failed.");if(Ut=!0,_t())return new Promise((e,t)=>{Ve?.terminate(),yp().then(([i,r])=>{try{Ve=r,Ve.onerror=o=>t(o),Ve.onmessage=Hd,fa=[e,t];let n={type:"init-wasm",in:ye};!n.in.wasm.wasmPaths&&(i||rt.url?.startsWith("file:"))&&(n.in.wasm.wasmPaths={wasm:new URL("ort-wasm-simd-threaded.jsep.wasm",rt.url).href}),Ve.postMessage(n),Dr=i}catch(n){t(n)}},t)});try{await Ba(ye.wasm),await Ja(ye),ir=!0}catch(e){throw ar=!0,e}finally{Ut=!1}}},wf=async e=>{if(_t())return Tt(),new Promise((t,i)=>{kt("init-ep",[t,i]);let r={type:"init-ep",in:{epName:e,env:ye}};Ve.postMessage(r)});await Ya(ye,e)},bf=async e=>_t()?(Tt(),new Promise((t,i)=>{kt("copy-from",[t,i]);let r={type:"copy-from",in:{buffer:e}};Ve.postMessage(r,[e.buffer])})):Kr(e),$f=async(e,t)=>{if(_t()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Tt(),new Promise((i,r)=>{kt("create",[i,r]);let n={type:"create",in:{model:e,options:{...t}}},o=[];e instanceof Uint8Array&&o.push(e.buffer),Ve.postMessage(n,o)})}else return en(e,t)},vf=async e=>{if(_t())return Tt(),new Promise((t,i)=>{kt("release",[t,i]);let r={type:"release",in:e};Ve.postMessage(r)});tn(e)},xf=async(e,t,i,r,n,o)=>{if(_t()){if(i.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Tt(),new Promise((s,l)=>{kt("run",[s,l]);let d=i,c={type:"run",in:{sessionId:e,inputIndices:t,inputs:d,outputIndices:r,options:o}};Ve.postMessage(c,nn(d))})}else return rn(e,t,i,r,n,o)},Sf=async e=>{if(_t())return Tt(),new Promise((t,i)=>{kt("end-profiling",[t,i]);let r={type:"end-profiling",in:e};Ve.postMessage(r)});an(e)}}),ma,jd,Tf,m_=q(()=>{"use strict";Ze(),kf(),te(),Oa(),$p(),ma=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},jd=e=>{switch(e[3]){case"cpu":return new Ue(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Da(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:i,download:r,dispose:n}=e[2];return Ue.fromGpuBuffer(i,{dataType:t,dims:e[1],download:r,dispose:n})}case"ml-tensor":{let t=e[0];if(!Ua(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:i,download:r,dispose:n}=e[2];return Ue.fromMLTensor(i,{dataType:t,dims:e[1],download:r,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},Tf=class{async fetchModelAndCopyToWasmMemory(e){return bf(await Pa(e))}async loadModel(e,t){it();let i;typeof e=="string"?i=await this.fetchModelAndCopyToWasmMemory(e):i=e,[this.sessionId,this.inputNames,this.outputNames]=await $f(i,t),Qe()}async dispose(){return vf(this.sessionId)}async run(e,t,i){it();let r=[],n=[];Object.entries(e).forEach(g=>{let y=g[0],w=g[1],_=this.inputNames.indexOf(y);if(_===-1)throw new Error(`invalid input '${y}'`);r.push(w),n.push(_)});let o=[],s=[];Object.entries(t).forEach(g=>{let y=g[0],w=g[1],_=this.outputNames.indexOf(y);if(_===-1)throw new Error(`invalid output '${y}'`);o.push(w),s.push(_)});let l=r.map((g,y)=>ma(g,()=>`input "${this.inputNames[n[y]]}"`)),d=o.map((g,y)=>g?ma(g,()=>`output "${this.outputNames[s[y]]}"`):null),c=await xf(this.sessionId,n,l,s,d,i),m={};for(let g=0;g<c.length;g++)m[this.outputNames[s[g]]]=o[g]??jd(c[g]);return Qe(),m}startProfiling(){}endProfiling(){Sf(this.sessionId)}}}),Cf={};pr(Cf,{OnnxruntimeWebAssemblyBackend:()=>Ea,initializeFlags:()=>Ia,wasmBackend:()=>If});var Ia,Ea,If,g_=q(()=>{"use strict";Ze(),kf(),m_(),Ia=()=>{if((typeof ye.wasm.initTimeout!="number"||ye.wasm.initTimeout<0)&&(ye.wasm.initTimeout=0),ye.wasm.simd===!1&&console.warn('Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.'),typeof ye.wasm.proxy!="boolean"&&(ye.wasm.proxy=!1),typeof ye.wasm.trace!="boolean"&&(ye.wasm.trace=!1),typeof ye.wasm.numThreads!="number"||!Number.isInteger(ye.wasm.numThreads)||ye.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ye.wasm.numThreads=1;else{let e=typeof navigator>"u"?ey("node:os").cpus().length:navigator.hardwareConcurrency;ye.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},Ea=class{async init(e){Ia(),await _f(),await wf(e)}async createInferenceSessionHandler(e,t){let i=new Tf;return await i.loadModel(e,t),Promise.resolve(i)}},If=new Ea});Ze();Ze();Ze();var y_="1.21.0";{let e=(g_(),qr(Cf)).wasmBackend;Wt("webgpu",e,5),Wt("webnn",e,5),Wt("cpu",e,10),Wt("wasm",e,10)}Object.defineProperty(ye.versions,"web",{value:y_,enumerable:!0});var un="https://cdn.jsdelivr.net/npm/pneumonia-surrogate@1.0.5",Ef=`${un}/surrogate_model.onnx`,zf=`${un}/scalers.json`,Af=`${un}/golden_seed.json`;ye.wasm.wasmPaths="https://cdn.jsdelivr.net/npm/onnxruntime-web@1.21.0/dist/";ye.wasm.numThreads=1;var Zr=["lungs.q_in[1].p","lungs.q_in[1].m_flow","Ecg.ecg","EithaPressure.pressure"],sn=["filter.y","currentHeartReat.y","arterialPressure.systolic","arterialPressure.diastolic","arterial.sO2","arterial.pO2","arterial.pCO2","arterial.pH","tissueUnit[1].pH","venous.pH"],w_=["TotalCompliance","DV","cShuntFrac"],Xe=Zr.length+sn.length,dt=w_.length,Oe=90,b_=30,Of=1e3/b_,cr={TotalCompliance:60,DV:150,cShuntFrac:5};function $_(e,t,i){let r=new Float32Array(e.length);for(let n=0;n<e.length;n++)r[n]=e[n]*i[n]+t[n];return r}function v_(e,t,i){let r=new Float32Array(e.length);for(let n=0;n<e.length;n++)r[n]=e[n]*i[n]+t[n];return r}var on=class extends HTMLElement{static get observedAttributes(){return["model-url","scalers-url","seed-url","total-compliance","dv","cshunt-frac","autostart"]}constructor(){super(),this._modelUrl=Ef,this._scalersUrl=zf,this._seedUrl=Af,this._controls={...cr},this._session=null,this._physScalerMean=null,this._physScalerScale=null,this._ctrlScalerMin=null,this._ctrlScalerScale=null,this._physHistory=new Float32Array(Oe*Xe),this._ctrlHistory=new Float32Array(Oe*dt),this._running=!1,this._rafId=null,this._lastFrameTime=0,this._stepCounter=0,this._initPromise=null,this._shadowRoot=this.attachShadow({mode:"open"}),this._render()}connectedCallback(){let t=this.getAttribute("model-url"),i=this.getAttribute("scalers-url"),r=this.getAttribute("seed-url");t&&(this._modelUrl=t),i&&(this._scalersUrl=i),r&&(this._seedUrl=r),this._syncControlsFromAttributes(),this.attached()}disconnectedCallback(){this.detached()}attached(){let t=this.getAttribute("autostart");(t===!0||typeof t=="string"&&t.toLowerCase()==="true")&&this.start()}detached(){this.stop()}attributeChangedCallback(t,i,r){switch(t){case"model-url":this._modelUrl=r||Ef,this._initPromise=null,this._session=null;break;case"scalers-url":this._scalersUrl=r||zf,this._initPromise=null,this._session=null;break;case"seed-url":this._seedUrl=r||Af,this._initPromise=null,this._session=null;break;case"total-compliance":r!==null&&(this._controls.TotalCompliance=parseFloat(r));break;case"dv":r!==null&&(this._controls.DV=parseFloat(r));break;case"cshunt-frac":r!==null&&(this._controls.cShuntFrac=parseFloat(r));break}}get totalCompliance(){return this._controls.TotalCompliance}set totalCompliance(t){this._controls.TotalCompliance=parseFloat(t),this.setAttribute("total-compliance",t)}get dv(){return this._controls.DV}set dv(t){this._controls.DV=parseFloat(t),this.setAttribute("dv",t)}get cShuntFrac(){return this._controls.cShuntFrac}set cShuntFrac(t){this._controls.cShuntFrac=parseFloat(t),this.setAttribute("cshunt-frac",t)}async start(){if(!this._running){try{await this._ensureInit()}catch(t){console.error("[pneumonia-surrogate] Initialisation failed, cannot start:",t),this._setStatus("error");return}this._running=!0,this._lastFrameTime=performance.now(),this._setStatus("running"),this._rafId=requestAnimationFrame(t=>this._loop(t))}}stop(){this._running=!1,this._rafId!==null&&(cancelAnimationFrame(this._rafId),this._rafId=null),this._setStatus("idle")}async reset(){if(this.stop(),this._controls={...cr},this.setAttribute("total-compliance",cr.TotalCompliance),this.setAttribute("dv",cr.DV),this.setAttribute("cshunt-frac",cr.cShuntFrac),this._stepCounter=0,this._initPromise!==null)try{await this._initPromise,await this._loadSeed()}catch{}this._setStatus("idle")}_ensureInit(){return this._initPromise?this._initPromise:(this._initPromise=this._init(),this._initPromise)}async _init(){if(this._setStatus("loading"),!this._modelUrl||!this._scalersUrl||!this._seedUrl)throw new Error("Asset URLs could not be resolved. Ensure model-url, scalers-url, and seed-url are valid.");console.log("[pneumonia-surrogate] Loading ONNX session from:",this._modelUrl);let t=await this._fetchArrayBuffer(this._modelUrl);this._session=await Qr.create(t,{executionProviders:["wasm"]}),console.log("[pneumonia-surrogate] ONNX session ready."),console.log("[pneumonia-surrogate] Loading scalers from:",this._scalersUrl);let i=await this._fetchJson(this._scalersUrl);this._physScalerMean=i.phys_scaler.mean,this._physScalerScale=i.phys_scaler.scale,this._ctrlScalerMin=i.control_scaler.min_,this._ctrlScalerScale=i.control_scaler.scale_,console.log("[pneumonia-surrogate] Scalers loaded."),await this._loadSeed()}async _loadSeed(){console.log("[pneumonia-surrogate] Loading golden seed from:",this._seedUrl);let t;try{t=await this._fetchJson(this._seedUrl)}catch(n){console.warn("[pneumonia-surrogate] Could not load golden seed, initialising from zeros:",n),this._physHistory=new Float32Array(Oe*Xe),this._ctrlHistory=new Float32Array(Oe*dt);return}let i=t.phys,r=t.ctrl;if(i.length!==Oe||r.length!==Oe)throw new Error(`Seed shape mismatch: expected (${Oe}, *), got phys=(${i.length},*) ctrl=(${r.length},*).`);this._physHistory=new Float32Array(Oe*Xe);for(let n=0;n<Oe;n++){if(i[n].length!==Xe)throw new Error(`Seed phys row ${n} has ${i[n].length} features, expected ${Xe}.`);this._physHistory.set(i[n],n*Xe)}this._ctrlHistory=new Float32Array(Oe*dt);for(let n=0;n<Oe;n++){if(r[n].length!==dt)throw new Error(`Seed ctrl row ${n} has ${r[n].length} features, expected ${dt}.`);this._ctrlHistory.set(r[n],n*dt)}console.log("[pneumonia-surrogate] Golden seed loaded into history buffers.")}_loop(t){this._running&&(t-this._lastFrameTime>=Of&&(this._lastFrameTime=t,this._step().catch(i=>{console.error("[pneumonia-surrogate] Inference error:",i),this.stop(),this._setStatus("error")})),this._rafId=requestAnimationFrame(i=>this._loop(i)))}async _step(){let t=new Float32Array([this._controls.TotalCompliance,this._controls.DV,this._controls.cShuntFrac]),i=v_(t,this._ctrlScalerMin,this._ctrlScalerScale);this._ctrlHistory.copyWithin(0,dt),this._ctrlHistory.set(i,(Oe-1)*dt);let r=new Ue("float32",new Float32Array(this._physHistory),[1,Oe,Xe]),n=new Ue("float32",new Float32Array(this._ctrlHistory),[1,Oe,dt]),o;try{o=await this._session.run({x_phys:r,controls:n})}catch(m){throw new Error(`ONNX session.run() failed: ${m.message}`)}let s=o.output.data;if(s.length!==Xe)throw new Error(`Unexpected output length ${s.length}, expected ${Xe}.`);this._physHistory.copyWithin(0,Xe),this._physHistory.set(s,(Oe-1)*Xe);let l=$_(s,this._physScalerMean,this._physScalerScale),d={};for(let m=0;m<Zr.length;m++)d[Zr[m]]=l[m];let c={};for(let m=0;m<sn.length;m++)c[sn[m]]=l[Zr.length+m];this._stepCounter++,this.dispatchEvent(new CustomEvent("surrogate-data",{bubbles:!0,composed:!0,detail:{plot_vars:d,monitor_vars:c,step:this._stepCounter}})),this.dispatchEvent(new CustomEvent("fmidata",{detail:{time:this._stepCounter*(Of/1e3),data:l}}))}_render(){this._shadowRoot.innerHTML=`
      <style>
        :host {
          display: inline-block;
          font-family: monospace;
          font-size: 12px;
        }
        #status {
          padding: 2px 6px;
          border-radius: 3px;
          background: #222;
          color: #aaa;
          display: inline-block;
        }
        #status[data-state="running"] { background: #1a3a1a; color: #4caf50; }
        #status[data-state="loading"] { background: #1a2a3a; color: #64b5f6; }
        #status[data-state="error"]   { background: #3a1a1a; color: #ef5350; }
        #status[data-state="idle"]    { background: #222;    color: #aaa; }
        .icon-btns {
          display: inline-flex;
          gap: 6px;
          margin-left: 10px;
          vertical-align: middle;
        }
        button.icon {
          background: none;
          border: none;
          padding: 2px;
          cursor: pointer;
          border-radius: 3px;
          transition: background 0.2s;
        }
        button.icon:hover {
          background: #333;
        }
        .icon svg {
          width: 16px;
          height: 16px;
          vertical-align: middle;
          fill: currentColor;
        }
      </style>
      <span id="status" data-state="idle">pneumonia-surrogate: idle</span>
      <span class="icon-btns">
        <button class="icon" id="start-btn" title="Start">
          <svg viewBox="0 0 20 20"><polygon points="5,3 19,10 5,17"/></svg>
        </button>
        <button class="icon" id="stop-btn" title="Stop">
          <svg viewBox="0 0 20 20"><rect x="5" y="5" width="10" height="10"/></svg>
        </button>
        <button class="icon" id="reset-btn" title="Reset">
          <svg viewBox="0 0 20 20"><path d="M10 3v2a7 7 0 1 1-6.3 4" stroke="currentColor" stroke-width="2" fill="none"/><polyline points="2,3 10,3 10,11" stroke="currentColor" stroke-width="2" fill="none"/></svg>
        </button>
      </span>
      <slot></slot>
    `,this._statusEl=this._shadowRoot.getElementById("status"),this._shadowRoot.getElementById("start-btn").onclick=()=>this.start(),this._shadowRoot.getElementById("stop-btn").onclick=()=>this.stop(),this._shadowRoot.getElementById("reset-btn").onclick=()=>this.reset()}_setStatus(t){this._statusEl&&(this._statusEl.dataset.state=t,this._statusEl.textContent=`pneumonia-surrogate: ${t}`)}async _fetchArrayBuffer(t){let i;try{i=await fetch(t)}catch(r){throw new Error(`Network error fetching ${t}: ${r.message}`)}if(!i.ok)throw new Error(`HTTP ${i.status} fetching ${t}`);return i.arrayBuffer()}async _fetchJson(t){let i;try{i=await fetch(t)}catch(r){throw new Error(`Network error fetching ${t}: ${r.message}`)}if(!i.ok)throw new Error(`HTTP ${i.status} fetching ${t}`);return i.json()}_syncControlsFromAttributes(){let t=this.getAttribute("total-compliance"),i=this.getAttribute("dv"),r=this.getAttribute("cshunt-frac");t!==null&&(this._controls.TotalCompliance=parseFloat(t)),i!==null&&(this._controls.DV=parseFloat(i)),r!==null&&(this._controls.cShuntFrac=parseFloat(r))}};customElements.define("pneumonia-surrogate",on);})();
/*! Bundled license information:

onnxruntime-web/dist/ort.bundle.min.mjs:
  (*!
   * ONNX Runtime Web v1.21.0
   * Copyright (c) Microsoft Corporation. All rights reserved.
   * Licensed under the MIT License.
   *)

onnxruntime-web/dist/ort.bundle.min.mjs:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
*/
