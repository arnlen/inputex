YUI.add("inputex-checkbox",function(c){var b=c.Lang,a=c.inputEx;a.CheckBox=function(d){a.CheckBox.superclass.constructor.call(this,d)};c.extend(a.CheckBox,a.Field,{setOptions:function(d){a.CheckBox.superclass.setOptions.call(this,d);this.options.className=d.className?d.className:"inputEx-Field inputEx-CheckBox";this.options.rightLabel=d.rightLabel||"";this.sentValues=d.sentValues||[true,false];this.options.sentValues=this.sentValues;this.checkedValue=this.sentValues[0];this.uncheckedValue=this.sentValues[1]},renderComponent:function(){var d=this.divEl.id?this.divEl.id+"-field":c.guid();this.el=a.cn("input",{id:d,type:"checkbox"});this.fieldContainer.appendChild(this.el);this.rightLabelEl=a.cn("label",{"for":d,className:"inputEx-CheckBox-rightLabel"},null,this.options.rightLabel);this.fieldContainer.appendChild(this.rightLabelEl);this.hiddenEl=a.cn("input",{type:"hidden",name:this.options.name||"",value:this.uncheckedValue});this.fieldContainer.appendChild(this.hiddenEl)},initEvents:function(){if(c.UA.ie){c.one(this.el).on("click",function(d){c.later(10,this,function(){this.onChange(d)})},this)}else{c.one(this.el).on("change",this.onChange,this,true)}c.one(this.el).on("focus",this.onFocus,this,true);c.one(this.el).on("blur",this.onBlur,this,true)},onChange:function(d){this.hiddenEl.value=this.el.checked?this.checkedValue:this.uncheckedValue;a.CheckBox.superclass.onChange.call(this,d)},getValue:function(){return this.el.checked?this.checkedValue:this.uncheckedValue},setValue:function(e,d){if(e===this.checkedValue||(typeof(e)=="string"&&typeof(this.checkedValue)=="boolean"&&e===String(this.checkedValue))){this.hiddenEl.value=this.checkedValue;this.el.checked=true;if(c.UA.ie===6){this.el.setAttribute("defaultChecked","checked")}}else{this.hiddenEl.value=this.uncheckedValue;this.el.checked=false;if(c.UA.ie===6){this.el.removeAttribute("defaultChecked")}}a.CheckBox.superclass.setValue.call(this,e,d)},disable:function(){this.el.disabled=true},enable:function(){this.el.disabled=false}});a.registerType("boolean",a.CheckBox,[{type:"string",label:"Right Label",name:"rightLabel"}])},"0.0.1",{requires:["inputex-field"]});