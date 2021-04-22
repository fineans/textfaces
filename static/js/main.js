$(function(){GAG_SLOGANS=['( ͡° ͜ʖ ͡°)','ಠ_ಠ',];if(!$.cookie("bookmarked")){$.cookie("bookmarked","yep",{"expires":10*365,"path":"/",});$('.bookmark-banner').show();}
var $selected=$("select option:selected");var selectedGag=$selected.val();var zalgoStrength=1;var identity=function(s){return s;};var charFunctionMap={"zalgo":function(s){return zalgoChar(s,zalgoStrength);},"strikethrough":strikethroughChar,"gagboys":gagBoysChar,"flip":flipChar,"normal":identity,"smallcaps":smallCapsChar,"fullwidth":fullWidthChar,"checkbox":identity,"uncheckbox":identity}
var sampleGagMap={"Pog":"Doge"}
function switchSlogan(){var slogan=randomChoice(GAG_SLOGANS);$('.slogan-gag').html(slogan+' ↺');}
function getSelectedGag(){return charFunctionMap[selectedGag];}
function handleFlashFallback(){var $faces=$("button.facebtn");var clipboard=new Clipboard("button.facebtn");clipboard.on('success',function(e){$(e.target).popover('show');window.setTimeout(function(){$faces.popover('hide');},500);var id=$(e.target).attr("face-id")
$.ajax({url:"click",method:"POST",data:{id:id}});e.clearSelection();});}
function shrinkFacesToFit(){var colWidth=$("div.col-md-6").width();$("span.face").each(function(){var fontSize=parseInt($(this).css('font-size'));while($(this).width()>=colWidth&&fontSize>5){fontSize--;$(this).css('font-size',fontSize.toString()+'px');}});}
function setup(){var faces=$("button.facebtn");faces.popover({content:"Copied to clipboard!",placement:"right"});handleFlashFallback();shrinkFacesToFit();}
function setupTextGags(){var $gagTextArea=$("textarea.gag-text");var $sampleGag=$("p.sample-gag");var $copyBtn=$("button#btn-copy");var gagClipboard=new Clipboard($copyBtn.get(0));$sampleGag.text(sampleGagMap[selectedGag]);gagClipboard.on("success",function(event){$copyBtn.text("Copied!");window.setTimeout(function(){$copyBtn.text("Copy to clipboard");},2000);});$('.slogan-gag').on('click',switchSlogan);$('#btn-reapply').on('click',function(){var gagify=getSelectedGag();var gagifiedText=$.map($gagTextArea.val().split(''),function(char){return gagify(char);}).join('');$gagTextArea.val(gagifiedText);return false;});switchSlogan();$.valHooks.textarea={get:function(elem){return elem.value.replace(/\r?\n/g,"\r\n");}};$("select").change(function(){$selected=$("select.gags option:selected");selectedGag=$selected.val();if(selectedGag==="zalgo"){$("#zalgo-options").show();zalgoStrength=parseInt($("select.zalgo-level option:selected").val());}
else if(selectedGag==="checkbox"){$gagTextArea.val($gagTextArea.val()+"☑ ");}
else if(selectedGag==="uncheckbox"){$gagTextArea.val($gagTextArea.val()+"⬜ ");}
else{$("#zalgo-options").hide();}
$sampleGag.text(sampleGagMap[selectedGag]);});$copyBtn.click(function(){return false;});$gagTextArea.bind("keypress",function(event){if(event.which==13){event.preventDefault();if(selectedGag==="checkbox"){$gagTextArea.val($gagTextArea.val()+"\n☑ ");}
else if(selectedGag==="uncheckbox"){$gagTextArea.val($gagTextArea.val()+"\n☐");}
if((selectedGag==="checkbox"||selectedGag==="uncheckbox")){return false;}}
var gagify=getSelectedGag();var char=String.fromCharCode(event.which);if(selectedGag==="flip"){$gagTextArea.val(gagify(char)+$gagTextArea.val());}
else{$gagTextArea.val($gagTextArea.val()+gagify(char));}
return false;});}
setup();setupTextGags();console.log("( ͡° ͜ʖ ͡°)")});

