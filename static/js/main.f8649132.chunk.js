(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{icon:"//ClickyGame/public/assets/images/008-mailbox.png",key:1},{icon:"/assets/images/012-ace-of-hearts.png",key:2},{icon:"/assets/images/014-valentines-day-1.png",key:3},{icon:"/assets/images/015-romantic-music.png",key:4},{icon:"/assets/images/020-home.png",key:5},{icon:"/assets/images/021-gift.png",key:6},{icon:"/assets/images/026-potion.png",key:7},{icon:"/assets/images/027-love.png",key:8},{icon:"/assets/images/028-jigsaw.png",key:9},{icon:"/assets/images/040-heart-1.png",key:10},{icon:"/assets/images/041-cupid.png",key:11},{icon:"/assets/images/044-engagement-ring.png",key:12},{icon:"/assets/images/022-diary.png",key:13},{icon:"/assets/images/016-toast.png",key:14},{icon:"/assets/images/047-balloon.png",key:15},{icon:"/assets/images/050-search.png",key:16}]},,,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(8),i=a.n(s),r=a(1),o=a(2),l=a(4),m=a(3),u=a(5);a(15);var d=function(e){e.props;var t=e.icon,a=e.handleClick,n=e.dataid;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("img",{className:"click-item","data-id":n,src:t,alt:"icon",onClick:a})))};a(17);var h=function(e){var t=e.itemList,a=e.handleItemSelected;return c.a.createElement("div",{className:"container"},t.map(function(e,t){return c.a.createElement(d,{key:t,dataid:e.key,icon:e.icon,handleClick:a})}))};a(19);var g=function(e){var t=e.score,a=e.topScore;return c.a.createElement("nav",{className:"navbar"},c.a.createElement("ul",null,c.a.createElement("li",{className:"brand"},c.a.createElement("a",{href:"/"},"Home")),c.a.createElement("li",null,"Click an image to begin"),c.a.createElement("li",null,"Score ",t," | Top Score ",a)))};a(21);var p=function(){return c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"Clicky Valentine Game"),c.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once!"))};a(23);var f=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"bottom"},"Clicky Game! ",c.a.createElement("img",{alt:"react",src:"assets/images/react.svg"})),c.a.createElement("div",{className:"credit"},"Icons made by ",c.a.createElement("a",{href:"http://www.freepik.com/",title:"Freepik"},"Freepik")," from ",c.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," is licensed by ",c.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0"},"CC 3.0 BY")),c.a.createElement("div",{className:"credit"},c.a.createElement("a",{href:"http://www.github.com/hyxhuynh/ClickyGame",title:"GitHub"},"Github: Made by Hy Huynh")))},y=a(6),k=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).shuffleArray=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e},a.handleItemSelected=function(e){var t=e.target.getAttribute("data-id");a.state.selected.includes(t)?a.setState({score:0,topScore:Math.max(a.state.topScore,a.state.score),data:a.shuffleArray(y),selected:[]}):a.setState({score:a.state.score+1,data:a.shuffleArray(y),selected:a.state.selected.concat(t)})},a.state={score:0,topScore:0,selected:[],data:a.shuffleArray(y)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(g,{score:this.state.score,topScore:this.state.topScore}),c.a.createElement(p,null),c.a.createElement(h,{itemList:this.state.data,handleItemSelected:this.handleItemSelected}),c.a.createElement(f,null))}}]),t}(n.Component),v=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(k,null)}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.f8649132.chunk.js.map