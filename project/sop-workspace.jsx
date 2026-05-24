// sop-workspace.jsx — FlowChart + SAP Mockup for SOP Dashboard

const _B = '#003380', _A = '#19AEFF', _R = '#DC0000';

// ─── PER-SOP FLOWCHART OVERRIDES ─────────────────────────
const SOP_FLOW_OVERRIDES = {
  1: { h: 890, nodes: [
    { id:'start', type:'terminal', label:'START', cx:250, cy:52, w:100, h:40 },
    { id:'n1', type:'process', label:'DC Vehicle Reports at Store', cx:250, cy:140, w:220, h:50 },
    { id:'n2', type:'process', label:'Verify Documents & Site Code', cx:250, cy:240, w:220, h:50 },
    { id:'n3', type:'decision', label:'Site Details Match?', cx:250, cy:342, r:68 },
    { id:'n4', type:'process', label:'Unload & Validate HU Stickers', cx:250, cy:460, w:220, h:50 },
    { id:'n5', type:'process', label:'Print & Sign TPOD (2 Copies)', cx:250, cy:558, w:220, h:50 },
    { id:'n6', type:'sap', label:'SAP: Scan & Post GRN', cx:250, cy:656, w:220, h:50, img:'uploads/ABC.png' },
    { id:'n7', type:'process', label:'Print MPOD & Obtain Sign-offs', cx:250, cy:754, w:220, h:50 },
    { id:'end', type:'terminal', label:'END', cx:250, cy:848, w:100, h:40 },
  ], edges: [
    {f:'start',t:'n1',k:'dn'},{f:'n1',t:'n2',k:'dn'},{f:'n2',t:'n3',k:'dn'},
    {f:'n3',t:'n4',k:'dn',lb:'Yes'},{f:'n3',t:'n2',k:'lp',lb:'No'},
    {f:'n4',t:'n5',k:'dn'},{f:'n5',t:'n6',k:'dn'},{f:'n6',t:'n7',k:'dn'},{f:'n7',t:'end',k:'dn'},
  ]},
};

// ─── 3 FLOWCHART TEMPLATES ───────────────────────────────
const FLOW_DEFS = [
  { h: 720, nodes: [
    { id:'start', type:'terminal', label:'START', cx:250, cy:52, w:100, h:40 },
    { id:'n1', type:'process', label:'Initiate & Log Request', cx:250, cy:158, w:220, h:50 },
    { id:'n2', type:'sap', label:'SAP: Open Transaction', cx:250, cy:268, w:220, h:50 },
    { id:'n3', type:'process', label:'Enter Document Data', cx:250, cy:378, w:220, h:50 },
    { id:'n4', type:'decision', label:'Data Valid?', cx:250, cy:480, r:68 },
    { id:'n5', type:'sap', label:'SAP: Post & Save Record', cx:250, cy:590, w:220, h:50 },
    { id:'end', type:'terminal', label:'END', cx:250, cy:692, w:100, h:40 },
  ], edges: [
    {f:'start',t:'n1',k:'dn'},{f:'n1',t:'n2',k:'dn'},{f:'n2',t:'n3',k:'dn'},
    {f:'n3',t:'n4',k:'dn'},{f:'n4',t:'n5',k:'dn',lb:'Yes'},{f:'n4',t:'n3',k:'lp',lb:'No'},{f:'n5',t:'end',k:'dn'},
  ]},
  { h: 700, nodes: [
    { id:'start', type:'terminal', label:'START', cx:250, cy:52, w:100, h:40 },
    { id:'n1', type:'process', label:'Check Prerequisites', cx:250, cy:155, w:220, h:50 },
    { id:'n2', type:'process', label:'Execute Procedure', cx:250, cy:260, w:220, h:50 },
    { id:'n3', type:'decision', label:'Approved?', cx:250, cy:360, r:68 },
    { id:'n4', type:'sap', label:'SAP: Update Records', cx:250, cy:465, w:220, h:50 },
    { id:'n5', type:'process', label:'Notify & Close', cx:250, cy:570, w:220, h:50 },
    { id:'end', type:'terminal', label:'END', cx:250, cy:670, w:100, h:40 },
  ], edges: [
    {f:'start',t:'n1',k:'dn'},{f:'n1',t:'n2',k:'dn'},{f:'n2',t:'n3',k:'dn'},
    {f:'n3',t:'n4',k:'dn',lb:'Yes'},{f:'n3',t:'n2',k:'lp',lb:'No'},{f:'n4',t:'n5',k:'dn'},{f:'n5',t:'end',k:'dn'},
  ]},
  { h: 720, nodes: [
    { id:'start', type:'terminal', label:'START', cx:250, cy:52, w:100, h:40 },
    { id:'n1', type:'process', label:'Receive Documentation', cx:250, cy:158, w:220, h:50 },
    { id:'n2', type:'process', label:'Verify & Validate', cx:250, cy:265, w:220, h:50 },
    { id:'n3', type:'sap', label:'SAP: System Validation', cx:250, cy:375, w:220, h:50 },
    { id:'n4', type:'decision', label:'Records Complete?', cx:250, cy:478, r:68 },
    { id:'n5', type:'sap', label:'SAP: Finalize & Close', cx:250, cy:588, w:220, h:50 },
    { id:'end', type:'terminal', label:'END', cx:250, cy:692, w:100, h:40 },
  ], edges: [
    {f:'start',t:'n1',k:'dn'},{f:'n1',t:'n2',k:'dn'},{f:'n2',t:'n3',k:'dn'},{f:'n3',t:'n4',k:'dn'},
    {f:'n4',t:'n5',k:'dn',lb:'Yes'},{f:'n4',t:'n2',k:'lp',lb:'No'},{f:'n5',t:'end',k:'dn'},
  ]},
];

