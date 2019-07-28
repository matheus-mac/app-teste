import React, { Component } from 'react'
import DragAndDrop from './DragAndDrop'
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
    this.setState({files: fileList})
    this.props.handleDrop(files);
  }
render() {
    return (
      <DragAndDrop handleDrop={this.handleDrop}>
        <div style={{height: 300, width: 500}}>
          {this.state.files.map((file,i) =>
            <div key={i}>
              <div flex>{file.name}</div>
              <div flex><i class="material-icons">close</i></div>
            </div>
          )}          
        </div>
      </DragAndDrop>
    )
  }
}
export default FileList