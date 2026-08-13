export const runtime='nodejs';

export async function POST(request){
  try{
    const body=await request.json();
    const message=String(body?.message||'').trim();
    if(!message){return Response.json({error:'message_required'},{status:400});}

    const webhook=process.env.FLUXKNIGHT_SUPPORT_WEBHOOK;
    if(!webhook){
      return Response.json({error:'support_not_configured',reply:'Support is being connected. Please try again shortly.'},{status:503});
    }

    const payload={
      tenant:body?.tenant||'xposure',
      channel:'website',
      message,
      session_id:body?.session_id||null,
      page_url:body?.page_url||null,
      source:'xposure-beta.vercel.app',
      timestamp:new Date().toISOString()
    };

    const upstream=await fetch(webhook,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload),cache:'no-store'});
    const text=await upstream.text();
    let data={};
    try{data=JSON.parse(text)}catch{data={reply:text}}

    if(!upstream.ok){
      return Response.json({error:'agent_error',reply:data?.reply||'Support is temporarily unavailable.'},{status:502});
    }

    return Response.json({reply:data?.reply||data?.message||data?.output||data?.text||'Message received.',raw:data});
  }catch(error){
    return Response.json({error:'support_request_failed',reply:'Support is temporarily unavailable. Please try again.'},{status:500});
  }
}
