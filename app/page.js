"use client";
import { useState } from "react";

const photos = {
  hero: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=1500&q=85",
  clothes: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80",
  toys: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=900&q=80",
  baby: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80",
  store: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=1100&q=80"
};
function Arrow() { return <span aria-hidden="true">↗</span>; }
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main>
    <div style={{background:"#243746",color:"#fff",textAlign:"center",padding:"10px 16px",fontSize:12,fontWeight:700,letterSpacing:".04em"}}>GOOD FINDS. LITTLE PRICES. BIG SMILES. <span style={{color:"#f8d66d"}}>✳</span> AMHERSTBURG, ONTARIO</div>
    <header style={{position:"sticky",top:0,zIndex:20,background:"#fff9efee",backdropFilter:"blur(12px)",borderBottom:"1px solid #24374612"}}>
      <div className="container" style={{height:82,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <a href="#" aria-label="Gumballs and Overalls home" style={{display:"flex",alignItems:"center",gap:10}}>
          <span style={{width:44,height:44,borderRadius:15,background:"#f8d66d",display:"grid",placeItems:"center",fontSize:24}}>✳</span>
          <span style={{fontWeight:950,fontSize:19,lineHeight:".95",letterSpacing:"-.06em"}}>GUMBALLS<br/><span style={{color:"#e47e69"}}>& OVERALLS</span></span>
        </a>
        <nav className="desktop-nav" style={{display:"flex",alignItems:"center",gap:30,fontSize:13,fontWeight:700}}>
          <a href="#shop">Shop</a><a href="#consign">Consign with us</a><a href="#how">How it works</a><a href="#visit">Visit</a>
        </nav>
        <a className="pill pill-dark desktop-cta" href="#visit">Come say hello <Arrow/></a>
        <button onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation" style={{display:"none",border:0,background:"transparent",fontSize:25}}>☰</button>
      </div>
      {menuOpen && <div className="container" style={{display:"grid",gap:16,paddingBottom:20,fontWeight:700}}><a onClick={()=>setMenuOpen(false)} href="#shop">Shop</a><a onClick={()=>setMenuOpen(false)} href="#consign">Consign with us</a><a onClick={()=>setMenuOpen(false)} href="#how">How it works</a><a onClick={()=>setMenuOpen(false)} href="#visit">Visit</a></div>}
    </header>
    <section style={{padding:"58px 0 74px",overflow:"hidden"}}>
      <div className="container hero-grid" style={{display:"grid",gridTemplateColumns:"1fr 1.05fr",gap:52,alignItems:"center"}}>
        <div>
          <span className="eyebrow">A little shop with a lot of heart</span>
          <h1 style={{fontSize:"clamp(48px,6.4vw,82px)",lineHeight:".98",letterSpacing:"-.075em",margin:"22px 0",fontWeight:950}}>Big finds for<br/><span style={{color:"#e47e69"}}>little people.</span></h1>
          <p style={{fontSize:18,lineHeight:1.7,color:"#536573",maxWidth:470}}>A happy place to discover pre-loved kids’ clothes, toys, and treasures — and give the good stuff another go-round.</p>
          <div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:30}}><a className="pill pill-dark" href="#shop">Explore the shop <Arrow/></a><a className="pill pill-yellow" href="#consign">I want to consign</a></div>
          <div style={{display:"flex",alignItems:"center",gap:12,marginTop:36,color:"#62727d",fontSize:12,fontWeight:700}}><span style={{fontSize:23}}>♡</span> MORE LOVE, LESS WASTE, MORE ROOM TO PLAY.</div>
        </div>
        <div style={{position:"relative"}}>
          <div style={{borderRadius:"46% 46% 28px 28px",overflow:"hidden",height:490,background:"#dcebf1"}}><img src={photos.hero} alt="Playful children's clothing and boutique inspiration" style={{width:"100%",height:"100%",objectFit:"cover"}}/></div>
          <div style={{position:"absolute",left:-26,bottom:28,background:"#f8d66d",borderRadius:22,padding:"18px 22px",fontWeight:900,transform:"rotate(-5deg)",boxShadow:"0 12px 28px #24374618"}}><div style={{fontSize:11,letterSpacing:".12em"}}>THE CIRCLE OF</div><div style={{fontSize:25,letterSpacing:"-.05em"}}>GOOD STUFF ✳</div></div>
          <div style={{position:"absolute",right:-14,top:25,background:"#b8d9c7",borderRadius:"50%",width:94,height:94,display:"grid",placeItems:"center",textAlign:"center",fontWeight:900,fontSize:12,transform:"rotate(9deg)"}}>SHOP<br/>SMALL<br/>♡</div>
        </div>
      </div>
    </section>
    <section id="shop" style={{background:"#f1e9dc",padding:"76px 0"}}>
      <div className="container">
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"end",gap:20,flexWrap:"wrap",marginBottom:32}}><div><span className="eyebrow">Treasure hunt starts here</span><h2 style={{fontSize:46,letterSpacing:"-.06em",margin:"12px 0 0"}}>A little bit of everything.</h2></div><p style={{maxWidth:320,color:"#64737b",lineHeight:1.6,margin:0}}>The fun is in the finding. Pop in and see what lovely things are waiting for their next little owner.</p></div>
        <div className="category-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:18}}>
          {[["Clothes with a past","Fresh outfits, second-hand prices",photos.clothes,"#d9e9f1"],["Playtime favourites","Toys, books & more",photos.toys,"#f8d66d"],["Tiny beginnings","Sweet finds for the littlest ones",photos.baby,"#f1c8bc"]].map((item,i)=><article key={item[0]} className="card" style={{background:item[3]}}><div style={{height:235,overflow:"hidden"}}><img src={item[2]} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/></div><div style={{padding:22}}><div style={{fontSize:11,fontWeight:800,letterSpacing:".12em",opacity:.65}}>0{i+1} / DISCOVER</div><h3 style={{fontSize:25,letterSpacing:"-.04em",margin:"8px 0"}}>{item[0]}</h3><p style={{color:"#536573",margin:"0 0 18px",fontSize:14}}>{item[1]}</p><a href="#visit" style={{fontWeight:900,fontSize:13}}>Come explore <Arrow/></a></div></article>)}
        </div>
      </div>
    </section>
    <section id="how" style={{padding:"82px 0"}}>
      <div className="container how-grid" style={{display:"grid",gridTemplateColumns:".9fr 1.1fr",gap:70,alignItems:"center"}}>
        <div><span className="eyebrow">The lovely little loop</span><h2 style={{fontSize:50,lineHeight:1,letterSpacing:"-.065em",margin:"15px 0 20px"}}>Good things<br/>go <span style={{color:"#e47e69"}}>round.</span></h2><p style={{color:"#61717b",lineHeight:1.7,maxWidth:390}}>Kids grow. Tastes change. And perfectly good things deserve more than one chapter. That’s where a great consignment shop comes in.</p><a className="pill pill-dark" href="#consign" style={{marginTop:15}}>Learn about consigning <Arrow/></a></div>
        <div style={{display:"grid",gap:14}}>
          {[["01","Bring the good stuff","Gather clean, gently-loved items that are ready for another adventure."],["02","Let us take a look","Our team reviews items and explains the current consignment process."],["03","Pass the joy along","Your items get another chance to be loved by a new family."]].map((x)=><div key={x[0]} style={{display:"grid",gridTemplateColumns:"58px 1fr",gap:18,background:"#fff",border:"1px solid #24374612",borderRadius:20,padding:22}}><div style={{width:48,height:48,borderRadius:16,background:"#dcebf1",display:"grid",placeItems:"center",fontWeight:900}}>{x[0]}</div><div><h3 style={{margin:"2px 0 7px",fontSize:19}}>{x[1]}</h3><p style={{margin:0,color:"#687780",fontSize:14,lineHeight:1.6}}>{x[2]}</p></div></div>)}
        </div>
      </div>
    </section>
    <section id="consign" style={{padding:"0 0 82px"}}>
      <div className="container" style={{background:"#b8d9c7",borderRadius:30,padding:"54px 6%",display:"grid",gridTemplateColumns:"1fr auto",gap:30,alignItems:"center"}}>
        <div><span className="eyebrow" style={{color:"#315f53"}}>Your closet called</span><h2 style={{fontSize:43,letterSpacing:"-.06em",lineHeight:1.05,margin:"14px 0"}}>Ready to pass on<br/>some good stuff?</h2><p style={{maxWidth:490,lineHeight:1.65,color:"#425e57"}}>Have kids’ items your family has outgrown? Find out how the boutique’s consignment process works and what to prepare before you visit.</p></div>
        <a className="pill pill-dark" href="#visit">Get consigning info <Arrow/></a>
      </div>
    </section>
    <section id="visit" style={{background:"#243746",color:"#fff",padding:"76px 0"}}>
      <div className="container visit-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:54,alignItems:"center"}}>
        <div><span className="eyebrow" style={{color:"#f8d66d"}}>Your next happy place</span><h2 style={{fontSize:52,lineHeight:1,letterSpacing:"-.065em",margin:"15px 0 20px"}}>Come on in.<br/><span style={{color:"#f8d66d"}}>The fun’s here.</span></h2><p style={{color:"#c6d0d5",lineHeight:1.7,maxWidth:430}}>Find us in Amherstburg, Ontario. Check the boutique’s current hours and seasonal updates before making the trip.</p><div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:26}}><a className="pill pill-yellow" href="https://gumballsandoveralls.ca/index.php" target="_blank" rel="noreferrer">Visit current website <Arrow/></a><a className="pill" style={{border:"1px solid #ffffff55",color:"#fff"}} href="https://www.google.com/maps/search/?api=1&query=Gumballs+and+Overalls+Amherstburg+Ontario" target="_blank" rel="noreferrer">Find the boutique</a></div></div>
        <div className="card" style={{height:330,background:"#dcebf1"}}><img src={photos.store} alt="Welcoming retail boutique interior inspiration" style={{width:"100%",height:"100%",objectFit:"cover"}}/></div>
      </div>
    </section>
    <footer style={{padding:"26px 0",background:"#1b2b37",color:"#c6d0d5",fontSize:12}}><div className="container" style={{display:"flex",justifyContent:"space-between",gap:15,flexWrap:"wrap"}}><span>© {new Date().getFullYear()} Gumballs & Overalls — independent redesign concept by Eizora Labs.</span><span>Concept preview · Not an official business website</span></div></footer>
    <style jsx>{`
      @media(max-width:760px){.desktop-nav,.desktop-cta{display:none!important}.hero-grid,.how-grid,.visit-grid{grid-template-columns:1fr!important}.hero-grid{gap:35px!important}.hero-grid>div:last-child>div:first-child{height:360px!important}.category-grid{grid-template-columns:1fr!important}.container{width:min(100% - 32px,1160px)}}
      @media(min-width:761px){header button{display:none!important}}
    `}</style>
  </main>;
}