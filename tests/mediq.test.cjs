// Run: node --test tests/mediq.test.cjs (Node 20+; no dependencies)
const test=require("node:test");
const assert=require("node:assert/strict");
const vm=require("node:vm");
const fs=require("node:fs");
const path=require("node:path");
const root=path.join(__dirname,"..");
const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const curriculum=read("curriculum.js"),app=read("app.js");
function boot(saved){
 const nodes={},handlers={},store=new Map(saved?[["mediq-v2",saved]]:[]);
 const document={getElementById:id=>nodes[id]??=( {innerHTML:"",hidden:true,focus(){}} ),addEventListener:(name,fn)=>handlers[name]=fn,querySelector:()=>null};
 const context={window:{scrollTo(){}},document,localStorage:{getItem:k=>store.get(k),setItem:(k,v)=>store.set(k,v)},confirm:()=>true,Intl,Date,Math,console};
 vm.createContext(context);vm.runInContext(curriculum,context);vm.runInContext(app,context);
 const click=(action,id="")=>handlers.click({target:{closest:()=>({dataset:{action,id:String(id)},disabled:false})}});
 const state=()=>JSON.parse(store.get("mediq-v2"));
 return {nodes,click,state,data:context.window.MEDIQ_DATA};
}
test("curriculum has 30 lessons, 90 questions, valid IDs and choices",()=>{
 const {data}=boot();assert.equal(data.groups.length,7);assert.equal(data.lessons.length,30);
 assert.equal(new Set(data.lessons.map(l=>l[0])).size,30);
 let n=0;for(const l of data.lessons){assert.ok(data.groups.some(g=>g[0]===l[1]));assert.ok([1,2,3].includes(l[2]));assert.equal(l[7].length,3);for(const q of l[7]){n++;assert.equal(q.length,5);assert.ok(q.every(v=>typeof v==="string"&&v.trim()));assert.equal(new Set(q.slice(1,4)).size,3);}}
 assert.equal(n,90);
});
test("home, paths, profile and review render",()=>{const b=boot();assert.match(b.nodes.view.innerHTML,/5 minut na dan/);for(const [p,re] of [["paths",/30 lekcij/],["profile",/Moj napredek/],["review",/Ponavljanje/]]){b.click("nav",p);assert.match(b.nodes.view.innerHTML,re);}});
test("complete a quiz, persist XP, avoid repeated XP, reload and reset",()=>{
 const b=boot();function run(){b.click("start","heart");b.click("quiz");for(const q of b.data.lessons[0][7]){
 const re=/<button data-action="select" data-id="(\d)"[^>]*><span class="letter">[ABC]<\/span>([^<]*)/g;
 const answer=[...b.nodes.view.innerHTML.matchAll(re)].find(m=>m[2].trim()===q[1]);assert.ok(answer,q[0]);b.click("select",answer[1]);b.click("check");b.click("next");}}
 run();assert.equal(b.state().xp,30);assert.equal(b.state().complete.heart.best,3);assert.equal(Object.keys(b.state().memory).length,3);
 run();assert.equal(b.state().xp,30);
 const c=boot(JSON.stringify(b.state()));c.click("nav","profile");assert.match(c.nodes.view.innerHTML,/1\/30/);c.click("reset");assert.equal(c.state().xp,0);
});
test("malformed local state does not crash",()=>{for(const raw of ['{"memory":null,"complete":null,"days":null,"xp":"bad","goal":99}','{invalid']){const b=boot(raw);assert.match(b.nodes.view.innerHTML,/5 minut na dan/);}});
test("offline manifest and shell assets exist and parse",()=>{const m=JSON.parse(read("manifest.webmanifest"));assert.equal(m.start_url,"./");for(const p of ["index.html","styles.css","app.js","curriculum.js","sw.js","pwa.js",...m.icons.map(i=>i.src)])assert.ok(fs.existsSync(path.join(root,p)));new vm.Script(read("sw.js"));new vm.Script(read("pwa.js"));});
