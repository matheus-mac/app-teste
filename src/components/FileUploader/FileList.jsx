import React, { Component } from 'react'
import DragAndDrop from './DragAndDrop'
import TableList from '../Lists/tableList';
import Button from "../CustomButtons/Button"
import CloudUpload from "@material-ui/icons/CloudUpload";
const pageTitle = "Files to Upload:"

class FileList extends Component {
  state = {
    files: []
  }
  handleDrop = (files) => {
    let fileList = this.state.files
    for (var i = 0; i < files.length; i++) {
      if (!files[i].name) return
      fileList.push(files[i])
    }
    this.setState({ files: fileList })
    this.props.handleDrop(files);
  }

  deleteToUploadFile = (fileName) => {
    var array = Array.from(this.state.files);
    var index = array.find(file => file.name === fileName)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ files: array }, () => {
        this.props.handleDelete(this.state.files);
      })
    }
  }

  uploadFiles = () => {
    this.props.handleUpload(this.state.files);
    this.setState({files:[]});
  }

  render() {
    return (
      <div>
      <DragAndDrop handleDrop={this.handleDrop}>
        <div style={{ height: 400, width: 508 }}>
          <TableList
            items={this.state.files}
            title={pageTitle}
            showDeleteButton={true}
            showViewButton={false}
            showEditButton={false}
            deleteAction={this.deleteToUploadFile}
          ></TableList>
        </div>
      </DragAndDrop>
        <div>
          <Button style={{float:'right'}}color="primary" onClick={() => this.uploadFiles()}>
            <CloudUpload></CloudUpload>
              Upload
            </Button>
        </div>
      </div>
    )
  }
}
export default FileList