var self = this;
var MainApp = React.createClass({

  getInitialState: function() {
   return {topic : "", youtubeLink:"", types:"", equations:"", googleLink:""};
 },

  sendToFirebase: function(){
    this.setState({loaderText:" submitting data---->please wait"});
    var firebaseRef = new Firebase("https://aconceptaday.firebaseio.com/");
    var d = new Date();
    firebaseRef.child(this.state.topic).set({topic: this.state.topic, date:d, youtubeLink:this.state.youtubeLink , types:this.state.types, equations:this.state.equations, googleForm:this.state.googleLink}, function(error) {
         if (error !== null) {
             alert("Some Error Occured Try Again");
             this.resetForm();
         }else{
             this.setState({showDetails:true});
             this.resetForm();
         }
       }.bind(this));
  },

  resetForm: function(){
    this.setState({topic : "", youtubeLink:"", types:"", equations:"", googleLink:""});
  },

  handleChange: function(field, e) {
    this.setState({showDetails: false, loaderText:'Enter the above details'});
    if(field==="topic"){
      this.setState({topic: e.target.value});
    }else if(field==="video"){
      this.setState({youtubeLink: e.target.value});
    }else if(field==="types"){
      this.setState({types: e.target.value});
    }else if(field==="equation"){
      this.setState({equations: e.target.value});
    }else if(field==="google"){
      this.setState({googleLink: e.target.value});
    }
  },

  render: function() {
    var tileStyle = {
      marginTop:10
    }

    var singleButton = {
      position: "absolute",
      marginLeft:-850,
      marginTop: 500,
      marginBottom: 10,
      fontSize: 20,
    }

    var multipleButton = {
      position: "absolute",
      marginLeft:-550,
      marginTop: 500,
      marginBottom: 10,
      fontSize: 20,
    }

    var setPadding = {
      alignItems:"center",
      paddingLeft:20,
      paddingTop:20,
      paddingRight: 20,
      paddingBottom: 20,
    }
    return (
      <div className="row" style={setPadding}>
        <div className="col-md-12">
           <h2 className="text-center">A Concept a Day</h2>
           <form className="form-horizontal" role="form">
             <div className="form-group">
               <label  className="col-sm-2 control-label">
                  Name Of Topic
               </label>
               <div className="col-sm-10">
                <input type="text"  className="form-control" placeholder="Enter the name of topic" value={this.state.topic} onChange={this.handleChange.bind(this, 'topic')}/>
               </div>
             </div>
             <div className="form-group">
              <label  className="col-sm-2 control-label">
                 Youtube Video Link
              </label>
              <div className="col-sm-10">
               <input type="text" className="form-control" placeholder="Enter the youtube link" value={this.state.youtubeLink} onChange={this.handleChange.bind(this, 'video')}/>
              </div>
            </div>
            <div className="form-group">
              <label  className="col-sm-2 control-label">
                 Type Of Problems
              </label>
              <div className="col-sm-10">
               <textarea className="form-control" placeholder="Enter the type of problems" rows="10" value={this.state.types} onChange={this.handleChange.bind(this, 'types')}/>
              </div>
            </div>
             <div className="form-group">
               <label  className="col-sm-2 control-label">
                  Equations to Remember
               </label>
                <div className="col-sm-10">
                  <textarea className="form-control" placeholder="Enter the equations" rows="10" value={this.state.equations} onChange={this.handleChange.bind(this, 'equation')}/>
                </div>
             </div>
             <div className="form-group">
               <label  className="col-sm-2 control-label">
                  Google Form Link
               </label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" placeholder="Enter the google form link" value={this.state.googleLink} onChange={this.handleChange.bind(this, 'google')}/>
                </div>
             </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="button" className="btn btn-primary" onClick={this.sendToFirebase}>
                  Submit
                </button>
              </div>
            </div>
        </form>
        {
          this.state.showDetails === true ? <div className="col-sm-offset-2 col-sm-10">
            <p className="alert alert-success">Submission successfull</p>
          </div> : <p className="col-sm-offset-2 col-sm-10">{this.state.loaderText}</p>
        }
      </div>
  </div>
    );
  }
});



ReactDOM.render(
  <MainApp />,
  document.getElementById('content')
);
