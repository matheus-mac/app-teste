import React, { Component } from "react";
import FileList from "./FileList"
import AzureStorage from "../../scripts/bundle/azure-storage.blob.min"
import TableList from "../Lists/tableList"
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";

const account = {
  name: "smartlockfilebucket",
  sas: "se=2020-04-30&sp=rwdlac&sv=2018-03-28&ss=b&srt=sco&sig=dB/uIfHWxC%2Bknj5h3Id13xQYN0sXPwj7ywSLCCul4%2BA%3D"
};
const blobUri = 'https://' + account.name + '.blob.core.windows.net';
const blobService = AzureStorage.createBlobServiceWithSas(blobUri, account.sas);

class FileUploader extends Component {
  state = {
    toUploadfileList: [],
    uploadedFileList: []
  }

  getFilesFromChildren = (files) => {
    this.setState({ toUploadfileList: files })
  }

  uploadFiles = (files) => {
    var arrayUploadedFiles= this.state.uploadedFileList;
    var countUploadedFiles = 0;
    Array.from(files).forEach(file => {
      blobService.createBlockBlobFromBrowserFile('mycontainer',
        file.name,
        file,
        (error, result) => {
          countUploadedFiles++;
          if (error) {
            // Handle blob error
          } else {
            console.log('Upload is successful');
            arrayUploadedFiles.push(file);
            if (countUploadedFiles===files.length){
              this.setState({uploadedFileList: arrayUploadedFiles});
              this.setState({toUploadfileList: []});
            }
          }
        })
    });
  }

  listFiles = () => {
    blobService.listBlobsSegmented('mycontainer', null, (error, results) => {
      if (error) {
        // Handle list blobs error
      } else {
        this.setState({ uploadedFileList: results.entries })
      }
    });
  }

  downloadFiles = (fileName) => {
    var downloadLink = blobService.getUrl('mycontainer', fileName, account.sas);
    window.open(downloadLink)
  }

  deleteUploadedFile = (fileName) => {
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
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <FileList 
              handleDrop={this.getFilesFromChildren}
              handleDelete={this.getFilesFromChildren}
              handleUpload={this.uploadFiles}
            ></FileList>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            {this.listFiles()}
            <TableList
              items={this.state.uploadedFileList}
              title={"Uploaded Files:"}
              showEditButton={false}
              showDeleteButton={true}
              showViewButton={true}
              deleteAction={this.deleteUploadedFile}
              viewAction={this.downloadFiles}
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default FileUploader;
