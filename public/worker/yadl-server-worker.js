"use strict";(()=>{var qK=Object.create;var Wu=Object.defineProperty;var jK=Object.getOwnPropertyDescriptor;var VK=Object.getOwnPropertyNames;var YK=Object.getPrototypeOf,XK=Object.prototype.hasOwnProperty;var QK=(t,e)=>()=>(t&&(e=t(t=0)),e);var M=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Dn=(t,e)=>{for(var r in e)Wu(t,r,{get:e[r],enumerable:!0})},Fu=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of VK(e))!XK.call(t,a)&&a!==r&&Wu(t,a,{get:()=>e[a],enumerable:!(n=jK(e,a))||n.enumerable});return t},ie=(t,e,r)=>(Fu(t,e,"default"),r&&Fu(r,e,"default")),Lt=(t,e,r)=>(r=t!=null?qK(YK(t)):{},Fu(e||!t||!t.__esModule?Wu(r,"default",{value:t,enumerable:!0}):r,t)),sf=t=>Fu(Wu({},"__esModule",{value:!0}),t);var Pc={};Dn(Pc,{AnnotatedTextEdit:()=>xn,ChangeAnnotation:()=>La,ChangeAnnotationIdentifier:()=>xt,CodeAction:()=>eg,CodeActionContext:()=>Zh,CodeActionKind:()=>Jh,CodeActionTriggerKind:()=>Ps,CodeDescription:()=>Kh,CodeLens:()=>tg,Color:()=>Tc,ColorInformation:()=>Th,ColorPresentation:()=>Ch,Command:()=>Fa,CompletionItem:()=>Fh,CompletionItemKind:()=>Nh,CompletionItemLabelDetails:()=>Lh,CompletionItemTag:()=>Mh,CompletionList:()=>Wh,CreateFile:()=>ri,DeleteFile:()=>ai,Diagnostic:()=>bs,DiagnosticRelatedInformation:()=>Cc,DiagnosticSeverity:()=>kh,DiagnosticTag:()=>Rh,DocumentHighlight:()=>qh,DocumentHighlightKind:()=>Uh,DocumentLink:()=>ng,DocumentSymbol:()=>Qh,DocumentUri:()=>Sh,EOL:()=>YL,FoldingRange:()=>bh,FoldingRangeKind:()=>xh,FormattingOptions:()=>rg,Hover:()=>Gh,InlayHint:()=>pg,InlayHintKind:()=>Rc,InlayHintLabelPart:()=>Kc,InlineCompletionContext:()=>vg,InlineCompletionItem:()=>yg,InlineCompletionList:()=>hg,InlineCompletionTriggerKind:()=>gg,InlineValueContext:()=>dg,InlineValueEvaluatableExpression:()=>cg,InlineValueText:()=>ug,InlineValueVariableLookup:()=>lg,InsertReplaceEdit:()=>Oh,InsertTextFormat:()=>_h,InsertTextMode:()=>zh,Location:()=>xs,LocationLink:()=>$h,MarkedString:()=>Ks,MarkupContent:()=>oi,MarkupKind:()=>kc,OptionalVersionedTextDocumentIdentifier:()=>Rs,ParameterInformation:()=>Hh,Position:()=>ue,Range:()=>ne,RenameFile:()=>ni,SelectedCompletionInfo:()=>mg,SelectionRange:()=>ag,SemanticTokenModifiers:()=>ig,SemanticTokenTypes:()=>og,SemanticTokens:()=>sg,SignatureInformation:()=>Bh,StringValue:()=>fg,SymbolInformation:()=>Yh,SymbolKind:()=>jh,SymbolTag:()=>Vh,TextDocument:()=>Sg,TextDocumentEdit:()=>ks,TextDocumentIdentifier:()=>Ih,TextDocumentItem:()=>Dh,TextEdit:()=>Tr,URI:()=>$c,VersionedTextDocumentIdentifier:()=>Eh,WorkspaceChange:()=>Ph,WorkspaceEdit:()=>xc,WorkspaceFolder:()=>wg,WorkspaceSymbol:()=>Xh,integer:()=>Ah,uinteger:()=>Cs});var Sh,$c,Ah,Cs,ue,ne,xs,$h,Tc,Th,Ch,xh,bh,Cc,kh,Rh,Kh,bs,Fa,Tr,La,xt,xn,ks,ri,ni,ai,xc,ti,bc,Ph,Ih,Eh,Rs,Dh,kc,oi,Nh,_h,Mh,Oh,zh,Lh,Fh,Wh,Ks,Gh,Hh,Bh,Uh,qh,jh,Vh,Yh,Xh,Qh,Jh,Ps,Zh,eg,tg,rg,ng,ag,og,ig,sg,ug,lg,cg,dg,Rc,Kc,pg,fg,yg,hg,gg,mg,vg,wg,YL,Sg,Ag,w,Wa=QK(()=>{"use strict";(function(t){function e(r){return typeof r=="string"}t.is=e})(Sh||(Sh={}));(function(t){function e(r){return typeof r=="string"}t.is=e})($c||($c={}));(function(t){t.MIN_VALUE=-2147483648,t.MAX_VALUE=2147483647;function e(r){return typeof r=="number"&&t.MIN_VALUE<=r&&r<=t.MAX_VALUE}t.is=e})(Ah||(Ah={}));(function(t){t.MIN_VALUE=0,t.MAX_VALUE=2147483647;function e(r){return typeof r=="number"&&t.MIN_VALUE<=r&&r<=t.MAX_VALUE}t.is=e})(Cs||(Cs={}));(function(t){function e(n,a){return n===Number.MAX_VALUE&&(n=Cs.MAX_VALUE),a===Number.MAX_VALUE&&(a=Cs.MAX_VALUE),{line:n,character:a}}t.create=e;function r(n){let a=n;return w.objectLiteral(a)&&w.uinteger(a.line)&&w.uinteger(a.character)}t.is=r})(ue||(ue={}));(function(t){function e(n,a,o,i){if(w.uinteger(n)&&w.uinteger(a)&&w.uinteger(o)&&w.uinteger(i))return{start:ue.create(n,a),end:ue.create(o,i)};if(ue.is(n)&&ue.is(a))return{start:n,end:a};throw new Error(`Range#create called with invalid arguments[${n}, ${a}, ${o}, ${i}]`)}t.create=e;function r(n){let a=n;return w.objectLiteral(a)&&ue.is(a.start)&&ue.is(a.end)}t.is=r})(ne||(ne={}));(function(t){function e(n,a){return{uri:n,range:a}}t.create=e;function r(n){let a=n;return w.objectLiteral(a)&&ne.is(a.range)&&(w.string(a.uri)||w.undefined(a.uri))}t.is=r})(xs||(xs={}));(function(t){function e(n,a,o,i){return{targetUri:n,targetRange:a,targetSelectionRange:o,originSelectionRange:i}}t.create=e;function r(n){let a=n;return w.objectLiteral(a)&&ne.is(a.targetRange)&&w.string(a.targetUri)&&ne.is(a.targetSelectionRange)&&(ne.is(a.originSelectionRange)||w.undefined(a.originSelectionRange))}t.is=r})($h||($h={}));(function(t){function e(n,a,o,i){return{red:n,green:a,blue:o,alpha:i}}t.create=e;function r(n){let a=n;return w.objectLiteral(a)&&w.numberRange(a.red,0,1)&&w.numberRange(a.green,0,1)&&w.numberRange(a.blue,0,1)&&w.numberRange(a.alpha,0,1)}t.is=r})(Tc||(Tc={}));(function(t){function e(n,a){return{range:n,color:a}}t.create=e;function r(n){let a=n;return w.objectLiteral(a)&&ne.is(a.range)&&Tc.is(a.color)}t.is=r})(Th||(Th={}));(function(t){function e(n,a,o){return{label:n,textEdit:a,additionalTextEdits:o}}t.create=e;function r(n){let a=n;return w.objectLiteral(a)&&w.string(a.label)&&(w.undefined(a.textEdit)||Tr.is(a))&&(w.undefined(a.additionalTextEdits)||w.typedArray(a.additionalTextEdits,Tr.is))}t.is=r})(Ch||(Ch={}));(function(t){t.Comment="comment",t.Imports="imports",t.Region="region"})(xh||(xh={}));(function(t){function e(n,a,o,i,s,u){let l={startLine:n,endLine:a};return w.defined(o)&&(l.startCharacter=o),w.defined(i)&&(l.endCharacter=i),w.defined(s)&&(l.kind=s),w.defined(u)&&(l.collapsedText=u),l}t.create=e;function r(n){let a=n;return w.objectLiteral(a)&&w.uinteger(a.startLine)&&w.uinteger(a.startLine)&&(w.undefined(a.startCharacter)||w.uinteger(a.startCharacter))&&(w.undefined(a.endCharacter)||w.uinteger(a.endCharacter))&&(w.undefined(a.kind)||w.string(a.kind))}t.is=r})(bh||(bh={}));(function(t){function e(n,a){return{location:n,message:a}}t.create=e;function r(n){let a=n;return w.defined(a)&&xs.is(a.location)&&w.string(a.message)}t.is=r})(Cc||(Cc={}));(function(t){t.Error=1,t.Warning=2,t.Information=3,t.Hint=4})(kh||(kh={}));(function(t){t.Unnecessary=1,t.Deprecated=2})(Rh||(Rh={}));(function(t){function e(r){let n=r;return w.objectLiteral(n)&&w.string(n.href)}t.is=e})(Kh||(Kh={}));(function(t){function e(n,a,o,i,s,u){let l={range:n,message:a};return w.defined(o)&&(l.severity=o),w.defined(i)&&(l.code=i),w.defined(s)&&(l.source=s),w.defined(u)&&(l.relatedInformation=u),l}t.create=e;function r(n){var a;let o=n;return w.defined(o)&&ne.is(o.range)&&w.string(o.message)&&(w.number(o.severity)||w.undefined(o.severity))&&(w.integer(o.code)||w.string(o.code)||w.undefined(o.code))&&(w.undefined(o.codeDescription)||w.string((a=o.codeDescription)===null||a===void 0?void 0:a.href))&&(w.string(o.source)||w.undefined(o.source))&&(w.undefined(o.relatedInformation)||w.typedArray(o.relatedInformation,Cc.is))}t.is=r})(bs||(bs={}));(function(t){function e(n,a,...o){let i={title:n,command:a};return w.defined(o)&&o.length>0&&(i.arguments=o),i}t.create=e;function r(n){let a=n;return w.defined(a)&&w.string(a.title)&&w.string(a.command)}t.is=r})(Fa||(Fa={}));(function(t){function e(o,i){return{range:o,newText:i}}t.replace=e;function r(o,i){return{range:{start:o,end:o},newText:i}}t.insert=r;function n(o){return{range:o,newText:""}}t.del=n;function a(o){let i=o;return w.objectLiteral(i)&&w.string(i.newText)&&ne.is(i.range)}t.is=a})(Tr||(Tr={}));(function(t){function e(n,a,o){let i={label:n};return a!==void 0&&(i.needsConfirmation=a),o!==void 0&&(i.description=o),i}t.create=e;function r(n){let a=n;return w.objectLiteral(a)&&w.string(a.label)&&(w.boolean(a.needsConfirmation)||a.needsConfirmation===void 0)&&(w.string(a.description)||a.description===void 0)}t.is=r})(La||(La={}));(function(t){function e(r){let n=r;return w.string(n)}t.is=e})(xt||(xt={}));(function(t){function e(o,i,s){return{range:o,newText:i,annotationId:s}}t.replace=e;function r(o,i,s){return{range:{start:o,end:o},newText:i,annotationId:s}}t.insert=r;function n(o,i){return{range:o,newText:"",annotationId:i}}t.del=n;function a(o){let i=o;return Tr.is(i)&&(La.is(i.annotationId)||xt.is(i.annotationId))}t.is=a})(xn||(xn={}));(function(t){function e(n,a){return{textDocument:n,edits:a}}t.create=e;function r(n){let a=n;return w.defined(a)&&Rs.is(a.textDocument)&&Array.isArray(a.edits)}t.is=r})(ks||(ks={}));(function(t){function e(n,a,o){let i={kind:"create",uri:n};return a!==void 0&&(a.overwrite!==void 0||a.ignoreIfExists!==void 0)&&(i.options=a),o!==void 0&&(i.annotationId=o),i}t.create=e;function r(n){let a=n;return a&&a.kind==="create"&&w.string(a.uri)&&(a.options===void 0||(a.options.overwrite===void 0||w.boolean(a.options.overwrite))&&(a.options.ignoreIfExists===void 0||w.boolean(a.options.ignoreIfExists)))&&(a.annotationId===void 0||xt.is(a.annotationId))}t.is=r})(ri||(ri={}));(function(t){function e(n,a,o,i){let s={kind:"rename",oldUri:n,newUri:a};return o!==void 0&&(o.overwrite!==void 0||o.ignoreIfExists!==void 0)&&(s.options=o),i!==void 0&&(s.annotationId=i),s}t.create=e;function r(n){let a=n;return a&&a.kind==="rename"&&w.string(a.oldUri)&&w.string(a.newUri)&&(a.options===void 0||(a.options.overwrite===void 0||w.boolean(a.options.overwrite))&&(a.options.ignoreIfExists===void 0||w.boolean(a.options.ignoreIfExists)))&&(a.annotationId===void 0||xt.is(a.annotationId))}t.is=r})(ni||(ni={}));(function(t){function e(n,a,o){let i={kind:"delete",uri:n};return a!==void 0&&(a.recursive!==void 0||a.ignoreIfNotExists!==void 0)&&(i.options=a),o!==void 0&&(i.annotationId=o),i}t.create=e;function r(n){let a=n;return a&&a.kind==="delete"&&w.string(a.uri)&&(a.options===void 0||(a.options.recursive===void 0||w.boolean(a.options.recursive))&&(a.options.ignoreIfNotExists===void 0||w.boolean(a.options.ignoreIfNotExists)))&&(a.annotationId===void 0||xt.is(a.annotationId))}t.is=r})(ai||(ai={}));(function(t){function e(r){let n=r;return n&&(n.changes!==void 0||n.documentChanges!==void 0)&&(n.documentChanges===void 0||n.documentChanges.every(a=>w.string(a.kind)?ri.is(a)||ni.is(a)||ai.is(a):ks.is(a)))}t.is=e})(xc||(xc={}));ti=class{constructor(e,r){this.edits=e,this.changeAnnotations=r}insert(e,r,n){let a,o;if(n===void 0?a=Tr.insert(e,r):xt.is(n)?(o=n,a=xn.insert(e,r,n)):(this.assertChangeAnnotations(this.changeAnnotations),o=this.changeAnnotations.manage(n),a=xn.insert(e,r,o)),this.edits.push(a),o!==void 0)return o}replace(e,r,n){let a,o;if(n===void 0?a=Tr.replace(e,r):xt.is(n)?(o=n,a=xn.replace(e,r,n)):(this.assertChangeAnnotations(this.changeAnnotations),o=this.changeAnnotations.manage(n),a=xn.replace(e,r,o)),this.edits.push(a),o!==void 0)return o}delete(e,r){let n,a;if(r===void 0?n=Tr.del(e):xt.is(r)?(a=r,n=xn.del(e,r)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(r),n=xn.del(e,a)),this.edits.push(n),a!==void 0)return a}add(e){this.edits.push(e)}all(){return this.edits}clear(){this.edits.splice(0,this.edits.length)}assertChangeAnnotations(e){if(e===void 0)throw new Error("Text edit change is not configured to manage change annotations.")}},bc=class{constructor(e){this._annotations=e===void 0?Object.create(null):e,this._counter=0,this._size=0}all(){return this._annotations}get size(){return this._size}manage(e,r){let n;if(xt.is(e)?n=e:(n=this.nextId(),r=e),this._annotations[n]!==void 0)throw new Error(`Id ${n} is already in use.`);if(r===void 0)throw new Error(`No annotation provided for id ${n}`);return this._annotations[n]=r,this._size++,n}nextId(){return this._counter++,this._counter.toString()}},Ph=class{constructor(e){this._textEditChanges=Object.create(null),e!==void 0?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new bc(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach(r=>{if(ks.is(r)){let n=new ti(r.edits,this._changeAnnotations);this._textEditChanges[r.textDocument.uri]=n}})):e.changes&&Object.keys(e.changes).forEach(r=>{let n=new ti(e.changes[r]);this._textEditChanges[r]=n})):this._workspaceEdit={}}get edit(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit}getTextEditChange(e){if(Rs.is(e)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let r={uri:e.uri,version:e.version},n=this._textEditChanges[r.uri];if(!n){let a=[],o={textDocument:r,edits:a};this._workspaceEdit.documentChanges.push(o),n=new ti(a,this._changeAnnotations),this._textEditChanges[r.uri]=n}return n}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");let r=this._textEditChanges[e];if(!r){let n=[];this._workspaceEdit.changes[e]=n,r=new ti(n),this._textEditChanges[e]=r}return r}}initDocumentChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new bc,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())}initChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))}createFile(e,r,n){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let a;La.is(r)||xt.is(r)?a=r:n=r;let o,i;if(a===void 0?o=ri.create(e,n):(i=xt.is(a)?a:this._changeAnnotations.manage(a),o=ri.create(e,n,i)),this._workspaceEdit.documentChanges.push(o),i!==void 0)return i}renameFile(e,r,n,a){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let o;La.is(n)||xt.is(n)?o=n:a=n;let i,s;if(o===void 0?i=ni.create(e,r,a):(s=xt.is(o)?o:this._changeAnnotations.manage(o),i=ni.create(e,r,a,s)),this._workspaceEdit.documentChanges.push(i),s!==void 0)return s}deleteFile(e,r,n){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let a;La.is(r)||xt.is(r)?a=r:n=r;let o,i;if(a===void 0?o=ai.create(e,n):(i=xt.is(a)?a:this._changeAnnotations.manage(a),o=ai.create(e,n,i)),this._workspaceEdit.documentChanges.push(o),i!==void 0)return i}};(function(t){function e(n){return{uri:n}}t.create=e;function r(n){let a=n;return w.defined(a)&&w.string(a.uri)}t.is=r})(Ih||(Ih={}));(function(t){function e(n,a){return{uri:n,version:a}}t.create=e;function r(n){let a=n;return w.defined(a)&&w.string(a.uri)&&w.integer(a.version)}t.is=r})(Eh||(Eh={}));(function(t){function e(n,a){return{uri:n,version:a}}t.create=e;function r(n){let a=n;return w.defined(a)&&w.string(a.uri)&&(a.version===null||w.integer(a.version))}t.is=r})(Rs||(Rs={}));(function(t){function e(n,a,o,i){return{uri:n,languageId:a,version:o,text:i}}t.create=e;function r(n){let a=n;return w.defined(a)&&w.string(a.uri)&&w.string(a.languageId)&&w.integer(a.version)&&w.string(a.text)}t.is=r})(Dh||(Dh={}));(function(t){t.PlainText="plaintext",t.Markdown="markdown";function e(r){let n=r;return n===t.PlainText||n===t.Markdown}t.is=e})(kc||(kc={}));(function(t){function e(r){let n=r;return w.objectLiteral(r)&&kc.is(n.kind)&&w.string(n.value)}t.is=e})(oi||(oi={}));(function(t){t.Text=1,t.Method=2,t.Function=3,t.Constructor=4,t.Field=5,t.Variable=6,t.Class=7,t.Interface=8,t.Module=9,t.Property=10,t.Unit=11,t.Value=12,t.Enum=13,t.Keyword=14,t.Snippet=15,t.Color=16,t.File=17,t.Reference=18,t.Folder=19,t.EnumMember=20,t.Constant=21,t.Struct=22,t.Event=23,t.Operator=24,t.TypeParameter=25})(Nh||(Nh={}));(function(t){t.PlainText=1,t.Snippet=2})(_h||(_h={}));(function(t){t.Deprecated=1})(Mh||(Mh={}));(function(t){function e(n,a,o){return{newText:n,insert:a,replace:o}}t.create=e;function r(n){let a=n;return a&&w.string(a.newText)&&ne.is(a.insert)&&ne.is(a.replace)}t.is=r})(Oh||(Oh={}));(function(t){t.asIs=1,t.adjustIndentation=2})(zh||(zh={}));(function(t){function e(r){let n=r;return n&&(w.string(n.detail)||n.detail===void 0)&&(w.string(n.description)||n.description===void 0)}t.is=e})(Lh||(Lh={}));(function(t){function e(r){return{label:r}}t.create=e})(Fh||(Fh={}));(function(t){function e(r,n){return{items:r||[],isIncomplete:!!n}}t.create=e})(Wh||(Wh={}));(function(t){function e(n){return n.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}t.fromPlainText=e;function r(n){let a=n;return w.string(a)||w.objectLiteral(a)&&w.string(a.language)&&w.string(a.value)}t.is=r})(Ks||(Ks={}));(function(t){function e(r){let n=r;return!!n&&w.objectLiteral(n)&&(oi.is(n.contents)||Ks.is(n.contents)||w.typedArray(n.contents,Ks.is))&&(r.range===void 0||ne.is(r.range))}t.is=e})(Gh||(Gh={}));(function(t){function e(r,n){return n?{label:r,documentation:n}:{label:r}}t.create=e})(Hh||(Hh={}));(function(t){function e(r,n,...a){let o={label:r};return w.defined(n)&&(o.documentation=n),w.defined(a)?o.parameters=a:o.parameters=[],o}t.create=e})(Bh||(Bh={}));(function(t){t.Text=1,t.Read=2,t.Write=3})(Uh||(Uh={}));(function(t){function e(r,n){let a={range:r};return w.number(n)&&(a.kind=n),a}t.create=e})(qh||(qh={}));(function(t){t.File=1,t.Module=2,t.Namespace=3,t.Package=4,t.Class=5,t.Method=6,t.Property=7,t.Field=8,t.Constructor=9,t.Enum=10,t.Interface=11,t.Function=12,t.Variable=13,t.Constant=14,t.String=15,t.Number=16,t.Boolean=17,t.Array=18,t.Object=19,t.Key=20,t.Null=21,t.EnumMember=22,t.Struct=23,t.Event=24,t.Operator=25,t.TypeParameter=26})(jh||(jh={}));(function(t){t.Deprecated=1})(Vh||(Vh={}));(function(t){function e(r,n,a,o,i){let s={name:r,kind:n,location:{uri:o,range:a}};return i&&(s.containerName=i),s}t.create=e})(Yh||(Yh={}));(function(t){function e(r,n,a,o){return o!==void 0?{name:r,kind:n,location:{uri:a,range:o}}:{name:r,kind:n,location:{uri:a}}}t.create=e})(Xh||(Xh={}));(function(t){function e(n,a,o,i,s,u){let l={name:n,detail:a,kind:o,range:i,selectionRange:s};return u!==void 0&&(l.children=u),l}t.create=e;function r(n){let a=n;return a&&w.string(a.name)&&w.number(a.kind)&&ne.is(a.range)&&ne.is(a.selectionRange)&&(a.detail===void 0||w.string(a.detail))&&(a.deprecated===void 0||w.boolean(a.deprecated))&&(a.children===void 0||Array.isArray(a.children))&&(a.tags===void 0||Array.isArray(a.tags))}t.is=r})(Qh||(Qh={}));(function(t){t.Empty="",t.QuickFix="quickfix",t.Refactor="refactor",t.RefactorExtract="refactor.extract",t.RefactorInline="refactor.inline",t.RefactorRewrite="refactor.rewrite",t.Source="source",t.SourceOrganizeImports="source.organizeImports",t.SourceFixAll="source.fixAll"})(Jh||(Jh={}));(function(t){t.Invoked=1,t.Automatic=2})(Ps||(Ps={}));(function(t){function e(n,a,o){let i={diagnostics:n};return a!=null&&(i.only=a),o!=null&&(i.triggerKind=o),i}t.create=e;function r(n){let a=n;return w.defined(a)&&w.typedArray(a.diagnostics,bs.is)&&(a.only===void 0||w.typedArray(a.only,w.string))&&(a.triggerKind===void 0||a.triggerKind===Ps.Invoked||a.triggerKind===Ps.Automatic)}t.is=r})(Zh||(Zh={}));(function(t){function e(n,a,o){let i={title:n},s=!0;return typeof a=="string"?(s=!1,i.kind=a):Fa.is(a)?i.command=a:i.edit=a,s&&o!==void 0&&(i.kind=o),i}t.create=e;function r(n){let a=n;return a&&w.string(a.title)&&(a.diagnostics===void 0||w.typedArray(a.diagnostics,bs.is))&&(a.kind===void 0||w.string(a.kind))&&(a.edit!==void 0||a.command!==void 0)&&(a.command===void 0||Fa.is(a.command))&&(a.isPreferred===void 0||w.boolean(a.isPreferred))&&(a.edit===void 0||xc.is(a.edit))}t.is=r})(eg||(eg={}));(function(t){function e(n,a){let o={range:n};return w.defined(a)&&(o.data=a),o}t.create=e;function r(n){let a=n;return w.defined(a)&&ne.is(a.range)&&(w.undefined(a.command)||Fa.is(a.command))}t.is=r})(tg||(tg={}));(function(t){function e(n,a){return{tabSize:n,insertSpaces:a}}t.create=e;function r(n){let a=n;return w.defined(a)&&w.uinteger(a.tabSize)&&w.boolean(a.insertSpaces)}t.is=r})(rg||(rg={}));(function(t){function e(n,a,o){return{range:n,target:a,data:o}}t.create=e;function r(n){let a=n;return w.defined(a)&&ne.is(a.range)&&(w.undefined(a.target)||w.string(a.target))}t.is=r})(ng||(ng={}));(function(t){function e(n,a){return{range:n,parent:a}}t.create=e;function r(n){let a=n;return w.objectLiteral(a)&&ne.is(a.range)&&(a.parent===void 0||t.is(a.parent))}t.is=r})(ag||(ag={}));(function(t){t.namespace="namespace",t.type="type",t.class="class",t.enum="enum",t.interface="interface",t.struct="struct",t.typeParameter="typeParameter",t.parameter="parameter",t.variable="variable",t.property="property",t.enumMember="enumMember",t.event="event",t.function="function",t.method="method",t.macro="macro",t.keyword="keyword",t.modifier="modifier",t.comment="comment",t.string="string",t.number="number",t.regexp="regexp",t.operator="operator",t.decorator="decorator"})(og||(og={}));(function(t){t.declaration="declaration",t.definition="definition",t.readonly="readonly",t.static="static",t.deprecated="deprecated",t.abstract="abstract",t.async="async",t.modification="modification",t.documentation="documentation",t.defaultLibrary="defaultLibrary"})(ig||(ig={}));(function(t){function e(r){let n=r;return w.objectLiteral(n)&&(n.resultId===void 0||typeof n.resultId=="string")&&Array.isArray(n.data)&&(n.data.length===0||typeof n.data[0]=="number")}t.is=e})(sg||(sg={}));(function(t){function e(n,a){return{range:n,text:a}}t.create=e;function r(n){let a=n;return a!=null&&ne.is(a.range)&&w.string(a.text)}t.is=r})(ug||(ug={}));(function(t){function e(n,a,o){return{range:n,variableName:a,caseSensitiveLookup:o}}t.create=e;function r(n){let a=n;return a!=null&&ne.is(a.range)&&w.boolean(a.caseSensitiveLookup)&&(w.string(a.variableName)||a.variableName===void 0)}t.is=r})(lg||(lg={}));(function(t){function e(n,a){return{range:n,expression:a}}t.create=e;function r(n){let a=n;return a!=null&&ne.is(a.range)&&(w.string(a.expression)||a.expression===void 0)}t.is=r})(cg||(cg={}));(function(t){function e(n,a){return{frameId:n,stoppedLocation:a}}t.create=e;function r(n){let a=n;return w.defined(a)&&ne.is(n.stoppedLocation)}t.is=r})(dg||(dg={}));(function(t){t.Type=1,t.Parameter=2;function e(r){return r===1||r===2}t.is=e})(Rc||(Rc={}));(function(t){function e(n){return{value:n}}t.create=e;function r(n){let a=n;return w.objectLiteral(a)&&(a.tooltip===void 0||w.string(a.tooltip)||oi.is(a.tooltip))&&(a.location===void 0||xs.is(a.location))&&(a.command===void 0||Fa.is(a.command))}t.is=r})(Kc||(Kc={}));(function(t){function e(n,a,o){let i={position:n,label:a};return o!==void 0&&(i.kind=o),i}t.create=e;function r(n){let a=n;return w.objectLiteral(a)&&ue.is(a.position)&&(w.string(a.label)||w.typedArray(a.label,Kc.is))&&(a.kind===void 0||Rc.is(a.kind))&&a.textEdits===void 0||w.typedArray(a.textEdits,Tr.is)&&(a.tooltip===void 0||w.string(a.tooltip)||oi.is(a.tooltip))&&(a.paddingLeft===void 0||w.boolean(a.paddingLeft))&&(a.paddingRight===void 0||w.boolean(a.paddingRight))}t.is=r})(pg||(pg={}));(function(t){function e(r){return{kind:"snippet",value:r}}t.createSnippet=e})(fg||(fg={}));(function(t){function e(r,n,a,o){return{insertText:r,filterText:n,range:a,command:o}}t.create=e})(yg||(yg={}));(function(t){function e(r){return{items:r}}t.create=e})(hg||(hg={}));(function(t){t.Invoked=0,t.Automatic=1})(gg||(gg={}));(function(t){function e(r,n){return{range:r,text:n}}t.create=e})(mg||(mg={}));(function(t){function e(r,n){return{triggerKind:r,selectedCompletionInfo:n}}t.create=e})(vg||(vg={}));(function(t){function e(r){let n=r;return w.objectLiteral(n)&&$c.is(n.uri)&&w.string(n.name)}t.is=e})(wg||(wg={}));YL=[`
`,`\r
`,"\r"];(function(t){function e(o,i,s,u){return new Ag(o,i,s,u)}t.create=e;function r(o){let i=o;return!!(w.defined(i)&&w.string(i.uri)&&(w.undefined(i.languageId)||w.string(i.languageId))&&w.uinteger(i.lineCount)&&w.func(i.getText)&&w.func(i.positionAt)&&w.func(i.offsetAt))}t.is=r;function n(o,i){let s=o.getText(),u=a(i,(c,d)=>{let p=c.range.start.line-d.range.start.line;return p===0?c.range.start.character-d.range.start.character:p}),l=s.length;for(let c=u.length-1;c>=0;c--){let d=u[c],p=o.offsetAt(d.range.start),y=o.offsetAt(d.range.end);if(y<=l)s=s.substring(0,p)+d.newText+s.substring(y,s.length);else throw new Error("Overlapping edit");l=p}return s}t.applyEdits=n;function a(o,i){if(o.length<=1)return o;let s=o.length/2|0,u=o.slice(0,s),l=o.slice(s);a(u,i),a(l,i);let c=0,d=0,p=0;for(;c<u.length&&d<l.length;)i(u[c],l[d])<=0?o[p++]=u[c++]:o[p++]=l[d++];for(;c<u.length;)o[p++]=u[c++];for(;d<l.length;)o[p++]=l[d++];return o}})(Sg||(Sg={}));Ag=class{constructor(e,r,n,a){this._uri=e,this._languageId=r,this._version=n,this._content=a,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let r=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(r,n)}return this._content}update(e,r){this._content=e.text,this._version=r,this._lineOffsets=void 0}getLineOffsets(){if(this._lineOffsets===void 0){let e=[],r=this._content,n=!0;for(let a=0;a<r.length;a++){n&&(e.push(a),n=!1);let o=r.charAt(a);n=o==="\r"||o===`
`,o==="\r"&&a+1<r.length&&r.charAt(a+1)===`
`&&a++}n&&r.length>0&&e.push(r.length),this._lineOffsets=e}return this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let r=this.getLineOffsets(),n=0,a=r.length;if(a===0)return ue.create(0,e);for(;n<a;){let i=Math.floor((n+a)/2);r[i]>e?a=i:n=i+1}let o=n-1;return ue.create(o,e-r[o])}offsetAt(e){let r=this.getLineOffsets();if(e.line>=r.length)return this._content.length;if(e.line<0)return 0;let n=r[e.line],a=e.line+1<r.length?r[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,a),n)}get lineCount(){return this.getLineOffsets().length}};(function(t){let e=Object.prototype.toString;function r(y){return typeof y<"u"}t.defined=r;function n(y){return typeof y>"u"}t.undefined=n;function a(y){return y===!0||y===!1}t.boolean=a;function o(y){return e.call(y)==="[object String]"}t.string=o;function i(y){return e.call(y)==="[object Number]"}t.number=i;function s(y,v,S){return e.call(y)==="[object Number]"&&v<=y&&y<=S}t.numberRange=s;function u(y){return e.call(y)==="[object Number]"&&-2147483648<=y&&y<=2147483647}t.integer=u;function l(y){return e.call(y)==="[object Number]"&&0<=y&&y<=2147483647}t.uinteger=l;function c(y){return e.call(y)==="[object Function]"}t.func=c;function d(y){return y!==null&&typeof y=="object"}t.objectLiteral=d;function p(y,v){return Array.isArray(y)&&y.every(v)}t.typedArray=p})(w||(w={}))});var ta=M(Pg=>{"use strict";Object.defineProperty(Pg,"__esModule",{value:!0});var Rg;function Kg(){if(Rg===void 0)throw new Error("No runtime abstraction layer installed");return Rg}(function(t){function e(r){if(r===void 0)throw new Error("No runtime abstraction layer provided");Rg=r}t.install=e})(Kg||(Kg={}));Pg.default=Kg});var ui=M(Et=>{"use strict";Object.defineProperty(Et,"__esModule",{value:!0});Et.stringArray=Et.array=Et.func=Et.error=Et.number=Et.string=Et.boolean=void 0;function i0(t){return t===!0||t===!1}Et.boolean=i0;function _T(t){return typeof t=="string"||t instanceof String}Et.string=_T;function s0(t){return typeof t=="number"||t instanceof Number}Et.number=s0;function u0(t){return t instanceof Error}Et.error=u0;function l0(t){return typeof t=="function"}Et.func=l0;function MT(t){return Array.isArray(t)}Et.array=MT;function c0(t){return MT(t)&&t.every(e=>_T(e))}Et.stringArray=c0});var Ua=M(li=>{"use strict";Object.defineProperty(li,"__esModule",{value:!0});li.Emitter=li.Event=void 0;var d0=ta(),OT;(function(t){let e={dispose(){}};t.None=function(){return e}})(OT||(li.Event=OT={}));var Ig=class{add(e,r=null,n){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(r),Array.isArray(n)&&n.push({dispose:()=>this.remove(e,r)})}remove(e,r=null){if(!this._callbacks)return;let n=!1;for(let a=0,o=this._callbacks.length;a<o;a++)if(this._callbacks[a]===e)if(this._contexts[a]===r){this._callbacks.splice(a,1),this._contexts.splice(a,1);return}else n=!0;if(n)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];let r=[],n=this._callbacks.slice(0),a=this._contexts.slice(0);for(let o=0,i=n.length;o<i;o++)try{r.push(n[o].apply(a[o],e))}catch(s){(0,d0.default)().console.error(s)}return r}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},_c=class t{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,r,n)=>{this._callbacks||(this._callbacks=new Ig),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,r);let a={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,r),a.dispose=t._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(n)&&n.push(a),a}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};li.Emitter=_c;_c._noop=function(){}});var zs=M(ci=>{"use strict";Object.defineProperty(ci,"__esModule",{value:!0});ci.CancellationTokenSource=ci.CancellationToken=void 0;var p0=ta(),f0=ui(),Eg=Ua(),Mc;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:Eg.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:Eg.Event.None});function e(r){let n=r;return n&&(n===t.None||n===t.Cancelled||f0.boolean(n.isCancellationRequested)&&!!n.onCancellationRequested)}t.is=e})(Mc||(ci.CancellationToken=Mc={}));var y0=Object.freeze(function(t,e){let r=(0,p0.default)().timer.setTimeout(t.bind(e),0);return{dispose(){r.dispose()}}}),Oc=class{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?y0:(this._emitter||(this._emitter=new Eg.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},Dg=class{get token(){return this._token||(this._token=new Oc),this._token}cancel(){this._token?this._token.cancel():this._token=Mc.Cancelled}dispose(){this._token?this._token instanceof Oc&&this._token.dispose():this._token=Mc.None}};ci.CancellationTokenSource=Dg});var vm=M(B=>{"use strict";Object.defineProperty(B,"__esModule",{value:!0});B.Message=B.NotificationType9=B.NotificationType8=B.NotificationType7=B.NotificationType6=B.NotificationType5=B.NotificationType4=B.NotificationType3=B.NotificationType2=B.NotificationType1=B.NotificationType0=B.NotificationType=B.RequestType9=B.RequestType8=B.RequestType7=B.RequestType6=B.RequestType5=B.RequestType4=B.RequestType3=B.RequestType2=B.RequestType1=B.RequestType=B.RequestType0=B.AbstractMessageSignature=B.ParameterStructures=B.ResponseError=B.ErrorCodes=void 0;var Xa=ui(),Vg;(function(t){t.ParseError=-32700,t.InvalidRequest=-32600,t.MethodNotFound=-32601,t.InvalidParams=-32602,t.InternalError=-32603,t.jsonrpcReservedErrorRangeStart=-32099,t.serverErrorStart=-32099,t.MessageWriteError=-32099,t.MessageReadError=-32098,t.PendingResponseRejected=-32097,t.ConnectionInactive=-32096,t.ServerNotInitialized=-32002,t.UnknownErrorCode=-32001,t.jsonrpcReservedErrorRangeEnd=-32e3,t.serverErrorEnd=-32e3})(Vg||(B.ErrorCodes=Vg={}));var Yg=class t extends Error{constructor(e,r,n){super(r),this.code=Xa.number(e)?e:Vg.UnknownErrorCode,this.data=n,Object.setPrototypeOf(this,t.prototype)}toJson(){let e={code:this.code,message:this.message};return this.data!==void 0&&(e.data=this.data),e}};B.ResponseError=Yg;var or=class t{constructor(e){this.kind=e}static is(e){return e===t.auto||e===t.byName||e===t.byPosition}toString(){return this.kind}};B.ParameterStructures=or;or.auto=new or("auto");or.byPosition=new or("byPosition");or.byName=new or("byName");var Ie=class{constructor(e,r){this.method=e,this.numberOfParams=r}get parameterStructures(){return or.auto}};B.AbstractMessageSignature=Ie;var Xg=class extends Ie{constructor(e){super(e,0)}};B.RequestType0=Xg;var Qg=class extends Ie{constructor(e,r=or.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};B.RequestType=Qg;var Jg=class extends Ie{constructor(e,r=or.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};B.RequestType1=Jg;var Zg=class extends Ie{constructor(e){super(e,2)}};B.RequestType2=Zg;var em=class extends Ie{constructor(e){super(e,3)}};B.RequestType3=em;var tm=class extends Ie{constructor(e){super(e,4)}};B.RequestType4=tm;var rm=class extends Ie{constructor(e){super(e,5)}};B.RequestType5=rm;var nm=class extends Ie{constructor(e){super(e,6)}};B.RequestType6=nm;var am=class extends Ie{constructor(e){super(e,7)}};B.RequestType7=am;var om=class extends Ie{constructor(e){super(e,8)}};B.RequestType8=om;var im=class extends Ie{constructor(e){super(e,9)}};B.RequestType9=im;var sm=class extends Ie{constructor(e,r=or.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};B.NotificationType=sm;var um=class extends Ie{constructor(e){super(e,0)}};B.NotificationType0=um;var lm=class extends Ie{constructor(e,r=or.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};B.NotificationType1=lm;var cm=class extends Ie{constructor(e){super(e,2)}};B.NotificationType2=cm;var dm=class extends Ie{constructor(e){super(e,3)}};B.NotificationType3=dm;var pm=class extends Ie{constructor(e){super(e,4)}};B.NotificationType4=pm;var fm=class extends Ie{constructor(e){super(e,5)}};B.NotificationType5=fm;var ym=class extends Ie{constructor(e){super(e,6)}};B.NotificationType6=ym;var hm=class extends Ie{constructor(e){super(e,7)}};B.NotificationType7=hm;var gm=class extends Ie{constructor(e){super(e,8)}};B.NotificationType8=gm;var mm=class extends Ie{constructor(e){super(e,9)}};B.NotificationType9=mm;var nC;(function(t){function e(a){let o=a;return o&&Xa.string(o.method)&&(Xa.string(o.id)||Xa.number(o.id))}t.isRequest=e;function r(a){let o=a;return o&&Xa.string(o.method)&&a.id===void 0}t.isNotification=r;function n(a){let o=a;return o&&(o.result!==void 0||!!o.error)&&(Xa.string(o.id)||Xa.number(o.id)||o.id===null)}t.isResponse=n})(nC||(B.Message=nC={}))});var Sm=M(na=>{"use strict";var aC;Object.defineProperty(na,"__esModule",{value:!0});na.LRUCache=na.LinkedMap=na.Touch=void 0;var Dt;(function(t){t.None=0,t.First=1,t.AsOld=t.First,t.Last=2,t.AsNew=t.Last})(Dt||(na.Touch=Dt={}));var Vc=class{constructor(){this[aC]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){return this._head?.value}get last(){return this._tail?.value}has(e){return this._map.has(e)}get(e,r=Dt.None){let n=this._map.get(e);if(n)return r!==Dt.None&&this.touch(n,r),n.value}set(e,r,n=Dt.None){let a=this._map.get(e);if(a)a.value=r,n!==Dt.None&&this.touch(a,n);else{switch(a={key:e,value:r,next:void 0,previous:void 0},n){case Dt.None:this.addItemLast(a);break;case Dt.First:this.addItemFirst(a);break;case Dt.Last:this.addItemLast(a);break;default:this.addItemLast(a);break}this._map.set(e,a),this._size++}return this}delete(e){return!!this.remove(e)}remove(e){let r=this._map.get(e);if(r)return this._map.delete(e),this.removeItem(r),this._size--,r.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");let e=this._head;return this._map.delete(e.key),this.removeItem(e),this._size--,e.value}forEach(e,r){let n=this._state,a=this._head;for(;a;){if(r?e.bind(r)(a.value,a.key,this):e(a.value,a.key,this),this._state!==n)throw new Error("LinkedMap got modified during iteration.");a=a.next}}keys(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let a={value:r.key,done:!1};return r=r.next,a}else return{value:void 0,done:!0}}};return n}values(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let a={value:r.value,done:!1};return r=r.next,a}else return{value:void 0,done:!0}}};return n}entries(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let a={value:[r.key,r.value],done:!1};return r=r.next,a}else return{value:void 0,done:!0}}};return n}[(aC=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(e){if(e>=this.size)return;if(e===0){this.clear();return}let r=this._head,n=this.size;for(;r&&n>e;)this._map.delete(r.key),r=r.next,n--;this._head=r,this._size=n,r&&(r.previous=void 0),this._state++}addItemFirst(e){if(!this._head&&!this._tail)this._tail=e;else if(this._head)e.next=this._head,this._head.previous=e;else throw new Error("Invalid list");this._head=e,this._state++}addItemLast(e){if(!this._head&&!this._tail)this._head=e;else if(this._tail)e.previous=this._tail,this._tail.next=e;else throw new Error("Invalid list");this._tail=e,this._state++}removeItem(e){if(e===this._head&&e===this._tail)this._head=void 0,this._tail=void 0;else if(e===this._head){if(!e.next)throw new Error("Invalid list");e.next.previous=void 0,this._head=e.next}else if(e===this._tail){if(!e.previous)throw new Error("Invalid list");e.previous.next=void 0,this._tail=e.previous}else{let r=e.next,n=e.previous;if(!r||!n)throw new Error("Invalid list");r.previous=n,n.next=r}e.next=void 0,e.previous=void 0,this._state++}touch(e,r){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(r!==Dt.First&&r!==Dt.Last)){if(r===Dt.First){if(e===this._head)return;let n=e.next,a=e.previous;e===this._tail?(a.next=void 0,this._tail=a):(n.previous=a,a.next=n),e.previous=void 0,e.next=this._head,this._head.previous=e,this._head=e,this._state++}else if(r===Dt.Last){if(e===this._tail)return;let n=e.next,a=e.previous;e===this._head?(n.previous=void 0,this._head=n):(n.previous=a,a.next=n),e.next=void 0,e.previous=this._tail,this._tail.next=e,this._tail=e,this._state++}}}toJSON(){let e=[];return this.forEach((r,n)=>{e.push([n,r])}),e}fromJSON(e){this.clear();for(let[r,n]of e)this.set(r,n)}};na.LinkedMap=Vc;var wm=class extends Vc{constructor(e,r=1){super(),this._limit=e,this._ratio=Math.min(Math.max(0,r),1)}get limit(){return this._limit}set limit(e){this._limit=e,this.checkTrim()}get ratio(){return this._ratio}set ratio(e){this._ratio=Math.min(Math.max(0,e),1),this.checkTrim()}get(e,r=Dt.AsNew){return super.get(e,r)}peek(e){return super.get(e,Dt.None)}set(e,r){return super.set(e,r,Dt.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}};na.LRUCache=wm});var iC=M(Yc=>{"use strict";Object.defineProperty(Yc,"__esModule",{value:!0});Yc.Disposable=void 0;var oC;(function(t){function e(r){return{dispose:r}}t.create=e})(oC||(Yc.Disposable=oC={}))});var sC=M(mi=>{"use strict";Object.defineProperty(mi,"__esModule",{value:!0});mi.SharedArrayReceiverStrategy=mi.SharedArraySenderStrategy=void 0;var E0=zs(),mu;(function(t){t.Continue=0,t.Cancelled=1})(mu||(mu={}));var Am=class{constructor(){this.buffers=new Map}enableCancellation(e){if(e.id===null)return;let r=new SharedArrayBuffer(4),n=new Int32Array(r,0,1);n[0]=mu.Continue,this.buffers.set(e.id,r),e.$cancellationData=r}async sendCancellation(e,r){let n=this.buffers.get(r);if(n===void 0)return;let a=new Int32Array(n,0,1);Atomics.store(a,0,mu.Cancelled)}cleanup(e){this.buffers.delete(e)}dispose(){this.buffers.clear()}};mi.SharedArraySenderStrategy=Am;var $m=class{constructor(e){this.data=new Int32Array(e,0,1)}get isCancellationRequested(){return Atomics.load(this.data,0)===mu.Cancelled}get onCancellationRequested(){throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")}},Tm=class{constructor(e){this.token=new $m(e)}cancel(){}dispose(){}},Cm=class{constructor(){this.kind="request"}createCancellationTokenSource(e){let r=e.$cancellationData;return r===void 0?new E0.CancellationTokenSource:new Tm(r)}};mi.SharedArrayReceiverStrategy=Cm});var bm=M(Xc=>{"use strict";Object.defineProperty(Xc,"__esModule",{value:!0});Xc.Semaphore=void 0;var D0=ta(),xm=class{constructor(e=1){if(e<=0)throw new Error("Capacity must be greater than 0");this._capacity=e,this._active=0,this._waiting=[]}lock(e){return new Promise((r,n)=>{this._waiting.push({thunk:e,resolve:r,reject:n}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,D0.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;let e=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{let r=e.thunk();r instanceof Promise?r.then(n=>{this._active--,e.resolve(n),this.runNext()},n=>{this._active--,e.reject(n),this.runNext()}):(this._active--,e.resolve(r),this.runNext())}catch(r){this._active--,e.reject(r),this.runNext()}}};Xc.Semaphore=xm});var lC=M(aa=>{"use strict";Object.defineProperty(aa,"__esModule",{value:!0});aa.ReadableStreamMessageReader=aa.AbstractMessageReader=aa.MessageReader=void 0;var Rm=ta(),vi=ui(),km=Ua(),N0=bm(),uC;(function(t){function e(r){let n=r;return n&&vi.func(n.listen)&&vi.func(n.dispose)&&vi.func(n.onError)&&vi.func(n.onClose)&&vi.func(n.onPartialMessage)}t.is=e})(uC||(aa.MessageReader=uC={}));var Qc=class{constructor(){this.errorEmitter=new km.Emitter,this.closeEmitter=new km.Emitter,this.partialMessageEmitter=new km.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e){this.errorEmitter.fire(this.asError(e))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(e){this.partialMessageEmitter.fire(e)}asError(e){return e instanceof Error?e:new Error(`Reader received error. Reason: ${vi.string(e.message)?e.message:"unknown"}`)}};aa.AbstractMessageReader=Qc;var Km;(function(t){function e(r){let n,a,o,i=new Map,s,u=new Map;if(r===void 0||typeof r=="string")n=r??"utf-8";else{if(n=r.charset??"utf-8",r.contentDecoder!==void 0&&(o=r.contentDecoder,i.set(o.name,o)),r.contentDecoders!==void 0)for(let l of r.contentDecoders)i.set(l.name,l);if(r.contentTypeDecoder!==void 0&&(s=r.contentTypeDecoder,u.set(s.name,s)),r.contentTypeDecoders!==void 0)for(let l of r.contentTypeDecoders)u.set(l.name,l)}return s===void 0&&(s=(0,Rm.default)().applicationJson.decoder,u.set(s.name,s)),{charset:n,contentDecoder:o,contentDecoders:i,contentTypeDecoder:s,contentTypeDecoders:u}}t.fromOptions=e})(Km||(Km={}));var Pm=class extends Qc{constructor(e,r){super(),this.readable=e,this.options=Km.fromOptions(r),this.buffer=(0,Rm.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0,this.readSemaphore=new N0.Semaphore(1)}set partialMessageTimeout(e){this._partialMessageTimeout=e}get partialMessageTimeout(){return this._partialMessageTimeout}listen(e){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=e;let r=this.readable.onData(n=>{this.onData(n)});return this.readable.onError(n=>this.fireError(n)),this.readable.onClose(()=>this.fireClose()),r}onData(e){try{for(this.buffer.append(e);;){if(this.nextMessageLength===-1){let n=this.buffer.tryReadHeaders(!0);if(!n)return;let a=n.get("content-length");if(!a){this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(n))}`));return}let o=parseInt(a);if(isNaN(o)){this.fireError(new Error(`Content-Length value must be a number. Got ${a}`));return}this.nextMessageLength=o}let r=this.buffer.tryReadBody(this.nextMessageLength);if(r===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1,this.readSemaphore.lock(async()=>{let n=this.options.contentDecoder!==void 0?await this.options.contentDecoder.decode(r):r,a=await this.options.contentTypeDecoder.decode(n,this.options);this.callback(a)}).catch(n=>{this.fireError(n)})}}catch(r){this.fireError(r)}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,Rm.default)().timer.setTimeout((e,r)=>{this.partialMessageTimer=void 0,e===this.messageToken&&(this.firePartialMessage({messageToken:e,waitingTime:r}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}};aa.ReadableStreamMessageReader=Pm});var yC=M(oa=>{"use strict";Object.defineProperty(oa,"__esModule",{value:!0});oa.WriteableStreamMessageWriter=oa.AbstractMessageWriter=oa.MessageWriter=void 0;var cC=ta(),vu=ui(),_0=bm(),dC=Ua(),M0="Content-Length: ",pC=`\r
`,fC;(function(t){function e(r){let n=r;return n&&vu.func(n.dispose)&&vu.func(n.onClose)&&vu.func(n.onError)&&vu.func(n.write)}t.is=e})(fC||(oa.MessageWriter=fC={}));var Jc=class{constructor(){this.errorEmitter=new dC.Emitter,this.closeEmitter=new dC.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e,r,n){this.errorEmitter.fire([this.asError(e),r,n])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(e){return e instanceof Error?e:new Error(`Writer received error. Reason: ${vu.string(e.message)?e.message:"unknown"}`)}};oa.AbstractMessageWriter=Jc;var Im;(function(t){function e(r){return r===void 0||typeof r=="string"?{charset:r??"utf-8",contentTypeEncoder:(0,cC.default)().applicationJson.encoder}:{charset:r.charset??"utf-8",contentEncoder:r.contentEncoder,contentTypeEncoder:r.contentTypeEncoder??(0,cC.default)().applicationJson.encoder}}t.fromOptions=e})(Im||(Im={}));var Em=class extends Jc{constructor(e,r){super(),this.writable=e,this.options=Im.fromOptions(r),this.errorCount=0,this.writeSemaphore=new _0.Semaphore(1),this.writable.onError(n=>this.fireError(n)),this.writable.onClose(()=>this.fireClose())}async write(e){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(e,this.options).then(n=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(n):n).then(n=>{let a=[];return a.push(M0,n.byteLength.toString(),pC),a.push(pC),this.doWrite(e,a,n)},n=>{throw this.fireError(n),n}))}async doWrite(e,r,n){try{return await this.writable.write(r.join(""),"ascii"),this.writable.write(n)}catch(a){return this.handleError(a,e),Promise.reject(a)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){this.writable.end()}};oa.WriteableStreamMessageWriter=Em});var hC=M(Zc=>{"use strict";Object.defineProperty(Zc,"__esModule",{value:!0});Zc.AbstractMessageBuffer=void 0;var O0=13,z0=10,L0=`\r
`,Dm=class{constructor(e="utf-8"){this._encoding=e,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(e){let r=typeof e=="string"?this.fromString(e,this._encoding):e;this._chunks.push(r),this._totalLength+=r.byteLength}tryReadHeaders(e=!1){if(this._chunks.length===0)return;let r=0,n=0,a=0,o=0;e:for(;n<this._chunks.length;){let l=this._chunks[n];for(a=0;a<l.length;){switch(l[a]){case O0:switch(r){case 0:r=1;break;case 2:r=3;break;default:r=0}break;case z0:switch(r){case 1:r=2;break;case 3:r=4,a++;break e;default:r=0}break;default:r=0}a++}o+=l.byteLength,n++}if(r!==4)return;let i=this._read(o+a),s=new Map,u=this.toString(i,"ascii").split(L0);if(u.length<2)return s;for(let l=0;l<u.length-2;l++){let c=u[l],d=c.indexOf(":");if(d===-1)throw new Error(`Message header must separate key and value using ':'
${c}`);let p=c.substr(0,d),y=c.substr(d+1).trim();s.set(e?p.toLowerCase():p,y)}return s}tryReadBody(e){if(!(this._totalLength<e))return this._read(e)}get numberOfBytes(){return this._totalLength}_read(e){if(e===0)return this.emptyBuffer();if(e>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===e){let o=this._chunks[0];return this._chunks.shift(),this._totalLength-=e,this.asNative(o)}if(this._chunks[0].byteLength>e){let o=this._chunks[0],i=this.asNative(o,e);return this._chunks[0]=o.slice(e),this._totalLength-=e,i}let r=this.allocNative(e),n=0,a=0;for(;e>0;){let o=this._chunks[a];if(o.byteLength>e){let i=o.slice(0,e);r.set(i,n),n+=e,this._chunks[a]=o.slice(e),this._totalLength-=e,e-=e}else r.set(o,n),n+=o.byteLength,this._chunks.shift(),this._totalLength-=o.byteLength,e-=o.byteLength}return r}};Zc.AbstractMessageBuffer=Dm});var SC=M(J=>{"use strict";Object.defineProperty(J,"__esModule",{value:!0});J.createMessageConnection=J.ConnectionOptions=J.MessageStrategy=J.CancellationStrategy=J.CancellationSenderStrategy=J.CancellationReceiverStrategy=J.RequestCancellationReceiverStrategy=J.IdCancellationReceiverStrategy=J.ConnectionStrategy=J.ConnectionError=J.ConnectionErrors=J.LogTraceNotification=J.SetTraceNotification=J.TraceFormat=J.TraceValues=J.Trace=J.NullLogger=J.ProgressType=J.ProgressToken=void 0;var gC=ta(),He=ui(),j=vm(),mC=Sm(),wu=Ua(),Nm=zs(),$u;(function(t){t.type=new j.NotificationType("$/cancelRequest")})($u||($u={}));var _m;(function(t){function e(r){return typeof r=="string"||typeof r=="number"}t.is=e})(_m||(J.ProgressToken=_m={}));var Su;(function(t){t.type=new j.NotificationType("$/progress")})(Su||(Su={}));var Mm=class{constructor(){}};J.ProgressType=Mm;var Om;(function(t){function e(r){return He.func(r)}t.is=e})(Om||(Om={}));J.NullLogger=Object.freeze({error:()=>{},warn:()=>{},info:()=>{},log:()=>{}});var pe;(function(t){t[t.Off=0]="Off",t[t.Messages=1]="Messages",t[t.Compact=2]="Compact",t[t.Verbose=3]="Verbose"})(pe||(J.Trace=pe={}));var vC;(function(t){t.Off="off",t.Messages="messages",t.Compact="compact",t.Verbose="verbose"})(vC||(J.TraceValues=vC={}));(function(t){function e(n){if(!He.string(n))return t.Off;switch(n=n.toLowerCase(),n){case"off":return t.Off;case"messages":return t.Messages;case"compact":return t.Compact;case"verbose":return t.Verbose;default:return t.Off}}t.fromString=e;function r(n){switch(n){case t.Off:return"off";case t.Messages:return"messages";case t.Compact:return"compact";case t.Verbose:return"verbose";default:return"off"}}t.toString=r})(pe||(J.Trace=pe={}));var hr;(function(t){t.Text="text",t.JSON="json"})(hr||(J.TraceFormat=hr={}));(function(t){function e(r){return He.string(r)?(r=r.toLowerCase(),r==="json"?t.JSON:t.Text):t.Text}t.fromString=e})(hr||(J.TraceFormat=hr={}));var zm;(function(t){t.type=new j.NotificationType("$/setTrace")})(zm||(J.SetTraceNotification=zm={}));var ed;(function(t){t.type=new j.NotificationType("$/logTrace")})(ed||(J.LogTraceNotification=ed={}));var Au;(function(t){t[t.Closed=1]="Closed",t[t.Disposed=2]="Disposed",t[t.AlreadyListening=3]="AlreadyListening"})(Au||(J.ConnectionErrors=Au={}));var wi=class t extends Error{constructor(e,r){super(r),this.code=e,Object.setPrototypeOf(this,t.prototype)}};J.ConnectionError=wi;var Lm;(function(t){function e(r){let n=r;return n&&He.func(n.cancelUndispatched)}t.is=e})(Lm||(J.ConnectionStrategy=Lm={}));var td;(function(t){function e(r){let n=r;return n&&(n.kind===void 0||n.kind==="id")&&He.func(n.createCancellationTokenSource)&&(n.dispose===void 0||He.func(n.dispose))}t.is=e})(td||(J.IdCancellationReceiverStrategy=td={}));var Fm;(function(t){function e(r){let n=r;return n&&n.kind==="request"&&He.func(n.createCancellationTokenSource)&&(n.dispose===void 0||He.func(n.dispose))}t.is=e})(Fm||(J.RequestCancellationReceiverStrategy=Fm={}));var rd;(function(t){t.Message=Object.freeze({createCancellationTokenSource(r){return new Nm.CancellationTokenSource}});function e(r){return td.is(r)||Fm.is(r)}t.is=e})(rd||(J.CancellationReceiverStrategy=rd={}));var nd;(function(t){t.Message=Object.freeze({sendCancellation(r,n){return r.sendNotification($u.type,{id:n})},cleanup(r){}});function e(r){let n=r;return n&&He.func(n.sendCancellation)&&He.func(n.cleanup)}t.is=e})(nd||(J.CancellationSenderStrategy=nd={}));var ad;(function(t){t.Message=Object.freeze({receiver:rd.Message,sender:nd.Message});function e(r){let n=r;return n&&rd.is(n.receiver)&&nd.is(n.sender)}t.is=e})(ad||(J.CancellationStrategy=ad={}));var od;(function(t){function e(r){let n=r;return n&&He.func(n.handleMessage)}t.is=e})(od||(J.MessageStrategy=od={}));var wC;(function(t){function e(r){let n=r;return n&&(ad.is(n.cancellationStrategy)||Lm.is(n.connectionStrategy)||od.is(n.messageStrategy))}t.is=e})(wC||(J.ConnectionOptions=wC={}));var zr;(function(t){t[t.New=1]="New",t[t.Listening=2]="Listening",t[t.Closed=3]="Closed",t[t.Disposed=4]="Disposed"})(zr||(zr={}));function F0(t,e,r,n){let a=r!==void 0?r:J.NullLogger,o=0,i=0,s=0,u="2.0",l,c=new Map,d,p=new Map,y=new Map,v,S=new mC.LinkedMap,T=new Map,A=new Set,g=new Map,f=pe.Off,$=hr.Text,P,Q=zr.New,vt=new wu.Emitter,Qe=new wu.Emitter,dr=new wu.Emitter,jt=new wu.Emitter,N=new wu.Emitter,x=n&&n.cancellationStrategy?n.cancellationStrategy:ad.Message;function W(m){if(m===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+m.toString()}function O(m){return m===null?"res-unknown-"+(++s).toString():"res-"+m.toString()}function re(){return"not-"+(++i).toString()}function V(m,b){j.Message.isRequest(b)?m.set(W(b.id),b):j.Message.isResponse(b)?m.set(O(b.id),b):m.set(re(),b)}function R(m){}function k(){return Q===zr.Listening}function fe(){return Q===zr.Closed}function le(){return Q===zr.Disposed}function Wr(){(Q===zr.New||Q===zr.Listening)&&(Q=zr.Closed,Qe.fire(void 0))}function Ou(m){vt.fire([m,void 0,void 0])}function nf(m){vt.fire(m)}t.onClose(Wr),t.onError(Ou),e.onClose(Wr),e.onError(nf);function Oi(){v||S.size===0||(v=(0,gC.default)().timer.setImmediate(()=>{v=void 0,zu()}))}function Vt(m){j.Message.isRequest(m)?Yt(m):j.Message.isNotification(m)?Ot(m):j.Message.isResponse(m)?In(m):Pr(m)}function zu(){if(S.size===0)return;let m=S.shift();try{let b=n?.messageStrategy;od.is(b)?b.handleMessage(m,Vt):Vt(m)}finally{Oi()}}let dt=m=>{try{if(j.Message.isNotification(m)&&m.method===$u.type.method){let b=m.params.id,E=W(b),G=S.get(E);if(j.Message.isRequest(G)){let ve=n?.connectionStrategy,Be=ve&&ve.cancelUndispatched?ve.cancelUndispatched(G,R):void 0;if(Be&&(Be.error!==void 0||Be.result!==void 0)){S.delete(E),g.delete(b),Be.id=G.id,En(Be,m.method,Date.now()),e.write(Be).catch(()=>a.error("Sending response for canceled message failed."));return}}let Re=g.get(b);if(Re!==void 0){Re.cancel(),af(m);return}else A.add(b)}V(S,m)}finally{Oi()}};function Yt(m){if(le())return;function b(se,Oe,ge){let ut={jsonrpc:u,id:m.id};se instanceof j.ResponseError?ut.error=se.toJson():ut.result=se===void 0?null:se,En(ut,Oe,ge),e.write(ut).catch(()=>a.error("Sending response failed."))}function E(se,Oe,ge){let ut={jsonrpc:u,id:m.id,error:se.toJson()};En(ut,Oe,ge),e.write(ut).catch(()=>a.error("Sending response failed."))}function G(se,Oe,ge){se===void 0&&(se=null);let ut={jsonrpc:u,id:m.id,result:se};En(ut,Oe,ge),e.write(ut).catch(()=>a.error("Sending response failed."))}Lu(m);let Re=c.get(m.method),ve,Be;Re&&(ve=Re.type,Be=Re.handler);let Je=Date.now();if(Be||l){let se=m.id??String(Date.now()),Oe=td.is(x.receiver)?x.receiver.createCancellationTokenSource(se):x.receiver.createCancellationTokenSource(m);m.id!==null&&A.has(m.id)&&Oe.cancel(),m.id!==null&&g.set(se,Oe);try{let ge;if(Be)if(m.params===void 0){if(ve!==void 0&&ve.numberOfParams!==0){E(new j.ResponseError(j.ErrorCodes.InvalidParams,`Request ${m.method} defines ${ve.numberOfParams} params but received none.`),m.method,Je);return}ge=Be(Oe.token)}else if(Array.isArray(m.params)){if(ve!==void 0&&ve.parameterStructures===j.ParameterStructures.byName){E(new j.ResponseError(j.ErrorCodes.InvalidParams,`Request ${m.method} defines parameters by name but received parameters by position`),m.method,Je);return}ge=Be(...m.params,Oe.token)}else{if(ve!==void 0&&ve.parameterStructures===j.ParameterStructures.byPosition){E(new j.ResponseError(j.ErrorCodes.InvalidParams,`Request ${m.method} defines parameters by position but received parameters by name`),m.method,Je);return}ge=Be(m.params,Oe.token)}else l&&(ge=l(m.method,m.params,Oe.token));let ut=ge;ge?ut.then?ut.then(zt=>{g.delete(se),b(zt,m.method,Je)},zt=>{g.delete(se),zt instanceof j.ResponseError?E(zt,m.method,Je):zt&&He.string(zt.message)?E(new j.ResponseError(j.ErrorCodes.InternalError,`Request ${m.method} failed with message: ${zt.message}`),m.method,Je):E(new j.ResponseError(j.ErrorCodes.InternalError,`Request ${m.method} failed unexpectedly without providing any details.`),m.method,Je)}):(g.delete(se),b(ge,m.method,Je)):(g.delete(se),G(ge,m.method,Je))}catch(ge){g.delete(se),ge instanceof j.ResponseError?b(ge,m.method,Je):ge&&He.string(ge.message)?E(new j.ResponseError(j.ErrorCodes.InternalError,`Request ${m.method} failed with message: ${ge.message}`),m.method,Je):E(new j.ResponseError(j.ErrorCodes.InternalError,`Request ${m.method} failed unexpectedly without providing any details.`),m.method,Je)}}else E(new j.ResponseError(j.ErrorCodes.MethodNotFound,`Unhandled method ${m.method}`),m.method,Je)}function In(m){if(!le())if(m.id===null)m.error?a.error(`Received response message without id: Error is: 
${JSON.stringify(m.error,void 0,4)}`):a.error("Received response message without id. No further error information provided.");else{let b=m.id,E=T.get(b);if(GK(m,E),E!==void 0){T.delete(b);try{if(m.error){let G=m.error;E.reject(new j.ResponseError(G.code,G.message,G.data))}else if(m.result!==void 0)E.resolve(m.result);else throw new Error("Should never happen.")}catch(G){G.message?a.error(`Response handler '${E.method}' failed with message: ${G.message}`):a.error(`Response handler '${E.method}' failed unexpectedly.`)}}}}function Ot(m){if(le())return;let b,E;if(m.method===$u.type.method){let G=m.params.id;A.delete(G),af(m);return}else{let G=p.get(m.method);G&&(E=G.handler,b=G.type)}if(E||d)try{if(af(m),E)if(m.params===void 0)b!==void 0&&b.numberOfParams!==0&&b.parameterStructures!==j.ParameterStructures.byName&&a.error(`Notification ${m.method} defines ${b.numberOfParams} params but received none.`),E();else if(Array.isArray(m.params)){let G=m.params;m.method===Su.type.method&&G.length===2&&_m.is(G[0])?E({token:G[0],value:G[1]}):(b!==void 0&&(b.parameterStructures===j.ParameterStructures.byName&&a.error(`Notification ${m.method} defines parameters by name but received parameters by position`),b.numberOfParams!==m.params.length&&a.error(`Notification ${m.method} defines ${b.numberOfParams} params but received ${G.length} arguments`)),E(...G))}else b!==void 0&&b.parameterStructures===j.ParameterStructures.byPosition&&a.error(`Notification ${m.method} defines parameters by position but received parameters by name`),E(m.params);else d&&d(m.method,m.params)}catch(G){G.message?a.error(`Notification handler '${m.method}' failed with message: ${G.message}`):a.error(`Notification handler '${m.method}' failed unexpectedly.`)}else dr.fire(m)}function Pr(m){if(!m){a.error("Received empty message.");return}a.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(m,null,4)}`);let b=m;if(He.string(b.id)||He.number(b.id)){let E=b.id,G=T.get(E);G&&G.reject(new Error("The received response has neither a result nor an error property."))}}function wt(m){if(m!=null)switch(f){case pe.Verbose:return JSON.stringify(m,null,4);case pe.Compact:return JSON.stringify(m);default:return}}function Ir(m){if(!(f===pe.Off||!P))if($===hr.Text){let b;(f===pe.Verbose||f===pe.Compact)&&m.params&&(b=`Params: ${wt(m.params)}

`),P.log(`Sending request '${m.method} - (${m.id})'.`,b)}else ro("send-request",m)}function dn(m){if(!(f===pe.Off||!P))if($===hr.Text){let b;(f===pe.Verbose||f===pe.Compact)&&(m.params?b=`Params: ${wt(m.params)}

`:b=`No parameters provided.

`),P.log(`Sending notification '${m.method}'.`,b)}else ro("send-notification",m)}function En(m,b,E){if(!(f===pe.Off||!P))if($===hr.Text){let G;(f===pe.Verbose||f===pe.Compact)&&(m.error&&m.error.data?G=`Error data: ${wt(m.error.data)}

`:m.result?G=`Result: ${wt(m.result)}

`:m.error===void 0&&(G=`No result returned.

`)),P.log(`Sending response '${b} - (${m.id})'. Processing request took ${Date.now()-E}ms`,G)}else ro("send-response",m)}function Lu(m){if(!(f===pe.Off||!P))if($===hr.Text){let b;(f===pe.Verbose||f===pe.Compact)&&m.params&&(b=`Params: ${wt(m.params)}

`),P.log(`Received request '${m.method} - (${m.id})'.`,b)}else ro("receive-request",m)}function af(m){if(!(f===pe.Off||!P||m.method===ed.type.method))if($===hr.Text){let b;(f===pe.Verbose||f===pe.Compact)&&(m.params?b=`Params: ${wt(m.params)}

`:b=`No parameters provided.

`),P.log(`Received notification '${m.method}'.`,b)}else ro("receive-notification",m)}function GK(m,b){if(!(f===pe.Off||!P))if($===hr.Text){let E;if((f===pe.Verbose||f===pe.Compact)&&(m.error&&m.error.data?E=`Error data: ${wt(m.error.data)}

`:m.result?E=`Result: ${wt(m.result)}

`:m.error===void 0&&(E=`No result returned.

`)),b){let G=m.error?` Request failed: ${m.error.message} (${m.error.code}).`:"";P.log(`Received response '${b.method} - (${m.id})' in ${Date.now()-b.timerStart}ms.${G}`,E)}else P.log(`Received response ${m.id} without active response promise.`,E)}else ro("receive-response",m)}function ro(m,b){if(!P||f===pe.Off)return;let E={isLSPMessage:!0,type:m,message:b,timestamp:Date.now()};P.log(E)}function zi(){if(fe())throw new wi(Au.Closed,"Connection is closed.");if(le())throw new wi(Au.Disposed,"Connection is disposed.")}function HK(){if(k())throw new wi(Au.AlreadyListening,"Connection is already listening")}function BK(){if(!k())throw new Error("Call listen() first.")}function Li(m){return m===void 0?null:m}function Uv(m){if(m!==null)return m}function qv(m){return m!=null&&!Array.isArray(m)&&typeof m=="object"}function of(m,b){switch(m){case j.ParameterStructures.auto:return qv(b)?Uv(b):[Li(b)];case j.ParameterStructures.byName:if(!qv(b))throw new Error("Received parameters by name but param is not an object literal.");return Uv(b);case j.ParameterStructures.byPosition:return[Li(b)];default:throw new Error(`Unknown parameter structure ${m.toString()}`)}}function jv(m,b){let E,G=m.numberOfParams;switch(G){case 0:E=void 0;break;case 1:E=of(m.parameterStructures,b[0]);break;default:E=[];for(let Re=0;Re<b.length&&Re<G;Re++)E.push(Li(b[Re]));if(b.length<G)for(let Re=b.length;Re<G;Re++)E.push(null);break}return E}let no={sendNotification:(m,...b)=>{zi();let E,G;if(He.string(m)){E=m;let ve=b[0],Be=0,Je=j.ParameterStructures.auto;j.ParameterStructures.is(ve)&&(Be=1,Je=ve);let se=b.length,Oe=se-Be;switch(Oe){case 0:G=void 0;break;case 1:G=of(Je,b[Be]);break;default:if(Je===j.ParameterStructures.byName)throw new Error(`Received ${Oe} parameters for 'by Name' notification parameter structure.`);G=b.slice(Be,se).map(ge=>Li(ge));break}}else{let ve=b;E=m.method,G=jv(m,ve)}let Re={jsonrpc:u,method:E,params:G};return dn(Re),e.write(Re).catch(ve=>{throw a.error("Sending notification failed."),ve})},onNotification:(m,b)=>{zi();let E;return He.func(m)?d=m:b&&(He.string(m)?(E=m,p.set(m,{type:void 0,handler:b})):(E=m.method,p.set(m.method,{type:m,handler:b}))),{dispose:()=>{E!==void 0?p.delete(E):d=void 0}}},onProgress:(m,b,E)=>{if(y.has(b))throw new Error(`Progress handler for token ${b} already registered`);return y.set(b,E),{dispose:()=>{y.delete(b)}}},sendProgress:(m,b,E)=>no.sendNotification(Su.type,{token:b,value:E}),onUnhandledProgress:jt.event,sendRequest:(m,...b)=>{zi(),BK();let E,G,Re;if(He.string(m)){E=m;let se=b[0],Oe=b[b.length-1],ge=0,ut=j.ParameterStructures.auto;j.ParameterStructures.is(se)&&(ge=1,ut=se);let zt=b.length;Nm.CancellationToken.is(Oe)&&(zt=zt-1,Re=Oe);let Gr=zt-ge;switch(Gr){case 0:G=void 0;break;case 1:G=of(ut,b[ge]);break;default:if(ut===j.ParameterStructures.byName)throw new Error(`Received ${Gr} parameters for 'by Name' request parameter structure.`);G=b.slice(ge,zt).map(UK=>Li(UK));break}}else{let se=b;E=m.method,G=jv(m,se);let Oe=m.numberOfParams;Re=Nm.CancellationToken.is(se[Oe])?se[Oe]:void 0}let ve=o++,Be;Re&&(Be=Re.onCancellationRequested(()=>{let se=x.sender.sendCancellation(no,ve);return se===void 0?(a.log(`Received no promise from cancellation strategy when cancelling id ${ve}`),Promise.resolve()):se.catch(()=>{a.log(`Sending cancellation messages for id ${ve} failed`)})}));let Je={jsonrpc:u,id:ve,method:E,params:G};return Ir(Je),typeof x.sender.enableCancellation=="function"&&x.sender.enableCancellation(Je),new Promise(async(se,Oe)=>{let ge=Gr=>{se(Gr),x.sender.cleanup(ve),Be?.dispose()},ut=Gr=>{Oe(Gr),x.sender.cleanup(ve),Be?.dispose()},zt={method:E,timerStart:Date.now(),resolve:ge,reject:ut};try{await e.write(Je),T.set(ve,zt)}catch(Gr){throw a.error("Sending request failed."),zt.reject(new j.ResponseError(j.ErrorCodes.MessageWriteError,Gr.message?Gr.message:"Unknown reason")),Gr}})},onRequest:(m,b)=>{zi();let E=null;return Om.is(m)?(E=void 0,l=m):He.string(m)?(E=null,b!==void 0&&(E=m,c.set(m,{handler:b,type:void 0}))):b!==void 0&&(E=m.method,c.set(m.method,{type:m,handler:b})),{dispose:()=>{E!==null&&(E!==void 0?c.delete(E):l=void 0)}}},hasPendingResponse:()=>T.size>0,trace:async(m,b,E)=>{let G=!1,Re=hr.Text;E!==void 0&&(He.boolean(E)?G=E:(G=E.sendNotification||!1,Re=E.traceFormat||hr.Text)),f=m,$=Re,f===pe.Off?P=void 0:P=b,G&&!fe()&&!le()&&await no.sendNotification(zm.type,{value:pe.toString(m)})},onError:vt.event,onClose:Qe.event,onUnhandledNotification:dr.event,onDispose:N.event,end:()=>{e.end()},dispose:()=>{if(le())return;Q=zr.Disposed,N.fire(void 0);let m=new j.ResponseError(j.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(let b of T.values())b.reject(m);T=new Map,g=new Map,A=new Set,S=new mC.LinkedMap,He.func(e.dispose)&&e.dispose(),He.func(t.dispose)&&t.dispose()},listen:()=>{zi(),HK(),Q=zr.Listening,t.listen(dt)},inspect:()=>{(0,gC.default)().console.log("inspect")}};return no.onNotification(ed.type,m=>{if(f===pe.Off||!P)return;let b=f===pe.Verbose||f===pe.Compact;P.log(m.message,b?m.verbose:void 0)}),no.onNotification(Su.type,m=>{let b=y.get(m.token);b?b(m.value):jt.fire(m)}),no}J.createMessageConnection=F0});var id=M(C=>{"use strict";Object.defineProperty(C,"__esModule",{value:!0});C.ProgressType=C.ProgressToken=C.createMessageConnection=C.NullLogger=C.ConnectionOptions=C.ConnectionStrategy=C.AbstractMessageBuffer=C.WriteableStreamMessageWriter=C.AbstractMessageWriter=C.MessageWriter=C.ReadableStreamMessageReader=C.AbstractMessageReader=C.MessageReader=C.SharedArrayReceiverStrategy=C.SharedArraySenderStrategy=C.CancellationToken=C.CancellationTokenSource=C.Emitter=C.Event=C.Disposable=C.LRUCache=C.Touch=C.LinkedMap=C.ParameterStructures=C.NotificationType9=C.NotificationType8=C.NotificationType7=C.NotificationType6=C.NotificationType5=C.NotificationType4=C.NotificationType3=C.NotificationType2=C.NotificationType1=C.NotificationType0=C.NotificationType=C.ErrorCodes=C.ResponseError=C.RequestType9=C.RequestType8=C.RequestType7=C.RequestType6=C.RequestType5=C.RequestType4=C.RequestType3=C.RequestType2=C.RequestType1=C.RequestType0=C.RequestType=C.Message=C.RAL=void 0;C.MessageStrategy=C.CancellationStrategy=C.CancellationSenderStrategy=C.CancellationReceiverStrategy=C.ConnectionError=C.ConnectionErrors=C.LogTraceNotification=C.SetTraceNotification=C.TraceFormat=C.TraceValues=C.Trace=void 0;var ke=vm();Object.defineProperty(C,"Message",{enumerable:!0,get:function(){return ke.Message}});Object.defineProperty(C,"RequestType",{enumerable:!0,get:function(){return ke.RequestType}});Object.defineProperty(C,"RequestType0",{enumerable:!0,get:function(){return ke.RequestType0}});Object.defineProperty(C,"RequestType1",{enumerable:!0,get:function(){return ke.RequestType1}});Object.defineProperty(C,"RequestType2",{enumerable:!0,get:function(){return ke.RequestType2}});Object.defineProperty(C,"RequestType3",{enumerable:!0,get:function(){return ke.RequestType3}});Object.defineProperty(C,"RequestType4",{enumerable:!0,get:function(){return ke.RequestType4}});Object.defineProperty(C,"RequestType5",{enumerable:!0,get:function(){return ke.RequestType5}});Object.defineProperty(C,"RequestType6",{enumerable:!0,get:function(){return ke.RequestType6}});Object.defineProperty(C,"RequestType7",{enumerable:!0,get:function(){return ke.RequestType7}});Object.defineProperty(C,"RequestType8",{enumerable:!0,get:function(){return ke.RequestType8}});Object.defineProperty(C,"RequestType9",{enumerable:!0,get:function(){return ke.RequestType9}});Object.defineProperty(C,"ResponseError",{enumerable:!0,get:function(){return ke.ResponseError}});Object.defineProperty(C,"ErrorCodes",{enumerable:!0,get:function(){return ke.ErrorCodes}});Object.defineProperty(C,"NotificationType",{enumerable:!0,get:function(){return ke.NotificationType}});Object.defineProperty(C,"NotificationType0",{enumerable:!0,get:function(){return ke.NotificationType0}});Object.defineProperty(C,"NotificationType1",{enumerable:!0,get:function(){return ke.NotificationType1}});Object.defineProperty(C,"NotificationType2",{enumerable:!0,get:function(){return ke.NotificationType2}});Object.defineProperty(C,"NotificationType3",{enumerable:!0,get:function(){return ke.NotificationType3}});Object.defineProperty(C,"NotificationType4",{enumerable:!0,get:function(){return ke.NotificationType4}});Object.defineProperty(C,"NotificationType5",{enumerable:!0,get:function(){return ke.NotificationType5}});Object.defineProperty(C,"NotificationType6",{enumerable:!0,get:function(){return ke.NotificationType6}});Object.defineProperty(C,"NotificationType7",{enumerable:!0,get:function(){return ke.NotificationType7}});Object.defineProperty(C,"NotificationType8",{enumerable:!0,get:function(){return ke.NotificationType8}});Object.defineProperty(C,"NotificationType9",{enumerable:!0,get:function(){return ke.NotificationType9}});Object.defineProperty(C,"ParameterStructures",{enumerable:!0,get:function(){return ke.ParameterStructures}});var Wm=Sm();Object.defineProperty(C,"LinkedMap",{enumerable:!0,get:function(){return Wm.LinkedMap}});Object.defineProperty(C,"LRUCache",{enumerable:!0,get:function(){return Wm.LRUCache}});Object.defineProperty(C,"Touch",{enumerable:!0,get:function(){return Wm.Touch}});var W0=iC();Object.defineProperty(C,"Disposable",{enumerable:!0,get:function(){return W0.Disposable}});var AC=Ua();Object.defineProperty(C,"Event",{enumerable:!0,get:function(){return AC.Event}});Object.defineProperty(C,"Emitter",{enumerable:!0,get:function(){return AC.Emitter}});var $C=zs();Object.defineProperty(C,"CancellationTokenSource",{enumerable:!0,get:function(){return $C.CancellationTokenSource}});Object.defineProperty(C,"CancellationToken",{enumerable:!0,get:function(){return $C.CancellationToken}});var TC=sC();Object.defineProperty(C,"SharedArraySenderStrategy",{enumerable:!0,get:function(){return TC.SharedArraySenderStrategy}});Object.defineProperty(C,"SharedArrayReceiverStrategy",{enumerable:!0,get:function(){return TC.SharedArrayReceiverStrategy}});var Gm=lC();Object.defineProperty(C,"MessageReader",{enumerable:!0,get:function(){return Gm.MessageReader}});Object.defineProperty(C,"AbstractMessageReader",{enumerable:!0,get:function(){return Gm.AbstractMessageReader}});Object.defineProperty(C,"ReadableStreamMessageReader",{enumerable:!0,get:function(){return Gm.ReadableStreamMessageReader}});var Hm=yC();Object.defineProperty(C,"MessageWriter",{enumerable:!0,get:function(){return Hm.MessageWriter}});Object.defineProperty(C,"AbstractMessageWriter",{enumerable:!0,get:function(){return Hm.AbstractMessageWriter}});Object.defineProperty(C,"WriteableStreamMessageWriter",{enumerable:!0,get:function(){return Hm.WriteableStreamMessageWriter}});var G0=hC();Object.defineProperty(C,"AbstractMessageBuffer",{enumerable:!0,get:function(){return G0.AbstractMessageBuffer}});var kt=SC();Object.defineProperty(C,"ConnectionStrategy",{enumerable:!0,get:function(){return kt.ConnectionStrategy}});Object.defineProperty(C,"ConnectionOptions",{enumerable:!0,get:function(){return kt.ConnectionOptions}});Object.defineProperty(C,"NullLogger",{enumerable:!0,get:function(){return kt.NullLogger}});Object.defineProperty(C,"createMessageConnection",{enumerable:!0,get:function(){return kt.createMessageConnection}});Object.defineProperty(C,"ProgressToken",{enumerable:!0,get:function(){return kt.ProgressToken}});Object.defineProperty(C,"ProgressType",{enumerable:!0,get:function(){return kt.ProgressType}});Object.defineProperty(C,"Trace",{enumerable:!0,get:function(){return kt.Trace}});Object.defineProperty(C,"TraceValues",{enumerable:!0,get:function(){return kt.TraceValues}});Object.defineProperty(C,"TraceFormat",{enumerable:!0,get:function(){return kt.TraceFormat}});Object.defineProperty(C,"SetTraceNotification",{enumerable:!0,get:function(){return kt.SetTraceNotification}});Object.defineProperty(C,"LogTraceNotification",{enumerable:!0,get:function(){return kt.LogTraceNotification}});Object.defineProperty(C,"ConnectionErrors",{enumerable:!0,get:function(){return kt.ConnectionErrors}});Object.defineProperty(C,"ConnectionError",{enumerable:!0,get:function(){return kt.ConnectionError}});Object.defineProperty(C,"CancellationReceiverStrategy",{enumerable:!0,get:function(){return kt.CancellationReceiverStrategy}});Object.defineProperty(C,"CancellationSenderStrategy",{enumerable:!0,get:function(){return kt.CancellationSenderStrategy}});Object.defineProperty(C,"CancellationStrategy",{enumerable:!0,get:function(){return kt.CancellationStrategy}});Object.defineProperty(C,"MessageStrategy",{enumerable:!0,get:function(){return kt.MessageStrategy}});var H0=ta();C.RAL=H0.default});var xC=M(jm=>{"use strict";Object.defineProperty(jm,"__esModule",{value:!0});var on=id(),sd=class t extends on.AbstractMessageBuffer{constructor(e="utf-8"){super(e),this.asciiDecoder=new TextDecoder("ascii")}emptyBuffer(){return t.emptyBuffer}fromString(e,r){return new TextEncoder().encode(e)}toString(e,r){return r==="ascii"?this.asciiDecoder.decode(e):new TextDecoder(r).decode(e)}asNative(e,r){return r===void 0?e:e.slice(0,r)}allocNative(e){return new Uint8Array(e)}};sd.emptyBuffer=new Uint8Array(0);var Bm=class{constructor(e){this.socket=e,this._onData=new on.Emitter,this._messageListener=r=>{r.data.arrayBuffer().then(a=>{this._onData.fire(new Uint8Array(a))},()=>{(0,on.RAL)().console.error("Converting blob to array buffer failed.")})},this.socket.addEventListener("message",this._messageListener)}onClose(e){return this.socket.addEventListener("close",e),on.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),on.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),on.Disposable.create(()=>this.socket.removeEventListener("end",e))}onData(e){return this._onData.event(e)}},Um=class{constructor(e){this.socket=e}onClose(e){return this.socket.addEventListener("close",e),on.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),on.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),on.Disposable.create(()=>this.socket.removeEventListener("end",e))}write(e,r){if(typeof e=="string"){if(r!==void 0&&r!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${r}`);this.socket.send(e)}else this.socket.send(e);return Promise.resolve()}end(){this.socket.close()}},B0=new TextEncoder,CC=Object.freeze({messageBuffer:Object.freeze({create:t=>new sd(t)}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:(t,e)=>{if(e.charset!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${e.charset}`);return Promise.resolve(B0.encode(JSON.stringify(t,void 0,0)))}}),decoder:Object.freeze({name:"application/json",decode:(t,e)=>{if(!(t instanceof Uint8Array))throw new Error("In a Browser environments only Uint8Arrays are supported.");return Promise.resolve(JSON.parse(new TextDecoder(e.charset).decode(t)))}})}),stream:Object.freeze({asReadableStream:t=>new Bm(t),asWritableStream:t=>new Um(t)}),console,timer:Object.freeze({setTimeout(t,e,...r){let n=setTimeout(t,e,...r);return{dispose:()=>clearTimeout(n)}},setImmediate(t,...e){let r=setTimeout(t,0,...e);return{dispose:()=>clearTimeout(r)}},setInterval(t,e,...r){let n=setInterval(t,e,...r);return{dispose:()=>clearInterval(n)}}})});function qm(){return CC}(function(t){function e(){on.RAL.install(CC)}t.install=e})(qm||(qm={}));jm.default=qm});var Qa=M(gr=>{"use strict";var U0=gr&&gr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var a=Object.getOwnPropertyDescriptor(e,r);(!a||("get"in a?!e.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,a)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),q0=gr&&gr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&U0(e,t,r)};Object.defineProperty(gr,"__esModule",{value:!0});gr.createMessageConnection=gr.BrowserMessageWriter=gr.BrowserMessageReader=void 0;var j0=xC();j0.default.install();var Si=id();q0(id(),gr);var Vm=class extends Si.AbstractMessageReader{constructor(e){super(),this._onData=new Si.Emitter,this._messageListener=r=>{this._onData.fire(r.data)},e.addEventListener("error",r=>this.fireError(r)),e.onmessage=this._messageListener}listen(e){return this._onData.event(e)}};gr.BrowserMessageReader=Vm;var Ym=class extends Si.AbstractMessageWriter{constructor(e){super(),this.port=e,this.errorCount=0,e.addEventListener("error",r=>this.fireError(r))}write(e){try{return this.port.postMessage(e),Promise.resolve()}catch(r){return this.handleError(r,e),Promise.reject(r)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){}};gr.BrowserMessageWriter=Ym;function V0(t,e,r,n){return r===void 0&&(r=Si.NullLogger),Si.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,Si.createMessageConnection)(t,e,r,n)}gr.createMessageConnection=V0});var Xm=M((mre,bC)=>{"use strict";bC.exports=Qa()});var Me=M(ir=>{"use strict";Object.defineProperty(ir,"__esModule",{value:!0});ir.ProtocolNotificationType=ir.ProtocolNotificationType0=ir.ProtocolRequestType=ir.ProtocolRequestType0=ir.RegistrationType=ir.MessageDirection=void 0;var Ai=Qa(),kC;(function(t){t.clientToServer="clientToServer",t.serverToClient="serverToClient",t.both="both"})(kC||(ir.MessageDirection=kC={}));var Qm=class{constructor(e){this.method=e}};ir.RegistrationType=Qm;var Jm=class extends Ai.RequestType0{constructor(e){super(e)}};ir.ProtocolRequestType0=Jm;var Zm=class extends Ai.RequestType{constructor(e){super(e,Ai.ParameterStructures.byName)}};ir.ProtocolRequestType=Zm;var ev=class extends Ai.NotificationType0{constructor(e){super(e)}};ir.ProtocolNotificationType0=ev;var tv=class extends Ai.NotificationType{constructor(e){super(e,Ai.ParameterStructures.byName)}};ir.ProtocolNotificationType=tv});var ud=M(it=>{"use strict";Object.defineProperty(it,"__esModule",{value:!0});it.objectLiteral=it.typedArray=it.stringArray=it.array=it.func=it.error=it.number=it.string=it.boolean=void 0;function Y0(t){return t===!0||t===!1}it.boolean=Y0;function RC(t){return typeof t=="string"||t instanceof String}it.string=RC;function X0(t){return typeof t=="number"||t instanceof Number}it.number=X0;function Q0(t){return t instanceof Error}it.error=Q0;function J0(t){return typeof t=="function"}it.func=J0;function KC(t){return Array.isArray(t)}it.array=KC;function Z0(t){return KC(t)&&t.every(e=>RC(e))}it.stringArray=Z0;function e1(t,e){return Array.isArray(t)&&t.every(e)}it.typedArray=e1;function t1(t){return t!==null&&typeof t=="object"}it.objectLiteral=t1});var EC=M(ld=>{"use strict";Object.defineProperty(ld,"__esModule",{value:!0});ld.ImplementationRequest=void 0;var PC=Me(),IC;(function(t){t.method="textDocument/implementation",t.messageDirection=PC.MessageDirection.clientToServer,t.type=new PC.ProtocolRequestType(t.method)})(IC||(ld.ImplementationRequest=IC={}))});var _C=M(cd=>{"use strict";Object.defineProperty(cd,"__esModule",{value:!0});cd.TypeDefinitionRequest=void 0;var DC=Me(),NC;(function(t){t.method="textDocument/typeDefinition",t.messageDirection=DC.MessageDirection.clientToServer,t.type=new DC.ProtocolRequestType(t.method)})(NC||(cd.TypeDefinitionRequest=NC={}))});var zC=M($i=>{"use strict";Object.defineProperty($i,"__esModule",{value:!0});$i.DidChangeWorkspaceFoldersNotification=$i.WorkspaceFoldersRequest=void 0;var dd=Me(),MC;(function(t){t.method="workspace/workspaceFolders",t.messageDirection=dd.MessageDirection.serverToClient,t.type=new dd.ProtocolRequestType0(t.method)})(MC||($i.WorkspaceFoldersRequest=MC={}));var OC;(function(t){t.method="workspace/didChangeWorkspaceFolders",t.messageDirection=dd.MessageDirection.clientToServer,t.type=new dd.ProtocolNotificationType(t.method)})(OC||($i.DidChangeWorkspaceFoldersNotification=OC={}))});var WC=M(pd=>{"use strict";Object.defineProperty(pd,"__esModule",{value:!0});pd.ConfigurationRequest=void 0;var LC=Me(),FC;(function(t){t.method="workspace/configuration",t.messageDirection=LC.MessageDirection.serverToClient,t.type=new LC.ProtocolRequestType(t.method)})(FC||(pd.ConfigurationRequest=FC={}))});var BC=M(Ti=>{"use strict";Object.defineProperty(Ti,"__esModule",{value:!0});Ti.ColorPresentationRequest=Ti.DocumentColorRequest=void 0;var fd=Me(),GC;(function(t){t.method="textDocument/documentColor",t.messageDirection=fd.MessageDirection.clientToServer,t.type=new fd.ProtocolRequestType(t.method)})(GC||(Ti.DocumentColorRequest=GC={}));var HC;(function(t){t.method="textDocument/colorPresentation",t.messageDirection=fd.MessageDirection.clientToServer,t.type=new fd.ProtocolRequestType(t.method)})(HC||(Ti.ColorPresentationRequest=HC={}))});var jC=M(Ci=>{"use strict";Object.defineProperty(Ci,"__esModule",{value:!0});Ci.FoldingRangeRefreshRequest=Ci.FoldingRangeRequest=void 0;var yd=Me(),UC;(function(t){t.method="textDocument/foldingRange",t.messageDirection=yd.MessageDirection.clientToServer,t.type=new yd.ProtocolRequestType(t.method)})(UC||(Ci.FoldingRangeRequest=UC={}));var qC;(function(t){t.method="workspace/foldingRange/refresh",t.messageDirection=yd.MessageDirection.serverToClient,t.type=new yd.ProtocolRequestType0(t.method)})(qC||(Ci.FoldingRangeRefreshRequest=qC={}))});var XC=M(hd=>{"use strict";Object.defineProperty(hd,"__esModule",{value:!0});hd.DeclarationRequest=void 0;var VC=Me(),YC;(function(t){t.method="textDocument/declaration",t.messageDirection=VC.MessageDirection.clientToServer,t.type=new VC.ProtocolRequestType(t.method)})(YC||(hd.DeclarationRequest=YC={}))});var ZC=M(gd=>{"use strict";Object.defineProperty(gd,"__esModule",{value:!0});gd.SelectionRangeRequest=void 0;var QC=Me(),JC;(function(t){t.method="textDocument/selectionRange",t.messageDirection=QC.MessageDirection.clientToServer,t.type=new QC.ProtocolRequestType(t.method)})(JC||(gd.SelectionRangeRequest=JC={}))});var nx=M(ia=>{"use strict";Object.defineProperty(ia,"__esModule",{value:!0});ia.WorkDoneProgressCancelNotification=ia.WorkDoneProgressCreateRequest=ia.WorkDoneProgress=void 0;var r1=Qa(),md=Me(),ex;(function(t){t.type=new r1.ProgressType;function e(r){return r===t.type}t.is=e})(ex||(ia.WorkDoneProgress=ex={}));var tx;(function(t){t.method="window/workDoneProgress/create",t.messageDirection=md.MessageDirection.serverToClient,t.type=new md.ProtocolRequestType(t.method)})(tx||(ia.WorkDoneProgressCreateRequest=tx={}));var rx;(function(t){t.method="window/workDoneProgress/cancel",t.messageDirection=md.MessageDirection.clientToServer,t.type=new md.ProtocolNotificationType(t.method)})(rx||(ia.WorkDoneProgressCancelNotification=rx={}))});var sx=M(sa=>{"use strict";Object.defineProperty(sa,"__esModule",{value:!0});sa.CallHierarchyOutgoingCallsRequest=sa.CallHierarchyIncomingCallsRequest=sa.CallHierarchyPrepareRequest=void 0;var xi=Me(),ax;(function(t){t.method="textDocument/prepareCallHierarchy",t.messageDirection=xi.MessageDirection.clientToServer,t.type=new xi.ProtocolRequestType(t.method)})(ax||(sa.CallHierarchyPrepareRequest=ax={}));var ox;(function(t){t.method="callHierarchy/incomingCalls",t.messageDirection=xi.MessageDirection.clientToServer,t.type=new xi.ProtocolRequestType(t.method)})(ox||(sa.CallHierarchyIncomingCallsRequest=ox={}));var ix;(function(t){t.method="callHierarchy/outgoingCalls",t.messageDirection=xi.MessageDirection.clientToServer,t.type=new xi.ProtocolRequestType(t.method)})(ix||(sa.CallHierarchyOutgoingCallsRequest=ix={}))});var fx=M(sr=>{"use strict";Object.defineProperty(sr,"__esModule",{value:!0});sr.SemanticTokensRefreshRequest=sr.SemanticTokensRangeRequest=sr.SemanticTokensDeltaRequest=sr.SemanticTokensRequest=sr.SemanticTokensRegistrationType=sr.TokenFormat=void 0;var Kn=Me(),ux;(function(t){t.Relative="relative"})(ux||(sr.TokenFormat=ux={}));var Tu;(function(t){t.method="textDocument/semanticTokens",t.type=new Kn.RegistrationType(t.method)})(Tu||(sr.SemanticTokensRegistrationType=Tu={}));var lx;(function(t){t.method="textDocument/semanticTokens/full",t.messageDirection=Kn.MessageDirection.clientToServer,t.type=new Kn.ProtocolRequestType(t.method),t.registrationMethod=Tu.method})(lx||(sr.SemanticTokensRequest=lx={}));var cx;(function(t){t.method="textDocument/semanticTokens/full/delta",t.messageDirection=Kn.MessageDirection.clientToServer,t.type=new Kn.ProtocolRequestType(t.method),t.registrationMethod=Tu.method})(cx||(sr.SemanticTokensDeltaRequest=cx={}));var dx;(function(t){t.method="textDocument/semanticTokens/range",t.messageDirection=Kn.MessageDirection.clientToServer,t.type=new Kn.ProtocolRequestType(t.method),t.registrationMethod=Tu.method})(dx||(sr.SemanticTokensRangeRequest=dx={}));var px;(function(t){t.method="workspace/semanticTokens/refresh",t.messageDirection=Kn.MessageDirection.serverToClient,t.type=new Kn.ProtocolRequestType0(t.method)})(px||(sr.SemanticTokensRefreshRequest=px={}))});var gx=M(vd=>{"use strict";Object.defineProperty(vd,"__esModule",{value:!0});vd.ShowDocumentRequest=void 0;var yx=Me(),hx;(function(t){t.method="window/showDocument",t.messageDirection=yx.MessageDirection.serverToClient,t.type=new yx.ProtocolRequestType(t.method)})(hx||(vd.ShowDocumentRequest=hx={}))});var wx=M(wd=>{"use strict";Object.defineProperty(wd,"__esModule",{value:!0});wd.LinkedEditingRangeRequest=void 0;var mx=Me(),vx;(function(t){t.method="textDocument/linkedEditingRange",t.messageDirection=mx.MessageDirection.clientToServer,t.type=new mx.ProtocolRequestType(t.method)})(vx||(wd.LinkedEditingRangeRequest=vx={}))});var kx=M(Nt=>{"use strict";Object.defineProperty(Nt,"__esModule",{value:!0});Nt.WillDeleteFilesRequest=Nt.DidDeleteFilesNotification=Nt.DidRenameFilesNotification=Nt.WillRenameFilesRequest=Nt.DidCreateFilesNotification=Nt.WillCreateFilesRequest=Nt.FileOperationPatternKind=void 0;var Cr=Me(),Sx;(function(t){t.file="file",t.folder="folder"})(Sx||(Nt.FileOperationPatternKind=Sx={}));var Ax;(function(t){t.method="workspace/willCreateFiles",t.messageDirection=Cr.MessageDirection.clientToServer,t.type=new Cr.ProtocolRequestType(t.method)})(Ax||(Nt.WillCreateFilesRequest=Ax={}));var $x;(function(t){t.method="workspace/didCreateFiles",t.messageDirection=Cr.MessageDirection.clientToServer,t.type=new Cr.ProtocolNotificationType(t.method)})($x||(Nt.DidCreateFilesNotification=$x={}));var Tx;(function(t){t.method="workspace/willRenameFiles",t.messageDirection=Cr.MessageDirection.clientToServer,t.type=new Cr.ProtocolRequestType(t.method)})(Tx||(Nt.WillRenameFilesRequest=Tx={}));var Cx;(function(t){t.method="workspace/didRenameFiles",t.messageDirection=Cr.MessageDirection.clientToServer,t.type=new Cr.ProtocolNotificationType(t.method)})(Cx||(Nt.DidRenameFilesNotification=Cx={}));var xx;(function(t){t.method="workspace/didDeleteFiles",t.messageDirection=Cr.MessageDirection.clientToServer,t.type=new Cr.ProtocolNotificationType(t.method)})(xx||(Nt.DidDeleteFilesNotification=xx={}));var bx;(function(t){t.method="workspace/willDeleteFiles",t.messageDirection=Cr.MessageDirection.clientToServer,t.type=new Cr.ProtocolRequestType(t.method)})(bx||(Nt.WillDeleteFilesRequest=bx={}))});var Ex=M(ua=>{"use strict";Object.defineProperty(ua,"__esModule",{value:!0});ua.MonikerRequest=ua.MonikerKind=ua.UniquenessLevel=void 0;var Rx=Me(),Kx;(function(t){t.document="document",t.project="project",t.group="group",t.scheme="scheme",t.global="global"})(Kx||(ua.UniquenessLevel=Kx={}));var Px;(function(t){t.$import="import",t.$export="export",t.local="local"})(Px||(ua.MonikerKind=Px={}));var Ix;(function(t){t.method="textDocument/moniker",t.messageDirection=Rx.MessageDirection.clientToServer,t.type=new Rx.ProtocolRequestType(t.method)})(Ix||(ua.MonikerRequest=Ix={}))});var Mx=M(la=>{"use strict";Object.defineProperty(la,"__esModule",{value:!0});la.TypeHierarchySubtypesRequest=la.TypeHierarchySupertypesRequest=la.TypeHierarchyPrepareRequest=void 0;var bi=Me(),Dx;(function(t){t.method="textDocument/prepareTypeHierarchy",t.messageDirection=bi.MessageDirection.clientToServer,t.type=new bi.ProtocolRequestType(t.method)})(Dx||(la.TypeHierarchyPrepareRequest=Dx={}));var Nx;(function(t){t.method="typeHierarchy/supertypes",t.messageDirection=bi.MessageDirection.clientToServer,t.type=new bi.ProtocolRequestType(t.method)})(Nx||(la.TypeHierarchySupertypesRequest=Nx={}));var _x;(function(t){t.method="typeHierarchy/subtypes",t.messageDirection=bi.MessageDirection.clientToServer,t.type=new bi.ProtocolRequestType(t.method)})(_x||(la.TypeHierarchySubtypesRequest=_x={}))});var Lx=M(ki=>{"use strict";Object.defineProperty(ki,"__esModule",{value:!0});ki.InlineValueRefreshRequest=ki.InlineValueRequest=void 0;var Sd=Me(),Ox;(function(t){t.method="textDocument/inlineValue",t.messageDirection=Sd.MessageDirection.clientToServer,t.type=new Sd.ProtocolRequestType(t.method)})(Ox||(ki.InlineValueRequest=Ox={}));var zx;(function(t){t.method="workspace/inlineValue/refresh",t.messageDirection=Sd.MessageDirection.serverToClient,t.type=new Sd.ProtocolRequestType0(t.method)})(zx||(ki.InlineValueRefreshRequest=zx={}))});var Hx=M(ca=>{"use strict";Object.defineProperty(ca,"__esModule",{value:!0});ca.InlayHintRefreshRequest=ca.InlayHintResolveRequest=ca.InlayHintRequest=void 0;var Ri=Me(),Fx;(function(t){t.method="textDocument/inlayHint",t.messageDirection=Ri.MessageDirection.clientToServer,t.type=new Ri.ProtocolRequestType(t.method)})(Fx||(ca.InlayHintRequest=Fx={}));var Wx;(function(t){t.method="inlayHint/resolve",t.messageDirection=Ri.MessageDirection.clientToServer,t.type=new Ri.ProtocolRequestType(t.method)})(Wx||(ca.InlayHintResolveRequest=Wx={}));var Gx;(function(t){t.method="workspace/inlayHint/refresh",t.messageDirection=Ri.MessageDirection.serverToClient,t.type=new Ri.ProtocolRequestType0(t.method)})(Gx||(ca.InlayHintRefreshRequest=Gx={}))});var Xx=M(xr=>{"use strict";Object.defineProperty(xr,"__esModule",{value:!0});xr.DiagnosticRefreshRequest=xr.WorkspaceDiagnosticRequest=xr.DocumentDiagnosticRequest=xr.DocumentDiagnosticReportKind=xr.DiagnosticServerCancellationData=void 0;var Yx=Qa(),n1=ud(),Ki=Me(),Bx;(function(t){function e(r){let n=r;return n&&n1.boolean(n.retriggerRequest)}t.is=e})(Bx||(xr.DiagnosticServerCancellationData=Bx={}));var Ux;(function(t){t.Full="full",t.Unchanged="unchanged"})(Ux||(xr.DocumentDiagnosticReportKind=Ux={}));var qx;(function(t){t.method="textDocument/diagnostic",t.messageDirection=Ki.MessageDirection.clientToServer,t.type=new Ki.ProtocolRequestType(t.method),t.partialResult=new Yx.ProgressType})(qx||(xr.DocumentDiagnosticRequest=qx={}));var jx;(function(t){t.method="workspace/diagnostic",t.messageDirection=Ki.MessageDirection.clientToServer,t.type=new Ki.ProtocolRequestType(t.method),t.partialResult=new Yx.ProgressType})(jx||(xr.WorkspaceDiagnosticRequest=jx={}));var Vx;(function(t){t.method="workspace/diagnostic/refresh",t.messageDirection=Ki.MessageDirection.serverToClient,t.type=new Ki.ProtocolRequestType0(t.method)})(Vx||(xr.DiagnosticRefreshRequest=Vx={}))});var nb=M(Ye=>{"use strict";Object.defineProperty(Ye,"__esModule",{value:!0});Ye.DidCloseNotebookDocumentNotification=Ye.DidSaveNotebookDocumentNotification=Ye.DidChangeNotebookDocumentNotification=Ye.NotebookCellArrayChange=Ye.DidOpenNotebookDocumentNotification=Ye.NotebookDocumentSyncRegistrationType=Ye.NotebookDocument=Ye.NotebookCell=Ye.ExecutionSummary=Ye.NotebookCellKind=void 0;var Cu=(Wa(),sf(Pc)),Lr=ud(),sn=Me(),rv;(function(t){t.Markup=1,t.Code=2;function e(r){return r===1||r===2}t.is=e})(rv||(Ye.NotebookCellKind=rv={}));var nv;(function(t){function e(a,o){let i={executionOrder:a};return(o===!0||o===!1)&&(i.success=o),i}t.create=e;function r(a){let o=a;return Lr.objectLiteral(o)&&Cu.uinteger.is(o.executionOrder)&&(o.success===void 0||Lr.boolean(o.success))}t.is=r;function n(a,o){return a===o?!0:a==null||o===null||o===void 0?!1:a.executionOrder===o.executionOrder&&a.success===o.success}t.equals=n})(nv||(Ye.ExecutionSummary=nv={}));var Ad;(function(t){function e(o,i){return{kind:o,document:i}}t.create=e;function r(o){let i=o;return Lr.objectLiteral(i)&&rv.is(i.kind)&&Cu.DocumentUri.is(i.document)&&(i.metadata===void 0||Lr.objectLiteral(i.metadata))}t.is=r;function n(o,i){let s=new Set;return o.document!==i.document&&s.add("document"),o.kind!==i.kind&&s.add("kind"),o.executionSummary!==i.executionSummary&&s.add("executionSummary"),(o.metadata!==void 0||i.metadata!==void 0)&&!a(o.metadata,i.metadata)&&s.add("metadata"),(o.executionSummary!==void 0||i.executionSummary!==void 0)&&!nv.equals(o.executionSummary,i.executionSummary)&&s.add("executionSummary"),s}t.diff=n;function a(o,i){if(o===i)return!0;if(o==null||i===null||i===void 0||typeof o!=typeof i||typeof o!="object")return!1;let s=Array.isArray(o),u=Array.isArray(i);if(s!==u)return!1;if(s&&u){if(o.length!==i.length)return!1;for(let l=0;l<o.length;l++)if(!a(o[l],i[l]))return!1}if(Lr.objectLiteral(o)&&Lr.objectLiteral(i)){let l=Object.keys(o),c=Object.keys(i);if(l.length!==c.length||(l.sort(),c.sort(),!a(l,c)))return!1;for(let d=0;d<l.length;d++){let p=l[d];if(!a(o[p],i[p]))return!1}}return!0}})(Ad||(Ye.NotebookCell=Ad={}));var Qx;(function(t){function e(n,a,o,i){return{uri:n,notebookType:a,version:o,cells:i}}t.create=e;function r(n){let a=n;return Lr.objectLiteral(a)&&Lr.string(a.uri)&&Cu.integer.is(a.version)&&Lr.typedArray(a.cells,Ad.is)}t.is=r})(Qx||(Ye.NotebookDocument=Qx={}));var Pi;(function(t){t.method="notebookDocument/sync",t.messageDirection=sn.MessageDirection.clientToServer,t.type=new sn.RegistrationType(t.method)})(Pi||(Ye.NotebookDocumentSyncRegistrationType=Pi={}));var Jx;(function(t){t.method="notebookDocument/didOpen",t.messageDirection=sn.MessageDirection.clientToServer,t.type=new sn.ProtocolNotificationType(t.method),t.registrationMethod=Pi.method})(Jx||(Ye.DidOpenNotebookDocumentNotification=Jx={}));var Zx;(function(t){function e(n){let a=n;return Lr.objectLiteral(a)&&Cu.uinteger.is(a.start)&&Cu.uinteger.is(a.deleteCount)&&(a.cells===void 0||Lr.typedArray(a.cells,Ad.is))}t.is=e;function r(n,a,o){let i={start:n,deleteCount:a};return o!==void 0&&(i.cells=o),i}t.create=r})(Zx||(Ye.NotebookCellArrayChange=Zx={}));var eb;(function(t){t.method="notebookDocument/didChange",t.messageDirection=sn.MessageDirection.clientToServer,t.type=new sn.ProtocolNotificationType(t.method),t.registrationMethod=Pi.method})(eb||(Ye.DidChangeNotebookDocumentNotification=eb={}));var tb;(function(t){t.method="notebookDocument/didSave",t.messageDirection=sn.MessageDirection.clientToServer,t.type=new sn.ProtocolNotificationType(t.method),t.registrationMethod=Pi.method})(tb||(Ye.DidSaveNotebookDocumentNotification=tb={}));var rb;(function(t){t.method="notebookDocument/didClose",t.messageDirection=sn.MessageDirection.clientToServer,t.type=new sn.ProtocolNotificationType(t.method),t.registrationMethod=Pi.method})(rb||(Ye.DidCloseNotebookDocumentNotification=rb={}))});var ib=M($d=>{"use strict";Object.defineProperty($d,"__esModule",{value:!0});$d.InlineCompletionRequest=void 0;var ab=Me(),ob;(function(t){t.method="textDocument/inlineCompletion",t.messageDirection=ab.MessageDirection.clientToServer,t.type=new ab.ProtocolRequestType(t.method)})(ob||($d.InlineCompletionRequest=ob={}))});var wk=M(h=>{"use strict";Object.defineProperty(h,"__esModule",{value:!0});h.WorkspaceSymbolRequest=h.CodeActionResolveRequest=h.CodeActionRequest=h.DocumentSymbolRequest=h.DocumentHighlightRequest=h.ReferencesRequest=h.DefinitionRequest=h.SignatureHelpRequest=h.SignatureHelpTriggerKind=h.HoverRequest=h.CompletionResolveRequest=h.CompletionRequest=h.CompletionTriggerKind=h.PublishDiagnosticsNotification=h.WatchKind=h.RelativePattern=h.FileChangeType=h.DidChangeWatchedFilesNotification=h.WillSaveTextDocumentWaitUntilRequest=h.WillSaveTextDocumentNotification=h.TextDocumentSaveReason=h.DidSaveTextDocumentNotification=h.DidCloseTextDocumentNotification=h.DidChangeTextDocumentNotification=h.TextDocumentContentChangeEvent=h.DidOpenTextDocumentNotification=h.TextDocumentSyncKind=h.TelemetryEventNotification=h.LogMessageNotification=h.ShowMessageRequest=h.ShowMessageNotification=h.MessageType=h.DidChangeConfigurationNotification=h.ExitNotification=h.ShutdownRequest=h.InitializedNotification=h.InitializeErrorCodes=h.InitializeRequest=h.WorkDoneProgressOptions=h.TextDocumentRegistrationOptions=h.StaticRegistrationOptions=h.PositionEncodingKind=h.FailureHandlingKind=h.ResourceOperationKind=h.UnregistrationRequest=h.RegistrationRequest=h.DocumentSelector=h.NotebookCellTextDocumentFilter=h.NotebookDocumentFilter=h.TextDocumentFilter=void 0;h.MonikerRequest=h.MonikerKind=h.UniquenessLevel=h.WillDeleteFilesRequest=h.DidDeleteFilesNotification=h.WillRenameFilesRequest=h.DidRenameFilesNotification=h.WillCreateFilesRequest=h.DidCreateFilesNotification=h.FileOperationPatternKind=h.LinkedEditingRangeRequest=h.ShowDocumentRequest=h.SemanticTokensRegistrationType=h.SemanticTokensRefreshRequest=h.SemanticTokensRangeRequest=h.SemanticTokensDeltaRequest=h.SemanticTokensRequest=h.TokenFormat=h.CallHierarchyPrepareRequest=h.CallHierarchyOutgoingCallsRequest=h.CallHierarchyIncomingCallsRequest=h.WorkDoneProgressCancelNotification=h.WorkDoneProgressCreateRequest=h.WorkDoneProgress=h.SelectionRangeRequest=h.DeclarationRequest=h.FoldingRangeRefreshRequest=h.FoldingRangeRequest=h.ColorPresentationRequest=h.DocumentColorRequest=h.ConfigurationRequest=h.DidChangeWorkspaceFoldersNotification=h.WorkspaceFoldersRequest=h.TypeDefinitionRequest=h.ImplementationRequest=h.ApplyWorkspaceEditRequest=h.ExecuteCommandRequest=h.PrepareRenameRequest=h.RenameRequest=h.PrepareSupportDefaultBehavior=h.DocumentOnTypeFormattingRequest=h.DocumentRangesFormattingRequest=h.DocumentRangeFormattingRequest=h.DocumentFormattingRequest=h.DocumentLinkResolveRequest=h.DocumentLinkRequest=h.CodeLensRefreshRequest=h.CodeLensResolveRequest=h.CodeLensRequest=h.WorkspaceSymbolResolveRequest=void 0;h.InlineCompletionRequest=h.DidCloseNotebookDocumentNotification=h.DidSaveNotebookDocumentNotification=h.DidChangeNotebookDocumentNotification=h.NotebookCellArrayChange=h.DidOpenNotebookDocumentNotification=h.NotebookDocumentSyncRegistrationType=h.NotebookDocument=h.NotebookCell=h.ExecutionSummary=h.NotebookCellKind=h.DiagnosticRefreshRequest=h.WorkspaceDiagnosticRequest=h.DocumentDiagnosticRequest=h.DocumentDiagnosticReportKind=h.DiagnosticServerCancellationData=h.InlayHintRefreshRequest=h.InlayHintResolveRequest=h.InlayHintRequest=h.InlineValueRefreshRequest=h.InlineValueRequest=h.TypeHierarchySupertypesRequest=h.TypeHierarchySubtypesRequest=h.TypeHierarchyPrepareRequest=void 0;var K=Me(),sb=(Wa(),sf(Pc)),mt=ud(),a1=EC();Object.defineProperty(h,"ImplementationRequest",{enumerable:!0,get:function(){return a1.ImplementationRequest}});var o1=_C();Object.defineProperty(h,"TypeDefinitionRequest",{enumerable:!0,get:function(){return o1.TypeDefinitionRequest}});var hk=zC();Object.defineProperty(h,"WorkspaceFoldersRequest",{enumerable:!0,get:function(){return hk.WorkspaceFoldersRequest}});Object.defineProperty(h,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:function(){return hk.DidChangeWorkspaceFoldersNotification}});var i1=WC();Object.defineProperty(h,"ConfigurationRequest",{enumerable:!0,get:function(){return i1.ConfigurationRequest}});var gk=BC();Object.defineProperty(h,"DocumentColorRequest",{enumerable:!0,get:function(){return gk.DocumentColorRequest}});Object.defineProperty(h,"ColorPresentationRequest",{enumerable:!0,get:function(){return gk.ColorPresentationRequest}});var mk=jC();Object.defineProperty(h,"FoldingRangeRequest",{enumerable:!0,get:function(){return mk.FoldingRangeRequest}});Object.defineProperty(h,"FoldingRangeRefreshRequest",{enumerable:!0,get:function(){return mk.FoldingRangeRefreshRequest}});var s1=XC();Object.defineProperty(h,"DeclarationRequest",{enumerable:!0,get:function(){return s1.DeclarationRequest}});var u1=ZC();Object.defineProperty(h,"SelectionRangeRequest",{enumerable:!0,get:function(){return u1.SelectionRangeRequest}});var uv=nx();Object.defineProperty(h,"WorkDoneProgress",{enumerable:!0,get:function(){return uv.WorkDoneProgress}});Object.defineProperty(h,"WorkDoneProgressCreateRequest",{enumerable:!0,get:function(){return uv.WorkDoneProgressCreateRequest}});Object.defineProperty(h,"WorkDoneProgressCancelNotification",{enumerable:!0,get:function(){return uv.WorkDoneProgressCancelNotification}});var lv=sx();Object.defineProperty(h,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:function(){return lv.CallHierarchyIncomingCallsRequest}});Object.defineProperty(h,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:function(){return lv.CallHierarchyOutgoingCallsRequest}});Object.defineProperty(h,"CallHierarchyPrepareRequest",{enumerable:!0,get:function(){return lv.CallHierarchyPrepareRequest}});var Ii=fx();Object.defineProperty(h,"TokenFormat",{enumerable:!0,get:function(){return Ii.TokenFormat}});Object.defineProperty(h,"SemanticTokensRequest",{enumerable:!0,get:function(){return Ii.SemanticTokensRequest}});Object.defineProperty(h,"SemanticTokensDeltaRequest",{enumerable:!0,get:function(){return Ii.SemanticTokensDeltaRequest}});Object.defineProperty(h,"SemanticTokensRangeRequest",{enumerable:!0,get:function(){return Ii.SemanticTokensRangeRequest}});Object.defineProperty(h,"SemanticTokensRefreshRequest",{enumerable:!0,get:function(){return Ii.SemanticTokensRefreshRequest}});Object.defineProperty(h,"SemanticTokensRegistrationType",{enumerable:!0,get:function(){return Ii.SemanticTokensRegistrationType}});var l1=gx();Object.defineProperty(h,"ShowDocumentRequest",{enumerable:!0,get:function(){return l1.ShowDocumentRequest}});var c1=wx();Object.defineProperty(h,"LinkedEditingRangeRequest",{enumerable:!0,get:function(){return c1.LinkedEditingRangeRequest}});var Ja=kx();Object.defineProperty(h,"FileOperationPatternKind",{enumerable:!0,get:function(){return Ja.FileOperationPatternKind}});Object.defineProperty(h,"DidCreateFilesNotification",{enumerable:!0,get:function(){return Ja.DidCreateFilesNotification}});Object.defineProperty(h,"WillCreateFilesRequest",{enumerable:!0,get:function(){return Ja.WillCreateFilesRequest}});Object.defineProperty(h,"DidRenameFilesNotification",{enumerable:!0,get:function(){return Ja.DidRenameFilesNotification}});Object.defineProperty(h,"WillRenameFilesRequest",{enumerable:!0,get:function(){return Ja.WillRenameFilesRequest}});Object.defineProperty(h,"DidDeleteFilesNotification",{enumerable:!0,get:function(){return Ja.DidDeleteFilesNotification}});Object.defineProperty(h,"WillDeleteFilesRequest",{enumerable:!0,get:function(){return Ja.WillDeleteFilesRequest}});var cv=Ex();Object.defineProperty(h,"UniquenessLevel",{enumerable:!0,get:function(){return cv.UniquenessLevel}});Object.defineProperty(h,"MonikerKind",{enumerable:!0,get:function(){return cv.MonikerKind}});Object.defineProperty(h,"MonikerRequest",{enumerable:!0,get:function(){return cv.MonikerRequest}});var dv=Mx();Object.defineProperty(h,"TypeHierarchyPrepareRequest",{enumerable:!0,get:function(){return dv.TypeHierarchyPrepareRequest}});Object.defineProperty(h,"TypeHierarchySubtypesRequest",{enumerable:!0,get:function(){return dv.TypeHierarchySubtypesRequest}});Object.defineProperty(h,"TypeHierarchySupertypesRequest",{enumerable:!0,get:function(){return dv.TypeHierarchySupertypesRequest}});var vk=Lx();Object.defineProperty(h,"InlineValueRequest",{enumerable:!0,get:function(){return vk.InlineValueRequest}});Object.defineProperty(h,"InlineValueRefreshRequest",{enumerable:!0,get:function(){return vk.InlineValueRefreshRequest}});var pv=Hx();Object.defineProperty(h,"InlayHintRequest",{enumerable:!0,get:function(){return pv.InlayHintRequest}});Object.defineProperty(h,"InlayHintResolveRequest",{enumerable:!0,get:function(){return pv.InlayHintResolveRequest}});Object.defineProperty(h,"InlayHintRefreshRequest",{enumerable:!0,get:function(){return pv.InlayHintRefreshRequest}});var xu=Xx();Object.defineProperty(h,"DiagnosticServerCancellationData",{enumerable:!0,get:function(){return xu.DiagnosticServerCancellationData}});Object.defineProperty(h,"DocumentDiagnosticReportKind",{enumerable:!0,get:function(){return xu.DocumentDiagnosticReportKind}});Object.defineProperty(h,"DocumentDiagnosticRequest",{enumerable:!0,get:function(){return xu.DocumentDiagnosticRequest}});Object.defineProperty(h,"WorkspaceDiagnosticRequest",{enumerable:!0,get:function(){return xu.WorkspaceDiagnosticRequest}});Object.defineProperty(h,"DiagnosticRefreshRequest",{enumerable:!0,get:function(){return xu.DiagnosticRefreshRequest}});var un=nb();Object.defineProperty(h,"NotebookCellKind",{enumerable:!0,get:function(){return un.NotebookCellKind}});Object.defineProperty(h,"ExecutionSummary",{enumerable:!0,get:function(){return un.ExecutionSummary}});Object.defineProperty(h,"NotebookCell",{enumerable:!0,get:function(){return un.NotebookCell}});Object.defineProperty(h,"NotebookDocument",{enumerable:!0,get:function(){return un.NotebookDocument}});Object.defineProperty(h,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:function(){return un.NotebookDocumentSyncRegistrationType}});Object.defineProperty(h,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:function(){return un.DidOpenNotebookDocumentNotification}});Object.defineProperty(h,"NotebookCellArrayChange",{enumerable:!0,get:function(){return un.NotebookCellArrayChange}});Object.defineProperty(h,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:function(){return un.DidChangeNotebookDocumentNotification}});Object.defineProperty(h,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:function(){return un.DidSaveNotebookDocumentNotification}});Object.defineProperty(h,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:function(){return un.DidCloseNotebookDocumentNotification}});var d1=ib();Object.defineProperty(h,"InlineCompletionRequest",{enumerable:!0,get:function(){return d1.InlineCompletionRequest}});var av;(function(t){function e(r){let n=r;return mt.string(n)||mt.string(n.language)||mt.string(n.scheme)||mt.string(n.pattern)}t.is=e})(av||(h.TextDocumentFilter=av={}));var ov;(function(t){function e(r){let n=r;return mt.objectLiteral(n)&&(mt.string(n.notebookType)||mt.string(n.scheme)||mt.string(n.pattern))}t.is=e})(ov||(h.NotebookDocumentFilter=ov={}));var iv;(function(t){function e(r){let n=r;return mt.objectLiteral(n)&&(mt.string(n.notebook)||ov.is(n.notebook))&&(n.language===void 0||mt.string(n.language))}t.is=e})(iv||(h.NotebookCellTextDocumentFilter=iv={}));var sv;(function(t){function e(r){if(!Array.isArray(r))return!1;for(let n of r)if(!mt.string(n)&&!av.is(n)&&!iv.is(n))return!1;return!0}t.is=e})(sv||(h.DocumentSelector=sv={}));var ub;(function(t){t.method="client/registerCapability",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolRequestType(t.method)})(ub||(h.RegistrationRequest=ub={}));var lb;(function(t){t.method="client/unregisterCapability",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolRequestType(t.method)})(lb||(h.UnregistrationRequest=lb={}));var cb;(function(t){t.Create="create",t.Rename="rename",t.Delete="delete"})(cb||(h.ResourceOperationKind=cb={}));var db;(function(t){t.Abort="abort",t.Transactional="transactional",t.TextOnlyTransactional="textOnlyTransactional",t.Undo="undo"})(db||(h.FailureHandlingKind=db={}));var pb;(function(t){t.UTF8="utf-8",t.UTF16="utf-16",t.UTF32="utf-32"})(pb||(h.PositionEncodingKind=pb={}));var fb;(function(t){function e(r){let n=r;return n&&mt.string(n.id)&&n.id.length>0}t.hasId=e})(fb||(h.StaticRegistrationOptions=fb={}));var yb;(function(t){function e(r){let n=r;return n&&(n.documentSelector===null||sv.is(n.documentSelector))}t.is=e})(yb||(h.TextDocumentRegistrationOptions=yb={}));var hb;(function(t){function e(n){let a=n;return mt.objectLiteral(a)&&(a.workDoneProgress===void 0||mt.boolean(a.workDoneProgress))}t.is=e;function r(n){let a=n;return a&&mt.boolean(a.workDoneProgress)}t.hasWorkDoneProgress=r})(hb||(h.WorkDoneProgressOptions=hb={}));var gb;(function(t){t.method="initialize",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(gb||(h.InitializeRequest=gb={}));var mb;(function(t){t.unknownProtocolVersion=1})(mb||(h.InitializeErrorCodes=mb={}));var vb;(function(t){t.method="initialized",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})(vb||(h.InitializedNotification=vb={}));var wb;(function(t){t.method="shutdown",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType0(t.method)})(wb||(h.ShutdownRequest=wb={}));var Sb;(function(t){t.method="exit",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType0(t.method)})(Sb||(h.ExitNotification=Sb={}));var Ab;(function(t){t.method="workspace/didChangeConfiguration",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})(Ab||(h.DidChangeConfigurationNotification=Ab={}));var $b;(function(t){t.Error=1,t.Warning=2,t.Info=3,t.Log=4,t.Debug=5})($b||(h.MessageType=$b={}));var Tb;(function(t){t.method="window/showMessage",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolNotificationType(t.method)})(Tb||(h.ShowMessageNotification=Tb={}));var Cb;(function(t){t.method="window/showMessageRequest",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolRequestType(t.method)})(Cb||(h.ShowMessageRequest=Cb={}));var xb;(function(t){t.method="window/logMessage",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolNotificationType(t.method)})(xb||(h.LogMessageNotification=xb={}));var bb;(function(t){t.method="telemetry/event",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolNotificationType(t.method)})(bb||(h.TelemetryEventNotification=bb={}));var kb;(function(t){t.None=0,t.Full=1,t.Incremental=2})(kb||(h.TextDocumentSyncKind=kb={}));var Rb;(function(t){t.method="textDocument/didOpen",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})(Rb||(h.DidOpenTextDocumentNotification=Rb={}));var Kb;(function(t){function e(n){let a=n;return a!=null&&typeof a.text=="string"&&a.range!==void 0&&(a.rangeLength===void 0||typeof a.rangeLength=="number")}t.isIncremental=e;function r(n){let a=n;return a!=null&&typeof a.text=="string"&&a.range===void 0&&a.rangeLength===void 0}t.isFull=r})(Kb||(h.TextDocumentContentChangeEvent=Kb={}));var Pb;(function(t){t.method="textDocument/didChange",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})(Pb||(h.DidChangeTextDocumentNotification=Pb={}));var Ib;(function(t){t.method="textDocument/didClose",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})(Ib||(h.DidCloseTextDocumentNotification=Ib={}));var Eb;(function(t){t.method="textDocument/didSave",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})(Eb||(h.DidSaveTextDocumentNotification=Eb={}));var Db;(function(t){t.Manual=1,t.AfterDelay=2,t.FocusOut=3})(Db||(h.TextDocumentSaveReason=Db={}));var Nb;(function(t){t.method="textDocument/willSave",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})(Nb||(h.WillSaveTextDocumentNotification=Nb={}));var _b;(function(t){t.method="textDocument/willSaveWaitUntil",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(_b||(h.WillSaveTextDocumentWaitUntilRequest=_b={}));var Mb;(function(t){t.method="workspace/didChangeWatchedFiles",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolNotificationType(t.method)})(Mb||(h.DidChangeWatchedFilesNotification=Mb={}));var Ob;(function(t){t.Created=1,t.Changed=2,t.Deleted=3})(Ob||(h.FileChangeType=Ob={}));var zb;(function(t){function e(r){let n=r;return mt.objectLiteral(n)&&(sb.URI.is(n.baseUri)||sb.WorkspaceFolder.is(n.baseUri))&&mt.string(n.pattern)}t.is=e})(zb||(h.RelativePattern=zb={}));var Lb;(function(t){t.Create=1,t.Change=2,t.Delete=4})(Lb||(h.WatchKind=Lb={}));var Fb;(function(t){t.method="textDocument/publishDiagnostics",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolNotificationType(t.method)})(Fb||(h.PublishDiagnosticsNotification=Fb={}));var Wb;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.TriggerForIncompleteCompletions=3})(Wb||(h.CompletionTriggerKind=Wb={}));var Gb;(function(t){t.method="textDocument/completion",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(Gb||(h.CompletionRequest=Gb={}));var Hb;(function(t){t.method="completionItem/resolve",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(Hb||(h.CompletionResolveRequest=Hb={}));var Bb;(function(t){t.method="textDocument/hover",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(Bb||(h.HoverRequest=Bb={}));var Ub;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.ContentChange=3})(Ub||(h.SignatureHelpTriggerKind=Ub={}));var qb;(function(t){t.method="textDocument/signatureHelp",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(qb||(h.SignatureHelpRequest=qb={}));var jb;(function(t){t.method="textDocument/definition",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(jb||(h.DefinitionRequest=jb={}));var Vb;(function(t){t.method="textDocument/references",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(Vb||(h.ReferencesRequest=Vb={}));var Yb;(function(t){t.method="textDocument/documentHighlight",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(Yb||(h.DocumentHighlightRequest=Yb={}));var Xb;(function(t){t.method="textDocument/documentSymbol",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(Xb||(h.DocumentSymbolRequest=Xb={}));var Qb;(function(t){t.method="textDocument/codeAction",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(Qb||(h.CodeActionRequest=Qb={}));var Jb;(function(t){t.method="codeAction/resolve",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(Jb||(h.CodeActionResolveRequest=Jb={}));var Zb;(function(t){t.method="workspace/symbol",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(Zb||(h.WorkspaceSymbolRequest=Zb={}));var ek;(function(t){t.method="workspaceSymbol/resolve",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(ek||(h.WorkspaceSymbolResolveRequest=ek={}));var tk;(function(t){t.method="textDocument/codeLens",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(tk||(h.CodeLensRequest=tk={}));var rk;(function(t){t.method="codeLens/resolve",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(rk||(h.CodeLensResolveRequest=rk={}));var nk;(function(t){t.method="workspace/codeLens/refresh",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolRequestType0(t.method)})(nk||(h.CodeLensRefreshRequest=nk={}));var ak;(function(t){t.method="textDocument/documentLink",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(ak||(h.DocumentLinkRequest=ak={}));var ok;(function(t){t.method="documentLink/resolve",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(ok||(h.DocumentLinkResolveRequest=ok={}));var ik;(function(t){t.method="textDocument/formatting",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(ik||(h.DocumentFormattingRequest=ik={}));var sk;(function(t){t.method="textDocument/rangeFormatting",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(sk||(h.DocumentRangeFormattingRequest=sk={}));var uk;(function(t){t.method="textDocument/rangesFormatting",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(uk||(h.DocumentRangesFormattingRequest=uk={}));var lk;(function(t){t.method="textDocument/onTypeFormatting",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(lk||(h.DocumentOnTypeFormattingRequest=lk={}));var ck;(function(t){t.Identifier=1})(ck||(h.PrepareSupportDefaultBehavior=ck={}));var dk;(function(t){t.method="textDocument/rename",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(dk||(h.RenameRequest=dk={}));var pk;(function(t){t.method="textDocument/prepareRename",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(pk||(h.PrepareRenameRequest=pk={}));var fk;(function(t){t.method="workspace/executeCommand",t.messageDirection=K.MessageDirection.clientToServer,t.type=new K.ProtocolRequestType(t.method)})(fk||(h.ExecuteCommandRequest=fk={}));var yk;(function(t){t.method="workspace/applyEdit",t.messageDirection=K.MessageDirection.serverToClient,t.type=new K.ProtocolRequestType("workspace/applyEdit")})(yk||(h.ApplyWorkspaceEditRequest=yk={}))});var Ak=M(Td=>{"use strict";Object.defineProperty(Td,"__esModule",{value:!0});Td.createProtocolConnection=void 0;var Sk=Qa();function p1(t,e,r,n){return Sk.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,Sk.createMessageConnection)(t,e,r,n)}Td.createProtocolConnection=p1});var Tk=M(ur=>{"use strict";var f1=ur&&ur.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var a=Object.getOwnPropertyDescriptor(e,r);(!a||("get"in a?!e.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,a)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),Cd=ur&&ur.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&f1(e,t,r)};Object.defineProperty(ur,"__esModule",{value:!0});ur.LSPErrorCodes=ur.createProtocolConnection=void 0;Cd(Qa(),ur);Cd((Wa(),sf(Pc)),ur);Cd(Me(),ur);Cd(wk(),ur);var y1=Ak();Object.defineProperty(ur,"createProtocolConnection",{enumerable:!0,get:function(){return y1.createProtocolConnection}});var $k;(function(t){t.lspReservedErrorRangeStart=-32899,t.RequestFailed=-32803,t.ServerCancelled=-32802,t.ContentModified=-32801,t.RequestCancelled=-32800,t.lspReservedErrorRangeEnd=-32800})($k||(ur.LSPErrorCodes=$k={}))});var Xe=M(ln=>{"use strict";var h1=ln&&ln.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var a=Object.getOwnPropertyDescriptor(e,r);(!a||("get"in a?!e.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,a)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),Ck=ln&&ln.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&h1(e,t,r)};Object.defineProperty(ln,"__esModule",{value:!0});ln.createProtocolConnection=void 0;var g1=Xm();Ck(Xm(),ln);Ck(Tk(),ln);function m1(t,e,r,n){return(0,g1.createMessageConnection)(t,e,r,n)}ln.createProtocolConnection=m1});var yv=M(da=>{"use strict";Object.defineProperty(da,"__esModule",{value:!0});da.SemanticTokensBuilder=da.SemanticTokensDiff=da.SemanticTokensFeature=void 0;var xd=Xe(),v1=t=>class extends t{get semanticTokens(){return{refresh:()=>this.connection.sendRequest(xd.SemanticTokensRefreshRequest.type),on:e=>{let r=xd.SemanticTokensRequest.type;return this.connection.onRequest(r,(n,a)=>e(n,a,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onDelta:e=>{let r=xd.SemanticTokensDeltaRequest.type;return this.connection.onRequest(r,(n,a)=>e(n,a,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onRange:e=>{let r=xd.SemanticTokensRangeRequest.type;return this.connection.onRequest(r,(n,a)=>e(n,a,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};da.SemanticTokensFeature=v1;var bd=class{constructor(e,r){this.originalSequence=e,this.modifiedSequence=r}computeDiff(){let e=this.originalSequence.length,r=this.modifiedSequence.length,n=0;for(;n<r&&n<e&&this.originalSequence[n]===this.modifiedSequence[n];)n++;if(n<r&&n<e){let a=e-1,o=r-1;for(;a>=n&&o>=n&&this.originalSequence[a]===this.modifiedSequence[o];)a--,o--;(a<n||o<n)&&(a++,o++);let i=a-n+1,s=this.modifiedSequence.slice(n,o+1);return s.length===1&&s[0]===this.originalSequence[a]?[{start:n,deleteCount:i-1}]:[{start:n,deleteCount:i,data:s}]}else return n<r?[{start:n,deleteCount:0,data:this.modifiedSequence.slice(n)}]:n<e?[{start:n,deleteCount:e-n}]:[]}};da.SemanticTokensDiff=bd;var fv=class{constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(e,r,n,a,o){let i=e,s=r;this._dataLen>0&&(i-=this._prevLine,i===0&&(s-=this._prevChar)),this._data[this._dataLen++]=i,this._data[this._dataLen++]=s,this._data[this._dataLen++]=n,this._data[this._dataLen++]=a,this._data[this._dataLen++]=o,this._prevLine=e,this._prevChar=r}get id(){return this._id.toString()}previousResult(e){this.id===e&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new bd(this._prevData,this._data).computeDiff()}:this.build()}};da.SemanticTokensBuilder=fv});var xk=M(kd=>{"use strict";Object.defineProperty(kd,"__esModule",{value:!0});kd.InlineCompletionFeature=void 0;var w1=Xe(),S1=t=>class extends t{get inlineCompletion(){return{on:e=>this.connection.onRequest(w1.InlineCompletionRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};kd.InlineCompletionFeature=S1});var gv=M(Rd=>{"use strict";Object.defineProperty(Rd,"__esModule",{value:!0});Rd.TextDocuments=void 0;var Za=Xe(),hv=class{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new Za.Emitter,this._onDidOpen=new Za.Emitter,this._onDidClose=new Za.Emitter,this._onDidSave=new Za.Emitter,this._onWillSave=new Za.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(e)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=Za.TextDocumentSyncKind.Incremental;let r=[];return r.push(e.onDidOpenTextDocument(n=>{let a=n.textDocument,o=this._configuration.create(a.uri,a.languageId,a.version,a.text);this._syncedDocuments.set(a.uri,o);let i=Object.freeze({document:o});this._onDidOpen.fire(i),this._onDidChangeContent.fire(i)})),r.push(e.onDidChangeTextDocument(n=>{let a=n.textDocument,o=n.contentChanges;if(o.length===0)return;let{version:i}=a;if(i==null)throw new Error(`Received document change event for ${a.uri} without valid version identifier`);let s=this._syncedDocuments.get(a.uri);s!==void 0&&(s=this._configuration.update(s,o,i),this._syncedDocuments.set(a.uri,s),this._onDidChangeContent.fire(Object.freeze({document:s})))})),r.push(e.onDidCloseTextDocument(n=>{let a=this._syncedDocuments.get(n.textDocument.uri);a!==void 0&&(this._syncedDocuments.delete(n.textDocument.uri),this._onDidClose.fire(Object.freeze({document:a})))})),r.push(e.onWillSaveTextDocument(n=>{let a=this._syncedDocuments.get(n.textDocument.uri);a!==void 0&&this._onWillSave.fire(Object.freeze({document:a,reason:n.reason}))})),r.push(e.onWillSaveTextDocumentWaitUntil((n,a)=>{let o=this._syncedDocuments.get(n.textDocument.uri);return o!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:o,reason:n.reason}),a):[]})),r.push(e.onDidSaveTextDocument(n=>{let a=this._syncedDocuments.get(n.textDocument.uri);a!==void 0&&this._onDidSave.fire(Object.freeze({document:a}))})),Za.Disposable.create(()=>{r.forEach(n=>n.dispose())})}};Rd.TextDocuments=hv});var vv=M(Ei=>{"use strict";Object.defineProperty(Ei,"__esModule",{value:!0});Ei.NotebookDocuments=Ei.NotebookSyncFeature=void 0;var br=Xe(),bk=gv(),A1=t=>class extends t{get synchronization(){return{onDidOpenNotebookDocument:e=>this.connection.onNotification(br.DidOpenNotebookDocumentNotification.type,r=>{e(r)}),onDidChangeNotebookDocument:e=>this.connection.onNotification(br.DidChangeNotebookDocumentNotification.type,r=>{e(r)}),onDidSaveNotebookDocument:e=>this.connection.onNotification(br.DidSaveNotebookDocumentNotification.type,r=>{e(r)}),onDidCloseNotebookDocument:e=>this.connection.onNotification(br.DidCloseNotebookDocumentNotification.type,r=>{e(r)})}}};Ei.NotebookSyncFeature=A1;var Kd=class t{onDidOpenTextDocument(e){return this.openHandler=e,br.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,br.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,br.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return t.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return t.NULL_DISPOSE}onDidSaveTextDocument(){return t.NULL_DISPOSE}};Kd.NULL_DISPOSE=Object.freeze({dispose:()=>{}});var mv=class{constructor(e){e instanceof bk.TextDocuments?this._cellTextDocuments=e:this._cellTextDocuments=new bk.TextDocuments(e),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new br.Emitter,this._onDidChange=new br.Emitter,this._onDidSave=new br.Emitter,this._onDidClose=new br.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(e)}getNotebookCell(e){let r=this.notebookCellMap.get(e);return r&&r[0]}findNotebookDocumentForCell(e){let r=typeof e=="string"?e:e.document,n=this.notebookCellMap.get(r);return n&&n[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){let r=new Kd,n=[];return n.push(this.cellTextDocuments.listen(r)),n.push(e.notebooks.synchronization.onDidOpenNotebookDocument(a=>{this.notebookDocuments.set(a.notebookDocument.uri,a.notebookDocument);for(let o of a.cellTextDocuments)r.openTextDocument({textDocument:o});this.updateCellMap(a.notebookDocument),this._onDidOpen.fire(a.notebookDocument)})),n.push(e.notebooks.synchronization.onDidChangeNotebookDocument(a=>{let o=this.notebookDocuments.get(a.notebookDocument.uri);if(o===void 0)return;o.version=a.notebookDocument.version;let i=o.metadata,s=!1,u=a.change;u.metadata!==void 0&&(s=!0,o.metadata=u.metadata);let l=[],c=[],d=[],p=[];if(u.cells!==void 0){let A=u.cells;if(A.structure!==void 0){let g=A.structure.array;if(o.cells.splice(g.start,g.deleteCount,...g.cells!==void 0?g.cells:[]),A.structure.didOpen!==void 0)for(let f of A.structure.didOpen)r.openTextDocument({textDocument:f}),l.push(f.uri);if(A.structure.didClose)for(let f of A.structure.didClose)r.closeTextDocument({textDocument:f}),c.push(f.uri)}if(A.data!==void 0){let g=new Map(A.data.map(f=>[f.document,f]));for(let f=0;f<=o.cells.length;f++){let $=g.get(o.cells[f].document);if($!==void 0){let P=o.cells.splice(f,1,$);if(d.push({old:P[0],new:$}),g.delete($.document),g.size===0)break}}}if(A.textContent!==void 0)for(let g of A.textContent)r.changeTextDocument({textDocument:g.document,contentChanges:g.changes}),p.push(g.document.uri)}this.updateCellMap(o);let y={notebookDocument:o};s&&(y.metadata={old:i,new:o.metadata});let v=[];for(let A of l)v.push(this.getNotebookCell(A));let S=[];for(let A of c)S.push(this.getNotebookCell(A));let T=[];for(let A of p)T.push(this.getNotebookCell(A));(v.length>0||S.length>0||d.length>0||T.length>0)&&(y.cells={added:v,removed:S,changed:{data:d,textContent:T}}),(y.metadata!==void 0||y.cells!==void 0)&&this._onDidChange.fire(y)})),n.push(e.notebooks.synchronization.onDidSaveNotebookDocument(a=>{let o=this.notebookDocuments.get(a.notebookDocument.uri);o!==void 0&&this._onDidSave.fire(o)})),n.push(e.notebooks.synchronization.onDidCloseNotebookDocument(a=>{let o=this.notebookDocuments.get(a.notebookDocument.uri);if(o!==void 0){this._onDidClose.fire(o);for(let i of a.cellTextDocuments)r.closeTextDocument({textDocument:i});this.notebookDocuments.delete(a.notebookDocument.uri);for(let i of o.cells)this.notebookCellMap.delete(i.document)}})),br.Disposable.create(()=>{n.forEach(a=>a.dispose())})}updateCellMap(e){for(let r of e.cells)this.notebookCellMap.set(r.document,[r,e])}};Ei.NotebookDocuments=mv});var wv=M(st=>{"use strict";Object.defineProperty(st,"__esModule",{value:!0});st.thenable=st.typedArray=st.stringArray=st.array=st.func=st.error=st.number=st.string=st.boolean=void 0;function $1(t){return t===!0||t===!1}st.boolean=$1;function kk(t){return typeof t=="string"||t instanceof String}st.string=kk;function T1(t){return typeof t=="number"||t instanceof Number}st.number=T1;function C1(t){return t instanceof Error}st.error=C1;function Rk(t){return typeof t=="function"}st.func=Rk;function Kk(t){return Array.isArray(t)}st.array=Kk;function x1(t){return Kk(t)&&t.every(e=>kk(e))}st.stringArray=x1;function b1(t,e){return Array.isArray(t)&&t.every(e)}st.typedArray=b1;function k1(t){return t&&Rk(t.then)}st.thenable=k1});var Sv=M(kr=>{"use strict";Object.defineProperty(kr,"__esModule",{value:!0});kr.generateUuid=kr.parse=kr.isUUID=kr.v4=kr.empty=void 0;var bu=class{constructor(e){this._value=e}asHex(){return this._value}equals(e){return this.asHex()===e.asHex()}},ku=class t extends bu{static _oneOf(e){return e[Math.floor(e.length*Math.random())]}static _randomHex(){return t._oneOf(t._chars)}constructor(){super([t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-","4",t._randomHex(),t._randomHex(),t._randomHex(),"-",t._oneOf(t._timeHighBits),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex()].join(""))}};ku._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];ku._timeHighBits=["8","9","a","b"];kr.empty=new bu("00000000-0000-0000-0000-000000000000");function Pk(){return new ku}kr.v4=Pk;var R1=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function Ik(t){return R1.test(t)}kr.isUUID=Ik;function K1(t){if(!Ik(t))throw new Error("invalid uuid");return new bu(t)}kr.parse=K1;function P1(){return Pk().asHex()}kr.generateUuid=P1});var Ek=M(fa=>{"use strict";Object.defineProperty(fa,"__esModule",{value:!0});fa.attachPartialResult=fa.ProgressFeature=fa.attachWorkDone=void 0;var pa=Xe(),I1=Sv(),eo=class t{constructor(e,r){this._connection=e,this._token=r,t.Instances.set(this._token,this)}begin(e,r,n,a){let o={kind:"begin",title:e,percentage:r,message:n,cancellable:a};this._connection.sendProgress(pa.WorkDoneProgress.type,this._token,o)}report(e,r){let n={kind:"report"};typeof e=="number"?(n.percentage=e,r!==void 0&&(n.message=r)):n.message=e,this._connection.sendProgress(pa.WorkDoneProgress.type,this._token,n)}done(){t.Instances.delete(this._token),this._connection.sendProgress(pa.WorkDoneProgress.type,this._token,{kind:"end"})}};eo.Instances=new Map;var Pd=class extends eo{constructor(e,r){super(e,r),this._source=new pa.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}},Ru=class{constructor(){}begin(){}report(){}done(){}},Id=class extends Ru{constructor(){super(),this._source=new pa.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}};function E1(t,e){if(e===void 0||e.workDoneToken===void 0)return new Ru;let r=e.workDoneToken;return delete e.workDoneToken,new eo(t,r)}fa.attachWorkDone=E1;var D1=t=>class extends t{constructor(){super(),this._progressSupported=!1}initialize(e){super.initialize(e),e?.window?.workDoneProgress===!0&&(this._progressSupported=!0,this.connection.onNotification(pa.WorkDoneProgressCancelNotification.type,r=>{let n=eo.Instances.get(r.token);(n instanceof Pd||n instanceof Id)&&n.cancel()}))}attachWorkDoneProgress(e){return e===void 0?new Ru:new eo(this.connection,e)}createWorkDoneProgress(){if(this._progressSupported){let e=(0,I1.generateUuid)();return this.connection.sendRequest(pa.WorkDoneProgressCreateRequest.type,{token:e}).then(()=>new Pd(this.connection,e))}else return Promise.resolve(new Id)}};fa.ProgressFeature=D1;var Av;(function(t){t.type=new pa.ProgressType})(Av||(Av={}));var $v=class{constructor(e,r){this._connection=e,this._token=r}report(e){this._connection.sendProgress(Av.type,this._token,e)}};function N1(t,e){if(e===void 0||e.partialResultToken===void 0)return;let r=e.partialResultToken;return delete e.partialResultToken,new $v(t,r)}fa.attachPartialResult=N1});var Dk=M(Ed=>{"use strict";Object.defineProperty(Ed,"__esModule",{value:!0});Ed.ConfigurationFeature=void 0;var _1=Xe(),M1=wv(),O1=t=>class extends t{getConfiguration(e){return e?M1.string(e)?this._getConfiguration({section:e}):this._getConfiguration(e):this._getConfiguration({})}_getConfiguration(e){let r={items:Array.isArray(e)?e:[e]};return this.connection.sendRequest(_1.ConfigurationRequest.type,r).then(n=>Array.isArray(n)?Array.isArray(e)?n:n[0]:Array.isArray(e)?[]:null)}};Ed.ConfigurationFeature=O1});var Nk=M(Nd=>{"use strict";Object.defineProperty(Nd,"__esModule",{value:!0});Nd.WorkspaceFoldersFeature=void 0;var Dd=Xe(),z1=t=>class extends t{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(e){super.initialize(e);let r=e.workspace;r&&r.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new Dd.Emitter,this.connection.onNotification(Dd.DidChangeWorkspaceFoldersNotification.type,n=>{this._onDidChangeWorkspaceFolders.fire(n.event)}))}fillServerCapabilities(e){super.fillServerCapabilities(e);let r=e.workspace?.workspaceFolders?.changeNotifications;this._notificationIsAutoRegistered=r===!0||typeof r=="string"}getWorkspaceFolders(){return this.connection.sendRequest(Dd.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(Dd.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}};Nd.WorkspaceFoldersFeature=z1});var _k=M(_d=>{"use strict";Object.defineProperty(_d,"__esModule",{value:!0});_d.CallHierarchyFeature=void 0;var Tv=Xe(),L1=t=>class extends t{get callHierarchy(){return{onPrepare:e=>this.connection.onRequest(Tv.CallHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onIncomingCalls:e=>{let r=Tv.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(r,(n,a)=>e(n,a,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onOutgoingCalls:e=>{let r=Tv.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(r,(n,a)=>e(n,a,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};_d.CallHierarchyFeature=L1});var Mk=M(Md=>{"use strict";Object.defineProperty(Md,"__esModule",{value:!0});Md.ShowDocumentFeature=void 0;var F1=Xe(),W1=t=>class extends t{showDocument(e){return this.connection.sendRequest(F1.ShowDocumentRequest.type,e)}};Md.ShowDocumentFeature=W1});var Ok=M(Od=>{"use strict";Object.defineProperty(Od,"__esModule",{value:!0});Od.FileOperationsFeature=void 0;var Di=Xe(),G1=t=>class extends t{onDidCreateFiles(e){return this.connection.onNotification(Di.DidCreateFilesNotification.type,r=>{e(r)})}onDidRenameFiles(e){return this.connection.onNotification(Di.DidRenameFilesNotification.type,r=>{e(r)})}onDidDeleteFiles(e){return this.connection.onNotification(Di.DidDeleteFilesNotification.type,r=>{e(r)})}onWillCreateFiles(e){return this.connection.onRequest(Di.WillCreateFilesRequest.type,(r,n)=>e(r,n))}onWillRenameFiles(e){return this.connection.onRequest(Di.WillRenameFilesRequest.type,(r,n)=>e(r,n))}onWillDeleteFiles(e){return this.connection.onRequest(Di.WillDeleteFilesRequest.type,(r,n)=>e(r,n))}};Od.FileOperationsFeature=G1});var zk=M(zd=>{"use strict";Object.defineProperty(zd,"__esModule",{value:!0});zd.LinkedEditingRangeFeature=void 0;var H1=Xe(),B1=t=>class extends t{onLinkedEditingRange(e){return this.connection.onRequest(H1.LinkedEditingRangeRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0))}};zd.LinkedEditingRangeFeature=B1});var Lk=M(Ld=>{"use strict";Object.defineProperty(Ld,"__esModule",{value:!0});Ld.TypeHierarchyFeature=void 0;var Cv=Xe(),U1=t=>class extends t{get typeHierarchy(){return{onPrepare:e=>this.connection.onRequest(Cv.TypeHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onSupertypes:e=>{let r=Cv.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(r,(n,a)=>e(n,a,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onSubtypes:e=>{let r=Cv.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(r,(n,a)=>e(n,a,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Ld.TypeHierarchyFeature=U1});var Wk=M(Fd=>{"use strict";Object.defineProperty(Fd,"__esModule",{value:!0});Fd.InlineValueFeature=void 0;var Fk=Xe(),q1=t=>class extends t{get inlineValue(){return{refresh:()=>this.connection.sendRequest(Fk.InlineValueRefreshRequest.type),on:e=>this.connection.onRequest(Fk.InlineValueRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};Fd.InlineValueFeature=q1});var Hk=M(Wd=>{"use strict";Object.defineProperty(Wd,"__esModule",{value:!0});Wd.FoldingRangeFeature=void 0;var Gk=Xe(),j1=t=>class extends t{get foldingRange(){return{refresh:()=>this.connection.sendRequest(Gk.FoldingRangeRefreshRequest.type),on:e=>{let r=Gk.FoldingRangeRequest.type;return this.connection.onRequest(r,(n,a)=>e(n,a,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Wd.FoldingRangeFeature=j1});var Bk=M(Gd=>{"use strict";Object.defineProperty(Gd,"__esModule",{value:!0});Gd.InlayHintFeature=void 0;var xv=Xe(),V1=t=>class extends t{get inlayHint(){return{refresh:()=>this.connection.sendRequest(xv.InlayHintRefreshRequest.type),on:e=>this.connection.onRequest(xv.InlayHintRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r))),resolve:e=>this.connection.onRequest(xv.InlayHintResolveRequest.type,(r,n)=>e(r,n))}}};Gd.InlayHintFeature=V1});var Uk=M(Hd=>{"use strict";Object.defineProperty(Hd,"__esModule",{value:!0});Hd.DiagnosticFeature=void 0;var Ku=Xe(),Y1=t=>class extends t{get diagnostics(){return{refresh:()=>this.connection.sendRequest(Ku.DiagnosticRefreshRequest.type),on:e=>this.connection.onRequest(Ku.DocumentDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(Ku.DocumentDiagnosticRequest.partialResult,r))),onWorkspace:e=>this.connection.onRequest(Ku.WorkspaceDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(Ku.WorkspaceDiagnosticRequest.partialResult,r)))}}};Hd.DiagnosticFeature=Y1});var qk=M(Bd=>{"use strict";Object.defineProperty(Bd,"__esModule",{value:!0});Bd.MonikerFeature=void 0;var X1=Xe(),Q1=t=>class extends t{get moniker(){return{on:e=>{let r=X1.MonikerRequest.type;return this.connection.onRequest(r,(n,a)=>e(n,a,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Bd.MonikerFeature=Q1});var sR=M(de=>{"use strict";Object.defineProperty(de,"__esModule",{value:!0});de.createConnection=de.combineFeatures=de.combineNotebooksFeatures=de.combineLanguagesFeatures=de.combineWorkspaceFeatures=de.combineWindowFeatures=de.combineClientFeatures=de.combineTracerFeatures=de.combineTelemetryFeatures=de.combineConsoleFeatures=de._NotebooksImpl=de._LanguagesImpl=de.BulkUnregistration=de.BulkRegistration=de.ErrorMessageTracker=void 0;var D=Xe(),Rr=wv(),kv=Sv(),X=Ek(),J1=Dk(),Z1=Nk(),eF=_k(),tF=yv(),rF=Mk(),nF=Ok(),aF=zk(),oF=Lk(),iF=Wk(),sF=Hk(),uF=Bk(),lF=Uk(),cF=vv(),dF=qk();function bv(t){if(t!==null)return t}var Rv=class{constructor(){this._messages=Object.create(null)}add(e){let r=this._messages[e];r||(r=0),r++,this._messages[e]=r}sendErrors(e){Object.keys(this._messages).forEach(r=>{e.window.showErrorMessage(r)})}};de.ErrorMessageTracker=Rv;var Ud=class{constructor(){}rawAttach(e){this._rawConnection=e}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(e){}initialize(e){}error(e){this.send(D.MessageType.Error,e)}warn(e){this.send(D.MessageType.Warning,e)}info(e){this.send(D.MessageType.Info,e)}log(e){this.send(D.MessageType.Log,e)}debug(e){this.send(D.MessageType.Debug,e)}send(e,r){this._rawConnection&&this._rawConnection.sendNotification(D.LogMessageNotification.type,{type:e,message:r}).catch(()=>{(0,D.RAL)().console.error("Sending log message failed")})}},Kv=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}showErrorMessage(e,...r){let n={type:D.MessageType.Error,message:e,actions:r};return this.connection.sendRequest(D.ShowMessageRequest.type,n).then(bv)}showWarningMessage(e,...r){let n={type:D.MessageType.Warning,message:e,actions:r};return this.connection.sendRequest(D.ShowMessageRequest.type,n).then(bv)}showInformationMessage(e,...r){let n={type:D.MessageType.Info,message:e,actions:r};return this.connection.sendRequest(D.ShowMessageRequest.type,n).then(bv)}},jk=(0,rF.ShowDocumentFeature)((0,X.ProgressFeature)(Kv)),Vk;(function(t){function e(){return new qd}t.create=e})(Vk||(de.BulkRegistration=Vk={}));var qd=class{constructor(){this._registrations=[],this._registered=new Set}add(e,r){let n=Rr.string(e)?e:e.method;if(this._registered.has(n))throw new Error(`${n} is already added to this registration`);let a=kv.generateUuid();this._registrations.push({id:a,method:n,registerOptions:r||{}}),this._registered.add(n)}asRegistrationParams(){return{registrations:this._registrations}}},Yk;(function(t){function e(){return new Pu(void 0,[])}t.create=e})(Yk||(de.BulkUnregistration=Yk={}));var Pu=class{constructor(e,r){this._connection=e,this._unregistrations=new Map,r.forEach(n=>{this._unregistrations.set(n.method,n)})}get isAttached(){return!!this._connection}attach(e){this._connection=e}add(e){this._unregistrations.set(e.method,e)}dispose(){let e=[];for(let n of this._unregistrations.values())e.push(n);let r={unregisterations:e};this._connection.sendRequest(D.UnregistrationRequest.type,r).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(e){let r=Rr.string(e)?e:e.method,n=this._unregistrations.get(r);if(!n)return!1;let a={unregisterations:[n]};return this._connection.sendRequest(D.UnregistrationRequest.type,a).then(()=>{this._unregistrations.delete(r)},o=>{this._connection.console.info(`Un-registering request handler for ${n.id} failed.`)}),!0}},jd=class{attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}register(e,r,n){return e instanceof qd?this.registerMany(e):e instanceof Pu?this.registerSingle1(e,r,n):this.registerSingle2(e,r)}registerSingle1(e,r,n){let a=Rr.string(r)?r:r.method,o=kv.generateUuid(),i={registrations:[{id:o,method:a,registerOptions:n||{}}]};return e.isAttached||e.attach(this.connection),this.connection.sendRequest(D.RegistrationRequest.type,i).then(s=>(e.add({id:o,method:a}),e),s=>(this.connection.console.info(`Registering request handler for ${a} failed.`),Promise.reject(s)))}registerSingle2(e,r){let n=Rr.string(e)?e:e.method,a=kv.generateUuid(),o={registrations:[{id:a,method:n,registerOptions:r||{}}]};return this.connection.sendRequest(D.RegistrationRequest.type,o).then(i=>D.Disposable.create(()=>{this.unregisterSingle(a,n).catch(()=>{this.connection.console.info(`Un-registering capability with id ${a} failed.`)})}),i=>(this.connection.console.info(`Registering request handler for ${n} failed.`),Promise.reject(i)))}unregisterSingle(e,r){let n={unregisterations:[{id:e,method:r}]};return this.connection.sendRequest(D.UnregistrationRequest.type,n).catch(()=>{this.connection.console.info(`Un-registering request handler for ${e} failed.`)})}registerMany(e){let r=e.asRegistrationParams();return this.connection.sendRequest(D.RegistrationRequest.type,r).then(()=>new Pu(this._connection,r.registrations.map(n=>({id:n.id,method:n.method}))),n=>(this.connection.console.info("Bulk registration failed."),Promise.reject(n)))}},Pv=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}applyEdit(e){function r(a){return a&&!!a.edit}let n=r(e)?e:{edit:e};return this.connection.sendRequest(D.ApplyWorkspaceEditRequest.type,n)}},Xk=(0,nF.FileOperationsFeature)((0,Z1.WorkspaceFoldersFeature)((0,J1.ConfigurationFeature)(Pv))),Vd=class{constructor(){this._trace=D.Trace.Off}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}set trace(e){this._trace=e}log(e,r){this._trace!==D.Trace.Off&&this.connection.sendNotification(D.LogTraceNotification.type,{message:e,verbose:this._trace===D.Trace.Verbose?r:void 0}).catch(()=>{})}},Yd=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}logEvent(e){this.connection.sendNotification(D.TelemetryEventNotification.type,e).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}},Xd=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,X.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,X.attachPartialResult)(this.connection,r)}};de._LanguagesImpl=Xd;var Qk=(0,sF.FoldingRangeFeature)((0,dF.MonikerFeature)((0,lF.DiagnosticFeature)((0,uF.InlayHintFeature)((0,iF.InlineValueFeature)((0,oF.TypeHierarchyFeature)((0,aF.LinkedEditingRangeFeature)((0,tF.SemanticTokensFeature)((0,eF.CallHierarchyFeature)(Xd))))))))),Qd=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,X.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,X.attachPartialResult)(this.connection,r)}};de._NotebooksImpl=Qd;var Jk=(0,cF.NotebookSyncFeature)(Qd);function Zk(t,e){return function(r){return e(t(r))}}de.combineConsoleFeatures=Zk;function eR(t,e){return function(r){return e(t(r))}}de.combineTelemetryFeatures=eR;function tR(t,e){return function(r){return e(t(r))}}de.combineTracerFeatures=tR;function rR(t,e){return function(r){return e(t(r))}}de.combineClientFeatures=rR;function nR(t,e){return function(r){return e(t(r))}}de.combineWindowFeatures=nR;function aR(t,e){return function(r){return e(t(r))}}de.combineWorkspaceFeatures=aR;function oR(t,e){return function(r){return e(t(r))}}de.combineLanguagesFeatures=oR;function iR(t,e){return function(r){return e(t(r))}}de.combineNotebooksFeatures=iR;function pF(t,e){function r(a,o,i){return a&&o?i(a,o):a||o}return{__brand:"features",console:r(t.console,e.console,Zk),tracer:r(t.tracer,e.tracer,tR),telemetry:r(t.telemetry,e.telemetry,eR),client:r(t.client,e.client,rR),window:r(t.window,e.window,nR),workspace:r(t.workspace,e.workspace,aR),languages:r(t.languages,e.languages,oR),notebooks:r(t.notebooks,e.notebooks,iR)}}de.combineFeatures=pF;function fF(t,e,r){let n=r&&r.console?new(r.console(Ud)):new Ud,a=t(n);n.rawAttach(a);let o=r&&r.tracer?new(r.tracer(Vd)):new Vd,i=r&&r.telemetry?new(r.telemetry(Yd)):new Yd,s=r&&r.client?new(r.client(jd)):new jd,u=r&&r.window?new(r.window(jk)):new jk,l=r&&r.workspace?new(r.workspace(Xk)):new Xk,c=r&&r.languages?new(r.languages(Qk)):new Qk,d=r&&r.notebooks?new(r.notebooks(Jk)):new Jk,p=[n,o,i,s,u,l,c,d];function y(g){return g instanceof Promise?g:Rr.thenable(g)?new Promise((f,$)=>{g.then(P=>f(P),P=>$(P))}):Promise.resolve(g)}let v,S,T,A={listen:()=>a.listen(),sendRequest:(g,...f)=>a.sendRequest(Rr.string(g)?g:g.method,...f),onRequest:(g,f)=>a.onRequest(g,f),sendNotification:(g,f)=>{let $=Rr.string(g)?g:g.method;return a.sendNotification($,f)},onNotification:(g,f)=>a.onNotification(g,f),onProgress:a.onProgress,sendProgress:a.sendProgress,onInitialize:g=>(S=g,{dispose:()=>{S=void 0}}),onInitialized:g=>a.onNotification(D.InitializedNotification.type,g),onShutdown:g=>(v=g,{dispose:()=>{v=void 0}}),onExit:g=>(T=g,{dispose:()=>{T=void 0}}),get console(){return n},get telemetry(){return i},get tracer(){return o},get client(){return s},get window(){return u},get workspace(){return l},get languages(){return c},get notebooks(){return d},onDidChangeConfiguration:g=>a.onNotification(D.DidChangeConfigurationNotification.type,g),onDidChangeWatchedFiles:g=>a.onNotification(D.DidChangeWatchedFilesNotification.type,g),__textDocumentSync:void 0,onDidOpenTextDocument:g=>a.onNotification(D.DidOpenTextDocumentNotification.type,g),onDidChangeTextDocument:g=>a.onNotification(D.DidChangeTextDocumentNotification.type,g),onDidCloseTextDocument:g=>a.onNotification(D.DidCloseTextDocumentNotification.type,g),onWillSaveTextDocument:g=>a.onNotification(D.WillSaveTextDocumentNotification.type,g),onWillSaveTextDocumentWaitUntil:g=>a.onRequest(D.WillSaveTextDocumentWaitUntilRequest.type,g),onDidSaveTextDocument:g=>a.onNotification(D.DidSaveTextDocumentNotification.type,g),sendDiagnostics:g=>a.sendNotification(D.PublishDiagnosticsNotification.type,g),onHover:g=>a.onRequest(D.HoverRequest.type,(f,$)=>g(f,$,(0,X.attachWorkDone)(a,f),void 0)),onCompletion:g=>a.onRequest(D.CompletionRequest.type,(f,$)=>g(f,$,(0,X.attachWorkDone)(a,f),(0,X.attachPartialResult)(a,f))),onCompletionResolve:g=>a.onRequest(D.CompletionResolveRequest.type,g),onSignatureHelp:g=>a.onRequest(D.SignatureHelpRequest.type,(f,$)=>g(f,$,(0,X.attachWorkDone)(a,f),void 0)),onDeclaration:g=>a.onRequest(D.DeclarationRequest.type,(f,$)=>g(f,$,(0,X.attachWorkDone)(a,f),(0,X.attachPartialResult)(a,f))),onDefinition:g=>a.onRequest(D.DefinitionRequest.type,(f,$)=>g(f,$,(0,X.attachWorkDone)(a,f),(0,X.attachPartialResult)(a,f))),onTypeDefinition:g=>a.onRequest(D.TypeDefinitionRequest.type,(f,$)=>g(f,$,(0,X.attachWorkDone)(a,f),(0,X.attachPartialResult)(a,f))),onImplementation:g=>a.onRequest(D.ImplementationRequest.type,(f,$)=>g(f,$,(0,X.attachWorkDone)(a,f),(0,X.attachPartialResult)(a,f))),onReferences:g=>a.onRequest(D.ReferencesRequest.type,(f,$)=>g(f,$,(0,X.attachWorkDone)(a,f),(0,X.attachPartialResult)(a,f))),onDocumentHighlight:g=>a.onRequest(D.DocumentHighlightRequest.type,(f,$)=>g(f,$,(0,X.attachWorkDone)(a,f),(0,X.attachPartialResult)(a,f))),onDocumentSymbol:g=>a.onRequest(D.DocumentSymbolRequest.type,(f,$)=>g(f,$,(0,X.attachWorkDone)(a,f),(0,X.attachPartialResult)(a,f))),onWorkspaceSymbol:g=>a.onRequest(D.WorkspaceSymbolRequest.type,(f,$)=>g(f,$,(0,X.attachWorkDone)(a,f),(0,X.attachPartialResult)(a,f))),onWorkspaceSymbolResolve:g=>a.onRequest(D.WorkspaceSymbolResolveRequest.type,g),onCodeAction:g=>a.onRequest(D.CodeActionRequest.type,(f,$)=>g(f,$,(0,X.attachWorkDone)(a,f),(0,X.attachPartialResult)(a,f))),onCodeActionResolve:g=>a.onRequest(D.CodeActionResolveRequest.type,(f,$)=>g(f,$)),onCodeLens:g=>a.onRequest(D.CodeLensRequest.type,(f,$)=>g(f,$,(0,X.attachWorkDone)(a,f),(0,X.attachPartialResult)(a,f))),onCodeLensResolve:g=>a.onRequest(D.CodeLensResolveRequest.type,(f,$)=>g(f,$)),onDocumentFormatting:g=>a.onRequest(D.DocumentFormattingRequest.type,(f,$)=>g(f,$,(0,X.attachWorkDone)(a,f),void 0)),onDocumentRangeFormatting:g=>a.onRequest(D.DocumentRangeFormattingRequest.type,(f,$)=>g(f,$,(0,X.attachWorkDone)(a,f),void 0)),onDocumentOnTypeFormatting:g=>a.onRequest(D.DocumentOnTypeFormattingRequest.type,(f,$)=>g(f,$)),onRenameRequest:g=>a.onRequest(D.RenameRequest.type,(f,$)=>g(f,$,(0,X.attachWorkDone)(a,f),void 0)),onPrepareRename:g=>a.onRequest(D.PrepareRenameRequest.type,(f,$)=>g(f,$)),onDocumentLinks:g=>a.onRequest(D.DocumentLinkRequest.type,(f,$)=>g(f,$,(0,X.attachWorkDone)(a,f),(0,X.attachPartialResult)(a,f))),onDocumentLinkResolve:g=>a.onRequest(D.DocumentLinkResolveRequest.type,(f,$)=>g(f,$)),onDocumentColor:g=>a.onRequest(D.DocumentColorRequest.type,(f,$)=>g(f,$,(0,X.attachWorkDone)(a,f),(0,X.attachPartialResult)(a,f))),onColorPresentation:g=>a.onRequest(D.ColorPresentationRequest.type,(f,$)=>g(f,$,(0,X.attachWorkDone)(a,f),(0,X.attachPartialResult)(a,f))),onFoldingRanges:g=>a.onRequest(D.FoldingRangeRequest.type,(f,$)=>g(f,$,(0,X.attachWorkDone)(a,f),(0,X.attachPartialResult)(a,f))),onSelectionRanges:g=>a.onRequest(D.SelectionRangeRequest.type,(f,$)=>g(f,$,(0,X.attachWorkDone)(a,f),(0,X.attachPartialResult)(a,f))),onExecuteCommand:g=>a.onRequest(D.ExecuteCommandRequest.type,(f,$)=>g(f,$,(0,X.attachWorkDone)(a,f),void 0)),dispose:()=>a.dispose()};for(let g of p)g.attach(A);return a.onRequest(D.InitializeRequest.type,g=>{e.initialize(g),Rr.string(g.trace)&&(o.trace=D.Trace.fromString(g.trace));for(let f of p)f.initialize(g.capabilities);if(S){let f=S(g,new D.CancellationTokenSource().token,(0,X.attachWorkDone)(a,g),void 0);return y(f).then($=>{if($ instanceof D.ResponseError)return $;let P=$;P||(P={capabilities:{}});let Q=P.capabilities;Q||(Q={},P.capabilities=Q),Q.textDocumentSync===void 0||Q.textDocumentSync===null?Q.textDocumentSync=Rr.number(A.__textDocumentSync)?A.__textDocumentSync:D.TextDocumentSyncKind.None:!Rr.number(Q.textDocumentSync)&&!Rr.number(Q.textDocumentSync.change)&&(Q.textDocumentSync.change=Rr.number(A.__textDocumentSync)?A.__textDocumentSync:D.TextDocumentSyncKind.None);for(let vt of p)vt.fillServerCapabilities(Q);return P})}else{let f={capabilities:{textDocumentSync:D.TextDocumentSyncKind.None}};for(let $ of p)$.fillServerCapabilities(f.capabilities);return f}}),a.onRequest(D.ShutdownRequest.type,()=>{if(e.shutdownReceived=!0,v)return v(new D.CancellationTokenSource().token)}),a.onNotification(D.ExitNotification.type,()=>{try{T&&T()}finally{e.shutdownReceived?e.exit(0):e.exit(1)}}),a.onNotification(D.SetTraceNotification.type,g=>{o.trace=D.Trace.fromString(g.value)}),A}de.createConnection=fF});var Iv=M(_t=>{"use strict";var yF=_t&&_t.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var a=Object.getOwnPropertyDescriptor(e,r);(!a||("get"in a?!e.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,a)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),lR=_t&&_t.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&yF(e,t,r)};Object.defineProperty(_t,"__esModule",{value:!0});_t.ProposedFeatures=_t.NotebookDocuments=_t.TextDocuments=_t.SemanticTokensBuilder=void 0;var hF=yv();Object.defineProperty(_t,"SemanticTokensBuilder",{enumerable:!0,get:function(){return hF.SemanticTokensBuilder}});var gF=xk();lR(Xe(),_t);var mF=gv();Object.defineProperty(_t,"TextDocuments",{enumerable:!0,get:function(){return mF.TextDocuments}});var vF=vv();Object.defineProperty(_t,"NotebookDocuments",{enumerable:!0,get:function(){return vF.NotebookDocuments}});lR(sR(),_t);var uR;(function(t){t.all={__brand:"features",languages:gF.InlineCompletionFeature}})(uR||(_t.ProposedFeatures=uR={}))});var dR=M((Rne,cR)=>{"use strict";cR.exports=Xe()});var mr=M(cn=>{"use strict";var wF=cn&&cn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var a=Object.getOwnPropertyDescriptor(e,r);(!a||("get"in a?!e.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,a)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),fR=cn&&cn.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&wF(e,t,r)};Object.defineProperty(cn,"__esModule",{value:!0});cn.createConnection=void 0;var Jd=Iv();fR(dR(),cn);fR(Iv(),cn);var pR=!1,SF={initialize:t=>{},get shutdownReceived(){return pR},set shutdownReceived(t){pR=t},exit:t=>{}};function AF(t,e,r,n){let a,o,i,s;t!==void 0&&t.__brand==="features"&&(a=t,t=e,e=r,r=n),Jd.ConnectionStrategy.is(t)||Jd.ConnectionOptions.is(t)?s=t:(o=t,i=e,s=r);let u=l=>(0,Jd.createProtocolConnection)(o,i,l,s);return(0,Jd.createConnection)(u,SF,a)}cn.createConnection=AF});var ER=M((joe,IR)=>{"use strict";IR.exports=mr()});var ot={};Dn(ot,{AbstractAstReflection:()=>ga,AbstractCstNode:()=>Es,AbstractLangiumParser:()=>Ds,AbstractParserErrorMessageProvider:()=>Ec,AbstractThreadedAsyncParser:()=>Ug,AstUtils:()=>tl,BiMap:()=>qa,Cancellation:()=>L,CompositeCstNodeImpl:()=>Ha,ContextCache:()=>ja,CstNodeBuilder:()=>Is,CstUtils:()=>qu,DONE_RESULT:()=>At,DatatypeSymbol:()=>Ic,DefaultAstNodeDescriptionProvider:()=>Js,DefaultAstNodeLocator:()=>eu,DefaultAsyncParser:()=>cu,DefaultCommentProvider:()=>lu,DefaultConfigurationProvider:()=>tu,DefaultDocumentBuilder:()=>ru,DefaultDocumentValidator:()=>Qs,DefaultHydrator:()=>pu,DefaultIndexManager:()=>nu,DefaultJsonSerializer:()=>Vs,DefaultLangiumDocumentFactory:()=>Ls,DefaultLangiumDocuments:()=>Fs,DefaultLexer:()=>ou,DefaultLinker:()=>Ws,DefaultNameProvider:()=>Gs,DefaultReferenceDescriptionProvider:()=>Zs,DefaultReferences:()=>Hs,DefaultScopeComputation:()=>Bs,DefaultScopeProvider:()=>js,DefaultServiceRegistry:()=>Ys,DefaultTokenBuilder:()=>Ms,DefaultValueConverter:()=>Os,DefaultWorkspaceLock:()=>du,DefaultWorkspaceManager:()=>au,Deferred:()=>Or,Disposable:()=>Va,DisposableCache:()=>fi,DocumentCache:()=>Fc,DocumentState:()=>H,DocumentValidator:()=>Rn,EMPTY_SCOPE:()=>g0,EMPTY_STREAM:()=>Nn,EmptyFileSystem:()=>gu,EmptyFileSystemProvider:()=>qc,ErrorWithLocation:()=>Sa,GrammarAST:()=>$a,GrammarUtils:()=>ul,JSDocDocumentationProvider:()=>uu,LangiumCompletionParser:()=>_s,LangiumParser:()=>Ns,LangiumParserErrorMessageProvider:()=>si,LeafCstNodeImpl:()=>Ga,MapScope:()=>Us,Module:()=>gi,MultiMap:()=>an,OperationCancelled:()=>kn,ParserWorker:()=>qg,Reduction:()=>ao,RegExpUtils:()=>ol,RootCstNodeImpl:()=>ii,SimpleCache:()=>qs,StreamImpl:()=>Wt,StreamScope:()=>pi,TextDocument:()=>ra,TreeStreamImpl:()=>wr,URI:()=>_e,UriUtils:()=>bt,ValidationCategory:()=>hi,ValidationRegistry:()=>Xs,ValueConverter:()=>rn,WorkspaceCache:()=>yi,assertUnreachable:()=>_n,createCompletionParser:()=>bg,createDefaultCoreModule:()=>fu,createDefaultSharedCoreModule:()=>yu,createGrammarConfig:()=>Dy,createLangiumParser:()=>kg,delayNextTick:()=>_g,diagnosticData:()=>Wc,eagerLoad:()=>hu,getDiagnosticRange:()=>qT,inject:()=>Ya,interruptAndCheck:()=>Ge,isAstNode:()=>Ke,isAstNodeDescription:()=>uf,isAstNodeWithComment:()=>Og,isCompositeCstNode:()=>Ft,isIMultiModeLexerDefinition:()=>Lg,isJSDoc:()=>Hg,isLeafCstNode:()=>Er,isLinkingError:()=>ma,isNamed:()=>Lc,isOperationCancelled:()=>nn,isReference:()=>St,isRootCstNode:()=>Fi,isTokenTypeArray:()=>jT,isTokenTypeDictionary:()=>zg,loadGrammarFromJson:()=>jc,parseJSDoc:()=>Gg,prepareLangiumParser:()=>NT,setInterruptionPeriod:()=>FT,startCancelableOperation:()=>LT,stream:()=>te,toDiagnosticSeverity:()=>Gc});var qu={};Dn(qu,{DefaultNameRegexp:()=>Bu,RangeComparison:()=>pn,compareRange:()=>Yv,findCommentNode:()=>pf,findDeclarationNodeAtOffset:()=>pt,findLeafNodeAtOffset:()=>Uu,findLeafNodeBeforeOffset:()=>Wi,flattenCst:()=>cf,getInteriorNodes:()=>yf,getNextNode:()=>ff,getPreviousNode:()=>Qv,getStartlineNode:()=>ZK,inRange:()=>Hu,isChildNode:()=>df,isCommentNode:()=>lf,streamCst:()=>va,toDocumentSegment:()=>wa,tokenToRange:()=>oo});function Ke(t){return typeof t=="object"&&t!==null&&typeof t.$type=="string"}function St(t){return typeof t=="object"&&t!==null&&typeof t.$refText=="string"}function uf(t){return typeof t=="object"&&t!==null&&typeof t.name=="string"&&typeof t.type=="string"&&typeof t.path=="string"}function ma(t){return typeof t=="object"&&t!==null&&Ke(t.container)&&St(t.reference)&&typeof t.message=="string"}var ga=class{constructor(){this.subtypes={},this.allSubtypes={}}isInstance(e,r){return Ke(e)&&this.isSubtype(e.$type,r)}isSubtype(e,r){if(e===r)return!0;let n=this.subtypes[e];n||(n=this.subtypes[e]={});let a=n[r];if(a!==void 0)return a;{let o=this.computeIsSubtype(e,r);return n[r]=o,o}}getAllSubTypes(e){let r=this.allSubtypes[e];if(r)return r;{let n=this.getAllTypes(),a=[];for(let o of n)this.isSubtype(o,e)&&a.push(o);return this.allSubtypes[e]=a,a}}};function Ft(t){return typeof t=="object"&&t!==null&&Array.isArray(t.content)}function Er(t){return typeof t=="object"&&t!==null&&typeof t.tokenType=="object"}function Fi(t){return Ft(t)&&typeof t.fullText=="string"}var Wt=class t{constructor(e,r){this.startFn=e,this.nextFn=r}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),[Symbol.iterator]:()=>e};return e}[Symbol.iterator](){return this.iterator()}isEmpty(){return!!this.iterator().next().done}count(){let e=this.iterator(),r=0,n=e.next();for(;!n.done;)r++,n=e.next();return r}toArray(){let e=[],r=this.iterator(),n;do n=r.next(),n.value!==void 0&&e.push(n.value);while(!n.done);return e}toSet(){return new Set(this)}toMap(e,r){let n=this.map(a=>[e?e(a):a,r?r(a):a]);return new Map(n)}toString(){return this.join()}concat(e){let r=e[Symbol.iterator]();return new t(()=>({first:this.startFn(),firstDone:!1}),n=>{let a;if(!n.firstDone){do if(a=this.nextFn(n.first),!a.done)return a;while(!a.done);n.firstDone=!0}do if(a=r.next(),!a.done)return a;while(!a.done);return At})}join(e=","){let r=this.iterator(),n="",a,o=!1;do a=r.next(),a.done||(o&&(n+=e),n+=JK(a.value)),o=!0;while(!a.done);return n}indexOf(e,r=0){let n=this.iterator(),a=0,o=n.next();for(;!o.done;){if(a>=r&&o.value===e)return a;o=n.next(),a++}return-1}every(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(!e(n.value))return!1;n=r.next()}return!0}some(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return!0;n=r.next()}return!1}forEach(e){let r=this.iterator(),n=0,a=r.next();for(;!a.done;)e(a.value,n),a=r.next(),n++}map(e){return new t(this.startFn,r=>{let{done:n,value:a}=this.nextFn(r);return n?At:{done:!1,value:e(a)}})}filter(e){return new t(this.startFn,r=>{let n;do if(n=this.nextFn(r),!n.done&&e(n.value))return n;while(!n.done);return At})}nonNullable(){return this.filter(e=>e!=null)}reduce(e,r){let n=this.iterator(),a=r,o=n.next();for(;!o.done;)a===void 0?a=o.value:a=e(a,o.value),o=n.next();return a}reduceRight(e,r){return this.recursiveReduce(this.iterator(),e,r)}recursiveReduce(e,r,n){let a=e.next();if(a.done)return n;let o=this.recursiveReduce(e,r,n);return o===void 0?a.value:r(o,a.value)}find(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return n.value;n=r.next()}}findIndex(e){let r=this.iterator(),n=0,a=r.next();for(;!a.done;){if(e(a.value))return n;a=r.next(),n++}return-1}includes(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(n.value===e)return!0;n=r.next()}return!1}flatMap(e){return new t(()=>({this:this.startFn()}),r=>{do{if(r.iterator){let o=r.iterator.next();if(o.done)r.iterator=void 0;else return o}let{done:n,value:a}=this.nextFn(r.this);if(!n){let o=e(a);if(Gu(o))r.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}}while(r.iterator);return At})}flat(e){if(e===void 0&&(e=1),e<=0)return this;let r=e>1?this.flat(e-1):this;return new t(()=>({this:r.startFn()}),n=>{do{if(n.iterator){let i=n.iterator.next();if(i.done)n.iterator=void 0;else return i}let{done:a,value:o}=r.nextFn(n.this);if(!a)if(Gu(o))n.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}while(n.iterator);return At})}head(){let r=this.iterator().next();if(!r.done)return r.value}tail(e=1){return new t(()=>{let r=this.startFn();for(let n=0;n<e;n++)if(this.nextFn(r).done)return r;return r},this.nextFn)}limit(e){return new t(()=>({size:0,state:this.startFn()}),r=>(r.size++,r.size>e?At:this.nextFn(r.state)))}distinct(e){let r=new Set;return this.filter(n=>{let a=e?e(n):n;return r.has(a)?!1:(r.add(a),!0)})}exclude(e,r){let n=new Set;for(let a of e){let o=r?r(a):a;n.add(o)}return this.filter(a=>{let o=r?r(a):a;return!n.has(o)})}};function JK(t){return typeof t=="string"?t:typeof t>"u"?"undefined":typeof t.toString=="function"?t.toString():Object.prototype.toString.call(t)}function Gu(t){return!!t&&typeof t[Symbol.iterator]=="function"}var Nn=new Wt(()=>{},()=>At),At=Object.freeze({done:!0,value:void 0});function te(...t){if(t.length===1){let e=t[0];if(e instanceof Wt)return e;if(Gu(e))return new Wt(()=>e[Symbol.iterator](),r=>r.next());if(typeof e.length=="number")return new Wt(()=>({index:0}),r=>r.index<e.length?{done:!1,value:e[r.index++]}:At)}return t.length>1?new Wt(()=>({collIndex:0,arrIndex:0}),e=>{do{if(e.iterator){let r=e.iterator.next();if(!r.done)return r;e.iterator=void 0}if(e.array){if(e.arrIndex<e.array.length)return{done:!1,value:e.array[e.arrIndex++]};e.array=void 0,e.arrIndex=0}if(e.collIndex<t.length){let r=t[e.collIndex++];Gu(r)?e.iterator=r[Symbol.iterator]():r&&typeof r.length=="number"&&(e.array=r)}}while(e.iterator||e.array||e.collIndex<t.length);return At}):Nn}var wr=class extends Wt{constructor(e,r,n){super(()=>({iterators:n?.includeRoot?[[e][Symbol.iterator]()]:[r(e)[Symbol.iterator]()],pruned:!1}),a=>{for(a.pruned&&(a.iterators.pop(),a.pruned=!1);a.iterators.length>0;){let i=a.iterators[a.iterators.length-1].next();if(i.done)a.iterators.pop();else return a.iterators.push(r(i.value)[Symbol.iterator]()),i}return At})}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),prune:()=>{e.state.pruned=!0},[Symbol.iterator]:()=>e};return e}},ao;(function(t){function e(o){return o.reduce((i,s)=>i+s,0)}t.sum=e;function r(o){return o.reduce((i,s)=>i*s,0)}t.product=r;function n(o){return o.reduce((i,s)=>Math.min(i,s))}t.min=n;function a(o){return o.reduce((i,s)=>Math.max(i,s))}t.max=a})(ao||(ao={}));function va(t){return new wr(t,e=>Ft(e)?e.content:[],{includeRoot:!0})}function cf(t){return va(t).filter(Er)}function df(t,e){for(;t.container;)if(t=t.container,t===e)return!0;return!1}function oo(t){return{start:{character:t.startColumn-1,line:t.startLine-1},end:{character:t.endColumn,line:t.endLine-1}}}function wa(t){if(!t)return;let{offset:e,end:r,range:n}=t;return{range:n,offset:e,end:r,length:r-e}}var pn;(function(t){t[t.Before=0]="Before",t[t.After=1]="After",t[t.OverlapFront=2]="OverlapFront",t[t.OverlapBack=3]="OverlapBack",t[t.Inside=4]="Inside"})(pn||(pn={}));function Yv(t,e){if(t.end.line<e.start.line||t.end.line===e.start.line&&t.end.character<t.start.character)return pn.Before;if(t.start.line>e.end.line||t.start.line===e.end.line&&t.start.character>e.end.character)return pn.After;let r=t.start.line>e.start.line||t.start.line===e.start.line&&t.start.character>=e.start.character,n=t.end.line<e.end.line||t.end.line===e.end.line&&t.end.character<=e.end.character;return r&&n?pn.Inside:r?pn.OverlapBack:pn.OverlapFront}function Hu(t,e){return Yv(t,e)>pn.After}var Bu=/^[\w\p{L}]$/u;function pt(t,e,r=Bu){if(t){if(e>0){let n=e-t.offset,a=t.text.charAt(n);r.test(a)||e--}return Uu(t,e)}}function pf(t,e){if(t){let r=Qv(t,!0);if(r&&lf(r,e))return r;if(Fi(t)){let n=t.content.findIndex(a=>!a.hidden);for(let a=n-1;a>=0;a--){let o=t.content[a];if(lf(o,e))return o}}}}function lf(t,e){return Er(t)&&e.includes(t.tokenType.name)}function Uu(t,e){if(Er(t))return t;if(Ft(t)){let r=Xv(t,e,!1);if(r)return Uu(r,e)}}function Wi(t,e){if(Er(t))return t;if(Ft(t)){let r=Xv(t,e,!0);if(r)return Wi(r,e)}}function Xv(t,e,r){let n=0,a=t.content.length-1,o;for(;n<=a;){let i=Math.floor((n+a)/2),s=t.content[i];if(s.offset<=e&&s.end>e)return s;s.end<=e?(o=r?s:void 0,n=i+1):a=i-1}return o}function Qv(t,e=!0){for(;t.container;){let r=t.container,n=r.content.indexOf(t);for(;n>0;){n--;let a=r.content[n];if(e||!a.hidden)return a}t=r}}function ff(t,e=!0){for(;t.container;){let r=t.container,n=r.content.indexOf(t),a=r.content.length-1;for(;n<a;){n++;let o=r.content[n];if(e||!o.hidden)return o}t=r}}function ZK(t){if(t.range.start.character===0)return t;let e=t.range.start.line,r=t,n;for(;t.container;){let a=t.container,o=n??a.content.indexOf(t);if(o===0?(t=a,n=void 0):(n=o-1,t=a.content[n]),t.range.start.line!==e)break;r=t}return r}function yf(t,e){let r=eP(t,e);return r?r.parent.content.slice(r.a+1,r.b):[]}function eP(t,e){let r=Vv(t),n=Vv(e),a;for(let o=0;o<r.length&&o<n.length;o++){let i=r[o],s=n[o];if(i.parent===s.parent)a={parent:i.parent,a:i.index,b:s.index};else break}return a}function Vv(t){let e=[];for(;t.container;){let r=t.container,n=r.content.indexOf(t);e.push({parent:r,index:n}),t=r}return e.reverse()}var ul={};Dn(ul,{findAssignment:()=>Ky,findNameAssignment:()=>sl,findNodeForKeyword:()=>fo,findNodeForProperty:()=>Mn,findNodesForKeyword:()=>il,findNodesForKeywordInternal:()=>Ry,findNodesForProperty:()=>po,getActionAtElement:()=>cw,getActionType:()=>pw,getAllReachableRules:()=>Xi,getCrossReferenceTerminal:()=>Qi,getEntryRule:()=>Yi,getExplicitRuleType:()=>Ka,getHiddenRules:()=>sw,getRuleType:()=>Iy,getTypeName:()=>yn,isArrayCardinality:()=>Py,isArrayOperator:()=>AP,isCommentTerminal:()=>by,isDataType:()=>$P,isDataTypeRule:()=>Ji,isOptionalCardinality:()=>Ra,terminalRegex:()=>On});var Sa=class extends Error{constructor(e,r){super(e?`${r} at ${e.range.start.line}:${e.range.start.character}`:r)}};function _n(t){throw new Error("Error! The input value was not handled.")}var $a={};Dn($a,{AbstractElement:()=>gf,AbstractRule:()=>Gi,AbstractType:()=>Hi,Action:()=>Bf,Alternatives:()=>Uf,ArrayLiteral:()=>mf,ArrayType:()=>vf,Assignment:()=>qf,BooleanLiteral:()=>Sf,CharacterRange:()=>jf,Condition:()=>ju,Conjunction:()=>$f,CrossReference:()=>Yf,Disjunction:()=>Cf,EndOfFile:()=>Xf,Grammar:()=>bf,GrammarImport:()=>Zv,Group:()=>Jf,InferredType:()=>kf,Interface:()=>Rf,Keyword:()=>Zf,LangiumGrammarAstReflection:()=>io,LangiumGrammarTerminals:()=>tP,NamedArgument:()=>ew,NegatedToken:()=>ey,Negation:()=>Kf,NumberLiteral:()=>If,Parameter:()=>Ef,ParameterReference:()=>Df,ParserRule:()=>_f,ReferenceType:()=>Mf,RegexToken:()=>ry,ReturnType:()=>tw,RuleCall:()=>ay,SimpleType:()=>Lf,StringLiteral:()=>Ff,TerminalAlternatives:()=>oy,TerminalGroup:()=>sy,TerminalRule:()=>Yu,TerminalRuleCall:()=>ly,Type:()=>Wf,TypeAttribute:()=>rw,TypeDefinition:()=>hf,UnionType:()=>Gf,UnorderedGroup:()=>cy,UntilToken:()=>dy,ValueLiteral:()=>Vu,Wildcard:()=>fy,isAbstractElement:()=>Aa,isAbstractRule:()=>rP,isAbstractType:()=>nP,isAction:()=>Dr,isAlternatives:()=>so,isArrayLiteral:()=>uP,isArrayType:()=>wf,isAssignment:()=>Kt,isBooleanLiteral:()=>Af,isCharacterRange:()=>Vf,isCondition:()=>aP,isConjunction:()=>Tf,isCrossReference:()=>Nr,isDisjunction:()=>xf,isEndOfFile:()=>Qf,isFeatureName:()=>oP,isGrammar:()=>lP,isGrammarImport:()=>cP,isGroup:()=>Sr,isInferredType:()=>Xu,isInterface:()=>Qu,isKeyword:()=>$t,isNamedArgument:()=>dP,isNegatedToken:()=>ty,isNegation:()=>Pf,isNumberLiteral:()=>pP,isParameter:()=>fP,isParameterReference:()=>Nf,isParserRule:()=>Ue,isPrimitiveType:()=>Jv,isReferenceType:()=>Of,isRegexToken:()=>ny,isReturnType:()=>zf,isRuleCall:()=>Qt,isSimpleType:()=>Ju,isStringLiteral:()=>yP,isTerminalAlternatives:()=>iy,isTerminalGroup:()=>uy,isTerminalRule:()=>Xt,isTerminalRuleCall:()=>Zu,isType:()=>Bi,isTypeAttribute:()=>hP,isTypeDefinition:()=>iP,isUnionType:()=>Hf,isUnorderedGroup:()=>uo,isUntilToken:()=>py,isValueLiteral:()=>sP,isWildcard:()=>yy,reflection:()=>Y});var tP={ID:/\^?[_a-zA-Z][\w_]*/,STRING:/"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,NUMBER:/NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/,RegexLiteral:/\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[a-z]*/,WS:/\s+/,ML_COMMENT:/\/\*[\s\S]*?\*\//,SL_COMMENT:/\/\/[^\n\r]*/},Gi="AbstractRule";function rP(t){return Y.isInstance(t,Gi)}var Hi="AbstractType";function nP(t){return Y.isInstance(t,Hi)}var ju="Condition";function aP(t){return Y.isInstance(t,ju)}function oP(t){return Jv(t)||t==="current"||t==="entry"||t==="extends"||t==="false"||t==="fragment"||t==="grammar"||t==="hidden"||t==="import"||t==="interface"||t==="returns"||t==="terminal"||t==="true"||t==="type"||t==="infer"||t==="infers"||t==="with"||typeof t=="string"&&/\^?[_a-zA-Z][\w_]*/.test(t)}function Jv(t){return t==="string"||t==="number"||t==="boolean"||t==="Date"||t==="bigint"}var hf="TypeDefinition";function iP(t){return Y.isInstance(t,hf)}var Vu="ValueLiteral";function sP(t){return Y.isInstance(t,Vu)}var gf="AbstractElement";function Aa(t){return Y.isInstance(t,gf)}var mf="ArrayLiteral";function uP(t){return Y.isInstance(t,mf)}var vf="ArrayType";function wf(t){return Y.isInstance(t,vf)}var Sf="BooleanLiteral";function Af(t){return Y.isInstance(t,Sf)}var $f="Conjunction";function Tf(t){return Y.isInstance(t,$f)}var Cf="Disjunction";function xf(t){return Y.isInstance(t,Cf)}var bf="Grammar";function lP(t){return Y.isInstance(t,bf)}var Zv="GrammarImport";function cP(t){return Y.isInstance(t,Zv)}var kf="InferredType";function Xu(t){return Y.isInstance(t,kf)}var Rf="Interface";function Qu(t){return Y.isInstance(t,Rf)}var ew="NamedArgument";function dP(t){return Y.isInstance(t,ew)}var Kf="Negation";function Pf(t){return Y.isInstance(t,Kf)}var If="NumberLiteral";function pP(t){return Y.isInstance(t,If)}var Ef="Parameter";function fP(t){return Y.isInstance(t,Ef)}var Df="ParameterReference";function Nf(t){return Y.isInstance(t,Df)}var _f="ParserRule";function Ue(t){return Y.isInstance(t,_f)}var Mf="ReferenceType";function Of(t){return Y.isInstance(t,Mf)}var tw="ReturnType";function zf(t){return Y.isInstance(t,tw)}var Lf="SimpleType";function Ju(t){return Y.isInstance(t,Lf)}var Ff="StringLiteral";function yP(t){return Y.isInstance(t,Ff)}var Yu="TerminalRule";function Xt(t){return Y.isInstance(t,Yu)}var Wf="Type";function Bi(t){return Y.isInstance(t,Wf)}var rw="TypeAttribute";function hP(t){return Y.isInstance(t,rw)}var Gf="UnionType";function Hf(t){return Y.isInstance(t,Gf)}var Bf="Action";function Dr(t){return Y.isInstance(t,Bf)}var Uf="Alternatives";function so(t){return Y.isInstance(t,Uf)}var qf="Assignment";function Kt(t){return Y.isInstance(t,qf)}var jf="CharacterRange";function Vf(t){return Y.isInstance(t,jf)}var Yf="CrossReference";function Nr(t){return Y.isInstance(t,Yf)}var Xf="EndOfFile";function Qf(t){return Y.isInstance(t,Xf)}var Jf="Group";function Sr(t){return Y.isInstance(t,Jf)}var Zf="Keyword";function $t(t){return Y.isInstance(t,Zf)}var ey="NegatedToken";function ty(t){return Y.isInstance(t,ey)}var ry="RegexToken";function ny(t){return Y.isInstance(t,ry)}var ay="RuleCall";function Qt(t){return Y.isInstance(t,ay)}var oy="TerminalAlternatives";function iy(t){return Y.isInstance(t,oy)}var sy="TerminalGroup";function uy(t){return Y.isInstance(t,sy)}var ly="TerminalRuleCall";function Zu(t){return Y.isInstance(t,ly)}var cy="UnorderedGroup";function uo(t){return Y.isInstance(t,cy)}var dy="UntilToken";function py(t){return Y.isInstance(t,dy)}var fy="Wildcard";function yy(t){return Y.isInstance(t,fy)}var io=class extends ga{getAllTypes(){return["AbstractElement","AbstractRule","AbstractType","Action","Alternatives","ArrayLiteral","ArrayType","Assignment","BooleanLiteral","CharacterRange","Condition","Conjunction","CrossReference","Disjunction","EndOfFile","Grammar","GrammarImport","Group","InferredType","Interface","Keyword","NamedArgument","NegatedToken","Negation","NumberLiteral","Parameter","ParameterReference","ParserRule","ReferenceType","RegexToken","ReturnType","RuleCall","SimpleType","StringLiteral","TerminalAlternatives","TerminalGroup","TerminalRule","TerminalRuleCall","Type","TypeAttribute","TypeDefinition","UnionType","UnorderedGroup","UntilToken","ValueLiteral","Wildcard"]}computeIsSubtype(e,r){switch(e){case Bf:case Uf:case qf:case jf:case Yf:case Xf:case Jf:case Zf:case ey:case ry:case ay:case oy:case sy:case ly:case cy:case dy:case fy:return this.isSubtype(gf,r);case mf:case If:case Ff:return this.isSubtype(Vu,r);case vf:case Mf:case Lf:case Gf:return this.isSubtype(hf,r);case Sf:return this.isSubtype(ju,r)||this.isSubtype(Vu,r);case $f:case Cf:case Kf:case Df:return this.isSubtype(ju,r);case kf:case Rf:case Wf:return this.isSubtype(Hi,r);case _f:return this.isSubtype(Gi,r)||this.isSubtype(Hi,r);case Yu:return this.isSubtype(Gi,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"Action:type":case"CrossReference:type":case"Interface:superTypes":case"ParserRule:returnType":case"SimpleType:typeRef":return Hi;case"Grammar:hiddenTokens":case"ParserRule:hiddenTokens":case"RuleCall:rule":return Gi;case"Grammar:usedGrammars":return bf;case"NamedArgument:parameter":case"ParameterReference:parameter":return Ef;case"TerminalRuleCall:rule":return Yu;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"AbstractElement":return{name:"AbstractElement",properties:[{name:"cardinality"},{name:"lookahead"}]};case"ArrayLiteral":return{name:"ArrayLiteral",properties:[{name:"elements",defaultValue:[]}]};case"ArrayType":return{name:"ArrayType",properties:[{name:"elementType"}]};case"BooleanLiteral":return{name:"BooleanLiteral",properties:[{name:"true",defaultValue:!1}]};case"Conjunction":return{name:"Conjunction",properties:[{name:"left"},{name:"right"}]};case"Disjunction":return{name:"Disjunction",properties:[{name:"left"},{name:"right"}]};case"Grammar":return{name:"Grammar",properties:[{name:"definesHiddenTokens",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"imports",defaultValue:[]},{name:"interfaces",defaultValue:[]},{name:"isDeclared",defaultValue:!1},{name:"name"},{name:"rules",defaultValue:[]},{name:"types",defaultValue:[]},{name:"usedGrammars",defaultValue:[]}]};case"GrammarImport":return{name:"GrammarImport",properties:[{name:"path"}]};case"InferredType":return{name:"InferredType",properties:[{name:"name"}]};case"Interface":return{name:"Interface",properties:[{name:"attributes",defaultValue:[]},{name:"name"},{name:"superTypes",defaultValue:[]}]};case"NamedArgument":return{name:"NamedArgument",properties:[{name:"calledByName",defaultValue:!1},{name:"parameter"},{name:"value"}]};case"Negation":return{name:"Negation",properties:[{name:"value"}]};case"NumberLiteral":return{name:"NumberLiteral",properties:[{name:"value"}]};case"Parameter":return{name:"Parameter",properties:[{name:"name"}]};case"ParameterReference":return{name:"ParameterReference",properties:[{name:"parameter"}]};case"ParserRule":return{name:"ParserRule",properties:[{name:"dataType"},{name:"definesHiddenTokens",defaultValue:!1},{name:"definition"},{name:"entry",defaultValue:!1},{name:"fragment",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"inferredType"},{name:"name"},{name:"parameters",defaultValue:[]},{name:"returnType"},{name:"wildcard",defaultValue:!1}]};case"ReferenceType":return{name:"ReferenceType",properties:[{name:"referenceType"}]};case"ReturnType":return{name:"ReturnType",properties:[{name:"name"}]};case"SimpleType":return{name:"SimpleType",properties:[{name:"primitiveType"},{name:"stringType"},{name:"typeRef"}]};case"StringLiteral":return{name:"StringLiteral",properties:[{name:"value"}]};case"TerminalRule":return{name:"TerminalRule",properties:[{name:"definition"},{name:"fragment",defaultValue:!1},{name:"hidden",defaultValue:!1},{name:"name"},{name:"type"}]};case"Type":return{name:"Type",properties:[{name:"name"},{name:"type"}]};case"TypeAttribute":return{name:"TypeAttribute",properties:[{name:"defaultValue"},{name:"isOptional",defaultValue:!1},{name:"name"},{name:"type"}]};case"UnionType":return{name:"UnionType",properties:[{name:"types",defaultValue:[]}]};case"Action":return{name:"Action",properties:[{name:"feature"},{name:"inferredType"},{name:"operator"},{name:"type"}]};case"Alternatives":return{name:"Alternatives",properties:[{name:"elements",defaultValue:[]}]};case"Assignment":return{name:"Assignment",properties:[{name:"feature"},{name:"operator"},{name:"terminal"}]};case"CharacterRange":return{name:"CharacterRange",properties:[{name:"left"},{name:"right"}]};case"CrossReference":return{name:"CrossReference",properties:[{name:"deprecatedSyntax",defaultValue:!1},{name:"terminal"},{name:"type"}]};case"Group":return{name:"Group",properties:[{name:"elements",defaultValue:[]},{name:"guardCondition"}]};case"Keyword":return{name:"Keyword",properties:[{name:"value"}]};case"NegatedToken":return{name:"NegatedToken",properties:[{name:"terminal"}]};case"RegexToken":return{name:"RegexToken",properties:[{name:"regex"}]};case"RuleCall":return{name:"RuleCall",properties:[{name:"arguments",defaultValue:[]},{name:"rule"}]};case"TerminalAlternatives":return{name:"TerminalAlternatives",properties:[{name:"elements",defaultValue:[]}]};case"TerminalGroup":return{name:"TerminalGroup",properties:[{name:"elements",defaultValue:[]}]};case"TerminalRuleCall":return{name:"TerminalRuleCall",properties:[{name:"rule"}]};case"UnorderedGroup":return{name:"UnorderedGroup",properties:[{name:"elements",defaultValue:[]}]};case"UntilToken":return{name:"UntilToken",properties:[{name:"terminal"}]};default:return{name:e,properties:[]}}}},Y=new io;var tl={};Dn(tl,{assignMandatoryProperties:()=>Ui,copyAstNode:()=>gy,findLocalReferences:()=>mP,findRootNode:()=>nw,getContainerOfType:()=>pr,getDocument:()=>ze,hasContainerOfType:()=>gP,linkContentToContainer:()=>el,streamAllContents:()=>Jt,streamAst:()=>Zt,streamContents:()=>Ta,streamReferences:()=>lo});function el(t){for(let[e,r]of Object.entries(t))e.startsWith("$")||(Array.isArray(r)?r.forEach((n,a)=>{Ke(n)&&(n.$container=t,n.$containerProperty=e,n.$containerIndex=a)}):Ke(r)&&(r.$container=t,r.$containerProperty=e))}function pr(t,e){let r=t;for(;r;){if(e(r))return r;r=r.$container}}function gP(t,e){let r=t;for(;r;){if(e(r))return!0;r=r.$container}return!1}function ze(t){let r=nw(t).$document;if(!r)throw new Error("AST node has no document.");return r}function nw(t){for(;t.$container;)t=t.$container;return t}function Ta(t,e){if(!t)throw new Error("Node must be an AstNode.");let r=e?.range;return new Wt(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),n=>{for(;n.keyIndex<n.keys.length;){let a=n.keys[n.keyIndex];if(!a.startsWith("$")){let o=t[a];if(Ke(o)){if(n.keyIndex++,hy(o,r))return{done:!1,value:o}}else if(Array.isArray(o)){for(;n.arrayIndex<o.length;){let i=n.arrayIndex++,s=o[i];if(Ke(s)&&hy(s,r))return{done:!1,value:s}}n.arrayIndex=0}}n.keyIndex++}return At})}function Jt(t,e){if(!t)throw new Error("Root node must be an AstNode.");return new wr(t,r=>Ta(r,e))}function Zt(t,e){if(t){if(e?.range&&!hy(t,e.range))return new wr(t,()=>[])}else throw new Error("Root node must be an AstNode.");return new wr(t,r=>Ta(r,e),{includeRoot:!0})}function hy(t,e){var r;if(!e)return!0;let n=(r=t.$cstNode)===null||r===void 0?void 0:r.range;return n?Hu(n,e):!1}function lo(t){return new Wt(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),e=>{for(;e.keyIndex<e.keys.length;){let r=e.keys[e.keyIndex];if(!r.startsWith("$")){let n=t[r];if(St(n))return e.keyIndex++,{done:!1,value:{reference:n,container:t,property:r}};if(Array.isArray(n)){for(;e.arrayIndex<n.length;){let a=e.arrayIndex++,o=n[a];if(St(o))return{done:!1,value:{reference:o,container:t,property:r,index:a}}}e.arrayIndex=0}}e.keyIndex++}return At})}function mP(t,e=ze(t).parseResult.value){let r=[];return Zt(e).forEach(n=>{lo(n).forEach(a=>{a.reference.ref===t&&r.push(a.reference)})}),te(r)}function Ui(t,e){let r=t.getTypeMetaData(e.$type),n=e;for(let a of r.properties)a.defaultValue!==void 0&&n[a.name]===void 0&&(n[a.name]=aw(a.defaultValue))}function aw(t){return Array.isArray(t)?[...t.map(aw)]:t}function gy(t,e){let r={$type:t.$type};for(let[n,a]of Object.entries(t))if(!n.startsWith("$"))if(Ke(a))r[n]=gy(a,e);else if(St(a))r[n]=e(r,n,a.$refNode,a.$refText);else if(Array.isArray(a)){let o=[];for(let i of a)Ke(i)?o.push(gy(i,e)):St(i)?o.push(e(r,n,i.$refNode,i.$refText)):o.push(i);r[n]=o}else r[n]=a;return el(r),r}var ol={};Dn(ol,{NEWLINE_REGEXP:()=>Sy,escapeRegExp:()=>ka,getCaseInsensitivePattern:()=>$y,getTerminalParts:()=>SP,isMultilineComment:()=>Ay,isWhitespace:()=>al,partialMatches:()=>Ty,partialRegExp:()=>iw});function q(t){return t.charCodeAt(0)}function rl(t,e){Array.isArray(t)?t.forEach(function(r){e.push(r)}):e.push(t)}function co(t,e){if(t[e]===!0)throw"duplicate flag "+e;let r=t[e];t[e]=!0}function Ca(t){if(t===void 0)throw Error("Internal Error - Should never get here!");return!0}function qi(){throw Error("Internal Error - Should never get here!")}function my(t){return t.type==="Character"}var ji=[];for(let t=q("0");t<=q("9");t++)ji.push(t);var Vi=[q("_")].concat(ji);for(let t=q("a");t<=q("z");t++)Vi.push(t);for(let t=q("A");t<=q("Z");t++)Vi.push(t);var vy=[q(" "),q("\f"),q(`
`),q("\r"),q("	"),q("\v"),q("	"),q("\xA0"),q("\u1680"),q("\u2000"),q("\u2001"),q("\u2002"),q("\u2003"),q("\u2004"),q("\u2005"),q("\u2006"),q("\u2007"),q("\u2008"),q("\u2009"),q("\u200A"),q("\u2028"),q("\u2029"),q("\u202F"),q("\u205F"),q("\u3000"),q("\uFEFF")];var vP=/[0-9a-fA-F]/,nl=/[0-9]/,wP=/[1-9]/,xa=class{constructor(){this.idx=0,this.input="",this.groupIdx=0}saveState(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}}restoreState(e){this.idx=e.idx,this.input=e.input,this.groupIdx=e.groupIdx}pattern(e){this.idx=0,this.input=e,this.groupIdx=0,this.consumeChar("/");let r=this.disjunction();this.consumeChar("/");let n={type:"Flags",loc:{begin:this.idx,end:e.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};for(;this.isRegExpFlag();)switch(this.popChar()){case"g":co(n,"global");break;case"i":co(n,"ignoreCase");break;case"m":co(n,"multiLine");break;case"u":co(n,"unicode");break;case"y":co(n,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:n,value:r,loc:this.loc(0)}}disjunction(){let e=[],r=this.idx;for(e.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),e.push(this.alternative());return{type:"Disjunction",value:e,loc:this.loc(r)}}alternative(){let e=[],r=this.idx;for(;this.isTerm();)e.push(this.term());return{type:"Alternative",value:e,loc:this.loc(r)}}term(){return this.isAssertion()?this.assertion():this.atom()}assertion(){let e=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(e)};case"$":return{type:"EndAnchor",loc:this.loc(e)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(e)};case"B":return{type:"NonWordBoundary",loc:this.loc(e)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");let r;switch(this.popChar()){case"=":r="Lookahead";break;case"!":r="NegativeLookahead";break}Ca(r);let n=this.disjunction();return this.consumeChar(")"),{type:r,value:n,loc:this.loc(e)}}return qi()}quantifier(e=!1){let r,n=this.idx;switch(this.popChar()){case"*":r={atLeast:0,atMost:1/0};break;case"+":r={atLeast:1,atMost:1/0};break;case"?":r={atLeast:0,atMost:1};break;case"{":let a=this.integerIncludingZero();switch(this.popChar()){case"}":r={atLeast:a,atMost:a};break;case",":let o;this.isDigit()?(o=this.integerIncludingZero(),r={atLeast:a,atMost:o}):r={atLeast:a,atMost:1/0},this.consumeChar("}");break}if(e===!0&&r===void 0)return;Ca(r);break}if(!(e===!0&&r===void 0)&&Ca(r))return this.peekChar(0)==="?"?(this.consumeChar("?"),r.greedy=!1):r.greedy=!0,r.type="Quantifier",r.loc=this.loc(n),r}atom(){let e,r=this.idx;switch(this.peekChar()){case".":e=this.dotAll();break;case"\\":e=this.atomEscape();break;case"[":e=this.characterClass();break;case"(":e=this.group();break}return e===void 0&&this.isPatternCharacter()&&(e=this.patternCharacter()),Ca(e)?(e.loc=this.loc(r),this.isQuantifier()&&(e.quantifier=this.quantifier()),e):qi()}dotAll(){return this.consumeChar("."),{type:"Set",complement:!0,value:[q(`
`),q("\r"),q("\u2028"),q("\u2029")]}}atomEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}decimalEscapeAtom(){return{type:"GroupBackReference",value:this.positiveInteger()}}characterClassEscape(){let e,r=!1;switch(this.popChar()){case"d":e=ji;break;case"D":e=ji,r=!0;break;case"s":e=vy;break;case"S":e=vy,r=!0;break;case"w":e=Vi;break;case"W":e=Vi,r=!0;break}return Ca(e)?{type:"Set",value:e,complement:r}:qi()}controlEscapeAtom(){let e;switch(this.popChar()){case"f":e=q("\f");break;case"n":e=q(`
`);break;case"r":e=q("\r");break;case"t":e=q("	");break;case"v":e=q("\v");break}return Ca(e)?{type:"Character",value:e}:qi()}controlLetterEscapeAtom(){this.consumeChar("c");let e=this.popChar();if(/[a-zA-Z]/.test(e)===!1)throw Error("Invalid ");return{type:"Character",value:e.toUpperCase().charCodeAt(0)-64}}nulCharacterAtom(){return this.consumeChar("0"),{type:"Character",value:q("\0")}}hexEscapeSequenceAtom(){return this.consumeChar("x"),this.parseHexDigits(2)}regExpUnicodeEscapeSequenceAtom(){return this.consumeChar("u"),this.parseHexDigits(4)}identityEscapeAtom(){let e=this.popChar();return{type:"Character",value:q(e)}}classPatternCharacterAtom(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:let e=this.popChar();return{type:"Character",value:q(e)}}}characterClass(){let e=[],r=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),r=!0);this.isClassAtom();){let n=this.classAtom(),a=n.type==="Character";if(my(n)&&this.isRangeDash()){this.consumeChar("-");let o=this.classAtom(),i=o.type==="Character";if(my(o)){if(o.value<n.value)throw Error("Range out of order in character class");e.push({from:n.value,to:o.value})}else rl(n.value,e),e.push(q("-")),rl(o.value,e)}else rl(n.value,e)}return this.consumeChar("]"),{type:"Set",complement:r,value:e}}classAtom(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}}classEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:q("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}group(){let e=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),e=!1;break;default:this.groupIdx++;break}let r=this.disjunction();this.consumeChar(")");let n={type:"Group",capturing:e,value:r};return e&&(n.idx=this.groupIdx),n}positiveInteger(){let e=this.popChar();if(wP.test(e)===!1)throw Error("Expecting a positive integer");for(;nl.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}integerIncludingZero(){let e=this.popChar();if(nl.test(e)===!1)throw Error("Expecting an integer");for(;nl.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}patternCharacter(){let e=this.popChar();switch(e){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:q(e)}}}isRegExpFlag(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}}isRangeDash(){return this.peekChar()==="-"&&this.isClassAtom(1)}isDigit(){return nl.test(this.peekChar(0))}isClassAtom(e=0){switch(this.peekChar(e)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}isTerm(){return this.isAtom()||this.isAssertion()}isAtom(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}}isAssertion(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}}isQuantifier(){let e=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(e)}}isPatternCharacter(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}parseHexDigits(e){let r="";for(let a=0;a<e;a++){let o=this.popChar();if(vP.test(o)===!1)throw Error("Expecting a HexDecimal digits");r+=o}return{type:"Character",value:parseInt(r,16)}}peekChar(e=0){return this.input[this.idx+e]}popChar(){let e=this.peekChar(0);return this.consumeChar(void 0),e}consumeChar(e){if(e!==void 0&&this.input[this.idx]!==e)throw Error("Expected: '"+e+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++}loc(e){return{begin:e,end:this.idx}}};var Hr=class{visitChildren(e){for(let r in e){let n=e[r];e.hasOwnProperty(r)&&(n.type!==void 0?this.visit(n):Array.isArray(n)&&n.forEach(a=>{this.visit(a)},this))}}visit(e){switch(e.type){case"Pattern":this.visitPattern(e);break;case"Flags":this.visitFlags(e);break;case"Disjunction":this.visitDisjunction(e);break;case"Alternative":this.visitAlternative(e);break;case"StartAnchor":this.visitStartAnchor(e);break;case"EndAnchor":this.visitEndAnchor(e);break;case"WordBoundary":this.visitWordBoundary(e);break;case"NonWordBoundary":this.visitNonWordBoundary(e);break;case"Lookahead":this.visitLookahead(e);break;case"NegativeLookahead":this.visitNegativeLookahead(e);break;case"Character":this.visitCharacter(e);break;case"Set":this.visitSet(e);break;case"Group":this.visitGroup(e);break;case"GroupBackReference":this.visitGroupBackReference(e);break;case"Quantifier":this.visitQuantifier(e);break}this.visitChildren(e)}visitPattern(e){}visitFlags(e){}visitDisjunction(e){}visitAlternative(e){}visitStartAnchor(e){}visitEndAnchor(e){}visitWordBoundary(e){}visitNonWordBoundary(e){}visitLookahead(e){}visitNegativeLookahead(e){}visitCharacter(e){}visitSet(e){}visitGroup(e){}visitGroupBackReference(e){}visitQuantifier(e){}};var Sy=/\r?\n/gm,ow=new xa,wy=class extends Hr{constructor(){super(...arguments),this.isStarting=!0,this.endRegexpStack=[],this.multiline=!1}get endRegex(){return this.endRegexpStack.join("")}reset(e){this.multiline=!1,this.regex=e,this.startRegexp="",this.isStarting=!0,this.endRegexpStack=[]}visitGroup(e){e.quantifier&&(this.isStarting=!1,this.endRegexpStack=[])}visitCharacter(e){let r=String.fromCharCode(e.value);if(!this.multiline&&r===`
`&&(this.multiline=!0),e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{let n=ka(r);this.endRegexpStack.push(n),this.isStarting&&(this.startRegexp+=n)}}visitSet(e){if(!this.multiline){let r=this.regex.substring(e.loc.begin,e.loc.end),n=new RegExp(r);this.multiline=!!`
`.match(n)}if(e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{let r=this.regex.substring(e.loc.begin,e.loc.end);this.endRegexpStack.push(r),this.isStarting&&(this.startRegexp+=r)}}visitChildren(e){e.type==="Group"&&e.quantifier||super.visitChildren(e)}},ba=new wy;function SP(t){try{typeof t!="string"&&(t=t.source),t=`/${t}/`;let e=ow.pattern(t),r=[];for(let n of e.value.value)ba.reset(t),ba.visit(n),r.push({start:ba.startRegexp,end:ba.endRegex});return r}catch{return[]}}function Ay(t){try{return typeof t=="string"&&(t=new RegExp(t)),t=t.toString(),ba.reset(t),ba.visit(ow.pattern(t)),ba.multiline}catch{return!1}}function al(t){return(typeof t=="string"?new RegExp(t):t).test(" ")}function ka(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function $y(t){return Array.prototype.map.call(t,e=>/\w/.test(e)?`[${e.toLowerCase()}${e.toUpperCase()}]`:ka(e)).join("")}function Ty(t,e){let r=iw(t),n=e.match(r);return!!n&&n[0].length>0}function iw(t){typeof t=="string"&&(t=new RegExp(t));let e=t,r=t.source,n=0;function a(){let o="",i;function s(l){o+=r.substr(n,l),n+=l}function u(l){o+="(?:"+r.substr(n,l)+"|$)",n+=l}for(;n<r.length;)switch(r[n]){case"\\":switch(r[n+1]){case"c":u(3);break;case"x":u(4);break;case"u":e.unicode?r[n+2]==="{"?u(r.indexOf("}",n)-n+1):u(6):u(2);break;case"p":case"P":e.unicode?u(r.indexOf("}",n)-n+1):u(2);break;case"k":u(r.indexOf(">",n)-n+1);break;default:u(2);break}break;case"[":i=/\[(?:\\.|.)*?\]/g,i.lastIndex=n,i=i.exec(r)||[],u(i[0].length);break;case"|":case"^":case"$":case"*":case"+":case"?":s(1);break;case"{":i=/\{\d+,?\d*\}/g,i.lastIndex=n,i=i.exec(r),i?s(i[0].length):u(1);break;case"(":if(r[n+1]==="?")switch(r[n+2]){case":":o+="(?:",n+=3,o+=a()+"|$)";break;case"=":o+="(?=",n+=3,o+=a()+")";break;case"!":i=n,n+=3,a(),o+=r.substr(i,n-i);break;case"<":switch(r[n+3]){case"=":case"!":i=n,n+=4,a(),o+=r.substr(i,n-i);break;default:s(r.indexOf(">",n)-n+1),o+=a()+"|$)";break}break}else s(1),o+=a()+"|$)";break;case")":return++n,o;default:u(1);break}return o}return new RegExp(a(),t.flags)}function Yi(t){return t.rules.find(e=>Ue(e)&&e.entry)}function sw(t){return t.rules.filter(e=>Xt(e)&&e.hidden)}function Xi(t,e){let r=new Set,n=Yi(t);if(!n)return new Set(t.rules);let a=[n].concat(sw(t));for(let i of a)uw(i,r,e);let o=new Set;for(let i of t.rules)(r.has(i.name)||Xt(i)&&i.hidden)&&o.add(i);return o}function uw(t,e,r){e.add(t.name),Jt(t).forEach(n=>{if(Qt(n)||r&&Zu(n)){let a=n.rule.ref;a&&!e.has(a.name)&&uw(a,e,r)}})}function Qi(t){if(t.terminal)return t.terminal;if(t.type.ref){let e=sl(t.type.ref);return e?.terminal}}function by(t){return t.hidden&&!On(t).test(" ")}function po(t,e){return!t||!e?[]:ky(t,e,t.astNode,!0)}function Mn(t,e,r){if(!t||!e)return;let n=ky(t,e,t.astNode,!0);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}function ky(t,e,r,n){if(!n){let a=pr(t.grammarSource,Kt);if(a&&a.feature===e)return[t]}return Ft(t)&&t.astNode===r?t.content.flatMap(a=>ky(a,e,r,!1)):[]}function il(t,e){return t?Ry(t,e,t?.astNode):[]}function fo(t,e,r){if(!t)return;let n=Ry(t,e,t?.astNode);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}function Ry(t,e,r){if(t.astNode!==r)return[];if($t(t.grammarSource)&&t.grammarSource.value===e)return[t];let n=va(t).iterator(),a,o=[];do if(a=n.next(),!a.done){let i=a.value;i.astNode===r?$t(i.grammarSource)&&i.grammarSource.value===e&&o.push(i):n.prune()}while(!a.done);return o}function Ky(t){var e;let r=t.astNode;for(;r===((e=t.container)===null||e===void 0?void 0:e.astNode);){let n=pr(t.grammarSource,Kt);if(n)return n;t=t.container}}function sl(t){let e=t;return Xu(e)&&(Dr(e.$container)?e=e.$container.$container:Ue(e.$container)?e=e.$container:_n(e.$container)),lw(t,e,new Map)}function lw(t,e,r){var n;function a(o,i){let s;return pr(o,Kt)||(s=lw(i,i,r)),r.set(t,s),s}if(r.has(t))return r.get(t);r.set(t,void 0);for(let o of Jt(e)){if(Kt(o)&&o.feature.toLowerCase()==="name")return r.set(t,o),o;if(Qt(o)&&Ue(o.rule.ref))return a(o,o.rule.ref);if(Ju(o)&&(!((n=o.typeRef)===null||n===void 0)&&n.ref))return a(o,o.typeRef.ref)}}function cw(t){let e=t.$container;if(Sr(e)){let r=e.elements,n=r.indexOf(t);for(let a=n-1;a>=0;a--){let o=r[a];if(Dr(o))return o;{let i=Jt(r[a]).find(Dr);if(i)return i}}}if(Aa(e))return cw(e)}function Ra(t,e){return t==="?"||t==="*"||Sr(e)&&!!e.guardCondition}function Py(t){return t==="*"||t==="+"}function AP(t){return t==="+="}function Ji(t){return dw(t,new Set)}function dw(t,e){if(e.has(t))return!0;e.add(t);for(let r of Jt(t))if(Qt(r)){if(!r.rule.ref||Ue(r.rule.ref)&&!dw(r.rule.ref,e))return!1}else{if(Kt(r))return!1;if(Dr(r))return!1}return!!t.definition}function $P(t){return xy(t.type,new Set)}function xy(t,e){if(e.has(t))return!0;if(e.add(t),wf(t))return!1;if(Of(t))return!1;if(Hf(t))return t.types.every(r=>xy(r,e));if(Ju(t)){if(t.primitiveType!==void 0)return!0;if(t.stringType!==void 0)return!0;if(t.typeRef!==void 0){let r=t.typeRef.ref;return Bi(r)?xy(r.type,e):!1}else return!1}else return!1}function Ka(t){if(t.inferredType)return t.inferredType.name;if(t.dataType)return t.dataType;if(t.returnType){let e=t.returnType.ref;if(e){if(Ue(e))return e.name;if(Qu(e)||Bi(e))return e.name}}}function yn(t){var e;if(Ue(t))return Ji(t)?t.name:(e=Ka(t))!==null&&e!==void 0?e:t.name;if(Qu(t)||Bi(t)||zf(t))return t.name;if(Dr(t)){let r=pw(t);if(r)return r}else if(Xu(t))return t.name;throw new Error("Cannot get name of Unknown Type")}function pw(t){var e;if(t.inferredType)return t.inferredType.name;if(!((e=t.type)===null||e===void 0)&&e.ref)return yn(t.type.ref)}function Iy(t){var e,r,n;return Xt(t)?(r=(e=t.type)===null||e===void 0?void 0:e.name)!==null&&r!==void 0?r:"string":Ji(t)?t.name:(n=Ka(t))!==null&&n!==void 0?n:t.name}function On(t){let e={s:!1,i:!1,u:!1},r=yo(t.definition,e),n=Object.entries(e).filter(([,a])=>a).map(([a])=>a).join("");return new RegExp(r,n)}var Ey=/[\s\S]/.source;function yo(t,e){if(iy(t))return TP(t);if(uy(t))return CP(t);if(Vf(t))return kP(t);if(Zu(t)){let r=t.rule.ref;if(!r)throw new Error("Missing rule reference.");return fn(yo(r.definition),{cardinality:t.cardinality,lookahead:t.lookahead})}else{if(ty(t))return bP(t);if(py(t))return xP(t);if(ny(t)){let r=t.regex.lastIndexOf("/"),n=t.regex.substring(1,r),a=t.regex.substring(r+1);return e&&(e.i=a.includes("i"),e.s=a.includes("s"),e.u=a.includes("u")),fn(n,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}else{if(yy(t))return fn(Ey,{cardinality:t.cardinality,lookahead:t.lookahead});throw new Error(`Invalid terminal element: ${t?.$type}`)}}}function TP(t){return fn(t.elements.map(e=>yo(e)).join("|"),{cardinality:t.cardinality,lookahead:t.lookahead})}function CP(t){return fn(t.elements.map(e=>yo(e)).join(""),{cardinality:t.cardinality,lookahead:t.lookahead})}function xP(t){return fn(`${Ey}*?${yo(t.terminal)}`,{cardinality:t.cardinality,lookahead:t.lookahead})}function bP(t){return fn(`(?!${yo(t.terminal)})${Ey}*?`,{cardinality:t.cardinality,lookahead:t.lookahead})}function kP(t){return t.right?fn(`[${Cy(t.left)}-${Cy(t.right)}]`,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1}):fn(Cy(t.left),{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}function Cy(t){return ka(t.value)}function fn(t,e){var r;return(e.wrap!==!1||e.lookahead)&&(t=`(${(r=e.lookahead)!==null&&r!==void 0?r:""}${t})`),e.cardinality?`${t}${e.cardinality}`:t}function Dy(t){let e=[],r=t.Grammar;for(let n of r.rules)Xt(n)&&by(n)&&Ay(On(n))&&e.push(n.name);return{multilineCommentRules:e,nameRegexp:Bu}}var RP=typeof global=="object"&&global&&global.Object===Object&&global,ll=RP;var KP=typeof self=="object"&&self&&self.Object===Object&&self,PP=ll||KP||Function("return this")(),rt=PP;var IP=rt.Symbol,ft=IP;var fw=Object.prototype,EP=fw.hasOwnProperty,DP=fw.toString,Zi=ft?ft.toStringTag:void 0;function NP(t){var e=EP.call(t,Zi),r=t[Zi];try{t[Zi]=void 0;var n=!0}catch{}var a=DP.call(t);return n&&(e?t[Zi]=r:delete t[Zi]),a}var yw=NP;var _P=Object.prototype,MP=_P.toString;function OP(t){return MP.call(t)}var hw=OP;var zP="[object Null]",LP="[object Undefined]",gw=ft?ft.toStringTag:void 0;function FP(t){return t==null?t===void 0?LP:zP:gw&&gw in Object(t)?yw(t):hw(t)}var Gt=FP;function WP(t){return t!=null&&typeof t=="object"}var Ze=WP;var GP="[object Symbol]";function HP(t){return typeof t=="symbol"||Ze(t)&&Gt(t)==GP}var Br=HP;function BP(t,e){for(var r=-1,n=t==null?0:t.length,a=Array(n);++r<n;)a[r]=e(t[r],r,t);return a}var Ur=BP;var UP=Array.isArray,F=UP;var qP=1/0,mw=ft?ft.prototype:void 0,vw=mw?mw.toString:void 0;function ww(t){if(typeof t=="string")return t;if(F(t))return Ur(t,ww)+"";if(Br(t))return vw?vw.call(t):"";var e=t+"";return e=="0"&&1/t==-qP?"-0":e}var Sw=ww;var jP=/\s/;function VP(t){for(var e=t.length;e--&&jP.test(t.charAt(e)););return e}var Aw=VP;var YP=/^\s+/;function XP(t){return t&&t.slice(0,Aw(t)+1).replace(YP,"")}var $w=XP;function QP(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Le=QP;var Tw=NaN,JP=/^[-+]0x[0-9a-f]+$/i,ZP=/^0b[01]+$/i,eI=/^0o[0-7]+$/i,tI=parseInt;function rI(t){if(typeof t=="number")return t;if(Br(t))return Tw;if(Le(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Le(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=$w(t);var r=ZP.test(t);return r||eI.test(t)?tI(t.slice(2),r?2:8):JP.test(t)?Tw:+t}var Cw=rI;var xw=1/0,nI=17976931348623157e292;function aI(t){if(!t)return t===0?t:0;if(t=Cw(t),t===xw||t===-xw){var e=t<0?-1:1;return e*nI}return t===t?t:0}var bw=aI;function oI(t){var e=bw(t),r=e%1;return e===e?r?e-r:e:0}var qr=oI;function iI(t){return t}var er=iI;var sI="[object AsyncFunction]",uI="[object Function]",lI="[object GeneratorFunction]",cI="[object Proxy]";function dI(t){if(!Le(t))return!1;var e=Gt(t);return e==uI||e==lI||e==sI||e==cI}var Ht=dI;var pI=rt["__core-js_shared__"],cl=pI;var kw=function(){var t=/[^.]+$/.exec(cl&&cl.keys&&cl.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function fI(t){return!!kw&&kw in t}var Rw=fI;var yI=Function.prototype,hI=yI.toString;function gI(t){if(t!=null){try{return hI.call(t)}catch{}try{return t+""}catch{}}return""}var hn=gI;var mI=/[\\^$.*+?()[\]{}|]/g,vI=/^\[object .+?Constructor\]$/,wI=Function.prototype,SI=Object.prototype,AI=wI.toString,$I=SI.hasOwnProperty,TI=RegExp("^"+AI.call($I).replace(mI,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function CI(t){if(!Le(t)||Rw(t))return!1;var e=Ht(t)?TI:vI;return e.test(hn(t))}var Kw=CI;function xI(t,e){return t?.[e]}var Pw=xI;function bI(t,e){var r=Pw(t,e);return Kw(r)?r:void 0}var tr=bI;var kI=tr(rt,"WeakMap"),dl=kI;var Iw=Object.create,RI=function(){function t(){}return function(e){if(!Le(e))return{};if(Iw)return Iw(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),Ew=RI;function KI(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}var Dw=KI;function PI(){}var Fe=PI;function II(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}var Nw=II;var EI=800,DI=16,NI=Date.now;function _I(t){var e=0,r=0;return function(){var n=NI(),a=DI-(n-r);if(r=n,a>0){if(++e>=EI)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var _w=_I;function MI(t){return function(){return t}}var Mw=MI;var OI=function(){try{var t=tr(Object,"defineProperty");return t({},"",{}),t}catch{}}(),ho=OI;var zI=ho?function(t,e){return ho(t,"toString",{configurable:!0,enumerable:!1,value:Mw(e),writable:!0})}:er,Ow=zI;var LI=_w(Ow),zw=LI;function FI(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}var pl=FI;function WI(t,e,r,n){for(var a=t.length,o=r+(n?1:-1);n?o--:++o<a;)if(e(t[o],o,t))return o;return-1}var fl=WI;function GI(t){return t!==t}var Lw=GI;function HI(t,e,r){for(var n=r-1,a=t.length;++n<a;)if(t[n]===e)return n;return-1}var Fw=HI;function BI(t,e,r){return e===e?Fw(t,e,r):fl(t,Lw,r)}var go=BI;function UI(t,e){var r=t==null?0:t.length;return!!r&&go(t,e,0)>-1}var yl=UI;var qI=9007199254740991,jI=/^(?:0|[1-9]\d*)$/;function VI(t,e){var r=typeof t;return e=e??qI,!!e&&(r=="number"||r!="symbol"&&jI.test(t))&&t>-1&&t%1==0&&t<e}var zn=VI;function YI(t,e,r){e=="__proto__"&&ho?ho(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}var mo=YI;function XI(t,e){return t===e||t!==t&&e!==e}var jr=XI;var QI=Object.prototype,JI=QI.hasOwnProperty;function ZI(t,e,r){var n=t[e];(!(JI.call(t,e)&&jr(n,r))||r===void 0&&!(e in t))&&mo(t,e,r)}var Ln=ZI;function eE(t,e,r,n){var a=!r;r||(r={});for(var o=-1,i=e.length;++o<i;){var s=e[o],u=n?n(r[s],t[s],s,r,t):void 0;u===void 0&&(u=t[s]),a?mo(r,s,u):Ln(r,s,u)}return r}var Vr=eE;var Ww=Math.max;function tE(t,e,r){return e=Ww(e===void 0?t.length-1:e,0),function(){for(var n=arguments,a=-1,o=Ww(n.length-e,0),i=Array(o);++a<o;)i[a]=n[e+a];a=-1;for(var s=Array(e+1);++a<e;)s[a]=n[a];return s[e]=r(i),Dw(t,this,s)}}var Gw=tE;function rE(t,e){return zw(Gw(t,e,er),t+"")}var vo=rE;var nE=9007199254740991;function aE(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=nE}var wo=aE;function oE(t){return t!=null&&wo(t.length)&&!Ht(t)}var nt=oE;function iE(t,e,r){if(!Le(r))return!1;var n=typeof e;return(n=="number"?nt(r)&&zn(e,r.length):n=="string"&&e in r)?jr(r[e],t):!1}var Fn=iE;function sE(t){return vo(function(e,r){var n=-1,a=r.length,o=a>1?r[a-1]:void 0,i=a>2?r[2]:void 0;for(o=t.length>3&&typeof o=="function"?(a--,o):void 0,i&&Fn(r[0],r[1],i)&&(o=a<3?void 0:o,a=1),e=Object(e);++n<a;){var s=r[n];s&&t(e,s,n,o)}return e})}var Hw=sE;var uE=Object.prototype;function lE(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||uE;return t===r}var Yr=lE;function cE(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}var Bw=cE;var dE="[object Arguments]";function pE(t){return Ze(t)&&Gt(t)==dE}var Ny=pE;var Uw=Object.prototype,fE=Uw.hasOwnProperty,yE=Uw.propertyIsEnumerable,hE=Ny(function(){return arguments}())?Ny:function(t){return Ze(t)&&fE.call(t,"callee")&&!yE.call(t,"callee")},Wn=hE;function gE(){return!1}var qw=gE;var Yw=typeof exports=="object"&&exports&&!exports.nodeType&&exports,jw=Yw&&typeof module=="object"&&module&&!module.nodeType&&module,mE=jw&&jw.exports===Yw,Vw=mE?rt.Buffer:void 0,vE=Vw?Vw.isBuffer:void 0,wE=vE||qw,gn=wE;var SE="[object Arguments]",AE="[object Array]",$E="[object Boolean]",TE="[object Date]",CE="[object Error]",xE="[object Function]",bE="[object Map]",kE="[object Number]",RE="[object Object]",KE="[object RegExp]",PE="[object Set]",IE="[object String]",EE="[object WeakMap]",DE="[object ArrayBuffer]",NE="[object DataView]",_E="[object Float32Array]",ME="[object Float64Array]",OE="[object Int8Array]",zE="[object Int16Array]",LE="[object Int32Array]",FE="[object Uint8Array]",WE="[object Uint8ClampedArray]",GE="[object Uint16Array]",HE="[object Uint32Array]",Pe={};Pe[_E]=Pe[ME]=Pe[OE]=Pe[zE]=Pe[LE]=Pe[FE]=Pe[WE]=Pe[GE]=Pe[HE]=!0;Pe[SE]=Pe[AE]=Pe[DE]=Pe[$E]=Pe[NE]=Pe[TE]=Pe[CE]=Pe[xE]=Pe[bE]=Pe[kE]=Pe[RE]=Pe[KE]=Pe[PE]=Pe[IE]=Pe[EE]=!1;function BE(t){return Ze(t)&&wo(t.length)&&!!Pe[Gt(t)]}var Xw=BE;function UE(t){return function(e){return t(e)}}var Xr=UE;var Qw=typeof exports=="object"&&exports&&!exports.nodeType&&exports,es=Qw&&typeof module=="object"&&module&&!module.nodeType&&module,qE=es&&es.exports===Qw,_y=qE&&ll.process,jE=function(){try{var t=es&&es.require&&es.require("util").types;return t||_y&&_y.binding&&_y.binding("util")}catch{}}(),Ar=jE;var Jw=Ar&&Ar.isTypedArray,VE=Jw?Xr(Jw):Xw,So=VE;var YE=Object.prototype,XE=YE.hasOwnProperty;function QE(t,e){var r=F(t),n=!r&&Wn(t),a=!r&&!n&&gn(t),o=!r&&!n&&!a&&So(t),i=r||n||a||o,s=i?Bw(t.length,String):[],u=s.length;for(var l in t)(e||XE.call(t,l))&&!(i&&(l=="length"||a&&(l=="offset"||l=="parent")||o&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||zn(l,u)))&&s.push(l);return s}var hl=QE;function JE(t,e){return function(r){return t(e(r))}}var gl=JE;var ZE=gl(Object.keys,Object),Zw=ZE;var eD=Object.prototype,tD=eD.hasOwnProperty;function rD(t){if(!Yr(t))return Zw(t);var e=[];for(var r in Object(t))tD.call(t,r)&&r!="constructor"&&e.push(r);return e}var ml=rD;function nD(t){return nt(t)?hl(t):ml(t)}var Ae=nD;var aD=Object.prototype,oD=aD.hasOwnProperty,iD=Hw(function(t,e){if(Yr(e)||nt(e)){Vr(e,Ae(e),t);return}for(var r in e)oD.call(e,r)&&Ln(t,r,e[r])}),Tt=iD;function sD(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var eS=sD;var uD=Object.prototype,lD=uD.hasOwnProperty;function cD(t){if(!Le(t))return eS(t);var e=Yr(t),r=[];for(var n in t)n=="constructor"&&(e||!lD.call(t,n))||r.push(n);return r}var tS=cD;function dD(t){return nt(t)?hl(t,!0):tS(t)}var Gn=dD;var pD=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,fD=/^\w*$/;function yD(t,e){if(F(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||Br(t)?!0:fD.test(t)||!pD.test(t)||e!=null&&t in Object(e)}var Ao=yD;var hD=tr(Object,"create"),mn=hD;function gD(){this.__data__=mn?mn(null):{},this.size=0}var rS=gD;function mD(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var nS=mD;var vD="__lodash_hash_undefined__",wD=Object.prototype,SD=wD.hasOwnProperty;function AD(t){var e=this.__data__;if(mn){var r=e[t];return r===vD?void 0:r}return SD.call(e,t)?e[t]:void 0}var aS=AD;var $D=Object.prototype,TD=$D.hasOwnProperty;function CD(t){var e=this.__data__;return mn?e[t]!==void 0:TD.call(e,t)}var oS=CD;var xD="__lodash_hash_undefined__";function bD(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=mn&&e===void 0?xD:e,this}var iS=bD;function $o(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}$o.prototype.clear=rS;$o.prototype.delete=nS;$o.prototype.get=aS;$o.prototype.has=oS;$o.prototype.set=iS;var My=$o;function kD(){this.__data__=[],this.size=0}var sS=kD;function RD(t,e){for(var r=t.length;r--;)if(jr(t[r][0],e))return r;return-1}var Hn=RD;var KD=Array.prototype,PD=KD.splice;function ID(t){var e=this.__data__,r=Hn(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():PD.call(e,r,1),--this.size,!0}var uS=ID;function ED(t){var e=this.__data__,r=Hn(e,t);return r<0?void 0:e[r][1]}var lS=ED;function DD(t){return Hn(this.__data__,t)>-1}var cS=DD;function ND(t,e){var r=this.__data__,n=Hn(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}var dS=ND;function To(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}To.prototype.clear=sS;To.prototype.delete=uS;To.prototype.get=lS;To.prototype.has=cS;To.prototype.set=dS;var Bn=To;var _D=tr(rt,"Map"),Un=_D;function MD(){this.size=0,this.__data__={hash:new My,map:new(Un||Bn),string:new My}}var pS=MD;function OD(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var fS=OD;function zD(t,e){var r=t.__data__;return fS(e)?r[typeof e=="string"?"string":"hash"]:r.map}var qn=zD;function LD(t){var e=qn(this,t).delete(t);return this.size-=e?1:0,e}var yS=LD;function FD(t){return qn(this,t).get(t)}var hS=FD;function WD(t){return qn(this,t).has(t)}var gS=WD;function GD(t,e){var r=qn(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}var mS=GD;function Co(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Co.prototype.clear=pS;Co.prototype.delete=yS;Co.prototype.get=hS;Co.prototype.has=gS;Co.prototype.set=mS;var Pa=Co;var HD="Expected a function";function Oy(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(HD);var r=function(){var n=arguments,a=e?e.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=t.apply(this,n);return r.cache=o.set(a,i)||o,i};return r.cache=new(Oy.Cache||Pa),r}Oy.Cache=Pa;var vS=Oy;var BD=500;function UD(t){var e=vS(t,function(n){return r.size===BD&&r.clear(),n}),r=e.cache;return e}var wS=UD;var qD=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,jD=/\\(\\)?/g,VD=wS(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(qD,function(r,n,a,o){e.push(a?o.replace(jD,"$1"):n||r)}),e}),SS=VD;function YD(t){return t==null?"":Sw(t)}var AS=YD;function XD(t,e){return F(t)?t:Ao(t,e)?[t]:SS(AS(t))}var jn=XD;var QD=1/0;function JD(t){if(typeof t=="string"||Br(t))return t;var e=t+"";return e=="0"&&1/t==-QD?"-0":e}var Qr=JD;function ZD(t,e){e=jn(e,t);for(var r=0,n=e.length;t!=null&&r<n;)t=t[Qr(e[r++])];return r&&r==n?t:void 0}var xo=ZD;function eN(t,e,r){var n=t==null?void 0:xo(t,e);return n===void 0?r:n}var $S=eN;function tN(t,e){for(var r=-1,n=e.length,a=t.length;++r<n;)t[a+r]=e[r];return t}var bo=tN;var TS=ft?ft.isConcatSpreadable:void 0;function rN(t){return F(t)||Wn(t)||!!(TS&&t&&t[TS])}var CS=rN;function xS(t,e,r,n,a){var o=-1,i=t.length;for(r||(r=CS),a||(a=[]);++o<i;){var s=t[o];e>0&&r(s)?e>1?xS(s,e-1,r,n,a):bo(a,s):n||(a[a.length]=s)}return a}var ko=xS;function nN(t){var e=t==null?0:t.length;return e?ko(t,1):[]}var et=nN;var aN=gl(Object.getPrototypeOf,Object),vl=aN;function oN(t,e,r){var n=-1,a=t.length;e<0&&(e=-e>a?0:a+e),r=r>a?a:r,r<0&&(r+=a),a=e>r?0:r-e>>>0,e>>>=0;for(var o=Array(a);++n<a;)o[n]=t[n+e];return o}var wl=oN;function iN(t,e,r,n){var a=-1,o=t==null?0:t.length;for(n&&o&&(r=t[++a]);++a<o;)r=e(r,t[a],a,t);return r}var bS=iN;function sN(){this.__data__=new Bn,this.size=0}var kS=sN;function uN(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}var RS=uN;function lN(t){return this.__data__.get(t)}var KS=lN;function cN(t){return this.__data__.has(t)}var PS=cN;var dN=200;function pN(t,e){var r=this.__data__;if(r instanceof Bn){var n=r.__data__;if(!Un||n.length<dN-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new Pa(n)}return r.set(t,e),this.size=r.size,this}var IS=pN;function Ro(t){var e=this.__data__=new Bn(t);this.size=e.size}Ro.prototype.clear=kS;Ro.prototype.delete=RS;Ro.prototype.get=KS;Ro.prototype.has=PS;Ro.prototype.set=IS;var Vn=Ro;function fN(t,e){return t&&Vr(e,Ae(e),t)}var ES=fN;function yN(t,e){return t&&Vr(e,Gn(e),t)}var DS=yN;var OS=typeof exports=="object"&&exports&&!exports.nodeType&&exports,NS=OS&&typeof module=="object"&&module&&!module.nodeType&&module,hN=NS&&NS.exports===OS,_S=hN?rt.Buffer:void 0,MS=_S?_S.allocUnsafe:void 0;function gN(t,e){if(e)return t.slice();var r=t.length,n=MS?MS(r):new t.constructor(r);return t.copy(n),n}var zS=gN;function mN(t,e){for(var r=-1,n=t==null?0:t.length,a=0,o=[];++r<n;){var i=t[r];e(i,r,t)&&(o[a++]=i)}return o}var Ko=mN;function vN(){return[]}var Sl=vN;var wN=Object.prototype,SN=wN.propertyIsEnumerable,LS=Object.getOwnPropertySymbols,AN=LS?function(t){return t==null?[]:(t=Object(t),Ko(LS(t),function(e){return SN.call(t,e)}))}:Sl,Po=AN;function $N(t,e){return Vr(t,Po(t),e)}var FS=$N;var TN=Object.getOwnPropertySymbols,CN=TN?function(t){for(var e=[];t;)bo(e,Po(t)),t=vl(t);return e}:Sl,Al=CN;function xN(t,e){return Vr(t,Al(t),e)}var WS=xN;function bN(t,e,r){var n=e(t);return F(t)?n:bo(n,r(t))}var $l=bN;function kN(t){return $l(t,Ae,Po)}var ts=kN;function RN(t){return $l(t,Gn,Al)}var Tl=RN;var KN=tr(rt,"DataView"),Cl=KN;var PN=tr(rt,"Promise"),xl=PN;var IN=tr(rt,"Set"),Yn=IN;var GS="[object Map]",EN="[object Object]",HS="[object Promise]",BS="[object Set]",US="[object WeakMap]",qS="[object DataView]",DN=hn(Cl),NN=hn(Un),_N=hn(xl),MN=hn(Yn),ON=hn(dl),Ia=Gt;(Cl&&Ia(new Cl(new ArrayBuffer(1)))!=qS||Un&&Ia(new Un)!=GS||xl&&Ia(xl.resolve())!=HS||Yn&&Ia(new Yn)!=BS||dl&&Ia(new dl)!=US)&&(Ia=function(t){var e=Gt(t),r=e==EN?t.constructor:void 0,n=r?hn(r):"";if(n)switch(n){case DN:return qS;case NN:return GS;case _N:return HS;case MN:return BS;case ON:return US}return e});var _r=Ia;var zN=Object.prototype,LN=zN.hasOwnProperty;function FN(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&LN.call(t,"index")&&(r.index=t.index,r.input=t.input),r}var jS=FN;var WN=rt.Uint8Array,Io=WN;function GN(t){var e=new t.constructor(t.byteLength);return new Io(e).set(new Io(t)),e}var Eo=GN;function HN(t,e){var r=e?Eo(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var VS=HN;var BN=/\w*$/;function UN(t){var e=new t.constructor(t.source,BN.exec(t));return e.lastIndex=t.lastIndex,e}var YS=UN;var XS=ft?ft.prototype:void 0,QS=XS?XS.valueOf:void 0;function qN(t){return QS?Object(QS.call(t)):{}}var JS=qN;function jN(t,e){var r=e?Eo(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var ZS=jN;var VN="[object Boolean]",YN="[object Date]",XN="[object Map]",QN="[object Number]",JN="[object RegExp]",ZN="[object Set]",e_="[object String]",t_="[object Symbol]",r_="[object ArrayBuffer]",n_="[object DataView]",a_="[object Float32Array]",o_="[object Float64Array]",i_="[object Int8Array]",s_="[object Int16Array]",u_="[object Int32Array]",l_="[object Uint8Array]",c_="[object Uint8ClampedArray]",d_="[object Uint16Array]",p_="[object Uint32Array]";function f_(t,e,r){var n=t.constructor;switch(e){case r_:return Eo(t);case VN:case YN:return new n(+t);case n_:return VS(t,r);case a_:case o_:case i_:case s_:case u_:case l_:case c_:case d_:case p_:return ZS(t,r);case XN:return new n;case QN:case e_:return new n(t);case JN:return YS(t);case ZN:return new n;case t_:return JS(t)}}var eA=f_;function y_(t){return typeof t.constructor=="function"&&!Yr(t)?Ew(vl(t)):{}}var tA=y_;var h_="[object Map]";function g_(t){return Ze(t)&&_r(t)==h_}var rA=g_;var nA=Ar&&Ar.isMap,m_=nA?Xr(nA):rA,aA=m_;var v_="[object Set]";function w_(t){return Ze(t)&&_r(t)==v_}var oA=w_;var iA=Ar&&Ar.isSet,S_=iA?Xr(iA):oA,sA=S_;var A_=1,$_=2,T_=4,uA="[object Arguments]",C_="[object Array]",x_="[object Boolean]",b_="[object Date]",k_="[object Error]",lA="[object Function]",R_="[object GeneratorFunction]",K_="[object Map]",P_="[object Number]",cA="[object Object]",I_="[object RegExp]",E_="[object Set]",D_="[object String]",N_="[object Symbol]",__="[object WeakMap]",M_="[object ArrayBuffer]",O_="[object DataView]",z_="[object Float32Array]",L_="[object Float64Array]",F_="[object Int8Array]",W_="[object Int16Array]",G_="[object Int32Array]",H_="[object Uint8Array]",B_="[object Uint8ClampedArray]",U_="[object Uint16Array]",q_="[object Uint32Array]",$e={};$e[uA]=$e[C_]=$e[M_]=$e[O_]=$e[x_]=$e[b_]=$e[z_]=$e[L_]=$e[F_]=$e[W_]=$e[G_]=$e[K_]=$e[P_]=$e[cA]=$e[I_]=$e[E_]=$e[D_]=$e[N_]=$e[H_]=$e[B_]=$e[U_]=$e[q_]=!0;$e[k_]=$e[lA]=$e[__]=!1;function bl(t,e,r,n,a,o){var i,s=e&A_,u=e&$_,l=e&T_;if(r&&(i=a?r(t,n,a,o):r(t)),i!==void 0)return i;if(!Le(t))return t;var c=F(t);if(c){if(i=jS(t),!s)return Nw(t,i)}else{var d=_r(t),p=d==lA||d==R_;if(gn(t))return zS(t,s);if(d==cA||d==uA||p&&!a){if(i=u||p?{}:tA(t),!s)return u?WS(t,DS(i,t)):FS(t,ES(i,t))}else{if(!$e[d])return a?t:{};i=eA(t,d,s)}}o||(o=new Vn);var y=o.get(t);if(y)return y;o.set(t,i),sA(t)?t.forEach(function(T){i.add(bl(T,e,r,T,t,o))}):aA(t)&&t.forEach(function(T,A){i.set(A,bl(T,e,r,A,t,o))});var v=l?u?Tl:ts:u?Gn:Ae,S=c?void 0:v(t);return pl(S||t,function(T,A){S&&(A=T,T=t[A]),Ln(i,A,bl(T,e,r,A,t,o))}),i}var dA=bl;var j_=4;function V_(t){return dA(t,j_)}var Te=V_;function Y_(t){for(var e=-1,r=t==null?0:t.length,n=0,a=[];++e<r;){var o=t[e];o&&(a[n++]=o)}return a}var Jr=Y_;var X_="__lodash_hash_undefined__";function Q_(t){return this.__data__.set(t,X_),this}var pA=Q_;function J_(t){return this.__data__.has(t)}var fA=J_;function kl(t){var e=-1,r=t==null?0:t.length;for(this.__data__=new Pa;++e<r;)this.add(t[e])}kl.prototype.add=kl.prototype.push=pA;kl.prototype.has=fA;var Do=kl;function Z_(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}var Rl=Z_;function eM(t,e){return t.has(e)}var No=eM;var tM=1,rM=2;function nM(t,e,r,n,a,o){var i=r&tM,s=t.length,u=e.length;if(s!=u&&!(i&&u>s))return!1;var l=o.get(t),c=o.get(e);if(l&&c)return l==e&&c==t;var d=-1,p=!0,y=r&rM?new Do:void 0;for(o.set(t,e),o.set(e,t);++d<s;){var v=t[d],S=e[d];if(n)var T=i?n(S,v,d,e,t,o):n(v,S,d,t,e,o);if(T!==void 0){if(T)continue;p=!1;break}if(y){if(!Rl(e,function(A,g){if(!No(y,g)&&(v===A||a(v,A,r,n,o)))return y.push(g)})){p=!1;break}}else if(!(v===S||a(v,S,r,n,o))){p=!1;break}}return o.delete(t),o.delete(e),p}var Kl=nM;function aM(t){var e=-1,r=Array(t.size);return t.forEach(function(n,a){r[++e]=[a,n]}),r}var yA=aM;function oM(t){var e=-1,r=Array(t.size);return t.forEach(function(n){r[++e]=n}),r}var _o=oM;var iM=1,sM=2,uM="[object Boolean]",lM="[object Date]",cM="[object Error]",dM="[object Map]",pM="[object Number]",fM="[object RegExp]",yM="[object Set]",hM="[object String]",gM="[object Symbol]",mM="[object ArrayBuffer]",vM="[object DataView]",hA=ft?ft.prototype:void 0,zy=hA?hA.valueOf:void 0;function wM(t,e,r,n,a,o,i){switch(r){case vM:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case mM:return!(t.byteLength!=e.byteLength||!o(new Io(t),new Io(e)));case uM:case lM:case pM:return jr(+t,+e);case cM:return t.name==e.name&&t.message==e.message;case fM:case hM:return t==e+"";case dM:var s=yA;case yM:var u=n&iM;if(s||(s=_o),t.size!=e.size&&!u)return!1;var l=i.get(t);if(l)return l==e;n|=sM,i.set(t,e);var c=Kl(s(t),s(e),n,a,o,i);return i.delete(t),c;case gM:if(zy)return zy.call(t)==zy.call(e)}return!1}var gA=wM;var SM=1,AM=Object.prototype,$M=AM.hasOwnProperty;function TM(t,e,r,n,a,o){var i=r&SM,s=ts(t),u=s.length,l=ts(e),c=l.length;if(u!=c&&!i)return!1;for(var d=u;d--;){var p=s[d];if(!(i?p in e:$M.call(e,p)))return!1}var y=o.get(t),v=o.get(e);if(y&&v)return y==e&&v==t;var S=!0;o.set(t,e),o.set(e,t);for(var T=i;++d<u;){p=s[d];var A=t[p],g=e[p];if(n)var f=i?n(g,A,p,e,t,o):n(A,g,p,t,e,o);if(!(f===void 0?A===g||a(A,g,r,n,o):f)){S=!1;break}T||(T=p=="constructor")}if(S&&!T){var $=t.constructor,P=e.constructor;$!=P&&"constructor"in t&&"constructor"in e&&!(typeof $=="function"&&$ instanceof $&&typeof P=="function"&&P instanceof P)&&(S=!1)}return o.delete(t),o.delete(e),S}var mA=TM;var CM=1,vA="[object Arguments]",wA="[object Array]",Pl="[object Object]",xM=Object.prototype,SA=xM.hasOwnProperty;function bM(t,e,r,n,a,o){var i=F(t),s=F(e),u=i?wA:_r(t),l=s?wA:_r(e);u=u==vA?Pl:u,l=l==vA?Pl:l;var c=u==Pl,d=l==Pl,p=u==l;if(p&&gn(t)){if(!gn(e))return!1;i=!0,c=!1}if(p&&!c)return o||(o=new Vn),i||So(t)?Kl(t,e,r,n,a,o):gA(t,e,u,r,n,a,o);if(!(r&CM)){var y=c&&SA.call(t,"__wrapped__"),v=d&&SA.call(e,"__wrapped__");if(y||v){var S=y?t.value():t,T=v?e.value():e;return o||(o=new Vn),a(S,T,r,n,o)}}return p?(o||(o=new Vn),mA(t,e,r,n,a,o)):!1}var AA=bM;function $A(t,e,r,n,a){return t===e?!0:t==null||e==null||!Ze(t)&&!Ze(e)?t!==t&&e!==e:AA(t,e,r,n,$A,a)}var Il=$A;var kM=1,RM=2;function KM(t,e,r,n){var a=r.length,o=a,i=!n;if(t==null)return!o;for(t=Object(t);a--;){var s=r[a];if(i&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++a<o;){s=r[a];var u=s[0],l=t[u],c=s[1];if(i&&s[2]){if(l===void 0&&!(u in t))return!1}else{var d=new Vn;if(n)var p=n(l,c,u,t,e,d);if(!(p===void 0?Il(c,l,kM|RM,n,d):p))return!1}}return!0}var TA=KM;function PM(t){return t===t&&!Le(t)}var El=PM;function IM(t){for(var e=Ae(t),r=e.length;r--;){var n=e[r],a=t[n];e[r]=[n,a,El(a)]}return e}var CA=IM;function EM(t,e){return function(r){return r==null?!1:r[t]===e&&(e!==void 0||t in Object(r))}}var Dl=EM;function DM(t){var e=CA(t);return e.length==1&&e[0][2]?Dl(e[0][0],e[0][1]):function(r){return r===t||TA(r,t,e)}}var xA=DM;function NM(t,e){return t!=null&&e in Object(t)}var bA=NM;function _M(t,e,r){e=jn(e,t);for(var n=-1,a=e.length,o=!1;++n<a;){var i=Qr(e[n]);if(!(o=t!=null&&r(t,i)))break;t=t[i]}return o||++n!=a?o:(a=t==null?0:t.length,!!a&&wo(a)&&zn(i,a)&&(F(t)||Wn(t)))}var Nl=_M;function MM(t,e){return t!=null&&Nl(t,e,bA)}var kA=MM;var OM=1,zM=2;function LM(t,e){return Ao(t)&&El(e)?Dl(Qr(t),e):function(r){var n=$S(r,t);return n===void 0&&n===e?kA(r,t):Il(e,n,OM|zM)}}var RA=LM;function FM(t){return function(e){return e?.[t]}}var KA=FM;function WM(t){return function(e){return xo(e,t)}}var PA=WM;function GM(t){return Ao(t)?KA(Qr(t)):PA(t)}var IA=GM;function HM(t){return typeof t=="function"?t:t==null?er:typeof t=="object"?F(t)?RA(t[0],t[1]):xA(t):IA(t)}var qe=HM;function BM(t,e,r,n){for(var a=-1,o=t==null?0:t.length;++a<o;){var i=t[a];e(n,i,r(i),t)}return n}var EA=BM;function UM(t){return function(e,r,n){for(var a=-1,o=Object(e),i=n(e),s=i.length;s--;){var u=i[t?s:++a];if(r(o[u],u,o)===!1)break}return e}}var DA=UM;var qM=DA(),NA=qM;function jM(t,e){return t&&NA(t,e,Ae)}var _A=jM;function VM(t,e){return function(r,n){if(r==null)return r;if(!nt(r))return t(r,n);for(var a=r.length,o=e?a:-1,i=Object(r);(e?o--:++o<a)&&n(i[o],o,i)!==!1;);return r}}var MA=VM;var YM=MA(_A),rr=YM;function XM(t,e,r,n){return rr(t,function(a,o,i){e(n,a,r(a),i)}),n}var OA=XM;function QM(t,e){return function(r,n){var a=F(r)?EA:OA,o=e?e():{};return a(r,t,qe(n,2),o)}}var zA=QM;var LA=Object.prototype,JM=LA.hasOwnProperty,ZM=vo(function(t,e){t=Object(t);var r=-1,n=e.length,a=n>2?e[2]:void 0;for(a&&Fn(e[0],e[1],a)&&(n=1);++r<n;)for(var o=e[r],i=Gn(o),s=-1,u=i.length;++s<u;){var l=i[s],c=t[l];(c===void 0||jr(c,LA[l])&&!JM.call(t,l))&&(t[l]=o[l])}return t}),Mo=ZM;function eO(t){return Ze(t)&&nt(t)}var Ly=eO;function tO(t,e,r){for(var n=-1,a=t==null?0:t.length;++n<a;)if(r(e,t[n]))return!0;return!1}var _l=tO;var rO=200;function nO(t,e,r,n){var a=-1,o=yl,i=!0,s=t.length,u=[],l=e.length;if(!s)return u;r&&(e=Ur(e,Xr(r))),n?(o=_l,i=!1):e.length>=rO&&(o=No,i=!1,e=new Do(e));e:for(;++a<s;){var c=t[a],d=r==null?c:r(c);if(c=n||c!==0?c:0,i&&d===d){for(var p=l;p--;)if(e[p]===d)continue e;u.push(c)}else o(e,d,n)||u.push(c)}return u}var FA=nO;var aO=vo(function(t,e){return Ly(t)?FA(t,ko(e,1,Ly,!0)):[]}),Xn=aO;function oO(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var Zr=oO;function iO(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:qr(e),wl(t,e<0?0:e,n)):[]}var tt=iO;function sO(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:qr(e),e=n-e,wl(t,0,e<0?0:e)):[]}var vn=sO;function uO(t){return typeof t=="function"?t:er}var WA=uO;function lO(t,e){var r=F(t)?pl:rr;return r(t,WA(e))}var _=lO;function cO(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(!e(t[r],r,t))return!1;return!0}var GA=cO;function dO(t,e){var r=!0;return rr(t,function(n,a,o){return r=!!e(n,a,o),r}),r}var HA=dO;function pO(t,e,r){var n=F(t)?GA:HA;return r&&Fn(t,e,r)&&(e=void 0),n(t,qe(e,3))}var Pt=pO;function fO(t,e){var r=[];return rr(t,function(n,a,o){e(n,a,o)&&r.push(n)}),r}var Ml=fO;function yO(t,e){var r=F(t)?Ko:Ml;return r(t,qe(e,3))}var yt=yO;function hO(t){return function(e,r,n){var a=Object(e);if(!nt(e)){var o=qe(r,3);e=Ae(e),r=function(s){return o(a[s],s,a)}}var i=t(e,r,n);return i>-1?a[o?e[i]:i]:void 0}}var BA=hO;var gO=Math.max;function mO(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var a=r==null?0:qr(r);return a<0&&(a=gO(n+a,0)),fl(t,qe(e,3),a)}var UA=mO;var vO=BA(UA),en=vO;function wO(t){return t&&t.length?t[0]:void 0}var ht=wO;function SO(t,e){var r=-1,n=nt(t)?Array(t.length):[];return rr(t,function(a,o,i){n[++r]=e(a,o,i)}),n}var qA=SO;function AO(t,e){var r=F(t)?Ur:qA;return r(t,qe(e,3))}var I=AO;function $O(t,e){return ko(I(t,e),1)}var Ct=$O;var TO=Object.prototype,CO=TO.hasOwnProperty,xO=zA(function(t,e,r){CO.call(t,r)?t[r].push(e):mo(t,r,[e])}),Fy=xO;var bO=Object.prototype,kO=bO.hasOwnProperty;function RO(t,e){return t!=null&&kO.call(t,e)}var jA=RO;function KO(t,e){return t!=null&&Nl(t,e,jA)}var z=KO;var PO="[object String]";function IO(t){return typeof t=="string"||!F(t)&&Ze(t)&&Gt(t)==PO}var lt=IO;function EO(t,e){return Ur(e,function(r){return t[r]})}var VA=EO;function DO(t){return t==null?[]:VA(t,Ae(t))}var me=DO;var NO=Math.max;function _O(t,e,r,n){t=nt(t)?t:me(t),r=r&&!n?qr(r):0;var a=t.length;return r<0&&(r=NO(a+r,0)),lt(t)?r<=a&&t.indexOf(e,r)>-1:!!a&&go(t,e,r)>-1}var Ee=_O;var MO=Math.max;function OO(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var a=r==null?0:qr(r);return a<0&&(a=MO(n+a,0)),go(t,e,a)}var Ol=OO;var zO="[object Map]",LO="[object Set]",FO=Object.prototype,WO=FO.hasOwnProperty;function GO(t){if(t==null)return!0;if(nt(t)&&(F(t)||typeof t=="string"||typeof t.splice=="function"||gn(t)||So(t)||Wn(t)))return!t.length;var e=_r(t);if(e==zO||e==LO)return!t.size;if(Yr(t))return!ml(t).length;for(var r in t)if(WO.call(t,r))return!1;return!0}var Z=GO;var HO="[object RegExp]";function BO(t){return Ze(t)&&Gt(t)==HO}var YA=BO;var XA=Ar&&Ar.isRegExp,UO=XA?Xr(XA):YA,$r=UO;function qO(t){return t===void 0}var It=qO;function jO(t,e){return t<e}var QA=jO;function VO(t,e,r){for(var n=-1,a=t.length;++n<a;){var o=t[n],i=e(o);if(i!=null&&(s===void 0?i===i&&!Br(i):r(i,s)))var s=i,u=o}return u}var JA=VO;function YO(t){return t&&t.length?JA(t,er,QA):void 0}var ZA=YO;var XO="Expected a function";function QO(t){if(typeof t!="function")throw new TypeError(XO);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}var e$=QO;function JO(t,e,r,n){if(!Le(t))return t;e=jn(e,t);for(var a=-1,o=e.length,i=o-1,s=t;s!=null&&++a<o;){var u=Qr(e[a]),l=r;if(u==="__proto__"||u==="constructor"||u==="prototype")return t;if(a!=i){var c=s[u];l=n?n(c,u,s):void 0,l===void 0&&(l=Le(c)?c:zn(e[a+1])?[]:{})}Ln(s,u,l),s=s[u]}return t}var t$=JO;function ZO(t,e,r){for(var n=-1,a=e.length,o={};++n<a;){var i=e[n],s=xo(t,i);r(s,i)&&t$(o,jn(i,t),s)}return o}var r$=ZO;function ez(t,e){if(t==null)return{};var r=Ur(Tl(t),function(n){return[n]});return e=qe(e),r$(t,r,function(n,a){return e(n,a[0])})}var nr=ez;function tz(t,e,r,n,a){return a(t,function(o,i,s){r=n?(n=!1,o):e(r,o,i,s)}),r}var n$=tz;function rz(t,e,r){var n=F(t)?bS:n$,a=arguments.length<3;return n(t,qe(e,4),r,a,rr)}var We=rz;function nz(t,e){var r=F(t)?Ko:Ml;return r(t,e$(qe(e,3)))}var Qn=nz;function az(t,e){var r;return rr(t,function(n,a,o){return r=e(n,a,o),!r}),!!r}var a$=az;function oz(t,e,r){var n=F(t)?Rl:a$;return r&&Fn(t,e,r)&&(e=void 0),n(t,qe(e,3))}var rs=oz;var iz=1/0,sz=Yn&&1/_o(new Yn([,-0]))[1]==iz?function(t){return new Yn(t)}:Fe,o$=sz;var uz=200;function lz(t,e,r){var n=-1,a=yl,o=t.length,i=!0,s=[],u=s;if(r)i=!1,a=_l;else if(o>=uz){var l=e?null:o$(t);if(l)return _o(l);i=!1,a=No,u=new Do}else u=e?[]:s;e:for(;++n<o;){var c=t[n],d=e?e(c):c;if(c=r||c!==0?c:0,i&&d===d){for(var p=u.length;p--;)if(u[p]===d)continue e;e&&u.push(d),s.push(c)}else a(u,d,r)||(u!==s&&u.push(d),s.push(c))}return s}var zl=lz;function cz(t){return t&&t.length?zl(t):[]}var Oo=cz;function dz(t,e){return t&&t.length?zl(t,qe(e,2)):[]}var i$=dz;function zo(t){console&&console.error&&console.error(`Error: ${t}`)}function ns(t){console&&console.warn&&console.warn(`Warning: ${t}`)}function as(t){let e=new Date().getTime(),r=t();return{time:new Date().getTime()-e,value:r}}function os(t){function e(){}e.prototype=t;let r=new e;function n(){return typeof r.bar}return n(),n(),t;(0,eval)(t)}function pz(t){return fz(t)?t.LABEL:t.name}function fz(t){return lt(t.LABEL)&&t.LABEL!==""}var fr=class{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){this._definition=e}accept(e){e.visit(this),_(this.definition,r=>{r.accept(e)})}},ye=class extends fr{constructor(e){super([]),this.idx=1,Tt(this,nr(e,r=>r!==void 0))}set definition(e){}get definition(){return this.referencedRule!==void 0?this.referencedRule.definition:[]}accept(e){e.visit(this)}},Bt=class extends fr{constructor(e){super(e.definition),this.orgText="",Tt(this,nr(e,r=>r!==void 0))}},Ce=class extends fr{constructor(e){super(e.definition),this.ignoreAmbiguities=!1,Tt(this,nr(e,r=>r!==void 0))}},he=class extends fr{constructor(e){super(e.definition),this.idx=1,Tt(this,nr(e,r=>r!==void 0))}},xe=class extends fr{constructor(e){super(e.definition),this.idx=1,Tt(this,nr(e,r=>r!==void 0))}},be=class extends fr{constructor(e){super(e.definition),this.idx=1,Tt(this,nr(e,r=>r!==void 0))}},oe=class extends fr{constructor(e){super(e.definition),this.idx=1,Tt(this,nr(e,r=>r!==void 0))}},we=class extends fr{constructor(e){super(e.definition),this.idx=1,Tt(this,nr(e,r=>r!==void 0))}},Se=class extends fr{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){super(e.definition),this.idx=1,this.ignoreAmbiguities=!1,this.hasPredicates=!1,Tt(this,nr(e,r=>r!==void 0))}},ee=class{constructor(e){this.idx=1,Tt(this,nr(e,r=>r!==void 0))}accept(e){e.visit(this)}};function Ll(t){return I(t,Lo)}function Lo(t){function e(r){return I(r,Lo)}if(t instanceof ye){let r={type:"NonTerminal",name:t.nonTerminalName,idx:t.idx};return lt(t.label)&&(r.label=t.label),r}else{if(t instanceof Ce)return{type:"Alternative",definition:e(t.definition)};if(t instanceof he)return{type:"Option",idx:t.idx,definition:e(t.definition)};if(t instanceof xe)return{type:"RepetitionMandatory",idx:t.idx,definition:e(t.definition)};if(t instanceof be)return{type:"RepetitionMandatoryWithSeparator",idx:t.idx,separator:Lo(new ee({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof we)return{type:"RepetitionWithSeparator",idx:t.idx,separator:Lo(new ee({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof oe)return{type:"Repetition",idx:t.idx,definition:e(t.definition)};if(t instanceof Se)return{type:"Alternation",idx:t.idx,definition:e(t.definition)};if(t instanceof ee){let r={type:"Terminal",name:t.terminalType.name,label:pz(t.terminalType),idx:t.idx};lt(t.label)&&(r.terminalLabel=t.label);let n=t.terminalType.PATTERN;return t.terminalType.PATTERN&&(r.pattern=$r(n)?n.source:n),r}else{if(t instanceof Bt)return{type:"Rule",name:t.name,orgText:t.orgText,definition:e(t.definition)};throw Error("non exhaustive match")}}}var Ut=class{visit(e){let r=e;switch(r.constructor){case ye:return this.visitNonTerminal(r);case Ce:return this.visitAlternative(r);case he:return this.visitOption(r);case xe:return this.visitRepetitionMandatory(r);case be:return this.visitRepetitionMandatoryWithSeparator(r);case we:return this.visitRepetitionWithSeparator(r);case oe:return this.visitRepetition(r);case Se:return this.visitAlternation(r);case ee:return this.visitTerminal(r);case Bt:return this.visitRule(r);default:throw Error("non exhaustive match")}}visitNonTerminal(e){}visitAlternative(e){}visitOption(e){}visitRepetition(e){}visitRepetitionMandatory(e){}visitRepetitionMandatoryWithSeparator(e){}visitRepetitionWithSeparator(e){}visitAlternation(e){}visitTerminal(e){}visitRule(e){}};function Wy(t){return t instanceof Ce||t instanceof he||t instanceof oe||t instanceof xe||t instanceof be||t instanceof we||t instanceof ee||t instanceof Bt}function Ea(t,e=[]){return t instanceof he||t instanceof oe||t instanceof we?!0:t instanceof Se?rs(t.definition,n=>Ea(n,e)):t instanceof ye&&Ee(e,t)?!1:t instanceof fr?(t instanceof ye&&e.push(t),Pt(t.definition,n=>Ea(n,e))):!1}function Gy(t){return t instanceof Se}function ar(t){if(t instanceof ye)return"SUBRULE";if(t instanceof he)return"OPTION";if(t instanceof Se)return"OR";if(t instanceof xe)return"AT_LEAST_ONE";if(t instanceof be)return"AT_LEAST_ONE_SEP";if(t instanceof we)return"MANY_SEP";if(t instanceof oe)return"MANY";if(t instanceof ee)return"CONSUME";throw Error("non exhaustive match")}var wn=class{walk(e,r=[]){_(e.definition,(n,a)=>{let o=tt(e.definition,a+1);if(n instanceof ye)this.walkProdRef(n,o,r);else if(n instanceof ee)this.walkTerminal(n,o,r);else if(n instanceof Ce)this.walkFlat(n,o,r);else if(n instanceof he)this.walkOption(n,o,r);else if(n instanceof xe)this.walkAtLeastOne(n,o,r);else if(n instanceof be)this.walkAtLeastOneSep(n,o,r);else if(n instanceof we)this.walkManySep(n,o,r);else if(n instanceof oe)this.walkMany(n,o,r);else if(n instanceof Se)this.walkOr(n,o,r);else throw Error("non exhaustive match")})}walkTerminal(e,r,n){}walkProdRef(e,r,n){}walkFlat(e,r,n){let a=r.concat(n);this.walk(e,a)}walkOption(e,r,n){let a=r.concat(n);this.walk(e,a)}walkAtLeastOne(e,r,n){let a=[new he({definition:e.definition})].concat(r,n);this.walk(e,a)}walkAtLeastOneSep(e,r,n){let a=s$(e,r,n);this.walk(e,a)}walkMany(e,r,n){let a=[new he({definition:e.definition})].concat(r,n);this.walk(e,a)}walkManySep(e,r,n){let a=s$(e,r,n);this.walk(e,a)}walkOr(e,r,n){let a=r.concat(n);_(e.definition,o=>{let i=new Ce({definition:[o]});this.walk(i,a)})}};function s$(t,e,r){return[new he({definition:[new ee({terminalType:t.separator})].concat(t.definition)})].concat(e,r)}function Da(t){if(t instanceof ye)return Da(t.referencedRule);if(t instanceof ee)return gz(t);if(Wy(t))return yz(t);if(Gy(t))return hz(t);throw Error("non exhaustive match")}function yz(t){let e=[],r=t.definition,n=0,a=r.length>n,o,i=!0;for(;a&&i;)o=r[n],i=Ea(o),e=e.concat(Da(o)),n=n+1,a=r.length>n;return Oo(e)}function hz(t){let e=I(t.definition,r=>Da(r));return Oo(et(e))}function gz(t){return[t.terminalType]}var Fl="_~IN~_";var Hy=class extends wn{constructor(e){super(),this.topProd=e,this.follows={}}startWalking(){return this.walk(this.topProd),this.follows}walkTerminal(e,r,n){}walkProdRef(e,r,n){let a=mz(e.referencedRule,e.idx)+this.topProd.name,o=r.concat(n),i=new Ce({definition:o}),s=Da(i);this.follows[a]=s}};function u$(t){let e={};return _(t,r=>{let n=new Hy(r).startWalking();Tt(e,n)}),e}function mz(t,e){return t.name+e+Fl}var Wl={},vz=new xa;function Fo(t){let e=t.toString();if(Wl.hasOwnProperty(e))return Wl[e];{let r=vz.pattern(e);return Wl[e]=r,r}}function l$(){Wl={}}var d$="Complement Sets are not supported for first char optimization",is=`Unable to use "first char" lexer optimizations:
`;function p$(t,e=!1){try{let r=Fo(t);return By(r.value,{},r.flags.ignoreCase)}catch(r){if(r.message===d$)e&&ns(`${is}	Unable to optimize: < ${t.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{let n="";e&&(n=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),zo(`${is}
	Failed parsing: < ${t.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues`+n)}}return[]}function By(t,e,r){switch(t.type){case"Disjunction":for(let a=0;a<t.value.length;a++)By(t.value[a],e,r);break;case"Alternative":let n=t.value;for(let a=0;a<n.length;a++){let o=n[a];switch(o.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}let i=o;switch(i.type){case"Character":Gl(i.value,e,r);break;case"Set":if(i.complement===!0)throw Error(d$);_(i.value,u=>{if(typeof u=="number")Gl(u,e,r);else{let l=u;if(r===!0)for(let c=l.from;c<=l.to;c++)Gl(c,e,r);else{for(let c=l.from;c<=l.to&&c<Wo;c++)Gl(c,e,r);if(l.to>=Wo){let c=l.from>=Wo?l.from:Wo,d=l.to,p=tn(c),y=tn(d);for(let v=p;v<=y;v++)e[v]=v}}}});break;case"Group":By(i.value,e,r);break;default:throw Error("Non Exhaustive Match")}let s=i.quantifier!==void 0&&i.quantifier.atLeast===0;if(i.type==="Group"&&Uy(i)===!1||i.type!=="Group"&&s===!1)break}break;default:throw Error("non exhaustive match!")}return me(e)}function Gl(t,e,r){let n=tn(t);e[n]=n,r===!0&&wz(t,e)}function wz(t,e){let r=String.fromCharCode(t),n=r.toUpperCase();if(n!==r){let a=tn(n.charCodeAt(0));e[a]=a}else{let a=r.toLowerCase();if(a!==r){let o=tn(a.charCodeAt(0));e[o]=o}}}function c$(t,e){return en(t.value,r=>{if(typeof r=="number")return Ee(e,r);{let n=r;return en(e,a=>n.from<=a&&a<=n.to)!==void 0}})}function Uy(t){let e=t.quantifier;return e&&e.atLeast===0?!0:t.value?F(t.value)?Pt(t.value,Uy):Uy(t.value):!1}var qy=class extends Hr{constructor(e){super(),this.targetCharCodes=e,this.found=!1}visitChildren(e){if(this.found!==!0){switch(e.type){case"Lookahead":this.visitLookahead(e);return;case"NegativeLookahead":this.visitNegativeLookahead(e);return}super.visitChildren(e)}}visitCharacter(e){Ee(this.targetCharCodes,e.value)&&(this.found=!0)}visitSet(e){e.complement?c$(e,this.targetCharCodes)===void 0&&(this.found=!0):c$(e,this.targetCharCodes)!==void 0&&(this.found=!0)}};function Hl(t,e){if(e instanceof RegExp){let r=Fo(e),n=new qy(t);return n.visit(r),n.found}else return en(e,r=>Ee(t,r.charCodeAt(0)))!==void 0}var Na="PATTERN",Go="defaultMode",Bl="modes",Vy=typeof new RegExp("(?:)").sticky=="boolean";function h$(t,e){e=Mo(e,{useSticky:Vy,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:(g,f)=>f()});let r=e.tracer;r("initCharCodeToOptimizedIndexMap",()=>{Oz()});let n;r("Reject Lexer.NA",()=>{n=Qn(t,g=>g[Na]===je.NA)});let a=!1,o;r("Transform Patterns",()=>{a=!1,o=I(n,g=>{let f=g[Na];if($r(f)){let $=f.source;return $.length===1&&$!=="^"&&$!=="$"&&$!=="."&&!f.ignoreCase?$:$.length===2&&$[0]==="\\"&&!Ee(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],$[1])?$[1]:e.useSticky?y$(f):f$(f)}else{if(Ht(f))return a=!0,{exec:f};if(typeof f=="object")return a=!0,f;if(typeof f=="string"){if(f.length===1)return f;{let $=f.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),P=new RegExp($);return e.useSticky?y$(P):f$(P)}}else throw Error("non exhaustive match")}})});let i,s,u,l,c;r("misc mapping",()=>{i=I(n,g=>g.tokenTypeIdx),s=I(n,g=>{let f=g.GROUP;if(f!==je.SKIPPED){if(lt(f))return f;if(It(f))return!1;throw Error("non exhaustive match")}}),u=I(n,g=>{let f=g.LONGER_ALT;if(f)return F(f)?I(f,P=>Ol(n,P)):[Ol(n,f)]}),l=I(n,g=>g.PUSH_MODE),c=I(n,g=>z(g,"POP_MODE"))});let d;r("Line Terminator Handling",()=>{let g=T$(e.lineTerminatorCharacters);d=I(n,f=>!1),e.positionTracking!=="onlyOffset"&&(d=I(n,f=>z(f,"LINE_BREAKS")?!!f.LINE_BREAKS:$$(f,g)===!1&&Hl(g,f.PATTERN)))});let p,y,v,S;r("Misc Mapping #2",()=>{p=I(n,S$),y=I(o,_z),v=We(n,(g,f)=>{let $=f.GROUP;return lt($)&&$!==je.SKIPPED&&(g[$]=[]),g},{}),S=I(o,(g,f)=>({pattern:o[f],longerAlt:u[f],canLineTerminator:d[f],isCustom:p[f],short:y[f],group:s[f],push:l[f],pop:c[f],tokenTypeIdx:i[f],tokenType:n[f]}))});let T=!0,A=[];return e.safeMode||r("First Char Optimization",()=>{A=We(n,(g,f,$)=>{if(typeof f.PATTERN=="string"){let P=f.PATTERN.charCodeAt(0),Q=tn(P);jy(g,Q,S[$])}else if(F(f.START_CHARS_HINT)){let P;_(f.START_CHARS_HINT,Q=>{let vt=typeof Q=="string"?Q.charCodeAt(0):Q,Qe=tn(vt);P!==Qe&&(P=Qe,jy(g,Qe,S[$]))})}else if($r(f.PATTERN))if(f.PATTERN.unicode)T=!1,e.ensureOptimizations&&zo(`${is}	Unable to analyze < ${f.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{let P=p$(f.PATTERN,e.ensureOptimizations);Z(P)&&(T=!1),_(P,Q=>{jy(g,Q,S[$])})}else e.ensureOptimizations&&zo(`${is}	TokenType: <${f.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),T=!1;return g},[])}),{emptyGroups:v,patternIdxToConfig:S,charCodeToPatternIdxToConfig:A,hasCustom:a,canBeOptimized:T}}function g$(t,e){let r=[],n=Az(t);r=r.concat(n.errors);let a=$z(n.valid),o=a.valid;return r=r.concat(a.errors),r=r.concat(Sz(o)),r=r.concat(Pz(o)),r=r.concat(Iz(o,e)),r=r.concat(Ez(o)),r}function Sz(t){let e=[],r=yt(t,n=>$r(n[Na]));return e=e.concat(Cz(r)),e=e.concat(kz(r)),e=e.concat(Rz(r)),e=e.concat(Kz(r)),e=e.concat(xz(r)),e}function Az(t){let e=yt(t,a=>!z(a,Na)),r=I(e,a=>({message:"Token Type: ->"+a.name+"<- missing static 'PATTERN' property",type:De.MISSING_PATTERN,tokenTypes:[a]})),n=Xn(t,e);return{errors:r,valid:n}}function $z(t){let e=yt(t,a=>{let o=a[Na];return!$r(o)&&!Ht(o)&&!z(o,"exec")&&!lt(o)}),r=I(e,a=>({message:"Token Type: ->"+a.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:De.INVALID_PATTERN,tokenTypes:[a]})),n=Xn(t,e);return{errors:r,valid:n}}var Tz=/[^\\][$]/;function Cz(t){class e extends Hr{constructor(){super(...arguments),this.found=!1}visitEndAnchor(o){this.found=!0}}let r=yt(t,a=>{let o=a.PATTERN;try{let i=Fo(o),s=new e;return s.visit(i),s.found}catch{return Tz.test(o.source)}});return I(r,a=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+a.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:De.EOI_ANCHOR_FOUND,tokenTypes:[a]}))}function xz(t){let e=yt(t,n=>n.PATTERN.test(""));return I(e,n=>({message:"Token Type: ->"+n.name+"<- static 'PATTERN' must not match an empty string",type:De.EMPTY_MATCH_PATTERN,tokenTypes:[n]}))}var bz=/[^\\[][\^]|^\^/;function kz(t){class e extends Hr{constructor(){super(...arguments),this.found=!1}visitStartAnchor(o){this.found=!0}}let r=yt(t,a=>{let o=a.PATTERN;try{let i=Fo(o),s=new e;return s.visit(i),s.found}catch{return bz.test(o.source)}});return I(r,a=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+a.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:De.SOI_ANCHOR_FOUND,tokenTypes:[a]}))}function Rz(t){let e=yt(t,n=>{let a=n[Na];return a instanceof RegExp&&(a.multiline||a.global)});return I(e,n=>({message:"Token Type: ->"+n.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:De.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[n]}))}function Kz(t){let e=[],r=I(t,o=>We(t,(i,s)=>(o.PATTERN.source===s.PATTERN.source&&!Ee(e,s)&&s.PATTERN!==je.NA&&(e.push(s),i.push(s)),i),[]));r=Jr(r);let n=yt(r,o=>o.length>1);return I(n,o=>{let i=I(o,u=>u.name);return{message:`The same RegExp pattern ->${ht(o).PATTERN}<-has been used in all of the following Token Types: ${i.join(", ")} <-`,type:De.DUPLICATE_PATTERNS_FOUND,tokenTypes:o}})}function Pz(t){let e=yt(t,n=>{if(!z(n,"GROUP"))return!1;let a=n.GROUP;return a!==je.SKIPPED&&a!==je.NA&&!lt(a)});return I(e,n=>({message:"Token Type: ->"+n.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:De.INVALID_GROUP_TYPE_FOUND,tokenTypes:[n]}))}function Iz(t,e){let r=yt(t,a=>a.PUSH_MODE!==void 0&&!Ee(e,a.PUSH_MODE));return I(r,a=>({message:`Token Type: ->${a.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${a.PUSH_MODE}<-which does not exist`,type:De.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[a]}))}function Ez(t){let e=[],r=We(t,(n,a,o)=>{let i=a.PATTERN;return i===je.NA||(lt(i)?n.push({str:i,idx:o,tokenType:a}):$r(i)&&Nz(i)&&n.push({str:i.source,idx:o,tokenType:a})),n},[]);return _(t,(n,a)=>{_(r,({str:o,idx:i,tokenType:s})=>{if(a<i&&Dz(o,n.PATTERN)){let u=`Token: ->${s.name}<- can never be matched.
Because it appears AFTER the Token Type ->${n.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;e.push({message:u,type:De.UNREACHABLE_PATTERN,tokenTypes:[n,s]})}})}),e}function Dz(t,e){if($r(e)){let r=e.exec(t);return r!==null&&r.index===0}else{if(Ht(e))return e(t,0,[],{});if(z(e,"exec"))return e.exec(t,0,[],{});if(typeof e=="string")return e===t;throw Error("non exhaustive match")}}function Nz(t){return en([".","\\","[","]","|","^","$","(",")","?","*","+","{"],r=>t.source.indexOf(r)!==-1)===void 0}function f$(t){let e=t.ignoreCase?"i":"";return new RegExp(`^(?:${t.source})`,e)}function y$(t){let e=t.ignoreCase?"iy":"y";return new RegExp(`${t.source}`,e)}function m$(t,e,r){let n=[];return z(t,Go)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+Go+`> property in its definition
`,type:De.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),z(t,Bl)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+Bl+`> property in its definition
`,type:De.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),z(t,Bl)&&z(t,Go)&&!z(t.modes,t.defaultMode)&&n.push({message:`A MultiMode Lexer cannot be initialized with a ${Go}: <${t.defaultMode}>which does not exist
`,type:De.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),z(t,Bl)&&_(t.modes,(a,o)=>{_(a,(i,s)=>{if(It(i))n.push({message:`A Lexer cannot be initialized using an undefined Token Type. Mode:<${o}> at index: <${s}>
`,type:De.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});else if(z(i,"LONGER_ALT")){let u=F(i.LONGER_ALT)?i.LONGER_ALT:[i.LONGER_ALT];_(u,l=>{!It(l)&&!Ee(a,l)&&n.push({message:`A MultiMode Lexer cannot be initialized with a longer_alt <${l.name}> on token <${i.name}> outside of mode <${o}>
`,type:De.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE})})}})}),n}function v$(t,e,r){let n=[],a=!1,o=Jr(et(me(t.modes))),i=Qn(o,u=>u[Na]===je.NA),s=T$(r);return e&&_(i,u=>{let l=$$(u,s);if(l!==!1){let d={message:Mz(u,l),type:l.issue,tokenType:u};n.push(d)}else z(u,"LINE_BREAKS")?u.LINE_BREAKS===!0&&(a=!0):Hl(s,u.PATTERN)&&(a=!0)}),e&&!a&&n.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,type:De.NO_LINE_BREAKS_FLAGS}),n}function w$(t){let e={},r=Ae(t);return _(r,n=>{let a=t[n];if(F(a))e[n]=[];else throw Error("non exhaustive match")}),e}function S$(t){let e=t.PATTERN;if($r(e))return!1;if(Ht(e))return!0;if(z(e,"exec"))return!0;if(lt(e))return!1;throw Error("non exhaustive match")}function _z(t){return lt(t)&&t.length===1?t.charCodeAt(0):!1}var A$={test:function(t){let e=t.length;for(let r=this.lastIndex;r<e;r++){let n=t.charCodeAt(r);if(n===10)return this.lastIndex=r+1,!0;if(n===13)return t.charCodeAt(r+1)===10?this.lastIndex=r+2:this.lastIndex=r+1,!0}return!1},lastIndex:0};function $$(t,e){if(z(t,"LINE_BREAKS"))return!1;if($r(t.PATTERN)){try{Hl(e,t.PATTERN)}catch(r){return{issue:De.IDENTIFY_TERMINATOR,errMsg:r.message}}return!1}else{if(lt(t.PATTERN))return!1;if(S$(t))return{issue:De.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function Mz(t,e){if(e.issue===De.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${t.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;if(e.issue===De.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${t.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;throw Error("non exhaustive match")}function T$(t){return I(t,r=>lt(r)?r.charCodeAt(0):r)}function jy(t,e,r){t[e]===void 0?t[e]=[r]:t[e].push(r)}var Wo=256,Ul=[];function tn(t){return t<Wo?t:Ul[t]}function Oz(){if(Z(Ul)){Ul=new Array(65536);for(let t=0;t<65536;t++)Ul[t]=t>255?255+~~(t/255):t}}function Sn(t,e){let r=t.tokenTypeIdx;return r===e.tokenTypeIdx?!0:e.isParent===!0&&e.categoryMatchesMap[r]===!0}function Ho(t,e){return t.tokenTypeIdx===e.tokenTypeIdx}var C$=1,b$={};function An(t){let e=zz(t);Lz(e),Wz(e),Fz(e),_(e,r=>{r.isParent=r.categoryMatches.length>0})}function zz(t){let e=Te(t),r=t,n=!0;for(;n;){r=Jr(et(I(r,o=>o.CATEGORIES)));let a=Xn(r,e);e=e.concat(a),Z(a)?n=!1:r=a}return e}function Lz(t){_(t,e=>{Yy(e)||(b$[C$]=e,e.tokenTypeIdx=C$++),x$(e)&&!F(e.CATEGORIES)&&(e.CATEGORIES=[e.CATEGORIES]),x$(e)||(e.CATEGORIES=[]),Gz(e)||(e.categoryMatches=[]),Hz(e)||(e.categoryMatchesMap={})})}function Fz(t){_(t,e=>{e.categoryMatches=[],_(e.categoryMatchesMap,(r,n)=>{e.categoryMatches.push(b$[n].tokenTypeIdx)})})}function Wz(t){_(t,e=>{k$([],e)})}function k$(t,e){_(t,r=>{e.categoryMatchesMap[r.tokenTypeIdx]=!0}),_(e.CATEGORIES,r=>{let n=t.concat(e);Ee(n,r)||k$(n,r)})}function Yy(t){return z(t,"tokenTypeIdx")}function x$(t){return z(t,"CATEGORIES")}function Gz(t){return z(t,"categoryMatches")}function Hz(t){return z(t,"categoryMatchesMap")}function R$(t){return z(t,"tokenTypeIdx")}var Xy={buildUnableToPopLexerModeMessage(t){return`Unable to pop Lexer Mode after encountering Token ->${t.image}<- The Mode Stack is empty`},buildUnexpectedCharactersMessage(t,e,r,n,a){return`unexpected character: ->${t.charAt(e)}<- at offset: ${e}, skipped ${r} characters.`}};var De;(function(t){t[t.MISSING_PATTERN=0]="MISSING_PATTERN",t[t.INVALID_PATTERN=1]="INVALID_PATTERN",t[t.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",t[t.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",t[t.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",t[t.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",t[t.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",t[t.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",t[t.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",t[t.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",t[t.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",t[t.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",t[t.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK",t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE=17]="MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"})(De||(De={}));var ss={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:Xy,traceInitPerf:!1,skipValidations:!1,recoveryEnabled:!0};Object.freeze(ss);var je=class{constructor(e,r=ss){if(this.lexerDefinition=e,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},this.TRACE_INIT=(a,o)=>{if(this.traceInitPerf===!0){this.traceInitIndent++;let i=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${i}--> <${a}>`);let{time:s,value:u}=as(o),l=s>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&l(`${i}<-- <${a}> time: ${s}ms`),this.traceInitIndent--,u}else return o()},typeof r=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=Tt({},ss,r);let n=this.config.traceInitPerf;n===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof n=="number"&&(this.traceInitMaxIdent=n,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",()=>{let a,o=!0;this.TRACE_INIT("Lexer Config handling",()=>{if(this.config.lineTerminatorsPattern===ss.lineTerminatorsPattern)this.config.lineTerminatorsPattern=A$;else if(this.config.lineTerminatorCharacters===ss.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(r.safeMode&&r.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');this.trackStartLines=/full|onlyStart/i.test(this.config.positionTracking),this.trackEndLines=/full/i.test(this.config.positionTracking),F(e)?a={modes:{defaultMode:Te(e)},defaultMode:Go}:(o=!1,a=Te(e))}),this.config.skipValidations===!1&&(this.TRACE_INIT("performRuntimeChecks",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(m$(a,this.trackStartLines,this.config.lineTerminatorCharacters))}),this.TRACE_INIT("performWarningRuntimeChecks",()=>{this.lexerDefinitionWarning=this.lexerDefinitionWarning.concat(v$(a,this.trackStartLines,this.config.lineTerminatorCharacters))})),a.modes=a.modes?a.modes:{},_(a.modes,(s,u)=>{a.modes[u]=Qn(s,l=>It(l))});let i=Ae(a.modes);if(_(a.modes,(s,u)=>{this.TRACE_INIT(`Mode: <${u}> processing`,()=>{if(this.modes.push(u),this.config.skipValidations===!1&&this.TRACE_INIT("validatePatterns",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(g$(s,i))}),Z(this.lexerDefinitionErrors)){An(s);let l;this.TRACE_INIT("analyzeTokenTypes",()=>{l=h$(s,{lineTerminatorCharacters:this.config.lineTerminatorCharacters,positionTracking:r.positionTracking,ensureOptimizations:r.ensureOptimizations,safeMode:r.safeMode,tracer:this.TRACE_INIT})}),this.patternIdxToConfig[u]=l.patternIdxToConfig,this.charCodeToPatternIdxToConfig[u]=l.charCodeToPatternIdxToConfig,this.emptyGroups=Tt({},this.emptyGroups,l.emptyGroups),this.hasCustom=l.hasCustom||this.hasCustom,this.canModeBeOptimized[u]=l.canBeOptimized}})}),this.defaultMode=a.defaultMode,!Z(this.lexerDefinitionErrors)&&!this.config.deferDefinitionErrorsHandling){let u=I(this.lexerDefinitionErrors,l=>l.message).join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+u)}_(this.lexerDefinitionWarning,s=>{ns(s.message)}),this.TRACE_INIT("Choosing sub-methods implementations",()=>{if(Vy?(this.chopInput=er,this.match=this.matchWithTest):(this.updateLastIndex=Fe,this.match=this.matchWithExec),o&&(this.handleModes=Fe),this.trackStartLines===!1&&(this.computeNewColumn=er),this.trackEndLines===!1&&(this.updateTokenEndLineColumnLocation=Fe),/full/i.test(this.config.positionTracking))this.createTokenInstance=this.createFullToken;else if(/onlyStart/i.test(this.config.positionTracking))this.createTokenInstance=this.createStartOnlyToken;else if(/onlyOffset/i.test(this.config.positionTracking))this.createTokenInstance=this.createOffsetOnlyToken;else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);this.hasCustom?(this.addToken=this.addTokenUsingPush,this.handlePayload=this.handlePayloadWithCustom):(this.addToken=this.addTokenUsingMemberAccess,this.handlePayload=this.handlePayloadNoCustom)}),this.TRACE_INIT("Failed Optimization Warnings",()=>{let s=We(this.canModeBeOptimized,(u,l,c)=>(l===!1&&u.push(c),u),[]);if(r.ensureOptimizations&&!Z(s))throw Error(`Lexer Modes: < ${s.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),this.TRACE_INIT("clearRegExpParserCache",()=>{l$()}),this.TRACE_INIT("toFastProperties",()=>{os(this)})})}tokenize(e,r=this.defaultMode){if(!Z(this.lexerDefinitionErrors)){let a=I(this.lexerDefinitionErrors,o=>o.message).join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+a)}return this.tokenizeInternal(e,r)}tokenizeInternal(e,r){let n,a,o,i,s,u,l,c,d,p,y,v,S,T,A,g,f=e,$=f.length,P=0,Q=0,vt=this.hasCustom?0:Math.floor(e.length/10),Qe=new Array(vt),dr=[],jt=this.trackStartLines?1:void 0,N=this.trackStartLines?1:void 0,x=w$(this.emptyGroups),W=this.trackStartLines,O=this.config.lineTerminatorsPattern,re=0,V=[],R=[],k=[],fe=[];Object.freeze(fe);let le;function Wr(){return V}function Ou(dt){let Yt=tn(dt),In=R[Yt];return In===void 0?fe:In}let nf=dt=>{if(k.length===1&&dt.tokenType.PUSH_MODE===void 0){let Yt=this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(dt);dr.push({offset:dt.startOffset,line:dt.startLine,column:dt.startColumn,length:dt.image.length,message:Yt})}else{k.pop();let Yt=Zr(k);V=this.patternIdxToConfig[Yt],R=this.charCodeToPatternIdxToConfig[Yt],re=V.length;let In=this.canModeBeOptimized[Yt]&&this.config.safeMode===!1;R&&In?le=Ou:le=Wr}};function Oi(dt){k.push(dt),R=this.charCodeToPatternIdxToConfig[dt],V=this.patternIdxToConfig[dt],re=V.length,re=V.length;let Yt=this.canModeBeOptimized[dt]&&this.config.safeMode===!1;R&&Yt?le=Ou:le=Wr}Oi.call(this,r);let Vt,zu=this.config.recoveryEnabled;for(;P<$;){u=null;let dt=f.charCodeAt(P),Yt=le(dt),In=Yt.length;for(n=0;n<In;n++){Vt=Yt[n];let Ot=Vt.pattern;l=null;let Pr=Vt.short;if(Pr!==!1?dt===Pr&&(u=Ot):Vt.isCustom===!0?(g=Ot.exec(f,P,Qe,x),g!==null?(u=g[0],g.payload!==void 0&&(l=g.payload)):u=null):(this.updateLastIndex(Ot,P),u=this.match(Ot,e,P)),u!==null){if(s=Vt.longerAlt,s!==void 0){let wt=s.length;for(o=0;o<wt;o++){let Ir=V[s[o]],dn=Ir.pattern;if(c=null,Ir.isCustom===!0?(g=dn.exec(f,P,Qe,x),g!==null?(i=g[0],g.payload!==void 0&&(c=g.payload)):i=null):(this.updateLastIndex(dn,P),i=this.match(dn,e,P)),i&&i.length>u.length){u=i,l=c,Vt=Ir;break}}}break}}if(u!==null){if(d=u.length,p=Vt.group,p!==void 0&&(y=Vt.tokenTypeIdx,v=this.createTokenInstance(u,P,y,Vt.tokenType,jt,N,d),this.handlePayload(v,l),p===!1?Q=this.addToken(Qe,Q,v):x[p].push(v)),e=this.chopInput(e,d),P=P+d,N=this.computeNewColumn(N,d),W===!0&&Vt.canLineTerminator===!0){let Ot=0,Pr,wt;O.lastIndex=0;do Pr=O.test(u),Pr===!0&&(wt=O.lastIndex-1,Ot++);while(Pr===!0);Ot!==0&&(jt=jt+Ot,N=d-wt,this.updateTokenEndLineColumnLocation(v,p,wt,Ot,jt,N,d))}this.handleModes(Vt,nf,Oi,v)}else{let Ot=P,Pr=jt,wt=N,Ir=zu===!1;for(;Ir===!1&&P<$;)for(e=this.chopInput(e,1),P++,a=0;a<re;a++){let dn=V[a],En=dn.pattern,Lu=dn.short;if(Lu!==!1?f.charCodeAt(P)===Lu&&(Ir=!0):dn.isCustom===!0?Ir=En.exec(f,P,Qe,x)!==null:(this.updateLastIndex(En,P),Ir=En.exec(e)!==null),Ir===!0)break}if(S=P-Ot,N=this.computeNewColumn(N,S),A=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(f,Ot,S,Pr,wt),dr.push({offset:Ot,line:Pr,column:wt,length:S,message:A}),zu===!1)break}}return this.hasCustom||(Qe.length=Q),{tokens:Qe,groups:x,errors:dr}}handleModes(e,r,n,a){if(e.pop===!0){let o=e.push;r(a),o!==void 0&&n.call(this,o)}else e.push!==void 0&&n.call(this,e.push)}chopInput(e,r){return e.substring(r)}updateLastIndex(e,r){e.lastIndex=r}updateTokenEndLineColumnLocation(e,r,n,a,o,i,s){let u,l;r!==void 0&&(u=n===s-1,l=u?-1:0,a===1&&u===!0||(e.endLine=o+l,e.endColumn=i-1+-l))}computeNewColumn(e,r){return e+r}createOffsetOnlyToken(e,r,n,a){return{image:e,startOffset:r,tokenTypeIdx:n,tokenType:a}}createStartOnlyToken(e,r,n,a,o,i){return{image:e,startOffset:r,startLine:o,startColumn:i,tokenTypeIdx:n,tokenType:a}}createFullToken(e,r,n,a,o,i,s){return{image:e,startOffset:r,endOffset:r+s-1,startLine:o,endLine:o,startColumn:i,endColumn:i+s-1,tokenTypeIdx:n,tokenType:a}}addTokenUsingPush(e,r,n){return e.push(n),r}addTokenUsingMemberAccess(e,r,n){return e[r]=n,r++,r}handlePayloadNoCustom(e,r){}handlePayloadWithCustom(e,r){r!==null&&(e.payload=r)}matchWithTest(e,r,n){return e.test(r)===!0?r.substring(n,e.lastIndex):null}matchWithExec(e,r){let n=e.exec(r);return n!==null?n[0]:null}};je.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";je.NA=/NOT_APPLICABLE/;function $n(t){return Qy(t)?t.LABEL:t.name}function Qy(t){return lt(t.LABEL)&&t.LABEL!==""}var Bz="parent",K$="categories",P$="label",I$="group",E$="push_mode",D$="pop_mode",N$="longer_alt",_$="line_breaks",M$="start_chars_hint";function ql(t){return Uz(t)}function Uz(t){let e=t.pattern,r={};if(r.name=t.name,It(e)||(r.PATTERN=e),z(t,Bz))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return z(t,K$)&&(r.CATEGORIES=t[K$]),An([r]),z(t,P$)&&(r.LABEL=t[P$]),z(t,I$)&&(r.GROUP=t[I$]),z(t,D$)&&(r.POP_MODE=t[D$]),z(t,E$)&&(r.PUSH_MODE=t[E$]),z(t,N$)&&(r.LONGER_ALT=t[N$]),z(t,_$)&&(r.LINE_BREAKS=t[_$]),z(t,M$)&&(r.START_CHARS_HINT=t[M$]),r}var yr=ql({name:"EOF",pattern:je.NA});An([yr]);function _a(t,e,r,n,a,o,i,s){return{image:e,startOffset:r,endOffset:n,startLine:a,endLine:o,startColumn:i,endColumn:s,tokenTypeIdx:t.tokenTypeIdx,tokenType:t}}function us(t,e){return Sn(t,e)}var Tn={buildMismatchTokenMessage({expected:t,actual:e,previous:r,ruleName:n}){return`Expecting ${Qy(t)?`--> ${$n(t)} <--`:`token of type --> ${t.name} <--`} but found --> '${e.image}' <--`},buildNotAllInputParsedMessage({firstRedundant:t,ruleName:e}){return"Redundant input, expecting EOF but found: "+t.image},buildNoViableAltMessage({expectedPathsPerAlt:t,actual:e,previous:r,customUserDescription:n,ruleName:a}){let o="Expecting: ",s=`
but found: '`+ht(e).image+"'";if(n)return o+n+s;{let u=We(t,(p,y)=>p.concat(y),[]),l=I(u,p=>`[${I(p,y=>$n(y)).join(", ")}]`),d=`one of these possible Token sequences:
${I(l,(p,y)=>`  ${y+1}. ${p}`).join(`
`)}`;return o+d+s}},buildEarlyExitMessage({expectedIterationPaths:t,actual:e,customUserDescription:r,ruleName:n}){let a="Expecting: ",i=`
but found: '`+ht(e).image+"'";if(r)return a+r+i;{let u=`expecting at least one iteration which starts with one of these possible Token sequences::
  <${I(t,l=>`[${I(l,c=>$n(c)).join(",")}]`).join(" ,")}>`;return a+u+i}}};Object.freeze(Tn);var O$={buildRuleNotFoundError(t,e){return"Invalid grammar, reference to a rule which is not defined: ->"+e.nonTerminalName+`<-
inside top level rule: ->`+t.name+"<-"}},Mr={buildDuplicateFoundError(t,e){function r(c){return c instanceof ee?c.terminalType.name:c instanceof ye?c.nonTerminalName:""}let n=t.name,a=ht(e),o=a.idx,i=ar(a),s=r(a),u=o>0,l=`->${i}${u?o:""}<- ${s?`with argument: ->${s}<-`:""}
                  appears more than once (${e.length} times) in the top level rule: ->${n}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;return l=l.replace(/[ \t]+/g," "),l=l.replace(/\s\s+/g,`
`),l},buildNamespaceConflictError(t){return`Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${t.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`},buildAlternationPrefixAmbiguityError(t){let e=I(t.prefixPath,a=>$n(a)).join(", "),r=t.alternation.idx===0?"":t.alternation.idx;return`Ambiguous alternatives: <${t.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`},buildAlternationAmbiguityError(t){let e=I(t.prefixPath,a=>$n(a)).join(", "),r=t.alternation.idx===0?"":t.alternation.idx,n=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(" ,")}> in <OR${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n},buildEmptyRepetitionError(t){let e=ar(t.repetition);return t.repetition.idx!==0&&(e+=t.repetition.idx),`The repetition <${e}> within Rule <${t.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`},buildTokenNameError(t){return"deprecated"},buildEmptyAlternationError(t){return`Ambiguous empty alternative: <${t.emptyChoiceIdx+1}> in <OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`},buildTooManyAlternativesError(t){return`An Alternation cannot have more than 256 alternatives:
<OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
 has ${t.alternation.definition.length+1} alternatives.`},buildLeftRecursionError(t){let e=t.topLevelRule.name,r=I(t.leftRecursionPath,o=>o.name),n=`${e} --> ${r.concat([e]).join(" --> ")}`;return`Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${n}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`},buildInvalidRuleNameError(t){return"deprecated"},buildDuplicateRuleNameError(t){let e;return t.topLevelRule instanceof Bt?e=t.topLevelRule.name:e=t.topLevelRule,`Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${t.grammarName}<-`}};function z$(t,e){let r=new Jy(t,e);return r.resolveRefs(),r.errors}var Jy=class extends Ut{constructor(e,r){super(),this.nameToTopRule=e,this.errMsgProvider=r,this.errors=[]}resolveRefs(){_(me(this.nameToTopRule),e=>{this.currTopLevel=e,e.accept(this)})}visitNonTerminal(e){let r=this.nameToTopRule[e.nonTerminalName];if(r)e.referencedRule=r;else{let n=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,e);this.errors.push({message:n,type:ct.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:e.nonTerminalName})}}};var Zy=class extends wn{constructor(e,r){super(),this.topProd=e,this.path=r,this.possibleTokTypes=[],this.nextProductionName="",this.nextProductionOccurrence=0,this.found=!1,this.isAtEndOfPath=!1}startWalking(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=Te(this.path.ruleStack).reverse(),this.occurrenceStack=Te(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes}walk(e,r=[]){this.found||super.walk(e,r)}walkProdRef(e,r,n){if(e.referencedRule.name===this.nextProductionName&&e.idx===this.nextProductionOccurrence){let a=r.concat(n);this.updateExpectedNext(),this.walk(e.referencedRule,a)}}updateExpectedNext(){Z(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())}},jl=class extends Zy{constructor(e,r){super(e,r),this.path=r,this.nextTerminalName="",this.nextTerminalOccurrence=0,this.nextTerminalName=this.path.lastTok.name,this.nextTerminalOccurrence=this.path.lastTokOccurrence}walkTerminal(e,r,n){if(this.isAtEndOfPath&&e.terminalType.name===this.nextTerminalName&&e.idx===this.nextTerminalOccurrence&&!this.found){let a=r.concat(n),o=new Ce({definition:a});this.possibleTokTypes=Da(o),this.found=!0}}},Bo=class extends wn{constructor(e,r){super(),this.topRule=e,this.occurrence=r,this.result={token:void 0,occurrence:void 0,isEndOfRule:void 0}}startWalking(){return this.walk(this.topRule),this.result}},Vl=class extends Bo{walkMany(e,r,n){if(e.idx===this.occurrence){let a=ht(r.concat(n));this.result.isEndOfRule=a===void 0,a instanceof ee&&(this.result.token=a.terminalType,this.result.occurrence=a.idx)}else super.walkMany(e,r,n)}},ls=class extends Bo{walkManySep(e,r,n){if(e.idx===this.occurrence){let a=ht(r.concat(n));this.result.isEndOfRule=a===void 0,a instanceof ee&&(this.result.token=a.terminalType,this.result.occurrence=a.idx)}else super.walkManySep(e,r,n)}},Yl=class extends Bo{walkAtLeastOne(e,r,n){if(e.idx===this.occurrence){let a=ht(r.concat(n));this.result.isEndOfRule=a===void 0,a instanceof ee&&(this.result.token=a.terminalType,this.result.occurrence=a.idx)}else super.walkAtLeastOne(e,r,n)}},cs=class extends Bo{walkAtLeastOneSep(e,r,n){if(e.idx===this.occurrence){let a=ht(r.concat(n));this.result.isEndOfRule=a===void 0,a instanceof ee&&(this.result.token=a.terminalType,this.result.occurrence=a.idx)}else super.walkAtLeastOneSep(e,r,n)}};function Xl(t,e,r=[]){r=Te(r);let n=[],a=0;function o(s){return s.concat(tt(t,a+1))}function i(s){let u=Xl(o(s),e,r);return n.concat(u)}for(;r.length<e&&a<t.length;){let s=t[a];if(s instanceof Ce)return i(s.definition);if(s instanceof ye)return i(s.definition);if(s instanceof he)n=i(s.definition);else if(s instanceof xe){let u=s.definition.concat([new oe({definition:s.definition})]);return i(u)}else if(s instanceof be){let u=[new Ce({definition:s.definition}),new oe({definition:[new ee({terminalType:s.separator})].concat(s.definition)})];return i(u)}else if(s instanceof we){let u=s.definition.concat([new oe({definition:[new ee({terminalType:s.separator})].concat(s.definition)})]);n=i(u)}else if(s instanceof oe){let u=s.definition.concat([new oe({definition:s.definition})]);n=i(u)}else{if(s instanceof Se)return _(s.definition,u=>{Z(u.definition)===!1&&(n=i(u.definition))}),n;if(s instanceof ee)r.push(s.terminalType);else throw Error("non exhaustive match")}a++}return n.push({partialPath:r,suffixDef:tt(t,a)}),n}function Ql(t,e,r,n){let a="EXIT_NONE_TERMINAL",o=[a],i="EXIT_ALTERNATIVE",s=!1,u=e.length,l=u-n-1,c=[],d=[];for(d.push({idx:-1,def:t,ruleStack:[],occurrenceStack:[]});!Z(d);){let p=d.pop();if(p===i){s&&Zr(d).idx<=l&&d.pop();continue}let y=p.def,v=p.idx,S=p.ruleStack,T=p.occurrenceStack;if(Z(y))continue;let A=y[0];if(A===a){let g={idx:v,def:tt(y),ruleStack:vn(S),occurrenceStack:vn(T)};d.push(g)}else if(A instanceof ee)if(v<u-1){let g=v+1,f=e[g];if(r(f,A.terminalType)){let $={idx:g,def:tt(y),ruleStack:S,occurrenceStack:T};d.push($)}}else if(v===u-1)c.push({nextTokenType:A.terminalType,nextTokenOccurrence:A.idx,ruleStack:S,occurrenceStack:T}),s=!0;else throw Error("non exhaustive match");else if(A instanceof ye){let g=Te(S);g.push(A.nonTerminalName);let f=Te(T);f.push(A.idx);let $={idx:v,def:A.definition.concat(o,tt(y)),ruleStack:g,occurrenceStack:f};d.push($)}else if(A instanceof he){let g={idx:v,def:tt(y),ruleStack:S,occurrenceStack:T};d.push(g),d.push(i);let f={idx:v,def:A.definition.concat(tt(y)),ruleStack:S,occurrenceStack:T};d.push(f)}else if(A instanceof xe){let g=new oe({definition:A.definition,idx:A.idx}),f=A.definition.concat([g],tt(y)),$={idx:v,def:f,ruleStack:S,occurrenceStack:T};d.push($)}else if(A instanceof be){let g=new ee({terminalType:A.separator}),f=new oe({definition:[g].concat(A.definition),idx:A.idx}),$=A.definition.concat([f],tt(y)),P={idx:v,def:$,ruleStack:S,occurrenceStack:T};d.push(P)}else if(A instanceof we){let g={idx:v,def:tt(y),ruleStack:S,occurrenceStack:T};d.push(g),d.push(i);let f=new ee({terminalType:A.separator}),$=new oe({definition:[f].concat(A.definition),idx:A.idx}),P=A.definition.concat([$],tt(y)),Q={idx:v,def:P,ruleStack:S,occurrenceStack:T};d.push(Q)}else if(A instanceof oe){let g={idx:v,def:tt(y),ruleStack:S,occurrenceStack:T};d.push(g),d.push(i);let f=new oe({definition:A.definition,idx:A.idx}),$=A.definition.concat([f],tt(y)),P={idx:v,def:$,ruleStack:S,occurrenceStack:T};d.push(P)}else if(A instanceof Se)for(let g=A.definition.length-1;g>=0;g--){let f=A.definition[g],$={idx:v,def:f.definition.concat(tt(y)),ruleStack:S,occurrenceStack:T};d.push($),d.push(i)}else if(A instanceof Ce)d.push({idx:v,def:A.definition.concat(tt(y)),ruleStack:S,occurrenceStack:T});else if(A instanceof Bt)d.push(qz(A,v,S,T));else throw Error("non exhaustive match")}return c}function qz(t,e,r,n){let a=Te(r);a.push(t.name);let o=Te(n);return o.push(1),{idx:e,def:t.definition,ruleStack:a,occurrenceStack:o}}var Ne;(function(t){t[t.OPTION=0]="OPTION",t[t.REPETITION=1]="REPETITION",t[t.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",t[t.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",t[t.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",t[t.ALTERNATION=5]="ALTERNATION"})(Ne||(Ne={}));function ds(t){if(t instanceof he||t==="Option")return Ne.OPTION;if(t instanceof oe||t==="Repetition")return Ne.REPETITION;if(t instanceof xe||t==="RepetitionMandatory")return Ne.REPETITION_MANDATORY;if(t instanceof be||t==="RepetitionMandatoryWithSeparator")return Ne.REPETITION_MANDATORY_WITH_SEPARATOR;if(t instanceof we||t==="RepetitionWithSeparator")return Ne.REPETITION_WITH_SEPARATOR;if(t instanceof Se||t==="Alternation")return Ne.ALTERNATION;throw Error("non exhaustive match")}function Zl(t){let{occurrence:e,rule:r,prodType:n,maxLookahead:a}=t,o=ds(n);return o===Ne.ALTERNATION?Uo(e,r,a):qo(e,r,o,a)}function F$(t,e,r,n,a,o){let i=Uo(t,e,r),s=q$(i)?Ho:Sn;return o(i,n,s,a)}function W$(t,e,r,n,a,o){let i=qo(t,e,a,r),s=q$(i)?Ho:Sn;return o(i[0],s,n)}function G$(t,e,r,n){let a=t.length,o=Pt(t,i=>Pt(i,s=>s.length===1));if(e)return function(i){let s=I(i,u=>u.GATE);for(let u=0;u<a;u++){let l=t[u],c=l.length,d=s[u];if(!(d!==void 0&&d.call(this)===!1))e:for(let p=0;p<c;p++){let y=l[p],v=y.length;for(let S=0;S<v;S++){let T=this.LA(S+1);if(r(T,y[S])===!1)continue e}return u}}};if(o&&!n){let i=I(t,u=>et(u)),s=We(i,(u,l,c)=>(_(l,d=>{z(u,d.tokenTypeIdx)||(u[d.tokenTypeIdx]=c),_(d.categoryMatches,p=>{z(u,p)||(u[p]=c)})}),u),{});return function(){let u=this.LA(1);return s[u.tokenTypeIdx]}}else return function(){for(let i=0;i<a;i++){let s=t[i],u=s.length;e:for(let l=0;l<u;l++){let c=s[l],d=c.length;for(let p=0;p<d;p++){let y=this.LA(p+1);if(r(y,c[p])===!1)continue e}return i}}}}function H$(t,e,r){let n=Pt(t,o=>o.length===1),a=t.length;if(n&&!r){let o=et(t);if(o.length===1&&Z(o[0].categoryMatches)){let s=o[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===s}}else{let i=We(o,(s,u,l)=>(s[u.tokenTypeIdx]=!0,_(u.categoryMatches,c=>{s[c]=!0}),s),[]);return function(){let s=this.LA(1);return i[s.tokenTypeIdx]===!0}}}else return function(){e:for(let o=0;o<a;o++){let i=t[o],s=i.length;for(let u=0;u<s;u++){let l=this.LA(u+1);if(e(l,i[u])===!1)continue e}return!0}return!1}}var th=class extends wn{constructor(e,r,n){super(),this.topProd=e,this.targetOccurrence=r,this.targetProdType=n}startWalking(){return this.walk(this.topProd),this.restDef}checkIsTarget(e,r,n,a){return e.idx===this.targetOccurrence&&this.targetProdType===r?(this.restDef=n.concat(a),!0):!1}walkOption(e,r,n){this.checkIsTarget(e,Ne.OPTION,r,n)||super.walkOption(e,r,n)}walkAtLeastOne(e,r,n){this.checkIsTarget(e,Ne.REPETITION_MANDATORY,r,n)||super.walkOption(e,r,n)}walkAtLeastOneSep(e,r,n){this.checkIsTarget(e,Ne.REPETITION_MANDATORY_WITH_SEPARATOR,r,n)||super.walkOption(e,r,n)}walkMany(e,r,n){this.checkIsTarget(e,Ne.REPETITION,r,n)||super.walkOption(e,r,n)}walkManySep(e,r,n){this.checkIsTarget(e,Ne.REPETITION_WITH_SEPARATOR,r,n)||super.walkOption(e,r,n)}},Jl=class extends Ut{constructor(e,r,n){super(),this.targetOccurrence=e,this.targetProdType=r,this.targetRef=n,this.result=[]}checkIsTarget(e,r){e.idx===this.targetOccurrence&&this.targetProdType===r&&(this.targetRef===void 0||e===this.targetRef)&&(this.result=e.definition)}visitOption(e){this.checkIsTarget(e,Ne.OPTION)}visitRepetition(e){this.checkIsTarget(e,Ne.REPETITION)}visitRepetitionMandatory(e){this.checkIsTarget(e,Ne.REPETITION_MANDATORY)}visitRepetitionMandatoryWithSeparator(e){this.checkIsTarget(e,Ne.REPETITION_MANDATORY_WITH_SEPARATOR)}visitRepetitionWithSeparator(e){this.checkIsTarget(e,Ne.REPETITION_WITH_SEPARATOR)}visitAlternation(e){this.checkIsTarget(e,Ne.ALTERNATION)}};function L$(t){let e=new Array(t);for(let r=0;r<t;r++)e[r]=[];return e}function eh(t){let e=[""];for(let r=0;r<t.length;r++){let n=t[r],a=[];for(let o=0;o<e.length;o++){let i=e[o];a.push(i+"_"+n.tokenTypeIdx);for(let s=0;s<n.categoryMatches.length;s++){let u="_"+n.categoryMatches[s];a.push(i+u)}}e=a}return e}function jz(t,e,r){for(let n=0;n<t.length;n++){if(n===r)continue;let a=t[n];for(let o=0;o<e.length;o++){let i=e[o];if(a[i]===!0)return!1}}return!0}function B$(t,e){let r=I(t,i=>Xl([i],1)),n=L$(r.length),a=I(r,i=>{let s={};return _(i,u=>{let l=eh(u.partialPath);_(l,c=>{s[c]=!0})}),s}),o=r;for(let i=1;i<=e;i++){let s=o;o=L$(s.length);for(let u=0;u<s.length;u++){let l=s[u];for(let c=0;c<l.length;c++){let d=l[c].partialPath,p=l[c].suffixDef,y=eh(d);if(jz(a,y,u)||Z(p)||d.length===e){let S=n[u];if(ec(S,d)===!1){S.push(d);for(let T=0;T<y.length;T++){let A=y[T];a[u][A]=!0}}}else{let S=Xl(p,i+1,d);o[u]=o[u].concat(S),_(S,T=>{let A=eh(T.partialPath);_(A,g=>{a[u][g]=!0})})}}}}return n}function Uo(t,e,r,n){let a=new Jl(t,Ne.ALTERNATION,n);return e.accept(a),B$(a.result,r)}function qo(t,e,r,n){let a=new Jl(t,r);e.accept(a);let o=a.result,s=new th(e,t,r).startWalking(),u=new Ce({definition:o}),l=new Ce({definition:s});return B$([u,l],n)}function ec(t,e){e:for(let r=0;r<t.length;r++){let n=t[r];if(n.length===e.length){for(let a=0;a<n.length;a++){let o=e[a],i=n[a];if((o===i||i.categoryMatchesMap[o.tokenTypeIdx]!==void 0)===!1)continue e}return!0}}return!1}function U$(t,e){return t.length<e.length&&Pt(t,(r,n)=>{let a=e[n];return r===a||a.categoryMatchesMap[r.tokenTypeIdx]})}function q$(t){return Pt(t,e=>Pt(e,r=>Pt(r,n=>Z(n.categoryMatches))))}function j$(t){let e=t.lookaheadStrategy.validate({rules:t.rules,tokenTypes:t.tokenTypes,grammarName:t.grammarName});return I(e,r=>Object.assign({type:ct.CUSTOM_LOOKAHEAD_VALIDATION},r))}function V$(t,e,r,n){let a=Ct(t,u=>Vz(u,r)),o=eL(t,e,r),i=Ct(t,u=>Qz(u,r)),s=Ct(t,u=>Xz(u,t,n,r));return a.concat(o,i,s)}function Vz(t,e){let r=new rh;t.accept(r);let n=r.allProductions,a=Fy(n,Yz),o=nr(a,s=>s.length>1);return I(me(o),s=>{let u=ht(s),l=e.buildDuplicateFoundError(t,s),c=ar(u),d={message:l,type:ct.DUPLICATE_PRODUCTIONS,ruleName:t.name,dslName:c,occurrence:u.idx},p=Y$(u);return p&&(d.parameter=p),d})}function Yz(t){return`${ar(t)}_#_${t.idx}_#_${Y$(t)}`}function Y$(t){return t instanceof ee?t.terminalType.name:t instanceof ye?t.nonTerminalName:""}var rh=class extends Ut{constructor(){super(...arguments),this.allProductions=[]}visitNonTerminal(e){this.allProductions.push(e)}visitOption(e){this.allProductions.push(e)}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}visitAlternation(e){this.allProductions.push(e)}visitTerminal(e){this.allProductions.push(e)}};function Xz(t,e,r,n){let a=[];if(We(e,(i,s)=>s.name===t.name?i+1:i,0)>1){let i=n.buildDuplicateRuleNameError({topLevelRule:t,grammarName:r});a.push({message:i,type:ct.DUPLICATE_RULE_NAME,ruleName:t.name})}return a}function X$(t,e,r){let n=[],a;return Ee(e,t)||(a=`Invalid rule override, rule: ->${t}<- cannot be overridden in the grammar: ->${r}<-as it is not defined in any of the super grammars `,n.push({message:a,type:ct.INVALID_RULE_OVERRIDE,ruleName:t})),n}function ah(t,e,r,n=[]){let a=[],o=tc(e.definition);if(Z(o))return[];{let i=t.name;Ee(o,t)&&a.push({message:r.buildLeftRecursionError({topLevelRule:t,leftRecursionPath:n}),type:ct.LEFT_RECURSION,ruleName:i});let u=Xn(o,n.concat([t])),l=Ct(u,c=>{let d=Te(n);return d.push(c),ah(t,c,r,d)});return a.concat(l)}}function tc(t){let e=[];if(Z(t))return e;let r=ht(t);if(r instanceof ye)e.push(r.referencedRule);else if(r instanceof Ce||r instanceof he||r instanceof xe||r instanceof be||r instanceof we||r instanceof oe)e=e.concat(tc(r.definition));else if(r instanceof Se)e=et(I(r.definition,o=>tc(o.definition)));else if(!(r instanceof ee))throw Error("non exhaustive match");let n=Ea(r),a=t.length>1;if(n&&a){let o=tt(t);return e.concat(tc(o))}else return e}var ps=class extends Ut{constructor(){super(...arguments),this.alternations=[]}visitAlternation(e){this.alternations.push(e)}};function Q$(t,e){let r=new ps;t.accept(r);let n=r.alternations;return Ct(n,o=>{let i=vn(o.definition);return Ct(i,(s,u)=>{let l=Ql([s],[],Sn,1);return Z(l)?[{message:e.buildEmptyAlternationError({topLevelRule:t,alternation:o,emptyChoiceIdx:u}),type:ct.NONE_LAST_EMPTY_ALT,ruleName:t.name,occurrence:o.idx,alternative:u+1}]:[]})})}function J$(t,e,r){let n=new ps;t.accept(n);let a=n.alternations;return a=Qn(a,i=>i.ignoreAmbiguities===!0),Ct(a,i=>{let s=i.idx,u=i.maxLookahead||e,l=Uo(s,t,u,i),c=Jz(l,i,t,r),d=Zz(l,i,t,r);return c.concat(d)})}var nh=class extends Ut{constructor(){super(...arguments),this.allProductions=[]}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}};function Qz(t,e){let r=new ps;t.accept(r);let n=r.alternations;return Ct(n,o=>o.definition.length>255?[{message:e.buildTooManyAlternativesError({topLevelRule:t,alternation:o}),type:ct.TOO_MANY_ALTS,ruleName:t.name,occurrence:o.idx}]:[])}function Z$(t,e,r){let n=[];return _(t,a=>{let o=new nh;a.accept(o);let i=o.allProductions;_(i,s=>{let u=ds(s),l=s.maxLookahead||e,c=s.idx,p=qo(c,a,u,l)[0];if(Z(et(p))){let y=r.buildEmptyRepetitionError({topLevelRule:a,repetition:s});n.push({message:y,type:ct.NO_NON_EMPTY_LOOKAHEAD,ruleName:a.name})}})}),n}function Jz(t,e,r,n){let a=[],o=We(t,(s,u,l)=>(e.definition[l].ignoreAmbiguities===!0||_(u,c=>{let d=[l];_(t,(p,y)=>{l!==y&&ec(p,c)&&e.definition[y].ignoreAmbiguities!==!0&&d.push(y)}),d.length>1&&!ec(a,c)&&(a.push(c),s.push({alts:d,path:c}))}),s),[]);return I(o,s=>{let u=I(s.alts,c=>c+1);return{message:n.buildAlternationAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:u,prefixPath:s.path}),type:ct.AMBIGUOUS_ALTS,ruleName:r.name,occurrence:e.idx,alternatives:s.alts}})}function Zz(t,e,r,n){let a=We(t,(i,s,u)=>{let l=I(s,c=>({idx:u,path:c}));return i.concat(l)},[]);return Jr(Ct(a,i=>{if(e.definition[i.idx].ignoreAmbiguities===!0)return[];let u=i.idx,l=i.path,c=yt(a,p=>e.definition[p.idx].ignoreAmbiguities!==!0&&p.idx<u&&U$(p.path,l));return I(c,p=>{let y=[p.idx+1,u+1],v=e.idx===0?"":e.idx;return{message:n.buildAlternationPrefixAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:y,prefixPath:p.path}),type:ct.AMBIGUOUS_PREFIX_ALTS,ruleName:r.name,occurrence:v,alternatives:y}})}))}function eL(t,e,r){let n=[],a=I(e,o=>o.name);return _(t,o=>{let i=o.name;if(Ee(a,i)){let s=r.buildNamespaceConflictError(o);n.push({message:s,type:ct.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:i})}}),n}function eT(t){let e=Mo(t,{errMsgProvider:O$}),r={};return _(t.rules,n=>{r[n.name]=n}),z$(r,e.errMsgProvider)}function tT(t){return t=Mo(t,{errMsgProvider:Mr}),V$(t.rules,t.tokenTypes,t.errMsgProvider,t.grammarName)}var rT="MismatchedTokenException",nT="NoViableAltException",aT="EarlyExitException",oT="NotAllInputParsedException",iT=[rT,nT,aT,oT];Object.freeze(iT);function Jn(t){return Ee(iT,t.name)}var jo=class extends Error{constructor(e,r){super(e),this.token=r,this.resyncedTokens=[],Object.setPrototypeOf(this,new.target.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},Ma=class extends jo{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=rT}},fs=class extends jo{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=nT}},ys=class extends jo{constructor(e,r){super(e,r),this.name=oT}},hs=class extends jo{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=aT}};var oh={},sh="InRuleRecoveryException",ih=class extends Error{constructor(e){super(e),this.name=sh}},rc=class{initRecoverable(e){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=z(e,"recoveryEnabled")?e.recoveryEnabled:qt.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=tL)}getTokenToInsert(e){let r=_a(e,"",NaN,NaN,NaN,NaN,NaN,NaN);return r.isInsertedInRecovery=!0,r}canTokenTypeBeInsertedInRecovery(e){return!0}canTokenTypeBeDeletedInRecovery(e){return!0}tryInRepetitionRecovery(e,r,n,a){let o=this.findReSyncTokenType(),i=this.exportLexerState(),s=[],u=!1,l=this.LA(1),c=this.LA(1),d=()=>{let p=this.LA(0),y=this.errorMessageProvider.buildMismatchTokenMessage({expected:a,actual:l,previous:p,ruleName:this.getCurrRuleFullName()}),v=new Ma(y,l,this.LA(0));v.resyncedTokens=vn(s),this.SAVE_ERROR(v)};for(;!u;)if(this.tokenMatcher(c,a)){d();return}else if(n.call(this)){d(),e.apply(this,r);return}else this.tokenMatcher(c,o)?u=!0:(c=this.SKIP_TOKEN(),this.addToResyncTokens(c,s));this.importLexerState(i)}shouldInRepetitionRecoveryBeTried(e,r,n){return!(n===!1||this.tokenMatcher(this.LA(1),e)||this.isBackTracking()||this.canPerformInRuleRecovery(e,this.getFollowsForInRuleRecovery(e,r)))}getFollowsForInRuleRecovery(e,r){let n=this.getCurrentGrammarPath(e,r);return this.getNextPossibleTokenTypes(n)}tryInRuleRecovery(e,r){if(this.canRecoverWithSingleTokenInsertion(e,r))return this.getTokenToInsert(e);if(this.canRecoverWithSingleTokenDeletion(e)){let n=this.SKIP_TOKEN();return this.consumeToken(),n}throw new ih("sad sad panda")}canPerformInRuleRecovery(e,r){return this.canRecoverWithSingleTokenInsertion(e,r)||this.canRecoverWithSingleTokenDeletion(e)}canRecoverWithSingleTokenInsertion(e,r){if(!this.canTokenTypeBeInsertedInRecovery(e)||Z(r))return!1;let n=this.LA(1);return en(r,o=>this.tokenMatcher(n,o))!==void 0}canRecoverWithSingleTokenDeletion(e){return this.canTokenTypeBeDeletedInRecovery(e)?this.tokenMatcher(this.LA(2),e):!1}isInCurrentRuleReSyncSet(e){let r=this.getCurrFollowKey(),n=this.getFollowSetFromFollowKey(r);return Ee(n,e)}findReSyncTokenType(){let e=this.flattenFollowSet(),r=this.LA(1),n=2;for(;;){let a=en(e,o=>us(r,o));if(a!==void 0)return a;r=this.LA(n),n++}}getCurrFollowKey(){if(this.RULE_STACK.length===1)return oh;let e=this.getLastExplicitRuleShortName(),r=this.getLastExplicitRuleOccurrenceIndex(),n=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(e),idxInCallingRule:r,inRule:this.shortRuleNameToFullName(n)}}buildFullFollowKeyStack(){let e=this.RULE_STACK,r=this.RULE_OCCURRENCE_STACK;return I(e,(n,a)=>a===0?oh:{ruleName:this.shortRuleNameToFullName(n),idxInCallingRule:r[a],inRule:this.shortRuleNameToFullName(e[a-1])})}flattenFollowSet(){let e=I(this.buildFullFollowKeyStack(),r=>this.getFollowSetFromFollowKey(r));return et(e)}getFollowSetFromFollowKey(e){if(e===oh)return[yr];let r=e.ruleName+e.idxInCallingRule+Fl+e.inRule;return this.resyncFollows[r]}addToResyncTokens(e,r){return this.tokenMatcher(e,yr)||r.push(e),r}reSyncTo(e){let r=[],n=this.LA(1);for(;this.tokenMatcher(n,e)===!1;)n=this.SKIP_TOKEN(),this.addToResyncTokens(n,r);return vn(r)}attemptInRepetitionRecovery(e,r,n,a,o,i,s){}getCurrentGrammarPath(e,r){let n=this.getHumanReadableRuleStack(),a=Te(this.RULE_OCCURRENCE_STACK);return{ruleStack:n,occurrenceStack:a,lastTok:e,lastTokOccurrence:r}}getHumanReadableRuleStack(){return I(this.RULE_STACK,e=>this.shortRuleNameToFullName(e))}};function tL(t,e,r,n,a,o,i){let s=this.getKeyForAutomaticLookahead(n,a),u=this.firstAfterRepMap[s];if(u===void 0){let p=this.getCurrRuleFullName(),y=this.getGAstProductions()[p];u=new o(y,a).startWalking(),this.firstAfterRepMap[s]=u}let l=u.token,c=u.occurrence,d=u.isEndOfRule;this.RULE_STACK.length===1&&d&&l===void 0&&(l=yr,c=1),!(l===void 0||c===void 0)&&this.shouldInRepetitionRecoveryBeTried(l,c,i)&&this.tryInRepetitionRecovery(t,e,r,l)}function nc(t,e,r){return r|e|t}var Cn=class{constructor(e){var r;this.maxLookahead=(r=e?.maxLookahead)!==null&&r!==void 0?r:qt.maxLookahead}validate(e){let r=this.validateNoLeftRecursion(e.rules);if(Z(r)){let n=this.validateEmptyOrAlternatives(e.rules),a=this.validateAmbiguousAlternationAlternatives(e.rules,this.maxLookahead),o=this.validateSomeNonEmptyLookaheadPath(e.rules,this.maxLookahead);return[...r,...n,...a,...o]}return r}validateNoLeftRecursion(e){return Ct(e,r=>ah(r,r,Mr))}validateEmptyOrAlternatives(e){return Ct(e,r=>Q$(r,Mr))}validateAmbiguousAlternationAlternatives(e,r){return Ct(e,n=>J$(n,r,Mr))}validateSomeNonEmptyLookaheadPath(e,r){return Z$(e,r,Mr)}buildLookaheadForAlternation(e){return F$(e.prodOccurrence,e.rule,e.maxLookahead,e.hasPredicates,e.dynamicTokensEnabled,G$)}buildLookaheadForOptional(e){return W$(e.prodOccurrence,e.rule,e.maxLookahead,e.dynamicTokensEnabled,ds(e.prodType),H$)}};var oc=class{initLooksAhead(e){this.dynamicTokensEnabled=z(e,"dynamicTokensEnabled")?e.dynamicTokensEnabled:qt.dynamicTokensEnabled,this.maxLookahead=z(e,"maxLookahead")?e.maxLookahead:qt.maxLookahead,this.lookaheadStrategy=z(e,"lookaheadStrategy")?e.lookaheadStrategy:new Cn({maxLookahead:this.maxLookahead}),this.lookAheadFuncsCache=new Map}preComputeLookaheadFunctions(e){_(e,r=>{this.TRACE_INIT(`${r.name} Rule Lookahead`,()=>{let{alternation:n,repetition:a,option:o,repetitionMandatory:i,repetitionMandatoryWithSeparator:s,repetitionWithSeparator:u}=rL(r);_(n,l=>{let c=l.idx===0?"":l.idx;this.TRACE_INIT(`${ar(l)}${c}`,()=>{let d=this.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:l.idx,rule:r,maxLookahead:l.maxLookahead||this.maxLookahead,hasPredicates:l.hasPredicates,dynamicTokensEnabled:this.dynamicTokensEnabled}),p=nc(this.fullRuleNameToShort[r.name],256,l.idx);this.setLaFuncCache(p,d)})}),_(a,l=>{this.computeLookaheadFunc(r,l.idx,768,"Repetition",l.maxLookahead,ar(l))}),_(o,l=>{this.computeLookaheadFunc(r,l.idx,512,"Option",l.maxLookahead,ar(l))}),_(i,l=>{this.computeLookaheadFunc(r,l.idx,1024,"RepetitionMandatory",l.maxLookahead,ar(l))}),_(s,l=>{this.computeLookaheadFunc(r,l.idx,1536,"RepetitionMandatoryWithSeparator",l.maxLookahead,ar(l))}),_(u,l=>{this.computeLookaheadFunc(r,l.idx,1280,"RepetitionWithSeparator",l.maxLookahead,ar(l))})})})}computeLookaheadFunc(e,r,n,a,o,i){this.TRACE_INIT(`${i}${r===0?"":r}`,()=>{let s=this.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:r,rule:e,maxLookahead:o||this.maxLookahead,dynamicTokensEnabled:this.dynamicTokensEnabled,prodType:a}),u=nc(this.fullRuleNameToShort[e.name],n,r);this.setLaFuncCache(u,s)})}getKeyForAutomaticLookahead(e,r){let n=this.getLastExplicitRuleShortName();return nc(n,e,r)}getLaFuncFromCache(e){return this.lookAheadFuncsCache.get(e)}setLaFuncCache(e,r){this.lookAheadFuncsCache.set(e,r)}},uh=class extends Ut{constructor(){super(...arguments),this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}reset(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}visitOption(e){this.dslMethods.option.push(e)}visitRepetitionWithSeparator(e){this.dslMethods.repetitionWithSeparator.push(e)}visitRepetitionMandatory(e){this.dslMethods.repetitionMandatory.push(e)}visitRepetitionMandatoryWithSeparator(e){this.dslMethods.repetitionMandatoryWithSeparator.push(e)}visitRepetition(e){this.dslMethods.repetition.push(e)}visitAlternation(e){this.dslMethods.alternation.push(e)}},ac=new uh;function rL(t){ac.reset(),t.accept(ac);let e=ac.dslMethods;return ac.reset(),e}function dh(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.endOffset=e.endOffset):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset)}function ph(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.startColumn=e.startColumn,t.startLine=e.startLine,t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine)}function sT(t,e,r){t.children[r]===void 0?t.children[r]=[e]:t.children[r].push(e)}function uT(t,e,r){t.children[e]===void 0?t.children[e]=[r]:t.children[e].push(r)}var nL="name";function fh(t,e){Object.defineProperty(t,nL,{enumerable:!1,configurable:!0,writable:!1,value:e})}function aL(t,e){let r=Ae(t),n=r.length;for(let a=0;a<n;a++){let o=r[a],i=t[o],s=i.length;for(let u=0;u<s;u++){let l=i[u];l.tokenTypeIdx===void 0&&this[l.name](l.children,e)}}}function lT(t,e){let r=function(){};fh(r,t+"BaseSemantics");let n={visit:function(a,o){if(F(a)&&(a=a[0]),!It(a))return this[a.name](a.children,o)},validateVisitor:function(){let a=oL(this,e);if(!Z(a)){let o=I(a,i=>i.msg);throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${o.join(`

`).replace(/\n/g,`
	`)}`)}}};return r.prototype=n,r.prototype.constructor=r,r._RULE_NAMES=e,r}function cT(t,e,r){let n=function(){};fh(n,t+"BaseSemanticsWithDefaults");let a=Object.create(r.prototype);return _(e,o=>{a[o]=aL}),n.prototype=a,n.prototype.constructor=n,n}var yh;(function(t){t[t.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",t[t.MISSING_METHOD=1]="MISSING_METHOD"})(yh||(yh={}));function oL(t,e){return iL(t,e)}function iL(t,e){let r=yt(e,a=>Ht(t[a])===!1),n=I(r,a=>({msg:`Missing visitor method: <${a}> on ${t.constructor.name} CST Visitor.`,type:yh.MISSING_METHOD,methodName:a}));return Jr(n)}var lc=class{initTreeBuilder(e){if(this.CST_STACK=[],this.outputCst=e.outputCst,this.nodeLocationTracking=z(e,"nodeLocationTracking")?e.nodeLocationTracking:qt.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=Fe,this.cstFinallyStateUpdate=Fe,this.cstPostTerminal=Fe,this.cstPostNonTerminal=Fe,this.cstPostRule=Fe;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=ph,this.setNodeLocationFromNode=ph,this.cstPostRule=Fe,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=Fe,this.setNodeLocationFromNode=Fe,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=dh,this.setNodeLocationFromNode=dh,this.cstPostRule=Fe,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=Fe,this.setNodeLocationFromNode=Fe,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=Fe,this.setNodeLocationFromNode=Fe,this.cstPostRule=Fe,this.setInitialNodeLocation=Fe;else throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`)}setInitialNodeLocationOnlyOffsetRecovery(e){e.location={startOffset:NaN,endOffset:NaN}}setInitialNodeLocationOnlyOffsetRegular(e){e.location={startOffset:this.LA(1).startOffset,endOffset:NaN}}setInitialNodeLocationFullRecovery(e){e.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}}setInitialNodeLocationFullRegular(e){let r=this.LA(1);e.location={startOffset:r.startOffset,startLine:r.startLine,startColumn:r.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}}cstInvocationStateUpdate(e){let r={name:e,children:Object.create(null)};this.setInitialNodeLocation(r),this.CST_STACK.push(r)}cstFinallyStateUpdate(){this.CST_STACK.pop()}cstPostRuleFull(e){let r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?(n.endOffset=r.endOffset,n.endLine=r.endLine,n.endColumn=r.endColumn):(n.startOffset=NaN,n.startLine=NaN,n.startColumn=NaN)}cstPostRuleOnlyOffset(e){let r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?n.endOffset=r.endOffset:n.startOffset=NaN}cstPostTerminal(e,r){let n=this.CST_STACK[this.CST_STACK.length-1];sT(n,r,e),this.setNodeLocationFromToken(n.location,r)}cstPostNonTerminal(e,r){let n=this.CST_STACK[this.CST_STACK.length-1];uT(n,r,e),this.setNodeLocationFromNode(n.location,e.location)}getBaseCstVisitorConstructor(){if(It(this.baseCstVisitorConstructor)){let e=lT(this.className,Ae(this.gastProductionsCache));return this.baseCstVisitorConstructor=e,e}return this.baseCstVisitorConstructor}getBaseCstVisitorConstructorWithDefaults(){if(It(this.baseCstVisitorWithDefaultsConstructor)){let e=cT(this.className,Ae(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=e,e}return this.baseCstVisitorWithDefaultsConstructor}getLastExplicitRuleShortName(){let e=this.RULE_STACK;return e[e.length-1]}getPreviousExplicitRuleShortName(){let e=this.RULE_STACK;return e[e.length-2]}getLastExplicitRuleOccurrenceIndex(){let e=this.RULE_OCCURRENCE_STACK;return e[e.length-1]}};var cc=class{initLexerAdapter(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1}set input(e){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=e,this.tokVectorLength=e.length}get input(){return this.tokVector}SKIP_TOKEN(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):Vo}LA(e){let r=this.currIdx+e;return r<0||this.tokVectorLength<=r?Vo:this.tokVector[r]}consumeToken(){this.currIdx++}exportLexerState(){return this.currIdx}importLexerState(e){this.currIdx=e}resetLexerState(){this.currIdx=-1}moveToTerminatedState(){this.currIdx=this.tokVector.length-1}getLexerPosition(){return this.exportLexerState()}};var dc=class{ACTION(e){return e.call(this)}consume(e,r,n){return this.consumeInternal(r,e,n)}subrule(e,r,n){return this.subruleInternal(r,e,n)}option(e,r){return this.optionInternal(r,e)}or(e,r){return this.orInternal(r,e)}many(e,r){return this.manyInternal(e,r)}atLeastOne(e,r){return this.atLeastOneInternal(e,r)}CONSUME(e,r){return this.consumeInternal(e,0,r)}CONSUME1(e,r){return this.consumeInternal(e,1,r)}CONSUME2(e,r){return this.consumeInternal(e,2,r)}CONSUME3(e,r){return this.consumeInternal(e,3,r)}CONSUME4(e,r){return this.consumeInternal(e,4,r)}CONSUME5(e,r){return this.consumeInternal(e,5,r)}CONSUME6(e,r){return this.consumeInternal(e,6,r)}CONSUME7(e,r){return this.consumeInternal(e,7,r)}CONSUME8(e,r){return this.consumeInternal(e,8,r)}CONSUME9(e,r){return this.consumeInternal(e,9,r)}SUBRULE(e,r){return this.subruleInternal(e,0,r)}SUBRULE1(e,r){return this.subruleInternal(e,1,r)}SUBRULE2(e,r){return this.subruleInternal(e,2,r)}SUBRULE3(e,r){return this.subruleInternal(e,3,r)}SUBRULE4(e,r){return this.subruleInternal(e,4,r)}SUBRULE5(e,r){return this.subruleInternal(e,5,r)}SUBRULE6(e,r){return this.subruleInternal(e,6,r)}SUBRULE7(e,r){return this.subruleInternal(e,7,r)}SUBRULE8(e,r){return this.subruleInternal(e,8,r)}SUBRULE9(e,r){return this.subruleInternal(e,9,r)}OPTION(e){return this.optionInternal(e,0)}OPTION1(e){return this.optionInternal(e,1)}OPTION2(e){return this.optionInternal(e,2)}OPTION3(e){return this.optionInternal(e,3)}OPTION4(e){return this.optionInternal(e,4)}OPTION5(e){return this.optionInternal(e,5)}OPTION6(e){return this.optionInternal(e,6)}OPTION7(e){return this.optionInternal(e,7)}OPTION8(e){return this.optionInternal(e,8)}OPTION9(e){return this.optionInternal(e,9)}OR(e){return this.orInternal(e,0)}OR1(e){return this.orInternal(e,1)}OR2(e){return this.orInternal(e,2)}OR3(e){return this.orInternal(e,3)}OR4(e){return this.orInternal(e,4)}OR5(e){return this.orInternal(e,5)}OR6(e){return this.orInternal(e,6)}OR7(e){return this.orInternal(e,7)}OR8(e){return this.orInternal(e,8)}OR9(e){return this.orInternal(e,9)}MANY(e){this.manyInternal(0,e)}MANY1(e){this.manyInternal(1,e)}MANY2(e){this.manyInternal(2,e)}MANY3(e){this.manyInternal(3,e)}MANY4(e){this.manyInternal(4,e)}MANY5(e){this.manyInternal(5,e)}MANY6(e){this.manyInternal(6,e)}MANY7(e){this.manyInternal(7,e)}MANY8(e){this.manyInternal(8,e)}MANY9(e){this.manyInternal(9,e)}MANY_SEP(e){this.manySepFirstInternal(0,e)}MANY_SEP1(e){this.manySepFirstInternal(1,e)}MANY_SEP2(e){this.manySepFirstInternal(2,e)}MANY_SEP3(e){this.manySepFirstInternal(3,e)}MANY_SEP4(e){this.manySepFirstInternal(4,e)}MANY_SEP5(e){this.manySepFirstInternal(5,e)}MANY_SEP6(e){this.manySepFirstInternal(6,e)}MANY_SEP7(e){this.manySepFirstInternal(7,e)}MANY_SEP8(e){this.manySepFirstInternal(8,e)}MANY_SEP9(e){this.manySepFirstInternal(9,e)}AT_LEAST_ONE(e){this.atLeastOneInternal(0,e)}AT_LEAST_ONE1(e){return this.atLeastOneInternal(1,e)}AT_LEAST_ONE2(e){this.atLeastOneInternal(2,e)}AT_LEAST_ONE3(e){this.atLeastOneInternal(3,e)}AT_LEAST_ONE4(e){this.atLeastOneInternal(4,e)}AT_LEAST_ONE5(e){this.atLeastOneInternal(5,e)}AT_LEAST_ONE6(e){this.atLeastOneInternal(6,e)}AT_LEAST_ONE7(e){this.atLeastOneInternal(7,e)}AT_LEAST_ONE8(e){this.atLeastOneInternal(8,e)}AT_LEAST_ONE9(e){this.atLeastOneInternal(9,e)}AT_LEAST_ONE_SEP(e){this.atLeastOneSepFirstInternal(0,e)}AT_LEAST_ONE_SEP1(e){this.atLeastOneSepFirstInternal(1,e)}AT_LEAST_ONE_SEP2(e){this.atLeastOneSepFirstInternal(2,e)}AT_LEAST_ONE_SEP3(e){this.atLeastOneSepFirstInternal(3,e)}AT_LEAST_ONE_SEP4(e){this.atLeastOneSepFirstInternal(4,e)}AT_LEAST_ONE_SEP5(e){this.atLeastOneSepFirstInternal(5,e)}AT_LEAST_ONE_SEP6(e){this.atLeastOneSepFirstInternal(6,e)}AT_LEAST_ONE_SEP7(e){this.atLeastOneSepFirstInternal(7,e)}AT_LEAST_ONE_SEP8(e){this.atLeastOneSepFirstInternal(8,e)}AT_LEAST_ONE_SEP9(e){this.atLeastOneSepFirstInternal(9,e)}RULE(e,r,n=Yo){if(Ee(this.definedRulesNames,e)){let i={message:Mr.buildDuplicateRuleNameError({topLevelRule:e,grammarName:this.className}),type:ct.DUPLICATE_RULE_NAME,ruleName:e};this.definitionErrors.push(i)}this.definedRulesNames.push(e);let a=this.defineRule(e,r,n);return this[e]=a,a}OVERRIDE_RULE(e,r,n=Yo){let a=X$(e,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(a);let o=this.defineRule(e,r,n);return this[e]=o,o}BACKTRACK(e,r){return function(){this.isBackTrackingStack.push(1);let n=this.saveRecogState();try{return e.apply(this,r),!0}catch(a){if(Jn(a))return!1;throw a}finally{this.reloadRecogState(n),this.isBackTrackingStack.pop()}}}getGAstProductions(){return this.gastProductionsCache}getSerializedGastProductions(){return Ll(me(this.gastProductionsCache))}};var pc=class{initRecognizerEngine(e,r){if(this.className=this.constructor.name,this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=Ho,this.subruleIdx=0,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},z(r,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(F(e)){if(Z(e))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof e[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(F(e))this.tokensMap=We(e,(o,i)=>(o[i.name]=i,o),{});else if(z(e,"modes")&&Pt(et(me(e.modes)),R$)){let o=et(me(e.modes)),i=Oo(o);this.tokensMap=We(i,(s,u)=>(s[u.name]=u,s),{})}else if(Le(e))this.tokensMap=Te(e);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=yr;let n=z(e,"modes")?et(me(e.modes)):me(e),a=Pt(n,o=>Z(o.categoryMatches));this.tokenMatcher=a?Ho:Sn,An(me(this.tokensMap))}defineRule(e,r,n){if(this.selfAnalysisDone)throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);let a=z(n,"resyncEnabled")?n.resyncEnabled:Yo.resyncEnabled,o=z(n,"recoveryValueFunc")?n.recoveryValueFunc:Yo.recoveryValueFunc,i=this.ruleShortNameIdx<<12;this.ruleShortNameIdx++,this.shortRuleNameToFull[i]=e,this.fullRuleNameToShort[e]=i;let s;return this.outputCst===!0?s=function(...c){try{this.ruleInvocationStateUpdate(i,e,this.subruleIdx),r.apply(this,c);let d=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(d),d}catch(d){return this.invokeRuleCatch(d,a,o)}finally{this.ruleFinallyStateUpdate()}}:s=function(...c){try{return this.ruleInvocationStateUpdate(i,e,this.subruleIdx),r.apply(this,c)}catch(d){return this.invokeRuleCatch(d,a,o)}finally{this.ruleFinallyStateUpdate()}},Object.assign(s,{ruleName:e,originalGrammarAction:r})}invokeRuleCatch(e,r,n){let a=this.RULE_STACK.length===1,o=r&&!this.isBackTracking()&&this.recoveryEnabled;if(Jn(e)){let i=e;if(o){let s=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(s))if(i.resyncedTokens=this.reSyncTo(s),this.outputCst){let u=this.CST_STACK[this.CST_STACK.length-1];return u.recoveredNode=!0,u}else return n(e);else{if(this.outputCst){let u=this.CST_STACK[this.CST_STACK.length-1];u.recoveredNode=!0,i.partialCstResult=u}throw i}}else{if(a)return this.moveToTerminatedState(),n(e);throw i}}else throw e}optionInternal(e,r){let n=this.getKeyForAutomaticLookahead(512,r);return this.optionInternalLogic(e,r,n)}optionInternalLogic(e,r,n){let a=this.getLaFuncFromCache(n),o;if(typeof e!="function"){o=e.DEF;let i=e.GATE;if(i!==void 0){let s=a;a=()=>i.call(this)&&s.call(this)}}else o=e;if(a.call(this)===!0)return o.call(this)}atLeastOneInternal(e,r){let n=this.getKeyForAutomaticLookahead(1024,e);return this.atLeastOneInternalLogic(e,r,n)}atLeastOneInternalLogic(e,r,n){let a=this.getLaFuncFromCache(n),o;if(typeof r!="function"){o=r.DEF;let i=r.GATE;if(i!==void 0){let s=a;a=()=>i.call(this)&&s.call(this)}}else o=r;if(a.call(this)===!0){let i=this.doSingleRepetition(o);for(;a.call(this)===!0&&i===!0;)i=this.doSingleRepetition(o)}else throw this.raiseEarlyExitException(e,Ne.REPETITION_MANDATORY,r.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[e,r],a,1024,e,Yl)}atLeastOneSepFirstInternal(e,r){let n=this.getKeyForAutomaticLookahead(1536,e);this.atLeastOneSepFirstInternalLogic(e,r,n)}atLeastOneSepFirstInternalLogic(e,r,n){let a=r.DEF,o=r.SEP;if(this.getLaFuncFromCache(n).call(this)===!0){a.call(this);let s=()=>this.tokenMatcher(this.LA(1),o);for(;this.tokenMatcher(this.LA(1),o)===!0;)this.CONSUME(o),a.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,o,s,a,cs],s,1536,e,cs)}else throw this.raiseEarlyExitException(e,Ne.REPETITION_MANDATORY_WITH_SEPARATOR,r.ERR_MSG)}manyInternal(e,r){let n=this.getKeyForAutomaticLookahead(768,e);return this.manyInternalLogic(e,r,n)}manyInternalLogic(e,r,n){let a=this.getLaFuncFromCache(n),o;if(typeof r!="function"){o=r.DEF;let s=r.GATE;if(s!==void 0){let u=a;a=()=>s.call(this)&&u.call(this)}}else o=r;let i=!0;for(;a.call(this)===!0&&i===!0;)i=this.doSingleRepetition(o);this.attemptInRepetitionRecovery(this.manyInternal,[e,r],a,768,e,Vl,i)}manySepFirstInternal(e,r){let n=this.getKeyForAutomaticLookahead(1280,e);this.manySepFirstInternalLogic(e,r,n)}manySepFirstInternalLogic(e,r,n){let a=r.DEF,o=r.SEP;if(this.getLaFuncFromCache(n).call(this)===!0){a.call(this);let s=()=>this.tokenMatcher(this.LA(1),o);for(;this.tokenMatcher(this.LA(1),o)===!0;)this.CONSUME(o),a.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,o,s,a,ls],s,1280,e,ls)}}repetitionSepSecondInternal(e,r,n,a,o){for(;n();)this.CONSUME(r),a.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,r,n,a,o],n,1536,e,o)}doSingleRepetition(e){let r=this.getLexerPosition();return e.call(this),this.getLexerPosition()>r}orInternal(e,r){let n=this.getKeyForAutomaticLookahead(256,r),a=F(e)?e:e.DEF,i=this.getLaFuncFromCache(n).call(this,a);if(i!==void 0)return a[i].ALT.call(this);this.raiseNoAltException(r,e.ERR_MSG)}ruleFinallyStateUpdate(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){let e=this.LA(1),r=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:e,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new ys(r,e))}}subruleInternal(e,r,n){let a;try{let o=n!==void 0?n.ARGS:void 0;return this.subruleIdx=r,a=e.apply(this,o),this.cstPostNonTerminal(a,n!==void 0&&n.LABEL!==void 0?n.LABEL:e.ruleName),a}catch(o){throw this.subruleInternalError(o,n,e.ruleName)}}subruleInternalError(e,r,n){throw Jn(e)&&e.partialCstResult!==void 0&&(this.cstPostNonTerminal(e.partialCstResult,r!==void 0&&r.LABEL!==void 0?r.LABEL:n),delete e.partialCstResult),e}consumeInternal(e,r,n){let a;try{let o=this.LA(1);this.tokenMatcher(o,e)===!0?(this.consumeToken(),a=o):this.consumeInternalError(e,o,n)}catch(o){a=this.consumeInternalRecovery(e,r,o)}return this.cstPostTerminal(n!==void 0&&n.LABEL!==void 0?n.LABEL:e.name,a),a}consumeInternalError(e,r,n){let a,o=this.LA(0);throw n!==void 0&&n.ERR_MSG?a=n.ERR_MSG:a=this.errorMessageProvider.buildMismatchTokenMessage({expected:e,actual:r,previous:o,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new Ma(a,r,o))}consumeInternalRecovery(e,r,n){if(this.recoveryEnabled&&n.name==="MismatchedTokenException"&&!this.isBackTracking()){let a=this.getFollowsForInRuleRecovery(e,r);try{return this.tryInRuleRecovery(e,a)}catch(o){throw o.name===sh?n:o}}else throw n}saveRecogState(){let e=this.errors,r=Te(this.RULE_STACK);return{errors:e,lexerState:this.exportLexerState(),RULE_STACK:r,CST_STACK:this.CST_STACK}}reloadRecogState(e){this.errors=e.errors,this.importLexerState(e.lexerState),this.RULE_STACK=e.RULE_STACK}ruleInvocationStateUpdate(e,r,n){this.RULE_OCCURRENCE_STACK.push(n),this.RULE_STACK.push(e),this.cstInvocationStateUpdate(r)}isBackTracking(){return this.isBackTrackingStack.length!==0}getCurrRuleFullName(){let e=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[e]}shortRuleNameToFullName(e){return this.shortRuleNameToFull[e]}isAtEndOfInput(){return this.tokenMatcher(this.LA(1),yr)}reset(){this.resetLexerState(),this.subruleIdx=0,this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]}};var fc=class{initErrorHandler(e){this._errors=[],this.errorMessageProvider=z(e,"errorMessageProvider")?e.errorMessageProvider:qt.errorMessageProvider}SAVE_ERROR(e){if(Jn(e))return e.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:Te(this.RULE_OCCURRENCE_STACK)},this._errors.push(e),e;throw Error("Trying to save an Error which is not a RecognitionException")}get errors(){return Te(this._errors)}set errors(e){this._errors=e}raiseEarlyExitException(e,r,n){let a=this.getCurrRuleFullName(),o=this.getGAstProductions()[a],s=qo(e,o,r,this.maxLookahead)[0],u=[];for(let c=1;c<=this.maxLookahead;c++)u.push(this.LA(c));let l=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:s,actual:u,previous:this.LA(0),customUserDescription:n,ruleName:a});throw this.SAVE_ERROR(new hs(l,this.LA(1),this.LA(0)))}raiseNoAltException(e,r){let n=this.getCurrRuleFullName(),a=this.getGAstProductions()[n],o=Uo(e,a,this.maxLookahead),i=[];for(let l=1;l<=this.maxLookahead;l++)i.push(this.LA(l));let s=this.LA(0),u=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:o,actual:i,previous:s,customUserDescription:r,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new fs(u,this.LA(1),s))}};var yc=class{initContentAssist(){}computeContentAssist(e,r){let n=this.gastProductionsCache[e];if(It(n))throw Error(`Rule ->${e}<- does not exist in this grammar.`);return Ql([n],r,this.tokenMatcher,this.maxLookahead)}getNextPossibleTokenTypes(e){let r=ht(e.ruleStack),a=this.getGAstProductions()[r];return new jl(a,e).startWalking()}};var mc={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(mc);var dT=!0,pT=Math.pow(2,8)-1,yT=ql({name:"RECORDING_PHASE_TOKEN",pattern:je.NA});An([yT]);var hT=_a(yT,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(hT);var uL={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},hc=class{initGastRecorder(e){this.recordingProdStack=[],this.RECORDING_PHASE=!1}enableRecording(){this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",()=>{for(let e=0;e<10;e++){let r=e>0?e:"";this[`CONSUME${r}`]=function(n,a){return this.consumeInternalRecord(n,e,a)},this[`SUBRULE${r}`]=function(n,a){return this.subruleInternalRecord(n,e,a)},this[`OPTION${r}`]=function(n){return this.optionInternalRecord(n,e)},this[`OR${r}`]=function(n){return this.orInternalRecord(n,e)},this[`MANY${r}`]=function(n){this.manyInternalRecord(e,n)},this[`MANY_SEP${r}`]=function(n){this.manySepFirstInternalRecord(e,n)},this[`AT_LEAST_ONE${r}`]=function(n){this.atLeastOneInternalRecord(e,n)},this[`AT_LEAST_ONE_SEP${r}`]=function(n){this.atLeastOneSepFirstInternalRecord(e,n)}}this.consume=function(e,r,n){return this.consumeInternalRecord(r,e,n)},this.subrule=function(e,r,n){return this.subruleInternalRecord(r,e,n)},this.option=function(e,r){return this.optionInternalRecord(r,e)},this.or=function(e,r){return this.orInternalRecord(r,e)},this.many=function(e,r){this.manyInternalRecord(e,r)},this.atLeastOne=function(e,r){this.atLeastOneInternalRecord(e,r)},this.ACTION=this.ACTION_RECORD,this.BACKTRACK=this.BACKTRACK_RECORD,this.LA=this.LA_RECORD})}disableRecording(){this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",()=>{let e=this;for(let r=0;r<10;r++){let n=r>0?r:"";delete e[`CONSUME${n}`],delete e[`SUBRULE${n}`],delete e[`OPTION${n}`],delete e[`OR${n}`],delete e[`MANY${n}`],delete e[`MANY_SEP${n}`],delete e[`AT_LEAST_ONE${n}`],delete e[`AT_LEAST_ONE_SEP${n}`]}delete e.consume,delete e.subrule,delete e.option,delete e.or,delete e.many,delete e.atLeastOne,delete e.ACTION,delete e.BACKTRACK,delete e.LA})}ACTION_RECORD(e){}BACKTRACK_RECORD(e,r){return()=>!0}LA_RECORD(e){return Vo}topLevelRuleRecord(e,r){try{let n=new Bt({definition:[],name:e});return n.name=e,this.recordingProdStack.push(n),r.call(this),this.recordingProdStack.pop(),n}catch(n){if(n.KNOWN_RECORDER_ERROR!==!0)try{n.message=n.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw n}throw n}}optionInternalRecord(e,r){return ms.call(this,he,e,r)}atLeastOneInternalRecord(e,r){ms.call(this,xe,r,e)}atLeastOneSepFirstInternalRecord(e,r){ms.call(this,be,r,e,dT)}manyInternalRecord(e,r){ms.call(this,oe,r,e)}manySepFirstInternalRecord(e,r){ms.call(this,we,r,e,dT)}orInternalRecord(e,r){return lL.call(this,e,r)}subruleInternalRecord(e,r,n){if(gc(r),!e||z(e,"ruleName")===!1){let s=new Error(`<SUBRULE${fT(r)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw s.KNOWN_RECORDER_ERROR=!0,s}let a=Zr(this.recordingProdStack),o=e.ruleName,i=new ye({idx:r,nonTerminalName:o,label:n?.LABEL,referencedRule:void 0});return a.definition.push(i),this.outputCst?uL:mc}consumeInternalRecord(e,r,n){if(gc(r),!Yy(e)){let i=new Error(`<CONSUME${fT(r)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw i.KNOWN_RECORDER_ERROR=!0,i}let a=Zr(this.recordingProdStack),o=new ee({idx:r,terminalType:e,label:n?.LABEL});return a.definition.push(o),hT}};function ms(t,e,r,n=!1){gc(r);let a=Zr(this.recordingProdStack),o=Ht(e)?e:e.DEF,i=new t({definition:[],idx:r});return n&&(i.separator=e.SEP),z(e,"MAX_LOOKAHEAD")&&(i.maxLookahead=e.MAX_LOOKAHEAD),this.recordingProdStack.push(i),o.call(this),a.definition.push(i),this.recordingProdStack.pop(),mc}function lL(t,e){gc(e);let r=Zr(this.recordingProdStack),n=F(t)===!1,a=n===!1?t:t.DEF,o=new Se({definition:[],idx:e,ignoreAmbiguities:n&&t.IGNORE_AMBIGUITIES===!0});z(t,"MAX_LOOKAHEAD")&&(o.maxLookahead=t.MAX_LOOKAHEAD);let i=rs(a,s=>Ht(s.GATE));return o.hasPredicates=i,r.definition.push(o),_(a,s=>{let u=new Ce({definition:[]});o.definition.push(u),z(s,"IGNORE_AMBIGUITIES")?u.ignoreAmbiguities=s.IGNORE_AMBIGUITIES:z(s,"GATE")&&(u.ignoreAmbiguities=!0),this.recordingProdStack.push(u),s.ALT.call(this),this.recordingProdStack.pop()}),mc}function fT(t){return t===0?"":`${t}`}function gc(t){if(t<0||t>pT){let e=new Error(`Invalid DSL Method idx value: <${t}>
	Idx value must be a none negative value smaller than ${pT+1}`);throw e.KNOWN_RECORDER_ERROR=!0,e}}var vc=class{initPerformanceTracer(e){if(z(e,"traceInitPerf")){let r=e.traceInitPerf,n=typeof r=="number";this.traceInitMaxIdent=n?r:1/0,this.traceInitPerf=n?r>0:r}else this.traceInitMaxIdent=0,this.traceInitPerf=qt.traceInitPerf;this.traceInitIndent=-1}TRACE_INIT(e,r){if(this.traceInitPerf===!0){this.traceInitIndent++;let n=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${n}--> <${e}>`);let{time:a,value:o}=as(r),i=a>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&i(`${n}<-- <${e}> time: ${a}ms`),this.traceInitIndent--,o}else return r()}};function gT(t,e){e.forEach(r=>{let n=r.prototype;Object.getOwnPropertyNames(n).forEach(a=>{if(a==="constructor")return;let o=Object.getOwnPropertyDescriptor(n,a);o&&(o.get||o.set)?Object.defineProperty(t.prototype,a,o):t.prototype[a]=r.prototype[a]})})}var Vo=_a(yr,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(Vo);var qt=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:Tn,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),Yo=Object.freeze({recoveryValueFunc:()=>{},resyncEnabled:!0}),ct;(function(t){t[t.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",t[t.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",t[t.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",t[t.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",t[t.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",t[t.LEFT_RECURSION=5]="LEFT_RECURSION",t[t.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",t[t.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",t[t.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",t[t.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",t[t.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",t[t.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",t[t.TOO_MANY_ALTS=12]="TOO_MANY_ALTS",t[t.CUSTOM_LOOKAHEAD_VALIDATION=13]="CUSTOM_LOOKAHEAD_VALIDATION"})(ct||(ct={}));function wc(t=void 0){return function(){return t}}var vs=class t{static performSelfAnalysis(e){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")}performSelfAnalysis(){this.TRACE_INIT("performSelfAnalysis",()=>{let e;this.selfAnalysisDone=!0;let r=this.className;this.TRACE_INIT("toFastProps",()=>{os(this)}),this.TRACE_INIT("Grammar Recording",()=>{try{this.enableRecording(),_(this.definedRulesNames,a=>{let i=this[a].originalGrammarAction,s;this.TRACE_INIT(`${a} Rule`,()=>{s=this.topLevelRuleRecord(a,i)}),this.gastProductionsCache[a]=s})}finally{this.disableRecording()}});let n=[];if(this.TRACE_INIT("Grammar Resolving",()=>{n=eT({rules:me(this.gastProductionsCache)}),this.definitionErrors=this.definitionErrors.concat(n)}),this.TRACE_INIT("Grammar Validations",()=>{if(Z(n)&&this.skipValidations===!1){let a=tT({rules:me(this.gastProductionsCache),tokenTypes:me(this.tokensMap),errMsgProvider:Mr,grammarName:r}),o=j$({lookaheadStrategy:this.lookaheadStrategy,rules:me(this.gastProductionsCache),tokenTypes:me(this.tokensMap),grammarName:r});this.definitionErrors=this.definitionErrors.concat(a,o)}}),Z(this.definitionErrors)&&(this.recoveryEnabled&&this.TRACE_INIT("computeAllProdsFollows",()=>{let a=u$(me(this.gastProductionsCache));this.resyncFollows=a}),this.TRACE_INIT("ComputeLookaheadFunctions",()=>{var a,o;(o=(a=this.lookaheadStrategy).initialize)===null||o===void 0||o.call(a,{rules:me(this.gastProductionsCache)}),this.preComputeLookaheadFunctions(me(this.gastProductionsCache))})),!t.DEFER_DEFINITION_ERRORS_HANDLING&&!Z(this.definitionErrors))throw e=I(this.definitionErrors,a=>a.message),new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`)})}constructor(e,r){this.definitionErrors=[],this.selfAnalysisDone=!1;let n=this;if(n.initErrorHandler(r),n.initLexerAdapter(),n.initLooksAhead(r),n.initRecognizerEngine(e,r),n.initRecoverable(r),n.initTreeBuilder(r),n.initContentAssist(),n.initGastRecorder(r),n.initPerformanceTracer(r),z(r,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=z(r,"skipValidations")?r.skipValidations:qt.skipValidations}};vs.DEFER_DEFINITION_ERRORS_HANDLING=!1;gT(vs,[rc,oc,lc,cc,pc,dc,fc,yc,hc,vc]);var ws=class extends vs{constructor(e,r=qt){let n=Te(r);n.outputCst=!1,super(e,n)}};function Oa(t,e,r){return`${t.name}_${e}_${r}`}var Zn=1,dL=2,mT=4,vT=5;var Jo=7,pL=8,fL=9,yL=10,hL=11,wT=12,Ss=class{constructor(e){this.target=e}isEpsilon(){return!1}},Xo=class extends Ss{constructor(e,r){super(e),this.tokenType=r}},As=class extends Ss{constructor(e){super(e)}isEpsilon(){return!0}},Qo=class extends Ss{constructor(e,r,n){super(e),this.rule=r,this.followState=n}isEpsilon(){return!0}};function ST(t){let e={decisionMap:{},decisionStates:[],ruleToStartState:new Map,ruleToStopState:new Map,states:[]};gL(e,t);let r=t.length;for(let n=0;n<r;n++){let a=t[n],o=za(e,a,a);o!==void 0&&kL(e,a,o)}return e}function gL(t,e){let r=e.length;for(let n=0;n<r;n++){let a=e[n],o=gt(t,a,void 0,{type:dL}),i=gt(t,a,void 0,{type:Jo});o.stop=i,t.ruleToStartState.set(a,o),t.ruleToStopState.set(a,i)}}function AT(t,e,r){return r instanceof ee?gh(t,e,r.terminalType,r):r instanceof ye?bL(t,e,r):r instanceof Se?AL(t,e,r):r instanceof he?$L(t,e,r):r instanceof oe?mL(t,e,r):r instanceof we?vL(t,e,r):r instanceof xe?wL(t,e,r):r instanceof be?SL(t,e,r):za(t,e,r)}function mL(t,e,r){let n=gt(t,e,r,{type:vT});ea(t,n);let a=Zo(t,e,n,r,za(t,e,r));return TT(t,e,r,a)}function vL(t,e,r){let n=gt(t,e,r,{type:vT});ea(t,n);let a=Zo(t,e,n,r,za(t,e,r)),o=gh(t,e,r.separator,r);return TT(t,e,r,a,o)}function wL(t,e,r){let n=gt(t,e,r,{type:mT});ea(t,n);let a=Zo(t,e,n,r,za(t,e,r));return $T(t,e,r,a)}function SL(t,e,r){let n=gt(t,e,r,{type:mT});ea(t,n);let a=Zo(t,e,n,r,za(t,e,r)),o=gh(t,e,r.separator,r);return $T(t,e,r,a,o)}function AL(t,e,r){let n=gt(t,e,r,{type:Zn});ea(t,n);let a=I(r.definition,i=>AT(t,e,i));return Zo(t,e,n,r,...a)}function $L(t,e,r){let n=gt(t,e,r,{type:Zn});ea(t,n);let a=Zo(t,e,n,r,za(t,e,r));return TL(t,e,r,a)}function za(t,e,r){let n=yt(I(r.definition,a=>AT(t,e,a)),a=>a!==void 0);return n.length===1?n[0]:n.length===0?void 0:xL(t,n)}function $T(t,e,r,n,a){let o=n.left,i=n.right,s=gt(t,e,r,{type:hL});ea(t,s);let u=gt(t,e,r,{type:wT});return o.loopback=s,u.loopback=s,t.decisionMap[Oa(e,a?"RepetitionMandatoryWithSeparator":"RepetitionMandatory",r.idx)]=s,at(i,s),a===void 0?(at(s,o),at(s,u)):(at(s,u),at(s,a.left),at(a.right,o)),{left:o,right:u}}function TT(t,e,r,n,a){let o=n.left,i=n.right,s=gt(t,e,r,{type:yL});ea(t,s);let u=gt(t,e,r,{type:wT}),l=gt(t,e,r,{type:fL});return s.loopback=l,u.loopback=l,at(s,o),at(s,u),at(i,l),a!==void 0?(at(l,u),at(l,a.left),at(a.right,o)):at(l,s),t.decisionMap[Oa(e,a?"RepetitionWithSeparator":"Repetition",r.idx)]=s,{left:s,right:u}}function TL(t,e,r,n){let a=n.left,o=n.right;return at(a,o),t.decisionMap[Oa(e,"Option",r.idx)]=a,n}function ea(t,e){return t.decisionStates.push(e),e.decision=t.decisionStates.length-1,e.decision}function Zo(t,e,r,n,...a){let o=gt(t,e,n,{type:pL,start:r});r.end=o;for(let s of a)s!==void 0?(at(r,s.left),at(s.right,o)):at(r,o);let i={left:r,right:o};return t.decisionMap[Oa(e,CL(n),n.idx)]=r,i}function CL(t){if(t instanceof Se)return"Alternation";if(t instanceof he)return"Option";if(t instanceof oe)return"Repetition";if(t instanceof we)return"RepetitionWithSeparator";if(t instanceof xe)return"RepetitionMandatory";if(t instanceof be)return"RepetitionMandatoryWithSeparator";throw new Error("Invalid production type encountered")}function xL(t,e){let r=e.length;for(let o=0;o<r-1;o++){let i=e[o],s;i.left.transitions.length===1&&(s=i.left.transitions[0]);let u=s instanceof Qo,l=s,c=e[o+1].left;i.left.type===Zn&&i.right.type===Zn&&s!==void 0&&(u&&l.followState===i.right||s.target===i.right)?(u?l.followState=c:s.target=c,RL(t,i.right)):at(i.right,c)}let n=e[0],a=e[r-1];return{left:n.left,right:a.right}}function gh(t,e,r,n){let a=gt(t,e,n,{type:Zn}),o=gt(t,e,n,{type:Zn});return mh(a,new Xo(o,r)),{left:a,right:o}}function bL(t,e,r){let n=r.referencedRule,a=t.ruleToStartState.get(n),o=gt(t,e,r,{type:Zn}),i=gt(t,e,r,{type:Zn}),s=new Qo(a,n,i);return mh(o,s),{left:o,right:i}}function kL(t,e,r){let n=t.ruleToStartState.get(e);at(n,r.left);let a=t.ruleToStopState.get(e);return at(r.right,a),{left:n,right:a}}function at(t,e){let r=new As(e);mh(t,r)}function gt(t,e,r,n){let a=Object.assign({atn:t,production:r,epsilonOnlyTransitions:!1,rule:e,transitions:[],nextTokenWithinRule:[],stateNumber:t.states.length},n);return t.states.push(a),a}function mh(t,e){t.transitions.length===0&&(t.epsilonOnlyTransitions=e.isEpsilon()),t.transitions.push(e)}function RL(t,e){t.states.splice(t.states.indexOf(e),1)}var $s={},ei=class{constructor(){this.map={},this.configs=[]}get size(){return this.configs.length}finalize(){this.map={}}add(e){let r=vh(e);r in this.map||(this.map[r]=this.configs.length,this.configs.push(e))}get elements(){return this.configs}get alts(){return I(this.configs,e=>e.alt)}get key(){let e="";for(let r in this.map)e+=r+":";return e}};function vh(t,e=!0){return`${e?`a${t.alt}`:""}s${t.state.stateNumber}:${t.stack.map(r=>r.stateNumber.toString()).join("_")}`}function KL(t,e){let r={};return n=>{let a=n.toString(),o=r[a];return o!==void 0||(o={atnStartState:t,decision:e,states:{}},r[a]=o),o}}var Sc=class{constructor(){this.predicates=[]}is(e){return e>=this.predicates.length||this.predicates[e]}set(e,r){this.predicates[e]=r}toString(){let e="",r=this.predicates.length;for(let n=0;n<r;n++)e+=this.predicates[n]===!0?"1":"0";return e}},CT=new Sc,Ts=class extends Cn{constructor(e){var r;super(),this.logging=(r=e?.logging)!==null&&r!==void 0?r:n=>console.log(n)}initialize(e){this.atn=ST(e.rules),this.dfas=PL(this.atn)}validateAmbiguousAlternationAlternatives(){return[]}validateEmptyOrAlternatives(){return[]}buildLookaheadForAlternation(e){let{prodOccurrence:r,rule:n,hasPredicates:a,dynamicTokensEnabled:o}=e,i=this.dfas,s=this.logging,u=Oa(n,"Alternation",r),c=this.atn.decisionMap[u].decision,d=I(Zl({maxLookahead:1,occurrence:r,prodType:"Alternation",rule:n}),p=>I(p,y=>y[0]));if(xT(d,!1)&&!o){let p=We(d,(y,v,S)=>(_(v,T=>{T&&(y[T.tokenTypeIdx]=S,_(T.categoryMatches,A=>{y[A]=S}))}),y),{});return a?function(y){var v;let S=this.LA(1),T=p[S.tokenTypeIdx];if(y!==void 0&&T!==void 0){let A=(v=y[T])===null||v===void 0?void 0:v.GATE;if(A!==void 0&&A.call(this)===!1)return}return T}:function(){let y=this.LA(1);return p[y.tokenTypeIdx]}}else return a?function(p){let y=new Sc,v=p===void 0?0:p.length;for(let T=0;T<v;T++){let A=p?.[T].GATE;y.set(T,A===void 0||A.call(this))}let S=wh.call(this,i,c,y,s);return typeof S=="number"?S:void 0}:function(){let p=wh.call(this,i,c,CT,s);return typeof p=="number"?p:void 0}}buildLookaheadForOptional(e){let{prodOccurrence:r,rule:n,prodType:a,dynamicTokensEnabled:o}=e,i=this.dfas,s=this.logging,u=Oa(n,a,r),c=this.atn.decisionMap[u].decision,d=I(Zl({maxLookahead:1,occurrence:r,prodType:a,rule:n}),p=>I(p,y=>y[0]));if(xT(d)&&d[0][0]&&!o){let p=d[0],y=et(p);if(y.length===1&&Z(y[0].categoryMatches)){let S=y[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===S}}else{let v=We(y,(S,T)=>(T!==void 0&&(S[T.tokenTypeIdx]=!0,_(T.categoryMatches,A=>{S[A]=!0})),S),{});return function(){let S=this.LA(1);return v[S.tokenTypeIdx]===!0}}}return function(){let p=wh.call(this,i,c,CT,s);return typeof p=="object"?!1:p===0}}};function xT(t,e=!0){let r=new Set;for(let n of t){let a=new Set;for(let o of n){if(o===void 0){if(e)break;return!1}let i=[o.tokenTypeIdx].concat(o.categoryMatches);for(let s of i)if(r.has(s)){if(!a.has(s))return!1}else r.add(s),a.add(s)}}return!0}function PL(t){let e=t.decisionStates.length,r=Array(e);for(let n=0;n<e;n++)r[n]=KL(t.decisionStates[n],n);return r}function wh(t,e,r,n){let a=t[e](r),o=a.start;if(o===void 0){let s=WL(a.atnStartState);o=RT(a,kT(s)),a.start=o}return IL.apply(this,[a,o,r,n])}function IL(t,e,r,n){let a=e,o=1,i=[],s=this.LA(o++);for(;;){let u=OL(a,s);if(u===void 0&&(u=EL.apply(this,[t,a,s,o,r,n])),u===$s)return ML(i,a,s);if(u.isAcceptState===!0)return u.prediction;a=u,i.push(s),s=this.LA(o++)}}function EL(t,e,r,n,a,o){let i=zL(e.configs,r,a);if(i.size===0)return bT(t,e,r,$s),$s;let s=kT(i),u=FL(i,a);if(u!==void 0)s.isAcceptState=!0,s.prediction=u,s.configs.uniqueAlt=u;else if(UL(i)){let l=ZA(i.alts);s.isAcceptState=!0,s.prediction=l,s.configs.uniqueAlt=l,DL.apply(this,[t,n,i.alts,o])}return s=bT(t,e,r,s),s}function DL(t,e,r,n){let a=[];for(let l=1;l<=e;l++)a.push(this.LA(l).tokenType);let o=t.atnStartState,i=o.rule,s=o.production,u=NL({topLevelRule:i,ambiguityIndices:r,production:s,prefixPath:a});n(u)}function NL(t){let e=I(t.prefixPath,a=>$n(a)).join(", "),r=t.production.idx===0?"":t.production.idx,n=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(", ")}> in <${_L(t.production)}${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n}function _L(t){if(t instanceof ye)return"SUBRULE";if(t instanceof he)return"OPTION";if(t instanceof Se)return"OR";if(t instanceof xe)return"AT_LEAST_ONE";if(t instanceof be)return"AT_LEAST_ONE_SEP";if(t instanceof we)return"MANY_SEP";if(t instanceof oe)return"MANY";if(t instanceof ee)return"CONSUME";throw Error("non exhaustive match")}function ML(t,e,r){let n=Ct(e.configs.elements,o=>o.state.transitions),a=i$(n.filter(o=>o instanceof Xo).map(o=>o.tokenType),o=>o.tokenTypeIdx);return{actualToken:r,possibleTokenTypes:a,tokenPath:t}}function OL(t,e){return t.edges[e.tokenTypeIdx]}function zL(t,e,r){let n=new ei,a=[];for(let i of t.elements){if(r.is(i.alt)===!1)continue;if(i.state.type===Jo){a.push(i);continue}let s=i.state.transitions.length;for(let u=0;u<s;u++){let l=i.state.transitions[u],c=LL(l,e);c!==void 0&&n.add({state:c,alt:i.alt,stack:i.stack})}}let o;if(a.length===0&&n.size===1&&(o=n),o===void 0){o=new ei;for(let i of n.elements)Ac(i,o)}if(a.length>0&&!HL(o))for(let i of a)o.add(i);return o}function LL(t,e){if(t instanceof Xo&&us(e,t.tokenType))return t.target}function FL(t,e){let r;for(let n of t.elements)if(e.is(n.alt)===!0){if(r===void 0)r=n.alt;else if(r!==n.alt)return}return r}function kT(t){return{configs:t,edges:{},isAcceptState:!1,prediction:-1}}function bT(t,e,r,n){return n=RT(t,n),e.edges[r.tokenTypeIdx]=n,n}function RT(t,e){if(e===$s)return e;let r=e.configs.key,n=t.states[r];return n!==void 0?n:(e.configs.finalize(),t.states[r]=e,e)}function WL(t){let e=new ei,r=t.transitions.length;for(let n=0;n<r;n++){let o={state:t.transitions[n].target,alt:n,stack:[]};Ac(o,e)}return e}function Ac(t,e){let r=t.state;if(r.type===Jo){if(t.stack.length>0){let a=[...t.stack],i={state:a.pop(),alt:t.alt,stack:a};Ac(i,e)}else e.add(t);return}r.epsilonOnlyTransitions||e.add(t);let n=r.transitions.length;for(let a=0;a<n;a++){let o=r.transitions[a],i=GL(t,o);i!==void 0&&Ac(i,e)}}function GL(t,e){if(e instanceof As)return{state:e.target,alt:t.alt,stack:t.stack};if(e instanceof Qo){let r=[...t.stack,e.followState];return{state:e.target,alt:t.alt,stack:r}}}function HL(t){for(let e of t.elements)if(e.state.type===Jo)return!0;return!1}function BL(t){for(let e of t.elements)if(e.state.type!==Jo)return!1;return!0}function UL(t){if(BL(t))return!0;let e=qL(t.elements);return jL(e)&&!VL(e)}function qL(t){let e=new Map;for(let r of t){let n=vh(r,!1),a=e.get(n);a===void 0&&(a={},e.set(n,a)),a[r.alt]=!0}return e}function jL(t){for(let e of Array.from(t.values()))if(Object.keys(e).length>1)return!0;return!1}function VL(t){for(let e of Array.from(t.values()))if(Object.keys(e).length===1)return!0;return!1}Wa();var Is=class{constructor(){this.nodeStack=[]}get current(){return this.nodeStack[this.nodeStack.length-1]}buildRootNode(e){return this.rootNode=new ii(e),this.rootNode.root=this.rootNode,this.nodeStack=[this.rootNode],this.rootNode}buildCompositeNode(e){let r=new Ha;return r.grammarSource=e,r.root=this.rootNode,this.current.content.push(r),this.nodeStack.push(r),r}buildLeafNode(e,r){let n=new Ga(e.startOffset,e.image.length,oo(e),e.tokenType,!1);return n.grammarSource=r,n.root=this.rootNode,this.current.content.push(n),n}removeNode(e){let r=e.container;if(r){let n=r.content.indexOf(e);n>=0&&r.content.splice(n,1)}}construct(e){let r=this.current;typeof e.$type=="string"&&(this.current.astNode=e),e.$cstNode=r;let n=this.nodeStack.pop();n?.content.length===0&&this.removeNode(n)}addHiddenTokens(e){for(let r of e){let n=new Ga(r.startOffset,r.image.length,oo(r),r.tokenType,!0);n.root=this.rootNode,this.addHiddenToken(this.rootNode,n)}}addHiddenToken(e,r){let{offset:n,end:a}=r;for(let o=0;o<e.content.length;o++){let i=e.content[o],{offset:s,end:u}=i;if(Ft(i)&&n>s&&a<u){this.addHiddenToken(i,r);return}else if(a<=s){e.content.splice(o,0,r);return}}e.content.push(r)}},Es=class{get parent(){return this.container}get feature(){return this.grammarSource}get hidden(){return!1}get astNode(){var e,r;let n=typeof((e=this._astNode)===null||e===void 0?void 0:e.$type)=="string"?this._astNode:(r=this.container)===null||r===void 0?void 0:r.astNode;if(!n)throw new Error("This node has no associated AST element");return n}set astNode(e){this._astNode=e}get element(){return this.astNode}get text(){return this.root.fullText.substring(this.offset,this.end)}},Ga=class extends Es{get offset(){return this._offset}get length(){return this._length}get end(){return this._offset+this._length}get hidden(){return this._hidden}get tokenType(){return this._tokenType}get range(){return this._range}constructor(e,r,n,a,o=!1){super(),this._hidden=o,this._offset=e,this._tokenType=a,this._length=r,this._range=n}},Ha=class extends Es{constructor(){super(...arguments),this.content=new $g(this)}get children(){return this.content}get offset(){var e,r;return(r=(e=this.firstNonHiddenNode)===null||e===void 0?void 0:e.offset)!==null&&r!==void 0?r:0}get length(){return this.end-this.offset}get end(){var e,r;return(r=(e=this.lastNonHiddenNode)===null||e===void 0?void 0:e.end)!==null&&r!==void 0?r:0}get range(){let e=this.firstNonHiddenNode,r=this.lastNonHiddenNode;if(e&&r){if(this._rangeCache===void 0){let{range:n}=e,{range:a}=r;this._rangeCache={start:n.start,end:a.end.line<n.start.line?n.start:a.end}}return this._rangeCache}else return{start:ue.create(0,0),end:ue.create(0,0)}}get firstNonHiddenNode(){for(let e of this.content)if(!e.hidden)return e;return this.content[0]}get lastNonHiddenNode(){for(let e=this.content.length-1;e>=0;e--){let r=this.content[e];if(!r.hidden)return r}return this.content[this.content.length-1]}},$g=class t extends Array{constructor(e){super(),this.parent=e,Object.setPrototypeOf(this,t.prototype)}push(...e){return this.addParents(e),super.push(...e)}unshift(...e){return this.addParents(e),super.unshift(...e)}splice(e,r,...n){return this.addParents(n),super.splice(e,r,...n)}addParents(e){for(let r of e)r.container=this.parent}},ii=class extends Ha{get text(){return this._text.substring(this.offset,this.end)}get fullText(){return this._text}constructor(e){super(),this._text="",this._text=e??""}};var Ic=Symbol("Datatype");function Tg(t){return t.$type===Ic}var KT="\u200B",PT=t=>t.endsWith(KT)?t:t+KT,Ds=class{constructor(e){this._unorderedGroups=new Map,this.lexer=e.parser.Lexer;let r=this.lexer.definition;this.wrapper=new Cg(r,Object.assign(Object.assign({},e.parser.ParserConfig),{errorMessageProvider:e.parser.ParserErrorMessageProvider}))}alternatives(e,r){this.wrapper.wrapOr(e,r)}optional(e,r){this.wrapper.wrapOption(e,r)}many(e,r){this.wrapper.wrapMany(e,r)}atLeastOne(e,r){this.wrapper.wrapAtLeastOne(e,r)}isRecording(){return this.wrapper.IS_RECORDING}get unorderedGroups(){return this._unorderedGroups}getRuleStack(){return this.wrapper.RULE_STACK}finalize(){this.wrapper.wrapSelfAnalysis()}},Ns=class extends Ds{get current(){return this.stack[this.stack.length-1]}constructor(e){super(e),this.nodeBuilder=new Is,this.stack=[],this.assignmentMap=new Map,this.linker=e.references.Linker,this.converter=e.parser.ValueConverter,this.astReflection=e.shared.AstReflection}rule(e,r){let n=e.fragment?void 0:Ji(e)?Ic:yn(e),a=this.wrapper.DEFINE_RULE(PT(e.name),this.startImplementation(n,r).bind(this));return e.entry&&(this.mainRule=a),a}parse(e){this.nodeBuilder.buildRootNode(e);let r=this.lexer.tokenize(e);this.wrapper.input=r.tokens;let n=this.mainRule.call(this.wrapper,{});return this.nodeBuilder.addHiddenTokens(r.hidden),this.unorderedGroups.clear(),{value:n,lexerErrors:r.errors,parserErrors:this.wrapper.errors}}startImplementation(e,r){return n=>{if(!this.isRecording()){let o={$type:e};this.stack.push(o),e===Ic&&(o.value="")}let a;try{a=r(n)}catch{a=void 0}return!this.isRecording()&&a===void 0&&(a=this.construct()),a}}consume(e,r,n){let a=this.wrapper.wrapConsume(e,r);if(!this.isRecording()&&this.isValidToken(a)){let o=this.nodeBuilder.buildLeafNode(a,n),{assignment:i,isCrossRef:s}=this.getAssignment(n),u=this.current;if(i){let l=$t(n)?a.image:this.converter.convert(a.image,o);this.assign(i.operator,i.feature,l,o,s)}else if(Tg(u)){let l=a.image;$t(n)||(l=this.converter.convert(l,o).toString()),u.value+=l}}}isValidToken(e){return!e.isInsertedInRecovery&&!isNaN(e.startOffset)&&typeof e.endOffset=="number"&&!isNaN(e.endOffset)}subrule(e,r,n,a){let o;this.isRecording()||(o=this.nodeBuilder.buildCompositeNode(n));let i=this.wrapper.wrapSubrule(e,r,a);!this.isRecording()&&o&&o.length>0&&this.performSubruleAssignment(i,n,o)}performSubruleAssignment(e,r,n){let{assignment:a,isCrossRef:o}=this.getAssignment(r);if(a)this.assign(a.operator,a.feature,e,n,o);else if(!a){let i=this.current;if(Tg(i))i.value+=e.toString();else if(typeof e=="object"&&e){let s=e.$type,u=this.assignWithoutOverride(e,i);s&&(u.$type=s);let l=u;this.stack.pop(),this.stack.push(l)}}}action(e,r){if(!this.isRecording()){let n=this.current;if(!n.$cstNode&&r.feature&&r.operator){n=this.construct(!1);let o=n.$cstNode.feature;this.nodeBuilder.buildCompositeNode(o)}let a={$type:e};this.stack.pop(),this.stack.push(a),r.feature&&r.operator&&this.assign(r.operator,r.feature,n,n.$cstNode,!1)}}construct(e=!0){if(this.isRecording())return;let r=this.current;return el(r),this.nodeBuilder.construct(r),e&&this.stack.pop(),Tg(r)?this.converter.convert(r.value,r.$cstNode):(Ui(this.astReflection,r),r)}getAssignment(e){if(!this.assignmentMap.has(e)){let r=pr(e,Kt);this.assignmentMap.set(e,{assignment:r,isCrossRef:r?Nr(r.terminal):!1})}return this.assignmentMap.get(e)}assign(e,r,n,a,o){let i=this.current,s;switch(o&&typeof n=="string"?s=this.linker.buildReference(i,r,a,n):s=n,e){case"=":{i[r]=s;break}case"?=":{i[r]=!0;break}case"+=":Array.isArray(i[r])||(i[r]=[]),i[r].push(s)}}assignWithoutOverride(e,r){for(let[n,a]of Object.entries(r)){let o=e[n];o===void 0?e[n]=a:Array.isArray(o)&&Array.isArray(a)&&(a.push(...o),e[n]=a)}return e}get definitionErrors(){return this.wrapper.definitionErrors}},Ec=class{buildMismatchTokenMessage(e){return Tn.buildMismatchTokenMessage(e)}buildNotAllInputParsedMessage(e){return Tn.buildNotAllInputParsedMessage(e)}buildNoViableAltMessage(e){return Tn.buildNoViableAltMessage(e)}buildEarlyExitMessage(e){return Tn.buildEarlyExitMessage(e)}},si=class extends Ec{buildMismatchTokenMessage({expected:e,actual:r}){return`Expecting ${e.LABEL?"`"+e.LABEL+"`":e.name.endsWith(":KW")?`keyword '${e.name.substring(0,e.name.length-3)}'`:`token of type '${e.name}'`} but found \`${r.image}\`.`}buildNotAllInputParsedMessage({firstRedundant:e}){return`Expecting end of file but found \`${e.image}\`.`}},_s=class extends Ds{constructor(){super(...arguments),this.tokens=[],this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}action(){}construct(){}parse(e){this.resetState();let r=this.lexer.tokenize(e);return this.tokens=r.tokens,this.wrapper.input=[...this.tokens],this.mainRule.call(this.wrapper,{}),this.unorderedGroups.clear(),{tokens:this.tokens,elementStack:[...this.lastElementStack],tokenIndex:this.nextTokenIndex}}rule(e,r){let n=this.wrapper.DEFINE_RULE(PT(e.name),this.startImplementation(r).bind(this));return e.entry&&(this.mainRule=n),n}resetState(){this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}startImplementation(e){return r=>{let n=this.keepStackSize();try{e(r)}finally{this.resetStackSize(n)}}}removeUnexpectedElements(){this.elementStack.splice(this.stackSize)}keepStackSize(){let e=this.elementStack.length;return this.stackSize=e,e}resetStackSize(e){this.removeUnexpectedElements(),this.stackSize=e}consume(e,r,n){this.wrapper.wrapConsume(e,r),this.isRecording()||(this.lastElementStack=[...this.elementStack,n],this.nextTokenIndex=this.currIdx+1)}subrule(e,r,n,a){this.before(n),this.wrapper.wrapSubrule(e,r,a),this.after(n)}before(e){this.isRecording()||this.elementStack.push(e)}after(e){if(!this.isRecording()){let r=this.elementStack.lastIndexOf(e);r>=0&&this.elementStack.splice(r)}}get currIdx(){return this.wrapper.currIdx}},XL={recoveryEnabled:!0,nodeLocationTracking:"full",skipValidations:!0,errorMessageProvider:new si},Cg=class extends ws{constructor(e,r){let n=r&&"maxLookahead"in r;super(e,Object.assign(Object.assign(Object.assign({},XL),{lookaheadStrategy:n?new Cn({maxLookahead:r.maxLookahead}):new Ts}),r))}get IS_RECORDING(){return this.RECORDING_PHASE}DEFINE_RULE(e,r){return this.RULE(e,r)}wrapSelfAnalysis(){this.performSelfAnalysis()}wrapConsume(e,r){return this.consume(e,r)}wrapSubrule(e,r,n){return this.subrule(e,r,{ARGS:[n]})}wrapOr(e,r){this.or(e,r)}wrapOption(e,r){this.option(e,r)}wrapMany(e,r){this.many(e,r)}wrapAtLeastOne(e,r){this.atLeastOne(e,r)}};function Nc(t,e,r){return QL({parser:e,tokens:r,rules:new Map,ruleNames:new Map},t),e}function QL(t,e){let r=Xi(e,!1),n=te(e.rules).filter(Ue).filter(a=>r.has(a));for(let a of n){let o=Object.assign(Object.assign({},t),{consume:1,optional:1,subrule:1,many:1,or:1});o.rules.set(a.name,t.parser.rule(a,Ba(o,a.definition)))}}function Ba(t,e,r=!1){let n;if($t(e))n=a0(t,e);else if(Dr(e))n=JL(t,e);else if(Kt(e))n=Ba(t,e.terminal);else if(Nr(e))n=IT(t,e);else if(Qt(e))n=ZL(t,e);else if(so(e))n=t0(t,e);else if(uo(e))n=r0(t,e);else if(Sr(e))n=n0(t,e);else if(Qf(e)){let a=t.consume++;n=()=>t.parser.consume(a,yr,e)}else throw new Sa(e.$cstNode,`Unexpected element type: ${e.$type}`);return ET(t,r?void 0:Dc(e),n,e.cardinality)}function JL(t,e){let r=yn(e);return()=>t.parser.action(r,e)}function ZL(t,e){let r=e.rule.ref;if(Ue(r)){let n=t.subrule++,a=e.arguments.length>0?e0(r,e.arguments):()=>({});return o=>t.parser.subrule(n,DT(t,r),e,a(o))}else if(Xt(r)){let n=t.consume++,a=xg(t,r.name);return()=>t.parser.consume(n,a,e)}else if(r)_n(r);else throw new Sa(e.$cstNode,`Undefined rule type: ${e.$type}`)}function e0(t,e){let r=e.map(n=>bn(n.value));return n=>{let a={};for(let o=0;o<r.length;o++){let i=t.parameters[o],s=r[o];a[i.name]=s(n)}return a}}function bn(t){if(xf(t)){let e=bn(t.left),r=bn(t.right);return n=>e(n)||r(n)}else if(Tf(t)){let e=bn(t.left),r=bn(t.right);return n=>e(n)&&r(n)}else if(Pf(t)){let e=bn(t.value);return r=>!e(r)}else if(Nf(t)){let e=t.parameter.ref.name;return r=>r!==void 0&&r[e]===!0}else if(Af(t)){let e=!!t.true;return()=>e}_n(t)}function t0(t,e){if(e.elements.length===1)return Ba(t,e.elements[0]);{let r=[];for(let a of e.elements){let o={ALT:Ba(t,a,!0)},i=Dc(a);i&&(o.GATE=bn(i)),r.push(o)}let n=t.or++;return a=>t.parser.alternatives(n,r.map(o=>{let i={ALT:()=>o.ALT(a)},s=o.GATE;return s&&(i.GATE=()=>s(a)),i}))}}function r0(t,e){if(e.elements.length===1)return Ba(t,e.elements[0]);let r=[];for(let s of e.elements){let u={ALT:Ba(t,s,!0)},l=Dc(s);l&&(u.GATE=bn(l)),r.push(u)}let n=t.or++,a=(s,u)=>{let l=u.getRuleStack().join("-");return`uGroup_${s}_${l}`},o=s=>t.parser.alternatives(n,r.map((u,l)=>{let c={ALT:()=>!0},d=t.parser;c.ALT=()=>{if(u.ALT(s),!d.isRecording()){let y=a(n,d);d.unorderedGroups.get(y)||d.unorderedGroups.set(y,[]);let v=d.unorderedGroups.get(y);typeof v?.[l]>"u"&&(v[l]=!0)}};let p=u.GATE;return p?c.GATE=()=>p(s):c.GATE=()=>{let y=d.unorderedGroups.get(a(n,d));return!y?.[l]},c})),i=ET(t,Dc(e),o,"*");return s=>{i(s),t.parser.isRecording()||t.parser.unorderedGroups.delete(a(n,t.parser))}}function n0(t,e){let r=e.elements.map(n=>Ba(t,n));return n=>r.forEach(a=>a(n))}function Dc(t){if(Sr(t))return t.guardCondition}function IT(t,e,r=e.terminal){if(r)if(Qt(r)&&Ue(r.rule.ref)){let n=t.subrule++;return a=>t.parser.subrule(n,DT(t,r.rule.ref),e,a)}else if(Qt(r)&&Xt(r.rule.ref)){let n=t.consume++,a=xg(t,r.rule.ref.name);return()=>t.parser.consume(n,a,e)}else if($t(r)){let n=t.consume++,a=xg(t,r.value);return()=>t.parser.consume(n,a,e)}else throw new Error("Could not build cross reference parser");else{if(!e.type.ref)throw new Error("Could not resolve reference to type: "+e.type.$refText);let n=sl(e.type.ref),a=n?.terminal;if(!a)throw new Error("Could not find name assignment for type: "+yn(e.type.ref));return IT(t,e,a)}}function a0(t,e){let r=t.consume++,n=t.tokens[e.value];if(!n)throw new Error("Could not find token for keyword: "+e.value);return()=>t.parser.consume(r,n,e)}function ET(t,e,r,n){let a=e&&bn(e);if(!n)if(a){let o=t.or++;return i=>t.parser.alternatives(o,[{ALT:()=>r(i),GATE:()=>a(i)},{ALT:wc(),GATE:()=>!a(i)}])}else return r;if(n==="*"){let o=t.many++;return i=>t.parser.many(o,{DEF:()=>r(i),GATE:a?()=>a(i):void 0})}else if(n==="+"){let o=t.many++;if(a){let i=t.or++;return s=>t.parser.alternatives(i,[{ALT:()=>t.parser.atLeastOne(o,{DEF:()=>r(s)}),GATE:()=>a(s)},{ALT:wc(),GATE:()=>!a(s)}])}else return i=>t.parser.atLeastOne(o,{DEF:()=>r(i)})}else if(n==="?"){let o=t.optional++;return i=>t.parser.optional(o,{DEF:()=>r(i),GATE:a?()=>a(i):void 0})}else _n(n)}function DT(t,e){let r=o0(t,e),n=t.rules.get(r);if(!n)throw new Error(`Rule "${r}" not found."`);return n}function o0(t,e){if(Ue(e))return e.name;if(t.ruleNames.has(e))return t.ruleNames.get(e);{let r=e,n=r.$container,a=e.$type;for(;!Ue(n);)(Sr(n)||so(n)||uo(n))&&(a=n.elements.indexOf(r).toString()+":"+a),r=n,n=n.$container;return a=n.name+":"+a,t.ruleNames.set(e,a),a}}function xg(t,e){let r=t.tokens[e];if(!r)throw new Error(`Token "${e}" not found."`);return r}function bg(t){let e=t.Grammar,r=t.parser.Lexer,n=new _s(t);return Nc(e,n,r.definition),n.finalize(),n}function kg(t){let e=NT(t);return e.finalize(),e}function NT(t){let e=t.Grammar,r=t.parser.Lexer,n=new Ns(t);return Nc(e,n,r.definition)}var Ms=class{buildTokens(e,r){let n=te(Xi(e,!1)),a=this.buildTerminalTokens(n),o=this.buildKeywordTokens(n,a,r);return a.forEach(i=>{let s=i.PATTERN;typeof s=="object"&&s&&"test"in s&&al(s)?o.unshift(i):o.push(i)}),o}buildTerminalTokens(e){return e.filter(Xt).filter(r=>!r.fragment).map(r=>this.buildTerminalToken(r)).toArray()}buildTerminalToken(e){let r=On(e),n=this.requiresCustomPattern(r)?this.regexPatternFunction(r):r,a={name:e.name,PATTERN:n,LINE_BREAKS:!0};return e.hidden&&(a.GROUP=al(r)?je.SKIPPED:"hidden"),a}requiresCustomPattern(e){return e.flags.includes("u")?!0:!!(e.source.includes("?<=")||e.source.includes("?<!"))}regexPatternFunction(e){let r=new RegExp(e,e.flags+"y");return(n,a)=>(r.lastIndex=a,r.exec(n))}buildKeywordTokens(e,r,n){return e.filter(Ue).flatMap(a=>Jt(a).filter($t)).distinct(a=>a.value).toArray().sort((a,o)=>o.value.length-a.value.length).map(a=>this.buildKeywordToken(a,r,!!n?.caseInsensitive))}buildKeywordToken(e,r,n){return{name:e.value,PATTERN:this.buildKeywordPattern(e,n),LONGER_ALT:this.findLongerAlt(e,r)}}buildKeywordPattern(e,r){return r?new RegExp($y(e.value)):e.value}findLongerAlt(e,r){return r.reduce((n,a)=>{let o=a?.PATTERN;return o?.source&&Ty("^"+o.source+"$",e.value)&&n.push(a),n},[])}};var Os=class{convert(e,r){let n=r.grammarSource;if(Nr(n)&&(n=Qi(n)),Qt(n)){let a=n.rule.ref;if(!a)throw new Error("This cst node was not parsed by a rule.");return this.runConverter(a,e,r)}return e}runConverter(e,r,n){var a;switch(e.name.toUpperCase()){case"INT":return rn.convertInt(r);case"STRING":return rn.convertString(r);case"ID":return rn.convertID(r)}switch((a=Iy(e))===null||a===void 0?void 0:a.toLowerCase()){case"number":return rn.convertNumber(r);case"boolean":return rn.convertBoolean(r);case"bigint":return rn.convertBigint(r);case"date":return rn.convertDate(r);default:return r}}},rn;(function(t){function e(l){let c="";for(let d=1;d<l.length-1;d++){let p=l.charAt(d);if(p==="\\"){let y=l.charAt(++d);c+=r(y)}else c+=p}return c}t.convertString=e;function r(l){switch(l){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"0":return"\0";default:return l}}function n(l){return l.charAt(0)==="^"?l.substring(1):l}t.convertID=n;function a(l){return parseInt(l)}t.convertInt=a;function o(l){return BigInt(l)}t.convertBigint=o;function i(l){return new Date(l)}t.convertDate=i;function s(l){return Number(l)}t.convertNumber=s;function u(l){return l.toLowerCase()==="true"}t.convertBoolean=u})(rn||(rn={}));var L={};ie(L,Lt(zs(),1));function _g(){return new Promise(t=>{typeof setImmediate>"u"?setTimeout(t,0):setImmediate(t)})}var Ng=0,zT=10;function LT(){return Ng=Date.now(),new L.CancellationTokenSource}function FT(t){zT=t}var kn=Symbol("OperationCancelled");function nn(t){return t===kn}async function Ge(t){if(t===L.CancellationToken.None)return;let e=Date.now();if(e-Ng>=zT&&(Ng=e,await _g()),t.isCancellationRequested)throw kn}var Or=class{constructor(){this.promise=new Promise((e,r)=>{this.resolve=n=>(e(n),this),this.reject=n=>(r(n),this)})}};var zc=class t{constructor(e,r,n,a){this._uri=e,this._languageId=r,this._version=n,this._content=a,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let r=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(r,n)}return this._content}update(e,r){for(let n of e)if(t.isIncremental(n)){let a=HT(n.range),o=this.offsetAt(a.start),i=this.offsetAt(a.end);this._content=this._content.substring(0,o)+n.text+this._content.substring(i,this._content.length);let s=Math.max(a.start.line,0),u=Math.max(a.end.line,0),l=this._lineOffsets,c=WT(n.text,!1,o);if(u-s===c.length)for(let p=0,y=c.length;p<y;p++)l[p+s+1]=c[p];else c.length<1e4?l.splice(s+1,u-s,...c):this._lineOffsets=l=l.slice(0,s+1).concat(c,l.slice(u+1));let d=n.text.length-(i-o);if(d!==0)for(let p=s+1+c.length,y=l.length;p<y;p++)l[p]=l[p]+d}else if(t.isFull(n))this._content=n.text,this._lineOffsets=void 0;else throw new Error("Unknown change event received");this._version=r}getLineOffsets(){return this._lineOffsets===void 0&&(this._lineOffsets=WT(this._content,!0)),this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let r=this.getLineOffsets(),n=0,a=r.length;if(a===0)return{line:0,character:e};for(;n<a;){let i=Math.floor((n+a)/2);r[i]>e?a=i:n=i+1}let o=n-1;return e=this.ensureBeforeEOL(e,r[o]),{line:o,character:e-r[o]}}offsetAt(e){let r=this.getLineOffsets();if(e.line>=r.length)return this._content.length;if(e.line<0)return 0;let n=r[e.line];if(e.character<=0)return n;let a=e.line+1<r.length?r[e.line+1]:this._content.length,o=Math.min(n+e.character,a);return this.ensureBeforeEOL(o,n)}ensureBeforeEOL(e,r){for(;e>r&&GT(this._content.charCodeAt(e-1));)e--;return e}get lineCount(){return this.getLineOffsets().length}static isIncremental(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range!==void 0&&(r.rangeLength===void 0||typeof r.rangeLength=="number")}static isFull(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range===void 0&&r.rangeLength===void 0}},ra;(function(t){function e(a,o,i,s){return new zc(a,o,i,s)}t.create=e;function r(a,o,i){if(a instanceof zc)return a.update(o,i),a;throw new Error("TextDocument.update: document must be created by TextDocument.create")}t.update=r;function n(a,o){let i=a.getText(),s=Mg(o.map(h0),(c,d)=>{let p=c.range.start.line-d.range.start.line;return p===0?c.range.start.character-d.range.start.character:p}),u=0,l=[];for(let c of s){let d=a.offsetAt(c.range.start);if(d<u)throw new Error("Overlapping edit");d>u&&l.push(i.substring(u,d)),c.newText.length&&l.push(c.newText),u=a.offsetAt(c.range.end)}return l.push(i.substr(u)),l.join("")}t.applyEdits=n})(ra||(ra={}));function Mg(t,e){if(t.length<=1)return t;let r=t.length/2|0,n=t.slice(0,r),a=t.slice(r);Mg(n,e),Mg(a,e);let o=0,i=0,s=0;for(;o<n.length&&i<a.length;)e(n[o],a[i])<=0?t[s++]=n[o++]:t[s++]=a[i++];for(;o<n.length;)t[s++]=n[o++];for(;i<a.length;)t[s++]=a[i++];return t}function WT(t,e,r=0){let n=e?[r]:[];for(let a=0;a<t.length;a++){let o=t.charCodeAt(a);GT(o)&&(o===13&&a+1<t.length&&t.charCodeAt(a+1)===10&&a++,n.push(r+a+1))}return n}function GT(t){return t===13||t===10}function HT(t){let e=t.start,r=t.end;return e.line>r.line||e.line===r.line&&e.character>r.character?{start:r,end:e}:t}function h0(t){let e=HT(t.range);return e!==t.range?{newText:t.newText,range:e}:t}var BT;(()=>{"use strict";var t={470:a=>{function o(u){if(typeof u!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(u))}function i(u,l){for(var c,d="",p=0,y=-1,v=0,S=0;S<=u.length;++S){if(S<u.length)c=u.charCodeAt(S);else{if(c===47)break;c=47}if(c===47){if(!(y===S-1||v===1))if(y!==S-1&&v===2){if(d.length<2||p!==2||d.charCodeAt(d.length-1)!==46||d.charCodeAt(d.length-2)!==46){if(d.length>2){var T=d.lastIndexOf("/");if(T!==d.length-1){T===-1?(d="",p=0):p=(d=d.slice(0,T)).length-1-d.lastIndexOf("/"),y=S,v=0;continue}}else if(d.length===2||d.length===1){d="",p=0,y=S,v=0;continue}}l&&(d.length>0?d+="/..":d="..",p=2)}else d.length>0?d+="/"+u.slice(y+1,S):d=u.slice(y+1,S),p=S-y-1;y=S,v=0}else c===46&&v!==-1?++v:v=-1}return d}var s={resolve:function(){for(var u,l="",c=!1,d=arguments.length-1;d>=-1&&!c;d--){var p;d>=0?p=arguments[d]:(u===void 0&&(u=process.cwd()),p=u),o(p),p.length!==0&&(l=p+"/"+l,c=p.charCodeAt(0)===47)}return l=i(l,!c),c?l.length>0?"/"+l:"/":l.length>0?l:"."},normalize:function(u){if(o(u),u.length===0)return".";var l=u.charCodeAt(0)===47,c=u.charCodeAt(u.length-1)===47;return(u=i(u,!l)).length!==0||l||(u="."),u.length>0&&c&&(u+="/"),l?"/"+u:u},isAbsolute:function(u){return o(u),u.length>0&&u.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var u,l=0;l<arguments.length;++l){var c=arguments[l];o(c),c.length>0&&(u===void 0?u=c:u+="/"+c)}return u===void 0?".":s.normalize(u)},relative:function(u,l){if(o(u),o(l),u===l||(u=s.resolve(u))===(l=s.resolve(l)))return"";for(var c=1;c<u.length&&u.charCodeAt(c)===47;++c);for(var d=u.length,p=d-c,y=1;y<l.length&&l.charCodeAt(y)===47;++y);for(var v=l.length-y,S=p<v?p:v,T=-1,A=0;A<=S;++A){if(A===S){if(v>S){if(l.charCodeAt(y+A)===47)return l.slice(y+A+1);if(A===0)return l.slice(y+A)}else p>S&&(u.charCodeAt(c+A)===47?T=A:A===0&&(T=0));break}var g=u.charCodeAt(c+A);if(g!==l.charCodeAt(y+A))break;g===47&&(T=A)}var f="";for(A=c+T+1;A<=d;++A)A!==d&&u.charCodeAt(A)!==47||(f.length===0?f+="..":f+="/..");return f.length>0?f+l.slice(y+T):(y+=T,l.charCodeAt(y)===47&&++y,l.slice(y))},_makeLong:function(u){return u},dirname:function(u){if(o(u),u.length===0)return".";for(var l=u.charCodeAt(0),c=l===47,d=-1,p=!0,y=u.length-1;y>=1;--y)if((l=u.charCodeAt(y))===47){if(!p){d=y;break}}else p=!1;return d===-1?c?"/":".":c&&d===1?"//":u.slice(0,d)},basename:function(u,l){if(l!==void 0&&typeof l!="string")throw new TypeError('"ext" argument must be a string');o(u);var c,d=0,p=-1,y=!0;if(l!==void 0&&l.length>0&&l.length<=u.length){if(l.length===u.length&&l===u)return"";var v=l.length-1,S=-1;for(c=u.length-1;c>=0;--c){var T=u.charCodeAt(c);if(T===47){if(!y){d=c+1;break}}else S===-1&&(y=!1,S=c+1),v>=0&&(T===l.charCodeAt(v)?--v==-1&&(p=c):(v=-1,p=S))}return d===p?p=S:p===-1&&(p=u.length),u.slice(d,p)}for(c=u.length-1;c>=0;--c)if(u.charCodeAt(c)===47){if(!y){d=c+1;break}}else p===-1&&(y=!1,p=c+1);return p===-1?"":u.slice(d,p)},extname:function(u){o(u);for(var l=-1,c=0,d=-1,p=!0,y=0,v=u.length-1;v>=0;--v){var S=u.charCodeAt(v);if(S!==47)d===-1&&(p=!1,d=v+1),S===46?l===-1?l=v:y!==1&&(y=1):l!==-1&&(y=-1);else if(!p){c=v+1;break}}return l===-1||d===-1||y===0||y===1&&l===d-1&&l===c+1?"":u.slice(l,d)},format:function(u){if(u===null||typeof u!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof u);return function(l,c){var d=c.dir||c.root,p=c.base||(c.name||"")+(c.ext||"");return d?d===c.root?d+p:d+"/"+p:p}(0,u)},parse:function(u){o(u);var l={root:"",dir:"",base:"",ext:"",name:""};if(u.length===0)return l;var c,d=u.charCodeAt(0),p=d===47;p?(l.root="/",c=1):c=0;for(var y=-1,v=0,S=-1,T=!0,A=u.length-1,g=0;A>=c;--A)if((d=u.charCodeAt(A))!==47)S===-1&&(T=!1,S=A+1),d===46?y===-1?y=A:g!==1&&(g=1):y!==-1&&(g=-1);else if(!T){v=A+1;break}return y===-1||S===-1||g===0||g===1&&y===S-1&&y===v+1?S!==-1&&(l.base=l.name=v===0&&p?u.slice(1,S):u.slice(v,S)):(v===0&&p?(l.name=u.slice(1,y),l.base=u.slice(1,S)):(l.name=u.slice(v,y),l.base=u.slice(v,S)),l.ext=u.slice(y,S)),v>0?l.dir=u.slice(0,v-1):p&&(l.dir="/"),l},sep:"/",delimiter:":",win32:null,posix:null};s.posix=s,a.exports=s}},e={};function r(a){var o=e[a];if(o!==void 0)return o.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,r),i.exports}r.d=(a,o)=>{for(var i in o)r.o(o,i)&&!r.o(a,i)&&Object.defineProperty(a,i,{enumerable:!0,get:o[i]})},r.o=(a,o)=>Object.prototype.hasOwnProperty.call(a,o),r.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var n={};(()=>{let a;r.r(n),r.d(n,{URI:()=>p,Utils:()=>jt}),typeof process=="object"?a=process.platform==="win32":typeof navigator=="object"&&(a=navigator.userAgent.indexOf("Windows")>=0);let o=/^\w[\w\d+.-]*$/,i=/^\//,s=/^\/\//;function u(N,x){if(!N.scheme&&x)throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${N.authority}", path: "${N.path}", query: "${N.query}", fragment: "${N.fragment}"}`);if(N.scheme&&!o.test(N.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(N.path){if(N.authority){if(!i.test(N.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(s.test(N.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let l="",c="/",d=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;class p{static isUri(x){return x instanceof p||!!x&&typeof x.authority=="string"&&typeof x.fragment=="string"&&typeof x.path=="string"&&typeof x.query=="string"&&typeof x.scheme=="string"&&typeof x.fsPath=="string"&&typeof x.with=="function"&&typeof x.toString=="function"}scheme;authority;path;query;fragment;constructor(x,W,O,re,V,R=!1){typeof x=="object"?(this.scheme=x.scheme||l,this.authority=x.authority||l,this.path=x.path||l,this.query=x.query||l,this.fragment=x.fragment||l):(this.scheme=function(k,fe){return k||fe?k:"file"}(x,R),this.authority=W||l,this.path=function(k,fe){switch(k){case"https":case"http":case"file":fe?fe[0]!==c&&(fe=c+fe):fe=c}return fe}(this.scheme,O||l),this.query=re||l,this.fragment=V||l,u(this,R))}get fsPath(){return g(this,!1)}with(x){if(!x)return this;let{scheme:W,authority:O,path:re,query:V,fragment:R}=x;return W===void 0?W=this.scheme:W===null&&(W=l),O===void 0?O=this.authority:O===null&&(O=l),re===void 0?re=this.path:re===null&&(re=l),V===void 0?V=this.query:V===null&&(V=l),R===void 0?R=this.fragment:R===null&&(R=l),W===this.scheme&&O===this.authority&&re===this.path&&V===this.query&&R===this.fragment?this:new v(W,O,re,V,R)}static parse(x,W=!1){let O=d.exec(x);return O?new v(O[2]||l,Q(O[4]||l),Q(O[5]||l),Q(O[7]||l),Q(O[9]||l),W):new v(l,l,l,l,l)}static file(x){let W=l;if(a&&(x=x.replace(/\\/g,c)),x[0]===c&&x[1]===c){let O=x.indexOf(c,2);O===-1?(W=x.substring(2),x=c):(W=x.substring(2,O),x=x.substring(O)||c)}return new v("file",W,x,l,l)}static from(x){let W=new v(x.scheme,x.authority,x.path,x.query,x.fragment);return u(W,!0),W}toString(x=!1){return f(this,x)}toJSON(){return this}static revive(x){if(x){if(x instanceof p)return x;{let W=new v(x);return W._formatted=x.external,W._fsPath=x._sep===y?x.fsPath:null,W}}return x}}let y=a?1:void 0;class v extends p{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=g(this,!1)),this._fsPath}toString(x=!1){return x?f(this,!0):(this._formatted||(this._formatted=f(this,!1)),this._formatted)}toJSON(){let x={$mid:1};return this._fsPath&&(x.fsPath=this._fsPath,x._sep=y),this._formatted&&(x.external=this._formatted),this.path&&(x.path=this.path),this.scheme&&(x.scheme=this.scheme),this.authority&&(x.authority=this.authority),this.query&&(x.query=this.query),this.fragment&&(x.fragment=this.fragment),x}}let S={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function T(N,x,W){let O,re=-1;for(let V=0;V<N.length;V++){let R=N.charCodeAt(V);if(R>=97&&R<=122||R>=65&&R<=90||R>=48&&R<=57||R===45||R===46||R===95||R===126||x&&R===47||W&&R===91||W&&R===93||W&&R===58)re!==-1&&(O+=encodeURIComponent(N.substring(re,V)),re=-1),O!==void 0&&(O+=N.charAt(V));else{O===void 0&&(O=N.substr(0,V));let k=S[R];k!==void 0?(re!==-1&&(O+=encodeURIComponent(N.substring(re,V)),re=-1),O+=k):re===-1&&(re=V)}}return re!==-1&&(O+=encodeURIComponent(N.substring(re))),O!==void 0?O:N}function A(N){let x;for(let W=0;W<N.length;W++){let O=N.charCodeAt(W);O===35||O===63?(x===void 0&&(x=N.substr(0,W)),x+=S[O]):x!==void 0&&(x+=N[W])}return x!==void 0?x:N}function g(N,x){let W;return W=N.authority&&N.path.length>1&&N.scheme==="file"?`//${N.authority}${N.path}`:N.path.charCodeAt(0)===47&&(N.path.charCodeAt(1)>=65&&N.path.charCodeAt(1)<=90||N.path.charCodeAt(1)>=97&&N.path.charCodeAt(1)<=122)&&N.path.charCodeAt(2)===58?x?N.path.substr(1):N.path[1].toLowerCase()+N.path.substr(2):N.path,a&&(W=W.replace(/\//g,"\\")),W}function f(N,x){let W=x?A:T,O="",{scheme:re,authority:V,path:R,query:k,fragment:fe}=N;if(re&&(O+=re,O+=":"),(V||re==="file")&&(O+=c,O+=c),V){let le=V.indexOf("@");if(le!==-1){let Wr=V.substr(0,le);V=V.substr(le+1),le=Wr.lastIndexOf(":"),le===-1?O+=W(Wr,!1,!1):(O+=W(Wr.substr(0,le),!1,!1),O+=":",O+=W(Wr.substr(le+1),!1,!0)),O+="@"}V=V.toLowerCase(),le=V.lastIndexOf(":"),le===-1?O+=W(V,!1,!0):(O+=W(V.substr(0,le),!1,!0),O+=V.substr(le))}if(R){if(R.length>=3&&R.charCodeAt(0)===47&&R.charCodeAt(2)===58){let le=R.charCodeAt(1);le>=65&&le<=90&&(R=`/${String.fromCharCode(le+32)}:${R.substr(3)}`)}else if(R.length>=2&&R.charCodeAt(1)===58){let le=R.charCodeAt(0);le>=65&&le<=90&&(R=`${String.fromCharCode(le+32)}:${R.substr(2)}`)}O+=W(R,!0,!1)}return k&&(O+="?",O+=W(k,!1,!1)),fe&&(O+="#",O+=x?fe:T(fe,!1,!1)),O}function $(N){try{return decodeURIComponent(N)}catch{return N.length>3?N.substr(0,3)+$(N.substr(3)):N}}let P=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function Q(N){return N.match(P)?N.replace(P,x=>$(x)):N}var vt=r(470);let Qe=vt.posix||vt,dr="/";var jt;(function(N){N.joinPath=function(x,...W){return x.with({path:Qe.join(x.path,...W)})},N.resolvePath=function(x,...W){let O=x.path,re=!1;O[0]!==dr&&(O=dr+O,re=!0);let V=Qe.resolve(O,...W);return re&&V[0]===dr&&!x.authority&&(V=V.substring(1)),x.with({path:V})},N.dirname=function(x){if(x.path.length===0||x.path===dr)return x;let W=Qe.dirname(x.path);return W.length===1&&W.charCodeAt(0)===46&&(W=""),x.with({path:W})},N.basename=function(x){return Qe.basename(x.path)},N.extname=function(x){return Qe.extname(x.path)}})(jt||(jt={}))})(),BT=n})();var{URI:_e,Utils:di}=BT;var bt;(function(t){t.basename=di.basename,t.dirname=di.dirname,t.extname=di.extname,t.joinPath=di.joinPath,t.resolvePath=di.resolvePath;function e(n,a){return n?.toString()===a?.toString()}t.equals=e;function r(n,a){let o=typeof n=="string"?n:n.path,i=typeof a=="string"?a:a.path,s=o.split("/").filter(p=>p.length>0),u=i.split("/").filter(p=>p.length>0),l=0;for(;l<s.length&&s[l]===u[l];l++);let c="../".repeat(s.length-l),d=u.slice(l).join("/");return c+d}t.relative=r})(bt||(bt={}));var H;(function(t){t[t.Changed=0]="Changed",t[t.Parsed=1]="Parsed",t[t.IndexedContent=2]="IndexedContent",t[t.ComputedScopes=3]="ComputedScopes",t[t.Linked=4]="Linked",t[t.IndexedReferences=5]="IndexedReferences",t[t.Validated=6]="Validated"})(H||(H={}));var Ls=class{constructor(e){this.serviceRegistry=e.ServiceRegistry,this.textDocuments=e.workspace.TextDocuments,this.fileSystemProvider=e.workspace.FileSystemProvider}async fromUri(e,r=L.CancellationToken.None){let n=await this.fileSystemProvider.readFile(e);return this.createAsync(e,n,r)}fromTextDocument(e,r,n){return r=r??_e.parse(e.uri),n?this.createAsync(r,e,n):this.create(r,e)}fromString(e,r,n){return n?this.createAsync(r,e,n):this.create(r,e)}fromModel(e,r){return this.create(r,{$model:e})}create(e,r){if(typeof r=="string"){let n=this.parse(e,r);return this.createLangiumDocument(n,e,void 0,r)}else if("$model"in r){let n={value:r.$model,parserErrors:[],lexerErrors:[]};return this.createLangiumDocument(n,e)}else{let n=this.parse(e,r.getText());return this.createLangiumDocument(n,e,r)}}async createAsync(e,r,n){if(typeof r=="string"){let a=await this.parseAsync(e,r,n);return this.createLangiumDocument(a,e,void 0,r)}else{let a=await this.parseAsync(e,r.getText(),n);return this.createLangiumDocument(a,e,r)}}createLangiumDocument(e,r,n,a){let o;if(n)o={parseResult:e,uri:r,state:H.Parsed,references:[],textDocument:n};else{let i=this.createTextDocumentGetter(r,a);o={parseResult:e,uri:r,state:H.Parsed,references:[],get textDocument(){return i()}}}return e.value.$document=o,o}async update(e,r){var n,a;let o=(n=e.parseResult.value.$cstNode)===null||n===void 0?void 0:n.root.fullText,i=(a=this.textDocuments)===null||a===void 0?void 0:a.get(e.uri.toString()),s=i?i.getText():await this.fileSystemProvider.readFile(e.uri);if(i)Object.defineProperty(e,"textDocument",{value:i});else{let u=this.createTextDocumentGetter(e.uri,s);Object.defineProperty(e,"textDocument",{get:u})}return o!==s&&(e.parseResult=await this.parseAsync(e.uri,s,r),e.parseResult.value.$document=e),e.state=H.Parsed,e}parse(e,r){return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(r)}parseAsync(e,r,n){return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(r,n)}createTextDocumentGetter(e,r){let n=this.serviceRegistry,a;return()=>a??(a=ra.create(e.toString(),n.getServices(e).LanguageMetaData.languageId,0,r??""))}},Fs=class{constructor(e){this.documentMap=new Map,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory}get all(){return te(this.documentMap.values())}addDocument(e){let r=e.uri.toString();if(this.documentMap.has(r))throw new Error(`A document with the URI '${r}' is already present.`);this.documentMap.set(r,e)}getDocument(e){let r=e.toString();return this.documentMap.get(r)}async getOrCreateDocument(e,r){let n=this.getDocument(e);return n||(n=await this.langiumDocumentFactory.fromUri(e,r),this.addDocument(n),n)}createDocument(e,r,n){if(n)return this.langiumDocumentFactory.fromString(r,e,n).then(a=>(this.addDocument(a),a));{let a=this.langiumDocumentFactory.fromString(r,e);return this.addDocument(a),a}}hasDocument(e){return this.documentMap.has(e.toString())}invalidateDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=H.Changed,n.precomputedScopes=void 0,n.references=[],n.diagnostics=void 0),n}deleteDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=H.Changed,this.documentMap.delete(r)),n}};var Ws=class{constructor(e){this.reflection=e.shared.AstReflection,this.langiumDocuments=()=>e.shared.workspace.LangiumDocuments,this.scopeProvider=e.references.ScopeProvider,this.astNodeLocator=e.workspace.AstNodeLocator}async link(e,r=L.CancellationToken.None){for(let n of Zt(e.parseResult.value))await Ge(r),lo(n).forEach(a=>this.doLink(a,e))}doLink(e,r){let n=e.reference;if(n._ref===void 0)try{let a=this.getCandidate(e);if(ma(a))n._ref=a;else if(n._nodeDescription=a,this.langiumDocuments().hasDocument(a.documentUri)){let o=this.loadAstNode(a);n._ref=o??this.createLinkingError(e,a)}}catch(a){n._ref=Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${n.$refText}': ${a}`})}r.references.push(n)}unlink(e){for(let r of e.references)delete r._ref,delete r._nodeDescription;e.references=[]}getCandidate(e){let n=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return n??this.createLinkingError(e)}buildReference(e,r,n,a){let o=this,i={$refNode:n,$refText:a,get ref(){var s;if(Ke(this._ref))return this._ref;if(uf(this._nodeDescription)){let u=o.loadAstNode(this._nodeDescription);this._ref=u??o.createLinkingError({reference:i,container:e,property:r},this._nodeDescription)}else if(this._ref===void 0){let u=o.getLinkedNode({reference:i,container:e,property:r});if(u.error&&ze(e).state<H.ComputedScopes)return;this._ref=(s=u.node)!==null&&s!==void 0?s:u.error,this._nodeDescription=u.descr}return Ke(this._ref)?this._ref:void 0},get $nodeDescription(){return this._nodeDescription},get error(){return ma(this._ref)?this._ref:void 0}};return i}getLinkedNode(e){try{let r=this.getCandidate(e);if(ma(r))return{error:r};let n=this.loadAstNode(r);return n?{node:n,descr:r}:{descr:r,error:this.createLinkingError(e,r)}}catch(r){return{error:Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${e.reference.$refText}': ${r}`})}}}loadAstNode(e){if(e.node)return e.node;let r=this.langiumDocuments().getDocument(e.documentUri);if(r)return this.astNodeLocator.getAstNode(r.parseResult.value,e.path)}createLinkingError(e,r){let n=ze(e.container);n.state<H.ComputedScopes&&console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n.uri}).`);let a=this.reflection.getReferenceType(e);return Object.assign(Object.assign({},e),{message:`Could not resolve reference to ${a} named '${e.reference.$refText}'.`,targetDescription:r})}};function Lc(t){return typeof t.name=="string"}var Gs=class{getName(e){if(Lc(e))return e.name}getNameNode(e){return Mn(e.$cstNode,"name")}};var Hs=class{constructor(e){this.nameProvider=e.references.NameProvider,this.index=e.shared.workspace.IndexManager,this.nodeLocator=e.workspace.AstNodeLocator}findDeclaration(e){if(e){let r=Ky(e),n=e.astNode;if(r&&n){let a=n[r.feature];if(St(a))return a.ref;if(Array.isArray(a)){for(let o of a)if(St(o)&&o.$refNode&&o.$refNode.offset<=e.offset&&o.$refNode.end>=e.end)return o.ref}}if(n){let a=this.nameProvider.getNameNode(n);if(a&&(a===e||df(e,a)))return n}}}findDeclarationNode(e){let r=this.findDeclaration(e);if(r?.$cstNode){let n=this.nameProvider.getNameNode(r);return n??r.$cstNode}}findReferences(e,r){let n=[];if(r.includeDeclaration){let o=this.getReferenceToSelf(e);o&&n.push(o)}let a=this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e));return r.documentUri&&(a=a.filter(o=>bt.equals(o.sourceUri,r.documentUri))),n.push(...a),te(n)}getReferenceToSelf(e){let r=this.nameProvider.getNameNode(e);if(r){let n=ze(e),a=this.nodeLocator.getAstNodePath(e);return{sourceUri:n.uri,sourcePath:a,targetUri:n.uri,targetPath:a,segment:wa(r),local:!0}}}};var an=class{constructor(e){if(this.map=new Map,e)for(let[r,n]of e)this.add(r,n)}get size(){return ao.sum(te(this.map.values()).map(e=>e.length))}clear(){this.map.clear()}delete(e,r){if(r===void 0)return this.map.delete(e);{let n=this.map.get(e);if(n){let a=n.indexOf(r);if(a>=0)return n.length===1?this.map.delete(e):n.splice(a,1),!0}return!1}}get(e){var r;return(r=this.map.get(e))!==null&&r!==void 0?r:[]}has(e,r){if(r===void 0)return this.map.has(e);{let n=this.map.get(e);return n?n.indexOf(r)>=0:!1}}add(e,r){return this.map.has(e)?this.map.get(e).push(r):this.map.set(e,[r]),this}addAll(e,r){return this.map.has(e)?this.map.get(e).push(...r):this.map.set(e,Array.from(r)),this}forEach(e){this.map.forEach((r,n)=>r.forEach(a=>e(a,n,this)))}[Symbol.iterator](){return this.entries().iterator()}entries(){return te(this.map.entries()).flatMap(([e,r])=>r.map(n=>[e,n]))}keys(){return te(this.map.keys())}values(){return te(this.map.values()).flat()}entriesGroupedByKey(){return te(this.map.entries())}},qa=class{get size(){return this.map.size}constructor(e){if(this.map=new Map,this.inverse=new Map,e)for(let[r,n]of e)this.set(r,n)}clear(){this.map.clear(),this.inverse.clear()}set(e,r){return this.map.set(e,r),this.inverse.set(r,e),this}get(e){return this.map.get(e)}getKey(e){return this.inverse.get(e)}delete(e){let r=this.map.get(e);return r!==void 0?(this.map.delete(e),this.inverse.delete(r),!0):!1}};var Bs=class{constructor(e){this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider}async computeExports(e,r=L.CancellationToken.None){return this.computeExportsForNode(e.parseResult.value,e,void 0,r)}async computeExportsForNode(e,r,n=Ta,a=L.CancellationToken.None){let o=[];this.exportNode(e,o,r);for(let i of n(e))await Ge(a),this.exportNode(i,o,r);return o}exportNode(e,r,n){let a=this.nameProvider.getName(e);a&&r.push(this.descriptions.createDescription(e,a,n))}async computeLocalScopes(e,r=L.CancellationToken.None){let n=e.parseResult.value,a=new an;for(let o of Jt(n))await Ge(r),this.processNode(o,e,a);return a}processNode(e,r,n){let a=e.$container;if(a){let o=this.nameProvider.getName(e);o&&n.add(a,this.descriptions.createDescription(e,o,r))}}};var pi=class{constructor(e,r,n){var a;this.elements=e,this.outerScope=r,this.caseInsensitive=(a=n?.caseInsensitive)!==null&&a!==void 0?a:!1}getAllElements(){return this.outerScope?this.elements.concat(this.outerScope.getAllElements()):this.elements}getElement(e){let r=this.caseInsensitive?this.elements.find(n=>n.name.toLowerCase()===e.toLowerCase()):this.elements.find(n=>n.name===e);if(r)return r;if(this.outerScope)return this.outerScope.getElement(e)}},Us=class{constructor(e,r,n){var a;this.elements=new Map,this.caseInsensitive=(a=n?.caseInsensitive)!==null&&a!==void 0?a:!1;for(let o of e){let i=this.caseInsensitive?o.name.toLowerCase():o.name;this.elements.set(i,o)}this.outerScope=r}getElement(e){let r=this.caseInsensitive?e.toLowerCase():e,n=this.elements.get(r);if(n)return n;if(this.outerScope)return this.outerScope.getElement(e)}getAllElements(){let e=te(this.elements.values());return this.outerScope&&(e=e.concat(this.outerScope.getAllElements())),e}},g0={getElement(){},getAllElements(){return Nn}};var fi=class{constructor(){this.toDispose=[],this.isDisposed=!1}onDispose(e){this.toDispose.push(e)}dispose(){this.throwIfDisposed(),this.clear(),this.isDisposed=!0,this.toDispose.forEach(e=>e.dispose())}throwIfDisposed(){if(this.isDisposed)throw new Error("This cache has already been disposed")}},qs=class extends fi{constructor(){super(...arguments),this.cache=new Map}has(e){return this.throwIfDisposed(),this.cache.has(e)}set(e,r){this.throwIfDisposed(),this.cache.set(e,r)}get(e,r){if(this.throwIfDisposed(),this.cache.has(e))return this.cache.get(e);if(r){let n=r();return this.cache.set(e,n),n}else return}delete(e){return this.throwIfDisposed(),this.cache.delete(e)}clear(){this.throwIfDisposed(),this.cache.clear()}},ja=class extends fi{constructor(e){super(),this.cache=new Map,this.converter=e??(r=>r)}has(e,r){return this.throwIfDisposed(),this.cacheForContext(e).has(r)}set(e,r,n){this.throwIfDisposed(),this.cacheForContext(e).set(r,n)}get(e,r,n){this.throwIfDisposed();let a=this.cacheForContext(e);if(a.has(r))return a.get(r);if(n){let o=n();return a.set(r,o),o}else return}delete(e,r){return this.throwIfDisposed(),this.cacheForContext(e).delete(r)}clear(e){if(this.throwIfDisposed(),e){let r=this.converter(e);this.cache.delete(r)}else this.cache.clear()}cacheForContext(e){let r=this.converter(e),n=this.cache.get(r);return n||(n=new Map,this.cache.set(r,n)),n}},Fc=class extends ja{constructor(e){super(r=>r.toString()),this.onDispose(e.workspace.DocumentBuilder.onUpdate((r,n)=>{let a=r.concat(n);for(let o of a)this.clear(o)}))}},yi=class extends qs{constructor(e){super(),this.onDispose(e.workspace.DocumentBuilder.onUpdate(()=>{this.clear()}))}};var js=class{constructor(e){this.reflection=e.shared.AstReflection,this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider,this.indexManager=e.shared.workspace.IndexManager,this.globalScopeCache=new yi(e.shared)}getScope(e){let r=[],n=this.reflection.getReferenceType(e),a=ze(e.container).precomputedScopes;if(a){let i=e.container;do{let s=a.get(i);s.length>0&&r.push(te(s).filter(u=>this.reflection.isSubtype(u.type,n))),i=i.$container}while(i)}let o=this.getGlobalScope(n,e);for(let i=r.length-1;i>=0;i--)o=this.createScope(r[i],o);return o}createScope(e,r,n){return new pi(te(e),r,n)}createScopeForNodes(e,r,n){let a=te(e).map(o=>{let i=this.nameProvider.getName(o);if(i)return this.descriptions.createDescription(o,i)}).nonNullable();return new pi(a,r,n)}getGlobalScope(e,r){return this.globalScopeCache.get(e,()=>new Us(this.indexManager.allElements(e)))}};function Og(t){return typeof t.$comment=="string"}function UT(t){return typeof t=="object"&&!!t&&("$ref"in t||"$error"in t)}var Vs=class{constructor(e){this.ignoreProperties=new Set(["$container","$containerProperty","$containerIndex","$document","$cstNode"]),this.langiumDocuments=e.shared.workspace.LangiumDocuments,this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider,this.commentProvider=e.documentation.CommentProvider}serialize(e,r={}){let n=r?.replacer,a=(i,s)=>this.replacer(i,s,r),o=n?(i,s)=>n(i,s,a):a;try{return this.currentDocument=ze(e),JSON.stringify(e,o,r?.space)}finally{this.currentDocument=void 0}}deserialize(e,r={}){let n=JSON.parse(e);return this.linkNode(n,n,r),n}replacer(e,r,{refText:n,sourceText:a,textRegions:o,comments:i,uriConverter:s}){var u,l,c,d;if(!this.ignoreProperties.has(e))if(St(r)){let p=r.ref,y=n?r.$refText:void 0;if(p){let v=ze(p),S="";this.currentDocument&&this.currentDocument!==v&&(s?S=s(v.uri,r):S=v.uri.toString());let T=this.astNodeLocator.getAstNodePath(p);return{$ref:`${S}#${T}`,$refText:y}}else return{$error:(l=(u=r.error)===null||u===void 0?void 0:u.message)!==null&&l!==void 0?l:"Could not resolve reference",$refText:y}}else if(Ke(r)){let p;if(o&&(p=this.addAstNodeRegionWithAssignmentsTo(Object.assign({},r)),(!e||r.$document)&&p?.$textRegion&&(p.$textRegion.documentURI=(c=this.currentDocument)===null||c===void 0?void 0:c.uri.toString())),a&&!e&&(p??(p=Object.assign({},r)),p.$sourceText=(d=r.$cstNode)===null||d===void 0?void 0:d.text),i){p??(p=Object.assign({},r));let y=this.commentProvider.getComment(r);y&&(p.$comment=y.replace(/\r/g,""))}return p??r}else return r}addAstNodeRegionWithAssignmentsTo(e){let r=n=>({offset:n.offset,end:n.end,length:n.length,range:n.range});if(e.$cstNode){let n=e.$textRegion=r(e.$cstNode),a=n.assignments={};return Object.keys(e).filter(o=>!o.startsWith("$")).forEach(o=>{let i=po(e.$cstNode,o).map(r);i.length!==0&&(a[o]=i)}),e}}linkNode(e,r,n,a,o,i){for(let[u,l]of Object.entries(e))if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];UT(d)?l[c]=this.reviveReference(e,u,r,d,n):Ke(d)&&this.linkNode(d,r,n,e,u,c)}else UT(l)?e[u]=this.reviveReference(e,u,r,l,n):Ke(l)&&this.linkNode(l,r,n,e,u);let s=e;s.$container=a,s.$containerProperty=o,s.$containerIndex=i}reviveReference(e,r,n,a,o){let i=a.$refText,s=a.$error;if(a.$ref){let u=this.getRefNode(n,a.$ref,o.uriConverter);if(Ke(u))return i||(i=this.nameProvider.getName(u)),{$refText:i??"",ref:u};s=u}if(s){let u={$refText:i??""};return u.error={container:e,property:r,message:s,reference:u},u}else return}getRefNode(e,r,n){try{let a=r.indexOf("#");if(a===0){let u=this.astNodeLocator.getAstNode(e,r.substring(1));return u||"Could not resolve path: "+r}if(a<0){let u=n?n(r):_e.parse(r),l=this.langiumDocuments.getDocument(u);return l?l.parseResult.value:"Could not find document for URI: "+r}let o=n?n(r.substring(0,a)):_e.parse(r.substring(0,a)),i=this.langiumDocuments.getDocument(o);if(!i)return"Could not find document for URI: "+r;if(a===r.length-1)return i.parseResult.value;let s=this.astNodeLocator.getAstNode(i.parseResult.value,r.substring(a+1));return s||"Could not resolve URI: "+r}catch(a){return String(a)}}};var Ys=class{register(e){if(!this.singleton&&!this.map){this.singleton=e;return}if(!this.map&&(this.map={},this.singleton)){for(let r of this.singleton.LanguageMetaData.fileExtensions)this.map[r]=this.singleton;this.singleton=void 0}for(let r of e.LanguageMetaData.fileExtensions)this.map[r]!==void 0&&this.map[r]!==e&&console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${e.LanguageMetaData.languageId}'.`),this.map[r]=e}getServices(e){if(this.singleton!==void 0)return this.singleton;if(this.map===void 0)throw new Error("The service registry is empty. Use `register` to register the services of a language.");let r=bt.extname(e),n=this.map[r];if(!n)throw new Error(`The service registry contains no services for the extension '${r}'.`);return n}get all(){return this.singleton!==void 0?[this.singleton]:this.map!==void 0?Object.values(this.map):[]}};function Wc(t){return{code:t}}var hi;(function(t){t.all=["fast","slow","built-in"]})(hi||(hi={}));var Xs=class{constructor(e){this.entries=new an,this.reflection=e.shared.AstReflection}register(e,r=this,n="fast"){if(n==="built-in")throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");for(let[a,o]of Object.entries(e)){let i=o;if(Array.isArray(i))for(let s of i){let u={check:this.wrapValidationException(s,r),category:n};this.addEntry(a,u)}else if(typeof i=="function"){let s={check:this.wrapValidationException(i,r),category:n};this.addEntry(a,s)}}}wrapValidationException(e,r){return async(n,a,o)=>{try{await e.call(r,n,a,o)}catch(i){if(nn(i))throw i;console.error("An error occurred during validation:",i);let s=i instanceof Error?i.message:String(i);i instanceof Error&&i.stack&&console.error(i.stack),a("error","An error occurred during validation: "+s,{node:n})}}}addEntry(e,r){if(e==="AstNode"){this.entries.add("AstNode",r);return}for(let n of this.reflection.getAllSubTypes(e))this.entries.add(n,r)}getChecks(e,r){let n=te(this.entries.get(e)).concat(this.entries.get("AstNode"));return r&&(n=n.filter(a=>r.includes(a.category))),n.map(a=>a.check)}};var Qs=class{constructor(e){this.validationRegistry=e.validation.ValidationRegistry,this.metadata=e.LanguageMetaData}async validateDocument(e,r={},n=L.CancellationToken.None){let a=e.parseResult,o=[];if(await Ge(n),(!r.categories||r.categories.includes("built-in"))&&(this.processLexingErrors(a,o,r),r.stopAfterLexingErrors&&o.some(i=>{var s;return((s=i.data)===null||s===void 0?void 0:s.code)===Rn.LexingError})||(this.processParsingErrors(a,o,r),r.stopAfterParsingErrors&&o.some(i=>{var s;return((s=i.data)===null||s===void 0?void 0:s.code)===Rn.ParsingError}))||(this.processLinkingErrors(e,o,r),r.stopAfterLinkingErrors&&o.some(i=>{var s;return((s=i.data)===null||s===void 0?void 0:s.code)===Rn.LinkingError}))))return o;try{o.push(...await this.validateAst(a.value,r,n))}catch(i){if(nn(i))throw i;console.error("An error occurred during validation:",i)}return await Ge(n),o}processLexingErrors(e,r,n){for(let a of e.lexerErrors){let o={severity:Gc("error"),range:{start:{line:a.line-1,character:a.column-1},end:{line:a.line-1,character:a.column+a.length-1}},message:a.message,data:Wc(Rn.LexingError),source:this.getSource()};r.push(o)}}processParsingErrors(e,r,n){for(let a of e.parserErrors){let o;if(isNaN(a.token.startOffset)){if("previousToken"in a){let i=a.previousToken;if(isNaN(i.startOffset)){let s={line:0,character:0};o={start:s,end:s}}else{let s={line:i.endLine-1,character:i.endColumn};o={start:s,end:s}}}}else o=oo(a.token);if(o){let i={severity:Gc("error"),range:o,message:a.message,data:Wc(Rn.ParsingError),source:this.getSource()};r.push(i)}}}processLinkingErrors(e,r,n){for(let a of e.references){let o=a.error;if(o){let i={node:o.container,property:o.property,index:o.index,data:{code:Rn.LinkingError,containerType:o.container.$type,property:o.property,refText:o.reference.$refText}};r.push(this.toDiagnostic("error",o.message,i))}}}async validateAst(e,r,n=L.CancellationToken.None){let a=[],o=(i,s,u)=>{a.push(this.toDiagnostic(i,s,u))};return await Promise.all(Zt(e).map(async i=>{await Ge(n);let s=this.validationRegistry.getChecks(i.$type,r.categories);for(let u of s)await u(i,o,n)})),a}toDiagnostic(e,r,n){return{message:r,range:qT(n),severity:Gc(e),code:n.code,codeDescription:n.codeDescription,tags:n.tags,relatedInformation:n.relatedInformation,data:n.data,source:this.getSource()}}getSource(){return this.metadata.languageId}};function qT(t){if(t.range)return t.range;let e;return typeof t.property=="string"?e=Mn(t.node.$cstNode,t.property,t.index):typeof t.keyword=="string"&&(e=fo(t.node.$cstNode,t.keyword,t.index)),e??(e=t.node.$cstNode),e?e.range:{start:{line:0,character:0},end:{line:0,character:0}}}function Gc(t){switch(t){case"error":return 1;case"warning":return 2;case"info":return 3;case"hint":return 4;default:throw new Error("Invalid diagnostic severity: "+t)}}var Rn;(function(t){t.LexingError="lexing-error",t.ParsingError="parsing-error",t.LinkingError="linking-error"})(Rn||(Rn={}));var Js=class{constructor(e){this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider}createDescription(e,r,n=ze(e)){r??(r=this.nameProvider.getName(e));let a=this.astNodeLocator.getAstNodePath(e);if(!r)throw new Error(`Node at path ${a} has no name.`);let o,i=()=>{var s;return o??(o=wa((s=this.nameProvider.getNameNode(e))!==null&&s!==void 0?s:e.$cstNode))};return{node:e,name:r,get nameSegment(){return i()},selectionSegment:wa(e.$cstNode),type:e.$type,documentUri:n.uri,path:a}}},Zs=class{constructor(e){this.nodeLocator=e.workspace.AstNodeLocator}async createDescriptions(e,r=L.CancellationToken.None){let n=[],a=e.parseResult.value;for(let o of Zt(a))await Ge(r),lo(o).filter(i=>!ma(i)).forEach(i=>{let s=this.createDescription(i);s&&n.push(s)});return n}createDescription(e){let r=e.reference.$nodeDescription,n=e.reference.$refNode;if(!r||!n)return;let a=ze(e.container).uri;return{sourceUri:a,sourcePath:this.nodeLocator.getAstNodePath(e.container),targetUri:r.documentUri,targetPath:r.path,segment:wa(n),local:bt.equals(r.documentUri,a)}}};var eu=class{constructor(){this.segmentSeparator="/",this.indexSeparator="@"}getAstNodePath(e){if(e.$container){let r=this.getAstNodePath(e.$container),n=this.getPathSegment(e);return r+this.segmentSeparator+n}return""}getPathSegment({$containerProperty:e,$containerIndex:r}){if(!e)throw new Error("Missing '$containerProperty' in AST node.");return r!==void 0?e+this.indexSeparator+r:e}getAstNode(e,r){return r.split(this.segmentSeparator).reduce((a,o)=>{if(!a||o.length===0)return a;let i=o.indexOf(this.indexSeparator);if(i>0){let s=o.substring(0,i),u=parseInt(o.substring(i+1)),l=a[s];return l?.[u]}return a[o]},e)}};var tu=class{constructor(e){this.settings={},this.workspaceConfig=!1,this.serviceRegistry=e.ServiceRegistry}initialize(e){var r,n;this.workspaceConfig=(n=(r=e.capabilities.workspace)===null||r===void 0?void 0:r.configuration)!==null&&n!==void 0?n:!1}async initialized(e){if(this.workspaceConfig){if(e.register){let r=this.serviceRegistry.all;e.register({section:r.map(n=>this.toSectionName(n.LanguageMetaData.languageId))})}if(e.getConfiguration){let r=this.serviceRegistry.all.map(a=>({section:this.toSectionName(a.LanguageMetaData.languageId)})),n=await e.getConfiguration(r);r.forEach((a,o)=>{this.updateSectionConfiguration(a.section,n[o])})}}}updateConfiguration(e){e.settings&&Object.keys(e.settings).forEach(r=>{this.updateSectionConfiguration(r,e.settings[r])})}updateSectionConfiguration(e,r){this.settings[e]=r}async getConfiguration(e,r){let n=this.toSectionName(e);if(this.settings[n])return this.settings[n][r]}toSectionName(e){return`${e}`}};var Va;(function(t){function e(r){return{dispose:async()=>await r()}}t.create=e})(Va||(Va={}));var ru=class{constructor(e){this.updateBuildOptions={validation:{categories:["built-in","fast"]}},this.updateListeners=[],this.buildPhaseListeners=new an,this.buildState=new Map,this.documentBuildWaiters=new Map,this.currentState=H.Changed,this.langiumDocuments=e.workspace.LangiumDocuments,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.indexManager=e.workspace.IndexManager,this.serviceRegistry=e.ServiceRegistry}async build(e,r={},n=L.CancellationToken.None){var a,o;for(let i of e){let s=i.uri.toString();if(i.state===H.Validated){if(typeof r.validation=="boolean"&&r.validation)i.state=H.IndexedReferences,i.diagnostics=void 0,this.buildState.delete(s);else if(typeof r.validation=="object"){let u=this.buildState.get(s),l=(a=u?.result)===null||a===void 0?void 0:a.validationChecks;if(l){let d=((o=r.validation.categories)!==null&&o!==void 0?o:hi.all).filter(p=>!l.includes(p));d.length>0&&(this.buildState.set(s,{completed:!1,options:{validation:Object.assign(Object.assign({},r.validation),{categories:d})},result:u.result}),i.state=H.IndexedReferences)}}}else this.buildState.delete(s)}this.currentState=H.Changed,await this.emitUpdate(e.map(i=>i.uri),[]),await this.buildDocuments(e,r,n)}async update(e,r,n=L.CancellationToken.None){this.currentState=H.Changed;for(let i of r)this.langiumDocuments.deleteDocument(i),this.buildState.delete(i.toString()),this.indexManager.remove(i);for(let i of e){if(!this.langiumDocuments.invalidateDocument(i)){let u=this.langiumDocumentFactory.fromModel({$type:"INVALID"},i);u.state=H.Changed,this.langiumDocuments.addDocument(u)}this.buildState.delete(i.toString())}let a=te(e).concat(r).map(i=>i.toString()).toSet();this.langiumDocuments.all.filter(i=>!a.has(i.uri.toString())&&this.shouldRelink(i,a)).forEach(i=>{this.serviceRegistry.getServices(i.uri).references.Linker.unlink(i),i.state=Math.min(i.state,H.ComputedScopes),i.diagnostics=void 0}),await this.emitUpdate(e,r),await Ge(n);let o=this.langiumDocuments.all.filter(i=>{var s;return i.state<H.Linked||!(!((s=this.buildState.get(i.uri.toString()))===null||s===void 0)&&s.completed)}).toArray();await this.buildDocuments(o,this.updateBuildOptions,n)}async emitUpdate(e,r){await Promise.all(this.updateListeners.map(n=>n(e,r)))}shouldRelink(e,r){return e.references.some(n=>n.error!==void 0)?!0:this.indexManager.isAffected(e,r)}onUpdate(e){return this.updateListeners.push(e),Va.create(()=>{let r=this.updateListeners.indexOf(e);r>=0&&this.updateListeners.splice(r,1)})}async buildDocuments(e,r,n){this.prepareBuild(e,r),await this.runCancelable(e,H.Parsed,n,o=>{this.langiumDocumentFactory.update(o,n)}),await this.runCancelable(e,H.IndexedContent,n,o=>this.indexManager.updateContent(o,n)),await this.runCancelable(e,H.ComputedScopes,n,async o=>{let i=this.serviceRegistry.getServices(o.uri).references.ScopeComputation;o.precomputedScopes=await i.computeLocalScopes(o,n)}),await this.runCancelable(e,H.Linked,n,o=>this.serviceRegistry.getServices(o.uri).references.Linker.link(o,n)),await this.runCancelable(e,H.IndexedReferences,n,o=>this.indexManager.updateReferences(o,n));let a=e.filter(o=>this.shouldValidate(o));await this.runCancelable(a,H.Validated,n,o=>this.validate(o,n));for(let o of e){let i=this.buildState.get(o.uri.toString());i&&(i.completed=!0)}}prepareBuild(e,r){for(let n of e){let a=n.uri.toString(),o=this.buildState.get(a);(!o||o.completed)&&this.buildState.set(a,{completed:!1,options:r,result:o?.result})}}async runCancelable(e,r,n,a){let o=e.filter(i=>i.state<r);for(let i of o)await Ge(n),await a(i),i.state=r;await this.notifyBuildPhase(o,r,n),this.currentState=r}onBuildPhase(e,r){return this.buildPhaseListeners.add(e,r),Va.create(()=>{this.buildPhaseListeners.delete(e,r)})}waitUntil(e,r,n){let a;if(r&&"path"in r?a=r:n=r,n??(n=L.CancellationToken.None),a){let o=this.langiumDocuments.getDocument(a);if(o&&o.state>e)return Promise.resolve(a)}return this.currentState>=e?Promise.resolve(void 0):n.isCancellationRequested?Promise.reject(kn):new Promise((o,i)=>{let s=this.onBuildPhase(e,()=>{if(s.dispose(),u.dispose(),a){let l=this.langiumDocuments.getDocument(a);o(l?.uri)}else o(void 0)}),u=n.onCancellationRequested(()=>{s.dispose(),u.dispose(),i(kn)})})}async notifyBuildPhase(e,r,n){if(e.length===0)return;let a=this.buildPhaseListeners.get(r);for(let o of a)await Ge(n),await o(e,n)}shouldValidate(e){return!!this.getBuildOptions(e).validation}async validate(e,r){var n,a;let o=this.serviceRegistry.getServices(e.uri).validation.DocumentValidator,i=this.getBuildOptions(e).validation,s=typeof i=="object"?i:void 0,u=await o.validateDocument(e,s,r);e.diagnostics?e.diagnostics.push(...u):e.diagnostics=u;let l=this.buildState.get(e.uri.toString());if(l){(n=l.result)!==null&&n!==void 0||(l.result={});let c=(a=s?.categories)!==null&&a!==void 0?a:hi.all;l.result.validationChecks?l.result.validationChecks.push(...c):l.result.validationChecks=[...c]}}getBuildOptions(e){var r,n;return(n=(r=this.buildState.get(e.uri.toString()))===null||r===void 0?void 0:r.options)!==null&&n!==void 0?n:{}}};var nu=class{constructor(e){this.symbolIndex=new Map,this.symbolByTypeIndex=new ja,this.referenceIndex=new Map,this.documents=e.workspace.LangiumDocuments,this.serviceRegistry=e.ServiceRegistry,this.astReflection=e.AstReflection}findAllReferences(e,r){let n=ze(e).uri,a=[];return this.referenceIndex.forEach(o=>{o.forEach(i=>{bt.equals(i.targetUri,n)&&i.targetPath===r&&a.push(i)})}),te(a)}allElements(e,r){let n=te(this.symbolIndex.keys());return r&&(n=n.filter(a=>!r||r.has(a))),n.map(a=>this.getFileDescriptions(a,e)).flat()}getFileDescriptions(e,r){var n;return r?this.symbolByTypeIndex.get(e,r,()=>{var o;return((o=this.symbolIndex.get(e))!==null&&o!==void 0?o:[]).filter(s=>this.astReflection.isSubtype(s.type,r))}):(n=this.symbolIndex.get(e))!==null&&n!==void 0?n:[]}remove(e){let r=e.toString();this.symbolIndex.delete(r),this.symbolByTypeIndex.clear(r),this.referenceIndex.delete(r)}async updateContent(e,r=L.CancellationToken.None){let a=await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e,r),o=e.uri.toString();this.symbolIndex.set(o,a),this.symbolByTypeIndex.clear(o)}async updateReferences(e,r=L.CancellationToken.None){let a=await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e,r);this.referenceIndex.set(e.uri.toString(),a)}isAffected(e,r){let n=this.referenceIndex.get(e.uri.toString());return n?n.some(a=>!a.local&&r.has(a.targetUri.toString())):!1}};var au=class{constructor(e){this.initialBuildOptions={},this.serviceRegistry=e.ServiceRegistry,this.langiumDocuments=e.workspace.LangiumDocuments,this.documentBuilder=e.workspace.DocumentBuilder,this.fileSystemProvider=e.workspace.FileSystemProvider,this.mutex=e.workspace.WorkspaceLock}initialize(e){var r;this.folders=(r=e.workspaceFolders)!==null&&r!==void 0?r:void 0}initialized(e){return this.mutex.write(r=>{var n;return this.initializeWorkspace((n=this.folders)!==null&&n!==void 0?n:[],r)})}async initializeWorkspace(e,r=L.CancellationToken.None){let n=this.serviceRegistry.all.flatMap(i=>i.LanguageMetaData.fileExtensions),a=[],o=i=>{a.push(i),this.langiumDocuments.hasDocument(i.uri)||this.langiumDocuments.addDocument(i)};await this.loadAdditionalDocuments(e,o),await Promise.all(e.map(i=>[i,this.getRootFolder(i)]).map(async i=>this.traverseFolder(...i,n,o))),await Ge(r),await this.documentBuilder.build(a,this.initialBuildOptions,r)}loadAdditionalDocuments(e,r){return Promise.resolve()}getRootFolder(e){return _e.parse(e.uri)}async traverseFolder(e,r,n,a){let o=await this.fileSystemProvider.readDirectory(r);await Promise.all(o.map(async i=>{if(this.includeEntry(e,i,n)){if(i.isDirectory)await this.traverseFolder(e,i.uri,n,a);else if(i.isFile){let s=await this.langiumDocuments.getOrCreateDocument(i.uri);a(s)}}}))}includeEntry(e,r,n){let a=bt.basename(r.uri);if(a.startsWith("."))return!1;if(r.isDirectory)return a!=="node_modules"&&a!=="out";if(r.isFile){let o=bt.extname(r.uri);return n.includes(o)}return!1}};var ou=class{constructor(e){let r=e.parser.TokenBuilder.buildTokens(e.Grammar,{caseInsensitive:e.LanguageMetaData.caseInsensitive});this.tokenTypes=this.toTokenTypeDictionary(r);let n=zg(r)?Object.values(r):r;this.chevrotainLexer=new je(n,{positionTracking:"full"})}get definition(){return this.tokenTypes}tokenize(e){var r;let n=this.chevrotainLexer.tokenize(e);return{tokens:n.tokens,errors:n.errors,hidden:(r=n.groups.hidden)!==null&&r!==void 0?r:[]}}toTokenTypeDictionary(e){if(zg(e))return e;let r=Lg(e)?Object.values(e.modes).flat():e,n={};return r.forEach(a=>n[a.name]=a),n}};function jT(t){return Array.isArray(t)&&(t.length===0||"name"in t[0])}function Lg(t){return t&&"modes"in t&&"defaultMode"in t}function zg(t){return!jT(t)&&!Lg(t)}Wa();function Gg(t,e,r){let n,a;typeof t=="string"?(a=e,n=r):(a=t.range.start,n=e),a||(a=ue.create(0,0));let o=XT(t),i=Bg(n),s=v0({lines:o,position:a,options:i});return T0({index:0,tokens:s,position:a})}function Hg(t,e){let r=Bg(e),n=XT(t);if(n.length===0)return!1;let a=n[0],o=n[n.length-1],i=r.start,s=r.end;return!!i?.exec(a)&&!!s?.exec(o)}function XT(t){let e="";return typeof t=="string"?e=t:e=t.text,e.split(Sy)}var VT=/\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy,m0=/\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;function v0(t){var e,r,n;let a=[],o=t.position.line,i=t.position.character;for(let s=0;s<t.lines.length;s++){let u=s===0,l=s===t.lines.length-1,c=t.lines[s],d=0;if(u&&t.options.start){let y=(e=t.options.start)===null||e===void 0?void 0:e.exec(c);y&&(d=y.index+y[0].length)}else{let y=(r=t.options.line)===null||r===void 0?void 0:r.exec(c);y&&(d=y.index+y[0].length)}if(l){let y=(n=t.options.end)===null||n===void 0?void 0:n.exec(c);y&&(c=c.substring(0,y.index))}if(c=c.substring(0,$0(c)),Wg(c,d)>=c.length){if(a.length>0){let y=ue.create(o,i);a.push({type:"break",content:"",range:ne.create(y,y)})}}else{VT.lastIndex=d;let y=VT.exec(c);if(y){let v=y[0],S=y[1],T=ue.create(o,i+d),A=ue.create(o,i+d+v.length);a.push({type:"tag",content:S,range:ne.create(T,A)}),d+=v.length,d=Wg(c,d)}if(d<c.length){let v=c.substring(d),S=Array.from(v.matchAll(m0));a.push(...w0(S,v,o,i+d))}}o++,i=0}return a.length>0&&a[a.length-1].type==="break"?a.slice(0,-1):a}function w0(t,e,r,n){let a=[];if(t.length===0){let o=ue.create(r,n),i=ue.create(r,n+e.length);a.push({type:"text",content:e,range:ne.create(o,i)})}else{let o=0;for(let s of t){let u=s.index,l=e.substring(o,u);l.length>0&&a.push({type:"text",content:e.substring(o,u),range:ne.create(ue.create(r,o+n),ue.create(r,u+n))});let c=l.length+1,d=s[1];if(a.push({type:"inline-tag",content:d,range:ne.create(ue.create(r,o+c+n),ue.create(r,o+c+d.length+n))}),c+=d.length,s.length===4){c+=s[2].length;let p=s[3];a.push({type:"text",content:p,range:ne.create(ue.create(r,o+c+n),ue.create(r,o+c+p.length+n))})}else a.push({type:"text",content:"",range:ne.create(ue.create(r,o+c+n),ue.create(r,o+c+n))});o=u+s[0].length}let i=e.substring(o);i.length>0&&a.push({type:"text",content:i,range:ne.create(ue.create(r,o+n),ue.create(r,o+n+i.length))})}return a}var S0=/\S/,A0=/\s*$/;function Wg(t,e){let r=t.substring(e).match(S0);return r?e+r.index:t.length}function $0(t){let e=t.match(A0);if(e&&typeof e.index=="number")return e.index}function T0(t){var e,r,n,a;let o=ue.create(t.position.line,t.position.character);if(t.tokens.length===0)return new Hc([],ne.create(o,o));let i=[];for(;t.index<t.tokens.length;){let l=C0(t,i[i.length-1]);l&&i.push(l)}let s=(r=(e=i[0])===null||e===void 0?void 0:e.range.start)!==null&&r!==void 0?r:o,u=(a=(n=i[i.length-1])===null||n===void 0?void 0:n.range.end)!==null&&a!==void 0?a:o;return new Hc(i,ne.create(s,u))}function C0(t,e){let r=t.tokens[t.index];if(r.type==="tag")return JT(t,!1);if(r.type==="text"||r.type==="inline-tag")return QT(t);x0(r,e),t.index++}function x0(t,e){if(e){let r=new Bc("",t.range);"inlines"in e?e.inlines.push(r):e.content.inlines.push(r)}}function QT(t){let e=t.tokens[t.index],r=e,n=e,a=[];for(;e&&e.type!=="break"&&e.type!=="tag";)a.push(b0(t)),n=e,e=t.tokens[t.index];return new su(a,ne.create(r.range.start,n.range.end))}function b0(t){return t.tokens[t.index].type==="inline-tag"?JT(t,!0):ZT(t)}function JT(t,e){let r=t.tokens[t.index++],n=r.content.substring(1),a=t.tokens[t.index];if(a?.type==="text")if(e){let o=ZT(t);return new iu(n,new su([o],o.range),e,ne.create(r.range.start,o.range.end))}else{let o=QT(t);return new iu(n,o,e,ne.create(r.range.start,o.range.end))}else{let o=r.range;return new iu(n,new su([],o),e,o)}}function ZT(t){let e=t.tokens[t.index++];return new Bc(e.content,e.range)}function Bg(t){if(!t)return Bg({start:"/**",end:"*/",line:"*"});let{start:e,end:r,line:n}=t;return{start:Fg(e,!0),end:Fg(r,!1),line:Fg(n,!0)}}function Fg(t,e){if(typeof t=="string"||typeof t=="object"){let r=typeof t=="string"?ka(t):t.source;return e?new RegExp(`^\\s*${r}`):new RegExp(`\\s*${r}\\s*$`)}else return t}var Hc=class{constructor(e,r){this.elements=e,this.range=r}getTag(e){return this.getAllTags().find(r=>r.name===e)}getTags(e){return this.getAllTags().filter(r=>r.name===e)}getAllTags(){return this.elements.filter(e=>"name"in e)}toString(){let e="";for(let r of this.elements)if(e.length===0)e=r.toString();else{let n=r.toString();e+=YT(e)+n}return e.trim()}toMarkdown(e){let r="";for(let n of this.elements)if(r.length===0)r=n.toMarkdown(e);else{let a=n.toMarkdown(e);r+=YT(r)+a}return r.trim()}},iu=class{constructor(e,r,n,a){this.name=e,this.content=r,this.inline=n,this.range=a}toString(){let e=`@${this.name}`,r=this.content.toString();return this.content.inlines.length===1?e=`${e} ${r}`:this.content.inlines.length>1&&(e=`${e}
${r}`),this.inline?`{${e}}`:e}toMarkdown(e){var r,n;return(n=(r=e?.renderTag)===null||r===void 0?void 0:r.call(e,this))!==null&&n!==void 0?n:this.toMarkdownDefault(e)}toMarkdownDefault(e){let r=this.content.toMarkdown(e);if(this.inline){let o=k0(this.name,r,e??{});if(typeof o=="string")return o}let n="";e?.tag==="italic"||e?.tag===void 0?n="*":e?.tag==="bold"?n="**":e?.tag==="bold-italic"&&(n="***");let a=`${n}@${this.name}${n}`;return this.content.inlines.length===1?a=`${a} \u2014 ${r}`:this.content.inlines.length>1&&(a=`${a}
${r}`),this.inline?`{${a}}`:a}};function k0(t,e,r){var n,a;if(t==="linkplain"||t==="linkcode"||t==="link"){let o=e.indexOf(" "),i=e;if(o>0){let u=Wg(e,o);i=e.substring(u),e=e.substring(0,o)}return(t==="linkcode"||t==="link"&&r.link==="code")&&(i=`\`${i}\``),(a=(n=r.renderLink)===null||n===void 0?void 0:n.call(r,e,i))!==null&&a!==void 0?a:R0(e,i)}}function R0(t,e){try{return _e.parse(t,!0),`[${e}](${t})`}catch{return t}}var su=class{constructor(e,r){this.inlines=e,this.range=r}toString(){let e="";for(let r=0;r<this.inlines.length;r++){let n=this.inlines[r],a=this.inlines[r+1];e+=n.toString(),a&&a.range.start.line>n.range.start.line&&(e+=`
`)}return e}toMarkdown(e){let r="";for(let n=0;n<this.inlines.length;n++){let a=this.inlines[n],o=this.inlines[n+1];r+=a.toMarkdown(e),o&&o.range.start.line>a.range.start.line&&(r+=`
`)}return r}},Bc=class{constructor(e,r){this.text=e,this.range=r}toString(){return this.text}toMarkdown(){return this.text}};function YT(t){return t.endsWith(`
`)?`
`:`

`}var uu=class{constructor(e){this.indexManager=e.shared.workspace.IndexManager,this.commentProvider=e.documentation.CommentProvider}getDocumentation(e){let r=this.commentProvider.getComment(e);if(r&&Hg(r))return Gg(r).toMarkdown({renderLink:(a,o)=>this.documentationLinkRenderer(e,a,o),renderTag:a=>this.documentationTagRenderer(e,a)})}documentationLinkRenderer(e,r,n){var a;let o=(a=this.findNameInPrecomputedScopes(e,r))!==null&&a!==void 0?a:this.findNameInGlobalScope(e,r);if(o&&o.nameSegment){let i=o.nameSegment.range.start.line+1,s=o.nameSegment.range.start.character+1,u=o.documentUri.with({fragment:`L${i},${s}`});return`[${n}](${u.toString()})`}else return}documentationTagRenderer(e,r){}findNameInPrecomputedScopes(e,r){let a=ze(e).precomputedScopes;if(!a)return;let o=e;do{let s=a.get(o).find(u=>u.name===r);if(s)return s;o=o.$container}while(o)}findNameInGlobalScope(e,r){return this.indexManager.allElements().find(a=>a.name===r)}};var lu=class{constructor(e){this.grammarConfig=()=>e.parser.GrammarConfig}getComment(e){var r;return Og(e)?e.$comment:(r=pf(e.$cstNode,this.grammarConfig().multilineCommentRules))===null||r===void 0?void 0:r.text}};var Ve={};ie(Ve,Lt(Ua(),1));var cu=class{constructor(e){this.syncParser=e.parser.LangiumParser}parse(e){return Promise.resolve(this.syncParser.parse(e))}},Ug=class{constructor(e){this.threadCount=8,this.terminationDelay=200,this.workerPool=[],this.queue=[],this.hydrator=e.serializer.Hydrator}initializeWorkers(){for(;this.workerPool.length<this.threadCount;){let e=this.createWorker();e.onReady(()=>{if(this.queue.length>0){let r=this.queue.shift();r&&(e.lock(),r.resolve(e))}}),this.workerPool.push(e)}}async parse(e,r){let n=await this.acquireParserWorker(r),a=new Or,o,i=r.onCancellationRequested(()=>{o=setTimeout(()=>{this.terminateWorker(n)},this.terminationDelay)});return n.parse(e).then(s=>{s.value=this.hydrator.hydrate(s.value),a.resolve(s)}).catch(s=>{a.reject(s)}).finally(()=>{i.dispose(),clearTimeout(o)}),a.promise}terminateWorker(e){e.terminate();let r=this.workerPool.indexOf(e);r>=0&&this.workerPool.splice(r,1)}async acquireParserWorker(e){this.initializeWorkers();for(let n of this.workerPool)if(n.ready)return n.lock(),n;let r=new Or;return e.onCancellationRequested(()=>{let n=this.queue.indexOf(r);n>=0&&this.queue.splice(n,1),r.reject("OperationCancelled")}),this.queue.push(r),r.promise}},qg=class{get ready(){return this._ready}get onReady(){return this.onReadyEmitter.event}constructor(e,r,n,a){this.onReadyEmitter=new Ve.Emitter,this.deferred=new Or,this._ready=!0,this._parsing=!1,this.sendMessage=e,this._terminate=a,r(o=>{let i=o;this.deferred.resolve(i),this.unlock()}),n(o=>{this.deferred.reject(o),this.unlock()})}terminate(){this.deferred.reject(kn),this._terminate()}lock(){this._ready=!1}unlock(){this._parsing=!1,this._ready=!0,this.onReadyEmitter.fire()}parse(e){if(this._parsing)throw new Error("Parser worker is busy");return this._parsing=!0,this.deferred=new Or,this.sendMessage(e),this.deferred.promise}};var du=class{constructor(){this.previousTokenSource=new L.CancellationTokenSource,this.writeQueue=[],this.readQueue=[],this.done=!0}write(e){this.cancelWrite();let r=new L.CancellationTokenSource;return this.previousTokenSource=r,this.enqueue(this.writeQueue,e,r.token)}read(e){return this.enqueue(this.readQueue,e)}enqueue(e,r,n){let a=new Or,o={action:r,deferred:a,cancellationToken:n??L.CancellationToken.None};return e.push(o),this.performNextOperation(),a.promise}async performNextOperation(){if(!this.done)return;let e=[];if(this.writeQueue.length>0)e.push(this.writeQueue.shift());else if(this.readQueue.length>0)e.push(...this.readQueue.splice(0,this.readQueue.length));else return;this.done=!1,await Promise.all(e.map(async({action:r,deferred:n,cancellationToken:a})=>{try{let o=await Promise.resolve().then(()=>r(a));n.resolve(o)}catch(o){nn(o)?n.resolve(void 0):n.reject(o)}})),this.done=!0,this.performNextOperation()}cancelWrite(){this.previousTokenSource.cancel()}};var pu=class{constructor(e){this.grammarElementIdMap=new qa,this.tokenTypeIdMap=new qa,this.grammar=e.Grammar,this.lexer=e.parser.Lexer,this.linker=e.references.Linker}dehydrate(e){return this.dehydrateAstNode(e,this.createDehyrationContext(e))}createDehyrationContext(e){let r=new Map,n=new Map;for(let a of Zt(e))r.set(a,{});if(e.$cstNode)for(let a of va(e.$cstNode))n.set(a,{});return{astNodes:r,cstNodes:n}}dehydrateAstNode(e,r){let n=r.astNodes.get(e);n.$type=e.$type,n.$containerIndex=e.$containerIndex,n.$containerProperty=e.$containerProperty,e.$cstNode!==void 0&&(n.$cstNode=this.dehydrateCstNode(e.$cstNode,r));for(let[a,o]of Object.entries(e))if(!a.startsWith("$"))if(Array.isArray(o)){let i=[];n[a]=i;for(let s of o)Ke(s)?i.push(this.dehydrateAstNode(s,r)):St(s)?i.push(this.dehydrateReference(s,r)):i.push(s)}else Ke(o)?n[a]=this.dehydrateAstNode(o,r):St(o)?n[a]=this.dehydrateReference(o,r):o!==void 0&&(n[a]=o);return n}dehydrateReference(e,r){let n={};return n.$refText=e.$refText,e.$refNode&&(n.$refNode=r.cstNodes.get(e.$refNode)),n}dehydrateCstNode(e,r){let n=r.cstNodes.get(e);return Fi(e)?n.fullText=e.fullText:n.grammarSource=this.getGrammarElementId(e.grammarSource),n.hidden=e.hidden,n.astNode=r.astNodes.get(e.astNode),Ft(e)?n.content=e.content.map(a=>this.dehydrateCstNode(a,r)):Er(e)&&(n.tokenType=e.tokenType.name,n.offset=e.offset,n.length=e.length,n.startLine=e.range.start.line,n.startColumn=e.range.start.character,n.endLine=e.range.end.line,n.endColumn=e.range.end.character),n}hydrate(e){let r=this.createHydrationContext(e);return"$cstNode"in e&&this.hydrateCstNode(e.$cstNode,r),this.hydrateAstNode(e,r)}createHydrationContext(e){let r=new Map,n=new Map;for(let a of Zt(e))r.set(a,{});if(e.$cstNode)for(let a of va(e.$cstNode)){let o;"fullText"in a?o=new ii(a.fullText):"content"in a?o=new Ha:"tokenType"in a&&(o=this.hydrateCstLeafNode(a)),o&&n.set(a,o)}return{astNodes:r,cstNodes:n}}hydrateAstNode(e,r){let n=r.astNodes.get(e);n.$type=e.$type,n.$containerIndex=e.$containerIndex,n.$containerProperty=e.$containerProperty,e.$cstNode&&(n.$cstNode=r.cstNodes.get(e.$cstNode));for(let[a,o]of Object.entries(e))if(!a.startsWith("$"))if(Array.isArray(o)){let i=[];n[a]=i;for(let s of o)Ke(s)?i.push(this.setParent(this.hydrate(s),n)):St(s)?i.push(this.hydrateReference(s,n,a,r)):i.push(s)}else Ke(o)?n[a]=this.setParent(this.hydrate(o),n):St(o)?n[a]=this.hydrateReference(o,n,a,r):o!==void 0&&(n[a]=o);return n}setParent(e,r){return e.$container=r,e}hydrateReference(e,r,n,a){return this.linker.buildReference(r,n,a.cstNodes.get(e.$refNode),e.$refText)}hydrateCstNode(e,r,n=0){let a=r.cstNodes.get(e);if(typeof e.grammarSource=="number"&&(a.grammarSource=this.getGrammarElement(e.grammarSource)),a.astNode=r.astNodes.get(e.astNode),Ft(a))for(let o of e.content){let i=this.hydrateCstNode(o,r,n++);a.content.push(i)}return a}hydrateCstLeafNode(e){let r=this.getTokenType(e.tokenType),n=e.offset,a=e.length,o=e.startLine,i=e.startColumn,s=e.endLine,u=e.endColumn,l=e.hidden;return new Ga(n,a,{start:{line:o,character:i},end:{line:s,character:u}},r,l)}getTokenType(e){return this.lexer.definition[e]}getGrammarElementId(e){var r;return this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap(),(r=this.grammarElementIdMap.get(e))!==null&&r!==void 0?r:-1}getGrammarElement(e){this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap();let r=this.grammarElementIdMap.getKey(e);if(r)return r;throw new Error("Invalid grammar element id: "+e)}createGrammarElementIdMap(){let e=0;for(let r of Zt(this.grammar))Aa(r)&&this.grammarElementIdMap.set(r,e++)}};function fu(t){return{documentation:{CommentProvider:e=>new lu(e),DocumentationProvider:e=>new uu(e)},parser:{AsyncParser:e=>new cu(e),GrammarConfig:e=>Dy(e),LangiumParser:e=>kg(e),CompletionParser:e=>bg(e),ValueConverter:()=>new Os,TokenBuilder:()=>new Ms,Lexer:e=>new ou(e),ParserErrorMessageProvider:()=>new si},workspace:{AstNodeLocator:()=>new eu,AstNodeDescriptionProvider:e=>new Js(e),ReferenceDescriptionProvider:e=>new Zs(e)},references:{Linker:e=>new Ws(e),NameProvider:()=>new Gs,ScopeProvider:e=>new js(e),ScopeComputation:e=>new Bs(e),References:e=>new Hs(e)},serializer:{Hydrator:e=>new pu(e),JsonSerializer:e=>new Vs(e)},validation:{DocumentValidator:e=>new Qs(e),ValidationRegistry:e=>new Xs(e)},shared:()=>t.shared}}function yu(t){return{ServiceRegistry:()=>new Ys,workspace:{LangiumDocuments:e=>new Fs(e),LangiumDocumentFactory:e=>new Ls(e),DocumentBuilder:e=>new ru(e),IndexManager:e=>new nu(e),WorkspaceManager:e=>new au(e),FileSystemProvider:e=>t.fileSystemProvider(e),WorkspaceLock:()=>new du,ConfigurationProvider:e=>new tu(e)}}}var gi;(function(t){t.merge=(e,r)=>Uc(Uc({},e),r)})(gi||(gi={}));function Ya(t,e,r,n,a,o,i,s,u){let l=[t,e,r,n,a,o,i,s,u].reduce(Uc,{});return rC(l)}var jg=Symbol("isProxy");function hu(t){if(t&&t[jg])for(let e of Object.values(t))hu(e);return t}function rC(t,e){let r=new Proxy({},{deleteProperty:()=>!1,get:(n,a)=>tC(n,a,t,e||r),getOwnPropertyDescriptor:(n,a)=>(tC(n,a,t,e||r),Object.getOwnPropertyDescriptor(n,a)),has:(n,a)=>a in t,ownKeys:()=>[...Reflect.ownKeys(t),jg]});return r[jg]=!0,r}var eC=Symbol();function tC(t,e,r,n){if(e in t){if(t[e]instanceof Error)throw new Error("Construction failure. Please make sure that your dependencies are constructable.",{cause:t[e]});if(t[e]===eC)throw new Error('Cycle detected. Please make "'+String(e)+'" lazy. See https://langium.org/docs/configuration-services/#resolving-cyclic-dependencies');return t[e]}else if(e in r){let a=r[e];t[e]=eC;try{t[e]=typeof a=="function"?a(n):rC(a,n)}catch(o){throw t[e]=o instanceof Error?o:void 0,o}return t[e]}else return}function Uc(t,e){if(e){for(let[r,n]of Object.entries(e))if(n!==void 0){let a=t[r];a!==null&&n!==null&&typeof a=="object"&&typeof n=="object"?t[r]=Uc(a,n):t[r]=n}}return t}var ce={};Dn(ce,{AstUtils:()=>tl,BiMap:()=>qa,Cancellation:()=>L,ContextCache:()=>ja,CstUtils:()=>qu,DONE_RESULT:()=>At,Deferred:()=>Or,Disposable:()=>Va,DisposableCache:()=>fi,DocumentCache:()=>Fc,EMPTY_STREAM:()=>Nn,ErrorWithLocation:()=>Sa,GrammarUtils:()=>ul,MultiMap:()=>an,OperationCancelled:()=>kn,Reduction:()=>ao,RegExpUtils:()=>ol,SimpleCache:()=>qs,StreamImpl:()=>Wt,TreeStreamImpl:()=>wr,URI:()=>_e,UriUtils:()=>bt,WorkspaceCache:()=>yi,assertUnreachable:()=>_n,delayNextTick:()=>_g,interruptAndCheck:()=>Ge,isOperationCancelled:()=>nn,loadGrammarFromJson:()=>jc,setInterruptionPeriod:()=>FT,startCancelableOperation:()=>LT,stream:()=>te});ie(ce,Ve);var qc=class{readFile(){throw new Error("No file system is available.")}async readDirectory(){return[]}},gu={fileSystemProvider:()=>new qc};var K0={Grammar:()=>{},LanguageMetaData:()=>({caseInsensitive:!1,fileExtensions:[".langium"],languageId:"langium"})},P0={AstReflection:()=>new io};function I0(){let t=Ya(yu(gu),P0),e=Ya(fu({shared:t}),K0);return t.ServiceRegistry.register(e),e}function jc(t){var e;let r=I0(),n=r.serializer.JsonSerializer.deserialize(t);return r.shared.workspace.LangiumDocumentFactory.fromModel(n,_e.parse(`memory://${(e=n.name)!==null&&e!==void 0?e:"grammar"}.langium`)),n}ie(ot,ce);var _i=Lt(mr(),1);function Ev(t,e){let r={stacks:t,tokens:e};return $F(r),r.stacks.flat().forEach(a=>{a.property=void 0}),hR(r.stacks).map(a=>a[a.length-1])}function Dv(t){let{next:e,cardinalities:r,visited:n,plus:a}=t,o=[],i=e.feature;if(n.has(i))return[];n.add(i);let s,u=i;for(;u.$container;)if(Sr(u.$container)){s=u.$container;break}else if(Aa(u.$container))u=u.$container;else break;if(Py(u.cardinality)){let l=Ni({next:{feature:u,type:e.type},cardinalities:r,visited:n,plus:a});for(let c of l)a.add(c.feature);o.push(...l)}if(s){let l=s.elements.indexOf(u);l!==void 0&&l<s.elements.length-1&&o.push(...yR({feature:s,type:e.type},l+1,r,n,a)),o.every(c=>Ra(c.feature.cardinality,c.feature)||Ra(r.get(c.feature))||a.has(c.feature))&&o.push(...Dv({next:{feature:s,type:e.type},cardinalities:r,visited:n,plus:a}))}return o}function ep(t){return Ke(t)&&(t={feature:t}),Ni({next:t,cardinalities:new Map,visited:new Set,plus:new Set})}function Ni(t){var e,r,n;let{next:a,cardinalities:o,visited:i,plus:s}=t;if(a===void 0)return[];let{feature:u,type:l}=a;if(Sr(u)){if(i.has(u))return[];i.add(u)}if(Sr(u))return yR(a,0,o,i,s).map(c=>Zd(c,u.cardinality,o));if(so(u)||uo(u))return u.elements.flatMap(c=>Ni({next:{feature:c,type:l,property:a.property},cardinalities:o,visited:i,plus:s})).map(c=>Zd(c,u.cardinality,o));if(Kt(u)){let c={feature:u.terminal,type:l,property:(e=a.property)!==null&&e!==void 0?e:u.feature};return Ni({next:c,cardinalities:o,visited:i,plus:s}).map(d=>Zd(d,u.cardinality,o))}else{if(Dr(u))return Dv({next:{feature:u,type:yn(u),property:(r=a.property)!==null&&r!==void 0?r:u.feature},cardinalities:o,visited:i,plus:s});if(Qt(u)&&Ue(u.rule.ref)){let c=u.rule.ref,d={feature:c.definition,type:c.fragment||c.dataType?void 0:(n=Ka(c))!==null&&n!==void 0?n:c.name,property:a.property};return Ni({next:d,cardinalities:o,visited:i,plus:s}).map(p=>Zd(p,u.cardinality,o))}else return[a]}}function Zd(t,e,r){return r.set(t.feature,e),t}function yR(t,e,r,n,a){var o;let i=[],s;for(;e<t.feature.elements.length&&(s={feature:t.feature.elements[e++],type:t.type},i.push(...Ni({next:s,cardinalities:r,visited:n,plus:a})),!!Ra((o=s.feature.cardinality)!==null&&o!==void 0?o:r.get(s.feature),s.feature)););return i}function $F(t){for(let e of t.tokens){let r=hR(t.stacks,e);t.stacks=r}}function hR(t,e){let r=[];for(let n of t)r.push(...TF(n,e));return r}function TF(t,e){let r=new Map,n=new Set(t.map(o=>o.feature).filter(CF)),a=[];for(;t.length>0;){let o=t.pop(),i=Dv({next:o,cardinalities:r,plus:n,visited:new Set}).filter(s=>e?Nv(s.feature,e):!0);for(let s of i)a.push([...t,s]);if(!i.every(s=>Ra(s.feature.cardinality,s.feature)||Ra(r.get(s.feature))))break}return a}function CF(t){if(t.cardinality==="+")return!0;let e=pr(t,Kt);return!!(e&&e.cardinality==="+")}function Nv(t,e){if($t(t))return t.value===e.image;if(Qt(t))return xF(t.rule.ref,e);if(Nr(t)){let r=Qi(t);if(r)return Nv(r,e)}return!1}function xF(t,e){return Ue(t)?ep(t.definition).some(n=>Nv(n.feature,e)):Xt(t)?On(t).test(e.image):!1}function gR(t){let e=Array.from(new Set(t.flatMap(n=>{var a;return(a=n?.triggerCharacters)!==null&&a!==void 0?a:[]}))),r=Array.from(new Set(t.flatMap(n=>{var a;return(a=n?.allCommitCharacters)!==null&&a!==void 0?a:[]})));return{triggerCharacters:e.length>0?e:void 0,allCommitCharacters:r.length>0?r:void 0}}var tp=class{constructor(e){this.scopeProvider=e.references.ScopeProvider,this.grammar=e.Grammar,this.completionParser=e.parser.CompletionParser,this.nameProvider=e.references.NameProvider,this.lexer=e.parser.Lexer,this.nodeKindProvider=e.shared.lsp.NodeKindProvider,this.fuzzyMatcher=e.shared.lsp.FuzzyMatcher,this.grammarConfig=e.parser.GrammarConfig,this.astReflection=e.shared.AstReflection}async getCompletion(e,r){let n=[],a=this.buildContexts(e,r.position),o=(u,l)=>{let c=this.fillCompletionItem(u,l);c&&n.push(c)},i=u=>$t(u.feature)?u.feature.value:u.feature,s=[];for(let u of a)if(await Promise.all(te(u.features).distinct(i).exclude(s).map(l=>this.completionFor(u,l,o))),s.push(...u.features),!this.continueCompletion(n))break;return _i.CompletionList.create(this.deduplicateItems(n),!0)}deduplicateItems(e){return te(e).distinct(r=>`${r.kind}_${r.label}_${r.detail}`).toArray()}findFeaturesAt(e,r){let n=e.getText({start:_i.Position.create(0,0),end:e.positionAt(r)}),a=this.completionParser.parse(n),o=a.tokens;if(a.tokenIndex===0){let u=Yi(this.grammar),l=ep({feature:u.definition,type:Ka(u)});return o.length>0?(o.shift(),Ev(l.map(c=>[c]),o)):l}let i=[...o].splice(a.tokenIndex);return Ev([a.elementStack.map(u=>({feature:u}))],i)}*buildContexts(e,r){var n,a;let o=e.parseResult.value.$cstNode;if(!o)return;let i=e.textDocument,s=i.getText(),u=i.offsetAt(r),l={document:e,textDocument:i,offset:u,position:r},c=this.findDataTypeRuleStart(o,u);if(c){let[g,f]=c,$=(n=Wi(o,g))===null||n===void 0?void 0:n.astNode;yield Object.assign(Object.assign({},l),{node:$,tokenOffset:g,tokenEndOffset:f,features:this.findFeaturesAt(i,g)})}let{nextTokenStart:d,nextTokenEnd:p,previousTokenStart:y,previousTokenEnd:v}=this.backtrackToAnyToken(s,u),S=d;u<=d&&y!==void 0&&(S=y);let T=(a=Wi(o,S))===null||a===void 0?void 0:a.astNode,A=!0;if(y!==void 0&&v!==void 0&&v===u&&(yield Object.assign(Object.assign({},l),{node:T,tokenOffset:y,tokenEndOffset:v,features:this.findFeaturesAt(i,y)}),A=this.performNextTokenCompletion(e,s.substring(y,v),y,v),A&&(yield Object.assign(Object.assign({},l),{node:T,tokenOffset:v,tokenEndOffset:v,features:this.findFeaturesAt(i,v)}))),T)A&&(yield Object.assign(Object.assign({},l),{node:T,tokenOffset:d,tokenEndOffset:p,features:this.findFeaturesAt(i,d)}));else{let g=Yi(this.grammar);if(!g)throw new Error("Missing entry parser rule");yield Object.assign(Object.assign({},l),{tokenOffset:d,tokenEndOffset:p,features:ep(g.definition)})}}performNextTokenCompletion(e,r,n,a){return/\P{L}$/u.test(r)}findDataTypeRuleStart(e,r){var n,a;let o=pt(e,r,this.grammarConfig.nameRegexp),i=!!(!((n=pr(o?.grammarSource,Ue))===null||n===void 0)&&n.dataType);if(i){for(;i;)o=o?.container,i=!!(!((a=pr(o?.grammarSource,Ue))===null||a===void 0)&&a.dataType);if(o)return[o.offset,o.end]}}continueCompletion(e){return e.length===0}backtrackToAnyToken(e,r){let n=this.lexer.tokenize(e).tokens;if(n.length===0)return{nextTokenStart:r,nextTokenEnd:r};let a;for(let o of n){if(o.startOffset>=r)return{nextTokenStart:r,nextTokenEnd:r,previousTokenStart:a?a.startOffset:void 0,previousTokenEnd:a?a.endOffset+1:void 0};if(o.endOffset>=r)return{nextTokenStart:o.startOffset,nextTokenEnd:o.endOffset+1,previousTokenStart:a?a.startOffset:void 0,previousTokenEnd:a?a.endOffset+1:void 0};a=o}return{nextTokenStart:r,nextTokenEnd:r,previousTokenStart:a?a.startOffset:void 0,previousTokenEnd:a?a.endOffset+1:void 0}}completionFor(e,r,n){if($t(r.feature))return this.completionForKeyword(e,r.feature,n);if(Nr(r.feature)&&e.node)return this.completionForCrossReference(e,r,n)}completionForCrossReference(e,r,n){let a=pr(r.feature,Kt),o=e.node;if(a&&o){r.type&&(o={$type:r.type,$container:o,$containerProperty:r.property},Ui(this.astReflection,o));let i={reference:{$refText:""},container:o,property:a.feature};try{this.scopeProvider.getScope(i).getAllElements().forEach(u=>{this.filterCrossReference(e,u)&&n(e,this.createReferenceCompletionItem(u))})}catch(s){console.error(s)}}}createReferenceCompletionItem(e){return{nodeDescription:e,kind:this.nodeKindProvider.getCompletionItemKind(e),detail:e.type,sortText:"0"}}filterCrossReference(e,r){return!0}completionForKeyword(e,r,n){this.filterKeyword(e,r)&&n(e,{label:r.value,kind:_i.CompletionItemKind.Keyword,detail:"Keyword",sortText:"1"})}filterKeyword(e,r){return/\p{L}/u.test(r.value)}fillCompletionItem(e,r){var n,a;let o;if(typeof r.label=="string")o=r.label;else if("node"in r){let l=this.nameProvider.getName(r.node);if(!l)return;o=l}else if("nodeDescription"in r)o=r.nodeDescription.name;else return;let i;typeof((n=r.textEdit)===null||n===void 0?void 0:n.newText)=="string"?i=r.textEdit.newText:typeof r.insertText=="string"?i=r.insertText:i=o;let s=(a=r.textEdit)!==null&&a!==void 0?a:this.buildCompletionTextEdit(e,o,i);return s?{additionalTextEdits:r.additionalTextEdits,command:r.command,commitCharacters:r.commitCharacters,data:r.data,detail:r.detail,documentation:r.documentation,filterText:r.filterText,insertText:r.insertText,insertTextFormat:r.insertTextFormat,insertTextMode:r.insertTextMode,kind:r.kind,labelDetails:r.labelDetails,preselect:r.preselect,sortText:r.sortText,tags:r.tags,textEditText:r.textEditText,textEdit:s,label:o}:void 0}buildCompletionTextEdit(e,r,n){let o=e.textDocument.getText().substring(e.tokenOffset,e.offset);if(this.fuzzyMatcher.match(o,r)){let i=e.textDocument.positionAt(e.tokenOffset),s=e.position;return{newText:n,range:{start:i,end:s}}}else return}};var bF=Lt(mr(),1);var mR=Lt(mr(),1);var rp=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getDefinition(e,r){let n=e.parseResult.value;if(n.$cstNode){let a=n.$cstNode,o=pt(a,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(o)return this.collectLocationLinks(o,r)}}collectLocationLinks(e,r){var n;let a=this.findLink(e);if(a)return[mR.LocationLink.create(a.targetDocument.textDocument.uri,((n=a.target.astNode.$cstNode)!==null&&n!==void 0?n:a.target).range,a.target.range,a.source.range)]}findLink(e){let r=this.references.findDeclarationNode(e);if(r?.astNode){let n=ze(r.astNode);if(r&&n)return{source:e,target:r,targetDocument:n}}}};var RR=Lt(mr(),1);var vR=Lt(mr(),1);var np=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}getDocumentHighlight(e,r){let n=e.parseResult.value.$cstNode;if(!n)return;let a=pt(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(!a)return;let o=this.references.findDeclaration(a);if(o){let i=bt.equals(ze(o).uri,e.uri),s={documentUri:e.uri,includeDeclaration:i};return this.references.findReferences(o,s).map(l=>this.createDocumentHighlight(l)).toArray()}}createDocumentHighlight(e){return vR.DocumentHighlight.create(e.segment.range)}};var ap=class{constructor(e){this.nameProvider=e.references.NameProvider,this.nodeKindProvider=e.shared.lsp.NodeKindProvider}getSymbols(e){return this.getSymbol(e,e.parseResult.value)}getSymbol(e,r){let n=r.$cstNode,a=this.nameProvider.getNameNode(r);if(a&&n){let o=this.nameProvider.getName(r);return[{kind:this.nodeKindProvider.getSymbolKind(r),name:o??a.text,range:n.range,selectionRange:a.range,children:this.getChildSymbols(e,r)}]}else return this.getChildSymbols(e,r)||[]}getChildSymbols(e,r){let n=[];for(let a of Ta(r)){let o=this.getSymbol(e,a);n.push(...o)}if(n.length>0)return n}};var Iu=Lt(mr(),1);var op=class{constructor(e){this.documentBuilder=e.workspace.DocumentBuilder,this.workspaceLock=e.workspace.WorkspaceLock;let r=!1;e.lsp.LanguageServer.onInitialize(n=>{var a,o;r=!!(!((o=(a=n.capabilities.workspace)===null||a===void 0?void 0:a.didChangeWatchedFiles)===null||o===void 0)&&o.dynamicRegistration)}),e.lsp.LanguageServer.onInitialized(n=>{r&&this.registerFileWatcher(e)})}registerFileWatcher(e){let r=te(e.ServiceRegistry.all).flatMap(n=>n.LanguageMetaData.fileExtensions).map(n=>n.startsWith(".")?n.substring(1):n).distinct().toArray();if(r.length>0){let n=e.lsp.Connection,a={watchers:[{globPattern:r.length===1?`**/*.${r[0]}`:`**/*.{${r.join(",")}}`}]};n?.client.register(Iu.DidChangeWatchedFilesNotification.type,a)}}fireDocumentUpdate(e,r){this.workspaceLock.write(n=>this.documentBuilder.update(e,r,n))}didChangeContent(e){this.fireDocumentUpdate([_e.parse(e.document.uri)],[])}didChangeWatchedFiles(e){let r=te(e.changes).filter(a=>a.type!==Iu.FileChangeType.Deleted).distinct(a=>a.uri).map(a=>_e.parse(a.uri)).toArray(),n=te(e.changes).filter(a=>a.type===Iu.FileChangeType.Deleted).distinct(a=>a.uri).map(a=>_e.parse(a.uri)).toArray();this.fireDocumentUpdate(r,n)}};var Eu=Lt(mr(),1);var ip=class{constructor(e){this.commentNames=e.parser.GrammarConfig.multilineCommentRules}getFoldingRanges(e){let r=[],n=a=>r.push(a);return this.collectFolding(e,n),r}collectFolding(e,r){var n;let a=(n=e.parseResult)===null||n===void 0?void 0:n.value;if(a){if(this.shouldProcessContent(a)){let o=Jt(a).iterator(),i;do if(i=o.next(),!i.done){let s=i.value;this.shouldProcess(s)&&this.collectObjectFolding(e,s,r),this.shouldProcessContent(s)||o.prune()}while(!i.done)}this.collectCommentFolding(e,a,r)}}shouldProcess(e){return!0}shouldProcessContent(e){return!0}collectObjectFolding(e,r,n){let a=r.$cstNode;if(a){let o=this.toFoldingRange(e,a);o&&n(o)}}collectCommentFolding(e,r,n){let a=r.$cstNode;if(a){for(let o of cf(a))if(this.commentNames.includes(o.tokenType.name)){let i=this.toFoldingRange(e,o,Eu.FoldingRangeKind.Comment);i&&n(i)}}}toFoldingRange(e,r,n){let a=r.range,o=a.start,i=a.end;if(!(i.line-o.line<2))return this.includeLastFoldingLine(r,n)||(i=e.textDocument.positionAt(e.textDocument.offsetAt({line:i.line,character:0})-1)),Eu.FoldingRange.create(o.line,i.line,o.character,i.character,n)}includeLastFoldingLine(e,r){if(r===Eu.FoldingRangeKind.Comment)return!1;let n=e.text,a=n.charAt(n.length-1);return!(a==="}"||a===")"||a==="]")}};var sp=class{match(e,r){if(e.length===0)return!0;r=r.toLowerCase();let n=!1,a,o=0,i=r.length;for(let s=0;s<i;s++){let u=r.charCodeAt(s),l=e.charCodeAt(o);if((u===l||this.toUpperCharCode(u)===this.toUpperCharCode(l))&&(n||(n=a===void 0||this.isWordTransition(a,u)),n&&o++,o===e.length))return!0;a=u}return!1}isWordTransition(e,r){return wR<=e&&e<=SR&&kF<=r&&r<=RF||e===AR&&r!==AR}toUpperCharCode(e){return wR<=e&&e<=SR?e-32:e}},wR=97,SR=122,kF=65,RF=90,AR=95;var _v=class{constructor(e){this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getHoverContent(e,r){var n,a;let o=(a=(n=e.parseResult)===null||n===void 0?void 0:n.value)===null||a===void 0?void 0:a.$cstNode;if(o){let i=e.textDocument.offsetAt(r.position),s=pt(o,i,this.grammarConfig.nameRegexp);if(s&&s.offset+s.length>i){let u=this.references.findDeclaration(s);if(u)return this.getAstNodeHoverContent(u)}}}},up=class extends _v{constructor(e){super(e),this.documentationProvider=e.documentation.DocumentationProvider}getAstNodeHoverContent(e){let r=this.documentationProvider.getDocumentation(e);if(r)return{contents:{kind:"markdown",value:r}}}};var Kr=Lt(Xe(),1);var ae=Lt(mr(),1);var TR={[ae.SemanticTokenTypes.class]:0,[ae.SemanticTokenTypes.comment]:1,[ae.SemanticTokenTypes.enum]:2,[ae.SemanticTokenTypes.enumMember]:3,[ae.SemanticTokenTypes.event]:4,[ae.SemanticTokenTypes.function]:5,[ae.SemanticTokenTypes.interface]:6,[ae.SemanticTokenTypes.keyword]:7,[ae.SemanticTokenTypes.macro]:8,[ae.SemanticTokenTypes.method]:9,[ae.SemanticTokenTypes.modifier]:10,[ae.SemanticTokenTypes.namespace]:11,[ae.SemanticTokenTypes.number]:12,[ae.SemanticTokenTypes.operator]:13,[ae.SemanticTokenTypes.parameter]:14,[ae.SemanticTokenTypes.property]:15,[ae.SemanticTokenTypes.regexp]:16,[ae.SemanticTokenTypes.string]:17,[ae.SemanticTokenTypes.struct]:18,[ae.SemanticTokenTypes.type]:19,[ae.SemanticTokenTypes.typeParameter]:20,[ae.SemanticTokenTypes.variable]:21,[ae.SemanticTokenTypes.decorator]:22},KF={[ae.SemanticTokenModifiers.abstract]:1,[ae.SemanticTokenModifiers.async]:2,[ae.SemanticTokenModifiers.declaration]:4,[ae.SemanticTokenModifiers.defaultLibrary]:8,[ae.SemanticTokenModifiers.definition]:16,[ae.SemanticTokenModifiers.deprecated]:32,[ae.SemanticTokenModifiers.documentation]:64,[ae.SemanticTokenModifiers.modification]:128,[ae.SemanticTokenModifiers.readonly]:256,[ae.SemanticTokenModifiers.static]:512},CR={legend:{tokenTypes:Object.keys(TR),tokenModifiers:Object.keys(KF)},full:{delta:!0},range:!0};var $R;(function(t){function e(n,a){let o=new Map;Object.entries(TR).forEach(([u,l])=>o.set(l,u));let i=0,s=0;return r(n.data,5).map(u=>{i+=u[0],u[0]!==0&&(s=0),s+=u[1];let l=u[2];return{offset:a.textDocument.offsetAt({line:i,character:s}),tokenType:o.get(u[3]),tokenModifiers:u[4],text:a.textDocument.getText({start:{line:i,character:s},end:{line:i,character:s+l}})}})}t.decode=e;function r(n,a){let o=[];for(let i=0;i<n.length;i+=a){let s=n.slice(i,i+a);o.push(s)}return o}})($R||($R={}));function xR(t){let e=[],r=[];t.forEach(a=>{a?.triggerCharacters&&e.push(...a.triggerCharacters),a?.retriggerCharacters&&r.push(...a.retriggerCharacters)});let n={triggerCharacters:e.length>0?Array.from(new Set(e)).sort():void 0,retriggerCharacters:r.length>0?Array.from(new Set(r)).sort():void 0};return n.triggerCharacters?n:void 0}var lp=class{constructor(e){this.onInitializeEmitter=new Kr.Emitter,this.onInitializedEmitter=new Kr.Emitter,this.services=e}get onInitialize(){return this.onInitializeEmitter.event}get onInitialized(){return this.onInitializedEmitter.event}async initialize(e){return this.eagerLoadServices(),this.fireInitializeOnDefaultServices(e),this.onInitializeEmitter.fire(e),this.onInitializeEmitter.dispose(),this.buildInitializeResult(e)}eagerLoadServices(){hu(this.services),this.services.ServiceRegistry.all.forEach(e=>hu(e))}hasService(e){return this.services.ServiceRegistry.all.some(n=>e(n)!==void 0)}buildInitializeResult(e){var r,n,a,o;let i=(r=this.services.lsp.FileOperationHandler)===null||r===void 0?void 0:r.fileOperationOptions,s=this.services.ServiceRegistry.all,u=this.hasService(R=>{var k;return(k=R.lsp)===null||k===void 0?void 0:k.Formatter}),l=s.map(R=>{var k,fe;return(fe=(k=R.lsp)===null||k===void 0?void 0:k.Formatter)===null||fe===void 0?void 0:fe.formatOnTypeOptions}).find(R=>!!R),c=this.hasService(R=>{var k;return(k=R.lsp)===null||k===void 0?void 0:k.CodeActionProvider}),d=this.hasService(R=>{var k;return(k=R.lsp)===null||k===void 0?void 0:k.SemanticTokenProvider}),p=(a=(n=this.services.lsp)===null||n===void 0?void 0:n.ExecuteCommandHandler)===null||a===void 0?void 0:a.commands,y=this.hasService(R=>{var k;return(k=R.lsp)===null||k===void 0?void 0:k.DocumentLinkProvider}),v=xR(s.map(R=>{var k,fe;return(fe=(k=R.lsp)===null||k===void 0?void 0:k.SignatureHelp)===null||fe===void 0?void 0:fe.signatureHelpOptions})),S=this.hasService(R=>{var k;return(k=R.lsp)===null||k===void 0?void 0:k.TypeProvider}),T=this.hasService(R=>{var k;return(k=R.lsp)===null||k===void 0?void 0:k.ImplementationProvider}),A=this.hasService(R=>{var k;return(k=R.lsp)===null||k===void 0?void 0:k.CompletionProvider}),g=gR(s.map(R=>{var k,fe;return(fe=(k=R.lsp)===null||k===void 0?void 0:k.CompletionProvider)===null||fe===void 0?void 0:fe.completionOptions})),f=this.hasService(R=>{var k;return(k=R.lsp)===null||k===void 0?void 0:k.ReferencesProvider}),$=this.hasService(R=>{var k;return(k=R.lsp)===null||k===void 0?void 0:k.DocumentSymbolProvider}),P=this.hasService(R=>{var k;return(k=R.lsp)===null||k===void 0?void 0:k.DefinitionProvider}),Q=this.hasService(R=>{var k;return(k=R.lsp)===null||k===void 0?void 0:k.DocumentHighlightProvider}),vt=this.hasService(R=>{var k;return(k=R.lsp)===null||k===void 0?void 0:k.FoldingRangeProvider}),Qe=this.hasService(R=>{var k;return(k=R.lsp)===null||k===void 0?void 0:k.HoverProvider}),dr=this.hasService(R=>{var k;return(k=R.lsp)===null||k===void 0?void 0:k.RenameProvider}),jt=this.hasService(R=>{var k;return(k=R.lsp)===null||k===void 0?void 0:k.CallHierarchyProvider}),N=this.hasService(R=>{var k;return(k=R.lsp)===null||k===void 0?void 0:k.TypeHierarchyProvider}),x=this.hasService(R=>{var k;return(k=R.lsp)===null||k===void 0?void 0:k.CodeLensProvider}),W=this.hasService(R=>{var k;return(k=R.lsp)===null||k===void 0?void 0:k.DeclarationProvider}),O=this.hasService(R=>{var k;return(k=R.lsp)===null||k===void 0?void 0:k.InlayHintProvider}),re=(o=this.services.lsp)===null||o===void 0?void 0:o.WorkspaceSymbolProvider;return{capabilities:{workspace:{workspaceFolders:{supported:!0},fileOperations:i},executeCommandProvider:p&&{commands:p},textDocumentSync:Kr.TextDocumentSyncKind.Incremental,completionProvider:A?g:void 0,referencesProvider:f,documentSymbolProvider:$,definitionProvider:P,typeDefinitionProvider:S,documentHighlightProvider:Q,codeActionProvider:c,documentFormattingProvider:u,documentRangeFormattingProvider:u,documentOnTypeFormattingProvider:l,foldingRangeProvider:vt,hoverProvider:Qe,renameProvider:dr?{prepareProvider:!0}:void 0,semanticTokensProvider:d?CR:void 0,signatureHelpProvider:v,implementationProvider:T,callHierarchyProvider:jt?{}:void 0,typeHierarchyProvider:N?{}:void 0,documentLinkProvider:y?{resolveProvider:!1}:void 0,codeLensProvider:x?{resolveProvider:!1}:void 0,declarationProvider:W,inlayHintProvider:O?{resolveProvider:!1}:void 0,workspaceSymbolProvider:re?{resolveProvider:!!re.resolveSymbol}:void 0}}}async initialized(e){await this.fireInitializedOnDefaultServices(e),this.onInitializedEmitter.fire(e),this.onInitializedEmitter.dispose()}fireInitializeOnDefaultServices(e){this.services.workspace.ConfigurationProvider.initialize(e),this.services.workspace.WorkspaceManager.initialize(e)}async fireInitializedOnDefaultServices(e){let r=this.services.lsp.Connection,n=r?Object.assign(Object.assign({},e),{register:a=>r.client.register(Kr.DidChangeConfigurationNotification.type,a),getConfiguration:a=>r.workspace.getConfiguration(a)}):e;await this.services.workspace.ConfigurationProvider.initialized(n),await this.services.workspace.WorkspaceManager.initialized(e)}};function bR(t){let e=t.lsp.Connection;if(!e)throw new Error("Starting a language server requires the languageServer.Connection service to be set.");PF(e,t),IF(e,t),EF(e,t),DF(e,t),NF(e,t),MF(e,t),OF(e,t),zF(e,t),LF(e,t),WF(e,t),HF(e,t),BF(e,t),_F(e,t),UF(e,t),GF(e,t),qF(e,t),jF(e,t),YF(e,t),QF(e,t),eW(e,t),tW(e,t),JF(e,t),XF(e,t),VF(e,t),FF(e,t),ZF(e,t),e.onInitialize(n=>t.lsp.LanguageServer.initialize(n)),e.onInitialized(n=>t.lsp.LanguageServer.initialized(n)),t.workspace.TextDocuments.listen(e),e.listen()}function PF(t,e){let r=e.lsp.DocumentUpdateHandler;e.workspace.TextDocuments.onDidChangeContent(a=>r.didChangeContent(a)),t.onDidChangeWatchedFiles(a=>r.didChangeWatchedFiles(a))}function IF(t,e){let r=e.lsp.FileOperationHandler;r&&(r.didCreateFiles&&t.workspace.onDidCreateFiles(n=>r.didCreateFiles(n)),r.didRenameFiles&&t.workspace.onDidRenameFiles(n=>r.didRenameFiles(n)),r.didDeleteFiles&&t.workspace.onDidDeleteFiles(n=>r.didDeleteFiles(n)),r.willCreateFiles&&t.workspace.onWillCreateFiles(n=>r.willCreateFiles(n)),r.willRenameFiles&&t.workspace.onWillRenameFiles(n=>r.willRenameFiles(n)),r.willDeleteFiles&&t.workspace.onWillDeleteFiles(n=>r.willDeleteFiles(n)))}function EF(t,e){e.workspace.DocumentBuilder.onBuildPhase(H.Validated,async(n,a)=>{for(let o of n)if(o.diagnostics&&t.sendDiagnostics({uri:o.uri.toString(),diagnostics:o.diagnostics}),a.isCancellationRequested)return})}function DF(t,e){t.onCompletion(Mt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.CompletionProvider)===null||s===void 0?void 0:s.getCompletion(n,a,o)},e,H.IndexedReferences))}function NF(t,e){t.onReferences(Mt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.ReferencesProvider)===null||s===void 0?void 0:s.findReferences(n,a,o)},e,H.IndexedReferences))}function _F(t,e){t.onCodeAction(Mt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.CodeActionProvider)===null||s===void 0?void 0:s.getCodeActions(n,a,o)},e,H.Validated))}function MF(t,e){t.onDocumentSymbol(Mt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.DocumentSymbolProvider)===null||s===void 0?void 0:s.getSymbols(n,a,o)},e,H.Parsed))}function OF(t,e){t.onDefinition(Mt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.DefinitionProvider)===null||s===void 0?void 0:s.getDefinition(n,a,o)},e,H.IndexedReferences))}function zF(t,e){t.onTypeDefinition(Mt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.TypeProvider)===null||s===void 0?void 0:s.getTypeDefinition(n,a,o)},e,H.IndexedReferences))}function LF(t,e){t.onImplementation(Mt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.ImplementationProvider)===null||s===void 0?void 0:s.getImplementation(n,a,o)},e,H.IndexedReferences))}function FF(t,e){t.onDeclaration(Mt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.DeclarationProvider)===null||s===void 0?void 0:s.getDeclaration(n,a,o)},e,H.IndexedReferences))}function WF(t,e){t.onDocumentHighlight(Mt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.DocumentHighlightProvider)===null||s===void 0?void 0:s.getDocumentHighlight(n,a,o)},e,H.IndexedReferences))}function GF(t,e){t.onHover(Mt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.HoverProvider)===null||s===void 0?void 0:s.getHoverContent(n,a,o)},e,H.IndexedReferences))}function HF(t,e){t.onFoldingRanges(Mt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.FoldingRangeProvider)===null||s===void 0?void 0:s.getFoldingRanges(n,a,o)},e,H.Parsed))}function BF(t,e){t.onDocumentFormatting(Mt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.Formatter)===null||s===void 0?void 0:s.formatDocument(n,a,o)},e,H.Parsed)),t.onDocumentRangeFormatting(Mt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.Formatter)===null||s===void 0?void 0:s.formatDocumentRange(n,a,o)},e,H.Parsed)),t.onDocumentOnTypeFormatting(Mt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.Formatter)===null||s===void 0?void 0:s.formatDocumentOnType(n,a,o)},e,H.Parsed))}function UF(t,e){t.onRenameRequest(Mt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.RenameProvider)===null||s===void 0?void 0:s.rename(n,a,o)},e,H.IndexedReferences)),t.onPrepareRename(Mt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.RenameProvider)===null||s===void 0?void 0:s.prepareRename(n,a,o)},e,H.IndexedReferences))}function qF(t,e){t.languages.inlayHint.on(Pn((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.InlayHintProvider)===null||s===void 0?void 0:s.getInlayHints(n,a,o)},e,H.IndexedReferences))}function jF(t,e){let r={data:[]};t.languages.semanticTokens.on(Pn((n,a,o,i)=>{var s;return!((s=n.lsp)===null||s===void 0)&&s.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlight(a,o,i):r},e,H.IndexedReferences)),t.languages.semanticTokens.onDelta(Pn((n,a,o,i)=>{var s;return!((s=n.lsp)===null||s===void 0)&&s.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightDelta(a,o,i):r},e,H.IndexedReferences)),t.languages.semanticTokens.onRange(Pn((n,a,o,i)=>{var s;return!((s=n.lsp)===null||s===void 0)&&s.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightRange(a,o,i):r},e,H.IndexedReferences))}function VF(t,e){t.onDidChangeConfiguration(r=>{r.settings&&e.workspace.ConfigurationProvider.updateConfiguration(r)})}function YF(t,e){let r=e.lsp.ExecuteCommandHandler;r&&t.onExecuteCommand(async(n,a)=>{var o;try{return await r.executeCommand(n.command,(o=n.arguments)!==null&&o!==void 0?o:[],a)}catch(i){return to(i)}})}function XF(t,e){t.onDocumentLinks(Pn((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.DocumentLinkProvider)===null||s===void 0?void 0:s.getDocumentLinks(n,a,o)},e,H.Parsed))}function QF(t,e){t.onSignatureHelp(Pn((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.SignatureHelp)===null||s===void 0?void 0:s.provideSignatureHelp(n,a,o)},e,H.IndexedReferences))}function JF(t,e){t.onCodeLens(Pn((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.CodeLensProvider)===null||s===void 0?void 0:s.provideCodeLens(n,a,o)},e,H.IndexedReferences))}function ZF(t,e){var r;let n=e.lsp.WorkspaceSymbolProvider;if(n){let a=e.workspace.DocumentBuilder;t.onWorkspaceSymbol(async(i,s)=>{try{return await a.waitUntil(H.IndexedContent,s),await n.getSymbols(i,s)}catch(u){return to(u)}});let o=(r=n.resolveSymbol)===null||r===void 0?void 0:r.bind(n);o&&t.onWorkspaceSymbolResolve(async(i,s)=>{try{return await a.waitUntil(H.IndexedContent,s),await o(i,s)}catch(u){return to(u)}})}}function eW(t,e){t.languages.callHierarchy.onPrepare(Pn(async(r,n,a,o)=>{var i;if(!((i=r.lsp)===null||i===void 0)&&i.CallHierarchyProvider){let s=await r.lsp.CallHierarchyProvider.prepareCallHierarchy(n,a,o);return s??null}return null},e,H.IndexedReferences)),t.languages.callHierarchy.onIncomingCalls(cp(async(r,n,a)=>{var o;if(!((o=r.lsp)===null||o===void 0)&&o.CallHierarchyProvider){let i=await r.lsp.CallHierarchyProvider.incomingCalls(n,a);return i??null}return null},e)),t.languages.callHierarchy.onOutgoingCalls(cp(async(r,n,a)=>{var o;if(!((o=r.lsp)===null||o===void 0)&&o.CallHierarchyProvider){let i=await r.lsp.CallHierarchyProvider.outgoingCalls(n,a);return i??null}return null},e))}function tW(t,e){e.ServiceRegistry.all.some(r=>{var n;return(n=r.lsp)===null||n===void 0?void 0:n.TypeHierarchyProvider})&&(t.languages.typeHierarchy.onPrepare(Pn(async(r,n,a,o)=>{var i,s;let u=await((s=(i=r.lsp)===null||i===void 0?void 0:i.TypeHierarchyProvider)===null||s===void 0?void 0:s.prepareTypeHierarchy(n,a,o));return u??null},e,H.IndexedReferences)),t.languages.typeHierarchy.onSupertypes(cp(async(r,n,a)=>{var o,i;let s=await((i=(o=r.lsp)===null||o===void 0?void 0:o.TypeHierarchyProvider)===null||i===void 0?void 0:i.supertypes(n,a));return s??null},e)),t.languages.typeHierarchy.onSubtypes(cp(async(r,n,a)=>{var o,i;let s=await((i=(o=r.lsp)===null||o===void 0?void 0:o.TypeHierarchyProvider)===null||i===void 0?void 0:i.subtypes(n,a));return s??null},e)))}function cp(t,e){let r=e.ServiceRegistry;return async(n,a)=>{let o=_e.parse(n.item.uri),i=await Mv(e,a,o,H.IndexedReferences);if(i)return i;let s=r.getServices(o);if(!s){let u=`Could not find service instance for uri: '${o.toString()}'`;throw console.error(u),new Error(u)}try{return await t(s,n,a)}catch(u){return to(u)}}}function Pn(t,e,r){let n=e.workspace.LangiumDocuments,a=e.ServiceRegistry;return async(o,i)=>{let s=_e.parse(o.textDocument.uri),u=await Mv(e,i,s,r);if(u)return u;let l=a.getServices(s);if(!l){let d=`Could not find service instance for uri: '${s}'`;throw console.error(d),new Error(d)}let c=await n.getOrCreateDocument(s);try{return await t(l,c,o,i)}catch(d){return to(d)}}}function Mt(t,e,r){let n=e.workspace.LangiumDocuments,a=e.ServiceRegistry;return async(o,i)=>{let s=_e.parse(o.textDocument.uri),u=await Mv(e,i,s,r);if(u)return u;let l=a.getServices(s);if(!l)return console.error(`Could not find service instance for uri: '${s.toString()}'`),null;let c=n.getDocument(s);if(!c)return null;try{return await t(l,c,o,i)}catch(d){return to(d)}}}async function Mv(t,e,r,n){if(n!==void 0){let a=t.workspace.DocumentBuilder;try{await a.waitUntil(n,r,e)}catch(o){return to(o)}}}function to(t){if(nn(t))return new Kr.ResponseError(Kr.LSPErrorCodes.RequestCancelled,"The request has been cancelled.");if(t instanceof Kr.ResponseError)return t;throw t}var pp=Lt(mr(),1),dp=class{getSymbolKind(){return pp.SymbolKind.Field}getCompletionItemKind(){return pp.CompletionItemKind.Reference}};var kR=Lt(mr(),1);var fp=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}findReferences(e,r){let n=e.parseResult.value.$cstNode;if(!n)return[];let a=pt(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);return a?this.getReferences(a,r,e):[]}getReferences(e,r,n){let a=[],o=this.references.findDeclaration(e);if(o){let i={includeDeclaration:r.context.includeDeclaration};this.references.findReferences(o,i).forEach(s=>{a.push(kR.Location.create(s.sourceUri.toString(),s.segment.range))})}return a}};Wa();var yp=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}async rename(e,r){let n={},a=e.parseResult.value.$cstNode;if(!a)return;let o=e.textDocument.offsetAt(r.position),i=pt(a,o,this.grammarConfig.nameRegexp);if(!i)return;let s=this.references.findDeclaration(i);if(!s)return;let u={onlyLocal:!1,includeDeclaration:!0};return this.references.findReferences(s,u).forEach(c=>{let d=Tr.replace(c.segment.range,r.newName),p=c.sourceUri.toString();n[p]?n[p].push(d):n[p]=[d]}),{changes:n}}prepareRename(e,r){return this.renameNodeRange(e,r.position)}renameNodeRange(e,r){let n=e.parseResult.value.$cstNode,a=e.textDocument.offsetAt(r);if(n&&a){let o=pt(n,a,this.grammarConfig.nameRegexp);if(!o)return;if(this.references.findDeclaration(o)||this.isNameNode(o))return o.range}}isNameNode(e){return e?.astNode&&Lc(e.astNode)&&e===this.nameProvider.getNameNode(e.astNode)}};var hp=class{constructor(e){this.indexManager=e.workspace.IndexManager,this.nodeKindProvider=e.lsp.NodeKindProvider,this.fuzzyMatcher=e.lsp.FuzzyMatcher}async getSymbols(e,r=L.CancellationToken.None){let n=[],a=e.query.toLowerCase();for(let o of this.indexManager.allElements())if(await Ge(r),this.fuzzyMatcher.match(a,o.name)){let i=this.getWorkspaceSymbol(o);i&&n.push(i)}return n}getWorkspaceSymbol(e){let r=e.nameSegment;if(r)return{kind:this.nodeKindProvider.getSymbolKind(e),name:e.name,location:{range:r.range,uri:e.documentUri.toString()}}}};function KR(t){return gi.merge(fu(t),rW(t))}function rW(t){return{lsp:{CompletionProvider:e=>new tp(e),DocumentSymbolProvider:e=>new ap(e),HoverProvider:e=>new up(e),FoldingRangeProvider:e=>new ip(e),ReferencesProvider:e=>new fp(e),DefinitionProvider:e=>new rp(e),DocumentHighlightProvider:e=>new np(e),RenameProvider:e=>new yp(e)},shared:()=>t.shared}}function PR(t){return gi.merge(yu(t),nW(t))}function nW(t){return{lsp:{Connection:()=>t.connection,LanguageServer:e=>new lp(e),DocumentUpdateHandler:e=>new op(e),WorkspaceSymbolProvider:e=>new hp(e),NodeKindProvider:()=>new dp,FuzzyMatcher:()=>new sp},workspace:{TextDocuments:()=>new RR.TextDocuments(ra)}}}var gp=class{constructor(){this.collector=()=>{}}getNodeFormatter(e){return new Ov(e,this.collector)}formatDocument(e,r){let n=e.parseResult;return n.lexerErrors.length===0&&n.parserErrors.length===0?this.doDocumentFormat(e,r.options):[]}isFormatRangeErrorFree(e,r){let n=e.parseResult;return n.lexerErrors.length||n.parserErrors.length?Math.min(...n.lexerErrors.map(o=>{var i;return(i=o.line)!==null&&i!==void 0?i:Number.MAX_VALUE}),...n.parserErrors.map(o=>{var i;return(i=o.token.startLine)!==null&&i!==void 0?i:Number.MAX_VALUE}))>r.end.line:!0}formatDocumentRange(e,r){return this.isFormatRangeErrorFree(e,r.range)?this.doDocumentFormat(e,r.options,r.range):[]}formatDocumentOnType(e,r){let n={start:{character:0,line:r.position.line},end:r.position};return this.isFormatRangeErrorFree(e,n)?this.doDocumentFormat(e,r.options,n):[]}get formatOnTypeOptions(){}doDocumentFormat(e,r,n){let a=new Map,o=(s,u,l)=>{var c,d;let p=this.nodeModeToKey(s,u),y=a.get(p),v=(c=l.options.priority)!==null&&c!==void 0?c:0,S=(d=y?.options.priority)!==null&&d!==void 0?d:0;(!y||S<=v)&&a.set(p,l)};this.collector=o,this.iterateAstFormatting(e,n);let i=this.iterateCstFormatting(e,a,r,n);return this.avoidOverlappingEdits(e.textDocument,i)}avoidOverlappingEdits(e,r){let n=[];for(let a of r){let o=n[n.length-1];if(o){let i=e.offsetAt(a.range.start),s=e.offsetAt(o.range.end);i<s&&n.pop()}n.push(a)}return n}iterateAstFormatting(e,r){let n=e.parseResult.value;this.format(n);let a=Jt(n).iterator(),o;do if(o=a.next(),!o.done){let i=o.value;this.insideRange(i.$cstNode.range,r)?this.format(i):a.prune()}while(!o.done)}nodeModeToKey(e,r){return`${e.offset}:${e.end}:${r}`}insideRange(e,r){return!r||e.start.line<=r.start.line&&e.end.line>=r.end.line||e.start.line>=r.start.line&&e.end.line<=r.end.line||e.start.line<=r.end.line&&e.end.line>=r.end.line}isNecessary(e,r){return r.getText(e.range)!==e.newText}iterateCstFormatting(e,r,n,a){let o={indentation:0,options:n,document:e.textDocument},i=[],u=this.iterateCstTree(e,o).iterator(),l,c;do if(c=u.next(),!c.done){let d=c.value,p=Er(d),y=this.nodeModeToKey(d,"prepend"),v=r.get(y);if(r.delete(y),v){let A=this.createTextEdit(l,d,v,o);for(let g of A)g&&this.insideRange(g.range,a)&&this.isNecessary(g,e.textDocument)&&i.push(g)}let S=this.nodeModeToKey(d,"append"),T=r.get(S);if(r.delete(S),T){let A=ff(d);if(A){let g=this.createTextEdit(d,A,T,o);for(let f of g)f&&this.insideRange(f.range,a)&&this.isNecessary(f,e.textDocument)&&i.push(f)}}if(!v&&d.hidden){let A=this.createHiddenTextEdits(l,d,void 0,o);for(let g of A)g&&this.insideRange(g.range,a)&&this.isNecessary(g,e.textDocument)&&i.push(g)}p&&(l=d)}while(!c.done);return i}createHiddenTextEdits(e,r,n,a){var o;let i=r.range.start.line;if(e&&e.range.end.line===i)return[];let s=[],u={start:{character:0,line:i},end:r.range.start},l=a.document.getText(u),c=this.findFittingMove(u,(o=n?.moves)!==null&&o!==void 0?o:[],a),d=this.getExistingIndentationCharacterCount(l,a),y=this.getIndentationCharacterCount(a,c)-d;if(y===0)return[];let v="";y>0&&(v=(a.options.insertSpaces?" ":"	").repeat(y));let S=r.text.split(`
`);S[0]=l+S[0];for(let T=0;T<S.length;T++){let A=i+T,g={character:0,line:A};if(y>0)s.push({newText:v,range:{start:g,end:g}});else{let f=S[T],$=0;for(;$<f.length;$++){let P=f.charAt($);if(P!==" "&&P!=="	")break}s.push({newText:"",range:{start:g,end:{line:A,character:Math.min($,Math.abs(y))}}})}}return s}getExistingIndentationCharacterCount(e,r){let n=" ".repeat(r.options.tabSize);return(r.options.insertSpaces?e.replaceAll("	",n):e.replaceAll(n,"	")).length}getIndentationCharacterCount(e,r){let n=e.indentation;return r&&r.tabs&&(n+=r.tabs),(e.options.insertSpaces?e.options.tabSize:1)*n}createTextEdit(e,r,n,a){var o;if(r.hidden)return this.createHiddenTextEdits(e,r,n,a);let i={start:(o=e?.range.end)!==null&&o!==void 0?o:{character:0,line:0},end:r.range.start},s=this.findFittingMove(i,n.moves,a);if(!s)return[];let u=s.characters,l=s.lines,c=s.tabs,d=a.indentation;a.indentation+=c??0;let p=[];return u!==void 0?p.push(this.createSpaceTextEdit(i,u,n.options)):l!==void 0?p.push(this.createLineTextEdit(i,l,a,n.options)):c!==void 0&&p.push(this.createTabTextEdit(i,!!e,a)),Er(r)&&(a.indentation=d),p}createSpaceTextEdit(e,r,n){if(e.start.line===e.end.line){let o=e.end.character-e.start.character;r=this.fitIntoOptions(r,o,n)}return{newText:" ".repeat(r),range:e}}createLineTextEdit(e,r,n,a){let o=e.end.line-e.start.line;r=this.fitIntoOptions(r,o,a);let s=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation);return{newText:`${`
`.repeat(r)}${s}`,range:e}}createTabTextEdit(e,r,n){let o=(n.options.insertSpaces?" ".repeat(n.options.tabSize):"	").repeat(n.indentation),i=r?1:0,s=Math.max(e.end.line-e.start.line,i);return{newText:`${`
`.repeat(s)}${o}`,range:e}}fitIntoOptions(e,r,n){return n.allowMore?e=Math.max(r,e):n.allowLess&&(e=Math.min(r,e)),e}findFittingMove(e,r,n){if(r.length===0)return;if(r.length===1)return r[0];let a=e.end.line-e.start.line;for(let o of r){if(o.lines!==void 0&&a<=o.lines)return o;if(o.lines===void 0&&a===0)return o}return r[r.length-1]}iterateCstTree(e,r){let a=e.parseResult.value.$cstNode;return a?new wr(a,o=>this.iterateCst(o,r)):Nn}iterateCst(e,r){if(!Ft(e))return Nn;let n=r.indentation;return new Wt(()=>({index:0}),a=>a.index<e.content.length?{done:!1,value:e.content[a.index++]}:(r.indentation=n,At))}},Ov=class{constructor(e,r){this.astNode=e,this.collector=r}node(e){return new Fr(e.$cstNode?[e.$cstNode]:[],this.collector)}nodes(...e){let r=[];for(let n of e)n.$cstNode&&r.push(n.$cstNode);return new Fr(r,this.collector)}property(e,r){let n=Mn(this.astNode.$cstNode,e,r);return new Fr(n?[n]:[],this.collector)}properties(...e){let r=[];for(let n of e){let a=po(this.astNode.$cstNode,n);r.push(...a)}return new Fr(r,this.collector)}keyword(e,r){let n=fo(this.astNode.$cstNode,e,r);return new Fr(n?[n]:[],this.collector)}keywords(...e){let r=[];for(let n of e){let a=il(this.astNode.$cstNode,n);r.push(...a)}return new Fr(r,this.collector)}cst(e){return new Fr([...e],this.collector)}interior(e,r){let n=e.nodes,a=r.nodes;if(n.length!==1||a.length!==1)return new Fr([],this.collector);let o=n[0],i=a[0];if(o.offset>i.offset){let s=o;o=i,i=s}return new Fr(yf(o,i),this.collector)}},Fr=class t{constructor(e,r){this.nodes=e,this.collector=r}prepend(e){for(let r of this.nodes)this.collector(r,"prepend",e);return this}append(e){for(let r of this.nodes)this.collector(r,"append",e);return this}surround(e){for(let r of this.nodes)this.collector(r,"prepend",e),this.collector(r,"append",e);return this}slice(e,r){return new t(this.nodes.slice(e,r),this.collector)}},Rt;(function(t){function e(...c){return{options:{},moves:c.flatMap(d=>d.moves).sort(l)}}t.fit=e;function r(c){return a(0,c)}t.noSpace=r;function n(c){return a(1,c)}t.oneSpace=n;function a(c,d){return{options:d??{},moves:[{characters:c}]}}t.spaces=a;function o(c){return i(1,c)}t.newLine=o;function i(c,d){return{options:d??{},moves:[{lines:c}]}}t.newLines=i;function s(c){return{options:c??{},moves:[{tabs:1,lines:1}]}}t.indent=s;function u(c){return{options:c??{},moves:[{tabs:0}]}}t.noIndent=u;function l(c,d){var p,y,v,S,T,A;let g=(p=c.lines)!==null&&p!==void 0?p:0,f=(y=d.lines)!==null&&y!==void 0?y:0,$=(v=c.tabs)!==null&&v!==void 0?v:0,P=(S=d.tabs)!==null&&S!==void 0?S:0,Q=(T=c.characters)!==null&&T!==void 0?T:0,vt=(A=d.characters)!==null&&A!==void 0?A:0;return g<f?-1:g>f?1:$<P?-1:$>P?1:Q<vt?-1:Q>vt?1:0}})(Rt||(Rt={}));var aW=Lt(mr(),1);var ha=Lt(ER(),1);var Du="AuthorTagAttributes";var Nu="AvatarTagAttributes";var zv="AwsTagAttributes";var Lv="AzureTagAttributes";var mp="BoxTagAttributes";var oW="DimensionAttributes";var DR="EdgeTagAttributes";var Fv="GcpTagAttributes";var iW="PositionAttributes";var Wv="SkillTagAttributes";var sW="StyleAttribute";var NR="SvgTagAttributes";var _u="TextTagAttributes";var Gv="ThemeisleTagAttributes";var Hv="UndrawTagAttributes";var vp="AuthorProfileHandleAttribute";function _R(t){return U.isInstance(t,vp)}var wp="AuthorProfilePicAttribute";function MR(t){return U.isInstance(t,wp)}var uW="AuthorTag";function OR(t){return U.isInstance(t,uW)}var Sp="AvatarAccessoriesTypeAttribute";function zR(t){return U.isInstance(t,Sp)}var Ap="AvatarClotheTypeAttribute";function LR(t){return U.isInstance(t,Ap)}var $p="AvatarEyebrowTypeAttribute";function FR(t){return U.isInstance(t,$p)}var Tp="AvatarEyeTypeAttribute";function WR(t){return U.isInstance(t,Tp)}var Cp="AvatarFacialHairTypeAttribute";function GR(t){return U.isInstance(t,Cp)}var xp="AvatarGraphicTypeAttribute";function HR(t){return U.isInstance(t,xp)}var bp="AvatarHairColorAttribute";function BR(t){return U.isInstance(t,bp)}var kp="AvatarMouthTypeAttribute";function UR(t){return U.isInstance(t,kp)}var Rp="AvatarSkinColorAttribute";function qR(t){return U.isInstance(t,Rp)}var Kp="AvatarStyleAttribute";function jR(t){return U.isInstance(t,Kp)}var lW="AvatarTag";function VR(t){return U.isInstance(t,lW)}var Pp="AvatarTopTypeAttribute";function YR(t){return U.isInstance(t,Pp)}var Ip="AwsIconTypeAttribute";function XR(t){return U.isInstance(t,Ip)}var cW="AwsTag";function QR(t){return U.isInstance(t,cW)}var Ep="AzureIconTypeAttribute";function JR(t){return U.isInstance(t,Ep)}var dW="AzureTag";function ZR(t){return U.isInstance(t,dW)}var Dp="BackgroundColorAttribute";function eK(t){return U.isInstance(t,Dp)}var pW="BoxTag";function tK(t){return U.isInstance(t,pW)}var Np="BoxTypeAttribute";function rK(t){return U.isInstance(t,Np)}var ya="ClassesAttribute";function nK(t){return U.isInstance(t,ya)}var _p="CodeAttribute";function aK(t){return U.isInstance(t,_p)}var vr="DimensionAttribute";function oK(t){return U.isInstance(t,vr)}var Mp="EdgeLabelAttribute";function iK(t){return U.isInstance(t,Mp)}var Op="EdgeLabelStyleAttribute";function sK(t){return U.isInstance(t,Op)}var zp="EdgeSourceAttribute";function uK(t){return U.isInstance(t,zp)}var Lp="EdgeSourceHandleAttribute";function lK(t){return U.isInstance(t,Lp)}var Bv="EdgeStyleAttribute";var fW="EdgeTag";function cK(t){return U.isInstance(t,fW)}var Fp="EdgeTargetAttribute";function dK(t){return U.isInstance(t,Fp)}var Wp="EdgeTargetHandleAttribute";function pK(t){return U.isInstance(t,Wp)}var Gp="EdgeTypeAttribute";function fK(t){return U.isInstance(t,Gp)}var Mi="FontFamilyAttribute";function yK(t){return U.isInstance(t,Mi)}var Hp="FontSizeAttribute";function hK(t){return U.isInstance(t,Hp)}var Bp="GcpIconTypeAttribute";function gK(t){return U.isInstance(t,Bp)}var yW="GcpTag";function mK(t){return U.isInstance(t,yW)}var Up="HeightAttribute";function vK(t){return U.isInstance(t,Up)}var lr="IdAttribute";function wK(t){return U.isInstance(t,lr)}var cr="PositionAttribute";function SK(t){return U.isInstance(t,cr)}var qp="SkillIconTypeAttribute";function AK(t){return U.isInstance(t,qp)}var hW="SkillTag";function $K(t){return U.isInstance(t,hW)}var gW="StyleProperty";function TK(t){return U.isInstance(t,gW)}var mW="SvgTag";function CK(t){return U.isInstance(t,mW)}var jp="TextAttribute";function xK(t){return U.isInstance(t,jp)}var Vp="TextColorAttribute";function bK(t){return U.isInstance(t,Vp)}var vW="TextTag";function kK(t){return U.isInstance(t,vW)}var Yp="ThemeisleIconTypeAttribute";function RK(t){return U.isInstance(t,Yp)}var wW="ThemeisleTag";function KK(t){return U.isInstance(t,wW)}var Xp="UndrawIconTypeAttribute";function PK(t){return U.isInstance(t,Xp)}var SW="UndrawTag";function IK(t){return U.isInstance(t,SW)}var Qp="WidthAttribute";function EK(t){return U.isInstance(t,Qp)}var Jp="XAttribute";function DK(t){return U.isInstance(t,Jp)}var Zp="YAttribute";function NK(t){return U.isInstance(t,Zp)}var Mu=class extends ga{getAllTypes(){return["AuthorProfileHandleAttribute","AuthorProfilePicAttribute","AuthorTag","AuthorTagAttributes","AvatarAccessoriesTypeAttribute","AvatarClotheTypeAttribute","AvatarEyeTypeAttribute","AvatarEyebrowTypeAttribute","AvatarFacialHairTypeAttribute","AvatarGraphicTypeAttribute","AvatarHairColorAttribute","AvatarMouthTypeAttribute","AvatarSkinColorAttribute","AvatarStyleAttribute","AvatarTag","AvatarTagAttributes","AvatarTopTypeAttribute","AwsIconTypeAttribute","AwsTag","AwsTagAttributes","AzureIconTypeAttribute","AzureTag","AzureTagAttributes","BackgroundColorAttribute","BoxTag","BoxTagAttributes","BoxTypeAttribute","Classes","ClassesAttribute","CodeAttribute","Dimension","DimensionAttribute","DimensionAttributes","EdgeLabelAttribute","EdgeLabelStyleAttribute","EdgeSourceAttribute","EdgeSourceHandleAttribute","EdgeStyleAttribute","EdgeTag","EdgeTagAttributes","EdgeTargetAttribute","EdgeTargetHandleAttribute","EdgeTypeAttribute","FontFamily","FontFamilyAttribute","FontSizeAttribute","GcpIconTypeAttribute","GcpTag","GcpTagAttributes","HeightAttribute","IdAttribute","Model","Position","PositionAttribute","PositionAttributes","SkillIconTypeAttribute","SkillTag","SkillTagAttributes","StyleAttribute","StyleProperty","SvgTag","SvgTagAttributes","TextAttribute","TextColorAttribute","TextTag","TextTagAttributes","ThemeisleIconTypeAttribute","ThemeisleTag","ThemeisleTagAttributes","UndrawIconTypeAttribute","UndrawTag","UndrawTagAttributes","WidthAttribute","XAttribute","YAttribute"]}computeIsSubtype(e,r){switch(e){case vp:case wp:return this.isSubtype(Du,r);case Sp:case Ap:case $p:case Tp:case Cp:case xp:case bp:case kp:case Rp:case Kp:case Pp:return this.isSubtype(Nu,r);case Ip:return this.isSubtype(zv,r);case Ep:return this.isSubtype(Lv,r);case Dp:case Hp:case Vp:return this.isSubtype(sW,r);case Np:return this.isSubtype(mp,r);case ya:return this.isSubtype(Du,r)||this.isSubtype(Nu,r)||this.isSubtype(mp,r)||this.isSubtype(DR,r)||this.isSubtype(_u,r);case _p:return this.isSubtype(NR,r);case vr:return this.isSubtype(Du,r)||this.isSubtype(Nu,r)||this.isSubtype(zv,r)||this.isSubtype(Lv,r)||this.isSubtype(mp,r)||this.isSubtype(Fv,r)||this.isSubtype(Wv,r)||this.isSubtype(_u,r)||this.isSubtype(Gv,r)||this.isSubtype(Hv,r);case Mp:case Op:case zp:case Lp:case Bv:case Fp:case Wp:case Gp:return this.isSubtype(DR,r);case Mi:return this.isSubtype(Du,r)||this.isSubtype(Nu,r)||this.isSubtype(_u,r);case Bp:return this.isSubtype(Fv,r);case Up:case Qp:return this.isSubtype(oW,r);case lr:case cr:return this.isSubtype(Du,r)||this.isSubtype(Nu,r)||this.isSubtype(zv,r)||this.isSubtype(Lv,r)||this.isSubtype(mp,r)||this.isSubtype(Fv,r)||this.isSubtype(Wv,r)||this.isSubtype(NR,r)||this.isSubtype(_u,r)||this.isSubtype(Gv,r)||this.isSubtype(Hv,r);case qp:return this.isSubtype(Wv,r);case jp:return this.isSubtype(_u,r);case Yp:return this.isSubtype(Gv,r);case Xp:return this.isSubtype(Hv,r);case Jp:case Zp:return this.isSubtype(iW,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"AuthorProfileHandleAttribute":return{name:"AuthorProfileHandleAttribute",properties:[{name:"profileHandle"}]};case"AuthorProfilePicAttribute":return{name:"AuthorProfilePicAttribute",properties:[{name:"profilePic"}]};case"AuthorTag":return{name:"AuthorTag",properties:[{name:"attributes",defaultValue:[]}]};case"AvatarAccessoriesTypeAttribute":return{name:"AvatarAccessoriesTypeAttribute",properties:[{name:"accessoriesType"}]};case"AvatarClotheTypeAttribute":return{name:"AvatarClotheTypeAttribute",properties:[{name:"clotheType"}]};case"AvatarEyebrowTypeAttribute":return{name:"AvatarEyebrowTypeAttribute",properties:[{name:"eyebrowType"}]};case"AvatarEyeTypeAttribute":return{name:"AvatarEyeTypeAttribute",properties:[{name:"eyeType"}]};case"AvatarFacialHairTypeAttribute":return{name:"AvatarFacialHairTypeAttribute",properties:[{name:"facialHairType"}]};case"AvatarGraphicTypeAttribute":return{name:"AvatarGraphicTypeAttribute",properties:[{name:"graphicType"}]};case"AvatarHairColorAttribute":return{name:"AvatarHairColorAttribute",properties:[{name:"hairColor"}]};case"AvatarMouthTypeAttribute":return{name:"AvatarMouthTypeAttribute",properties:[{name:"mouthType"}]};case"AvatarSkinColorAttribute":return{name:"AvatarSkinColorAttribute",properties:[{name:"skinColor"}]};case"AvatarStyleAttribute":return{name:"AvatarStyleAttribute",properties:[{name:"style"}]};case"AvatarTag":return{name:"AvatarTag",properties:[{name:"attributes",defaultValue:[]}]};case"AvatarTopTypeAttribute":return{name:"AvatarTopTypeAttribute",properties:[{name:"topType"}]};case"AwsIconTypeAttribute":return{name:"AwsIconTypeAttribute",properties:[{name:"icon"}]};case"AwsTag":return{name:"AwsTag",properties:[{name:"attributes",defaultValue:[]}]};case"AzureIconTypeAttribute":return{name:"AzureIconTypeAttribute",properties:[{name:"icon"}]};case"AzureTag":return{name:"AzureTag",properties:[{name:"attributes",defaultValue:[]}]};case"BackgroundColorAttribute":return{name:"BackgroundColorAttribute",properties:[{name:"backgroundColor"}]};case"BoxTag":return{name:"BoxTag",properties:[{name:"attributes",defaultValue:[]}]};case"BoxTypeAttribute":return{name:"BoxTypeAttribute",properties:[{name:"type"}]};case"Classes":return{name:"Classes",properties:[{name:"classes"}]};case"ClassesAttribute":return{name:"ClassesAttribute",properties:[{name:"classes"}]};case"CodeAttribute":return{name:"CodeAttribute",properties:[{name:"code"}]};case"Dimension":return{name:"Dimension",properties:[{name:"height"},{name:"width"}]};case"DimensionAttribute":return{name:"DimensionAttribute",properties:[{name:"attributes",defaultValue:[]}]};case"EdgeLabelAttribute":return{name:"EdgeLabelAttribute",properties:[{name:"label"}]};case"EdgeLabelStyleAttribute":return{name:"EdgeLabelStyleAttribute",properties:[{name:"labelStyle"}]};case"EdgeSourceAttribute":return{name:"EdgeSourceAttribute",properties:[{name:"source"}]};case"EdgeSourceHandleAttribute":return{name:"EdgeSourceHandleAttribute",properties:[{name:"sourceHandle"}]};case"EdgeStyleAttribute":return{name:"EdgeStyleAttribute",properties:[{name:"style"}]};case"EdgeTag":return{name:"EdgeTag",properties:[{name:"attributes",defaultValue:[]}]};case"EdgeTargetAttribute":return{name:"EdgeTargetAttribute",properties:[{name:"target"}]};case"EdgeTargetHandleAttribute":return{name:"EdgeTargetHandleAttribute",properties:[{name:"targetHandle"}]};case"EdgeTypeAttribute":return{name:"EdgeTypeAttribute",properties:[{name:"type"}]};case"FontFamily":return{name:"FontFamily",properties:[{name:"fontFamily"}]};case"FontFamilyAttribute":return{name:"FontFamilyAttribute",properties:[{name:"fontFamily"}]};case"FontSizeAttribute":return{name:"FontSizeAttribute",properties:[{name:"fontSize"}]};case"GcpIconTypeAttribute":return{name:"GcpIconTypeAttribute",properties:[{name:"icon"}]};case"GcpTag":return{name:"GcpTag",properties:[{name:"attributes",defaultValue:[]}]};case"HeightAttribute":return{name:"HeightAttribute",properties:[{name:"height"}]};case"IdAttribute":return{name:"IdAttribute",properties:[{name:"id"}]};case"Model":return{name:"Model",properties:[{name:"authorTags",defaultValue:[]},{name:"avatarTags",defaultValue:[]},{name:"awsTags",defaultValue:[]},{name:"azureTags",defaultValue:[]},{name:"boxTags",defaultValue:[]},{name:"edgeTags",defaultValue:[]},{name:"gcpTags",defaultValue:[]},{name:"skillTags",defaultValue:[]},{name:"svgTags",defaultValue:[]},{name:"textTags",defaultValue:[]},{name:"themeisleTags",defaultValue:[]},{name:"undrawTags",defaultValue:[]}]};case"Position":return{name:"Position",properties:[{name:"isNegativeX",defaultValue:!1},{name:"isNegativeY",defaultValue:!1},{name:"x"},{name:"y"}]};case"PositionAttribute":return{name:"PositionAttribute",properties:[{name:"attributes",defaultValue:[]}]};case"SkillIconTypeAttribute":return{name:"SkillIconTypeAttribute",properties:[{name:"icon"}]};case"SkillTag":return{name:"SkillTag",properties:[{name:"attributes",defaultValue:[]}]};case"StyleProperty":return{name:"StyleProperty",properties:[{name:"styleAttributes",defaultValue:[]}]};case"SvgTag":return{name:"SvgTag",properties:[{name:"attributes",defaultValue:[]}]};case"TextAttribute":return{name:"TextAttribute",properties:[{name:"text"}]};case"TextColorAttribute":return{name:"TextColorAttribute",properties:[{name:"textColor"}]};case"TextTag":return{name:"TextTag",properties:[{name:"attributes",defaultValue:[]}]};case"ThemeisleIconTypeAttribute":return{name:"ThemeisleIconTypeAttribute",properties:[{name:"icon"}]};case"ThemeisleTag":return{name:"ThemeisleTag",properties:[{name:"attributes",defaultValue:[]}]};case"UndrawIconTypeAttribute":return{name:"UndrawIconTypeAttribute",properties:[{name:"icon"}]};case"UndrawTag":return{name:"UndrawTag",properties:[{name:"attributes",defaultValue:[]}]};case"WidthAttribute":return{name:"WidthAttribute",properties:[{name:"width"}]};case"XAttribute":return{name:"XAttribute",properties:[{name:"isNegativeX",defaultValue:!1},{name:"x"}]};case"YAttribute":return{name:"YAttribute",properties:[{name:"isNegativeY",defaultValue:!1},{name:"y"}]};default:return{name:e,properties:[]}}}},U=new Mu;var ef,_K=()=>ef??(ef=jc(`{
  "$type": "Grammar",
  "isDeclared": true,
  "name": "Yadl",
  "imports": [],
  "rules": [
    {
      "$type": "ParserRule",
      "name": "Model",
      "entry": true,
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "awsTags",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@39"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "azureTags",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@58"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "gcpTags",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@66"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "skillTags",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@74"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "themeisleTags",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@88"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "undrawTags",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@107"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "authorTags",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@111"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "avatarTags",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@135"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "boxTags",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@139"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "textTags",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@142"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "edgeTags",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@155"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "svgTags",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@158"
              },
              "arguments": []
            }
          }
        ],
        "cardinality": "*"
      },
      "definesHiddenTokens": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Position",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "position"
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Keyword",
            "value": "x:"
          },
          {
            "$type": "Assignment",
            "feature": "isNegativeX",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "-"
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "x",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@22"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "y:"
          },
          {
            "$type": "Assignment",
            "feature": "isNegativeY",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "-"
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "y",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@22"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Dimension",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "dimension"
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Keyword",
            "value": "width:"
          },
          {
            "$type": "Assignment",
            "feature": "width",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@22"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "height:"
          },
          {
            "$type": "Assignment",
            "feature": "height",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@22"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "Classes",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "classes:"
          },
          {
            "$type": "Assignment",
            "feature": "classes",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ClassesAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "classes"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "classes",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "QualifiedName",
      "dataType": "string",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@24"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "."
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@24"
                },
                "arguments": []
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "WidthAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "width"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "width",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@22"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "HeightAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "height"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "height",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@22"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "XAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "x"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "isNegativeX",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "-"
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "x",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@22"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "YAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "y"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "isNegativeY",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "-"
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "y",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@22"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "IdAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "id"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "id",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "BackgroundColorAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "background-color"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "backgroundColor",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "PositionAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@8"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@9"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "PositionAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "position"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@12"
              },
              "arguments": []
            },
            "cardinality": "+"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "DimensionAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@6"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@7"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "DimensionAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "dimension"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@14"
              },
              "arguments": []
            },
            "cardinality": "+"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "FontSizeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "font-size"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "fontSize",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@22"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "FontFamily",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "fontFamily"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "fontFamily",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "FontFamilyAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "fontFamily"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "fontFamily",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TextColorAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "text-color"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "textColor",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "StyleAttribute",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@11"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@16"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@19"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "StyleProperty",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "style"
          },
          {
            "$type": "Keyword",
            "value": "="
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Assignment",
                "feature": "styleAttributes",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@20"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "styleAttributes",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@20"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "*"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "TerminalRule",
      "name": "NUMBER",
      "type": {
        "$type": "ReturnType",
        "name": "number"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "/[0-9]+(\\\\.[0-9]*)?/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "WS",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\s+/"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "name": "ID",
      "definition": {
        "$type": "RegexToken",
        "regex": "/[_a-zA-Z][\\\\w_]*/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "INT",
      "type": {
        "$type": "ReturnType",
        "name": "number"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "/[0-9]+/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "STRING",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\"(\\\\\\\\.|[^\\"\\\\\\\\])*\\"|'(\\\\\\\\.|[^'\\\\\\\\])*'/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "BACKTICK_STRING",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\`[^\`]*\`/"
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "ML_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\//"
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "SL_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\/\\\\/[^\\\\n\\\\r]*/"
      },
      "fragment": false
    },
    {
      "$type": "ParserRule",
      "name": "AwsTypeAttribute1",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "aWSAppIntegrationAPIGateway"
          },
          {
            "$type": "Keyword",
            "value": "aWSAppIntegrationAppFlow"
          },
          {
            "$type": "Keyword",
            "value": "aWSAppIntegrationEventBridge"
          },
          {
            "$type": "Keyword",
            "value": "aWSAppIntegrationConsoleMobileApplication"
          },
          {
            "$type": "Keyword",
            "value": "aWSAppIntegrationExpressWorkflows"
          },
          {
            "$type": "Keyword",
            "value": "aWSAppIntegrationAppSync"
          },
          {
            "$type": "Keyword",
            "value": "aWSAppIntegrationManagedWorkflowsforApacheAirflow"
          },
          {
            "$type": "Keyword",
            "value": "aWSAppIntegrationMQ"
          },
          {
            "$type": "Keyword",
            "value": "aWSAppIntegrationSimpleQueueService"
          },
          {
            "$type": "Keyword",
            "value": "aWSAppIntegrationStepFunctions"
          },
          {
            "$type": "Keyword",
            "value": "aWSAppIntegrationSimpleNotificationService"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsChimeSDK"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsChimeVoiceConnector"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsChime"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsPinpointAPIs"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsConnect"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsPinpoint"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsSimpleEmailService"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsWickr"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsWorkDocsSDK"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsSupplyChain"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsWorkDocs"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsAthena"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsWorkMail"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsDataZone"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsDataPipeline"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsAlexaForBusiness"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsCleanRooms"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsCloudSearch"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsDataExchange"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsGlueDataBrew"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsGlue"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsKinesisDataAnalytics"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsKinesisFirehose"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsKinesisVideoStreams"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsKinesis"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsLakeFormation"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsFinSpace"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsManagedStreamingforApacheKafka"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsRedshift"
          },
          {
            "$type": "Keyword",
            "value": "aWSCloudFinancialManagementApplicationCostProfiler"
          },
          {
            "$type": "Keyword",
            "value": "aWSCloudFinancialManagementBillingConductor"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AwsTypeAttribute2",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "aWSCloudFinancialManagementCostandUsageReport"
          },
          {
            "$type": "Keyword",
            "value": "aWSCloudFinancialManagementCostExplorer"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsOpenSearchService"
          },
          {
            "$type": "Keyword",
            "value": "aWSCloudFinancialManagementSavingsPlans"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsKinesisDataStreams"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsGlueElasticViews"
          },
          {
            "$type": "Keyword",
            "value": "aWSCloudFinancialManagementReservedInstanceReporting"
          },
          {
            "$type": "Keyword",
            "value": "aWSBlockchainManagedBlockchain"
          },
          {
            "$type": "Keyword",
            "value": "aWSBlockchainQuantumLedgerDatabase"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeApplicationAutoScaling"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeBottlerocket"
          },
          {
            "$type": "Keyword",
            "value": "aWSCloudFinancialManagementBudgets"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeComputeOptimizer"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeEC2ImageBuilder"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeEC2AutoScaling"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeEC2"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeGenomicsCLI"
          },
          {
            "$type": "Keyword",
            "value": "aWSBusinessApplicationsHoneycode"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeElasticFabricAdapter"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeLocalZones"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeLambda"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeAppRunner"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeNICEDCV"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeNICEEnginFrame"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeNitroEnclaves"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeOutpostsfamily"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeOutpostsrack"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsEMR"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeSail"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeParallelCluster"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeServerlessApplicationRepository"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeBatch"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeSimSpaceWeaver"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeThinkboxKrakatoa"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeThinkboxFrost"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeVMwareCloudonAWS"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeThinkboxSequoia"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeThinkboxStoke"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeThinkboxXMesh"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeThinkboxDeadline"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeWavelength"
          },
          {
            "$type": "Keyword",
            "value": "aWSContainersEKSCloud"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AwsTypeAttribute3",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "aWSComputeOutpostsservers"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeFargate"
          },
          {
            "$type": "Keyword",
            "value": "aWSComputeElasticBeanstalk"
          },
          {
            "$type": "Keyword",
            "value": "aWSContainersECSAnywhere"
          },
          {
            "$type": "Keyword",
            "value": "aWSContainersElasticKubernetesService"
          },
          {
            "$type": "Keyword",
            "value": "aWSContainersElasticContainerService"
          },
          {
            "$type": "Keyword",
            "value": "aWSCustomerEnablementActivate"
          },
          {
            "$type": "Keyword",
            "value": "aWSContainersFargate"
          },
          {
            "$type": "Keyword",
            "value": "aWSAnalyticsQuickSight"
          },
          {
            "$type": "Keyword",
            "value": "aWSCustomerEnablementIQ"
          },
          {
            "$type": "Keyword",
            "value": "aWSContainersRedHatOpenShiftServiceonAWS"
          },
          {
            "$type": "Keyword",
            "value": "aWSContainersElasticContainerRegistry"
          },
          {
            "$type": "Keyword",
            "value": "aWSCustomerEnablementManagedServices"
          },
          {
            "$type": "Keyword",
            "value": "aWSCustomerEnablementSupport"
          },
          {
            "$type": "Keyword",
            "value": "aWSCustomerEnablementTrainingCertification"
          },
          {
            "$type": "Keyword",
            "value": "aWSCustomerEnablementRePost"
          },
          {
            "$type": "Keyword",
            "value": "aWSContainersEKSAnywhere"
          },
          {
            "$type": "Keyword",
            "value": "aWSDatabaseDatabaseMigrationService"
          },
          {
            "$type": "Keyword",
            "value": "aWSDatabaseElastiCache"
          },
          {
            "$type": "Keyword",
            "value": "aWSDatabaseKeyspaces"
          },
          {
            "$type": "Keyword",
            "value": "aWSDatabaseMemoryDBforRedis"
          },
          {
            "$type": "Keyword",
            "value": "aWSDatabaseAurora"
          },
          {
            "$type": "Keyword",
            "value": "aWSDatabaseNeptune"
          },
          {
            "$type": "Keyword",
            "value": "aWSDatabaseRDSonVMware"
          },
          {
            "$type": "Keyword",
            "value": "aWSDatabaseTimestream"
          },
          {
            "$type": "Keyword",
            "value": "aWSContainersEKSDistro"
          },
          {
            "$type": "Keyword",
            "value": "aWSDatabaseDocumentDB"
          },
          {
            "$type": "Keyword",
            "value": "aWSFrontEndWebMobileAmplify"
          },
          {
            "$type": "Keyword",
            "value": "aWSFrontEndWebMobileDeviceFarm"
          },
          {
            "$type": "Keyword",
            "value": "aWSFrontEndWebMobileLocationService"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsApplicationComposer"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCloudDevelopmentKit"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCloudShell"
          },
          {
            "$type": "Keyword",
            "value": "aWSDatabaseDynamoDB"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCodeArtifact"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCloud9"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCodeBuild"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCodeCatalyst"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCodeCommit"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCloudControlAPI"
          },
          {
            "$type": "Keyword",
            "value": "aWSDatabaseRDS"
          },
          {
            "$type": "Keyword",
            "value": "aWSCustomerEnablementProfessionalServices"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AwsTypeAttribute4",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCodePipeline"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCommandLineInterface"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsToolsandSDKs"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCodeStar"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCodeDeploy"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsXRay"
          },
          {
            "$type": "Keyword",
            "value": "aWSGeneralIconsMarketplace_Dark"
          },
          {
            "$type": "Keyword",
            "value": "aWSGeneralIconsMarketplace_"
          },
          {
            "$type": "Keyword",
            "value": "aWSGamesGameKit"
          },
          {
            "$type": "Keyword",
            "value": "aWSGamesGameSparks"
          },
          {
            "$type": "Keyword",
            "value": "aWSGamesLumberyard"
          },
          {
            "$type": "Keyword",
            "value": "aWSGamesGameLift"
          },
          {
            "$type": "Keyword",
            "value": "aWSEndUserComputingAppStream"
          },
          {
            "$type": "Keyword",
            "value": "aWSEndUserComputingWorkLink"
          },
          {
            "$type": "Keyword",
            "value": "aWSEndUserComputingWorkSpacesFamily"
          },
          {
            "$type": "Keyword",
            "value": "aWSGamesOpen3DEngine"
          },
          {
            "$type": "Keyword",
            "value": "aWSDeveloperToolsCorretto"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsFreeRTOS"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTAnalytics"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTButton"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoT1Click"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTCore"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTDeviceDefender"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTEduKit"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTDeviceManagement"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTEvents"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTGreengrass"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTSiteWise"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTExpressLink"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTThingsGraph"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTTwinMaker"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningComprehendMedical"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningApacheMXNetonAWS"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTRoboRunner"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningCodeWhisperer"
          },
          {
            "$type": "Keyword",
            "value": "aWSInternetofThingsIoTFleetWise"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningComprehend"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningDeepComposer"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningDeepLearningContainers"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningDeepRacer"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningDeepLens"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningElasticInference"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AwsTypeAttribute5",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningForecast"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningDeepLearningAMIs"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningHealthLake"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningAugmentedAIA2I"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningKendra"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningLookoutforEquipment"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningLookoutforMetrics"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningCodeGuru"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningLex"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningLookoutforVision"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningMonitron"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningOmics"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningPersonalize"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningDevOpsGuru"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningSageMakerStudioLab"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningPanorama"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningSageMaker"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningFraudDetector"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningRekognition"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningTorchServe"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningTextract"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningNeuron"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningTensorFlowonAWS"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningTranscribe"
          },
          {
            "$type": "Keyword",
            "value": "aWSMigrationTransferApplicationDiscoveryService"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningTranslate"
          },
          {
            "$type": "Keyword",
            "value": "aWSMigrationTransferDataSync"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningSageMakerGroundTruth"
          },
          {
            "$type": "Keyword",
            "value": "aWSMigrationTransferMainframeModernization"
          },
          {
            "$type": "Keyword",
            "value": "aWSMigrationTransferServerMigrationService"
          },
          {
            "$type": "Keyword",
            "value": "aWSMigrationTransferApplicationMigrationService"
          },
          {
            "$type": "Keyword",
            "value": "aWSMigrationTransferTransferFamily"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryAppMesh"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryCloudDirectory"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryCloudMap"
          },
          {
            "$type": "Keyword",
            "value": "aWSMigrationTransferMigrationHub"
          },
          {
            "$type": "Keyword",
            "value": "aWSMigrationTransferMigrationEvaluator"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryCloudWAN"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryClientVPN"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryCloudFront"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryGlobalAccelerator"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryElasticLoadBalancing"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AwsTypeAttribute6",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryRoute53"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryPrivateLink"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliverySitetoSiteVPN"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryPrivate5G"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryDirectConnect"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryTransitGateway"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryVPCLattice"
          },
          {
            "$type": "Keyword",
            "value": "aWSRoboticsRoboMaker"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryVirtualPrivateCloud"
          },
          {
            "$type": "Keyword",
            "value": "aWSNetworkingContentDeliveryVerifiedAccess"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageBackup"
          },
          {
            "$type": "Keyword",
            "value": "aWSQuantumTechnologiesBraket"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageElasticBlockStore"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageEFS"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageElasticDisasterRecovery"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageFSxforNetAppONTAP"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageFSx"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageFileCache"
          },
          {
            "$type": "Keyword",
            "value": "aWSMachineLearningPolly"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageS3onOutposts"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageFSxforLustre"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageSimpleStorageServiceGlacier"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageSnowballEdge"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageFSxforWFS"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageSnowcone"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageStorageGateway"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageFSxforOpenZFS"
          },
          {
            "$type": "Keyword",
            "value": "aWSSatelliteGroundStation"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageSimpleStorageService"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageSnowmobile"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceAutoScaling"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceBackintAgent"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceChatbot"
          },
          {
            "$type": "Keyword",
            "value": "aWSStorageSnowball"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceCloudWatch"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceConfig"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceCloudFormation"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceCloudTrail"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceControlTower"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceAppConfig"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceLaunchWizard"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceDistroforOpenTelemetry"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AwsTypeAttribute7",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceApplicationAutoScaling"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceManagedGrafana"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceOpsWorks"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceManagedServiceforPrometheus"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceOrganizations"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceResilienceHub"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceProton"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceServiceCatalog"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceLicenseManager"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceServiceManagementConnector"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceTrustedAdvisor"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElasticTranscoder"
          },
          {
            "$type": "Keyword",
            "value": "aWSVRARSumerian"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalAppliancesSoftware"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceManagementConsole"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalDelta"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceWellArchitectedTool"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceFaultInjectionSimulator"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalConductor"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalLink"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernanceSystemsManager"
          },
          {
            "$type": "Keyword",
            "value": "aWSManagementGovernancePersonalHealthDashboard"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalMediaConvert"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalMediaPackage"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalMediaStore"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalMediaLive"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalMediaConnect"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesInteractiveVideoService"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalServer"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesKinesisVideoStreams"
          },
          {
            "$type": "Keyword",
            "value": "aWSSecurityIdentityComplianceArtifact"
          },
          {
            "$type": "Keyword",
            "value": "aWSSecurityIdentityComplianceCloudHSM"
          },
          {
            "$type": "Keyword",
            "value": "aWSSecurityIdentityComplianceAuditManager"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalMediaTailor"
          },
          {
            "$type": "Keyword",
            "value": "aWSSecurityIdentityComplianceCertificateManager"
          },
          {
            "$type": "Keyword",
            "value": "aWSSecurityIdentityComplianceCloudDirectory"
          },
          {
            "$type": "Keyword",
            "value": "aWSSecurityIdentityComplianceDirectoryService"
          },
          {
            "$type": "Keyword",
            "value": "aWSSecurityIdentityComplianceDetective"
          },
          {
            "$type": "Keyword",
            "value": "aWSSecurityIdentityComplianceFirewallManager"
          },
          {
            "$type": "Keyword",
            "value": "aWSMediaServicesElementalLive"
          },
          {
            "$type": "Keyword",
            "value": "aWSSecurityIdentityComplianceCognito"
          },
          {
            "$type": "Keyword",
            "value": "aWSSecurityIdentityComplianceIdentityandAccessManagement"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AwsIconTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "icon"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "icon",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@30"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@31"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@32"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@33"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@34"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@35"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@36"
                  },
                  "arguments": []
                }
              ]
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AwsTagAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@37"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AwsTag",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "<Aws"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@38"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "/>"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute0",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningGenomics"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningBatchAI"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningFaceAPIs"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningMachineLearningStudioClassicWebServices"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningCustomVision"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningComputerVision"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningPersonalizers"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningContentModerators"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningTranslatorText"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningSpeechServices"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningQnAMakers"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningLanguageUnderstanding"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningAzureExperimentationStudio"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningImmersiveReaders"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningAnomalyDetector"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningAzureObjectUnderstanding"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningAzureAppliedAIServices"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningMetricsAdvisor"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningLanguage"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningFormRecognizers"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningContentSafety"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningCognitiveServicesDecisions"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningAzureOpenAI"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningAIStudio"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningServerlessSearch"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningCognitiveSearch"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningCognitiveServices"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningGenomicsAccounts"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningBotServices"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningMachineLearningStudioWorkspaces"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningMachineLearning"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningMachineLearningStudioWebServicePlans"
          },
          {
            "$type": "Keyword",
            "value": "azureAppServicesAppServicePlans"
          },
          {
            "$type": "Keyword",
            "value": "azureAiMachineLearningBonsai"
          },
          {
            "$type": "Keyword",
            "value": "azureAppServicesAppServiceDomains"
          },
          {
            "$type": "Keyword",
            "value": "azureAppServicesAppServiceCertificates"
          },
          {
            "$type": "Keyword",
            "value": "azureAppServicesAppServices"
          },
          {
            "$type": "Keyword",
            "value": "azureAppServicesCDNProfiles"
          },
          {
            "$type": "Keyword",
            "value": "azureAppServicesNotificationHubs"
          },
          {
            "$type": "Keyword",
            "value": "azureAppServicesCognitiveSearch"
          },
          {
            "$type": "Keyword",
            "value": "azureAppServicesAppServiceEnvironments"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsEndpointAnalytics"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute1",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureAnalyticsStreamAnalyticsJobs"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsAzureWorkbooks"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsAzureSynapseAnalytics"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsPrivateLinkServices"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsPowerBIEmbedded"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsDataFactories"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsLogAnalyticsWorkspaces"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsEventHubs"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsDataLakeAnalytics"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsHDInsightClusters"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsAzureDataExplorerClusters"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsAzureDatabricks"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsEventHubClusters"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsAnalysisServices"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsDataLakeStoreGen1"
          },
          {
            "$type": "Keyword",
            "value": "azureAzureStackMultiTenancy"
          },
          {
            "$type": "Keyword",
            "value": "azureAnalyticsPowerPlatform"
          },
          {
            "$type": "Keyword",
            "value": "azureAzureStackInfrastructureBackup"
          },
          {
            "$type": "Keyword",
            "value": "azureAzureStackCapacity"
          },
          {
            "$type": "Keyword",
            "value": "azureAzureStackPlans"
          },
          {
            "$type": "Keyword",
            "value": "azureAzureStackOffers"
          },
          {
            "$type": "Keyword",
            "value": "azureAzureStackUpdates"
          },
          {
            "$type": "Keyword",
            "value": "azureAzureStackUserSubscriptions"
          },
          {
            "$type": "Keyword",
            "value": "azureAzureEcosystemApplens"
          },
          {
            "$type": "Keyword",
            "value": "azureBlockchainOutboundConnection"
          },
          {
            "$type": "Keyword",
            "value": "azureAzureEcosystemAzureHybridCenter"
          },
          {
            "$type": "Keyword",
            "value": "azureBlockchainBlockchainApplications"
          },
          {
            "$type": "Keyword",
            "value": "azureBlockchainAzureBlockchainService"
          },
          {
            "$type": "Keyword",
            "value": "azureBlockchainConsortium"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeMaintenanceConfiguration"
          },
          {
            "$type": "Keyword",
            "value": "azureAzureEcosystemCollaborativeService"
          },
          {
            "$type": "Keyword",
            "value": "azureBlockchainABSMember"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeWorkspaces"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeHostPools"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeApplicationGroup"
          },
          {
            "$type": "Keyword",
            "value": "azureBlockchainAzureTokenService"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeAutomanagedVM"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeManagedServiceFabric"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeMetricsAdvisor"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeDiskEncryptionSets"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeRestorePointsCollections"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeAzureComputeGalleries"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute2",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureComputeImageTemplates"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeComputeFleet"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeVirtualMachine"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeRestorePoints"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeKubernetesServices"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeDisksSnapshots"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeAvailabilitySets"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeVirtualMachinesClassic"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeCloudServicesClassic"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeOSImagesClassic"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeBatchAccounts"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeFunctionApps"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeDisks"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeImages"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeMeshApplications"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeVMScaleSets"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeAppServices"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeServiceFabricClusters"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeSharedImageGalleries"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeImageDefinitions"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeDisksClassic"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeVMImagesClassic"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeContainerInstances"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeContainerServicesDeprecated"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeHostGroups"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeAzureSpringApps"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeHosts"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeImageVersions"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesSQLDataWarehouses"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureSynapseAnalytics"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureSQL"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesSSISLiftAndShiftIR"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureCosmosDB"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesOracleDatabase"
          },
          {
            "$type": "Keyword",
            "value": "azureComputeAKSAutomatic"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzurePurviewAccounts"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureDatabaseMySQLServer"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesVirtualClusters"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesDataFactories"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureSQLVM"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesElasticJobAgents"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureDatabasePostgreSQLServerGroup"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute3",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureDatabaseMariaDBServer"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureSQLEdge"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesSQLServer"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesSQLDatabase"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureDatabasePostgreSQLServer"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureDatabaseMigrationServices"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesSQLManagedInstance"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesManagedDatabase"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesCacheRedis"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesInstancePools"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureSQLServerStretchDatabases"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesAzureDataExplorerClusters"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesSQLServerRegistries"
          },
          {
            "$type": "Keyword",
            "value": "azureContainersAzureRedHatOpenShift"
          },
          {
            "$type": "Keyword",
            "value": "azureContainersKubernetesServices"
          },
          {
            "$type": "Keyword",
            "value": "azureContainersAppServices"
          },
          {
            "$type": "Keyword",
            "value": "azureContainersServiceFabricClusters"
          },
          {
            "$type": "Keyword",
            "value": "azureDatabasesSQLElasticPools"
          },
          {
            "$type": "Keyword",
            "value": "azureContainersContainerInstances"
          },
          {
            "$type": "Keyword",
            "value": "azureContainersContainerRegistries"
          },
          {
            "$type": "Keyword",
            "value": "azureHybridMulticloudAzureOperatorInsights"
          },
          {
            "$type": "Keyword",
            "value": "azureHybridMulticloudAzureOperatorNexus"
          },
          {
            "$type": "Keyword",
            "value": "azureHybridMulticloudAzureOperator5GCore"
          },
          {
            "$type": "Keyword",
            "value": "azureHybridMulticloudAzureMonitorPipeline"
          },
          {
            "$type": "Keyword",
            "value": "azureHybridMulticloudAzureProgrammableConnectivity"
          },
          {
            "$type": "Keyword",
            "value": "azureHybridMulticloudAzureOperatorServiceManager"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsChangeAnalysis"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsApplicationInsights"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsLoadTesting"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsCloudTest"
          },
          {
            "$type": "Keyword",
            "value": "azureContainersBatchAccounts"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsLabAccounts"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsManagedDevOpsPools"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsCodeOptimization"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsWorkspaceGateway"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsDevOpsStarter"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsAPIConnections"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsAPIManagementServices"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralCostManagementandBilling"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsAzureDevOps"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsDevTestLabs"
          },
          {
            "$type": "Keyword",
            "value": "azureDevopsLabServices"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute4",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureGeneralPreviewFeatures"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralReservations"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralSubscriptions"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralServiceHealth"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralAllResources"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralResourceGroups"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralRecent"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralMarketplace"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralTemplates"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralQuickstartCenter"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralManagementGroups"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralInformation"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralHelpandSupport"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralDashboard"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralResourceExplorer"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralCostManagement"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralTroubleshoot"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralMarketplaceManagement"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralTag"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralBizTalk"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralBlobBlock"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralFreeServices"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralRegionManagement"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralBranch"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralBlobPage"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralBug"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralBrowser"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralBuilds"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralCommit"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralControls"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralCache"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralControlsHorizontal"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralCostAnalysis"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralCode"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralDevConsole"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralCounter"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralFile"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralError"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralDownload"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralExtensions"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralFiles"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralFolderWebsite"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute5",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureGeneralGear"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralCostBudgets"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralCubes"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralFolderBlank"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralGlobeError"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralGlobeWarning"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralGuide"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralHeart"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralJourneyHub"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralLaunchPortal"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralImage"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralGlobeSuccess"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralLoadTest"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralFTP"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralCostAlerts"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralInputOutput"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralLearn"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralManagementPortal"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralMobileEngagement"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralLogStreaming"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralMediaFile"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralLocation"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralProcessExplorer"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralPowerUp"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralProductionReadyDatabase"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralFeaturePreviews"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralPower"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralMobile"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralResourceLinked"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralSSD"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralServerFarm"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralPowershell"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralStorageAzureFiles"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralStorageQueue"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralSearch"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralScheduler"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralResourceGroupList"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralTable"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralToolbox"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralVersions"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralWebsitePower"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralWebTest"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute6",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureGeneralWebsiteStaging"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralStorageContainer"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralTFSVCRepository"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralWorkbooks"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralMedia"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralWebSlots"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralModule"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralWorkflow"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralBacklog"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralTags"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneDeviceSecurityApple"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneDeviceSecurityWindows"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneEBooks"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneClientApps"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneIntune"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneDevices"
          },
          {
            "$type": "Keyword",
            "value": "azureGeneralSearchGrid"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneDeviceCompliance"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneSecurityBaselines"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneSoftwareUpdates"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneDeviceEnrollment"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneExchangeAccess"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneIntuneAppProtection"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneTenantStatus"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneMindaro"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneIntuneForEducation"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneEntraIdentityRolesandAdministrators"
          },
          {
            "$type": "Keyword",
            "value": "azureIotMachineLearningStudioClassicWebServices"
          },
          {
            "$type": "Keyword",
            "value": "azureIotStreamAnalyticsJobs"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneDeviceSecurityGoogle"
          },
          {
            "$type": "Keyword",
            "value": "azureIntuneDeviceConfiguration"
          },
          {
            "$type": "Keyword",
            "value": "azureIotEventHubs"
          },
          {
            "$type": "Keyword",
            "value": "azureIotLogicApps"
          },
          {
            "$type": "Keyword",
            "value": "azureIotAzureDataboxGateway"
          },
          {
            "$type": "Keyword",
            "value": "azureIotAzureStackHCISizer"
          },
          {
            "$type": "Keyword",
            "value": "azureIotDigitalTwins"
          },
          {
            "$type": "Keyword",
            "value": "azureIotStackHCIPremium"
          },
          {
            "$type": "Keyword",
            "value": "azureIotNotificationHubs"
          },
          {
            "$type": "Keyword",
            "value": "azureIotAzureIoTOperations"
          },
          {
            "$type": "Keyword",
            "value": "azureIotFunctionApps"
          },
          {
            "$type": "Keyword",
            "value": "azureIotNotificationHubNamespaces"
          },
          {
            "$type": "Keyword",
            "value": "azureIotAzureCosmosDB"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute7",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureIotMachineLearningStudioWorkspaces"
          },
          {
            "$type": "Keyword",
            "value": "azureIotAzureStack"
          },
          {
            "$type": "Keyword",
            "value": "azureIotEventHubClusters"
          },
          {
            "$type": "Keyword",
            "value": "azureIotMachineLearningStudioWebServicePlans"
          },
          {
            "$type": "Keyword",
            "value": "azureIotTimeSeriesInsightsEnvironments"
          },
          {
            "$type": "Keyword",
            "value": "azureIotIndustrialIoT"
          },
          {
            "$type": "Keyword",
            "value": "azureIotIoTHub"
          },
          {
            "$type": "Keyword",
            "value": "azureIotAzureMapsAccounts"
          },
          {
            "$type": "Keyword",
            "value": "azureIotIoTEdge"
          },
          {
            "$type": "Keyword",
            "value": "azureIotIoTCentralApplications"
          },
          {
            "$type": "Keyword",
            "value": "azureIotEventGridSubscriptions"
          },
          {
            "$type": "Keyword",
            "value": "azureIotTimeSeriesInsightsEventSources"
          },
          {
            "$type": "Keyword",
            "value": "azureIotDeviceProvisioningServices"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationAzureDataboxGateway"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationSQLDataWarehouses"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationIntegrationServiceEnvironments"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationSystemTopic"
          },
          {
            "$type": "Keyword",
            "value": "azureIotWindows10CoreServices"
          },
          {
            "$type": "Keyword",
            "value": "azureIotTimeSeriesInsightsAccessPolicies"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationPartnerTopic"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationPartnerRegistration"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationPartnerNamespace"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationIntegrationEnvironments"
          },
          {
            "$type": "Keyword",
            "value": "azureIotTimeSeriesDataSets"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationLogicApps"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationAPIManagementServices"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationAzureStackEdge"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationStorSimpleDeviceManagers"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationDataFactories"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationAPIConnections"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationAzureAPIforFHIR"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationEventGridTopics"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationPowerPlatform"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationSoftwareasaService"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationRelays"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationAzureDataCatalog"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationEventGridSubscriptions"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationIntegrationAccounts"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationAppConfiguration"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationSendGridAccounts"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationAzureSQLServerStretchDatabases"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationLogicAppsCustomConnector"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute8",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureIdentitySecurity"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationAzureServiceBus"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationBusinessProcessTracking"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityAdministrativeUnits"
          },
          {
            "$type": "Keyword",
            "value": "azureIntegrationEventGridDomains"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityVerifiableCredentials"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraPrivlegedIdentityManagement"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraIdentityLicenses"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityTenantProperties"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityAPIProxy"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraVerifiedID"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityVerificationAsAService"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraGlobalSecureAccess"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityMultiFactorAuthentication"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityExternalIdentities"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraPrivateAccess"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraIdentityCustomRoles"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraConnectSync"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraDomainServices"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityGroups"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraConnectHealth"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraConnect"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityActiveDirectoryConnectHealth"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEnterpriseApplications"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityAzureADB2C"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityManagedIdentities"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityAzureInformationProtection"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityUsers"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraInternetAccess"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraManagedIdentities"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraIDProtection"
          },
          {
            "$type": "Keyword",
            "value": "azureMenuKeys"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityAppRegistrations"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceMonitor"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityUserSettings"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceAlerts"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceCostManagementandBilling"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceBlueprints"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceAdvisor"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityIdentityGovernance"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceActivityLog"
          },
          {
            "$type": "Keyword",
            "value": "azureIdentityEntraIdentityRolesandAdministrators"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute9",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceDiagnosticsSettings"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceCompliance"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceSchedulerJobCollections"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceMyCustomers"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceApplicationInsights"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceRecoveryServicesVaults"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceSolutions"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceMetrics"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceServiceProviders"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceOperationLogClassic"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceAutomationAccounts"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceServiceCatalogMAD"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceEducation"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceAzureLighthouse"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceIntuneTrends"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceAzureArc"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceArcMachines"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceManagedApplicationsCenter"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceUserPrivacy"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceCustomerLockboxforMicrosoftAzure"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceResourcesProvider"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceLogAnalyticsWorkspaces"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernancePolicy"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceResourceGraphExplorer"
          },
          {
            "$type": "Keyword",
            "value": "azureMigrateCostManagementandBilling"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceUniversalPrint"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceMachinesAzureArc"
          },
          {
            "$type": "Keyword",
            "value": "azureMigrateDataBox"
          },
          {
            "$type": "Keyword",
            "value": "azureMigrateRecoveryServicesVaults"
          },
          {
            "$type": "Keyword",
            "value": "azureManagementGovernanceManagedDesktop"
          },
          {
            "$type": "Keyword",
            "value": "azureMigrationAzureDatabaseMigrationServices"
          },
          {
            "$type": "Keyword",
            "value": "azureMixedRealityRemoteRendering"
          },
          {
            "$type": "Keyword",
            "value": "azureMixedRealitySpatialAnchorAccounts"
          },
          {
            "$type": "Keyword",
            "value": "azureMobileNotificationHubs"
          },
          {
            "$type": "Keyword",
            "value": "azureMonitorMonitor"
          },
          {
            "$type": "Keyword",
            "value": "azureMobilePowerPlatform"
          },
          {
            "$type": "Keyword",
            "value": "azureMigrateAzureDataboxGateway"
          },
          {
            "$type": "Keyword",
            "value": "azureMigrateAzureStackEdge"
          },
          {
            "$type": "Keyword",
            "value": "azureMonitorDiagnosticsSettings"
          },
          {
            "$type": "Keyword",
            "value": "azureMonitorActivityLog"
          },
          {
            "$type": "Keyword",
            "value": "azureMobileAppServices"
          },
          {
            "$type": "Keyword",
            "value": "azureMigrateAzureMigrate"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute10",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureMonitorAzureMonitorsforSAPSolutions"
          },
          {
            "$type": "Keyword",
            "value": "azureMonitorApplicationInsights"
          },
          {
            "$type": "Keyword",
            "value": "azureMonitorMetrics"
          },
          {
            "$type": "Keyword",
            "value": "azureMonitorChangeAnalysis"
          },
          {
            "$type": "Keyword",
            "value": "azureMonitorNetworkWatcher"
          },
          {
            "$type": "Keyword",
            "value": "azureMonitorAzureWorkbooks"
          },
          {
            "$type": "Keyword",
            "value": "azureNewIconsIceEdgeActions"
          },
          {
            "$type": "Keyword",
            "value": "azureMonitorLogAnalyticsWorkspaces"
          },
          {
            "$type": "Keyword",
            "value": "azureNewIconsExternalid"
          },
          {
            "$type": "Keyword",
            "value": "azureNewIconsIceToolchainOrchestrator"
          },
          {
            "$type": "Keyword",
            "value": "azureMonitorAutoScale"
          },
          {
            "$type": "Keyword",
            "value": "azureNewIconsExternalidmodified"
          },
          {
            "$type": "Keyword",
            "value": "azureNewIconsAzureManagedRedis"
          },
          {
            "$type": "Keyword",
            "value": "azureNewIconsIceLandingZone"
          },
          {
            "$type": "Keyword",
            "value": "azureNewIconsEdgeStorageAccelerator"
          },
          {
            "$type": "Keyword",
            "value": "azureNewIconsBreeze"
          },
          {
            "$type": "Keyword",
            "value": "azureNewIconsVPNClientWindows"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityMicrosoftDefenderforIoT"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityDetonation"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityMicrosoftDefenderEASM"
          },
          {
            "$type": "Keyword",
            "value": "azureNewIconsAIatEdge"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityEntraIdentityRiskyUsers"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityEntraIdentityRiskySignins"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityIdentitySecureScore"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityMultifactorAuthentication"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityAzureInformationProtection"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityMicrosoftDefenderforCloud"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityKeyVaults"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityConditionalAccess"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityAzureSentinel"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityUserSettings"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingPrivateLink"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityExtendedSecurityUpdates"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingAzureFirewallManager"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingAzureFirewallPolicy"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingCDNProfiles"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingIPGroups"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingVirtualWANHub"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingPrivateLinkService"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingPrivateLinkServices"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingLoadBalancerHub"
          },
          {
            "$type": "Keyword",
            "value": "azureSecurityApplicationSecurityGroups"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute11",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureNetworkingVirtualRouter"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingConnectedCache"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingBastions"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingSpotVM"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingResourceManagementPrivateLink"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingSubnet"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingDNSSecurityPolicy"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingAzureCommunicationsGateway"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingDNSPrivateResolver"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingDNSMultistack"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingSpotVMSS"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingVirtualNetworks"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingApplicationGatewayContainers"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingVirtualNetworkGateways"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingLoadBalancers"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingDNSZones"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingIPAddressmanager"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingATMMultistack"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingTrafficManagerProfiles"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingNetworkWatcher"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingRouteFilters"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingPublicIPAddressesClassic"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingPublicIPAddresses"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingOnPremisesDataGateways"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingNetworkSecurityGroups"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingFrontDoorandCDNProfiles"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingVirtualNetworksClassic"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingDDoSProtectionPlans"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingApplicationGateways"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingExpressRouteCircuits"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingNetworkInterfaces"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingLocalNetworkGateways"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingConnections"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingNAT"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingVirtualWANs"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingWebApplicationFirewallPoliciesWAF"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingProximityPlacementGroups"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingReservedIPAddressesClassic"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingRouteTables"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingPublicIPPrefixes"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageRecoveryServicesVaults"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingFirewalls"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute12",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureStorageAzureDataboxGateway"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageAzureHCPCache"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageStorageAccountsClassic"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageManagedFileShares"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageStorageAccounts"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageStorSimpleDeviceManagers"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageDataLakeStorageGen1"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageStorSimpleDataManagers"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageStorageSyncServices"
          },
          {
            "$type": "Keyword",
            "value": "azureNetworkingServiceEndpointPolicies"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageStorageExplorer"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageStorageActions"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageAzureNetAppFiles"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageAzureStackEdge"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageDataShares"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageImportExportJobs"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageAzureFileshares"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageDataShareInvitations"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAppServiceDomains"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAppServiceCertificates"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAPICenter"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAppServices"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAppSpaceComponent"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAppSpace"
          },
          {
            "$type": "Keyword",
            "value": "azureWebStaticApps"
          },
          {
            "$type": "Keyword",
            "value": "azureWebCognitiveSearch"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAPIManagementServices"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAPIConnections"
          },
          {
            "$type": "Keyword",
            "value": "azureWebSignalR"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAppServicePlans"
          },
          {
            "$type": "Keyword",
            "value": "azureWebPowerPlatform"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAppServiceEnvironments"
          },
          {
            "$type": "Keyword",
            "value": "azureStorageDataBox"
          },
          {
            "$type": "Keyword",
            "value": "azureWebCognitiveServices"
          },
          {
            "$type": "Keyword",
            "value": "azureWebNotificationHubNamespaces"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureVirtualDesktop"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAzureMediaService"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherSSHKeys"
          },
          {
            "$type": "Keyword",
            "value": "azureWebAzureSpringApps"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherInternetAnalyzerProfiles"
          },
          {
            "$type": "Keyword",
            "value": "azureWebFrontDoorandCDNProfiles"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureCloudShell"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute13",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureOtherExpressRouteDirect"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherVideoAnalyzers"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureNetworkFunctionManagerFunctions"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherLogAnalyticsQueryPack"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherPeeringService"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureVMwareSolution"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureCommunicationServices"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherPeerings"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherArcKubernetes"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureVideoIndexer"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherArcPostgreSQL"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDashboardHub"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDataCollectionRules"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAVSVM"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherArcSQLServer"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherCostExport"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherArcSQLManagedInstance"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureChaosStudio"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherResourceMover"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherNetworkManagers"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureBackupCenter"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherModularDataCenter"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherBackupVault"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDedicatedHSM"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureMonitorDashboard"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherArcDataservices"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherFiji"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherSCVMMManagementServers"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherWebAppDatabase"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherCloudServicesextendedsupport"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDeviceUpdateIoTHub"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureSupportCenterBlue"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureHPCWorkbenches"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherBareMetalInfrastructure"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherConnectedVehiclePlatform"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherTemplateSpecs"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDiskPool"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherPrivateEndpoints"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherCustomIPPrefix"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherFHIRService"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherConfidentialLedgers"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAquila"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute14",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureOtherMedTechService"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherManagedInstanceApacheCassandra"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherOpenSupplyChainPlatform"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureOrbital"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherReservedCapacity"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherEntraIdentityLicenses"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureNetworkFunctionManager"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherTestBase"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherMissionLandingZone"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherWindowsNotificationServices"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherMobileNetworks"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherVMAppVersions"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherVMAppDefinitions"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherResourceGuard"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureEdgeHardwareCenter"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzurite"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherCeres"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherWorkerContainerApp"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherCapacityReservationGroups"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherSavingsPlans"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherVMImageVersion"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureManagedGrafana"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherUpdateManagementCenter"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherTargetsManagement"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherCommunityImages"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherStorageFunctions"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureComputeGalleries"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherSonicDash"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherComplianceCenter"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureLoadTesting"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureCenterforSAP"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherNetworkSecurityPerimeters"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherContainerAppsEnvironments"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherVirtualVisitsBuilder"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureQuotas"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherVirtualInstanceforSAP"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherCentralServiceInstanceForSAP"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherExpressRouteTrafficCollector"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureStorageMover"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherElasticSAN"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAppComplianceAutomation"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherMicrosoftDevBox"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTypeAttribute15",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azureOtherAzureDeploymentEnvironments"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureSustainability"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureDevTunnels"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherKubernetesFleetManager"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAKSIstio"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherOSConfig"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDatabaseInstanceForSAP"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherIcMTroubleshooting"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderExternalManagement"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderRobotController"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherVirtualEnclaves"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderHMI"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderSensor"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderMarquee"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderDCSController"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderHistorian"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderSlot"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderIndustrialPackagingSystem"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderDistributerControlSystem"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderIndustrialPrinter"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderIndustrialScaleSystem"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderWebGuidingSystem"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderEngineeringStation"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderCMLocalManager"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderIndustrialRobot"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderPLC"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderFreezerMonitor"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderMeter"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderPneumaticDevice"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherMonitorHealthModels"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherWACInstaller"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherHDIAKSCluster"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderRelay"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureA"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherInstancePools"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherLocalNetworkGateways"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherDefenderRTU"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherEdgeManagement"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAzureSphere"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherWAC"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherExchangeOnPremisesAccess"
          },
          {
            "$type": "Keyword",
            "value": "azureOtherAppRegistrations"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureIconTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "icon"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "icon",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@41"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@42"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@43"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@44"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@45"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@46"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@47"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@48"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@49"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@50"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@51"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@52"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@53"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@54"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@55"
                  },
                  "arguments": []
                }
              ]
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTagAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@56"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AzureTag",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "<Azure"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@57"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "/>"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "GcpTypeAttribute1",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "gCPAccessContextManager"
          },
          {
            "$type": "Keyword",
            "value": "gCPAiHub"
          },
          {
            "$type": "Keyword",
            "value": "gCPAdvancedAgentModeling"
          },
          {
            "$type": "Keyword",
            "value": "gCPAdministration"
          },
          {
            "$type": "Keyword",
            "value": "gCPAiPlatformUnified"
          },
          {
            "$type": "Keyword",
            "value": "gCPAiPlatform"
          },
          {
            "$type": "Keyword",
            "value": "gCPAgentAssist"
          },
          {
            "$type": "Keyword",
            "value": "gCPAnalyticsHub"
          },
          {
            "$type": "Keyword",
            "value": "gCPAdvancedSolutionsLab"
          },
          {
            "$type": "Keyword",
            "value": "gCPAnthos"
          },
          {
            "$type": "Keyword",
            "value": "gCPAnthosConfigManagement"
          },
          {
            "$type": "Keyword",
            "value": "gCPAppEngine"
          },
          {
            "$type": "Keyword",
            "value": "gCPAnthosServiceMesh"
          },
          {
            "$type": "Keyword",
            "value": "gCPApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPApiMonetization"
          },
          {
            "$type": "Keyword",
            "value": "gCPApigeeApiPlatform"
          },
          {
            "$type": "Keyword",
            "value": "gCPApiAnalytics"
          },
          {
            "$type": "Keyword",
            "value": "gCPArtifactRegistry"
          },
          {
            "$type": "Keyword",
            "value": "gCPApigeeSense"
          },
          {
            "$type": "Keyword",
            "value": "gCPAutoml"
          },
          {
            "$type": "Keyword",
            "value": "gCPAutomlTables"
          },
          {
            "$type": "Keyword",
            "value": "gCPAssuredWorkloads"
          },
          {
            "$type": "Keyword",
            "value": "gCPAssetInventory"
          },
          {
            "$type": "Keyword",
            "value": "gCPAutomlTranslation"
          },
          {
            "$type": "Keyword",
            "value": "gCPAutomlVideoIntelligence"
          },
          {
            "$type": "Keyword",
            "value": "gCPAutomlVision"
          },
          {
            "$type": "Keyword",
            "value": "gCPAutomlNaturalLanguage"
          },
          {
            "$type": "Keyword",
            "value": "gCPBareMetalSolutions"
          },
          {
            "$type": "Keyword",
            "value": "gCPBeyondcorp"
          },
          {
            "$type": "Keyword",
            "value": "gCPBigtable"
          },
          {
            "$type": "Keyword",
            "value": "gCPBatch"
          },
          {
            "$type": "Keyword",
            "value": "gCPBigquery"
          },
          {
            "$type": "Keyword",
            "value": "gCPBilling"
          },
          {
            "$type": "Keyword",
            "value": "gCPCertificateManager"
          },
          {
            "$type": "Keyword",
            "value": "gCPCatalog"
          },
          {
            "$type": "Keyword",
            "value": "gCPCertificateAuthorityService"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudApiGateway"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudAssetInventory"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudAuditLogs"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudApis"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudCdn"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudBuild"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "GcpTypeAttribute2",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "gCPBinaryAuthorization"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudComposer"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudArmor"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudCode"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudDataFusion"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudDeploymentManager"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudDeploy"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudDns"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudDomains"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudEkm"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudEndpoints"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudExternalIpAddresses"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudFirewallRules"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudGpu"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudForMarketing"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudFunctions"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudGeneric"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudHealthcareMarketplace"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudHealthcareApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudInterconnect"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudInferenceApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudIds"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudHsm"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudLogging"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudJobsApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudLoadBalancing"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudMonitoring"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudMediaEdge"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudNetwork"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudNaturalLanguageApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudOptimizationAi"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudOps"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudNat"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudRouter"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudRoutes"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudRunForAnthos"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudRun"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudScheduler"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudShell"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudSpanner"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudStorage"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudSecurityScanner"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "GcpTypeAttribute3",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "gCPCloudTasks"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudTranslationApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudTestLab"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudTpu"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudSql"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudVpn"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudVisionApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPCloudOptimizationAiFleetRoutingApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPConnectors"
          },
          {
            "$type": "Keyword",
            "value": "gCPConfigurationManagement"
          },
          {
            "$type": "Keyword",
            "value": "gCPConnectivityTest"
          },
          {
            "$type": "Keyword",
            "value": "gCPContainerOptimizedOs"
          },
          {
            "$type": "Keyword",
            "value": "gCPComputeEngine"
          },
          {
            "$type": "Keyword",
            "value": "gCPContainerRegistry"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataCatalog"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataLayers"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataQna"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataLabeling"
          },
          {
            "$type": "Keyword",
            "value": "gCPContactCenterAi"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataTransfer"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataStudio"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataLossPreventionApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPDatabaseMigrationService"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataflow"
          },
          {
            "$type": "Keyword",
            "value": "gCPDatalab"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataplex"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataproc"
          },
          {
            "$type": "Keyword",
            "value": "gCPDatapol"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataprocMetastore"
          },
          {
            "$type": "Keyword",
            "value": "gCPDataprep"
          },
          {
            "$type": "Keyword",
            "value": "gCPDatastore"
          },
          {
            "$type": "Keyword",
            "value": "gCPDatashare"
          },
          {
            "$type": "Keyword",
            "value": "gCPDebugger"
          },
          {
            "$type": "Keyword",
            "value": "gCPDatastream"
          },
          {
            "$type": "Keyword",
            "value": "gCPDialogflow"
          },
          {
            "$type": "Keyword",
            "value": "gCPDeveloperPortal"
          },
          {
            "$type": "Keyword",
            "value": "gCPDialogflowCx"
          },
          {
            "$type": "Keyword",
            "value": "gCPDialogflowInsights"
          },
          {
            "$type": "Keyword",
            "value": "gCPDocumentAi"
          },
          {
            "$type": "Keyword",
            "value": "gCPEventarc"
          },
          {
            "$type": "Keyword",
            "value": "gCPErrorReporting"
          },
          {
            "$type": "Keyword",
            "value": "gCPEarlyAccessCenter"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "GcpTypeAttribute4",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "gCPFilestore"
          },
          {
            "$type": "Keyword",
            "value": "gCPFirestore"
          },
          {
            "$type": "Keyword",
            "value": "gCPFinancialServicesMarketplace"
          },
          {
            "$type": "Keyword",
            "value": "gCPFleetEngine"
          },
          {
            "$type": "Keyword",
            "value": "gCPGkeOnprem"
          },
          {
            "$type": "Keyword",
            "value": "gCPFreeTrial"
          },
          {
            "$type": "Keyword",
            "value": "gCPGameServers"
          },
          {
            "$type": "Keyword",
            "value": "gCPGenomics"
          },
          {
            "$type": "Keyword",
            "value": "gCPGoogleKubernetesEngine"
          },
          {
            "$type": "Keyword",
            "value": "gCPGoogleCloudMarketplace"
          },
          {
            "$type": "Keyword",
            "value": "gCPGoogleMapsPlatform"
          },
          {
            "$type": "Keyword",
            "value": "gCPGceSystemsManagement"
          },
          {
            "$type": "Keyword",
            "value": "gCPHealthcareNlpApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPIdentityawareProxy"
          },
          {
            "$type": "Keyword",
            "value": "gCPIdentityPlatform"
          },
          {
            "$type": "Keyword",
            "value": "gCPHome"
          },
          {
            "$type": "Keyword",
            "value": "gCPIotEdge"
          },
          {
            "$type": "Keyword",
            "value": "gCPIotCore"
          },
          {
            "$type": "Keyword",
            "value": "gCPKeyAccessJustifications"
          },
          {
            "$type": "Keyword",
            "value": "gCPLauncher"
          },
          {
            "$type": "Keyword",
            "value": "gCPKeyManagementService"
          },
          {
            "$type": "Keyword",
            "value": "gCPIdentityAndAccessManagement"
          },
          {
            "$type": "Keyword",
            "value": "gCPLooker"
          },
          {
            "$type": "Keyword",
            "value": "gCPKuberun"
          },
          {
            "$type": "Keyword",
            "value": "gCPManagedServiceForMicrosoftActiveDirectory"
          },
          {
            "$type": "Keyword",
            "value": "gCPMediaTranslationApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPLocalSsd"
          },
          {
            "$type": "Keyword",
            "value": "gCPMigrateForAnthos"
          },
          {
            "$type": "Keyword",
            "value": "gCPMemorystore"
          },
          {
            "$type": "Keyword",
            "value": "gCPMyCloud"
          },
          {
            "$type": "Keyword",
            "value": "gCPMigrateForComputeEngine"
          },
          {
            "$type": "Keyword",
            "value": "gCPNetworkConnectivityCenter"
          },
          {
            "$type": "Keyword",
            "value": "gCPNetworkIntelligenceCenter"
          },
          {
            "$type": "Keyword",
            "value": "gCPNetworkTopology"
          },
          {
            "$type": "Keyword",
            "value": "gCPNetworkTiers"
          },
          {
            "$type": "Keyword",
            "value": "gCPNetworkSecurity"
          },
          {
            "$type": "Keyword",
            "value": "gCPOsPatchManagement"
          },
          {
            "$type": "Keyword",
            "value": "gCPPartnerInterconnect"
          },
          {
            "$type": "Keyword",
            "value": "gCPOsInventoryManagement"
          },
          {
            "$type": "Keyword",
            "value": "gCPPartnerPortal"
          },
          {
            "$type": "Keyword",
            "value": "gCPOsConfigurationManagement"
          },
          {
            "$type": "Keyword",
            "value": "gCPPermissions"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "GcpTypeAttribute5",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "gCPPolicyAnalyzer"
          },
          {
            "$type": "Keyword",
            "value": "gCPPersistentDisk"
          },
          {
            "$type": "Keyword",
            "value": "gCPPerformanceDashboard"
          },
          {
            "$type": "Keyword",
            "value": "gCPPhishingProtection"
          },
          {
            "$type": "Keyword",
            "value": "gCPOnboarding"
          },
          {
            "$type": "Keyword",
            "value": "gCPPrivateServiceConnect"
          },
          {
            "$type": "Keyword",
            "value": "gCPPremiumNetworkTier"
          },
          {
            "$type": "Keyword",
            "value": "gCPProducerPortal"
          },
          {
            "$type": "Keyword",
            "value": "gCPProfiler"
          },
          {
            "$type": "Keyword",
            "value": "gCPQuantumEngine"
          },
          {
            "$type": "Keyword",
            "value": "gCPPubsub"
          },
          {
            "$type": "Keyword",
            "value": "gCPRealworldInsights"
          },
          {
            "$type": "Keyword",
            "value": "gCPProject"
          },
          {
            "$type": "Keyword",
            "value": "gCPRecommendationsAi"
          },
          {
            "$type": "Keyword",
            "value": "gCPQuotas"
          },
          {
            "$type": "Keyword",
            "value": "gCPRetailApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPRiskManager"
          },
          {
            "$type": "Keyword",
            "value": "gCPReleaseNotes"
          },
          {
            "$type": "Keyword",
            "value": "gCPSecretManager"
          },
          {
            "$type": "Keyword",
            "value": "gCPRuntimeConfig"
          },
          {
            "$type": "Keyword",
            "value": "gCPSecurityCommandCenter"
          },
          {
            "$type": "Keyword",
            "value": "gCPSecurity"
          },
          {
            "$type": "Keyword",
            "value": "gCPSecurityKeyEnforcement"
          },
          {
            "$type": "Keyword",
            "value": "gCPSecurityHealthAdvisor"
          },
          {
            "$type": "Keyword",
            "value": "gCPServiceDiscovery"
          },
          {
            "$type": "Keyword",
            "value": "gCPSpeechtotext"
          },
          {
            "$type": "Keyword",
            "value": "gCPStackdriver"
          },
          {
            "$type": "Keyword",
            "value": "gCPStandardNetworkTier"
          },
          {
            "$type": "Keyword",
            "value": "gCPSupport"
          },
          {
            "$type": "Keyword",
            "value": "gCPTensorflowEnterprise"
          },
          {
            "$type": "Keyword",
            "value": "gCPTexttospeech"
          },
          {
            "$type": "Keyword",
            "value": "gCPPrivateConnectivity"
          },
          {
            "$type": "Keyword",
            "value": "gCPToolsForPowershell"
          },
          {
            "$type": "Keyword",
            "value": "gCPStreamSuite"
          },
          {
            "$type": "Keyword",
            "value": "gCPTransfer"
          },
          {
            "$type": "Keyword",
            "value": "gCPTransferAppliance"
          },
          {
            "$type": "Keyword",
            "value": "gCPVertexai"
          },
          {
            "$type": "Keyword",
            "value": "gCPVisualInspection"
          },
          {
            "$type": "Keyword",
            "value": "gCPVideoIntelligenceApi"
          },
          {
            "$type": "Keyword",
            "value": "gCPTrace"
          },
          {
            "$type": "Keyword",
            "value": "gCPTrafficDirector"
          },
          {
            "$type": "Keyword",
            "value": "gCPUserPreferences"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "GcpIconTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "icon"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "icon",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@59"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@60"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@61"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@62"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@63"
                  },
                  "arguments": []
                }
              ]
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "GcpTagAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@64"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "GcpTag",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "<Gcp"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@65"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "/>"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SkillTypeAttribute0",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "skillIconActivityPub"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAbleton"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAWS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAfterEffects"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAndroidStudio"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAlpineJS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAngular"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAnaconda"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAiScript"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAnsible"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAppwrite"
          },
          {
            "$type": "Keyword",
            "value": "skillIconActix"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAstro"
          },
          {
            "$type": "Keyword",
            "value": "skillIconApple"
          },
          {
            "$type": "Keyword",
            "value": "skillIconArduino"
          },
          {
            "$type": "Keyword",
            "value": "skillIconApollo"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAzul"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAudition"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAdonis"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAzure"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAutoCAD"
          },
          {
            "$type": "Keyword",
            "value": "skillIconBlender"
          },
          {
            "$type": "Keyword",
            "value": "skillIconArch"
          },
          {
            "$type": "Keyword",
            "value": "skillIconBash"
          },
          {
            "$type": "Keyword",
            "value": "skillIconBevy"
          },
          {
            "$type": "Keyword",
            "value": "skillIconBootstrap"
          },
          {
            "$type": "Keyword",
            "value": "skillIconBSD"
          },
          {
            "$type": "Keyword",
            "value": "skillIconCLion"
          },
          {
            "$type": "Keyword",
            "value": "skillIconBun"
          },
          {
            "$type": "Keyword",
            "value": "skillIconC"
          },
          {
            "$type": "Keyword",
            "value": "skillIconBitBucket"
          },
          {
            "$type": "Keyword",
            "value": "skillIconCMake"
          },
          {
            "$type": "Keyword",
            "value": "skillIconAtom"
          },
          {
            "$type": "Keyword",
            "value": "skillIconCSS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconCPP"
          },
          {
            "$type": "Keyword",
            "value": "skillIconCS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconCloudflare"
          },
          {
            "$type": "Keyword",
            "value": "skillIconClojure"
          },
          {
            "$type": "Keyword",
            "value": "skillIconCodePen"
          },
          {
            "$type": "Keyword",
            "value": "skillIconCassandra"
          },
          {
            "$type": "Keyword",
            "value": "skillIconCrystal"
          },
          {
            "$type": "Keyword",
            "value": "skillIconDart"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SkillTypeAttribute1",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "skillIconCypress"
          },
          {
            "$type": "Keyword",
            "value": "skillIconDENO"
          },
          {
            "$type": "Keyword",
            "value": "skillIconCoffeeScript"
          },
          {
            "$type": "Keyword",
            "value": "skillIconD3"
          },
          {
            "$type": "Keyword",
            "value": "skillIconDevTo"
          },
          {
            "$type": "Keyword",
            "value": "skillIconDiscord"
          },
          {
            "$type": "Keyword",
            "value": "skillIconDiscordJS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconDjango"
          },
          {
            "$type": "Keyword",
            "value": "skillIconBabel"
          },
          {
            "$type": "Keyword",
            "value": "skillIconDiscordBots"
          },
          {
            "$type": "Keyword",
            "value": "skillIconDotNet"
          },
          {
            "$type": "Keyword",
            "value": "skillIconDynamoDB"
          },
          {
            "$type": "Keyword",
            "value": "skillIconDocker"
          },
          {
            "$type": "Keyword",
            "value": "skillIconElixir"
          },
          {
            "$type": "Keyword",
            "value": "skillIconDebian"
          },
          {
            "$type": "Keyword",
            "value": "skillIconElasticsearch"
          },
          {
            "$type": "Keyword",
            "value": "skillIconEmacs"
          },
          {
            "$type": "Keyword",
            "value": "skillIconElysia"
          },
          {
            "$type": "Keyword",
            "value": "skillIconFastAPI"
          },
          {
            "$type": "Keyword",
            "value": "skillIconElectron"
          },
          {
            "$type": "Keyword",
            "value": "skillIconEclipse"
          },
          {
            "$type": "Keyword",
            "value": "skillIconEmber"
          },
          {
            "$type": "Keyword",
            "value": "skillIconFlutter"
          },
          {
            "$type": "Keyword",
            "value": "skillIconFediverse"
          },
          {
            "$type": "Keyword",
            "value": "skillIconFortran"
          },
          {
            "$type": "Keyword",
            "value": "skillIconExpressJS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconEmotion"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGTK"
          },
          {
            "$type": "Keyword",
            "value": "skillIconFirebase"
          },
          {
            "$type": "Keyword",
            "value": "skillIconFigma"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGCP"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGherkin"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGit"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGameMakerStudio"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGithub"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGithubActions"
          },
          {
            "$type": "Keyword",
            "value": "skillIconFlask"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGoLang"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGmail"
          },
          {
            "$type": "Keyword",
            "value": "skillIconForth"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGraphQL"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGitLab"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SkillTypeAttribute2",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "skillIconGatsby"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGulp"
          },
          {
            "$type": "Keyword",
            "value": "skillIconHaxe"
          },
          {
            "$type": "Keyword",
            "value": "skillIconHaskell"
          },
          {
            "$type": "Keyword",
            "value": "skillIconHTML"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGrafana"
          },
          {
            "$type": "Keyword",
            "value": "skillIconHeroku"
          },
          {
            "$type": "Keyword",
            "value": "skillIconHaxeFlixel"
          },
          {
            "$type": "Keyword",
            "value": "skillIconHibernate"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGradle"
          },
          {
            "$type": "Keyword",
            "value": "skillIconHtmx"
          },
          {
            "$type": "Keyword",
            "value": "skillIconGodot"
          },
          {
            "$type": "Keyword",
            "value": "skillIconIPFS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconIdea"
          },
          {
            "$type": "Keyword",
            "value": "skillIconInstagram"
          },
          {
            "$type": "Keyword",
            "value": "skillIconJava"
          },
          {
            "$type": "Keyword",
            "value": "skillIconIllustrator"
          },
          {
            "$type": "Keyword",
            "value": "skillIconJenkins"
          },
          {
            "$type": "Keyword",
            "value": "skillIconJest"
          },
          {
            "$type": "Keyword",
            "value": "skillIconJQuery"
          },
          {
            "$type": "Keyword",
            "value": "skillIconJavaScript"
          },
          {
            "$type": "Keyword",
            "value": "skillIconKubernetes"
          },
          {
            "$type": "Keyword",
            "value": "skillIconKotlin"
          },
          {
            "$type": "Keyword",
            "value": "skillIconLaravel"
          },
          {
            "$type": "Keyword",
            "value": "skillIconLinkedIn"
          },
          {
            "$type": "Keyword",
            "value": "skillIconKali"
          },
          {
            "$type": "Keyword",
            "value": "skillIconKafka"
          },
          {
            "$type": "Keyword",
            "value": "skillIconLit"
          },
          {
            "$type": "Keyword",
            "value": "skillIconMarkdown"
          },
          {
            "$type": "Keyword",
            "value": "skillIconJulia"
          },
          {
            "$type": "Keyword",
            "value": "skillIconLaTeX"
          },
          {
            "$type": "Keyword",
            "value": "skillIconLua"
          },
          {
            "$type": "Keyword",
            "value": "skillIconMastodon"
          },
          {
            "$type": "Keyword",
            "value": "skillIconLess"
          },
          {
            "$type": "Keyword",
            "value": "skillIconMatlab"
          },
          {
            "$type": "Keyword",
            "value": "skillIconMisskey"
          },
          {
            "$type": "Keyword",
            "value": "skillIconMaterialUI"
          },
          {
            "$type": "Keyword",
            "value": "skillIconMongoDB"
          },
          {
            "$type": "Keyword",
            "value": "skillIconKtor"
          },
          {
            "$type": "Keyword",
            "value": "skillIconMint"
          },
          {
            "$type": "Keyword",
            "value": "skillIconLinux"
          },
          {
            "$type": "Keyword",
            "value": "skillIconMySQL"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SkillTypeAttribute3",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "skillIconMaven"
          },
          {
            "$type": "Keyword",
            "value": "skillIconNeoVim"
          },
          {
            "$type": "Keyword",
            "value": "skillIconNim"
          },
          {
            "$type": "Keyword",
            "value": "skillIconNextJS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconNix"
          },
          {
            "$type": "Keyword",
            "value": "skillIconNginx"
          },
          {
            "$type": "Keyword",
            "value": "skillIconNestJS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconNpm"
          },
          {
            "$type": "Keyword",
            "value": "skillIconNetlify"
          },
          {
            "$type": "Keyword",
            "value": "skillIconNuxtJS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconNodeJS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconNotion"
          },
          {
            "$type": "Keyword",
            "value": "skillIconOpenCV"
          },
          {
            "$type": "Keyword",
            "value": "skillIconOctave"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPHP"
          },
          {
            "$type": "Keyword",
            "value": "skillIconOpenStack"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPhotoshop"
          },
          {
            "$type": "Keyword",
            "value": "skillIconOpenShift"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPhpStorm"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPkl"
          },
          {
            "$type": "Keyword",
            "value": "skillIconObsidian"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPinia"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPnpm"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPostgreSQL"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPerl"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPlan9"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPowershell"
          },
          {
            "$type": "Keyword",
            "value": "skillIconOCaml"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPrisma"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPremiere"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPyCharm"
          },
          {
            "$type": "Keyword",
            "value": "skillIconProcessing"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPlanetScale"
          },
          {
            "$type": "Keyword",
            "value": "skillIconR"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPrometheus"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPostman"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPyTorch"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRails"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPug"
          },
          {
            "$type": "Keyword",
            "value": "skillIconPython"
          },
          {
            "$type": "Keyword",
            "value": "skillIconROS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconQT"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SkillTypeAttribute4",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "skillIconRedis"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRabbitMQ"
          },
          {
            "$type": "Keyword",
            "value": "skillIconReactiveX"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRaspberryPi"
          },
          {
            "$type": "Keyword",
            "value": "skillIconReact"
          },
          {
            "$type": "Keyword",
            "value": "skillIconReplit"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRemix"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRedHat"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRust"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRocket"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRider"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRollupJS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSVG"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRegex"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSQLite"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRuby"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSentry"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSketchup"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSciKitLearn"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSass"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSolidJS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSelenium"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRobloxStudio"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSequelize"
          },
          {
            "$type": "Keyword",
            "value": "skillIconStackOverflow"
          },
          {
            "$type": "Keyword",
            "value": "skillIconScala"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSolidity"
          },
          {
            "$type": "Keyword",
            "value": "skillIconRedux"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSupabase"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSpring"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSwift"
          },
          {
            "$type": "Keyword",
            "value": "skillIconTauri"
          },
          {
            "$type": "Keyword",
            "value": "skillIconTerraform"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSublime"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSvelte"
          },
          {
            "$type": "Keyword",
            "value": "skillIconTailwindCSS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconThreeJS"
          },
          {
            "$type": "Keyword",
            "value": "skillIconSymfony"
          },
          {
            "$type": "Keyword",
            "value": "skillIconTypeScript"
          },
          {
            "$type": "Keyword",
            "value": "skillIconTwitter"
          },
          {
            "$type": "Keyword",
            "value": "skillIconUbuntu"
          },
          {
            "$type": "Keyword",
            "value": "skillIconStyledComponents"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SkillIconTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "icon"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "icon",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@67"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@68"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@69"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@70"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@71"
                  },
                  "arguments": []
                }
              ]
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SkillTagAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@72"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SkillTag",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "<Skill"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@73"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "/>"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ThemeisleTypeAttribute0",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "themeisle1"
          },
          {
            "$type": "Keyword",
            "value": "themeisle2"
          },
          {
            "$type": "Keyword",
            "value": "themeisle3"
          },
          {
            "$type": "Keyword",
            "value": "themeisle4"
          },
          {
            "$type": "Keyword",
            "value": "themeisle5"
          },
          {
            "$type": "Keyword",
            "value": "themeisle6"
          },
          {
            "$type": "Keyword",
            "value": "themeisle7"
          },
          {
            "$type": "Keyword",
            "value": "themeisle8"
          },
          {
            "$type": "Keyword",
            "value": "themeisle9"
          },
          {
            "$type": "Keyword",
            "value": "themeisle10"
          },
          {
            "$type": "Keyword",
            "value": "themeisle11"
          },
          {
            "$type": "Keyword",
            "value": "themeisle12"
          },
          {
            "$type": "Keyword",
            "value": "themeisle13"
          },
          {
            "$type": "Keyword",
            "value": "themeisle14"
          },
          {
            "$type": "Keyword",
            "value": "themeisle15"
          },
          {
            "$type": "Keyword",
            "value": "themeisle16"
          },
          {
            "$type": "Keyword",
            "value": "themeisle17"
          },
          {
            "$type": "Keyword",
            "value": "themeisle18"
          },
          {
            "$type": "Keyword",
            "value": "themeisle19"
          },
          {
            "$type": "Keyword",
            "value": "themeisle20"
          },
          {
            "$type": "Keyword",
            "value": "themeisle21"
          },
          {
            "$type": "Keyword",
            "value": "themeisle22"
          },
          {
            "$type": "Keyword",
            "value": "themeisle23"
          },
          {
            "$type": "Keyword",
            "value": "themeisle24"
          },
          {
            "$type": "Keyword",
            "value": "themeisle25"
          },
          {
            "$type": "Keyword",
            "value": "themeisle26"
          },
          {
            "$type": "Keyword",
            "value": "themeisle27"
          },
          {
            "$type": "Keyword",
            "value": "themeisle28"
          },
          {
            "$type": "Keyword",
            "value": "themeisle29"
          },
          {
            "$type": "Keyword",
            "value": "themeisle30"
          },
          {
            "$type": "Keyword",
            "value": "themeisle31"
          },
          {
            "$type": "Keyword",
            "value": "themeisle32"
          },
          {
            "$type": "Keyword",
            "value": "themeisle33"
          },
          {
            "$type": "Keyword",
            "value": "themeisle34"
          },
          {
            "$type": "Keyword",
            "value": "themeisle35"
          },
          {
            "$type": "Keyword",
            "value": "themeisle36"
          },
          {
            "$type": "Keyword",
            "value": "themeisle37"
          },
          {
            "$type": "Keyword",
            "value": "themeisle38"
          },
          {
            "$type": "Keyword",
            "value": "themeisle39"
          },
          {
            "$type": "Keyword",
            "value": "themeisle40"
          },
          {
            "$type": "Keyword",
            "value": "themeisle41"
          },
          {
            "$type": "Keyword",
            "value": "themeisle42"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ThemeisleTypeAttribute1",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "themeisle43"
          },
          {
            "$type": "Keyword",
            "value": "themeisle44"
          },
          {
            "$type": "Keyword",
            "value": "themeisle45"
          },
          {
            "$type": "Keyword",
            "value": "themeisle46"
          },
          {
            "$type": "Keyword",
            "value": "themeisle47"
          },
          {
            "$type": "Keyword",
            "value": "themeisle48"
          },
          {
            "$type": "Keyword",
            "value": "themeisle49"
          },
          {
            "$type": "Keyword",
            "value": "themeisle50"
          },
          {
            "$type": "Keyword",
            "value": "themeisle51"
          },
          {
            "$type": "Keyword",
            "value": "themeisle52"
          },
          {
            "$type": "Keyword",
            "value": "themeisle53"
          },
          {
            "$type": "Keyword",
            "value": "themeisle54"
          },
          {
            "$type": "Keyword",
            "value": "themeisle55"
          },
          {
            "$type": "Keyword",
            "value": "themeisle56"
          },
          {
            "$type": "Keyword",
            "value": "themeisle57"
          },
          {
            "$type": "Keyword",
            "value": "themeisle58"
          },
          {
            "$type": "Keyword",
            "value": "themeisle59"
          },
          {
            "$type": "Keyword",
            "value": "themeisle60"
          },
          {
            "$type": "Keyword",
            "value": "themeisle61"
          },
          {
            "$type": "Keyword",
            "value": "themeisle62"
          },
          {
            "$type": "Keyword",
            "value": "themeisle63"
          },
          {
            "$type": "Keyword",
            "value": "themeisle64"
          },
          {
            "$type": "Keyword",
            "value": "themeisle65"
          },
          {
            "$type": "Keyword",
            "value": "themeisle66"
          },
          {
            "$type": "Keyword",
            "value": "themeisle67"
          },
          {
            "$type": "Keyword",
            "value": "themeisle68"
          },
          {
            "$type": "Keyword",
            "value": "themeisle69"
          },
          {
            "$type": "Keyword",
            "value": "themeisle70"
          },
          {
            "$type": "Keyword",
            "value": "themeisle71"
          },
          {
            "$type": "Keyword",
            "value": "themeisle72"
          },
          {
            "$type": "Keyword",
            "value": "themeisle73"
          },
          {
            "$type": "Keyword",
            "value": "themeisle74"
          },
          {
            "$type": "Keyword",
            "value": "themeisle75"
          },
          {
            "$type": "Keyword",
            "value": "themeisle76"
          },
          {
            "$type": "Keyword",
            "value": "themeisle77"
          },
          {
            "$type": "Keyword",
            "value": "themeisle78"
          },
          {
            "$type": "Keyword",
            "value": "themeisle79"
          },
          {
            "$type": "Keyword",
            "value": "themeisle80"
          },
          {
            "$type": "Keyword",
            "value": "themeisle81"
          },
          {
            "$type": "Keyword",
            "value": "themeisle82"
          },
          {
            "$type": "Keyword",
            "value": "themeisle83"
          },
          {
            "$type": "Keyword",
            "value": "themeisle84"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ThemeisleTypeAttribute2",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "themeisle85"
          },
          {
            "$type": "Keyword",
            "value": "themeisle86"
          },
          {
            "$type": "Keyword",
            "value": "themeisle87"
          },
          {
            "$type": "Keyword",
            "value": "themeisle88"
          },
          {
            "$type": "Keyword",
            "value": "themeisle89"
          },
          {
            "$type": "Keyword",
            "value": "themeisle90"
          },
          {
            "$type": "Keyword",
            "value": "themeisle91"
          },
          {
            "$type": "Keyword",
            "value": "themeisle92"
          },
          {
            "$type": "Keyword",
            "value": "themeisle93"
          },
          {
            "$type": "Keyword",
            "value": "themeisle94"
          },
          {
            "$type": "Keyword",
            "value": "themeisle95"
          },
          {
            "$type": "Keyword",
            "value": "themeisle96"
          },
          {
            "$type": "Keyword",
            "value": "themeisle97"
          },
          {
            "$type": "Keyword",
            "value": "themeisle98"
          },
          {
            "$type": "Keyword",
            "value": "themeisle99"
          },
          {
            "$type": "Keyword",
            "value": "themeisle100"
          },
          {
            "$type": "Keyword",
            "value": "themeisle101"
          },
          {
            "$type": "Keyword",
            "value": "themeisle102"
          },
          {
            "$type": "Keyword",
            "value": "themeisle103"
          },
          {
            "$type": "Keyword",
            "value": "themeisle104"
          },
          {
            "$type": "Keyword",
            "value": "themeisle105"
          },
          {
            "$type": "Keyword",
            "value": "themeisle106"
          },
          {
            "$type": "Keyword",
            "value": "themeisle107"
          },
          {
            "$type": "Keyword",
            "value": "themeisle108"
          },
          {
            "$type": "Keyword",
            "value": "themeisle109"
          },
          {
            "$type": "Keyword",
            "value": "themeisle110"
          },
          {
            "$type": "Keyword",
            "value": "themeisle111"
          },
          {
            "$type": "Keyword",
            "value": "themeisle112"
          },
          {
            "$type": "Keyword",
            "value": "themeisle113"
          },
          {
            "$type": "Keyword",
            "value": "themeisle114"
          },
          {
            "$type": "Keyword",
            "value": "themeisle115"
          },
          {
            "$type": "Keyword",
            "value": "themeisle116"
          },
          {
            "$type": "Keyword",
            "value": "themeisle117"
          },
          {
            "$type": "Keyword",
            "value": "themeisle118"
          },
          {
            "$type": "Keyword",
            "value": "themeisle119"
          },
          {
            "$type": "Keyword",
            "value": "themeisle120"
          },
          {
            "$type": "Keyword",
            "value": "themeisle121"
          },
          {
            "$type": "Keyword",
            "value": "themeisle122"
          },
          {
            "$type": "Keyword",
            "value": "themeisle123"
          },
          {
            "$type": "Keyword",
            "value": "themeisle124"
          },
          {
            "$type": "Keyword",
            "value": "themeisle125"
          },
          {
            "$type": "Keyword",
            "value": "themeisle126"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ThemeisleTypeAttribute3",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "themeisle127"
          },
          {
            "$type": "Keyword",
            "value": "themeisle128"
          },
          {
            "$type": "Keyword",
            "value": "themeisle129"
          },
          {
            "$type": "Keyword",
            "value": "themeisle130"
          },
          {
            "$type": "Keyword",
            "value": "themeisle131"
          },
          {
            "$type": "Keyword",
            "value": "themeisle132"
          },
          {
            "$type": "Keyword",
            "value": "themeisle133"
          },
          {
            "$type": "Keyword",
            "value": "themeisle134"
          },
          {
            "$type": "Keyword",
            "value": "themeisle135"
          },
          {
            "$type": "Keyword",
            "value": "themeisle136"
          },
          {
            "$type": "Keyword",
            "value": "themeisle137"
          },
          {
            "$type": "Keyword",
            "value": "themeisle138"
          },
          {
            "$type": "Keyword",
            "value": "themeisle139"
          },
          {
            "$type": "Keyword",
            "value": "themeisle140"
          },
          {
            "$type": "Keyword",
            "value": "themeisle141"
          },
          {
            "$type": "Keyword",
            "value": "themeisle142"
          },
          {
            "$type": "Keyword",
            "value": "themeisle143"
          },
          {
            "$type": "Keyword",
            "value": "themeisle144"
          },
          {
            "$type": "Keyword",
            "value": "themeisle145"
          },
          {
            "$type": "Keyword",
            "value": "themeisle146"
          },
          {
            "$type": "Keyword",
            "value": "themeisle147"
          },
          {
            "$type": "Keyword",
            "value": "themeisle148"
          },
          {
            "$type": "Keyword",
            "value": "themeisle149"
          },
          {
            "$type": "Keyword",
            "value": "themeisle150"
          },
          {
            "$type": "Keyword",
            "value": "themeisle151"
          },
          {
            "$type": "Keyword",
            "value": "themeisle152"
          },
          {
            "$type": "Keyword",
            "value": "themeisle153"
          },
          {
            "$type": "Keyword",
            "value": "themeisle154"
          },
          {
            "$type": "Keyword",
            "value": "themeisle155"
          },
          {
            "$type": "Keyword",
            "value": "themeisle156"
          },
          {
            "$type": "Keyword",
            "value": "themeisle157"
          },
          {
            "$type": "Keyword",
            "value": "themeisle158"
          },
          {
            "$type": "Keyword",
            "value": "themeisle159"
          },
          {
            "$type": "Keyword",
            "value": "themeisle160"
          },
          {
            "$type": "Keyword",
            "value": "themeisle161"
          },
          {
            "$type": "Keyword",
            "value": "themeisle162"
          },
          {
            "$type": "Keyword",
            "value": "themeisle163"
          },
          {
            "$type": "Keyword",
            "value": "themeisle164"
          },
          {
            "$type": "Keyword",
            "value": "themeisle165"
          },
          {
            "$type": "Keyword",
            "value": "themeisle166"
          },
          {
            "$type": "Keyword",
            "value": "themeisle167"
          },
          {
            "$type": "Keyword",
            "value": "themeisle168"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ThemeisleTypeAttribute4",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "themeisle169"
          },
          {
            "$type": "Keyword",
            "value": "themeisle170"
          },
          {
            "$type": "Keyword",
            "value": "themeisle171"
          },
          {
            "$type": "Keyword",
            "value": "themeisle172"
          },
          {
            "$type": "Keyword",
            "value": "themeisle173"
          },
          {
            "$type": "Keyword",
            "value": "themeisle174"
          },
          {
            "$type": "Keyword",
            "value": "themeisle175"
          },
          {
            "$type": "Keyword",
            "value": "themeisle176"
          },
          {
            "$type": "Keyword",
            "value": "themeisle177"
          },
          {
            "$type": "Keyword",
            "value": "themeisle178"
          },
          {
            "$type": "Keyword",
            "value": "themeisle179"
          },
          {
            "$type": "Keyword",
            "value": "themeisle180"
          },
          {
            "$type": "Keyword",
            "value": "themeisle181"
          },
          {
            "$type": "Keyword",
            "value": "themeisle182"
          },
          {
            "$type": "Keyword",
            "value": "themeisle183"
          },
          {
            "$type": "Keyword",
            "value": "themeisle184"
          },
          {
            "$type": "Keyword",
            "value": "themeisle185"
          },
          {
            "$type": "Keyword",
            "value": "themeisle186"
          },
          {
            "$type": "Keyword",
            "value": "themeisle187"
          },
          {
            "$type": "Keyword",
            "value": "themeisle188"
          },
          {
            "$type": "Keyword",
            "value": "themeisle189"
          },
          {
            "$type": "Keyword",
            "value": "themeisle190"
          },
          {
            "$type": "Keyword",
            "value": "themeisle191"
          },
          {
            "$type": "Keyword",
            "value": "themeisle192"
          },
          {
            "$type": "Keyword",
            "value": "themeisle193"
          },
          {
            "$type": "Keyword",
            "value": "themeisle194"
          },
          {
            "$type": "Keyword",
            "value": "themeisle195"
          },
          {
            "$type": "Keyword",
            "value": "themeisle196"
          },
          {
            "$type": "Keyword",
            "value": "themeisle197"
          },
          {
            "$type": "Keyword",
            "value": "themeisle198"
          },
          {
            "$type": "Keyword",
            "value": "themeisle199"
          },
          {
            "$type": "Keyword",
            "value": "themeisle200"
          },
          {
            "$type": "Keyword",
            "value": "themeisle201"
          },
          {
            "$type": "Keyword",
            "value": "themeisle202"
          },
          {
            "$type": "Keyword",
            "value": "themeisle203"
          },
          {
            "$type": "Keyword",
            "value": "themeisle204"
          },
          {
            "$type": "Keyword",
            "value": "themeisle205"
          },
          {
            "$type": "Keyword",
            "value": "themeisle206"
          },
          {
            "$type": "Keyword",
            "value": "themeisle207"
          },
          {
            "$type": "Keyword",
            "value": "themeisle208"
          },
          {
            "$type": "Keyword",
            "value": "themeisle209"
          },
          {
            "$type": "Keyword",
            "value": "themeisle210"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ThemeisleTypeAttribute5",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "themeisle211"
          },
          {
            "$type": "Keyword",
            "value": "themeisle212"
          },
          {
            "$type": "Keyword",
            "value": "themeisle213"
          },
          {
            "$type": "Keyword",
            "value": "themeisle214"
          },
          {
            "$type": "Keyword",
            "value": "themeisle215"
          },
          {
            "$type": "Keyword",
            "value": "themeisle216"
          },
          {
            "$type": "Keyword",
            "value": "themeisle217"
          },
          {
            "$type": "Keyword",
            "value": "themeisle218"
          },
          {
            "$type": "Keyword",
            "value": "themeisle219"
          },
          {
            "$type": "Keyword",
            "value": "themeisle220"
          },
          {
            "$type": "Keyword",
            "value": "themeisle221"
          },
          {
            "$type": "Keyword",
            "value": "themeisle222"
          },
          {
            "$type": "Keyword",
            "value": "themeisle223"
          },
          {
            "$type": "Keyword",
            "value": "themeisle224"
          },
          {
            "$type": "Keyword",
            "value": "themeisle225"
          },
          {
            "$type": "Keyword",
            "value": "themeisle226"
          },
          {
            "$type": "Keyword",
            "value": "themeisle227"
          },
          {
            "$type": "Keyword",
            "value": "themeisle228"
          },
          {
            "$type": "Keyword",
            "value": "themeisle229"
          },
          {
            "$type": "Keyword",
            "value": "themeisle230"
          },
          {
            "$type": "Keyword",
            "value": "themeisle231"
          },
          {
            "$type": "Keyword",
            "value": "themeisle232"
          },
          {
            "$type": "Keyword",
            "value": "themeisle233"
          },
          {
            "$type": "Keyword",
            "value": "themeisle234"
          },
          {
            "$type": "Keyword",
            "value": "themeisle235"
          },
          {
            "$type": "Keyword",
            "value": "themeisle236"
          },
          {
            "$type": "Keyword",
            "value": "themeisle237"
          },
          {
            "$type": "Keyword",
            "value": "themeisle238"
          },
          {
            "$type": "Keyword",
            "value": "themeisle239"
          },
          {
            "$type": "Keyword",
            "value": "themeisle240"
          },
          {
            "$type": "Keyword",
            "value": "themeisle241"
          },
          {
            "$type": "Keyword",
            "value": "themeisle242"
          },
          {
            "$type": "Keyword",
            "value": "themeisle243"
          },
          {
            "$type": "Keyword",
            "value": "themeisle244"
          },
          {
            "$type": "Keyword",
            "value": "themeisle245"
          },
          {
            "$type": "Keyword",
            "value": "themeisle246"
          },
          {
            "$type": "Keyword",
            "value": "themeisle247"
          },
          {
            "$type": "Keyword",
            "value": "themeisle248"
          },
          {
            "$type": "Keyword",
            "value": "themeisle249"
          },
          {
            "$type": "Keyword",
            "value": "themeisle250"
          },
          {
            "$type": "Keyword",
            "value": "themeisle251"
          },
          {
            "$type": "Keyword",
            "value": "themeisle252"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ThemeisleTypeAttribute6",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "themeisle253"
          },
          {
            "$type": "Keyword",
            "value": "themeisle254"
          },
          {
            "$type": "Keyword",
            "value": "themeisle255"
          },
          {
            "$type": "Keyword",
            "value": "themeisle256"
          },
          {
            "$type": "Keyword",
            "value": "themeisle257"
          },
          {
            "$type": "Keyword",
            "value": "themeisle258"
          },
          {
            "$type": "Keyword",
            "value": "themeisle259"
          },
          {
            "$type": "Keyword",
            "value": "themeisle260"
          },
          {
            "$type": "Keyword",
            "value": "themeisle261"
          },
          {
            "$type": "Keyword",
            "value": "themeisle262"
          },
          {
            "$type": "Keyword",
            "value": "themeisle263"
          },
          {
            "$type": "Keyword",
            "value": "themeisle264"
          },
          {
            "$type": "Keyword",
            "value": "themeisle265"
          },
          {
            "$type": "Keyword",
            "value": "themeisle266"
          },
          {
            "$type": "Keyword",
            "value": "themeisle267"
          },
          {
            "$type": "Keyword",
            "value": "themeisle268"
          },
          {
            "$type": "Keyword",
            "value": "themeisle269"
          },
          {
            "$type": "Keyword",
            "value": "themeisle270"
          },
          {
            "$type": "Keyword",
            "value": "themeisle271"
          },
          {
            "$type": "Keyword",
            "value": "themeisle272"
          },
          {
            "$type": "Keyword",
            "value": "themeisle273"
          },
          {
            "$type": "Keyword",
            "value": "themeisle274"
          },
          {
            "$type": "Keyword",
            "value": "themeisle275"
          },
          {
            "$type": "Keyword",
            "value": "themeisle276"
          },
          {
            "$type": "Keyword",
            "value": "themeisle277"
          },
          {
            "$type": "Keyword",
            "value": "themeisle278"
          },
          {
            "$type": "Keyword",
            "value": "themeisle279"
          },
          {
            "$type": "Keyword",
            "value": "themeisle280"
          },
          {
            "$type": "Keyword",
            "value": "themeisle281"
          },
          {
            "$type": "Keyword",
            "value": "themeisle282"
          },
          {
            "$type": "Keyword",
            "value": "themeisle283"
          },
          {
            "$type": "Keyword",
            "value": "themeisle284"
          },
          {
            "$type": "Keyword",
            "value": "themeisle285"
          },
          {
            "$type": "Keyword",
            "value": "themeisle286"
          },
          {
            "$type": "Keyword",
            "value": "themeisle287"
          },
          {
            "$type": "Keyword",
            "value": "themeisle288"
          },
          {
            "$type": "Keyword",
            "value": "themeisle289"
          },
          {
            "$type": "Keyword",
            "value": "themeisle290"
          },
          {
            "$type": "Keyword",
            "value": "themeisle291"
          },
          {
            "$type": "Keyword",
            "value": "themeisle292"
          },
          {
            "$type": "Keyword",
            "value": "themeisle293"
          },
          {
            "$type": "Keyword",
            "value": "themeisle294"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ThemeisleTypeAttribute7",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "themeisle295"
          },
          {
            "$type": "Keyword",
            "value": "themeisle296"
          },
          {
            "$type": "Keyword",
            "value": "themeisle297"
          },
          {
            "$type": "Keyword",
            "value": "themeisle298"
          },
          {
            "$type": "Keyword",
            "value": "themeisle299"
          },
          {
            "$type": "Keyword",
            "value": "themeisle300"
          },
          {
            "$type": "Keyword",
            "value": "themeisle301"
          },
          {
            "$type": "Keyword",
            "value": "themeisle302"
          },
          {
            "$type": "Keyword",
            "value": "themeisle303"
          },
          {
            "$type": "Keyword",
            "value": "themeisle304"
          },
          {
            "$type": "Keyword",
            "value": "themeisle305"
          },
          {
            "$type": "Keyword",
            "value": "themeisle306"
          },
          {
            "$type": "Keyword",
            "value": "themeisle307"
          },
          {
            "$type": "Keyword",
            "value": "themeisle308"
          },
          {
            "$type": "Keyword",
            "value": "themeisle309"
          },
          {
            "$type": "Keyword",
            "value": "themeisle310"
          },
          {
            "$type": "Keyword",
            "value": "themeisle311"
          },
          {
            "$type": "Keyword",
            "value": "themeisle312"
          },
          {
            "$type": "Keyword",
            "value": "themeisle313"
          },
          {
            "$type": "Keyword",
            "value": "themeisle314"
          },
          {
            "$type": "Keyword",
            "value": "themeisle315"
          },
          {
            "$type": "Keyword",
            "value": "themeisle316"
          },
          {
            "$type": "Keyword",
            "value": "themeisle317"
          },
          {
            "$type": "Keyword",
            "value": "themeisle318"
          },
          {
            "$type": "Keyword",
            "value": "themeisle319"
          },
          {
            "$type": "Keyword",
            "value": "themeisle320"
          },
          {
            "$type": "Keyword",
            "value": "themeisle321"
          },
          {
            "$type": "Keyword",
            "value": "themeisle322"
          },
          {
            "$type": "Keyword",
            "value": "themeisle323"
          },
          {
            "$type": "Keyword",
            "value": "themeisle324"
          },
          {
            "$type": "Keyword",
            "value": "themeisle325"
          },
          {
            "$type": "Keyword",
            "value": "themeisle326"
          },
          {
            "$type": "Keyword",
            "value": "themeisle327"
          },
          {
            "$type": "Keyword",
            "value": "themeisle328"
          },
          {
            "$type": "Keyword",
            "value": "themeisle329"
          },
          {
            "$type": "Keyword",
            "value": "themeisle330"
          },
          {
            "$type": "Keyword",
            "value": "themeisle331"
          },
          {
            "$type": "Keyword",
            "value": "themeisle332"
          },
          {
            "$type": "Keyword",
            "value": "themeisle333"
          },
          {
            "$type": "Keyword",
            "value": "themeisle334"
          },
          {
            "$type": "Keyword",
            "value": "themeisle335"
          },
          {
            "$type": "Keyword",
            "value": "themeisle336"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ThemeisleTypeAttribute8",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "themeisle337"
          },
          {
            "$type": "Keyword",
            "value": "themeisle338"
          },
          {
            "$type": "Keyword",
            "value": "themeisle339"
          },
          {
            "$type": "Keyword",
            "value": "themeisle340"
          },
          {
            "$type": "Keyword",
            "value": "themeisle341"
          },
          {
            "$type": "Keyword",
            "value": "themeisle342"
          },
          {
            "$type": "Keyword",
            "value": "themeisle343"
          },
          {
            "$type": "Keyword",
            "value": "themeisle344"
          },
          {
            "$type": "Keyword",
            "value": "themeisle345"
          },
          {
            "$type": "Keyword",
            "value": "themeisle346"
          },
          {
            "$type": "Keyword",
            "value": "themeisle347"
          },
          {
            "$type": "Keyword",
            "value": "themeisle348"
          },
          {
            "$type": "Keyword",
            "value": "themeisle349"
          },
          {
            "$type": "Keyword",
            "value": "themeisle350"
          },
          {
            "$type": "Keyword",
            "value": "themeisle351"
          },
          {
            "$type": "Keyword",
            "value": "themeisle352"
          },
          {
            "$type": "Keyword",
            "value": "themeisle353"
          },
          {
            "$type": "Keyword",
            "value": "themeisle354"
          },
          {
            "$type": "Keyword",
            "value": "themeisle355"
          },
          {
            "$type": "Keyword",
            "value": "themeisle356"
          },
          {
            "$type": "Keyword",
            "value": "themeisle357"
          },
          {
            "$type": "Keyword",
            "value": "themeisle358"
          },
          {
            "$type": "Keyword",
            "value": "themeisle359"
          },
          {
            "$type": "Keyword",
            "value": "themeisle360"
          },
          {
            "$type": "Keyword",
            "value": "themeisle361"
          },
          {
            "$type": "Keyword",
            "value": "themeisle362"
          },
          {
            "$type": "Keyword",
            "value": "themeisle363"
          },
          {
            "$type": "Keyword",
            "value": "themeisle364"
          },
          {
            "$type": "Keyword",
            "value": "themeisle365"
          },
          {
            "$type": "Keyword",
            "value": "themeisle366"
          },
          {
            "$type": "Keyword",
            "value": "themeisle367"
          },
          {
            "$type": "Keyword",
            "value": "themeisle368"
          },
          {
            "$type": "Keyword",
            "value": "themeisle369"
          },
          {
            "$type": "Keyword",
            "value": "themeisle370"
          },
          {
            "$type": "Keyword",
            "value": "themeisle371"
          },
          {
            "$type": "Keyword",
            "value": "themeisle372"
          },
          {
            "$type": "Keyword",
            "value": "themeisle373"
          },
          {
            "$type": "Keyword",
            "value": "themeisle374"
          },
          {
            "$type": "Keyword",
            "value": "themeisle375"
          },
          {
            "$type": "Keyword",
            "value": "themeisle376"
          },
          {
            "$type": "Keyword",
            "value": "themeisle377"
          },
          {
            "$type": "Keyword",
            "value": "themeisle378"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ThemeisleTypeAttribute9",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "themeisle379"
          },
          {
            "$type": "Keyword",
            "value": "themeisle380"
          },
          {
            "$type": "Keyword",
            "value": "themeisle381"
          },
          {
            "$type": "Keyword",
            "value": "themeisle382"
          },
          {
            "$type": "Keyword",
            "value": "themeisle383"
          },
          {
            "$type": "Keyword",
            "value": "themeisle384"
          },
          {
            "$type": "Keyword",
            "value": "themeisle385"
          },
          {
            "$type": "Keyword",
            "value": "themeisle386"
          },
          {
            "$type": "Keyword",
            "value": "themeisle387"
          },
          {
            "$type": "Keyword",
            "value": "themeisle388"
          },
          {
            "$type": "Keyword",
            "value": "themeisle389"
          },
          {
            "$type": "Keyword",
            "value": "themeisle390"
          },
          {
            "$type": "Keyword",
            "value": "themeisle391"
          },
          {
            "$type": "Keyword",
            "value": "themeisle392"
          },
          {
            "$type": "Keyword",
            "value": "themeisle393"
          },
          {
            "$type": "Keyword",
            "value": "themeisle394"
          },
          {
            "$type": "Keyword",
            "value": "themeisle395"
          },
          {
            "$type": "Keyword",
            "value": "themeisle396"
          },
          {
            "$type": "Keyword",
            "value": "themeisle397"
          },
          {
            "$type": "Keyword",
            "value": "themeisle398"
          },
          {
            "$type": "Keyword",
            "value": "themeisle399"
          },
          {
            "$type": "Keyword",
            "value": "themeisle400"
          },
          {
            "$type": "Keyword",
            "value": "themeisle401"
          },
          {
            "$type": "Keyword",
            "value": "themeisle402"
          },
          {
            "$type": "Keyword",
            "value": "themeisle403"
          },
          {
            "$type": "Keyword",
            "value": "themeisle404"
          },
          {
            "$type": "Keyword",
            "value": "themeisle405"
          },
          {
            "$type": "Keyword",
            "value": "themeisle406"
          },
          {
            "$type": "Keyword",
            "value": "themeisle407"
          },
          {
            "$type": "Keyword",
            "value": "themeisle408"
          },
          {
            "$type": "Keyword",
            "value": "themeisle409"
          },
          {
            "$type": "Keyword",
            "value": "themeisle410"
          },
          {
            "$type": "Keyword",
            "value": "themeisle411"
          },
          {
            "$type": "Keyword",
            "value": "themeisle412"
          },
          {
            "$type": "Keyword",
            "value": "themeisle413"
          },
          {
            "$type": "Keyword",
            "value": "themeisle414"
          },
          {
            "$type": "Keyword",
            "value": "themeisle415"
          },
          {
            "$type": "Keyword",
            "value": "themeisle416"
          },
          {
            "$type": "Keyword",
            "value": "themeisle417"
          },
          {
            "$type": "Keyword",
            "value": "themeisle418"
          },
          {
            "$type": "Keyword",
            "value": "themeisle419"
          },
          {
            "$type": "Keyword",
            "value": "themeisle420"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ThemeisleTypeAttribute10",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "themeisle421"
          },
          {
            "$type": "Keyword",
            "value": "themeisle422"
          },
          {
            "$type": "Keyword",
            "value": "themeisle423"
          },
          {
            "$type": "Keyword",
            "value": "themeisle424"
          },
          {
            "$type": "Keyword",
            "value": "themeisle425"
          },
          {
            "$type": "Keyword",
            "value": "themeisle426"
          },
          {
            "$type": "Keyword",
            "value": "themeisle427"
          },
          {
            "$type": "Keyword",
            "value": "themeisle428"
          },
          {
            "$type": "Keyword",
            "value": "themeisle429"
          },
          {
            "$type": "Keyword",
            "value": "themeisle430"
          },
          {
            "$type": "Keyword",
            "value": "themeisle431"
          },
          {
            "$type": "Keyword",
            "value": "themeisle432"
          },
          {
            "$type": "Keyword",
            "value": "themeisle433"
          },
          {
            "$type": "Keyword",
            "value": "themeisle434"
          },
          {
            "$type": "Keyword",
            "value": "themeisle435"
          },
          {
            "$type": "Keyword",
            "value": "themeisle436"
          },
          {
            "$type": "Keyword",
            "value": "themeisle437"
          },
          {
            "$type": "Keyword",
            "value": "themeisle438"
          },
          {
            "$type": "Keyword",
            "value": "themeisle439"
          },
          {
            "$type": "Keyword",
            "value": "themeisle440"
          },
          {
            "$type": "Keyword",
            "value": "themeisle441"
          },
          {
            "$type": "Keyword",
            "value": "themeisle442"
          },
          {
            "$type": "Keyword",
            "value": "themeisle443"
          },
          {
            "$type": "Keyword",
            "value": "themeisle444"
          },
          {
            "$type": "Keyword",
            "value": "themeisle445"
          },
          {
            "$type": "Keyword",
            "value": "themeisle446"
          },
          {
            "$type": "Keyword",
            "value": "themeisle447"
          },
          {
            "$type": "Keyword",
            "value": "themeisle448"
          },
          {
            "$type": "Keyword",
            "value": "themeisle449"
          },
          {
            "$type": "Keyword",
            "value": "themeisle450"
          },
          {
            "$type": "Keyword",
            "value": "themeisle451"
          },
          {
            "$type": "Keyword",
            "value": "themeisle452"
          },
          {
            "$type": "Keyword",
            "value": "themeisle453"
          },
          {
            "$type": "Keyword",
            "value": "themeisle454"
          },
          {
            "$type": "Keyword",
            "value": "themeisle455"
          },
          {
            "$type": "Keyword",
            "value": "themeisle456"
          },
          {
            "$type": "Keyword",
            "value": "themeisle457"
          },
          {
            "$type": "Keyword",
            "value": "themeisle458"
          },
          {
            "$type": "Keyword",
            "value": "themeisle459"
          },
          {
            "$type": "Keyword",
            "value": "themeisle460"
          },
          {
            "$type": "Keyword",
            "value": "themeisle461"
          },
          {
            "$type": "Keyword",
            "value": "themeisle462"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ThemeisleIconTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "icon"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "icon",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@76"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@77"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@78"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@79"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@80"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@81"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@82"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@83"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@84"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@85"
                  },
                  "arguments": []
                }
              ]
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ThemeisleTagAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@86"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ThemeisleTag",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "<Themeisle"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@87"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "/>"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UndrawTypeAttribute0",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "undrawPhoneCall"
          },
          {
            "$type": "Keyword",
            "value": "undrawDesigner"
          },
          {
            "$type": "Keyword",
            "value": "undrawVoiceMessages"
          },
          {
            "$type": "Keyword",
            "value": "undrawBooks"
          },
          {
            "$type": "Keyword",
            "value": "undrawPhotographer"
          },
          {
            "$type": "Keyword",
            "value": "undrawBuildingAWebsite"
          },
          {
            "$type": "Keyword",
            "value": "undrawAlgorithmExecution"
          },
          {
            "$type": "Keyword",
            "value": "undrawWorkFriends"
          },
          {
            "$type": "Keyword",
            "value": "undrawMindMap"
          },
          {
            "$type": "Keyword",
            "value": "undrawServerError"
          },
          {
            "$type": "Keyword",
            "value": "undrawCompleteForm"
          },
          {
            "$type": "Keyword",
            "value": "undrawAvatarTraveler"
          },
          {
            "$type": "Keyword",
            "value": "undrawApprovedWireframe"
          },
          {
            "$type": "Keyword",
            "value": "undrawProcessing"
          },
          {
            "$type": "Keyword",
            "value": "undrawPrivateFiles"
          },
          {
            "$type": "Keyword",
            "value": "undrawConfirmed"
          },
          {
            "$type": "Keyword",
            "value": "undrawCreativeWoman"
          },
          {
            "$type": "Keyword",
            "value": "undrawCreditCardPayments"
          },
          {
            "$type": "Keyword",
            "value": "undrawBentoGrid"
          },
          {
            "$type": "Keyword",
            "value": "undrawYoungManAvatar"
          },
          {
            "$type": "Keyword",
            "value": "undrawLogIn"
          },
          {
            "$type": "Keyword",
            "value": "undrawCalendar"
          },
          {
            "$type": "Keyword",
            "value": "undrawGifts"
          },
          {
            "$type": "Keyword",
            "value": "undrawCorrectAnswer"
          },
          {
            "$type": "Keyword",
            "value": "undrawPresenting"
          },
          {
            "$type": "Keyword",
            "value": "undrawVibeCoding"
          },
          {
            "$type": "Keyword",
            "value": "undrawLogOut"
          },
          {
            "$type": "Keyword",
            "value": "undrawOrganizingData"
          },
          {
            "$type": "Keyword",
            "value": "undrawVersionControl"
          },
          {
            "$type": "Keyword",
            "value": "undrawOrderFlowers"
          },
          {
            "$type": "Keyword",
            "value": "undrawProfessionalWomanAvatar"
          },
          {
            "$type": "Keyword",
            "value": "undrawFinanceGuyAvatar"
          },
          {
            "$type": "Keyword",
            "value": "undrawPreparation"
          },
          {
            "$type": "Keyword",
            "value": "undrawComputerFiles"
          },
          {
            "$type": "Keyword",
            "value": "undrawRelaxMode"
          },
          {
            "$type": "Keyword",
            "value": "undrawUnreadMessages"
          },
          {
            "$type": "Keyword",
            "value": "undrawFootballWithDad"
          },
          {
            "$type": "Keyword",
            "value": "undrawInTheOffice"
          },
          {
            "$type": "Keyword",
            "value": "undrawWorkingTogether"
          },
          {
            "$type": "Keyword",
            "value": "undrawSegmentAnalysis"
          },
          {
            "$type": "Keyword",
            "value": "undrawSuccessFactors"
          },
          {
            "$type": "Keyword",
            "value": "undrawPushNotifications"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UndrawTypeAttribute1",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "undrawAvatars"
          },
          {
            "$type": "Keyword",
            "value": "undrawMobileAnalytics"
          },
          {
            "$type": "Keyword",
            "value": "undrawGoingUpwards"
          },
          {
            "$type": "Keyword",
            "value": "undrawNewMessage"
          },
          {
            "$type": "Keyword",
            "value": "undrawDocumentAnalysis"
          },
          {
            "$type": "Keyword",
            "value": "undrawBikeRide"
          },
          {
            "$type": "Keyword",
            "value": "undrawTakingSelfie"
          },
          {
            "$type": "Keyword",
            "value": "undrawMultipleChoice"
          },
          {
            "$type": "Keyword",
            "value": "undrawShipIt"
          },
          {
            "$type": "Keyword",
            "value": "undrawEffortlessLove"
          },
          {
            "$type": "Keyword",
            "value": "undrawInLove"
          },
          {
            "$type": "Keyword",
            "value": "undrawAtTheAirport"
          },
          {
            "$type": "Keyword",
            "value": "undrawAttachedFile"
          },
          {
            "$type": "Keyword",
            "value": "undrawMyWorkspace"
          },
          {
            "$type": "Keyword",
            "value": "undrawAICodeGeneration"
          },
          {
            "$type": "Keyword",
            "value": "undrawTravelers"
          },
          {
            "$type": "Keyword",
            "value": "undrawToTheMoon"
          },
          {
            "$type": "Keyword",
            "value": "undrawGamingController"
          },
          {
            "$type": "Keyword",
            "value": "undrawWorkingOut"
          },
          {
            "$type": "Keyword",
            "value": "undrawTowing"
          },
          {
            "$type": "Keyword",
            "value": "undrawInvest"
          },
          {
            "$type": "Keyword",
            "value": "undrawDataTrends"
          },
          {
            "$type": "Keyword",
            "value": "undrawUploading"
          },
          {
            "$type": "Keyword",
            "value": "undrawDevProductivity"
          },
          {
            "$type": "Keyword",
            "value": "undrawFileSearch"
          },
          {
            "$type": "Keyword",
            "value": "undrawYoga"
          },
          {
            "$type": "Keyword",
            "value": "undrawSettings"
          },
          {
            "$type": "Keyword",
            "value": "undrawGoldenGateBridge"
          },
          {
            "$type": "Keyword",
            "value": "undrawOnlineShopping"
          },
          {
            "$type": "Keyword",
            "value": "undrawOnlineCollaboration"
          },
          {
            "$type": "Keyword",
            "value": "undrawHello"
          },
          {
            "$type": "Keyword",
            "value": "undrawHiking"
          },
          {
            "$type": "Keyword",
            "value": "undrawWritingDownIdeas"
          },
          {
            "$type": "Keyword",
            "value": "undrawPieChart"
          },
          {
            "$type": "Keyword",
            "value": "undrawWithLove"
          },
          {
            "$type": "Keyword",
            "value": "undrawPairProgramming"
          },
          {
            "$type": "Keyword",
            "value": "undrawCasualCall"
          },
          {
            "$type": "Keyword",
            "value": "undrawRightDirection"
          },
          {
            "$type": "Keyword",
            "value": "undrawModernDesign"
          },
          {
            "$type": "Keyword",
            "value": "undrawDesignFeedback"
          },
          {
            "$type": "Keyword",
            "value": "undrawLocationTracking"
          },
          {
            "$type": "Keyword",
            "value": "undrawBookmarks"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UndrawTypeAttribute2",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "undrawFinance"
          },
          {
            "$type": "Keyword",
            "value": "undrawLandscapeMode"
          },
          {
            "$type": "Keyword",
            "value": "undrawMyCurrentLocation"
          },
          {
            "$type": "Keyword",
            "value": "undrawPlaylist"
          },
          {
            "$type": "Keyword",
            "value": "undrawPrioritise"
          },
          {
            "$type": "Keyword",
            "value": "undrawMyUniverse"
          },
          {
            "$type": "Keyword",
            "value": "undrawProgressIndicator"
          },
          {
            "$type": "Keyword",
            "value": "undrawTraveling"
          },
          {
            "$type": "Keyword",
            "value": "undrawBarista"
          },
          {
            "$type": "Keyword",
            "value": "undrawOnlinePosts"
          },
          {
            "$type": "Keyword",
            "value": "undrawCoding"
          },
          {
            "$type": "Keyword",
            "value": "undrawSelfie"
          },
          {
            "$type": "Keyword",
            "value": "undrawProgrammer"
          },
          {
            "$type": "Keyword",
            "value": "undrawAccessAccount"
          },
          {
            "$type": "Keyword",
            "value": "undrawBullMarket"
          },
          {
            "$type": "Keyword",
            "value": "undrawOurSolution"
          },
          {
            "$type": "Keyword",
            "value": "undrawPhotograph"
          },
          {
            "$type": "Keyword",
            "value": "undrawDigitalArtwork"
          },
          {
            "$type": "Keyword",
            "value": "undrawAthletesTraining"
          },
          {
            "$type": "Keyword",
            "value": "undrawRelaxedReading"
          },
          {
            "$type": "Keyword",
            "value": "undrawRoadSign"
          },
          {
            "$type": "Keyword",
            "value": "undrawFavoritePost"
          },
          {
            "$type": "Keyword",
            "value": "undrawDesign"
          },
          {
            "$type": "Keyword",
            "value": "undrawProfessor"
          },
          {
            "$type": "Keyword",
            "value": "undrawTreeSwing"
          },
          {
            "$type": "Keyword",
            "value": "undrawFoundingTeam"
          },
          {
            "$type": "Keyword",
            "value": "undrawMyWebsite"
          },
          {
            "$type": "Keyword",
            "value": "undrawPersonalGoals"
          },
          {
            "$type": "Keyword",
            "value": "undrawNewYear2025"
          },
          {
            "$type": "Keyword",
            "value": "undrawAccessDenied"
          },
          {
            "$type": "Keyword",
            "value": "undrawMobileSite"
          },
          {
            "$type": "Keyword",
            "value": "undrawDestination"
          },
          {
            "$type": "Keyword",
            "value": "undrawInTheZone"
          },
          {
            "$type": "Keyword",
            "value": "undrawPodcastListener"
          },
          {
            "$type": "Keyword",
            "value": "undrawGroceries"
          },
          {
            "$type": "Keyword",
            "value": "undrawTestimonials"
          },
          {
            "$type": "Keyword",
            "value": "undrawQuietStreet"
          },
          {
            "$type": "Keyword",
            "value": "undrawWellDone"
          },
          {
            "$type": "Keyword",
            "value": "undrawAIVoiceInterface"
          },
          {
            "$type": "Keyword",
            "value": "undrawTeamUp"
          },
          {
            "$type": "Keyword",
            "value": "undrawVideoTutorial"
          },
          {
            "$type": "Keyword",
            "value": "undrawElements"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UndrawTypeAttribute3",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "undrawLanding"
          },
          {
            "$type": "Keyword",
            "value": "undrawShoppingBags"
          },
          {
            "$type": "Keyword",
            "value": "undrawBlog"
          },
          {
            "$type": "Keyword",
            "value": "undrawSmartphone"
          },
          {
            "$type": "Keyword",
            "value": "undrawSocialPost"
          },
          {
            "$type": "Keyword",
            "value": "undrawComputerApps"
          },
          {
            "$type": "Keyword",
            "value": "undrawPost"
          },
          {
            "$type": "Keyword",
            "value": "undrawWalkingTogether"
          },
          {
            "$type": "Keyword",
            "value": "undrawPosts"
          },
          {
            "$type": "Keyword",
            "value": "undrawLikePost"
          },
          {
            "$type": "Keyword",
            "value": "undrawHappy"
          },
          {
            "$type": "Keyword",
            "value": "undrawReading"
          },
          {
            "$type": "Keyword",
            "value": "undrawVintage"
          },
          {
            "$type": "Keyword",
            "value": "undrawFlyingDrone"
          },
          {
            "$type": "Keyword",
            "value": "undrawExperienceDesign"
          },
          {
            "$type": "Keyword",
            "value": "undrawApplications"
          },
          {
            "$type": "Keyword",
            "value": "undrawWalking"
          },
          {
            "$type": "Keyword",
            "value": "undrawTakingPhoto"
          },
          {
            "$type": "Keyword",
            "value": "undrawChooseColor"
          },
          {
            "$type": "Keyword",
            "value": "undrawNotifications"
          },
          {
            "$type": "Keyword",
            "value": "undrawSwing"
          },
          {
            "$type": "Keyword",
            "value": "undrawVideoGames"
          },
          {
            "$type": "Keyword",
            "value": "undrawChatting"
          },
          {
            "$type": "Keyword",
            "value": "undrawMessaging"
          },
          {
            "$type": "Keyword",
            "value": "undrawWebsite"
          },
          {
            "$type": "Keyword",
            "value": "undrawOpenNotes"
          },
          {
            "$type": "Keyword",
            "value": "undrawFarming"
          },
          {
            "$type": "Keyword",
            "value": "undrawReadNotes"
          },
          {
            "$type": "Keyword",
            "value": "undrawWatchApp"
          },
          {
            "$type": "Keyword",
            "value": "undrawFavorite"
          },
          {
            "$type": "Keyword",
            "value": "undrawApplication"
          },
          {
            "$type": "Keyword",
            "value": "undrawVideographer"
          },
          {
            "$type": "Keyword",
            "value": "undrawAppsNotifications"
          },
          {
            "$type": "Keyword",
            "value": "undrawApps"
          },
          {
            "$type": "Keyword",
            "value": "undrawChooseCard"
          },
          {
            "$type": "Keyword",
            "value": "undrawLoveIt"
          },
          {
            "$type": "Keyword",
            "value": "undrawVideoCall"
          },
          {
            "$type": "Keyword",
            "value": "undrawSelectOption"
          },
          {
            "$type": "Keyword",
            "value": "undrawTeamEffort"
          },
          {
            "$type": "Keyword",
            "value": "undrawCompletionProgress"
          },
          {
            "$type": "Keyword",
            "value": "undrawBusinessman"
          },
          {
            "$type": "Keyword",
            "value": "undrawUsersPerMinute"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UndrawTypeAttribute4",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "undrawSelection"
          },
          {
            "$type": "Keyword",
            "value": "undrawFavouriteItem"
          },
          {
            "$type": "Keyword",
            "value": "undrawSignUp"
          },
          {
            "$type": "Keyword",
            "value": "undrawMonthlyUsers"
          },
          {
            "$type": "Keyword",
            "value": "undrawMobileProfile"
          },
          {
            "$type": "Keyword",
            "value": "undrawNotebook"
          },
          {
            "$type": "Keyword",
            "value": "undrawSelectedBox"
          },
          {
            "$type": "Keyword",
            "value": "undrawSearchEngines"
          },
          {
            "$type": "Keyword",
            "value": "undrawWatchNotification"
          },
          {
            "$type": "Keyword",
            "value": "undrawCompleted"
          },
          {
            "$type": "Keyword",
            "value": "undrawWalkingInRain"
          },
          {
            "$type": "Keyword",
            "value": "undrawMobileContent"
          },
          {
            "$type": "Keyword",
            "value": "undrawPlayingGolf"
          },
          {
            "$type": "Keyword",
            "value": "undrawCoffeeTime"
          },
          {
            "$type": "Keyword",
            "value": "undrawDrinkCoffee"
          },
          {
            "$type": "Keyword",
            "value": "undrawExpecting"
          },
          {
            "$type": "Keyword",
            "value": "undrawLandscapePhotographer"
          },
          {
            "$type": "Keyword",
            "value": "undrawPilates"
          },
          {
            "$type": "Keyword",
            "value": "undrawMobileSearch"
          },
          {
            "$type": "Keyword",
            "value": "undrawMindfulness"
          },
          {
            "$type": "Keyword",
            "value": "undrawAnalysis"
          },
          {
            "$type": "Keyword",
            "value": "undrawScientist"
          },
          {
            "$type": "Keyword",
            "value": "undrawHomeRun"
          },
          {
            "$type": "Keyword",
            "value": "undrawCat"
          },
          {
            "$type": "Keyword",
            "value": "undrawHealthyHabit"
          },
          {
            "$type": "Keyword",
            "value": "undrawSearchApp"
          },
          {
            "$type": "Keyword",
            "value": "undrawCooking"
          },
          {
            "$type": "Keyword",
            "value": "undrawFunMoments"
          },
          {
            "$type": "Keyword",
            "value": "undrawWoman"
          },
          {
            "$type": "Keyword",
            "value": "undrawDog"
          },
          {
            "$type": "Keyword",
            "value": "undrawGrandSlam"
          },
          {
            "$type": "Keyword",
            "value": "undrawLoveIsInTheAir"
          },
          {
            "$type": "Keyword",
            "value": "undrawDoctors"
          },
          {
            "$type": "Keyword",
            "value": "undrawElectricity"
          },
          {
            "$type": "Keyword",
            "value": "undrawCarRepair"
          },
          {
            "$type": "Keyword",
            "value": "undrawFemaleAvatar"
          },
          {
            "$type": "Keyword",
            "value": "undrawHappyNewYear"
          },
          {
            "$type": "Keyword",
            "value": "undrawMaleAvatar"
          },
          {
            "$type": "Keyword",
            "value": "undrawRunningWild"
          },
          {
            "$type": "Keyword",
            "value": "undrawSnowGames"
          },
          {
            "$type": "Keyword",
            "value": "undrawDecorateChristmasTree"
          },
          {
            "$type": "Keyword",
            "value": "undrawWinterSkating"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UndrawTypeAttribute5",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "undrawFingerprintLogin"
          },
          {
            "$type": "Keyword",
            "value": "undrawAppreciateIt"
          },
          {
            "$type": "Keyword",
            "value": "undrawBasketball"
          },
          {
            "$type": "Keyword",
            "value": "undrawNotFound"
          },
          {
            "$type": "Keyword",
            "value": "undrawBaby"
          },
          {
            "$type": "Keyword",
            "value": "undrawPicProfile"
          },
          {
            "$type": "Keyword",
            "value": "undrawProfilePic"
          },
          {
            "$type": "Keyword",
            "value": "undrawHalloween"
          },
          {
            "$type": "Keyword",
            "value": "undrawPumpkin"
          },
          {
            "$type": "Keyword",
            "value": "undrawPancakes"
          },
          {
            "$type": "Keyword",
            "value": "undrawBuddies"
          },
          {
            "$type": "Keyword",
            "value": "undrawReadyForWaves"
          },
          {
            "$type": "Keyword",
            "value": "undrawSummer"
          },
          {
            "$type": "Keyword",
            "value": "undrawBeachDay"
          },
          {
            "$type": "Keyword",
            "value": "undrawReminder"
          },
          {
            "$type": "Keyword",
            "value": "undrawFamily"
          },
          {
            "$type": "Keyword",
            "value": "undrawEngineeringTeam"
          },
          {
            "$type": "Keyword",
            "value": "undrawCloudHosting"
          },
          {
            "$type": "Keyword",
            "value": "undrawPassingBy"
          },
          {
            "$type": "Keyword",
            "value": "undrawMakeItRain"
          },
          {
            "$type": "Keyword",
            "value": "undrawGoodDoggy"
          },
          {
            "$type": "Keyword",
            "value": "undrawEducator"
          },
          {
            "$type": "Keyword",
            "value": "undrawBlooming"
          },
          {
            "$type": "Keyword",
            "value": "undrawWriter"
          },
          {
            "$type": "Keyword",
            "value": "undrawBitcoin"
          },
          {
            "$type": "Keyword",
            "value": "undrawWedding"
          },
          {
            "$type": "Keyword",
            "value": "undrawProjections"
          },
          {
            "$type": "Keyword",
            "value": "undrawRelaxation"
          },
          {
            "$type": "Keyword",
            "value": "undrawAudioConversation"
          },
          {
            "$type": "Keyword",
            "value": "undrawGoodTeam"
          },
          {
            "$type": "Keyword",
            "value": "undrawAircraft"
          },
          {
            "$type": "Keyword",
            "value": "undrawContentTeam"
          },
          {
            "$type": "Keyword",
            "value": "undrawGameWorld"
          },
          {
            "$type": "Keyword",
            "value": "undrawJoin"
          },
          {
            "$type": "Keyword",
            "value": "undrawDesignTeam"
          },
          {
            "$type": "Keyword",
            "value": "undrawEverydayLife"
          },
          {
            "$type": "Keyword",
            "value": "undrawConvert"
          },
          {
            "$type": "Keyword",
            "value": "undrawOnlineTest"
          },
          {
            "$type": "Keyword",
            "value": "undrawPhotoSession"
          },
          {
            "$type": "Keyword",
            "value": "undrawButtonStyle"
          },
          {
            "$type": "Keyword",
            "value": "undrawWaitInLine"
          },
          {
            "$type": "Keyword",
            "value": "undrawCoffeeWithFriends"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UndrawTypeAttribute6",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "undrawSharingKnowledge"
          },
          {
            "$type": "Keyword",
            "value": "undrawMultitasking"
          },
          {
            "$type": "Keyword",
            "value": "undrawArticles"
          },
          {
            "$type": "Keyword",
            "value": "undrawDeliveryTruck"
          },
          {
            "$type": "Keyword",
            "value": "undrawLearningSketching"
          },
          {
            "$type": "Keyword",
            "value": "undrawOnlineStats"
          },
          {
            "$type": "Keyword",
            "value": "undrawOfficeSnack"
          },
          {
            "$type": "Keyword",
            "value": "undrawPersonalTrainer"
          },
          {
            "$type": "Keyword",
            "value": "undrawQuittingTime"
          },
          {
            "$type": "Keyword",
            "value": "undrawOffRoad"
          },
          {
            "$type": "Keyword",
            "value": "undrawColorPalette"
          },
          {
            "$type": "Keyword",
            "value": "undrawUpgrade"
          },
          {
            "$type": "Keyword",
            "value": "undrawFinancialData"
          },
          {
            "$type": "Keyword",
            "value": "undrawNatureFun"
          },
          {
            "$type": "Keyword",
            "value": "undrawRelaxingWalk"
          },
          {
            "$type": "Keyword",
            "value": "undrawWineTasting"
          },
          {
            "$type": "Keyword",
            "value": "undrawBusinessChat"
          },
          {
            "$type": "Keyword",
            "value": "undrawProjectComplete"
          },
          {
            "$type": "Keyword",
            "value": "undrawEmptyStreet"
          },
          {
            "$type": "Keyword",
            "value": "undrawUpdatedResume"
          },
          {
            "$type": "Keyword",
            "value": "undrawJobOffers"
          },
          {
            "$type": "Keyword",
            "value": "undrawStatisticChart"
          },
          {
            "$type": "Keyword",
            "value": "undrawExams"
          },
          {
            "$type": "Keyword",
            "value": "undrawSmallTown"
          },
          {
            "$type": "Keyword",
            "value": "undrawSkateboard"
          },
          {
            "$type": "Keyword",
            "value": "undraw3dModeling"
          },
          {
            "$type": "Keyword",
            "value": "undrawCreativeThinking"
          },
          {
            "$type": "Keyword",
            "value": "undrawReact"
          },
          {
            "$type": "Keyword",
            "value": "undrawComposeMusic"
          },
          {
            "$type": "Keyword",
            "value": "undrawTrip"
          },
          {
            "$type": "Keyword",
            "value": "undrawAMomentToRelax"
          },
          {
            "$type": "Keyword",
            "value": "undrawMobileEncryption"
          },
          {
            "$type": "Keyword",
            "value": "undrawDesignInspiration"
          },
          {
            "$type": "Keyword",
            "value": "undrawTermSheet"
          },
          {
            "$type": "Keyword",
            "value": "undrawWarning"
          },
          {
            "$type": "Keyword",
            "value": "undrawInvestorUpdate"
          },
          {
            "$type": "Keyword",
            "value": "undrawMovingForward"
          },
          {
            "$type": "Keyword",
            "value": "undrawFinishLine"
          },
          {
            "$type": "Keyword",
            "value": "undrawWorkingRemotely"
          },
          {
            "$type": "Keyword",
            "value": "undrawHamburger"
          },
          {
            "$type": "Keyword",
            "value": "undrawFashionBlogging"
          },
          {
            "$type": "Keyword",
            "value": "undrawJourney"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UndrawTypeAttribute7",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "undrawCreativeTeam"
          },
          {
            "$type": "Keyword",
            "value": "undrawShowingSupport"
          },
          {
            "$type": "Keyword",
            "value": "undrawCreationProcess"
          },
          {
            "$type": "Keyword",
            "value": "undrawCreation"
          },
          {
            "$type": "Keyword",
            "value": "undrawLearning"
          },
          {
            "$type": "Keyword",
            "value": "undrawSolutionMindset"
          },
          {
            "$type": "Keyword",
            "value": "undrawAbsorbedIn"
          },
          {
            "$type": "Keyword",
            "value": "undrawPredictiveAnalytics"
          },
          {
            "$type": "Keyword",
            "value": "undrawSpeedTest"
          },
          {
            "$type": "Keyword",
            "value": "undrawCookieLove"
          },
          {
            "$type": "Keyword",
            "value": "undrawEditable"
          },
          {
            "$type": "Keyword",
            "value": "undrawProductExplainer"
          },
          {
            "$type": "Keyword",
            "value": "undrawSocialThinking"
          },
          {
            "$type": "Keyword",
            "value": "undrawCoolness"
          },
          {
            "$type": "Keyword",
            "value": "undrawCalculator"
          },
          {
            "$type": "Keyword",
            "value": "undrawFireworks"
          },
          {
            "$type": "Keyword",
            "value": "undrawTransferMoney"
          },
          {
            "$type": "Keyword",
            "value": "undrawHappyFeeling"
          },
          {
            "$type": "Keyword",
            "value": "undrawCleanUp"
          },
          {
            "$type": "Keyword",
            "value": "undrawMobileApplication"
          },
          {
            "$type": "Keyword",
            "value": "undrawSpreadLove"
          },
          {
            "$type": "Keyword",
            "value": "undrawCharacterDrawing"
          },
          {
            "$type": "Keyword",
            "value": "undrawEverywhereTogether"
          },
          {
            "$type": "Keyword",
            "value": "undrawSuburbs"
          },
          {
            "$type": "Keyword",
            "value": "undrawVideoInfluencer"
          },
          {
            "$type": "Keyword",
            "value": "undrawSlider"
          },
          {
            "$type": "Keyword",
            "value": "undrawWanderingMind"
          },
          {
            "$type": "Keyword",
            "value": "undrawEiffelTower"
          },
          {
            "$type": "Keyword",
            "value": "undrawTravelPlans"
          },
          {
            "$type": "Keyword",
            "value": "undrawInnovative"
          },
          {
            "$type": "Keyword",
            "value": "undrawHooked"
          },
          {
            "$type": "Keyword",
            "value": "undrawOnlineBanking"
          },
          {
            "$type": "Keyword",
            "value": "undrawSunlight"
          },
          {
            "$type": "Keyword",
            "value": "undrawHealthyLifestyle"
          },
          {
            "$type": "Keyword",
            "value": "undrawNewspaper"
          },
          {
            "$type": "Keyword",
            "value": "undrawHologram"
          },
          {
            "$type": "Keyword",
            "value": "undrawPersonalDocuments"
          },
          {
            "$type": "Keyword",
            "value": "undrawBusinessShop"
          },
          {
            "$type": "Keyword",
            "value": "undrawStartBuilding"
          },
          {
            "$type": "Keyword",
            "value": "undrawNewIdeas"
          },
          {
            "$type": "Keyword",
            "value": "undrawAnimating"
          },
          {
            "$type": "Keyword",
            "value": "undrawVisionaryTechnology"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UndrawTypeAttribute8",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "undrawSmartResize"
          },
          {
            "$type": "Keyword",
            "value": "undrawFuturisticInterface"
          },
          {
            "$type": "Keyword",
            "value": "undrawSignalSearching"
          },
          {
            "$type": "Keyword",
            "value": "undrawCircuitBoard"
          },
          {
            "$type": "Keyword",
            "value": "undrawOnlineArt"
          },
          {
            "$type": "Keyword",
            "value": "undrawDrag"
          },
          {
            "$type": "Keyword",
            "value": "undrawSearching"
          },
          {
            "$type": "Keyword",
            "value": "undrawFunctions"
          },
          {
            "$type": "Keyword",
            "value": "undrawDreamWorld"
          },
          {
            "$type": "Keyword",
            "value": "undrawEnergizer"
          },
          {
            "$type": "Keyword",
            "value": "undrawVisualization"
          },
          {
            "$type": "Keyword",
            "value": "undrawBookReading"
          },
          {
            "$type": "Keyword",
            "value": "undrawServices"
          },
          {
            "$type": "Keyword",
            "value": "undrawHealthyOptions"
          },
          {
            "$type": "Keyword",
            "value": "undrawIconDesign"
          },
          {
            "$type": "Keyword",
            "value": "undrawADayOff"
          },
          {
            "$type": "Keyword",
            "value": "undrawSocialSharing"
          },
          {
            "$type": "Keyword",
            "value": "undrawWorkInProgress"
          },
          {
            "$type": "Keyword",
            "value": "undrawFittingPieces"
          },
          {
            "$type": "Keyword",
            "value": "undrawMobileInterface"
          },
          {
            "$type": "Keyword",
            "value": "undrawInteriorDesign"
          },
          {
            "$type": "Keyword",
            "value": "undrawPersonalFinance"
          },
          {
            "$type": "Keyword",
            "value": "undrawWallet"
          },
          {
            "$type": "Keyword",
            "value": "undrawThingsToSay"
          },
          {
            "$type": "Keyword",
            "value": "undrawOSUpgrade"
          },
          {
            "$type": "Keyword",
            "value": "undrawFittingPiece"
          },
          {
            "$type": "Keyword",
            "value": "undrawPositiveAttitude"
          },
          {
            "$type": "Keyword",
            "value": "undrawExcitingNews"
          },
          {
            "$type": "Keyword",
            "value": "undrawAugmentedReality"
          },
          {
            "$type": "Keyword",
            "value": "undrawNoted"
          },
          {
            "$type": "Keyword",
            "value": "undrawOnlineDiscussion"
          },
          {
            "$type": "Keyword",
            "value": "undrawTutor"
          },
          {
            "$type": "Keyword",
            "value": "undrawCertification"
          },
          {
            "$type": "Keyword",
            "value": "undrawPayOnline"
          },
          {
            "$type": "Keyword",
            "value": "undrawStaticWebsite"
          },
          {
            "$type": "Keyword",
            "value": "undrawShareLink"
          },
          {
            "$type": "Keyword",
            "value": "undrawCoupleLove"
          },
          {
            "$type": "Keyword",
            "value": "undrawPullRequest"
          },
          {
            "$type": "Keyword",
            "value": "undrawQuiz"
          },
          {
            "$type": "Keyword",
            "value": "undrawFillIn"
          },
          {
            "$type": "Keyword",
            "value": "undrawAgree"
          },
          {
            "$type": "Keyword",
            "value": "undrawTutorialVideo"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UndrawTypeAttribute9",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "undrawFileManager"
          },
          {
            "$type": "Keyword",
            "value": "undrawMyPassword"
          },
          {
            "$type": "Keyword",
            "value": "undrawCompleteDesign"
          },
          {
            "$type": "Keyword",
            "value": "undrawCloseTab"
          },
          {
            "$type": "Keyword",
            "value": "undrawUnlock"
          },
          {
            "$type": "Keyword",
            "value": "undrawPeople"
          },
          {
            "$type": "Keyword",
            "value": "undrawDesignData"
          },
          {
            "$type": "Keyword",
            "value": "undrawMobileUser"
          },
          {
            "$type": "Keyword",
            "value": "undrawInvestment"
          },
          {
            "$type": "Keyword",
            "value": "undrawPortfolioWebsite"
          },
          {
            "$type": "Keyword",
            "value": "undrawDiary"
          },
          {
            "$type": "Keyword",
            "value": "undrawInstantAnalysis"
          },
          {
            "$type": "Keyword",
            "value": "undrawGroupHangout"
          },
          {
            "$type": "Keyword",
            "value": "undrawIdeasFlow"
          },
          {
            "$type": "Keyword",
            "value": "undrawLovingStory"
          },
          {
            "$type": "Keyword",
            "value": "undrawGardening"
          },
          {
            "$type": "Keyword",
            "value": "undrawIdeas"
          },
          {
            "$type": "Keyword",
            "value": "undrawReview"
          },
          {
            "$type": "Keyword",
            "value": "undrawRightPlaces"
          },
          {
            "$type": "Keyword",
            "value": "undrawPicture"
          },
          {
            "$type": "Keyword",
            "value": "undrawInspiration"
          },
          {
            "$type": "Keyword",
            "value": "undrawTrendyInterface"
          },
          {
            "$type": "Keyword",
            "value": "undrawPersonalInfo"
          },
          {
            "$type": "Keyword",
            "value": "undrawBodyText"
          },
          {
            "$type": "Keyword",
            "value": "undrawProfileDetails"
          },
          {
            "$type": "Keyword",
            "value": "undrawOnlineDating"
          },
          {
            "$type": "Keyword",
            "value": "undrawGoingUp"
          },
          {
            "$type": "Keyword",
            "value": "undrawVoiceInterface"
          },
          {
            "$type": "Keyword",
            "value": "undrawRealTimeAnalytics"
          },
          {
            "$type": "Keyword",
            "value": "undrawCompleting"
          },
          {
            "$type": "Keyword",
            "value": "undrawWelcoming"
          },
          {
            "$type": "Keyword",
            "value": "undrawProudCoder"
          },
          {
            "$type": "Keyword",
            "value": "undrawReferral"
          },
          {
            "$type": "Keyword",
            "value": "undrawKeyPoints"
          },
          {
            "$type": "Keyword",
            "value": "undrawStripePayments"
          },
          {
            "$type": "Keyword",
            "value": "undrawStarlink"
          },
          {
            "$type": "Keyword",
            "value": "undrawResearching"
          },
          {
            "$type": "Keyword",
            "value": "undrawAskMeAnything"
          },
          {
            "$type": "Keyword",
            "value": "undrawReadingTime"
          },
          {
            "$type": "Keyword",
            "value": "undrawCountingStars"
          },
          {
            "$type": "Keyword",
            "value": "undrawFont"
          },
          {
            "$type": "Keyword",
            "value": "undrawPreferencesPopup"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UndrawTypeAttribute10",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "undrawPersonalFile"
          },
          {
            "$type": "Keyword",
            "value": "undrawPerformanceOverview"
          },
          {
            "$type": "Keyword",
            "value": "undrawJustBrowsing"
          },
          {
            "$type": "Keyword",
            "value": "undrawMobileDevelopment"
          },
          {
            "$type": "Keyword",
            "value": "undrawAcceptTasks"
          },
          {
            "$type": "Keyword",
            "value": "undrawStarryWindow"
          },
          {
            "$type": "Keyword",
            "value": "undrawHomeScreen"
          },
          {
            "$type": "Keyword",
            "value": "undrawGoneShopping"
          },
          {
            "$type": "Keyword",
            "value": "undrawDatePicker"
          },
          {
            "$type": "Keyword",
            "value": "undrawImageViewer"
          },
          {
            "$type": "Keyword",
            "value": "undrawMyPersonalFiles"
          },
          {
            "$type": "Keyword",
            "value": "undrawMyCodeSnippets"
          },
          {
            "$type": "Keyword",
            "value": "undrawInformationTab"
          },
          {
            "$type": "Keyword",
            "value": "undrawAdvancedCustomization"
          },
          {
            "$type": "Keyword",
            "value": "undrawAuthentication"
          },
          {
            "$type": "Keyword",
            "value": "undrawTeaching"
          },
          {
            "$type": "Keyword",
            "value": "undrawScooter"
          },
          {
            "$type": "Keyword",
            "value": "undrawJogging"
          },
          {
            "$type": "Keyword",
            "value": "undrawDestinations"
          },
          {
            "$type": "Keyword",
            "value": "undrawPenTool"
          },
          {
            "$type": "Keyword",
            "value": "undrawSpeechToText"
          },
          {
            "$type": "Keyword",
            "value": "undrawCoffee"
          },
          {
            "$type": "Keyword",
            "value": "undrawMovieNight"
          },
          {
            "$type": "Keyword",
            "value": "undrawPersonalData"
          },
          {
            "$type": "Keyword",
            "value": "undrawKnowledge"
          },
          {
            "$type": "Keyword",
            "value": "undrawCancel"
          },
          {
            "$type": "Keyword",
            "value": "undrawPieGraph"
          },
          {
            "$type": "Keyword",
            "value": "undrawSmartwatch"
          },
          {
            "$type": "Keyword",
            "value": "undrawResult"
          },
          {
            "$type": "Keyword",
            "value": "undrawHappyNews"
          },
          {
            "$type": "Keyword",
            "value": "undrawPercentages"
          },
          {
            "$type": "Keyword",
            "value": "undrawTeacher"
          },
          {
            "$type": "Keyword",
            "value": "undrawAirSupport"
          },
          {
            "$type": "Keyword",
            "value": "undrawYear2022"
          },
          {
            "$type": "Keyword",
            "value": "undrawFolder"
          },
          {
            "$type": "Keyword",
            "value": "undrawServerStatus"
          },
          {
            "$type": "Keyword",
            "value": "undrawTasting"
          },
          {
            "$type": "Keyword",
            "value": "undrawProductTeardown"
          },
          {
            "$type": "Keyword",
            "value": "undrawBuildingBlocks"
          },
          {
            "$type": "Keyword",
            "value": "undrawNewYear2022"
          },
          {
            "$type": "Keyword",
            "value": "undrawInstantSupport"
          },
          {
            "$type": "Keyword",
            "value": "undrawWorld"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UndrawTypeAttribute11",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "undrawEther"
          },
          {
            "$type": "Keyword",
            "value": "undrawDeliveries"
          },
          {
            "$type": "Keyword",
            "value": "undrawSnowman"
          },
          {
            "$type": "Keyword",
            "value": "undrawContactUs"
          },
          {
            "$type": "Keyword",
            "value": "undrawConferenceSpeaker"
          },
          {
            "$type": "Keyword",
            "value": "undrawWinterWalk"
          },
          {
            "$type": "Keyword",
            "value": "undrawShopping"
          },
          {
            "$type": "Keyword",
            "value": "undrawSocialUpdate"
          },
          {
            "$type": "Keyword",
            "value": "undrawSoftwareEngineer"
          },
          {
            "$type": "Keyword",
            "value": "undrawOnlineOrganizer"
          },
          {
            "$type": "Keyword",
            "value": "undrawConnection"
          },
          {
            "$type": "Keyword",
            "value": "undrawTeamCollaboration"
          },
          {
            "$type": "Keyword",
            "value": "undrawSocialGirl"
          },
          {
            "$type": "Keyword",
            "value": "undrawTypewriter"
          },
          {
            "$type": "Keyword",
            "value": "undrawDreamer"
          },
          {
            "$type": "Keyword",
            "value": "undrawTrends"
          },
          {
            "$type": "Keyword",
            "value": "undrawInsert"
          },
          {
            "$type": "Keyword",
            "value": "undrawCertificate"
          },
          {
            "$type": "Keyword",
            "value": "undrawWinners"
          },
          {
            "$type": "Keyword",
            "value": "undrawMakerLaunch"
          },
          {
            "$type": "Keyword",
            "value": "undrawCollaborating"
          },
          {
            "$type": "Keyword",
            "value": "undrawGettingCoffee"
          },
          {
            "$type": "Keyword",
            "value": "undrawPodcast"
          },
          {
            "$type": "Keyword",
            "value": "undrawSocialDashboard"
          },
          {
            "$type": "Keyword",
            "value": "undrawMobileBrowsers"
          },
          {
            "$type": "Keyword",
            "value": "undrawMessenger"
          },
          {
            "$type": "Keyword",
            "value": "undrawSurfer"
          },
          {
            "$type": "Keyword",
            "value": "undrawPhotocopy"
          },
          {
            "$type": "Keyword",
            "value": "undrawFeaturesOverview"
          },
          {
            "$type": "Keyword",
            "value": "undrawInterview"
          },
          {
            "$type": "Keyword",
            "value": "undrawStudying"
          },
          {
            "$type": "Keyword",
            "value": "undrawFans"
          },
          {
            "$type": "Keyword",
            "value": "undrawCreativity"
          },
          {
            "$type": "Keyword",
            "value": "undrawCampfire"
          },
          {
            "$type": "Keyword",
            "value": "undrawTarget"
          },
          {
            "$type": "Keyword",
            "value": "undrawStartupLife"
          },
          {
            "$type": "Keyword",
            "value": "undrawBlankCanvas"
          },
          {
            "$type": "Keyword",
            "value": "undrawPrototypingProcess"
          },
          {
            "$type": "Keyword",
            "value": "undrawOpinion"
          },
          {
            "$type": "Keyword",
            "value": "undrawSecurity"
          },
          {
            "$type": "Keyword",
            "value": "undrawProgramming"
          },
          {
            "$type": "Keyword",
            "value": "undrawConversation"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UndrawTypeAttribute12",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "undrawRideABicycle"
          },
          {
            "$type": "Keyword",
            "value": "undrawThoughts"
          },
          {
            "$type": "Keyword",
            "value": "undrawDesignerGirl"
          },
          {
            "$type": "Keyword",
            "value": "undrawOnlineMedia"
          },
          {
            "$type": "Keyword",
            "value": "undrawAddColor"
          },
          {
            "$type": "Keyword",
            "value": "undrawChristmasMode"
          },
          {
            "$type": "Keyword",
            "value": "undrawDigitalNomad"
          },
          {
            "$type": "Keyword",
            "value": "undrawConference"
          },
          {
            "$type": "Keyword",
            "value": "undrawLaunching"
          },
          {
            "$type": "Keyword",
            "value": "undrawScience"
          },
          {
            "$type": "Keyword",
            "value": "undrawBookLover"
          },
          {
            "$type": "Keyword",
            "value": "undrawBirthdayCake"
          },
          {
            "$type": "Keyword",
            "value": "undrawMap"
          },
          {
            "$type": "Keyword",
            "value": "undrawArtLover"
          },
          {
            "$type": "Keyword",
            "value": "undrawCryptoFlowers"
          },
          {
            "$type": "Keyword",
            "value": "undrawPersonalization"
          },
          {
            "$type": "Keyword",
            "value": "undrawFirmware"
          },
          {
            "$type": "Keyword",
            "value": "undrawReminders"
          },
          {
            "$type": "Keyword",
            "value": "undrawBusinessMan"
          },
          {
            "$type": "Keyword",
            "value": "undrawModernWoman"
          },
          {
            "$type": "Keyword",
            "value": "undrawManageChats"
          },
          {
            "$type": "Keyword",
            "value": "undrawDetails"
          },
          {
            "$type": "Keyword",
            "value": "undrawAddInformation"
          },
          {
            "$type": "Keyword",
            "value": "undrawMediaPlayer"
          },
          {
            "$type": "Keyword",
            "value": "undrawPageNotFound"
          },
          {
            "$type": "Keyword",
            "value": "undrawWebDevelopment"
          },
          {
            "$type": "Keyword",
            "value": "undrawLateAtNight"
          },
          {
            "$type": "Keyword",
            "value": "undrawSelecting"
          },
          {
            "$type": "Keyword",
            "value": "undrawSocialInteraction"
          },
          {
            "$type": "Keyword",
            "value": "undrawRevenue"
          },
          {
            "$type": "Keyword",
            "value": "undrawMobileTesting"
          },
          {
            "$type": "Keyword",
            "value": "undrawHappyAnnouncement"
          },
          {
            "$type": "Keyword",
            "value": "undrawExploring"
          },
          {
            "$type": "Keyword",
            "value": "undrawWebDevices"
          },
          {
            "$type": "Keyword",
            "value": "undrawFilter"
          },
          {
            "$type": "Keyword",
            "value": "undrawWorkingFromAnywhere"
          },
          {
            "$type": "Keyword",
            "value": "undrawFeedback"
          },
          {
            "$type": "Keyword",
            "value": "undrawDesignerLife"
          },
          {
            "$type": "Keyword",
            "value": "undrawSaveToBookmarks"
          },
          {
            "$type": "Keyword",
            "value": "undrawRespond"
          },
          {
            "$type": "Keyword",
            "value": "undrawMyNotifications"
          },
          {
            "$type": "Keyword",
            "value": "undrawTimeManagement"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UndrawTypeAttribute13",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "undrawWorkTogether"
          },
          {
            "$type": "Keyword",
            "value": "undrawFolderFiles"
          },
          {
            "$type": "Keyword",
            "value": "undrawMessageSent"
          },
          {
            "$type": "Keyword",
            "value": "undrawFollowing"
          },
          {
            "$type": "Keyword",
            "value": "undrawImagePost"
          },
          {
            "$type": "Keyword",
            "value": "undrawControlPanel"
          },
          {
            "$type": "Keyword",
            "value": "undrawCheckingBoxes"
          },
          {
            "$type": "Keyword",
            "value": "undrawMakingArt"
          },
          {
            "$type": "Keyword",
            "value": "undrawPressPlay"
          },
          {
            "$type": "Keyword",
            "value": "undrawOrganizingProjects"
          },
          {
            "$type": "Keyword",
            "value": "undrawInboxCleanup"
          },
          {
            "$type": "Keyword",
            "value": "undrawWindowShopping"
          },
          {
            "$type": "Keyword",
            "value": "undrawVRChat"
          },
          {
            "$type": "Keyword",
            "value": "undrawLoadMore"
          },
          {
            "$type": "Keyword",
            "value": "undrawDeliveryAddress"
          },
          {
            "$type": "Keyword",
            "value": "undrawMeetTheTeam"
          },
          {
            "$type": "Keyword",
            "value": "undrawBusinessDeal"
          },
          {
            "$type": "Keyword",
            "value": "undrawConnectingTeams"
          },
          {
            "$type": "Keyword",
            "value": "undrawPublishPost"
          },
          {
            "$type": "Keyword",
            "value": "undrawSharedGoals"
          },
          {
            "$type": "Keyword",
            "value": "undrawCurrentLocation"
          },
          {
            "$type": "Keyword",
            "value": "undrawWorkingLate"
          },
          {
            "$type": "Keyword",
            "value": "undrawGrades"
          },
          {
            "$type": "Keyword",
            "value": "undrawCollaborators"
          },
          {
            "$type": "Keyword",
            "value": "undrawThoughtProcess"
          },
          {
            "$type": "Keyword",
            "value": "undrawFileBundle"
          },
          {
            "$type": "Keyword",
            "value": "undrawAboutMe"
          },
          {
            "$type": "Keyword",
            "value": "undrawNextTasks"
          },
          {
            "$type": "Keyword",
            "value": "undrawOnlineVideo"
          },
          {
            "$type": "Keyword",
            "value": "undrawCountrySide"
          },
          {
            "$type": "Keyword",
            "value": "undrawDetailedExamination"
          },
          {
            "$type": "Keyword",
            "value": "undrawBeginChat"
          },
          {
            "$type": "Keyword",
            "value": "undrawTweetstorm"
          },
          {
            "$type": "Keyword",
            "value": "undrawCommunity"
          },
          {
            "$type": "Keyword",
            "value": "undrawDroneDelivery"
          },
          {
            "$type": "Keyword",
            "value": "undrawEmailCapture"
          },
          {
            "$type": "Keyword",
            "value": "undrawCoWorking"
          },
          {
            "$type": "Keyword",
            "value": "undrawAnnotation"
          },
          {
            "$type": "Keyword",
            "value": "undrawSocialFriends"
          },
          {
            "$type": "Keyword",
            "value": "undrawSynchronize"
          },
          {
            "$type": "Keyword",
            "value": "undrawAutumn"
          },
          {
            "$type": "Keyword",
            "value": "undrawPolaroid"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UndrawTypeAttribute14",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "undrawGroupVideo"
          },
          {
            "$type": "Keyword",
            "value": "undrawWelcome"
          },
          {
            "$type": "Keyword",
            "value": "undrawAddToCart"
          },
          {
            "$type": "Keyword",
            "value": "undrawBeforeDawn"
          },
          {
            "$type": "Keyword",
            "value": "undrawForgotPassword"
          },
          {
            "$type": "Keyword",
            "value": "undrawMomentToRemember"
          },
          {
            "$type": "Keyword",
            "value": "undrawTeam"
          },
          {
            "$type": "Keyword",
            "value": "undrawExplore"
          },
          {
            "$type": "Keyword",
            "value": "undrawMoving"
          },
          {
            "$type": "Keyword",
            "value": "undrawOnlinePayments"
          },
          {
            "$type": "Keyword",
            "value": "undrawInSync"
          },
          {
            "$type": "Keyword",
            "value": "undrawGaming"
          },
          {
            "$type": "Keyword",
            "value": "undrawAnalyze"
          },
          {
            "$type": "Keyword",
            "value": "undrawRomanticGetaway"
          },
          {
            "$type": "Keyword",
            "value": "undrawBibliophile"
          },
          {
            "$type": "Keyword",
            "value": "undrawCollecting"
          },
          {
            "$type": "Keyword",
            "value": "undrawHighFive"
          },
          {
            "$type": "Keyword",
            "value": "undrawSpreadsheets"
          },
          {
            "$type": "Keyword",
            "value": "undrawOnline"
          },
          {
            "$type": "Keyword",
            "value": "undrawOuterSpace"
          },
          {
            "$type": "Keyword",
            "value": "undrawDeveloperActivity"
          },
          {
            "$type": "Keyword",
            "value": "undrawInfluencer"
          },
          {
            "$type": "Keyword",
            "value": "undrawEmpty"
          },
          {
            "$type": "Keyword",
            "value": "undrawTeamSpirit"
          },
          {
            "$type": "Keyword",
            "value": "undrawHappyBirthday"
          },
          {
            "$type": "Keyword",
            "value": "undrawStars"
          },
          {
            "$type": "Keyword",
            "value": "undrawBusinesswoman"
          },
          {
            "$type": "Keyword",
            "value": "undrawCouple"
          },
          {
            "$type": "Keyword",
            "value": "undrawPersonalWebsite"
          },
          {
            "$type": "Keyword",
            "value": "undrawOrderDelivered"
          },
          {
            "$type": "Keyword",
            "value": "undrawClickHere"
          },
          {
            "$type": "Keyword",
            "value": "undrawContract"
          },
          {
            "$type": "Keyword",
            "value": "undrawSetupAnalytics"
          },
          {
            "$type": "Keyword",
            "value": "undrawResponsive"
          },
          {
            "$type": "Keyword",
            "value": "undrawWalkInTheCity"
          },
          {
            "$type": "Keyword",
            "value": "undrawRealTimeSync"
          },
          {
            "$type": "Keyword",
            "value": "undrawEvents"
          },
          {
            "$type": "Keyword",
            "value": "undrawSunnyDay"
          },
          {
            "$type": "Keyword",
            "value": "undrawJobHunt"
          },
          {
            "$type": "Keyword",
            "value": "undrawFreshNotification"
          },
          {
            "$type": "Keyword",
            "value": "undrawEatingTogether"
          },
          {
            "$type": "Keyword",
            "value": "undrawDetailedAnalysis"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UndrawTypeAttribute15",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "undrawBeer"
          },
          {
            "$type": "Keyword",
            "value": "undrawCalling"
          },
          {
            "$type": "Keyword",
            "value": "undrawSuperThankYou"
          },
          {
            "$type": "Keyword",
            "value": "undrawInThought"
          },
          {
            "$type": "Keyword",
            "value": "undrawShareOnline"
          },
          {
            "$type": "Keyword",
            "value": "undrawDeparting"
          },
          {
            "$type": "Keyword",
            "value": "undrawDesignProcess"
          },
          {
            "$type": "Keyword",
            "value": "undrawImageFocus"
          },
          {
            "$type": "Keyword",
            "value": "undrawAddPost"
          },
          {
            "$type": "Keyword",
            "value": "undrawEmails"
          },
          {
            "$type": "Keyword",
            "value": "undrawFastLoading"
          },
          {
            "$type": "Keyword",
            "value": "undrawArt"
          },
          {
            "$type": "Keyword",
            "value": "undrawChasingLove"
          },
          {
            "$type": "Keyword",
            "value": "undrawActiveSupport"
          },
          {
            "$type": "Keyword",
            "value": "undrawVirtualReality"
          },
          {
            "$type": "Keyword",
            "value": "undrawChilling"
          },
          {
            "$type": "Keyword",
            "value": "undrawOnlineCv"
          },
          {
            "$type": "Keyword",
            "value": "undrawDesignNotes"
          },
          {
            "$type": "Keyword",
            "value": "undrawSpecs"
          },
          {
            "$type": "Keyword",
            "value": "undrawWorking"
          },
          {
            "$type": "Keyword",
            "value": "undrawMobilePosts"
          },
          {
            "$type": "Keyword",
            "value": "undrawRandomThoughts"
          },
          {
            "$type": "Keyword",
            "value": "undrawAlert"
          },
          {
            "$type": "Keyword",
            "value": "undrawOurNeighborhood"
          },
          {
            "$type": "Keyword",
            "value": "undrawListening"
          },
          {
            "$type": "Keyword",
            "value": "undrawNewEntries"
          },
          {
            "$type": "Keyword",
            "value": "undrawWebShopping"
          },
          {
            "$type": "Keyword",
            "value": "undrawRemoteMeeting"
          },
          {
            "$type": "Keyword",
            "value": "undrawThroughTheDesert"
          },
          {
            "$type": "Keyword",
            "value": "undrawVault"
          },
          {
            "$type": "Keyword",
            "value": "undrawSelectedOptions"
          },
          {
            "$type": "Keyword",
            "value": "undrawDesignObjectives"
          },
          {
            "$type": "Keyword",
            "value": "undrawUsabilityTesting"
          },
          {
            "$type": "Keyword",
            "value": "undrawSiteStats"
          },
          {
            "$type": "Keyword",
            "value": "undrawPartying"
          },
          {
            "$type": "Keyword",
            "value": "undrawWorkFromAnywhere"
          },
          {
            "$type": "Keyword",
            "value": "undrawAddDocument"
          },
          {
            "$type": "Keyword",
            "value": "undrawGrowthCurve"
          },
          {
            "$type": "Keyword",
            "value": "undrawPortfolioFeedback"
          },
          {
            "$type": "Keyword",
            "value": "undrawArrived"
          },
          {
            "$type": "Keyword",
            "value": "undrawDecide"
          },
          {
            "$type": "Keyword",
            "value": "undrawSiteContent"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UndrawIconTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "icon"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "icon",
            "operator": "=",
            "terminal": {
              "$type": "Alternatives",
              "elements": [
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@90"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@91"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@92"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@93"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@94"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@95"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@96"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@97"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@98"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@99"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@100"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@101"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@102"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@103"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@104"
                  },
                  "arguments": []
                }
              ]
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UndrawTagAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@105"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "UndrawTag",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "<Undraw"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@106"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "/>"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AuthorProfilePicAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "profilePic"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "profilePic",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AuthorProfileHandleAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "profileHandle"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "profileHandle",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AuthorTagAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@108"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@109"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@4"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@18"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AuthorTag",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "<Author"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@110"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "/>"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarStyleTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Circle"
          },
          {
            "$type": "Keyword",
            "value": "Tranparent"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarTopTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "NoHair"
          },
          {
            "$type": "Keyword",
            "value": "Eyepatch"
          },
          {
            "$type": "Keyword",
            "value": "Hat"
          },
          {
            "$type": "Keyword",
            "value": "Hijab"
          },
          {
            "$type": "Keyword",
            "value": "Turban"
          },
          {
            "$type": "Keyword",
            "value": "WinterHat1"
          },
          {
            "$type": "Keyword",
            "value": "WinterHat2"
          },
          {
            "$type": "Keyword",
            "value": "WinterHat3"
          },
          {
            "$type": "Keyword",
            "value": "WinterHat4"
          },
          {
            "$type": "Keyword",
            "value": "LongHairBigHair"
          },
          {
            "$type": "Keyword",
            "value": "LongHairBob"
          },
          {
            "$type": "Keyword",
            "value": "LongHairBun"
          },
          {
            "$type": "Keyword",
            "value": "LongHairCurly"
          },
          {
            "$type": "Keyword",
            "value": "LongHairCurvy"
          },
          {
            "$type": "Keyword",
            "value": "LongHairDreads"
          },
          {
            "$type": "Keyword",
            "value": "LongHairFrida"
          },
          {
            "$type": "Keyword",
            "value": "LongHairFro"
          },
          {
            "$type": "Keyword",
            "value": "LongHairFroBand"
          },
          {
            "$type": "Keyword",
            "value": "LongHairNotTooLong"
          },
          {
            "$type": "Keyword",
            "value": "LongHairShavedSides"
          },
          {
            "$type": "Keyword",
            "value": "LongHairMiaWallace"
          },
          {
            "$type": "Keyword",
            "value": "LongHairStraight"
          },
          {
            "$type": "Keyword",
            "value": "LongHairStraight2"
          },
          {
            "$type": "Keyword",
            "value": "LongHairStraightStrand"
          },
          {
            "$type": "Keyword",
            "value": "ShortHairDreads01"
          },
          {
            "$type": "Keyword",
            "value": "ShortHairDreads02"
          },
          {
            "$type": "Keyword",
            "value": "ShortHairFrizzle"
          },
          {
            "$type": "Keyword",
            "value": "ShortHairShaggyMullet"
          },
          {
            "$type": "Keyword",
            "value": "ShortHairShortCurly"
          },
          {
            "$type": "Keyword",
            "value": "ShortHairShortFlat"
          },
          {
            "$type": "Keyword",
            "value": "ShortHairShortRound"
          },
          {
            "$type": "Keyword",
            "value": "ShortHairShortWaved"
          },
          {
            "$type": "Keyword",
            "value": "ShortHairSides"
          },
          {
            "$type": "Keyword",
            "value": "ShortHairTheCaesar"
          },
          {
            "$type": "Keyword",
            "value": "ShortHairTheCaesarSidePart"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarAccessoriesTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Blank"
          },
          {
            "$type": "Keyword",
            "value": "Kurt"
          },
          {
            "$type": "Keyword",
            "value": "Prescription01"
          },
          {
            "$type": "Keyword",
            "value": "Prescription02"
          },
          {
            "$type": "Keyword",
            "value": "Round"
          },
          {
            "$type": "Keyword",
            "value": "Sunglasses"
          },
          {
            "$type": "Keyword",
            "value": "Wayfarers"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarHairColorTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Auburn"
          },
          {
            "$type": "Keyword",
            "value": "Black"
          },
          {
            "$type": "Keyword",
            "value": "Blonde"
          },
          {
            "$type": "Keyword",
            "value": "BlondeGolden"
          },
          {
            "$type": "Keyword",
            "value": "Brown"
          },
          {
            "$type": "Keyword",
            "value": "BrownDark"
          },
          {
            "$type": "Keyword",
            "value": "PastelPink"
          },
          {
            "$type": "Keyword",
            "value": "Blue"
          },
          {
            "$type": "Keyword",
            "value": "Platinum"
          },
          {
            "$type": "Keyword",
            "value": "Red"
          },
          {
            "$type": "Keyword",
            "value": "SilverGray"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarFacialHairTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Blank"
          },
          {
            "$type": "Keyword",
            "value": "BeardMedium"
          },
          {
            "$type": "Keyword",
            "value": "BeardLight"
          },
          {
            "$type": "Keyword",
            "value": "BeardMajestic"
          },
          {
            "$type": "Keyword",
            "value": "MoustacheFancy"
          },
          {
            "$type": "Keyword",
            "value": "MoustacheMagnum"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarClotheTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "BlazerShirt"
          },
          {
            "$type": "Keyword",
            "value": "BlazerSweater"
          },
          {
            "$type": "Keyword",
            "value": "CollarSweater"
          },
          {
            "$type": "Keyword",
            "value": "GraphicShirt"
          },
          {
            "$type": "Keyword",
            "value": "Hoodie"
          },
          {
            "$type": "Keyword",
            "value": "Overall"
          },
          {
            "$type": "Keyword",
            "value": "ShirtCrewNeck"
          },
          {
            "$type": "Keyword",
            "value": "ShirtScoopNeck"
          },
          {
            "$type": "Keyword",
            "value": "ShirtVNeck"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarEyeTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Close"
          },
          {
            "$type": "Keyword",
            "value": "Cry"
          },
          {
            "$type": "Keyword",
            "value": "Default"
          },
          {
            "$type": "Keyword",
            "value": "Dizzy"
          },
          {
            "$type": "Keyword",
            "value": "EyeRoll"
          },
          {
            "$type": "Keyword",
            "value": "Happy"
          },
          {
            "$type": "Keyword",
            "value": "Hearts"
          },
          {
            "$type": "Keyword",
            "value": "Side"
          },
          {
            "$type": "Keyword",
            "value": "Squint"
          },
          {
            "$type": "Keyword",
            "value": "Surprised"
          },
          {
            "$type": "Keyword",
            "value": "Wink"
          },
          {
            "$type": "Keyword",
            "value": "WinkWacky"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarEyebrowTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Angry"
          },
          {
            "$type": "Keyword",
            "value": "AngryNatural"
          },
          {
            "$type": "Keyword",
            "value": "Default"
          },
          {
            "$type": "Keyword",
            "value": "DefaultNatural"
          },
          {
            "$type": "Keyword",
            "value": "FlatNatural"
          },
          {
            "$type": "Keyword",
            "value": "RaisedExcited"
          },
          {
            "$type": "Keyword",
            "value": "RaisedExcitedNatural"
          },
          {
            "$type": "Keyword",
            "value": "SadConcerned"
          },
          {
            "$type": "Keyword",
            "value": "SadConcernedNatural"
          },
          {
            "$type": "Keyword",
            "value": "UnibrowNatural"
          },
          {
            "$type": "Keyword",
            "value": "UpDown"
          },
          {
            "$type": "Keyword",
            "value": "UpDownNatural"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarMouthTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Concerned"
          },
          {
            "$type": "Keyword",
            "value": "Default"
          },
          {
            "$type": "Keyword",
            "value": "Disbelief"
          },
          {
            "$type": "Keyword",
            "value": "Eating"
          },
          {
            "$type": "Keyword",
            "value": "Grimace"
          },
          {
            "$type": "Keyword",
            "value": "Sad"
          },
          {
            "$type": "Keyword",
            "value": "ScreamOpen"
          },
          {
            "$type": "Keyword",
            "value": "Serious"
          },
          {
            "$type": "Keyword",
            "value": "Smile"
          },
          {
            "$type": "Keyword",
            "value": "Tongue"
          },
          {
            "$type": "Keyword",
            "value": "Twinkle"
          },
          {
            "$type": "Keyword",
            "value": "Vomit"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarSkinColorTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Tanned"
          },
          {
            "$type": "Keyword",
            "value": "Yellow"
          },
          {
            "$type": "Keyword",
            "value": "Pale"
          },
          {
            "$type": "Keyword",
            "value": "Light"
          },
          {
            "$type": "Keyword",
            "value": "Brown"
          },
          {
            "$type": "Keyword",
            "value": "DarkBrown"
          },
          {
            "$type": "Keyword",
            "value": "Black"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "GraphicTypeTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Bat"
          },
          {
            "$type": "Keyword",
            "value": "Cumbia"
          },
          {
            "$type": "Keyword",
            "value": "Deer"
          },
          {
            "$type": "Keyword",
            "value": "Diamond"
          },
          {
            "$type": "Keyword",
            "value": "Hola"
          },
          {
            "$type": "Keyword",
            "value": "Pizza"
          },
          {
            "$type": "Keyword",
            "value": "Resist"
          },
          {
            "$type": "Keyword",
            "value": "Selena"
          },
          {
            "$type": "Keyword",
            "value": "Bear"
          },
          {
            "$type": "Keyword",
            "value": "SkullOutline"
          },
          {
            "$type": "Keyword",
            "value": "Skull"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarStyleAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "style"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "style",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@112"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarTopTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "topType"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "topType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@113"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarAccessoriesTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "accessoriesType"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "accessoriesType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@114"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarHairColorAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "hairColor"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "hairColor",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@115"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarFacialHairTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "facialHairType"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "facialHairType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@116"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarClotheTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "clotheType"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "clotheType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@117"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarEyeTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "eyeType"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "eyeType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@118"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarEyebrowTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "eyebrowType"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "eyebrowType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@119"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarMouthTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "mouthType"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "mouthType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@120"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarSkinColorAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "skinColor"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "skinColor",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@121"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarGraphicTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "graphicType"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "graphicType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@122"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarTagAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@4"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@18"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@123"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@124"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@125"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@126"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@127"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@128"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@129"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@130"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@131"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@132"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@133"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "AvatarTag",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "<Avatar"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@134"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "/>"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "BoxTypeAttributes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Box1"
          },
          {
            "$type": "Keyword",
            "value": "Box2"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "BoxTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "type"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@136"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "BoxTagAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@137"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@4"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "BoxTag",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "<Box"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@138"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "/>"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TextAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "text"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "text",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TextTagAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@140"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@15"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@18"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@4"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "TextTag",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "<Text"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@141"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "/>"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeHandleTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "top"
          },
          {
            "$type": "Keyword",
            "value": "right"
          },
          {
            "$type": "Keyword",
            "value": "bottom"
          },
          {
            "$type": "Keyword",
            "value": "left"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "default"
          },
          {
            "$type": "Keyword",
            "value": "smoothstep"
          },
          {
            "$type": "Keyword",
            "value": "step"
          },
          {
            "$type": "Keyword",
            "value": "straight"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "ArrowHeadTypes",
      "dataType": "string",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Keyword",
            "value": "arrow"
          },
          {
            "$type": "Keyword",
            "value": "arrowclosed"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeSourceHandleAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "sourceHandle"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "sourceHandle",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@143"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeTargetHandleAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "targetHandle"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "targetHandle",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@143"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeSourceAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "source"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "source",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeTargetAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "target"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "target",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeLabelAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "label"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "label",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeStyleAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "style"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "style",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeLabelStyleAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "labelStyle"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "labelStyle",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@26"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeTypeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "type"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@144"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeTagAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@4"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@146"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@147"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@150"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@148"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@149"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@153"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@151"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@152"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "EdgeTag",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "<Edge"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@154"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "/>"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "CodeAttribute",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "code"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "code",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@27"
              },
              "arguments": []
            }
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SvgTagAttributes",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@10"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@13"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@156"
            },
            "arguments": []
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    },
    {
      "$type": "ParserRule",
      "name": "SvgTag",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "<Svg"
          },
          {
            "$type": "Assignment",
            "feature": "attributes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@157"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "/>"
          }
        ]
      },
      "definesHiddenTokens": false,
      "entry": false,
      "fragment": false,
      "hiddenTokens": [],
      "parameters": [],
      "wildcard": false
    }
  ],
  "definesHiddenTokens": false,
  "hiddenTokens": [],
  "interfaces": [],
  "types": [],
  "usedGrammars": []
}`));var $W={languageId:"yadl",fileExtensions:[".yadl"],caseInsensitive:!1},MK={AstReflection:()=>new Mu},OK={Grammar:()=>_K(),LanguageMetaData:()=>$W,parser:{}};function zK(t){let e=t.validation.ValidationRegistry,r=t.validation.YadlValidator,n={StyleProperty:r.checkUniqueStyleAttributes,DimensionAttribute:r.checkUniqueDimensionAttributes,PositionAttribute:r.checkUniquePositionAttributes,AwsTag:r.checkUniqueAwsTagAttributes,AzureTag:r.checkUniqueAzureTagAttributes,GcpTag:r.checkUniqueGcpTagAttributes,SkillTag:r.checkUniqueSkillTagAttributes,ThemeisleTag:r.checkUniqueThemeisleTagAttributes,UndrawTag:r.checkUniqueUndrawTagAttributes,AuthorTag:r.checkUniqueAuthorTagAttributes,AvatarTag:r.checkUniqueAvatarTagAttributes,BoxTag:r.checkUniqueBoxTagAttributes,EdgeTag:r.checkUniqueEdgeTagAttributes,TextTag:r.checkUniqueTextTagAttributes,SvgTag:r.checkUniqueSvgTagAttributes};e.register(n,r)}var tf=class{checkUniqueDimensionAttributes(e,r){let n=new Set;for(let a of e.attributes){let o;if(a.$type===Qp)o="width";else if(a.$type===Up)o="height";else continue;n.has(o)?r("error",`Duplicate property '${o}' found. Properties must be unique.`,{node:a}):n.add(o)}}checkUniqueAwsTagAttributes(e,r){let n=new Set;for(let a of e.attributes){let o;if(a.$type===Ip)o="icon";else if(a.$type===vr)o="dimension";else if(a.$type===lr)o="id";else if(a.$type===cr)o="position";else continue;n.has(o)?r("error",`Duplicate property '${o}' found. Properties must be unique.`,{node:a}):n.add(o)}}checkUniqueAzureTagAttributes(e,r){let n=new Set;for(let a of e.attributes){let o;if(a.$type===Ep)o="icon";else if(a.$type===vr)o="dimension";else if(a.$type===lr)o="id";else if(a.$type===cr)o="position";else continue;n.has(o)?r("error",`Duplicate property '${o}' found. Properties must be unique.`,{node:a}):n.add(o)}}checkUniqueGcpTagAttributes(e,r){let n=new Set;for(let a of e.attributes){let o;if(a.$type===Bp)o="icon";else if(a.$type===vr)o="dimension";else if(a.$type===lr)o="id";else if(a.$type===cr)o="position";else continue;n.has(o)?r("error",`Duplicate property '${o}' found. Properties must be unique.`,{node:a}):n.add(o)}}checkUniqueSkillTagAttributes(e,r){let n=new Set;for(let a of e.attributes){let o;if(a.$type===qp)o="icon";else if(a.$type===vr)o="dimension";else if(a.$type===lr)o="id";else if(a.$type===cr)o="position";else continue;n.has(o)?r("error",`Duplicate property '${o}' found. Properties must be unique.`,{node:a}):n.add(o)}}checkUniqueThemeisleTagAttributes(e,r){let n=new Set;for(let a of e.attributes){let o;if(a.$type===Yp)o="icon";else if(a.$type===vr)o="dimension";else if(a.$type===lr)o="id";else if(a.$type===cr)o="position";else continue;n.has(o)?r("error",`Duplicate property '${o}' found. Properties must be unique.`,{node:a}):n.add(o)}}checkUniqueUndrawTagAttributes(e,r){let n=new Set;for(let a of e.attributes){let o;if(a.$type===Xp)o="icon";else if(a.$type===vr)o="dimension";else if(a.$type===lr)o="id";else if(a.$type===cr)o="position";else continue;n.has(o)?r("error",`Duplicate property '${o}' found. Properties must be unique.`,{node:a}):n.add(o)}}checkUniqueAuthorTagAttributes(e,r){let n=new Set;for(let a of e.attributes){let o;if(a.$type===wp)o="profilePic";else if(a.$type===vp)o="profileHandle";else if(a.$type===ya)o="classes";else if(a.$type===Mi)o="fontFamily";else if(a.$type===vr)o="dimension";else if(a.$type===lr)o="id";else if(a.$type===cr)o="position";else continue;n.has(o)?r("error",`Duplicate property '${o}' found. Properties must be unique.`,{node:a}):n.add(o)}}checkUniqueAvatarTagAttributes(e,r){let n=new Set;for(let a of e.attributes){let o;if(a.$type===Kp)o="style";else if(a.$type===Pp)o="topType";else if(a.$type===Sp)o="accessoriesType";else if(a.$type===bp)o="hairColor";else if(a.$type===Cp)o="facialHairType";else if(a.$type===Ap)o="clotheType";else if(a.$type===Tp)o="eyeType";else if(a.$type===$p)o="eyebrowType";else if(a.$type===kp)o="mouthType";else if(a.$type===Rp)o="skinColor";else if(a.$type===xp)o="graphicType";else if(a.$type===ya)o="classes";else if(a.$type===Mi)o="fontFamily";else if(a.$type===vr)o="dimension";else if(a.$type===lr)o="id";else if(a.$type===cr)o="position";else continue;n.has(o)?r("error",`Duplicate property '${o}' found. Properties must be unique.`,{node:a}):n.add(o)}}checkUniqueBoxTagAttributes(e,r){let n=new Set;for(let a of e.attributes){let o;if(a.$type===Np)o="type";else if(a.$type===ya)o="classes";else if(a.$type===vr)o="dimension";else if(a.$type===lr)o="id";else if(a.$type===cr)o="position";else continue;n.has(o)?r("error",`Duplicate property '${o}' found. Properties must be unique.`,{node:a}):n.add(o)}}checkUniqueEdgeTagAttributes(e,r){let n=new Set;for(let a of e.attributes){let o;if(a.$type===Lp)o="sourceHandle";else if(a.$type===Wp)o="targetHandle";else if(a.$type===zp)o="source";else if(a.$type===Fp)o="target";else if(a.$type===Mp)o="label";else if(a.$type===Bv)o="style";else if(a.$type===Op)o="labelStyle";else if(a.$type===Gp)o="type";else if(a.$type===ya)o="classes";else continue;n.has(o)?r("error",`Duplicate property '${o}' found. Properties must be unique.`,{node:a}):n.add(o)}}checkUniqueTextTagAttributes(e,r){let n=new Set;for(let a of e.attributes){let o;if(a.$type===jp)o="text";else if(a.$type===Mi)o="fontFamily";else if(a.$type===ya)o="classes";else if(a.$type===vr)o="dimension";else if(a.$type===lr)o="id";else if(a.$type===cr)o="position";else continue;n.has(o)?r("error",`Duplicate property '${o}' found. Properties must be unique.`,{node:a}):n.add(o)}}checkUniqueSvgTagAttributes(e,r){let n=new Set;for(let a of e.attributes){let o;if(a.$type===_p)o="code";else if(a.$type===lr)o="id";else if(a.$type===cr)o="position";else continue;n.has(o)?r("error",`Duplicate property '${o}' found. Properties must be unique.`,{node:a}):n.add(o)}}checkUniquePositionAttributes(e,r){let n=new Set;for(let a of e.attributes){let o;if(a.$type===Jp)o="x";else if(a.$type===Zp)o="y";else continue;n.has(o)?r("error",`Duplicate property '${o}' found. Properties must be unique.`,{node:a}):n.add(o)}}checkUniqueStyleAttributes(e,r){let n=new Set;for(let a of e.styleAttributes){let o;if(a.$type===Dp)o="background-color";else if(a.$type===Hp)o="font-size";else if(a.$type===Vp)o="text-color";else continue;n.has(o)?r("error",`Duplicate style attribute '${o}' found. Style attributes must be unique within a 'style' block.`,{node:a}):n.add(o)}}};var TW=2,rf=class extends gp{format(e){QR(e)||ZR(e)||mK(e)||$K(e)||KK(e)||IK(e)||OR(e)||VR(e)||tK(e)||cK(e)||kK(e)||CK(e)?this.formatIconTagAttributes(e):EK(e)||vK(e)||wK(e)||nK(e)||DK(e)||NK(e)||XR(e)||JR(e)||gK(e)||AK(e)||RK(e)||PK(e)||yK(e)||_R(e)||MR(e)||rK(e)||xK(e)||iK(e)||sK(e)||uK(e)||lK(e)||dK(e)||pK(e)||fK(e)||aK(e)||jR(e)||YR(e)||zR(e)||BR(e)||GR(e)||LR(e)||WR(e)||FR(e)||UR(e)||qR(e)||HR(e)||TK(e)?this.formatSimplePropertys(e):oK(e)||SK(e)?this.formatLevelOneAttribute(e):(eK(e)||hK(e)||bK(e))&&this.formatStyleAttributes(e)}formatLevelOneAttribute(e){let r=this.getNodeFormatter(e),n=r.keyword("{"),a=r.keyword("}");n.prepend(Rt.oneSpace()),n.append(Rt.oneSpace()),a.prepend(Rt.oneSpace()),a.append(Rt.noSpace()),r.nodes(...e.attributes).prepend(Rt.oneSpace())}formatIconTagAttributes(e){let r=this.getNodeFormatter(e),n=r.keyword("<"),a=r.keyword("/>");n.prepend(Rt.noSpace());let o=e.attributes||[],i=r.nodes(...e.attributes);o.length>TW?(i.prepend(Rt.newLine()),a.prepend(Rt.newLine()),i.prepend(Rt.indent())):o.length>0&&(i.prepend(Rt.oneSpace()),a.prepend(Rt.oneSpace()))}formatSimplePropertys(e){let n=this.getNodeFormatter(e).keyword(":");n.append(Rt.oneSpace()),n.prepend(Rt.oneSpace())}formatStyleAttributes(e){this.getNodeFormatter(e).keyword(":").append(Rt.oneSpace())}};var CW={validation:{YadlValidator:()=>new tf},lsp:{Formatter:()=>new rf}};function LK(t){let e=Ya(PR(t),MK),r=Ya(KR({shared:e}),OK,CW);return e.ServiceRegistry.register(r),zK(r),{shared:e,Yadl:r}}var xW=new ha.BrowserMessageReader(self),bW=new ha.BrowserMessageWriter(self),FK=(0,ha.createConnection)(xW,bW),{shared:WK,Yadl:kW}=LK(Object.assign({connection:FK},gu));bR(WK);var RW=new ha.NotificationType("browser/DocumentChange"),KW=kW.serializer.JsonSerializer;WK.workspace.DocumentBuilder.onBuildPhase(H.Validated,t=>{var e;for(let r of t){let n=KW.serialize(r.parseResult.value,{sourceText:!0,textRegions:!0});FK.sendNotification(RW,{uri:r.uri.toString(),content:n,diagnostics:(e=r.diagnostics)!==null&&e!==void 0?e:[]})}});})();
/*! Bundled license information:

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
