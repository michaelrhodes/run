!function(n){"module"in this?module.exports=n():runParallel=n()}(function(){return function(n,l,t){var e,i=this,u=[],c=0,r=0;n.length&&(t=l,n=(l=n).length),function a(){var o;r<n&&l[c]&&l[c].call(i,(++r,a(o=c++),function(n){if(n)return t&&t.call(i,n);u[o]=arguments.length>2?[].slice.call(arguments,1):arguments[1],--r,--e?a():t&&t.apply(i,[n,u])}))}(e=l.length)}});