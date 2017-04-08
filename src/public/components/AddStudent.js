import React from 'react';
import autoBind from 'react-autobind';
import { post, get } from './AxiosRoutes';

export default class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: ['HRSF72','HRSF73','HRSF75','HRSF76'],
      studentName: '',
      studentEmail: '',
      selectedClass: '',
      studentPhoto: ''
    }
    autoBind(this);
  }

  componentWillMount() {
    this.setState({
      selectedClass: this.state.classes[0]
    })
  }

  handleInputChange(event) {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value
    })
  }

  handleStudentSubmit(event) {
    let current = this;
    let data = {
      studentName: this.state.studentName,
      studentEmail: this.state.studentEmail,
      selectedClass: this.state.selectedClass,
      studentPhoto: this.state.studentPhoto
    }
    console.log('Sending Student info!', data);
    post('studentUpload', data)
      .then((response) => {
        console.log(response);
      });
    event.preventDefault();
  }

  previewFile() {
    let preview = document.querySelector('img');
    let file    = document.querySelector('input[type=file]').files[0];
    let reader  = new FileReader();

    reader.addEventListener("load", () => {
      preview.src = reader.result;
      preview.height = '200';
      console.log(reader.result);
      this.setState({
        studentPhoto: reader.result
      })
    }, false);
    if (file) {
      reader.readAsDataURL(file);
    }
  }


  render() {
    return (
      <div>
        <h3>Add Student</h3>
        <input name="studentName" type="text" placeholder="Enter Name" onChange={this.handleInputChange}></input>
        <select name='selectedClass' onChange={this.handleInputChange}>
          {this.state.classes.map((item,index)=> {
            return (<option key={index} value={item}>{item}</option>)
          })}
        </select><br/>
        <input name="studentEmail" type="text" placeholder="Enter Email" onChange={this.handleInputChange}></input><br/>
         <form ref='uploadForm' 
          id='uploadForm' 
          action='http://localhost:3000/studentUpload' 
          method='post' 
          encType="multipart/form-data">
          <input type="file" name="sampleFile" onChange={this.previewFile}/>
          <img src=""/>
        </form>
        <button onClick={this.handleStudentSubmit}>Upload!</button>  
      </div>
    );
  }
}
