// https://rot47.net/
module.exports = function rot47(x)
{var s=[];for(var i=0;i<x.length;i++)
{var j=x.charCodeAt(i);if((j>=33)&&(j<=126))
{s[i]=String.fromCharCode(33+((j+ 14)%94));}
else
{s[i]=String.fromCharCode(j);}}
  return s.join('');}