function _pt(node, side) {
  if (node.type === 'decision') {
    if (side==='top')    return [node.cx, node.cy - node.r];
    if (side==='bottom') return [node.cx, node.cy + node.r];
    if (side==='left')   return [node.cx - node.r, node.cy];
  }
  const hw = (node.w||100)/2, hh = node.h/2;
  if (side==='top')    return [node.cx, node.cy - hh];
  if (side==='bottom') return [node.cx, node.cy + hh];
  if (side==='left')   return [node.cx - hw, node.cy];
  return [node.cx, node.cy];
}

function FlowChart({ sopNum, activeNodeId, onNodeClick }) {
  const def = SOP_FLOW_OVERRIDES[sopNum] || FLOW_DEFS[(sopNum - 1) % 3];
  const { nodes, edges, h } = def;
  const byId = id => nodes.find(n => n.id === id);

  const renderEdge = (e, i) => {
    const fn = byId(e.f), tn = byId(e.t);
    if (!fn||!tn) return null;
    let d, lx, ly, anchor = 'start';
    if (e.k === 'dn') {
      const [x1,y1] = _pt(fn,'bottom'), [x2,y2] = _pt(tn,'top');
      d = `M${x1} ${y1} L${x2} ${y2}`;
      lx = x1+8; ly = (y1+y2)/2;
    } else {
      const [x1,y1] = _pt(fn,'left'), [x2,y2] = _pt(tn,'left');
      d = `M${x1} ${y1} L36 ${y1} L36 ${y2} L${x2} ${y2}`;
      lx = 30; ly = (y1+y2)/2; anchor = 'end';
    }
    return (
      <g key={i}>
        <path d={d} stroke="#94A3B8" strokeWidth="1.5" fill="none" markerEnd="url(#arr)"/>
        {e.lb && <text x={lx} y={ly} fontSize="11" fill="#64748B" textAnchor={anchor} dominantBaseline="middle" fontFamily="DM Sans,sans-serif" fontWeight="500">{e.lb}</text>}
      </g>
    );
  };

  const renderNode = n => {
    const act = activeNodeId === n.id;
    const clickable = n.type==='sap'||n.type==='process';
    const click = clickable ? ()=>onNodeClick(n) : undefined;

    if (n.type === 'terminal') return (
      <g key={n.id}>
        <ellipse cx={n.cx} cy={n.cy} rx={n.w/2} ry={n.h/2} fill={_B}/>
        <text x={n.cx} y={n.cy} textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="700" fill="white" fontFamily="DM Sans,sans-serif" letterSpacing="1.5">{n.label}</text>
      </g>
    );
    if (n.type === 'decision') {
      const pts = `${n.cx},${n.cy-n.r} ${n.cx+n.r},${n.cy} ${n.cx},${n.cy+n.r} ${n.cx-n.r},${n.cy}`;
      return (
        <g key={n.id}>
          <polygon points={pts} fill={act?'#FEF3C7':'#FFFBEB'} stroke="#F59E0B" strokeWidth="2"/>
          <text x={n.cx} y={n.cy} textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight="600" fill="#78350F" fontFamily="DM Sans,sans-serif">{n.label}</text>
        </g>
      );
    }
    const sc = act?_A:_B, sw = n.type==='sap'?(act?3:2.5):(act?2:1.5);
    const fill = act?'#D6EEFF':n.type==='sap'?'#EBF3FF':'#EEF2FF';
    return (
      <g key={n.id} onClick={click} style={{cursor:clickable?'pointer':'default'}}>
        <rect x={n.cx-n.w/2} y={n.cy-n.h/2} width={n.w} height={n.h} rx={n.type==='sap'?3:6} fill={fill} stroke={sc} strokeWidth={sw}/>
        {n.type==='sap' && <>
          <rect x={n.cx+n.w/2-28} y={n.cy-n.h/2} width={28} height={14} fill={act?_A:_B}/>
          <text x={n.cx+n.w/2-14} y={n.cy-n.h/2+9} textAnchor="middle" fontSize="8" fontWeight="700" fill="white" fontFamily="DM Sans,sans-serif" letterSpacing="0.5">SAP</text>
        </>}
        <text x={n.cx} y={n.cy} textAnchor="middle" dominantBaseline="middle" fontSize="12" fontWeight={n.type==='sap'?'700':'600'} fill={act?'#0066CC':_B} fontFamily="DM Sans,sans-serif">{n.label}</text>
      </g>
    );
  };

  const legend = [
    { el: <ellipse cx="11" cy="8" rx="11" ry="8" fill={_B}/>, label:'Start / End', w:22,h:16 },
    { el: <rect x="0" y="0" width="24" height="14" rx="5" fill="#EEF2FF" stroke={_B} strokeWidth="1.5"/>, label:'Process Task', w:24,h:14 },
    { el: <><rect x="0" y="0" width="24" height="14" rx="3" fill="#EBF3FF" stroke={_B} strokeWidth="2.5"/><rect x="16" y="0" width="8" height="8" fill={_B}/><text x="20" y="6" textAnchor="middle" fontSize="5" fontWeight="700" fill="white">SAP</text></>, label:'SAP System Step', w:24,h:14 },
    { el: <polygon points="12,0 22,8 12,16 2,8" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="2"/>, label:'Decision Gate', w:24,h:16 },
    { el: <rect x="0" y="0" width="24" height="14" rx="5" fill="#D6EEFF" stroke={_A} strokeWidth="2"/>, label:'Active Node', w:24,h:14 },
  ];

  return (
    <div style={{display:'flex',flexDirection:'column',height:'100%',overflow:'hidden'}}>
      <div style={{flex:1,overflowY:'auto',padding:'20px 16px 8px'}}>
        <svg viewBox={`0 0 500 ${h}`} width="100%" style={{maxWidth:480,display:'block',margin:'0 auto'}}>
          <defs>
            <marker id="arr" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto">
              <polygon points="0 0,7 3.5,0 7" fill="#94A3B8"/>
            </marker>
          </defs>
          {edges.map((e,i)=>renderEdge(e,i))}
          {nodes.map(n=>renderNode(n))}
        </svg>
      </div>
      <div style={{borderTop:'1px solid #E5E7EB',padding:'10px 20px',background:'#FAFBFC',flexShrink:0}}>
        <div style={{fontSize:9,fontWeight:700,color:'#9CA3AF',letterSpacing:'1px',textTransform:'uppercase',marginBottom:7}}>LEGEND</div>
        <div style={{display:'flex',flexWrap:'wrap',gap:'6px 20px'}}>
          {legend.map(({el,label,w,h:lh},i)=>(
            <div key={i} style={{display:'flex',alignItems:'center',gap:7}}>
              <svg width={w} height={lh} style={{flexShrink:0}}>{el}</svg>
              <span style={{fontSize:10,color:'#6B7280',fontFamily:'DM Sans,sans-serif',whiteSpace:'nowrap'}}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SAP MOCKUP ──────────────────────────────────────────
function SAPMockup({ node }) {
  if (node?.img) {
    return (
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'100%',padding:'8px',background:'#F0F0F0'}}>
        <img src={node.img} alt={node.label||'SAP Preview'} style={{maxWidth:'100%',maxHeight:'100%',objectFit:'contain',borderRadius:'4px',display:'block'}} />
      </div>
    );
  }

  const lbl = (node?.label||'').toLowerCase();
  const tcode = lbl.includes('post')||lbl.includes('save')?'MIGO':lbl.includes('valid')?'ME23N':lbl.includes('final')||lbl.includes('close')?'F-02':lbl.includes('update')?'MM60':'MB01';
  return (
    <div style={{fontFamily:'Arial,sans-serif',background:'#D4D0C8',border:'1px solid #808080',display:'flex',flexDirection:'column',height:'100%',overflow:'hidden',fontSize:11}}>
      <div style={{background:'#003380',color:'white',padding:'4px 10px',display:'flex',justifyContent:'space-between',alignItems:'center',flexShrink:0}}>
        <span style={{fontWeight:700,letterSpacing:.5}}>SAP ECC 6.0 · Reliance Retail</span>
        <span style={{fontSize:9,opacity:.7}}>RRVL · Production Client</span>
      </div>
      <div style={{background:'#C0C0C0',display:'flex',padding:'1px 4px',borderBottom:'1px solid #808080',flexShrink:0}}>
        {['System','Edit','View','Favorites','Extras','Help'].map(m=>(
          <span key={m} style={{padding:'2px 8px',cursor:'default',fontSize:11}}>{m}</span>
        ))}
      </div>
      <div style={{background:'#D4D0C8',display:'flex',alignItems:'center',gap:4,padding:'3px 8px',borderBottom:'1px solid #808080',flexShrink:0}}>
        {['◀','▶','✕','💾','🖨','🔍'].map((ic,i)=>(
          <button key={i} style={{background:'#C0C0C0',border:'1px outset #999',padding:'1px 3px',fontSize:9,cursor:'pointer',minWidth:20,height:18}}>{ic}</button>
        ))}
        <div style={{width:1,height:16,background:'#999',margin:'0 4px'}}/>
        <span style={{fontSize:11}}>Transaction:</span>
        <input readOnly value={tcode} style={{background:'#FFF',border:'2px inset #999',padding:'1px 4px',width:68,fontSize:12,fontFamily:'Courier New',color:'#003380',fontWeight:700}}/>
        <button style={{background:'#C0C0C0',border:'1px outset #999',padding:'1px 8px',fontSize:11,cursor:'pointer',fontWeight:700}}>✓</button>
      </div>
      <div style={{background:'#F0F0F0',flex:1,padding:'8px',overflow:'auto'}}>
        <div style={{background:'#003380',color:'white',padding:'3px 8px',fontSize:12,fontWeight:700,marginBottom:8}}>{node?.label||'SAP System Entry'}</div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'3px 10px',marginBottom:8}}>
          {[['Document Date','21.05.2026'],['Posting Date','21.05.2026'],['Company Code','RRVL'],['Reference','TRIP-2026-0421'],['Plant','PUN1 — Pune Store'],['Storage Loc.','0001 — Main Stock']].map(([l,v])=>(
            <div key={l} style={{display:'flex',alignItems:'center',gap:3}}>
              <span style={{fontSize:10,color:'#444',minWidth:88,flexShrink:0}}>{l}:</span>
              <input readOnly value={v} style={{background:'#FFF',border:'1px inset #999',padding:'1px 3px',flex:1,fontSize:10,fontFamily:'Courier New'}}/>
            </div>
          ))}
        </div>
        <div style={{border:'1px solid #999',background:'white',marginBottom:8}}>
          <div style={{background:'#003380',color:'white',display:'grid',gridTemplateColumns:'36px 1fr 64px 42px 80px',fontSize:10,fontWeight:700}}>
            {['Itm','Material / Description','Qty','UoM','Amt (₹)'].map(h=>(
              <div key={h} style={{padding:'3px 5px',borderRight:'1px solid rgba(255,255,255,0.2)'}}>{h}</div>
            ))}
          </div>
          {[['001','FASH-2024-SHIRT-BLK','50','EA','12,500'],['002','FASH-2024-DENIM-32','30','EA','22,800'],['003','FOOT-2024-SPORT-09','25','PR','37,500']].map((row,i)=>(
            <div key={i} style={{display:'grid',gridTemplateColumns:'36px 1fr 64px 42px 80px',fontSize:10,fontFamily:'Courier New',background:i===0?'#EAF4FF':'white',borderTop:'1px solid #DDD'}}>
              {row.map((c,j)=><div key={j} style={{padding:'3px 5px',borderRight:'1px solid #E5E7EB'}}>{c}</div>)}
            </div>
          ))}
        </div>
        <div style={{display:'flex',justifyContent:'flex-end',marginBottom:8}}>
          <div style={{background:'#F8F8F8',border:'1px solid #CCC',padding:'3px 10px',fontSize:11,fontFamily:'Courier New'}}><b>Total: </b>₹ 72,800.00</div>
        </div>
        <div style={{display:'flex',gap:6,justifyContent:'center',marginBottom:8}}>
          {[{l:'Post (F11)',p:true},{l:'Check (F5)'},{l:'Cancel (F12)'}].map(({l,p})=>(
            <button key={l} style={{background:p?'#003380':'#C0C0C0',color:p?'white':'#333',border:'1px outset #999',padding:'3px 10px',fontSize:11,cursor:'pointer',fontWeight:p?700:400}}>{l}</button>
          ))}
        </div>
        <div style={{background:'#E0E0E0',border:'1px inset #999',padding:'2px 8px',fontSize:10,color:'#555',fontFamily:'Courier New'}}>
          ✓ Ready · Session: RRVL-0042 · User: STORE_MGR_01
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { FlowChart, SAPMockup });
