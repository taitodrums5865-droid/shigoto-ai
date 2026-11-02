(function(){var d=document,T=d.querySelectorAll('[data-fx]'),me=d.currentScript;
if(!T.length||!window.IntersectionObserver||!window.matchMedia||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
var ready=false;
function run(el){var g=window.gsap,k=el.getAttribute('data-fx');
 if(k==='rows')g.from(el.querySelectorAll('tbody tr:not([hidden])'),{opacity:0,y:8,duration:.2,stagger:{amount:.15},ease:'power2.out',clearProps:'transform,opacity'});
 else if(k==='bars')g.from(el.querySelectorAll('.fx-v,.cx-bar rect.v'),{scaleX:0,transformOrigin:'0% 50%',duration:.3,stagger:{amount:.15},ease:'power3.out'});
 else if(k==='cards')g.from(el.children,{opacity:0,y:8,duration:.2,stagger:{amount:.15},ease:'power2.out',clearProps:'transform,opacity'});
 else if(k==='steps')g.from(el.querySelectorAll('li'),{opacity:0,y:8,duration:.2,stagger:{amount:.15},ease:'power2.out',clearProps:'transform,opacity'});
}
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(!x.isIntersecting)return;io.unobserve(x.target);
 if(ready)run(x.target)})},{rootMargin:'0px 0px -12% 0px'});
[].forEach.call(T,function(e){io.observe(e)});
function load(){var s=d.createElement('script');s.src=me.getAttribute('data-gsap');s.onload=function(){ready=true};d.head.appendChild(s)}
function idle(){(window.requestIdleCallback||setTimeout)(load,{timeout:1200})}
if(d.readyState==='complete')idle();else addEventListener('load',idle)})();
