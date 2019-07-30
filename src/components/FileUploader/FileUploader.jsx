import React, { Component } from "react";
import FileList from "./FileList"
import Button from "../CustomButtons/Button"
import AzureStorage from "../../scripts/bundle/azure-storage.blob.min"
import Tasks from "../Tasks/Tasks"

const account = {
  name: "smartlockfilebucket",
  sas: "se=2020-04-30&sp=rwdlac&sv=2018-03-28&ss=b&srt=sco&sig=dB/uIfHWxC%2Bknj5h3Id13xQYN0sXPwj7ywSLCCul4%2BA%3D"
};
const blobUri = 'https://' + account.name + '.blob.core.windows.net';
const blobService = AzureStorage.createBlobServiceWithSas(blobUri, account.sas);

var YOUR_BLOB_NAME;
class FileUploader extends Component {
  state = {
    fileList: [],
    filesName: []
  }

  getFilesFromChildren = (files) => {
    this.setState({ fileList: files })
  }

  uploadFiles = () => {
    Array.from(this.state.fileList).forEach(file => {
      blobService.createBlockBlobFromBrowserFile('mycontainer',
        file.name,
        file,
        (error, result) => {
          if (error) {
            // Handle blob error
          } else {
            this.setState({ filesName: this.state.filesName.push(file.name) })
            console.log('Upload is successful');
          }
        })
    });
  }

  listFiles = () => {

    blobService.listBlobsSegmented('mycontainer', null, (error, results) => {
      if (error) {
        // Handle list blobs error
      } else {
        var filesName = [];
        YOUR_BLOB_NAME = results.entries[0].name;
        results.entries.forEach(blob => {
          filesName.push(blob.name);
          // console.log(blob.name);
        });
        this.setState({ filesName: filesName })
      }
    });
  }

  downloadFiles = () => {
    var downloadLink = blobService.getUrl('mycontainer', YOUR_BLOB_NAME, account.sas);
    window.open(downloadLink)
  }

  deleteFile = (fileName) => {
    blobService.deleteBlobIfExists('mycontainer', fileName, (error, result) => {
      if (error) {
        // Handle delete blob error
      } else {
        console.log('Blob deleted successfully');
      }
    });
  }

  render() {
    return (
      <div>
        <div>
          {this.listFiles()}
          <Tasks deleteAction={this.deleteFile}
            checkedIndexes={[0, 3]}
            tasksIndexes={[0, 1, 2, 3, 4, 5, 6]}
            tasks={this.state.filesName}
          />
          <FileList handleDrop={this.getFilesFromChildren}></FileList>
        </div>
        <div>
          <Button color="primary" onClick={() => this.uploadFiles()}>Upload</Button>
          <Button color="primary" onClick={() => this.downloadFiles()}>Delete</Button>
        </div>
      </div>
    );
  }
}

export default FileUploader;
