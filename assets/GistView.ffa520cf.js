import{d as t}from"./vendor.56700d50.js";import{b as s,D as o}from"./DashBoard.c5980d2d.js";import{n as e}from"./index.1acd586c.js";var r={load:async function(t,o){try{const e=o||{},r=await(await fetch(`https://api.github.com/gists/${t}`)).json();console.log({gist:r});const a=e.file?r.files[e.file]:r.files[Object.keys(r.files)[0]];return s.parse(a.content)}catch(e){console.error(e)}}},a=t({name:"GistView",components:{DashBoard:o},props:{id:{type:String,required:!0}},data:()=>({fileSystemConfig:null,yaml:{},xsubfolder:""}),async mounted(){try{this.yaml=await r.load(this.id,this.$route.params),this.xsubfolder=this.yaml.config.folder}catch(t){}}});const i={};var n=e(a,(function(){var t=this,s=t.$createElement,o=t._self._c||s;return t.xsubfolder?o("dash-board",{attrs:{root:"gist",gist:t.yaml,xsubfolder:t.yaml.config.folder}}):t._e()}),[],!1,l,"302c0774",null,null);function l(t){for(let s in i)this[s]=i[s]}var c=function(){return n.exports}();export{c as default};
//# sourceMappingURL=GistView.ffa520cf.js.map
