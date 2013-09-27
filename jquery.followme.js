jQuery.fn.followMe=function(o) {
 ret={};
 ret.o=jQuery.extend({align:"center center", distance:"0 0"}, o);
 ret.k={
  aX:(ret.o.align.split(' ')[0]=="center" || ret.o.align.split(' ')[0]=="left" || ret.o.align.split(' ')[0]=="right")?ret.o.align.split(' ')[0]:"center",
  aY:(ret.o.align.split(' ')[1]=="center" || ret.o.align.split(' ')[1]=="top" || ret.o.align.split(' ')[1]=="bottom")?ret.o.align.split(' ')[1]:"center",
  dX:jQuery.isNumeric(parseFloat(ret.o.distance.split(' ')[0]))?parseFloat(ret.o.distance.split(' ')[0]):0
 };
 ret.k.dY=jQuery.isNumeric(parseFloat(ret.o.distance.split(' ')[1]))?parseFloat(ret.o.distance.split(' ')[1]):ret.k.dX;
 ret.t=jQuery(this);
 ret.stop=function() {
  jQuery(this.t).removeAttr('followMe');
  return this;
 }
 ret.start=function() {
  jQuery(this.t).attr('followMe', jQuery(this.t).data('followMeId'));
  return this;
 }
 ret.position=function(x,y,t) {
  kx=0;
  ky=0;
  switch(this.k.aX) {
   case 'center':
    kx=x+this.k.dX-t.outerWidth()*.5;
   break;
   case 'left':
    kx=x+this.k.dX;
   break;
   case 'right':
    kx=x+this.k.dX-t.outerWidth();
   break;
  }
  switch(this.k.aY) {
   case 'center':
    ky=y+this.k.dY-t.outerHeight()*.5;
   break;
   case 'top':
    ky=y+this.k.dY;
   break;
   case 'bottom':
    ky=y+this.k.dY-t.outerHeight();
   break;
  }
  return {top:ky, left:kx};
 }
 ret.i=(jQuery(window).data('follow-me-ids')==undefined)?0:(jQuery(window).data('follow-me-id')+1);
 ret.t.css('position', 'absolute').data('follow-me-id', ret.i).attr('followMe', ret.i).data('follow-me-ret', ret); 
 jQuery(window).data('follow-me-ids', ret.i);
 jQuery(document).bind('mousemove.followMe', function(e) {
  jQuery('[followMe]').each(function() {
   jQuery(this).animate(jQuery(this).data('followMeRet').position(e.pageX, e.pageY, jQuery(this)), {duration:50, easing:'linear', queue:false});
  });
 });
 jQuery(document).trigger('mousemove.followMe');
 return ret;
}
