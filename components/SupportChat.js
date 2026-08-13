'use client';

import { useMemo, useState } from 'react';

export default function SupportChat(){
  const [open,setOpen]=useState(false);
  const [message,setMessage]=useState('');
  const [messages,setMessages]=useState([{role:'assistant',text:'Hi, I’m Xposure Support. How can I help with bookings, services or studio enquiries?'}]);
  const [sending,setSending]=useState(false);
  const sessionId=useMemo(()=>`xposure_${Date.now()}_${Math.random().toString(36).slice(2,8)}`,[]);

  async function sendMessage(e){
    e?.preventDefault();
    const text=message.trim();
    if(!text||sending)return;
    setMessages(prev=>[...prev,{role:'user',text}]);
    setMessage('');
    setSending(true);
    try{
      const res=await fetch('/api/support',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({message:text,session_id:sessionId,page_url:window.location.href,tenant:'xposure'})});
      const data=await res.json().catch(()=>({}));
      const reply=data.reply||data.message||data.output||data.text||'Thanks. Your message has been received and our support team will follow up shortly.';
      setMessages(prev=>[...prev,{role:'assistant',text:reply}]);
    }catch(error){
      setMessages(prev=>[...prev,{role:'assistant',text:'Support is temporarily unavailable. Please try again in a moment.'}]);
    }finally{setSending(false)}
  }

  return <div className={`supportChat ${open?'isOpen':''}`}>
    {open&&<section className="supportPanel" aria-label="Xposure support chat">
      <header className="supportHeader"><div><span className="supportDot"></span><div><strong>Xposure Support</strong><small>AI studio assistant</small></div></div><button onClick={()=>setOpen(false)} aria-label="Close chat">×</button></header>
      <div className="supportMessages">{messages.map((item,i)=><div className={`supportBubble ${item.role}`} key={`${item.role}-${i}`}>{item.text}</div>)}{sending&&<div className="supportBubble assistant supportTyping"><i></i><i></i><i></i></div>}</div>
      <form className="supportComposer" onSubmit={sendMessage}><input value={message} onChange={e=>setMessage(e.target.value)} placeholder="Ask about a booking..." aria-label="Support message"/><button type="submit" disabled={sending||!message.trim()} aria-label="Send message">➤</button></form>
      <div className="supportPowered">Powered by Fluxknight</div>
    </section>}
    <button className="supportLauncher" onClick={()=>setOpen(v=>!v)} aria-label={open?'Close support chat':'Open support chat'}><span className="supportPulse"></span>{open?'×':'✦'}<b>{open?'':'Chat'}</b></button>
  </div>
}
