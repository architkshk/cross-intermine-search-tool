webpackJsonp([1],{0:function(t,e){},1:function(t,e){},2:function(t,e){},"4sA/":function(t,e){},"7zck":function(t,e){},NHnr:function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=l("7+uW"),r=l("mvHQ"),i=l.n(r),n=l("fZjL"),s=l.n(n),o=l("mtWM"),c=l.n(o),v=l("i9dp"),u=l.n(v),d={data:function(){return{localData:[],toggleSelectCategory:!0,toggleSelectMines:!1,localStorageActive:!1,interminesActive:!1,dialog:!1,drawer:null,tabModal:"tab-home",errors:[],searchTerm:"",text:"",selectIntermines:{icon:"keyboard_arrow_up","icon-alt":"keyboard_arrow_down",text:"Select Intermines",model:!0,children:[]},filters:{icon:"keyboard_arrow_up","icon-alt":"keyboard_arrow_down",text:"Filters",model:!0,children:[{text:"Plants"}]},scoreFilter:"1",selected:[],selectedFilters:[],category:[],categoryFilters:[],searchActive:!1,emptyResultMines:[],failedSearchMines:[],protocol:document.location.protocol,host:document.location.host,modalData:null,minesList:null}},methods:{searchMine:function(){var t=this;""!==t.searchTerm.trim()&&0!==t.selected.length?(t.$router.replace({query:{search:t.searchTerm}}),t.failedSearchMines=[],t.emptyResultMines=[],t.searchActive=!0,t.tabModal="tab-results",t.selectIntermines.model=!1,t.category=[],t.categoryFilters=[],t.selected.map(function(e){e.result=void 0;var l=new u.a.Service({root:e.url}),a={q:t.searchTerm};l.search(a).then(function(l){void 0!==l&&!0===l.wasSuccessful&&200===l.statusCode&&null===l.error?(e.result=l,e.result.searchTerm=t.searchTerm,0===l.results.length&&t.emptyResultMines.push(e.text),100===l.results.length?e.result.fetchMore=!0:e.result.fetchMore=!1,t.pushToCategoryList(l.facets.Category)):t.failedSearchMines.push(e.text),t.$forceUpdate()},function(l){console.log(l),t.failedSearchMines.push(e.text),t.$forceUpdate()})})):alert("Please select a mine and use a search term to search the mines.")},selectAll:function(){var t=this;t.toggleSelectMines?this.selected=[]:(t.selected=[],t.selectIntermines.children.map(function(e){t.selected.push(e)})),t.toggleSelectMines=!t.toggleSelectMines},selectAllNoneCategories:function(){var t=this;t.toggleSelectCategory?t.categoryFilters=[]:(t.categoryFilters=[],t.category.map(function(e){t.categoryFilters.push(e)})),t.toggleSelectCategory=!t.toggleSelectCategory},calculateSearchPoints:function(t){return Math.round(5*Math.max(.1,Math.min(1,t)))},generateReportLink:function(t,e){return e+"/report.do?id="+t},filterResults:function(t){var e=this;return Array.isArray(t)?t.filter(function(t){return e.calculateSearchPoints(t.relevance)>=e.scoreFilter&&e.categoryFilters.indexOf(t.type)>=0}):t},selectColor:function(t){switch(t){case"Genes":case"Genomics":case"genes":case"gene":case"homologues":case"Homologue":case"Homology":case"Genome":case"Gene":return"#8BC34A";case"Proteins":case"proteins":case"ProteinDomain":case"Protein":return"#FFC107";case"publications":case"Author":case"Literature":case"Publication":return"#2196F3";case"Organism":return"#E91E63";case"interactions":case"InteractionTerm":case"InteractionExperiment":case"Complex":case"Interactions":case"Interaction":return"#FF5722";case"GOTerm":case"goAnnotation":case"GOAnnotation":return"#9C27B0";default:return"#cccccc"}},pushToCategoryList:function(t){var e=this;s()(t).forEach(function(t){e.category.indexOf(t)<0&&e.category.push(t),e.categoryFilters.indexOf(t)<0&&e.categoryFilters.push(t)}),e.category.sort()},exampleSearch:function(t){this.searchTerm=t,this.toggleSelectMines=!1,this.selectAll(),this.searchMine()},changeNeighbourhood:function(t){var e=this;e.selected=[],e.selectIntermines.children.map(function(l){l.neighbourhood.indexOf(t)>=0&&e.selected.push(l)})},showModal:function(t,e,l){t.url=e,t.mineName=l,this.modalData=t,this.dialog=!0},loadMoreResults:function(t,e){document.getElementById("loadMsg_"+e.text).innerHTML="Loading...";var l=this,a=new u.a.Service({root:e.url}),r=l.selected.indexOf(e),i={q:t,start:l.selected[r].result.results.length};a.search(i).then(function(t){void 0!==t&&!0===t.wasSuccessful&&200===t.statusCode&&null===t.error&&(t.results.map(function(t){l.selected[r].result.results.push(t)}),100===t.results.length?l.selected[r].result.fetchMore=!0:l.selected[r].result.fetchMore=!1,l.$forceUpdate()),document.getElementById("loadMsg_"+e.text).innerHTML="Load more"})},saveToLocalStorage:function(t,e,l){t.mineName=e,t.url=l;var a="IM_"+e+"_"+t.id;t.localId=a,localStorage.getItem(a)?alert("Item already exists!"):(localStorage.setItem(a,i()(t)),this.refreshLocalData(),alert("Saved to Favourites!"))},getLocalStorage:function(){this.localStorageActive=!0,this.tabModal="tab-localstorage",this.refreshLocalData()},activateInterMinesTab:function(){this.interminesActive=!0,this.tabModal="tab-intermines"},activateHomeTab:function(){this.tabModal="tab-home"},refreshLocalData:function(){for(var t in this.localData=[],localStorage)if("IM"===t.substring(0,2)){var e=JSON.parse(localStorage.getItem(t));this.localData.push(e)}},deleteFromLocalStorage:function(t){localStorage.removeItem(t),this.refreshLocalData()}},created:function(){var t=this,e=this;c.a.get("https://registry.intermine.org/service/instances").then(function(l){e.minesList=l.data.instances,l.data.instances.map(function(e){t.selectIntermines.children.push({text:e.name,url:e.url,neighbourhood:e.neighbours})})}).then(function(){t.selectAll(),t.$route.query.search&&(t.searchTerm=t.$route.query.search,t.searchMine())})}},h={render:function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-app",{attrs:{id:"inspire"}},[l("v-navigation-drawer",{attrs:{clipped:t.$vuetify.breakpoint.lgAndUp,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[l("v-list",{attrs:{dense:""}},[[l("v-list-tile",{on:{click:function(e){t.activateHomeTab()}}},[l("v-list-tile-action",[l("v-icon",{attrs:{color:"blue-grey darken-1"}},[t._v("home")])],1),t._v(" "),l("v-list-tile-content",[l("v-list-tile-title",[t._v("\n              Home\n            ")])],1)],1),t._v(" "),l("v-list-tile",{attrs:{id:"fav"},on:{click:function(e){t.getLocalStorage()}}},[l("v-list-tile-action",[l("v-icon",{attrs:{color:"blue-grey darken-1"}},[t._v("library_books")])],1),t._v(" "),l("v-list-tile-content",[l("v-list-tile-title",[t._v("\n              Favourites\n            ")])],1)],1),t._v(" "),l("v-list-tile",{attrs:{id:"exploreIM"},on:{click:function(e){t.activateInterMinesTab()}}},[l("v-list-tile-action",[l("v-icon",{attrs:{color:"blue-grey darken-1"}},[t._v("apps")])],1),t._v(" "),l("v-list-tile-content",[l("v-list-tile-title",[t._v("\n              Explore InterMines\n            ")])],1)],1),t._v(" "),l("v-list-group",{attrs:{"prepend-icon":t.selectIntermines.model?t.selectIntermines.icon:t.selectIntermines["icon-alt"],"append-icon":"",id:"minesBox"},model:{value:t.selectIntermines.model,callback:function(e){t.$set(t.selectIntermines,"model",e)},expression:"selectIntermines.model"}},[l("v-list-tile",{attrs:{slot:"activator"},slot:"activator"},[l("v-list-tile-content",[l("v-list-tile-title",[t._v("\n                "+t._s(t.selectIntermines.text)+"\n              ")])],1)],1),t._v(" "),l("v-list-tile",{on:{click:t.selectAll}},[l("v-list-tile-action",[l("v-icon",{attrs:{color:"blue-grey darken-1"}},[t._v("done_all")])],1),t._v(" "),l("v-list-tile-content",[l("v-list-tile-title",[t._v("\n                Select All / None\n              ")])],1)],1),t._v(" "),l("v-list-tile",{on:{click:function(e){t.changeNeighbourhood("MODs")}}},[l("v-list-tile-action",[l("v-icon",{attrs:{color:"blue-grey darken-1"}},[t._v("image_search")])],1),t._v(" "),l("v-list-tile-content",[l("v-list-tile-title",[t._v("\n                Only MODs\n              ")])],1)],1),t._v(" "),l("v-list-tile",{on:{click:function(e){t.changeNeighbourhood("Plants")}}},[l("v-list-tile-action",[l("v-icon",{attrs:{color:"blue-grey darken-1"}},[t._v("image_search")])],1),t._v(" "),l("v-list-tile-content",[l("v-list-tile-title",[t._v("\n                Only Plants\n              ")])],1)],1),t._v(" "),t._l(t.selectIntermines.children,function(e,a){return l("v-list-tile",{key:a,on:{click:function(t){}}},[l("v-list-tile-action"),t._v(" "),l("v-list-tile-content",[l("v-list-tile-title",[l("v-checkbox",{attrs:{ripple:!1,label:e.text,color:"blue-grey darken-1",value:e},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)],1)})],2),t._v(" "),l("v-radio-group",{attrs:{id:"relevanceBox"},on:{change:t.filterResults},model:{value:t.scoreFilter,callback:function(e){t.scoreFilter=e},expression:"scoreFilter"}},[l("v-list-tile",[l("v-list-tile-action",[l("v-icon",{attrs:{color:"blue-grey darken-1"}},[t._v("star")])],1),t._v(" "),l("v-list-tile-content",[l("v-list-tile-title",[t._v("\n                Relevance Score\n              ")])],1)],1),t._v(" "),l("v-list-tile",[l("v-list-tile-action"),t._v(" "),l("v-list-tile-content",[l("v-list-tile-title",[l("v-radio",{attrs:{ripple:!1,label:"4 stars & up",value:"4",color:"blue-grey darken-1"}})],1)],1)],1),t._v(" "),l("v-list-tile",[l("v-list-tile-action"),t._v(" "),l("v-list-tile-content",[l("v-list-tile-title",[l("v-radio",{attrs:{ripple:!1,label:"3 stars & up",value:"3",color:"blue-grey darken-1"}})],1)],1)],1),t._v(" "),l("v-list-tile",[l("v-list-tile-action"),t._v(" "),l("v-list-tile-content",[l("v-list-tile-title",[l("v-radio",{attrs:{ripple:!1,label:"2 stars & up",value:"2",color:"blue-grey darken-1"}})],1)],1)],1),t._v(" "),l("v-list-tile",[l("v-list-tile-action"),t._v(" "),l("v-list-tile-content",[l("v-list-tile-title",[l("v-radio",{attrs:{ripple:!1,label:"1 star & up",value:"1",color:"blue-grey darken-1"}})],1)],1)],1)],1),t._v(" "),l("v-list-tile",{attrs:{id:"categoryBox"}},[l("v-list-tile-action",[l("v-icon",{attrs:{color:"blue-grey darken-1"}},[t._v("view_list")])],1),t._v(" "),l("v-list-tile-content",[l("v-list-tile-title",[t._v("\n              Category Filter\n            ")])],1)],1),t._v(" "),l("v-list-tile",{directives:[{name:"show",rawName:"v-show",value:0!=t.category.length,expression:"category.length != 0"}],on:{click:t.selectAllNoneCategories}},[l("v-list-tile-action",[l("v-icon",{attrs:{color:"blue-grey darken-1"}},[t._v("done_all")])],1),t._v(" "),l("v-list-tile-content",[l("v-list-tile-title",[t._v("\n              Select All / None\n            ")])],1)],1),t._v(" "),0==t.category.length?l("v-list-tile",[l("v-list-tile-action",[l("v-icon")],1),t._v(" "),l("v-list-tile-content",[l("v-list-tile-title",[t._v("\n              --EMPTY--\n            ")])],1)],1):t._e(),t._v(" "),t._l(t.category,function(e,a){return 0!=t.category.length?l("v-list-tile",{key:a,on:{click:function(t){}}},[l("v-list-tile-action"),t._v(" "),l("v-list-tile-content",[l("v-list-tile-title",[l("v-checkbox",{attrs:{ripple:!1,label:e,value:e,color:"blue-grey darken-1"},model:{value:t.categoryFilters,callback:function(e){t.categoryFilters=e},expression:"categoryFilters"}})],1)],1)],1):t._e()}),t._v(" "),l("v-list-tile",{attrs:{href:"http://chat.intermine.org/",target:"_blank"},on:{click:function(t){}}},[l("v-list-tile-action",[l("v-icon",{attrs:{color:"blue-grey darken-1"}},[t._v("chat_bubble")])],1),t._v(" "),l("v-list-tile-content",[l("v-list-tile-title",[t._v("\n              Chat with us!\n            ")])],1)],1),t._v(" "),l("v-list-tile",{attrs:{id:"tourBtn"},on:{click:function(e){t.tabModal="tab-home"}}},[l("v-list-tile-action",[l("v-icon",{attrs:{color:"blue-grey darken-1"}},[t._v("help")])],1),t._v(" "),l("v-list-tile-content",[l("v-list-tile-title",[t._v("\n              Feature Tour\n            ")])],1)],1)]],2)],1),t._v(" "),l("v-toolbar",{attrs:{"clipped-left":t.$vuetify.breakpoint.lgAndUp,color:"teal darken-3",dark:"",app:"",fixed:""}},[l("v-toolbar-title",{staticClass:"ml-0 pl-3",staticStyle:{width:"18em"},attrs:{id:"app_title"}},[l("v-toolbar-side-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),l("span",{staticClass:"hidden-sm-and-down"},[t._v("Cross Intermine Search Tool")])],1),t._v(" "),l("v-layout",{staticStyle:{"max-width":"650px"},attrs:{row:"","align-center":"",id:"searchBox"}},[l("v-text-field",{attrs:{"single-line":"","hide-details":"",flat:"","solo-inverted":"","prepend-icon":"search",label:"Search"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchMine(e):null}},model:{value:t.searchTerm,callback:function(e){t.searchTerm=e},expression:"searchTerm"}})],1),t._v(" "),l("v-spacer"),t._v(" "),l("v-btn",{attrs:{icon:"",large:"",id:"tourBtn1"},on:{click:function(e){t.tabModal="tab-home"}}},[l("v-avatar",{attrs:{size:"2em",tile:""}},[l("v-icon",[t._v("help")])],1)],1),t._v(" "),l("v-btn",{attrs:{icon:"",large:"",href:"http://intermine.org/",target:"_blank"}},[l("v-avatar",{attrs:{size:"2em",tile:""}},[l("img",{attrs:{src:"/static/assets/logo.png",alt:"IM"}})])],1)],1),t._v(" "),null!=t.modalData?[l("v-dialog",{attrs:{"max-width":"60%",scrollable:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[l("v-card",[l("v-card-title",{staticClass:"headline"},[l("strong",[t._v(" Type - "+t._s(t.modalData.type)+" ")]),t._v(" "),l("small",[t._v("| Relevance Score  ")]),t._v(" "),t._l(t.calculateSearchPoints(t.modalData.relevance),function(e){return[l("v-icon",{key:e+"_active",attrs:{small:"",color:"yellow"}},[t._v("star")])]})],2),t._v(" "),l("v-card-text",[t._l(t.modalData.fields,function(e,a,r){return[l("span",{key:r},[l("strong",[t._v(t._s(a.toUpperCase()))]),t._v(" - "+t._s(e)+" ")]),l("br")]})],2),t._v(" "),l("v-card-actions",[l("v-btn",{attrs:{dark:"",ripple:!1,target:"_blank",color:"green ",href:t.generateReportLink(t.modalData.id,t.modalData.url)}},[l("v-icon",{attrs:{color:"white"}},[t._v("open_in_new")]),t._v(" Open Portal\n          ")],1),t._v(" "),l("v-spacer"),t._v(" "),l("v-btn",{attrs:{color:"green darken-1",flat:""},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("Close")])],1)],1)],1)]:t._e(),t._v(" "),l("v-content",[l("v-tabs",{attrs:{dark:"",color:"teal darken-1",grow:""},model:{value:t.tabModal,callback:function(e){t.tabModal=e},expression:"tabModal"}},[l("v-tabs-slider",{attrs:{color:"yellow"}}),t._v(" "),[l("v-tab",{attrs:{href:"#tab-home",ripple:!1}},[t._v("\n          Home\n        ")]),t._v(" "),t.searchActive?l("v-tab",{attrs:{href:"#tab-results",ripple:!1}},[t._v("\n          Results\n        ")]):t._e(),t._v(" "),t.localStorageActive?l("v-tab",{attrs:{href:"#tab-localstorage",ripple:!1}},[t._v("\n          Favourites\n        ")]):t._e(),t._v(" "),t.interminesActive?l("v-tab",{attrs:{href:"#tab-intermines",ripple:!1}},[t._v("\n          InterMines\n        ")]):t._e()],t._v(" "),l("v-tabs-items",{attrs:{fixed:""}},[l("v-tab-item",{attrs:{id:"tab-home"}},[[l("div",{staticClass:"grey lighten-3",staticStyle:{margin:"auto"},attrs:{id:"e3"}},[l("v-card",[l("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[l("v-layout",{attrs:{row:"",wrap:""}},[l("v-flex",{attrs:{xs12:""}},[l("v-card",{attrs:{color:"green darken-1",dark:"",raised:"",height:"100%"}},[l("v-container",{attrs:{fluid:"","grid-list-lg":""}},[l("v-layout",{attrs:{row:""}},[l("v-flex",[l("v-card-media",{attrs:{src:"https://cdn.rawgit.com/intermine/design-materials/f5f00be4/logos/intermine/intermine.png",height:"4em",contain:""}}),t._v(" "),l("br"),t._v(" "),l("div",[l("h1",[t._v("Cross Intermine Search Tool")]),l("br"),t._v(" "),l("p",{staticStyle:{"font-size":"larger"}},[t._v("Select the Intermines you are interested in; and type a search keyword or symbol into the searchbar up the top and hit enter.\n                                  If you're not sure what Intermines to choose or what to search, check out the results for "),l("span",{staticClass:"example",on:{click:function(e){t.exampleSearch("adh")}}},[t._v("ADH")]),t._v(", "),l("span",{staticClass:"example",on:{click:function(e){t.exampleSearch("brca1")}}},[t._v("BRCA1")]),t._v(" or "),l("span",{staticClass:"example",on:{click:function(e){t.exampleSearch("gata1")}}},[t._v("GATA1")])])])],1)],1)],1)],1)],1)],1)],1)],1)],1)]],2),t._v(" "),l("v-tab-item",{attrs:{id:"tab-intermines"}},[[l("div",{staticClass:"grey lighten-3",staticStyle:{margin:"auto"},attrs:{id:"e3"}},[l("v-card",[l("v-container",{attrs:{fluid:"","grid-list-lg":""}},[l("v-layout",{attrs:{row:"",wrap:""}},t._l(t.minesList,function(e,a){return l("v-flex",{key:a,attrs:{xs12:""}},[l("v-card",{attrs:{color:"grey lighten-5",light:"",href:""+e.url,target:"_blank"}},[l("v-container",{attrs:{fluid:"","grid-list-lg":""}},[l("v-layout",{attrs:{row:""}},[l("v-flex",{attrs:{xs10:""}},[l("div",[l("div",{staticClass:"headline"},[l("strong",[t._v(t._s(e.name))])]),t._v(" "),l("div",[t._v(t._s(e.description))]),t._v(" "),l("div",[l("strong",[t._v("Organisms - ")]),t._l(e.organisms,function(e){return l("span",{key:e},[t._v(" "+t._s(e)+" /")])})],2),t._v(" "),l("br"),t._v(" "),l("div",{staticStyle:{"font-style":"italic"}},[t._v(t._s(e.url))])])]),t._v(" "),l("v-flex",{attrs:{xs2:""}},[void 0!==e.images&&Object.keys(e.images).indexOf("logo")>=0?l("v-card-media",{attrs:{src:e.images.logo,height:"4em",contain:""}}):l("v-card-media",{attrs:{src:"/static/assets/logo.png",height:"4em",contain:""}})],1)],1)],1)],1)],1)}))],1)],1)],1)]],2),t._v(" "),l("v-tab-item",{attrs:{id:"tab-localstorage"}},[0!=t.localData.length?[l("v-list",{attrs:{"three-line":"",subheader:""}},[t._l(t.localData,function(e,a){return l("v-list-tile",{key:a,style:{color:t.selectColor(e.type)},attrs:{avatar:""},on:{click:function(l){t.showModal(e,e.url,e.mineName)}}},[l("v-list-tile-avatar",[l("strong",[t._v(t._s(a+1))])]),t._v(" "),l("v-list-tile-content",[l("v-list-tile-title",[l("strong",[t._v(t._s(e.mineName)+" | Type - "+t._s(e.type)+" ")]),t._v(" "),l("v-tooltip",{attrs:{bottom:""}},[l("v-icon",{style:{color:t.selectColor(e.type)},attrs:{slot:"activator"},on:{click:function(l){l.stopPropagation(),t.deleteFromLocalStorage(e.localId)}},slot:"activator"},[t._v("\n                          delete\n                        ")]),t._v(" "),l("span",[t._v("Delete from Favourites")])],1),t._v(" "),l("small",[l("strong",[t._v("| Relevance Score  ")])]),t._v(" "),t._l(t.calculateSearchPoints(e.relevance),function(e){return[l("v-icon",{key:e+"_active",attrs:{small:"",color:"yellow"}},[t._v("star")])]})],2),t._v(" "),l("v-list-tile-sub-title",[t._l(e.fields,function(e,a,r){return[l("span",{key:r},[l("strong",[t._v("| "+t._s(a.toUpperCase()))]),t._v(" - "+t._s(e)+" ")])]})],2)],1),t._v(" "),l("v-list-tile-action",[l("v-btn",{attrs:{icon:"",ripple:"",target:"_blank",color:"orange lighten-2",href:t.generateReportLink(e.id,e.url)},on:{click:function(t){t.stopPropagation()}}},[l("v-icon",{attrs:{color:"white"}},[t._v("open_in_new")])],1)],1)],1)})],2)]:[t._v("\n            No Favourites added\n          ")]],2),t._v(" "),l("v-tab-item",{attrs:{id:"tab-results"}},[["https:"===this.protocol?l("v-alert",{attrs:{value:!0,type:"warning"}},[t._v("\n              You're currently viewing the HTTPS website. Due to security limitations, we are unable to show results from HTTP-only InterMines. You may be able to see more results if you reload this site via HTTP - ["),l("a",{staticStyle:{color:"inherit"},attrs:{href:"http://"+this.host}},[t._v(t._s("http://"+this.host))]),t._v("].\n            ")]):t._e(),t._v(" "),0!=this.failedSearchMines.length?l("v-alert",{attrs:{value:!0,type:"error"}},[t._v("\n              Something went wrong in the following mine(s): "),t._l(this.failedSearchMines,function(e){return l("span",{key:e},[t._v(" "+t._s(e)+" /")])})],2):t._e(),t._v(" "),0!=this.emptyResultMines.length?l("v-alert",{attrs:{value:!0,color:"indigo lighten-4"}},[t._v("\n              0 results returned from these mines: "),t._l(this.emptyResultMines,function(e){return l("span",{key:e},[t._v(" "+t._s(e)+" /")])})],2):t._e(),t._v(" "),t._l(this.selected,function(e,a){return l("v-card",{key:a},[t.emptyResultMines.indexOf(e.text)<0&&t.failedSearchMines.indexOf(e.text)<0&&void 0!=e.result?l("v-container",{staticStyle:{"min-height":"0"},attrs:{fluid:"","grid-list-lg":""}},[l("v-layout",{attrs:{row:""}},[l("v-flex",{attrs:{xs12:""}},[l("v-toolbar",{attrs:{color:"blue-grey darken-1",dark:"",flat:""}},[l("v-toolbar-title",[t._v(t._s(e.text)+" ")]),t._v(" "),void 0!=e.result&&void 0!=e.result.totalHits?l("span",[l("strong",[l("small",[t._v("\n                              ("+t._s(e.result.totalHits)+" results)\n                            ")])])]):t._e()],1),t._v(" "),l("v-card",{staticStyle:{"overflow-y":"auto"},attrs:{height:"300"}},[l("v-list",{attrs:{"three-line":"",subheader:""}},[void 0==e.result?[l("h3",{staticStyle:{"text-align":"center"}},[t._v("Loading...")])]:0==t.filterResults(e.result.results).length?[l("h3",{staticStyle:{"text-align":"center"}},[t._v("No results were found for the selected filters.")])]:[t._l(t.filterResults(e.result.results),function(a,r){return l("v-list-tile",{key:r,style:{color:t.selectColor(a.type)},attrs:{avatar:""},on:{click:function(l){t.showModal(a,e.url,e.text)}}},[l("v-list-tile-avatar",[l("strong",[t._v(t._s(r+1))])]),t._v(" "),l("v-list-tile-content",[l("v-list-tile-title",[l("strong",[t._v("Type - "+t._s(a.type)+" ")]),t._v(" "),l("v-tooltip",{attrs:{bottom:""}},[l("v-icon",{style:{color:t.selectColor(a.type)},attrs:{slot:"activator"},on:{click:function(l){l.stopPropagation(),t.saveToLocalStorage(a,e.text,e.url)}},slot:"activator"},[t._v("\n                                    library_books\n                                  ")]),t._v(" "),l("span",[t._v("Save to Favourites")])],1),t._v(" "),l("small",[l("strong",[t._v("| Relevance Score  ")])]),t._v(" "),t._l(t.calculateSearchPoints(a.relevance),function(e){return[l("v-icon",{key:e+"_active",attrs:{small:"",color:"yellow"}},[t._v("star")])]})],2),t._v(" "),l("v-list-tile-sub-title",[t._l(a.fields,function(e,a,r){return[l("span",{key:r},[l("strong",[t._v("| "+t._s(a.toUpperCase()))]),t._v(" - "+t._s(e)+" ")])]})],2)],1),t._v(" "),l("v-list-tile-action",[l("v-btn",{attrs:{icon:"",ripple:"",target:"_blank",color:"orange lighten-2",href:t.generateReportLink(a.id,e.url)},on:{click:function(t){t.stopPropagation()}}},[l("v-icon",{attrs:{color:"white"}},[t._v("open_in_new")])],1)],1)],1)}),t._v(" "),void 0!=e.result.fetchMore&&!0===e.result.fetchMore?[l("h3",{staticStyle:{"text-align":"center",cursor:"pointer"},attrs:{id:"loadMsg_"+e.text},on:{click:function(l){t.loadMoreResults(e.result.searchTerm,e)}}},[t._v("\n                              Load more\n                            ")])]:t._e()]],2)],1)],1)],1)],1):t._e()],1)})]],2)],1)],2)],1)],2)},staticRenderFns:[]};var _=l("VU/8")(d,h,!1,function(t){l("4sA/")},null,null).exports,g=l("/ocq");a.a.use(g.a);var p=new g.a({routes:[{path:"/",name:"App",component:_}]}),m=l("3EgV"),f=l.n(m);l("7zck");a.a.use(f.a,{theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}),a.a.config.productionTip=!1,new a.a({el:"#app",router:p,components:{App:_},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.85af260c55a2c58d1e13.js.map