!function e(t,n,i){function r(o,a){if(!n[o]){if(!t[o]){var c="function"==typeof require&&require;if(!a&&c)return c(o,!0);if(s)return s(o,!0);var u=new Error("Cannot find module '"+o+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return r(n?n:e)},l,l.exports,e,t,n,i)}return n[o].exports}for(var s="function"==typeof require&&require,o=0;o<i.length;o++)r(i[o]);return r}({1:[function(e,t,n){"use strict";var i=e("react"),r=e("react-dom"),s=e("react-outside-click"),o=i.createClass({displayName:"Demo",getInitialState:function(){return{useCapture:!1,disable:!1}},_handleOutsideClick:function(e){console.log("click happened outside",", eventPhase:",e.eventPhase)},_handleuseCapture:function(){this.setState(function(e){return{useCapture:!e.useCapture}})},_handleDisable:function(){this.setState(function(e){return{disable:!e.disable}})},render:function(){var e={container:{width:"100%",height:"100%"},messageContainer:{height:"20px",backgroundColor:"#FFF",border:"1px solid #81C784",borderRadius:"2px",marginBottom:"30px",padding:"5px 5px 5px 5px"},elem:{width:"100%",height:"50px",borderRadius:"2px",backgroundColor:"#81C784",marginBottom:"30px",padding:"10px",boxSizing:"border-box"},button:{cursor:"pointer",border:"none",borderRadius:"2px",backgroundColor:"#039BE5",padding:"10px 15px",color:"#FFF",fontFamily:'"Roboto", sans-serif',textDecoration:"none",textTransform:"uppercase",margin:"0px 15px 15px 0",outline:"none"}};return i.createElement("div",{style:e.container},i.createElement("div",{style:e.messageContainer},"Use Capture: "+this.state.useCapture+", Disabled: "+this.state.disable),i.createElement(s,{component:"div",disableHandler:this.state.disable,useuseCapture:this.state.useCapture,onOutsideClick:this._handleOutsideClick},i.createElement("div",{style:e.elem},"Element you want to track outside clicks. Check your console")),i.createElement("button",{onClick:this._handleuseCapture,style:e.button},"Toggle useCapture"),i.createElement("button",{onClick:this._handleDisable,style:e.button},"Toggle disable"))}});r.render(i.createElement(o,null),document.getElementById("app"))},{react:"react","react-dom":"react-dom","react-outside-click":2}],2:[function(e,t,n){t.exports=e("./lib/OutsideClick")},{"./lib/OutsideClick":3}],3:[function(e,t,n){"use strict";var i=e("react"),r=i.createClass({displayName:"OutsideClick",propTypes:{children:i.PropTypes.any,component:i.PropTypes.string,disableHandler:i.PropTypes.bool,onClick:i.PropTypes.func,onOutsideClick:i.PropTypes.func,useCapture:i.PropTypes.bool},getDefaultProps:function(){return{component:"div"}},componentWillMount:function(){this._wasInside=!1},componentDidMount:function(){this._addListener(this.props.useCapture)},componentWillReceiveProps:function(e){e.disableHandler===this.props.disableHandler&&e.useCapture===this.props.useCapture||(this._removeListener(this.props.useCapture),e.disableHandler||this._addListener(e.useCapture))},componentWillUnmount:function(){this._removeListener(this.props.useCapture)},_addListener:function(e){document&&document.addEventListener("click",this._handleDocumentClick,e)},_removeListener:function(e){document&&document.removeEventListener("click",this._handleDocumentClick,e)},_checkForBubblePhase:function(e){this._wasInside||this._handleOutsideClick(e),this._wasInside=!1},_checkForCapturePhase:function(e){this._elem&&!this._elem.contains(e.target)&&this._handleOutsideClick(e)},_handleDocumentClick:function(e){this.props.useCapture?this._checkForCapturePhase(e):this._checkForBubblePhase(e)},_handleOutsideClick:function(e){this.props.onOutsideClick&&this.props.onOutsideClick(e)},_handleWrapperClick:function(e){this._wasInside=!0,this.props.onClick&&this.props.onClick(e)},render:function(){var e=Object.assign({},this.props);return delete e.children,delete e.component,delete e.onClick,delete e.onOutsideClick,delete e.useCapture,e.ref=function(e){this._elem=e}.bind(this),e.onClick=this._handleWrapperClick,i.createElement(this.props.component,e,this.props.children)}});t.exports=r},{react:"react"}]},{},[1]);