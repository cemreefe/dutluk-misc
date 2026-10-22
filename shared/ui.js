/* dutluk shared UI — theme toggle. Load in <head> (sync) to set data-theme before paint. */
(function(){
  const KEY='du_theme';
  const root=document.documentElement;
  try{const t=localStorage.getItem(KEY);if(t)root.dataset.theme=t;}catch(e){}
  const cur=()=>root.dataset.theme||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  addEventListener('DOMContentLoaded',()=>{
    const b=document.createElement('button');
    b.id='du-theme';b.title='toggle dark/light';
    const set=()=>{b.textContent=cur()==='dark'?'light':'dark';};
    b.onclick=()=>{const t=cur()==='dark'?'light':'dark';
      root.dataset.theme=t;try{localStorage.setItem(KEY,t);}catch(e){}set();
      dispatchEvent(new Event('du:theme'));};
    set();document.body.appendChild(b);
  });
})();
