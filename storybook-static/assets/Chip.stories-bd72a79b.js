import{m as L,i,e as D,t as S,f as F,d as _,F as x}from"./web-6f58d91a.js";var l=(e=>(e.DEFAULT="filled",e.FILLED="filled",e.OUTLINED="outlined",e))(l||{}),r=(e=>(e.DEFAULT="normal",e.DARKEST="darkest",e.DARK="dark",e.NORMAL="normal",e.LIGHT="light",e.LIGHTEST="lightest",e))(r||{});const A="_chip_1oobt_1",V="_chip__filled__darkest_1oobt_8",E="_chip__filled__dark_1oobt_8",U="_chip__filled__normal_1oobt_18",$="_chip__filled__light_1oobt_23",O="_chip__filled__lightest_1oobt_28",R="_chip__outlined__darkest_1oobt_33",I="_chip__outlined__dark_1oobt_33",P="_chip__outlined__normal_1oobt_41",N="_chip__outlined__light_1oobt_45",j="_chip__outlined__lightest_1oobt_49",d={chip:A,chip__filled__darkest:V,chip__filled__dark:E,chip__filled__normal:U,chip__filled__light:$,chip__filled__lightest:O,chip__outlined__darkest:R,chip__outlined__dark:I,chip__outlined__normal:P,chip__outlined__light:N,chip__outlined__lightest:j},G=S("<div>"),H={text:"",variant:l.DEFAULT,colorScheme:r.DEFAULT},p=e=>{const t=L(H,e);return(()=>{const o=G();return i(o,()=>t.text),D(()=>F(o,`${d.chip} ${d[`chip__${t.variant}__${t.colorScheme}`]}`)),o})()},k=S("<div>"),a={title:"Components/Chip",component:p,tags:["autodocs"],argTypes:{text:{control:"text",description:"Chip's text value",table:{type:{summary:"string"},defaultValue:{summary:"Chip component"}}},variant:{control:"select",description:"Chip's variant option",table:{type:{summary:"string"},defaultValue:{summary:l.DEFAULT}},options:[l.DEFAULT,l.FILLED,l.OUTLINED]},colorScheme:{control:"select",description:"Chip's color scheme option",table:{type:{summary:"string"},defaultValue:{summary:r.DEFAULT}},options:[r.DEFAULT,r.DARKEST,r.DARK,r.NORMAL,r.LIGHT,r.LIGHTEST]}}},s={args:{text:a.argTypes.text.table.defaultValue.summary,variant:a.argTypes.variant.table.defaultValue.summary,colorScheme:a.argTypes.colorScheme.table.defaultValue.summary}},n={render:e=>(()=>{const t=k();return t.style.setProperty("display","flex"),t.style.setProperty("gap","16px"),i(t,_(x,{get each(){return a.argTypes.colorScheme.options.slice(1)},children:o=>_(p,{text:"chip",get variant(){return e.variant},colorScheme:o})})),t})(),argTypes:{...Object.keys(a.argTypes).reduce((e,t)=>(e[t]={control:!1},e),{}),variant:a.argTypes.variant.table.defaultValue.summary}},c={render:e=>(()=>{const t=k();return t.style.setProperty("display","flex"),t.style.setProperty("gap","16px"),i(t,_(x,{get each(){return a.argTypes.variant.options.slice(1)},children:o=>_(p,{text:"chip",variant:o,get colorScheme(){return e.colorScheme}})})),t})(),argTypes:{...Object.keys(a.argTypes).reduce((e,t)=>(e[t]={control:!1},e),{}),colorScheme:a.argTypes.colorScheme.table.defaultValue.summary}};var u,m,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: meta.argTypes.text.table.defaultValue.summary,
    variant: meta.argTypes.variant.table.defaultValue.summary,
    colorScheme: meta.argTypes.colorScheme.table.defaultValue.summary
  }
}`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var y,g,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '16px'
  }}>
      <For each={meta.argTypes.colorScheme.options.slice(1)}>
        {colorScheme => <Chip text='chip' variant={props.variant} colorScheme={colorScheme} />}
      </For>
    </div>,
  argTypes: {
    ...Object.keys(meta.argTypes).reduce<Record<string, unknown>>((prev, curr) => {
      prev[curr] = {
        control: false
      };
      return prev;
    }, {}),
    variant: meta.argTypes.variant.table.defaultValue.summary
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var T,v,b;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: props => <div style={{
    display: 'flex',
    gap: '16px'
  }}>
      <For each={meta.argTypes.variant.options.slice(1)}>
        {variant => <Chip text='chip' variant={variant} colorScheme={props.colorScheme} />}
      </For>
    </div>,
  argTypes: {
    ...Object.keys(meta.argTypes).reduce<Record<string, unknown>>((prev, curr) => {
      prev[curr] = {
        control: false
      };
      return prev;
    }, {}),
    colorScheme: meta.argTypes.colorScheme.table.defaultValue.summary
  }
}`,...(b=(v=c.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const w=["Default","Variant","ColorScheme"];export{c as ColorScheme,s as Default,n as Variant,w as __namedExportsOrder,a as default};
//# sourceMappingURL=Chip.stories-bd72a79b.js.map
