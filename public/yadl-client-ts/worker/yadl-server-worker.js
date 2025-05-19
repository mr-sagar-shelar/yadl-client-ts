"use strict";(()=>{var WI=Object.create;var Ku=Object.defineProperty;var GI=Object.getOwnPropertyDescriptor;var BI=Object.getOwnPropertyNames;var HI=Object.getPrototypeOf,UI=Object.prototype.hasOwnProperty;var qI=(t,e)=>()=>(t&&(e=t(t=0)),e);var M=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),In=(t,e)=>{for(var r in e)Ku(t,r,{get:e[r],enumerable:!0})},Pu=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of BI(e))!UI.call(t,a)&&a!==r&&Ku(t,a,{get:()=>e[a],enumerable:!(n=GI(e,a))||n.enumerable});return t},oe=(t,e,r)=>(Pu(t,e,"default"),r&&Pu(r,e,"default")),Ot=(t,e,r)=>(r=t!=null?WI(HI(t)):{},Pu(e||!t||!t.__esModule?Ku(r,"default",{value:t,enumerable:!0}):r,t)),lp=t=>Pu(Ku({},"__esModule",{value:!0}),t);var vc={};In(vc,{AnnotatedTextEdit:()=>wn,ChangeAnnotation:()=>ba,ChangeAnnotationIdentifier:()=>Tt,CodeAction:()=>rh,CodeActionContext:()=>th,CodeActionKind:()=>eh,CodeActionTriggerKind:()=>$s,CodeDescription:()=>by,CodeLens:()=>nh,Color:()=>dc,ColorInformation:()=>Ay,ColorPresentation:()=>ky,Command:()=>Ea,CompletionItem:()=>Gy,CompletionItemKind:()=>My,CompletionItemLabelDetails:()=>Wy,CompletionItemTag:()=>zy,CompletionList:()=>By,CreateFile:()=>jo,DeleteFile:()=>Yo,Diagnostic:()=>vs,DiagnosticRelatedInformation:()=>pc,DiagnosticSeverity:()=>Py,DiagnosticTag:()=>Ky,DocumentHighlight:()=>Vy,DocumentHighlightKind:()=>jy,DocumentLink:()=>oh,DocumentSymbol:()=>Zy,DocumentUri:()=>$y,EOL:()=>HO,FoldingRange:()=>Ry,FoldingRangeKind:()=>Iy,FormattingOptions:()=>ah,Hover:()=>Hy,InlayHint:()=>yh,InlayHintKind:()=>gc,InlayHintLabelPart:()=>mc,InlineCompletionContext:()=>Sh,InlineCompletionItem:()=>gh,InlineCompletionList:()=>mh,InlineCompletionTriggerKind:()=>vh,InlineValueContext:()=>fh,InlineValueEvaluatableExpression:()=>ph,InlineValueText:()=>ch,InlineValueVariableLookup:()=>dh,InsertReplaceEdit:()=>Ly,InsertTextFormat:()=>Oy,InsertTextMode:()=>Fy,Location:()=>ms,LocationLink:()=>xy,MarkedString:()=>Cs,MarkupContent:()=>Qo,MarkupKind:()=>hc,OptionalVersionedTextDocumentIdentifier:()=>Ss,ParameterInformation:()=>Uy,Position:()=>se,Range:()=>re,RenameFile:()=>Vo,SelectedCompletionInfo:()=>wh,SelectionRange:()=>ih,SemanticTokenModifiers:()=>uh,SemanticTokenTypes:()=>sh,SemanticTokens:()=>lh,SignatureInformation:()=>qy,StringValue:()=>hh,SymbolInformation:()=>Xy,SymbolKind:()=>Yy,SymbolTag:()=>Qy,TextDocument:()=>$h,TextDocumentEdit:()=>ws,TextDocumentIdentifier:()=>Dy,TextDocumentItem:()=>_y,TextEdit:()=>mr,URI:()=>cc,VersionedTextDocumentIdentifier:()=>Ny,WorkspaceChange:()=>Ey,WorkspaceEdit:()=>fc,WorkspaceFolder:()=>Ch,WorkspaceSymbol:()=>Jy,integer:()=>Ty,uinteger:()=>gs});var $y,cc,Ty,gs,se,re,ms,xy,dc,Ay,ky,Iy,Ry,pc,Py,Ky,by,vs,Ea,mr,ba,Tt,wn,ws,jo,Vo,Yo,fc,qo,yc,Ey,Dy,Ny,Ss,_y,hc,Qo,My,Oy,zy,Ly,Fy,Wy,Gy,By,Cs,Hy,Uy,qy,jy,Vy,Yy,Qy,Xy,Jy,Zy,eh,$s,th,rh,nh,ah,oh,ih,sh,uh,lh,ch,dh,ph,fh,gc,mc,yh,hh,gh,mh,vh,wh,Sh,Ch,HO,$h,Th,v,Da=qI(()=>{"use strict";(function(t){function e(r){return typeof r=="string"}t.is=e})($y||($y={}));(function(t){function e(r){return typeof r=="string"}t.is=e})(cc||(cc={}));(function(t){t.MIN_VALUE=-2147483648,t.MAX_VALUE=2147483647;function e(r){return typeof r=="number"&&t.MIN_VALUE<=r&&r<=t.MAX_VALUE}t.is=e})(Ty||(Ty={}));(function(t){t.MIN_VALUE=0,t.MAX_VALUE=2147483647;function e(r){return typeof r=="number"&&t.MIN_VALUE<=r&&r<=t.MAX_VALUE}t.is=e})(gs||(gs={}));(function(t){function e(n,a){return n===Number.MAX_VALUE&&(n=gs.MAX_VALUE),a===Number.MAX_VALUE&&(a=gs.MAX_VALUE),{line:n,character:a}}t.create=e;function r(n){let a=n;return v.objectLiteral(a)&&v.uinteger(a.line)&&v.uinteger(a.character)}t.is=r})(se||(se={}));(function(t){function e(n,a,o,i){if(v.uinteger(n)&&v.uinteger(a)&&v.uinteger(o)&&v.uinteger(i))return{start:se.create(n,a),end:se.create(o,i)};if(se.is(n)&&se.is(a))return{start:n,end:a};throw new Error(`Range#create called with invalid arguments[${n}, ${a}, ${o}, ${i}]`)}t.create=e;function r(n){let a=n;return v.objectLiteral(a)&&se.is(a.start)&&se.is(a.end)}t.is=r})(re||(re={}));(function(t){function e(n,a){return{uri:n,range:a}}t.create=e;function r(n){let a=n;return v.objectLiteral(a)&&re.is(a.range)&&(v.string(a.uri)||v.undefined(a.uri))}t.is=r})(ms||(ms={}));(function(t){function e(n,a,o,i){return{targetUri:n,targetRange:a,targetSelectionRange:o,originSelectionRange:i}}t.create=e;function r(n){let a=n;return v.objectLiteral(a)&&re.is(a.targetRange)&&v.string(a.targetUri)&&re.is(a.targetSelectionRange)&&(re.is(a.originSelectionRange)||v.undefined(a.originSelectionRange))}t.is=r})(xy||(xy={}));(function(t){function e(n,a,o,i){return{red:n,green:a,blue:o,alpha:i}}t.create=e;function r(n){let a=n;return v.objectLiteral(a)&&v.numberRange(a.red,0,1)&&v.numberRange(a.green,0,1)&&v.numberRange(a.blue,0,1)&&v.numberRange(a.alpha,0,1)}t.is=r})(dc||(dc={}));(function(t){function e(n,a){return{range:n,color:a}}t.create=e;function r(n){let a=n;return v.objectLiteral(a)&&re.is(a.range)&&dc.is(a.color)}t.is=r})(Ay||(Ay={}));(function(t){function e(n,a,o){return{label:n,textEdit:a,additionalTextEdits:o}}t.create=e;function r(n){let a=n;return v.objectLiteral(a)&&v.string(a.label)&&(v.undefined(a.textEdit)||mr.is(a))&&(v.undefined(a.additionalTextEdits)||v.typedArray(a.additionalTextEdits,mr.is))}t.is=r})(ky||(ky={}));(function(t){t.Comment="comment",t.Imports="imports",t.Region="region"})(Iy||(Iy={}));(function(t){function e(n,a,o,i,s,u){let l={startLine:n,endLine:a};return v.defined(o)&&(l.startCharacter=o),v.defined(i)&&(l.endCharacter=i),v.defined(s)&&(l.kind=s),v.defined(u)&&(l.collapsedText=u),l}t.create=e;function r(n){let a=n;return v.objectLiteral(a)&&v.uinteger(a.startLine)&&v.uinteger(a.startLine)&&(v.undefined(a.startCharacter)||v.uinteger(a.startCharacter))&&(v.undefined(a.endCharacter)||v.uinteger(a.endCharacter))&&(v.undefined(a.kind)||v.string(a.kind))}t.is=r})(Ry||(Ry={}));(function(t){function e(n,a){return{location:n,message:a}}t.create=e;function r(n){let a=n;return v.defined(a)&&ms.is(a.location)&&v.string(a.message)}t.is=r})(pc||(pc={}));(function(t){t.Error=1,t.Warning=2,t.Information=3,t.Hint=4})(Py||(Py={}));(function(t){t.Unnecessary=1,t.Deprecated=2})(Ky||(Ky={}));(function(t){function e(r){let n=r;return v.objectLiteral(n)&&v.string(n.href)}t.is=e})(by||(by={}));(function(t){function e(n,a,o,i,s,u){let l={range:n,message:a};return v.defined(o)&&(l.severity=o),v.defined(i)&&(l.code=i),v.defined(s)&&(l.source=s),v.defined(u)&&(l.relatedInformation=u),l}t.create=e;function r(n){var a;let o=n;return v.defined(o)&&re.is(o.range)&&v.string(o.message)&&(v.number(o.severity)||v.undefined(o.severity))&&(v.integer(o.code)||v.string(o.code)||v.undefined(o.code))&&(v.undefined(o.codeDescription)||v.string((a=o.codeDescription)===null||a===void 0?void 0:a.href))&&(v.string(o.source)||v.undefined(o.source))&&(v.undefined(o.relatedInformation)||v.typedArray(o.relatedInformation,pc.is))}t.is=r})(vs||(vs={}));(function(t){function e(n,a,...o){let i={title:n,command:a};return v.defined(o)&&o.length>0&&(i.arguments=o),i}t.create=e;function r(n){let a=n;return v.defined(a)&&v.string(a.title)&&v.string(a.command)}t.is=r})(Ea||(Ea={}));(function(t){function e(o,i){return{range:o,newText:i}}t.replace=e;function r(o,i){return{range:{start:o,end:o},newText:i}}t.insert=r;function n(o){return{range:o,newText:""}}t.del=n;function a(o){let i=o;return v.objectLiteral(i)&&v.string(i.newText)&&re.is(i.range)}t.is=a})(mr||(mr={}));(function(t){function e(n,a,o){let i={label:n};return a!==void 0&&(i.needsConfirmation=a),o!==void 0&&(i.description=o),i}t.create=e;function r(n){let a=n;return v.objectLiteral(a)&&v.string(a.label)&&(v.boolean(a.needsConfirmation)||a.needsConfirmation===void 0)&&(v.string(a.description)||a.description===void 0)}t.is=r})(ba||(ba={}));(function(t){function e(r){let n=r;return v.string(n)}t.is=e})(Tt||(Tt={}));(function(t){function e(o,i,s){return{range:o,newText:i,annotationId:s}}t.replace=e;function r(o,i,s){return{range:{start:o,end:o},newText:i,annotationId:s}}t.insert=r;function n(o,i){return{range:o,newText:"",annotationId:i}}t.del=n;function a(o){let i=o;return mr.is(i)&&(ba.is(i.annotationId)||Tt.is(i.annotationId))}t.is=a})(wn||(wn={}));(function(t){function e(n,a){return{textDocument:n,edits:a}}t.create=e;function r(n){let a=n;return v.defined(a)&&Ss.is(a.textDocument)&&Array.isArray(a.edits)}t.is=r})(ws||(ws={}));(function(t){function e(n,a,o){let i={kind:"create",uri:n};return a!==void 0&&(a.overwrite!==void 0||a.ignoreIfExists!==void 0)&&(i.options=a),o!==void 0&&(i.annotationId=o),i}t.create=e;function r(n){let a=n;return a&&a.kind==="create"&&v.string(a.uri)&&(a.options===void 0||(a.options.overwrite===void 0||v.boolean(a.options.overwrite))&&(a.options.ignoreIfExists===void 0||v.boolean(a.options.ignoreIfExists)))&&(a.annotationId===void 0||Tt.is(a.annotationId))}t.is=r})(jo||(jo={}));(function(t){function e(n,a,o,i){let s={kind:"rename",oldUri:n,newUri:a};return o!==void 0&&(o.overwrite!==void 0||o.ignoreIfExists!==void 0)&&(s.options=o),i!==void 0&&(s.annotationId=i),s}t.create=e;function r(n){let a=n;return a&&a.kind==="rename"&&v.string(a.oldUri)&&v.string(a.newUri)&&(a.options===void 0||(a.options.overwrite===void 0||v.boolean(a.options.overwrite))&&(a.options.ignoreIfExists===void 0||v.boolean(a.options.ignoreIfExists)))&&(a.annotationId===void 0||Tt.is(a.annotationId))}t.is=r})(Vo||(Vo={}));(function(t){function e(n,a,o){let i={kind:"delete",uri:n};return a!==void 0&&(a.recursive!==void 0||a.ignoreIfNotExists!==void 0)&&(i.options=a),o!==void 0&&(i.annotationId=o),i}t.create=e;function r(n){let a=n;return a&&a.kind==="delete"&&v.string(a.uri)&&(a.options===void 0||(a.options.recursive===void 0||v.boolean(a.options.recursive))&&(a.options.ignoreIfNotExists===void 0||v.boolean(a.options.ignoreIfNotExists)))&&(a.annotationId===void 0||Tt.is(a.annotationId))}t.is=r})(Yo||(Yo={}));(function(t){function e(r){let n=r;return n&&(n.changes!==void 0||n.documentChanges!==void 0)&&(n.documentChanges===void 0||n.documentChanges.every(a=>v.string(a.kind)?jo.is(a)||Vo.is(a)||Yo.is(a):ws.is(a)))}t.is=e})(fc||(fc={}));qo=class{constructor(e,r){this.edits=e,this.changeAnnotations=r}insert(e,r,n){let a,o;if(n===void 0?a=mr.insert(e,r):Tt.is(n)?(o=n,a=wn.insert(e,r,n)):(this.assertChangeAnnotations(this.changeAnnotations),o=this.changeAnnotations.manage(n),a=wn.insert(e,r,o)),this.edits.push(a),o!==void 0)return o}replace(e,r,n){let a,o;if(n===void 0?a=mr.replace(e,r):Tt.is(n)?(o=n,a=wn.replace(e,r,n)):(this.assertChangeAnnotations(this.changeAnnotations),o=this.changeAnnotations.manage(n),a=wn.replace(e,r,o)),this.edits.push(a),o!==void 0)return o}delete(e,r){let n,a;if(r===void 0?n=mr.del(e):Tt.is(r)?(a=r,n=wn.del(e,r)):(this.assertChangeAnnotations(this.changeAnnotations),a=this.changeAnnotations.manage(r),n=wn.del(e,a)),this.edits.push(n),a!==void 0)return a}add(e){this.edits.push(e)}all(){return this.edits}clear(){this.edits.splice(0,this.edits.length)}assertChangeAnnotations(e){if(e===void 0)throw new Error("Text edit change is not configured to manage change annotations.")}},yc=class{constructor(e){this._annotations=e===void 0?Object.create(null):e,this._counter=0,this._size=0}all(){return this._annotations}get size(){return this._size}manage(e,r){let n;if(Tt.is(e)?n=e:(n=this.nextId(),r=e),this._annotations[n]!==void 0)throw new Error(`Id ${n} is already in use.`);if(r===void 0)throw new Error(`No annotation provided for id ${n}`);return this._annotations[n]=r,this._size++,n}nextId(){return this._counter++,this._counter.toString()}},Ey=class{constructor(e){this._textEditChanges=Object.create(null),e!==void 0?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new yc(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach(r=>{if(ws.is(r)){let n=new qo(r.edits,this._changeAnnotations);this._textEditChanges[r.textDocument.uri]=n}})):e.changes&&Object.keys(e.changes).forEach(r=>{let n=new qo(e.changes[r]);this._textEditChanges[r]=n})):this._workspaceEdit={}}get edit(){return this.initDocumentChanges(),this._changeAnnotations!==void 0&&(this._changeAnnotations.size===0?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit}getTextEditChange(e){if(Ss.is(e)){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let r={uri:e.uri,version:e.version},n=this._textEditChanges[r.uri];if(!n){let a=[],o={textDocument:r,edits:a};this._workspaceEdit.documentChanges.push(o),n=new qo(a,this._changeAnnotations),this._textEditChanges[r.uri]=n}return n}else{if(this.initChanges(),this._workspaceEdit.changes===void 0)throw new Error("Workspace edit is not configured for normal text edit changes.");let r=this._textEditChanges[e];if(!r){let n=[];this._workspaceEdit.changes[e]=n,r=new qo(n),this._textEditChanges[e]=r}return r}}initDocumentChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._changeAnnotations=new yc,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())}initChanges(){this._workspaceEdit.documentChanges===void 0&&this._workspaceEdit.changes===void 0&&(this._workspaceEdit.changes=Object.create(null))}createFile(e,r,n){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let a;ba.is(r)||Tt.is(r)?a=r:n=r;let o,i;if(a===void 0?o=jo.create(e,n):(i=Tt.is(a)?a:this._changeAnnotations.manage(a),o=jo.create(e,n,i)),this._workspaceEdit.documentChanges.push(o),i!==void 0)return i}renameFile(e,r,n,a){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let o;ba.is(n)||Tt.is(n)?o=n:a=n;let i,s;if(o===void 0?i=Vo.create(e,r,a):(s=Tt.is(o)?o:this._changeAnnotations.manage(o),i=Vo.create(e,r,a,s)),this._workspaceEdit.documentChanges.push(i),s!==void 0)return s}deleteFile(e,r,n){if(this.initDocumentChanges(),this._workspaceEdit.documentChanges===void 0)throw new Error("Workspace edit is not configured for document changes.");let a;ba.is(r)||Tt.is(r)?a=r:n=r;let o,i;if(a===void 0?o=Yo.create(e,n):(i=Tt.is(a)?a:this._changeAnnotations.manage(a),o=Yo.create(e,n,i)),this._workspaceEdit.documentChanges.push(o),i!==void 0)return i}};(function(t){function e(n){return{uri:n}}t.create=e;function r(n){let a=n;return v.defined(a)&&v.string(a.uri)}t.is=r})(Dy||(Dy={}));(function(t){function e(n,a){return{uri:n,version:a}}t.create=e;function r(n){let a=n;return v.defined(a)&&v.string(a.uri)&&v.integer(a.version)}t.is=r})(Ny||(Ny={}));(function(t){function e(n,a){return{uri:n,version:a}}t.create=e;function r(n){let a=n;return v.defined(a)&&v.string(a.uri)&&(a.version===null||v.integer(a.version))}t.is=r})(Ss||(Ss={}));(function(t){function e(n,a,o,i){return{uri:n,languageId:a,version:o,text:i}}t.create=e;function r(n){let a=n;return v.defined(a)&&v.string(a.uri)&&v.string(a.languageId)&&v.integer(a.version)&&v.string(a.text)}t.is=r})(_y||(_y={}));(function(t){t.PlainText="plaintext",t.Markdown="markdown";function e(r){let n=r;return n===t.PlainText||n===t.Markdown}t.is=e})(hc||(hc={}));(function(t){function e(r){let n=r;return v.objectLiteral(r)&&hc.is(n.kind)&&v.string(n.value)}t.is=e})(Qo||(Qo={}));(function(t){t.Text=1,t.Method=2,t.Function=3,t.Constructor=4,t.Field=5,t.Variable=6,t.Class=7,t.Interface=8,t.Module=9,t.Property=10,t.Unit=11,t.Value=12,t.Enum=13,t.Keyword=14,t.Snippet=15,t.Color=16,t.File=17,t.Reference=18,t.Folder=19,t.EnumMember=20,t.Constant=21,t.Struct=22,t.Event=23,t.Operator=24,t.TypeParameter=25})(My||(My={}));(function(t){t.PlainText=1,t.Snippet=2})(Oy||(Oy={}));(function(t){t.Deprecated=1})(zy||(zy={}));(function(t){function e(n,a,o){return{newText:n,insert:a,replace:o}}t.create=e;function r(n){let a=n;return a&&v.string(a.newText)&&re.is(a.insert)&&re.is(a.replace)}t.is=r})(Ly||(Ly={}));(function(t){t.asIs=1,t.adjustIndentation=2})(Fy||(Fy={}));(function(t){function e(r){let n=r;return n&&(v.string(n.detail)||n.detail===void 0)&&(v.string(n.description)||n.description===void 0)}t.is=e})(Wy||(Wy={}));(function(t){function e(r){return{label:r}}t.create=e})(Gy||(Gy={}));(function(t){function e(r,n){return{items:r||[],isIncomplete:!!n}}t.create=e})(By||(By={}));(function(t){function e(n){return n.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}t.fromPlainText=e;function r(n){let a=n;return v.string(a)||v.objectLiteral(a)&&v.string(a.language)&&v.string(a.value)}t.is=r})(Cs||(Cs={}));(function(t){function e(r){let n=r;return!!n&&v.objectLiteral(n)&&(Qo.is(n.contents)||Cs.is(n.contents)||v.typedArray(n.contents,Cs.is))&&(r.range===void 0||re.is(r.range))}t.is=e})(Hy||(Hy={}));(function(t){function e(r,n){return n?{label:r,documentation:n}:{label:r}}t.create=e})(Uy||(Uy={}));(function(t){function e(r,n,...a){let o={label:r};return v.defined(n)&&(o.documentation=n),v.defined(a)?o.parameters=a:o.parameters=[],o}t.create=e})(qy||(qy={}));(function(t){t.Text=1,t.Read=2,t.Write=3})(jy||(jy={}));(function(t){function e(r,n){let a={range:r};return v.number(n)&&(a.kind=n),a}t.create=e})(Vy||(Vy={}));(function(t){t.File=1,t.Module=2,t.Namespace=3,t.Package=4,t.Class=5,t.Method=6,t.Property=7,t.Field=8,t.Constructor=9,t.Enum=10,t.Interface=11,t.Function=12,t.Variable=13,t.Constant=14,t.String=15,t.Number=16,t.Boolean=17,t.Array=18,t.Object=19,t.Key=20,t.Null=21,t.EnumMember=22,t.Struct=23,t.Event=24,t.Operator=25,t.TypeParameter=26})(Yy||(Yy={}));(function(t){t.Deprecated=1})(Qy||(Qy={}));(function(t){function e(r,n,a,o,i){let s={name:r,kind:n,location:{uri:o,range:a}};return i&&(s.containerName=i),s}t.create=e})(Xy||(Xy={}));(function(t){function e(r,n,a,o){return o!==void 0?{name:r,kind:n,location:{uri:a,range:o}}:{name:r,kind:n,location:{uri:a}}}t.create=e})(Jy||(Jy={}));(function(t){function e(n,a,o,i,s,u){let l={name:n,detail:a,kind:o,range:i,selectionRange:s};return u!==void 0&&(l.children=u),l}t.create=e;function r(n){let a=n;return a&&v.string(a.name)&&v.number(a.kind)&&re.is(a.range)&&re.is(a.selectionRange)&&(a.detail===void 0||v.string(a.detail))&&(a.deprecated===void 0||v.boolean(a.deprecated))&&(a.children===void 0||Array.isArray(a.children))&&(a.tags===void 0||Array.isArray(a.tags))}t.is=r})(Zy||(Zy={}));(function(t){t.Empty="",t.QuickFix="quickfix",t.Refactor="refactor",t.RefactorExtract="refactor.extract",t.RefactorInline="refactor.inline",t.RefactorRewrite="refactor.rewrite",t.Source="source",t.SourceOrganizeImports="source.organizeImports",t.SourceFixAll="source.fixAll"})(eh||(eh={}));(function(t){t.Invoked=1,t.Automatic=2})($s||($s={}));(function(t){function e(n,a,o){let i={diagnostics:n};return a!=null&&(i.only=a),o!=null&&(i.triggerKind=o),i}t.create=e;function r(n){let a=n;return v.defined(a)&&v.typedArray(a.diagnostics,vs.is)&&(a.only===void 0||v.typedArray(a.only,v.string))&&(a.triggerKind===void 0||a.triggerKind===$s.Invoked||a.triggerKind===$s.Automatic)}t.is=r})(th||(th={}));(function(t){function e(n,a,o){let i={title:n},s=!0;return typeof a=="string"?(s=!1,i.kind=a):Ea.is(a)?i.command=a:i.edit=a,s&&o!==void 0&&(i.kind=o),i}t.create=e;function r(n){let a=n;return a&&v.string(a.title)&&(a.diagnostics===void 0||v.typedArray(a.diagnostics,vs.is))&&(a.kind===void 0||v.string(a.kind))&&(a.edit!==void 0||a.command!==void 0)&&(a.command===void 0||Ea.is(a.command))&&(a.isPreferred===void 0||v.boolean(a.isPreferred))&&(a.edit===void 0||fc.is(a.edit))}t.is=r})(rh||(rh={}));(function(t){function e(n,a){let o={range:n};return v.defined(a)&&(o.data=a),o}t.create=e;function r(n){let a=n;return v.defined(a)&&re.is(a.range)&&(v.undefined(a.command)||Ea.is(a.command))}t.is=r})(nh||(nh={}));(function(t){function e(n,a){return{tabSize:n,insertSpaces:a}}t.create=e;function r(n){let a=n;return v.defined(a)&&v.uinteger(a.tabSize)&&v.boolean(a.insertSpaces)}t.is=r})(ah||(ah={}));(function(t){function e(n,a,o){return{range:n,target:a,data:o}}t.create=e;function r(n){let a=n;return v.defined(a)&&re.is(a.range)&&(v.undefined(a.target)||v.string(a.target))}t.is=r})(oh||(oh={}));(function(t){function e(n,a){return{range:n,parent:a}}t.create=e;function r(n){let a=n;return v.objectLiteral(a)&&re.is(a.range)&&(a.parent===void 0||t.is(a.parent))}t.is=r})(ih||(ih={}));(function(t){t.namespace="namespace",t.type="type",t.class="class",t.enum="enum",t.interface="interface",t.struct="struct",t.typeParameter="typeParameter",t.parameter="parameter",t.variable="variable",t.property="property",t.enumMember="enumMember",t.event="event",t.function="function",t.method="method",t.macro="macro",t.keyword="keyword",t.modifier="modifier",t.comment="comment",t.string="string",t.number="number",t.regexp="regexp",t.operator="operator",t.decorator="decorator"})(sh||(sh={}));(function(t){t.declaration="declaration",t.definition="definition",t.readonly="readonly",t.static="static",t.deprecated="deprecated",t.abstract="abstract",t.async="async",t.modification="modification",t.documentation="documentation",t.defaultLibrary="defaultLibrary"})(uh||(uh={}));(function(t){function e(r){let n=r;return v.objectLiteral(n)&&(n.resultId===void 0||typeof n.resultId=="string")&&Array.isArray(n.data)&&(n.data.length===0||typeof n.data[0]=="number")}t.is=e})(lh||(lh={}));(function(t){function e(n,a){return{range:n,text:a}}t.create=e;function r(n){let a=n;return a!=null&&re.is(a.range)&&v.string(a.text)}t.is=r})(ch||(ch={}));(function(t){function e(n,a,o){return{range:n,variableName:a,caseSensitiveLookup:o}}t.create=e;function r(n){let a=n;return a!=null&&re.is(a.range)&&v.boolean(a.caseSensitiveLookup)&&(v.string(a.variableName)||a.variableName===void 0)}t.is=r})(dh||(dh={}));(function(t){function e(n,a){return{range:n,expression:a}}t.create=e;function r(n){let a=n;return a!=null&&re.is(a.range)&&(v.string(a.expression)||a.expression===void 0)}t.is=r})(ph||(ph={}));(function(t){function e(n,a){return{frameId:n,stoppedLocation:a}}t.create=e;function r(n){let a=n;return v.defined(a)&&re.is(n.stoppedLocation)}t.is=r})(fh||(fh={}));(function(t){t.Type=1,t.Parameter=2;function e(r){return r===1||r===2}t.is=e})(gc||(gc={}));(function(t){function e(n){return{value:n}}t.create=e;function r(n){let a=n;return v.objectLiteral(a)&&(a.tooltip===void 0||v.string(a.tooltip)||Qo.is(a.tooltip))&&(a.location===void 0||ms.is(a.location))&&(a.command===void 0||Ea.is(a.command))}t.is=r})(mc||(mc={}));(function(t){function e(n,a,o){let i={position:n,label:a};return o!==void 0&&(i.kind=o),i}t.create=e;function r(n){let a=n;return v.objectLiteral(a)&&se.is(a.position)&&(v.string(a.label)||v.typedArray(a.label,mc.is))&&(a.kind===void 0||gc.is(a.kind))&&a.textEdits===void 0||v.typedArray(a.textEdits,mr.is)&&(a.tooltip===void 0||v.string(a.tooltip)||Qo.is(a.tooltip))&&(a.paddingLeft===void 0||v.boolean(a.paddingLeft))&&(a.paddingRight===void 0||v.boolean(a.paddingRight))}t.is=r})(yh||(yh={}));(function(t){function e(r){return{kind:"snippet",value:r}}t.createSnippet=e})(hh||(hh={}));(function(t){function e(r,n,a,o){return{insertText:r,filterText:n,range:a,command:o}}t.create=e})(gh||(gh={}));(function(t){function e(r){return{items:r}}t.create=e})(mh||(mh={}));(function(t){t.Invoked=0,t.Automatic=1})(vh||(vh={}));(function(t){function e(r,n){return{range:r,text:n}}t.create=e})(wh||(wh={}));(function(t){function e(r,n){return{triggerKind:r,selectedCompletionInfo:n}}t.create=e})(Sh||(Sh={}));(function(t){function e(r){let n=r;return v.objectLiteral(n)&&cc.is(n.uri)&&v.string(n.name)}t.is=e})(Ch||(Ch={}));HO=[`
`,`\r
`,"\r"];(function(t){function e(o,i,s,u){return new Th(o,i,s,u)}t.create=e;function r(o){let i=o;return!!(v.defined(i)&&v.string(i.uri)&&(v.undefined(i.languageId)||v.string(i.languageId))&&v.uinteger(i.lineCount)&&v.func(i.getText)&&v.func(i.positionAt)&&v.func(i.offsetAt))}t.is=r;function n(o,i){let s=o.getText(),u=a(i,(c,d)=>{let p=c.range.start.line-d.range.start.line;return p===0?c.range.start.character-d.range.start.character:p}),l=s.length;for(let c=u.length-1;c>=0;c--){let d=u[c],p=o.offsetAt(d.range.start),h=o.offsetAt(d.range.end);if(h<=l)s=s.substring(0,p)+d.newText+s.substring(h,s.length);else throw new Error("Overlapping edit");l=p}return s}t.applyEdits=n;function a(o,i){if(o.length<=1)return o;let s=o.length/2|0,u=o.slice(0,s),l=o.slice(s);a(u,i),a(l,i);let c=0,d=0,p=0;for(;c<u.length&&d<l.length;)i(u[c],l[d])<=0?o[p++]=u[c++]:o[p++]=l[d++];for(;c<u.length;)o[p++]=u[c++];for(;d<l.length;)o[p++]=l[d++];return o}})($h||($h={}));Th=class{constructor(e,r,n,a){this._uri=e,this._languageId=r,this._version=n,this._content=a,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let r=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(r,n)}return this._content}update(e,r){this._content=e.text,this._version=r,this._lineOffsets=void 0}getLineOffsets(){if(this._lineOffsets===void 0){let e=[],r=this._content,n=!0;for(let a=0;a<r.length;a++){n&&(e.push(a),n=!1);let o=r.charAt(a);n=o==="\r"||o===`
`,o==="\r"&&a+1<r.length&&r.charAt(a+1)===`
`&&a++}n&&r.length>0&&e.push(r.length),this._lineOffsets=e}return this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let r=this.getLineOffsets(),n=0,a=r.length;if(a===0)return se.create(0,e);for(;n<a;){let i=Math.floor((n+a)/2);r[i]>e?a=i:n=i+1}let o=n-1;return se.create(o,e-r[o])}offsetAt(e){let r=this.getLineOffsets();if(e.line>=r.length)return this._content.length;if(e.line<0)return 0;let n=r[e.line],a=e.line+1<r.length?r[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,a),n)}get lineCount(){return this.getLineOffsets().length}};(function(t){let e=Object.prototype.toString;function r(h){return typeof h<"u"}t.defined=r;function n(h){return typeof h>"u"}t.undefined=n;function a(h){return h===!0||h===!1}t.boolean=a;function o(h){return e.call(h)==="[object String]"}t.string=o;function i(h){return e.call(h)==="[object Number]"}t.number=i;function s(h,w,S){return e.call(h)==="[object Number]"&&w<=h&&h<=S}t.numberRange=s;function u(h){return e.call(h)==="[object Number]"&&-2147483648<=h&&h<=2147483647}t.integer=u;function l(h){return e.call(h)==="[object Number]"&&0<=h&&h<=2147483647}t.uinteger=l;function c(h){return e.call(h)==="[object Function]"}t.func=c;function d(h){return h!==null&&typeof h=="object"}t.objectLiteral=d;function p(h,w){return Array.isArray(h)&&h.every(w)}t.typedArray=p})(v||(v={}))});var jn=M(Eh=>{"use strict";Object.defineProperty(Eh,"__esModule",{value:!0});var Kh;function bh(){if(Kh===void 0)throw new Error("No runtime abstraction layer installed");return Kh}(function(t){function e(r){if(r===void 0)throw new Error("No runtime abstraction layer provided");Kh=r}t.install=e})(bh||(bh={}));Eh.default=bh});var Zo=M(Kt=>{"use strict";Object.defineProperty(Kt,"__esModule",{value:!0});Kt.stringArray=Kt.array=Kt.func=Kt.error=Kt.number=Kt.string=Kt.boolean=void 0;function tz(t){return t===!0||t===!1}Kt.boolean=tz;function b$(t){return typeof t=="string"||t instanceof String}Kt.string=b$;function rz(t){return typeof t=="number"||t instanceof Number}Kt.number=rz;function nz(t){return t instanceof Error}Kt.error=nz;function az(t){return typeof t=="function"}Kt.func=az;function E$(t){return Array.isArray(t)}Kt.array=E$;function oz(t){return E$(t)&&t.every(e=>b$(e))}Kt.stringArray=oz});var Oa=M(ei=>{"use strict";Object.defineProperty(ei,"__esModule",{value:!0});ei.Emitter=ei.Event=void 0;var iz=jn(),D$;(function(t){let e={dispose(){}};t.None=function(){return e}})(D$||(ei.Event=D$={}));var Dh=class{add(e,r=null,n){this._callbacks||(this._callbacks=[],this._contexts=[]),this._callbacks.push(e),this._contexts.push(r),Array.isArray(n)&&n.push({dispose:()=>this.remove(e,r)})}remove(e,r=null){if(!this._callbacks)return;let n=!1;for(let a=0,o=this._callbacks.length;a<o;a++)if(this._callbacks[a]===e)if(this._contexts[a]===r){this._callbacks.splice(a,1),this._contexts.splice(a,1);return}else n=!0;if(n)throw new Error("When adding a listener with a context, you should remove it with the same context")}invoke(...e){if(!this._callbacks)return[];let r=[],n=this._callbacks.slice(0),a=this._contexts.slice(0);for(let o=0,i=n.length;o<i;o++)try{r.push(n[o].apply(a[o],e))}catch(s){(0,iz.default)().console.error(s)}return r}isEmpty(){return!this._callbacks||this._callbacks.length===0}dispose(){this._callbacks=void 0,this._contexts=void 0}},Tc=class t{constructor(e){this._options=e}get event(){return this._event||(this._event=(e,r,n)=>{this._callbacks||(this._callbacks=new Dh),this._options&&this._options.onFirstListenerAdd&&this._callbacks.isEmpty()&&this._options.onFirstListenerAdd(this),this._callbacks.add(e,r);let a={dispose:()=>{this._callbacks&&(this._callbacks.remove(e,r),a.dispose=t._noop,this._options&&this._options.onLastListenerRemove&&this._callbacks.isEmpty()&&this._options.onLastListenerRemove(this))}};return Array.isArray(n)&&n.push(a),a}),this._event}fire(e){this._callbacks&&this._callbacks.invoke.call(this._callbacks,e)}dispose(){this._callbacks&&(this._callbacks.dispose(),this._callbacks=void 0)}};ei.Emitter=Tc;Tc._noop=function(){}});var Ks=M(ti=>{"use strict";Object.defineProperty(ti,"__esModule",{value:!0});ti.CancellationTokenSource=ti.CancellationToken=void 0;var sz=jn(),uz=Zo(),Nh=Oa(),xc;(function(t){t.None=Object.freeze({isCancellationRequested:!1,onCancellationRequested:Nh.Event.None}),t.Cancelled=Object.freeze({isCancellationRequested:!0,onCancellationRequested:Nh.Event.None});function e(r){let n=r;return n&&(n===t.None||n===t.Cancelled||uz.boolean(n.isCancellationRequested)&&!!n.onCancellationRequested)}t.is=e})(xc||(ti.CancellationToken=xc={}));var lz=Object.freeze(function(t,e){let r=(0,sz.default)().timer.setTimeout(t.bind(e),0);return{dispose(){r.dispose()}}}),Ac=class{constructor(){this._isCancelled=!1}cancel(){this._isCancelled||(this._isCancelled=!0,this._emitter&&(this._emitter.fire(void 0),this.dispose()))}get isCancellationRequested(){return this._isCancelled}get onCancellationRequested(){return this._isCancelled?lz:(this._emitter||(this._emitter=new Nh.Emitter),this._emitter.event)}dispose(){this._emitter&&(this._emitter.dispose(),this._emitter=void 0)}},_h=class{get token(){return this._token||(this._token=new Ac),this._token}cancel(){this._token?this._token.cancel():this._token=xc.Cancelled}dispose(){this._token?this._token instanceof Ac&&this._token.dispose():this._token=xc.None}};ti.CancellationTokenSource=_h});var Sg=M(H=>{"use strict";Object.defineProperty(H,"__esModule",{value:!0});H.Message=H.NotificationType9=H.NotificationType8=H.NotificationType7=H.NotificationType6=H.NotificationType5=H.NotificationType4=H.NotificationType3=H.NotificationType2=H.NotificationType1=H.NotificationType0=H.NotificationType=H.RequestType9=H.RequestType8=H.RequestType7=H.RequestType6=H.RequestType5=H.RequestType4=H.RequestType3=H.RequestType2=H.RequestType1=H.RequestType=H.RequestType0=H.AbstractMessageSignature=H.ParameterStructures=H.ResponseError=H.ErrorCodes=void 0;var Ga=Zo(),Qh;(function(t){t.ParseError=-32700,t.InvalidRequest=-32600,t.MethodNotFound=-32601,t.InvalidParams=-32602,t.InternalError=-32603,t.jsonrpcReservedErrorRangeStart=-32099,t.serverErrorStart=-32099,t.MessageWriteError=-32099,t.MessageReadError=-32098,t.PendingResponseRejected=-32097,t.ConnectionInactive=-32096,t.ServerNotInitialized=-32002,t.UnknownErrorCode=-32001,t.jsonrpcReservedErrorRangeEnd=-32e3,t.serverErrorEnd=-32e3})(Qh||(H.ErrorCodes=Qh={}));var Xh=class t extends Error{constructor(e,r,n){super(r),this.code=Ga.number(e)?e:Qh.UnknownErrorCode,this.data=n,Object.setPrototypeOf(this,t.prototype)}toJson(){let e={code:this.code,message:this.message};return this.data!==void 0&&(e.data=this.data),e}};H.ResponseError=Xh;var rr=class t{constructor(e){this.kind=e}static is(e){return e===t.auto||e===t.byName||e===t.byPosition}toString(){return this.kind}};H.ParameterStructures=rr;rr.auto=new rr("auto");rr.byPosition=new rr("byPosition");rr.byName=new rr("byName");var Ke=class{constructor(e,r){this.method=e,this.numberOfParams=r}get parameterStructures(){return rr.auto}};H.AbstractMessageSignature=Ke;var Jh=class extends Ke{constructor(e){super(e,0)}};H.RequestType0=Jh;var Zh=class extends Ke{constructor(e,r=rr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};H.RequestType=Zh;var eg=class extends Ke{constructor(e,r=rr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};H.RequestType1=eg;var tg=class extends Ke{constructor(e){super(e,2)}};H.RequestType2=tg;var rg=class extends Ke{constructor(e){super(e,3)}};H.RequestType3=rg;var ng=class extends Ke{constructor(e){super(e,4)}};H.RequestType4=ng;var ag=class extends Ke{constructor(e){super(e,5)}};H.RequestType5=ag;var og=class extends Ke{constructor(e){super(e,6)}};H.RequestType6=og;var ig=class extends Ke{constructor(e){super(e,7)}};H.RequestType7=ig;var sg=class extends Ke{constructor(e){super(e,8)}};H.RequestType8=sg;var ug=class extends Ke{constructor(e){super(e,9)}};H.RequestType9=ug;var lg=class extends Ke{constructor(e,r=rr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};H.NotificationType=lg;var cg=class extends Ke{constructor(e){super(e,0)}};H.NotificationType0=cg;var dg=class extends Ke{constructor(e,r=rr.auto){super(e,1),this._parameterStructures=r}get parameterStructures(){return this._parameterStructures}};H.NotificationType1=dg;var pg=class extends Ke{constructor(e){super(e,2)}};H.NotificationType2=pg;var fg=class extends Ke{constructor(e){super(e,3)}};H.NotificationType3=fg;var yg=class extends Ke{constructor(e){super(e,4)}};H.NotificationType4=yg;var hg=class extends Ke{constructor(e){super(e,5)}};H.NotificationType5=hg;var gg=class extends Ke{constructor(e){super(e,6)}};H.NotificationType6=gg;var mg=class extends Ke{constructor(e){super(e,7)}};H.NotificationType7=mg;var vg=class extends Ke{constructor(e){super(e,8)}};H.NotificationType8=vg;var wg=class extends Ke{constructor(e){super(e,9)}};H.NotificationType9=wg;var Z$;(function(t){function e(a){let o=a;return o&&Ga.string(o.method)&&(Ga.string(o.id)||Ga.number(o.id))}t.isRequest=e;function r(a){let o=a;return o&&Ga.string(o.method)&&a.id===void 0}t.isNotification=r;function n(a){let o=a;return o&&(o.result!==void 0||!!o.error)&&(Ga.string(o.id)||Ga.number(o.id)||o.id===null)}t.isResponse=n})(Z$||(H.Message=Z$={}))});var $g=M(Yn=>{"use strict";var eT;Object.defineProperty(Yn,"__esModule",{value:!0});Yn.LRUCache=Yn.LinkedMap=Yn.Touch=void 0;var bt;(function(t){t.None=0,t.First=1,t.AsOld=t.First,t.Last=2,t.AsNew=t.Last})(bt||(Yn.Touch=bt={}));var Mc=class{constructor(){this[eT]="LinkedMap",this._map=new Map,this._head=void 0,this._tail=void 0,this._size=0,this._state=0}clear(){this._map.clear(),this._head=void 0,this._tail=void 0,this._size=0,this._state++}isEmpty(){return!this._head&&!this._tail}get size(){return this._size}get first(){return this._head?.value}get last(){return this._tail?.value}has(e){return this._map.has(e)}get(e,r=bt.None){let n=this._map.get(e);if(n)return r!==bt.None&&this.touch(n,r),n.value}set(e,r,n=bt.None){let a=this._map.get(e);if(a)a.value=r,n!==bt.None&&this.touch(a,n);else{switch(a={key:e,value:r,next:void 0,previous:void 0},n){case bt.None:this.addItemLast(a);break;case bt.First:this.addItemFirst(a);break;case bt.Last:this.addItemLast(a);break;default:this.addItemLast(a);break}this._map.set(e,a),this._size++}return this}delete(e){return!!this.remove(e)}remove(e){let r=this._map.get(e);if(r)return this._map.delete(e),this.removeItem(r),this._size--,r.value}shift(){if(!this._head&&!this._tail)return;if(!this._head||!this._tail)throw new Error("Invalid list");let e=this._head;return this._map.delete(e.key),this.removeItem(e),this._size--,e.value}forEach(e,r){let n=this._state,a=this._head;for(;a;){if(r?e.bind(r)(a.value,a.key,this):e(a.value,a.key,this),this._state!==n)throw new Error("LinkedMap got modified during iteration.");a=a.next}}keys(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let a={value:r.key,done:!1};return r=r.next,a}else return{value:void 0,done:!0}}};return n}values(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let a={value:r.value,done:!1};return r=r.next,a}else return{value:void 0,done:!0}}};return n}entries(){let e=this._state,r=this._head,n={[Symbol.iterator]:()=>n,next:()=>{if(this._state!==e)throw new Error("LinkedMap got modified during iteration.");if(r){let a={value:[r.key,r.value],done:!1};return r=r.next,a}else return{value:void 0,done:!0}}};return n}[(eT=Symbol.toStringTag,Symbol.iterator)](){return this.entries()}trimOld(e){if(e>=this.size)return;if(e===0){this.clear();return}let r=this._head,n=this.size;for(;r&&n>e;)this._map.delete(r.key),r=r.next,n--;this._head=r,this._size=n,r&&(r.previous=void 0),this._state++}addItemFirst(e){if(!this._head&&!this._tail)this._tail=e;else if(this._head)e.next=this._head,this._head.previous=e;else throw new Error("Invalid list");this._head=e,this._state++}addItemLast(e){if(!this._head&&!this._tail)this._head=e;else if(this._tail)e.previous=this._tail,this._tail.next=e;else throw new Error("Invalid list");this._tail=e,this._state++}removeItem(e){if(e===this._head&&e===this._tail)this._head=void 0,this._tail=void 0;else if(e===this._head){if(!e.next)throw new Error("Invalid list");e.next.previous=void 0,this._head=e.next}else if(e===this._tail){if(!e.previous)throw new Error("Invalid list");e.previous.next=void 0,this._tail=e.previous}else{let r=e.next,n=e.previous;if(!r||!n)throw new Error("Invalid list");r.previous=n,n.next=r}e.next=void 0,e.previous=void 0,this._state++}touch(e,r){if(!this._head||!this._tail)throw new Error("Invalid list");if(!(r!==bt.First&&r!==bt.Last)){if(r===bt.First){if(e===this._head)return;let n=e.next,a=e.previous;e===this._tail?(a.next=void 0,this._tail=a):(n.previous=a,a.next=n),e.previous=void 0,e.next=this._head,this._head.previous=e,this._head=e,this._state++}else if(r===bt.Last){if(e===this._tail)return;let n=e.next,a=e.previous;e===this._head?(n.previous=void 0,this._head=n):(n.previous=a,a.next=n),e.next=void 0,e.previous=this._tail,this._tail.next=e,this._tail=e,this._state++}}}toJSON(){let e=[];return this.forEach((r,n)=>{e.push([n,r])}),e}fromJSON(e){this.clear();for(let[r,n]of e)this.set(r,n)}};Yn.LinkedMap=Mc;var Cg=class extends Mc{constructor(e,r=1){super(),this._limit=e,this._ratio=Math.min(Math.max(0,r),1)}get limit(){return this._limit}set limit(e){this._limit=e,this.checkTrim()}get ratio(){return this._ratio}set ratio(e){this._ratio=Math.min(Math.max(0,e),1),this.checkTrim()}get(e,r=bt.AsNew){return super.get(e,r)}peek(e){return super.get(e,bt.None)}set(e,r){return super.set(e,r,bt.Last),this.checkTrim(),this}checkTrim(){this.size>this._limit&&this.trimOld(Math.round(this._limit*this._ratio))}};Yn.LRUCache=Cg});var rT=M(Oc=>{"use strict";Object.defineProperty(Oc,"__esModule",{value:!0});Oc.Disposable=void 0;var tT;(function(t){function e(r){return{dispose:r}}t.create=e})(tT||(Oc.Disposable=tT={}))});var nT=M(ui=>{"use strict";Object.defineProperty(ui,"__esModule",{value:!0});ui.SharedArrayReceiverStrategy=ui.SharedArraySenderStrategy=void 0;var Iz=Ks(),lu;(function(t){t.Continue=0,t.Cancelled=1})(lu||(lu={}));var Tg=class{constructor(){this.buffers=new Map}enableCancellation(e){if(e.id===null)return;let r=new SharedArrayBuffer(4),n=new Int32Array(r,0,1);n[0]=lu.Continue,this.buffers.set(e.id,r),e.$cancellationData=r}async sendCancellation(e,r){let n=this.buffers.get(r);if(n===void 0)return;let a=new Int32Array(n,0,1);Atomics.store(a,0,lu.Cancelled)}cleanup(e){this.buffers.delete(e)}dispose(){this.buffers.clear()}};ui.SharedArraySenderStrategy=Tg;var xg=class{constructor(e){this.data=new Int32Array(e,0,1)}get isCancellationRequested(){return Atomics.load(this.data,0)===lu.Cancelled}get onCancellationRequested(){throw new Error("Cancellation over SharedArrayBuffer doesn't support cancellation events")}},Ag=class{constructor(e){this.token=new xg(e)}cancel(){}dispose(){}},kg=class{constructor(){this.kind="request"}createCancellationTokenSource(e){let r=e.$cancellationData;return r===void 0?new Iz.CancellationTokenSource:new Ag(r)}};ui.SharedArrayReceiverStrategy=kg});var Rg=M(zc=>{"use strict";Object.defineProperty(zc,"__esModule",{value:!0});zc.Semaphore=void 0;var Rz=jn(),Ig=class{constructor(e=1){if(e<=0)throw new Error("Capacity must be greater than 0");this._capacity=e,this._active=0,this._waiting=[]}lock(e){return new Promise((r,n)=>{this._waiting.push({thunk:e,resolve:r,reject:n}),this.runNext()})}get active(){return this._active}runNext(){this._waiting.length===0||this._active===this._capacity||(0,Rz.default)().timer.setImmediate(()=>this.doRunNext())}doRunNext(){if(this._waiting.length===0||this._active===this._capacity)return;let e=this._waiting.shift();if(this._active++,this._active>this._capacity)throw new Error("To many thunks active");try{let r=e.thunk();r instanceof Promise?r.then(n=>{this._active--,e.resolve(n),this.runNext()},n=>{this._active--,e.reject(n),this.runNext()}):(this._active--,e.resolve(r),this.runNext())}catch(r){this._active--,e.reject(r),this.runNext()}}};zc.Semaphore=Ig});var oT=M(Qn=>{"use strict";Object.defineProperty(Qn,"__esModule",{value:!0});Qn.ReadableStreamMessageReader=Qn.AbstractMessageReader=Qn.MessageReader=void 0;var Kg=jn(),li=Zo(),Pg=Oa(),Pz=Rg(),aT;(function(t){function e(r){let n=r;return n&&li.func(n.listen)&&li.func(n.dispose)&&li.func(n.onError)&&li.func(n.onClose)&&li.func(n.onPartialMessage)}t.is=e})(aT||(Qn.MessageReader=aT={}));var Lc=class{constructor(){this.errorEmitter=new Pg.Emitter,this.closeEmitter=new Pg.Emitter,this.partialMessageEmitter=new Pg.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e){this.errorEmitter.fire(this.asError(e))}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}get onPartialMessage(){return this.partialMessageEmitter.event}firePartialMessage(e){this.partialMessageEmitter.fire(e)}asError(e){return e instanceof Error?e:new Error(`Reader received error. Reason: ${li.string(e.message)?e.message:"unknown"}`)}};Qn.AbstractMessageReader=Lc;var bg;(function(t){function e(r){let n,a,o,i=new Map,s,u=new Map;if(r===void 0||typeof r=="string")n=r??"utf-8";else{if(n=r.charset??"utf-8",r.contentDecoder!==void 0&&(o=r.contentDecoder,i.set(o.name,o)),r.contentDecoders!==void 0)for(let l of r.contentDecoders)i.set(l.name,l);if(r.contentTypeDecoder!==void 0&&(s=r.contentTypeDecoder,u.set(s.name,s)),r.contentTypeDecoders!==void 0)for(let l of r.contentTypeDecoders)u.set(l.name,l)}return s===void 0&&(s=(0,Kg.default)().applicationJson.decoder,u.set(s.name,s)),{charset:n,contentDecoder:o,contentDecoders:i,contentTypeDecoder:s,contentTypeDecoders:u}}t.fromOptions=e})(bg||(bg={}));var Eg=class extends Lc{constructor(e,r){super(),this.readable=e,this.options=bg.fromOptions(r),this.buffer=(0,Kg.default)().messageBuffer.create(this.options.charset),this._partialMessageTimeout=1e4,this.nextMessageLength=-1,this.messageToken=0,this.readSemaphore=new Pz.Semaphore(1)}set partialMessageTimeout(e){this._partialMessageTimeout=e}get partialMessageTimeout(){return this._partialMessageTimeout}listen(e){this.nextMessageLength=-1,this.messageToken=0,this.partialMessageTimer=void 0,this.callback=e;let r=this.readable.onData(n=>{this.onData(n)});return this.readable.onError(n=>this.fireError(n)),this.readable.onClose(()=>this.fireClose()),r}onData(e){try{for(this.buffer.append(e);;){if(this.nextMessageLength===-1){let n=this.buffer.tryReadHeaders(!0);if(!n)return;let a=n.get("content-length");if(!a){this.fireError(new Error(`Header must provide a Content-Length property.
${JSON.stringify(Object.fromEntries(n))}`));return}let o=parseInt(a);if(isNaN(o)){this.fireError(new Error(`Content-Length value must be a number. Got ${a}`));return}this.nextMessageLength=o}let r=this.buffer.tryReadBody(this.nextMessageLength);if(r===void 0){this.setPartialMessageTimer();return}this.clearPartialMessageTimer(),this.nextMessageLength=-1,this.readSemaphore.lock(async()=>{let n=this.options.contentDecoder!==void 0?await this.options.contentDecoder.decode(r):r,a=await this.options.contentTypeDecoder.decode(n,this.options);this.callback(a)}).catch(n=>{this.fireError(n)})}}catch(r){this.fireError(r)}}clearPartialMessageTimer(){this.partialMessageTimer&&(this.partialMessageTimer.dispose(),this.partialMessageTimer=void 0)}setPartialMessageTimer(){this.clearPartialMessageTimer(),!(this._partialMessageTimeout<=0)&&(this.partialMessageTimer=(0,Kg.default)().timer.setTimeout((e,r)=>{this.partialMessageTimer=void 0,e===this.messageToken&&(this.firePartialMessage({messageToken:e,waitingTime:r}),this.setPartialMessageTimer())},this._partialMessageTimeout,this.messageToken,this._partialMessageTimeout))}};Qn.ReadableStreamMessageReader=Eg});var cT=M(Xn=>{"use strict";Object.defineProperty(Xn,"__esModule",{value:!0});Xn.WriteableStreamMessageWriter=Xn.AbstractMessageWriter=Xn.MessageWriter=void 0;var iT=jn(),cu=Zo(),Kz=Rg(),sT=Oa(),bz="Content-Length: ",uT=`\r
`,lT;(function(t){function e(r){let n=r;return n&&cu.func(n.dispose)&&cu.func(n.onClose)&&cu.func(n.onError)&&cu.func(n.write)}t.is=e})(lT||(Xn.MessageWriter=lT={}));var Fc=class{constructor(){this.errorEmitter=new sT.Emitter,this.closeEmitter=new sT.Emitter}dispose(){this.errorEmitter.dispose(),this.closeEmitter.dispose()}get onError(){return this.errorEmitter.event}fireError(e,r,n){this.errorEmitter.fire([this.asError(e),r,n])}get onClose(){return this.closeEmitter.event}fireClose(){this.closeEmitter.fire(void 0)}asError(e){return e instanceof Error?e:new Error(`Writer received error. Reason: ${cu.string(e.message)?e.message:"unknown"}`)}};Xn.AbstractMessageWriter=Fc;var Dg;(function(t){function e(r){return r===void 0||typeof r=="string"?{charset:r??"utf-8",contentTypeEncoder:(0,iT.default)().applicationJson.encoder}:{charset:r.charset??"utf-8",contentEncoder:r.contentEncoder,contentTypeEncoder:r.contentTypeEncoder??(0,iT.default)().applicationJson.encoder}}t.fromOptions=e})(Dg||(Dg={}));var Ng=class extends Fc{constructor(e,r){super(),this.writable=e,this.options=Dg.fromOptions(r),this.errorCount=0,this.writeSemaphore=new Kz.Semaphore(1),this.writable.onError(n=>this.fireError(n)),this.writable.onClose(()=>this.fireClose())}async write(e){return this.writeSemaphore.lock(async()=>this.options.contentTypeEncoder.encode(e,this.options).then(n=>this.options.contentEncoder!==void 0?this.options.contentEncoder.encode(n):n).then(n=>{let a=[];return a.push(bz,n.byteLength.toString(),uT),a.push(uT),this.doWrite(e,a,n)},n=>{throw this.fireError(n),n}))}async doWrite(e,r,n){try{return await this.writable.write(r.join(""),"ascii"),this.writable.write(n)}catch(a){return this.handleError(a,e),Promise.reject(a)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){this.writable.end()}};Xn.WriteableStreamMessageWriter=Ng});var dT=M(Wc=>{"use strict";Object.defineProperty(Wc,"__esModule",{value:!0});Wc.AbstractMessageBuffer=void 0;var Ez=13,Dz=10,Nz=`\r
`,_g=class{constructor(e="utf-8"){this._encoding=e,this._chunks=[],this._totalLength=0}get encoding(){return this._encoding}append(e){let r=typeof e=="string"?this.fromString(e,this._encoding):e;this._chunks.push(r),this._totalLength+=r.byteLength}tryReadHeaders(e=!1){if(this._chunks.length===0)return;let r=0,n=0,a=0,o=0;e:for(;n<this._chunks.length;){let l=this._chunks[n];for(a=0;a<l.length;){switch(l[a]){case Ez:switch(r){case 0:r=1;break;case 2:r=3;break;default:r=0}break;case Dz:switch(r){case 1:r=2;break;case 3:r=4,a++;break e;default:r=0}break;default:r=0}a++}o+=l.byteLength,n++}if(r!==4)return;let i=this._read(o+a),s=new Map,u=this.toString(i,"ascii").split(Nz);if(u.length<2)return s;for(let l=0;l<u.length-2;l++){let c=u[l],d=c.indexOf(":");if(d===-1)throw new Error(`Message header must separate key and value using ':'
${c}`);let p=c.substr(0,d),h=c.substr(d+1).trim();s.set(e?p.toLowerCase():p,h)}return s}tryReadBody(e){if(!(this._totalLength<e))return this._read(e)}get numberOfBytes(){return this._totalLength}_read(e){if(e===0)return this.emptyBuffer();if(e>this._totalLength)throw new Error("Cannot read so many bytes!");if(this._chunks[0].byteLength===e){let o=this._chunks[0];return this._chunks.shift(),this._totalLength-=e,this.asNative(o)}if(this._chunks[0].byteLength>e){let o=this._chunks[0],i=this.asNative(o,e);return this._chunks[0]=o.slice(e),this._totalLength-=e,i}let r=this.allocNative(e),n=0,a=0;for(;e>0;){let o=this._chunks[a];if(o.byteLength>e){let i=o.slice(0,e);r.set(i,n),n+=e,this._chunks[a]=o.slice(e),this._totalLength-=e,e-=e}else r.set(o,n),n+=o.byteLength,this._chunks.shift(),this._totalLength-=o.byteLength,e-=o.byteLength}return r}};Wc.AbstractMessageBuffer=_g});var gT=M(X=>{"use strict";Object.defineProperty(X,"__esModule",{value:!0});X.createMessageConnection=X.ConnectionOptions=X.MessageStrategy=X.CancellationStrategy=X.CancellationSenderStrategy=X.CancellationReceiverStrategy=X.RequestCancellationReceiverStrategy=X.IdCancellationReceiverStrategy=X.ConnectionStrategy=X.ConnectionError=X.ConnectionErrors=X.LogTraceNotification=X.SetTraceNotification=X.TraceFormat=X.TraceValues=X.Trace=X.NullLogger=X.ProgressType=X.ProgressToken=void 0;var pT=jn(),Ge=Zo(),q=Sg(),fT=$g(),du=Oa(),Mg=Ks(),yu;(function(t){t.type=new q.NotificationType("$/cancelRequest")})(yu||(yu={}));var Og;(function(t){function e(r){return typeof r=="string"||typeof r=="number"}t.is=e})(Og||(X.ProgressToken=Og={}));var pu;(function(t){t.type=new q.NotificationType("$/progress")})(pu||(pu={}));var zg=class{constructor(){}};X.ProgressType=zg;var Lg;(function(t){function e(r){return Ge.func(r)}t.is=e})(Lg||(Lg={}));X.NullLogger=Object.freeze({error:()=>{},warn:()=>{},info:()=>{},log:()=>{}});var de;(function(t){t[t.Off=0]="Off",t[t.Messages=1]="Messages",t[t.Compact=2]="Compact",t[t.Verbose=3]="Verbose"})(de||(X.Trace=de={}));var yT;(function(t){t.Off="off",t.Messages="messages",t.Compact="compact",t.Verbose="verbose"})(yT||(X.TraceValues=yT={}));(function(t){function e(n){if(!Ge.string(n))return t.Off;switch(n=n.toLowerCase(),n){case"off":return t.Off;case"messages":return t.Messages;case"compact":return t.Compact;case"verbose":return t.Verbose;default:return t.Off}}t.fromString=e;function r(n){switch(n){case t.Off:return"off";case t.Messages:return"messages";case t.Compact:return"compact";case t.Verbose:return"verbose";default:return"off"}}t.toString=r})(de||(X.Trace=de={}));var dr;(function(t){t.Text="text",t.JSON="json"})(dr||(X.TraceFormat=dr={}));(function(t){function e(r){return Ge.string(r)?(r=r.toLowerCase(),r==="json"?t.JSON:t.Text):t.Text}t.fromString=e})(dr||(X.TraceFormat=dr={}));var Fg;(function(t){t.type=new q.NotificationType("$/setTrace")})(Fg||(X.SetTraceNotification=Fg={}));var Gc;(function(t){t.type=new q.NotificationType("$/logTrace")})(Gc||(X.LogTraceNotification=Gc={}));var fu;(function(t){t[t.Closed=1]="Closed",t[t.Disposed=2]="Disposed",t[t.AlreadyListening=3]="AlreadyListening"})(fu||(X.ConnectionErrors=fu={}));var ci=class t extends Error{constructor(e,r){super(r),this.code=e,Object.setPrototypeOf(this,t.prototype)}};X.ConnectionError=ci;var Wg;(function(t){function e(r){let n=r;return n&&Ge.func(n.cancelUndispatched)}t.is=e})(Wg||(X.ConnectionStrategy=Wg={}));var Bc;(function(t){function e(r){let n=r;return n&&(n.kind===void 0||n.kind==="id")&&Ge.func(n.createCancellationTokenSource)&&(n.dispose===void 0||Ge.func(n.dispose))}t.is=e})(Bc||(X.IdCancellationReceiverStrategy=Bc={}));var Gg;(function(t){function e(r){let n=r;return n&&n.kind==="request"&&Ge.func(n.createCancellationTokenSource)&&(n.dispose===void 0||Ge.func(n.dispose))}t.is=e})(Gg||(X.RequestCancellationReceiverStrategy=Gg={}));var Hc;(function(t){t.Message=Object.freeze({createCancellationTokenSource(r){return new Mg.CancellationTokenSource}});function e(r){return Bc.is(r)||Gg.is(r)}t.is=e})(Hc||(X.CancellationReceiverStrategy=Hc={}));var Uc;(function(t){t.Message=Object.freeze({sendCancellation(r,n){return r.sendNotification(yu.type,{id:n})},cleanup(r){}});function e(r){let n=r;return n&&Ge.func(n.sendCancellation)&&Ge.func(n.cleanup)}t.is=e})(Uc||(X.CancellationSenderStrategy=Uc={}));var qc;(function(t){t.Message=Object.freeze({receiver:Hc.Message,sender:Uc.Message});function e(r){let n=r;return n&&Hc.is(n.receiver)&&Uc.is(n.sender)}t.is=e})(qc||(X.CancellationStrategy=qc={}));var jc;(function(t){function e(r){let n=r;return n&&Ge.func(n.handleMessage)}t.is=e})(jc||(X.MessageStrategy=jc={}));var hT;(function(t){function e(r){let n=r;return n&&(qc.is(n.cancellationStrategy)||Wg.is(n.connectionStrategy)||jc.is(n.messageStrategy))}t.is=e})(hT||(X.ConnectionOptions=hT={}));var Er;(function(t){t[t.New=1]="New",t[t.Listening=2]="Listening",t[t.Closed=3]="Closed",t[t.Disposed=4]="Disposed"})(Er||(Er={}));function _z(t,e,r,n){let a=r!==void 0?r:X.NullLogger,o=0,i=0,s=0,u="2.0",l,c=new Map,d,p=new Map,h=new Map,w,S=new fT.LinkedMap,A=new Map,C=new Set,g=new Map,y=de.Off,$=dr.Text,K,Q=Er.New,mt=new du.Emitter,Qe=new du.Emitter,ir=new du.Emitter,Bt=new du.Emitter,N=new du.Emitter,x=n&&n.cancellationStrategy?n.cancellationStrategy:qc.Message;function W(m){if(m===null)throw new Error("Can't send requests with id null since the response can't be correlated.");return"req-"+m.toString()}function O(m){return m===null?"res-unknown-"+(++s).toString():"res-"+m.toString()}function te(){return"not-"+(++i).toString()}function j(m,k){q.Message.isRequest(k)?m.set(W(k.id),k):q.Message.isResponse(k)?m.set(O(k.id),k):m.set(te(),k)}function R(m){}function I(){return Q===Er.Listening}function pe(){return Q===Er.Closed}function ue(){return Q===Er.Disposed}function Nr(){(Q===Er.New||Q===Er.Listening)&&(Q=Er.Closed,Qe.fire(void 0))}function ku(m){mt.fire([m,void 0,void 0])}function ip(m){mt.fire(m)}t.onClose(Nr),t.onError(ku),e.onClose(Nr),e.onError(ip);function Ii(){w||S.size===0||(w=(0,pT.default)().timer.setImmediate(()=>{w=void 0,Iu()}))}function Ht(m){q.Message.isRequest(m)?Ut(m):q.Message.isNotification(m)?_t(m):q.Message.isResponse(m)?An(m):xr(m)}function Iu(){if(S.size===0)return;let m=S.shift();try{let k=n?.messageStrategy;jc.is(k)?k.handleMessage(m,Ht):Ht(m)}finally{Ii()}}let ct=m=>{try{if(q.Message.isNotification(m)&&m.method===yu.type.method){let k=m.params.id,E=W(k),G=S.get(E);if(q.Message.isRequest(G)){let me=n?.connectionStrategy,Be=me&&me.cancelUndispatched?me.cancelUndispatched(G,R):void 0;if(Be&&(Be.error!==void 0||Be.result!==void 0)){S.delete(E),g.delete(k),Be.id=G.id,kn(Be,m.method,Date.now()),e.write(Be).catch(()=>a.error("Sending response for canceled message failed."));return}}let Ie=g.get(k);if(Ie!==void 0){Ie.cancel(),sp(m);return}else C.add(k)}j(S,m)}finally{Ii()}};function Ut(m){if(ue())return;function k(ie,Me,he){let st={jsonrpc:u,id:m.id};ie instanceof q.ResponseError?st.error=ie.toJson():st.result=ie===void 0?null:ie,kn(st,Me,he),e.write(st).catch(()=>a.error("Sending response failed."))}function E(ie,Me,he){let st={jsonrpc:u,id:m.id,error:ie.toJson()};kn(st,Me,he),e.write(st).catch(()=>a.error("Sending response failed."))}function G(ie,Me,he){ie===void 0&&(ie=null);let st={jsonrpc:u,id:m.id,result:ie};kn(st,Me,he),e.write(st).catch(()=>a.error("Sending response failed."))}Ru(m);let Ie=c.get(m.method),me,Be;Ie&&(me=Ie.type,Be=Ie.handler);let Xe=Date.now();if(Be||l){let ie=m.id??String(Date.now()),Me=Bc.is(x.receiver)?x.receiver.createCancellationTokenSource(ie):x.receiver.createCancellationTokenSource(m);m.id!==null&&C.has(m.id)&&Me.cancel(),m.id!==null&&g.set(ie,Me);try{let he;if(Be)if(m.params===void 0){if(me!==void 0&&me.numberOfParams!==0){E(new q.ResponseError(q.ErrorCodes.InvalidParams,`Request ${m.method} defines ${me.numberOfParams} params but received none.`),m.method,Xe);return}he=Be(Me.token)}else if(Array.isArray(m.params)){if(me!==void 0&&me.parameterStructures===q.ParameterStructures.byName){E(new q.ResponseError(q.ErrorCodes.InvalidParams,`Request ${m.method} defines parameters by name but received parameters by position`),m.method,Xe);return}he=Be(...m.params,Me.token)}else{if(me!==void 0&&me.parameterStructures===q.ParameterStructures.byPosition){E(new q.ResponseError(q.ErrorCodes.InvalidParams,`Request ${m.method} defines parameters by position but received parameters by name`),m.method,Xe);return}he=Be(m.params,Me.token)}else l&&(he=l(m.method,m.params,Me.token));let st=he;he?st.then?st.then(Mt=>{g.delete(ie),k(Mt,m.method,Xe)},Mt=>{g.delete(ie),Mt instanceof q.ResponseError?E(Mt,m.method,Xe):Mt&&Ge.string(Mt.message)?E(new q.ResponseError(q.ErrorCodes.InternalError,`Request ${m.method} failed with message: ${Mt.message}`),m.method,Xe):E(new q.ResponseError(q.ErrorCodes.InternalError,`Request ${m.method} failed unexpectedly without providing any details.`),m.method,Xe)}):(g.delete(ie),k(he,m.method,Xe)):(g.delete(ie),G(he,m.method,Xe))}catch(he){g.delete(ie),he instanceof q.ResponseError?k(he,m.method,Xe):he&&Ge.string(he.message)?E(new q.ResponseError(q.ErrorCodes.InternalError,`Request ${m.method} failed with message: ${he.message}`),m.method,Xe):E(new q.ResponseError(q.ErrorCodes.InternalError,`Request ${m.method} failed unexpectedly without providing any details.`),m.method,Xe)}}else E(new q.ResponseError(q.ErrorCodes.MethodNotFound,`Unhandled method ${m.method}`),m.method,Xe)}function An(m){if(!ue())if(m.id===null)m.error?a.error(`Received response message without id: Error is: 
${JSON.stringify(m.error,void 0,4)}`):a.error("Received response message without id. No further error information provided.");else{let k=m.id,E=A.get(k);if(OI(m,E),E!==void 0){A.delete(k);try{if(m.error){let G=m.error;E.reject(new q.ResponseError(G.code,G.message,G.data))}else if(m.result!==void 0)E.resolve(m.result);else throw new Error("Should never happen.")}catch(G){G.message?a.error(`Response handler '${E.method}' failed with message: ${G.message}`):a.error(`Response handler '${E.method}' failed unexpectedly.`)}}}}function _t(m){if(ue())return;let k,E;if(m.method===yu.type.method){let G=m.params.id;C.delete(G),sp(m);return}else{let G=p.get(m.method);G&&(E=G.handler,k=G.type)}if(E||d)try{if(sp(m),E)if(m.params===void 0)k!==void 0&&k.numberOfParams!==0&&k.parameterStructures!==q.ParameterStructures.byName&&a.error(`Notification ${m.method} defines ${k.numberOfParams} params but received none.`),E();else if(Array.isArray(m.params)){let G=m.params;m.method===pu.type.method&&G.length===2&&Og.is(G[0])?E({token:G[0],value:G[1]}):(k!==void 0&&(k.parameterStructures===q.ParameterStructures.byName&&a.error(`Notification ${m.method} defines parameters by name but received parameters by position`),k.numberOfParams!==m.params.length&&a.error(`Notification ${m.method} defines ${k.numberOfParams} params but received ${G.length} arguments`)),E(...G))}else k!==void 0&&k.parameterStructures===q.ParameterStructures.byPosition&&a.error(`Notification ${m.method} defines parameters by position but received parameters by name`),E(m.params);else d&&d(m.method,m.params)}catch(G){G.message?a.error(`Notification handler '${m.method}' failed with message: ${G.message}`):a.error(`Notification handler '${m.method}' failed unexpectedly.`)}else ir.fire(m)}function xr(m){if(!m){a.error("Received empty message.");return}a.error(`Received message which is neither a response nor a notification message:
${JSON.stringify(m,null,4)}`);let k=m;if(Ge.string(k.id)||Ge.number(k.id)){let E=k.id,G=A.get(E);G&&G.reject(new Error("The received response has neither a result nor an error property."))}}function vt(m){if(m!=null)switch(y){case de.Verbose:return JSON.stringify(m,null,4);case de.Compact:return JSON.stringify(m);default:return}}function Ar(m){if(!(y===de.Off||!K))if($===dr.Text){let k;(y===de.Verbose||y===de.Compact)&&m.params&&(k=`Params: ${vt(m.params)}

`),K.log(`Sending request '${m.method} - (${m.id})'.`,k)}else Va("send-request",m)}function nn(m){if(!(y===de.Off||!K))if($===dr.Text){let k;(y===de.Verbose||y===de.Compact)&&(m.params?k=`Params: ${vt(m.params)}

`:k=`No parameters provided.

`),K.log(`Sending notification '${m.method}'.`,k)}else Va("send-notification",m)}function kn(m,k,E){if(!(y===de.Off||!K))if($===dr.Text){let G;(y===de.Verbose||y===de.Compact)&&(m.error&&m.error.data?G=`Error data: ${vt(m.error.data)}

`:m.result?G=`Result: ${vt(m.result)}

`:m.error===void 0&&(G=`No result returned.

`)),K.log(`Sending response '${k} - (${m.id})'. Processing request took ${Date.now()-E}ms`,G)}else Va("send-response",m)}function Ru(m){if(!(y===de.Off||!K))if($===dr.Text){let k;(y===de.Verbose||y===de.Compact)&&m.params&&(k=`Params: ${vt(m.params)}

`),K.log(`Received request '${m.method} - (${m.id})'.`,k)}else Va("receive-request",m)}function sp(m){if(!(y===de.Off||!K||m.method===Gc.type.method))if($===dr.Text){let k;(y===de.Verbose||y===de.Compact)&&(m.params?k=`Params: ${vt(m.params)}

`:k=`No parameters provided.

`),K.log(`Received notification '${m.method}'.`,k)}else Va("receive-notification",m)}function OI(m,k){if(!(y===de.Off||!K))if($===dr.Text){let E;if((y===de.Verbose||y===de.Compact)&&(m.error&&m.error.data?E=`Error data: ${vt(m.error.data)}

`:m.result?E=`Result: ${vt(m.result)}

`:m.error===void 0&&(E=`No result returned.

`)),k){let G=m.error?` Request failed: ${m.error.message} (${m.error.code}).`:"";K.log(`Received response '${k.method} - (${m.id})' in ${Date.now()-k.timerStart}ms.${G}`,E)}else K.log(`Received response ${m.id} without active response promise.`,E)}else Va("receive-response",m)}function Va(m,k){if(!K||y===de.Off)return;let E={isLSPMessage:!0,type:m,message:k,timestamp:Date.now()};K.log(E)}function Ri(){if(pe())throw new ci(fu.Closed,"Connection is closed.");if(ue())throw new ci(fu.Disposed,"Connection is disposed.")}function zI(){if(I())throw new ci(fu.AlreadyListening,"Connection is already listening")}function LI(){if(!I())throw new Error("Call listen() first.")}function Pi(m){return m===void 0?null:m}function Lm(m){if(m!==null)return m}function Fm(m){return m!=null&&!Array.isArray(m)&&typeof m=="object"}function up(m,k){switch(m){case q.ParameterStructures.auto:return Fm(k)?Lm(k):[Pi(k)];case q.ParameterStructures.byName:if(!Fm(k))throw new Error("Received parameters by name but param is not an object literal.");return Lm(k);case q.ParameterStructures.byPosition:return[Pi(k)];default:throw new Error(`Unknown parameter structure ${m.toString()}`)}}function Wm(m,k){let E,G=m.numberOfParams;switch(G){case 0:E=void 0;break;case 1:E=up(m.parameterStructures,k[0]);break;default:E=[];for(let Ie=0;Ie<k.length&&Ie<G;Ie++)E.push(Pi(k[Ie]));if(k.length<G)for(let Ie=k.length;Ie<G;Ie++)E.push(null);break}return E}let Ya={sendNotification:(m,...k)=>{Ri();let E,G;if(Ge.string(m)){E=m;let me=k[0],Be=0,Xe=q.ParameterStructures.auto;q.ParameterStructures.is(me)&&(Be=1,Xe=me);let ie=k.length,Me=ie-Be;switch(Me){case 0:G=void 0;break;case 1:G=up(Xe,k[Be]);break;default:if(Xe===q.ParameterStructures.byName)throw new Error(`Received ${Me} parameters for 'by Name' notification parameter structure.`);G=k.slice(Be,ie).map(he=>Pi(he));break}}else{let me=k;E=m.method,G=Wm(m,me)}let Ie={jsonrpc:u,method:E,params:G};return nn(Ie),e.write(Ie).catch(me=>{throw a.error("Sending notification failed."),me})},onNotification:(m,k)=>{Ri();let E;return Ge.func(m)?d=m:k&&(Ge.string(m)?(E=m,p.set(m,{type:void 0,handler:k})):(E=m.method,p.set(m.method,{type:m,handler:k}))),{dispose:()=>{E!==void 0?p.delete(E):d=void 0}}},onProgress:(m,k,E)=>{if(h.has(k))throw new Error(`Progress handler for token ${k} already registered`);return h.set(k,E),{dispose:()=>{h.delete(k)}}},sendProgress:(m,k,E)=>Ya.sendNotification(pu.type,{token:k,value:E}),onUnhandledProgress:Bt.event,sendRequest:(m,...k)=>{Ri(),LI();let E,G,Ie;if(Ge.string(m)){E=m;let ie=k[0],Me=k[k.length-1],he=0,st=q.ParameterStructures.auto;q.ParameterStructures.is(ie)&&(he=1,st=ie);let Mt=k.length;Mg.CancellationToken.is(Me)&&(Mt=Mt-1,Ie=Me);let _r=Mt-he;switch(_r){case 0:G=void 0;break;case 1:G=up(st,k[he]);break;default:if(st===q.ParameterStructures.byName)throw new Error(`Received ${_r} parameters for 'by Name' request parameter structure.`);G=k.slice(he,Mt).map(FI=>Pi(FI));break}}else{let ie=k;E=m.method,G=Wm(m,ie);let Me=m.numberOfParams;Ie=Mg.CancellationToken.is(ie[Me])?ie[Me]:void 0}let me=o++,Be;Ie&&(Be=Ie.onCancellationRequested(()=>{let ie=x.sender.sendCancellation(Ya,me);return ie===void 0?(a.log(`Received no promise from cancellation strategy when cancelling id ${me}`),Promise.resolve()):ie.catch(()=>{a.log(`Sending cancellation messages for id ${me} failed`)})}));let Xe={jsonrpc:u,id:me,method:E,params:G};return Ar(Xe),typeof x.sender.enableCancellation=="function"&&x.sender.enableCancellation(Xe),new Promise(async(ie,Me)=>{let he=_r=>{ie(_r),x.sender.cleanup(me),Be?.dispose()},st=_r=>{Me(_r),x.sender.cleanup(me),Be?.dispose()},Mt={method:E,timerStart:Date.now(),resolve:he,reject:st};try{await e.write(Xe),A.set(me,Mt)}catch(_r){throw a.error("Sending request failed."),Mt.reject(new q.ResponseError(q.ErrorCodes.MessageWriteError,_r.message?_r.message:"Unknown reason")),_r}})},onRequest:(m,k)=>{Ri();let E=null;return Lg.is(m)?(E=void 0,l=m):Ge.string(m)?(E=null,k!==void 0&&(E=m,c.set(m,{handler:k,type:void 0}))):k!==void 0&&(E=m.method,c.set(m.method,{type:m,handler:k})),{dispose:()=>{E!==null&&(E!==void 0?c.delete(E):l=void 0)}}},hasPendingResponse:()=>A.size>0,trace:async(m,k,E)=>{let G=!1,Ie=dr.Text;E!==void 0&&(Ge.boolean(E)?G=E:(G=E.sendNotification||!1,Ie=E.traceFormat||dr.Text)),y=m,$=Ie,y===de.Off?K=void 0:K=k,G&&!pe()&&!ue()&&await Ya.sendNotification(Fg.type,{value:de.toString(m)})},onError:mt.event,onClose:Qe.event,onUnhandledNotification:ir.event,onDispose:N.event,end:()=>{e.end()},dispose:()=>{if(ue())return;Q=Er.Disposed,N.fire(void 0);let m=new q.ResponseError(q.ErrorCodes.PendingResponseRejected,"Pending response rejected since connection got disposed");for(let k of A.values())k.reject(m);A=new Map,g=new Map,C=new Set,S=new fT.LinkedMap,Ge.func(e.dispose)&&e.dispose(),Ge.func(t.dispose)&&t.dispose()},listen:()=>{Ri(),zI(),Q=Er.Listening,t.listen(ct)},inspect:()=>{(0,pT.default)().console.log("inspect")}};return Ya.onNotification(Gc.type,m=>{if(y===de.Off||!K)return;let k=y===de.Verbose||y===de.Compact;K.log(m.message,k?m.verbose:void 0)}),Ya.onNotification(pu.type,m=>{let k=h.get(m.token);k?k(m.value):Bt.fire(m)}),Ya}X.createMessageConnection=_z});var Vc=M(T=>{"use strict";Object.defineProperty(T,"__esModule",{value:!0});T.ProgressType=T.ProgressToken=T.createMessageConnection=T.NullLogger=T.ConnectionOptions=T.ConnectionStrategy=T.AbstractMessageBuffer=T.WriteableStreamMessageWriter=T.AbstractMessageWriter=T.MessageWriter=T.ReadableStreamMessageReader=T.AbstractMessageReader=T.MessageReader=T.SharedArrayReceiverStrategy=T.SharedArraySenderStrategy=T.CancellationToken=T.CancellationTokenSource=T.Emitter=T.Event=T.Disposable=T.LRUCache=T.Touch=T.LinkedMap=T.ParameterStructures=T.NotificationType9=T.NotificationType8=T.NotificationType7=T.NotificationType6=T.NotificationType5=T.NotificationType4=T.NotificationType3=T.NotificationType2=T.NotificationType1=T.NotificationType0=T.NotificationType=T.ErrorCodes=T.ResponseError=T.RequestType9=T.RequestType8=T.RequestType7=T.RequestType6=T.RequestType5=T.RequestType4=T.RequestType3=T.RequestType2=T.RequestType1=T.RequestType0=T.RequestType=T.Message=T.RAL=void 0;T.MessageStrategy=T.CancellationStrategy=T.CancellationSenderStrategy=T.CancellationReceiverStrategy=T.ConnectionError=T.ConnectionErrors=T.LogTraceNotification=T.SetTraceNotification=T.TraceFormat=T.TraceValues=T.Trace=void 0;var ke=Sg();Object.defineProperty(T,"Message",{enumerable:!0,get:function(){return ke.Message}});Object.defineProperty(T,"RequestType",{enumerable:!0,get:function(){return ke.RequestType}});Object.defineProperty(T,"RequestType0",{enumerable:!0,get:function(){return ke.RequestType0}});Object.defineProperty(T,"RequestType1",{enumerable:!0,get:function(){return ke.RequestType1}});Object.defineProperty(T,"RequestType2",{enumerable:!0,get:function(){return ke.RequestType2}});Object.defineProperty(T,"RequestType3",{enumerable:!0,get:function(){return ke.RequestType3}});Object.defineProperty(T,"RequestType4",{enumerable:!0,get:function(){return ke.RequestType4}});Object.defineProperty(T,"RequestType5",{enumerable:!0,get:function(){return ke.RequestType5}});Object.defineProperty(T,"RequestType6",{enumerable:!0,get:function(){return ke.RequestType6}});Object.defineProperty(T,"RequestType7",{enumerable:!0,get:function(){return ke.RequestType7}});Object.defineProperty(T,"RequestType8",{enumerable:!0,get:function(){return ke.RequestType8}});Object.defineProperty(T,"RequestType9",{enumerable:!0,get:function(){return ke.RequestType9}});Object.defineProperty(T,"ResponseError",{enumerable:!0,get:function(){return ke.ResponseError}});Object.defineProperty(T,"ErrorCodes",{enumerable:!0,get:function(){return ke.ErrorCodes}});Object.defineProperty(T,"NotificationType",{enumerable:!0,get:function(){return ke.NotificationType}});Object.defineProperty(T,"NotificationType0",{enumerable:!0,get:function(){return ke.NotificationType0}});Object.defineProperty(T,"NotificationType1",{enumerable:!0,get:function(){return ke.NotificationType1}});Object.defineProperty(T,"NotificationType2",{enumerable:!0,get:function(){return ke.NotificationType2}});Object.defineProperty(T,"NotificationType3",{enumerable:!0,get:function(){return ke.NotificationType3}});Object.defineProperty(T,"NotificationType4",{enumerable:!0,get:function(){return ke.NotificationType4}});Object.defineProperty(T,"NotificationType5",{enumerable:!0,get:function(){return ke.NotificationType5}});Object.defineProperty(T,"NotificationType6",{enumerable:!0,get:function(){return ke.NotificationType6}});Object.defineProperty(T,"NotificationType7",{enumerable:!0,get:function(){return ke.NotificationType7}});Object.defineProperty(T,"NotificationType8",{enumerable:!0,get:function(){return ke.NotificationType8}});Object.defineProperty(T,"NotificationType9",{enumerable:!0,get:function(){return ke.NotificationType9}});Object.defineProperty(T,"ParameterStructures",{enumerable:!0,get:function(){return ke.ParameterStructures}});var Bg=$g();Object.defineProperty(T,"LinkedMap",{enumerable:!0,get:function(){return Bg.LinkedMap}});Object.defineProperty(T,"LRUCache",{enumerable:!0,get:function(){return Bg.LRUCache}});Object.defineProperty(T,"Touch",{enumerable:!0,get:function(){return Bg.Touch}});var Mz=rT();Object.defineProperty(T,"Disposable",{enumerable:!0,get:function(){return Mz.Disposable}});var mT=Oa();Object.defineProperty(T,"Event",{enumerable:!0,get:function(){return mT.Event}});Object.defineProperty(T,"Emitter",{enumerable:!0,get:function(){return mT.Emitter}});var vT=Ks();Object.defineProperty(T,"CancellationTokenSource",{enumerable:!0,get:function(){return vT.CancellationTokenSource}});Object.defineProperty(T,"CancellationToken",{enumerable:!0,get:function(){return vT.CancellationToken}});var wT=nT();Object.defineProperty(T,"SharedArraySenderStrategy",{enumerable:!0,get:function(){return wT.SharedArraySenderStrategy}});Object.defineProperty(T,"SharedArrayReceiverStrategy",{enumerable:!0,get:function(){return wT.SharedArrayReceiverStrategy}});var Hg=oT();Object.defineProperty(T,"MessageReader",{enumerable:!0,get:function(){return Hg.MessageReader}});Object.defineProperty(T,"AbstractMessageReader",{enumerable:!0,get:function(){return Hg.AbstractMessageReader}});Object.defineProperty(T,"ReadableStreamMessageReader",{enumerable:!0,get:function(){return Hg.ReadableStreamMessageReader}});var Ug=cT();Object.defineProperty(T,"MessageWriter",{enumerable:!0,get:function(){return Ug.MessageWriter}});Object.defineProperty(T,"AbstractMessageWriter",{enumerable:!0,get:function(){return Ug.AbstractMessageWriter}});Object.defineProperty(T,"WriteableStreamMessageWriter",{enumerable:!0,get:function(){return Ug.WriteableStreamMessageWriter}});var Oz=dT();Object.defineProperty(T,"AbstractMessageBuffer",{enumerable:!0,get:function(){return Oz.AbstractMessageBuffer}});var At=gT();Object.defineProperty(T,"ConnectionStrategy",{enumerable:!0,get:function(){return At.ConnectionStrategy}});Object.defineProperty(T,"ConnectionOptions",{enumerable:!0,get:function(){return At.ConnectionOptions}});Object.defineProperty(T,"NullLogger",{enumerable:!0,get:function(){return At.NullLogger}});Object.defineProperty(T,"createMessageConnection",{enumerable:!0,get:function(){return At.createMessageConnection}});Object.defineProperty(T,"ProgressToken",{enumerable:!0,get:function(){return At.ProgressToken}});Object.defineProperty(T,"ProgressType",{enumerable:!0,get:function(){return At.ProgressType}});Object.defineProperty(T,"Trace",{enumerable:!0,get:function(){return At.Trace}});Object.defineProperty(T,"TraceValues",{enumerable:!0,get:function(){return At.TraceValues}});Object.defineProperty(T,"TraceFormat",{enumerable:!0,get:function(){return At.TraceFormat}});Object.defineProperty(T,"SetTraceNotification",{enumerable:!0,get:function(){return At.SetTraceNotification}});Object.defineProperty(T,"LogTraceNotification",{enumerable:!0,get:function(){return At.LogTraceNotification}});Object.defineProperty(T,"ConnectionErrors",{enumerable:!0,get:function(){return At.ConnectionErrors}});Object.defineProperty(T,"ConnectionError",{enumerable:!0,get:function(){return At.ConnectionError}});Object.defineProperty(T,"CancellationReceiverStrategy",{enumerable:!0,get:function(){return At.CancellationReceiverStrategy}});Object.defineProperty(T,"CancellationSenderStrategy",{enumerable:!0,get:function(){return At.CancellationSenderStrategy}});Object.defineProperty(T,"CancellationStrategy",{enumerable:!0,get:function(){return At.CancellationStrategy}});Object.defineProperty(T,"MessageStrategy",{enumerable:!0,get:function(){return At.MessageStrategy}});var zz=jn();T.RAL=zz.default});var CT=M(Yg=>{"use strict";Object.defineProperty(Yg,"__esModule",{value:!0});var Jr=Vc(),Yc=class t extends Jr.AbstractMessageBuffer{constructor(e="utf-8"){super(e),this.asciiDecoder=new TextDecoder("ascii")}emptyBuffer(){return t.emptyBuffer}fromString(e,r){return new TextEncoder().encode(e)}toString(e,r){return r==="ascii"?this.asciiDecoder.decode(e):new TextDecoder(r).decode(e)}asNative(e,r){return r===void 0?e:e.slice(0,r)}allocNative(e){return new Uint8Array(e)}};Yc.emptyBuffer=new Uint8Array(0);var qg=class{constructor(e){this.socket=e,this._onData=new Jr.Emitter,this._messageListener=r=>{r.data.arrayBuffer().then(a=>{this._onData.fire(new Uint8Array(a))},()=>{(0,Jr.RAL)().console.error("Converting blob to array buffer failed.")})},this.socket.addEventListener("message",this._messageListener)}onClose(e){return this.socket.addEventListener("close",e),Jr.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),Jr.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),Jr.Disposable.create(()=>this.socket.removeEventListener("end",e))}onData(e){return this._onData.event(e)}},jg=class{constructor(e){this.socket=e}onClose(e){return this.socket.addEventListener("close",e),Jr.Disposable.create(()=>this.socket.removeEventListener("close",e))}onError(e){return this.socket.addEventListener("error",e),Jr.Disposable.create(()=>this.socket.removeEventListener("error",e))}onEnd(e){return this.socket.addEventListener("end",e),Jr.Disposable.create(()=>this.socket.removeEventListener("end",e))}write(e,r){if(typeof e=="string"){if(r!==void 0&&r!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${r}`);this.socket.send(e)}else this.socket.send(e);return Promise.resolve()}end(){this.socket.close()}},Lz=new TextEncoder,ST=Object.freeze({messageBuffer:Object.freeze({create:t=>new Yc(t)}),applicationJson:Object.freeze({encoder:Object.freeze({name:"application/json",encode:(t,e)=>{if(e.charset!=="utf-8")throw new Error(`In a Browser environments only utf-8 text encoding is supported. But got encoding: ${e.charset}`);return Promise.resolve(Lz.encode(JSON.stringify(t,void 0,0)))}}),decoder:Object.freeze({name:"application/json",decode:(t,e)=>{if(!(t instanceof Uint8Array))throw new Error("In a Browser environments only Uint8Arrays are supported.");return Promise.resolve(JSON.parse(new TextDecoder(e.charset).decode(t)))}})}),stream:Object.freeze({asReadableStream:t=>new qg(t),asWritableStream:t=>new jg(t)}),console,timer:Object.freeze({setTimeout(t,e,...r){let n=setTimeout(t,e,...r);return{dispose:()=>clearTimeout(n)}},setImmediate(t,...e){let r=setTimeout(t,0,...e);return{dispose:()=>clearTimeout(r)}},setInterval(t,e,...r){let n=setInterval(t,e,...r);return{dispose:()=>clearInterval(n)}}})});function Vg(){return ST}(function(t){function e(){Jr.RAL.install(ST)}t.install=e})(Vg||(Vg={}));Yg.default=Vg});var Ba=M(pr=>{"use strict";var Fz=pr&&pr.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var a=Object.getOwnPropertyDescriptor(e,r);(!a||("get"in a?!e.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,a)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),Wz=pr&&pr.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&Fz(e,t,r)};Object.defineProperty(pr,"__esModule",{value:!0});pr.createMessageConnection=pr.BrowserMessageWriter=pr.BrowserMessageReader=void 0;var Gz=CT();Gz.default.install();var di=Vc();Wz(Vc(),pr);var Qg=class extends di.AbstractMessageReader{constructor(e){super(),this._onData=new di.Emitter,this._messageListener=r=>{this._onData.fire(r.data)},e.addEventListener("error",r=>this.fireError(r)),e.onmessage=this._messageListener}listen(e){return this._onData.event(e)}};pr.BrowserMessageReader=Qg;var Xg=class extends di.AbstractMessageWriter{constructor(e){super(),this.port=e,this.errorCount=0,e.addEventListener("error",r=>this.fireError(r))}write(e){try{return this.port.postMessage(e),Promise.resolve()}catch(r){return this.handleError(r,e),Promise.reject(r)}}handleError(e,r){this.errorCount++,this.fireError(e,r,this.errorCount)}end(){}};pr.BrowserMessageWriter=Xg;function Bz(t,e,r,n){return r===void 0&&(r=di.NullLogger),di.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,di.createMessageConnection)(t,e,r,n)}pr.createMessageConnection=Bz});var Jg=M((YZ,$T)=>{"use strict";$T.exports=Ba()});var _e=M(nr=>{"use strict";Object.defineProperty(nr,"__esModule",{value:!0});nr.ProtocolNotificationType=nr.ProtocolNotificationType0=nr.ProtocolRequestType=nr.ProtocolRequestType0=nr.RegistrationType=nr.MessageDirection=void 0;var pi=Ba(),TT;(function(t){t.clientToServer="clientToServer",t.serverToClient="serverToClient",t.both="both"})(TT||(nr.MessageDirection=TT={}));var Zg=class{constructor(e){this.method=e}};nr.RegistrationType=Zg;var em=class extends pi.RequestType0{constructor(e){super(e)}};nr.ProtocolRequestType0=em;var tm=class extends pi.RequestType{constructor(e){super(e,pi.ParameterStructures.byName)}};nr.ProtocolRequestType=tm;var rm=class extends pi.NotificationType0{constructor(e){super(e)}};nr.ProtocolNotificationType0=rm;var nm=class extends pi.NotificationType{constructor(e){super(e,pi.ParameterStructures.byName)}};nr.ProtocolNotificationType=nm});var Qc=M(ot=>{"use strict";Object.defineProperty(ot,"__esModule",{value:!0});ot.objectLiteral=ot.typedArray=ot.stringArray=ot.array=ot.func=ot.error=ot.number=ot.string=ot.boolean=void 0;function Hz(t){return t===!0||t===!1}ot.boolean=Hz;function xT(t){return typeof t=="string"||t instanceof String}ot.string=xT;function Uz(t){return typeof t=="number"||t instanceof Number}ot.number=Uz;function qz(t){return t instanceof Error}ot.error=qz;function jz(t){return typeof t=="function"}ot.func=jz;function AT(t){return Array.isArray(t)}ot.array=AT;function Vz(t){return AT(t)&&t.every(e=>xT(e))}ot.stringArray=Vz;function Yz(t,e){return Array.isArray(t)&&t.every(e)}ot.typedArray=Yz;function Qz(t){return t!==null&&typeof t=="object"}ot.objectLiteral=Qz});var RT=M(Xc=>{"use strict";Object.defineProperty(Xc,"__esModule",{value:!0});Xc.ImplementationRequest=void 0;var kT=_e(),IT;(function(t){t.method="textDocument/implementation",t.messageDirection=kT.MessageDirection.clientToServer,t.type=new kT.ProtocolRequestType(t.method)})(IT||(Xc.ImplementationRequest=IT={}))});var bT=M(Jc=>{"use strict";Object.defineProperty(Jc,"__esModule",{value:!0});Jc.TypeDefinitionRequest=void 0;var PT=_e(),KT;(function(t){t.method="textDocument/typeDefinition",t.messageDirection=PT.MessageDirection.clientToServer,t.type=new PT.ProtocolRequestType(t.method)})(KT||(Jc.TypeDefinitionRequest=KT={}))});var NT=M(fi=>{"use strict";Object.defineProperty(fi,"__esModule",{value:!0});fi.DidChangeWorkspaceFoldersNotification=fi.WorkspaceFoldersRequest=void 0;var Zc=_e(),ET;(function(t){t.method="workspace/workspaceFolders",t.messageDirection=Zc.MessageDirection.serverToClient,t.type=new Zc.ProtocolRequestType0(t.method)})(ET||(fi.WorkspaceFoldersRequest=ET={}));var DT;(function(t){t.method="workspace/didChangeWorkspaceFolders",t.messageDirection=Zc.MessageDirection.clientToServer,t.type=new Zc.ProtocolNotificationType(t.method)})(DT||(fi.DidChangeWorkspaceFoldersNotification=DT={}))});var OT=M(ed=>{"use strict";Object.defineProperty(ed,"__esModule",{value:!0});ed.ConfigurationRequest=void 0;var _T=_e(),MT;(function(t){t.method="workspace/configuration",t.messageDirection=_T.MessageDirection.serverToClient,t.type=new _T.ProtocolRequestType(t.method)})(MT||(ed.ConfigurationRequest=MT={}))});var FT=M(yi=>{"use strict";Object.defineProperty(yi,"__esModule",{value:!0});yi.ColorPresentationRequest=yi.DocumentColorRequest=void 0;var td=_e(),zT;(function(t){t.method="textDocument/documentColor",t.messageDirection=td.MessageDirection.clientToServer,t.type=new td.ProtocolRequestType(t.method)})(zT||(yi.DocumentColorRequest=zT={}));var LT;(function(t){t.method="textDocument/colorPresentation",t.messageDirection=td.MessageDirection.clientToServer,t.type=new td.ProtocolRequestType(t.method)})(LT||(yi.ColorPresentationRequest=LT={}))});var BT=M(hi=>{"use strict";Object.defineProperty(hi,"__esModule",{value:!0});hi.FoldingRangeRefreshRequest=hi.FoldingRangeRequest=void 0;var rd=_e(),WT;(function(t){t.method="textDocument/foldingRange",t.messageDirection=rd.MessageDirection.clientToServer,t.type=new rd.ProtocolRequestType(t.method)})(WT||(hi.FoldingRangeRequest=WT={}));var GT;(function(t){t.method="workspace/foldingRange/refresh",t.messageDirection=rd.MessageDirection.serverToClient,t.type=new rd.ProtocolRequestType0(t.method)})(GT||(hi.FoldingRangeRefreshRequest=GT={}))});var qT=M(nd=>{"use strict";Object.defineProperty(nd,"__esModule",{value:!0});nd.DeclarationRequest=void 0;var HT=_e(),UT;(function(t){t.method="textDocument/declaration",t.messageDirection=HT.MessageDirection.clientToServer,t.type=new HT.ProtocolRequestType(t.method)})(UT||(nd.DeclarationRequest=UT={}))});var YT=M(ad=>{"use strict";Object.defineProperty(ad,"__esModule",{value:!0});ad.SelectionRangeRequest=void 0;var jT=_e(),VT;(function(t){t.method="textDocument/selectionRange",t.messageDirection=jT.MessageDirection.clientToServer,t.type=new jT.ProtocolRequestType(t.method)})(VT||(ad.SelectionRangeRequest=VT={}))});var ZT=M(Jn=>{"use strict";Object.defineProperty(Jn,"__esModule",{value:!0});Jn.WorkDoneProgressCancelNotification=Jn.WorkDoneProgressCreateRequest=Jn.WorkDoneProgress=void 0;var Xz=Ba(),od=_e(),QT;(function(t){t.type=new Xz.ProgressType;function e(r){return r===t.type}t.is=e})(QT||(Jn.WorkDoneProgress=QT={}));var XT;(function(t){t.method="window/workDoneProgress/create",t.messageDirection=od.MessageDirection.serverToClient,t.type=new od.ProtocolRequestType(t.method)})(XT||(Jn.WorkDoneProgressCreateRequest=XT={}));var JT;(function(t){t.method="window/workDoneProgress/cancel",t.messageDirection=od.MessageDirection.clientToServer,t.type=new od.ProtocolNotificationType(t.method)})(JT||(Jn.WorkDoneProgressCancelNotification=JT={}))});var nx=M(Zn=>{"use strict";Object.defineProperty(Zn,"__esModule",{value:!0});Zn.CallHierarchyOutgoingCallsRequest=Zn.CallHierarchyIncomingCallsRequest=Zn.CallHierarchyPrepareRequest=void 0;var gi=_e(),ex;(function(t){t.method="textDocument/prepareCallHierarchy",t.messageDirection=gi.MessageDirection.clientToServer,t.type=new gi.ProtocolRequestType(t.method)})(ex||(Zn.CallHierarchyPrepareRequest=ex={}));var tx;(function(t){t.method="callHierarchy/incomingCalls",t.messageDirection=gi.MessageDirection.clientToServer,t.type=new gi.ProtocolRequestType(t.method)})(tx||(Zn.CallHierarchyIncomingCallsRequest=tx={}));var rx;(function(t){t.method="callHierarchy/outgoingCalls",t.messageDirection=gi.MessageDirection.clientToServer,t.type=new gi.ProtocolRequestType(t.method)})(rx||(Zn.CallHierarchyOutgoingCallsRequest=rx={}))});var lx=M(ar=>{"use strict";Object.defineProperty(ar,"__esModule",{value:!0});ar.SemanticTokensRefreshRequest=ar.SemanticTokensRangeRequest=ar.SemanticTokensDeltaRequest=ar.SemanticTokensRequest=ar.SemanticTokensRegistrationType=ar.TokenFormat=void 0;var Tn=_e(),ax;(function(t){t.Relative="relative"})(ax||(ar.TokenFormat=ax={}));var hu;(function(t){t.method="textDocument/semanticTokens",t.type=new Tn.RegistrationType(t.method)})(hu||(ar.SemanticTokensRegistrationType=hu={}));var ox;(function(t){t.method="textDocument/semanticTokens/full",t.messageDirection=Tn.MessageDirection.clientToServer,t.type=new Tn.ProtocolRequestType(t.method),t.registrationMethod=hu.method})(ox||(ar.SemanticTokensRequest=ox={}));var ix;(function(t){t.method="textDocument/semanticTokens/full/delta",t.messageDirection=Tn.MessageDirection.clientToServer,t.type=new Tn.ProtocolRequestType(t.method),t.registrationMethod=hu.method})(ix||(ar.SemanticTokensDeltaRequest=ix={}));var sx;(function(t){t.method="textDocument/semanticTokens/range",t.messageDirection=Tn.MessageDirection.clientToServer,t.type=new Tn.ProtocolRequestType(t.method),t.registrationMethod=hu.method})(sx||(ar.SemanticTokensRangeRequest=sx={}));var ux;(function(t){t.method="workspace/semanticTokens/refresh",t.messageDirection=Tn.MessageDirection.serverToClient,t.type=new Tn.ProtocolRequestType0(t.method)})(ux||(ar.SemanticTokensRefreshRequest=ux={}))});var px=M(id=>{"use strict";Object.defineProperty(id,"__esModule",{value:!0});id.ShowDocumentRequest=void 0;var cx=_e(),dx;(function(t){t.method="window/showDocument",t.messageDirection=cx.MessageDirection.serverToClient,t.type=new cx.ProtocolRequestType(t.method)})(dx||(id.ShowDocumentRequest=dx={}))});var hx=M(sd=>{"use strict";Object.defineProperty(sd,"__esModule",{value:!0});sd.LinkedEditingRangeRequest=void 0;var fx=_e(),yx;(function(t){t.method="textDocument/linkedEditingRange",t.messageDirection=fx.MessageDirection.clientToServer,t.type=new fx.ProtocolRequestType(t.method)})(yx||(sd.LinkedEditingRangeRequest=yx={}))});var Tx=M(Et=>{"use strict";Object.defineProperty(Et,"__esModule",{value:!0});Et.WillDeleteFilesRequest=Et.DidDeleteFilesNotification=Et.DidRenameFilesNotification=Et.WillRenameFilesRequest=Et.DidCreateFilesNotification=Et.WillCreateFilesRequest=Et.FileOperationPatternKind=void 0;var vr=_e(),gx;(function(t){t.file="file",t.folder="folder"})(gx||(Et.FileOperationPatternKind=gx={}));var mx;(function(t){t.method="workspace/willCreateFiles",t.messageDirection=vr.MessageDirection.clientToServer,t.type=new vr.ProtocolRequestType(t.method)})(mx||(Et.WillCreateFilesRequest=mx={}));var vx;(function(t){t.method="workspace/didCreateFiles",t.messageDirection=vr.MessageDirection.clientToServer,t.type=new vr.ProtocolNotificationType(t.method)})(vx||(Et.DidCreateFilesNotification=vx={}));var wx;(function(t){t.method="workspace/willRenameFiles",t.messageDirection=vr.MessageDirection.clientToServer,t.type=new vr.ProtocolRequestType(t.method)})(wx||(Et.WillRenameFilesRequest=wx={}));var Sx;(function(t){t.method="workspace/didRenameFiles",t.messageDirection=vr.MessageDirection.clientToServer,t.type=new vr.ProtocolNotificationType(t.method)})(Sx||(Et.DidRenameFilesNotification=Sx={}));var Cx;(function(t){t.method="workspace/didDeleteFiles",t.messageDirection=vr.MessageDirection.clientToServer,t.type=new vr.ProtocolNotificationType(t.method)})(Cx||(Et.DidDeleteFilesNotification=Cx={}));var $x;(function(t){t.method="workspace/willDeleteFiles",t.messageDirection=vr.MessageDirection.clientToServer,t.type=new vr.ProtocolRequestType(t.method)})($x||(Et.WillDeleteFilesRequest=$x={}))});var Rx=M(ea=>{"use strict";Object.defineProperty(ea,"__esModule",{value:!0});ea.MonikerRequest=ea.MonikerKind=ea.UniquenessLevel=void 0;var xx=_e(),Ax;(function(t){t.document="document",t.project="project",t.group="group",t.scheme="scheme",t.global="global"})(Ax||(ea.UniquenessLevel=Ax={}));var kx;(function(t){t.$import="import",t.$export="export",t.local="local"})(kx||(ea.MonikerKind=kx={}));var Ix;(function(t){t.method="textDocument/moniker",t.messageDirection=xx.MessageDirection.clientToServer,t.type=new xx.ProtocolRequestType(t.method)})(Ix||(ea.MonikerRequest=Ix={}))});var Ex=M(ta=>{"use strict";Object.defineProperty(ta,"__esModule",{value:!0});ta.TypeHierarchySubtypesRequest=ta.TypeHierarchySupertypesRequest=ta.TypeHierarchyPrepareRequest=void 0;var mi=_e(),Px;(function(t){t.method="textDocument/prepareTypeHierarchy",t.messageDirection=mi.MessageDirection.clientToServer,t.type=new mi.ProtocolRequestType(t.method)})(Px||(ta.TypeHierarchyPrepareRequest=Px={}));var Kx;(function(t){t.method="typeHierarchy/supertypes",t.messageDirection=mi.MessageDirection.clientToServer,t.type=new mi.ProtocolRequestType(t.method)})(Kx||(ta.TypeHierarchySupertypesRequest=Kx={}));var bx;(function(t){t.method="typeHierarchy/subtypes",t.messageDirection=mi.MessageDirection.clientToServer,t.type=new mi.ProtocolRequestType(t.method)})(bx||(ta.TypeHierarchySubtypesRequest=bx={}))});var _x=M(vi=>{"use strict";Object.defineProperty(vi,"__esModule",{value:!0});vi.InlineValueRefreshRequest=vi.InlineValueRequest=void 0;var ud=_e(),Dx;(function(t){t.method="textDocument/inlineValue",t.messageDirection=ud.MessageDirection.clientToServer,t.type=new ud.ProtocolRequestType(t.method)})(Dx||(vi.InlineValueRequest=Dx={}));var Nx;(function(t){t.method="workspace/inlineValue/refresh",t.messageDirection=ud.MessageDirection.serverToClient,t.type=new ud.ProtocolRequestType0(t.method)})(Nx||(vi.InlineValueRefreshRequest=Nx={}))});var Lx=M(ra=>{"use strict";Object.defineProperty(ra,"__esModule",{value:!0});ra.InlayHintRefreshRequest=ra.InlayHintResolveRequest=ra.InlayHintRequest=void 0;var wi=_e(),Mx;(function(t){t.method="textDocument/inlayHint",t.messageDirection=wi.MessageDirection.clientToServer,t.type=new wi.ProtocolRequestType(t.method)})(Mx||(ra.InlayHintRequest=Mx={}));var Ox;(function(t){t.method="inlayHint/resolve",t.messageDirection=wi.MessageDirection.clientToServer,t.type=new wi.ProtocolRequestType(t.method)})(Ox||(ra.InlayHintResolveRequest=Ox={}));var zx;(function(t){t.method="workspace/inlayHint/refresh",t.messageDirection=wi.MessageDirection.serverToClient,t.type=new wi.ProtocolRequestType0(t.method)})(zx||(ra.InlayHintRefreshRequest=zx={}))});var qx=M(wr=>{"use strict";Object.defineProperty(wr,"__esModule",{value:!0});wr.DiagnosticRefreshRequest=wr.WorkspaceDiagnosticRequest=wr.DocumentDiagnosticRequest=wr.DocumentDiagnosticReportKind=wr.DiagnosticServerCancellationData=void 0;var Ux=Ba(),Jz=Qc(),Si=_e(),Fx;(function(t){function e(r){let n=r;return n&&Jz.boolean(n.retriggerRequest)}t.is=e})(Fx||(wr.DiagnosticServerCancellationData=Fx={}));var Wx;(function(t){t.Full="full",t.Unchanged="unchanged"})(Wx||(wr.DocumentDiagnosticReportKind=Wx={}));var Gx;(function(t){t.method="textDocument/diagnostic",t.messageDirection=Si.MessageDirection.clientToServer,t.type=new Si.ProtocolRequestType(t.method),t.partialResult=new Ux.ProgressType})(Gx||(wr.DocumentDiagnosticRequest=Gx={}));var Bx;(function(t){t.method="workspace/diagnostic",t.messageDirection=Si.MessageDirection.clientToServer,t.type=new Si.ProtocolRequestType(t.method),t.partialResult=new Ux.ProgressType})(Bx||(wr.WorkspaceDiagnosticRequest=Bx={}));var Hx;(function(t){t.method="workspace/diagnostic/refresh",t.messageDirection=Si.MessageDirection.serverToClient,t.type=new Si.ProtocolRequestType0(t.method)})(Hx||(wr.DiagnosticRefreshRequest=Hx={}))});var Zx=M(Ve=>{"use strict";Object.defineProperty(Ve,"__esModule",{value:!0});Ve.DidCloseNotebookDocumentNotification=Ve.DidSaveNotebookDocumentNotification=Ve.DidChangeNotebookDocumentNotification=Ve.NotebookCellArrayChange=Ve.DidOpenNotebookDocumentNotification=Ve.NotebookDocumentSyncRegistrationType=Ve.NotebookDocument=Ve.NotebookCell=Ve.ExecutionSummary=Ve.NotebookCellKind=void 0;var gu=(Da(),lp(vc)),Dr=Qc(),Zr=_e(),am;(function(t){t.Markup=1,t.Code=2;function e(r){return r===1||r===2}t.is=e})(am||(Ve.NotebookCellKind=am={}));var om;(function(t){function e(a,o){let i={executionOrder:a};return(o===!0||o===!1)&&(i.success=o),i}t.create=e;function r(a){let o=a;return Dr.objectLiteral(o)&&gu.uinteger.is(o.executionOrder)&&(o.success===void 0||Dr.boolean(o.success))}t.is=r;function n(a,o){return a===o?!0:a==null||o===null||o===void 0?!1:a.executionOrder===o.executionOrder&&a.success===o.success}t.equals=n})(om||(Ve.ExecutionSummary=om={}));var ld;(function(t){function e(o,i){return{kind:o,document:i}}t.create=e;function r(o){let i=o;return Dr.objectLiteral(i)&&am.is(i.kind)&&gu.DocumentUri.is(i.document)&&(i.metadata===void 0||Dr.objectLiteral(i.metadata))}t.is=r;function n(o,i){let s=new Set;return o.document!==i.document&&s.add("document"),o.kind!==i.kind&&s.add("kind"),o.executionSummary!==i.executionSummary&&s.add("executionSummary"),(o.metadata!==void 0||i.metadata!==void 0)&&!a(o.metadata,i.metadata)&&s.add("metadata"),(o.executionSummary!==void 0||i.executionSummary!==void 0)&&!om.equals(o.executionSummary,i.executionSummary)&&s.add("executionSummary"),s}t.diff=n;function a(o,i){if(o===i)return!0;if(o==null||i===null||i===void 0||typeof o!=typeof i||typeof o!="object")return!1;let s=Array.isArray(o),u=Array.isArray(i);if(s!==u)return!1;if(s&&u){if(o.length!==i.length)return!1;for(let l=0;l<o.length;l++)if(!a(o[l],i[l]))return!1}if(Dr.objectLiteral(o)&&Dr.objectLiteral(i)){let l=Object.keys(o),c=Object.keys(i);if(l.length!==c.length||(l.sort(),c.sort(),!a(l,c)))return!1;for(let d=0;d<l.length;d++){let p=l[d];if(!a(o[p],i[p]))return!1}}return!0}})(ld||(Ve.NotebookCell=ld={}));var jx;(function(t){function e(n,a,o,i){return{uri:n,notebookType:a,version:o,cells:i}}t.create=e;function r(n){let a=n;return Dr.objectLiteral(a)&&Dr.string(a.uri)&&gu.integer.is(a.version)&&Dr.typedArray(a.cells,ld.is)}t.is=r})(jx||(Ve.NotebookDocument=jx={}));var Ci;(function(t){t.method="notebookDocument/sync",t.messageDirection=Zr.MessageDirection.clientToServer,t.type=new Zr.RegistrationType(t.method)})(Ci||(Ve.NotebookDocumentSyncRegistrationType=Ci={}));var Vx;(function(t){t.method="notebookDocument/didOpen",t.messageDirection=Zr.MessageDirection.clientToServer,t.type=new Zr.ProtocolNotificationType(t.method),t.registrationMethod=Ci.method})(Vx||(Ve.DidOpenNotebookDocumentNotification=Vx={}));var Yx;(function(t){function e(n){let a=n;return Dr.objectLiteral(a)&&gu.uinteger.is(a.start)&&gu.uinteger.is(a.deleteCount)&&(a.cells===void 0||Dr.typedArray(a.cells,ld.is))}t.is=e;function r(n,a,o){let i={start:n,deleteCount:a};return o!==void 0&&(i.cells=o),i}t.create=r})(Yx||(Ve.NotebookCellArrayChange=Yx={}));var Qx;(function(t){t.method="notebookDocument/didChange",t.messageDirection=Zr.MessageDirection.clientToServer,t.type=new Zr.ProtocolNotificationType(t.method),t.registrationMethod=Ci.method})(Qx||(Ve.DidChangeNotebookDocumentNotification=Qx={}));var Xx;(function(t){t.method="notebookDocument/didSave",t.messageDirection=Zr.MessageDirection.clientToServer,t.type=new Zr.ProtocolNotificationType(t.method),t.registrationMethod=Ci.method})(Xx||(Ve.DidSaveNotebookDocumentNotification=Xx={}));var Jx;(function(t){t.method="notebookDocument/didClose",t.messageDirection=Zr.MessageDirection.clientToServer,t.type=new Zr.ProtocolNotificationType(t.method),t.registrationMethod=Ci.method})(Jx||(Ve.DidCloseNotebookDocumentNotification=Jx={}))});var rA=M(cd=>{"use strict";Object.defineProperty(cd,"__esModule",{value:!0});cd.InlineCompletionRequest=void 0;var eA=_e(),tA;(function(t){t.method="textDocument/inlineCompletion",t.messageDirection=eA.MessageDirection.clientToServer,t.type=new eA.ProtocolRequestType(t.method)})(tA||(cd.InlineCompletionRequest=tA={}))});var hk=M(f=>{"use strict";Object.defineProperty(f,"__esModule",{value:!0});f.WorkspaceSymbolRequest=f.CodeActionResolveRequest=f.CodeActionRequest=f.DocumentSymbolRequest=f.DocumentHighlightRequest=f.ReferencesRequest=f.DefinitionRequest=f.SignatureHelpRequest=f.SignatureHelpTriggerKind=f.HoverRequest=f.CompletionResolveRequest=f.CompletionRequest=f.CompletionTriggerKind=f.PublishDiagnosticsNotification=f.WatchKind=f.RelativePattern=f.FileChangeType=f.DidChangeWatchedFilesNotification=f.WillSaveTextDocumentWaitUntilRequest=f.WillSaveTextDocumentNotification=f.TextDocumentSaveReason=f.DidSaveTextDocumentNotification=f.DidCloseTextDocumentNotification=f.DidChangeTextDocumentNotification=f.TextDocumentContentChangeEvent=f.DidOpenTextDocumentNotification=f.TextDocumentSyncKind=f.TelemetryEventNotification=f.LogMessageNotification=f.ShowMessageRequest=f.ShowMessageNotification=f.MessageType=f.DidChangeConfigurationNotification=f.ExitNotification=f.ShutdownRequest=f.InitializedNotification=f.InitializeErrorCodes=f.InitializeRequest=f.WorkDoneProgressOptions=f.TextDocumentRegistrationOptions=f.StaticRegistrationOptions=f.PositionEncodingKind=f.FailureHandlingKind=f.ResourceOperationKind=f.UnregistrationRequest=f.RegistrationRequest=f.DocumentSelector=f.NotebookCellTextDocumentFilter=f.NotebookDocumentFilter=f.TextDocumentFilter=void 0;f.MonikerRequest=f.MonikerKind=f.UniquenessLevel=f.WillDeleteFilesRequest=f.DidDeleteFilesNotification=f.WillRenameFilesRequest=f.DidRenameFilesNotification=f.WillCreateFilesRequest=f.DidCreateFilesNotification=f.FileOperationPatternKind=f.LinkedEditingRangeRequest=f.ShowDocumentRequest=f.SemanticTokensRegistrationType=f.SemanticTokensRefreshRequest=f.SemanticTokensRangeRequest=f.SemanticTokensDeltaRequest=f.SemanticTokensRequest=f.TokenFormat=f.CallHierarchyPrepareRequest=f.CallHierarchyOutgoingCallsRequest=f.CallHierarchyIncomingCallsRequest=f.WorkDoneProgressCancelNotification=f.WorkDoneProgressCreateRequest=f.WorkDoneProgress=f.SelectionRangeRequest=f.DeclarationRequest=f.FoldingRangeRefreshRequest=f.FoldingRangeRequest=f.ColorPresentationRequest=f.DocumentColorRequest=f.ConfigurationRequest=f.DidChangeWorkspaceFoldersNotification=f.WorkspaceFoldersRequest=f.TypeDefinitionRequest=f.ImplementationRequest=f.ApplyWorkspaceEditRequest=f.ExecuteCommandRequest=f.PrepareRenameRequest=f.RenameRequest=f.PrepareSupportDefaultBehavior=f.DocumentOnTypeFormattingRequest=f.DocumentRangesFormattingRequest=f.DocumentRangeFormattingRequest=f.DocumentFormattingRequest=f.DocumentLinkResolveRequest=f.DocumentLinkRequest=f.CodeLensRefreshRequest=f.CodeLensResolveRequest=f.CodeLensRequest=f.WorkspaceSymbolResolveRequest=void 0;f.InlineCompletionRequest=f.DidCloseNotebookDocumentNotification=f.DidSaveNotebookDocumentNotification=f.DidChangeNotebookDocumentNotification=f.NotebookCellArrayChange=f.DidOpenNotebookDocumentNotification=f.NotebookDocumentSyncRegistrationType=f.NotebookDocument=f.NotebookCell=f.ExecutionSummary=f.NotebookCellKind=f.DiagnosticRefreshRequest=f.WorkspaceDiagnosticRequest=f.DocumentDiagnosticRequest=f.DocumentDiagnosticReportKind=f.DiagnosticServerCancellationData=f.InlayHintRefreshRequest=f.InlayHintResolveRequest=f.InlayHintRequest=f.InlineValueRefreshRequest=f.InlineValueRequest=f.TypeHierarchySupertypesRequest=f.TypeHierarchySubtypesRequest=f.TypeHierarchyPrepareRequest=void 0;var P=_e(),nA=(Da(),lp(vc)),gt=Qc(),Zz=RT();Object.defineProperty(f,"ImplementationRequest",{enumerable:!0,get:function(){return Zz.ImplementationRequest}});var eL=bT();Object.defineProperty(f,"TypeDefinitionRequest",{enumerable:!0,get:function(){return eL.TypeDefinitionRequest}});var dk=NT();Object.defineProperty(f,"WorkspaceFoldersRequest",{enumerable:!0,get:function(){return dk.WorkspaceFoldersRequest}});Object.defineProperty(f,"DidChangeWorkspaceFoldersNotification",{enumerable:!0,get:function(){return dk.DidChangeWorkspaceFoldersNotification}});var tL=OT();Object.defineProperty(f,"ConfigurationRequest",{enumerable:!0,get:function(){return tL.ConfigurationRequest}});var pk=FT();Object.defineProperty(f,"DocumentColorRequest",{enumerable:!0,get:function(){return pk.DocumentColorRequest}});Object.defineProperty(f,"ColorPresentationRequest",{enumerable:!0,get:function(){return pk.ColorPresentationRequest}});var fk=BT();Object.defineProperty(f,"FoldingRangeRequest",{enumerable:!0,get:function(){return fk.FoldingRangeRequest}});Object.defineProperty(f,"FoldingRangeRefreshRequest",{enumerable:!0,get:function(){return fk.FoldingRangeRefreshRequest}});var rL=qT();Object.defineProperty(f,"DeclarationRequest",{enumerable:!0,get:function(){return rL.DeclarationRequest}});var nL=YT();Object.defineProperty(f,"SelectionRangeRequest",{enumerable:!0,get:function(){return nL.SelectionRangeRequest}});var cm=ZT();Object.defineProperty(f,"WorkDoneProgress",{enumerable:!0,get:function(){return cm.WorkDoneProgress}});Object.defineProperty(f,"WorkDoneProgressCreateRequest",{enumerable:!0,get:function(){return cm.WorkDoneProgressCreateRequest}});Object.defineProperty(f,"WorkDoneProgressCancelNotification",{enumerable:!0,get:function(){return cm.WorkDoneProgressCancelNotification}});var dm=nx();Object.defineProperty(f,"CallHierarchyIncomingCallsRequest",{enumerable:!0,get:function(){return dm.CallHierarchyIncomingCallsRequest}});Object.defineProperty(f,"CallHierarchyOutgoingCallsRequest",{enumerable:!0,get:function(){return dm.CallHierarchyOutgoingCallsRequest}});Object.defineProperty(f,"CallHierarchyPrepareRequest",{enumerable:!0,get:function(){return dm.CallHierarchyPrepareRequest}});var $i=lx();Object.defineProperty(f,"TokenFormat",{enumerable:!0,get:function(){return $i.TokenFormat}});Object.defineProperty(f,"SemanticTokensRequest",{enumerable:!0,get:function(){return $i.SemanticTokensRequest}});Object.defineProperty(f,"SemanticTokensDeltaRequest",{enumerable:!0,get:function(){return $i.SemanticTokensDeltaRequest}});Object.defineProperty(f,"SemanticTokensRangeRequest",{enumerable:!0,get:function(){return $i.SemanticTokensRangeRequest}});Object.defineProperty(f,"SemanticTokensRefreshRequest",{enumerable:!0,get:function(){return $i.SemanticTokensRefreshRequest}});Object.defineProperty(f,"SemanticTokensRegistrationType",{enumerable:!0,get:function(){return $i.SemanticTokensRegistrationType}});var aL=px();Object.defineProperty(f,"ShowDocumentRequest",{enumerable:!0,get:function(){return aL.ShowDocumentRequest}});var oL=hx();Object.defineProperty(f,"LinkedEditingRangeRequest",{enumerable:!0,get:function(){return oL.LinkedEditingRangeRequest}});var Ha=Tx();Object.defineProperty(f,"FileOperationPatternKind",{enumerable:!0,get:function(){return Ha.FileOperationPatternKind}});Object.defineProperty(f,"DidCreateFilesNotification",{enumerable:!0,get:function(){return Ha.DidCreateFilesNotification}});Object.defineProperty(f,"WillCreateFilesRequest",{enumerable:!0,get:function(){return Ha.WillCreateFilesRequest}});Object.defineProperty(f,"DidRenameFilesNotification",{enumerable:!0,get:function(){return Ha.DidRenameFilesNotification}});Object.defineProperty(f,"WillRenameFilesRequest",{enumerable:!0,get:function(){return Ha.WillRenameFilesRequest}});Object.defineProperty(f,"DidDeleteFilesNotification",{enumerable:!0,get:function(){return Ha.DidDeleteFilesNotification}});Object.defineProperty(f,"WillDeleteFilesRequest",{enumerable:!0,get:function(){return Ha.WillDeleteFilesRequest}});var pm=Rx();Object.defineProperty(f,"UniquenessLevel",{enumerable:!0,get:function(){return pm.UniquenessLevel}});Object.defineProperty(f,"MonikerKind",{enumerable:!0,get:function(){return pm.MonikerKind}});Object.defineProperty(f,"MonikerRequest",{enumerable:!0,get:function(){return pm.MonikerRequest}});var fm=Ex();Object.defineProperty(f,"TypeHierarchyPrepareRequest",{enumerable:!0,get:function(){return fm.TypeHierarchyPrepareRequest}});Object.defineProperty(f,"TypeHierarchySubtypesRequest",{enumerable:!0,get:function(){return fm.TypeHierarchySubtypesRequest}});Object.defineProperty(f,"TypeHierarchySupertypesRequest",{enumerable:!0,get:function(){return fm.TypeHierarchySupertypesRequest}});var yk=_x();Object.defineProperty(f,"InlineValueRequest",{enumerable:!0,get:function(){return yk.InlineValueRequest}});Object.defineProperty(f,"InlineValueRefreshRequest",{enumerable:!0,get:function(){return yk.InlineValueRefreshRequest}});var ym=Lx();Object.defineProperty(f,"InlayHintRequest",{enumerable:!0,get:function(){return ym.InlayHintRequest}});Object.defineProperty(f,"InlayHintResolveRequest",{enumerable:!0,get:function(){return ym.InlayHintResolveRequest}});Object.defineProperty(f,"InlayHintRefreshRequest",{enumerable:!0,get:function(){return ym.InlayHintRefreshRequest}});var mu=qx();Object.defineProperty(f,"DiagnosticServerCancellationData",{enumerable:!0,get:function(){return mu.DiagnosticServerCancellationData}});Object.defineProperty(f,"DocumentDiagnosticReportKind",{enumerable:!0,get:function(){return mu.DocumentDiagnosticReportKind}});Object.defineProperty(f,"DocumentDiagnosticRequest",{enumerable:!0,get:function(){return mu.DocumentDiagnosticRequest}});Object.defineProperty(f,"WorkspaceDiagnosticRequest",{enumerable:!0,get:function(){return mu.WorkspaceDiagnosticRequest}});Object.defineProperty(f,"DiagnosticRefreshRequest",{enumerable:!0,get:function(){return mu.DiagnosticRefreshRequest}});var en=Zx();Object.defineProperty(f,"NotebookCellKind",{enumerable:!0,get:function(){return en.NotebookCellKind}});Object.defineProperty(f,"ExecutionSummary",{enumerable:!0,get:function(){return en.ExecutionSummary}});Object.defineProperty(f,"NotebookCell",{enumerable:!0,get:function(){return en.NotebookCell}});Object.defineProperty(f,"NotebookDocument",{enumerable:!0,get:function(){return en.NotebookDocument}});Object.defineProperty(f,"NotebookDocumentSyncRegistrationType",{enumerable:!0,get:function(){return en.NotebookDocumentSyncRegistrationType}});Object.defineProperty(f,"DidOpenNotebookDocumentNotification",{enumerable:!0,get:function(){return en.DidOpenNotebookDocumentNotification}});Object.defineProperty(f,"NotebookCellArrayChange",{enumerable:!0,get:function(){return en.NotebookCellArrayChange}});Object.defineProperty(f,"DidChangeNotebookDocumentNotification",{enumerable:!0,get:function(){return en.DidChangeNotebookDocumentNotification}});Object.defineProperty(f,"DidSaveNotebookDocumentNotification",{enumerable:!0,get:function(){return en.DidSaveNotebookDocumentNotification}});Object.defineProperty(f,"DidCloseNotebookDocumentNotification",{enumerable:!0,get:function(){return en.DidCloseNotebookDocumentNotification}});var iL=rA();Object.defineProperty(f,"InlineCompletionRequest",{enumerable:!0,get:function(){return iL.InlineCompletionRequest}});var im;(function(t){function e(r){let n=r;return gt.string(n)||gt.string(n.language)||gt.string(n.scheme)||gt.string(n.pattern)}t.is=e})(im||(f.TextDocumentFilter=im={}));var sm;(function(t){function e(r){let n=r;return gt.objectLiteral(n)&&(gt.string(n.notebookType)||gt.string(n.scheme)||gt.string(n.pattern))}t.is=e})(sm||(f.NotebookDocumentFilter=sm={}));var um;(function(t){function e(r){let n=r;return gt.objectLiteral(n)&&(gt.string(n.notebook)||sm.is(n.notebook))&&(n.language===void 0||gt.string(n.language))}t.is=e})(um||(f.NotebookCellTextDocumentFilter=um={}));var lm;(function(t){function e(r){if(!Array.isArray(r))return!1;for(let n of r)if(!gt.string(n)&&!im.is(n)&&!um.is(n))return!1;return!0}t.is=e})(lm||(f.DocumentSelector=lm={}));var aA;(function(t){t.method="client/registerCapability",t.messageDirection=P.MessageDirection.serverToClient,t.type=new P.ProtocolRequestType(t.method)})(aA||(f.RegistrationRequest=aA={}));var oA;(function(t){t.method="client/unregisterCapability",t.messageDirection=P.MessageDirection.serverToClient,t.type=new P.ProtocolRequestType(t.method)})(oA||(f.UnregistrationRequest=oA={}));var iA;(function(t){t.Create="create",t.Rename="rename",t.Delete="delete"})(iA||(f.ResourceOperationKind=iA={}));var sA;(function(t){t.Abort="abort",t.Transactional="transactional",t.TextOnlyTransactional="textOnlyTransactional",t.Undo="undo"})(sA||(f.FailureHandlingKind=sA={}));var uA;(function(t){t.UTF8="utf-8",t.UTF16="utf-16",t.UTF32="utf-32"})(uA||(f.PositionEncodingKind=uA={}));var lA;(function(t){function e(r){let n=r;return n&&gt.string(n.id)&&n.id.length>0}t.hasId=e})(lA||(f.StaticRegistrationOptions=lA={}));var cA;(function(t){function e(r){let n=r;return n&&(n.documentSelector===null||lm.is(n.documentSelector))}t.is=e})(cA||(f.TextDocumentRegistrationOptions=cA={}));var dA;(function(t){function e(n){let a=n;return gt.objectLiteral(a)&&(a.workDoneProgress===void 0||gt.boolean(a.workDoneProgress))}t.is=e;function r(n){let a=n;return a&&gt.boolean(a.workDoneProgress)}t.hasWorkDoneProgress=r})(dA||(f.WorkDoneProgressOptions=dA={}));var pA;(function(t){t.method="initialize",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(pA||(f.InitializeRequest=pA={}));var fA;(function(t){t.unknownProtocolVersion=1})(fA||(f.InitializeErrorCodes=fA={}));var yA;(function(t){t.method="initialized",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolNotificationType(t.method)})(yA||(f.InitializedNotification=yA={}));var hA;(function(t){t.method="shutdown",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType0(t.method)})(hA||(f.ShutdownRequest=hA={}));var gA;(function(t){t.method="exit",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolNotificationType0(t.method)})(gA||(f.ExitNotification=gA={}));var mA;(function(t){t.method="workspace/didChangeConfiguration",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolNotificationType(t.method)})(mA||(f.DidChangeConfigurationNotification=mA={}));var vA;(function(t){t.Error=1,t.Warning=2,t.Info=3,t.Log=4,t.Debug=5})(vA||(f.MessageType=vA={}));var wA;(function(t){t.method="window/showMessage",t.messageDirection=P.MessageDirection.serverToClient,t.type=new P.ProtocolNotificationType(t.method)})(wA||(f.ShowMessageNotification=wA={}));var SA;(function(t){t.method="window/showMessageRequest",t.messageDirection=P.MessageDirection.serverToClient,t.type=new P.ProtocolRequestType(t.method)})(SA||(f.ShowMessageRequest=SA={}));var CA;(function(t){t.method="window/logMessage",t.messageDirection=P.MessageDirection.serverToClient,t.type=new P.ProtocolNotificationType(t.method)})(CA||(f.LogMessageNotification=CA={}));var $A;(function(t){t.method="telemetry/event",t.messageDirection=P.MessageDirection.serverToClient,t.type=new P.ProtocolNotificationType(t.method)})($A||(f.TelemetryEventNotification=$A={}));var TA;(function(t){t.None=0,t.Full=1,t.Incremental=2})(TA||(f.TextDocumentSyncKind=TA={}));var xA;(function(t){t.method="textDocument/didOpen",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolNotificationType(t.method)})(xA||(f.DidOpenTextDocumentNotification=xA={}));var AA;(function(t){function e(n){let a=n;return a!=null&&typeof a.text=="string"&&a.range!==void 0&&(a.rangeLength===void 0||typeof a.rangeLength=="number")}t.isIncremental=e;function r(n){let a=n;return a!=null&&typeof a.text=="string"&&a.range===void 0&&a.rangeLength===void 0}t.isFull=r})(AA||(f.TextDocumentContentChangeEvent=AA={}));var kA;(function(t){t.method="textDocument/didChange",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolNotificationType(t.method)})(kA||(f.DidChangeTextDocumentNotification=kA={}));var IA;(function(t){t.method="textDocument/didClose",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolNotificationType(t.method)})(IA||(f.DidCloseTextDocumentNotification=IA={}));var RA;(function(t){t.method="textDocument/didSave",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolNotificationType(t.method)})(RA||(f.DidSaveTextDocumentNotification=RA={}));var PA;(function(t){t.Manual=1,t.AfterDelay=2,t.FocusOut=3})(PA||(f.TextDocumentSaveReason=PA={}));var KA;(function(t){t.method="textDocument/willSave",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolNotificationType(t.method)})(KA||(f.WillSaveTextDocumentNotification=KA={}));var bA;(function(t){t.method="textDocument/willSaveWaitUntil",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(bA||(f.WillSaveTextDocumentWaitUntilRequest=bA={}));var EA;(function(t){t.method="workspace/didChangeWatchedFiles",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolNotificationType(t.method)})(EA||(f.DidChangeWatchedFilesNotification=EA={}));var DA;(function(t){t.Created=1,t.Changed=2,t.Deleted=3})(DA||(f.FileChangeType=DA={}));var NA;(function(t){function e(r){let n=r;return gt.objectLiteral(n)&&(nA.URI.is(n.baseUri)||nA.WorkspaceFolder.is(n.baseUri))&&gt.string(n.pattern)}t.is=e})(NA||(f.RelativePattern=NA={}));var _A;(function(t){t.Create=1,t.Change=2,t.Delete=4})(_A||(f.WatchKind=_A={}));var MA;(function(t){t.method="textDocument/publishDiagnostics",t.messageDirection=P.MessageDirection.serverToClient,t.type=new P.ProtocolNotificationType(t.method)})(MA||(f.PublishDiagnosticsNotification=MA={}));var OA;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.TriggerForIncompleteCompletions=3})(OA||(f.CompletionTriggerKind=OA={}));var zA;(function(t){t.method="textDocument/completion",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(zA||(f.CompletionRequest=zA={}));var LA;(function(t){t.method="completionItem/resolve",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(LA||(f.CompletionResolveRequest=LA={}));var FA;(function(t){t.method="textDocument/hover",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(FA||(f.HoverRequest=FA={}));var WA;(function(t){t.Invoked=1,t.TriggerCharacter=2,t.ContentChange=3})(WA||(f.SignatureHelpTriggerKind=WA={}));var GA;(function(t){t.method="textDocument/signatureHelp",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(GA||(f.SignatureHelpRequest=GA={}));var BA;(function(t){t.method="textDocument/definition",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(BA||(f.DefinitionRequest=BA={}));var HA;(function(t){t.method="textDocument/references",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(HA||(f.ReferencesRequest=HA={}));var UA;(function(t){t.method="textDocument/documentHighlight",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(UA||(f.DocumentHighlightRequest=UA={}));var qA;(function(t){t.method="textDocument/documentSymbol",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(qA||(f.DocumentSymbolRequest=qA={}));var jA;(function(t){t.method="textDocument/codeAction",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(jA||(f.CodeActionRequest=jA={}));var VA;(function(t){t.method="codeAction/resolve",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(VA||(f.CodeActionResolveRequest=VA={}));var YA;(function(t){t.method="workspace/symbol",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(YA||(f.WorkspaceSymbolRequest=YA={}));var QA;(function(t){t.method="workspaceSymbol/resolve",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(QA||(f.WorkspaceSymbolResolveRequest=QA={}));var XA;(function(t){t.method="textDocument/codeLens",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(XA||(f.CodeLensRequest=XA={}));var JA;(function(t){t.method="codeLens/resolve",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(JA||(f.CodeLensResolveRequest=JA={}));var ZA;(function(t){t.method="workspace/codeLens/refresh",t.messageDirection=P.MessageDirection.serverToClient,t.type=new P.ProtocolRequestType0(t.method)})(ZA||(f.CodeLensRefreshRequest=ZA={}));var ek;(function(t){t.method="textDocument/documentLink",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(ek||(f.DocumentLinkRequest=ek={}));var tk;(function(t){t.method="documentLink/resolve",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(tk||(f.DocumentLinkResolveRequest=tk={}));var rk;(function(t){t.method="textDocument/formatting",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(rk||(f.DocumentFormattingRequest=rk={}));var nk;(function(t){t.method="textDocument/rangeFormatting",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(nk||(f.DocumentRangeFormattingRequest=nk={}));var ak;(function(t){t.method="textDocument/rangesFormatting",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(ak||(f.DocumentRangesFormattingRequest=ak={}));var ok;(function(t){t.method="textDocument/onTypeFormatting",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(ok||(f.DocumentOnTypeFormattingRequest=ok={}));var ik;(function(t){t.Identifier=1})(ik||(f.PrepareSupportDefaultBehavior=ik={}));var sk;(function(t){t.method="textDocument/rename",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(sk||(f.RenameRequest=sk={}));var uk;(function(t){t.method="textDocument/prepareRename",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(uk||(f.PrepareRenameRequest=uk={}));var lk;(function(t){t.method="workspace/executeCommand",t.messageDirection=P.MessageDirection.clientToServer,t.type=new P.ProtocolRequestType(t.method)})(lk||(f.ExecuteCommandRequest=lk={}));var ck;(function(t){t.method="workspace/applyEdit",t.messageDirection=P.MessageDirection.serverToClient,t.type=new P.ProtocolRequestType("workspace/applyEdit")})(ck||(f.ApplyWorkspaceEditRequest=ck={}))});var mk=M(dd=>{"use strict";Object.defineProperty(dd,"__esModule",{value:!0});dd.createProtocolConnection=void 0;var gk=Ba();function sL(t,e,r,n){return gk.ConnectionStrategy.is(n)&&(n={connectionStrategy:n}),(0,gk.createMessageConnection)(t,e,r,n)}dd.createProtocolConnection=sL});var wk=M(or=>{"use strict";var uL=or&&or.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var a=Object.getOwnPropertyDescriptor(e,r);(!a||("get"in a?!e.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,a)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),pd=or&&or.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&uL(e,t,r)};Object.defineProperty(or,"__esModule",{value:!0});or.LSPErrorCodes=or.createProtocolConnection=void 0;pd(Ba(),or);pd((Da(),lp(vc)),or);pd(_e(),or);pd(hk(),or);var lL=mk();Object.defineProperty(or,"createProtocolConnection",{enumerable:!0,get:function(){return lL.createProtocolConnection}});var vk;(function(t){t.lspReservedErrorRangeStart=-32899,t.RequestFailed=-32803,t.ServerCancelled=-32802,t.ContentModified=-32801,t.RequestCancelled=-32800,t.lspReservedErrorRangeEnd=-32800})(vk||(or.LSPErrorCodes=vk={}))});var Ye=M(tn=>{"use strict";var cL=tn&&tn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var a=Object.getOwnPropertyDescriptor(e,r);(!a||("get"in a?!e.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,a)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),Sk=tn&&tn.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&cL(e,t,r)};Object.defineProperty(tn,"__esModule",{value:!0});tn.createProtocolConnection=void 0;var dL=Jg();Sk(Jg(),tn);Sk(wk(),tn);function pL(t,e,r,n){return(0,dL.createMessageConnection)(t,e,r,n)}tn.createProtocolConnection=pL});var gm=M(na=>{"use strict";Object.defineProperty(na,"__esModule",{value:!0});na.SemanticTokensBuilder=na.SemanticTokensDiff=na.SemanticTokensFeature=void 0;var fd=Ye(),fL=t=>class extends t{get semanticTokens(){return{refresh:()=>this.connection.sendRequest(fd.SemanticTokensRefreshRequest.type),on:e=>{let r=fd.SemanticTokensRequest.type;return this.connection.onRequest(r,(n,a)=>e(n,a,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onDelta:e=>{let r=fd.SemanticTokensDeltaRequest.type;return this.connection.onRequest(r,(n,a)=>e(n,a,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onRange:e=>{let r=fd.SemanticTokensRangeRequest.type;return this.connection.onRequest(r,(n,a)=>e(n,a,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};na.SemanticTokensFeature=fL;var yd=class{constructor(e,r){this.originalSequence=e,this.modifiedSequence=r}computeDiff(){let e=this.originalSequence.length,r=this.modifiedSequence.length,n=0;for(;n<r&&n<e&&this.originalSequence[n]===this.modifiedSequence[n];)n++;if(n<r&&n<e){let a=e-1,o=r-1;for(;a>=n&&o>=n&&this.originalSequence[a]===this.modifiedSequence[o];)a--,o--;(a<n||o<n)&&(a++,o++);let i=a-n+1,s=this.modifiedSequence.slice(n,o+1);return s.length===1&&s[0]===this.originalSequence[a]?[{start:n,deleteCount:i-1}]:[{start:n,deleteCount:i,data:s}]}else return n<r?[{start:n,deleteCount:0,data:this.modifiedSequence.slice(n)}]:n<e?[{start:n,deleteCount:e-n}]:[]}};na.SemanticTokensDiff=yd;var hm=class{constructor(){this._prevData=void 0,this.initialize()}initialize(){this._id=Date.now(),this._prevLine=0,this._prevChar=0,this._data=[],this._dataLen=0}push(e,r,n,a,o){let i=e,s=r;this._dataLen>0&&(i-=this._prevLine,i===0&&(s-=this._prevChar)),this._data[this._dataLen++]=i,this._data[this._dataLen++]=s,this._data[this._dataLen++]=n,this._data[this._dataLen++]=a,this._data[this._dataLen++]=o,this._prevLine=e,this._prevChar=r}get id(){return this._id.toString()}previousResult(e){this.id===e&&(this._prevData=this._data),this.initialize()}build(){return this._prevData=void 0,{resultId:this.id,data:this._data}}canBuildEdits(){return this._prevData!==void 0}buildEdits(){return this._prevData!==void 0?{resultId:this.id,edits:new yd(this._prevData,this._data).computeDiff()}:this.build()}};na.SemanticTokensBuilder=hm});var Ck=M(hd=>{"use strict";Object.defineProperty(hd,"__esModule",{value:!0});hd.InlineCompletionFeature=void 0;var yL=Ye(),hL=t=>class extends t{get inlineCompletion(){return{on:e=>this.connection.onRequest(yL.InlineCompletionRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};hd.InlineCompletionFeature=hL});var vm=M(gd=>{"use strict";Object.defineProperty(gd,"__esModule",{value:!0});gd.TextDocuments=void 0;var Ua=Ye(),mm=class{constructor(e){this._configuration=e,this._syncedDocuments=new Map,this._onDidChangeContent=new Ua.Emitter,this._onDidOpen=new Ua.Emitter,this._onDidClose=new Ua.Emitter,this._onDidSave=new Ua.Emitter,this._onWillSave=new Ua.Emitter}get onDidOpen(){return this._onDidOpen.event}get onDidChangeContent(){return this._onDidChangeContent.event}get onWillSave(){return this._onWillSave.event}onWillSaveWaitUntil(e){this._willSaveWaitUntil=e}get onDidSave(){return this._onDidSave.event}get onDidClose(){return this._onDidClose.event}get(e){return this._syncedDocuments.get(e)}all(){return Array.from(this._syncedDocuments.values())}keys(){return Array.from(this._syncedDocuments.keys())}listen(e){e.__textDocumentSync=Ua.TextDocumentSyncKind.Incremental;let r=[];return r.push(e.onDidOpenTextDocument(n=>{let a=n.textDocument,o=this._configuration.create(a.uri,a.languageId,a.version,a.text);this._syncedDocuments.set(a.uri,o);let i=Object.freeze({document:o});this._onDidOpen.fire(i),this._onDidChangeContent.fire(i)})),r.push(e.onDidChangeTextDocument(n=>{let a=n.textDocument,o=n.contentChanges;if(o.length===0)return;let{version:i}=a;if(i==null)throw new Error(`Received document change event for ${a.uri} without valid version identifier`);let s=this._syncedDocuments.get(a.uri);s!==void 0&&(s=this._configuration.update(s,o,i),this._syncedDocuments.set(a.uri,s),this._onDidChangeContent.fire(Object.freeze({document:s})))})),r.push(e.onDidCloseTextDocument(n=>{let a=this._syncedDocuments.get(n.textDocument.uri);a!==void 0&&(this._syncedDocuments.delete(n.textDocument.uri),this._onDidClose.fire(Object.freeze({document:a})))})),r.push(e.onWillSaveTextDocument(n=>{let a=this._syncedDocuments.get(n.textDocument.uri);a!==void 0&&this._onWillSave.fire(Object.freeze({document:a,reason:n.reason}))})),r.push(e.onWillSaveTextDocumentWaitUntil((n,a)=>{let o=this._syncedDocuments.get(n.textDocument.uri);return o!==void 0&&this._willSaveWaitUntil?this._willSaveWaitUntil(Object.freeze({document:o,reason:n.reason}),a):[]})),r.push(e.onDidSaveTextDocument(n=>{let a=this._syncedDocuments.get(n.textDocument.uri);a!==void 0&&this._onDidSave.fire(Object.freeze({document:a}))})),Ua.Disposable.create(()=>{r.forEach(n=>n.dispose())})}};gd.TextDocuments=mm});var Sm=M(Ti=>{"use strict";Object.defineProperty(Ti,"__esModule",{value:!0});Ti.NotebookDocuments=Ti.NotebookSyncFeature=void 0;var Sr=Ye(),$k=vm(),gL=t=>class extends t{get synchronization(){return{onDidOpenNotebookDocument:e=>this.connection.onNotification(Sr.DidOpenNotebookDocumentNotification.type,r=>{e(r)}),onDidChangeNotebookDocument:e=>this.connection.onNotification(Sr.DidChangeNotebookDocumentNotification.type,r=>{e(r)}),onDidSaveNotebookDocument:e=>this.connection.onNotification(Sr.DidSaveNotebookDocumentNotification.type,r=>{e(r)}),onDidCloseNotebookDocument:e=>this.connection.onNotification(Sr.DidCloseNotebookDocumentNotification.type,r=>{e(r)})}}};Ti.NotebookSyncFeature=gL;var md=class t{onDidOpenTextDocument(e){return this.openHandler=e,Sr.Disposable.create(()=>{this.openHandler=void 0})}openTextDocument(e){this.openHandler&&this.openHandler(e)}onDidChangeTextDocument(e){return this.changeHandler=e,Sr.Disposable.create(()=>{this.changeHandler=e})}changeTextDocument(e){this.changeHandler&&this.changeHandler(e)}onDidCloseTextDocument(e){return this.closeHandler=e,Sr.Disposable.create(()=>{this.closeHandler=void 0})}closeTextDocument(e){this.closeHandler&&this.closeHandler(e)}onWillSaveTextDocument(){return t.NULL_DISPOSE}onWillSaveTextDocumentWaitUntil(){return t.NULL_DISPOSE}onDidSaveTextDocument(){return t.NULL_DISPOSE}};md.NULL_DISPOSE=Object.freeze({dispose:()=>{}});var wm=class{constructor(e){e instanceof $k.TextDocuments?this._cellTextDocuments=e:this._cellTextDocuments=new $k.TextDocuments(e),this.notebookDocuments=new Map,this.notebookCellMap=new Map,this._onDidOpen=new Sr.Emitter,this._onDidChange=new Sr.Emitter,this._onDidSave=new Sr.Emitter,this._onDidClose=new Sr.Emitter}get cellTextDocuments(){return this._cellTextDocuments}getCellTextDocument(e){return this._cellTextDocuments.get(e.document)}getNotebookDocument(e){return this.notebookDocuments.get(e)}getNotebookCell(e){let r=this.notebookCellMap.get(e);return r&&r[0]}findNotebookDocumentForCell(e){let r=typeof e=="string"?e:e.document,n=this.notebookCellMap.get(r);return n&&n[1]}get onDidOpen(){return this._onDidOpen.event}get onDidSave(){return this._onDidSave.event}get onDidChange(){return this._onDidChange.event}get onDidClose(){return this._onDidClose.event}listen(e){let r=new md,n=[];return n.push(this.cellTextDocuments.listen(r)),n.push(e.notebooks.synchronization.onDidOpenNotebookDocument(a=>{this.notebookDocuments.set(a.notebookDocument.uri,a.notebookDocument);for(let o of a.cellTextDocuments)r.openTextDocument({textDocument:o});this.updateCellMap(a.notebookDocument),this._onDidOpen.fire(a.notebookDocument)})),n.push(e.notebooks.synchronization.onDidChangeNotebookDocument(a=>{let o=this.notebookDocuments.get(a.notebookDocument.uri);if(o===void 0)return;o.version=a.notebookDocument.version;let i=o.metadata,s=!1,u=a.change;u.metadata!==void 0&&(s=!0,o.metadata=u.metadata);let l=[],c=[],d=[],p=[];if(u.cells!==void 0){let C=u.cells;if(C.structure!==void 0){let g=C.structure.array;if(o.cells.splice(g.start,g.deleteCount,...g.cells!==void 0?g.cells:[]),C.structure.didOpen!==void 0)for(let y of C.structure.didOpen)r.openTextDocument({textDocument:y}),l.push(y.uri);if(C.structure.didClose)for(let y of C.structure.didClose)r.closeTextDocument({textDocument:y}),c.push(y.uri)}if(C.data!==void 0){let g=new Map(C.data.map(y=>[y.document,y]));for(let y=0;y<=o.cells.length;y++){let $=g.get(o.cells[y].document);if($!==void 0){let K=o.cells.splice(y,1,$);if(d.push({old:K[0],new:$}),g.delete($.document),g.size===0)break}}}if(C.textContent!==void 0)for(let g of C.textContent)r.changeTextDocument({textDocument:g.document,contentChanges:g.changes}),p.push(g.document.uri)}this.updateCellMap(o);let h={notebookDocument:o};s&&(h.metadata={old:i,new:o.metadata});let w=[];for(let C of l)w.push(this.getNotebookCell(C));let S=[];for(let C of c)S.push(this.getNotebookCell(C));let A=[];for(let C of p)A.push(this.getNotebookCell(C));(w.length>0||S.length>0||d.length>0||A.length>0)&&(h.cells={added:w,removed:S,changed:{data:d,textContent:A}}),(h.metadata!==void 0||h.cells!==void 0)&&this._onDidChange.fire(h)})),n.push(e.notebooks.synchronization.onDidSaveNotebookDocument(a=>{let o=this.notebookDocuments.get(a.notebookDocument.uri);o!==void 0&&this._onDidSave.fire(o)})),n.push(e.notebooks.synchronization.onDidCloseNotebookDocument(a=>{let o=this.notebookDocuments.get(a.notebookDocument.uri);if(o!==void 0){this._onDidClose.fire(o);for(let i of a.cellTextDocuments)r.closeTextDocument({textDocument:i});this.notebookDocuments.delete(a.notebookDocument.uri);for(let i of o.cells)this.notebookCellMap.delete(i.document)}})),Sr.Disposable.create(()=>{n.forEach(a=>a.dispose())})}updateCellMap(e){for(let r of e.cells)this.notebookCellMap.set(r.document,[r,e])}};Ti.NotebookDocuments=wm});var Cm=M(it=>{"use strict";Object.defineProperty(it,"__esModule",{value:!0});it.thenable=it.typedArray=it.stringArray=it.array=it.func=it.error=it.number=it.string=it.boolean=void 0;function mL(t){return t===!0||t===!1}it.boolean=mL;function Tk(t){return typeof t=="string"||t instanceof String}it.string=Tk;function vL(t){return typeof t=="number"||t instanceof Number}it.number=vL;function wL(t){return t instanceof Error}it.error=wL;function xk(t){return typeof t=="function"}it.func=xk;function Ak(t){return Array.isArray(t)}it.array=Ak;function SL(t){return Ak(t)&&t.every(e=>Tk(e))}it.stringArray=SL;function CL(t,e){return Array.isArray(t)&&t.every(e)}it.typedArray=CL;function $L(t){return t&&xk(t.then)}it.thenable=$L});var $m=M(Cr=>{"use strict";Object.defineProperty(Cr,"__esModule",{value:!0});Cr.generateUuid=Cr.parse=Cr.isUUID=Cr.v4=Cr.empty=void 0;var vu=class{constructor(e){this._value=e}asHex(){return this._value}equals(e){return this.asHex()===e.asHex()}},wu=class t extends vu{static _oneOf(e){return e[Math.floor(e.length*Math.random())]}static _randomHex(){return t._oneOf(t._chars)}constructor(){super([t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),"-","4",t._randomHex(),t._randomHex(),t._randomHex(),"-",t._oneOf(t._timeHighBits),t._randomHex(),t._randomHex(),t._randomHex(),"-",t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex(),t._randomHex()].join(""))}};wu._chars=["0","1","2","3","4","5","6","6","7","8","9","a","b","c","d","e","f"];wu._timeHighBits=["8","9","a","b"];Cr.empty=new vu("00000000-0000-0000-0000-000000000000");function kk(){return new wu}Cr.v4=kk;var TL=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function Ik(t){return TL.test(t)}Cr.isUUID=Ik;function xL(t){if(!Ik(t))throw new Error("invalid uuid");return new vu(t)}Cr.parse=xL;function AL(){return kk().asHex()}Cr.generateUuid=AL});var Rk=M(oa=>{"use strict";Object.defineProperty(oa,"__esModule",{value:!0});oa.attachPartialResult=oa.ProgressFeature=oa.attachWorkDone=void 0;var aa=Ye(),kL=$m(),qa=class t{constructor(e,r){this._connection=e,this._token=r,t.Instances.set(this._token,this)}begin(e,r,n,a){let o={kind:"begin",title:e,percentage:r,message:n,cancellable:a};this._connection.sendProgress(aa.WorkDoneProgress.type,this._token,o)}report(e,r){let n={kind:"report"};typeof e=="number"?(n.percentage=e,r!==void 0&&(n.message=r)):n.message=e,this._connection.sendProgress(aa.WorkDoneProgress.type,this._token,n)}done(){t.Instances.delete(this._token),this._connection.sendProgress(aa.WorkDoneProgress.type,this._token,{kind:"end"})}};qa.Instances=new Map;var vd=class extends qa{constructor(e,r){super(e,r),this._source=new aa.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose(),super.done()}cancel(){this._source.cancel()}},Su=class{constructor(){}begin(){}report(){}done(){}},wd=class extends Su{constructor(){super(),this._source=new aa.CancellationTokenSource}get token(){return this._source.token}done(){this._source.dispose()}cancel(){this._source.cancel()}};function IL(t,e){if(e===void 0||e.workDoneToken===void 0)return new Su;let r=e.workDoneToken;return delete e.workDoneToken,new qa(t,r)}oa.attachWorkDone=IL;var RL=t=>class extends t{constructor(){super(),this._progressSupported=!1}initialize(e){super.initialize(e),e?.window?.workDoneProgress===!0&&(this._progressSupported=!0,this.connection.onNotification(aa.WorkDoneProgressCancelNotification.type,r=>{let n=qa.Instances.get(r.token);(n instanceof vd||n instanceof wd)&&n.cancel()}))}attachWorkDoneProgress(e){return e===void 0?new Su:new qa(this.connection,e)}createWorkDoneProgress(){if(this._progressSupported){let e=(0,kL.generateUuid)();return this.connection.sendRequest(aa.WorkDoneProgressCreateRequest.type,{token:e}).then(()=>new vd(this.connection,e))}else return Promise.resolve(new wd)}};oa.ProgressFeature=RL;var Tm;(function(t){t.type=new aa.ProgressType})(Tm||(Tm={}));var xm=class{constructor(e,r){this._connection=e,this._token=r}report(e){this._connection.sendProgress(Tm.type,this._token,e)}};function PL(t,e){if(e===void 0||e.partialResultToken===void 0)return;let r=e.partialResultToken;return delete e.partialResultToken,new xm(t,r)}oa.attachPartialResult=PL});var Pk=M(Sd=>{"use strict";Object.defineProperty(Sd,"__esModule",{value:!0});Sd.ConfigurationFeature=void 0;var KL=Ye(),bL=Cm(),EL=t=>class extends t{getConfiguration(e){return e?bL.string(e)?this._getConfiguration({section:e}):this._getConfiguration(e):this._getConfiguration({})}_getConfiguration(e){let r={items:Array.isArray(e)?e:[e]};return this.connection.sendRequest(KL.ConfigurationRequest.type,r).then(n=>Array.isArray(n)?Array.isArray(e)?n:n[0]:Array.isArray(e)?[]:null)}};Sd.ConfigurationFeature=EL});var Kk=M($d=>{"use strict";Object.defineProperty($d,"__esModule",{value:!0});$d.WorkspaceFoldersFeature=void 0;var Cd=Ye(),DL=t=>class extends t{constructor(){super(),this._notificationIsAutoRegistered=!1}initialize(e){super.initialize(e);let r=e.workspace;r&&r.workspaceFolders&&(this._onDidChangeWorkspaceFolders=new Cd.Emitter,this.connection.onNotification(Cd.DidChangeWorkspaceFoldersNotification.type,n=>{this._onDidChangeWorkspaceFolders.fire(n.event)}))}fillServerCapabilities(e){super.fillServerCapabilities(e);let r=e.workspace?.workspaceFolders?.changeNotifications;this._notificationIsAutoRegistered=r===!0||typeof r=="string"}getWorkspaceFolders(){return this.connection.sendRequest(Cd.WorkspaceFoldersRequest.type)}get onDidChangeWorkspaceFolders(){if(!this._onDidChangeWorkspaceFolders)throw new Error("Client doesn't support sending workspace folder change events.");return!this._notificationIsAutoRegistered&&!this._unregistration&&(this._unregistration=this.connection.client.register(Cd.DidChangeWorkspaceFoldersNotification.type)),this._onDidChangeWorkspaceFolders.event}};$d.WorkspaceFoldersFeature=DL});var bk=M(Td=>{"use strict";Object.defineProperty(Td,"__esModule",{value:!0});Td.CallHierarchyFeature=void 0;var Am=Ye(),NL=t=>class extends t{get callHierarchy(){return{onPrepare:e=>this.connection.onRequest(Am.CallHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onIncomingCalls:e=>{let r=Am.CallHierarchyIncomingCallsRequest.type;return this.connection.onRequest(r,(n,a)=>e(n,a,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onOutgoingCalls:e=>{let r=Am.CallHierarchyOutgoingCallsRequest.type;return this.connection.onRequest(r,(n,a)=>e(n,a,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Td.CallHierarchyFeature=NL});var Ek=M(xd=>{"use strict";Object.defineProperty(xd,"__esModule",{value:!0});xd.ShowDocumentFeature=void 0;var _L=Ye(),ML=t=>class extends t{showDocument(e){return this.connection.sendRequest(_L.ShowDocumentRequest.type,e)}};xd.ShowDocumentFeature=ML});var Dk=M(Ad=>{"use strict";Object.defineProperty(Ad,"__esModule",{value:!0});Ad.FileOperationsFeature=void 0;var xi=Ye(),OL=t=>class extends t{onDidCreateFiles(e){return this.connection.onNotification(xi.DidCreateFilesNotification.type,r=>{e(r)})}onDidRenameFiles(e){return this.connection.onNotification(xi.DidRenameFilesNotification.type,r=>{e(r)})}onDidDeleteFiles(e){return this.connection.onNotification(xi.DidDeleteFilesNotification.type,r=>{e(r)})}onWillCreateFiles(e){return this.connection.onRequest(xi.WillCreateFilesRequest.type,(r,n)=>e(r,n))}onWillRenameFiles(e){return this.connection.onRequest(xi.WillRenameFilesRequest.type,(r,n)=>e(r,n))}onWillDeleteFiles(e){return this.connection.onRequest(xi.WillDeleteFilesRequest.type,(r,n)=>e(r,n))}};Ad.FileOperationsFeature=OL});var Nk=M(kd=>{"use strict";Object.defineProperty(kd,"__esModule",{value:!0});kd.LinkedEditingRangeFeature=void 0;var zL=Ye(),LL=t=>class extends t{onLinkedEditingRange(e){return this.connection.onRequest(zL.LinkedEditingRangeRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0))}};kd.LinkedEditingRangeFeature=LL});var _k=M(Id=>{"use strict";Object.defineProperty(Id,"__esModule",{value:!0});Id.TypeHierarchyFeature=void 0;var km=Ye(),FL=t=>class extends t{get typeHierarchy(){return{onPrepare:e=>this.connection.onRequest(km.TypeHierarchyPrepareRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),void 0)),onSupertypes:e=>{let r=km.TypeHierarchySupertypesRequest.type;return this.connection.onRequest(r,(n,a)=>e(n,a,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))},onSubtypes:e=>{let r=km.TypeHierarchySubtypesRequest.type;return this.connection.onRequest(r,(n,a)=>e(n,a,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Id.TypeHierarchyFeature=FL});var Ok=M(Rd=>{"use strict";Object.defineProperty(Rd,"__esModule",{value:!0});Rd.InlineValueFeature=void 0;var Mk=Ye(),WL=t=>class extends t{get inlineValue(){return{refresh:()=>this.connection.sendRequest(Mk.InlineValueRefreshRequest.type),on:e=>this.connection.onRequest(Mk.InlineValueRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r)))}}};Rd.InlineValueFeature=WL});var Lk=M(Pd=>{"use strict";Object.defineProperty(Pd,"__esModule",{value:!0});Pd.FoldingRangeFeature=void 0;var zk=Ye(),GL=t=>class extends t{get foldingRange(){return{refresh:()=>this.connection.sendRequest(zk.FoldingRangeRefreshRequest.type),on:e=>{let r=zk.FoldingRangeRequest.type;return this.connection.onRequest(r,(n,a)=>e(n,a,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Pd.FoldingRangeFeature=GL});var Fk=M(Kd=>{"use strict";Object.defineProperty(Kd,"__esModule",{value:!0});Kd.InlayHintFeature=void 0;var Im=Ye(),BL=t=>class extends t{get inlayHint(){return{refresh:()=>this.connection.sendRequest(Im.InlayHintRefreshRequest.type),on:e=>this.connection.onRequest(Im.InlayHintRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r))),resolve:e=>this.connection.onRequest(Im.InlayHintResolveRequest.type,(r,n)=>e(r,n))}}};Kd.InlayHintFeature=BL});var Wk=M(bd=>{"use strict";Object.defineProperty(bd,"__esModule",{value:!0});bd.DiagnosticFeature=void 0;var Cu=Ye(),HL=t=>class extends t{get diagnostics(){return{refresh:()=>this.connection.sendRequest(Cu.DiagnosticRefreshRequest.type),on:e=>this.connection.onRequest(Cu.DocumentDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(Cu.DocumentDiagnosticRequest.partialResult,r))),onWorkspace:e=>this.connection.onRequest(Cu.WorkspaceDiagnosticRequest.type,(r,n)=>e(r,n,this.attachWorkDoneProgress(r),this.attachPartialResultProgress(Cu.WorkspaceDiagnosticRequest.partialResult,r)))}}};bd.DiagnosticFeature=HL});var Gk=M(Ed=>{"use strict";Object.defineProperty(Ed,"__esModule",{value:!0});Ed.MonikerFeature=void 0;var UL=Ye(),qL=t=>class extends t{get moniker(){return{on:e=>{let r=UL.MonikerRequest.type;return this.connection.onRequest(r,(n,a)=>e(n,a,this.attachWorkDoneProgress(n),this.attachPartialResultProgress(r,n)))}}}};Ed.MonikerFeature=qL});var nI=M(ce=>{"use strict";Object.defineProperty(ce,"__esModule",{value:!0});ce.createConnection=ce.combineFeatures=ce.combineNotebooksFeatures=ce.combineLanguagesFeatures=ce.combineWorkspaceFeatures=ce.combineWindowFeatures=ce.combineClientFeatures=ce.combineTracerFeatures=ce.combineTelemetryFeatures=ce.combineConsoleFeatures=ce._NotebooksImpl=ce._LanguagesImpl=ce.BulkUnregistration=ce.BulkRegistration=ce.ErrorMessageTracker=void 0;var D=Ye(),$r=Cm(),Pm=$m(),Y=Rk(),jL=Pk(),VL=Kk(),YL=bk(),QL=gm(),XL=Ek(),JL=Dk(),ZL=Nk(),e0=_k(),t0=Ok(),r0=Lk(),n0=Fk(),a0=Wk(),o0=Sm(),i0=Gk();function Rm(t){if(t!==null)return t}var Km=class{constructor(){this._messages=Object.create(null)}add(e){let r=this._messages[e];r||(r=0),r++,this._messages[e]=r}sendErrors(e){Object.keys(this._messages).forEach(r=>{e.window.showErrorMessage(r)})}};ce.ErrorMessageTracker=Km;var Dd=class{constructor(){}rawAttach(e){this._rawConnection=e}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}fillServerCapabilities(e){}initialize(e){}error(e){this.send(D.MessageType.Error,e)}warn(e){this.send(D.MessageType.Warning,e)}info(e){this.send(D.MessageType.Info,e)}log(e){this.send(D.MessageType.Log,e)}debug(e){this.send(D.MessageType.Debug,e)}send(e,r){this._rawConnection&&this._rawConnection.sendNotification(D.LogMessageNotification.type,{type:e,message:r}).catch(()=>{(0,D.RAL)().console.error("Sending log message failed")})}},bm=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}showErrorMessage(e,...r){let n={type:D.MessageType.Error,message:e,actions:r};return this.connection.sendRequest(D.ShowMessageRequest.type,n).then(Rm)}showWarningMessage(e,...r){let n={type:D.MessageType.Warning,message:e,actions:r};return this.connection.sendRequest(D.ShowMessageRequest.type,n).then(Rm)}showInformationMessage(e,...r){let n={type:D.MessageType.Info,message:e,actions:r};return this.connection.sendRequest(D.ShowMessageRequest.type,n).then(Rm)}},Bk=(0,XL.ShowDocumentFeature)((0,Y.ProgressFeature)(bm)),Hk;(function(t){function e(){return new Nd}t.create=e})(Hk||(ce.BulkRegistration=Hk={}));var Nd=class{constructor(){this._registrations=[],this._registered=new Set}add(e,r){let n=$r.string(e)?e:e.method;if(this._registered.has(n))throw new Error(`${n} is already added to this registration`);let a=Pm.generateUuid();this._registrations.push({id:a,method:n,registerOptions:r||{}}),this._registered.add(n)}asRegistrationParams(){return{registrations:this._registrations}}},Uk;(function(t){function e(){return new $u(void 0,[])}t.create=e})(Uk||(ce.BulkUnregistration=Uk={}));var $u=class{constructor(e,r){this._connection=e,this._unregistrations=new Map,r.forEach(n=>{this._unregistrations.set(n.method,n)})}get isAttached(){return!!this._connection}attach(e){this._connection=e}add(e){this._unregistrations.set(e.method,e)}dispose(){let e=[];for(let n of this._unregistrations.values())e.push(n);let r={unregisterations:e};this._connection.sendRequest(D.UnregistrationRequest.type,r).catch(()=>{this._connection.console.info("Bulk unregistration failed.")})}disposeSingle(e){let r=$r.string(e)?e:e.method,n=this._unregistrations.get(r);if(!n)return!1;let a={unregisterations:[n]};return this._connection.sendRequest(D.UnregistrationRequest.type,a).then(()=>{this._unregistrations.delete(r)},o=>{this._connection.console.info(`Un-registering request handler for ${n.id} failed.`)}),!0}},_d=class{attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}register(e,r,n){return e instanceof Nd?this.registerMany(e):e instanceof $u?this.registerSingle1(e,r,n):this.registerSingle2(e,r)}registerSingle1(e,r,n){let a=$r.string(r)?r:r.method,o=Pm.generateUuid(),i={registrations:[{id:o,method:a,registerOptions:n||{}}]};return e.isAttached||e.attach(this.connection),this.connection.sendRequest(D.RegistrationRequest.type,i).then(s=>(e.add({id:o,method:a}),e),s=>(this.connection.console.info(`Registering request handler for ${a} failed.`),Promise.reject(s)))}registerSingle2(e,r){let n=$r.string(e)?e:e.method,a=Pm.generateUuid(),o={registrations:[{id:a,method:n,registerOptions:r||{}}]};return this.connection.sendRequest(D.RegistrationRequest.type,o).then(i=>D.Disposable.create(()=>{this.unregisterSingle(a,n).catch(()=>{this.connection.console.info(`Un-registering capability with id ${a} failed.`)})}),i=>(this.connection.console.info(`Registering request handler for ${n} failed.`),Promise.reject(i)))}unregisterSingle(e,r){let n={unregisterations:[{id:e,method:r}]};return this.connection.sendRequest(D.UnregistrationRequest.type,n).catch(()=>{this.connection.console.info(`Un-registering request handler for ${e} failed.`)})}registerMany(e){let r=e.asRegistrationParams();return this.connection.sendRequest(D.RegistrationRequest.type,r).then(()=>new $u(this._connection,r.registrations.map(n=>({id:n.id,method:n.method}))),n=>(this.connection.console.info("Bulk registration failed."),Promise.reject(n)))}},Em=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}applyEdit(e){function r(a){return a&&!!a.edit}let n=r(e)?e:{edit:e};return this.connection.sendRequest(D.ApplyWorkspaceEditRequest.type,n)}},qk=(0,JL.FileOperationsFeature)((0,VL.WorkspaceFoldersFeature)((0,jL.ConfigurationFeature)(Em))),Md=class{constructor(){this._trace=D.Trace.Off}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}set trace(e){this._trace=e}log(e,r){this._trace!==D.Trace.Off&&this.connection.sendNotification(D.LogTraceNotification.type,{message:e,verbose:this._trace===D.Trace.Verbose?r:void 0}).catch(()=>{})}},Od=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}logEvent(e){this.connection.sendNotification(D.TelemetryEventNotification.type,e).catch(()=>{this.connection.console.log("Sending TelemetryEventNotification failed")})}},zd=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,Y.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,Y.attachPartialResult)(this.connection,r)}};ce._LanguagesImpl=zd;var jk=(0,r0.FoldingRangeFeature)((0,i0.MonikerFeature)((0,a0.DiagnosticFeature)((0,n0.InlayHintFeature)((0,t0.InlineValueFeature)((0,e0.TypeHierarchyFeature)((0,ZL.LinkedEditingRangeFeature)((0,QL.SemanticTokensFeature)((0,YL.CallHierarchyFeature)(zd))))))))),Ld=class{constructor(){}attach(e){this._connection=e}get connection(){if(!this._connection)throw new Error("Remote is not attached to a connection yet.");return this._connection}initialize(e){}fillServerCapabilities(e){}attachWorkDoneProgress(e){return(0,Y.attachWorkDone)(this.connection,e)}attachPartialResultProgress(e,r){return(0,Y.attachPartialResult)(this.connection,r)}};ce._NotebooksImpl=Ld;var Vk=(0,o0.NotebookSyncFeature)(Ld);function Yk(t,e){return function(r){return e(t(r))}}ce.combineConsoleFeatures=Yk;function Qk(t,e){return function(r){return e(t(r))}}ce.combineTelemetryFeatures=Qk;function Xk(t,e){return function(r){return e(t(r))}}ce.combineTracerFeatures=Xk;function Jk(t,e){return function(r){return e(t(r))}}ce.combineClientFeatures=Jk;function Zk(t,e){return function(r){return e(t(r))}}ce.combineWindowFeatures=Zk;function eI(t,e){return function(r){return e(t(r))}}ce.combineWorkspaceFeatures=eI;function tI(t,e){return function(r){return e(t(r))}}ce.combineLanguagesFeatures=tI;function rI(t,e){return function(r){return e(t(r))}}ce.combineNotebooksFeatures=rI;function s0(t,e){function r(a,o,i){return a&&o?i(a,o):a||o}return{__brand:"features",console:r(t.console,e.console,Yk),tracer:r(t.tracer,e.tracer,Xk),telemetry:r(t.telemetry,e.telemetry,Qk),client:r(t.client,e.client,Jk),window:r(t.window,e.window,Zk),workspace:r(t.workspace,e.workspace,eI),languages:r(t.languages,e.languages,tI),notebooks:r(t.notebooks,e.notebooks,rI)}}ce.combineFeatures=s0;function u0(t,e,r){let n=r&&r.console?new(r.console(Dd)):new Dd,a=t(n);n.rawAttach(a);let o=r&&r.tracer?new(r.tracer(Md)):new Md,i=r&&r.telemetry?new(r.telemetry(Od)):new Od,s=r&&r.client?new(r.client(_d)):new _d,u=r&&r.window?new(r.window(Bk)):new Bk,l=r&&r.workspace?new(r.workspace(qk)):new qk,c=r&&r.languages?new(r.languages(jk)):new jk,d=r&&r.notebooks?new(r.notebooks(Vk)):new Vk,p=[n,o,i,s,u,l,c,d];function h(g){return g instanceof Promise?g:$r.thenable(g)?new Promise((y,$)=>{g.then(K=>y(K),K=>$(K))}):Promise.resolve(g)}let w,S,A,C={listen:()=>a.listen(),sendRequest:(g,...y)=>a.sendRequest($r.string(g)?g:g.method,...y),onRequest:(g,y)=>a.onRequest(g,y),sendNotification:(g,y)=>{let $=$r.string(g)?g:g.method;return a.sendNotification($,y)},onNotification:(g,y)=>a.onNotification(g,y),onProgress:a.onProgress,sendProgress:a.sendProgress,onInitialize:g=>(S=g,{dispose:()=>{S=void 0}}),onInitialized:g=>a.onNotification(D.InitializedNotification.type,g),onShutdown:g=>(w=g,{dispose:()=>{w=void 0}}),onExit:g=>(A=g,{dispose:()=>{A=void 0}}),get console(){return n},get telemetry(){return i},get tracer(){return o},get client(){return s},get window(){return u},get workspace(){return l},get languages(){return c},get notebooks(){return d},onDidChangeConfiguration:g=>a.onNotification(D.DidChangeConfigurationNotification.type,g),onDidChangeWatchedFiles:g=>a.onNotification(D.DidChangeWatchedFilesNotification.type,g),__textDocumentSync:void 0,onDidOpenTextDocument:g=>a.onNotification(D.DidOpenTextDocumentNotification.type,g),onDidChangeTextDocument:g=>a.onNotification(D.DidChangeTextDocumentNotification.type,g),onDidCloseTextDocument:g=>a.onNotification(D.DidCloseTextDocumentNotification.type,g),onWillSaveTextDocument:g=>a.onNotification(D.WillSaveTextDocumentNotification.type,g),onWillSaveTextDocumentWaitUntil:g=>a.onRequest(D.WillSaveTextDocumentWaitUntilRequest.type,g),onDidSaveTextDocument:g=>a.onNotification(D.DidSaveTextDocumentNotification.type,g),sendDiagnostics:g=>a.sendNotification(D.PublishDiagnosticsNotification.type,g),onHover:g=>a.onRequest(D.HoverRequest.type,(y,$)=>g(y,$,(0,Y.attachWorkDone)(a,y),void 0)),onCompletion:g=>a.onRequest(D.CompletionRequest.type,(y,$)=>g(y,$,(0,Y.attachWorkDone)(a,y),(0,Y.attachPartialResult)(a,y))),onCompletionResolve:g=>a.onRequest(D.CompletionResolveRequest.type,g),onSignatureHelp:g=>a.onRequest(D.SignatureHelpRequest.type,(y,$)=>g(y,$,(0,Y.attachWorkDone)(a,y),void 0)),onDeclaration:g=>a.onRequest(D.DeclarationRequest.type,(y,$)=>g(y,$,(0,Y.attachWorkDone)(a,y),(0,Y.attachPartialResult)(a,y))),onDefinition:g=>a.onRequest(D.DefinitionRequest.type,(y,$)=>g(y,$,(0,Y.attachWorkDone)(a,y),(0,Y.attachPartialResult)(a,y))),onTypeDefinition:g=>a.onRequest(D.TypeDefinitionRequest.type,(y,$)=>g(y,$,(0,Y.attachWorkDone)(a,y),(0,Y.attachPartialResult)(a,y))),onImplementation:g=>a.onRequest(D.ImplementationRequest.type,(y,$)=>g(y,$,(0,Y.attachWorkDone)(a,y),(0,Y.attachPartialResult)(a,y))),onReferences:g=>a.onRequest(D.ReferencesRequest.type,(y,$)=>g(y,$,(0,Y.attachWorkDone)(a,y),(0,Y.attachPartialResult)(a,y))),onDocumentHighlight:g=>a.onRequest(D.DocumentHighlightRequest.type,(y,$)=>g(y,$,(0,Y.attachWorkDone)(a,y),(0,Y.attachPartialResult)(a,y))),onDocumentSymbol:g=>a.onRequest(D.DocumentSymbolRequest.type,(y,$)=>g(y,$,(0,Y.attachWorkDone)(a,y),(0,Y.attachPartialResult)(a,y))),onWorkspaceSymbol:g=>a.onRequest(D.WorkspaceSymbolRequest.type,(y,$)=>g(y,$,(0,Y.attachWorkDone)(a,y),(0,Y.attachPartialResult)(a,y))),onWorkspaceSymbolResolve:g=>a.onRequest(D.WorkspaceSymbolResolveRequest.type,g),onCodeAction:g=>a.onRequest(D.CodeActionRequest.type,(y,$)=>g(y,$,(0,Y.attachWorkDone)(a,y),(0,Y.attachPartialResult)(a,y))),onCodeActionResolve:g=>a.onRequest(D.CodeActionResolveRequest.type,(y,$)=>g(y,$)),onCodeLens:g=>a.onRequest(D.CodeLensRequest.type,(y,$)=>g(y,$,(0,Y.attachWorkDone)(a,y),(0,Y.attachPartialResult)(a,y))),onCodeLensResolve:g=>a.onRequest(D.CodeLensResolveRequest.type,(y,$)=>g(y,$)),onDocumentFormatting:g=>a.onRequest(D.DocumentFormattingRequest.type,(y,$)=>g(y,$,(0,Y.attachWorkDone)(a,y),void 0)),onDocumentRangeFormatting:g=>a.onRequest(D.DocumentRangeFormattingRequest.type,(y,$)=>g(y,$,(0,Y.attachWorkDone)(a,y),void 0)),onDocumentOnTypeFormatting:g=>a.onRequest(D.DocumentOnTypeFormattingRequest.type,(y,$)=>g(y,$)),onRenameRequest:g=>a.onRequest(D.RenameRequest.type,(y,$)=>g(y,$,(0,Y.attachWorkDone)(a,y),void 0)),onPrepareRename:g=>a.onRequest(D.PrepareRenameRequest.type,(y,$)=>g(y,$)),onDocumentLinks:g=>a.onRequest(D.DocumentLinkRequest.type,(y,$)=>g(y,$,(0,Y.attachWorkDone)(a,y),(0,Y.attachPartialResult)(a,y))),onDocumentLinkResolve:g=>a.onRequest(D.DocumentLinkResolveRequest.type,(y,$)=>g(y,$)),onDocumentColor:g=>a.onRequest(D.DocumentColorRequest.type,(y,$)=>g(y,$,(0,Y.attachWorkDone)(a,y),(0,Y.attachPartialResult)(a,y))),onColorPresentation:g=>a.onRequest(D.ColorPresentationRequest.type,(y,$)=>g(y,$,(0,Y.attachWorkDone)(a,y),(0,Y.attachPartialResult)(a,y))),onFoldingRanges:g=>a.onRequest(D.FoldingRangeRequest.type,(y,$)=>g(y,$,(0,Y.attachWorkDone)(a,y),(0,Y.attachPartialResult)(a,y))),onSelectionRanges:g=>a.onRequest(D.SelectionRangeRequest.type,(y,$)=>g(y,$,(0,Y.attachWorkDone)(a,y),(0,Y.attachPartialResult)(a,y))),onExecuteCommand:g=>a.onRequest(D.ExecuteCommandRequest.type,(y,$)=>g(y,$,(0,Y.attachWorkDone)(a,y),void 0)),dispose:()=>a.dispose()};for(let g of p)g.attach(C);return a.onRequest(D.InitializeRequest.type,g=>{e.initialize(g),$r.string(g.trace)&&(o.trace=D.Trace.fromString(g.trace));for(let y of p)y.initialize(g.capabilities);if(S){let y=S(g,new D.CancellationTokenSource().token,(0,Y.attachWorkDone)(a,g),void 0);return h(y).then($=>{if($ instanceof D.ResponseError)return $;let K=$;K||(K={capabilities:{}});let Q=K.capabilities;Q||(Q={},K.capabilities=Q),Q.textDocumentSync===void 0||Q.textDocumentSync===null?Q.textDocumentSync=$r.number(C.__textDocumentSync)?C.__textDocumentSync:D.TextDocumentSyncKind.None:!$r.number(Q.textDocumentSync)&&!$r.number(Q.textDocumentSync.change)&&(Q.textDocumentSync.change=$r.number(C.__textDocumentSync)?C.__textDocumentSync:D.TextDocumentSyncKind.None);for(let mt of p)mt.fillServerCapabilities(Q);return K})}else{let y={capabilities:{textDocumentSync:D.TextDocumentSyncKind.None}};for(let $ of p)$.fillServerCapabilities(y.capabilities);return y}}),a.onRequest(D.ShutdownRequest.type,()=>{if(e.shutdownReceived=!0,w)return w(new D.CancellationTokenSource().token)}),a.onNotification(D.ExitNotification.type,()=>{try{A&&A()}finally{e.shutdownReceived?e.exit(0):e.exit(1)}}),a.onNotification(D.SetTraceNotification.type,g=>{o.trace=D.Trace.fromString(g.value)}),C}ce.createConnection=u0});var Dm=M(Dt=>{"use strict";var l0=Dt&&Dt.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var a=Object.getOwnPropertyDescriptor(e,r);(!a||("get"in a?!e.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,a)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),oI=Dt&&Dt.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&l0(e,t,r)};Object.defineProperty(Dt,"__esModule",{value:!0});Dt.ProposedFeatures=Dt.NotebookDocuments=Dt.TextDocuments=Dt.SemanticTokensBuilder=void 0;var c0=gm();Object.defineProperty(Dt,"SemanticTokensBuilder",{enumerable:!0,get:function(){return c0.SemanticTokensBuilder}});var d0=Ck();oI(Ye(),Dt);var p0=vm();Object.defineProperty(Dt,"TextDocuments",{enumerable:!0,get:function(){return p0.TextDocuments}});var f0=Sm();Object.defineProperty(Dt,"NotebookDocuments",{enumerable:!0,get:function(){return f0.NotebookDocuments}});oI(nI(),Dt);var aI;(function(t){t.all={__brand:"features",languages:d0.InlineCompletionFeature}})(aI||(Dt.ProposedFeatures=aI={}))});var sI=M((ite,iI)=>{"use strict";iI.exports=Ye()});var fr=M(rn=>{"use strict";var y0=rn&&rn.__createBinding||(Object.create?function(t,e,r,n){n===void 0&&(n=r);var a=Object.getOwnPropertyDescriptor(e,r);(!a||("get"in a?!e.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return e[r]}}),Object.defineProperty(t,n,a)}:function(t,e,r,n){n===void 0&&(n=r),t[n]=e[r]}),lI=rn&&rn.__exportStar||function(t,e){for(var r in t)r!=="default"&&!Object.prototype.hasOwnProperty.call(e,r)&&y0(e,t,r)};Object.defineProperty(rn,"__esModule",{value:!0});rn.createConnection=void 0;var Fd=Dm();lI(sI(),rn);lI(Dm(),rn);var uI=!1,h0={initialize:t=>{},get shutdownReceived(){return uI},set shutdownReceived(t){uI=t},exit:t=>{}};function g0(t,e,r,n){let a,o,i,s;t!==void 0&&t.__brand==="features"&&(a=t,t=e,e=r,r=n),Fd.ConnectionStrategy.is(t)||Fd.ConnectionOptions.is(t)?s=t:(o=t,i=e,s=r);let u=l=>(0,Fd.createProtocolConnection)(o,i,l,s);return(0,Fd.createConnection)(u,h0,a)}rn.createConnection=g0});var PI=M((Ane,RI)=>{"use strict";RI.exports=fr()});var at={};In(at,{AbstractAstReflection:()=>sa,AbstractCstNode:()=>xs,AbstractLangiumParser:()=>As,AbstractParserErrorMessageProvider:()=>Sc,AbstractThreadedAsyncParser:()=>jh,AstUtils:()=>Hu,BiMap:()=>za,Cancellation:()=>L,CompositeCstNodeImpl:()=>_a,ContextCache:()=>La,CstNodeBuilder:()=>Ts,CstUtils:()=>_u,DONE_RESULT:()=>kt,DatatypeSymbol:()=>wc,DefaultAstNodeDescriptionProvider:()=>Hs,DefaultAstNodeLocator:()=>qs,DefaultAsyncParser:()=>ru,DefaultCommentProvider:()=>tu,DefaultConfigurationProvider:()=>js,DefaultDocumentBuilder:()=>Vs,DefaultDocumentValidator:()=>Bs,DefaultHydrator:()=>au,DefaultIndexManager:()=>Ys,DefaultJsonSerializer:()=>Fs,DefaultLangiumDocumentFactory:()=>bs,DefaultLangiumDocuments:()=>Es,DefaultLexer:()=>Xs,DefaultLinker:()=>Ds,DefaultNameProvider:()=>Ns,DefaultReferenceDescriptionProvider:()=>Us,DefaultReferences:()=>_s,DefaultScopeComputation:()=>Ms,DefaultScopeProvider:()=>Ls,DefaultServiceRegistry:()=>Ws,DefaultTokenBuilder:()=>Rs,DefaultValueConverter:()=>Ps,DefaultWorkspaceLock:()=>nu,DefaultWorkspaceManager:()=>Qs,Deferred:()=>br,Disposable:()=>Fa,DisposableCache:()=>ai,DocumentCache:()=>Rc,DocumentState:()=>B,DocumentValidator:()=>$n,EMPTY_SCOPE:()=>dz,EMPTY_STREAM:()=>Xa,EmptyFileSystem:()=>uu,EmptyFileSystemProvider:()=>Nc,ErrorWithLocation:()=>da,GrammarAST:()=>fa,GrammarUtils:()=>Qu,JSDocDocumentationProvider:()=>eu,LangiumCompletionParser:()=>Is,LangiumParser:()=>ks,LangiumParserErrorMessageProvider:()=>Jo,LeafCstNodeImpl:()=>Na,MapScope:()=>Os,Module:()=>si,MultiMap:()=>Xr,OperationCancelled:()=>Cn,ParserWorker:()=>Vh,Reduction:()=>Qa,RegExpUtils:()=>Vu,RootCstNodeImpl:()=>Xo,SimpleCache:()=>zs,StreamImpl:()=>jt,StreamScope:()=>ni,TextDocument:()=>Vn,TreeStreamImpl:()=>kr,URI:()=>Ne,UriUtils:()=>xt,ValidationCategory:()=>ii,ValidationRegistry:()=>Gs,ValueConverter:()=>Yr,WorkspaceCache:()=>oi,assertUnreachable:()=>Rn,createCompletionParser:()=>Rh,createDefaultCoreModule:()=>ou,createDefaultSharedCoreModule:()=>iu,createGrammarConfig:()=>_f,createLangiumParser:()=>Ph,delayNextTick:()=>Oh,diagnosticData:()=>Pc,eagerLoad:()=>su,getDiagnosticRange:()=>G$,inject:()=>Wa,interruptAndCheck:()=>We,isAstNode:()=>Re,isAstNodeDescription:()=>cp,isAstNodeWithComment:()=>Lh,isCompositeCstNode:()=>qt,isIMultiModeLexerDefinition:()=>Wh,isJSDoc:()=>Uh,isLeafCstNode:()=>an,isLinkingError:()=>ua,isNamed:()=>Ic,isOperationCancelled:()=>Qr,isReference:()=>wt,isRootCstNode:()=>Ki,isTokenTypeArray:()=>B$,isTokenTypeDictionary:()=>Fh,loadGrammarFromJson:()=>_c,parseJSDoc:()=>Hh,prepareLangiumParser:()=>K$,setInterruptionPeriod:()=>M$,startCancelableOperation:()=>_$,stream:()=>ee,toDiagnosticSeverity:()=>Kc});var _u={};In(_u,{DefaultNameRegexp:()=>Du,RangeComparison:()=>on,compareRange:()=>Bm,findCommentNode:()=>yp,findDeclarationNodeAtOffset:()=>dt,findLeafNodeAtOffset:()=>Nu,findLeafNodeBeforeOffset:()=>bi,flattenCst:()=>pp,getInteriorNodes:()=>jm,getNextNode:()=>qm,getPreviousNode:()=>Um,getStartlineNode:()=>VI,inRange:()=>Eu,isChildNode:()=>fp,isCommentNode:()=>dp,streamCst:()=>la,toDocumentSegment:()=>ca,tokenToRange:()=>Ja});function Re(t){return typeof t=="object"&&t!==null&&typeof t.$type=="string"}function wt(t){return typeof t=="object"&&t!==null&&typeof t.$refText=="string"}function cp(t){return typeof t=="object"&&t!==null&&typeof t.name=="string"&&typeof t.type=="string"&&typeof t.path=="string"}function ua(t){return typeof t=="object"&&t!==null&&Re(t.container)&&wt(t.reference)&&typeof t.message=="string"}var sa=class{constructor(){this.subtypes={},this.allSubtypes={}}isInstance(e,r){return Re(e)&&this.isSubtype(e.$type,r)}isSubtype(e,r){if(e===r)return!0;let n=this.subtypes[e];n||(n=this.subtypes[e]={});let a=n[r];if(a!==void 0)return a;{let o=this.computeIsSubtype(e,r);return n[r]=o,o}}getAllSubTypes(e){let r=this.allSubtypes[e];if(r)return r;{let n=this.getAllTypes(),a=[];for(let o of n)this.isSubtype(o,e)&&a.push(o);return this.allSubtypes[e]=a,a}}};function qt(t){return typeof t=="object"&&t!==null&&Array.isArray(t.content)}function an(t){return typeof t=="object"&&t!==null&&typeof t.tokenType=="object"}function Ki(t){return qt(t)&&typeof t.fullText=="string"}var jt=class t{constructor(e,r){this.startFn=e,this.nextFn=r}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),[Symbol.iterator]:()=>e};return e}[Symbol.iterator](){return this.iterator()}isEmpty(){return!!this.iterator().next().done}count(){let e=this.iterator(),r=0,n=e.next();for(;!n.done;)r++,n=e.next();return r}toArray(){let e=[],r=this.iterator(),n;do n=r.next(),n.value!==void 0&&e.push(n.value);while(!n.done);return e}toSet(){return new Set(this)}toMap(e,r){let n=this.map(a=>[e?e(a):a,r?r(a):a]);return new Map(n)}toString(){return this.join()}concat(e){let r=e[Symbol.iterator]();return new t(()=>({first:this.startFn(),firstDone:!1}),n=>{let a;if(!n.firstDone){do if(a=this.nextFn(n.first),!a.done)return a;while(!a.done);n.firstDone=!0}do if(a=r.next(),!a.done)return a;while(!a.done);return kt})}join(e=","){let r=this.iterator(),n="",a,o=!1;do a=r.next(),a.done||(o&&(n+=e),n+=jI(a.value)),o=!0;while(!a.done);return n}indexOf(e,r=0){let n=this.iterator(),a=0,o=n.next();for(;!o.done;){if(a>=r&&o.value===e)return a;o=n.next(),a++}return-1}every(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(!e(n.value))return!1;n=r.next()}return!0}some(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return!0;n=r.next()}return!1}forEach(e){let r=this.iterator(),n=0,a=r.next();for(;!a.done;)e(a.value,n),a=r.next(),n++}map(e){return new t(this.startFn,r=>{let{done:n,value:a}=this.nextFn(r);return n?kt:{done:!1,value:e(a)}})}filter(e){return new t(this.startFn,r=>{let n;do if(n=this.nextFn(r),!n.done&&e(n.value))return n;while(!n.done);return kt})}nonNullable(){return this.filter(e=>e!=null)}reduce(e,r){let n=this.iterator(),a=r,o=n.next();for(;!o.done;)a===void 0?a=o.value:a=e(a,o.value),o=n.next();return a}reduceRight(e,r){return this.recursiveReduce(this.iterator(),e,r)}recursiveReduce(e,r,n){let a=e.next();if(a.done)return n;let o=this.recursiveReduce(e,r,n);return o===void 0?a.value:r(o,a.value)}find(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(e(n.value))return n.value;n=r.next()}}findIndex(e){let r=this.iterator(),n=0,a=r.next();for(;!a.done;){if(e(a.value))return n;a=r.next(),n++}return-1}includes(e){let r=this.iterator(),n=r.next();for(;!n.done;){if(n.value===e)return!0;n=r.next()}return!1}flatMap(e){return new t(()=>({this:this.startFn()}),r=>{do{if(r.iterator){let o=r.iterator.next();if(o.done)r.iterator=void 0;else return o}let{done:n,value:a}=this.nextFn(r.this);if(!n){let o=e(a);if(bu(o))r.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}}while(r.iterator);return kt})}flat(e){if(e===void 0&&(e=1),e<=0)return this;let r=e>1?this.flat(e-1):this;return new t(()=>({this:r.startFn()}),n=>{do{if(n.iterator){let i=n.iterator.next();if(i.done)n.iterator=void 0;else return i}let{done:a,value:o}=r.nextFn(n.this);if(!a)if(bu(o))n.iterator=o[Symbol.iterator]();else return{done:!1,value:o}}while(n.iterator);return kt})}head(){let r=this.iterator().next();if(!r.done)return r.value}tail(e=1){return new t(()=>{let r=this.startFn();for(let n=0;n<e;n++)if(this.nextFn(r).done)return r;return r},this.nextFn)}limit(e){return new t(()=>({size:0,state:this.startFn()}),r=>(r.size++,r.size>e?kt:this.nextFn(r.state)))}distinct(e){let r=new Set;return this.filter(n=>{let a=e?e(n):n;return r.has(a)?!1:(r.add(a),!0)})}exclude(e,r){let n=new Set;for(let a of e){let o=r?r(a):a;n.add(o)}return this.filter(a=>{let o=r?r(a):a;return!n.has(o)})}};function jI(t){return typeof t=="string"?t:typeof t>"u"?"undefined":typeof t.toString=="function"?t.toString():Object.prototype.toString.call(t)}function bu(t){return!!t&&typeof t[Symbol.iterator]=="function"}var Xa=new jt(()=>{},()=>kt),kt=Object.freeze({done:!0,value:void 0});function ee(...t){if(t.length===1){let e=t[0];if(e instanceof jt)return e;if(bu(e))return new jt(()=>e[Symbol.iterator](),r=>r.next());if(typeof e.length=="number")return new jt(()=>({index:0}),r=>r.index<e.length?{done:!1,value:e[r.index++]}:kt)}return t.length>1?new jt(()=>({collIndex:0,arrIndex:0}),e=>{do{if(e.iterator){let r=e.iterator.next();if(!r.done)return r;e.iterator=void 0}if(e.array){if(e.arrIndex<e.array.length)return{done:!1,value:e.array[e.arrIndex++]};e.array=void 0,e.arrIndex=0}if(e.collIndex<t.length){let r=t[e.collIndex++];bu(r)?e.iterator=r[Symbol.iterator]():r&&typeof r.length=="number"&&(e.array=r)}}while(e.iterator||e.array||e.collIndex<t.length);return kt}):Xa}var kr=class extends jt{constructor(e,r,n){super(()=>({iterators:n?.includeRoot?[[e][Symbol.iterator]()]:[r(e)[Symbol.iterator]()],pruned:!1}),a=>{for(a.pruned&&(a.iterators.pop(),a.pruned=!1);a.iterators.length>0;){let i=a.iterators[a.iterators.length-1].next();if(i.done)a.iterators.pop();else return a.iterators.push(r(i.value)[Symbol.iterator]()),i}return kt})}iterator(){let e={state:this.startFn(),next:()=>this.nextFn(e.state),prune:()=>{e.state.pruned=!0},[Symbol.iterator]:()=>e};return e}},Qa;(function(t){function e(o){return o.reduce((i,s)=>i+s,0)}t.sum=e;function r(o){return o.reduce((i,s)=>i*s,0)}t.product=r;function n(o){return o.reduce((i,s)=>Math.min(i,s))}t.min=n;function a(o){return o.reduce((i,s)=>Math.max(i,s))}t.max=a})(Qa||(Qa={}));function la(t){return new kr(t,e=>qt(e)?e.content:[],{includeRoot:!0})}function pp(t){return la(t).filter(an)}function fp(t,e){for(;t.container;)if(t=t.container,t===e)return!0;return!1}function Ja(t){return{start:{character:t.startColumn-1,line:t.startLine-1},end:{character:t.endColumn,line:t.endLine-1}}}function ca(t){if(!t)return;let{offset:e,end:r,range:n}=t;return{range:n,offset:e,end:r,length:r-e}}var on;(function(t){t[t.Before=0]="Before",t[t.After=1]="After",t[t.OverlapFront=2]="OverlapFront",t[t.OverlapBack=3]="OverlapBack",t[t.Inside=4]="Inside"})(on||(on={}));function Bm(t,e){if(t.end.line<e.start.line||t.end.line===e.start.line&&t.end.character<t.start.character)return on.Before;if(t.start.line>e.end.line||t.start.line===e.end.line&&t.start.character>e.end.character)return on.After;let r=t.start.line>e.start.line||t.start.line===e.start.line&&t.start.character>=e.start.character,n=t.end.line<e.end.line||t.end.line===e.end.line&&t.end.character<=e.end.character;return r&&n?on.Inside:r?on.OverlapBack:on.OverlapFront}function Eu(t,e){return Bm(t,e)>on.After}var Du=/^[\w\p{L}]$/u;function dt(t,e,r=Du){if(t){if(e>0){let n=e-t.offset,a=t.text.charAt(n);r.test(a)||e--}return Nu(t,e)}}function yp(t,e){if(t){let r=Um(t,!0);if(r&&dp(r,e))return r;if(Ki(t)){let n=t.content.findIndex(a=>!a.hidden);for(let a=n-1;a>=0;a--){let o=t.content[a];if(dp(o,e))return o}}}}function dp(t,e){return an(t)&&e.includes(t.tokenType.name)}function Nu(t,e){if(an(t))return t;if(qt(t)){let r=Hm(t,e,!1);if(r)return Nu(r,e)}}function bi(t,e){if(an(t))return t;if(qt(t)){let r=Hm(t,e,!0);if(r)return bi(r,e)}}function Hm(t,e,r){let n=0,a=t.content.length-1,o;for(;n<=a;){let i=Math.floor((n+a)/2),s=t.content[i];if(s.offset<=e&&s.end>e)return s;s.end<=e?(o=r?s:void 0,n=i+1):a=i-1}return o}function Um(t,e=!0){for(;t.container;){let r=t.container,n=r.content.indexOf(t);for(;n>0;){n--;let a=r.content[n];if(e||!a.hidden)return a}t=r}}function qm(t,e=!0){for(;t.container;){let r=t.container,n=r.content.indexOf(t),a=r.content.length-1;for(;n<a;){n++;let o=r.content[n];if(e||!o.hidden)return o}t=r}}function VI(t){if(t.range.start.character===0)return t;let e=t.range.start.line,r=t,n;for(;t.container;){let a=t.container,o=n??a.content.indexOf(t);if(o===0?(t=a,n=void 0):(n=o-1,t=a.content[n]),t.range.start.line!==e)break;r=t}return r}function jm(t,e){let r=YI(t,e);return r?r.parent.content.slice(r.a+1,r.b):[]}function YI(t,e){let r=Gm(t),n=Gm(e),a;for(let o=0;o<r.length&&o<n.length;o++){let i=r[o],s=n[o];if(i.parent===s.parent)a={parent:i.parent,a:i.index,b:s.index};else break}return a}function Gm(t){let e=[];for(;t.container;){let r=t.container,n=r.content.indexOf(t);e.push({parent:r,index:n}),t=r}return e.reverse()}var Qu={};In(Qu,{findAssignment:()=>bf,findNameAssignment:()=>Yu,findNodeForKeyword:()=>Bi,findNodeForProperty:()=>wa,findNodesForKeyword:()=>Pf,findNodesForKeywordInternal:()=>Kf,findNodesForProperty:()=>Gi,getActionAtElement:()=>iv,getActionType:()=>uv,getAllReachableRules:()=>Fi,getCrossReferenceTerminal:()=>Wi,getEntryRule:()=>Li,getExplicitRuleType:()=>Ca,getHiddenRules:()=>nv,getRuleType:()=>Df,getTypeName:()=>un,isArrayCardinality:()=>Ef,isArrayOperator:()=>gR,isCommentTerminal:()=>If,isDataType:()=>mR,isDataTypeRule:()=>Hi,isOptionalCardinality:()=>Sa,terminalRegex:()=>Pn});var da=class extends Error{constructor(e,r){super(e?`${r} at ${e.range.start.line}:${e.range.start.character}`:r)}};function Rn(t){throw new Error("Error! The input value was not handled.")}var fa={};In(fa,{AbstractElement:()=>gp,AbstractRule:()=>Ei,AbstractType:()=>Di,Action:()=>Hp,Alternatives:()=>Up,ArrayLiteral:()=>mp,ArrayType:()=>vp,Assignment:()=>qp,BooleanLiteral:()=>Sp,CharacterRange:()=>jp,Condition:()=>Mu,Conjunction:()=>$p,CrossReference:()=>Yp,Disjunction:()=>xp,EndOfFile:()=>Qp,Grammar:()=>kp,GrammarImport:()=>Ym,Group:()=>Jp,InferredType:()=>Ip,Interface:()=>Rp,Keyword:()=>Zp,LangiumGrammarAstReflection:()=>Za,LangiumGrammarTerminals:()=>QI,NamedArgument:()=>Qm,NegatedToken:()=>ef,Negation:()=>Pp,NumberLiteral:()=>bp,Parameter:()=>Ep,ParameterReference:()=>Dp,ParserRule:()=>_p,ReferenceType:()=>Mp,RegexToken:()=>rf,ReturnType:()=>Xm,RuleCall:()=>af,SimpleType:()=>Lp,StringLiteral:()=>Fp,TerminalAlternatives:()=>of,TerminalGroup:()=>uf,TerminalRule:()=>zu,TerminalRuleCall:()=>cf,Type:()=>Wp,TypeAttribute:()=>Jm,TypeDefinition:()=>hp,UnionType:()=>Gp,UnorderedGroup:()=>df,UntilToken:()=>pf,ValueLiteral:()=>Ou,Wildcard:()=>yf,isAbstractElement:()=>pa,isAbstractRule:()=>XI,isAbstractType:()=>JI,isAction:()=>Ir,isAlternatives:()=>eo,isArrayLiteral:()=>nR,isArrayType:()=>wp,isAssignment:()=>It,isBooleanLiteral:()=>Cp,isCharacterRange:()=>Vp,isCondition:()=>ZI,isConjunction:()=>Tp,isCrossReference:()=>Rr,isDisjunction:()=>Ap,isEndOfFile:()=>Xp,isFeatureName:()=>eR,isGrammar:()=>aR,isGrammarImport:()=>oR,isGroup:()=>yr,isInferredType:()=>Lu,isInterface:()=>Fu,isKeyword:()=>St,isNamedArgument:()=>iR,isNegatedToken:()=>tf,isNegation:()=>Kp,isNumberLiteral:()=>sR,isParameter:()=>uR,isParameterReference:()=>Np,isParserRule:()=>He,isPrimitiveType:()=>Vm,isReferenceType:()=>Op,isRegexToken:()=>nf,isReturnType:()=>zp,isRuleCall:()=>Yt,isSimpleType:()=>Wu,isStringLiteral:()=>lR,isTerminalAlternatives:()=>sf,isTerminalGroup:()=>lf,isTerminalRule:()=>Vt,isTerminalRuleCall:()=>Gu,isType:()=>Ni,isTypeAttribute:()=>cR,isTypeDefinition:()=>tR,isUnionType:()=>Bp,isUnorderedGroup:()=>to,isUntilToken:()=>ff,isValueLiteral:()=>rR,isWildcard:()=>hf,reflection:()=>V});var QI={ID:/\^?[_a-zA-Z][\w_]*/,STRING:/"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,NUMBER:/NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity)/,RegexLiteral:/\/(?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+\/[a-z]*/,WS:/\s+/,ML_COMMENT:/\/\*[\s\S]*?\*\//,SL_COMMENT:/\/\/[^\n\r]*/},Ei="AbstractRule";function XI(t){return V.isInstance(t,Ei)}var Di="AbstractType";function JI(t){return V.isInstance(t,Di)}var Mu="Condition";function ZI(t){return V.isInstance(t,Mu)}function eR(t){return Vm(t)||t==="current"||t==="entry"||t==="extends"||t==="false"||t==="fragment"||t==="grammar"||t==="hidden"||t==="import"||t==="interface"||t==="returns"||t==="terminal"||t==="true"||t==="type"||t==="infer"||t==="infers"||t==="with"||typeof t=="string"&&/\^?[_a-zA-Z][\w_]*/.test(t)}function Vm(t){return t==="string"||t==="number"||t==="boolean"||t==="Date"||t==="bigint"}var hp="TypeDefinition";function tR(t){return V.isInstance(t,hp)}var Ou="ValueLiteral";function rR(t){return V.isInstance(t,Ou)}var gp="AbstractElement";function pa(t){return V.isInstance(t,gp)}var mp="ArrayLiteral";function nR(t){return V.isInstance(t,mp)}var vp="ArrayType";function wp(t){return V.isInstance(t,vp)}var Sp="BooleanLiteral";function Cp(t){return V.isInstance(t,Sp)}var $p="Conjunction";function Tp(t){return V.isInstance(t,$p)}var xp="Disjunction";function Ap(t){return V.isInstance(t,xp)}var kp="Grammar";function aR(t){return V.isInstance(t,kp)}var Ym="GrammarImport";function oR(t){return V.isInstance(t,Ym)}var Ip="InferredType";function Lu(t){return V.isInstance(t,Ip)}var Rp="Interface";function Fu(t){return V.isInstance(t,Rp)}var Qm="NamedArgument";function iR(t){return V.isInstance(t,Qm)}var Pp="Negation";function Kp(t){return V.isInstance(t,Pp)}var bp="NumberLiteral";function sR(t){return V.isInstance(t,bp)}var Ep="Parameter";function uR(t){return V.isInstance(t,Ep)}var Dp="ParameterReference";function Np(t){return V.isInstance(t,Dp)}var _p="ParserRule";function He(t){return V.isInstance(t,_p)}var Mp="ReferenceType";function Op(t){return V.isInstance(t,Mp)}var Xm="ReturnType";function zp(t){return V.isInstance(t,Xm)}var Lp="SimpleType";function Wu(t){return V.isInstance(t,Lp)}var Fp="StringLiteral";function lR(t){return V.isInstance(t,Fp)}var zu="TerminalRule";function Vt(t){return V.isInstance(t,zu)}var Wp="Type";function Ni(t){return V.isInstance(t,Wp)}var Jm="TypeAttribute";function cR(t){return V.isInstance(t,Jm)}var Gp="UnionType";function Bp(t){return V.isInstance(t,Gp)}var Hp="Action";function Ir(t){return V.isInstance(t,Hp)}var Up="Alternatives";function eo(t){return V.isInstance(t,Up)}var qp="Assignment";function It(t){return V.isInstance(t,qp)}var jp="CharacterRange";function Vp(t){return V.isInstance(t,jp)}var Yp="CrossReference";function Rr(t){return V.isInstance(t,Yp)}var Qp="EndOfFile";function Xp(t){return V.isInstance(t,Qp)}var Jp="Group";function yr(t){return V.isInstance(t,Jp)}var Zp="Keyword";function St(t){return V.isInstance(t,Zp)}var ef="NegatedToken";function tf(t){return V.isInstance(t,ef)}var rf="RegexToken";function nf(t){return V.isInstance(t,rf)}var af="RuleCall";function Yt(t){return V.isInstance(t,af)}var of="TerminalAlternatives";function sf(t){return V.isInstance(t,of)}var uf="TerminalGroup";function lf(t){return V.isInstance(t,uf)}var cf="TerminalRuleCall";function Gu(t){return V.isInstance(t,cf)}var df="UnorderedGroup";function to(t){return V.isInstance(t,df)}var pf="UntilToken";function ff(t){return V.isInstance(t,pf)}var yf="Wildcard";function hf(t){return V.isInstance(t,yf)}var Za=class extends sa{getAllTypes(){return["AbstractElement","AbstractRule","AbstractType","Action","Alternatives","ArrayLiteral","ArrayType","Assignment","BooleanLiteral","CharacterRange","Condition","Conjunction","CrossReference","Disjunction","EndOfFile","Grammar","GrammarImport","Group","InferredType","Interface","Keyword","NamedArgument","NegatedToken","Negation","NumberLiteral","Parameter","ParameterReference","ParserRule","ReferenceType","RegexToken","ReturnType","RuleCall","SimpleType","StringLiteral","TerminalAlternatives","TerminalGroup","TerminalRule","TerminalRuleCall","Type","TypeAttribute","TypeDefinition","UnionType","UnorderedGroup","UntilToken","ValueLiteral","Wildcard"]}computeIsSubtype(e,r){switch(e){case Hp:case Up:case qp:case jp:case Yp:case Qp:case Jp:case Zp:case ef:case rf:case af:case of:case uf:case cf:case df:case pf:case yf:return this.isSubtype(gp,r);case mp:case bp:case Fp:return this.isSubtype(Ou,r);case vp:case Mp:case Lp:case Gp:return this.isSubtype(hp,r);case Sp:return this.isSubtype(Mu,r)||this.isSubtype(Ou,r);case $p:case xp:case Pp:case Dp:return this.isSubtype(Mu,r);case Ip:case Rp:case Wp:return this.isSubtype(Di,r);case _p:return this.isSubtype(Ei,r)||this.isSubtype(Di,r);case zu:return this.isSubtype(Ei,r);default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"Action:type":case"CrossReference:type":case"Interface:superTypes":case"ParserRule:returnType":case"SimpleType:typeRef":return Di;case"Grammar:hiddenTokens":case"ParserRule:hiddenTokens":case"RuleCall:rule":return Ei;case"Grammar:usedGrammars":return kp;case"NamedArgument:parameter":case"ParameterReference:parameter":return Ep;case"TerminalRuleCall:rule":return zu;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"AbstractElement":return{name:"AbstractElement",properties:[{name:"cardinality"},{name:"lookahead"}]};case"ArrayLiteral":return{name:"ArrayLiteral",properties:[{name:"elements",defaultValue:[]}]};case"ArrayType":return{name:"ArrayType",properties:[{name:"elementType"}]};case"BooleanLiteral":return{name:"BooleanLiteral",properties:[{name:"true",defaultValue:!1}]};case"Conjunction":return{name:"Conjunction",properties:[{name:"left"},{name:"right"}]};case"Disjunction":return{name:"Disjunction",properties:[{name:"left"},{name:"right"}]};case"Grammar":return{name:"Grammar",properties:[{name:"definesHiddenTokens",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"imports",defaultValue:[]},{name:"interfaces",defaultValue:[]},{name:"isDeclared",defaultValue:!1},{name:"name"},{name:"rules",defaultValue:[]},{name:"types",defaultValue:[]},{name:"usedGrammars",defaultValue:[]}]};case"GrammarImport":return{name:"GrammarImport",properties:[{name:"path"}]};case"InferredType":return{name:"InferredType",properties:[{name:"name"}]};case"Interface":return{name:"Interface",properties:[{name:"attributes",defaultValue:[]},{name:"name"},{name:"superTypes",defaultValue:[]}]};case"NamedArgument":return{name:"NamedArgument",properties:[{name:"calledByName",defaultValue:!1},{name:"parameter"},{name:"value"}]};case"Negation":return{name:"Negation",properties:[{name:"value"}]};case"NumberLiteral":return{name:"NumberLiteral",properties:[{name:"value"}]};case"Parameter":return{name:"Parameter",properties:[{name:"name"}]};case"ParameterReference":return{name:"ParameterReference",properties:[{name:"parameter"}]};case"ParserRule":return{name:"ParserRule",properties:[{name:"dataType"},{name:"definesHiddenTokens",defaultValue:!1},{name:"definition"},{name:"entry",defaultValue:!1},{name:"fragment",defaultValue:!1},{name:"hiddenTokens",defaultValue:[]},{name:"inferredType"},{name:"name"},{name:"parameters",defaultValue:[]},{name:"returnType"},{name:"wildcard",defaultValue:!1}]};case"ReferenceType":return{name:"ReferenceType",properties:[{name:"referenceType"}]};case"ReturnType":return{name:"ReturnType",properties:[{name:"name"}]};case"SimpleType":return{name:"SimpleType",properties:[{name:"primitiveType"},{name:"stringType"},{name:"typeRef"}]};case"StringLiteral":return{name:"StringLiteral",properties:[{name:"value"}]};case"TerminalRule":return{name:"TerminalRule",properties:[{name:"definition"},{name:"fragment",defaultValue:!1},{name:"hidden",defaultValue:!1},{name:"name"},{name:"type"}]};case"Type":return{name:"Type",properties:[{name:"name"},{name:"type"}]};case"TypeAttribute":return{name:"TypeAttribute",properties:[{name:"defaultValue"},{name:"isOptional",defaultValue:!1},{name:"name"},{name:"type"}]};case"UnionType":return{name:"UnionType",properties:[{name:"types",defaultValue:[]}]};case"Action":return{name:"Action",properties:[{name:"feature"},{name:"inferredType"},{name:"operator"},{name:"type"}]};case"Alternatives":return{name:"Alternatives",properties:[{name:"elements",defaultValue:[]}]};case"Assignment":return{name:"Assignment",properties:[{name:"feature"},{name:"operator"},{name:"terminal"}]};case"CharacterRange":return{name:"CharacterRange",properties:[{name:"left"},{name:"right"}]};case"CrossReference":return{name:"CrossReference",properties:[{name:"deprecatedSyntax",defaultValue:!1},{name:"terminal"},{name:"type"}]};case"Group":return{name:"Group",properties:[{name:"elements",defaultValue:[]},{name:"guardCondition"}]};case"Keyword":return{name:"Keyword",properties:[{name:"value"}]};case"NegatedToken":return{name:"NegatedToken",properties:[{name:"terminal"}]};case"RegexToken":return{name:"RegexToken",properties:[{name:"regex"}]};case"RuleCall":return{name:"RuleCall",properties:[{name:"arguments",defaultValue:[]},{name:"rule"}]};case"TerminalAlternatives":return{name:"TerminalAlternatives",properties:[{name:"elements",defaultValue:[]}]};case"TerminalGroup":return{name:"TerminalGroup",properties:[{name:"elements",defaultValue:[]}]};case"TerminalRuleCall":return{name:"TerminalRuleCall",properties:[{name:"rule"}]};case"UnorderedGroup":return{name:"UnorderedGroup",properties:[{name:"elements",defaultValue:[]}]};case"UntilToken":return{name:"UntilToken",properties:[{name:"terminal"}]};default:return{name:e,properties:[]}}}},V=new Za;var Hu={};In(Hu,{assignMandatoryProperties:()=>_i,copyAstNode:()=>mf,findLocalReferences:()=>pR,findRootNode:()=>Zm,getContainerOfType:()=>sr,getDocument:()=>Oe,hasContainerOfType:()=>dR,linkContentToContainer:()=>Bu,streamAllContents:()=>ur,streamAst:()=>Qt,streamContents:()=>ya,streamReferences:()=>ro});function Bu(t){for(let[e,r]of Object.entries(t))e.startsWith("$")||(Array.isArray(r)?r.forEach((n,a)=>{Re(n)&&(n.$container=t,n.$containerProperty=e,n.$containerIndex=a)}):Re(r)&&(r.$container=t,r.$containerProperty=e))}function sr(t,e){let r=t;for(;r;){if(e(r))return r;r=r.$container}}function dR(t,e){let r=t;for(;r;){if(e(r))return!0;r=r.$container}return!1}function Oe(t){let r=Zm(t).$document;if(!r)throw new Error("AST node has no document.");return r}function Zm(t){for(;t.$container;)t=t.$container;return t}function ya(t,e){if(!t)throw new Error("Node must be an AstNode.");let r=e?.range;return new jt(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),n=>{for(;n.keyIndex<n.keys.length;){let a=n.keys[n.keyIndex];if(!a.startsWith("$")){let o=t[a];if(Re(o)){if(n.keyIndex++,gf(o,r))return{done:!1,value:o}}else if(Array.isArray(o)){for(;n.arrayIndex<o.length;){let i=n.arrayIndex++,s=o[i];if(Re(s)&&gf(s,r))return{done:!1,value:s}}n.arrayIndex=0}}n.keyIndex++}return kt})}function ur(t,e){if(!t)throw new Error("Root node must be an AstNode.");return new kr(t,r=>ya(r,e))}function Qt(t,e){if(t){if(e?.range&&!gf(t,e.range))return new kr(t,()=>[])}else throw new Error("Root node must be an AstNode.");return new kr(t,r=>ya(r,e),{includeRoot:!0})}function gf(t,e){var r;if(!e)return!0;let n=(r=t.$cstNode)===null||r===void 0?void 0:r.range;return n?Eu(n,e):!1}function ro(t){return new jt(()=>({keys:Object.keys(t),keyIndex:0,arrayIndex:0}),e=>{for(;e.keyIndex<e.keys.length;){let r=e.keys[e.keyIndex];if(!r.startsWith("$")){let n=t[r];if(wt(n))return e.keyIndex++,{done:!1,value:{reference:n,container:t,property:r}};if(Array.isArray(n)){for(;e.arrayIndex<n.length;){let a=e.arrayIndex++,o=n[a];if(wt(o))return{done:!1,value:{reference:o,container:t,property:r,index:a}}}e.arrayIndex=0}}e.keyIndex++}return kt})}function pR(t,e=Oe(t).parseResult.value){let r=[];return Qt(e).forEach(n=>{ro(n).forEach(a=>{a.reference.ref===t&&r.push(a.reference)})}),ee(r)}function _i(t,e){let r=t.getTypeMetaData(e.$type),n=e;for(let a of r.properties)a.defaultValue!==void 0&&n[a.name]===void 0&&(n[a.name]=ev(a.defaultValue))}function ev(t){return Array.isArray(t)?[...t.map(ev)]:t}function mf(t,e){let r={$type:t.$type};for(let[n,a]of Object.entries(t))if(!n.startsWith("$"))if(Re(a))r[n]=mf(a,e);else if(wt(a))r[n]=e(r,n,a.$refNode,a.$refText);else if(Array.isArray(a)){let o=[];for(let i of a)Re(i)?o.push(mf(i,e)):wt(i)?o.push(e(r,n,i.$refNode,i.$refText)):o.push(i);r[n]=o}else r[n]=a;return Bu(r),r}var Vu={};In(Vu,{NEWLINE_REGEXP:()=>Cf,escapeRegExp:()=>va,getCaseInsensitivePattern:()=>Tf,getTerminalParts:()=>hR,isMultilineComment:()=>$f,isWhitespace:()=>ju,partialMatches:()=>xf,partialRegExp:()=>rv});function U(t){return t.charCodeAt(0)}function Uu(t,e){Array.isArray(t)?t.forEach(function(r){e.push(r)}):e.push(t)}function no(t,e){if(t[e]===!0)throw"duplicate flag "+e;let r=t[e];t[e]=!0}function ha(t){if(t===void 0)throw Error("Internal Error - Should never get here!");return!0}function Mi(){throw Error("Internal Error - Should never get here!")}function vf(t){return t.type==="Character"}var Oi=[];for(let t=U("0");t<=U("9");t++)Oi.push(t);var zi=[U("_")].concat(Oi);for(let t=U("a");t<=U("z");t++)zi.push(t);for(let t=U("A");t<=U("Z");t++)zi.push(t);var wf=[U(" "),U("\f"),U(`
`),U("\r"),U("	"),U("\v"),U("	"),U("\xA0"),U("\u1680"),U("\u2000"),U("\u2001"),U("\u2002"),U("\u2003"),U("\u2004"),U("\u2005"),U("\u2006"),U("\u2007"),U("\u2008"),U("\u2009"),U("\u200A"),U("\u2028"),U("\u2029"),U("\u202F"),U("\u205F"),U("\u3000"),U("\uFEFF")];var fR=/[0-9a-fA-F]/,qu=/[0-9]/,yR=/[1-9]/,ga=class{constructor(){this.idx=0,this.input="",this.groupIdx=0}saveState(){return{idx:this.idx,input:this.input,groupIdx:this.groupIdx}}restoreState(e){this.idx=e.idx,this.input=e.input,this.groupIdx=e.groupIdx}pattern(e){this.idx=0,this.input=e,this.groupIdx=0,this.consumeChar("/");let r=this.disjunction();this.consumeChar("/");let n={type:"Flags",loc:{begin:this.idx,end:e.length},global:!1,ignoreCase:!1,multiLine:!1,unicode:!1,sticky:!1};for(;this.isRegExpFlag();)switch(this.popChar()){case"g":no(n,"global");break;case"i":no(n,"ignoreCase");break;case"m":no(n,"multiLine");break;case"u":no(n,"unicode");break;case"y":no(n,"sticky");break}if(this.idx!==this.input.length)throw Error("Redundant input: "+this.input.substring(this.idx));return{type:"Pattern",flags:n,value:r,loc:this.loc(0)}}disjunction(){let e=[],r=this.idx;for(e.push(this.alternative());this.peekChar()==="|";)this.consumeChar("|"),e.push(this.alternative());return{type:"Disjunction",value:e,loc:this.loc(r)}}alternative(){let e=[],r=this.idx;for(;this.isTerm();)e.push(this.term());return{type:"Alternative",value:e,loc:this.loc(r)}}term(){return this.isAssertion()?this.assertion():this.atom()}assertion(){let e=this.idx;switch(this.popChar()){case"^":return{type:"StartAnchor",loc:this.loc(e)};case"$":return{type:"EndAnchor",loc:this.loc(e)};case"\\":switch(this.popChar()){case"b":return{type:"WordBoundary",loc:this.loc(e)};case"B":return{type:"NonWordBoundary",loc:this.loc(e)}}throw Error("Invalid Assertion Escape");case"(":this.consumeChar("?");let r;switch(this.popChar()){case"=":r="Lookahead";break;case"!":r="NegativeLookahead";break}ha(r);let n=this.disjunction();return this.consumeChar(")"),{type:r,value:n,loc:this.loc(e)}}return Mi()}quantifier(e=!1){let r,n=this.idx;switch(this.popChar()){case"*":r={atLeast:0,atMost:1/0};break;case"+":r={atLeast:1,atMost:1/0};break;case"?":r={atLeast:0,atMost:1};break;case"{":let a=this.integerIncludingZero();switch(this.popChar()){case"}":r={atLeast:a,atMost:a};break;case",":let o;this.isDigit()?(o=this.integerIncludingZero(),r={atLeast:a,atMost:o}):r={atLeast:a,atMost:1/0},this.consumeChar("}");break}if(e===!0&&r===void 0)return;ha(r);break}if(!(e===!0&&r===void 0)&&ha(r))return this.peekChar(0)==="?"?(this.consumeChar("?"),r.greedy=!1):r.greedy=!0,r.type="Quantifier",r.loc=this.loc(n),r}atom(){let e,r=this.idx;switch(this.peekChar()){case".":e=this.dotAll();break;case"\\":e=this.atomEscape();break;case"[":e=this.characterClass();break;case"(":e=this.group();break}return e===void 0&&this.isPatternCharacter()&&(e=this.patternCharacter()),ha(e)?(e.loc=this.loc(r),this.isQuantifier()&&(e.quantifier=this.quantifier()),e):Mi()}dotAll(){return this.consumeChar("."),{type:"Set",complement:!0,value:[U(`
`),U("\r"),U("\u2028"),U("\u2029")]}}atomEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return this.decimalEscapeAtom();case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}decimalEscapeAtom(){return{type:"GroupBackReference",value:this.positiveInteger()}}characterClassEscape(){let e,r=!1;switch(this.popChar()){case"d":e=Oi;break;case"D":e=Oi,r=!0;break;case"s":e=wf;break;case"S":e=wf,r=!0;break;case"w":e=zi;break;case"W":e=zi,r=!0;break}return ha(e)?{type:"Set",value:e,complement:r}:Mi()}controlEscapeAtom(){let e;switch(this.popChar()){case"f":e=U("\f");break;case"n":e=U(`
`);break;case"r":e=U("\r");break;case"t":e=U("	");break;case"v":e=U("\v");break}return ha(e)?{type:"Character",value:e}:Mi()}controlLetterEscapeAtom(){this.consumeChar("c");let e=this.popChar();if(/[a-zA-Z]/.test(e)===!1)throw Error("Invalid ");return{type:"Character",value:e.toUpperCase().charCodeAt(0)-64}}nulCharacterAtom(){return this.consumeChar("0"),{type:"Character",value:U("\0")}}hexEscapeSequenceAtom(){return this.consumeChar("x"),this.parseHexDigits(2)}regExpUnicodeEscapeSequenceAtom(){return this.consumeChar("u"),this.parseHexDigits(4)}identityEscapeAtom(){let e=this.popChar();return{type:"Character",value:U(e)}}classPatternCharacterAtom(){switch(this.peekChar()){case`
`:case"\r":case"\u2028":case"\u2029":case"\\":case"]":throw Error("TBD");default:let e=this.popChar();return{type:"Character",value:U(e)}}}characterClass(){let e=[],r=!1;for(this.consumeChar("["),this.peekChar(0)==="^"&&(this.consumeChar("^"),r=!0);this.isClassAtom();){let n=this.classAtom(),a=n.type==="Character";if(vf(n)&&this.isRangeDash()){this.consumeChar("-");let o=this.classAtom(),i=o.type==="Character";if(vf(o)){if(o.value<n.value)throw Error("Range out of order in character class");e.push({from:n.value,to:o.value})}else Uu(n.value,e),e.push(U("-")),Uu(o.value,e)}else Uu(n.value,e)}return this.consumeChar("]"),{type:"Set",complement:r,value:e}}classAtom(){switch(this.peekChar()){case"]":case`
`:case"\r":case"\u2028":case"\u2029":throw Error("TBD");case"\\":return this.classEscape();default:return this.classPatternCharacterAtom()}}classEscape(){switch(this.consumeChar("\\"),this.peekChar()){case"b":return this.consumeChar("b"),{type:"Character",value:U("\b")};case"d":case"D":case"s":case"S":case"w":case"W":return this.characterClassEscape();case"f":case"n":case"r":case"t":case"v":return this.controlEscapeAtom();case"c":return this.controlLetterEscapeAtom();case"0":return this.nulCharacterAtom();case"x":return this.hexEscapeSequenceAtom();case"u":return this.regExpUnicodeEscapeSequenceAtom();default:return this.identityEscapeAtom()}}group(){let e=!0;switch(this.consumeChar("("),this.peekChar(0)){case"?":this.consumeChar("?"),this.consumeChar(":"),e=!1;break;default:this.groupIdx++;break}let r=this.disjunction();this.consumeChar(")");let n={type:"Group",capturing:e,value:r};return e&&(n.idx=this.groupIdx),n}positiveInteger(){let e=this.popChar();if(yR.test(e)===!1)throw Error("Expecting a positive integer");for(;qu.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}integerIncludingZero(){let e=this.popChar();if(qu.test(e)===!1)throw Error("Expecting an integer");for(;qu.test(this.peekChar(0));)e+=this.popChar();return parseInt(e,10)}patternCharacter(){let e=this.popChar();switch(e){case`
`:case"\r":case"\u2028":case"\u2029":case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":throw Error("TBD");default:return{type:"Character",value:U(e)}}}isRegExpFlag(){switch(this.peekChar(0)){case"g":case"i":case"m":case"u":case"y":return!0;default:return!1}}isRangeDash(){return this.peekChar()==="-"&&this.isClassAtom(1)}isDigit(){return qu.test(this.peekChar(0))}isClassAtom(e=0){switch(this.peekChar(e)){case"]":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}isTerm(){return this.isAtom()||this.isAssertion()}isAtom(){if(this.isPatternCharacter())return!0;switch(this.peekChar(0)){case".":case"\\":case"[":case"(":return!0;default:return!1}}isAssertion(){switch(this.peekChar(0)){case"^":case"$":return!0;case"\\":switch(this.peekChar(1)){case"b":case"B":return!0;default:return!1}case"(":return this.peekChar(1)==="?"&&(this.peekChar(2)==="="||this.peekChar(2)==="!");default:return!1}}isQuantifier(){let e=this.saveState();try{return this.quantifier(!0)!==void 0}catch{return!1}finally{this.restoreState(e)}}isPatternCharacter(){switch(this.peekChar()){case"^":case"$":case"\\":case".":case"*":case"+":case"?":case"(":case")":case"[":case"|":case"/":case`
`:case"\r":case"\u2028":case"\u2029":return!1;default:return!0}}parseHexDigits(e){let r="";for(let a=0;a<e;a++){let o=this.popChar();if(fR.test(o)===!1)throw Error("Expecting a HexDecimal digits");r+=o}return{type:"Character",value:parseInt(r,16)}}peekChar(e=0){return this.input[this.idx+e]}popChar(){let e=this.peekChar(0);return this.consumeChar(void 0),e}consumeChar(e){if(e!==void 0&&this.input[this.idx]!==e)throw Error("Expected: '"+e+"' but found: '"+this.input[this.idx]+"' at offset: "+this.idx);if(this.idx>=this.input.length)throw Error("Unexpected end of input");this.idx++}loc(e){return{begin:e,end:this.idx}}};var Mr=class{visitChildren(e){for(let r in e){let n=e[r];e.hasOwnProperty(r)&&(n.type!==void 0?this.visit(n):Array.isArray(n)&&n.forEach(a=>{this.visit(a)},this))}}visit(e){switch(e.type){case"Pattern":this.visitPattern(e);break;case"Flags":this.visitFlags(e);break;case"Disjunction":this.visitDisjunction(e);break;case"Alternative":this.visitAlternative(e);break;case"StartAnchor":this.visitStartAnchor(e);break;case"EndAnchor":this.visitEndAnchor(e);break;case"WordBoundary":this.visitWordBoundary(e);break;case"NonWordBoundary":this.visitNonWordBoundary(e);break;case"Lookahead":this.visitLookahead(e);break;case"NegativeLookahead":this.visitNegativeLookahead(e);break;case"Character":this.visitCharacter(e);break;case"Set":this.visitSet(e);break;case"Group":this.visitGroup(e);break;case"GroupBackReference":this.visitGroupBackReference(e);break;case"Quantifier":this.visitQuantifier(e);break}this.visitChildren(e)}visitPattern(e){}visitFlags(e){}visitDisjunction(e){}visitAlternative(e){}visitStartAnchor(e){}visitEndAnchor(e){}visitWordBoundary(e){}visitNonWordBoundary(e){}visitLookahead(e){}visitNegativeLookahead(e){}visitCharacter(e){}visitSet(e){}visitGroup(e){}visitGroupBackReference(e){}visitQuantifier(e){}};var Cf=/\r?\n/gm,tv=new ga,Sf=class extends Mr{constructor(){super(...arguments),this.isStarting=!0,this.endRegexpStack=[],this.multiline=!1}get endRegex(){return this.endRegexpStack.join("")}reset(e){this.multiline=!1,this.regex=e,this.startRegexp="",this.isStarting=!0,this.endRegexpStack=[]}visitGroup(e){e.quantifier&&(this.isStarting=!1,this.endRegexpStack=[])}visitCharacter(e){let r=String.fromCharCode(e.value);if(!this.multiline&&r===`
`&&(this.multiline=!0),e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{let n=va(r);this.endRegexpStack.push(n),this.isStarting&&(this.startRegexp+=n)}}visitSet(e){if(!this.multiline){let r=this.regex.substring(e.loc.begin,e.loc.end),n=new RegExp(r);this.multiline=!!`
`.match(n)}if(e.quantifier)this.isStarting=!1,this.endRegexpStack=[];else{let r=this.regex.substring(e.loc.begin,e.loc.end);this.endRegexpStack.push(r),this.isStarting&&(this.startRegexp+=r)}}visitChildren(e){e.type==="Group"&&e.quantifier||super.visitChildren(e)}},ma=new Sf;function hR(t){try{typeof t!="string"&&(t=t.source),t=`/${t}/`;let e=tv.pattern(t),r=[];for(let n of e.value.value)ma.reset(t),ma.visit(n),r.push({start:ma.startRegexp,end:ma.endRegex});return r}catch{return[]}}function $f(t){try{return typeof t=="string"&&(t=new RegExp(t)),t=t.toString(),ma.reset(t),ma.visit(tv.pattern(t)),ma.multiline}catch{return!1}}function ju(t){return(typeof t=="string"?new RegExp(t):t).test(" ")}function va(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Tf(t){return Array.prototype.map.call(t,e=>/\w/.test(e)?`[${e.toLowerCase()}${e.toUpperCase()}]`:va(e)).join("")}function xf(t,e){let r=rv(t),n=e.match(r);return!!n&&n[0].length>0}function rv(t){typeof t=="string"&&(t=new RegExp(t));let e=t,r=t.source,n=0;function a(){let o="",i;function s(l){o+=r.substr(n,l),n+=l}function u(l){o+="(?:"+r.substr(n,l)+"|$)",n+=l}for(;n<r.length;)switch(r[n]){case"\\":switch(r[n+1]){case"c":u(3);break;case"x":u(4);break;case"u":e.unicode?r[n+2]==="{"?u(r.indexOf("}",n)-n+1):u(6):u(2);break;case"p":case"P":e.unicode?u(r.indexOf("}",n)-n+1):u(2);break;case"k":u(r.indexOf(">",n)-n+1);break;default:u(2);break}break;case"[":i=/\[(?:\\.|.)*?\]/g,i.lastIndex=n,i=i.exec(r)||[],u(i[0].length);break;case"|":case"^":case"$":case"*":case"+":case"?":s(1);break;case"{":i=/\{\d+,?\d*\}/g,i.lastIndex=n,i=i.exec(r),i?s(i[0].length):u(1);break;case"(":if(r[n+1]==="?")switch(r[n+2]){case":":o+="(?:",n+=3,o+=a()+"|$)";break;case"=":o+="(?=",n+=3,o+=a()+")";break;case"!":i=n,n+=3,a(),o+=r.substr(i,n-i);break;case"<":switch(r[n+3]){case"=":case"!":i=n,n+=4,a(),o+=r.substr(i,n-i);break;default:s(r.indexOf(">",n)-n+1),o+=a()+"|$)";break}break}else s(1),o+=a()+"|$)";break;case")":return++n,o;default:u(1);break}return o}return new RegExp(a(),t.flags)}function Li(t){return t.rules.find(e=>He(e)&&e.entry)}function nv(t){return t.rules.filter(e=>Vt(e)&&e.hidden)}function Fi(t,e){let r=new Set,n=Li(t);if(!n)return new Set(t.rules);let a=[n].concat(nv(t));for(let i of a)av(i,r,e);let o=new Set;for(let i of t.rules)(r.has(i.name)||Vt(i)&&i.hidden)&&o.add(i);return o}function av(t,e,r){e.add(t.name),ur(t).forEach(n=>{if(Yt(n)||r&&Gu(n)){let a=n.rule.ref;a&&!e.has(a.name)&&av(a,e,r)}})}function Wi(t){if(t.terminal)return t.terminal;if(t.type.ref){let e=Yu(t.type.ref);return e?.terminal}}function If(t){return t.hidden&&!Pn(t).test(" ")}function Gi(t,e){return!t||!e?[]:Rf(t,e,t.astNode,!0)}function wa(t,e,r){if(!t||!e)return;let n=Rf(t,e,t.astNode,!0);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}function Rf(t,e,r,n){if(!n){let a=sr(t.grammarSource,It);if(a&&a.feature===e)return[t]}return qt(t)&&t.astNode===r?t.content.flatMap(a=>Rf(a,e,r,!1)):[]}function Pf(t,e){return t?Kf(t,e,t?.astNode):[]}function Bi(t,e,r){if(!t)return;let n=Kf(t,e,t?.astNode);if(n.length!==0)return r!==void 0?r=Math.max(0,Math.min(r,n.length-1)):r=0,n[r]}function Kf(t,e,r){if(t.astNode!==r)return[];if(St(t.grammarSource)&&t.grammarSource.value===e)return[t];let n=la(t).iterator(),a,o=[];do if(a=n.next(),!a.done){let i=a.value;i.astNode===r?St(i.grammarSource)&&i.grammarSource.value===e&&o.push(i):n.prune()}while(!a.done);return o}function bf(t){var e;let r=t.astNode;for(;r===((e=t.container)===null||e===void 0?void 0:e.astNode);){let n=sr(t.grammarSource,It);if(n)return n;t=t.container}}function Yu(t){let e=t;return Lu(e)&&(Ir(e.$container)?e=e.$container.$container:He(e.$container)?e=e.$container:Rn(e.$container)),ov(t,e,new Map)}function ov(t,e,r){var n;function a(o,i){let s;return sr(o,It)||(s=ov(i,i,r)),r.set(t,s),s}if(r.has(t))return r.get(t);r.set(t,void 0);for(let o of ur(e)){if(It(o)&&o.feature.toLowerCase()==="name")return r.set(t,o),o;if(Yt(o)&&He(o.rule.ref))return a(o,o.rule.ref);if(Wu(o)&&(!((n=o.typeRef)===null||n===void 0)&&n.ref))return a(o,o.typeRef.ref)}}function iv(t){let e=t.$container;if(yr(e)){let r=e.elements,n=r.indexOf(t);for(let a=n-1;a>=0;a--){let o=r[a];if(Ir(o))return o;{let i=ur(r[a]).find(Ir);if(i)return i}}}if(pa(e))return iv(e)}function Sa(t,e){return t==="?"||t==="*"||yr(e)&&!!e.guardCondition}function Ef(t){return t==="*"||t==="+"}function gR(t){return t==="+="}function Hi(t){return sv(t,new Set)}function sv(t,e){if(e.has(t))return!0;e.add(t);for(let r of ur(t))if(Yt(r)){if(!r.rule.ref||He(r.rule.ref)&&!sv(r.rule.ref,e))return!1}else{if(It(r))return!1;if(Ir(r))return!1}return!!t.definition}function mR(t){return kf(t.type,new Set)}function kf(t,e){if(e.has(t))return!0;if(e.add(t),wp(t))return!1;if(Op(t))return!1;if(Bp(t))return t.types.every(r=>kf(r,e));if(Wu(t)){if(t.primitiveType!==void 0)return!0;if(t.stringType!==void 0)return!0;if(t.typeRef!==void 0){let r=t.typeRef.ref;return Ni(r)?kf(r.type,e):!1}else return!1}else return!1}function Ca(t){if(t.inferredType)return t.inferredType.name;if(t.dataType)return t.dataType;if(t.returnType){let e=t.returnType.ref;if(e){if(He(e))return e.name;if(Fu(e)||Ni(e))return e.name}}}function un(t){var e;if(He(t))return Hi(t)?t.name:(e=Ca(t))!==null&&e!==void 0?e:t.name;if(Fu(t)||Ni(t)||zp(t))return t.name;if(Ir(t)){let r=uv(t);if(r)return r}else if(Lu(t))return t.name;throw new Error("Cannot get name of Unknown Type")}function uv(t){var e;if(t.inferredType)return t.inferredType.name;if(!((e=t.type)===null||e===void 0)&&e.ref)return un(t.type.ref)}function Df(t){var e,r,n;return Vt(t)?(r=(e=t.type)===null||e===void 0?void 0:e.name)!==null&&r!==void 0?r:"string":Hi(t)?t.name:(n=Ca(t))!==null&&n!==void 0?n:t.name}function Pn(t){let e={s:!1,i:!1,u:!1},r=ao(t.definition,e),n=Object.entries(e).filter(([,a])=>a).map(([a])=>a).join("");return new RegExp(r,n)}var Nf=/[\s\S]/.source;function ao(t,e){if(sf(t))return vR(t);if(lf(t))return wR(t);if(Vp(t))return $R(t);if(Gu(t)){let r=t.rule.ref;if(!r)throw new Error("Missing rule reference.");return sn(ao(r.definition),{cardinality:t.cardinality,lookahead:t.lookahead})}else{if(tf(t))return CR(t);if(ff(t))return SR(t);if(nf(t)){let r=t.regex.lastIndexOf("/"),n=t.regex.substring(1,r),a=t.regex.substring(r+1);return e&&(e.i=a.includes("i"),e.s=a.includes("s"),e.u=a.includes("u")),sn(n,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}else{if(hf(t))return sn(Nf,{cardinality:t.cardinality,lookahead:t.lookahead});throw new Error(`Invalid terminal element: ${t?.$type}`)}}}function vR(t){return sn(t.elements.map(e=>ao(e)).join("|"),{cardinality:t.cardinality,lookahead:t.lookahead})}function wR(t){return sn(t.elements.map(e=>ao(e)).join(""),{cardinality:t.cardinality,lookahead:t.lookahead})}function SR(t){return sn(`${Nf}*?${ao(t.terminal)}`,{cardinality:t.cardinality,lookahead:t.lookahead})}function CR(t){return sn(`(?!${ao(t.terminal)})${Nf}*?`,{cardinality:t.cardinality,lookahead:t.lookahead})}function $R(t){return t.right?sn(`[${Af(t.left)}-${Af(t.right)}]`,{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1}):sn(Af(t.left),{cardinality:t.cardinality,lookahead:t.lookahead,wrap:!1})}function Af(t){return va(t.value)}function sn(t,e){var r;return(e.wrap!==!1||e.lookahead)&&(t=`(${(r=e.lookahead)!==null&&r!==void 0?r:""}${t})`),e.cardinality?`${t}${e.cardinality}`:t}function _f(t){let e=[],r=t.Grammar;for(let n of r.rules)Vt(n)&&If(n)&&$f(Pn(n))&&e.push(n.name);return{multilineCommentRules:e,nameRegexp:Du}}var TR=typeof global=="object"&&global&&global.Object===Object&&global,Xu=TR;var xR=typeof self=="object"&&self&&self.Object===Object&&self,AR=Xu||xR||Function("return this")(),tt=AR;var kR=tt.Symbol,pt=kR;var lv=Object.prototype,IR=lv.hasOwnProperty,RR=lv.toString,Ui=pt?pt.toStringTag:void 0;function PR(t){var e=IR.call(t,Ui),r=t[Ui];try{t[Ui]=void 0;var n=!0}catch{}var a=RR.call(t);return n&&(e?t[Ui]=r:delete t[Ui]),a}var cv=PR;var KR=Object.prototype,bR=KR.toString;function ER(t){return bR.call(t)}var dv=ER;var DR="[object Null]",NR="[object Undefined]",pv=pt?pt.toStringTag:void 0;function _R(t){return t==null?t===void 0?NR:DR:pv&&pv in Object(t)?cv(t):dv(t)}var zt=_R;function MR(t){return t!=null&&typeof t=="object"}var Je=MR;var OR="[object Symbol]";function zR(t){return typeof t=="symbol"||Je(t)&&zt(t)==OR}var Or=zR;function LR(t,e){for(var r=-1,n=t==null?0:t.length,a=Array(n);++r<n;)a[r]=e(t[r],r,t);return a}var zr=LR;var FR=Array.isArray,F=FR;var WR=1/0,fv=pt?pt.prototype:void 0,yv=fv?fv.toString:void 0;function hv(t){if(typeof t=="string")return t;if(F(t))return zr(t,hv)+"";if(Or(t))return yv?yv.call(t):"";var e=t+"";return e=="0"&&1/t==-WR?"-0":e}var gv=hv;var GR=/\s/;function BR(t){for(var e=t.length;e--&&GR.test(t.charAt(e)););return e}var mv=BR;var HR=/^\s+/;function UR(t){return t&&t.slice(0,mv(t)+1).replace(HR,"")}var vv=UR;function qR(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var ze=qR;var wv=NaN,jR=/^[-+]0x[0-9a-f]+$/i,VR=/^0b[01]+$/i,YR=/^0o[0-7]+$/i,QR=parseInt;function XR(t){if(typeof t=="number")return t;if(Or(t))return wv;if(ze(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=ze(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=vv(t);var r=VR.test(t);return r||YR.test(t)?QR(t.slice(2),r?2:8):jR.test(t)?wv:+t}var Sv=XR;var Cv=1/0,JR=17976931348623157e292;function ZR(t){if(!t)return t===0?t:0;if(t=Sv(t),t===Cv||t===-Cv){var e=t<0?-1:1;return e*JR}return t===t?t:0}var $v=ZR;function eP(t){var e=$v(t),r=e%1;return e===e?r?e-r:e:0}var Lr=eP;function tP(t){return t}var Xt=tP;var rP="[object AsyncFunction]",nP="[object Function]",aP="[object GeneratorFunction]",oP="[object Proxy]";function iP(t){if(!ze(t))return!1;var e=zt(t);return e==nP||e==aP||e==rP||e==oP}var Lt=iP;var sP=tt["__core-js_shared__"],Ju=sP;var Tv=function(){var t=/[^.]+$/.exec(Ju&&Ju.keys&&Ju.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function uP(t){return!!Tv&&Tv in t}var xv=uP;var lP=Function.prototype,cP=lP.toString;function dP(t){if(t!=null){try{return cP.call(t)}catch{}try{return t+""}catch{}}return""}var ln=dP;var pP=/[\\^$.*+?()[\]{}|]/g,fP=/^\[object .+?Constructor\]$/,yP=Function.prototype,hP=Object.prototype,gP=yP.toString,mP=hP.hasOwnProperty,vP=RegExp("^"+gP.call(mP).replace(pP,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function wP(t){if(!ze(t)||xv(t))return!1;var e=Lt(t)?vP:fP;return e.test(ln(t))}var Av=wP;function SP(t,e){return t?.[e]}var kv=SP;function CP(t,e){var r=kv(t,e);return Av(r)?r:void 0}var Jt=CP;var $P=Jt(tt,"WeakMap"),Zu=$P;var Iv=Object.create,TP=function(){function t(){}return function(e){if(!ze(e))return{};if(Iv)return Iv(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),Rv=TP;function xP(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}var Pv=xP;function AP(){}var Le=AP;function kP(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}var Kv=kP;var IP=800,RP=16,PP=Date.now;function KP(t){var e=0,r=0;return function(){var n=PP(),a=RP-(n-r);if(r=n,a>0){if(++e>=IP)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var bv=KP;function bP(t){return function(){return t}}var Ev=bP;var EP=function(){try{var t=Jt(Object,"defineProperty");return t({},"",{}),t}catch{}}(),oo=EP;var DP=oo?function(t,e){return oo(t,"toString",{configurable:!0,enumerable:!1,value:Ev(e),writable:!0})}:Xt,Dv=DP;var NP=bv(Dv),Nv=NP;function _P(t,e){for(var r=-1,n=t==null?0:t.length;++r<n&&e(t[r],r,t)!==!1;);return t}var el=_P;function MP(t,e,r,n){for(var a=t.length,o=r+(n?1:-1);n?o--:++o<a;)if(e(t[o],o,t))return o;return-1}var tl=MP;function OP(t){return t!==t}var _v=OP;function zP(t,e,r){for(var n=r-1,a=t.length;++n<a;)if(t[n]===e)return n;return-1}var Mv=zP;function LP(t,e,r){return e===e?Mv(t,e,r):tl(t,_v,r)}var io=LP;function FP(t,e){var r=t==null?0:t.length;return!!r&&io(t,e,0)>-1}var rl=FP;var WP=9007199254740991,GP=/^(?:0|[1-9]\d*)$/;function BP(t,e){var r=typeof t;return e=e??WP,!!e&&(r=="number"||r!="symbol"&&GP.test(t))&&t>-1&&t%1==0&&t<e}var Kn=BP;function HP(t,e,r){e=="__proto__"&&oo?oo(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}var so=HP;function UP(t,e){return t===e||t!==t&&e!==e}var Fr=UP;var qP=Object.prototype,jP=qP.hasOwnProperty;function VP(t,e,r){var n=t[e];(!(jP.call(t,e)&&Fr(n,r))||r===void 0&&!(e in t))&&so(t,e,r)}var bn=VP;function YP(t,e,r,n){var a=!r;r||(r={});for(var o=-1,i=e.length;++o<i;){var s=e[o],u=n?n(r[s],t[s],s,r,t):void 0;u===void 0&&(u=t[s]),a?so(r,s,u):bn(r,s,u)}return r}var Wr=YP;var Ov=Math.max;function QP(t,e,r){return e=Ov(e===void 0?t.length-1:e,0),function(){for(var n=arguments,a=-1,o=Ov(n.length-e,0),i=Array(o);++a<o;)i[a]=n[e+a];a=-1;for(var s=Array(e+1);++a<e;)s[a]=n[a];return s[e]=r(i),Pv(t,this,s)}}var zv=QP;function XP(t,e){return Nv(zv(t,e,Xt),t+"")}var uo=XP;var JP=9007199254740991;function ZP(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=JP}var lo=ZP;function eK(t){return t!=null&&lo(t.length)&&!Lt(t)}var rt=eK;function tK(t,e,r){if(!ze(r))return!1;var n=typeof e;return(n=="number"?rt(r)&&Kn(e,r.length):n=="string"&&e in r)?Fr(r[e],t):!1}var En=tK;function rK(t){return uo(function(e,r){var n=-1,a=r.length,o=a>1?r[a-1]:void 0,i=a>2?r[2]:void 0;for(o=t.length>3&&typeof o=="function"?(a--,o):void 0,i&&En(r[0],r[1],i)&&(o=a<3?void 0:o,a=1),e=Object(e);++n<a;){var s=r[n];s&&t(e,s,n,o)}return e})}var Lv=rK;var nK=Object.prototype;function aK(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||nK;return t===r}var Gr=aK;function oK(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}var Fv=oK;var iK="[object Arguments]";function sK(t){return Je(t)&&zt(t)==iK}var Mf=sK;var Wv=Object.prototype,uK=Wv.hasOwnProperty,lK=Wv.propertyIsEnumerable,cK=Mf(function(){return arguments}())?Mf:function(t){return Je(t)&&uK.call(t,"callee")&&!lK.call(t,"callee")},Dn=cK;function dK(){return!1}var Gv=dK;var Uv=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Bv=Uv&&typeof module=="object"&&module&&!module.nodeType&&module,pK=Bv&&Bv.exports===Uv,Hv=pK?tt.Buffer:void 0,fK=Hv?Hv.isBuffer:void 0,yK=fK||Gv,cn=yK;var hK="[object Arguments]",gK="[object Array]",mK="[object Boolean]",vK="[object Date]",wK="[object Error]",SK="[object Function]",CK="[object Map]",$K="[object Number]",TK="[object Object]",xK="[object RegExp]",AK="[object Set]",kK="[object String]",IK="[object WeakMap]",RK="[object ArrayBuffer]",PK="[object DataView]",KK="[object Float32Array]",bK="[object Float64Array]",EK="[object Int8Array]",DK="[object Int16Array]",NK="[object Int32Array]",_K="[object Uint8Array]",MK="[object Uint8ClampedArray]",OK="[object Uint16Array]",zK="[object Uint32Array]",Pe={};Pe[KK]=Pe[bK]=Pe[EK]=Pe[DK]=Pe[NK]=Pe[_K]=Pe[MK]=Pe[OK]=Pe[zK]=!0;Pe[hK]=Pe[gK]=Pe[RK]=Pe[mK]=Pe[PK]=Pe[vK]=Pe[wK]=Pe[SK]=Pe[CK]=Pe[$K]=Pe[TK]=Pe[xK]=Pe[AK]=Pe[kK]=Pe[IK]=!1;function LK(t){return Je(t)&&lo(t.length)&&!!Pe[zt(t)]}var qv=LK;function FK(t){return function(e){return t(e)}}var Br=FK;var jv=typeof exports=="object"&&exports&&!exports.nodeType&&exports,qi=jv&&typeof module=="object"&&module&&!module.nodeType&&module,WK=qi&&qi.exports===jv,Of=WK&&Xu.process,GK=function(){try{var t=qi&&qi.require&&qi.require("util").types;return t||Of&&Of.binding&&Of.binding("util")}catch{}}(),hr=GK;var Vv=hr&&hr.isTypedArray,BK=Vv?Br(Vv):qv,co=BK;var HK=Object.prototype,UK=HK.hasOwnProperty;function qK(t,e){var r=F(t),n=!r&&Dn(t),a=!r&&!n&&cn(t),o=!r&&!n&&!a&&co(t),i=r||n||a||o,s=i?Fv(t.length,String):[],u=s.length;for(var l in t)(e||UK.call(t,l))&&!(i&&(l=="length"||a&&(l=="offset"||l=="parent")||o&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||Kn(l,u)))&&s.push(l);return s}var nl=qK;function jK(t,e){return function(r){return t(e(r))}}var al=jK;var VK=al(Object.keys,Object),Yv=VK;var YK=Object.prototype,QK=YK.hasOwnProperty;function XK(t){if(!Gr(t))return Yv(t);var e=[];for(var r in Object(t))QK.call(t,r)&&r!="constructor"&&e.push(r);return e}var ol=XK;function JK(t){return rt(t)?nl(t):ol(t)}var Se=JK;var ZK=Object.prototype,eb=ZK.hasOwnProperty,tb=Lv(function(t,e){if(Gr(e)||rt(e)){Wr(e,Se(e),t);return}for(var r in e)eb.call(e,r)&&bn(t,r,e[r])}),Ct=tb;function rb(t){var e=[];if(t!=null)for(var r in Object(t))e.push(r);return e}var Qv=rb;var nb=Object.prototype,ab=nb.hasOwnProperty;function ob(t){if(!ze(t))return Qv(t);var e=Gr(t),r=[];for(var n in t)n=="constructor"&&(e||!ab.call(t,n))||r.push(n);return r}var Xv=ob;function ib(t){return rt(t)?nl(t,!0):Xv(t)}var Nn=ib;var sb=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ub=/^\w*$/;function lb(t,e){if(F(t))return!1;var r=typeof t;return r=="number"||r=="symbol"||r=="boolean"||t==null||Or(t)?!0:ub.test(t)||!sb.test(t)||e!=null&&t in Object(e)}var po=lb;var cb=Jt(Object,"create"),dn=cb;function db(){this.__data__=dn?dn(null):{},this.size=0}var Jv=db;function pb(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var Zv=pb;var fb="__lodash_hash_undefined__",yb=Object.prototype,hb=yb.hasOwnProperty;function gb(t){var e=this.__data__;if(dn){var r=e[t];return r===fb?void 0:r}return hb.call(e,t)?e[t]:void 0}var ew=gb;var mb=Object.prototype,vb=mb.hasOwnProperty;function wb(t){var e=this.__data__;return dn?e[t]!==void 0:vb.call(e,t)}var tw=wb;var Sb="__lodash_hash_undefined__";function Cb(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=dn&&e===void 0?Sb:e,this}var rw=Cb;function fo(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}fo.prototype.clear=Jv;fo.prototype.delete=Zv;fo.prototype.get=ew;fo.prototype.has=tw;fo.prototype.set=rw;var zf=fo;function $b(){this.__data__=[],this.size=0}var nw=$b;function Tb(t,e){for(var r=t.length;r--;)if(Fr(t[r][0],e))return r;return-1}var _n=Tb;var xb=Array.prototype,Ab=xb.splice;function kb(t){var e=this.__data__,r=_n(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():Ab.call(e,r,1),--this.size,!0}var aw=kb;function Ib(t){var e=this.__data__,r=_n(e,t);return r<0?void 0:e[r][1]}var ow=Ib;function Rb(t){return _n(this.__data__,t)>-1}var iw=Rb;function Pb(t,e){var r=this.__data__,n=_n(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}var sw=Pb;function yo(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}yo.prototype.clear=nw;yo.prototype.delete=aw;yo.prototype.get=ow;yo.prototype.has=iw;yo.prototype.set=sw;var Mn=yo;var Kb=Jt(tt,"Map"),On=Kb;function bb(){this.size=0,this.__data__={hash:new zf,map:new(On||Mn),string:new zf}}var uw=bb;function Eb(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}var lw=Eb;function Db(t,e){var r=t.__data__;return lw(e)?r[typeof e=="string"?"string":"hash"]:r.map}var zn=Db;function Nb(t){var e=zn(this,t).delete(t);return this.size-=e?1:0,e}var cw=Nb;function _b(t){return zn(this,t).get(t)}var dw=_b;function Mb(t){return zn(this,t).has(t)}var pw=Mb;function Ob(t,e){var r=zn(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}var fw=Ob;function ho(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}ho.prototype.clear=uw;ho.prototype.delete=cw;ho.prototype.get=dw;ho.prototype.has=pw;ho.prototype.set=fw;var $a=ho;var zb="Expected a function";function Lf(t,e){if(typeof t!="function"||e!=null&&typeof e!="function")throw new TypeError(zb);var r=function(){var n=arguments,a=e?e.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=t.apply(this,n);return r.cache=o.set(a,i)||o,i};return r.cache=new(Lf.Cache||$a),r}Lf.Cache=$a;var yw=Lf;var Lb=500;function Fb(t){var e=yw(t,function(n){return r.size===Lb&&r.clear(),n}),r=e.cache;return e}var hw=Fb;var Wb=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Gb=/\\(\\)?/g,Bb=hw(function(t){var e=[];return t.charCodeAt(0)===46&&e.push(""),t.replace(Wb,function(r,n,a,o){e.push(a?o.replace(Gb,"$1"):n||r)}),e}),gw=Bb;function Hb(t){return t==null?"":gv(t)}var mw=Hb;function Ub(t,e){return F(t)?t:po(t,e)?[t]:gw(mw(t))}var Ln=Ub;var qb=1/0;function jb(t){if(typeof t=="string"||Or(t))return t;var e=t+"";return e=="0"&&1/t==-qb?"-0":e}var Hr=jb;function Vb(t,e){e=Ln(e,t);for(var r=0,n=e.length;t!=null&&r<n;)t=t[Hr(e[r++])];return r&&r==n?t:void 0}var go=Vb;function Yb(t,e,r){var n=t==null?void 0:go(t,e);return n===void 0?r:n}var vw=Yb;function Qb(t,e){for(var r=-1,n=e.length,a=t.length;++r<n;)t[a+r]=e[r];return t}var mo=Qb;var ww=pt?pt.isConcatSpreadable:void 0;function Xb(t){return F(t)||Dn(t)||!!(ww&&t&&t[ww])}var Sw=Xb;function Cw(t,e,r,n,a){var o=-1,i=t.length;for(r||(r=Sw),a||(a=[]);++o<i;){var s=t[o];e>0&&r(s)?e>1?Cw(s,e-1,r,n,a):mo(a,s):n||(a[a.length]=s)}return a}var vo=Cw;function Jb(t){var e=t==null?0:t.length;return e?vo(t,1):[]}var Ze=Jb;var Zb=al(Object.getPrototypeOf,Object),il=Zb;function eE(t,e,r){var n=-1,a=t.length;e<0&&(e=-e>a?0:a+e),r=r>a?a:r,r<0&&(r+=a),a=e>r?0:r-e>>>0,e>>>=0;for(var o=Array(a);++n<a;)o[n]=t[n+e];return o}var sl=eE;function tE(t,e,r,n){var a=-1,o=t==null?0:t.length;for(n&&o&&(r=t[++a]);++a<o;)r=e(r,t[a],a,t);return r}var $w=tE;function rE(){this.__data__=new Mn,this.size=0}var Tw=rE;function nE(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}var xw=nE;function aE(t){return this.__data__.get(t)}var Aw=aE;function oE(t){return this.__data__.has(t)}var kw=oE;var iE=200;function sE(t,e){var r=this.__data__;if(r instanceof Mn){var n=r.__data__;if(!On||n.length<iE-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new $a(n)}return r.set(t,e),this.size=r.size,this}var Iw=sE;function wo(t){var e=this.__data__=new Mn(t);this.size=e.size}wo.prototype.clear=Tw;wo.prototype.delete=xw;wo.prototype.get=Aw;wo.prototype.has=kw;wo.prototype.set=Iw;var Fn=wo;function uE(t,e){return t&&Wr(e,Se(e),t)}var Rw=uE;function lE(t,e){return t&&Wr(e,Nn(e),t)}var Pw=lE;var Dw=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Kw=Dw&&typeof module=="object"&&module&&!module.nodeType&&module,cE=Kw&&Kw.exports===Dw,bw=cE?tt.Buffer:void 0,Ew=bw?bw.allocUnsafe:void 0;function dE(t,e){if(e)return t.slice();var r=t.length,n=Ew?Ew(r):new t.constructor(r);return t.copy(n),n}var Nw=dE;function pE(t,e){for(var r=-1,n=t==null?0:t.length,a=0,o=[];++r<n;){var i=t[r];e(i,r,t)&&(o[a++]=i)}return o}var So=pE;function fE(){return[]}var ul=fE;var yE=Object.prototype,hE=yE.propertyIsEnumerable,_w=Object.getOwnPropertySymbols,gE=_w?function(t){return t==null?[]:(t=Object(t),So(_w(t),function(e){return hE.call(t,e)}))}:ul,Co=gE;function mE(t,e){return Wr(t,Co(t),e)}var Mw=mE;var vE=Object.getOwnPropertySymbols,wE=vE?function(t){for(var e=[];t;)mo(e,Co(t)),t=il(t);return e}:ul,ll=wE;function SE(t,e){return Wr(t,ll(t),e)}var Ow=SE;function CE(t,e,r){var n=e(t);return F(t)?n:mo(n,r(t))}var cl=CE;function $E(t){return cl(t,Se,Co)}var ji=$E;function TE(t){return cl(t,Nn,ll)}var dl=TE;var xE=Jt(tt,"DataView"),pl=xE;var AE=Jt(tt,"Promise"),fl=AE;var kE=Jt(tt,"Set"),Wn=kE;var zw="[object Map]",IE="[object Object]",Lw="[object Promise]",Fw="[object Set]",Ww="[object WeakMap]",Gw="[object DataView]",RE=ln(pl),PE=ln(On),KE=ln(fl),bE=ln(Wn),EE=ln(Zu),Ta=zt;(pl&&Ta(new pl(new ArrayBuffer(1)))!=Gw||On&&Ta(new On)!=zw||fl&&Ta(fl.resolve())!=Lw||Wn&&Ta(new Wn)!=Fw||Zu&&Ta(new Zu)!=Ww)&&(Ta=function(t){var e=zt(t),r=e==IE?t.constructor:void 0,n=r?ln(r):"";if(n)switch(n){case RE:return Gw;case PE:return zw;case KE:return Lw;case bE:return Fw;case EE:return Ww}return e});var Pr=Ta;var DE=Object.prototype,NE=DE.hasOwnProperty;function _E(t){var e=t.length,r=new t.constructor(e);return e&&typeof t[0]=="string"&&NE.call(t,"index")&&(r.index=t.index,r.input=t.input),r}var Bw=_E;var ME=tt.Uint8Array,$o=ME;function OE(t){var e=new t.constructor(t.byteLength);return new $o(e).set(new $o(t)),e}var To=OE;function zE(t,e){var r=e?To(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}var Hw=zE;var LE=/\w*$/;function FE(t){var e=new t.constructor(t.source,LE.exec(t));return e.lastIndex=t.lastIndex,e}var Uw=FE;var qw=pt?pt.prototype:void 0,jw=qw?qw.valueOf:void 0;function WE(t){return jw?Object(jw.call(t)):{}}var Vw=WE;function GE(t,e){var r=e?To(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}var Yw=GE;var BE="[object Boolean]",HE="[object Date]",UE="[object Map]",qE="[object Number]",jE="[object RegExp]",VE="[object Set]",YE="[object String]",QE="[object Symbol]",XE="[object ArrayBuffer]",JE="[object DataView]",ZE="[object Float32Array]",eD="[object Float64Array]",tD="[object Int8Array]",rD="[object Int16Array]",nD="[object Int32Array]",aD="[object Uint8Array]",oD="[object Uint8ClampedArray]",iD="[object Uint16Array]",sD="[object Uint32Array]";function uD(t,e,r){var n=t.constructor;switch(e){case XE:return To(t);case BE:case HE:return new n(+t);case JE:return Hw(t,r);case ZE:case eD:case tD:case rD:case nD:case aD:case oD:case iD:case sD:return Yw(t,r);case UE:return new n;case qE:case YE:return new n(t);case jE:return Uw(t);case VE:return new n;case QE:return Vw(t)}}var Qw=uD;function lD(t){return typeof t.constructor=="function"&&!Gr(t)?Rv(il(t)):{}}var Xw=lD;var cD="[object Map]";function dD(t){return Je(t)&&Pr(t)==cD}var Jw=dD;var Zw=hr&&hr.isMap,pD=Zw?Br(Zw):Jw,eS=pD;var fD="[object Set]";function yD(t){return Je(t)&&Pr(t)==fD}var tS=yD;var rS=hr&&hr.isSet,hD=rS?Br(rS):tS,nS=hD;var gD=1,mD=2,vD=4,aS="[object Arguments]",wD="[object Array]",SD="[object Boolean]",CD="[object Date]",$D="[object Error]",oS="[object Function]",TD="[object GeneratorFunction]",xD="[object Map]",AD="[object Number]",iS="[object Object]",kD="[object RegExp]",ID="[object Set]",RD="[object String]",PD="[object Symbol]",KD="[object WeakMap]",bD="[object ArrayBuffer]",ED="[object DataView]",DD="[object Float32Array]",ND="[object Float64Array]",_D="[object Int8Array]",MD="[object Int16Array]",OD="[object Int32Array]",zD="[object Uint8Array]",LD="[object Uint8ClampedArray]",FD="[object Uint16Array]",WD="[object Uint32Array]",Ce={};Ce[aS]=Ce[wD]=Ce[bD]=Ce[ED]=Ce[SD]=Ce[CD]=Ce[DD]=Ce[ND]=Ce[_D]=Ce[MD]=Ce[OD]=Ce[xD]=Ce[AD]=Ce[iS]=Ce[kD]=Ce[ID]=Ce[RD]=Ce[PD]=Ce[zD]=Ce[LD]=Ce[FD]=Ce[WD]=!0;Ce[$D]=Ce[oS]=Ce[KD]=!1;function yl(t,e,r,n,a,o){var i,s=e&gD,u=e&mD,l=e&vD;if(r&&(i=a?r(t,n,a,o):r(t)),i!==void 0)return i;if(!ze(t))return t;var c=F(t);if(c){if(i=Bw(t),!s)return Kv(t,i)}else{var d=Pr(t),p=d==oS||d==TD;if(cn(t))return Nw(t,s);if(d==iS||d==aS||p&&!a){if(i=u||p?{}:Xw(t),!s)return u?Ow(t,Pw(i,t)):Mw(t,Rw(i,t))}else{if(!Ce[d])return a?t:{};i=Qw(t,d,s)}}o||(o=new Fn);var h=o.get(t);if(h)return h;o.set(t,i),nS(t)?t.forEach(function(A){i.add(yl(A,e,r,A,t,o))}):eS(t)&&t.forEach(function(A,C){i.set(C,yl(A,e,r,C,t,o))});var w=l?u?dl:ji:u?Nn:Se,S=c?void 0:w(t);return el(S||t,function(A,C){S&&(C=A,A=t[C]),bn(i,C,yl(A,e,r,C,t,o))}),i}var sS=yl;var GD=4;function BD(t){return sS(t,GD)}var $e=BD;function HD(t){for(var e=-1,r=t==null?0:t.length,n=0,a=[];++e<r;){var o=t[e];o&&(a[n++]=o)}return a}var Ur=HD;var UD="__lodash_hash_undefined__";function qD(t){return this.__data__.set(t,UD),this}var uS=qD;function jD(t){return this.__data__.has(t)}var lS=jD;function hl(t){var e=-1,r=t==null?0:t.length;for(this.__data__=new $a;++e<r;)this.add(t[e])}hl.prototype.add=hl.prototype.push=uS;hl.prototype.has=lS;var xo=hl;function VD(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}var gl=VD;function YD(t,e){return t.has(e)}var Ao=YD;var QD=1,XD=2;function JD(t,e,r,n,a,o){var i=r&QD,s=t.length,u=e.length;if(s!=u&&!(i&&u>s))return!1;var l=o.get(t),c=o.get(e);if(l&&c)return l==e&&c==t;var d=-1,p=!0,h=r&XD?new xo:void 0;for(o.set(t,e),o.set(e,t);++d<s;){var w=t[d],S=e[d];if(n)var A=i?n(S,w,d,e,t,o):n(w,S,d,t,e,o);if(A!==void 0){if(A)continue;p=!1;break}if(h){if(!gl(e,function(C,g){if(!Ao(h,g)&&(w===C||a(w,C,r,n,o)))return h.push(g)})){p=!1;break}}else if(!(w===S||a(w,S,r,n,o))){p=!1;break}}return o.delete(t),o.delete(e),p}var ml=JD;function ZD(t){var e=-1,r=Array(t.size);return t.forEach(function(n,a){r[++e]=[a,n]}),r}var cS=ZD;function eN(t){var e=-1,r=Array(t.size);return t.forEach(function(n){r[++e]=n}),r}var ko=eN;var tN=1,rN=2,nN="[object Boolean]",aN="[object Date]",oN="[object Error]",iN="[object Map]",sN="[object Number]",uN="[object RegExp]",lN="[object Set]",cN="[object String]",dN="[object Symbol]",pN="[object ArrayBuffer]",fN="[object DataView]",dS=pt?pt.prototype:void 0,Ff=dS?dS.valueOf:void 0;function yN(t,e,r,n,a,o,i){switch(r){case fN:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case pN:return!(t.byteLength!=e.byteLength||!o(new $o(t),new $o(e)));case nN:case aN:case sN:return Fr(+t,+e);case oN:return t.name==e.name&&t.message==e.message;case uN:case cN:return t==e+"";case iN:var s=cS;case lN:var u=n&tN;if(s||(s=ko),t.size!=e.size&&!u)return!1;var l=i.get(t);if(l)return l==e;n|=rN,i.set(t,e);var c=ml(s(t),s(e),n,a,o,i);return i.delete(t),c;case dN:if(Ff)return Ff.call(t)==Ff.call(e)}return!1}var pS=yN;var hN=1,gN=Object.prototype,mN=gN.hasOwnProperty;function vN(t,e,r,n,a,o){var i=r&hN,s=ji(t),u=s.length,l=ji(e),c=l.length;if(u!=c&&!i)return!1;for(var d=u;d--;){var p=s[d];if(!(i?p in e:mN.call(e,p)))return!1}var h=o.get(t),w=o.get(e);if(h&&w)return h==e&&w==t;var S=!0;o.set(t,e),o.set(e,t);for(var A=i;++d<u;){p=s[d];var C=t[p],g=e[p];if(n)var y=i?n(g,C,p,e,t,o):n(C,g,p,t,e,o);if(!(y===void 0?C===g||a(C,g,r,n,o):y)){S=!1;break}A||(A=p=="constructor")}if(S&&!A){var $=t.constructor,K=e.constructor;$!=K&&"constructor"in t&&"constructor"in e&&!(typeof $=="function"&&$ instanceof $&&typeof K=="function"&&K instanceof K)&&(S=!1)}return o.delete(t),o.delete(e),S}var fS=vN;var wN=1,yS="[object Arguments]",hS="[object Array]",vl="[object Object]",SN=Object.prototype,gS=SN.hasOwnProperty;function CN(t,e,r,n,a,o){var i=F(t),s=F(e),u=i?hS:Pr(t),l=s?hS:Pr(e);u=u==yS?vl:u,l=l==yS?vl:l;var c=u==vl,d=l==vl,p=u==l;if(p&&cn(t)){if(!cn(e))return!1;i=!0,c=!1}if(p&&!c)return o||(o=new Fn),i||co(t)?ml(t,e,r,n,a,o):pS(t,e,u,r,n,a,o);if(!(r&wN)){var h=c&&gS.call(t,"__wrapped__"),w=d&&gS.call(e,"__wrapped__");if(h||w){var S=h?t.value():t,A=w?e.value():e;return o||(o=new Fn),a(S,A,r,n,o)}}return p?(o||(o=new Fn),fS(t,e,r,n,a,o)):!1}var mS=CN;function vS(t,e,r,n,a){return t===e?!0:t==null||e==null||!Je(t)&&!Je(e)?t!==t&&e!==e:mS(t,e,r,n,vS,a)}var wl=vS;var $N=1,TN=2;function xN(t,e,r,n){var a=r.length,o=a,i=!n;if(t==null)return!o;for(t=Object(t);a--;){var s=r[a];if(i&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++a<o;){s=r[a];var u=s[0],l=t[u],c=s[1];if(i&&s[2]){if(l===void 0&&!(u in t))return!1}else{var d=new Fn;if(n)var p=n(l,c,u,t,e,d);if(!(p===void 0?wl(c,l,$N|TN,n,d):p))return!1}}return!0}var wS=xN;function AN(t){return t===t&&!ze(t)}var Sl=AN;function kN(t){for(var e=Se(t),r=e.length;r--;){var n=e[r],a=t[n];e[r]=[n,a,Sl(a)]}return e}var SS=kN;function IN(t,e){return function(r){return r==null?!1:r[t]===e&&(e!==void 0||t in Object(r))}}var Cl=IN;function RN(t){var e=SS(t);return e.length==1&&e[0][2]?Cl(e[0][0],e[0][1]):function(r){return r===t||wS(r,t,e)}}var CS=RN;function PN(t,e){return t!=null&&e in Object(t)}var $S=PN;function KN(t,e,r){e=Ln(e,t);for(var n=-1,a=e.length,o=!1;++n<a;){var i=Hr(e[n]);if(!(o=t!=null&&r(t,i)))break;t=t[i]}return o||++n!=a?o:(a=t==null?0:t.length,!!a&&lo(a)&&Kn(i,a)&&(F(t)||Dn(t)))}var $l=KN;function bN(t,e){return t!=null&&$l(t,e,$S)}var TS=bN;var EN=1,DN=2;function NN(t,e){return po(t)&&Sl(e)?Cl(Hr(t),e):function(r){var n=vw(r,t);return n===void 0&&n===e?TS(r,t):wl(e,n,EN|DN)}}var xS=NN;function _N(t){return function(e){return e?.[t]}}var AS=_N;function MN(t){return function(e){return go(e,t)}}var kS=MN;function ON(t){return po(t)?AS(Hr(t)):kS(t)}var IS=ON;function zN(t){return typeof t=="function"?t:t==null?Xt:typeof t=="object"?F(t)?xS(t[0],t[1]):CS(t):IS(t)}var Ue=zN;function LN(t,e,r,n){for(var a=-1,o=t==null?0:t.length;++a<o;){var i=t[a];e(n,i,r(i),t)}return n}var RS=LN;function FN(t){return function(e,r,n){for(var a=-1,o=Object(e),i=n(e),s=i.length;s--;){var u=i[t?s:++a];if(r(o[u],u,o)===!1)break}return e}}var PS=FN;var WN=PS(),KS=WN;function GN(t,e){return t&&KS(t,e,Se)}var bS=GN;function BN(t,e){return function(r,n){if(r==null)return r;if(!rt(r))return t(r,n);for(var a=r.length,o=e?a:-1,i=Object(r);(e?o--:++o<a)&&n(i[o],o,i)!==!1;);return r}}var ES=BN;var HN=ES(bS),Zt=HN;function UN(t,e,r,n){return Zt(t,function(a,o,i){e(n,a,r(a),i)}),n}var DS=UN;function qN(t,e){return function(r,n){var a=F(r)?RS:DS,o=e?e():{};return a(r,t,Ue(n,2),o)}}var NS=qN;var _S=Object.prototype,jN=_S.hasOwnProperty,VN=uo(function(t,e){t=Object(t);var r=-1,n=e.length,a=n>2?e[2]:void 0;for(a&&En(e[0],e[1],a)&&(n=1);++r<n;)for(var o=e[r],i=Nn(o),s=-1,u=i.length;++s<u;){var l=i[s],c=t[l];(c===void 0||Fr(c,_S[l])&&!jN.call(t,l))&&(t[l]=o[l])}return t}),Io=VN;function YN(t){return Je(t)&&rt(t)}var Wf=YN;function QN(t,e,r){for(var n=-1,a=t==null?0:t.length;++n<a;)if(r(e,t[n]))return!0;return!1}var Tl=QN;var XN=200;function JN(t,e,r,n){var a=-1,o=rl,i=!0,s=t.length,u=[],l=e.length;if(!s)return u;r&&(e=zr(e,Br(r))),n?(o=Tl,i=!1):e.length>=XN&&(o=Ao,i=!1,e=new xo(e));e:for(;++a<s;){var c=t[a],d=r==null?c:r(c);if(c=n||c!==0?c:0,i&&d===d){for(var p=l;p--;)if(e[p]===d)continue e;u.push(c)}else o(e,d,n)||u.push(c)}return u}var MS=JN;var ZN=uo(function(t,e){return Wf(t)?MS(t,vo(e,1,Wf,!0)):[]}),Gn=ZN;function e_(t){var e=t==null?0:t.length;return e?t[e-1]:void 0}var qr=e_;function t_(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:Lr(e),sl(t,e<0?0:e,n)):[]}var et=t_;function r_(t,e,r){var n=t==null?0:t.length;return n?(e=r||e===void 0?1:Lr(e),e=n-e,sl(t,0,e<0?0:e)):[]}var pn=r_;function n_(t){return typeof t=="function"?t:Xt}var OS=n_;function a_(t,e){var r=F(t)?el:Zt;return r(t,OS(e))}var _=a_;function o_(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(!e(t[r],r,t))return!1;return!0}var zS=o_;function i_(t,e){var r=!0;return Zt(t,function(n,a,o){return r=!!e(n,a,o),r}),r}var LS=i_;function s_(t,e,r){var n=F(t)?zS:LS;return r&&En(t,e,r)&&(e=void 0),n(t,Ue(e,3))}var Rt=s_;function u_(t,e){var r=[];return Zt(t,function(n,a,o){e(n,a,o)&&r.push(n)}),r}var xl=u_;function l_(t,e){var r=F(t)?So:xl;return r(t,Ue(e,3))}var ft=l_;function c_(t){return function(e,r,n){var a=Object(e);if(!rt(e)){var o=Ue(r,3);e=Se(e),r=function(s){return o(a[s],s,a)}}var i=t(e,r,n);return i>-1?a[o?e[i]:i]:void 0}}var FS=c_;var d_=Math.max;function p_(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var a=r==null?0:Lr(r);return a<0&&(a=d_(n+a,0)),tl(t,Ue(e,3),a)}var WS=p_;var f_=FS(WS),jr=f_;function y_(t){return t&&t.length?t[0]:void 0}var yt=y_;function h_(t,e){var r=-1,n=rt(t)?Array(t.length):[];return Zt(t,function(a,o,i){n[++r]=e(a,o,i)}),n}var GS=h_;function g_(t,e){var r=F(t)?zr:GS;return r(t,Ue(e,3))}var b=g_;function m_(t,e){return vo(b(t,e),1)}var $t=m_;var v_=Object.prototype,w_=v_.hasOwnProperty,S_=NS(function(t,e,r){w_.call(t,r)?t[r].push(e):so(t,r,[e])}),Gf=S_;var C_=Object.prototype,$_=C_.hasOwnProperty;function T_(t,e){return t!=null&&$_.call(t,e)}var BS=T_;function x_(t,e){return t!=null&&$l(t,e,BS)}var z=x_;var A_="[object String]";function k_(t){return typeof t=="string"||!F(t)&&Je(t)&&zt(t)==A_}var ut=k_;function I_(t,e){return zr(e,function(r){return t[r]})}var HS=I_;function R_(t){return t==null?[]:HS(t,Se(t))}var ge=R_;var P_=Math.max;function K_(t,e,r,n){t=rt(t)?t:ge(t),r=r&&!n?Lr(r):0;var a=t.length;return r<0&&(r=P_(a+r,0)),ut(t)?r<=a&&t.indexOf(e,r)>-1:!!a&&io(t,e,r)>-1}var be=K_;var b_=Math.max;function E_(t,e,r){var n=t==null?0:t.length;if(!n)return-1;var a=r==null?0:Lr(r);return a<0&&(a=b_(n+a,0)),io(t,e,a)}var Al=E_;var D_="[object Map]",N_="[object Set]",__=Object.prototype,M_=__.hasOwnProperty;function O_(t){if(t==null)return!0;if(rt(t)&&(F(t)||typeof t=="string"||typeof t.splice=="function"||cn(t)||co(t)||Dn(t)))return!t.length;var e=Pr(t);if(e==D_||e==N_)return!t.size;if(Gr(t))return!ol(t).length;for(var r in t)if(M_.call(t,r))return!1;return!0}var J=O_;var z_="[object RegExp]";function L_(t){return Je(t)&&zt(t)==z_}var US=L_;var qS=hr&&hr.isRegExp,F_=qS?Br(qS):US,gr=F_;function W_(t){return t===void 0}var Pt=W_;function G_(t,e){return t<e}var jS=G_;function B_(t,e,r){for(var n=-1,a=t.length;++n<a;){var o=t[n],i=e(o);if(i!=null&&(s===void 0?i===i&&!Or(i):r(i,s)))var s=i,u=o}return u}var VS=B_;function H_(t){return t&&t.length?VS(t,Xt,jS):void 0}var YS=H_;var U_="Expected a function";function q_(t){if(typeof t!="function")throw new TypeError(U_);return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}var QS=q_;function j_(t,e,r,n){if(!ze(t))return t;e=Ln(e,t);for(var a=-1,o=e.length,i=o-1,s=t;s!=null&&++a<o;){var u=Hr(e[a]),l=r;if(u==="__proto__"||u==="constructor"||u==="prototype")return t;if(a!=i){var c=s[u];l=n?n(c,u,s):void 0,l===void 0&&(l=ze(c)?c:Kn(e[a+1])?[]:{})}bn(s,u,l),s=s[u]}return t}var XS=j_;function V_(t,e,r){for(var n=-1,a=e.length,o={};++n<a;){var i=e[n],s=go(t,i);r(s,i)&&XS(o,Ln(i,t),s)}return o}var JS=V_;function Y_(t,e){if(t==null)return{};var r=zr(dl(t),function(n){return[n]});return e=Ue(e),JS(t,r,function(n,a){return e(n,a[0])})}var er=Y_;function Q_(t,e,r,n,a){return a(t,function(o,i,s){r=n?(n=!1,o):e(r,o,i,s)}),r}var ZS=Q_;function X_(t,e,r){var n=F(t)?$w:ZS,a=arguments.length<3;return n(t,Ue(e,4),r,a,Zt)}var Fe=X_;function J_(t,e){var r=F(t)?So:xl;return r(t,QS(Ue(e,3)))}var Bn=J_;function Z_(t,e){var r;return Zt(t,function(n,a,o){return r=e(n,a,o),!r}),!!r}var eC=Z_;function eM(t,e,r){var n=F(t)?gl:eC;return r&&En(t,e,r)&&(e=void 0),n(t,Ue(e,3))}var Vi=eM;var tM=1/0,rM=Wn&&1/ko(new Wn([,-0]))[1]==tM?function(t){return new Wn(t)}:Le,tC=rM;var nM=200;function aM(t,e,r){var n=-1,a=rl,o=t.length,i=!0,s=[],u=s;if(r)i=!1,a=Tl;else if(o>=nM){var l=e?null:tC(t);if(l)return ko(l);i=!1,a=Ao,u=new xo}else u=e?[]:s;e:for(;++n<o;){var c=t[n],d=e?e(c):c;if(c=r||c!==0?c:0,i&&d===d){for(var p=u.length;p--;)if(u[p]===d)continue e;e&&u.push(d),s.push(c)}else a(u,d,r)||(u!==s&&u.push(d),s.push(c))}return s}var kl=aM;function oM(t){return t&&t.length?kl(t):[]}var Ro=oM;function iM(t,e){return t&&t.length?kl(t,Ue(e,2)):[]}var rC=iM;function Po(t){console&&console.error&&console.error(`Error: ${t}`)}function Yi(t){console&&console.warn&&console.warn(`Warning: ${t}`)}function Qi(t){let e=new Date().getTime(),r=t();return{time:new Date().getTime()-e,value:r}}function Xi(t){function e(){}e.prototype=t;let r=new e;function n(){return typeof r.bar}return n(),n(),t;(0,eval)(t)}function sM(t){return uM(t)?t.LABEL:t.name}function uM(t){return ut(t.LABEL)&&t.LABEL!==""}var lr=class{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){this._definition=e}accept(e){e.visit(this),_(this.definition,r=>{r.accept(e)})}},fe=class extends lr{constructor(e){super([]),this.idx=1,Ct(this,er(e,r=>r!==void 0))}set definition(e){}get definition(){return this.referencedRule!==void 0?this.referencedRule.definition:[]}accept(e){e.visit(this)}},Ft=class extends lr{constructor(e){super(e.definition),this.orgText="",Ct(this,er(e,r=>r!==void 0))}},Te=class extends lr{constructor(e){super(e.definition),this.ignoreAmbiguities=!1,Ct(this,er(e,r=>r!==void 0))}},ye=class extends lr{constructor(e){super(e.definition),this.idx=1,Ct(this,er(e,r=>r!==void 0))}},xe=class extends lr{constructor(e){super(e.definition),this.idx=1,Ct(this,er(e,r=>r!==void 0))}},Ae=class extends lr{constructor(e){super(e.definition),this.idx=1,Ct(this,er(e,r=>r!==void 0))}},ae=class extends lr{constructor(e){super(e.definition),this.idx=1,Ct(this,er(e,r=>r!==void 0))}},ve=class extends lr{constructor(e){super(e.definition),this.idx=1,Ct(this,er(e,r=>r!==void 0))}},we=class extends lr{get definition(){return this._definition}set definition(e){this._definition=e}constructor(e){super(e.definition),this.idx=1,this.ignoreAmbiguities=!1,this.hasPredicates=!1,Ct(this,er(e,r=>r!==void 0))}},Z=class{constructor(e){this.idx=1,Ct(this,er(e,r=>r!==void 0))}accept(e){e.visit(this)}};function Il(t){return b(t,Ko)}function Ko(t){function e(r){return b(r,Ko)}if(t instanceof fe){let r={type:"NonTerminal",name:t.nonTerminalName,idx:t.idx};return ut(t.label)&&(r.label=t.label),r}else{if(t instanceof Te)return{type:"Alternative",definition:e(t.definition)};if(t instanceof ye)return{type:"Option",idx:t.idx,definition:e(t.definition)};if(t instanceof xe)return{type:"RepetitionMandatory",idx:t.idx,definition:e(t.definition)};if(t instanceof Ae)return{type:"RepetitionMandatoryWithSeparator",idx:t.idx,separator:Ko(new Z({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof ve)return{type:"RepetitionWithSeparator",idx:t.idx,separator:Ko(new Z({terminalType:t.separator})),definition:e(t.definition)};if(t instanceof ae)return{type:"Repetition",idx:t.idx,definition:e(t.definition)};if(t instanceof we)return{type:"Alternation",idx:t.idx,definition:e(t.definition)};if(t instanceof Z){let r={type:"Terminal",name:t.terminalType.name,label:sM(t.terminalType),idx:t.idx};ut(t.label)&&(r.terminalLabel=t.label);let n=t.terminalType.PATTERN;return t.terminalType.PATTERN&&(r.pattern=gr(n)?n.source:n),r}else{if(t instanceof Ft)return{type:"Rule",name:t.name,orgText:t.orgText,definition:e(t.definition)};throw Error("non exhaustive match")}}}var Wt=class{visit(e){let r=e;switch(r.constructor){case fe:return this.visitNonTerminal(r);case Te:return this.visitAlternative(r);case ye:return this.visitOption(r);case xe:return this.visitRepetitionMandatory(r);case Ae:return this.visitRepetitionMandatoryWithSeparator(r);case ve:return this.visitRepetitionWithSeparator(r);case ae:return this.visitRepetition(r);case we:return this.visitAlternation(r);case Z:return this.visitTerminal(r);case Ft:return this.visitRule(r);default:throw Error("non exhaustive match")}}visitNonTerminal(e){}visitAlternative(e){}visitOption(e){}visitRepetition(e){}visitRepetitionMandatory(e){}visitRepetitionMandatoryWithSeparator(e){}visitRepetitionWithSeparator(e){}visitAlternation(e){}visitTerminal(e){}visitRule(e){}};function Bf(t){return t instanceof Te||t instanceof ye||t instanceof ae||t instanceof xe||t instanceof Ae||t instanceof ve||t instanceof Z||t instanceof Ft}function xa(t,e=[]){return t instanceof ye||t instanceof ae||t instanceof ve?!0:t instanceof we?Vi(t.definition,n=>xa(n,e)):t instanceof fe&&be(e,t)?!1:t instanceof lr?(t instanceof fe&&e.push(t),Rt(t.definition,n=>xa(n,e))):!1}function Hf(t){return t instanceof we}function tr(t){if(t instanceof fe)return"SUBRULE";if(t instanceof ye)return"OPTION";if(t instanceof we)return"OR";if(t instanceof xe)return"AT_LEAST_ONE";if(t instanceof Ae)return"AT_LEAST_ONE_SEP";if(t instanceof ve)return"MANY_SEP";if(t instanceof ae)return"MANY";if(t instanceof Z)return"CONSUME";throw Error("non exhaustive match")}var fn=class{walk(e,r=[]){_(e.definition,(n,a)=>{let o=et(e.definition,a+1);if(n instanceof fe)this.walkProdRef(n,o,r);else if(n instanceof Z)this.walkTerminal(n,o,r);else if(n instanceof Te)this.walkFlat(n,o,r);else if(n instanceof ye)this.walkOption(n,o,r);else if(n instanceof xe)this.walkAtLeastOne(n,o,r);else if(n instanceof Ae)this.walkAtLeastOneSep(n,o,r);else if(n instanceof ve)this.walkManySep(n,o,r);else if(n instanceof ae)this.walkMany(n,o,r);else if(n instanceof we)this.walkOr(n,o,r);else throw Error("non exhaustive match")})}walkTerminal(e,r,n){}walkProdRef(e,r,n){}walkFlat(e,r,n){let a=r.concat(n);this.walk(e,a)}walkOption(e,r,n){let a=r.concat(n);this.walk(e,a)}walkAtLeastOne(e,r,n){let a=[new ye({definition:e.definition})].concat(r,n);this.walk(e,a)}walkAtLeastOneSep(e,r,n){let a=nC(e,r,n);this.walk(e,a)}walkMany(e,r,n){let a=[new ye({definition:e.definition})].concat(r,n);this.walk(e,a)}walkManySep(e,r,n){let a=nC(e,r,n);this.walk(e,a)}walkOr(e,r,n){let a=r.concat(n);_(e.definition,o=>{let i=new Te({definition:[o]});this.walk(i,a)})}};function nC(t,e,r){return[new ye({definition:[new Z({terminalType:t.separator})].concat(t.definition)})].concat(e,r)}function Aa(t){if(t instanceof fe)return Aa(t.referencedRule);if(t instanceof Z)return dM(t);if(Bf(t))return lM(t);if(Hf(t))return cM(t);throw Error("non exhaustive match")}function lM(t){let e=[],r=t.definition,n=0,a=r.length>n,o,i=!0;for(;a&&i;)o=r[n],i=xa(o),e=e.concat(Aa(o)),n=n+1,a=r.length>n;return Ro(e)}function cM(t){let e=b(t.definition,r=>Aa(r));return Ro(Ze(e))}function dM(t){return[t.terminalType]}var Rl="_~IN~_";var Uf=class extends fn{constructor(e){super(),this.topProd=e,this.follows={}}startWalking(){return this.walk(this.topProd),this.follows}walkTerminal(e,r,n){}walkProdRef(e,r,n){let a=pM(e.referencedRule,e.idx)+this.topProd.name,o=r.concat(n),i=new Te({definition:o}),s=Aa(i);this.follows[a]=s}};function aC(t){let e={};return _(t,r=>{let n=new Uf(r).startWalking();Ct(e,n)}),e}function pM(t,e){return t.name+e+Rl}var Pl={},fM=new ga;function bo(t){let e=t.toString();if(Pl.hasOwnProperty(e))return Pl[e];{let r=fM.pattern(e);return Pl[e]=r,r}}function oC(){Pl={}}var sC="Complement Sets are not supported for first char optimization",Ji=`Unable to use "first char" lexer optimizations:
`;function uC(t,e=!1){try{let r=bo(t);return qf(r.value,{},r.flags.ignoreCase)}catch(r){if(r.message===sC)e&&Yi(`${Ji}	Unable to optimize: < ${t.toString()} >
	Complement Sets cannot be automatically optimized.
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#COMPLEMENT for details.`);else{let n="";e&&(n=`
	This will disable the lexer's first char optimizations.
	See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#REGEXP_PARSING for details.`),Po(`${Ji}
	Failed parsing: < ${t.toString()} >
	Using the @chevrotain/regexp-to-ast library
	Please open an issue at: https://github.com/chevrotain/chevrotain/issues`+n)}}return[]}function qf(t,e,r){switch(t.type){case"Disjunction":for(let a=0;a<t.value.length;a++)qf(t.value[a],e,r);break;case"Alternative":let n=t.value;for(let a=0;a<n.length;a++){let o=n[a];switch(o.type){case"EndAnchor":case"GroupBackReference":case"Lookahead":case"NegativeLookahead":case"StartAnchor":case"WordBoundary":case"NonWordBoundary":continue}let i=o;switch(i.type){case"Character":Kl(i.value,e,r);break;case"Set":if(i.complement===!0)throw Error(sC);_(i.value,u=>{if(typeof u=="number")Kl(u,e,r);else{let l=u;if(r===!0)for(let c=l.from;c<=l.to;c++)Kl(c,e,r);else{for(let c=l.from;c<=l.to&&c<Eo;c++)Kl(c,e,r);if(l.to>=Eo){let c=l.from>=Eo?l.from:Eo,d=l.to,p=Vr(c),h=Vr(d);for(let w=p;w<=h;w++)e[w]=w}}}});break;case"Group":qf(i.value,e,r);break;default:throw Error("Non Exhaustive Match")}let s=i.quantifier!==void 0&&i.quantifier.atLeast===0;if(i.type==="Group"&&jf(i)===!1||i.type!=="Group"&&s===!1)break}break;default:throw Error("non exhaustive match!")}return ge(e)}function Kl(t,e,r){let n=Vr(t);e[n]=n,r===!0&&yM(t,e)}function yM(t,e){let r=String.fromCharCode(t),n=r.toUpperCase();if(n!==r){let a=Vr(n.charCodeAt(0));e[a]=a}else{let a=r.toLowerCase();if(a!==r){let o=Vr(a.charCodeAt(0));e[o]=o}}}function iC(t,e){return jr(t.value,r=>{if(typeof r=="number")return be(e,r);{let n=r;return jr(e,a=>n.from<=a&&a<=n.to)!==void 0}})}function jf(t){let e=t.quantifier;return e&&e.atLeast===0?!0:t.value?F(t.value)?Rt(t.value,jf):jf(t.value):!1}var Vf=class extends Mr{constructor(e){super(),this.targetCharCodes=e,this.found=!1}visitChildren(e){if(this.found!==!0){switch(e.type){case"Lookahead":this.visitLookahead(e);return;case"NegativeLookahead":this.visitNegativeLookahead(e);return}super.visitChildren(e)}}visitCharacter(e){be(this.targetCharCodes,e.value)&&(this.found=!0)}visitSet(e){e.complement?iC(e,this.targetCharCodes)===void 0&&(this.found=!0):iC(e,this.targetCharCodes)!==void 0&&(this.found=!0)}};function bl(t,e){if(e instanceof RegExp){let r=bo(e),n=new Vf(t);return n.visit(r),n.found}else return jr(e,r=>be(t,r.charCodeAt(0)))!==void 0}var ka="PATTERN",Do="defaultMode",El="modes",Qf=typeof new RegExp("(?:)").sticky=="boolean";function dC(t,e){e=Io(e,{useSticky:Qf,debug:!1,safeMode:!1,positionTracking:"full",lineTerminatorCharacters:["\r",`
`],tracer:(g,y)=>y()});let r=e.tracer;r("initCharCodeToOptimizedIndexMap",()=>{EM()});let n;r("Reject Lexer.NA",()=>{n=Bn(t,g=>g[ka]===qe.NA)});let a=!1,o;r("Transform Patterns",()=>{a=!1,o=b(n,g=>{let y=g[ka];if(gr(y)){let $=y.source;return $.length===1&&$!=="^"&&$!=="$"&&$!=="."&&!y.ignoreCase?$:$.length===2&&$[0]==="\\"&&!be(["d","D","s","S","t","r","n","t","0","c","b","B","f","v","w","W"],$[1])?$[1]:e.useSticky?cC(y):lC(y)}else{if(Lt(y))return a=!0,{exec:y};if(typeof y=="object")return a=!0,y;if(typeof y=="string"){if(y.length===1)return y;{let $=y.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),K=new RegExp($);return e.useSticky?cC(K):lC(K)}}else throw Error("non exhaustive match")}})});let i,s,u,l,c;r("misc mapping",()=>{i=b(n,g=>g.tokenTypeIdx),s=b(n,g=>{let y=g.GROUP;if(y!==qe.SKIPPED){if(ut(y))return y;if(Pt(y))return!1;throw Error("non exhaustive match")}}),u=b(n,g=>{let y=g.LONGER_ALT;if(y)return F(y)?b(y,K=>Al(n,K)):[Al(n,y)]}),l=b(n,g=>g.PUSH_MODE),c=b(n,g=>z(g,"POP_MODE"))});let d;r("Line Terminator Handling",()=>{let g=wC(e.lineTerminatorCharacters);d=b(n,y=>!1),e.positionTracking!=="onlyOffset"&&(d=b(n,y=>z(y,"LINE_BREAKS")?!!y.LINE_BREAKS:vC(y,g)===!1&&bl(g,y.PATTERN)))});let p,h,w,S;r("Misc Mapping #2",()=>{p=b(n,gC),h=b(o,KM),w=Fe(n,(g,y)=>{let $=y.GROUP;return ut($)&&$!==qe.SKIPPED&&(g[$]=[]),g},{}),S=b(o,(g,y)=>({pattern:o[y],longerAlt:u[y],canLineTerminator:d[y],isCustom:p[y],short:h[y],group:s[y],push:l[y],pop:c[y],tokenTypeIdx:i[y],tokenType:n[y]}))});let A=!0,C=[];return e.safeMode||r("First Char Optimization",()=>{C=Fe(n,(g,y,$)=>{if(typeof y.PATTERN=="string"){let K=y.PATTERN.charCodeAt(0),Q=Vr(K);Yf(g,Q,S[$])}else if(F(y.START_CHARS_HINT)){let K;_(y.START_CHARS_HINT,Q=>{let mt=typeof Q=="string"?Q.charCodeAt(0):Q,Qe=Vr(mt);K!==Qe&&(K=Qe,Yf(g,Qe,S[$]))})}else if(gr(y.PATTERN))if(y.PATTERN.unicode)A=!1,e.ensureOptimizations&&Po(`${Ji}	Unable to analyze < ${y.PATTERN.toString()} > pattern.
	The regexp unicode flag is not currently supported by the regexp-to-ast library.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNICODE_OPTIMIZE`);else{let K=uC(y.PATTERN,e.ensureOptimizations);J(K)&&(A=!1),_(K,Q=>{Yf(g,Q,S[$])})}else e.ensureOptimizations&&Po(`${Ji}	TokenType: <${y.name}> is using a custom token pattern without providing <start_chars_hint> parameter.
	This will disable the lexer's first char optimizations.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_OPTIMIZE`),A=!1;return g},[])}),{emptyGroups:w,patternIdxToConfig:S,charCodeToPatternIdxToConfig:C,hasCustom:a,canBeOptimized:A}}function pC(t,e){let r=[],n=gM(t);r=r.concat(n.errors);let a=mM(n.valid),o=a.valid;return r=r.concat(a.errors),r=r.concat(hM(o)),r=r.concat(AM(o)),r=r.concat(kM(o,e)),r=r.concat(IM(o)),r}function hM(t){let e=[],r=ft(t,n=>gr(n[ka]));return e=e.concat(wM(r)),e=e.concat($M(r)),e=e.concat(TM(r)),e=e.concat(xM(r)),e=e.concat(SM(r)),e}function gM(t){let e=ft(t,a=>!z(a,ka)),r=b(e,a=>({message:"Token Type: ->"+a.name+"<- missing static 'PATTERN' property",type:Ee.MISSING_PATTERN,tokenTypes:[a]})),n=Gn(t,e);return{errors:r,valid:n}}function mM(t){let e=ft(t,a=>{let o=a[ka];return!gr(o)&&!Lt(o)&&!z(o,"exec")&&!ut(o)}),r=b(e,a=>({message:"Token Type: ->"+a.name+"<- static 'PATTERN' can only be a RegExp, a Function matching the {CustomPatternMatcherFunc} type or an Object matching the {ICustomPattern} interface.",type:Ee.INVALID_PATTERN,tokenTypes:[a]})),n=Gn(t,e);return{errors:r,valid:n}}var vM=/[^\\][$]/;function wM(t){class e extends Mr{constructor(){super(...arguments),this.found=!1}visitEndAnchor(o){this.found=!0}}let r=ft(t,a=>{let o=a.PATTERN;try{let i=bo(o),s=new e;return s.visit(i),s.found}catch{return vM.test(o.source)}});return b(r,a=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+a.name+`<- static 'PATTERN' cannot contain end of input anchor '$'
	See chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Ee.EOI_ANCHOR_FOUND,tokenTypes:[a]}))}function SM(t){let e=ft(t,n=>n.PATTERN.test(""));return b(e,n=>({message:"Token Type: ->"+n.name+"<- static 'PATTERN' must not match an empty string",type:Ee.EMPTY_MATCH_PATTERN,tokenTypes:[n]}))}var CM=/[^\\[][\^]|^\^/;function $M(t){class e extends Mr{constructor(){super(...arguments),this.found=!1}visitStartAnchor(o){this.found=!0}}let r=ft(t,a=>{let o=a.PATTERN;try{let i=bo(o),s=new e;return s.visit(i),s.found}catch{return CM.test(o.source)}});return b(r,a=>({message:`Unexpected RegExp Anchor Error:
	Token Type: ->`+a.name+`<- static 'PATTERN' cannot contain start of input anchor '^'
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#ANCHORS	for details.`,type:Ee.SOI_ANCHOR_FOUND,tokenTypes:[a]}))}function TM(t){let e=ft(t,n=>{let a=n[ka];return a instanceof RegExp&&(a.multiline||a.global)});return b(e,n=>({message:"Token Type: ->"+n.name+"<- static 'PATTERN' may NOT contain global('g') or multiline('m')",type:Ee.UNSUPPORTED_FLAGS_FOUND,tokenTypes:[n]}))}function xM(t){let e=[],r=b(t,o=>Fe(t,(i,s)=>(o.PATTERN.source===s.PATTERN.source&&!be(e,s)&&s.PATTERN!==qe.NA&&(e.push(s),i.push(s)),i),[]));r=Ur(r);let n=ft(r,o=>o.length>1);return b(n,o=>{let i=b(o,u=>u.name);return{message:`The same RegExp pattern ->${yt(o).PATTERN}<-has been used in all of the following Token Types: ${i.join(", ")} <-`,type:Ee.DUPLICATE_PATTERNS_FOUND,tokenTypes:o}})}function AM(t){let e=ft(t,n=>{if(!z(n,"GROUP"))return!1;let a=n.GROUP;return a!==qe.SKIPPED&&a!==qe.NA&&!ut(a)});return b(e,n=>({message:"Token Type: ->"+n.name+"<- static 'GROUP' can only be Lexer.SKIPPED/Lexer.NA/A String",type:Ee.INVALID_GROUP_TYPE_FOUND,tokenTypes:[n]}))}function kM(t,e){let r=ft(t,a=>a.PUSH_MODE!==void 0&&!be(e,a.PUSH_MODE));return b(r,a=>({message:`Token Type: ->${a.name}<- static 'PUSH_MODE' value cannot refer to a Lexer Mode ->${a.PUSH_MODE}<-which does not exist`,type:Ee.PUSH_MODE_DOES_NOT_EXIST,tokenTypes:[a]}))}function IM(t){let e=[],r=Fe(t,(n,a,o)=>{let i=a.PATTERN;return i===qe.NA||(ut(i)?n.push({str:i,idx:o,tokenType:a}):gr(i)&&PM(i)&&n.push({str:i.source,idx:o,tokenType:a})),n},[]);return _(t,(n,a)=>{_(r,({str:o,idx:i,tokenType:s})=>{if(a<i&&RM(o,n.PATTERN)){let u=`Token: ->${s.name}<- can never be matched.
Because it appears AFTER the Token Type ->${n.name}<-in the lexer's definition.
See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#UNREACHABLE`;e.push({message:u,type:Ee.UNREACHABLE_PATTERN,tokenTypes:[n,s]})}})}),e}function RM(t,e){if(gr(e)){let r=e.exec(t);return r!==null&&r.index===0}else{if(Lt(e))return e(t,0,[],{});if(z(e,"exec"))return e.exec(t,0,[],{});if(typeof e=="string")return e===t;throw Error("non exhaustive match")}}function PM(t){return jr([".","\\","[","]","|","^","$","(",")","?","*","+","{"],r=>t.source.indexOf(r)!==-1)===void 0}function lC(t){let e=t.ignoreCase?"i":"";return new RegExp(`^(?:${t.source})`,e)}function cC(t){let e=t.ignoreCase?"iy":"y";return new RegExp(`${t.source}`,e)}function fC(t,e,r){let n=[];return z(t,Do)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+Do+`> property in its definition
`,type:Ee.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE}),z(t,El)||n.push({message:"A MultiMode Lexer cannot be initialized without a <"+El+`> property in its definition
`,type:Ee.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY}),z(t,El)&&z(t,Do)&&!z(t.modes,t.defaultMode)&&n.push({message:`A MultiMode Lexer cannot be initialized with a ${Do}: <${t.defaultMode}>which does not exist
`,type:Ee.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST}),z(t,El)&&_(t.modes,(a,o)=>{_(a,(i,s)=>{if(Pt(i))n.push({message:`A Lexer cannot be initialized using an undefined Token Type. Mode:<${o}> at index: <${s}>
`,type:Ee.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED});else if(z(i,"LONGER_ALT")){let u=F(i.LONGER_ALT)?i.LONGER_ALT:[i.LONGER_ALT];_(u,l=>{!Pt(l)&&!be(a,l)&&n.push({message:`A MultiMode Lexer cannot be initialized with a longer_alt <${l.name}> on token <${i.name}> outside of mode <${o}>
`,type:Ee.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE})})}})}),n}function yC(t,e,r){let n=[],a=!1,o=Ur(Ze(ge(t.modes))),i=Bn(o,u=>u[ka]===qe.NA),s=wC(r);return e&&_(i,u=>{let l=vC(u,s);if(l!==!1){let d={message:bM(u,l),type:l.issue,tokenType:u};n.push(d)}else z(u,"LINE_BREAKS")?u.LINE_BREAKS===!0&&(a=!0):bl(s,u.PATTERN)&&(a=!0)}),e&&!a&&n.push({message:`Warning: No LINE_BREAKS Found.
	This Lexer has been defined to track line and column information,
	But none of the Token Types can be identified as matching a line terminator.
	See https://chevrotain.io/docs/guide/resolving_lexer_errors.html#LINE_BREAKS 
	for details.`,type:Ee.NO_LINE_BREAKS_FLAGS}),n}function hC(t){let e={},r=Se(t);return _(r,n=>{let a=t[n];if(F(a))e[n]=[];else throw Error("non exhaustive match")}),e}function gC(t){let e=t.PATTERN;if(gr(e))return!1;if(Lt(e))return!0;if(z(e,"exec"))return!0;if(ut(e))return!1;throw Error("non exhaustive match")}function KM(t){return ut(t)&&t.length===1?t.charCodeAt(0):!1}var mC={test:function(t){let e=t.length;for(let r=this.lastIndex;r<e;r++){let n=t.charCodeAt(r);if(n===10)return this.lastIndex=r+1,!0;if(n===13)return t.charCodeAt(r+1)===10?this.lastIndex=r+2:this.lastIndex=r+1,!0}return!1},lastIndex:0};function vC(t,e){if(z(t,"LINE_BREAKS"))return!1;if(gr(t.PATTERN)){try{bl(e,t.PATTERN)}catch(r){return{issue:Ee.IDENTIFY_TERMINATOR,errMsg:r.message}}return!1}else{if(ut(t.PATTERN))return!1;if(gC(t))return{issue:Ee.CUSTOM_LINE_BREAK};throw Error("non exhaustive match")}}function bM(t,e){if(e.issue===Ee.IDENTIFY_TERMINATOR)return`Warning: unable to identify line terminator usage in pattern.
	The problem is in the <${t.name}> Token Type
	 Root cause: ${e.errMsg}.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#IDENTIFY_TERMINATOR`;if(e.issue===Ee.CUSTOM_LINE_BREAK)return`Warning: A Custom Token Pattern should specify the <line_breaks> option.
	The problem is in the <${t.name}> Token Type
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#CUSTOM_LINE_BREAK`;throw Error("non exhaustive match")}function wC(t){return b(t,r=>ut(r)?r.charCodeAt(0):r)}function Yf(t,e,r){t[e]===void 0?t[e]=[r]:t[e].push(r)}var Eo=256,Dl=[];function Vr(t){return t<Eo?t:Dl[t]}function EM(){if(J(Dl)){Dl=new Array(65536);for(let t=0;t<65536;t++)Dl[t]=t>255?255+~~(t/255):t}}function yn(t,e){let r=t.tokenTypeIdx;return r===e.tokenTypeIdx?!0:e.isParent===!0&&e.categoryMatchesMap[r]===!0}function No(t,e){return t.tokenTypeIdx===e.tokenTypeIdx}var SC=1,$C={};function hn(t){let e=DM(t);NM(e),MM(e),_M(e),_(e,r=>{r.isParent=r.categoryMatches.length>0})}function DM(t){let e=$e(t),r=t,n=!0;for(;n;){r=Ur(Ze(b(r,o=>o.CATEGORIES)));let a=Gn(r,e);e=e.concat(a),J(a)?n=!1:r=a}return e}function NM(t){_(t,e=>{Xf(e)||($C[SC]=e,e.tokenTypeIdx=SC++),CC(e)&&!F(e.CATEGORIES)&&(e.CATEGORIES=[e.CATEGORIES]),CC(e)||(e.CATEGORIES=[]),OM(e)||(e.categoryMatches=[]),zM(e)||(e.categoryMatchesMap={})})}function _M(t){_(t,e=>{e.categoryMatches=[],_(e.categoryMatchesMap,(r,n)=>{e.categoryMatches.push($C[n].tokenTypeIdx)})})}function MM(t){_(t,e=>{TC([],e)})}function TC(t,e){_(t,r=>{e.categoryMatchesMap[r.tokenTypeIdx]=!0}),_(e.CATEGORIES,r=>{let n=t.concat(e);be(n,r)||TC(n,r)})}function Xf(t){return z(t,"tokenTypeIdx")}function CC(t){return z(t,"CATEGORIES")}function OM(t){return z(t,"categoryMatches")}function zM(t){return z(t,"categoryMatchesMap")}function xC(t){return z(t,"tokenTypeIdx")}var Jf={buildUnableToPopLexerModeMessage(t){return`Unable to pop Lexer Mode after encountering Token ->${t.image}<- The Mode Stack is empty`},buildUnexpectedCharactersMessage(t,e,r,n,a){return`unexpected character: ->${t.charAt(e)}<- at offset: ${e}, skipped ${r} characters.`}};var Ee;(function(t){t[t.MISSING_PATTERN=0]="MISSING_PATTERN",t[t.INVALID_PATTERN=1]="INVALID_PATTERN",t[t.EOI_ANCHOR_FOUND=2]="EOI_ANCHOR_FOUND",t[t.UNSUPPORTED_FLAGS_FOUND=3]="UNSUPPORTED_FLAGS_FOUND",t[t.DUPLICATE_PATTERNS_FOUND=4]="DUPLICATE_PATTERNS_FOUND",t[t.INVALID_GROUP_TYPE_FOUND=5]="INVALID_GROUP_TYPE_FOUND",t[t.PUSH_MODE_DOES_NOT_EXIST=6]="PUSH_MODE_DOES_NOT_EXIST",t[t.MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE=7]="MULTI_MODE_LEXER_WITHOUT_DEFAULT_MODE",t[t.MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY=8]="MULTI_MODE_LEXER_WITHOUT_MODES_PROPERTY",t[t.MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST=9]="MULTI_MODE_LEXER_DEFAULT_MODE_VALUE_DOES_NOT_EXIST",t[t.LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED=10]="LEXER_DEFINITION_CANNOT_CONTAIN_UNDEFINED",t[t.SOI_ANCHOR_FOUND=11]="SOI_ANCHOR_FOUND",t[t.EMPTY_MATCH_PATTERN=12]="EMPTY_MATCH_PATTERN",t[t.NO_LINE_BREAKS_FLAGS=13]="NO_LINE_BREAKS_FLAGS",t[t.UNREACHABLE_PATTERN=14]="UNREACHABLE_PATTERN",t[t.IDENTIFY_TERMINATOR=15]="IDENTIFY_TERMINATOR",t[t.CUSTOM_LINE_BREAK=16]="CUSTOM_LINE_BREAK",t[t.MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE=17]="MULTI_MODE_LEXER_LONGER_ALT_NOT_IN_CURRENT_MODE"})(Ee||(Ee={}));var Zi={deferDefinitionErrorsHandling:!1,positionTracking:"full",lineTerminatorsPattern:/\n|\r\n?/g,lineTerminatorCharacters:[`
`,"\r"],ensureOptimizations:!1,safeMode:!1,errorMessageProvider:Jf,traceInitPerf:!1,skipValidations:!1,recoveryEnabled:!0};Object.freeze(Zi);var qe=class{constructor(e,r=Zi){if(this.lexerDefinition=e,this.lexerDefinitionErrors=[],this.lexerDefinitionWarning=[],this.patternIdxToConfig={},this.charCodeToPatternIdxToConfig={},this.modes=[],this.emptyGroups={},this.trackStartLines=!0,this.trackEndLines=!0,this.hasCustom=!1,this.canModeBeOptimized={},this.TRACE_INIT=(a,o)=>{if(this.traceInitPerf===!0){this.traceInitIndent++;let i=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${i}--> <${a}>`);let{time:s,value:u}=Qi(o),l=s>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&l(`${i}<-- <${a}> time: ${s}ms`),this.traceInitIndent--,u}else return o()},typeof r=="boolean")throw Error(`The second argument to the Lexer constructor is now an ILexerConfig Object.
a boolean 2nd argument is no longer supported`);this.config=Ct({},Zi,r);let n=this.config.traceInitPerf;n===!0?(this.traceInitMaxIdent=1/0,this.traceInitPerf=!0):typeof n=="number"&&(this.traceInitMaxIdent=n,this.traceInitPerf=!0),this.traceInitIndent=-1,this.TRACE_INIT("Lexer Constructor",()=>{let a,o=!0;this.TRACE_INIT("Lexer Config handling",()=>{if(this.config.lineTerminatorsPattern===Zi.lineTerminatorsPattern)this.config.lineTerminatorsPattern=mC;else if(this.config.lineTerminatorCharacters===Zi.lineTerminatorCharacters)throw Error(`Error: Missing <lineTerminatorCharacters> property on the Lexer config.
	For details See: https://chevrotain.io/docs/guide/resolving_lexer_errors.html#MISSING_LINE_TERM_CHARS`);if(r.safeMode&&r.ensureOptimizations)throw Error('"safeMode" and "ensureOptimizations" flags are mutually exclusive.');this.trackStartLines=/full|onlyStart/i.test(this.config.positionTracking),this.trackEndLines=/full/i.test(this.config.positionTracking),F(e)?a={modes:{defaultMode:$e(e)},defaultMode:Do}:(o=!1,a=$e(e))}),this.config.skipValidations===!1&&(this.TRACE_INIT("performRuntimeChecks",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(fC(a,this.trackStartLines,this.config.lineTerminatorCharacters))}),this.TRACE_INIT("performWarningRuntimeChecks",()=>{this.lexerDefinitionWarning=this.lexerDefinitionWarning.concat(yC(a,this.trackStartLines,this.config.lineTerminatorCharacters))})),a.modes=a.modes?a.modes:{},_(a.modes,(s,u)=>{a.modes[u]=Bn(s,l=>Pt(l))});let i=Se(a.modes);if(_(a.modes,(s,u)=>{this.TRACE_INIT(`Mode: <${u}> processing`,()=>{if(this.modes.push(u),this.config.skipValidations===!1&&this.TRACE_INIT("validatePatterns",()=>{this.lexerDefinitionErrors=this.lexerDefinitionErrors.concat(pC(s,i))}),J(this.lexerDefinitionErrors)){hn(s);let l;this.TRACE_INIT("analyzeTokenTypes",()=>{l=dC(s,{lineTerminatorCharacters:this.config.lineTerminatorCharacters,positionTracking:r.positionTracking,ensureOptimizations:r.ensureOptimizations,safeMode:r.safeMode,tracer:this.TRACE_INIT})}),this.patternIdxToConfig[u]=l.patternIdxToConfig,this.charCodeToPatternIdxToConfig[u]=l.charCodeToPatternIdxToConfig,this.emptyGroups=Ct({},this.emptyGroups,l.emptyGroups),this.hasCustom=l.hasCustom||this.hasCustom,this.canModeBeOptimized[u]=l.canBeOptimized}})}),this.defaultMode=a.defaultMode,!J(this.lexerDefinitionErrors)&&!this.config.deferDefinitionErrorsHandling){let u=b(this.lexerDefinitionErrors,l=>l.message).join(`-----------------------
`);throw new Error(`Errors detected in definition of Lexer:
`+u)}_(this.lexerDefinitionWarning,s=>{Yi(s.message)}),this.TRACE_INIT("Choosing sub-methods implementations",()=>{if(Qf?(this.chopInput=Xt,this.match=this.matchWithTest):(this.updateLastIndex=Le,this.match=this.matchWithExec),o&&(this.handleModes=Le),this.trackStartLines===!1&&(this.computeNewColumn=Xt),this.trackEndLines===!1&&(this.updateTokenEndLineColumnLocation=Le),/full/i.test(this.config.positionTracking))this.createTokenInstance=this.createFullToken;else if(/onlyStart/i.test(this.config.positionTracking))this.createTokenInstance=this.createStartOnlyToken;else if(/onlyOffset/i.test(this.config.positionTracking))this.createTokenInstance=this.createOffsetOnlyToken;else throw Error(`Invalid <positionTracking> config option: "${this.config.positionTracking}"`);this.hasCustom?(this.addToken=this.addTokenUsingPush,this.handlePayload=this.handlePayloadWithCustom):(this.addToken=this.addTokenUsingMemberAccess,this.handlePayload=this.handlePayloadNoCustom)}),this.TRACE_INIT("Failed Optimization Warnings",()=>{let s=Fe(this.canModeBeOptimized,(u,l,c)=>(l===!1&&u.push(c),u),[]);if(r.ensureOptimizations&&!J(s))throw Error(`Lexer Modes: < ${s.join(", ")} > cannot be optimized.
	 Disable the "ensureOptimizations" lexer config flag to silently ignore this and run the lexer in an un-optimized mode.
	 Or inspect the console log for details on how to resolve these issues.`)}),this.TRACE_INIT("clearRegExpParserCache",()=>{oC()}),this.TRACE_INIT("toFastProperties",()=>{Xi(this)})})}tokenize(e,r=this.defaultMode){if(!J(this.lexerDefinitionErrors)){let a=b(this.lexerDefinitionErrors,o=>o.message).join(`-----------------------
`);throw new Error(`Unable to Tokenize because Errors detected in definition of Lexer:
`+a)}return this.tokenizeInternal(e,r)}tokenizeInternal(e,r){let n,a,o,i,s,u,l,c,d,p,h,w,S,A,C,g,y=e,$=y.length,K=0,Q=0,mt=this.hasCustom?0:Math.floor(e.length/10),Qe=new Array(mt),ir=[],Bt=this.trackStartLines?1:void 0,N=this.trackStartLines?1:void 0,x=hC(this.emptyGroups),W=this.trackStartLines,O=this.config.lineTerminatorsPattern,te=0,j=[],R=[],I=[],pe=[];Object.freeze(pe);let ue;function Nr(){return j}function ku(ct){let Ut=Vr(ct),An=R[Ut];return An===void 0?pe:An}let ip=ct=>{if(I.length===1&&ct.tokenType.PUSH_MODE===void 0){let Ut=this.config.errorMessageProvider.buildUnableToPopLexerModeMessage(ct);ir.push({offset:ct.startOffset,line:ct.startLine,column:ct.startColumn,length:ct.image.length,message:Ut})}else{I.pop();let Ut=qr(I);j=this.patternIdxToConfig[Ut],R=this.charCodeToPatternIdxToConfig[Ut],te=j.length;let An=this.canModeBeOptimized[Ut]&&this.config.safeMode===!1;R&&An?ue=ku:ue=Nr}};function Ii(ct){I.push(ct),R=this.charCodeToPatternIdxToConfig[ct],j=this.patternIdxToConfig[ct],te=j.length,te=j.length;let Ut=this.canModeBeOptimized[ct]&&this.config.safeMode===!1;R&&Ut?ue=ku:ue=Nr}Ii.call(this,r);let Ht,Iu=this.config.recoveryEnabled;for(;K<$;){u=null;let ct=y.charCodeAt(K),Ut=ue(ct),An=Ut.length;for(n=0;n<An;n++){Ht=Ut[n];let _t=Ht.pattern;l=null;let xr=Ht.short;if(xr!==!1?ct===xr&&(u=_t):Ht.isCustom===!0?(g=_t.exec(y,K,Qe,x),g!==null?(u=g[0],g.payload!==void 0&&(l=g.payload)):u=null):(this.updateLastIndex(_t,K),u=this.match(_t,e,K)),u!==null){if(s=Ht.longerAlt,s!==void 0){let vt=s.length;for(o=0;o<vt;o++){let Ar=j[s[o]],nn=Ar.pattern;if(c=null,Ar.isCustom===!0?(g=nn.exec(y,K,Qe,x),g!==null?(i=g[0],g.payload!==void 0&&(c=g.payload)):i=null):(this.updateLastIndex(nn,K),i=this.match(nn,e,K)),i&&i.length>u.length){u=i,l=c,Ht=Ar;break}}}break}}if(u!==null){if(d=u.length,p=Ht.group,p!==void 0&&(h=Ht.tokenTypeIdx,w=this.createTokenInstance(u,K,h,Ht.tokenType,Bt,N,d),this.handlePayload(w,l),p===!1?Q=this.addToken(Qe,Q,w):x[p].push(w)),e=this.chopInput(e,d),K=K+d,N=this.computeNewColumn(N,d),W===!0&&Ht.canLineTerminator===!0){let _t=0,xr,vt;O.lastIndex=0;do xr=O.test(u),xr===!0&&(vt=O.lastIndex-1,_t++);while(xr===!0);_t!==0&&(Bt=Bt+_t,N=d-vt,this.updateTokenEndLineColumnLocation(w,p,vt,_t,Bt,N,d))}this.handleModes(Ht,ip,Ii,w)}else{let _t=K,xr=Bt,vt=N,Ar=Iu===!1;for(;Ar===!1&&K<$;)for(e=this.chopInput(e,1),K++,a=0;a<te;a++){let nn=j[a],kn=nn.pattern,Ru=nn.short;if(Ru!==!1?y.charCodeAt(K)===Ru&&(Ar=!0):nn.isCustom===!0?Ar=kn.exec(y,K,Qe,x)!==null:(this.updateLastIndex(kn,K),Ar=kn.exec(e)!==null),Ar===!0)break}if(S=K-_t,N=this.computeNewColumn(N,S),C=this.config.errorMessageProvider.buildUnexpectedCharactersMessage(y,_t,S,xr,vt),ir.push({offset:_t,line:xr,column:vt,length:S,message:C}),Iu===!1)break}}return this.hasCustom||(Qe.length=Q),{tokens:Qe,groups:x,errors:ir}}handleModes(e,r,n,a){if(e.pop===!0){let o=e.push;r(a),o!==void 0&&n.call(this,o)}else e.push!==void 0&&n.call(this,e.push)}chopInput(e,r){return e.substring(r)}updateLastIndex(e,r){e.lastIndex=r}updateTokenEndLineColumnLocation(e,r,n,a,o,i,s){let u,l;r!==void 0&&(u=n===s-1,l=u?-1:0,a===1&&u===!0||(e.endLine=o+l,e.endColumn=i-1+-l))}computeNewColumn(e,r){return e+r}createOffsetOnlyToken(e,r,n,a){return{image:e,startOffset:r,tokenTypeIdx:n,tokenType:a}}createStartOnlyToken(e,r,n,a,o,i){return{image:e,startOffset:r,startLine:o,startColumn:i,tokenTypeIdx:n,tokenType:a}}createFullToken(e,r,n,a,o,i,s){return{image:e,startOffset:r,endOffset:r+s-1,startLine:o,endLine:o,startColumn:i,endColumn:i+s-1,tokenTypeIdx:n,tokenType:a}}addTokenUsingPush(e,r,n){return e.push(n),r}addTokenUsingMemberAccess(e,r,n){return e[r]=n,r++,r}handlePayloadNoCustom(e,r){}handlePayloadWithCustom(e,r){r!==null&&(e.payload=r)}matchWithTest(e,r,n){return e.test(r)===!0?r.substring(n,e.lastIndex):null}matchWithExec(e,r){let n=e.exec(r);return n!==null?n[0]:null}};qe.SKIPPED="This marks a skipped Token pattern, this means each token identified by it willbe consumed and then thrown into oblivion, this can be used to for example to completely ignore whitespace.";qe.NA=/NOT_APPLICABLE/;function gn(t){return Zf(t)?t.LABEL:t.name}function Zf(t){return ut(t.LABEL)&&t.LABEL!==""}var LM="parent",AC="categories",kC="label",IC="group",RC="push_mode",PC="pop_mode",KC="longer_alt",bC="line_breaks",EC="start_chars_hint";function Nl(t){return FM(t)}function FM(t){let e=t.pattern,r={};if(r.name=t.name,Pt(e)||(r.PATTERN=e),z(t,LM))throw`The parent property is no longer supported.
See: https://github.com/chevrotain/chevrotain/issues/564#issuecomment-349062346 for details.`;return z(t,AC)&&(r.CATEGORIES=t[AC]),hn([r]),z(t,kC)&&(r.LABEL=t[kC]),z(t,IC)&&(r.GROUP=t[IC]),z(t,PC)&&(r.POP_MODE=t[PC]),z(t,RC)&&(r.PUSH_MODE=t[RC]),z(t,KC)&&(r.LONGER_ALT=t[KC]),z(t,bC)&&(r.LINE_BREAKS=t[bC]),z(t,EC)&&(r.START_CHARS_HINT=t[EC]),r}var cr=Nl({name:"EOF",pattern:qe.NA});hn([cr]);function Ia(t,e,r,n,a,o,i,s){return{image:e,startOffset:r,endOffset:n,startLine:a,endLine:o,startColumn:i,endColumn:s,tokenTypeIdx:t.tokenTypeIdx,tokenType:t}}function es(t,e){return yn(t,e)}var mn={buildMismatchTokenMessage({expected:t,actual:e,previous:r,ruleName:n}){return`Expecting ${Zf(t)?`--> ${gn(t)} <--`:`token of type --> ${t.name} <--`} but found --> '${e.image}' <--`},buildNotAllInputParsedMessage({firstRedundant:t,ruleName:e}){return"Redundant input, expecting EOF but found: "+t.image},buildNoViableAltMessage({expectedPathsPerAlt:t,actual:e,previous:r,customUserDescription:n,ruleName:a}){let o="Expecting: ",s=`
but found: '`+yt(e).image+"'";if(n)return o+n+s;{let u=Fe(t,(p,h)=>p.concat(h),[]),l=b(u,p=>`[${b(p,h=>gn(h)).join(", ")}]`),d=`one of these possible Token sequences:
${b(l,(p,h)=>`  ${h+1}. ${p}`).join(`
`)}`;return o+d+s}},buildEarlyExitMessage({expectedIterationPaths:t,actual:e,customUserDescription:r,ruleName:n}){let a="Expecting: ",i=`
but found: '`+yt(e).image+"'";if(r)return a+r+i;{let u=`expecting at least one iteration which starts with one of these possible Token sequences::
  <${b(t,l=>`[${b(l,c=>gn(c)).join(",")}]`).join(" ,")}>`;return a+u+i}}};Object.freeze(mn);var DC={buildRuleNotFoundError(t,e){return"Invalid grammar, reference to a rule which is not defined: ->"+e.nonTerminalName+`<-
inside top level rule: ->`+t.name+"<-"}},Kr={buildDuplicateFoundError(t,e){function r(c){return c instanceof Z?c.terminalType.name:c instanceof fe?c.nonTerminalName:""}let n=t.name,a=yt(e),o=a.idx,i=tr(a),s=r(a),u=o>0,l=`->${i}${u?o:""}<- ${s?`with argument: ->${s}<-`:""}
                  appears more than once (${e.length} times) in the top level rule: ->${n}<-.                  
                  For further details see: https://chevrotain.io/docs/FAQ.html#NUMERICAL_SUFFIXES 
                  `;return l=l.replace(/[ \t]+/g," "),l=l.replace(/\s\s+/g,`
`),l},buildNamespaceConflictError(t){return`Namespace conflict found in grammar.
The grammar has both a Terminal(Token) and a Non-Terminal(Rule) named: <${t.name}>.
To resolve this make sure each Terminal and Non-Terminal names are unique
This is easy to accomplish by using the convention that Terminal names start with an uppercase letter
and Non-Terminal names start with a lower case letter.`},buildAlternationPrefixAmbiguityError(t){let e=b(t.prefixPath,a=>gn(a)).join(", "),r=t.alternation.idx===0?"":t.alternation.idx;return`Ambiguous alternatives: <${t.ambiguityIndices.join(" ,")}> due to common lookahead prefix
in <OR${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#COMMON_PREFIX
For Further details.`},buildAlternationAmbiguityError(t){let e=b(t.prefixPath,a=>gn(a)).join(", "),r=t.alternation.idx===0?"":t.alternation.idx,n=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(" ,")}> in <OR${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n},buildEmptyRepetitionError(t){let e=tr(t.repetition);return t.repetition.idx!==0&&(e+=t.repetition.idx),`The repetition <${e}> within Rule <${t.topLevelRule.name}> can never consume any tokens.
This could lead to an infinite loop.`},buildTokenNameError(t){return"deprecated"},buildEmptyAlternationError(t){return`Ambiguous empty alternative: <${t.emptyChoiceIdx+1}> in <OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
Only the last alternative may be an empty alternative.`},buildTooManyAlternativesError(t){return`An Alternation cannot have more than 256 alternatives:
<OR${t.alternation.idx}> inside <${t.topLevelRule.name}> Rule.
 has ${t.alternation.definition.length+1} alternatives.`},buildLeftRecursionError(t){let e=t.topLevelRule.name,r=b(t.leftRecursionPath,o=>o.name),n=`${e} --> ${r.concat([e]).join(" --> ")}`;return`Left Recursion found in grammar.
rule: <${e}> can be invoked from itself (directly or indirectly)
without consuming any Tokens. The grammar path that causes this is: 
 ${n}
 To fix this refactor your grammar to remove the left recursion.
see: https://en.wikipedia.org/wiki/LL_parser#Left_factoring.`},buildInvalidRuleNameError(t){return"deprecated"},buildDuplicateRuleNameError(t){let e;return t.topLevelRule instanceof Ft?e=t.topLevelRule.name:e=t.topLevelRule,`Duplicate definition, rule: ->${e}<- is already defined in the grammar: ->${t.grammarName}<-`}};function NC(t,e){let r=new ey(t,e);return r.resolveRefs(),r.errors}var ey=class extends Wt{constructor(e,r){super(),this.nameToTopRule=e,this.errMsgProvider=r,this.errors=[]}resolveRefs(){_(ge(this.nameToTopRule),e=>{this.currTopLevel=e,e.accept(this)})}visitNonTerminal(e){let r=this.nameToTopRule[e.nonTerminalName];if(r)e.referencedRule=r;else{let n=this.errMsgProvider.buildRuleNotFoundError(this.currTopLevel,e);this.errors.push({message:n,type:lt.UNRESOLVED_SUBRULE_REF,ruleName:this.currTopLevel.name,unresolvedRefName:e.nonTerminalName})}}};var ty=class extends fn{constructor(e,r){super(),this.topProd=e,this.path=r,this.possibleTokTypes=[],this.nextProductionName="",this.nextProductionOccurrence=0,this.found=!1,this.isAtEndOfPath=!1}startWalking(){if(this.found=!1,this.path.ruleStack[0]!==this.topProd.name)throw Error("The path does not start with the walker's top Rule!");return this.ruleStack=$e(this.path.ruleStack).reverse(),this.occurrenceStack=$e(this.path.occurrenceStack).reverse(),this.ruleStack.pop(),this.occurrenceStack.pop(),this.updateExpectedNext(),this.walk(this.topProd),this.possibleTokTypes}walk(e,r=[]){this.found||super.walk(e,r)}walkProdRef(e,r,n){if(e.referencedRule.name===this.nextProductionName&&e.idx===this.nextProductionOccurrence){let a=r.concat(n);this.updateExpectedNext(),this.walk(e.referencedRule,a)}}updateExpectedNext(){J(this.ruleStack)?(this.nextProductionName="",this.nextProductionOccurrence=0,this.isAtEndOfPath=!0):(this.nextProductionName=this.ruleStack.pop(),this.nextProductionOccurrence=this.occurrenceStack.pop())}},_l=class extends ty{constructor(e,r){super(e,r),this.path=r,this.nextTerminalName="",this.nextTerminalOccurrence=0,this.nextTerminalName=this.path.lastTok.name,this.nextTerminalOccurrence=this.path.lastTokOccurrence}walkTerminal(e,r,n){if(this.isAtEndOfPath&&e.terminalType.name===this.nextTerminalName&&e.idx===this.nextTerminalOccurrence&&!this.found){let a=r.concat(n),o=new Te({definition:a});this.possibleTokTypes=Aa(o),this.found=!0}}},_o=class extends fn{constructor(e,r){super(),this.topRule=e,this.occurrence=r,this.result={token:void 0,occurrence:void 0,isEndOfRule:void 0}}startWalking(){return this.walk(this.topRule),this.result}},Ml=class extends _o{walkMany(e,r,n){if(e.idx===this.occurrence){let a=yt(r.concat(n));this.result.isEndOfRule=a===void 0,a instanceof Z&&(this.result.token=a.terminalType,this.result.occurrence=a.idx)}else super.walkMany(e,r,n)}},ts=class extends _o{walkManySep(e,r,n){if(e.idx===this.occurrence){let a=yt(r.concat(n));this.result.isEndOfRule=a===void 0,a instanceof Z&&(this.result.token=a.terminalType,this.result.occurrence=a.idx)}else super.walkManySep(e,r,n)}},Ol=class extends _o{walkAtLeastOne(e,r,n){if(e.idx===this.occurrence){let a=yt(r.concat(n));this.result.isEndOfRule=a===void 0,a instanceof Z&&(this.result.token=a.terminalType,this.result.occurrence=a.idx)}else super.walkAtLeastOne(e,r,n)}},rs=class extends _o{walkAtLeastOneSep(e,r,n){if(e.idx===this.occurrence){let a=yt(r.concat(n));this.result.isEndOfRule=a===void 0,a instanceof Z&&(this.result.token=a.terminalType,this.result.occurrence=a.idx)}else super.walkAtLeastOneSep(e,r,n)}};function zl(t,e,r=[]){r=$e(r);let n=[],a=0;function o(s){return s.concat(et(t,a+1))}function i(s){let u=zl(o(s),e,r);return n.concat(u)}for(;r.length<e&&a<t.length;){let s=t[a];if(s instanceof Te)return i(s.definition);if(s instanceof fe)return i(s.definition);if(s instanceof ye)n=i(s.definition);else if(s instanceof xe){let u=s.definition.concat([new ae({definition:s.definition})]);return i(u)}else if(s instanceof Ae){let u=[new Te({definition:s.definition}),new ae({definition:[new Z({terminalType:s.separator})].concat(s.definition)})];return i(u)}else if(s instanceof ve){let u=s.definition.concat([new ae({definition:[new Z({terminalType:s.separator})].concat(s.definition)})]);n=i(u)}else if(s instanceof ae){let u=s.definition.concat([new ae({definition:s.definition})]);n=i(u)}else{if(s instanceof we)return _(s.definition,u=>{J(u.definition)===!1&&(n=i(u.definition))}),n;if(s instanceof Z)r.push(s.terminalType);else throw Error("non exhaustive match")}a++}return n.push({partialPath:r,suffixDef:et(t,a)}),n}function Ll(t,e,r,n){let a="EXIT_NONE_TERMINAL",o=[a],i="EXIT_ALTERNATIVE",s=!1,u=e.length,l=u-n-1,c=[],d=[];for(d.push({idx:-1,def:t,ruleStack:[],occurrenceStack:[]});!J(d);){let p=d.pop();if(p===i){s&&qr(d).idx<=l&&d.pop();continue}let h=p.def,w=p.idx,S=p.ruleStack,A=p.occurrenceStack;if(J(h))continue;let C=h[0];if(C===a){let g={idx:w,def:et(h),ruleStack:pn(S),occurrenceStack:pn(A)};d.push(g)}else if(C instanceof Z)if(w<u-1){let g=w+1,y=e[g];if(r(y,C.terminalType)){let $={idx:g,def:et(h),ruleStack:S,occurrenceStack:A};d.push($)}}else if(w===u-1)c.push({nextTokenType:C.terminalType,nextTokenOccurrence:C.idx,ruleStack:S,occurrenceStack:A}),s=!0;else throw Error("non exhaustive match");else if(C instanceof fe){let g=$e(S);g.push(C.nonTerminalName);let y=$e(A);y.push(C.idx);let $={idx:w,def:C.definition.concat(o,et(h)),ruleStack:g,occurrenceStack:y};d.push($)}else if(C instanceof ye){let g={idx:w,def:et(h),ruleStack:S,occurrenceStack:A};d.push(g),d.push(i);let y={idx:w,def:C.definition.concat(et(h)),ruleStack:S,occurrenceStack:A};d.push(y)}else if(C instanceof xe){let g=new ae({definition:C.definition,idx:C.idx}),y=C.definition.concat([g],et(h)),$={idx:w,def:y,ruleStack:S,occurrenceStack:A};d.push($)}else if(C instanceof Ae){let g=new Z({terminalType:C.separator}),y=new ae({definition:[g].concat(C.definition),idx:C.idx}),$=C.definition.concat([y],et(h)),K={idx:w,def:$,ruleStack:S,occurrenceStack:A};d.push(K)}else if(C instanceof ve){let g={idx:w,def:et(h),ruleStack:S,occurrenceStack:A};d.push(g),d.push(i);let y=new Z({terminalType:C.separator}),$=new ae({definition:[y].concat(C.definition),idx:C.idx}),K=C.definition.concat([$],et(h)),Q={idx:w,def:K,ruleStack:S,occurrenceStack:A};d.push(Q)}else if(C instanceof ae){let g={idx:w,def:et(h),ruleStack:S,occurrenceStack:A};d.push(g),d.push(i);let y=new ae({definition:C.definition,idx:C.idx}),$=C.definition.concat([y],et(h)),K={idx:w,def:$,ruleStack:S,occurrenceStack:A};d.push(K)}else if(C instanceof we)for(let g=C.definition.length-1;g>=0;g--){let y=C.definition[g],$={idx:w,def:y.definition.concat(et(h)),ruleStack:S,occurrenceStack:A};d.push($),d.push(i)}else if(C instanceof Te)d.push({idx:w,def:C.definition.concat(et(h)),ruleStack:S,occurrenceStack:A});else if(C instanceof Ft)d.push(WM(C,w,S,A));else throw Error("non exhaustive match")}return c}function WM(t,e,r,n){let a=$e(r);a.push(t.name);let o=$e(n);return o.push(1),{idx:e,def:t.definition,ruleStack:a,occurrenceStack:o}}var De;(function(t){t[t.OPTION=0]="OPTION",t[t.REPETITION=1]="REPETITION",t[t.REPETITION_MANDATORY=2]="REPETITION_MANDATORY",t[t.REPETITION_MANDATORY_WITH_SEPARATOR=3]="REPETITION_MANDATORY_WITH_SEPARATOR",t[t.REPETITION_WITH_SEPARATOR=4]="REPETITION_WITH_SEPARATOR",t[t.ALTERNATION=5]="ALTERNATION"})(De||(De={}));function ns(t){if(t instanceof ye||t==="Option")return De.OPTION;if(t instanceof ae||t==="Repetition")return De.REPETITION;if(t instanceof xe||t==="RepetitionMandatory")return De.REPETITION_MANDATORY;if(t instanceof Ae||t==="RepetitionMandatoryWithSeparator")return De.REPETITION_MANDATORY_WITH_SEPARATOR;if(t instanceof ve||t==="RepetitionWithSeparator")return De.REPETITION_WITH_SEPARATOR;if(t instanceof we||t==="Alternation")return De.ALTERNATION;throw Error("non exhaustive match")}function Wl(t){let{occurrence:e,rule:r,prodType:n,maxLookahead:a}=t,o=ns(n);return o===De.ALTERNATION?Mo(e,r,a):Oo(e,r,o,a)}function MC(t,e,r,n,a,o){let i=Mo(t,e,r),s=GC(i)?No:yn;return o(i,n,s,a)}function OC(t,e,r,n,a,o){let i=Oo(t,e,a,r),s=GC(i)?No:yn;return o(i[0],s,n)}function zC(t,e,r,n){let a=t.length,o=Rt(t,i=>Rt(i,s=>s.length===1));if(e)return function(i){let s=b(i,u=>u.GATE);for(let u=0;u<a;u++){let l=t[u],c=l.length,d=s[u];if(!(d!==void 0&&d.call(this)===!1))e:for(let p=0;p<c;p++){let h=l[p],w=h.length;for(let S=0;S<w;S++){let A=this.LA(S+1);if(r(A,h[S])===!1)continue e}return u}}};if(o&&!n){let i=b(t,u=>Ze(u)),s=Fe(i,(u,l,c)=>(_(l,d=>{z(u,d.tokenTypeIdx)||(u[d.tokenTypeIdx]=c),_(d.categoryMatches,p=>{z(u,p)||(u[p]=c)})}),u),{});return function(){let u=this.LA(1);return s[u.tokenTypeIdx]}}else return function(){for(let i=0;i<a;i++){let s=t[i],u=s.length;e:for(let l=0;l<u;l++){let c=s[l],d=c.length;for(let p=0;p<d;p++){let h=this.LA(p+1);if(r(h,c[p])===!1)continue e}return i}}}}function LC(t,e,r){let n=Rt(t,o=>o.length===1),a=t.length;if(n&&!r){let o=Ze(t);if(o.length===1&&J(o[0].categoryMatches)){let s=o[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===s}}else{let i=Fe(o,(s,u,l)=>(s[u.tokenTypeIdx]=!0,_(u.categoryMatches,c=>{s[c]=!0}),s),[]);return function(){let s=this.LA(1);return i[s.tokenTypeIdx]===!0}}}else return function(){e:for(let o=0;o<a;o++){let i=t[o],s=i.length;for(let u=0;u<s;u++){let l=this.LA(u+1);if(e(l,i[u])===!1)continue e}return!0}return!1}}var ny=class extends fn{constructor(e,r,n){super(),this.topProd=e,this.targetOccurrence=r,this.targetProdType=n}startWalking(){return this.walk(this.topProd),this.restDef}checkIsTarget(e,r,n,a){return e.idx===this.targetOccurrence&&this.targetProdType===r?(this.restDef=n.concat(a),!0):!1}walkOption(e,r,n){this.checkIsTarget(e,De.OPTION,r,n)||super.walkOption(e,r,n)}walkAtLeastOne(e,r,n){this.checkIsTarget(e,De.REPETITION_MANDATORY,r,n)||super.walkOption(e,r,n)}walkAtLeastOneSep(e,r,n){this.checkIsTarget(e,De.REPETITION_MANDATORY_WITH_SEPARATOR,r,n)||super.walkOption(e,r,n)}walkMany(e,r,n){this.checkIsTarget(e,De.REPETITION,r,n)||super.walkOption(e,r,n)}walkManySep(e,r,n){this.checkIsTarget(e,De.REPETITION_WITH_SEPARATOR,r,n)||super.walkOption(e,r,n)}},Fl=class extends Wt{constructor(e,r,n){super(),this.targetOccurrence=e,this.targetProdType=r,this.targetRef=n,this.result=[]}checkIsTarget(e,r){e.idx===this.targetOccurrence&&this.targetProdType===r&&(this.targetRef===void 0||e===this.targetRef)&&(this.result=e.definition)}visitOption(e){this.checkIsTarget(e,De.OPTION)}visitRepetition(e){this.checkIsTarget(e,De.REPETITION)}visitRepetitionMandatory(e){this.checkIsTarget(e,De.REPETITION_MANDATORY)}visitRepetitionMandatoryWithSeparator(e){this.checkIsTarget(e,De.REPETITION_MANDATORY_WITH_SEPARATOR)}visitRepetitionWithSeparator(e){this.checkIsTarget(e,De.REPETITION_WITH_SEPARATOR)}visitAlternation(e){this.checkIsTarget(e,De.ALTERNATION)}};function _C(t){let e=new Array(t);for(let r=0;r<t;r++)e[r]=[];return e}function ry(t){let e=[""];for(let r=0;r<t.length;r++){let n=t[r],a=[];for(let o=0;o<e.length;o++){let i=e[o];a.push(i+"_"+n.tokenTypeIdx);for(let s=0;s<n.categoryMatches.length;s++){let u="_"+n.categoryMatches[s];a.push(i+u)}}e=a}return e}function GM(t,e,r){for(let n=0;n<t.length;n++){if(n===r)continue;let a=t[n];for(let o=0;o<e.length;o++){let i=e[o];if(a[i]===!0)return!1}}return!0}function FC(t,e){let r=b(t,i=>zl([i],1)),n=_C(r.length),a=b(r,i=>{let s={};return _(i,u=>{let l=ry(u.partialPath);_(l,c=>{s[c]=!0})}),s}),o=r;for(let i=1;i<=e;i++){let s=o;o=_C(s.length);for(let u=0;u<s.length;u++){let l=s[u];for(let c=0;c<l.length;c++){let d=l[c].partialPath,p=l[c].suffixDef,h=ry(d);if(GM(a,h,u)||J(p)||d.length===e){let S=n[u];if(Gl(S,d)===!1){S.push(d);for(let A=0;A<h.length;A++){let C=h[A];a[u][C]=!0}}}else{let S=zl(p,i+1,d);o[u]=o[u].concat(S),_(S,A=>{let C=ry(A.partialPath);_(C,g=>{a[u][g]=!0})})}}}}return n}function Mo(t,e,r,n){let a=new Fl(t,De.ALTERNATION,n);return e.accept(a),FC(a.result,r)}function Oo(t,e,r,n){let a=new Fl(t,r);e.accept(a);let o=a.result,s=new ny(e,t,r).startWalking(),u=new Te({definition:o}),l=new Te({definition:s});return FC([u,l],n)}function Gl(t,e){e:for(let r=0;r<t.length;r++){let n=t[r];if(n.length===e.length){for(let a=0;a<n.length;a++){let o=e[a],i=n[a];if((o===i||i.categoryMatchesMap[o.tokenTypeIdx]!==void 0)===!1)continue e}return!0}}return!1}function WC(t,e){return t.length<e.length&&Rt(t,(r,n)=>{let a=e[n];return r===a||a.categoryMatchesMap[r.tokenTypeIdx]})}function GC(t){return Rt(t,e=>Rt(e,r=>Rt(r,n=>J(n.categoryMatches))))}function BC(t){let e=t.lookaheadStrategy.validate({rules:t.rules,tokenTypes:t.tokenTypes,grammarName:t.grammarName});return b(e,r=>Object.assign({type:lt.CUSTOM_LOOKAHEAD_VALIDATION},r))}function HC(t,e,r,n){let a=$t(t,u=>BM(u,r)),o=YM(t,e,r),i=$t(t,u=>qM(u,r)),s=$t(t,u=>UM(u,t,n,r));return a.concat(o,i,s)}function BM(t,e){let r=new ay;t.accept(r);let n=r.allProductions,a=Gf(n,HM),o=er(a,s=>s.length>1);return b(ge(o),s=>{let u=yt(s),l=e.buildDuplicateFoundError(t,s),c=tr(u),d={message:l,type:lt.DUPLICATE_PRODUCTIONS,ruleName:t.name,dslName:c,occurrence:u.idx},p=UC(u);return p&&(d.parameter=p),d})}function HM(t){return`${tr(t)}_#_${t.idx}_#_${UC(t)}`}function UC(t){return t instanceof Z?t.terminalType.name:t instanceof fe?t.nonTerminalName:""}var ay=class extends Wt{constructor(){super(...arguments),this.allProductions=[]}visitNonTerminal(e){this.allProductions.push(e)}visitOption(e){this.allProductions.push(e)}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}visitAlternation(e){this.allProductions.push(e)}visitTerminal(e){this.allProductions.push(e)}};function UM(t,e,r,n){let a=[];if(Fe(e,(i,s)=>s.name===t.name?i+1:i,0)>1){let i=n.buildDuplicateRuleNameError({topLevelRule:t,grammarName:r});a.push({message:i,type:lt.DUPLICATE_RULE_NAME,ruleName:t.name})}return a}function qC(t,e,r){let n=[],a;return be(e,t)||(a=`Invalid rule override, rule: ->${t}<- cannot be overridden in the grammar: ->${r}<-as it is not defined in any of the super grammars `,n.push({message:a,type:lt.INVALID_RULE_OVERRIDE,ruleName:t})),n}function iy(t,e,r,n=[]){let a=[],o=Bl(e.definition);if(J(o))return[];{let i=t.name;be(o,t)&&a.push({message:r.buildLeftRecursionError({topLevelRule:t,leftRecursionPath:n}),type:lt.LEFT_RECURSION,ruleName:i});let u=Gn(o,n.concat([t])),l=$t(u,c=>{let d=$e(n);return d.push(c),iy(t,c,r,d)});return a.concat(l)}}function Bl(t){let e=[];if(J(t))return e;let r=yt(t);if(r instanceof fe)e.push(r.referencedRule);else if(r instanceof Te||r instanceof ye||r instanceof xe||r instanceof Ae||r instanceof ve||r instanceof ae)e=e.concat(Bl(r.definition));else if(r instanceof we)e=Ze(b(r.definition,o=>Bl(o.definition)));else if(!(r instanceof Z))throw Error("non exhaustive match");let n=xa(r),a=t.length>1;if(n&&a){let o=et(t);return e.concat(Bl(o))}else return e}var as=class extends Wt{constructor(){super(...arguments),this.alternations=[]}visitAlternation(e){this.alternations.push(e)}};function jC(t,e){let r=new as;t.accept(r);let n=r.alternations;return $t(n,o=>{let i=pn(o.definition);return $t(i,(s,u)=>{let l=Ll([s],[],yn,1);return J(l)?[{message:e.buildEmptyAlternationError({topLevelRule:t,alternation:o,emptyChoiceIdx:u}),type:lt.NONE_LAST_EMPTY_ALT,ruleName:t.name,occurrence:o.idx,alternative:u+1}]:[]})})}function VC(t,e,r){let n=new as;t.accept(n);let a=n.alternations;return a=Bn(a,i=>i.ignoreAmbiguities===!0),$t(a,i=>{let s=i.idx,u=i.maxLookahead||e,l=Mo(s,t,u,i),c=jM(l,i,t,r),d=VM(l,i,t,r);return c.concat(d)})}var oy=class extends Wt{constructor(){super(...arguments),this.allProductions=[]}visitRepetitionWithSeparator(e){this.allProductions.push(e)}visitRepetitionMandatory(e){this.allProductions.push(e)}visitRepetitionMandatoryWithSeparator(e){this.allProductions.push(e)}visitRepetition(e){this.allProductions.push(e)}};function qM(t,e){let r=new as;t.accept(r);let n=r.alternations;return $t(n,o=>o.definition.length>255?[{message:e.buildTooManyAlternativesError({topLevelRule:t,alternation:o}),type:lt.TOO_MANY_ALTS,ruleName:t.name,occurrence:o.idx}]:[])}function YC(t,e,r){let n=[];return _(t,a=>{let o=new oy;a.accept(o);let i=o.allProductions;_(i,s=>{let u=ns(s),l=s.maxLookahead||e,c=s.idx,p=Oo(c,a,u,l)[0];if(J(Ze(p))){let h=r.buildEmptyRepetitionError({topLevelRule:a,repetition:s});n.push({message:h,type:lt.NO_NON_EMPTY_LOOKAHEAD,ruleName:a.name})}})}),n}function jM(t,e,r,n){let a=[],o=Fe(t,(s,u,l)=>(e.definition[l].ignoreAmbiguities===!0||_(u,c=>{let d=[l];_(t,(p,h)=>{l!==h&&Gl(p,c)&&e.definition[h].ignoreAmbiguities!==!0&&d.push(h)}),d.length>1&&!Gl(a,c)&&(a.push(c),s.push({alts:d,path:c}))}),s),[]);return b(o,s=>{let u=b(s.alts,c=>c+1);return{message:n.buildAlternationAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:u,prefixPath:s.path}),type:lt.AMBIGUOUS_ALTS,ruleName:r.name,occurrence:e.idx,alternatives:s.alts}})}function VM(t,e,r,n){let a=Fe(t,(i,s,u)=>{let l=b(s,c=>({idx:u,path:c}));return i.concat(l)},[]);return Ur($t(a,i=>{if(e.definition[i.idx].ignoreAmbiguities===!0)return[];let u=i.idx,l=i.path,c=ft(a,p=>e.definition[p.idx].ignoreAmbiguities!==!0&&p.idx<u&&WC(p.path,l));return b(c,p=>{let h=[p.idx+1,u+1],w=e.idx===0?"":e.idx;return{message:n.buildAlternationPrefixAmbiguityError({topLevelRule:r,alternation:e,ambiguityIndices:h,prefixPath:p.path}),type:lt.AMBIGUOUS_PREFIX_ALTS,ruleName:r.name,occurrence:w,alternatives:h}})}))}function YM(t,e,r){let n=[],a=b(e,o=>o.name);return _(t,o=>{let i=o.name;if(be(a,i)){let s=r.buildNamespaceConflictError(o);n.push({message:s,type:lt.CONFLICT_TOKENS_RULES_NAMESPACE,ruleName:i})}}),n}function QC(t){let e=Io(t,{errMsgProvider:DC}),r={};return _(t.rules,n=>{r[n.name]=n}),NC(r,e.errMsgProvider)}function XC(t){return t=Io(t,{errMsgProvider:Kr}),HC(t.rules,t.tokenTypes,t.errMsgProvider,t.grammarName)}var JC="MismatchedTokenException",ZC="NoViableAltException",e$="EarlyExitException",t$="NotAllInputParsedException",r$=[JC,ZC,e$,t$];Object.freeze(r$);function Hn(t){return be(r$,t.name)}var zo=class extends Error{constructor(e,r){super(e),this.token=r,this.resyncedTokens=[],Object.setPrototypeOf(this,new.target.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor)}},Ra=class extends zo{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=JC}},os=class extends zo{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=ZC}},is=class extends zo{constructor(e,r){super(e,r),this.name=t$}},ss=class extends zo{constructor(e,r,n){super(e,r),this.previousToken=n,this.name=e$}};var sy={},ly="InRuleRecoveryException",uy=class extends Error{constructor(e){super(e),this.name=ly}},Hl=class{initRecoverable(e){this.firstAfterRepMap={},this.resyncFollows={},this.recoveryEnabled=z(e,"recoveryEnabled")?e.recoveryEnabled:Gt.recoveryEnabled,this.recoveryEnabled&&(this.attemptInRepetitionRecovery=QM)}getTokenToInsert(e){let r=Ia(e,"",NaN,NaN,NaN,NaN,NaN,NaN);return r.isInsertedInRecovery=!0,r}canTokenTypeBeInsertedInRecovery(e){return!0}canTokenTypeBeDeletedInRecovery(e){return!0}tryInRepetitionRecovery(e,r,n,a){let o=this.findReSyncTokenType(),i=this.exportLexerState(),s=[],u=!1,l=this.LA(1),c=this.LA(1),d=()=>{let p=this.LA(0),h=this.errorMessageProvider.buildMismatchTokenMessage({expected:a,actual:l,previous:p,ruleName:this.getCurrRuleFullName()}),w=new Ra(h,l,this.LA(0));w.resyncedTokens=pn(s),this.SAVE_ERROR(w)};for(;!u;)if(this.tokenMatcher(c,a)){d();return}else if(n.call(this)){d(),e.apply(this,r);return}else this.tokenMatcher(c,o)?u=!0:(c=this.SKIP_TOKEN(),this.addToResyncTokens(c,s));this.importLexerState(i)}shouldInRepetitionRecoveryBeTried(e,r,n){return!(n===!1||this.tokenMatcher(this.LA(1),e)||this.isBackTracking()||this.canPerformInRuleRecovery(e,this.getFollowsForInRuleRecovery(e,r)))}getFollowsForInRuleRecovery(e,r){let n=this.getCurrentGrammarPath(e,r);return this.getNextPossibleTokenTypes(n)}tryInRuleRecovery(e,r){if(this.canRecoverWithSingleTokenInsertion(e,r))return this.getTokenToInsert(e);if(this.canRecoverWithSingleTokenDeletion(e)){let n=this.SKIP_TOKEN();return this.consumeToken(),n}throw new uy("sad sad panda")}canPerformInRuleRecovery(e,r){return this.canRecoverWithSingleTokenInsertion(e,r)||this.canRecoverWithSingleTokenDeletion(e)}canRecoverWithSingleTokenInsertion(e,r){if(!this.canTokenTypeBeInsertedInRecovery(e)||J(r))return!1;let n=this.LA(1);return jr(r,o=>this.tokenMatcher(n,o))!==void 0}canRecoverWithSingleTokenDeletion(e){return this.canTokenTypeBeDeletedInRecovery(e)?this.tokenMatcher(this.LA(2),e):!1}isInCurrentRuleReSyncSet(e){let r=this.getCurrFollowKey(),n=this.getFollowSetFromFollowKey(r);return be(n,e)}findReSyncTokenType(){let e=this.flattenFollowSet(),r=this.LA(1),n=2;for(;;){let a=jr(e,o=>es(r,o));if(a!==void 0)return a;r=this.LA(n),n++}}getCurrFollowKey(){if(this.RULE_STACK.length===1)return sy;let e=this.getLastExplicitRuleShortName(),r=this.getLastExplicitRuleOccurrenceIndex(),n=this.getPreviousExplicitRuleShortName();return{ruleName:this.shortRuleNameToFullName(e),idxInCallingRule:r,inRule:this.shortRuleNameToFullName(n)}}buildFullFollowKeyStack(){let e=this.RULE_STACK,r=this.RULE_OCCURRENCE_STACK;return b(e,(n,a)=>a===0?sy:{ruleName:this.shortRuleNameToFullName(n),idxInCallingRule:r[a],inRule:this.shortRuleNameToFullName(e[a-1])})}flattenFollowSet(){let e=b(this.buildFullFollowKeyStack(),r=>this.getFollowSetFromFollowKey(r));return Ze(e)}getFollowSetFromFollowKey(e){if(e===sy)return[cr];let r=e.ruleName+e.idxInCallingRule+Rl+e.inRule;return this.resyncFollows[r]}addToResyncTokens(e,r){return this.tokenMatcher(e,cr)||r.push(e),r}reSyncTo(e){let r=[],n=this.LA(1);for(;this.tokenMatcher(n,e)===!1;)n=this.SKIP_TOKEN(),this.addToResyncTokens(n,r);return pn(r)}attemptInRepetitionRecovery(e,r,n,a,o,i,s){}getCurrentGrammarPath(e,r){let n=this.getHumanReadableRuleStack(),a=$e(this.RULE_OCCURRENCE_STACK);return{ruleStack:n,occurrenceStack:a,lastTok:e,lastTokOccurrence:r}}getHumanReadableRuleStack(){return b(this.RULE_STACK,e=>this.shortRuleNameToFullName(e))}};function QM(t,e,r,n,a,o,i){let s=this.getKeyForAutomaticLookahead(n,a),u=this.firstAfterRepMap[s];if(u===void 0){let p=this.getCurrRuleFullName(),h=this.getGAstProductions()[p];u=new o(h,a).startWalking(),this.firstAfterRepMap[s]=u}let l=u.token,c=u.occurrence,d=u.isEndOfRule;this.RULE_STACK.length===1&&d&&l===void 0&&(l=cr,c=1),!(l===void 0||c===void 0)&&this.shouldInRepetitionRecoveryBeTried(l,c,i)&&this.tryInRepetitionRecovery(t,e,r,l)}function Ul(t,e,r){return r|e|t}var vn=class{constructor(e){var r;this.maxLookahead=(r=e?.maxLookahead)!==null&&r!==void 0?r:Gt.maxLookahead}validate(e){let r=this.validateNoLeftRecursion(e.rules);if(J(r)){let n=this.validateEmptyOrAlternatives(e.rules),a=this.validateAmbiguousAlternationAlternatives(e.rules,this.maxLookahead),o=this.validateSomeNonEmptyLookaheadPath(e.rules,this.maxLookahead);return[...r,...n,...a,...o]}return r}validateNoLeftRecursion(e){return $t(e,r=>iy(r,r,Kr))}validateEmptyOrAlternatives(e){return $t(e,r=>jC(r,Kr))}validateAmbiguousAlternationAlternatives(e,r){return $t(e,n=>VC(n,r,Kr))}validateSomeNonEmptyLookaheadPath(e,r){return YC(e,r,Kr)}buildLookaheadForAlternation(e){return MC(e.prodOccurrence,e.rule,e.maxLookahead,e.hasPredicates,e.dynamicTokensEnabled,zC)}buildLookaheadForOptional(e){return OC(e.prodOccurrence,e.rule,e.maxLookahead,e.dynamicTokensEnabled,ns(e.prodType),LC)}};var jl=class{initLooksAhead(e){this.dynamicTokensEnabled=z(e,"dynamicTokensEnabled")?e.dynamicTokensEnabled:Gt.dynamicTokensEnabled,this.maxLookahead=z(e,"maxLookahead")?e.maxLookahead:Gt.maxLookahead,this.lookaheadStrategy=z(e,"lookaheadStrategy")?e.lookaheadStrategy:new vn({maxLookahead:this.maxLookahead}),this.lookAheadFuncsCache=new Map}preComputeLookaheadFunctions(e){_(e,r=>{this.TRACE_INIT(`${r.name} Rule Lookahead`,()=>{let{alternation:n,repetition:a,option:o,repetitionMandatory:i,repetitionMandatoryWithSeparator:s,repetitionWithSeparator:u}=XM(r);_(n,l=>{let c=l.idx===0?"":l.idx;this.TRACE_INIT(`${tr(l)}${c}`,()=>{let d=this.lookaheadStrategy.buildLookaheadForAlternation({prodOccurrence:l.idx,rule:r,maxLookahead:l.maxLookahead||this.maxLookahead,hasPredicates:l.hasPredicates,dynamicTokensEnabled:this.dynamicTokensEnabled}),p=Ul(this.fullRuleNameToShort[r.name],256,l.idx);this.setLaFuncCache(p,d)})}),_(a,l=>{this.computeLookaheadFunc(r,l.idx,768,"Repetition",l.maxLookahead,tr(l))}),_(o,l=>{this.computeLookaheadFunc(r,l.idx,512,"Option",l.maxLookahead,tr(l))}),_(i,l=>{this.computeLookaheadFunc(r,l.idx,1024,"RepetitionMandatory",l.maxLookahead,tr(l))}),_(s,l=>{this.computeLookaheadFunc(r,l.idx,1536,"RepetitionMandatoryWithSeparator",l.maxLookahead,tr(l))}),_(u,l=>{this.computeLookaheadFunc(r,l.idx,1280,"RepetitionWithSeparator",l.maxLookahead,tr(l))})})})}computeLookaheadFunc(e,r,n,a,o,i){this.TRACE_INIT(`${i}${r===0?"":r}`,()=>{let s=this.lookaheadStrategy.buildLookaheadForOptional({prodOccurrence:r,rule:e,maxLookahead:o||this.maxLookahead,dynamicTokensEnabled:this.dynamicTokensEnabled,prodType:a}),u=Ul(this.fullRuleNameToShort[e.name],n,r);this.setLaFuncCache(u,s)})}getKeyForAutomaticLookahead(e,r){let n=this.getLastExplicitRuleShortName();return Ul(n,e,r)}getLaFuncFromCache(e){return this.lookAheadFuncsCache.get(e)}setLaFuncCache(e,r){this.lookAheadFuncsCache.set(e,r)}},cy=class extends Wt{constructor(){super(...arguments),this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}reset(){this.dslMethods={option:[],alternation:[],repetition:[],repetitionWithSeparator:[],repetitionMandatory:[],repetitionMandatoryWithSeparator:[]}}visitOption(e){this.dslMethods.option.push(e)}visitRepetitionWithSeparator(e){this.dslMethods.repetitionWithSeparator.push(e)}visitRepetitionMandatory(e){this.dslMethods.repetitionMandatory.push(e)}visitRepetitionMandatoryWithSeparator(e){this.dslMethods.repetitionMandatoryWithSeparator.push(e)}visitRepetition(e){this.dslMethods.repetition.push(e)}visitAlternation(e){this.dslMethods.alternation.push(e)}},ql=new cy;function XM(t){ql.reset(),t.accept(ql);let e=ql.dslMethods;return ql.reset(),e}function fy(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.endOffset=e.endOffset):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset)}function yy(t,e){isNaN(t.startOffset)===!0?(t.startOffset=e.startOffset,t.startColumn=e.startColumn,t.startLine=e.startLine,t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine):t.endOffset<e.endOffset&&(t.endOffset=e.endOffset,t.endColumn=e.endColumn,t.endLine=e.endLine)}function n$(t,e,r){t.children[r]===void 0?t.children[r]=[e]:t.children[r].push(e)}function a$(t,e,r){t.children[e]===void 0?t.children[e]=[r]:t.children[e].push(r)}var JM="name";function hy(t,e){Object.defineProperty(t,JM,{enumerable:!1,configurable:!0,writable:!1,value:e})}function ZM(t,e){let r=Se(t),n=r.length;for(let a=0;a<n;a++){let o=r[a],i=t[o],s=i.length;for(let u=0;u<s;u++){let l=i[u];l.tokenTypeIdx===void 0&&this[l.name](l.children,e)}}}function o$(t,e){let r=function(){};hy(r,t+"BaseSemantics");let n={visit:function(a,o){if(F(a)&&(a=a[0]),!Pt(a))return this[a.name](a.children,o)},validateVisitor:function(){let a=eO(this,e);if(!J(a)){let o=b(a,i=>i.msg);throw Error(`Errors Detected in CST Visitor <${this.constructor.name}>:
	${o.join(`

`).replace(/\n/g,`
	`)}`)}}};return r.prototype=n,r.prototype.constructor=r,r._RULE_NAMES=e,r}function i$(t,e,r){let n=function(){};hy(n,t+"BaseSemanticsWithDefaults");let a=Object.create(r.prototype);return _(e,o=>{a[o]=ZM}),n.prototype=a,n.prototype.constructor=n,n}var gy;(function(t){t[t.REDUNDANT_METHOD=0]="REDUNDANT_METHOD",t[t.MISSING_METHOD=1]="MISSING_METHOD"})(gy||(gy={}));function eO(t,e){return tO(t,e)}function tO(t,e){let r=ft(e,a=>Lt(t[a])===!1),n=b(r,a=>({msg:`Missing visitor method: <${a}> on ${t.constructor.name} CST Visitor.`,type:gy.MISSING_METHOD,methodName:a}));return Ur(n)}var Xl=class{initTreeBuilder(e){if(this.CST_STACK=[],this.outputCst=e.outputCst,this.nodeLocationTracking=z(e,"nodeLocationTracking")?e.nodeLocationTracking:Gt.nodeLocationTracking,!this.outputCst)this.cstInvocationStateUpdate=Le,this.cstFinallyStateUpdate=Le,this.cstPostTerminal=Le,this.cstPostNonTerminal=Le,this.cstPostRule=Le;else if(/full/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=yy,this.setNodeLocationFromNode=yy,this.cstPostRule=Le,this.setInitialNodeLocation=this.setInitialNodeLocationFullRecovery):(this.setNodeLocationFromToken=Le,this.setNodeLocationFromNode=Le,this.cstPostRule=this.cstPostRuleFull,this.setInitialNodeLocation=this.setInitialNodeLocationFullRegular);else if(/onlyOffset/i.test(this.nodeLocationTracking))this.recoveryEnabled?(this.setNodeLocationFromToken=fy,this.setNodeLocationFromNode=fy,this.cstPostRule=Le,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRecovery):(this.setNodeLocationFromToken=Le,this.setNodeLocationFromNode=Le,this.cstPostRule=this.cstPostRuleOnlyOffset,this.setInitialNodeLocation=this.setInitialNodeLocationOnlyOffsetRegular);else if(/none/i.test(this.nodeLocationTracking))this.setNodeLocationFromToken=Le,this.setNodeLocationFromNode=Le,this.cstPostRule=Le,this.setInitialNodeLocation=Le;else throw Error(`Invalid <nodeLocationTracking> config option: "${e.nodeLocationTracking}"`)}setInitialNodeLocationOnlyOffsetRecovery(e){e.location={startOffset:NaN,endOffset:NaN}}setInitialNodeLocationOnlyOffsetRegular(e){e.location={startOffset:this.LA(1).startOffset,endOffset:NaN}}setInitialNodeLocationFullRecovery(e){e.location={startOffset:NaN,startLine:NaN,startColumn:NaN,endOffset:NaN,endLine:NaN,endColumn:NaN}}setInitialNodeLocationFullRegular(e){let r=this.LA(1);e.location={startOffset:r.startOffset,startLine:r.startLine,startColumn:r.startColumn,endOffset:NaN,endLine:NaN,endColumn:NaN}}cstInvocationStateUpdate(e){let r={name:e,children:Object.create(null)};this.setInitialNodeLocation(r),this.CST_STACK.push(r)}cstFinallyStateUpdate(){this.CST_STACK.pop()}cstPostRuleFull(e){let r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?(n.endOffset=r.endOffset,n.endLine=r.endLine,n.endColumn=r.endColumn):(n.startOffset=NaN,n.startLine=NaN,n.startColumn=NaN)}cstPostRuleOnlyOffset(e){let r=this.LA(0),n=e.location;n.startOffset<=r.startOffset?n.endOffset=r.endOffset:n.startOffset=NaN}cstPostTerminal(e,r){let n=this.CST_STACK[this.CST_STACK.length-1];n$(n,r,e),this.setNodeLocationFromToken(n.location,r)}cstPostNonTerminal(e,r){let n=this.CST_STACK[this.CST_STACK.length-1];a$(n,r,e),this.setNodeLocationFromNode(n.location,e.location)}getBaseCstVisitorConstructor(){if(Pt(this.baseCstVisitorConstructor)){let e=o$(this.className,Se(this.gastProductionsCache));return this.baseCstVisitorConstructor=e,e}return this.baseCstVisitorConstructor}getBaseCstVisitorConstructorWithDefaults(){if(Pt(this.baseCstVisitorWithDefaultsConstructor)){let e=i$(this.className,Se(this.gastProductionsCache),this.getBaseCstVisitorConstructor());return this.baseCstVisitorWithDefaultsConstructor=e,e}return this.baseCstVisitorWithDefaultsConstructor}getLastExplicitRuleShortName(){let e=this.RULE_STACK;return e[e.length-1]}getPreviousExplicitRuleShortName(){let e=this.RULE_STACK;return e[e.length-2]}getLastExplicitRuleOccurrenceIndex(){let e=this.RULE_OCCURRENCE_STACK;return e[e.length-1]}};var Jl=class{initLexerAdapter(){this.tokVector=[],this.tokVectorLength=0,this.currIdx=-1}set input(e){if(this.selfAnalysisDone!==!0)throw Error("Missing <performSelfAnalysis> invocation at the end of the Parser's constructor.");this.reset(),this.tokVector=e,this.tokVectorLength=e.length}get input(){return this.tokVector}SKIP_TOKEN(){return this.currIdx<=this.tokVector.length-2?(this.consumeToken(),this.LA(1)):Lo}LA(e){let r=this.currIdx+e;return r<0||this.tokVectorLength<=r?Lo:this.tokVector[r]}consumeToken(){this.currIdx++}exportLexerState(){return this.currIdx}importLexerState(e){this.currIdx=e}resetLexerState(){this.currIdx=-1}moveToTerminatedState(){this.currIdx=this.tokVector.length-1}getLexerPosition(){return this.exportLexerState()}};var Zl=class{ACTION(e){return e.call(this)}consume(e,r,n){return this.consumeInternal(r,e,n)}subrule(e,r,n){return this.subruleInternal(r,e,n)}option(e,r){return this.optionInternal(r,e)}or(e,r){return this.orInternal(r,e)}many(e,r){return this.manyInternal(e,r)}atLeastOne(e,r){return this.atLeastOneInternal(e,r)}CONSUME(e,r){return this.consumeInternal(e,0,r)}CONSUME1(e,r){return this.consumeInternal(e,1,r)}CONSUME2(e,r){return this.consumeInternal(e,2,r)}CONSUME3(e,r){return this.consumeInternal(e,3,r)}CONSUME4(e,r){return this.consumeInternal(e,4,r)}CONSUME5(e,r){return this.consumeInternal(e,5,r)}CONSUME6(e,r){return this.consumeInternal(e,6,r)}CONSUME7(e,r){return this.consumeInternal(e,7,r)}CONSUME8(e,r){return this.consumeInternal(e,8,r)}CONSUME9(e,r){return this.consumeInternal(e,9,r)}SUBRULE(e,r){return this.subruleInternal(e,0,r)}SUBRULE1(e,r){return this.subruleInternal(e,1,r)}SUBRULE2(e,r){return this.subruleInternal(e,2,r)}SUBRULE3(e,r){return this.subruleInternal(e,3,r)}SUBRULE4(e,r){return this.subruleInternal(e,4,r)}SUBRULE5(e,r){return this.subruleInternal(e,5,r)}SUBRULE6(e,r){return this.subruleInternal(e,6,r)}SUBRULE7(e,r){return this.subruleInternal(e,7,r)}SUBRULE8(e,r){return this.subruleInternal(e,8,r)}SUBRULE9(e,r){return this.subruleInternal(e,9,r)}OPTION(e){return this.optionInternal(e,0)}OPTION1(e){return this.optionInternal(e,1)}OPTION2(e){return this.optionInternal(e,2)}OPTION3(e){return this.optionInternal(e,3)}OPTION4(e){return this.optionInternal(e,4)}OPTION5(e){return this.optionInternal(e,5)}OPTION6(e){return this.optionInternal(e,6)}OPTION7(e){return this.optionInternal(e,7)}OPTION8(e){return this.optionInternal(e,8)}OPTION9(e){return this.optionInternal(e,9)}OR(e){return this.orInternal(e,0)}OR1(e){return this.orInternal(e,1)}OR2(e){return this.orInternal(e,2)}OR3(e){return this.orInternal(e,3)}OR4(e){return this.orInternal(e,4)}OR5(e){return this.orInternal(e,5)}OR6(e){return this.orInternal(e,6)}OR7(e){return this.orInternal(e,7)}OR8(e){return this.orInternal(e,8)}OR9(e){return this.orInternal(e,9)}MANY(e){this.manyInternal(0,e)}MANY1(e){this.manyInternal(1,e)}MANY2(e){this.manyInternal(2,e)}MANY3(e){this.manyInternal(3,e)}MANY4(e){this.manyInternal(4,e)}MANY5(e){this.manyInternal(5,e)}MANY6(e){this.manyInternal(6,e)}MANY7(e){this.manyInternal(7,e)}MANY8(e){this.manyInternal(8,e)}MANY9(e){this.manyInternal(9,e)}MANY_SEP(e){this.manySepFirstInternal(0,e)}MANY_SEP1(e){this.manySepFirstInternal(1,e)}MANY_SEP2(e){this.manySepFirstInternal(2,e)}MANY_SEP3(e){this.manySepFirstInternal(3,e)}MANY_SEP4(e){this.manySepFirstInternal(4,e)}MANY_SEP5(e){this.manySepFirstInternal(5,e)}MANY_SEP6(e){this.manySepFirstInternal(6,e)}MANY_SEP7(e){this.manySepFirstInternal(7,e)}MANY_SEP8(e){this.manySepFirstInternal(8,e)}MANY_SEP9(e){this.manySepFirstInternal(9,e)}AT_LEAST_ONE(e){this.atLeastOneInternal(0,e)}AT_LEAST_ONE1(e){return this.atLeastOneInternal(1,e)}AT_LEAST_ONE2(e){this.atLeastOneInternal(2,e)}AT_LEAST_ONE3(e){this.atLeastOneInternal(3,e)}AT_LEAST_ONE4(e){this.atLeastOneInternal(4,e)}AT_LEAST_ONE5(e){this.atLeastOneInternal(5,e)}AT_LEAST_ONE6(e){this.atLeastOneInternal(6,e)}AT_LEAST_ONE7(e){this.atLeastOneInternal(7,e)}AT_LEAST_ONE8(e){this.atLeastOneInternal(8,e)}AT_LEAST_ONE9(e){this.atLeastOneInternal(9,e)}AT_LEAST_ONE_SEP(e){this.atLeastOneSepFirstInternal(0,e)}AT_LEAST_ONE_SEP1(e){this.atLeastOneSepFirstInternal(1,e)}AT_LEAST_ONE_SEP2(e){this.atLeastOneSepFirstInternal(2,e)}AT_LEAST_ONE_SEP3(e){this.atLeastOneSepFirstInternal(3,e)}AT_LEAST_ONE_SEP4(e){this.atLeastOneSepFirstInternal(4,e)}AT_LEAST_ONE_SEP5(e){this.atLeastOneSepFirstInternal(5,e)}AT_LEAST_ONE_SEP6(e){this.atLeastOneSepFirstInternal(6,e)}AT_LEAST_ONE_SEP7(e){this.atLeastOneSepFirstInternal(7,e)}AT_LEAST_ONE_SEP8(e){this.atLeastOneSepFirstInternal(8,e)}AT_LEAST_ONE_SEP9(e){this.atLeastOneSepFirstInternal(9,e)}RULE(e,r,n=Fo){if(be(this.definedRulesNames,e)){let i={message:Kr.buildDuplicateRuleNameError({topLevelRule:e,grammarName:this.className}),type:lt.DUPLICATE_RULE_NAME,ruleName:e};this.definitionErrors.push(i)}this.definedRulesNames.push(e);let a=this.defineRule(e,r,n);return this[e]=a,a}OVERRIDE_RULE(e,r,n=Fo){let a=qC(e,this.definedRulesNames,this.className);this.definitionErrors=this.definitionErrors.concat(a);let o=this.defineRule(e,r,n);return this[e]=o,o}BACKTRACK(e,r){return function(){this.isBackTrackingStack.push(1);let n=this.saveRecogState();try{return e.apply(this,r),!0}catch(a){if(Hn(a))return!1;throw a}finally{this.reloadRecogState(n),this.isBackTrackingStack.pop()}}}getGAstProductions(){return this.gastProductionsCache}getSerializedGastProductions(){return Il(ge(this.gastProductionsCache))}};var ec=class{initRecognizerEngine(e,r){if(this.className=this.constructor.name,this.shortRuleNameToFull={},this.fullRuleNameToShort={},this.ruleShortNameIdx=256,this.tokenMatcher=No,this.subruleIdx=0,this.definedRulesNames=[],this.tokensMap={},this.isBackTrackingStack=[],this.RULE_STACK=[],this.RULE_OCCURRENCE_STACK=[],this.gastProductionsCache={},z(r,"serializedGrammar"))throw Error(`The Parser's configuration can no longer contain a <serializedGrammar> property.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_6-0-0
	For Further details.`);if(F(e)){if(J(e))throw Error(`A Token Vocabulary cannot be empty.
	Note that the first argument for the parser constructor
	is no longer a Token vector (since v4.0).`);if(typeof e[0].startOffset=="number")throw Error(`The Parser constructor no longer accepts a token vector as the first argument.
	See: https://chevrotain.io/docs/changes/BREAKING_CHANGES.html#_4-0-0
	For Further details.`)}if(F(e))this.tokensMap=Fe(e,(o,i)=>(o[i.name]=i,o),{});else if(z(e,"modes")&&Rt(Ze(ge(e.modes)),xC)){let o=Ze(ge(e.modes)),i=Ro(o);this.tokensMap=Fe(i,(s,u)=>(s[u.name]=u,s),{})}else if(ze(e))this.tokensMap=$e(e);else throw new Error("<tokensDictionary> argument must be An Array of Token constructors, A dictionary of Token constructors or an IMultiModeLexerDefinition");this.tokensMap.EOF=cr;let n=z(e,"modes")?Ze(ge(e.modes)):ge(e),a=Rt(n,o=>J(o.categoryMatches));this.tokenMatcher=a?No:yn,hn(ge(this.tokensMap))}defineRule(e,r,n){if(this.selfAnalysisDone)throw Error(`Grammar rule <${e}> may not be defined after the 'performSelfAnalysis' method has been called'
Make sure that all grammar rule definitions are done before 'performSelfAnalysis' is called.`);let a=z(n,"resyncEnabled")?n.resyncEnabled:Fo.resyncEnabled,o=z(n,"recoveryValueFunc")?n.recoveryValueFunc:Fo.recoveryValueFunc,i=this.ruleShortNameIdx<<12;this.ruleShortNameIdx++,this.shortRuleNameToFull[i]=e,this.fullRuleNameToShort[e]=i;let s;return this.outputCst===!0?s=function(...c){try{this.ruleInvocationStateUpdate(i,e,this.subruleIdx),r.apply(this,c);let d=this.CST_STACK[this.CST_STACK.length-1];return this.cstPostRule(d),d}catch(d){return this.invokeRuleCatch(d,a,o)}finally{this.ruleFinallyStateUpdate()}}:s=function(...c){try{return this.ruleInvocationStateUpdate(i,e,this.subruleIdx),r.apply(this,c)}catch(d){return this.invokeRuleCatch(d,a,o)}finally{this.ruleFinallyStateUpdate()}},Object.assign(s,{ruleName:e,originalGrammarAction:r})}invokeRuleCatch(e,r,n){let a=this.RULE_STACK.length===1,o=r&&!this.isBackTracking()&&this.recoveryEnabled;if(Hn(e)){let i=e;if(o){let s=this.findReSyncTokenType();if(this.isInCurrentRuleReSyncSet(s))if(i.resyncedTokens=this.reSyncTo(s),this.outputCst){let u=this.CST_STACK[this.CST_STACK.length-1];return u.recoveredNode=!0,u}else return n(e);else{if(this.outputCst){let u=this.CST_STACK[this.CST_STACK.length-1];u.recoveredNode=!0,i.partialCstResult=u}throw i}}else{if(a)return this.moveToTerminatedState(),n(e);throw i}}else throw e}optionInternal(e,r){let n=this.getKeyForAutomaticLookahead(512,r);return this.optionInternalLogic(e,r,n)}optionInternalLogic(e,r,n){let a=this.getLaFuncFromCache(n),o;if(typeof e!="function"){o=e.DEF;let i=e.GATE;if(i!==void 0){let s=a;a=()=>i.call(this)&&s.call(this)}}else o=e;if(a.call(this)===!0)return o.call(this)}atLeastOneInternal(e,r){let n=this.getKeyForAutomaticLookahead(1024,e);return this.atLeastOneInternalLogic(e,r,n)}atLeastOneInternalLogic(e,r,n){let a=this.getLaFuncFromCache(n),o;if(typeof r!="function"){o=r.DEF;let i=r.GATE;if(i!==void 0){let s=a;a=()=>i.call(this)&&s.call(this)}}else o=r;if(a.call(this)===!0){let i=this.doSingleRepetition(o);for(;a.call(this)===!0&&i===!0;)i=this.doSingleRepetition(o)}else throw this.raiseEarlyExitException(e,De.REPETITION_MANDATORY,r.ERR_MSG);this.attemptInRepetitionRecovery(this.atLeastOneInternal,[e,r],a,1024,e,Ol)}atLeastOneSepFirstInternal(e,r){let n=this.getKeyForAutomaticLookahead(1536,e);this.atLeastOneSepFirstInternalLogic(e,r,n)}atLeastOneSepFirstInternalLogic(e,r,n){let a=r.DEF,o=r.SEP;if(this.getLaFuncFromCache(n).call(this)===!0){a.call(this);let s=()=>this.tokenMatcher(this.LA(1),o);for(;this.tokenMatcher(this.LA(1),o)===!0;)this.CONSUME(o),a.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,o,s,a,rs],s,1536,e,rs)}else throw this.raiseEarlyExitException(e,De.REPETITION_MANDATORY_WITH_SEPARATOR,r.ERR_MSG)}manyInternal(e,r){let n=this.getKeyForAutomaticLookahead(768,e);return this.manyInternalLogic(e,r,n)}manyInternalLogic(e,r,n){let a=this.getLaFuncFromCache(n),o;if(typeof r!="function"){o=r.DEF;let s=r.GATE;if(s!==void 0){let u=a;a=()=>s.call(this)&&u.call(this)}}else o=r;let i=!0;for(;a.call(this)===!0&&i===!0;)i=this.doSingleRepetition(o);this.attemptInRepetitionRecovery(this.manyInternal,[e,r],a,768,e,Ml,i)}manySepFirstInternal(e,r){let n=this.getKeyForAutomaticLookahead(1280,e);this.manySepFirstInternalLogic(e,r,n)}manySepFirstInternalLogic(e,r,n){let a=r.DEF,o=r.SEP;if(this.getLaFuncFromCache(n).call(this)===!0){a.call(this);let s=()=>this.tokenMatcher(this.LA(1),o);for(;this.tokenMatcher(this.LA(1),o)===!0;)this.CONSUME(o),a.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,o,s,a,ts],s,1280,e,ts)}}repetitionSepSecondInternal(e,r,n,a,o){for(;n();)this.CONSUME(r),a.call(this);this.attemptInRepetitionRecovery(this.repetitionSepSecondInternal,[e,r,n,a,o],n,1536,e,o)}doSingleRepetition(e){let r=this.getLexerPosition();return e.call(this),this.getLexerPosition()>r}orInternal(e,r){let n=this.getKeyForAutomaticLookahead(256,r),a=F(e)?e:e.DEF,i=this.getLaFuncFromCache(n).call(this,a);if(i!==void 0)return a[i].ALT.call(this);this.raiseNoAltException(r,e.ERR_MSG)}ruleFinallyStateUpdate(){if(this.RULE_STACK.pop(),this.RULE_OCCURRENCE_STACK.pop(),this.cstFinallyStateUpdate(),this.RULE_STACK.length===0&&this.isAtEndOfInput()===!1){let e=this.LA(1),r=this.errorMessageProvider.buildNotAllInputParsedMessage({firstRedundant:e,ruleName:this.getCurrRuleFullName()});this.SAVE_ERROR(new is(r,e))}}subruleInternal(e,r,n){let a;try{let o=n!==void 0?n.ARGS:void 0;return this.subruleIdx=r,a=e.apply(this,o),this.cstPostNonTerminal(a,n!==void 0&&n.LABEL!==void 0?n.LABEL:e.ruleName),a}catch(o){throw this.subruleInternalError(o,n,e.ruleName)}}subruleInternalError(e,r,n){throw Hn(e)&&e.partialCstResult!==void 0&&(this.cstPostNonTerminal(e.partialCstResult,r!==void 0&&r.LABEL!==void 0?r.LABEL:n),delete e.partialCstResult),e}consumeInternal(e,r,n){let a;try{let o=this.LA(1);this.tokenMatcher(o,e)===!0?(this.consumeToken(),a=o):this.consumeInternalError(e,o,n)}catch(o){a=this.consumeInternalRecovery(e,r,o)}return this.cstPostTerminal(n!==void 0&&n.LABEL!==void 0?n.LABEL:e.name,a),a}consumeInternalError(e,r,n){let a,o=this.LA(0);throw n!==void 0&&n.ERR_MSG?a=n.ERR_MSG:a=this.errorMessageProvider.buildMismatchTokenMessage({expected:e,actual:r,previous:o,ruleName:this.getCurrRuleFullName()}),this.SAVE_ERROR(new Ra(a,r,o))}consumeInternalRecovery(e,r,n){if(this.recoveryEnabled&&n.name==="MismatchedTokenException"&&!this.isBackTracking()){let a=this.getFollowsForInRuleRecovery(e,r);try{return this.tryInRuleRecovery(e,a)}catch(o){throw o.name===ly?n:o}}else throw n}saveRecogState(){let e=this.errors,r=$e(this.RULE_STACK);return{errors:e,lexerState:this.exportLexerState(),RULE_STACK:r,CST_STACK:this.CST_STACK}}reloadRecogState(e){this.errors=e.errors,this.importLexerState(e.lexerState),this.RULE_STACK=e.RULE_STACK}ruleInvocationStateUpdate(e,r,n){this.RULE_OCCURRENCE_STACK.push(n),this.RULE_STACK.push(e),this.cstInvocationStateUpdate(r)}isBackTracking(){return this.isBackTrackingStack.length!==0}getCurrRuleFullName(){let e=this.getLastExplicitRuleShortName();return this.shortRuleNameToFull[e]}shortRuleNameToFullName(e){return this.shortRuleNameToFull[e]}isAtEndOfInput(){return this.tokenMatcher(this.LA(1),cr)}reset(){this.resetLexerState(),this.subruleIdx=0,this.isBackTrackingStack=[],this.errors=[],this.RULE_STACK=[],this.CST_STACK=[],this.RULE_OCCURRENCE_STACK=[]}};var tc=class{initErrorHandler(e){this._errors=[],this.errorMessageProvider=z(e,"errorMessageProvider")?e.errorMessageProvider:Gt.errorMessageProvider}SAVE_ERROR(e){if(Hn(e))return e.context={ruleStack:this.getHumanReadableRuleStack(),ruleOccurrenceStack:$e(this.RULE_OCCURRENCE_STACK)},this._errors.push(e),e;throw Error("Trying to save an Error which is not a RecognitionException")}get errors(){return $e(this._errors)}set errors(e){this._errors=e}raiseEarlyExitException(e,r,n){let a=this.getCurrRuleFullName(),o=this.getGAstProductions()[a],s=Oo(e,o,r,this.maxLookahead)[0],u=[];for(let c=1;c<=this.maxLookahead;c++)u.push(this.LA(c));let l=this.errorMessageProvider.buildEarlyExitMessage({expectedIterationPaths:s,actual:u,previous:this.LA(0),customUserDescription:n,ruleName:a});throw this.SAVE_ERROR(new ss(l,this.LA(1),this.LA(0)))}raiseNoAltException(e,r){let n=this.getCurrRuleFullName(),a=this.getGAstProductions()[n],o=Mo(e,a,this.maxLookahead),i=[];for(let l=1;l<=this.maxLookahead;l++)i.push(this.LA(l));let s=this.LA(0),u=this.errorMessageProvider.buildNoViableAltMessage({expectedPathsPerAlt:o,actual:i,previous:s,customUserDescription:r,ruleName:this.getCurrRuleFullName()});throw this.SAVE_ERROR(new os(u,this.LA(1),s))}};var rc=class{initContentAssist(){}computeContentAssist(e,r){let n=this.gastProductionsCache[e];if(Pt(n))throw Error(`Rule ->${e}<- does not exist in this grammar.`);return Ll([n],r,this.tokenMatcher,this.maxLookahead)}getNextPossibleTokenTypes(e){let r=yt(e.ruleStack),a=this.getGAstProductions()[r];return new _l(a,e).startWalking()}};var oc={description:"This Object indicates the Parser is during Recording Phase"};Object.freeze(oc);var s$=!0,u$=Math.pow(2,8)-1,c$=Nl({name:"RECORDING_PHASE_TOKEN",pattern:qe.NA});hn([c$]);var d$=Ia(c$,`This IToken indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,-1,-1,-1,-1,-1,-1);Object.freeze(d$);var nO={name:`This CSTNode indicates the Parser is in Recording Phase
	See: https://chevrotain.io/docs/guide/internals.html#grammar-recording for details`,children:{}},nc=class{initGastRecorder(e){this.recordingProdStack=[],this.RECORDING_PHASE=!1}enableRecording(){this.RECORDING_PHASE=!0,this.TRACE_INIT("Enable Recording",()=>{for(let e=0;e<10;e++){let r=e>0?e:"";this[`CONSUME${r}`]=function(n,a){return this.consumeInternalRecord(n,e,a)},this[`SUBRULE${r}`]=function(n,a){return this.subruleInternalRecord(n,e,a)},this[`OPTION${r}`]=function(n){return this.optionInternalRecord(n,e)},this[`OR${r}`]=function(n){return this.orInternalRecord(n,e)},this[`MANY${r}`]=function(n){this.manyInternalRecord(e,n)},this[`MANY_SEP${r}`]=function(n){this.manySepFirstInternalRecord(e,n)},this[`AT_LEAST_ONE${r}`]=function(n){this.atLeastOneInternalRecord(e,n)},this[`AT_LEAST_ONE_SEP${r}`]=function(n){this.atLeastOneSepFirstInternalRecord(e,n)}}this.consume=function(e,r,n){return this.consumeInternalRecord(r,e,n)},this.subrule=function(e,r,n){return this.subruleInternalRecord(r,e,n)},this.option=function(e,r){return this.optionInternalRecord(r,e)},this.or=function(e,r){return this.orInternalRecord(r,e)},this.many=function(e,r){this.manyInternalRecord(e,r)},this.atLeastOne=function(e,r){this.atLeastOneInternalRecord(e,r)},this.ACTION=this.ACTION_RECORD,this.BACKTRACK=this.BACKTRACK_RECORD,this.LA=this.LA_RECORD})}disableRecording(){this.RECORDING_PHASE=!1,this.TRACE_INIT("Deleting Recording methods",()=>{let e=this;for(let r=0;r<10;r++){let n=r>0?r:"";delete e[`CONSUME${n}`],delete e[`SUBRULE${n}`],delete e[`OPTION${n}`],delete e[`OR${n}`],delete e[`MANY${n}`],delete e[`MANY_SEP${n}`],delete e[`AT_LEAST_ONE${n}`],delete e[`AT_LEAST_ONE_SEP${n}`]}delete e.consume,delete e.subrule,delete e.option,delete e.or,delete e.many,delete e.atLeastOne,delete e.ACTION,delete e.BACKTRACK,delete e.LA})}ACTION_RECORD(e){}BACKTRACK_RECORD(e,r){return()=>!0}LA_RECORD(e){return Lo}topLevelRuleRecord(e,r){try{let n=new Ft({definition:[],name:e});return n.name=e,this.recordingProdStack.push(n),r.call(this),this.recordingProdStack.pop(),n}catch(n){if(n.KNOWN_RECORDER_ERROR!==!0)try{n.message=n.message+`
	 This error was thrown during the "grammar recording phase" For more info see:
	https://chevrotain.io/docs/guide/internals.html#grammar-recording`}catch{throw n}throw n}}optionInternalRecord(e,r){return ls.call(this,ye,e,r)}atLeastOneInternalRecord(e,r){ls.call(this,xe,r,e)}atLeastOneSepFirstInternalRecord(e,r){ls.call(this,Ae,r,e,s$)}manyInternalRecord(e,r){ls.call(this,ae,r,e)}manySepFirstInternalRecord(e,r){ls.call(this,ve,r,e,s$)}orInternalRecord(e,r){return aO.call(this,e,r)}subruleInternalRecord(e,r,n){if(ac(r),!e||z(e,"ruleName")===!1){let s=new Error(`<SUBRULE${l$(r)}> argument is invalid expecting a Parser method reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw s.KNOWN_RECORDER_ERROR=!0,s}let a=qr(this.recordingProdStack),o=e.ruleName,i=new fe({idx:r,nonTerminalName:o,label:n?.LABEL,referencedRule:void 0});return a.definition.push(i),this.outputCst?nO:oc}consumeInternalRecord(e,r,n){if(ac(r),!Xf(e)){let i=new Error(`<CONSUME${l$(r)}> argument is invalid expecting a TokenType reference but got: <${JSON.stringify(e)}>
 inside top level rule: <${this.recordingProdStack[0].name}>`);throw i.KNOWN_RECORDER_ERROR=!0,i}let a=qr(this.recordingProdStack),o=new Z({idx:r,terminalType:e,label:n?.LABEL});return a.definition.push(o),d$}};function ls(t,e,r,n=!1){ac(r);let a=qr(this.recordingProdStack),o=Lt(e)?e:e.DEF,i=new t({definition:[],idx:r});return n&&(i.separator=e.SEP),z(e,"MAX_LOOKAHEAD")&&(i.maxLookahead=e.MAX_LOOKAHEAD),this.recordingProdStack.push(i),o.call(this),a.definition.push(i),this.recordingProdStack.pop(),oc}function aO(t,e){ac(e);let r=qr(this.recordingProdStack),n=F(t)===!1,a=n===!1?t:t.DEF,o=new we({definition:[],idx:e,ignoreAmbiguities:n&&t.IGNORE_AMBIGUITIES===!0});z(t,"MAX_LOOKAHEAD")&&(o.maxLookahead=t.MAX_LOOKAHEAD);let i=Vi(a,s=>Lt(s.GATE));return o.hasPredicates=i,r.definition.push(o),_(a,s=>{let u=new Te({definition:[]});o.definition.push(u),z(s,"IGNORE_AMBIGUITIES")?u.ignoreAmbiguities=s.IGNORE_AMBIGUITIES:z(s,"GATE")&&(u.ignoreAmbiguities=!0),this.recordingProdStack.push(u),s.ALT.call(this),this.recordingProdStack.pop()}),oc}function l$(t){return t===0?"":`${t}`}function ac(t){if(t<0||t>u$){let e=new Error(`Invalid DSL Method idx value: <${t}>
	Idx value must be a none negative value smaller than ${u$+1}`);throw e.KNOWN_RECORDER_ERROR=!0,e}}var ic=class{initPerformanceTracer(e){if(z(e,"traceInitPerf")){let r=e.traceInitPerf,n=typeof r=="number";this.traceInitMaxIdent=n?r:1/0,this.traceInitPerf=n?r>0:r}else this.traceInitMaxIdent=0,this.traceInitPerf=Gt.traceInitPerf;this.traceInitIndent=-1}TRACE_INIT(e,r){if(this.traceInitPerf===!0){this.traceInitIndent++;let n=new Array(this.traceInitIndent+1).join("	");this.traceInitIndent<this.traceInitMaxIdent&&console.log(`${n}--> <${e}>`);let{time:a,value:o}=Qi(r),i=a>10?console.warn:console.log;return this.traceInitIndent<this.traceInitMaxIdent&&i(`${n}<-- <${e}> time: ${a}ms`),this.traceInitIndent--,o}else return r()}};function p$(t,e){e.forEach(r=>{let n=r.prototype;Object.getOwnPropertyNames(n).forEach(a=>{if(a==="constructor")return;let o=Object.getOwnPropertyDescriptor(n,a);o&&(o.get||o.set)?Object.defineProperty(t.prototype,a,o):t.prototype[a]=r.prototype[a]})})}var Lo=Ia(cr,"",NaN,NaN,NaN,NaN,NaN,NaN);Object.freeze(Lo);var Gt=Object.freeze({recoveryEnabled:!1,maxLookahead:3,dynamicTokensEnabled:!1,outputCst:!0,errorMessageProvider:mn,nodeLocationTracking:"none",traceInitPerf:!1,skipValidations:!1}),Fo=Object.freeze({recoveryValueFunc:()=>{},resyncEnabled:!0}),lt;(function(t){t[t.INVALID_RULE_NAME=0]="INVALID_RULE_NAME",t[t.DUPLICATE_RULE_NAME=1]="DUPLICATE_RULE_NAME",t[t.INVALID_RULE_OVERRIDE=2]="INVALID_RULE_OVERRIDE",t[t.DUPLICATE_PRODUCTIONS=3]="DUPLICATE_PRODUCTIONS",t[t.UNRESOLVED_SUBRULE_REF=4]="UNRESOLVED_SUBRULE_REF",t[t.LEFT_RECURSION=5]="LEFT_RECURSION",t[t.NONE_LAST_EMPTY_ALT=6]="NONE_LAST_EMPTY_ALT",t[t.AMBIGUOUS_ALTS=7]="AMBIGUOUS_ALTS",t[t.CONFLICT_TOKENS_RULES_NAMESPACE=8]="CONFLICT_TOKENS_RULES_NAMESPACE",t[t.INVALID_TOKEN_NAME=9]="INVALID_TOKEN_NAME",t[t.NO_NON_EMPTY_LOOKAHEAD=10]="NO_NON_EMPTY_LOOKAHEAD",t[t.AMBIGUOUS_PREFIX_ALTS=11]="AMBIGUOUS_PREFIX_ALTS",t[t.TOO_MANY_ALTS=12]="TOO_MANY_ALTS",t[t.CUSTOM_LOOKAHEAD_VALIDATION=13]="CUSTOM_LOOKAHEAD_VALIDATION"})(lt||(lt={}));function sc(t=void 0){return function(){return t}}var cs=class t{static performSelfAnalysis(e){throw Error("The **static** `performSelfAnalysis` method has been deprecated.	\nUse the **instance** method with the same name instead.")}performSelfAnalysis(){this.TRACE_INIT("performSelfAnalysis",()=>{let e;this.selfAnalysisDone=!0;let r=this.className;this.TRACE_INIT("toFastProps",()=>{Xi(this)}),this.TRACE_INIT("Grammar Recording",()=>{try{this.enableRecording(),_(this.definedRulesNames,a=>{let i=this[a].originalGrammarAction,s;this.TRACE_INIT(`${a} Rule`,()=>{s=this.topLevelRuleRecord(a,i)}),this.gastProductionsCache[a]=s})}finally{this.disableRecording()}});let n=[];if(this.TRACE_INIT("Grammar Resolving",()=>{n=QC({rules:ge(this.gastProductionsCache)}),this.definitionErrors=this.definitionErrors.concat(n)}),this.TRACE_INIT("Grammar Validations",()=>{if(J(n)&&this.skipValidations===!1){let a=XC({rules:ge(this.gastProductionsCache),tokenTypes:ge(this.tokensMap),errMsgProvider:Kr,grammarName:r}),o=BC({lookaheadStrategy:this.lookaheadStrategy,rules:ge(this.gastProductionsCache),tokenTypes:ge(this.tokensMap),grammarName:r});this.definitionErrors=this.definitionErrors.concat(a,o)}}),J(this.definitionErrors)&&(this.recoveryEnabled&&this.TRACE_INIT("computeAllProdsFollows",()=>{let a=aC(ge(this.gastProductionsCache));this.resyncFollows=a}),this.TRACE_INIT("ComputeLookaheadFunctions",()=>{var a,o;(o=(a=this.lookaheadStrategy).initialize)===null||o===void 0||o.call(a,{rules:ge(this.gastProductionsCache)}),this.preComputeLookaheadFunctions(ge(this.gastProductionsCache))})),!t.DEFER_DEFINITION_ERRORS_HANDLING&&!J(this.definitionErrors))throw e=b(this.definitionErrors,a=>a.message),new Error(`Parser Definition Errors detected:
 ${e.join(`
-------------------------------
`)}`)})}constructor(e,r){this.definitionErrors=[],this.selfAnalysisDone=!1;let n=this;if(n.initErrorHandler(r),n.initLexerAdapter(),n.initLooksAhead(r),n.initRecognizerEngine(e,r),n.initRecoverable(r),n.initTreeBuilder(r),n.initContentAssist(),n.initGastRecorder(r),n.initPerformanceTracer(r),z(r,"ignoredIssues"))throw new Error(`The <ignoredIssues> IParserConfig property has been deprecated.
	Please use the <IGNORE_AMBIGUITIES> flag on the relevant DSL method instead.
	See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#IGNORING_AMBIGUITIES
	For further details.`);this.skipValidations=z(r,"skipValidations")?r.skipValidations:Gt.skipValidations}};cs.DEFER_DEFINITION_ERRORS_HANDLING=!1;p$(cs,[Hl,jl,Xl,Jl,ec,Zl,tc,rc,nc,ic]);var ds=class extends cs{constructor(e,r=Gt){let n=$e(r);n.outputCst=!1,super(e,n)}};function Pa(t,e,r){return`${t.name}_${e}_${r}`}var Un=1,iO=2,f$=4,y$=5;var Bo=7,sO=8,uO=9,lO=10,cO=11,h$=12,ps=class{constructor(e){this.target=e}isEpsilon(){return!1}},Wo=class extends ps{constructor(e,r){super(e),this.tokenType=r}},fs=class extends ps{constructor(e){super(e)}isEpsilon(){return!0}},Go=class extends ps{constructor(e,r,n){super(e),this.rule=r,this.followState=n}isEpsilon(){return!0}};function g$(t){let e={decisionMap:{},decisionStates:[],ruleToStartState:new Map,ruleToStopState:new Map,states:[]};dO(e,t);let r=t.length;for(let n=0;n<r;n++){let a=t[n],o=Ka(e,a,a);o!==void 0&&$O(e,a,o)}return e}function dO(t,e){let r=e.length;for(let n=0;n<r;n++){let a=e[n],o=ht(t,a,void 0,{type:iO}),i=ht(t,a,void 0,{type:Bo});o.stop=i,t.ruleToStartState.set(a,o),t.ruleToStopState.set(a,i)}}function m$(t,e,r){return r instanceof Z?vy(t,e,r.terminalType,r):r instanceof fe?CO(t,e,r):r instanceof we?gO(t,e,r):r instanceof ye?mO(t,e,r):r instanceof ae?pO(t,e,r):r instanceof ve?fO(t,e,r):r instanceof xe?yO(t,e,r):r instanceof Ae?hO(t,e,r):Ka(t,e,r)}function pO(t,e,r){let n=ht(t,e,r,{type:y$});qn(t,n);let a=Ho(t,e,n,r,Ka(t,e,r));return w$(t,e,r,a)}function fO(t,e,r){let n=ht(t,e,r,{type:y$});qn(t,n);let a=Ho(t,e,n,r,Ka(t,e,r)),o=vy(t,e,r.separator,r);return w$(t,e,r,a,o)}function yO(t,e,r){let n=ht(t,e,r,{type:f$});qn(t,n);let a=Ho(t,e,n,r,Ka(t,e,r));return v$(t,e,r,a)}function hO(t,e,r){let n=ht(t,e,r,{type:f$});qn(t,n);let a=Ho(t,e,n,r,Ka(t,e,r)),o=vy(t,e,r.separator,r);return v$(t,e,r,a,o)}function gO(t,e,r){let n=ht(t,e,r,{type:Un});qn(t,n);let a=b(r.definition,i=>m$(t,e,i));return Ho(t,e,n,r,...a)}function mO(t,e,r){let n=ht(t,e,r,{type:Un});qn(t,n);let a=Ho(t,e,n,r,Ka(t,e,r));return vO(t,e,r,a)}function Ka(t,e,r){let n=ft(b(r.definition,a=>m$(t,e,a)),a=>a!==void 0);return n.length===1?n[0]:n.length===0?void 0:SO(t,n)}function v$(t,e,r,n,a){let o=n.left,i=n.right,s=ht(t,e,r,{type:cO});qn(t,s);let u=ht(t,e,r,{type:h$});return o.loopback=s,u.loopback=s,t.decisionMap[Pa(e,a?"RepetitionMandatoryWithSeparator":"RepetitionMandatory",r.idx)]=s,nt(i,s),a===void 0?(nt(s,o),nt(s,u)):(nt(s,u),nt(s,a.left),nt(a.right,o)),{left:o,right:u}}function w$(t,e,r,n,a){let o=n.left,i=n.right,s=ht(t,e,r,{type:lO});qn(t,s);let u=ht(t,e,r,{type:h$}),l=ht(t,e,r,{type:uO});return s.loopback=l,u.loopback=l,nt(s,o),nt(s,u),nt(i,l),a!==void 0?(nt(l,u),nt(l,a.left),nt(a.right,o)):nt(l,s),t.decisionMap[Pa(e,a?"RepetitionWithSeparator":"Repetition",r.idx)]=s,{left:s,right:u}}function vO(t,e,r,n){let a=n.left,o=n.right;return nt(a,o),t.decisionMap[Pa(e,"Option",r.idx)]=a,n}function qn(t,e){return t.decisionStates.push(e),e.decision=t.decisionStates.length-1,e.decision}function Ho(t,e,r,n,...a){let o=ht(t,e,n,{type:sO,start:r});r.end=o;for(let s of a)s!==void 0?(nt(r,s.left),nt(s.right,o)):nt(r,o);let i={left:r,right:o};return t.decisionMap[Pa(e,wO(n),n.idx)]=r,i}function wO(t){if(t instanceof we)return"Alternation";if(t instanceof ye)return"Option";if(t instanceof ae)return"Repetition";if(t instanceof ve)return"RepetitionWithSeparator";if(t instanceof xe)return"RepetitionMandatory";if(t instanceof Ae)return"RepetitionMandatoryWithSeparator";throw new Error("Invalid production type encountered")}function SO(t,e){let r=e.length;for(let o=0;o<r-1;o++){let i=e[o],s;i.left.transitions.length===1&&(s=i.left.transitions[0]);let u=s instanceof Go,l=s,c=e[o+1].left;i.left.type===Un&&i.right.type===Un&&s!==void 0&&(u&&l.followState===i.right||s.target===i.right)?(u?l.followState=c:s.target=c,TO(t,i.right)):nt(i.right,c)}let n=e[0],a=e[r-1];return{left:n.left,right:a.right}}function vy(t,e,r,n){let a=ht(t,e,n,{type:Un}),o=ht(t,e,n,{type:Un});return wy(a,new Wo(o,r)),{left:a,right:o}}function CO(t,e,r){let n=r.referencedRule,a=t.ruleToStartState.get(n),o=ht(t,e,r,{type:Un}),i=ht(t,e,r,{type:Un}),s=new Go(a,n,i);return wy(o,s),{left:o,right:i}}function $O(t,e,r){let n=t.ruleToStartState.get(e);nt(n,r.left);let a=t.ruleToStopState.get(e);return nt(r.right,a),{left:n,right:a}}function nt(t,e){let r=new fs(e);wy(t,r)}function ht(t,e,r,n){let a=Object.assign({atn:t,production:r,epsilonOnlyTransitions:!1,rule:e,transitions:[],nextTokenWithinRule:[],stateNumber:t.states.length},n);return t.states.push(a),a}function wy(t,e){t.transitions.length===0&&(t.epsilonOnlyTransitions=e.isEpsilon()),t.transitions.push(e)}function TO(t,e){t.states.splice(t.states.indexOf(e),1)}var ys={},Uo=class{constructor(){this.map={},this.configs=[]}get size(){return this.configs.length}finalize(){this.map={}}add(e){let r=Sy(e);r in this.map||(this.map[r]=this.configs.length,this.configs.push(e))}get elements(){return this.configs}get alts(){return b(this.configs,e=>e.alt)}get key(){let e="";for(let r in this.map)e+=r+":";return e}};function Sy(t,e=!0){return`${e?`a${t.alt}`:""}s${t.state.stateNumber}:${t.stack.map(r=>r.stateNumber.toString()).join("_")}`}function xO(t,e){let r={};return n=>{let a=n.toString(),o=r[a];return o!==void 0||(o={atnStartState:t,decision:e,states:{}},r[a]=o),o}}var uc=class{constructor(){this.predicates=[]}is(e){return e>=this.predicates.length||this.predicates[e]}set(e,r){this.predicates[e]=r}toString(){let e="",r=this.predicates.length;for(let n=0;n<r;n++)e+=this.predicates[n]===!0?"1":"0";return e}},S$=new uc,hs=class extends vn{constructor(e){var r;super(),this.logging=(r=e?.logging)!==null&&r!==void 0?r:n=>console.log(n)}initialize(e){this.atn=g$(e.rules),this.dfas=AO(this.atn)}validateAmbiguousAlternationAlternatives(){return[]}validateEmptyOrAlternatives(){return[]}buildLookaheadForAlternation(e){let{prodOccurrence:r,rule:n,hasPredicates:a,dynamicTokensEnabled:o}=e,i=this.dfas,s=this.logging,u=Pa(n,"Alternation",r),c=this.atn.decisionMap[u].decision,d=b(Wl({maxLookahead:1,occurrence:r,prodType:"Alternation",rule:n}),p=>b(p,h=>h[0]));if(C$(d,!1)&&!o){let p=Fe(d,(h,w,S)=>(_(w,A=>{A&&(h[A.tokenTypeIdx]=S,_(A.categoryMatches,C=>{h[C]=S}))}),h),{});return a?function(h){var w;let S=this.LA(1),A=p[S.tokenTypeIdx];if(h!==void 0&&A!==void 0){let C=(w=h[A])===null||w===void 0?void 0:w.GATE;if(C!==void 0&&C.call(this)===!1)return}return A}:function(){let h=this.LA(1);return p[h.tokenTypeIdx]}}else return a?function(p){let h=new uc,w=p===void 0?0:p.length;for(let A=0;A<w;A++){let C=p?.[A].GATE;h.set(A,C===void 0||C.call(this))}let S=Cy.call(this,i,c,h,s);return typeof S=="number"?S:void 0}:function(){let p=Cy.call(this,i,c,S$,s);return typeof p=="number"?p:void 0}}buildLookaheadForOptional(e){let{prodOccurrence:r,rule:n,prodType:a,dynamicTokensEnabled:o}=e,i=this.dfas,s=this.logging,u=Pa(n,a,r),c=this.atn.decisionMap[u].decision,d=b(Wl({maxLookahead:1,occurrence:r,prodType:a,rule:n}),p=>b(p,h=>h[0]));if(C$(d)&&d[0][0]&&!o){let p=d[0],h=Ze(p);if(h.length===1&&J(h[0].categoryMatches)){let S=h[0].tokenTypeIdx;return function(){return this.LA(1).tokenTypeIdx===S}}else{let w=Fe(h,(S,A)=>(A!==void 0&&(S[A.tokenTypeIdx]=!0,_(A.categoryMatches,C=>{S[C]=!0})),S),{});return function(){let S=this.LA(1);return w[S.tokenTypeIdx]===!0}}}return function(){let p=Cy.call(this,i,c,S$,s);return typeof p=="object"?!1:p===0}}};function C$(t,e=!0){let r=new Set;for(let n of t){let a=new Set;for(let o of n){if(o===void 0){if(e)break;return!1}let i=[o.tokenTypeIdx].concat(o.categoryMatches);for(let s of i)if(r.has(s)){if(!a.has(s))return!1}else r.add(s),a.add(s)}}return!0}function AO(t){let e=t.decisionStates.length,r=Array(e);for(let n=0;n<e;n++)r[n]=xO(t.decisionStates[n],n);return r}function Cy(t,e,r,n){let a=t[e](r),o=a.start;if(o===void 0){let s=MO(a.atnStartState);o=x$(a,T$(s)),a.start=o}return kO.apply(this,[a,o,r,n])}function kO(t,e,r,n){let a=e,o=1,i=[],s=this.LA(o++);for(;;){let u=EO(a,s);if(u===void 0&&(u=IO.apply(this,[t,a,s,o,r,n])),u===ys)return bO(i,a,s);if(u.isAcceptState===!0)return u.prediction;a=u,i.push(s),s=this.LA(o++)}}function IO(t,e,r,n,a,o){let i=DO(e.configs,r,a);if(i.size===0)return $$(t,e,r,ys),ys;let s=T$(i),u=_O(i,a);if(u!==void 0)s.isAcceptState=!0,s.prediction=u,s.configs.uniqueAlt=u;else if(FO(i)){let l=YS(i.alts);s.isAcceptState=!0,s.prediction=l,s.configs.uniqueAlt=l,RO.apply(this,[t,n,i.alts,o])}return s=$$(t,e,r,s),s}function RO(t,e,r,n){let a=[];for(let l=1;l<=e;l++)a.push(this.LA(l).tokenType);let o=t.atnStartState,i=o.rule,s=o.production,u=PO({topLevelRule:i,ambiguityIndices:r,production:s,prefixPath:a});n(u)}function PO(t){let e=b(t.prefixPath,a=>gn(a)).join(", "),r=t.production.idx===0?"":t.production.idx,n=`Ambiguous Alternatives Detected: <${t.ambiguityIndices.join(", ")}> in <${KO(t.production)}${r}> inside <${t.topLevelRule.name}> Rule,
<${e}> may appears as a prefix path in all these alternatives.
`;return n=n+`See: https://chevrotain.io/docs/guide/resolving_grammar_errors.html#AMBIGUOUS_ALTERNATIVES
For Further details.`,n}function KO(t){if(t instanceof fe)return"SUBRULE";if(t instanceof ye)return"OPTION";if(t instanceof we)return"OR";if(t instanceof xe)return"AT_LEAST_ONE";if(t instanceof Ae)return"AT_LEAST_ONE_SEP";if(t instanceof ve)return"MANY_SEP";if(t instanceof ae)return"MANY";if(t instanceof Z)return"CONSUME";throw Error("non exhaustive match")}function bO(t,e,r){let n=$t(e.configs.elements,o=>o.state.transitions),a=rC(n.filter(o=>o instanceof Wo).map(o=>o.tokenType),o=>o.tokenTypeIdx);return{actualToken:r,possibleTokenTypes:a,tokenPath:t}}function EO(t,e){return t.edges[e.tokenTypeIdx]}function DO(t,e,r){let n=new Uo,a=[];for(let i of t.elements){if(r.is(i.alt)===!1)continue;if(i.state.type===Bo){a.push(i);continue}let s=i.state.transitions.length;for(let u=0;u<s;u++){let l=i.state.transitions[u],c=NO(l,e);c!==void 0&&n.add({state:c,alt:i.alt,stack:i.stack})}}let o;if(a.length===0&&n.size===1&&(o=n),o===void 0){o=new Uo;for(let i of n.elements)lc(i,o)}if(a.length>0&&!zO(o))for(let i of a)o.add(i);return o}function NO(t,e){if(t instanceof Wo&&es(e,t.tokenType))return t.target}function _O(t,e){let r;for(let n of t.elements)if(e.is(n.alt)===!0){if(r===void 0)r=n.alt;else if(r!==n.alt)return}return r}function T$(t){return{configs:t,edges:{},isAcceptState:!1,prediction:-1}}function $$(t,e,r,n){return n=x$(t,n),e.edges[r.tokenTypeIdx]=n,n}function x$(t,e){if(e===ys)return e;let r=e.configs.key,n=t.states[r];return n!==void 0?n:(e.configs.finalize(),t.states[r]=e,e)}function MO(t){let e=new Uo,r=t.transitions.length;for(let n=0;n<r;n++){let o={state:t.transitions[n].target,alt:n,stack:[]};lc(o,e)}return e}function lc(t,e){let r=t.state;if(r.type===Bo){if(t.stack.length>0){let a=[...t.stack],i={state:a.pop(),alt:t.alt,stack:a};lc(i,e)}else e.add(t);return}r.epsilonOnlyTransitions||e.add(t);let n=r.transitions.length;for(let a=0;a<n;a++){let o=r.transitions[a],i=OO(t,o);i!==void 0&&lc(i,e)}}function OO(t,e){if(e instanceof fs)return{state:e.target,alt:t.alt,stack:t.stack};if(e instanceof Go){let r=[...t.stack,e.followState];return{state:e.target,alt:t.alt,stack:r}}}function zO(t){for(let e of t.elements)if(e.state.type===Bo)return!0;return!1}function LO(t){for(let e of t.elements)if(e.state.type!==Bo)return!1;return!0}function FO(t){if(LO(t))return!0;let e=WO(t.elements);return GO(e)&&!BO(e)}function WO(t){let e=new Map;for(let r of t){let n=Sy(r,!1),a=e.get(n);a===void 0&&(a={},e.set(n,a)),a[r.alt]=!0}return e}function GO(t){for(let e of Array.from(t.values()))if(Object.keys(e).length>1)return!0;return!1}function BO(t){for(let e of Array.from(t.values()))if(Object.keys(e).length===1)return!0;return!1}Da();var Ts=class{constructor(){this.nodeStack=[]}get current(){return this.nodeStack[this.nodeStack.length-1]}buildRootNode(e){return this.rootNode=new Xo(e),this.rootNode.root=this.rootNode,this.nodeStack=[this.rootNode],this.rootNode}buildCompositeNode(e){let r=new _a;return r.grammarSource=e,r.root=this.rootNode,this.current.content.push(r),this.nodeStack.push(r),r}buildLeafNode(e,r){let n=new Na(e.startOffset,e.image.length,Ja(e),e.tokenType,!1);return n.grammarSource=r,n.root=this.rootNode,this.current.content.push(n),n}removeNode(e){let r=e.container;if(r){let n=r.content.indexOf(e);n>=0&&r.content.splice(n,1)}}construct(e){let r=this.current;typeof e.$type=="string"&&(this.current.astNode=e),e.$cstNode=r;let n=this.nodeStack.pop();n?.content.length===0&&this.removeNode(n)}addHiddenTokens(e){for(let r of e){let n=new Na(r.startOffset,r.image.length,Ja(r),r.tokenType,!0);n.root=this.rootNode,this.addHiddenToken(this.rootNode,n)}}addHiddenToken(e,r){let{offset:n,end:a}=r;for(let o=0;o<e.content.length;o++){let i=e.content[o],{offset:s,end:u}=i;if(qt(i)&&n>s&&a<u){this.addHiddenToken(i,r);return}else if(a<=s){e.content.splice(o,0,r);return}}e.content.push(r)}},xs=class{get parent(){return this.container}get feature(){return this.grammarSource}get hidden(){return!1}get astNode(){var e,r;let n=typeof((e=this._astNode)===null||e===void 0?void 0:e.$type)=="string"?this._astNode:(r=this.container)===null||r===void 0?void 0:r.astNode;if(!n)throw new Error("This node has no associated AST element");return n}set astNode(e){this._astNode=e}get element(){return this.astNode}get text(){return this.root.fullText.substring(this.offset,this.end)}},Na=class extends xs{get offset(){return this._offset}get length(){return this._length}get end(){return this._offset+this._length}get hidden(){return this._hidden}get tokenType(){return this._tokenType}get range(){return this._range}constructor(e,r,n,a,o=!1){super(),this._hidden=o,this._offset=e,this._tokenType=a,this._length=r,this._range=n}},_a=class extends xs{constructor(){super(...arguments),this.content=new xh(this)}get children(){return this.content}get offset(){var e,r;return(r=(e=this.firstNonHiddenNode)===null||e===void 0?void 0:e.offset)!==null&&r!==void 0?r:0}get length(){return this.end-this.offset}get end(){var e,r;return(r=(e=this.lastNonHiddenNode)===null||e===void 0?void 0:e.end)!==null&&r!==void 0?r:0}get range(){let e=this.firstNonHiddenNode,r=this.lastNonHiddenNode;if(e&&r){if(this._rangeCache===void 0){let{range:n}=e,{range:a}=r;this._rangeCache={start:n.start,end:a.end.line<n.start.line?n.start:a.end}}return this._rangeCache}else return{start:se.create(0,0),end:se.create(0,0)}}get firstNonHiddenNode(){for(let e of this.content)if(!e.hidden)return e;return this.content[0]}get lastNonHiddenNode(){for(let e=this.content.length-1;e>=0;e--){let r=this.content[e];if(!r.hidden)return r}return this.content[this.content.length-1]}},xh=class t extends Array{constructor(e){super(),this.parent=e,Object.setPrototypeOf(this,t.prototype)}push(...e){return this.addParents(e),super.push(...e)}unshift(...e){return this.addParents(e),super.unshift(...e)}splice(e,r,...n){return this.addParents(n),super.splice(e,r,...n)}addParents(e){for(let r of e)r.container=this.parent}},Xo=class extends _a{get text(){return this._text.substring(this.offset,this.end)}get fullText(){return this._text}constructor(e){super(),this._text="",this._text=e??""}};var wc=Symbol("Datatype");function Ah(t){return t.$type===wc}var A$="\u200B",k$=t=>t.endsWith(A$)?t:t+A$,As=class{constructor(e){this._unorderedGroups=new Map,this.lexer=e.parser.Lexer;let r=this.lexer.definition;this.wrapper=new kh(r,Object.assign(Object.assign({},e.parser.ParserConfig),{errorMessageProvider:e.parser.ParserErrorMessageProvider}))}alternatives(e,r){this.wrapper.wrapOr(e,r)}optional(e,r){this.wrapper.wrapOption(e,r)}many(e,r){this.wrapper.wrapMany(e,r)}atLeastOne(e,r){this.wrapper.wrapAtLeastOne(e,r)}isRecording(){return this.wrapper.IS_RECORDING}get unorderedGroups(){return this._unorderedGroups}getRuleStack(){return this.wrapper.RULE_STACK}finalize(){this.wrapper.wrapSelfAnalysis()}},ks=class extends As{get current(){return this.stack[this.stack.length-1]}constructor(e){super(e),this.nodeBuilder=new Ts,this.stack=[],this.assignmentMap=new Map,this.linker=e.references.Linker,this.converter=e.parser.ValueConverter,this.astReflection=e.shared.AstReflection}rule(e,r){let n=e.fragment?void 0:Hi(e)?wc:un(e),a=this.wrapper.DEFINE_RULE(k$(e.name),this.startImplementation(n,r).bind(this));return e.entry&&(this.mainRule=a),a}parse(e){this.nodeBuilder.buildRootNode(e);let r=this.lexer.tokenize(e);this.wrapper.input=r.tokens;let n=this.mainRule.call(this.wrapper,{});return this.nodeBuilder.addHiddenTokens(r.hidden),this.unorderedGroups.clear(),{value:n,lexerErrors:r.errors,parserErrors:this.wrapper.errors}}startImplementation(e,r){return n=>{if(!this.isRecording()){let o={$type:e};this.stack.push(o),e===wc&&(o.value="")}let a;try{a=r(n)}catch{a=void 0}return!this.isRecording()&&a===void 0&&(a=this.construct()),a}}consume(e,r,n){let a=this.wrapper.wrapConsume(e,r);if(!this.isRecording()&&this.isValidToken(a)){let o=this.nodeBuilder.buildLeafNode(a,n),{assignment:i,isCrossRef:s}=this.getAssignment(n),u=this.current;if(i){let l=St(n)?a.image:this.converter.convert(a.image,o);this.assign(i.operator,i.feature,l,o,s)}else if(Ah(u)){let l=a.image;St(n)||(l=this.converter.convert(l,o).toString()),u.value+=l}}}isValidToken(e){return!e.isInsertedInRecovery&&!isNaN(e.startOffset)&&typeof e.endOffset=="number"&&!isNaN(e.endOffset)}subrule(e,r,n,a){let o;this.isRecording()||(o=this.nodeBuilder.buildCompositeNode(n));let i=this.wrapper.wrapSubrule(e,r,a);!this.isRecording()&&o&&o.length>0&&this.performSubruleAssignment(i,n,o)}performSubruleAssignment(e,r,n){let{assignment:a,isCrossRef:o}=this.getAssignment(r);if(a)this.assign(a.operator,a.feature,e,n,o);else if(!a){let i=this.current;if(Ah(i))i.value+=e.toString();else if(typeof e=="object"&&e){let s=e.$type,u=this.assignWithoutOverride(e,i);s&&(u.$type=s);let l=u;this.stack.pop(),this.stack.push(l)}}}action(e,r){if(!this.isRecording()){let n=this.current;if(!n.$cstNode&&r.feature&&r.operator){n=this.construct(!1);let o=n.$cstNode.feature;this.nodeBuilder.buildCompositeNode(o)}let a={$type:e};this.stack.pop(),this.stack.push(a),r.feature&&r.operator&&this.assign(r.operator,r.feature,n,n.$cstNode,!1)}}construct(e=!0){if(this.isRecording())return;let r=this.current;return Bu(r),this.nodeBuilder.construct(r),e&&this.stack.pop(),Ah(r)?this.converter.convert(r.value,r.$cstNode):(_i(this.astReflection,r),r)}getAssignment(e){if(!this.assignmentMap.has(e)){let r=sr(e,It);this.assignmentMap.set(e,{assignment:r,isCrossRef:r?Rr(r.terminal):!1})}return this.assignmentMap.get(e)}assign(e,r,n,a,o){let i=this.current,s;switch(o&&typeof n=="string"?s=this.linker.buildReference(i,r,a,n):s=n,e){case"=":{i[r]=s;break}case"?=":{i[r]=!0;break}case"+=":Array.isArray(i[r])||(i[r]=[]),i[r].push(s)}}assignWithoutOverride(e,r){for(let[n,a]of Object.entries(r)){let o=e[n];o===void 0?e[n]=a:Array.isArray(o)&&Array.isArray(a)&&(a.push(...o),e[n]=a)}return e}get definitionErrors(){return this.wrapper.definitionErrors}},Sc=class{buildMismatchTokenMessage(e){return mn.buildMismatchTokenMessage(e)}buildNotAllInputParsedMessage(e){return mn.buildNotAllInputParsedMessage(e)}buildNoViableAltMessage(e){return mn.buildNoViableAltMessage(e)}buildEarlyExitMessage(e){return mn.buildEarlyExitMessage(e)}},Jo=class extends Sc{buildMismatchTokenMessage({expected:e,actual:r}){return`Expecting ${e.LABEL?"`"+e.LABEL+"`":e.name.endsWith(":KW")?`keyword '${e.name.substring(0,e.name.length-3)}'`:`token of type '${e.name}'`} but found \`${r.image}\`.`}buildNotAllInputParsedMessage({firstRedundant:e}){return`Expecting end of file but found \`${e.image}\`.`}},Is=class extends As{constructor(){super(...arguments),this.tokens=[],this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}action(){}construct(){}parse(e){this.resetState();let r=this.lexer.tokenize(e);return this.tokens=r.tokens,this.wrapper.input=[...this.tokens],this.mainRule.call(this.wrapper,{}),this.unorderedGroups.clear(),{tokens:this.tokens,elementStack:[...this.lastElementStack],tokenIndex:this.nextTokenIndex}}rule(e,r){let n=this.wrapper.DEFINE_RULE(k$(e.name),this.startImplementation(r).bind(this));return e.entry&&(this.mainRule=n),n}resetState(){this.elementStack=[],this.lastElementStack=[],this.nextTokenIndex=0,this.stackSize=0}startImplementation(e){return r=>{let n=this.keepStackSize();try{e(r)}finally{this.resetStackSize(n)}}}removeUnexpectedElements(){this.elementStack.splice(this.stackSize)}keepStackSize(){let e=this.elementStack.length;return this.stackSize=e,e}resetStackSize(e){this.removeUnexpectedElements(),this.stackSize=e}consume(e,r,n){this.wrapper.wrapConsume(e,r),this.isRecording()||(this.lastElementStack=[...this.elementStack,n],this.nextTokenIndex=this.currIdx+1)}subrule(e,r,n,a){this.before(n),this.wrapper.wrapSubrule(e,r,a),this.after(n)}before(e){this.isRecording()||this.elementStack.push(e)}after(e){if(!this.isRecording()){let r=this.elementStack.lastIndexOf(e);r>=0&&this.elementStack.splice(r)}}get currIdx(){return this.wrapper.currIdx}},UO={recoveryEnabled:!0,nodeLocationTracking:"full",skipValidations:!0,errorMessageProvider:new Jo},kh=class extends ds{constructor(e,r){let n=r&&"maxLookahead"in r;super(e,Object.assign(Object.assign(Object.assign({},UO),{lookaheadStrategy:n?new vn({maxLookahead:r.maxLookahead}):new hs}),r))}get IS_RECORDING(){return this.RECORDING_PHASE}DEFINE_RULE(e,r){return this.RULE(e,r)}wrapSelfAnalysis(){this.performSelfAnalysis()}wrapConsume(e,r){return this.consume(e,r)}wrapSubrule(e,r,n){return this.subrule(e,r,{ARGS:[n]})}wrapOr(e,r){this.or(e,r)}wrapOption(e,r){this.option(e,r)}wrapMany(e,r){this.many(e,r)}wrapAtLeastOne(e,r){this.atLeastOne(e,r)}};function $c(t,e,r){return qO({parser:e,tokens:r,rules:new Map,ruleNames:new Map},t),e}function qO(t,e){let r=Fi(e,!1),n=ee(e.rules).filter(He).filter(a=>r.has(a));for(let a of n){let o=Object.assign(Object.assign({},t),{consume:1,optional:1,subrule:1,many:1,or:1});o.rules.set(a.name,t.parser.rule(a,Ma(o,a.definition)))}}function Ma(t,e,r=!1){let n;if(St(e))n=ZO(t,e);else if(Ir(e))n=jO(t,e);else if(It(e))n=Ma(t,e.terminal);else if(Rr(e))n=I$(t,e);else if(Yt(e))n=VO(t,e);else if(eo(e))n=QO(t,e);else if(to(e))n=XO(t,e);else if(yr(e))n=JO(t,e);else if(Xp(e)){let a=t.consume++;n=()=>t.parser.consume(a,cr,e)}else throw new da(e.$cstNode,`Unexpected element type: ${e.$type}`);return R$(t,r?void 0:Cc(e),n,e.cardinality)}function jO(t,e){let r=un(e);return()=>t.parser.action(r,e)}function VO(t,e){let r=e.rule.ref;if(He(r)){let n=t.subrule++,a=e.arguments.length>0?YO(r,e.arguments):()=>({});return o=>t.parser.subrule(n,P$(t,r),e,a(o))}else if(Vt(r)){let n=t.consume++,a=Ih(t,r.name);return()=>t.parser.consume(n,a,e)}else if(r)Rn(r);else throw new da(e.$cstNode,`Undefined rule type: ${e.$type}`)}function YO(t,e){let r=e.map(n=>Sn(n.value));return n=>{let a={};for(let o=0;o<r.length;o++){let i=t.parameters[o],s=r[o];a[i.name]=s(n)}return a}}function Sn(t){if(Ap(t)){let e=Sn(t.left),r=Sn(t.right);return n=>e(n)||r(n)}else if(Tp(t)){let e=Sn(t.left),r=Sn(t.right);return n=>e(n)&&r(n)}else if(Kp(t)){let e=Sn(t.value);return r=>!e(r)}else if(Np(t)){let e=t.parameter.ref.name;return r=>r!==void 0&&r[e]===!0}else if(Cp(t)){let e=!!t.true;return()=>e}Rn(t)}function QO(t,e){if(e.elements.length===1)return Ma(t,e.elements[0]);{let r=[];for(let a of e.elements){let o={ALT:Ma(t,a,!0)},i=Cc(a);i&&(o.GATE=Sn(i)),r.push(o)}let n=t.or++;return a=>t.parser.alternatives(n,r.map(o=>{let i={ALT:()=>o.ALT(a)},s=o.GATE;return s&&(i.GATE=()=>s(a)),i}))}}function XO(t,e){if(e.elements.length===1)return Ma(t,e.elements[0]);let r=[];for(let s of e.elements){let u={ALT:Ma(t,s,!0)},l=Cc(s);l&&(u.GATE=Sn(l)),r.push(u)}let n=t.or++,a=(s,u)=>{let l=u.getRuleStack().join("-");return`uGroup_${s}_${l}`},o=s=>t.parser.alternatives(n,r.map((u,l)=>{let c={ALT:()=>!0},d=t.parser;c.ALT=()=>{if(u.ALT(s),!d.isRecording()){let h=a(n,d);d.unorderedGroups.get(h)||d.unorderedGroups.set(h,[]);let w=d.unorderedGroups.get(h);typeof w?.[l]>"u"&&(w[l]=!0)}};let p=u.GATE;return p?c.GATE=()=>p(s):c.GATE=()=>{let h=d.unorderedGroups.get(a(n,d));return!h?.[l]},c})),i=R$(t,Cc(e),o,"*");return s=>{i(s),t.parser.isRecording()||t.parser.unorderedGroups.delete(a(n,t.parser))}}function JO(t,e){let r=e.elements.map(n=>Ma(t,n));return n=>r.forEach(a=>a(n))}function Cc(t){if(yr(t))return t.guardCondition}function I$(t,e,r=e.terminal){if(r)if(Yt(r)&&He(r.rule.ref)){let n=t.subrule++;return a=>t.parser.subrule(n,P$(t,r.rule.ref),e,a)}else if(Yt(r)&&Vt(r.rule.ref)){let n=t.consume++,a=Ih(t,r.rule.ref.name);return()=>t.parser.consume(n,a,e)}else if(St(r)){let n=t.consume++,a=Ih(t,r.value);return()=>t.parser.consume(n,a,e)}else throw new Error("Could not build cross reference parser");else{if(!e.type.ref)throw new Error("Could not resolve reference to type: "+e.type.$refText);let n=Yu(e.type.ref),a=n?.terminal;if(!a)throw new Error("Could not find name assignment for type: "+un(e.type.ref));return I$(t,e,a)}}function ZO(t,e){let r=t.consume++,n=t.tokens[e.value];if(!n)throw new Error("Could not find token for keyword: "+e.value);return()=>t.parser.consume(r,n,e)}function R$(t,e,r,n){let a=e&&Sn(e);if(!n)if(a){let o=t.or++;return i=>t.parser.alternatives(o,[{ALT:()=>r(i),GATE:()=>a(i)},{ALT:sc(),GATE:()=>!a(i)}])}else return r;if(n==="*"){let o=t.many++;return i=>t.parser.many(o,{DEF:()=>r(i),GATE:a?()=>a(i):void 0})}else if(n==="+"){let o=t.many++;if(a){let i=t.or++;return s=>t.parser.alternatives(i,[{ALT:()=>t.parser.atLeastOne(o,{DEF:()=>r(s)}),GATE:()=>a(s)},{ALT:sc(),GATE:()=>!a(s)}])}else return i=>t.parser.atLeastOne(o,{DEF:()=>r(i)})}else if(n==="?"){let o=t.optional++;return i=>t.parser.optional(o,{DEF:()=>r(i),GATE:a?()=>a(i):void 0})}else Rn(n)}function P$(t,e){let r=ez(t,e),n=t.rules.get(r);if(!n)throw new Error(`Rule "${r}" not found."`);return n}function ez(t,e){if(He(e))return e.name;if(t.ruleNames.has(e))return t.ruleNames.get(e);{let r=e,n=r.$container,a=e.$type;for(;!He(n);)(yr(n)||eo(n)||to(n))&&(a=n.elements.indexOf(r).toString()+":"+a),r=n,n=n.$container;return a=n.name+":"+a,t.ruleNames.set(e,a),a}}function Ih(t,e){let r=t.tokens[e];if(!r)throw new Error(`Token "${e}" not found."`);return r}function Rh(t){let e=t.Grammar,r=t.parser.Lexer,n=new Is(t);return $c(e,n,r.definition),n.finalize(),n}function Ph(t){let e=K$(t);return e.finalize(),e}function K$(t){let e=t.Grammar,r=t.parser.Lexer,n=new ks(t);return $c(e,n,r.definition)}var Rs=class{buildTokens(e,r){let n=ee(Fi(e,!1)),a=this.buildTerminalTokens(n),o=this.buildKeywordTokens(n,a,r);return a.forEach(i=>{let s=i.PATTERN;typeof s=="object"&&s&&"test"in s&&ju(s)?o.unshift(i):o.push(i)}),o}buildTerminalTokens(e){return e.filter(Vt).filter(r=>!r.fragment).map(r=>this.buildTerminalToken(r)).toArray()}buildTerminalToken(e){let r=Pn(e),n=this.requiresCustomPattern(r)?this.regexPatternFunction(r):r,a={name:e.name,PATTERN:n,LINE_BREAKS:!0};return e.hidden&&(a.GROUP=ju(r)?qe.SKIPPED:"hidden"),a}requiresCustomPattern(e){return e.flags.includes("u")?!0:!!(e.source.includes("?<=")||e.source.includes("?<!"))}regexPatternFunction(e){let r=new RegExp(e,e.flags+"y");return(n,a)=>(r.lastIndex=a,r.exec(n))}buildKeywordTokens(e,r,n){return e.filter(He).flatMap(a=>ur(a).filter(St)).distinct(a=>a.value).toArray().sort((a,o)=>o.value.length-a.value.length).map(a=>this.buildKeywordToken(a,r,!!n?.caseInsensitive))}buildKeywordToken(e,r,n){return{name:e.value,PATTERN:this.buildKeywordPattern(e,n),LONGER_ALT:this.findLongerAlt(e,r)}}buildKeywordPattern(e,r){return r?new RegExp(Tf(e.value)):e.value}findLongerAlt(e,r){return r.reduce((n,a)=>{let o=a?.PATTERN;return o?.source&&xf("^"+o.source+"$",e.value)&&n.push(a),n},[])}};var Ps=class{convert(e,r){let n=r.grammarSource;if(Rr(n)&&(n=Wi(n)),Yt(n)){let a=n.rule.ref;if(!a)throw new Error("This cst node was not parsed by a rule.");return this.runConverter(a,e,r)}return e}runConverter(e,r,n){var a;switch(e.name.toUpperCase()){case"INT":return Yr.convertInt(r);case"STRING":return Yr.convertString(r);case"ID":return Yr.convertID(r)}switch((a=Df(e))===null||a===void 0?void 0:a.toLowerCase()){case"number":return Yr.convertNumber(r);case"boolean":return Yr.convertBoolean(r);case"bigint":return Yr.convertBigint(r);case"date":return Yr.convertDate(r);default:return r}}},Yr;(function(t){function e(l){let c="";for(let d=1;d<l.length-1;d++){let p=l.charAt(d);if(p==="\\"){let h=l.charAt(++d);c+=r(h)}else c+=p}return c}t.convertString=e;function r(l){switch(l){case"b":return"\b";case"f":return"\f";case"n":return`
`;case"r":return"\r";case"t":return"	";case"v":return"\v";case"0":return"\0";default:return l}}function n(l){return l.charAt(0)==="^"?l.substring(1):l}t.convertID=n;function a(l){return parseInt(l)}t.convertInt=a;function o(l){return BigInt(l)}t.convertBigint=o;function i(l){return new Date(l)}t.convertDate=i;function s(l){return Number(l)}t.convertNumber=s;function u(l){return l.toLowerCase()==="true"}t.convertBoolean=u})(Yr||(Yr={}));var L={};oe(L,Ot(Ks(),1));function Oh(){return new Promise(t=>{typeof setImmediate>"u"?setTimeout(t,0):setImmediate(t)})}var Mh=0,N$=10;function _$(){return Mh=Date.now(),new L.CancellationTokenSource}function M$(t){N$=t}var Cn=Symbol("OperationCancelled");function Qr(t){return t===Cn}async function We(t){if(t===L.CancellationToken.None)return;let e=Date.now();if(e-Mh>=N$&&(Mh=e,await Oh()),t.isCancellationRequested)throw Cn}var br=class{constructor(){this.promise=new Promise((e,r)=>{this.resolve=n=>(e(n),this),this.reject=n=>(r(n),this)})}};var kc=class t{constructor(e,r,n,a){this._uri=e,this._languageId=r,this._version=n,this._content=a,this._lineOffsets=void 0}get uri(){return this._uri}get languageId(){return this._languageId}get version(){return this._version}getText(e){if(e){let r=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(r,n)}return this._content}update(e,r){for(let n of e)if(t.isIncremental(n)){let a=L$(n.range),o=this.offsetAt(a.start),i=this.offsetAt(a.end);this._content=this._content.substring(0,o)+n.text+this._content.substring(i,this._content.length);let s=Math.max(a.start.line,0),u=Math.max(a.end.line,0),l=this._lineOffsets,c=O$(n.text,!1,o);if(u-s===c.length)for(let p=0,h=c.length;p<h;p++)l[p+s+1]=c[p];else c.length<1e4?l.splice(s+1,u-s,...c):this._lineOffsets=l=l.slice(0,s+1).concat(c,l.slice(u+1));let d=n.text.length-(i-o);if(d!==0)for(let p=s+1+c.length,h=l.length;p<h;p++)l[p]=l[p]+d}else if(t.isFull(n))this._content=n.text,this._lineOffsets=void 0;else throw new Error("Unknown change event received");this._version=r}getLineOffsets(){return this._lineOffsets===void 0&&(this._lineOffsets=O$(this._content,!0)),this._lineOffsets}positionAt(e){e=Math.max(Math.min(e,this._content.length),0);let r=this.getLineOffsets(),n=0,a=r.length;if(a===0)return{line:0,character:e};for(;n<a;){let i=Math.floor((n+a)/2);r[i]>e?a=i:n=i+1}let o=n-1;return e=this.ensureBeforeEOL(e,r[o]),{line:o,character:e-r[o]}}offsetAt(e){let r=this.getLineOffsets();if(e.line>=r.length)return this._content.length;if(e.line<0)return 0;let n=r[e.line];if(e.character<=0)return n;let a=e.line+1<r.length?r[e.line+1]:this._content.length,o=Math.min(n+e.character,a);return this.ensureBeforeEOL(o,n)}ensureBeforeEOL(e,r){for(;e>r&&z$(this._content.charCodeAt(e-1));)e--;return e}get lineCount(){return this.getLineOffsets().length}static isIncremental(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range!==void 0&&(r.rangeLength===void 0||typeof r.rangeLength=="number")}static isFull(e){let r=e;return r!=null&&typeof r.text=="string"&&r.range===void 0&&r.rangeLength===void 0}},Vn;(function(t){function e(a,o,i,s){return new kc(a,o,i,s)}t.create=e;function r(a,o,i){if(a instanceof kc)return a.update(o,i),a;throw new Error("TextDocument.update: document must be created by TextDocument.create")}t.update=r;function n(a,o){let i=a.getText(),s=zh(o.map(cz),(c,d)=>{let p=c.range.start.line-d.range.start.line;return p===0?c.range.start.character-d.range.start.character:p}),u=0,l=[];for(let c of s){let d=a.offsetAt(c.range.start);if(d<u)throw new Error("Overlapping edit");d>u&&l.push(i.substring(u,d)),c.newText.length&&l.push(c.newText),u=a.offsetAt(c.range.end)}return l.push(i.substr(u)),l.join("")}t.applyEdits=n})(Vn||(Vn={}));function zh(t,e){if(t.length<=1)return t;let r=t.length/2|0,n=t.slice(0,r),a=t.slice(r);zh(n,e),zh(a,e);let o=0,i=0,s=0;for(;o<n.length&&i<a.length;)e(n[o],a[i])<=0?t[s++]=n[o++]:t[s++]=a[i++];for(;o<n.length;)t[s++]=n[o++];for(;i<a.length;)t[s++]=a[i++];return t}function O$(t,e,r=0){let n=e?[r]:[];for(let a=0;a<t.length;a++){let o=t.charCodeAt(a);z$(o)&&(o===13&&a+1<t.length&&t.charCodeAt(a+1)===10&&a++,n.push(r+a+1))}return n}function z$(t){return t===13||t===10}function L$(t){let e=t.start,r=t.end;return e.line>r.line||e.line===r.line&&e.character>r.character?{start:r,end:e}:t}function cz(t){let e=L$(t.range);return e!==t.range?{newText:t.newText,range:e}:t}var F$;(()=>{"use strict";var t={470:a=>{function o(u){if(typeof u!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(u))}function i(u,l){for(var c,d="",p=0,h=-1,w=0,S=0;S<=u.length;++S){if(S<u.length)c=u.charCodeAt(S);else{if(c===47)break;c=47}if(c===47){if(!(h===S-1||w===1))if(h!==S-1&&w===2){if(d.length<2||p!==2||d.charCodeAt(d.length-1)!==46||d.charCodeAt(d.length-2)!==46){if(d.length>2){var A=d.lastIndexOf("/");if(A!==d.length-1){A===-1?(d="",p=0):p=(d=d.slice(0,A)).length-1-d.lastIndexOf("/"),h=S,w=0;continue}}else if(d.length===2||d.length===1){d="",p=0,h=S,w=0;continue}}l&&(d.length>0?d+="/..":d="..",p=2)}else d.length>0?d+="/"+u.slice(h+1,S):d=u.slice(h+1,S),p=S-h-1;h=S,w=0}else c===46&&w!==-1?++w:w=-1}return d}var s={resolve:function(){for(var u,l="",c=!1,d=arguments.length-1;d>=-1&&!c;d--){var p;d>=0?p=arguments[d]:(u===void 0&&(u=process.cwd()),p=u),o(p),p.length!==0&&(l=p+"/"+l,c=p.charCodeAt(0)===47)}return l=i(l,!c),c?l.length>0?"/"+l:"/":l.length>0?l:"."},normalize:function(u){if(o(u),u.length===0)return".";var l=u.charCodeAt(0)===47,c=u.charCodeAt(u.length-1)===47;return(u=i(u,!l)).length!==0||l||(u="."),u.length>0&&c&&(u+="/"),l?"/"+u:u},isAbsolute:function(u){return o(u),u.length>0&&u.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var u,l=0;l<arguments.length;++l){var c=arguments[l];o(c),c.length>0&&(u===void 0?u=c:u+="/"+c)}return u===void 0?".":s.normalize(u)},relative:function(u,l){if(o(u),o(l),u===l||(u=s.resolve(u))===(l=s.resolve(l)))return"";for(var c=1;c<u.length&&u.charCodeAt(c)===47;++c);for(var d=u.length,p=d-c,h=1;h<l.length&&l.charCodeAt(h)===47;++h);for(var w=l.length-h,S=p<w?p:w,A=-1,C=0;C<=S;++C){if(C===S){if(w>S){if(l.charCodeAt(h+C)===47)return l.slice(h+C+1);if(C===0)return l.slice(h+C)}else p>S&&(u.charCodeAt(c+C)===47?A=C:C===0&&(A=0));break}var g=u.charCodeAt(c+C);if(g!==l.charCodeAt(h+C))break;g===47&&(A=C)}var y="";for(C=c+A+1;C<=d;++C)C!==d&&u.charCodeAt(C)!==47||(y.length===0?y+="..":y+="/..");return y.length>0?y+l.slice(h+A):(h+=A,l.charCodeAt(h)===47&&++h,l.slice(h))},_makeLong:function(u){return u},dirname:function(u){if(o(u),u.length===0)return".";for(var l=u.charCodeAt(0),c=l===47,d=-1,p=!0,h=u.length-1;h>=1;--h)if((l=u.charCodeAt(h))===47){if(!p){d=h;break}}else p=!1;return d===-1?c?"/":".":c&&d===1?"//":u.slice(0,d)},basename:function(u,l){if(l!==void 0&&typeof l!="string")throw new TypeError('"ext" argument must be a string');o(u);var c,d=0,p=-1,h=!0;if(l!==void 0&&l.length>0&&l.length<=u.length){if(l.length===u.length&&l===u)return"";var w=l.length-1,S=-1;for(c=u.length-1;c>=0;--c){var A=u.charCodeAt(c);if(A===47){if(!h){d=c+1;break}}else S===-1&&(h=!1,S=c+1),w>=0&&(A===l.charCodeAt(w)?--w==-1&&(p=c):(w=-1,p=S))}return d===p?p=S:p===-1&&(p=u.length),u.slice(d,p)}for(c=u.length-1;c>=0;--c)if(u.charCodeAt(c)===47){if(!h){d=c+1;break}}else p===-1&&(h=!1,p=c+1);return p===-1?"":u.slice(d,p)},extname:function(u){o(u);for(var l=-1,c=0,d=-1,p=!0,h=0,w=u.length-1;w>=0;--w){var S=u.charCodeAt(w);if(S!==47)d===-1&&(p=!1,d=w+1),S===46?l===-1?l=w:h!==1&&(h=1):l!==-1&&(h=-1);else if(!p){c=w+1;break}}return l===-1||d===-1||h===0||h===1&&l===d-1&&l===c+1?"":u.slice(l,d)},format:function(u){if(u===null||typeof u!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof u);return function(l,c){var d=c.dir||c.root,p=c.base||(c.name||"")+(c.ext||"");return d?d===c.root?d+p:d+"/"+p:p}(0,u)},parse:function(u){o(u);var l={root:"",dir:"",base:"",ext:"",name:""};if(u.length===0)return l;var c,d=u.charCodeAt(0),p=d===47;p?(l.root="/",c=1):c=0;for(var h=-1,w=0,S=-1,A=!0,C=u.length-1,g=0;C>=c;--C)if((d=u.charCodeAt(C))!==47)S===-1&&(A=!1,S=C+1),d===46?h===-1?h=C:g!==1&&(g=1):h!==-1&&(g=-1);else if(!A){w=C+1;break}return h===-1||S===-1||g===0||g===1&&h===S-1&&h===w+1?S!==-1&&(l.base=l.name=w===0&&p?u.slice(1,S):u.slice(w,S)):(w===0&&p?(l.name=u.slice(1,h),l.base=u.slice(1,S)):(l.name=u.slice(w,h),l.base=u.slice(w,S)),l.ext=u.slice(h,S)),w>0?l.dir=u.slice(0,w-1):p&&(l.dir="/"),l},sep:"/",delimiter:":",win32:null,posix:null};s.posix=s,a.exports=s}},e={};function r(a){var o=e[a];if(o!==void 0)return o.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,r),i.exports}r.d=(a,o)=>{for(var i in o)r.o(o,i)&&!r.o(a,i)&&Object.defineProperty(a,i,{enumerable:!0,get:o[i]})},r.o=(a,o)=>Object.prototype.hasOwnProperty.call(a,o),r.r=a=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var n={};(()=>{let a;r.r(n),r.d(n,{URI:()=>p,Utils:()=>Bt}),typeof process=="object"?a=process.platform==="win32":typeof navigator=="object"&&(a=navigator.userAgent.indexOf("Windows")>=0);let o=/^\w[\w\d+.-]*$/,i=/^\//,s=/^\/\//;function u(N,x){if(!N.scheme&&x)throw new Error(`[UriError]: Scheme is missing: {scheme: "", authority: "${N.authority}", path: "${N.path}", query: "${N.query}", fragment: "${N.fragment}"}`);if(N.scheme&&!o.test(N.scheme))throw new Error("[UriError]: Scheme contains illegal characters.");if(N.path){if(N.authority){if(!i.test(N.path))throw new Error('[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash ("/") character')}else if(s.test(N.path))throw new Error('[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters ("//")')}}let l="",c="/",d=/^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/;class p{static isUri(x){return x instanceof p||!!x&&typeof x.authority=="string"&&typeof x.fragment=="string"&&typeof x.path=="string"&&typeof x.query=="string"&&typeof x.scheme=="string"&&typeof x.fsPath=="string"&&typeof x.with=="function"&&typeof x.toString=="function"}scheme;authority;path;query;fragment;constructor(x,W,O,te,j,R=!1){typeof x=="object"?(this.scheme=x.scheme||l,this.authority=x.authority||l,this.path=x.path||l,this.query=x.query||l,this.fragment=x.fragment||l):(this.scheme=function(I,pe){return I||pe?I:"file"}(x,R),this.authority=W||l,this.path=function(I,pe){switch(I){case"https":case"http":case"file":pe?pe[0]!==c&&(pe=c+pe):pe=c}return pe}(this.scheme,O||l),this.query=te||l,this.fragment=j||l,u(this,R))}get fsPath(){return g(this,!1)}with(x){if(!x)return this;let{scheme:W,authority:O,path:te,query:j,fragment:R}=x;return W===void 0?W=this.scheme:W===null&&(W=l),O===void 0?O=this.authority:O===null&&(O=l),te===void 0?te=this.path:te===null&&(te=l),j===void 0?j=this.query:j===null&&(j=l),R===void 0?R=this.fragment:R===null&&(R=l),W===this.scheme&&O===this.authority&&te===this.path&&j===this.query&&R===this.fragment?this:new w(W,O,te,j,R)}static parse(x,W=!1){let O=d.exec(x);return O?new w(O[2]||l,Q(O[4]||l),Q(O[5]||l),Q(O[7]||l),Q(O[9]||l),W):new w(l,l,l,l,l)}static file(x){let W=l;if(a&&(x=x.replace(/\\/g,c)),x[0]===c&&x[1]===c){let O=x.indexOf(c,2);O===-1?(W=x.substring(2),x=c):(W=x.substring(2,O),x=x.substring(O)||c)}return new w("file",W,x,l,l)}static from(x){let W=new w(x.scheme,x.authority,x.path,x.query,x.fragment);return u(W,!0),W}toString(x=!1){return y(this,x)}toJSON(){return this}static revive(x){if(x){if(x instanceof p)return x;{let W=new w(x);return W._formatted=x.external,W._fsPath=x._sep===h?x.fsPath:null,W}}return x}}let h=a?1:void 0;class w extends p{_formatted=null;_fsPath=null;get fsPath(){return this._fsPath||(this._fsPath=g(this,!1)),this._fsPath}toString(x=!1){return x?y(this,!0):(this._formatted||(this._formatted=y(this,!1)),this._formatted)}toJSON(){let x={$mid:1};return this._fsPath&&(x.fsPath=this._fsPath,x._sep=h),this._formatted&&(x.external=this._formatted),this.path&&(x.path=this.path),this.scheme&&(x.scheme=this.scheme),this.authority&&(x.authority=this.authority),this.query&&(x.query=this.query),this.fragment&&(x.fragment=this.fragment),x}}let S={58:"%3A",47:"%2F",63:"%3F",35:"%23",91:"%5B",93:"%5D",64:"%40",33:"%21",36:"%24",38:"%26",39:"%27",40:"%28",41:"%29",42:"%2A",43:"%2B",44:"%2C",59:"%3B",61:"%3D",32:"%20"};function A(N,x,W){let O,te=-1;for(let j=0;j<N.length;j++){let R=N.charCodeAt(j);if(R>=97&&R<=122||R>=65&&R<=90||R>=48&&R<=57||R===45||R===46||R===95||R===126||x&&R===47||W&&R===91||W&&R===93||W&&R===58)te!==-1&&(O+=encodeURIComponent(N.substring(te,j)),te=-1),O!==void 0&&(O+=N.charAt(j));else{O===void 0&&(O=N.substr(0,j));let I=S[R];I!==void 0?(te!==-1&&(O+=encodeURIComponent(N.substring(te,j)),te=-1),O+=I):te===-1&&(te=j)}}return te!==-1&&(O+=encodeURIComponent(N.substring(te))),O!==void 0?O:N}function C(N){let x;for(let W=0;W<N.length;W++){let O=N.charCodeAt(W);O===35||O===63?(x===void 0&&(x=N.substr(0,W)),x+=S[O]):x!==void 0&&(x+=N[W])}return x!==void 0?x:N}function g(N,x){let W;return W=N.authority&&N.path.length>1&&N.scheme==="file"?`//${N.authority}${N.path}`:N.path.charCodeAt(0)===47&&(N.path.charCodeAt(1)>=65&&N.path.charCodeAt(1)<=90||N.path.charCodeAt(1)>=97&&N.path.charCodeAt(1)<=122)&&N.path.charCodeAt(2)===58?x?N.path.substr(1):N.path[1].toLowerCase()+N.path.substr(2):N.path,a&&(W=W.replace(/\//g,"\\")),W}function y(N,x){let W=x?C:A,O="",{scheme:te,authority:j,path:R,query:I,fragment:pe}=N;if(te&&(O+=te,O+=":"),(j||te==="file")&&(O+=c,O+=c),j){let ue=j.indexOf("@");if(ue!==-1){let Nr=j.substr(0,ue);j=j.substr(ue+1),ue=Nr.lastIndexOf(":"),ue===-1?O+=W(Nr,!1,!1):(O+=W(Nr.substr(0,ue),!1,!1),O+=":",O+=W(Nr.substr(ue+1),!1,!0)),O+="@"}j=j.toLowerCase(),ue=j.lastIndexOf(":"),ue===-1?O+=W(j,!1,!0):(O+=W(j.substr(0,ue),!1,!0),O+=j.substr(ue))}if(R){if(R.length>=3&&R.charCodeAt(0)===47&&R.charCodeAt(2)===58){let ue=R.charCodeAt(1);ue>=65&&ue<=90&&(R=`/${String.fromCharCode(ue+32)}:${R.substr(3)}`)}else if(R.length>=2&&R.charCodeAt(1)===58){let ue=R.charCodeAt(0);ue>=65&&ue<=90&&(R=`${String.fromCharCode(ue+32)}:${R.substr(2)}`)}O+=W(R,!0,!1)}return I&&(O+="?",O+=W(I,!1,!1)),pe&&(O+="#",O+=x?pe:A(pe,!1,!1)),O}function $(N){try{return decodeURIComponent(N)}catch{return N.length>3?N.substr(0,3)+$(N.substr(3)):N}}let K=/(%[0-9A-Za-z][0-9A-Za-z])+/g;function Q(N){return N.match(K)?N.replace(K,x=>$(x)):N}var mt=r(470);let Qe=mt.posix||mt,ir="/";var Bt;(function(N){N.joinPath=function(x,...W){return x.with({path:Qe.join(x.path,...W)})},N.resolvePath=function(x,...W){let O=x.path,te=!1;O[0]!==ir&&(O=ir+O,te=!0);let j=Qe.resolve(O,...W);return te&&j[0]===ir&&!x.authority&&(j=j.substring(1)),x.with({path:j})},N.dirname=function(x){if(x.path.length===0||x.path===ir)return x;let W=Qe.dirname(x.path);return W.length===1&&W.charCodeAt(0)===46&&(W=""),x.with({path:W})},N.basename=function(x){return Qe.basename(x.path)},N.extname=function(x){return Qe.extname(x.path)}})(Bt||(Bt={}))})(),F$=n})();var{URI:Ne,Utils:ri}=F$;var xt;(function(t){t.basename=ri.basename,t.dirname=ri.dirname,t.extname=ri.extname,t.joinPath=ri.joinPath,t.resolvePath=ri.resolvePath;function e(n,a){return n?.toString()===a?.toString()}t.equals=e;function r(n,a){let o=typeof n=="string"?n:n.path,i=typeof a=="string"?a:a.path,s=o.split("/").filter(p=>p.length>0),u=i.split("/").filter(p=>p.length>0),l=0;for(;l<s.length&&s[l]===u[l];l++);let c="../".repeat(s.length-l),d=u.slice(l).join("/");return c+d}t.relative=r})(xt||(xt={}));var B;(function(t){t[t.Changed=0]="Changed",t[t.Parsed=1]="Parsed",t[t.IndexedContent=2]="IndexedContent",t[t.ComputedScopes=3]="ComputedScopes",t[t.Linked=4]="Linked",t[t.IndexedReferences=5]="IndexedReferences",t[t.Validated=6]="Validated"})(B||(B={}));var bs=class{constructor(e){this.serviceRegistry=e.ServiceRegistry,this.textDocuments=e.workspace.TextDocuments,this.fileSystemProvider=e.workspace.FileSystemProvider}async fromUri(e,r=L.CancellationToken.None){let n=await this.fileSystemProvider.readFile(e);return this.createAsync(e,n,r)}fromTextDocument(e,r,n){return r=r??Ne.parse(e.uri),n?this.createAsync(r,e,n):this.create(r,e)}fromString(e,r,n){return n?this.createAsync(r,e,n):this.create(r,e)}fromModel(e,r){return this.create(r,{$model:e})}create(e,r){if(typeof r=="string"){let n=this.parse(e,r);return this.createLangiumDocument(n,e,void 0,r)}else if("$model"in r){let n={value:r.$model,parserErrors:[],lexerErrors:[]};return this.createLangiumDocument(n,e)}else{let n=this.parse(e,r.getText());return this.createLangiumDocument(n,e,r)}}async createAsync(e,r,n){if(typeof r=="string"){let a=await this.parseAsync(e,r,n);return this.createLangiumDocument(a,e,void 0,r)}else{let a=await this.parseAsync(e,r.getText(),n);return this.createLangiumDocument(a,e,r)}}createLangiumDocument(e,r,n,a){let o;if(n)o={parseResult:e,uri:r,state:B.Parsed,references:[],textDocument:n};else{let i=this.createTextDocumentGetter(r,a);o={parseResult:e,uri:r,state:B.Parsed,references:[],get textDocument(){return i()}}}return e.value.$document=o,o}async update(e,r){var n,a;let o=(n=e.parseResult.value.$cstNode)===null||n===void 0?void 0:n.root.fullText,i=(a=this.textDocuments)===null||a===void 0?void 0:a.get(e.uri.toString()),s=i?i.getText():await this.fileSystemProvider.readFile(e.uri);if(i)Object.defineProperty(e,"textDocument",{value:i});else{let u=this.createTextDocumentGetter(e.uri,s);Object.defineProperty(e,"textDocument",{get:u})}return o!==s&&(e.parseResult=await this.parseAsync(e.uri,s,r),e.parseResult.value.$document=e),e.state=B.Parsed,e}parse(e,r){return this.serviceRegistry.getServices(e).parser.LangiumParser.parse(r)}parseAsync(e,r,n){return this.serviceRegistry.getServices(e).parser.AsyncParser.parse(r,n)}createTextDocumentGetter(e,r){let n=this.serviceRegistry,a;return()=>a??(a=Vn.create(e.toString(),n.getServices(e).LanguageMetaData.languageId,0,r??""))}},Es=class{constructor(e){this.documentMap=new Map,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory}get all(){return ee(this.documentMap.values())}addDocument(e){let r=e.uri.toString();if(this.documentMap.has(r))throw new Error(`A document with the URI '${r}' is already present.`);this.documentMap.set(r,e)}getDocument(e){let r=e.toString();return this.documentMap.get(r)}async getOrCreateDocument(e,r){let n=this.getDocument(e);return n||(n=await this.langiumDocumentFactory.fromUri(e,r),this.addDocument(n),n)}createDocument(e,r,n){if(n)return this.langiumDocumentFactory.fromString(r,e,n).then(a=>(this.addDocument(a),a));{let a=this.langiumDocumentFactory.fromString(r,e);return this.addDocument(a),a}}hasDocument(e){return this.documentMap.has(e.toString())}invalidateDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=B.Changed,n.precomputedScopes=void 0,n.references=[],n.diagnostics=void 0),n}deleteDocument(e){let r=e.toString(),n=this.documentMap.get(r);return n&&(n.state=B.Changed,this.documentMap.delete(r)),n}};var Ds=class{constructor(e){this.reflection=e.shared.AstReflection,this.langiumDocuments=()=>e.shared.workspace.LangiumDocuments,this.scopeProvider=e.references.ScopeProvider,this.astNodeLocator=e.workspace.AstNodeLocator}async link(e,r=L.CancellationToken.None){for(let n of Qt(e.parseResult.value))await We(r),ro(n).forEach(a=>this.doLink(a,e))}doLink(e,r){let n=e.reference;if(n._ref===void 0)try{let a=this.getCandidate(e);if(ua(a))n._ref=a;else if(n._nodeDescription=a,this.langiumDocuments().hasDocument(a.documentUri)){let o=this.loadAstNode(a);n._ref=o??this.createLinkingError(e,a)}}catch(a){n._ref=Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${n.$refText}': ${a}`})}r.references.push(n)}unlink(e){for(let r of e.references)delete r._ref,delete r._nodeDescription;e.references=[]}getCandidate(e){let n=this.scopeProvider.getScope(e).getElement(e.reference.$refText);return n??this.createLinkingError(e)}buildReference(e,r,n,a){let o=this,i={$refNode:n,$refText:a,get ref(){var s;if(Re(this._ref))return this._ref;if(cp(this._nodeDescription)){let u=o.loadAstNode(this._nodeDescription);this._ref=u??o.createLinkingError({reference:i,container:e,property:r},this._nodeDescription)}else if(this._ref===void 0){let u=o.getLinkedNode({reference:i,container:e,property:r});if(u.error&&Oe(e).state<B.ComputedScopes)return;this._ref=(s=u.node)!==null&&s!==void 0?s:u.error,this._nodeDescription=u.descr}return Re(this._ref)?this._ref:void 0},get $nodeDescription(){return this._nodeDescription},get error(){return ua(this._ref)?this._ref:void 0}};return i}getLinkedNode(e){try{let r=this.getCandidate(e);if(ua(r))return{error:r};let n=this.loadAstNode(r);return n?{node:n,descr:r}:{descr:r,error:this.createLinkingError(e,r)}}catch(r){return{error:Object.assign(Object.assign({},e),{message:`An error occurred while resolving reference to '${e.reference.$refText}': ${r}`})}}}loadAstNode(e){if(e.node)return e.node;let r=this.langiumDocuments().getDocument(e.documentUri);if(r)return this.astNodeLocator.getAstNode(r.parseResult.value,e.path)}createLinkingError(e,r){let n=Oe(e.container);n.state<B.ComputedScopes&&console.warn(`Attempted reference resolution before document reached ComputedScopes state (${n.uri}).`);let a=this.reflection.getReferenceType(e);return Object.assign(Object.assign({},e),{message:`Could not resolve reference to ${a} named '${e.reference.$refText}'.`,targetDescription:r})}};function Ic(t){return typeof t.name=="string"}var Ns=class{getName(e){if(Ic(e))return e.name}getNameNode(e){return wa(e.$cstNode,"name")}};var _s=class{constructor(e){this.nameProvider=e.references.NameProvider,this.index=e.shared.workspace.IndexManager,this.nodeLocator=e.workspace.AstNodeLocator}findDeclaration(e){if(e){let r=bf(e),n=e.astNode;if(r&&n){let a=n[r.feature];if(wt(a))return a.ref;if(Array.isArray(a)){for(let o of a)if(wt(o)&&o.$refNode&&o.$refNode.offset<=e.offset&&o.$refNode.end>=e.end)return o.ref}}if(n){let a=this.nameProvider.getNameNode(n);if(a&&(a===e||fp(e,a)))return n}}}findDeclarationNode(e){let r=this.findDeclaration(e);if(r?.$cstNode){let n=this.nameProvider.getNameNode(r);return n??r.$cstNode}}findReferences(e,r){let n=[];if(r.includeDeclaration){let o=this.getReferenceToSelf(e);o&&n.push(o)}let a=this.index.findAllReferences(e,this.nodeLocator.getAstNodePath(e));return r.documentUri&&(a=a.filter(o=>xt.equals(o.sourceUri,r.documentUri))),n.push(...a),ee(n)}getReferenceToSelf(e){let r=this.nameProvider.getNameNode(e);if(r){let n=Oe(e),a=this.nodeLocator.getAstNodePath(e);return{sourceUri:n.uri,sourcePath:a,targetUri:n.uri,targetPath:a,segment:ca(r),local:!0}}}};var Xr=class{constructor(e){if(this.map=new Map,e)for(let[r,n]of e)this.add(r,n)}get size(){return Qa.sum(ee(this.map.values()).map(e=>e.length))}clear(){this.map.clear()}delete(e,r){if(r===void 0)return this.map.delete(e);{let n=this.map.get(e);if(n){let a=n.indexOf(r);if(a>=0)return n.length===1?this.map.delete(e):n.splice(a,1),!0}return!1}}get(e){var r;return(r=this.map.get(e))!==null&&r!==void 0?r:[]}has(e,r){if(r===void 0)return this.map.has(e);{let n=this.map.get(e);return n?n.indexOf(r)>=0:!1}}add(e,r){return this.map.has(e)?this.map.get(e).push(r):this.map.set(e,[r]),this}addAll(e,r){return this.map.has(e)?this.map.get(e).push(...r):this.map.set(e,Array.from(r)),this}forEach(e){this.map.forEach((r,n)=>r.forEach(a=>e(a,n,this)))}[Symbol.iterator](){return this.entries().iterator()}entries(){return ee(this.map.entries()).flatMap(([e,r])=>r.map(n=>[e,n]))}keys(){return ee(this.map.keys())}values(){return ee(this.map.values()).flat()}entriesGroupedByKey(){return ee(this.map.entries())}},za=class{get size(){return this.map.size}constructor(e){if(this.map=new Map,this.inverse=new Map,e)for(let[r,n]of e)this.set(r,n)}clear(){this.map.clear(),this.inverse.clear()}set(e,r){return this.map.set(e,r),this.inverse.set(r,e),this}get(e){return this.map.get(e)}getKey(e){return this.inverse.get(e)}delete(e){let r=this.map.get(e);return r!==void 0?(this.map.delete(e),this.inverse.delete(r),!0):!1}};var Ms=class{constructor(e){this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider}async computeExports(e,r=L.CancellationToken.None){return this.computeExportsForNode(e.parseResult.value,e,void 0,r)}async computeExportsForNode(e,r,n=ya,a=L.CancellationToken.None){let o=[];this.exportNode(e,o,r);for(let i of n(e))await We(a),this.exportNode(i,o,r);return o}exportNode(e,r,n){let a=this.nameProvider.getName(e);a&&r.push(this.descriptions.createDescription(e,a,n))}async computeLocalScopes(e,r=L.CancellationToken.None){let n=e.parseResult.value,a=new Xr;for(let o of ur(n))await We(r),this.processNode(o,e,a);return a}processNode(e,r,n){let a=e.$container;if(a){let o=this.nameProvider.getName(e);o&&n.add(a,this.descriptions.createDescription(e,o,r))}}};var ni=class{constructor(e,r,n){var a;this.elements=e,this.outerScope=r,this.caseInsensitive=(a=n?.caseInsensitive)!==null&&a!==void 0?a:!1}getAllElements(){return this.outerScope?this.elements.concat(this.outerScope.getAllElements()):this.elements}getElement(e){let r=this.caseInsensitive?this.elements.find(n=>n.name.toLowerCase()===e.toLowerCase()):this.elements.find(n=>n.name===e);if(r)return r;if(this.outerScope)return this.outerScope.getElement(e)}},Os=class{constructor(e,r,n){var a;this.elements=new Map,this.caseInsensitive=(a=n?.caseInsensitive)!==null&&a!==void 0?a:!1;for(let o of e){let i=this.caseInsensitive?o.name.toLowerCase():o.name;this.elements.set(i,o)}this.outerScope=r}getElement(e){let r=this.caseInsensitive?e.toLowerCase():e,n=this.elements.get(r);if(n)return n;if(this.outerScope)return this.outerScope.getElement(e)}getAllElements(){let e=ee(this.elements.values());return this.outerScope&&(e=e.concat(this.outerScope.getAllElements())),e}},dz={getElement(){},getAllElements(){return Xa}};var ai=class{constructor(){this.toDispose=[],this.isDisposed=!1}onDispose(e){this.toDispose.push(e)}dispose(){this.throwIfDisposed(),this.clear(),this.isDisposed=!0,this.toDispose.forEach(e=>e.dispose())}throwIfDisposed(){if(this.isDisposed)throw new Error("This cache has already been disposed")}},zs=class extends ai{constructor(){super(...arguments),this.cache=new Map}has(e){return this.throwIfDisposed(),this.cache.has(e)}set(e,r){this.throwIfDisposed(),this.cache.set(e,r)}get(e,r){if(this.throwIfDisposed(),this.cache.has(e))return this.cache.get(e);if(r){let n=r();return this.cache.set(e,n),n}else return}delete(e){return this.throwIfDisposed(),this.cache.delete(e)}clear(){this.throwIfDisposed(),this.cache.clear()}},La=class extends ai{constructor(e){super(),this.cache=new Map,this.converter=e??(r=>r)}has(e,r){return this.throwIfDisposed(),this.cacheForContext(e).has(r)}set(e,r,n){this.throwIfDisposed(),this.cacheForContext(e).set(r,n)}get(e,r,n){this.throwIfDisposed();let a=this.cacheForContext(e);if(a.has(r))return a.get(r);if(n){let o=n();return a.set(r,o),o}else return}delete(e,r){return this.throwIfDisposed(),this.cacheForContext(e).delete(r)}clear(e){if(this.throwIfDisposed(),e){let r=this.converter(e);this.cache.delete(r)}else this.cache.clear()}cacheForContext(e){let r=this.converter(e),n=this.cache.get(r);return n||(n=new Map,this.cache.set(r,n)),n}},Rc=class extends La{constructor(e){super(r=>r.toString()),this.onDispose(e.workspace.DocumentBuilder.onUpdate((r,n)=>{let a=r.concat(n);for(let o of a)this.clear(o)}))}},oi=class extends zs{constructor(e){super(),this.onDispose(e.workspace.DocumentBuilder.onUpdate(()=>{this.clear()}))}};var Ls=class{constructor(e){this.reflection=e.shared.AstReflection,this.nameProvider=e.references.NameProvider,this.descriptions=e.workspace.AstNodeDescriptionProvider,this.indexManager=e.shared.workspace.IndexManager,this.globalScopeCache=new oi(e.shared)}getScope(e){let r=[],n=this.reflection.getReferenceType(e),a=Oe(e.container).precomputedScopes;if(a){let i=e.container;do{let s=a.get(i);s.length>0&&r.push(ee(s).filter(u=>this.reflection.isSubtype(u.type,n))),i=i.$container}while(i)}let o=this.getGlobalScope(n,e);for(let i=r.length-1;i>=0;i--)o=this.createScope(r[i],o);return o}createScope(e,r,n){return new ni(ee(e),r,n)}createScopeForNodes(e,r,n){let a=ee(e).map(o=>{let i=this.nameProvider.getName(o);if(i)return this.descriptions.createDescription(o,i)}).nonNullable();return new ni(a,r,n)}getGlobalScope(e,r){return this.globalScopeCache.get(e,()=>new Os(this.indexManager.allElements(e)))}};function Lh(t){return typeof t.$comment=="string"}function W$(t){return typeof t=="object"&&!!t&&("$ref"in t||"$error"in t)}var Fs=class{constructor(e){this.ignoreProperties=new Set(["$container","$containerProperty","$containerIndex","$document","$cstNode"]),this.langiumDocuments=e.shared.workspace.LangiumDocuments,this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider,this.commentProvider=e.documentation.CommentProvider}serialize(e,r={}){let n=r?.replacer,a=(i,s)=>this.replacer(i,s,r),o=n?(i,s)=>n(i,s,a):a;try{return this.currentDocument=Oe(e),JSON.stringify(e,o,r?.space)}finally{this.currentDocument=void 0}}deserialize(e,r={}){let n=JSON.parse(e);return this.linkNode(n,n,r),n}replacer(e,r,{refText:n,sourceText:a,textRegions:o,comments:i,uriConverter:s}){var u,l,c,d;if(!this.ignoreProperties.has(e))if(wt(r)){let p=r.ref,h=n?r.$refText:void 0;if(p){let w=Oe(p),S="";this.currentDocument&&this.currentDocument!==w&&(s?S=s(w.uri,r):S=w.uri.toString());let A=this.astNodeLocator.getAstNodePath(p);return{$ref:`${S}#${A}`,$refText:h}}else return{$error:(l=(u=r.error)===null||u===void 0?void 0:u.message)!==null&&l!==void 0?l:"Could not resolve reference",$refText:h}}else if(Re(r)){let p;if(o&&(p=this.addAstNodeRegionWithAssignmentsTo(Object.assign({},r)),(!e||r.$document)&&p?.$textRegion&&(p.$textRegion.documentURI=(c=this.currentDocument)===null||c===void 0?void 0:c.uri.toString())),a&&!e&&(p??(p=Object.assign({},r)),p.$sourceText=(d=r.$cstNode)===null||d===void 0?void 0:d.text),i){p??(p=Object.assign({},r));let h=this.commentProvider.getComment(r);h&&(p.$comment=h.replace(/\r/g,""))}return p??r}else return r}addAstNodeRegionWithAssignmentsTo(e){let r=n=>({offset:n.offset,end:n.end,length:n.length,range:n.range});if(e.$cstNode){let n=e.$textRegion=r(e.$cstNode),a=n.assignments={};return Object.keys(e).filter(o=>!o.startsWith("$")).forEach(o=>{let i=Gi(e.$cstNode,o).map(r);i.length!==0&&(a[o]=i)}),e}}linkNode(e,r,n,a,o,i){for(let[u,l]of Object.entries(e))if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];W$(d)?l[c]=this.reviveReference(e,u,r,d,n):Re(d)&&this.linkNode(d,r,n,e,u,c)}else W$(l)?e[u]=this.reviveReference(e,u,r,l,n):Re(l)&&this.linkNode(l,r,n,e,u);let s=e;s.$container=a,s.$containerProperty=o,s.$containerIndex=i}reviveReference(e,r,n,a,o){let i=a.$refText,s=a.$error;if(a.$ref){let u=this.getRefNode(n,a.$ref,o.uriConverter);if(Re(u))return i||(i=this.nameProvider.getName(u)),{$refText:i??"",ref:u};s=u}if(s){let u={$refText:i??""};return u.error={container:e,property:r,message:s,reference:u},u}else return}getRefNode(e,r,n){try{let a=r.indexOf("#");if(a===0){let u=this.astNodeLocator.getAstNode(e,r.substring(1));return u||"Could not resolve path: "+r}if(a<0){let u=n?n(r):Ne.parse(r),l=this.langiumDocuments.getDocument(u);return l?l.parseResult.value:"Could not find document for URI: "+r}let o=n?n(r.substring(0,a)):Ne.parse(r.substring(0,a)),i=this.langiumDocuments.getDocument(o);if(!i)return"Could not find document for URI: "+r;if(a===r.length-1)return i.parseResult.value;let s=this.astNodeLocator.getAstNode(i.parseResult.value,r.substring(a+1));return s||"Could not resolve URI: "+r}catch(a){return String(a)}}};var Ws=class{register(e){if(!this.singleton&&!this.map){this.singleton=e;return}if(!this.map&&(this.map={},this.singleton)){for(let r of this.singleton.LanguageMetaData.fileExtensions)this.map[r]=this.singleton;this.singleton=void 0}for(let r of e.LanguageMetaData.fileExtensions)this.map[r]!==void 0&&this.map[r]!==e&&console.warn(`The file extension ${r} is used by multiple languages. It is now assigned to '${e.LanguageMetaData.languageId}'.`),this.map[r]=e}getServices(e){if(this.singleton!==void 0)return this.singleton;if(this.map===void 0)throw new Error("The service registry is empty. Use `register` to register the services of a language.");let r=xt.extname(e),n=this.map[r];if(!n)throw new Error(`The service registry contains no services for the extension '${r}'.`);return n}get all(){return this.singleton!==void 0?[this.singleton]:this.map!==void 0?Object.values(this.map):[]}};function Pc(t){return{code:t}}var ii;(function(t){t.all=["fast","slow","built-in"]})(ii||(ii={}));var Gs=class{constructor(e){this.entries=new Xr,this.reflection=e.shared.AstReflection}register(e,r=this,n="fast"){if(n==="built-in")throw new Error("The 'built-in' category is reserved for lexer, parser, and linker errors.");for(let[a,o]of Object.entries(e)){let i=o;if(Array.isArray(i))for(let s of i){let u={check:this.wrapValidationException(s,r),category:n};this.addEntry(a,u)}else if(typeof i=="function"){let s={check:this.wrapValidationException(i,r),category:n};this.addEntry(a,s)}}}wrapValidationException(e,r){return async(n,a,o)=>{try{await e.call(r,n,a,o)}catch(i){if(Qr(i))throw i;console.error("An error occurred during validation:",i);let s=i instanceof Error?i.message:String(i);i instanceof Error&&i.stack&&console.error(i.stack),a("error","An error occurred during validation: "+s,{node:n})}}}addEntry(e,r){if(e==="AstNode"){this.entries.add("AstNode",r);return}for(let n of this.reflection.getAllSubTypes(e))this.entries.add(n,r)}getChecks(e,r){let n=ee(this.entries.get(e)).concat(this.entries.get("AstNode"));return r&&(n=n.filter(a=>r.includes(a.category))),n.map(a=>a.check)}};var Bs=class{constructor(e){this.validationRegistry=e.validation.ValidationRegistry,this.metadata=e.LanguageMetaData}async validateDocument(e,r={},n=L.CancellationToken.None){let a=e.parseResult,o=[];if(await We(n),(!r.categories||r.categories.includes("built-in"))&&(this.processLexingErrors(a,o,r),r.stopAfterLexingErrors&&o.some(i=>{var s;return((s=i.data)===null||s===void 0?void 0:s.code)===$n.LexingError})||(this.processParsingErrors(a,o,r),r.stopAfterParsingErrors&&o.some(i=>{var s;return((s=i.data)===null||s===void 0?void 0:s.code)===$n.ParsingError}))||(this.processLinkingErrors(e,o,r),r.stopAfterLinkingErrors&&o.some(i=>{var s;return((s=i.data)===null||s===void 0?void 0:s.code)===$n.LinkingError}))))return o;try{o.push(...await this.validateAst(a.value,r,n))}catch(i){if(Qr(i))throw i;console.error("An error occurred during validation:",i)}return await We(n),o}processLexingErrors(e,r,n){for(let a of e.lexerErrors){let o={severity:Kc("error"),range:{start:{line:a.line-1,character:a.column-1},end:{line:a.line-1,character:a.column+a.length-1}},message:a.message,data:Pc($n.LexingError),source:this.getSource()};r.push(o)}}processParsingErrors(e,r,n){for(let a of e.parserErrors){let o;if(isNaN(a.token.startOffset)){if("previousToken"in a){let i=a.previousToken;if(isNaN(i.startOffset)){let s={line:0,character:0};o={start:s,end:s}}else{let s={line:i.endLine-1,character:i.endColumn};o={start:s,end:s}}}}else o=Ja(a.token);if(o){let i={severity:Kc("error"),range:o,message:a.message,data:Pc($n.ParsingError),source:this.getSource()};r.push(i)}}}processLinkingErrors(e,r,n){for(let a of e.references){let o=a.error;if(o){let i={node:o.container,property:o.property,index:o.index,data:{code:$n.LinkingError,containerType:o.container.$type,property:o.property,refText:o.reference.$refText}};r.push(this.toDiagnostic("error",o.message,i))}}}async validateAst(e,r,n=L.CancellationToken.None){let a=[],o=(i,s,u)=>{a.push(this.toDiagnostic(i,s,u))};return await Promise.all(Qt(e).map(async i=>{await We(n);let s=this.validationRegistry.getChecks(i.$type,r.categories);for(let u of s)await u(i,o,n)})),a}toDiagnostic(e,r,n){return{message:r,range:G$(n),severity:Kc(e),code:n.code,codeDescription:n.codeDescription,tags:n.tags,relatedInformation:n.relatedInformation,data:n.data,source:this.getSource()}}getSource(){return this.metadata.languageId}};function G$(t){if(t.range)return t.range;let e;return typeof t.property=="string"?e=wa(t.node.$cstNode,t.property,t.index):typeof t.keyword=="string"&&(e=Bi(t.node.$cstNode,t.keyword,t.index)),e??(e=t.node.$cstNode),e?e.range:{start:{line:0,character:0},end:{line:0,character:0}}}function Kc(t){switch(t){case"error":return 1;case"warning":return 2;case"info":return 3;case"hint":return 4;default:throw new Error("Invalid diagnostic severity: "+t)}}var $n;(function(t){t.LexingError="lexing-error",t.ParsingError="parsing-error",t.LinkingError="linking-error"})($n||($n={}));var Hs=class{constructor(e){this.astNodeLocator=e.workspace.AstNodeLocator,this.nameProvider=e.references.NameProvider}createDescription(e,r,n=Oe(e)){r??(r=this.nameProvider.getName(e));let a=this.astNodeLocator.getAstNodePath(e);if(!r)throw new Error(`Node at path ${a} has no name.`);let o,i=()=>{var s;return o??(o=ca((s=this.nameProvider.getNameNode(e))!==null&&s!==void 0?s:e.$cstNode))};return{node:e,name:r,get nameSegment(){return i()},selectionSegment:ca(e.$cstNode),type:e.$type,documentUri:n.uri,path:a}}},Us=class{constructor(e){this.nodeLocator=e.workspace.AstNodeLocator}async createDescriptions(e,r=L.CancellationToken.None){let n=[],a=e.parseResult.value;for(let o of Qt(a))await We(r),ro(o).filter(i=>!ua(i)).forEach(i=>{let s=this.createDescription(i);s&&n.push(s)});return n}createDescription(e){let r=e.reference.$nodeDescription,n=e.reference.$refNode;if(!r||!n)return;let a=Oe(e.container).uri;return{sourceUri:a,sourcePath:this.nodeLocator.getAstNodePath(e.container),targetUri:r.documentUri,targetPath:r.path,segment:ca(n),local:xt.equals(r.documentUri,a)}}};var qs=class{constructor(){this.segmentSeparator="/",this.indexSeparator="@"}getAstNodePath(e){if(e.$container){let r=this.getAstNodePath(e.$container),n=this.getPathSegment(e);return r+this.segmentSeparator+n}return""}getPathSegment({$containerProperty:e,$containerIndex:r}){if(!e)throw new Error("Missing '$containerProperty' in AST node.");return r!==void 0?e+this.indexSeparator+r:e}getAstNode(e,r){return r.split(this.segmentSeparator).reduce((a,o)=>{if(!a||o.length===0)return a;let i=o.indexOf(this.indexSeparator);if(i>0){let s=o.substring(0,i),u=parseInt(o.substring(i+1)),l=a[s];return l?.[u]}return a[o]},e)}};var js=class{constructor(e){this.settings={},this.workspaceConfig=!1,this.serviceRegistry=e.ServiceRegistry}initialize(e){var r,n;this.workspaceConfig=(n=(r=e.capabilities.workspace)===null||r===void 0?void 0:r.configuration)!==null&&n!==void 0?n:!1}async initialized(e){if(this.workspaceConfig){if(e.register){let r=this.serviceRegistry.all;e.register({section:r.map(n=>this.toSectionName(n.LanguageMetaData.languageId))})}if(e.getConfiguration){let r=this.serviceRegistry.all.map(a=>({section:this.toSectionName(a.LanguageMetaData.languageId)})),n=await e.getConfiguration(r);r.forEach((a,o)=>{this.updateSectionConfiguration(a.section,n[o])})}}}updateConfiguration(e){e.settings&&Object.keys(e.settings).forEach(r=>{this.updateSectionConfiguration(r,e.settings[r])})}updateSectionConfiguration(e,r){this.settings[e]=r}async getConfiguration(e,r){let n=this.toSectionName(e);if(this.settings[n])return this.settings[n][r]}toSectionName(e){return`${e}`}};var Fa;(function(t){function e(r){return{dispose:async()=>await r()}}t.create=e})(Fa||(Fa={}));var Vs=class{constructor(e){this.updateBuildOptions={validation:{categories:["built-in","fast"]}},this.updateListeners=[],this.buildPhaseListeners=new Xr,this.buildState=new Map,this.documentBuildWaiters=new Map,this.currentState=B.Changed,this.langiumDocuments=e.workspace.LangiumDocuments,this.langiumDocumentFactory=e.workspace.LangiumDocumentFactory,this.indexManager=e.workspace.IndexManager,this.serviceRegistry=e.ServiceRegistry}async build(e,r={},n=L.CancellationToken.None){var a,o;for(let i of e){let s=i.uri.toString();if(i.state===B.Validated){if(typeof r.validation=="boolean"&&r.validation)i.state=B.IndexedReferences,i.diagnostics=void 0,this.buildState.delete(s);else if(typeof r.validation=="object"){let u=this.buildState.get(s),l=(a=u?.result)===null||a===void 0?void 0:a.validationChecks;if(l){let d=((o=r.validation.categories)!==null&&o!==void 0?o:ii.all).filter(p=>!l.includes(p));d.length>0&&(this.buildState.set(s,{completed:!1,options:{validation:Object.assign(Object.assign({},r.validation),{categories:d})},result:u.result}),i.state=B.IndexedReferences)}}}else this.buildState.delete(s)}this.currentState=B.Changed,await this.emitUpdate(e.map(i=>i.uri),[]),await this.buildDocuments(e,r,n)}async update(e,r,n=L.CancellationToken.None){this.currentState=B.Changed;for(let i of r)this.langiumDocuments.deleteDocument(i),this.buildState.delete(i.toString()),this.indexManager.remove(i);for(let i of e){if(!this.langiumDocuments.invalidateDocument(i)){let u=this.langiumDocumentFactory.fromModel({$type:"INVALID"},i);u.state=B.Changed,this.langiumDocuments.addDocument(u)}this.buildState.delete(i.toString())}let a=ee(e).concat(r).map(i=>i.toString()).toSet();this.langiumDocuments.all.filter(i=>!a.has(i.uri.toString())&&this.shouldRelink(i,a)).forEach(i=>{this.serviceRegistry.getServices(i.uri).references.Linker.unlink(i),i.state=Math.min(i.state,B.ComputedScopes),i.diagnostics=void 0}),await this.emitUpdate(e,r),await We(n);let o=this.langiumDocuments.all.filter(i=>{var s;return i.state<B.Linked||!(!((s=this.buildState.get(i.uri.toString()))===null||s===void 0)&&s.completed)}).toArray();await this.buildDocuments(o,this.updateBuildOptions,n)}async emitUpdate(e,r){await Promise.all(this.updateListeners.map(n=>n(e,r)))}shouldRelink(e,r){return e.references.some(n=>n.error!==void 0)?!0:this.indexManager.isAffected(e,r)}onUpdate(e){return this.updateListeners.push(e),Fa.create(()=>{let r=this.updateListeners.indexOf(e);r>=0&&this.updateListeners.splice(r,1)})}async buildDocuments(e,r,n){this.prepareBuild(e,r),await this.runCancelable(e,B.Parsed,n,o=>{this.langiumDocumentFactory.update(o,n)}),await this.runCancelable(e,B.IndexedContent,n,o=>this.indexManager.updateContent(o,n)),await this.runCancelable(e,B.ComputedScopes,n,async o=>{let i=this.serviceRegistry.getServices(o.uri).references.ScopeComputation;o.precomputedScopes=await i.computeLocalScopes(o,n)}),await this.runCancelable(e,B.Linked,n,o=>this.serviceRegistry.getServices(o.uri).references.Linker.link(o,n)),await this.runCancelable(e,B.IndexedReferences,n,o=>this.indexManager.updateReferences(o,n));let a=e.filter(o=>this.shouldValidate(o));await this.runCancelable(a,B.Validated,n,o=>this.validate(o,n));for(let o of e){let i=this.buildState.get(o.uri.toString());i&&(i.completed=!0)}}prepareBuild(e,r){for(let n of e){let a=n.uri.toString(),o=this.buildState.get(a);(!o||o.completed)&&this.buildState.set(a,{completed:!1,options:r,result:o?.result})}}async runCancelable(e,r,n,a){let o=e.filter(i=>i.state<r);for(let i of o)await We(n),await a(i),i.state=r;await this.notifyBuildPhase(o,r,n),this.currentState=r}onBuildPhase(e,r){return this.buildPhaseListeners.add(e,r),Fa.create(()=>{this.buildPhaseListeners.delete(e,r)})}waitUntil(e,r,n){let a;if(r&&"path"in r?a=r:n=r,n??(n=L.CancellationToken.None),a){let o=this.langiumDocuments.getDocument(a);if(o&&o.state>e)return Promise.resolve(a)}return this.currentState>=e?Promise.resolve(void 0):n.isCancellationRequested?Promise.reject(Cn):new Promise((o,i)=>{let s=this.onBuildPhase(e,()=>{if(s.dispose(),u.dispose(),a){let l=this.langiumDocuments.getDocument(a);o(l?.uri)}else o(void 0)}),u=n.onCancellationRequested(()=>{s.dispose(),u.dispose(),i(Cn)})})}async notifyBuildPhase(e,r,n){if(e.length===0)return;let a=this.buildPhaseListeners.get(r);for(let o of a)await We(n),await o(e,n)}shouldValidate(e){return!!this.getBuildOptions(e).validation}async validate(e,r){var n,a;let o=this.serviceRegistry.getServices(e.uri).validation.DocumentValidator,i=this.getBuildOptions(e).validation,s=typeof i=="object"?i:void 0,u=await o.validateDocument(e,s,r);e.diagnostics?e.diagnostics.push(...u):e.diagnostics=u;let l=this.buildState.get(e.uri.toString());if(l){(n=l.result)!==null&&n!==void 0||(l.result={});let c=(a=s?.categories)!==null&&a!==void 0?a:ii.all;l.result.validationChecks?l.result.validationChecks.push(...c):l.result.validationChecks=[...c]}}getBuildOptions(e){var r,n;return(n=(r=this.buildState.get(e.uri.toString()))===null||r===void 0?void 0:r.options)!==null&&n!==void 0?n:{}}};var Ys=class{constructor(e){this.symbolIndex=new Map,this.symbolByTypeIndex=new La,this.referenceIndex=new Map,this.documents=e.workspace.LangiumDocuments,this.serviceRegistry=e.ServiceRegistry,this.astReflection=e.AstReflection}findAllReferences(e,r){let n=Oe(e).uri,a=[];return this.referenceIndex.forEach(o=>{o.forEach(i=>{xt.equals(i.targetUri,n)&&i.targetPath===r&&a.push(i)})}),ee(a)}allElements(e,r){let n=ee(this.symbolIndex.keys());return r&&(n=n.filter(a=>!r||r.has(a))),n.map(a=>this.getFileDescriptions(a,e)).flat()}getFileDescriptions(e,r){var n;return r?this.symbolByTypeIndex.get(e,r,()=>{var o;return((o=this.symbolIndex.get(e))!==null&&o!==void 0?o:[]).filter(s=>this.astReflection.isSubtype(s.type,r))}):(n=this.symbolIndex.get(e))!==null&&n!==void 0?n:[]}remove(e){let r=e.toString();this.symbolIndex.delete(r),this.symbolByTypeIndex.clear(r),this.referenceIndex.delete(r)}async updateContent(e,r=L.CancellationToken.None){let a=await this.serviceRegistry.getServices(e.uri).references.ScopeComputation.computeExports(e,r),o=e.uri.toString();this.symbolIndex.set(o,a),this.symbolByTypeIndex.clear(o)}async updateReferences(e,r=L.CancellationToken.None){let a=await this.serviceRegistry.getServices(e.uri).workspace.ReferenceDescriptionProvider.createDescriptions(e,r);this.referenceIndex.set(e.uri.toString(),a)}isAffected(e,r){let n=this.referenceIndex.get(e.uri.toString());return n?n.some(a=>!a.local&&r.has(a.targetUri.toString())):!1}};var Qs=class{constructor(e){this.initialBuildOptions={},this.serviceRegistry=e.ServiceRegistry,this.langiumDocuments=e.workspace.LangiumDocuments,this.documentBuilder=e.workspace.DocumentBuilder,this.fileSystemProvider=e.workspace.FileSystemProvider,this.mutex=e.workspace.WorkspaceLock}initialize(e){var r;this.folders=(r=e.workspaceFolders)!==null&&r!==void 0?r:void 0}initialized(e){return this.mutex.write(r=>{var n;return this.initializeWorkspace((n=this.folders)!==null&&n!==void 0?n:[],r)})}async initializeWorkspace(e,r=L.CancellationToken.None){let n=this.serviceRegistry.all.flatMap(i=>i.LanguageMetaData.fileExtensions),a=[],o=i=>{a.push(i),this.langiumDocuments.hasDocument(i.uri)||this.langiumDocuments.addDocument(i)};await this.loadAdditionalDocuments(e,o),await Promise.all(e.map(i=>[i,this.getRootFolder(i)]).map(async i=>this.traverseFolder(...i,n,o))),await We(r),await this.documentBuilder.build(a,this.initialBuildOptions,r)}loadAdditionalDocuments(e,r){return Promise.resolve()}getRootFolder(e){return Ne.parse(e.uri)}async traverseFolder(e,r,n,a){let o=await this.fileSystemProvider.readDirectory(r);await Promise.all(o.map(async i=>{if(this.includeEntry(e,i,n)){if(i.isDirectory)await this.traverseFolder(e,i.uri,n,a);else if(i.isFile){let s=await this.langiumDocuments.getOrCreateDocument(i.uri);a(s)}}}))}includeEntry(e,r,n){let a=xt.basename(r.uri);if(a.startsWith("."))return!1;if(r.isDirectory)return a!=="node_modules"&&a!=="out";if(r.isFile){let o=xt.extname(r.uri);return n.includes(o)}return!1}};var Xs=class{constructor(e){let r=e.parser.TokenBuilder.buildTokens(e.Grammar,{caseInsensitive:e.LanguageMetaData.caseInsensitive});this.tokenTypes=this.toTokenTypeDictionary(r);let n=Fh(r)?Object.values(r):r;this.chevrotainLexer=new qe(n,{positionTracking:"full"})}get definition(){return this.tokenTypes}tokenize(e){var r;let n=this.chevrotainLexer.tokenize(e);return{tokens:n.tokens,errors:n.errors,hidden:(r=n.groups.hidden)!==null&&r!==void 0?r:[]}}toTokenTypeDictionary(e){if(Fh(e))return e;let r=Wh(e)?Object.values(e.modes).flat():e,n={};return r.forEach(a=>n[a.name]=a),n}};function B$(t){return Array.isArray(t)&&(t.length===0||"name"in t[0])}function Wh(t){return t&&"modes"in t&&"defaultMode"in t}function Fh(t){return!B$(t)&&!Wh(t)}Da();function Hh(t,e,r){let n,a;typeof t=="string"?(a=e,n=r):(a=t.range.start,n=e),a||(a=se.create(0,0));let o=q$(t),i=qh(n),s=fz({lines:o,position:a,options:i});return vz({index:0,tokens:s,position:a})}function Uh(t,e){let r=qh(e),n=q$(t);if(n.length===0)return!1;let a=n[0],o=n[n.length-1],i=r.start,s=r.end;return!!i?.exec(a)&&!!s?.exec(o)}function q$(t){let e="";return typeof t=="string"?e=t:e=t.text,e.split(Cf)}var H$=/\s*(@([\p{L}][\p{L}\p{N}]*)?)/uy,pz=/\{(@[\p{L}][\p{L}\p{N}]*)(\s*)([^\r\n}]+)?\}/gu;function fz(t){var e,r,n;let a=[],o=t.position.line,i=t.position.character;for(let s=0;s<t.lines.length;s++){let u=s===0,l=s===t.lines.length-1,c=t.lines[s],d=0;if(u&&t.options.start){let h=(e=t.options.start)===null||e===void 0?void 0:e.exec(c);h&&(d=h.index+h[0].length)}else{let h=(r=t.options.line)===null||r===void 0?void 0:r.exec(c);h&&(d=h.index+h[0].length)}if(l){let h=(n=t.options.end)===null||n===void 0?void 0:n.exec(c);h&&(c=c.substring(0,h.index))}if(c=c.substring(0,mz(c)),Bh(c,d)>=c.length){if(a.length>0){let h=se.create(o,i);a.push({type:"break",content:"",range:re.create(h,h)})}}else{H$.lastIndex=d;let h=H$.exec(c);if(h){let w=h[0],S=h[1],A=se.create(o,i+d),C=se.create(o,i+d+w.length);a.push({type:"tag",content:S,range:re.create(A,C)}),d+=w.length,d=Bh(c,d)}if(d<c.length){let w=c.substring(d),S=Array.from(w.matchAll(pz));a.push(...yz(S,w,o,i+d))}}o++,i=0}return a.length>0&&a[a.length-1].type==="break"?a.slice(0,-1):a}function yz(t,e,r,n){let a=[];if(t.length===0){let o=se.create(r,n),i=se.create(r,n+e.length);a.push({type:"text",content:e,range:re.create(o,i)})}else{let o=0;for(let s of t){let u=s.index,l=e.substring(o,u);l.length>0&&a.push({type:"text",content:e.substring(o,u),range:re.create(se.create(r,o+n),se.create(r,u+n))});let c=l.length+1,d=s[1];if(a.push({type:"inline-tag",content:d,range:re.create(se.create(r,o+c+n),se.create(r,o+c+d.length+n))}),c+=d.length,s.length===4){c+=s[2].length;let p=s[3];a.push({type:"text",content:p,range:re.create(se.create(r,o+c+n),se.create(r,o+c+p.length+n))})}else a.push({type:"text",content:"",range:re.create(se.create(r,o+c+n),se.create(r,o+c+n))});o=u+s[0].length}let i=e.substring(o);i.length>0&&a.push({type:"text",content:i,range:re.create(se.create(r,o+n),se.create(r,o+n+i.length))})}return a}var hz=/\S/,gz=/\s*$/;function Bh(t,e){let r=t.substring(e).match(hz);return r?e+r.index:t.length}function mz(t){let e=t.match(gz);if(e&&typeof e.index=="number")return e.index}function vz(t){var e,r,n,a;let o=se.create(t.position.line,t.position.character);if(t.tokens.length===0)return new bc([],re.create(o,o));let i=[];for(;t.index<t.tokens.length;){let l=wz(t,i[i.length-1]);l&&i.push(l)}let s=(r=(e=i[0])===null||e===void 0?void 0:e.range.start)!==null&&r!==void 0?r:o,u=(a=(n=i[i.length-1])===null||n===void 0?void 0:n.range.end)!==null&&a!==void 0?a:o;return new bc(i,re.create(s,u))}function wz(t,e){let r=t.tokens[t.index];if(r.type==="tag")return V$(t,!1);if(r.type==="text"||r.type==="inline-tag")return j$(t);Sz(r,e),t.index++}function Sz(t,e){if(e){let r=new Ec("",t.range);"inlines"in e?e.inlines.push(r):e.content.inlines.push(r)}}function j$(t){let e=t.tokens[t.index],r=e,n=e,a=[];for(;e&&e.type!=="break"&&e.type!=="tag";)a.push(Cz(t)),n=e,e=t.tokens[t.index];return new Zs(a,re.create(r.range.start,n.range.end))}function Cz(t){return t.tokens[t.index].type==="inline-tag"?V$(t,!0):Y$(t)}function V$(t,e){let r=t.tokens[t.index++],n=r.content.substring(1),a=t.tokens[t.index];if(a?.type==="text")if(e){let o=Y$(t);return new Js(n,new Zs([o],o.range),e,re.create(r.range.start,o.range.end))}else{let o=j$(t);return new Js(n,o,e,re.create(r.range.start,o.range.end))}else{let o=r.range;return new Js(n,new Zs([],o),e,o)}}function Y$(t){let e=t.tokens[t.index++];return new Ec(e.content,e.range)}function qh(t){if(!t)return qh({start:"/**",end:"*/",line:"*"});let{start:e,end:r,line:n}=t;return{start:Gh(e,!0),end:Gh(r,!1),line:Gh(n,!0)}}function Gh(t,e){if(typeof t=="string"||typeof t=="object"){let r=typeof t=="string"?va(t):t.source;return e?new RegExp(`^\\s*${r}`):new RegExp(`\\s*${r}\\s*$`)}else return t}var bc=class{constructor(e,r){this.elements=e,this.range=r}getTag(e){return this.getAllTags().find(r=>r.name===e)}getTags(e){return this.getAllTags().filter(r=>r.name===e)}getAllTags(){return this.elements.filter(e=>"name"in e)}toString(){let e="";for(let r of this.elements)if(e.length===0)e=r.toString();else{let n=r.toString();e+=U$(e)+n}return e.trim()}toMarkdown(e){let r="";for(let n of this.elements)if(r.length===0)r=n.toMarkdown(e);else{let a=n.toMarkdown(e);r+=U$(r)+a}return r.trim()}},Js=class{constructor(e,r,n,a){this.name=e,this.content=r,this.inline=n,this.range=a}toString(){let e=`@${this.name}`,r=this.content.toString();return this.content.inlines.length===1?e=`${e} ${r}`:this.content.inlines.length>1&&(e=`${e}
${r}`),this.inline?`{${e}}`:e}toMarkdown(e){var r,n;return(n=(r=e?.renderTag)===null||r===void 0?void 0:r.call(e,this))!==null&&n!==void 0?n:this.toMarkdownDefault(e)}toMarkdownDefault(e){let r=this.content.toMarkdown(e);if(this.inline){let o=$z(this.name,r,e??{});if(typeof o=="string")return o}let n="";e?.tag==="italic"||e?.tag===void 0?n="*":e?.tag==="bold"?n="**":e?.tag==="bold-italic"&&(n="***");let a=`${n}@${this.name}${n}`;return this.content.inlines.length===1?a=`${a} \u2014 ${r}`:this.content.inlines.length>1&&(a=`${a}
${r}`),this.inline?`{${a}}`:a}};function $z(t,e,r){var n,a;if(t==="linkplain"||t==="linkcode"||t==="link"){let o=e.indexOf(" "),i=e;if(o>0){let u=Bh(e,o);i=e.substring(u),e=e.substring(0,o)}return(t==="linkcode"||t==="link"&&r.link==="code")&&(i=`\`${i}\``),(a=(n=r.renderLink)===null||n===void 0?void 0:n.call(r,e,i))!==null&&a!==void 0?a:Tz(e,i)}}function Tz(t,e){try{return Ne.parse(t,!0),`[${e}](${t})`}catch{return t}}var Zs=class{constructor(e,r){this.inlines=e,this.range=r}toString(){let e="";for(let r=0;r<this.inlines.length;r++){let n=this.inlines[r],a=this.inlines[r+1];e+=n.toString(),a&&a.range.start.line>n.range.start.line&&(e+=`
`)}return e}toMarkdown(e){let r="";for(let n=0;n<this.inlines.length;n++){let a=this.inlines[n],o=this.inlines[n+1];r+=a.toMarkdown(e),o&&o.range.start.line>a.range.start.line&&(r+=`
`)}return r}},Ec=class{constructor(e,r){this.text=e,this.range=r}toString(){return this.text}toMarkdown(){return this.text}};function U$(t){return t.endsWith(`
`)?`
`:`

`}var eu=class{constructor(e){this.indexManager=e.shared.workspace.IndexManager,this.commentProvider=e.documentation.CommentProvider}getDocumentation(e){let r=this.commentProvider.getComment(e);if(r&&Uh(r))return Hh(r).toMarkdown({renderLink:(a,o)=>this.documentationLinkRenderer(e,a,o),renderTag:a=>this.documentationTagRenderer(e,a)})}documentationLinkRenderer(e,r,n){var a;let o=(a=this.findNameInPrecomputedScopes(e,r))!==null&&a!==void 0?a:this.findNameInGlobalScope(e,r);if(o&&o.nameSegment){let i=o.nameSegment.range.start.line+1,s=o.nameSegment.range.start.character+1,u=o.documentUri.with({fragment:`L${i},${s}`});return`[${n}](${u.toString()})`}else return}documentationTagRenderer(e,r){}findNameInPrecomputedScopes(e,r){let a=Oe(e).precomputedScopes;if(!a)return;let o=e;do{let s=a.get(o).find(u=>u.name===r);if(s)return s;o=o.$container}while(o)}findNameInGlobalScope(e,r){return this.indexManager.allElements().find(a=>a.name===r)}};var tu=class{constructor(e){this.grammarConfig=()=>e.parser.GrammarConfig}getComment(e){var r;return Lh(e)?e.$comment:(r=yp(e.$cstNode,this.grammarConfig().multilineCommentRules))===null||r===void 0?void 0:r.text}};var je={};oe(je,Ot(Oa(),1));var ru=class{constructor(e){this.syncParser=e.parser.LangiumParser}parse(e){return Promise.resolve(this.syncParser.parse(e))}},jh=class{constructor(e){this.threadCount=8,this.terminationDelay=200,this.workerPool=[],this.queue=[],this.hydrator=e.serializer.Hydrator}initializeWorkers(){for(;this.workerPool.length<this.threadCount;){let e=this.createWorker();e.onReady(()=>{if(this.queue.length>0){let r=this.queue.shift();r&&(e.lock(),r.resolve(e))}}),this.workerPool.push(e)}}async parse(e,r){let n=await this.acquireParserWorker(r),a=new br,o,i=r.onCancellationRequested(()=>{o=setTimeout(()=>{this.terminateWorker(n)},this.terminationDelay)});return n.parse(e).then(s=>{s.value=this.hydrator.hydrate(s.value),a.resolve(s)}).catch(s=>{a.reject(s)}).finally(()=>{i.dispose(),clearTimeout(o)}),a.promise}terminateWorker(e){e.terminate();let r=this.workerPool.indexOf(e);r>=0&&this.workerPool.splice(r,1)}async acquireParserWorker(e){this.initializeWorkers();for(let n of this.workerPool)if(n.ready)return n.lock(),n;let r=new br;return e.onCancellationRequested(()=>{let n=this.queue.indexOf(r);n>=0&&this.queue.splice(n,1),r.reject("OperationCancelled")}),this.queue.push(r),r.promise}},Vh=class{get ready(){return this._ready}get onReady(){return this.onReadyEmitter.event}constructor(e,r,n,a){this.onReadyEmitter=new je.Emitter,this.deferred=new br,this._ready=!0,this._parsing=!1,this.sendMessage=e,this._terminate=a,r(o=>{let i=o;this.deferred.resolve(i),this.unlock()}),n(o=>{this.deferred.reject(o),this.unlock()})}terminate(){this.deferred.reject(Cn),this._terminate()}lock(){this._ready=!1}unlock(){this._parsing=!1,this._ready=!0,this.onReadyEmitter.fire()}parse(e){if(this._parsing)throw new Error("Parser worker is busy");return this._parsing=!0,this.deferred=new br,this.sendMessage(e),this.deferred.promise}};var nu=class{constructor(){this.previousTokenSource=new L.CancellationTokenSource,this.writeQueue=[],this.readQueue=[],this.done=!0}write(e){this.cancelWrite();let r=new L.CancellationTokenSource;return this.previousTokenSource=r,this.enqueue(this.writeQueue,e,r.token)}read(e){return this.enqueue(this.readQueue,e)}enqueue(e,r,n){let a=new br,o={action:r,deferred:a,cancellationToken:n??L.CancellationToken.None};return e.push(o),this.performNextOperation(),a.promise}async performNextOperation(){if(!this.done)return;let e=[];if(this.writeQueue.length>0)e.push(this.writeQueue.shift());else if(this.readQueue.length>0)e.push(...this.readQueue.splice(0,this.readQueue.length));else return;this.done=!1,await Promise.all(e.map(async({action:r,deferred:n,cancellationToken:a})=>{try{let o=await Promise.resolve().then(()=>r(a));n.resolve(o)}catch(o){Qr(o)?n.resolve(void 0):n.reject(o)}})),this.done=!0,this.performNextOperation()}cancelWrite(){this.previousTokenSource.cancel()}};var au=class{constructor(e){this.grammarElementIdMap=new za,this.tokenTypeIdMap=new za,this.grammar=e.Grammar,this.lexer=e.parser.Lexer,this.linker=e.references.Linker}dehydrate(e){return this.dehydrateAstNode(e,this.createDehyrationContext(e))}createDehyrationContext(e){let r=new Map,n=new Map;for(let a of Qt(e))r.set(a,{});if(e.$cstNode)for(let a of la(e.$cstNode))n.set(a,{});return{astNodes:r,cstNodes:n}}dehydrateAstNode(e,r){let n=r.astNodes.get(e);n.$type=e.$type,n.$containerIndex=e.$containerIndex,n.$containerProperty=e.$containerProperty,e.$cstNode!==void 0&&(n.$cstNode=this.dehydrateCstNode(e.$cstNode,r));for(let[a,o]of Object.entries(e))if(!a.startsWith("$"))if(Array.isArray(o)){let i=[];n[a]=i;for(let s of o)Re(s)?i.push(this.dehydrateAstNode(s,r)):wt(s)?i.push(this.dehydrateReference(s,r)):i.push(s)}else Re(o)?n[a]=this.dehydrateAstNode(o,r):wt(o)?n[a]=this.dehydrateReference(o,r):o!==void 0&&(n[a]=o);return n}dehydrateReference(e,r){let n={};return n.$refText=e.$refText,e.$refNode&&(n.$refNode=r.cstNodes.get(e.$refNode)),n}dehydrateCstNode(e,r){let n=r.cstNodes.get(e);return Ki(e)?n.fullText=e.fullText:n.grammarSource=this.getGrammarElementId(e.grammarSource),n.hidden=e.hidden,n.astNode=r.astNodes.get(e.astNode),qt(e)?n.content=e.content.map(a=>this.dehydrateCstNode(a,r)):an(e)&&(n.tokenType=e.tokenType.name,n.offset=e.offset,n.length=e.length,n.startLine=e.range.start.line,n.startColumn=e.range.start.character,n.endLine=e.range.end.line,n.endColumn=e.range.end.character),n}hydrate(e){let r=this.createHydrationContext(e);return"$cstNode"in e&&this.hydrateCstNode(e.$cstNode,r),this.hydrateAstNode(e,r)}createHydrationContext(e){let r=new Map,n=new Map;for(let a of Qt(e))r.set(a,{});if(e.$cstNode)for(let a of la(e.$cstNode)){let o;"fullText"in a?o=new Xo(a.fullText):"content"in a?o=new _a:"tokenType"in a&&(o=this.hydrateCstLeafNode(a)),o&&n.set(a,o)}return{astNodes:r,cstNodes:n}}hydrateAstNode(e,r){let n=r.astNodes.get(e);n.$type=e.$type,n.$containerIndex=e.$containerIndex,n.$containerProperty=e.$containerProperty,e.$cstNode&&(n.$cstNode=r.cstNodes.get(e.$cstNode));for(let[a,o]of Object.entries(e))if(!a.startsWith("$"))if(Array.isArray(o)){let i=[];n[a]=i;for(let s of o)Re(s)?i.push(this.setParent(this.hydrate(s),n)):wt(s)?i.push(this.hydrateReference(s,n,a,r)):i.push(s)}else Re(o)?n[a]=this.setParent(this.hydrate(o),n):wt(o)?n[a]=this.hydrateReference(o,n,a,r):o!==void 0&&(n[a]=o);return n}setParent(e,r){return e.$container=r,e}hydrateReference(e,r,n,a){return this.linker.buildReference(r,n,a.cstNodes.get(e.$refNode),e.$refText)}hydrateCstNode(e,r,n=0){let a=r.cstNodes.get(e);if(typeof e.grammarSource=="number"&&(a.grammarSource=this.getGrammarElement(e.grammarSource)),a.astNode=r.astNodes.get(e.astNode),qt(a))for(let o of e.content){let i=this.hydrateCstNode(o,r,n++);a.content.push(i)}return a}hydrateCstLeafNode(e){let r=this.getTokenType(e.tokenType),n=e.offset,a=e.length,o=e.startLine,i=e.startColumn,s=e.endLine,u=e.endColumn,l=e.hidden;return new Na(n,a,{start:{line:o,character:i},end:{line:s,character:u}},r,l)}getTokenType(e){return this.lexer.definition[e]}getGrammarElementId(e){var r;return this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap(),(r=this.grammarElementIdMap.get(e))!==null&&r!==void 0?r:-1}getGrammarElement(e){this.grammarElementIdMap.size===0&&this.createGrammarElementIdMap();let r=this.grammarElementIdMap.getKey(e);if(r)return r;throw new Error("Invalid grammar element id: "+e)}createGrammarElementIdMap(){let e=0;for(let r of Qt(this.grammar))pa(r)&&this.grammarElementIdMap.set(r,e++)}};function ou(t){return{documentation:{CommentProvider:e=>new tu(e),DocumentationProvider:e=>new eu(e)},parser:{AsyncParser:e=>new ru(e),GrammarConfig:e=>_f(e),LangiumParser:e=>Ph(e),CompletionParser:e=>Rh(e),ValueConverter:()=>new Ps,TokenBuilder:()=>new Rs,Lexer:e=>new Xs(e),ParserErrorMessageProvider:()=>new Jo},workspace:{AstNodeLocator:()=>new qs,AstNodeDescriptionProvider:e=>new Hs(e),ReferenceDescriptionProvider:e=>new Us(e)},references:{Linker:e=>new Ds(e),NameProvider:()=>new Ns,ScopeProvider:e=>new Ls(e),ScopeComputation:e=>new Ms(e),References:e=>new _s(e)},serializer:{Hydrator:e=>new au(e),JsonSerializer:e=>new Fs(e)},validation:{DocumentValidator:e=>new Bs(e),ValidationRegistry:e=>new Gs(e)},shared:()=>t.shared}}function iu(t){return{ServiceRegistry:()=>new Ws,workspace:{LangiumDocuments:e=>new Es(e),LangiumDocumentFactory:e=>new bs(e),DocumentBuilder:e=>new Vs(e),IndexManager:e=>new Ys(e),WorkspaceManager:e=>new Qs(e),FileSystemProvider:e=>t.fileSystemProvider(e),WorkspaceLock:()=>new nu,ConfigurationProvider:e=>new js(e)}}}var si;(function(t){t.merge=(e,r)=>Dc(Dc({},e),r)})(si||(si={}));function Wa(t,e,r,n,a,o,i,s,u){let l=[t,e,r,n,a,o,i,s,u].reduce(Dc,{});return J$(l)}var Yh=Symbol("isProxy");function su(t){if(t&&t[Yh])for(let e of Object.values(t))su(e);return t}function J$(t,e){let r=new Proxy({},{deleteProperty:()=>!1,get:(n,a)=>X$(n,a,t,e||r),getOwnPropertyDescriptor:(n,a)=>(X$(n,a,t,e||r),Object.getOwnPropertyDescriptor(n,a)),has:(n,a)=>a in t,ownKeys:()=>[...Reflect.ownKeys(t),Yh]});return r[Yh]=!0,r}var Q$=Symbol();function X$(t,e,r,n){if(e in t){if(t[e]instanceof Error)throw new Error("Construction failure. Please make sure that your dependencies are constructable.",{cause:t[e]});if(t[e]===Q$)throw new Error('Cycle detected. Please make "'+String(e)+'" lazy. See https://langium.org/docs/configuration-services/#resolving-cyclic-dependencies');return t[e]}else if(e in r){let a=r[e];t[e]=Q$;try{t[e]=typeof a=="function"?a(n):J$(a,n)}catch(o){throw t[e]=o instanceof Error?o:void 0,o}return t[e]}else return}function Dc(t,e){if(e){for(let[r,n]of Object.entries(e))if(n!==void 0){let a=t[r];a!==null&&n!==null&&typeof a=="object"&&typeof n=="object"?t[r]=Dc(a,n):t[r]=n}}return t}var le={};In(le,{AstUtils:()=>Hu,BiMap:()=>za,Cancellation:()=>L,ContextCache:()=>La,CstUtils:()=>_u,DONE_RESULT:()=>kt,Deferred:()=>br,Disposable:()=>Fa,DisposableCache:()=>ai,DocumentCache:()=>Rc,EMPTY_STREAM:()=>Xa,ErrorWithLocation:()=>da,GrammarUtils:()=>Qu,MultiMap:()=>Xr,OperationCancelled:()=>Cn,Reduction:()=>Qa,RegExpUtils:()=>Vu,SimpleCache:()=>zs,StreamImpl:()=>jt,TreeStreamImpl:()=>kr,URI:()=>Ne,UriUtils:()=>xt,WorkspaceCache:()=>oi,assertUnreachable:()=>Rn,delayNextTick:()=>Oh,interruptAndCheck:()=>We,isOperationCancelled:()=>Qr,loadGrammarFromJson:()=>_c,setInterruptionPeriod:()=>M$,startCancelableOperation:()=>_$,stream:()=>ee});oe(le,je);var Nc=class{readFile(){throw new Error("No file system is available.")}async readDirectory(){return[]}},uu={fileSystemProvider:()=>new Nc};var xz={Grammar:()=>{},LanguageMetaData:()=>({caseInsensitive:!1,fileExtensions:[".langium"],languageId:"langium"})},Az={AstReflection:()=>new Za};function kz(){let t=Wa(iu(uu),Az),e=Wa(ou({shared:t}),xz);return t.ServiceRegistry.register(e),e}function _c(t){var e;let r=kz(),n=r.serializer.JsonSerializer.deserialize(t);return r.shared.workspace.LangiumDocumentFactory.fromModel(n,Ne.parse(`memory://${(e=n.name)!==null&&e!==void 0?e:"grammar"}.langium`)),n}oe(at,le);var ki=Ot(fr(),1);function Nm(t,e){let r={stacks:t,tokens:e};return m0(r),r.stacks.flat().forEach(a=>{a.property=void 0}),dI(r.stacks).map(a=>a[a.length-1])}function _m(t){let{next:e,cardinalities:r,visited:n,plus:a}=t,o=[],i=e.feature;if(n.has(i))return[];n.add(i);let s,u=i;for(;u.$container;)if(yr(u.$container)){s=u.$container;break}else if(pa(u.$container))u=u.$container;else break;if(Ef(u.cardinality)){let l=Ai({next:{feature:u,type:e.type},cardinalities:r,visited:n,plus:a});for(let c of l)a.add(c.feature);o.push(...l)}if(s){let l=s.elements.indexOf(u);l!==void 0&&l<s.elements.length-1&&o.push(...cI({feature:s,type:e.type},l+1,r,n,a)),o.every(c=>Sa(c.feature.cardinality,c.feature)||Sa(r.get(c.feature))||a.has(c.feature))&&o.push(..._m({next:{feature:s,type:e.type},cardinalities:r,visited:n,plus:a}))}return o}function Gd(t){return Re(t)&&(t={feature:t}),Ai({next:t,cardinalities:new Map,visited:new Set,plus:new Set})}function Ai(t){var e,r,n;let{next:a,cardinalities:o,visited:i,plus:s}=t;if(a===void 0)return[];let{feature:u,type:l}=a;if(yr(u)){if(i.has(u))return[];i.add(u)}if(yr(u))return cI(a,0,o,i,s).map(c=>Wd(c,u.cardinality,o));if(eo(u)||to(u))return u.elements.flatMap(c=>Ai({next:{feature:c,type:l,property:a.property},cardinalities:o,visited:i,plus:s})).map(c=>Wd(c,u.cardinality,o));if(It(u)){let c={feature:u.terminal,type:l,property:(e=a.property)!==null&&e!==void 0?e:u.feature};return Ai({next:c,cardinalities:o,visited:i,plus:s}).map(d=>Wd(d,u.cardinality,o))}else{if(Ir(u))return _m({next:{feature:u,type:un(u),property:(r=a.property)!==null&&r!==void 0?r:u.feature},cardinalities:o,visited:i,plus:s});if(Yt(u)&&He(u.rule.ref)){let c=u.rule.ref,d={feature:c.definition,type:c.fragment||c.dataType?void 0:(n=Ca(c))!==null&&n!==void 0?n:c.name,property:a.property};return Ai({next:d,cardinalities:o,visited:i,plus:s}).map(p=>Wd(p,u.cardinality,o))}else return[a]}}function Wd(t,e,r){return r.set(t.feature,e),t}function cI(t,e,r,n,a){var o;let i=[],s;for(;e<t.feature.elements.length&&(s={feature:t.feature.elements[e++],type:t.type},i.push(...Ai({next:s,cardinalities:r,visited:n,plus:a})),!!Sa((o=s.feature.cardinality)!==null&&o!==void 0?o:r.get(s.feature),s.feature)););return i}function m0(t){for(let e of t.tokens){let r=dI(t.stacks,e);t.stacks=r}}function dI(t,e){let r=[];for(let n of t)r.push(...v0(n,e));return r}function v0(t,e){let r=new Map,n=new Set(t.map(o=>o.feature).filter(w0)),a=[];for(;t.length>0;){let o=t.pop(),i=_m({next:o,cardinalities:r,plus:n,visited:new Set}).filter(s=>e?Mm(s.feature,e):!0);for(let s of i)a.push([...t,s]);if(!i.every(s=>Sa(s.feature.cardinality,s.feature)||Sa(r.get(s.feature))))break}return a}function w0(t){if(t.cardinality==="+")return!0;let e=sr(t,It);return!!(e&&e.cardinality==="+")}function Mm(t,e){if(St(t))return t.value===e.image;if(Yt(t))return S0(t.rule.ref,e);if(Rr(t)){let r=Wi(t);if(r)return Mm(r,e)}return!1}function S0(t,e){return He(t)?Gd(t.definition).some(n=>Mm(n.feature,e)):Vt(t)?Pn(t).test(e.image):!1}function pI(t){let e=Array.from(new Set(t.flatMap(n=>{var a;return(a=n?.triggerCharacters)!==null&&a!==void 0?a:[]}))),r=Array.from(new Set(t.flatMap(n=>{var a;return(a=n?.allCommitCharacters)!==null&&a!==void 0?a:[]})));return{triggerCharacters:e.length>0?e:void 0,allCommitCharacters:r.length>0?r:void 0}}var Bd=class{constructor(e){this.scopeProvider=e.references.ScopeProvider,this.grammar=e.Grammar,this.completionParser=e.parser.CompletionParser,this.nameProvider=e.references.NameProvider,this.lexer=e.parser.Lexer,this.nodeKindProvider=e.shared.lsp.NodeKindProvider,this.fuzzyMatcher=e.shared.lsp.FuzzyMatcher,this.grammarConfig=e.parser.GrammarConfig,this.astReflection=e.shared.AstReflection}async getCompletion(e,r){let n=[],a=this.buildContexts(e,r.position),o=(u,l)=>{let c=this.fillCompletionItem(u,l);c&&n.push(c)},i=u=>St(u.feature)?u.feature.value:u.feature,s=[];for(let u of a)if(await Promise.all(ee(u.features).distinct(i).exclude(s).map(l=>this.completionFor(u,l,o))),s.push(...u.features),!this.continueCompletion(n))break;return ki.CompletionList.create(this.deduplicateItems(n),!0)}deduplicateItems(e){return ee(e).distinct(r=>`${r.kind}_${r.label}_${r.detail}`).toArray()}findFeaturesAt(e,r){let n=e.getText({start:ki.Position.create(0,0),end:e.positionAt(r)}),a=this.completionParser.parse(n),o=a.tokens;if(a.tokenIndex===0){let u=Li(this.grammar),l=Gd({feature:u.definition,type:Ca(u)});return o.length>0?(o.shift(),Nm(l.map(c=>[c]),o)):l}let i=[...o].splice(a.tokenIndex);return Nm([a.elementStack.map(u=>({feature:u}))],i)}*buildContexts(e,r){var n,a;let o=e.parseResult.value.$cstNode;if(!o)return;let i=e.textDocument,s=i.getText(),u=i.offsetAt(r),l={document:e,textDocument:i,offset:u,position:r},c=this.findDataTypeRuleStart(o,u);if(c){let[g,y]=c,$=(n=bi(o,g))===null||n===void 0?void 0:n.astNode;yield Object.assign(Object.assign({},l),{node:$,tokenOffset:g,tokenEndOffset:y,features:this.findFeaturesAt(i,g)})}let{nextTokenStart:d,nextTokenEnd:p,previousTokenStart:h,previousTokenEnd:w}=this.backtrackToAnyToken(s,u),S=d;u<=d&&h!==void 0&&(S=h);let A=(a=bi(o,S))===null||a===void 0?void 0:a.astNode,C=!0;if(h!==void 0&&w!==void 0&&w===u&&(yield Object.assign(Object.assign({},l),{node:A,tokenOffset:h,tokenEndOffset:w,features:this.findFeaturesAt(i,h)}),C=this.performNextTokenCompletion(e,s.substring(h,w),h,w),C&&(yield Object.assign(Object.assign({},l),{node:A,tokenOffset:w,tokenEndOffset:w,features:this.findFeaturesAt(i,w)}))),A)C&&(yield Object.assign(Object.assign({},l),{node:A,tokenOffset:d,tokenEndOffset:p,features:this.findFeaturesAt(i,d)}));else{let g=Li(this.grammar);if(!g)throw new Error("Missing entry parser rule");yield Object.assign(Object.assign({},l),{tokenOffset:d,tokenEndOffset:p,features:Gd(g.definition)})}}performNextTokenCompletion(e,r,n,a){return/\P{L}$/u.test(r)}findDataTypeRuleStart(e,r){var n,a;let o=dt(e,r,this.grammarConfig.nameRegexp),i=!!(!((n=sr(o?.grammarSource,He))===null||n===void 0)&&n.dataType);if(i){for(;i;)o=o?.container,i=!!(!((a=sr(o?.grammarSource,He))===null||a===void 0)&&a.dataType);if(o)return[o.offset,o.end]}}continueCompletion(e){return e.length===0}backtrackToAnyToken(e,r){let n=this.lexer.tokenize(e).tokens;if(n.length===0)return{nextTokenStart:r,nextTokenEnd:r};let a;for(let o of n){if(o.startOffset>=r)return{nextTokenStart:r,nextTokenEnd:r,previousTokenStart:a?a.startOffset:void 0,previousTokenEnd:a?a.endOffset+1:void 0};if(o.endOffset>=r)return{nextTokenStart:o.startOffset,nextTokenEnd:o.endOffset+1,previousTokenStart:a?a.startOffset:void 0,previousTokenEnd:a?a.endOffset+1:void 0};a=o}return{nextTokenStart:r,nextTokenEnd:r,previousTokenStart:a?a.startOffset:void 0,previousTokenEnd:a?a.endOffset+1:void 0}}completionFor(e,r,n){if(St(r.feature))return this.completionForKeyword(e,r.feature,n);if(Rr(r.feature)&&e.node)return this.completionForCrossReference(e,r,n)}completionForCrossReference(e,r,n){let a=sr(r.feature,It),o=e.node;if(a&&o){r.type&&(o={$type:r.type,$container:o,$containerProperty:r.property},_i(this.astReflection,o));let i={reference:{$refText:""},container:o,property:a.feature};try{this.scopeProvider.getScope(i).getAllElements().forEach(u=>{this.filterCrossReference(e,u)&&n(e,this.createReferenceCompletionItem(u))})}catch(s){console.error(s)}}}createReferenceCompletionItem(e){return{nodeDescription:e,kind:this.nodeKindProvider.getCompletionItemKind(e),detail:e.type,sortText:"0"}}filterCrossReference(e,r){return!0}completionForKeyword(e,r,n){this.filterKeyword(e,r)&&n(e,{label:r.value,kind:ki.CompletionItemKind.Keyword,detail:"Keyword",sortText:"1"})}filterKeyword(e,r){return/\p{L}/u.test(r.value)}fillCompletionItem(e,r){var n,a;let o;if(typeof r.label=="string")o=r.label;else if("node"in r){let l=this.nameProvider.getName(r.node);if(!l)return;o=l}else if("nodeDescription"in r)o=r.nodeDescription.name;else return;let i;typeof((n=r.textEdit)===null||n===void 0?void 0:n.newText)=="string"?i=r.textEdit.newText:typeof r.insertText=="string"?i=r.insertText:i=o;let s=(a=r.textEdit)!==null&&a!==void 0?a:this.buildCompletionTextEdit(e,o,i);return s?{additionalTextEdits:r.additionalTextEdits,command:r.command,commitCharacters:r.commitCharacters,data:r.data,detail:r.detail,documentation:r.documentation,filterText:r.filterText,insertText:r.insertText,insertTextFormat:r.insertTextFormat,insertTextMode:r.insertTextMode,kind:r.kind,labelDetails:r.labelDetails,preselect:r.preselect,sortText:r.sortText,tags:r.tags,textEditText:r.textEditText,textEdit:s,label:o}:void 0}buildCompletionTextEdit(e,r,n){let o=e.textDocument.getText().substring(e.tokenOffset,e.offset);if(this.fuzzyMatcher.match(o,r)){let i=e.textDocument.positionAt(e.tokenOffset),s=e.position;return{newText:n,range:{start:i,end:s}}}else return}};var C0=Ot(fr(),1);var fI=Ot(fr(),1);var Hd=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getDefinition(e,r){let n=e.parseResult.value;if(n.$cstNode){let a=n.$cstNode,o=dt(a,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(o)return this.collectLocationLinks(o,r)}}collectLocationLinks(e,r){var n;let a=this.findLink(e);if(a)return[fI.LocationLink.create(a.targetDocument.textDocument.uri,((n=a.target.astNode.$cstNode)!==null&&n!==void 0?n:a.target).range,a.target.range,a.source.range)]}findLink(e){let r=this.references.findDeclarationNode(e);if(r?.astNode){let n=Oe(r.astNode);if(r&&n)return{source:e,target:r,targetDocument:n}}}};var xI=Ot(fr(),1);var yI=Ot(fr(),1);var Ud=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}getDocumentHighlight(e,r){let n=e.parseResult.value.$cstNode;if(!n)return;let a=dt(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);if(!a)return;let o=this.references.findDeclaration(a);if(o){let i=xt.equals(Oe(o).uri,e.uri),s={documentUri:e.uri,includeDeclaration:i};return this.references.findReferences(o,s).map(l=>this.createDocumentHighlight(l)).toArray()}}createDocumentHighlight(e){return yI.DocumentHighlight.create(e.segment.range)}};var qd=class{constructor(e){this.nameProvider=e.references.NameProvider,this.nodeKindProvider=e.shared.lsp.NodeKindProvider}getSymbols(e){return this.getSymbol(e,e.parseResult.value)}getSymbol(e,r){let n=r.$cstNode,a=this.nameProvider.getNameNode(r);if(a&&n){let o=this.nameProvider.getName(r);return[{kind:this.nodeKindProvider.getSymbolKind(r),name:o??a.text,range:n.range,selectionRange:a.range,children:this.getChildSymbols(e,r)}]}else return this.getChildSymbols(e,r)||[]}getChildSymbols(e,r){let n=[];for(let a of ya(r)){let o=this.getSymbol(e,a);n.push(...o)}if(n.length>0)return n}};var Tu=Ot(fr(),1);var jd=class{constructor(e){this.documentBuilder=e.workspace.DocumentBuilder,this.workspaceLock=e.workspace.WorkspaceLock;let r=!1;e.lsp.LanguageServer.onInitialize(n=>{var a,o;r=!!(!((o=(a=n.capabilities.workspace)===null||a===void 0?void 0:a.didChangeWatchedFiles)===null||o===void 0)&&o.dynamicRegistration)}),e.lsp.LanguageServer.onInitialized(n=>{r&&this.registerFileWatcher(e)})}registerFileWatcher(e){let r=ee(e.ServiceRegistry.all).flatMap(n=>n.LanguageMetaData.fileExtensions).map(n=>n.startsWith(".")?n.substring(1):n).distinct().toArray();if(r.length>0){let n=e.lsp.Connection,a={watchers:[{globPattern:r.length===1?`**/*.${r[0]}`:`**/*.{${r.join(",")}}`}]};n?.client.register(Tu.DidChangeWatchedFilesNotification.type,a)}}fireDocumentUpdate(e,r){this.workspaceLock.write(n=>this.documentBuilder.update(e,r,n))}didChangeContent(e){this.fireDocumentUpdate([Ne.parse(e.document.uri)],[])}didChangeWatchedFiles(e){let r=ee(e.changes).filter(a=>a.type!==Tu.FileChangeType.Deleted).distinct(a=>a.uri).map(a=>Ne.parse(a.uri)).toArray(),n=ee(e.changes).filter(a=>a.type===Tu.FileChangeType.Deleted).distinct(a=>a.uri).map(a=>Ne.parse(a.uri)).toArray();this.fireDocumentUpdate(r,n)}};var xu=Ot(fr(),1);var Vd=class{constructor(e){this.commentNames=e.parser.GrammarConfig.multilineCommentRules}getFoldingRanges(e){let r=[],n=a=>r.push(a);return this.collectFolding(e,n),r}collectFolding(e,r){var n;let a=(n=e.parseResult)===null||n===void 0?void 0:n.value;if(a){if(this.shouldProcessContent(a)){let o=ur(a).iterator(),i;do if(i=o.next(),!i.done){let s=i.value;this.shouldProcess(s)&&this.collectObjectFolding(e,s,r),this.shouldProcessContent(s)||o.prune()}while(!i.done)}this.collectCommentFolding(e,a,r)}}shouldProcess(e){return!0}shouldProcessContent(e){return!0}collectObjectFolding(e,r,n){let a=r.$cstNode;if(a){let o=this.toFoldingRange(e,a);o&&n(o)}}collectCommentFolding(e,r,n){let a=r.$cstNode;if(a){for(let o of pp(a))if(this.commentNames.includes(o.tokenType.name)){let i=this.toFoldingRange(e,o,xu.FoldingRangeKind.Comment);i&&n(i)}}}toFoldingRange(e,r,n){let a=r.range,o=a.start,i=a.end;if(!(i.line-o.line<2))return this.includeLastFoldingLine(r,n)||(i=e.textDocument.positionAt(e.textDocument.offsetAt({line:i.line,character:0})-1)),xu.FoldingRange.create(o.line,i.line,o.character,i.character,n)}includeLastFoldingLine(e,r){if(r===xu.FoldingRangeKind.Comment)return!1;let n=e.text,a=n.charAt(n.length-1);return!(a==="}"||a===")"||a==="]")}};var Yd=class{match(e,r){if(e.length===0)return!0;r=r.toLowerCase();let n=!1,a,o=0,i=r.length;for(let s=0;s<i;s++){let u=r.charCodeAt(s),l=e.charCodeAt(o);if((u===l||this.toUpperCharCode(u)===this.toUpperCharCode(l))&&(n||(n=a===void 0||this.isWordTransition(a,u)),n&&o++,o===e.length))return!0;a=u}return!1}isWordTransition(e,r){return hI<=e&&e<=gI&&$0<=r&&r<=T0||e===mI&&r!==mI}toUpperCharCode(e){return hI<=e&&e<=gI?e-32:e}},hI=97,gI=122,$0=65,T0=90,mI=95;var Om=class{constructor(e){this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}getHoverContent(e,r){var n,a;let o=(a=(n=e.parseResult)===null||n===void 0?void 0:n.value)===null||a===void 0?void 0:a.$cstNode;if(o){let i=e.textDocument.offsetAt(r.position),s=dt(o,i,this.grammarConfig.nameRegexp);if(s&&s.offset+s.length>i){let u=this.references.findDeclaration(s);if(u)return this.getAstNodeHoverContent(u)}}}},Qd=class extends Om{constructor(e){super(e),this.documentationProvider=e.documentation.DocumentationProvider}getAstNodeHoverContent(e){let r=this.documentationProvider.getDocumentation(e);if(r)return{contents:{kind:"markdown",value:r}}}};var Tr=Ot(Ye(),1);var ne=Ot(fr(),1);var wI={[ne.SemanticTokenTypes.class]:0,[ne.SemanticTokenTypes.comment]:1,[ne.SemanticTokenTypes.enum]:2,[ne.SemanticTokenTypes.enumMember]:3,[ne.SemanticTokenTypes.event]:4,[ne.SemanticTokenTypes.function]:5,[ne.SemanticTokenTypes.interface]:6,[ne.SemanticTokenTypes.keyword]:7,[ne.SemanticTokenTypes.macro]:8,[ne.SemanticTokenTypes.method]:9,[ne.SemanticTokenTypes.modifier]:10,[ne.SemanticTokenTypes.namespace]:11,[ne.SemanticTokenTypes.number]:12,[ne.SemanticTokenTypes.operator]:13,[ne.SemanticTokenTypes.parameter]:14,[ne.SemanticTokenTypes.property]:15,[ne.SemanticTokenTypes.regexp]:16,[ne.SemanticTokenTypes.string]:17,[ne.SemanticTokenTypes.struct]:18,[ne.SemanticTokenTypes.type]:19,[ne.SemanticTokenTypes.typeParameter]:20,[ne.SemanticTokenTypes.variable]:21,[ne.SemanticTokenTypes.decorator]:22},x0={[ne.SemanticTokenModifiers.abstract]:1,[ne.SemanticTokenModifiers.async]:2,[ne.SemanticTokenModifiers.declaration]:4,[ne.SemanticTokenModifiers.defaultLibrary]:8,[ne.SemanticTokenModifiers.definition]:16,[ne.SemanticTokenModifiers.deprecated]:32,[ne.SemanticTokenModifiers.documentation]:64,[ne.SemanticTokenModifiers.modification]:128,[ne.SemanticTokenModifiers.readonly]:256,[ne.SemanticTokenModifiers.static]:512},SI={legend:{tokenTypes:Object.keys(wI),tokenModifiers:Object.keys(x0)},full:{delta:!0},range:!0};var vI;(function(t){function e(n,a){let o=new Map;Object.entries(wI).forEach(([u,l])=>o.set(l,u));let i=0,s=0;return r(n.data,5).map(u=>{i+=u[0],u[0]!==0&&(s=0),s+=u[1];let l=u[2];return{offset:a.textDocument.offsetAt({line:i,character:s}),tokenType:o.get(u[3]),tokenModifiers:u[4],text:a.textDocument.getText({start:{line:i,character:s},end:{line:i,character:s+l}})}})}t.decode=e;function r(n,a){let o=[];for(let i=0;i<n.length;i+=a){let s=n.slice(i,i+a);o.push(s)}return o}})(vI||(vI={}));function CI(t){let e=[],r=[];t.forEach(a=>{a?.triggerCharacters&&e.push(...a.triggerCharacters),a?.retriggerCharacters&&r.push(...a.retriggerCharacters)});let n={triggerCharacters:e.length>0?Array.from(new Set(e)).sort():void 0,retriggerCharacters:r.length>0?Array.from(new Set(r)).sort():void 0};return n.triggerCharacters?n:void 0}var Xd=class{constructor(e){this.onInitializeEmitter=new Tr.Emitter,this.onInitializedEmitter=new Tr.Emitter,this.services=e}get onInitialize(){return this.onInitializeEmitter.event}get onInitialized(){return this.onInitializedEmitter.event}async initialize(e){return this.eagerLoadServices(),this.fireInitializeOnDefaultServices(e),this.onInitializeEmitter.fire(e),this.onInitializeEmitter.dispose(),this.buildInitializeResult(e)}eagerLoadServices(){su(this.services),this.services.ServiceRegistry.all.forEach(e=>su(e))}hasService(e){return this.services.ServiceRegistry.all.some(n=>e(n)!==void 0)}buildInitializeResult(e){var r,n,a,o;let i=(r=this.services.lsp.FileOperationHandler)===null||r===void 0?void 0:r.fileOperationOptions,s=this.services.ServiceRegistry.all,u=this.hasService(R=>{var I;return(I=R.lsp)===null||I===void 0?void 0:I.Formatter}),l=s.map(R=>{var I,pe;return(pe=(I=R.lsp)===null||I===void 0?void 0:I.Formatter)===null||pe===void 0?void 0:pe.formatOnTypeOptions}).find(R=>!!R),c=this.hasService(R=>{var I;return(I=R.lsp)===null||I===void 0?void 0:I.CodeActionProvider}),d=this.hasService(R=>{var I;return(I=R.lsp)===null||I===void 0?void 0:I.SemanticTokenProvider}),p=(a=(n=this.services.lsp)===null||n===void 0?void 0:n.ExecuteCommandHandler)===null||a===void 0?void 0:a.commands,h=this.hasService(R=>{var I;return(I=R.lsp)===null||I===void 0?void 0:I.DocumentLinkProvider}),w=CI(s.map(R=>{var I,pe;return(pe=(I=R.lsp)===null||I===void 0?void 0:I.SignatureHelp)===null||pe===void 0?void 0:pe.signatureHelpOptions})),S=this.hasService(R=>{var I;return(I=R.lsp)===null||I===void 0?void 0:I.TypeProvider}),A=this.hasService(R=>{var I;return(I=R.lsp)===null||I===void 0?void 0:I.ImplementationProvider}),C=this.hasService(R=>{var I;return(I=R.lsp)===null||I===void 0?void 0:I.CompletionProvider}),g=pI(s.map(R=>{var I,pe;return(pe=(I=R.lsp)===null||I===void 0?void 0:I.CompletionProvider)===null||pe===void 0?void 0:pe.completionOptions})),y=this.hasService(R=>{var I;return(I=R.lsp)===null||I===void 0?void 0:I.ReferencesProvider}),$=this.hasService(R=>{var I;return(I=R.lsp)===null||I===void 0?void 0:I.DocumentSymbolProvider}),K=this.hasService(R=>{var I;return(I=R.lsp)===null||I===void 0?void 0:I.DefinitionProvider}),Q=this.hasService(R=>{var I;return(I=R.lsp)===null||I===void 0?void 0:I.DocumentHighlightProvider}),mt=this.hasService(R=>{var I;return(I=R.lsp)===null||I===void 0?void 0:I.FoldingRangeProvider}),Qe=this.hasService(R=>{var I;return(I=R.lsp)===null||I===void 0?void 0:I.HoverProvider}),ir=this.hasService(R=>{var I;return(I=R.lsp)===null||I===void 0?void 0:I.RenameProvider}),Bt=this.hasService(R=>{var I;return(I=R.lsp)===null||I===void 0?void 0:I.CallHierarchyProvider}),N=this.hasService(R=>{var I;return(I=R.lsp)===null||I===void 0?void 0:I.TypeHierarchyProvider}),x=this.hasService(R=>{var I;return(I=R.lsp)===null||I===void 0?void 0:I.CodeLensProvider}),W=this.hasService(R=>{var I;return(I=R.lsp)===null||I===void 0?void 0:I.DeclarationProvider}),O=this.hasService(R=>{var I;return(I=R.lsp)===null||I===void 0?void 0:I.InlayHintProvider}),te=(o=this.services.lsp)===null||o===void 0?void 0:o.WorkspaceSymbolProvider;return{capabilities:{workspace:{workspaceFolders:{supported:!0},fileOperations:i},executeCommandProvider:p&&{commands:p},textDocumentSync:Tr.TextDocumentSyncKind.Incremental,completionProvider:C?g:void 0,referencesProvider:y,documentSymbolProvider:$,definitionProvider:K,typeDefinitionProvider:S,documentHighlightProvider:Q,codeActionProvider:c,documentFormattingProvider:u,documentRangeFormattingProvider:u,documentOnTypeFormattingProvider:l,foldingRangeProvider:mt,hoverProvider:Qe,renameProvider:ir?{prepareProvider:!0}:void 0,semanticTokensProvider:d?SI:void 0,signatureHelpProvider:w,implementationProvider:A,callHierarchyProvider:Bt?{}:void 0,typeHierarchyProvider:N?{}:void 0,documentLinkProvider:h?{resolveProvider:!1}:void 0,codeLensProvider:x?{resolveProvider:!1}:void 0,declarationProvider:W,inlayHintProvider:O?{resolveProvider:!1}:void 0,workspaceSymbolProvider:te?{resolveProvider:!!te.resolveSymbol}:void 0}}}async initialized(e){await this.fireInitializedOnDefaultServices(e),this.onInitializedEmitter.fire(e),this.onInitializedEmitter.dispose()}fireInitializeOnDefaultServices(e){this.services.workspace.ConfigurationProvider.initialize(e),this.services.workspace.WorkspaceManager.initialize(e)}async fireInitializedOnDefaultServices(e){let r=this.services.lsp.Connection,n=r?Object.assign(Object.assign({},e),{register:a=>r.client.register(Tr.DidChangeConfigurationNotification.type,a),getConfiguration:a=>r.workspace.getConfiguration(a)}):e;await this.services.workspace.ConfigurationProvider.initialized(n),await this.services.workspace.WorkspaceManager.initialized(e)}};function $I(t){let e=t.lsp.Connection;if(!e)throw new Error("Starting a language server requires the languageServer.Connection service to be set.");A0(e,t),k0(e,t),I0(e,t),R0(e,t),P0(e,t),b0(e,t),E0(e,t),D0(e,t),N0(e,t),M0(e,t),z0(e,t),L0(e,t),K0(e,t),F0(e,t),O0(e,t),W0(e,t),G0(e,t),H0(e,t),q0(e,t),Y0(e,t),Q0(e,t),j0(e,t),U0(e,t),B0(e,t),_0(e,t),V0(e,t),e.onInitialize(n=>t.lsp.LanguageServer.initialize(n)),e.onInitialized(n=>t.lsp.LanguageServer.initialized(n)),t.workspace.TextDocuments.listen(e),e.listen()}function A0(t,e){let r=e.lsp.DocumentUpdateHandler;e.workspace.TextDocuments.onDidChangeContent(a=>r.didChangeContent(a)),t.onDidChangeWatchedFiles(a=>r.didChangeWatchedFiles(a))}function k0(t,e){let r=e.lsp.FileOperationHandler;r&&(r.didCreateFiles&&t.workspace.onDidCreateFiles(n=>r.didCreateFiles(n)),r.didRenameFiles&&t.workspace.onDidRenameFiles(n=>r.didRenameFiles(n)),r.didDeleteFiles&&t.workspace.onDidDeleteFiles(n=>r.didDeleteFiles(n)),r.willCreateFiles&&t.workspace.onWillCreateFiles(n=>r.willCreateFiles(n)),r.willRenameFiles&&t.workspace.onWillRenameFiles(n=>r.willRenameFiles(n)),r.willDeleteFiles&&t.workspace.onWillDeleteFiles(n=>r.willDeleteFiles(n)))}function I0(t,e){e.workspace.DocumentBuilder.onBuildPhase(B.Validated,async(n,a)=>{for(let o of n)if(o.diagnostics&&t.sendDiagnostics({uri:o.uri.toString(),diagnostics:o.diagnostics}),a.isCancellationRequested)return})}function R0(t,e){t.onCompletion(Nt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.CompletionProvider)===null||s===void 0?void 0:s.getCompletion(n,a,o)},e,B.IndexedReferences))}function P0(t,e){t.onReferences(Nt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.ReferencesProvider)===null||s===void 0?void 0:s.findReferences(n,a,o)},e,B.IndexedReferences))}function K0(t,e){t.onCodeAction(Nt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.CodeActionProvider)===null||s===void 0?void 0:s.getCodeActions(n,a,o)},e,B.Validated))}function b0(t,e){t.onDocumentSymbol(Nt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.DocumentSymbolProvider)===null||s===void 0?void 0:s.getSymbols(n,a,o)},e,B.Parsed))}function E0(t,e){t.onDefinition(Nt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.DefinitionProvider)===null||s===void 0?void 0:s.getDefinition(n,a,o)},e,B.IndexedReferences))}function D0(t,e){t.onTypeDefinition(Nt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.TypeProvider)===null||s===void 0?void 0:s.getTypeDefinition(n,a,o)},e,B.IndexedReferences))}function N0(t,e){t.onImplementation(Nt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.ImplementationProvider)===null||s===void 0?void 0:s.getImplementation(n,a,o)},e,B.IndexedReferences))}function _0(t,e){t.onDeclaration(Nt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.DeclarationProvider)===null||s===void 0?void 0:s.getDeclaration(n,a,o)},e,B.IndexedReferences))}function M0(t,e){t.onDocumentHighlight(Nt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.DocumentHighlightProvider)===null||s===void 0?void 0:s.getDocumentHighlight(n,a,o)},e,B.IndexedReferences))}function O0(t,e){t.onHover(Nt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.HoverProvider)===null||s===void 0?void 0:s.getHoverContent(n,a,o)},e,B.IndexedReferences))}function z0(t,e){t.onFoldingRanges(Nt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.FoldingRangeProvider)===null||s===void 0?void 0:s.getFoldingRanges(n,a,o)},e,B.Parsed))}function L0(t,e){t.onDocumentFormatting(Nt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.Formatter)===null||s===void 0?void 0:s.formatDocument(n,a,o)},e,B.Parsed)),t.onDocumentRangeFormatting(Nt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.Formatter)===null||s===void 0?void 0:s.formatDocumentRange(n,a,o)},e,B.Parsed)),t.onDocumentOnTypeFormatting(Nt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.Formatter)===null||s===void 0?void 0:s.formatDocumentOnType(n,a,o)},e,B.Parsed))}function F0(t,e){t.onRenameRequest(Nt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.RenameProvider)===null||s===void 0?void 0:s.rename(n,a,o)},e,B.IndexedReferences)),t.onPrepareRename(Nt((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.RenameProvider)===null||s===void 0?void 0:s.prepareRename(n,a,o)},e,B.IndexedReferences))}function W0(t,e){t.languages.inlayHint.on(xn((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.InlayHintProvider)===null||s===void 0?void 0:s.getInlayHints(n,a,o)},e,B.IndexedReferences))}function G0(t,e){let r={data:[]};t.languages.semanticTokens.on(xn((n,a,o,i)=>{var s;return!((s=n.lsp)===null||s===void 0)&&s.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlight(a,o,i):r},e,B.IndexedReferences)),t.languages.semanticTokens.onDelta(xn((n,a,o,i)=>{var s;return!((s=n.lsp)===null||s===void 0)&&s.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightDelta(a,o,i):r},e,B.IndexedReferences)),t.languages.semanticTokens.onRange(xn((n,a,o,i)=>{var s;return!((s=n.lsp)===null||s===void 0)&&s.SemanticTokenProvider?n.lsp.SemanticTokenProvider.semanticHighlightRange(a,o,i):r},e,B.IndexedReferences))}function B0(t,e){t.onDidChangeConfiguration(r=>{r.settings&&e.workspace.ConfigurationProvider.updateConfiguration(r)})}function H0(t,e){let r=e.lsp.ExecuteCommandHandler;r&&t.onExecuteCommand(async(n,a)=>{var o;try{return await r.executeCommand(n.command,(o=n.arguments)!==null&&o!==void 0?o:[],a)}catch(i){return ja(i)}})}function U0(t,e){t.onDocumentLinks(xn((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.DocumentLinkProvider)===null||s===void 0?void 0:s.getDocumentLinks(n,a,o)},e,B.Parsed))}function q0(t,e){t.onSignatureHelp(xn((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.SignatureHelp)===null||s===void 0?void 0:s.provideSignatureHelp(n,a,o)},e,B.IndexedReferences))}function j0(t,e){t.onCodeLens(xn((r,n,a,o)=>{var i,s;return(s=(i=r.lsp)===null||i===void 0?void 0:i.CodeLensProvider)===null||s===void 0?void 0:s.provideCodeLens(n,a,o)},e,B.IndexedReferences))}function V0(t,e){var r;let n=e.lsp.WorkspaceSymbolProvider;if(n){let a=e.workspace.DocumentBuilder;t.onWorkspaceSymbol(async(i,s)=>{try{return await a.waitUntil(B.IndexedContent,s),await n.getSymbols(i,s)}catch(u){return ja(u)}});let o=(r=n.resolveSymbol)===null||r===void 0?void 0:r.bind(n);o&&t.onWorkspaceSymbolResolve(async(i,s)=>{try{return await a.waitUntil(B.IndexedContent,s),await o(i,s)}catch(u){return ja(u)}})}}function Y0(t,e){t.languages.callHierarchy.onPrepare(xn(async(r,n,a,o)=>{var i;if(!((i=r.lsp)===null||i===void 0)&&i.CallHierarchyProvider){let s=await r.lsp.CallHierarchyProvider.prepareCallHierarchy(n,a,o);return s??null}return null},e,B.IndexedReferences)),t.languages.callHierarchy.onIncomingCalls(Jd(async(r,n,a)=>{var o;if(!((o=r.lsp)===null||o===void 0)&&o.CallHierarchyProvider){let i=await r.lsp.CallHierarchyProvider.incomingCalls(n,a);return i??null}return null},e)),t.languages.callHierarchy.onOutgoingCalls(Jd(async(r,n,a)=>{var o;if(!((o=r.lsp)===null||o===void 0)&&o.CallHierarchyProvider){let i=await r.lsp.CallHierarchyProvider.outgoingCalls(n,a);return i??null}return null},e))}function Q0(t,e){e.ServiceRegistry.all.some(r=>{var n;return(n=r.lsp)===null||n===void 0?void 0:n.TypeHierarchyProvider})&&(t.languages.typeHierarchy.onPrepare(xn(async(r,n,a,o)=>{var i,s;let u=await((s=(i=r.lsp)===null||i===void 0?void 0:i.TypeHierarchyProvider)===null||s===void 0?void 0:s.prepareTypeHierarchy(n,a,o));return u??null},e,B.IndexedReferences)),t.languages.typeHierarchy.onSupertypes(Jd(async(r,n,a)=>{var o,i;let s=await((i=(o=r.lsp)===null||o===void 0?void 0:o.TypeHierarchyProvider)===null||i===void 0?void 0:i.supertypes(n,a));return s??null},e)),t.languages.typeHierarchy.onSubtypes(Jd(async(r,n,a)=>{var o,i;let s=await((i=(o=r.lsp)===null||o===void 0?void 0:o.TypeHierarchyProvider)===null||i===void 0?void 0:i.subtypes(n,a));return s??null},e)))}function Jd(t,e){let r=e.ServiceRegistry;return async(n,a)=>{let o=Ne.parse(n.item.uri),i=await zm(e,a,o,B.IndexedReferences);if(i)return i;let s=r.getServices(o);if(!s){let u=`Could not find service instance for uri: '${o.toString()}'`;throw console.error(u),new Error(u)}try{return await t(s,n,a)}catch(u){return ja(u)}}}function xn(t,e,r){let n=e.workspace.LangiumDocuments,a=e.ServiceRegistry;return async(o,i)=>{let s=Ne.parse(o.textDocument.uri),u=await zm(e,i,s,r);if(u)return u;let l=a.getServices(s);if(!l){let d=`Could not find service instance for uri: '${s}'`;throw console.error(d),new Error(d)}let c=await n.getOrCreateDocument(s);try{return await t(l,c,o,i)}catch(d){return ja(d)}}}function Nt(t,e,r){let n=e.workspace.LangiumDocuments,a=e.ServiceRegistry;return async(o,i)=>{let s=Ne.parse(o.textDocument.uri),u=await zm(e,i,s,r);if(u)return u;let l=a.getServices(s);if(!l)return console.error(`Could not find service instance for uri: '${s.toString()}'`),null;let c=n.getDocument(s);if(!c)return null;try{return await t(l,c,o,i)}catch(d){return ja(d)}}}async function zm(t,e,r,n){if(n!==void 0){let a=t.workspace.DocumentBuilder;try{await a.waitUntil(n,r,e)}catch(o){return ja(o)}}}function ja(t){if(Qr(t))return new Tr.ResponseError(Tr.LSPErrorCodes.RequestCancelled,"The request has been cancelled.");if(t instanceof Tr.ResponseError)return t;throw t}var ep=Ot(fr(),1),Zd=class{getSymbolKind(){return ep.SymbolKind.Field}getCompletionItemKind(){return ep.CompletionItemKind.Reference}};var TI=Ot(fr(),1);var tp=class{constructor(e){this.nameProvider=e.references.NameProvider,this.references=e.references.References,this.grammarConfig=e.parser.GrammarConfig}findReferences(e,r){let n=e.parseResult.value.$cstNode;if(!n)return[];let a=dt(n,e.textDocument.offsetAt(r.position),this.grammarConfig.nameRegexp);return a?this.getReferences(a,r,e):[]}getReferences(e,r,n){let a=[],o=this.references.findDeclaration(e);if(o){let i={includeDeclaration:r.context.includeDeclaration};this.references.findReferences(o,i).forEach(s=>{a.push(TI.Location.create(s.sourceUri.toString(),s.segment.range))})}return a}};Da();var rp=class{constructor(e){this.references=e.references.References,this.nameProvider=e.references.NameProvider,this.grammarConfig=e.parser.GrammarConfig}async rename(e,r){let n={},a=e.parseResult.value.$cstNode;if(!a)return;let o=e.textDocument.offsetAt(r.position),i=dt(a,o,this.grammarConfig.nameRegexp);if(!i)return;let s=this.references.findDeclaration(i);if(!s)return;let u={onlyLocal:!1,includeDeclaration:!0};return this.references.findReferences(s,u).forEach(c=>{let d=mr.replace(c.segment.range,r.newName),p=c.sourceUri.toString();n[p]?n[p].push(d):n[p]=[d]}),{changes:n}}prepareRename(e,r){return this.renameNodeRange(e,r.position)}renameNodeRange(e,r){let n=e.parseResult.value.$cstNode,a=e.textDocument.offsetAt(r);if(n&&a){let o=dt(n,a,this.grammarConfig.nameRegexp);if(!o)return;if(this.references.findDeclaration(o)||this.isNameNode(o))return o.range}}isNameNode(e){return e?.astNode&&Ic(e.astNode)&&e===this.nameProvider.getNameNode(e.astNode)}};var np=class{constructor(e){this.indexManager=e.workspace.IndexManager,this.nodeKindProvider=e.lsp.NodeKindProvider,this.fuzzyMatcher=e.lsp.FuzzyMatcher}async getSymbols(e,r=L.CancellationToken.None){let n=[],a=e.query.toLowerCase();for(let o of this.indexManager.allElements())if(await We(r),this.fuzzyMatcher.match(a,o.name)){let i=this.getWorkspaceSymbol(o);i&&n.push(i)}return n}getWorkspaceSymbol(e){let r=e.nameSegment;if(r)return{kind:this.nodeKindProvider.getSymbolKind(e),name:e.name,location:{range:r.range,uri:e.documentUri.toString()}}}};function AI(t){return si.merge(ou(t),X0(t))}function X0(t){return{lsp:{CompletionProvider:e=>new Bd(e),DocumentSymbolProvider:e=>new qd(e),HoverProvider:e=>new Qd(e),FoldingRangeProvider:e=>new Vd(e),ReferencesProvider:e=>new tp(e),DefinitionProvider:e=>new Hd(e),DocumentHighlightProvider:e=>new Ud(e),RenameProvider:e=>new rp(e)},shared:()=>t.shared}}function kI(t){return si.merge(iu(t),J0(t))}function J0(t){return{lsp:{Connection:()=>t.connection,LanguageServer:e=>new Xd(e),DocumentUpdateHandler:e=>new jd(e),WorkspaceSymbolProvider:e=>new np(e),NodeKindProvider:()=>new Zd,FuzzyMatcher:()=>new Yd},workspace:{TextDocuments:()=>new xI.TextDocuments(Vn)}}}var II;(function(t){function e(...c){return{options:{},moves:c.flatMap(d=>d.moves).sort(l)}}t.fit=e;function r(c){return a(0,c)}t.noSpace=r;function n(c){return a(1,c)}t.oneSpace=n;function a(c,d){return{options:d??{},moves:[{characters:c}]}}t.spaces=a;function o(c){return i(1,c)}t.newLine=o;function i(c,d){return{options:d??{},moves:[{lines:c}]}}t.newLines=i;function s(c){return{options:c??{},moves:[{tabs:1,lines:1}]}}t.indent=s;function u(c){return{options:c??{},moves:[{tabs:0}]}}t.noIndent=u;function l(c,d){var p,h,w,S,A,C;let g=(p=c.lines)!==null&&p!==void 0?p:0,y=(h=d.lines)!==null&&h!==void 0?h:0,$=(w=c.tabs)!==null&&w!==void 0?w:0,K=(S=d.tabs)!==null&&S!==void 0?S:0,Q=(A=c.characters)!==null&&A!==void 0?A:0,mt=(C=d.characters)!==null&&C!==void 0?C:0;return g<y?-1:g>y?1:$<K?-1:$>K?1:Q<mt?-1:Q>mt?1:0}})(II||(II={}));var Z0=Ot(fr(),1);var ia=Ot(PI(),1);var e1="Person";var Au=class extends sa{getAllTypes(){return["Avatars","AwsIcons","AzureIcons","BoxComponents","Classes","Dimension","EdgeLabel","EdgeSourceHandle","EdgeStyle","EdgeTargetHandle","EdgeType","Edges","FontFamily","GcpIcons","Greeting","LabelStyle","Model","Person","Position","ProfileHandle","ProfilePic","SkillIcons","TextComponents","ThemeisleIcons","UndrawIcons"]}computeIsSubtype(e,r){switch(e){default:return!1}}getReferenceType(e){let r=`${e.container.$type}:${e.property}`;switch(r){case"Greeting:person":return e1;default:throw new Error(`${r} is not a valid reference id.`)}}getTypeMetaData(e){switch(e){case"Avatars":return{name:"Avatars",properties:[{name:"classes"},{name:"dimension"},{name:"fontFamily"},{name:"name"},{name:"position"},{name:"profileHandle"},{name:"profilePic"}]};case"AwsIcons":return{name:"AwsIcons",properties:[{name:"dimension"},{name:"icon"},{name:"name"},{name:"position"}]};case"AzureIcons":return{name:"AzureIcons",properties:[{name:"dimension"},{name:"icon"},{name:"name"},{name:"position"}]};case"BoxComponents":return{name:"BoxComponents",properties:[{name:"boxType"},{name:"classes"},{name:"dimension"},{name:"name"},{name:"position"}]};case"Classes":return{name:"Classes",properties:[{name:"classes"}]};case"Dimension":return{name:"Dimension",properties:[{name:"height"},{name:"width"}]};case"EdgeLabel":return{name:"EdgeLabel",properties:[{name:"label"}]};case"Edges":return{name:"Edges",properties:[{name:"classes"},{name:"label"},{name:"labelStyle"},{name:"source"},{name:"sourceHandle"},{name:"style"},{name:"target"},{name:"targetHandle"},{name:"type"}]};case"EdgeSourceHandle":return{name:"EdgeSourceHandle",properties:[{name:"sourceHandle"}]};case"EdgeStyle":return{name:"EdgeStyle",properties:[{name:"style"}]};case"EdgeTargetHandle":return{name:"EdgeTargetHandle",properties:[{name:"targetHandle"}]};case"EdgeType":return{name:"EdgeType",properties:[{name:"type"}]};case"FontFamily":return{name:"FontFamily",properties:[{name:"fontFamily"}]};case"GcpIcons":return{name:"GcpIcons",properties:[{name:"dimension"},{name:"icon"},{name:"name"},{name:"position"}]};case"Greeting":return{name:"Greeting",properties:[{name:"person"}]};case"LabelStyle":return{name:"LabelStyle",properties:[{name:"labelStyle"}]};case"Model":return{name:"Model",properties:[{name:"avatars",defaultValue:[]},{name:"awsIcons",defaultValue:[]},{name:"azureIcons",defaultValue:[]},{name:"boxes",defaultValue:[]},{name:"edges",defaultValue:[]},{name:"gcpIcons",defaultValue:[]},{name:"greetings",defaultValue:[]},{name:"persons",defaultValue:[]},{name:"skillIcons",defaultValue:[]},{name:"textComponents",defaultValue:[]},{name:"themeisleIcons",defaultValue:[]},{name:"undrawIcons",defaultValue:[]}]};case"Person":return{name:"Person",properties:[{name:"name"}]};case"Position":return{name:"Position",properties:[{name:"isNegativeX",defaultValue:!1},{name:"isNegativeY",defaultValue:!1},{name:"x"},{name:"y"}]};case"ProfileHandle":return{name:"ProfileHandle",properties:[{name:"profileHandle"}]};case"ProfilePic":return{name:"ProfilePic",properties:[{name:"profilePic"}]};case"SkillIcons":return{name:"SkillIcons",properties:[{name:"dimension"},{name:"icon"},{name:"name"},{name:"position"}]};case"TextComponents":return{name:"TextComponents",properties:[{name:"classes"},{name:"dimension"},{name:"fontFamily"},{name:"name"},{name:"position"},{name:"text"}]};case"ThemeisleIcons":return{name:"ThemeisleIcons",properties:[{name:"dimension"},{name:"icon"},{name:"name"},{name:"position"}]};case"UndrawIcons":return{name:"UndrawIcons",properties:[{name:"dimension"},{name:"icon"},{name:"name"},{name:"position"}]};default:return{name:e,properties:[]}}}},Ine=new Au;var ap,KI=()=>ap??(ap=_c(`{
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
            "feature": "persons",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@1"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "greetings",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "awsIcons",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@22"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "gcpIcons",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@28"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "azureIcons",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@45"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "skillIcons",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@51"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "themeisleIcons",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@63"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "undrawIcons",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@80"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "textComponents",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@81"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "edges",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@93"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "boxes",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@83"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "avatars",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@96"
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
      "name": "Person",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "person"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
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
      "name": "Greeting",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "Hello"
          },
          {
            "$type": "Assignment",
            "feature": "person",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@1"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@10"
                },
                "arguments": []
              },
              "deprecatedSyntax": false
            }
          },
          {
            "$type": "Keyword",
            "value": "!"
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
                "$ref": "#/rules@8"
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
                "$ref": "#/rules@8"
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
                "$ref": "#/rules@8"
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
                "$ref": "#/rules@8"
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
                "$ref": "#/rules@12"
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
            "value": "fontFamily:"
          },
          {
            "$type": "Assignment",
            "feature": "fontFamily",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@12"
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
              "$ref": "#/rules@10"
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
                  "$ref": "#/rules@10"
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
      "name": "AwsIconType0",
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
      "name": "AwsIconType1",
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
      "name": "AwsIconType2",
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
      "name": "AwsIconType3",
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
      "name": "AwsIconType4",
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
      "name": "AwsIconType5",
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
      "name": "AwsIconType6",
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
      "name": "AwsIcons",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "aws-icon"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            },
            "cardinality": "?"
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
                    "$ref": "#/rules@15"
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
                    "$ref": "#/rules@17"
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
                    "$ref": "#/rules@19"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@20"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@21"
                  },
                  "arguments": []
                }
              ]
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "{"
              },
              {
                "$type": "Assignment",
                "feature": "position",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@3"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Assignment",
                "feature": "dimension",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@4"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Keyword",
                "value": "}"
              }
            ],
            "cardinality": "?"
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
      "name": "GcpIconType0",
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
      "name": "GcpIconType1",
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
      "name": "GcpIconType2",
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
      "name": "GcpIconType3",
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
      "name": "GcpIconType4",
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
      "name": "GcpIcons",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "gcp-icon"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            },
            "cardinality": "?"
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
                    "$ref": "#/rules@23"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@24"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@25"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@26"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@27"
                  },
                  "arguments": []
                }
              ]
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "{"
              },
              {
                "$type": "Assignment",
                "feature": "position",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@3"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Assignment",
                "feature": "dimension",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@4"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Keyword",
                "value": "}"
              }
            ],
            "cardinality": "?"
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
      "name": "AzureIconType0",
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
      "name": "AzureIconType1",
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
      "name": "AzureIconType2",
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
      "name": "AzureIconType3",
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
      "name": "AzureIconType4",
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
      "name": "AzureIconType5",
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
      "name": "AzureIconType6",
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
      "name": "AzureIconType7",
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
      "name": "AzureIconType8",
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
      "name": "AzureIconType9",
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
      "name": "AzureIconType10",
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
      "name": "AzureIconType11",
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
      "name": "AzureIconType12",
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
      "name": "AzureIconType13",
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
      "name": "AzureIconType14",
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
      "name": "AzureIconType15",
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
      "name": "AzureIcons",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "azure-icon"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            },
            "cardinality": "?"
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
                    "$ref": "#/rules@29"
                  },
                  "arguments": []
                },
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
                    "$ref": "#/rules@38"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@39"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@40"
                  },
                  "arguments": []
                },
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
                }
              ]
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "{"
              },
              {
                "$type": "Assignment",
                "feature": "position",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@3"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Assignment",
                "feature": "dimension",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@4"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Keyword",
                "value": "}"
              }
            ],
            "cardinality": "?"
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
      "name": "SkillIconType0",
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
      "name": "SkillIconType1",
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
      "name": "SkillIconType2",
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
      "name": "SkillIconType3",
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
      "name": "SkillIconType4",
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
      "name": "SkillIcons",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "skill-icon"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            },
            "cardinality": "?"
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
                }
              ]
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "{"
              },
              {
                "$type": "Assignment",
                "feature": "position",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@3"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Assignment",
                "feature": "dimension",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@4"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Keyword",
                "value": "}"
              }
            ],
            "cardinality": "?"
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
      "name": "ThemeisleIconType0",
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
      "name": "ThemeisleIconType1",
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
      "name": "ThemeisleIconType2",
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
      "name": "ThemeisleIconType3",
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
      "name": "ThemeisleIconType4",
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
      "name": "ThemeisleIconType5",
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
      "name": "ThemeisleIconType6",
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
      "name": "ThemeisleIconType7",
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
      "name": "ThemeisleIconType8",
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
      "name": "ThemeisleIconType9",
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
      "name": "ThemeisleIconType10",
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
      "name": "ThemeisleIcons",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "themeisle-icon"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            },
            "cardinality": "?"
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
                    "$ref": "#/rules@57"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@58"
                  },
                  "arguments": []
                },
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
                }
              ]
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "{"
              },
              {
                "$type": "Assignment",
                "feature": "position",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@3"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Assignment",
                "feature": "dimension",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@4"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Keyword",
                "value": "}"
              }
            ],
            "cardinality": "?"
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
      "name": "UndrawIconType0",
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
      "name": "UndrawIconType1",
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
      "name": "UndrawIconType2",
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
      "name": "UndrawIconType3",
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
      "name": "UndrawIconType4",
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
      "name": "UndrawIconType5",
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
      "name": "UndrawIconType6",
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
      "name": "UndrawIconType7",
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
      "name": "UndrawIconType8",
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
      "name": "UndrawIconType9",
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
      "name": "UndrawIconType10",
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
      "name": "UndrawIconType11",
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
      "name": "UndrawIconType12",
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
      "name": "UndrawIconType13",
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
      "name": "UndrawIconType14",
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
      "name": "UndrawIconType15",
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
      "name": "UndrawIcons",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "undraw-icon"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            },
            "cardinality": "?"
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
                    "$ref": "#/rules@64"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@65"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@66"
                  },
                  "arguments": []
                },
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
                    "$ref": "#/rules@73"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@74"
                  },
                  "arguments": []
                },
                {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@75"
                  },
                  "arguments": []
                },
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
                }
              ]
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "{"
              },
              {
                "$type": "Assignment",
                "feature": "position",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@3"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Assignment",
                "feature": "dimension",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@4"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Keyword",
                "value": "}"
              }
            ],
            "cardinality": "?"
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
      "name": "TextComponents",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "text"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "text",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@12"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "{"
              },
              {
                "$type": "Assignment",
                "feature": "position",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@3"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Assignment",
                "feature": "dimension",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@4"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Assignment",
                "feature": "fontFamily",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@6"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Assignment",
                "feature": "classes",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@5"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Keyword",
                "value": "}"
              }
            ],
            "cardinality": "?"
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
      "name": "BoxComponentTypes",
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
      "name": "BoxComponents",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "box"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "boxType",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@82"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "{"
              },
              {
                "$type": "Assignment",
                "feature": "position",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@3"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Assignment",
                "feature": "dimension",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@4"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Assignment",
                "feature": "classes",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@5"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Keyword",
                "value": "}"
              }
            ],
            "cardinality": "?"
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
      "name": "HandleTypes",
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
      "name": "EdgeSourceHandle",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "sourceHandle:"
          },
          {
            "$type": "Assignment",
            "feature": "sourceHandle",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@84"
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
      "name": "EdgeTargetHandle",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "targetHandle:"
          },
          {
            "$type": "Assignment",
            "feature": "targetHandle",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@84"
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
      "name": "EdgeLabel",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "label:"
          },
          {
            "$type": "Assignment",
            "feature": "label",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@12"
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
      "name": "EdgeStyle",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "style:"
          },
          {
            "$type": "Assignment",
            "feature": "style",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@12"
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
      "name": "LabelStyle",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "labelStyle:"
          },
          {
            "$type": "Assignment",
            "feature": "labelStyle",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@12"
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
      "name": "EdgeType",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "type:"
          },
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@90"
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
      "name": "Edges",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "edge"
          },
          {
            "$type": "Assignment",
            "feature": "source",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "=>"
          },
          {
            "$type": "Assignment",
            "feature": "target",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@10"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "label",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@87"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "{"
              },
              {
                "$type": "Assignment",
                "feature": "type",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@92"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Assignment",
                "feature": "sourceHandle",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@85"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Assignment",
                "feature": "targetHandle",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@86"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Assignment",
                "feature": "classes",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@5"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Assignment",
                "feature": "style",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@88"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Assignment",
                "feature": "labelStyle",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@89"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Keyword",
                "value": "}"
              }
            ],
            "cardinality": "?"
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
      "name": "ProfilePic",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "profilePic:"
          },
          {
            "$type": "Assignment",
            "feature": "profilePic",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@12"
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
      "name": "ProfileHandle",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "profileHandle:"
          },
          {
            "$type": "Assignment",
            "feature": "profileHandle",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@12"
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
      "name": "Avatars",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "avatar"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@12"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "profilePic",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@94"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "profileHandle",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@95"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "{"
              },
              {
                "$type": "Assignment",
                "feature": "position",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@3"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Assignment",
                "feature": "dimension",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@4"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Assignment",
                "feature": "fontFamily",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@6"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Assignment",
                "feature": "classes",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@5"
                  },
                  "arguments": []
                },
                "cardinality": "?"
              },
              {
                "$type": "Keyword",
                "value": "}"
              }
            ],
            "cardinality": "?"
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
}`));var t1={languageId:"yadl",fileExtensions:[".yadl"],caseInsensitive:!1},bI={AstReflection:()=>new Au},EI={Grammar:()=>KI(),LanguageMetaData:()=>t1,parser:{}};function DI(t){let e=t.validation.ValidationRegistry,r=t.validation.YadlValidator,n={Person:r.checkPersonStartsWithCapital};e.register(n,r)}var op=class{checkPersonStartsWithCapital(e,r){if(e.name){let n=e.name.substring(0,1);n.toUpperCase()!==n&&r("warning","Person name should start with a capital.",{node:e,property:"name"})}}};var r1={validation:{YadlValidator:()=>new op}};function NI(t){let e=Wa(kI(t),bI),r=Wa(AI({shared:e}),EI,r1);return e.ServiceRegistry.register(r),DI(r),{shared:e,Yadl:r}}var n1=new ia.BrowserMessageReader(self),a1=new ia.BrowserMessageWriter(self),_I=(0,ia.createConnection)(n1,a1),{shared:MI,Yadl:o1}=NI(Object.assign({connection:_I},uu));$I(MI);var i1=new ia.NotificationType("browser/DocumentChange"),s1=o1.serializer.JsonSerializer;MI.workspace.DocumentBuilder.onBuildPhase(B.Validated,t=>{var e;for(let r of t){let n=s1.serialize(r.parseResult.value,{sourceText:!0,textRegions:!0});_I.sendNotification(i1,{uri:r.uri.toString(),content:n,diagnostics:(e=r.diagnostics)!==null&&e!==void 0?e:[]})}});})();
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
