const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
$('.burger').onclick=()=>$('nav').classList.toggle('open');
$$('nav a').forEach(a=>a.onclick=()=>$('nav').classList.remove('open'));
const sl=$('.slider');if(sl){$$('.arrows button').forEach((b,i)=>b.onclick=()=>sl.scrollBy({left:(i?1:-1)*sl.clientWidth*.8}));
setInterval(()=>{sl.scrollLeft+sl.clientWidth>=sl.scrollWidth-10?sl.scrollTo({left:0}):sl.scrollBy({left:sl.clientWidth*.8})},4500)}
const bl=$('#blogGrid');if(bl){let cat='All',q='';const f=()=>$$('.card',bl).forEach(c=>c.style.display=((cat=='All'||c.dataset.cat==cat)&&c.dataset.t.includes(q))?'':'none');
$$('.chip').forEach(c=>c.onclick=()=>{$$('.chip').forEach(x=>x.classList.remove('on'));c.classList.add('on');cat=c.dataset.c;f()});
$('#bs').oninput=e=>{q=e.target.value.toLowerCase();f()}}
const cf=$('#cf');if(cf)cf.onsubmit=e=>{e.preventDefault();const d=new FormData(cf);
const t=encodeURIComponent(`Namaste! Mera naam ${d.get('n')} hai.\nPhone: ${d.get('p')}\nPuja/Product: ${d.get('pr')}\nMessage: ${d.get('m')}`);
window.open('https://wa.me/919873910751?text='+t,'_blank')};
