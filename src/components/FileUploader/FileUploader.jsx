import React, {Component} from "react";
import FileList from "./FileList"
import Button from "../CustomButtons/Button"
import AzureStorage from "../../scripts/bundle/azure-storage.blob.min"

class FileUploader extends Component {
  state = {
    fileList : []
  }

  getFilesFromChildren = (files) => { 
    this.setState({fileList: files})
  }

  changeText =() => {
    const account = {
      name: "smartlockfilebucket",
      sas:  "se=2020-04-30&sp=rwdlac&sv=2018-03-28&ss=b&srt=sco&sig=dB/uIfHWxC%2Bknj5h3Id13xQYN0sXPwj7ywSLCCul4%2BA%3D"
    };
    const blobUri = 'https://' + account.name + '.blob.core.windows.net';
    const blobService = AzureStorage.createBlobServiceWithSas(blobUri, account.sas);
    var array = this.state.fileList;

    Array.from(this.state.fileList).forEach(file => { 
      blobService.createBlockBlobFromBrowserFile('mycontainer', 
        file.name, 
        file, 
        (error, result) => {
            if(error) {
                // Handle blob error
            } else {
                console.log('Upload is successful');
            }
        })
    }); 
  }

  render(){
    return (
      <div>
        <div>
          <FileList handleDrop={this.getFilesFromChildren}></FileList>
        </div>        
        <div>
          <Button color="primary" onClick={() => this.changeText()}>Upload</Button>
          <Button color="primary">Delete</Button>
        </div>
      </div>
    );
  }
}

export default FileUploader;
