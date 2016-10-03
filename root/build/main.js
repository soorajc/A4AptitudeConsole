(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var self = undefined;
var MainApp = React.createClass({
  displayName: "MainApp",

  getInitialState: function getInitialState() {
    return { topic: "", youtubeLink: "", types: "", equations: "", googleLink: "" };
  },

  sendToFirebase: function sendToFirebase() {
    this.setState({ loaderText: " submitting data---->please wait" });
    var firebaseRef = new Firebase("https://aconceptaday.firebaseio.com/");
    var d = new Date();
    firebaseRef.child(this.state.topic).set({ topic: this.state.topic, date: d, youtubeLink: this.state.youtubeLink, types: this.state.types, equations: this.state.equations, googleForm: this.state.googleLink }, (function (error) {
      if (error !== null) {
        alert("Some Error Occured Try Again");
        this.resetForm();
      } else {
        this.setState({ showDetails: true });
        this.resetForm();
      }
    }).bind(this));
  },

  resetForm: function resetForm() {
    this.setState({ topic: "", youtubeLink: "", types: "", equations: "", googleLink: "" });
  },

  handleChange: function handleChange(field, e) {
    this.setState({ showDetails: false, loaderText: 'Enter the above details' });
    if (field === "topic") {
      this.setState({ topic: e.target.value });
    } else if (field === "video") {
      this.setState({ youtubeLink: e.target.value });
    } else if (field === "types") {
      this.setState({ types: e.target.value });
    } else if (field === "equation") {
      this.setState({ equations: e.target.value });
    } else if (field === "google") {
      this.setState({ googleLink: e.target.value });
    }
  },

  render: function render() {
    var tileStyle = {
      marginTop: 10
    };

    var singleButton = {
      position: "absolute",
      marginLeft: -850,
      marginTop: 500,
      marginBottom: 10,
      fontSize: 20
    };

    var multipleButton = {
      position: "absolute",
      marginLeft: -550,
      marginTop: 500,
      marginBottom: 10,
      fontSize: 20
    };

    var setPadding = {
      alignItems: "center",
      paddingLeft: 20,
      paddingTop: 20,
      paddingRight: 20,
      paddingBottom: 20
    };
    return React.createElement(
      "div",
      { className: "row", style: setPadding },
      React.createElement(
        "div",
        { className: "col-md-12" },
        React.createElement(
          "h2",
          { className: "text-center" },
          "A Concept a Day"
        ),
        React.createElement(
          "form",
          { className: "form-horizontal", role: "form" },
          React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
              "label",
              { className: "col-sm-2 control-label" },
              "Name Of Topic"
            ),
            React.createElement(
              "div",
              { className: "col-sm-10" },
              React.createElement("input", { type: "text", className: "form-control", placeholder: "Enter the name of topic", value: this.state.topic, onChange: this.handleChange.bind(this, 'topic') })
            )
          ),
          React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
              "label",
              { className: "col-sm-2 control-label" },
              "Youtube Video Link"
            ),
            React.createElement(
              "div",
              { className: "col-sm-10" },
              React.createElement("input", { type: "text", className: "form-control", placeholder: "Enter the youtube link", value: this.state.youtubeLink, onChange: this.handleChange.bind(this, 'video') })
            )
          ),
          React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
              "label",
              { className: "col-sm-2 control-label" },
              "Type Of Problems"
            ),
            React.createElement(
              "div",
              { className: "col-sm-10" },
              React.createElement("textarea", { className: "form-control", placeholder: "Enter the type of problems", rows: "10", value: this.state.types, onChange: this.handleChange.bind(this, 'types') })
            )
          ),
          React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
              "label",
              { className: "col-sm-2 control-label" },
              "Equations to Remember"
            ),
            React.createElement(
              "div",
              { className: "col-sm-10" },
              React.createElement("textarea", { className: "form-control", placeholder: "Enter the equations", rows: "10", value: this.state.equations, onChange: this.handleChange.bind(this, 'equation') })
            )
          ),
          React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
              "label",
              { className: "col-sm-2 control-label" },
              "Google Form Link"
            ),
            React.createElement(
              "div",
              { className: "col-sm-10" },
              React.createElement("input", { type: "text", className: "form-control", placeholder: "Enter the google form link", value: this.state.googleLink, onChange: this.handleChange.bind(this, 'google') })
            )
          ),
          React.createElement(
            "div",
            { className: "form-group" },
            React.createElement(
              "div",
              { className: "col-sm-offset-2 col-sm-10" },
              React.createElement(
                "button",
                { type: "button", className: "btn btn-primary", onClick: this.sendToFirebase },
                "Submit"
              )
            )
          )
        ),
        this.state.showDetails === true ? React.createElement(
          "div",
          { className: "col-sm-offset-2 col-sm-10" },
          React.createElement(
            "p",
            { className: "alert alert-success" },
            "Submission successfull"
          )
        ) : React.createElement(
          "p",
          { className: "col-sm-offset-2 col-sm-10" },
          this.state.loaderText
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(MainApp, null), document.getElementById('content'));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi9Vc2Vycy9zb29yYWovRGVza3RvcC9hbG1hYmFzZS8wMSAtIEludHJvZHVjdGlvbiAtIFN0YXJ0IEhlcmUvcm9vdC9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLElBQUksSUFBSSxZQUFPLENBQUM7QUFDaEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBRTlCLGlCQUFlLEVBQUUsMkJBQVc7QUFDM0IsV0FBTyxFQUFDLEtBQUssRUFBRyxFQUFFLEVBQUUsV0FBVyxFQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUMsRUFBRSxFQUFFLFNBQVMsRUFBQyxFQUFFLEVBQUUsVUFBVSxFQUFDLEVBQUUsRUFBQyxDQUFDO0dBQzVFOztBQUVBLGdCQUFjLEVBQUUsMEJBQVU7QUFDeEIsUUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFDLFVBQVUsRUFBQyxrQ0FBa0MsRUFBQyxDQUFDLENBQUM7QUFDL0QsUUFBSSxXQUFXLEdBQUcsSUFBSSxRQUFRLENBQUMsc0NBQXNDLENBQUMsQ0FBQztBQUN2RSxRQUFJLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ25CLGVBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUMsRUFBRSxXQUFXLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUcsS0FBSyxFQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUMsRUFBRSxDQUFBLFVBQVMsS0FBSyxFQUFF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Q0Y7R0FDSDtDQUNGLENBQUMsQ0FBQzs7QUFJSCxRQUFRLENBQUMsTUFBTSxDQUNiLG9CQUFDLE9BQU8sT0FBRyxFQUNYLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQ25DLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIHNlbGYgPSB0aGlzO1xyXG52YXIgTWFpbkFwcCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuXHJcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgcmV0dXJuIHt0b3BpYyA6IFwiXCIsIHlvdXR1YmVMaW5rOlwiXCIsIHR5cGVzOlwiXCIsIGVxdWF0aW9uczpcIlwiLCBnb29nbGVMaW5rOlwiXCJ9O1xyXG4gfSxcclxuXHJcbiAgc2VuZFRvRmlyZWJhc2U6IGZ1bmN0aW9uKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtsb2FkZXJUZXh0OlwiIHN1Ym1pdHRpbmcgZGF0YS0tLS0+cGxlYXNlIHdhaXRcIn0pO1xyXG4gICAgdmFyIGZpcmViYXNlUmVmID0gbmV3IEZpcmViYXNlKFwiaHR0cHM6Ly9hY29uY2VwdGFkYXkuZmlyZWJhc2Vpby5jb20vXCIpO1xyXG4gICAgdmFyIGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZmlyZWJhc2VSZWYuY2hpbGQodGhpcy5zdGF0ZS50b3BpYykuc2V0KHt0b3BpYzogdGhpcy5zdGF0ZS50b3BpYywgZGF0ZTpkLCB5b3V0dWJlTGluazp0aGlzLnN0YXRlLnlvdXR1YmVMaW5rICwgdHlwZXM6dGhpcy5zdGF0ZS50eXBlcywgZXF1YXRpb25zOnRoaXMuc3RhdGUuZXF1YXRpb25zLCBnb29nbGVGb3JtOnRoaXMuc3RhdGUuZ29vZ2xlTGlua30sIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgIGlmIChlcnJvciAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgYWxlcnQoXCJTb21lIEVycm9yIE9jY3VyZWQgVHJ5IEFnYWluXCIpO1xyXG4gICAgICAgICAgICAgdGhpcy5yZXNldEZvcm0oKTtcclxuICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtzaG93RGV0YWlsczp0cnVlfSk7XHJcbiAgICAgICAgICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gIH0sXHJcblxyXG4gIHJlc2V0Rm9ybTogZnVuY3Rpb24oKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3RvcGljIDogXCJcIiwgeW91dHViZUxpbms6XCJcIiwgdHlwZXM6XCJcIiwgZXF1YXRpb25zOlwiXCIsIGdvb2dsZUxpbms6XCJcIn0pO1xyXG4gIH0sXHJcblxyXG4gIGhhbmRsZUNoYW5nZTogZnVuY3Rpb24oZmllbGQsIGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dEZXRhaWxzOiBmYWxzZSwgbG9hZGVyVGV4dDonRW50ZXIgdGhlIGFib3ZlIGRldGFpbHMnfSk7XHJcbiAgICBpZihmaWVsZD09PVwidG9waWNcIil7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3RvcGljOiBlLnRhcmdldC52YWx1ZX0pO1xyXG4gICAgfWVsc2UgaWYoZmllbGQ9PT1cInZpZGVvXCIpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHt5b3V0dWJlTGluazogZS50YXJnZXQudmFsdWV9KTtcclxuICAgIH1lbHNlIGlmKGZpZWxkPT09XCJ0eXBlc1wiKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dHlwZXM6IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9ZWxzZSBpZihmaWVsZD09PVwiZXF1YXRpb25cIil7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2VxdWF0aW9uczogZS50YXJnZXQudmFsdWV9KTtcclxuICAgIH1lbHNlIGlmKGZpZWxkPT09XCJnb29nbGVcIil7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2dvb2dsZUxpbms6IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHZhciB0aWxlU3R5bGUgPSB7XHJcbiAgICAgIG1hcmdpblRvcDoxMFxyXG4gICAgfVxyXG5cclxuICAgIHZhciBzaW5nbGVCdXR0b24gPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIG1hcmdpbkxlZnQ6LTg1MCxcclxuICAgICAgbWFyZ2luVG9wOiA1MDAsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogMTAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbXVsdGlwbGVCdXR0b24gPSB7XHJcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICAgIG1hcmdpbkxlZnQ6LTU1MCxcclxuICAgICAgbWFyZ2luVG9wOiA1MDAsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogMTAsXHJcbiAgICAgIGZvbnRTaXplOiAyMCxcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc2V0UGFkZGluZyA9IHtcclxuICAgICAgYWxpZ25JdGVtczpcImNlbnRlclwiLFxyXG4gICAgICBwYWRkaW5nTGVmdDoyMCxcclxuICAgICAgcGFkZGluZ1RvcDoyMCxcclxuICAgICAgcGFkZGluZ1JpZ2h0OiAyMCxcclxuICAgICAgcGFkZGluZ0JvdHRvbTogMjAsXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXtzZXRQYWRkaW5nfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiPlxyXG4gICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPkEgQ29uY2VwdCBhIERheTwvaDI+XHJcbiAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ob3Jpem9udGFsXCIgcm9sZT1cImZvcm1cIj5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgIGNsYXNzTmFtZT1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgTmFtZSBPZiBUb3BpY1xyXG4gICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIG5hbWUgb2YgdG9waWNcIiB2YWx1ZT17dGhpcy5zdGF0ZS50b3BpY30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcywgJ3RvcGljJyl9Lz5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCAgY2xhc3NOYW1lPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgIFlvdXR1YmUgVmlkZW8gTGlua1xyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgeW91dHViZSBsaW5rXCIgdmFsdWU9e3RoaXMuc3RhdGUueW91dHViZUxpbmt9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsICd2aWRlbycpfS8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgIGNsYXNzTmFtZT1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICBUeXBlIE9mIFByb2JsZW1zXHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgdHlwZSBvZiBwcm9ibGVtc1wiIHJvd3M9XCIxMFwiIHZhbHVlPXt0aGlzLnN0YXRlLnR5cGVzfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAndHlwZXMnKX0vPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgIGNsYXNzTmFtZT1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgRXF1YXRpb25zIHRvIFJlbWVtYmVyXHJcbiAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgZXF1YXRpb25zXCIgcm93cz1cIjEwXCIgdmFsdWU9e3RoaXMuc3RhdGUuZXF1YXRpb25zfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzLCAnZXF1YXRpb24nKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICA8bGFiZWwgIGNsYXNzTmFtZT1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgR29vZ2xlIEZvcm0gTGlua1xyXG4gICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB0aGUgZ29vZ2xlIGZvcm0gbGlua1wiIHZhbHVlPXt0aGlzLnN0YXRlLmdvb2dsZUxpbmt9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMsICdnb29nbGUnKX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tb2Zmc2V0LTIgY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnNlbmRUb0ZpcmViYXNlfT5cclxuICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd0RldGFpbHMgPT09IHRydWUgPyA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS1vZmZzZXQtMiBjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiPlN1Ym1pc3Npb24gc3VjY2Vzc2Z1bGw8L3A+XHJcbiAgICAgICAgICA8L2Rpdj4gOiA8cCBjbGFzc05hbWU9XCJjb2wtc20tb2Zmc2V0LTIgY29sLXNtLTEwXCI+e3RoaXMuc3RhdGUubG9hZGVyVGV4dH08L3A+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gIDxNYWluQXBwIC8+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuKTtcclxuIl19
